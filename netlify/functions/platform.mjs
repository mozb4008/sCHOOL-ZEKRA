import { gradeAssessment, gradeChallenge, assessmentHistory, publicQuestions } from './lib/grading.mjs';

class ApiError extends Error {
  constructor(status, message) { super(message); this.status = status; }
}
const uuid = value => typeof value === 'string' && /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(value);
const codePattern = /^[a-z][a-z0-9_-]{2,39}$/;
const loginEmail = code => `${code}@students.atqin.invalid`;
const reply = (statusCode, data, cookies = []) => ({ statusCode,
  headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store', 'X-Content-Type-Options': 'nosniff' },
  ...(cookies.length ? { multiValueHeaders: { 'Set-Cookie': cookies } } : {}), body: JSON.stringify(data) });

export async function handler(event) {
  const headers = Object.fromEntries(Object.entries(event.headers || {}).map(([k, v]) => [k.toLowerCase(), v]));
  const secure = !(headers.host || '').match(/^(localhost|127\.0\.0\.1)(:\d+)?$/);
  const cookie = (name, value, maxAge) => `${name}=${encodeURIComponent(value)}; Path=/.netlify/functions/platform; HttpOnly; SameSite=Strict; Max-Age=${maxAge}${secure ? '; Secure' : ''}`;
  const clearCookies = () => [cookie('atqin_access', '', 0), cookie('atqin_refresh', '', 0)];
  const sessionCookies = data => [cookie('atqin_access', data.access_token, data.expires_in || 3600), cookie('atqin_refresh', data.refresh_token, 604800)];
  try {
    if (event.httpMethod !== 'POST') return reply(405, { error: 'استخدمي طلب POST.' });
    // JSON + same origin protects cookie-authenticated mutations from CSRF.
    if (!headers['content-type']?.startsWith('application/json')) throw new ApiError(415, 'صيغة الطلب غير مدعومة.');
    if (headers.origin) {
      let originHost;
      try { originHost = new URL(headers.origin).host; } catch { throw new ApiError(403, 'مصدر الطلب غير مسموح.'); }
      if (originHost !== headers.host) throw new ApiError(403, 'مصدر الطلب غير مسموح.');
    }
    if (headers['sec-fetch-site'] === 'cross-site') throw new ApiError(403, 'مصدر الطلب غير مسموح.');
    if ((event.body || '').length > 20000) throw new ApiError(413, 'حجم الطلب أكبر من المسموح.');
    let body;
    try { body = JSON.parse(event.body || '{}'); } catch { throw new ApiError(400, 'الطلب غير صالح.'); }
    if (!body || typeof body !== 'object' || Array.isArray(body)) throw new ApiError(400, 'الطلب غير صالح.');
    const { action } = body;
    const url = process.env.SUPABASE_URL?.trim().replace(/\/$/, '');
    const anon = process.env.SUPABASE_ANON_KEY?.trim();
    const service = process.env.SUPABASE_SERVICE_ROLE_KEY?.trim();
    const configured = !!(url && anon && service);
    const missing = [['SUPABASE_URL', url], ['SUPABASE_ANON_KEY', anon], ['SUPABASE_SERVICE_ROLE_KEY', service]]
      .filter(([, value]) => !value).map(([name]) => name);
    // Expose variable names only; credentials never leave the server.
    if (action === 'status') return reply(200, { configured, missing });
    if (!configured) throw new ApiError(503, 'المنصة بانتظار تفعيل قاعدة البيانات من مسؤول المنصة.');
    const request = async (path, { method = 'GET', data, token = service, admin = true, prefer } = {}) => {
      const res = await fetch(`${url}${path}`, { method, signal: AbortSignal.timeout(12000), headers: {
        apikey: admin ? service : anon, Authorization: `Bearer ${token}`, 'Content-Type': 'application/json',
        ...(prefer ? { Prefer: prefer } : {}) }, ...(data === undefined ? {} : { body: JSON.stringify(data) }) });
      const result = await res.json().catch(() => null);
      if (!res.ok) {
        if (res.status === 429) throw new ApiError(429, 'محاولات كثيرة. انتظري قليلًا ثم أعيدي المحاولة.');
        if (res.status === 401 || res.status === 403) throw new ApiError(401, 'انتهت الجلسة أو بيانات الدخول غير صحيحة.');
        if (result?.code === '23505' || result?.code === 'email_exists') throw new ApiError(409, 'السجل موجود مسبقًا.');
        if (path.includes('/token')) throw new ApiError(401, 'اسم المستخدم أو كلمة المرور غير صحيحة.');
        if (res.status === 422) throw new ApiError(400, 'تعذّر حفظ الحساب. تحققي من البيانات وقوة كلمة المرور.');
        throw new ApiError(502, 'تعذّر الاتصال بقاعدة البيانات. تحققي من الإعداد ثم حاولي مجددًا.');
      }
      return result;
    };
    const allRows = async (table, filter = '') => {
      const rows = [];
      for (let offset = 0; ; offset += 500) {
        const page = await request(`/rest/v1/${table}?select=*&order=created_at.asc,id.asc&limit=500&offset=${offset}${filter ? `&${filter}` : ''}`);
        rows.push(...page);
        if (page.length < 500) return rows;
      }
    };
    const cookies = Object.fromEntries((headers.cookie || '').split(';').filter(v => v.includes('=')).map(v => {
      const i = v.indexOf('='); return [v.slice(0, i).trim(), decodeURIComponent(v.slice(i + 1))];
    }));
    if (action === 'login') {
      const username = String(body.username || '').trim().toLowerCase();
      if ((!codePattern.test(username) && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(username)) || typeof body.password !== 'string' || body.password.length > 128) throw new ApiError(400, 'أدخلي اسم المستخدم وكلمة المرور.');
      const data = await request('/auth/v1/token?grant_type=password', { method: 'POST', admin: false, token: anon,
        data: { email: username.includes('@') ? username : loginEmail(username), password: body.password } });
      return reply(200, { ok: true }, sessionCookies(data));
    }
    if (action === 'refresh') {
      if (!cookies.atqin_refresh) return reply(401, { error: 'سجّلي الدخول مجددًا.' }, clearCookies());
      const data = await request('/auth/v1/token?grant_type=refresh_token', { method: 'POST', admin: false, token: anon,
        data: { refresh_token: cookies.atqin_refresh } });
      return reply(200, { ok: true }, sessionCookies(data));
    }
    if (action === 'logout') {
      if (cookies.atqin_access) await request('/auth/v1/logout', { method: 'POST', token: cookies.atqin_access, admin: false }).catch(() => {});
      return reply(200, { ok: true }, clearCookies());
    }
    if (!cookies.atqin_access) throw new ApiError(401, 'سجّلي الدخول أولًا.');
    const user = await request('/auth/v1/user', { token: cookies.atqin_access, admin: false });
    const [profile] = await request(`/rest/v1/profiles?id=eq.${user.id}&select=*`);
    if (!profile) throw new ApiError(403, 'الحساب غير مفعّل. تواصلي مع المعلمة.');
    const ownData = async () => {
      const [attempts, challenges] = await Promise.all([
        allRows('assessment_attempts', `student_id=eq.${user.id}`),
        allRows('challenge_attempts', `student_id=eq.${user.id}`)
      ]);
      return { profile, attempts, history: assessmentHistory(attempts), completedIds: [...new Set(challenges.filter(c => c.correct).map(c => c.challenge_id))] };
    };
    if (action === 'me') return reply(200, await ownData());
    if (action === 'change-password') {
      if (typeof body.password !== 'string' || body.password.length < 10 || body.password.length > 128) throw new ApiError(400, 'استخدمي كلمة مرور من 10 أحرف على الأقل.');
      await request('/auth/v1/user', { method: 'PUT', token: cookies.atqin_access, admin: false, data: { password: body.password } });
      await request(`/rest/v1/profiles?id=eq.${user.id}`, { method: 'PATCH', data: { must_change_password: false } });
      return reply(200, { ok: true });
    }
    if (profile.must_change_password) throw new ApiError(403, 'غيّري كلمة المرور المؤقتة أولًا.');
    if (action === 'questions') return reply(200, publicQuestions());
    if (action === 'submit-assessment' || action === 'challenge') {
      if (profile.role !== 'student') throw new ApiError(403, 'التسجيل مخصص لحسابات الطالبات.');
      if (!uuid(body.requestId)) throw new ApiError(400, 'معرّف المحاولة غير صحيح.');
      if (action === 'submit-assessment') {
        let result;
        try { result = gradeAssessment(body.type, body.answers, body.seconds); } catch (e) { throw new ApiError(400, e.message); }
        const existing = await request(`/rest/v1/assessment_attempts?id=eq.${body.requestId}&student_id=eq.${user.id}&select=id`);
        if (!existing.length) {
          const baseline = await request(`/rest/v1/assessment_attempts?student_id=eq.${user.id}&type=eq.pre&select=id`);
          if (body.type === 'post' && !baseline.length) throw new ApiError(400, 'أكملي الاختبار القبلي أولًا.');
          if (body.type === 'pre' && baseline.length) throw new ApiError(409, 'الاختبار القبلي محفوظ مسبقًا حفاظًا على دقة قياس الأثر.');
          await request('/rest/v1/assessment_attempts', { method: 'POST', data: { id: body.requestId, student_id: user.id, type: body.type, result } });
        }
      } else {
        let correct;
        try { correct = gradeChallenge(body.challengeId, body.choice); } catch (e) { throw new ApiError(400, e.message); }
        await request('/rest/v1/challenge_attempts?on_conflict=id', { method: 'POST', prefer: 'resolution=ignore-duplicates',
          data: { id: body.requestId, student_id: user.id, challenge_id: body.challengeId, correct } });
      }
      return reply(200, await ownData());
    }
    if (profile.role !== 'teacher') throw new ApiError(403, 'هذه الصفحة متاحة للمعلمة فقط.');
    if (action === 'dashboard') {
      const [profiles, attempts, challenges] = await Promise.all([allRows('profiles'), allRows('assessment_attempts'), allRows('challenge_attempts')]);
      return reply(200, { students: profiles.filter(p => p.role === 'student'), attempts, challenges });
    }
    if (action === 'create-student') {
      const name = String(body.name || '').trim();
      const code = String(body.code || '').trim().toLowerCase();
      if (name.length < 2 || name.length > 120 || !codePattern.test(code)) throw new ApiError(400, 'أدخلي اسمًا ورمزًا بالإنجليزية من 3 إلى 40 حرفًا يبدأ بحرف.');
      if (typeof body.password !== 'string' || body.password.length < 10 || body.password.length > 128) throw new ApiError(400, 'كلمة المرور المؤقتة يجب أن تكون 10 أحرف على الأقل.');
      const duplicate = await request(`/rest/v1/profiles?code=eq.${encodeURIComponent(code)}&select=id`);
      if (duplicate.length) throw new ApiError(409, 'رمز الطالبة مستخدم مسبقًا.');
      const created = await request('/auth/v1/admin/users', { method: 'POST', data: { email: loginEmail(code), password: body.password, email_confirm: true } });
      try {
        await request('/rest/v1/profiles', { method: 'POST', data: { id: created.id, name, code, role: 'student', must_change_password: true } });
      } catch (e) {
        await request(`/auth/v1/admin/users/${created.id}`, { method: 'DELETE' }).catch(() => {});
        throw e;
      }
      return reply(201, { ok: true });
    }
    if (action === 'reset-password') {
      if (!uuid(body.studentId) || typeof body.password !== 'string' || body.password.length < 10 || body.password.length > 128) throw new ApiError(400, 'بيانات استعادة الحساب غير صحيحة.');
      const [student] = await request(`/rest/v1/profiles?id=eq.${body.studentId}&role=eq.student&select=id`);
      if (!student) throw new ApiError(404, 'لم يتم العثور على الطالبة.');
      await request(`/auth/v1/admin/users/${student.id}`, { method: 'PUT', data: { password: body.password } });
      await request(`/rest/v1/profiles?id=eq.${student.id}`, { method: 'PATCH', data: { must_change_password: true } });
      return reply(200, { ok: true });
    }
    throw new ApiError(400, 'العملية غير معروفة.');
  } catch (error) {
    return reply(error.status || 500, { error: error.status ? error.message : 'تعذّر إكمال العملية. حاولي مجددًا.' });
  }
}
