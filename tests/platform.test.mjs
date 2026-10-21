import test, { beforeEach, afterEach } from 'node:test';
import assert from 'node:assert/strict';
import { handler } from '../netlify/functions/platform.mjs';
import { gradeAssessment, gradeChallenge, assessmentHistory, publicQuestions } from '../netlify/functions/lib/grading.mjs';
import { preTestQuestions, postTestQuestions } from '../src/data/prePostTestData.js';
import { errorChallengeBank } from '../src/data/errorChallengeData.js';
import { buildReport, formatPercent, studentsCsv } from '../src/lib/report.js';

const originalFetch = globalThis.fetch;
const studentId = '11111111-1111-4111-8111-111111111111';
const otherId = '22222222-2222-4222-8222-222222222222';
const attemptId = '33333333-3333-4333-8333-333333333333';
const profile = { id: studentId, code: 's001', name: 'طالبة اختبار', role: 'student', must_change_password: false };
const answers = questions => Object.fromEntries(questions.map((q, i) => [i, q.correctAnswer]));
let calls;
let upstream;
beforeEach(() => {
  process.env.SUPABASE_URL = 'https://test.supabase.co';
  process.env.SUPABASE_ANON_KEY = 'test-anon';
  process.env.SUPABASE_SERVICE_ROLE_KEY = 'test-service';
  calls = [];
  upstream = path => {
    if (path === '/auth/v1/user') return { id: studentId };
    if (path.startsWith('/rest/v1/profiles?')) return [profile];
    if (path.startsWith('/rest/v1/assessment_attempts?')) return [];
    if (path.startsWith('/rest/v1/challenge_attempts?')) return [];
    throw new Error(`Unexpected request ${path}`);
  };
  globalThis.fetch = async (url, options) => {
    const path = url.replace(process.env.SUPABASE_URL, '');
    calls.push({ path, ...options, data: options.body ? JSON.parse(options.body) : undefined });
    const data = await upstream(path, options);
    return data instanceof Response ? data : new Response(JSON.stringify(data), { status: 200 });
  };
});
afterEach(() => { globalThis.fetch = originalFetch; });
const event = (body, headers = {}) => ({ httpMethod: 'POST', body: JSON.stringify(body), headers: {
  host: 'school.netlify.app', origin: 'https://school.netlify.app', 'content-type': 'application/json', cookie: 'atqin_access=token', ...headers } });
const parse = response => JSON.parse(response.body);

