const fs = require('fs');
const express = require('express');
const path = require('path');
const stripe = require('../config/stripe');
const User = require('../models/User');
const Payment = require('../models/Payment');
const requireAuth = require('../middleware/requireAuth');
const { sendPurchaseEmail, sendAdminNotificationEmail } = require('../config/email');

const router = express.Router();

const FIRST_TRADE_PRICE_CENTS = Number(process.env.FIRST_TRADE_PRICE_CENTS || 9900);
const ADDITIONAL_TRADE_PRICE_CENTS = Number(process.env.ADDITIONAL_TRADE_PRICE_CENTS || 4000);

const ALLOWED_TRADES = [
  'architectural-sheet-metal-worker',
  'automotive-technician',
  'baker',
  'bricklayer',
  'cabinet-maker',
  'carpentry',
  'concrete-finisher',
  'construction-electrician',
  'cook',
  'drywall-finisher-plasterer',
  'electrician-industrial',
  'gasfitter-a',
  'gasfitter-b',
  'heavy-duty-equipment-technician',
  'industrial-mechanic-millwright',
  'meatcutter',
  'motorcycle-technician',
  'painter-and-decorator',
  'plumber',
  'refrigeration-air-conditioning',
  'roofer',
  'sheet-metal-worker',
  'transport-trailer-technician',
  'truck-and-transport-mechanic',
  'welder'
];

const TRADE_ALIASES = {
  electrician: 'construction-electrician',
  'heavy-duty-mechanic': 'heavy-duty-equipment-technician',
  'heavy-dut-equipment-technician': 'heavy-duty-equipment-technician',
  'industrial-mechanic': 'industrial-mechanic-millwright',
  'automotive-service-technician': 'automotive-technician'
};

function saveAdminLog(title, data) {
  const logsDir = path.join(__dirname, '../logs');

  if (!fs.existsSync(logsDir)) {
    fs.mkdirSync(logsDir);
  }

  const logFile = path.join(logsDir, 'admin-events.json');

  let logs = [];

  if (fs.existsSync(logFile)) {
    try {
      logs = JSON.parse(fs.readFileSync(logFile, 'utf8'));
    } catch (err) {
      logs = [];
    }
  }

  logs.unshift({
    title,
    createdAt: new Date().toISOString(),
    ...data
  });

  fs.writeFileSync(logFile, JSON.stringify(logs, null, 2));
}

function getExpiryDate() {
  const expiry = new Date();
  expiry.setMonth(expiry.getMonth() + 4);
  return expiry;
}

function normalizeTrade(trade) {
  if (!trade) {
    throw new Error('Trade is required');
  }

  const cleaned = String(trade).trim().toLowerCase();
  const mapped = TRADE_ALIASES[cleaned] || cleaned;

  if (!ALLOWED_TRADES.includes(mapped)) {
    throw new Error(`Invalid trade: ${trade}`);
  }

  return mapped;
}

function getTradeDisplayName(slug) {
  const names = {
    'architectural-sheet-metal-worker': 'Architectural Sheet Metal Worker',
    'automotive-technician': 'Automotive Technician',
    baker: 'Baker',
    bricklayer: 'Bricklayer',
    'cabinet-maker': 'Cabinet Maker',
    carpentry: 'Carpentry',
    'concrete-finisher': 'Concrete Finisher',
    'construction-electrician': 'Construction Electrician',
    cook: 'Cook',
    'drywall-finisher-plasterer': 'Drywall Finisher and Plasterer',
    'electrician-industrial': 'Industrial Electrician',
    'gasfitter-a': 'Gasfitter A',
    'gasfitter-b': 'Gasfitter B',
    'heavy-duty-equipment-technician': 'Heavy Duty Equipment Technician',
    'industrial-mechanic-millwright': 'Industrial Mechanic Millwright',
    meatcutter: 'Meatcutter',
    'motorcycle-technician': 'Motorcycle Technician',
    'painter-and-decorator': 'Painter and Decorator',
    plumber: 'Plumber',
    'refrigeration-air-conditioning': 'Refrigeration and Air Conditioning',
    roofer: 'Roofer',
    'sheet-metal-worker': 'Sheet Metal Worker',
    'transport-trailer-technician': 'Transport Trailer Technician',
    'truck-and-transport-mechanic': 'Truck and Transport Mechanic',
    welder: 'Welder'
  };

  return names[slug] || slug;
}

