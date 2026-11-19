const express = require('express');
const path = require('path');
const requireAuth = require('../middleware/requireAuth');
const requireTradeAccess = require('../middleware/requireTradeAccess');

const router = express.Router();

function tradeRoute(slug, file) {
  router.get(`/quiz/${slug}`, requireAuth, requireTradeAccess(slug), (req, res) => {
    res.sendFile(path.join(__dirname, '../../private', file));
  });
}

tradeRoute('architectural-sheet-metal-worker', 'architectural-sheet-metal-worker.html');
tradeRoute('automotive-technician', 'automotive-technician.html');
tradeRoute('baker', 'baker.html');
tradeRoute('carpentry', 'carpentry.html');
tradeRoute('concrete-finisher', 'concrete-finisher.html');
tradeRoute('construction-electrician', 'construction-electrician.html');
tradeRoute('cook', 'cook.html');
tradeRoute('drywall-finisher-plasterer', 'drywall-finisher-plasterer.html');
tradeRoute('electrician-industrial', 'electrician-industrial.html');
tradeRoute('heavy-dut-equipment-technician', 'heavy-dut-equipment-technician.html');
tradeRoute('industrial-mechanic-millwright', 'industrial-mechanic-millwright.html');
tradeRoute('meatcutter', 'meatcutter.html');
tradeRoute('motorcycle-technician', 'motorcycle-technician.html');
tradeRoute('painter-and-decorator', 'painter-and-decorator.html');
tradeRoute('plumber', 'plumber.html');
tradeRoute('refrigeration-air-conditioning', 'refrigeration-air-conditioning.html');
tradeRoute('roofer', 'roofer.html');
tradeRoute('transport-trailer-technician', 'transport-trailer-technician.html');
tradeRoute('truck-and-transport-mechanic', 'truck-and-transport-mechanic.html');
tradeRoute('welder', 'welder.html');

/* Old route aliases */
router.get('/quiz/electrician', requireAuth, requireTradeAccess('construction-electrician'), (req, res) => {
  res.sendFile(path.join(__dirname, '../../private/construction-electrician.html'));
});

router.get('/quiz/heavy-duty-mechanic', requireAuth, requireTradeAccess('heavy-dut-equipment-technician'), (req, res) => {
  res.sendFile(path.join(__dirname, '../../private/heavy-dut-equipment-technician.html'));
});

router.get('/quiz/industrial-mechanic', requireAuth, requireTradeAccess('industrial-mechanic-millwright'), (req, res) => {
  res.sendFile(path.join(__dirname, '../../private/industrial-mechanic-millwright.html'));
});

router.get('/quiz/sheet-metal-worker', requireAuth, requireTradeAccess('architectural-sheet-metal-worker'), (req, res) => {
  res.sendFile(path.join(__dirname, '../../private/architectural-sheet-metal-worker.html'));
});

module.exports = router;