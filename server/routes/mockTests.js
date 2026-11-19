const express = require('express');
const path = require('path');
const stripe = require('../config/stripe');
const User = require('../models/User');
const Payment = require('../models/Payment');
const QuizAttempt = require('../models/QuizAttempt');
const requireAuth = require('../middleware/requireAuth');
const requireMockTestAccess = require('../middleware/requireMockTestAccess');
const paidMockTestOneMap = require('../data/paidMockTestOneMap');
const { loadMockTestQuestions } = require('../data/mock-tests');

const router = express.Router();
const MOCK_TEST_PRICE = Number(process.env.MOCK_TEST_PRICE_CENTS || 2000);
const MOCK_TEST_VALID_DAYS = Number(process.env.MOCK_TEST_VALID_DAYS || 30);
const TRADE_NAMES = {
  "architectural-sheet-metal-worker": "Architectural Sheet Metal Worker",
  "automotive-technician": "Automotive Technician",
  "baker": "Baker",
  "bricklayer": "Bricklayer",
  "cabinet-maker": "Cabinet Maker",
  "carpentry": "Carpenter",
  "concrete-finisher": "Concrete Finisher",
  "construction-electrician": "Construction Electrician",
  "drywall-finisher-plasterer": "Drywall Finisher and Plasterer",
  "electrician-industrial": "Industrial Electrician",
  "gasfitter-a": "Gasfitter A",
  "gasfitter-b": "Gasfitter B",
  "heavy-duty-equipment-technician": "Heavy Duty Equipment Technician",
  "industrial-mechanic-millwright": "Industrial Mechanic (Millwright)",
  "meatcutter": "Meatcutter",
  "motorcycle-technician": "Motorcycle Technician",
  "painter-and-decorator": "Painter and Decorator",
  "plumber": "Plumber",
  "refrigeration-air-conditioning": "Refrigeration and Air Conditioning Mechanic",
  "roofer": "Roofer",
  "welder": "Welder"
};

function validTrade(value) {
  const trade = String(value || '').trim().toLowerCase();
  if (!Object.prototype.hasOwnProperty.call(TRADE_NAMES, trade)) throw new Error('Invalid trade');
  return trade;
}
function expiryDate() { const d = new Date(); d.setDate(d.getDate() + MOCK_TEST_VALID_DAYS); return d; }
function activeEntry(user, trade) {
  const now = new Date();
  return (user.mockTestAccess || []).find(e =>
    e.trade === trade &&
    Number(e.testNumber || 1) === 1 &&
    (!e.expiresAt || new Date(e.expiresAt) >= now)
  );
}

