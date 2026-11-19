const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const session = require('express-session');
const MongoStore = require('connect-mongo').default;
const path = require('path');
const fs = require('fs');

const connectDB = require('./config/db');
const User = require('./models/User');
const { cleanupExpiredUnverifiedUsers, prepareUnverifiedAccountCleanup } = require('./services/unverifiedUserCleanup');

const authRoutes = require('./routes/auth');
const paymentRoutes = require('./routes/payments');
const quizRoutes = require('./routes/quiz');
const progressRoutes = require('./routes/progress');
const mockTestRoutes = require('./routes/mockTests');
const singleLevelExamRoutes = require('./routes/singleLevelExams');
const { getAllTrades, getTradeBySlug } = require('./data/trades');
const { getAllArticles, getArticleBySlug } = require('./data/articles');
const renderTradePage = require('./utils/renderTradePage');
const renderArticlePage = require('./utils/renderArticlePage');
const renderArticleIndex = require('./utils/renderArticleIndex');
const provinces = require('./data/provinces');

const requireAuth = require('./middleware/requireAuth');
const { applySecurity, globalLimiter, authLimiter, contactLimiter, requestSanitizer } = require('./middleware/security');
const { protectLevelHtml, protectLevelAsset } = require('./middleware/protectLevelFiles');
const { verifyRecaptcha } = require('./middleware/recaptcha');

const app = express();
app.set('trust proxy', 1);
const PORT = Number(process.env.PORT) || 3000;
const HOST = '0.0.0.0';

applySecurity(app);
app.use(globalLimiter);

// Prevent browsers from keeping stale HTML, CSS, or JavaScript after a deployment.
const staticOptions = {
  etag: true,
  maxAge: 0,
  setHeaders: (res, filePath) => {
    if (/\.(?:html|css|js)$/i.test(filePath)) {
      res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
      res.setHeader('Pragma', 'no-cache');
      res.setHeader('Expires', '0');
      return;
    }

    if (/\.(?:png|jpg|jpeg|webp|svg|ico)$/i.test(filePath)) {
      res.setHeader('Cache-Control', 'public, max-age=86400');
    }
  }
};

// HTML pages served with res.sendFile() do not pass through express.static().
app.use((req, res, next) => {
  if (req.method === 'GET' && req.accepts(['html', 'json']) === 'html') {
    res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
    res.setHeader('Pragma', 'no-cache');
    res.setHeader('Expires', '0');
  }
  next();
});

connectDB()
  .then(async () => {
    await prepareUnverifiedAccountCleanup();
    const cleanupTimer = setInterval(() => {
      cleanupExpiredUnverifiedUsers().catch(err => console.error('Unverified account cleanup failed:', err));
    }, 60 * 60 * 1000);
    cleanupTimer.unref();
  })
  .catch(err => {
    console.error('MongoDB startup failed:', err);
    process.exit(1);
  });



function getSessionUserId(req) {
  return req.session.userId || req.session.user || req.session.user_id || null;
}

app.use((req, res, next) => {
  if (req.originalUrl === '/webhook') return next();

  express.urlencoded({ extended: true })(req, res, () => {
    express.json()(req, res, next);
  });
});

app.use(requestSanitizer);

app.use(
  session({
    secret: process.env.SESSION_SECRET || 'change-this-secret',
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl: process.env.MONGODB_URI
    }),
    cookie: {
      httpOnly: true,
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production',
      maxAge: 1000 * 60 * 60 * 24 * 7
    }
  })
);


/* ---------------- CLEAN PUBLIC URL ROUTES ---------------- */
const freePracticePages = new Set([
  "architectural-sheet-metal-worker",
  "automotive-technician",
  "baker",
  "bricklayer",
  "cabinet-maker",
  "carpentry",
  "concrete-finisher",
  "construction-electrician",
  "drywall-finisher-plasterer",
  "electrician-industrial",
  "gasfitter-a",
  "gasfitter-b",
  "heavy-duty-equipment-technician",
  "industrial-mechanic-millwright",
  "meatcutter",
  "motorcycle-technician",
  "painter-and-decorator",
  "plumber",
  "refrigeration-air-conditioning",
  "roofer",
  "welder"
]);

