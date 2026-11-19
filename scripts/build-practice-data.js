// Builds the static sample files used by the Practice / Mock / Level category pages.
// Run from the project root:  node scripts/build-practice-data.js
// It only READS the question banks and WRITES small JSON files into public/data/practice/ (5 free-sample questions per trade).
// The server code is not touched, and full paid question banks are never published.
const fs = require('fs'), path = require('path'), vm = require('vm');
const ROOT = path.join(__dirname, '..');
const { getAllTrades } = require(path.join(ROOT, 'server/data/trades'));

function loadQuestions(file) {
  if (!fs.existsSync(file)) return null;
  const src = fs.readFileSync(file, 'utf8');
  const m = src.match(/(?:const|let|var)\s+(\w+)\s*=\s*\[/);
  if (!m) return null;
  const end = src.indexOf('\n];', m.index);
  if (end < 0) return null;
  try { const list = vm.runInNewContext(src.slice(m.index, end + 3) + ';' + m[1], {}, { timeout: 2000 }); return Array.isArray(list) ? list : null; } catch (e) { return null; }
}
// 5 questions, round-robin across categories so the category list has variety
function sample(all, n) {
  const groups = new Map();
  all.forEach(q => { const c = q.category || ''; if (!groups.has(c)) groups.set(c, []); groups.get(c).push(q); });
  const lists = [...groups.values()], out = [];
  for (let i = 0; out.length < n && lists.some(l => i < l.length); i++) for (const l of lists) if (out.length < n && i < l.length) out.push(l[i]);
  return out;
}
function write(rel, title, all) {
  const f = path.join(ROOT, 'public/data/practice', rel);
  fs.mkdirSync(path.dirname(f), { recursive: true });
  fs.writeFileSync(f, JSON.stringify({ title, total: all.length, questions: sample(all, 5) }));
}
let n = 0;
for (const t of getAllTrades()) {
  const lvl1 = loadQuestions(path.join(ROOT, 'server/protected-level-exams', t.slug, 'level-1-quiz-1.js'));
  if (lvl1) { write('practice/' + t.slug + '.json', t.title, lvl1); n++; }
  const mock = loadQuestions(path.join(ROOT, 'server/protected-mock-tests', t.slug, 'mock-test-1.js'));
  if (mock) { write('mock/' + t.slug + '.json', t.title, mock); n++; }
  for (let L = 1; L <= 4; L++) {
    const q = loadQuestions(path.join(ROOT, 'server/protected-level-exams', t.slug, 'level-' + L + '-quiz-1.js'));
    if (q) { write('level/' + t.slug + '-' + L + '.json', t.title, q); n++; }
  }
}
console.log('Done: ' + n + ' files written to public/data/practice/');
