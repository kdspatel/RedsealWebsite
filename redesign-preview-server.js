// Redesign preview: serves EVERY redesigned page without Stripe / MongoDB / .env.
// Run:  node redesign-preview-server.js   then open http://localhost:4174/
// Payments, login and account data are stubbed (visitor is "logged out"); this is only for reviewing the design.
const http = require('http'), fs = require('fs'), path = require('path');
const ROOT = __dirname, PORT = Number(process.env.PORT || 4174);
const { getAllTrades, getTradeBySlug } = require('./server/data/trades');
const { getAllSingleLevelExams, getTrainingRequiredLevels } = require('./server/data/singleLevelExams');
const { getAllArticles, getArticleBySlug } = require('./server/data/articles');
const renderTradePage = require('./server/utils/renderTradePage');
const renderArticleIndex = require('./server/utils/renderArticleIndex');
const renderArticlePage = require('./server/utils/renderArticlePage');
const mime = { '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'application/javascript; charset=utf-8', '.json': 'application/json', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.png': 'image/png', '.svg': 'image/svg+xml', '.webp': 'image/webp', '.ico': 'image/x-icon', '.woff2': 'font/woff2' };
const pages = {
  '/': 'views/home.html', '/home': 'views/home.html', '/login': 'views/login.html', '/signup': 'views/signup.html',
  '/forgot-password': 'views/forgot-password.html', '/reset-password': 'views/reset-password.html', '/resend-verification': 'views/resend-verification.html',
  '/check-email': 'views/check-email.html', '/verified': 'views/verified.html', '/success': 'views/success.html', '/auth-message': 'views/auth-message.html',
  '/pricing': 'views/pricing.html', '/mock-test/pricing': 'views/mock-test-pricing.html', '/level-test/pricing': 'views/single-level-exam-pricing.html',
  '/trades': 'views/trades.html', '/practice-tests': 'views/practice-tests.html', '/mock-tests': 'views/mock-tests.html', '/level-tests': 'views/single-level-exams.html',
  '/level-exams': 'views/level-exams.html', '/find-my-trade': 'views/trade-finder.html', '/trade-resources': 'views/trade-resources.html',
  '/faq': 'views/faq.html', '/quiz-demo': 'public/quiz-demo-paid.html', '/quiz-demo-paid': 'public/quiz-demo-paid.html', '/quiz-demo-free': 'public/quiz-demo-free.html', '/contact': 'views/contact.html', '/terms-and-conditions': 'views/terms-and-conditions.html',
  '/exam-journey-support': 'views/exam-journey-support.html', '/provinces': 'views/provinces.html', '/community': 'views/community.html',
  '/account': 'views/account.html', '/404': 'views/404.html', '/500': 'views/500.html', '/maintenance': 'views/maintenance.html'
};
const base = 'https://www.redsealpractice.ca';
const send = (res, code, body, type = 'text/html; charset=utf-8') => { res.writeHead(code, { 'Content-Type': type, 'Cache-Control': 'no-store' }); res.end(body); };
const json = (res, obj) => send(res, 200, JSON.stringify(obj), 'application/json');
const file = (res, rel) => fs.readFile(path.join(ROOT, rel), (e, b) => e ? send(res, 404, '<h2>Page not found</h2><a href="/">Home</a>') : send(res, 200, b, mime[path.extname(rel)] || 'application/octet-stream'));
const handler = (req, res) => {
  let p; try { p = decodeURIComponent(new URL(req.url, 'http://x').pathname).replace(/\/+$/, '') || '/'; } catch { return send(res, 400, 'Bad request'); }
  if (p.split('/').some(s => s === '..')) return send(res, 403, 'Forbidden');
  if (p === '/api/session') return json(res, { loggedIn: false });
  if (p === '/api/my-access') return json(res, { loggedIn: false, access: [], trades: [] });
  if (p === '/api/trades') return json(res, { trades: getAllTrades() });
  if (p === '/api/mock-tests') return json(res, { trades: getAllTrades().map(t => ({ slug: t.slug, title: t.title, price: 2000 })) });
  if (p === '/api/level-tests') return json(res, { exams: getAllSingleLevelExams().map(({ htmlFile, jsFile, ...e }) => e), trainingRequiredLevels: getTrainingRequiredLevels() });
  if (p === '/api/pricing-info') { const s = getTradeBySlug(new URL(req.url, 'http://x').searchParams.get('trade') || ''); return json(res, { tradeTitle: s ? s.title : 'Premium', displayPrice: '$99 CAD', pricingType: 'first' }); }
  if (p === '/api/level-test-pricing') { const q = new URL(req.url, 'http://x').searchParams; const e = getAllSingleLevelExams().find(x => x.trade === q.get('trade') && String(x.level) === q.get('level')); return json(res, { tradeTitle: e ? e.tradeTitle : 'Trade', level: Number(q.get('level')), validDays: 30, alreadyOwned: false }); }
  if (p === '/api/mock-test-info') return json(res, { alreadyOwned: false });
  if (p.startsWith('/api/')) return json(res, {});
  if (pages[p]) return file(res, pages[p]);
  let m;
  // Preview only: open the real (normally login/payment-protected) quiz pages so their design can be reviewed.
  if ((m = p.match(/^\/level-test\/([^/]+)\/level-(\d+)$/))) return file(res, 'server/protected-level-exams/' + m[1] + '/level-' + m[2] + '-quiz-1.html');
  if ((m = p.match(/^\/level-exam-asset\/([^/]+)\/level-(\d+)-quiz-1\.js$/))) return file(res, 'server/protected-level-exams/' + m[1] + '/level-' + m[2] + '-quiz-1.js');
  if ((m = p.match(/^\/mock-test-assets\/([^/]+)\/mock-test-1\.js$/))) return file(res, 'server/protected-mock-tests/' + m[1] + '/mock-test-1.js');
  if ((m = p.match(/^\/mock-test\/([^/]+)$/)) && fs.existsSync(path.join(ROOT, 'server/protected-mock-tests/' + m[1] + '/mock-test-1.html'))) return file(res, 'server/protected-mock-tests/' + m[1] + '/mock-test-1.html');
  if ((m = p.match(/^\/trades\/([^/]+)$/))) { const t = getTradeBySlug(m[1]); if (t) return send(res, 200, renderTradePage(t, base)); }
  if ((m = p.match(/^\/trades\/([^/]+)\/([^/]+)$/))) { const f = 'views/trade-seo-pages/' + m[1] + '/' + m[2] + '.html'; if (fs.existsSync(path.join(ROOT, f))) return file(res, f); }
  if ((m = p.match(/^\/free\/([^/]+)$/)) && fs.existsSync(path.join(ROOT, 'public/free-' + m[1] + '.html'))) return file(res, 'public/free-' + m[1] + '.html');
  if ((m = p.match(/^\/provinces\/([^/]+)$/))) return file(res, 'views/provinces/' + m[1] + '.html');
  if ((m = p.match(/^\/level-exams\/(level-[1-4])$/))) return file(res, 'public/level-exams/' + m[1] + '.html');
  if (p === '/blog') return send(res, 200, renderArticleIndex(getAllArticles()));
  if ((m = p.match(/^\/blog\/([^/]+)$/))) { const a = getArticleBySlug(m[1]); if (a) return send(res, 200, renderArticlePage(a, base)); }
  if (p.startsWith('/public/')) p = p.slice(7);
  return file(res, 'public' + p);
};
module.exports = handler;
if (require.main === module) http.createServer(handler).listen(PORT, '0.0.0.0', () => console.log('Redesign preview: http://localhost:' + PORT + '/   (all pages are linked from the menu; try /pricing, /blog, /trades/plumber)'));