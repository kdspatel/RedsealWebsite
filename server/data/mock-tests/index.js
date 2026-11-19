const path = require('path');
const fs = require('fs');

function loadMockTestQuestions(trade) {
  const safeTrade = String(trade || '').toLowerCase().replace(/[^a-z0-9-]/g, '');
  const file = path.join(__dirname, `${safeTrade}.js`);
  if (!fs.existsSync(file)) return [];
  delete require.cache[require.resolve(file)];
  const questions = require(file);
  return Array.isArray(questions) ? questions : [];
}

module.exports = { loadMockTestQuestions };