function getTradeFile(slug) {
  const files = {
    'industrial-mechanic-millwright': 'industrial-mechanic-millwright.html'
  };

  return files[slug] || `${slug}.html`;
}

function getActiveTradeEntry(user, trade) {
  if (!user || !Array.isArray(user.tradeAccess)) return null;

  const entry = user.tradeAccess.find(
    t => normalizeTrade(t.trade) === trade
  );

  if (!entry) return null;
  if (!entry.expiresAt) return null;
  if (new Date() > new Date(entry.expiresAt)) return null;

  return entry;
}

function userHasActiveTrade(user, trade) {
  return !!getActiveTradeEntry(user, trade);
}

function userHasAnyActiveTrade(user) {
  if (!user || !Array.isArray(user.tradeAccess)) return false;

  const now = new Date();

  return user.tradeAccess.some(
    t => t.expiresAt && new Date(t.expiresAt) > now
  );
}

function getTradePrice(user, trade) {
  if (userHasActiveTrade(user, trade)) return null;
  return userHasAnyActiveTrade(user) ? ADDITIONAL_TRADE_PRICE_CENTS : FIRST_TRADE_PRICE_CENTS;
}

function formatAmount(amount, currency = 'cad') {
  return new Intl.NumberFormat('en-CA', {
    style: 'currency',
    currency: String(currency).toUpperCase()
  }).format((amount || 0) / 100);
}

router.get('/pricing', requireAuth, async (req, res) => {
  try {
    const user = await User.findById(req.session.userId);
    if (!user) return res.redirect('/login');

    const rawTrade = req.query.trade;
    if (!rawTrade) return res.redirect('/trades?choose=pricing');

    const trade = normalizeTrade(rawTrade);
    if (userHasActiveTrade(user, trade)) {
      return res.redirect(`/private/${getTradeFile(trade)}`);
    }

    res.setHeader('X-Robots-Tag', 'noindex, nofollow');
    return res.sendFile(path.join(__dirname, '../../views/pricing.html'));
  } catch (err) {
    console.error('Pricing page error:', err.message);
    return res.redirect('/trades?choose=pricing');
  }
});

router.get('/api/pricing-info', requireAuth, async (req, res) => {
  try {
    const trade = normalizeTrade(req.query.trade);
    const user = await User.findById(req.session.userId);

    if (!user) {
      return res.status(401).json({ error: 'Not logged in' });
    }

    const alreadyOwned = userHasActiveTrade(user, trade);
    const hasAnyTrade = userHasAnyActiveTrade(user);
    const amount = getTradePrice(user, trade);

    return res.json({
      trade,
      tradeTitle: getTradeDisplayName(trade),
      alreadyOwned,
      hasAnyTrade,
      amount,
      displayPrice: amount === null ? null : `$${(amount / 100).toFixed(0)} CAD`,
      pricingType: alreadyOwned ? 'owned' : hasAnyTrade ? 'upsell' : 'first_purchase'
    });
  } catch (err) {
    console.error('Pricing info API error:', err.message);
    return res.status(500).json({ error: err.message });
  }
});

