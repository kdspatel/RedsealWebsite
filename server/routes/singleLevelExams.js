const express = require('express');
const path = require('path');
const stripe = require('../config/stripe');
const User = require('../models/User');
const Payment = require('../models/Payment');
const requireAuth = require('../middleware/requireAuth');
const requireSingleLevelAccess = require('../middleware/requireSingleLevelAccess');
const { getAllSingleLevelExams, getSingleLevelExam, getTrainingRequiredLevels } = require('../data/singleLevelExams');

const router = express.Router();
const PRICE = Number(process.env.SINGLE_LEVEL_EXAM_PRICE_CENTS || 2000);
const VALID_DAYS = Number(process.env.SINGLE_LEVEL_EXAM_VALID_DAYS || 30);

function expiryDate() {
  const d = new Date();
  d.setDate(d.getDate() + VALID_DAYS);
  return d;
}

function activeEntry(user, trade, level) {
  const now = new Date();
  return (user.singleLevelExamAccess || []).find(item =>
    item.trade === trade && Number(item.level) === Number(level) &&
    (!item.expiresAt || new Date(item.expiresAt) >= now)
  );
}

router.get('/level-tests', (_req, res) => {
  res.sendFile(path.join(__dirname, '../../views/single-level-exams.html'));
});

router.get('/api/level-tests', (_req, res) => {
  res.json({
    exams: getAllSingleLevelExams().map(({ htmlFile, jsFile, ...exam }) => ({ ...exam, price: PRICE })),
    trainingRequiredLevels: getTrainingRequiredLevels()
  });
});

router.get('/level-test/pricing', requireAuth, (req, res) => {
  const exam = getSingleLevelExam(String(req.query.trade || '').toLowerCase(), Number(req.query.level));
  if (!exam) return res.redirect('/level-tests');
  return res.sendFile(path.join(__dirname, '../../views/single-level-exam-pricing.html'));
});

router.get('/api/level-test-pricing', requireAuth, async (req, res) => {
  try {
    const trade = String(req.query.trade || '').toLowerCase();
    const level = Number(req.query.level);
    const exam = getSingleLevelExam(trade, level);
    if (!exam) return res.status(404).json({ error: 'Level exam not found.' });
    const user = await User.findById(req.session.userId);
    return res.json({
      trade,
      tradeTitle: exam.tradeTitle,
      level,
      amount: PRICE,
      displayPrice: '$20 CAD',
      validDays: VALID_DAYS,
      unlimitedAttempts: true,
      alreadyOwned: !!activeEntry(user, trade, level),
      examUrl: `/level-test/${trade}/level-${level}`
    });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

router.post('/create-level-test-checkout-session', requireAuth, async (req, res) => {
  try {
    const trade = String(req.body.trade || '').toLowerCase();
    const level = Number(req.body.level);
    const exam = getSingleLevelExam(trade, level);
    if (!exam) return res.status(400).send('Invalid trade or level.');

    const user = await User.findById(req.session.userId);
    if (!user) return res.redirect('/login');
    if (!user.isVerified) return res.status(403).send('Please verify your email before purchasing a level exam.');

    if (activeEntry(user, trade, level)) {
      return res.redirect(`/level-test/${trade}/level-${level}`);
    }

    let customerId = user.stripeCustomerId;
    if (!customerId) {
      const customer = await stripe.customers.create({ email: user.email, name: user.name });
      customerId = customer.id;
      user.stripeCustomerId = customerId;
      await user.save();
    }

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      customer: customerId,
      client_reference_id: user._id.toString(),
      metadata: {
        purchase_type: 'single_level_exam',
        trade,
        level: String(level),
        quiz: '1',
        access_days: String(VALID_DAYS),
        unlimited_attempts: 'true'
      },
      line_items: [{
        price_data: {
          currency: 'cad',
          product_data: { name: `${exam.tradeTitle} Level ${level} — Quiz 1, Unlimited Retakes for 30 Days` },
          unit_amount: PRICE
        },
        quantity: 1
      }],
      success_url: `${process.env.BASE_URL}/level-test/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.BASE_URL}/level-test/pricing?trade=${encodeURIComponent(trade)}&level=${level}`
    });

    return res.redirect(303, session.url);
  } catch (err) {
    console.error('Create single level checkout failed:', err);
    return res.status(500).send(`Could not create level exam checkout: ${err.message}`);
  }
});

router.get('/level-test/success', requireAuth, async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.retrieve(req.query.session_id);
    if (!session || session.payment_status !== 'paid' || session.metadata?.purchase_type !== 'single_level_exam') {
      return res.redirect('/level-tests');
    }

    const trade = String(session.metadata.trade || '').toLowerCase();
    const level = Number(session.metadata.level);
    const exam = getSingleLevelExam(trade, level);
    if (!exam) return res.redirect('/level-tests');

    const user = await User.findById(req.session.userId);
    if (!user) return res.redirect('/login');

    if (!Array.isArray(user.singleLevelExamAccess)) user.singleLevelExamAccess = [];
    const existing = activeEntry(user, trade, level);
    const expiresAt = expiryDate();
    if (existing) {
      existing.purchasedAt = new Date();
      existing.expiresAt = expiresAt;
      existing.quizNumber = 1;
      existing.unlimitedAttempts = true;
    } else {
      user.singleLevelExamAccess.push({ trade, level, quizNumber: 1, purchasedAt: new Date(), expiresAt, unlimitedAttempts: true, attemptCount: 0 });
    }
    if (session.customer) user.stripeCustomerId = session.customer;
    await user.save();

    await Payment.findOneAndUpdate(
      { stripeSessionId: session.id },
      {
        userId: user._id,
        trade,
        level,
        quizNumber: 1,
        purchaseType: 'single_level_exam',
        stripeSessionId: session.id,
        stripeCustomerId: session.customer || null,
        amountTotal: session.amount_total || PRICE,
        currency: session.currency || 'cad',
        status: session.payment_status || 'paid',
        accessExpiresAt: expiresAt
      },
      { upsert: true, new: true }
    );

    return res.redirect(`/level-test/${trade}/level-${level}`);
  } catch (err) {
    console.error('Activate single level exam failed:', err);
    return res.status(500).send('Could not activate level exam access.');
  }
});

router.get('/level-test/:trade/level-:level', requireAuth, requireSingleLevelAccess, (req, res) => {
  return res.sendFile(path.join(__dirname, '..', '..', req.singleLevelExam.htmlFile));
});

router.get('/level-exam-asset/:trade/level-:level-quiz-1.js', requireAuth, requireSingleLevelAccess, (req, res) => {
  res.type('application/javascript');
  return res.sendFile(path.join(__dirname, '..', '..', req.singleLevelExam.jsFile));
});

module.exports = router;
