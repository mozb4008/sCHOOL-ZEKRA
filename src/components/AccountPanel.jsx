import React, { useState } from 'react';
import { usePlatform, api, Notice, fieldClass, buttonClass, downloadJson } from '../lib/platform';
import { errorChallengeBank } from '../data/errorChallengeData';

export function LoginPanel() {
  const { login, configured, loading, error: connectionError, retry } = usePlatform();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const submit = async e => {
    e.preventDefault(); setBusy(true); setError('');
    try { await login(username, password); } catch (e) { setError(e.message); } finally { setBusy(false); }
  };
  const backupLegacy = () => {
    const data = {};
    for (const key of ['atqin_students_list', 'atqin_assessment_results', 'atqin_completed_challenges']) {
      try { const value = localStorage.getItem(key); if (value) data[key] = JSON.parse(value); } catch { /* preserve other readable entries */ }
    }
    downloadJson('atqin-legacy-backup.json', { exportedAt: new Date().toISOString(), source: 'legacy-browser', data });
  };
  return <section className="max-w-lg mx-auto my-10 px-4 space-y-5">
    <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-5">
      <div><p className="text-moe-green font-bold text-sm">أهلًا بكِ في أتقن مهارتي</p><h1 className="text-2xl font-black text-moe-navy mt-2">دخول الطالبات والمعلمة</h1><p className="text-sm text-slate-600 mt-3 leading-7">ادخلي بالرمز وكلمة المرور اللذين زودتكِ بهما المعلمة، لتُحفظ نتائجكِ ويظهر لكِ مستواكِ من أي جهاز.</p></div>
      {loading ? <Notice>جارٍ الاتصال بالمنصة…</Notice> : connectionError ? <Notice error>{connectionError} <button className="underline" onClick={retry}>إعادة المحاولة</button></Notice> : !configured ? <Notice>المنصة بانتظار تفعيل قاعدة البيانات. يمكنكِ تصفح الشرح، وسيُتاح الدخول بعد إكمال الإعداد.</Notice> : null}
      <form onSubmit={submit} className="space-y-4">
        <label className="block text-sm font-bold">اسم المستخدم أو بريد المعلمة<input autoComplete="username" dir="ltr" className={`${fieldClass} mt-2`} value={username} onChange={e => setUsername(e.target.value)} required maxLength={160} placeholder="s001" /></label>
        <label className="block text-sm font-bold">كلمة المرور<input type="password" autoComplete="current-password" dir="ltr" className={`${fieldClass} mt-2`} value={password} onChange={e => setPassword(e.target.value)} required maxLength={128} /></label>
        {error && <Notice error>{error}</Notice>}
        <button className={`${buttonClass} w-full`} disabled={busy || loading || !configured}>{busy ? 'جارٍ الدخول…' : 'تسجيل الدخول'}</button>
      </form>
      <p className="text-xs leading-6 text-slate-500">نسيتِ كلمة المرور؟ اطلبي من المعلمة إصدار كلمة مرور مؤقتة جديدة. الحسابات تُنشأ بواسطة المعلمة.</p>
    </div>
    <details className="text-xs text-slate-500 leading-7"><summary className="cursor-pointer">لديكِ بيانات من النسخة السابقة؟</summary><p>البيانات القديمة تخص هذا المتصفح ولا تحدد هوية الطالبة. احتفظي بنسخة لمراجعتها مع المعلمة قبل الانتقال. لا تُدمج تلقائيًا مع النتائج الجديدة.</p><button onClick={backupLegacy} className="underline font-bold">تنزيل نسخة من البيانات المحلية القديمة</button></details>
  </section>;
}