app.get(/^\/free-([a-z0-9-]+)\.html$/, (req, res) => {
  res.redirect(301, `/free/${req.params[0]}`);
});

app.get(/^\/public\/free-([a-z0-9-]+)\.html$/, (req, res) => {
  res.redirect(301, `/free/${req.params[0]}`);
});

app.get('/free/:trade', requireAuth, (req, res, next) => {
  const trade = req.params.trade;
  if (!freePracticePages.has(trade)) return next();
  res.sendFile(path.join(__dirname, '../public', `free-${trade}.html`));
});

app.get('/blog/:slug.html', (req, res) => {
  res.redirect(301, `/blog/${req.params.slug}`);
});

app.get('/api/articles', (_req, res) => {
  res.json({ articles: getAllArticles().map(({ content, ...article }) => article) });
});

app.get('/blog/:slug', (req, res, next) => {
  const article = getArticleBySlug(req.params.slug);
  if (!article) return next();
  res.type('html').send(renderArticlePage(article, process.env.BASE_URL || 'https://www.redsealpractice.ca'));
});

const levelExamPages = new Set([
  "level-1",
  "level-2",
  "level-3",
  "level-4"
]);

app.get('/level-exams/:slug.html', (req, res) => {
  res.redirect(301, `/level-exams/${req.params.slug}`);
});

app.get('/level-quiz', (_req, res) => {
  res.redirect(301, '/level-tests');
});

app.get('/level-exams/:slug', (req, res, next) => {
  const slug = req.params.slug;
  if (!levelExamPages.has(slug)) return next();
  res.sendFile(path.join(__dirname, '../public/level-exams', `${slug}.html`));
});


app.get('/trades/:slug.html', (req, res) => {
  res.redirect(301, `/trades/${req.params.slug}`);
});

app.get('/trade-resources', (_req, res) => {
  res.redirect(301, '/trades');
});

app.get('/api/trades', (req, res) => {
  res.json({ trades: getAllTrades() });
});

app.get('/api/trades/:slug', (req, res, next) => {
  const trade = getTradeBySlug(req.params.slug);
  if (!trade) return next();
  res.json({ trade });
});

app.get('/trades/:slug/:resource', (req, res, next) => {
  const trade = getTradeBySlug(req.params.slug);
  if (!trade) return next();

  const resource = String(req.params.resource || '').toLowerCase();
  const allowed = new Set([
    'mock-test',
    'study-guide',
    'exam-preparation',
    'red-seal-certification',
    'passing-score'
  ]);
  const isLevelPage = /^level-[1-4]-exam-questions$/.test(resource);
  if (!allowed.has(resource) && !isLevelPage) return next();

  const filePath = path.join(__dirname, '../views/trade-seo-pages', trade.slug, `${resource}.html`);
  if (!fs.existsSync(filePath)) return next();
  return res.sendFile(filePath);
});

app.get('/trades/:slug', (req, res, next) => {
  const trade = getTradeBySlug(req.params.slug);
  if (!trade) return next();
  res.type('html').send(renderTradePage(trade, process.env.BASE_URL || 'https://www.redsealpractice.ca'));
});

/* ---------------- PUBLIC FILES ---------------- */
app.use(singleLevelExamRoutes);

app.use('/private/levels', protectLevelHtml);
app.get('/js/extracted/:file', protectLevelAsset);

app.use('/public', express.static(path.join(__dirname, '../public'), staticOptions));
app.use(express.static(path.join(__dirname, '../public'), staticOptions));

/* ---------------- PRIVATE FILES ---------------- */
app.use('/private', requireAuth, express.static(path.join(__dirname, '../private')));