router.get('/mock-tests', (_req,res) => res.sendFile(path.join(__dirname,'../../views/mock-tests.html')));
router.get('/mock-test/pricing', requireAuth, (req,res) => {
  try { validTrade(req.query.trade); return res.sendFile(path.join(__dirname,'../../views/mock-test-pricing.html')); }
  catch { return res.redirect('/mock-tests'); }
});
router.get('/api/mock-tests', (_req,res) => res.json({ trades: Object.entries(TRADE_NAMES).map(([slug,title]) => ({slug,title,price:MOCK_TEST_PRICE})) }));
router.get('/api/my-mock-tests', requireAuth, async (req,res) => {
  const user=await User.findById(req.session.userId).lean();
  res.json({ mockTests:(user?.mockTestAccess||[]).map(e=>({trade:e.trade,testNumber:Number(e.testNumber||1),purchasedAt:e.purchasedAt,expiresAt:e.expiresAt,unlimitedAttempts:e.unlimitedAttempts!==false,startedAt:e.startedAt,lastAttemptAt:e.lastAttemptAt,attemptCount:Number(e.attemptCount||0),latestAttemptId:e.latestAttemptId||e.attemptId||null})) });
});
router.get('/api/mock-test-pricing', requireAuth, async (req,res) => {
  try {
    const trade=validTrade(req.query.trade); const user=await User.findById(req.session.userId);
    res.json({trade,tradeTitle:TRADE_NAMES[trade],amount:MOCK_TEST_PRICE,displayPrice:'$20 CAD',hasActiveAccess:!!activeEntry(user,trade),hasUnusedAttempt:!!activeEntry(user,trade),unlimitedAttempts:true,validDays:MOCK_TEST_VALID_DAYS});
  } catch(err) { res.status(400).json({error:err.message}); }
});
router.post('/create-mock-checkout-session', requireAuth, async (req,res) => {
  try {
    const user=await User.findById(req.session.userId); if(!user) return res.redirect('/login');
    if(!user.isVerified) return res.status(403).send('Please verify your email before purchasing a mock test.');
    const trade=validTrade(req.body.trade);
    if(activeEntry(user,trade)) return res.redirect(`/mock-test/${trade}`);
    let customerId=user.stripeCustomerId;
    if(!customerId) { const c=await stripe.customers.create({email:user.email,name:user.name}); customerId=c.id; user.stripeCustomerId=customerId; await user.save(); }
    const session=await stripe.checkout.sessions.create({
      mode:'payment', customer:customerId, client_reference_id:user._id.toString(),
      metadata:{purchase_type:'mock_test',trade,test_number:'1',access_days:String(MOCK_TEST_VALID_DAYS),unlimited_attempts:'true'},
      line_items:[{price_data:{currency:'cad',product_data:{name:`${TRADE_NAMES[trade]} Mock Test 1 – Unlimited Retakes for 30 Days`},unit_amount:MOCK_TEST_PRICE},quantity:1}],
      success_url:`${process.env.BASE_URL}/mock-test/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url:`${process.env.BASE_URL}/mock-test/pricing?trade=${trade}`
    });
    res.redirect(303,session.url);
  } catch(err) { console.error(err); res.status(500).send(`Could not create mock-test checkout: ${err.message}`); }
});
router.get('/mock-test/success', requireAuth, async (req,res) => {
  try {
    const session=await stripe.checkout.sessions.retrieve(req.query.session_id);
    if(!session || session.payment_status!=='paid' || session.metadata?.purchase_type!=='mock_test') return res.redirect('/mock-tests');
    const trade=validTrade(session.metadata.trade); const user=await User.findById(req.session.userId); if(!user) return res.redirect('/login');
    const purchasedAt = new Date();
    const expiresAt = expiryDate();
    const existing = activeEntry(user, trade);
    if (existing) {
      existing.testNumber = 1;
      existing.purchasedAt = purchasedAt;
      existing.expiresAt = expiresAt;
      existing.unlimitedAttempts = true;
      existing.completedAt = null;
    } else {
      user.mockTestAccess.push({
        trade,
        testNumber: 1,
        purchasedAt,
        expiresAt,
        unlimitedAttempts: true,
        attemptCount: 0
      });
    }
    if(session.customer) user.stripeCustomerId=session.customer; await user.save();
    await Payment.findOneAndUpdate({stripeSessionId:session.id},{userId:user._id,trade,quizNumber:1,purchaseType:'mock_test',stripeSessionId:session.id,stripeCustomerId:session.customer||null,amountTotal:session.amount_total||MOCK_TEST_PRICE,currency:session.currency||'cad',status:session.payment_status||'paid',accessExpiresAt:expiresAt},{upsert:true,new:true});
    res.redirect(`/mock-test/${trade}`);
  } catch(err) { console.error(err); res.status(500).send('Could not activate mock-test access.'); }
});
router.get('/mock-test/:trade', requireAuth, requireMockTestAccess, (req, res) => {
  try {
    const trade = validTrade(req.params.trade);
    const record = paidMockTestOneMap[trade];
    if (!record) return res.status(404).send('Mock Test 1 is not available for this trade yet.');
    return res.sendFile(path.join(__dirname, '..', '..', record.html));
  } catch (err) {
    return res.status(400).send(err.message);
  }
});

router.get('/mock-test-assets/:trade/mock-test-1.js', requireAuth, requireMockTestAccess, (req, res) => {
  try {
    const trade = validTrade(req.params.trade);
    const record = paidMockTestOneMap[trade];
    if (!record) return res.status(404).end();
    res.setHeader('Cache-Control', 'private, no-store');
    return res.sendFile(path.join(__dirname, '..', '..', record.js));
  } catch (err) {
    return res.status(400).send(err.message);
  }
});
router.get('/api/legacy-mock-test/:trade/questions', requireAuth, requireMockTestAccess, async (req,res) => {
  const trade=validTrade(req.params.trade); const questions=loadMockTestQuestions(trade);
  if(!req.mockTestAccess.startedAt) { req.mockTestAccess.startedAt=new Date(); await req.mockTestUser.save(); }
  res.json({trade,tradeTitle:TRADE_NAMES[trade],durationMinutes:Number(process.env.MOCK_TEST_DURATION_MINUTES||180),questions:questions.map(q=>({id:q.id,category:q.category,question:q.question,options:q.options}))});
});
router.post('/api/legacy-mock-test/:trade/submit', requireAuth, requireMockTestAccess, async (req,res) => {
  try {
    const trade=validTrade(req.params.trade); const questions=loadMockTestQuestions(trade);
    if(!questions.length) return res.status(400).json({error:'Questions have not been added for this mock test yet.'});
    const answers=req.body.answers||{}; let correct=0; const category={}; const wrong=[];
    for(const q of questions) {
      const selected=Number(answers[q.id]); const ok=selected===q.correctAnswerIndex; if(ok) correct++;
      category[q.category]=category[q.category]||{category:q.category,correct:0,total:0}; category[q.category].total++; if(ok) category[q.category].correct++;
      if(!ok) wrong.push({questionId:q.id,category:q.category,question:q.question,correctAnswerIndex:q.correctAnswerIndex,selectedAnswerIndex:Number.isFinite(selected)?selected:null});
    }
    const percentage=Math.round((correct/questions.length)*100);
    const attempt=await QuizAttempt.create({userId:req.session.userId,trade,attemptType:'mock_test',section:'Full Mock Test',mode:'mock_test',selectedCategory:'all',totalQuestions:questions.length,correctAnswers:correct,percentage,timeSpentSeconds:Number(req.body.timeSpentSeconds||0),categoryStats:Object.values(category),wrongQuestions:wrong});
    req.mockTestAccess.startedAt = req.mockTestAccess.startedAt || new Date();
    req.mockTestAccess.lastAttemptAt = new Date();
    req.mockTestAccess.attemptCount = Number(req.mockTestAccess.attemptCount || 0) + 1;
    req.mockTestAccess.latestAttemptId = attempt._id;
    req.mockTestAccess.attemptId = attempt._id;
    req.mockTestAccess.completedAt = null;
    await req.mockTestUser.save();
    res.json({success:true,attemptId:attempt._id,correct,total:questions.length,percentage,passed:percentage>=70,attemptCount:req.mockTestAccess.attemptCount,accessExpiresAt:req.mockTestAccess.expiresAt,resultUrl:`/mock-test/${trade}/result`});
  } catch(err) { console.error(err); res.status(500).json({error:'Could not save mock-test result.'}); }
});
router.get('/mock-test/:trade/result', requireAuth, async (req,res) => {
  try {
    const trade = validTrade(req.params.trade);
    const user = await User.findById(req.session.userId);
    const access = activeEntry(user, trade);
    if (!access) return res.redirect(`/mock-test/pricing?trade=${trade}`);
    const attempt = await QuizAttempt.findOne({ userId: user._id, trade, attemptType: 'mock_test' }).sort({ createdAt: -1 }).lean();
    if (!attempt) return res.redirect(`/mock-test/${trade}`);
    return res.sendFile(path.join(__dirname,'../../views/mock-test-result.html'));
  } catch {
    return res.redirect('/mock-tests');
  }
});
router.get('/api/mock-test/:trade/result', requireAuth, async (req,res) => {
  try {
    const trade = validTrade(req.params.trade);
    const user = await User.findById(req.session.userId);
    const access = activeEntry(user, trade);
    if (!access) return res.status(403).json({error:'Your 30-day access has expired.'});
    const attempt = await QuizAttempt.findOne({ userId: user._id, trade, attemptType: 'mock_test' }).sort({ createdAt: -1 }).lean();
    if (!attempt) return res.status(404).json({error:'No completed mock test found.'});
    const attemptCount = await QuizAttempt.countDocuments({ userId: user._id, trade, attemptType: 'mock_test' });
    res.json({trade,tradeTitle:TRADE_NAMES[trade],attempt,attemptCount,accessExpiresAt:access.expiresAt,canRetake:true,retakeUrl:`/mock-test/${trade}`});
  } catch(err) {
    res.status(500).json({error:err.message});
  }
});

module.exports = router;