export function PasswordPanel({ required = false, onDone }) {
  const { refresh } = usePlatform();
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const submit = async e => {
    e.preventDefault(); setError(''); setSuccess(false);
    if (password !== confirm) { setError('كلمتا المرور غير متطابقتين.'); return; }
    setBusy(true);
    try { await api('change-password', { password }); await refresh(); setPassword(''); setConfirm(''); setSuccess(true); onDone?.(); }
    catch (e) { setError(e.message); } finally { setBusy(false); }
  };
  return <form onSubmit={submit} className="bg-white border border-slate-200 rounded-2xl p-6 space-y-4 max-w-lg mx-auto my-6">
    <h2 className="font-black text-lg text-moe-navy">{required ? 'اختاري كلمة مرور خاصة بكِ' : 'تغيير كلمة المرور'}</h2>
    <p className="text-sm text-slate-600 leading-7">{required ? 'هذه أول زيارة أو أعادت المعلمة تهيئة حسابكِ. غيّري كلمة المرور المؤقتة قبل المتابعة.' : 'استخدمي كلمة مرور طويلة يصعب تخمينها ولا تشاركيها مع الآخرين.'}</p>
    <label className="block text-sm">كلمة المرور الجديدة<input type="password" dir="ltr" autoComplete="new-password" required minLength={10} maxLength={128} value={password} onChange={e => setPassword(e.target.value)} className={`${fieldClass} mt-2`} /></label>
    <label className="block text-sm">تأكيد كلمة المرور<input type="password" dir="ltr" autoComplete="new-password" required minLength={10} maxLength={128} value={confirm} onChange={e => setConfirm(e.target.value)} className={`${fieldClass} mt-2`} /></label>
    {error && <Notice error>{error}</Notice>}{success && <Notice>تم تغيير كلمة المرور.</Notice>}
    <button className={buttonClass} disabled={busy}>{busy ? 'جارٍ الحفظ…' : 'حفظ كلمة المرور'}</button>
  </form>;
}

export function StudentProgress({ onNavigate }) {
  const { account } = usePlatform();
  const { profile, history, completedIds, attempts } = account;
  const score = history.post?.score;
  const needsWork = history.post?.details.filter(d => !d.isCorrect) || [];
  return <section className="max-w-5xl mx-auto p-4 sm:p-8 space-y-6">
    <div><p className="text-sm text-moe-green font-bold">مساحتكِ الخاصة</p><h1 className="text-2xl font-black text-moe-navy mt-2">أهلًا {profile.name}</h1><p className="text-sm text-slate-500 mt-2">نتائجكِ محفوظة في حسابكِ، وتتابعها معلمتكِ لمساعدتكِ على الإتقان.</p></div>
    <div className="grid sm:grid-cols-3 gap-4">{[['الاختبار القبلي', history.pre?.score == null ? 'لم يُنجز' : `${history.pre.score}%`], ['الاختبار البعدي', score == null ? 'لم يُنجز' : `${score}%`], ['خطأ نودّعه', `${completedIds.length} / ${errorChallengeBank.length}`]].map(([label, value]) => <div key={label} className="bg-white rounded-2xl border border-slate-200 p-6"><p className="text-sm text-slate-600">{label}</p><p className="text-2xl font-black text-moe-navy mt-3"><bdi dir={label === 'خطأ نودّعه' ? 'ltr' : 'auto'}>{value}</bdi></p></div>)}</div>
    <Notice>{!history.pre ? 'ابدئي بالاختبار القبلي لتعرفي نقطة انطلاقكِ.' : score == null ? 'أكملي تدريب الأيونات وتحديات خطأ نودّعه، ثم طبّقي الاختبار البعدي.' : score >= 85 ? 'أحسنتِ، حققتِ معيار الإتقان 85% أو أكثر.' : 'أنتِ تتقدمين. راجعي المهارات التالية وجرّبي التدريب مجددًا.'}{history.pre && history.post && <p>التغير عن الاختبار القبلي: {history.post.score - history.pre.score} نقطة مئوية.</p>}</Notice>
    <div className="flex flex-wrap gap-3"><button className={buttonClass} onClick={() => onNavigate('assessment')}>الاختبار القبلي والبعدي</button><button className={buttonClass} onClick={() => onNavigate('ions')}>تدريب الأيونات</button><button className={buttonClass} onClick={() => onNavigate('challenge')}>خطأ نودّعه</button></div>
    {needsWork.length > 0 && <div className="bg-white rounded-2xl p-6 border border-slate-200"><h2 className="font-black mb-3">مهارات تحتاج إلى تعزيز</h2><ul className="list-disc pr-5 space-y-2 text-sm">{needsWork.map(d => <li key={d.questionId}>{d.skill}<p className="text-slate-500 leading-7">{d.explanation}</p></li>)}</ul></div>}
    <div className="bg-white rounded-2xl border p-6"><h2 className="font-black mb-4">سجل محاولاتي</h2>{attempts.length ? <ul className="space-y-3 text-sm">{[...attempts].reverse().map(a => <li key={a.id} className="flex flex-wrap justify-between gap-2 border-b pb-3"><span>{a.type === 'pre' ? 'اختبار قبلي' : 'اختبار بعدي'} — {new Date(a.created_at).toLocaleString('ar-SA', { timeZone: 'Asia/Riyadh' })}</span><strong>{a.result.score}%</strong></li>)}</ul> : <p className="text-sm text-slate-500">لم تُحفظ محاولات بعد.</p>}</div>
    <PasswordPanel />
  </section>;
}