/* ---------------- SESSION STATUS FOR NAVBAR ---------------- */
app.get('/api/session', async (req, res) => {
  try {
    const sessionUserId = getSessionUserId(req);

    if (!sessionUserId) {
      return res.json({
        loggedIn: false,
        user: null
      });
    }

    const user = await User.findById(sessionUserId).select('name email province marketingConsent');

    if (!user) {
      return res.json({
        loggedIn: false,
        user: null
      });
    }

    res.json({
      loggedIn: true,
      user: {
        name: user.name,
        email: user.email,
        province: user.province || 'British Columbia',
        marketingConsent: Boolean(user.marketingConsent)
      }
    });
  } catch (err) {
    console.error('Session API error:', err);
    res.json({
      loggedIn: false,
      user: null
    });
  }
});


app.post('/api/profile/province', async (req, res) => {
  try {
    const sessionUserId = getSessionUserId(req);
    if (!sessionUserId) return res.status(401).json({ ok: false, error: 'Sign in required.' });
    const provinces = new Set(['Alberta','British Columbia','Manitoba','New Brunswick','Newfoundland and Labrador','Northwest Territories','Nova Scotia','Nunavut','Ontario','Prince Edward Island','Quebec','Saskatchewan','Yukon']);
    const province = String(req.body.province || '').trim();
    if (!provinces.has(province)) return res.status(400).json({ ok: false, error: 'Choose a valid province or territory.' });
    await User.findByIdAndUpdate(sessionUserId, { province });
    return res.json({ ok: true, province });
  } catch (err) {
    console.error('Province update error:', err);
    return res.status(500).json({ ok: false, error: 'Could not update province.' });
  }
});

/* ---------------- PAGE ROUTES ---------------- */
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/home.html'));
});

app.get('/home', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/home.html'));
});



app.get('/provinces', (req, res) => res.sendFile(path.join(__dirname, '../views/provinces.html')));
app.get('/province', (_req, res) => res.redirect(301, '/provinces'));
app.get('/province/:slug', (req, res) => res.redirect(301, `/provinces/${req.params.slug}`));
app.get('/provinces/:slug', (req, res, next) => {
  if (!provinces.some(item => item.slug === req.params.slug)) return next();
  return res.sendFile(path.join(__dirname, '../views/provinces', `${req.params.slug}.html`));
});
app.get('/find-my-trade', (req, res) => res.sendFile(path.join(__dirname, '../views/trade-finder.html')));
app.get('/community', (req, res) => res.sendFile(path.join(__dirname, '../views/community.html')));

app.get('/exam-journey-support', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/exam-journey-support.html'));
});

app.get('/exam-journey-support.html', (req, res) => {
  res.redirect(301, '/exam-journey-support');
});

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/contact.html'));
});

app.get('/contact.html', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/contact.html'));
});

app.get('/terms-and-conditions', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/terms-and-conditions.html'));
});


app.get('/practice-tests', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/practice-tests.html'));
});

app.get('/trades', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/trades.html'));
});


app.get('/level-exams', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/level-exams.html'));
});

app.get('/level-exams.html', (req, res) => {
  res.redirect(301, '/level-exams');
});

app.get('/faq', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/faq.html'));
});

app.get('/faq.html', (req, res) => {
  res.redirect(301, '/faq');
});

app.get('/blog', (_req, res) => {
  res.type('html').send(renderArticleIndex(getAllArticles()));
});

app.get('/study-guides', (req, res) => {
  res.redirect(301, '/blog');
});

['/write-article','/submit-article','/my-articles','/article-guidelines','/community-articles'].forEach(route => {
  app.get(route, (_req, res) => res.redirect(301, '/blog'));
});


app.get('/maintenance', (req, res) => {
  res.status(503).sendFile(path.join(__dirname, '../views/maintenance.html'));
});

app.get('/404', (req, res) => {
  res.status(404).sendFile(path.join(__dirname, '../views/404.html'));
});

app.get('/500', (req, res) => {
  res.status(500).sendFile(path.join(__dirname, '../views/500.html'));
});

app.get('/account', requireAuth, (req, res) => {
  res.sendFile(path.join(__dirname, '../views/account.html'));
});