test('Al3+ has 10 electrons and full correct server assessment scores 100', () => {
  const ion = postTestQuestions.find(q => q.question.includes('Al³⁺'));
  assert.ok(ion); assert.match(ion.explanation, /10/);
  assert.equal(gradeAssessment('pre', answers(preTestQuestions), 0).score, 100);
  assert.equal(gradeAssessment('post', answers(postTestQuestions), 24).score, 100);
});
test('grading rejects incomplete, invalid and oversized answers', () => {
  assert.throws(() => gradeAssessment('pre', {}, 1));
  assert.throws(() => gradeAssessment('other', answers(preTestQuestions), 1));
  assert.throws(() => gradeAssessment('pre', { ...answers(preTestQuestions), 0: -1 }, 1));
  assert.throws(() => gradeAssessment('pre', { ...answers(preTestQuestions), 10: 0 }, 1));
  assert.throws(() => gradeAssessment('pre', answers(preTestQuestions), -1));
});
test('challenge correctness comes from server bank', () => {
  const q = errorChallengeBank[0];
  assert.equal(gradeChallenge(q.id, q.options.findIndex(o => o.isCorrect)), true);
  assert.equal(gradeChallenge(q.id, q.options.findIndex(o => !o.isCorrect)), false);
  assert.throws(() => gradeChallenge('unknown', 0));
});
test('public questions do not reveal keys or explanations', () => {
  const serialized = JSON.stringify(publicQuestions());
  assert.ok(!serialized.includes('correctAnswer'));
  assert.ok(!serialized.includes('explanation'));
  assert.equal(publicQuestions().pre.length, 10);
});
test('missing configuration is explicit and blocks login', async () => {
  delete process.env.SUPABASE_SERVICE_ROLE_KEY;
  assert.equal(parse(await handler(event({ action: 'status' }))).configured, false);
  assert.equal((await handler(event({ action: 'login' }))).statusCode, 503);
  assert.equal(calls.length, 0);
});
test('anonymous user cannot read records', async () => {
  const res = await handler(event({ action: 'me' }, { cookie: '' }));
  assert.equal(res.statusCode, 401); assert.equal(calls.length, 0);
});
test('cross-origin and non-JSON requests are blocked before DB access', async () => {
  assert.equal((await handler(event({ action: 'dashboard' }, { origin: 'https://attacker.test' }))).statusCode, 403);
  assert.equal((await handler(event({ action: 'dashboard' }, { 'sec-fetch-site': 'cross-site' }))).statusCode, 403);
  assert.equal((await handler(event({ action: 'dashboard' }, { 'content-type': 'text/plain' }))).statusCode, 415);
  assert.equal(calls.length, 0);
});
test('student cannot request teacher data or create/reset accounts even with forged role', async () => {
  for (const action of ['dashboard', 'create-student', 'reset-password']) {
    assert.equal((await handler(event({ action, role: 'teacher' }))).statusCode, 403);
  }
  assert.ok(calls.every(c => c.path === '/auth/v1/user' || c.path.startsWith('/rest/v1/profiles?id=eq.')));
});
test('student data filters always use authenticated user id, ignoring supplied ids', async () => {
  const res = await handler(event({ action: 'me', studentId: otherId }));
  assert.equal(res.statusCode, 200);
  const reads = calls.filter(c => /assessment_attempts|challenge_attempts/.test(c.path));
  assert.equal(reads.length, 2);
  assert.ok(reads.every(c => c.path.includes(`student_id=eq.${studentId}`) && !c.path.includes(otherId)));
});
test('temporary passwords must be changed before submission', async () => {
  upstream = path => path === '/auth/v1/user' ? { id: studentId } : [{ ...profile, must_change_password: true }];
  assert.equal((await handler(event({ action: 'questions' }))).statusCode, 403);
});
test('post-test requires saved baseline', async () => {
  const res = await handler(event({ action: 'submit-assessment', type: 'post', requestId: attemptId, answers: answers(postTestQuestions), seconds: 20 }));
  assert.equal(res.statusCode, 400); assert.ok(!calls.some(c => c.method === 'POST'));
});
test('server ignores fabricated score and owner on assessment write', async () => {
  upstream = (path, options) => {
    if (path === '/auth/v1/user') return { id: studentId };
    if (path.startsWith('/rest/v1/profiles?')) return [profile];
    if (options.method === 'POST') return null;
    return [];
  };
  const wrong = Object.fromEntries(preTestQuestions.map((q, i) => [i, (q.correctAnswer + 1) % q.options.length]));
  const res = await handler(event({ action: 'submit-assessment', type: 'pre', requestId: attemptId, answers: wrong, seconds: 10, score: 100, student_id: otherId }));
  assert.equal(res.statusCode, 200);
  const write = calls.find(c => c.method === 'POST');
  assert.equal(write.data.student_id, studentId); assert.equal(write.data.result.score, 0);
});
test('retry of the same assessment does not insert twice', async () => {
  const normal = upstream;
  upstream = path => path.includes(`id=eq.${attemptId}`) ? [{ id: attemptId }] : normal(path);
  const res = await handler(event({ action: 'submit-assessment', type: 'pre', requestId: attemptId, answers: answers(preTestQuestions), seconds: 10 }));
  assert.equal(res.statusCode, 200); assert.ok(!calls.some(c => c.method === 'POST'));
});
test('baseline cannot be overwritten by a second attempt', async () => {
  const normal = upstream;
  upstream = path => path.includes('type=eq.pre') ? [{ id: attemptId }] : normal(path);
  const res = await handler(event({ action: 'submit-assessment', type: 'pre', requestId: attemptId, answers: answers(preTestQuestions), seconds: 10 }));
  assert.equal(res.statusCode, 409); assert.ok(!calls.some(c => c.method === 'POST'));
});
test('login creates HttpOnly secure cookies without exposing tokens in response', async () => {
  upstream = () => ({ access_token: 'secret-access', refresh_token: 'secret-refresh', expires_in: 3600 });
  const res = await handler(event({ action: 'login', username: 'S001', password: 'test-password' }));
  assert.equal(res.statusCode, 200);
  assert.equal(calls[0].data.email, 's001@students.atqin.invalid');
  assert.ok(res.multiValueHeaders['Set-Cookie'].every(c => c.includes('HttpOnly') && c.includes('SameSite=Strict') && c.includes('Secure')));
  assert.ok(!res.body.includes('secret-')); assert.equal(res.headers['Cache-Control'], 'no-store');
});
test('invalid JSON and oversized request bodies fail without requests upstream', async () => {
  assert.equal((await handler({ ...event({}), body: '{' })).statusCode, 400);
  assert.equal((await handler({ ...event({}), body: 'x'.repeat(20001) })).statusCode, 413);
  assert.equal(calls.length, 0);
});
test('refresh session and logout use cookies and clear both credentials', async () => {
  upstream = () => ({ access_token: 'new-token', refresh_token: 'new-refresh' });
  const renewed = await handler(event({ action: 'refresh' }, { cookie: 'atqin_refresh=old-refresh' }));
  assert.equal(renewed.statusCode, 200); assert.equal(calls[0].data.refresh_token, 'old-refresh');
  const loggedOut = await handler(event({ action: 'logout' }));
  assert.ok(loggedOut.multiValueHeaders['Set-Cookie'].every(c => c.includes('Max-Age=0')));
});
test('zero baseline, missing scores and empty classes produce honest metrics', () => {
  const empty = buildReport({ students: [], attempts: [], challenges: [] });
  assert.equal(empty.preAverage, null); assert.equal(empty.improvement, null); assert.equal(empty.masteryRate, null);
  const attempts = [
    { student_id: studentId, type: 'pre', result: { score: 0, details: [] }, created_at: '2026-01-01' },
    { student_id: studentId, type: 'post', result: { score: 90, details: [] }, created_at: '2026-01-02' },
    { student_id: otherId, type: 'pre', result: { score: 100, details: [] }, created_at: '2026-01-01' }
  ];
  const report = buildReport({ students: [profile, { ...profile, id: otherId }], attempts, challenges: [] });
  assert.equal(report.preAverage, 50); assert.equal(report.pairedCount, 1); assert.equal(report.improvement, 90);
  assert.equal(report.postCount, 1); assert.equal(report.masteryRate, 100); assert.equal(formatPercent(0), '0%');
});
test('first baseline and latest post-test selected; CSV prevents spreadsheet formulas', () => {
  const rows = [
    { type: 'post', created_at: '2026-01-03', result: { score: 90 } },
    { type: 'pre', created_at: '2026-01-01', result: { score: 0 } },
    { type: 'post', created_at: '2026-01-02', result: { score: 50 } }
  ];
  assert.equal(assessmentHistory(rows).post.score, 90);
  const csv = studentsCsv([{ name: '=HYPERLINK("x")', code: 's001', history: { pre: null, post: null }, completedChallenges: 0 }]);
  assert.ok(csv.includes("'=HYPERLINK")); assert.ok(!studentsCsv([{ name: 'private name', code: 's001', history: {}, completedChallenges: 0 }], true).includes('private name'));
});
test('teacher creates student role only and cleans orphan auth user if profile save fails', async () => {
  upstream = (path, options) => {
    if (path === '/auth/v1/user') return { id: studentId };
    if (path.includes('profiles?id=')) return [{ ...profile, role: 'teacher' }];
    if (path.includes('profiles?code=')) return [];
    if (path === '/auth/v1/admin/users') return { id: otherId };
    if (path === '/rest/v1/profiles') return new Response('{"message":"db unavailable"}', { status: 500 });
    if (options.method === 'DELETE') return null;
    throw new Error(path);
  };
  const res = await handler(event({ action: 'create-student', name: 'اختبار', code: 's002', password: 'temporary-pass', role: 'teacher' }));
  assert.equal(res.statusCode, 502);
  const write = calls.find(c => c.path === '/rest/v1/profiles');
  assert.equal(write.data.role, 'student');
  assert.ok(calls.some(c => c.method === 'DELETE' && c.path.endsWith(otherId)));
});