router.post('/create-checkout-session', requireAuth, async (req, res) => {
  try {
    const user = await User.findById(req.session.userId);

    if (!user) {
      return res.redirect('/login');
    }

    if (!user.isVerified) {
      return res.status(403).send('Please verify your email before purchasing access.');
    }

    const selectedTrade = normalizeTrade(req.body.trade);

    if (userHasActiveTrade(user, selectedTrade)) {
      return res.redirect(`/private/${getTradeFile(selectedTrade)}`);
    }

    const unitAmount = getTradePrice(user, selectedTrade);
    const pricingType = userHasAnyActiveTrade(user) ? 'upsell' : 'first_purchase';

    let customerId = user.stripeCustomerId;

    if (!customerId) {
      const customer = await stripe.customers.create({
        email: user.email,
        name: user.name
      });

      customerId = customer.id;
      user.stripeCustomerId = customerId;
      await user.save();
    }

    const sessionData = {
      mode: 'payment',
      client_reference_id: user._id.toString(),
      metadata: {
        trade: selectedTrade,
        duration: '4_months',
        pricing_type: pricingType
      },
      line_items: [
        {
          price_data: {
            currency: 'cad',
            product_data: {
              name: `${getTradeDisplayName(selectedTrade)} Quiz Full Access - 4 Months`
            },
            unit_amount: unitAmount
          },
          quantity: 1
        }
      ],
      success_url: `${process.env.BASE_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.BASE_URL}/pricing?trade=${selectedTrade}`
    };

    if (customerId) {
      sessionData.customer = customerId;
    } else {
      sessionData.customer_email = user.email;
    }

    const session = await stripe.checkout.sessions.create(sessionData);
    return res.redirect(303, session.url);
  } catch (err) {
    console.error('Create checkout session error:', err);
    return res.status(500).send(`Could not create checkout session: ${err.message}`);
  }
});

router.get('/success', requireAuth, async (req, res) => {
  try {
    console.log('SUCCESS ROUTE HIT');

    const sessionId = req.query.session_id;
    if (!sessionId) {
      console.log('No session_id found');
      return res.redirect('/trades');
    }

    const checkoutSession = await stripe.checkout.sessions.retrieve(sessionId);

    if (!checkoutSession || checkoutSession.payment_status !== 'paid') {
      console.log('Checkout session not paid');
      return res.redirect('/trades');
    }

    const user = await User.findById(req.session.userId);
    if (!user) {
      console.log('User not found in success route');
      return res.redirect('/login');
    }

    const trade = normalizeTrade(checkoutSession.metadata?.trade);
    const tradeExpiry = getExpiryDate();

    if (!Array.isArray(user.tradeAccess)) {
      user.tradeAccess = [];
    }

    const existingTradeIndex = user.tradeAccess.findIndex(
      t => normalizeTrade(t.trade) === trade
    );

    if (existingTradeIndex >= 0) {
      user.tradeAccess[existingTradeIndex].trade = trade;
      user.tradeAccess[existingTradeIndex].expiresAt = tradeExpiry;
      user.tradeAccess[existingTradeIndex].purchasedAt = new Date();
    } else {
      user.tradeAccess.push({
        trade,
        expiresAt: tradeExpiry,
        purchasedAt: new Date()
      });
    }

    user.hasPaid = user.tradeAccess.length > 0;

    if (checkoutSession.customer) {
      user.stripeCustomerId = checkoutSession.customer;
    }

    await user.save();

    await Payment.findOneAndUpdate(
      { stripeSessionId: checkoutSession.id },
      {
        userId: user._id,
        trade,
        stripeSessionId: checkoutSession.id,
        stripeCustomerId: checkoutSession.customer || null,
        amountTotal: checkoutSession.amount_total || 0,
        currency: checkoutSession.currency || 'cad',
        status: checkoutSession.payment_status || 'paid',
        accessExpiresAt: tradeExpiry,
        purchaseEmailSent: false
      },
      { upsert: true, new: true }
    );

    try {
      const emailResult = await sendPurchaseEmail({
        to: user.email,
        name: user.name || 'User',
        tradeTitle: getTradeDisplayName(trade),
        amountText: formatAmount(
          checkoutSession.amount_total || 0,
          checkoutSession.currency || 'cad'
        ),
        expiryDate: new Date(tradeExpiry).toDateString(),
        quizUrl: `${process.env.BASE_URL}/private/${getTradeFile(trade)}`,
        accountUrl: `${process.env.BASE_URL}/account`,
        orderId: checkoutSession.id
      });

      console.log('Purchase email result:', emailResult);

      await Payment.findOneAndUpdate(
        { stripeSessionId: checkoutSession.id },
        { purchaseEmailSent: true }
      );
    } catch (emailErr) {
      console.error('Purchase email failed in success route:', emailErr);
    }

    try {
      await sendAdminNotificationEmail(
        'New Trade Purchase',
        `
          <p><strong>Name:</strong> ${user.name || 'User'}</p>
          <p><strong>Email:</strong> ${user.email}</p>
          <p><strong>Trade:</strong> ${getTradeDisplayName(trade)}</p>
          <p><strong>Amount:</strong> ${formatAmount(
            checkoutSession.amount_total || 0,
            checkoutSession.currency || 'cad'
          )}</p>
          <p><strong>Access Until:</strong> ${new Date(tradeExpiry).toDateString()}</p>
          <p><strong>Stripe Session:</strong> ${checkoutSession.id}</p>
          <p><strong>Time:</strong> ${new Date().toLocaleString()}</p>
        `
      );
    } catch (adminEmailErr) {
      console.error('Admin purchase notification failed:', adminEmailErr);
    }

    saveAdminLog('New Trade Purchase', {
      name: user.name || 'User',
      email: user.email,
      trade: getTradeDisplayName(trade),
      amount: formatAmount(
        checkoutSession.amount_total || 0,
        checkoutSession.currency || 'cad'
      ),
      accessUntil: new Date(tradeExpiry).toDateString(),
      stripeSession: checkoutSession.id
    });

    return res.redirect(`/private/${getTradeFile(trade)}`);
  } catch (err) {
    console.error('Success route error:', err);
    return res.status(500).send('Payment success processing failed');
  }
});