/* ---------------- CONTACT FORM API ---------------- */
app.post('/api/contact', contactLimiter, verifyRecaptcha({ mode: 'json' }), async (req, res) => {
  try {
    const { name, email, topic, trade, message } = req.body;

    if (!name || !email || !topic || !message) {
      return res.status(400).json({
        error: 'Name, email, topic, and message are required.'
      });
    }

    const emailText = `
New website contact message

Name: ${name}
Email: ${email}
Topic: ${topic}
Trade: ${trade || 'Not provided'}

Message:
${message}
`;

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: 'Red Seal Practice <support@redsealpractice.ca>',
        to: ['support@redsealpractice.ca'],
        reply_to: email,
        subject: `New Contact Message - ${topic}`,
        text: emailText
      })
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('Contact email error:', data);
      return res.status(500).json({
        error: 'Email could not be sent.'
      });
    }

    res.json({
      success: true,
      message: 'Message sent successfully.'
    });
  } catch (err) {
    console.error('Contact API error:', err);
    res.status(500).json({
      error: 'Server error sending message.'
    });
  }
});



async function sendPrivateSubmission({ subject, replyTo, text }) {
  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from: process.env.EMAIL_FROM || 'Red Seal Practice <support@redsealpractice.ca>',
      to: [process.env.COMPANY_EMAIL || process.env.ADMIN_EMAIL || 'support@redsealpractice.ca'],
      reply_to: replyTo,
      subject,
      text
    })
  });
  if (!response.ok) throw new Error(`Email service returned ${response.status}`);
}

app.post('/api/reviews', contactLimiter, verifyRecaptcha({ mode: 'json' }), async (req, res) => {
  try {
    const { name, email, trade, province, rating, message, permission } = req.body;
    if (!name || !email || !trade || !province || !rating || !message) return res.status(400).json({ error: 'Please complete every required review field.' });
    await sendPrivateSubmission({ subject: `Private Review Submission - ${trade} - ${rating}/5`, replyTo: email, text: `PRIVATE REVIEW - NOT AUTO-PUBLISHED

Name: ${name}
Email: ${email}
Trade: ${trade}
Province: ${province}
Rating: ${rating}/5
Permission to contact about publishing: ${permission === 'yes' ? 'Yes' : 'No'}

Review:
${message}` });
    return res.json({ success: true, message: 'Thank you. Your review was sent privately for consideration.' });
  } catch (err) { console.error('Review submission error:', err); return res.status(500).json({ error: 'Your review could not be sent right now.' }); }
});

app.post('/api/community-questions', contactLimiter, verifyRecaptcha({ mode: 'json' }), async (req, res) => {
  try {
    const { name, email, trade, province, topic, message } = req.body;
    if (!name || !email || !topic || !message) return res.status(400).json({ error: 'Please complete every required question field.' });
    await sendPrivateSubmission({ subject: `Community Question - ${topic}`, replyTo: email, text: `PRIVATE COMMUNITY QUESTION - NOT AUTO-PUBLISHED

Name: ${name}
Email: ${email}
Trade: ${trade || 'Not provided'}
Province: ${province || 'Not provided'}
Topic: ${topic}

Question:
${message}` });
    return res.json({ success: true, message: 'Your question was sent. We will review it and reply by email when possible.' });
  } catch (err) { console.error('Community question error:', err); return res.status(500).json({ error: 'Your question could not be sent right now.' }); }
});

/* ---------------- ACCOUNT API ---------------- */
app.get('/api/account', requireAuth, async (req, res) => {
  try {
    const sessionUserId = getSessionUserId(req);
    const user = await User.findById(sessionUserId);

    if (!user) {
      return res.status(401).json({ error: 'Not logged in' });
    }

    const now = new Date();
    const activeTrades = (user.tradeAccess || []).filter(
      t => t.expiresAt && new Date(t.expiresAt) > now
    );

    res.json({
      email: user.email,
      name: user.name,
      province: user.province || 'British Columbia',
      trades: activeTrades,
      lastLoginAt: user.lastLoginAt || null,
      lastLoginIp: user.lastLoginIp || null,
      lastLoginUserAgent: user.lastLoginUserAgent || null
    });
  } catch (err) {
    console.error('Account API error:', err);
    res.status(500).json({ error: 'Could not load account info' });
  }
});