router.post('/webhook', express.raw({ type: 'application/json' }), async (req, res) => {
  const sig = req.headers['stripe-signature'];

  let event;
  try {
    event = stripe.webhooks.constructEvent(
      req.body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    console.error('Webhook signature verification failed:', err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  try {
    if (event.type === 'checkout.session.completed') {
      const session = event.data.object;
      const userId = session.client_reference_id;
      const user = await User.findById(userId);

      if (user) {
        const trade = normalizeTrade(session.metadata?.trade);

        if (session.metadata?.purchase_type === 'single_level_exam') {
          const level = Number(session.metadata?.level);
          const quizNumber = Number(session.metadata?.quiz || 1);
          const levelExpiry = new Date();
          levelExpiry.setDate(levelExpiry.getDate() + Number(process.env.SINGLE_LEVEL_EXAM_VALID_DAYS || 30));

          if (!Array.isArray(user.singleLevelExamAccess)) user.singleLevelExamAccess = [];
          const existingLevel = user.singleLevelExamAccess.find(entry =>
            entry.trade === trade && Number(entry.level) === level &&
            (!entry.expiresAt || new Date(entry.expiresAt) >= new Date())
          );

          if (existingLevel) {
            existingLevel.purchasedAt = new Date();
            existingLevel.expiresAt = levelExpiry;
            existingLevel.quizNumber = 1;
            existingLevel.unlimitedAttempts = true;
          } else {
            user.singleLevelExamAccess.push({
              trade,
              level,
              quizNumber: 1,
              purchasedAt: new Date(),
              expiresAt: levelExpiry,
              unlimitedAttempts: true,
              attemptCount: 0
            });
          }

          if (session.customer) user.stripeCustomerId = session.customer;
          await user.save();

          await Payment.findOneAndUpdate(
            { stripeSessionId: session.id },
            {
              userId: user._id,
              trade,
              level,
              quizNumber,
              purchaseType: 'single_level_exam',
              stripeSessionId: session.id,
              stripeCustomerId: session.customer || null,
              amountTotal: session.amount_total || 2000,
              currency: session.currency || 'cad',
              status: session.payment_status || 'paid',
              accessExpiresAt: levelExpiry
            },
            { upsert: true, new: true }
          );

          saveAdminLog('Webhook Single Level Exam Purchase', {
            name: user.name || 'User',
            email: user.email,
            trade: getTradeDisplayName(trade),
            level,
            quizNumber,
            amount: formatAmount(session.amount_total || 2000, session.currency || 'cad'),
            accessUntil: levelExpiry.toDateString(),
            stripeSession: session.id
          });

          console.log(`Webhook saved single-level exam purchase for ${user.email} / ${trade} / level ${level}`);
          return res.json({ received: true });
        }

        if (session.metadata?.purchase_type === 'mock_test') {
          const mockExpiry = new Date();
          mockExpiry.setDate(mockExpiry.getDate() + Number(process.env.MOCK_TEST_VALID_DAYS || 30));

          if (!Array.isArray(user.mockTestAccess)) user.mockTestAccess = [];
          const activeMockAccess = user.mockTestAccess.find(entry =>
            entry.trade === trade &&
            Number(entry.testNumber || 1) === 1 &&
            (!entry.expiresAt || new Date(entry.expiresAt) >= new Date())
          );

          if (activeMockAccess) {
            activeMockAccess.testNumber = 1;
            activeMockAccess.purchasedAt = new Date();
            activeMockAccess.expiresAt = mockExpiry;
            activeMockAccess.unlimitedAttempts = true;
            activeMockAccess.completedAt = null;
          } else {
            user.mockTestAccess.push({
              trade,
              testNumber: 1,
              purchasedAt: new Date(),
              expiresAt: mockExpiry,
              unlimitedAttempts: true,
              attemptCount: 0
            });
          }

          if (session.customer) user.stripeCustomerId = session.customer;
          await user.save();

          await Payment.findOneAndUpdate(
            { stripeSessionId: session.id },
            {
              userId: user._id,
              trade,
              purchaseType: 'mock_test',
              stripeSessionId: session.id,
              stripeCustomerId: session.customer || null,
              amountTotal: session.amount_total || 2000,
              currency: session.currency || 'cad',
              status: session.payment_status || 'paid',
              accessExpiresAt: mockExpiry
            },
            { upsert: true, new: true }
          );

          saveAdminLog('Webhook Mock Test Purchase', {
            name: user.name || 'User',
            email: user.email,
            trade: getTradeDisplayName(trade),
            amount: formatAmount(session.amount_total || 2000, session.currency || 'cad'),
            accessUntil: mockExpiry.toDateString(),
            stripeSession: session.id
          });

          console.log(`Webhook saved mock-test payment for ${user.email} / ${trade}`);
          return res.json({ received: true });
        }

        const tradeExpiry = getExpiryDate();

        if (!Array.isArray(user.tradeAccess)) {
          user.tradeAccess = [];
        }

        const existingTradeIndex = user.tradeAccess.findIndex(
          t => normalizeTrade(t.trade) === trade
        );

        if (existingTradeIndex >= 0) {
          user.tradeAccess[existingTradeIndex].trade = trade;
          user.tradeAccess[existingTradeIndex].expiresAt = tradeExpiry;
          user.tradeAccess[existingTradeIndex].purchasedAt = new Date();
        } else {
          user.tradeAccess.push({
            trade,
            expiresAt: tradeExpiry,
            purchasedAt: new Date()
          });
        }

        user.hasPaid = user.tradeAccess.length > 0;

        if (session.customer) {
          user.stripeCustomerId = session.customer;
        }

        await user.save();

        await Payment.findOneAndUpdate(
          { stripeSessionId: session.id },
          {
            userId: user._id,
            trade,
            purchaseType: 'premium_trade',
            stripeSessionId: session.id,
            stripeCustomerId: session.customer || null,
            amountTotal: session.amount_total || 0,
            currency: session.currency || 'cad',
            status: session.payment_status || 'paid',
            accessExpiresAt: tradeExpiry
          },
          { upsert: true, new: true }
        );

        saveAdminLog('Webhook Trade Purchase', {
          name: user.name || 'User',
          email: user.email,
          trade: getTradeDisplayName(trade),
          amount: formatAmount(session.amount_total || 0, session.currency || 'cad'),
          accessUntil: new Date(tradeExpiry).toDateString(),
          stripeSession: session.id
        });

        console.log(`Webhook saved payment for ${user.email} / ${trade}`);
      }
    }

    return res.json({ received: true });
  } catch (err) {
    console.error('Webhook handling failed:', err);
    return res.status(500).send('Webhook handling failed');
  }
});

module.exports = router;