app.get('/api/my-access', requireAuth, async (req, res) => {
  try {
    const sessionUserId = getSessionUserId(req);
    const user = await User.findById(sessionUserId);

    if (!user) {
      return res.status(401).json({ error: 'Not logged in' });
    }

    const now = new Date();

    const activeTrades = (user.tradeAccess || []).filter(
      t => t.expiresAt && new Date(t.expiresAt) > now
    );

    res.json({
      trades: activeTrades
    });
  } catch (err) {
    console.error('Trade access API error:', err);
    res.status(500).json({ error: 'Could not load trade access' });
  }
});

/* ---------------- PRIVATE TRADE ROUTES ---------------- */
const directTradeRoutes = {
  '/architectural-sheet-metal-worker': 'architectural-sheet-metal-worker.html',
  '/automotive-technician': 'automotive-technician.html',
  '/baker': 'baker.html',
  '/bricklayer': 'bricklayer.html',
  '/cabinet-maker': 'cabinet-maker.html',
  '/carpentry': 'carpentry.html',
  '/concrete-finisher': 'concrete-finisher.html',
  '/construction-electrician': 'construction-electrician.html',
  '/cook': 'cook.html',
  '/drywall-finisher-plasterer': 'drywall-finisher-plasterer.html',
  '/electrician-industrial': 'electrician-industrial.html',
  '/gasfitter-a': 'gasfitter-a.html',
  '/gasfitter-b': 'gasfitter-b.html',
  '/heavy-duty-equipment-technician': 'heavy-duty-equipment-technician.html',
  '/heavy-dut-equipment-technician': 'heavy-duty-equipment-technician.html',
  '/industrial-mechanic-millwright': 'industrial-mechanic-millwright.html',
  '/meatcutter': 'meatcutter.html',
  '/motorcycle-technician': 'motorcycle-technician.html',
  '/painter-and-decorator': 'painter-and-decorator.html',
  '/plumber': 'plumber.html',
  '/refrigeration-air-conditioning': 'refrigeration-air-conditioning.html',
  '/roofer': 'roofer.html',
  '/sheet-metal-worker': 'sheet-metal-worker.html',
  '/transport-trailer-technician': 'transport-trailer-technician.html',
  '/truck-and-transport-mechanic': 'truck-and-transport-mechanic.html',
  '/welder': 'welder.html',

  '/electrician': 'construction-electrician.html',
  '/heavy-duty-mechanic': 'heavy-duty-equipment-technician.html',
  '/industrial-mechanic': 'industrial-mechanic-millwright.html'
};

Object.entries(directTradeRoutes).forEach(([route, file]) => {
  app.get(route, requireAuth, (req, res, next) => {
    const targetFile = path.join(__dirname, '../private', file);
    if (!fs.existsSync(targetFile)) return next();
    res.setHeader('X-Robots-Tag', 'noindex, nofollow');
    res.sendFile(targetFile);
  });
});

/* ---------------- EXISTING ROUTES ---------------- */
app.use(['/login', '/signup', '/forgot-password', '/reset-password', '/resend-verification'], authLimiter);
app.use(authRoutes);
app.use(paymentRoutes);
app.use(quizRoutes);
app.use(progressRoutes);
app.use(mockTestRoutes);



app.get(['/admin', '/admin/dashboard', '/admin/articles'], (_req, res) => res.redirect(301, '/'));

/* ---------------- ERROR PAGES ---------------- */
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, '../views/404.html'));
});

app.use((err, req, res, next) => {
  console.error('Unhandled server error:', err);
  if (res.headersSent) return next(err);
  res.status(500).sendFile(path.join(__dirname, '../views/500.html'));
});

app.listen(PORT, HOST, () => {
  console.log(`Server running on ${HOST}:${PORT}`);
});
