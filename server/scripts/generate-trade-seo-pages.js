const fs = require('fs');
const path = require('path');
const { getAllTrades } = require('../data/trades');
const { getAllSingleLevelExams, getTrainingRequiredLevels } = require('../data/singleLevelExams');

const root = path.join(__dirname, '../..');
const outRoot = path.join(root, 'views', 'trade-seo-pages');
const sitemapPath = path.join(root, 'public', 'sitemap.xml');
const baseUrl = 'https://www.redsealpractice.ca';

function esc(v='') { return String(v).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;'); }
function slugLabel(type) { return type.split('-').map(x=>x[0].toUpperCase()+x.slice(1)).join(' '); }
function list(items) { return `<ul class="seo-check-list">${items.map(x=>`<li>${esc(x)}</li>`).join('')}</ul>`; }
function cards(trade, levels, trainingLevel) {
  const items = [
    ['Free practice questions', `/free/${trade.slug}`, 'Try sample questions before purchasing access.'],
    ['Full trade access', `/pricing?trade=${trade.slug}`, '$99 CAD for the first trade; additional trades are $40 CAD.'],
    ['Single mock exam', `/mock-test/pricing?trade=${trade.slug}`, '$20 CAD with 30-day access and unlimited retakes.'],
    ['Study guide', `/trades/${trade.slug}/study-guide`, 'Review topics, study priorities and preparation methods.'],
    ['Exam preparation', `/trades/${trade.slug}/exam-preparation`, 'Build a practical study schedule and test-taking strategy.'],
    ['Certification guide', `/trades/${trade.slug}/red-seal-certification`, 'Understand apprenticeship, challenge and certification pathways.'],
    ['Passing score guide', `/trades/${trade.slug}/passing-score`, 'Review scoring, timing and readiness advice.']
  ];
  levels.forEach(level => items.push([`Level ${level} exam questions`, `/trades/${trade.slug}/level-${level}-exam-questions`, `Information and purchase access for ${trade.title} Level ${level} Quiz 1.`]));
  if (trainingLevel) items.push([`Level ${trainingLevel} technical training`, `/trades/${trade.slug}/level-${trainingLevel}-exam-questions`, `Information about the final technical-training level. No individual challenge quiz is sold for this level.`]);
  return `<div class="seo-resource-grid">${items.map(([t,u,d])=>`<a class="seo-resource-card" href="${u}"><strong>${esc(t)}</strong><span>${esc(d)}</span><b>View page →</b></a>`).join('')}</div>`;
}

const pageContent = {
  'mock-test': (trade) => ({
    kicker: 'Full mock exam',
    title: `${trade.title} Mock Test and Practice Exam`,
    description: `Prepare with a timed ${trade.title} mock test designed to help you practise exam pacing, identify weak areas and build confidence before test day.`,
    sections: [
      ['What the mock test includes', [`A complete ${trade.title} practice-exam experience`, 'Timed exam format and category-based results', '30-day access with unlimited retakes', 'Immediate feedback after each completed attempt']],
      ['Who should use it', ['Apprentices preparing for technical training or certification exams', 'Experienced workers challenging an exam', 'Learners who want a realistic test before buying full access']],
      ['How to use it effectively', ['Take the first attempt without notes', 'Review weak categories after the result', 'Study the related topics and explanations', 'Retake the test and compare your score']]
    ],
    cta: ['Buy the $20 Mock Test', `/mock-test/pricing?trade=${trade.slug}`]
  }),
  'study-guide': (trade) => ({
    kicker: 'Study resource',
    title: `${trade.title} Study Guide`,
    description: `Use this ${trade.title} study guide to organize important topics, choose practice resources and build a focused preparation plan.`,
    sections: [
      ['Core areas to review', trade.topics],
      ['Recommended study method', ['Start with a diagnostic free quiz', 'Create notes for formulas, procedures and safety rules', 'Practise one topic at a time before mixing categories', 'Use mock tests to measure readiness under time pressure']],
      ['Common preparation mistakes', ['Memorizing answers without understanding the process', 'Ignoring safety and code-style questions', 'Studying only strong topics', 'Waiting until the final week to attempt a full mock exam']]
    ],
    cta: ['Start Free Practice', `/free/${trade.slug}`]
  }),
  'exam-preparation': (trade) => ({
    kicker: 'Preparation plan',
    title: `${trade.title} Exam Preparation`,
    description: `Follow a practical ${trade.title} exam-preparation plan using topic review, practice questions, timed mock tests and score tracking.`,
    sections: [
      ['Four-step preparation plan', ['Week 1: assess your current knowledge with free questions', 'Week 2: review trade topics and make concise notes', 'Week 3: complete focused quizzes and review mistakes', 'Final week: complete timed mock tests and revise weak areas']],
      ['Test-day skills', ['Read every question carefully before selecting an answer', 'Eliminate clearly incorrect choices', 'Do not spend too long on one difficult question', 'Reserve time to review unanswered or flagged questions']],
      ['Preparation resources', trade.topics]
    ],
    cta: ['View Full Trade Access', `/pricing?trade=${trade.slug}`]
  }),
  'red-seal-certification': (trade) => ({
    kicker: 'Certification pathway',
    title: `${trade.title} Red Seal Certification Guide`,
    description: `Learn how apprenticeship training, exam eligibility, the challenge pathway and Red Seal certification may fit into your ${trade.title} career journey.`,
    sections: [
      ['Typical pathway', ['Register in an apprenticeship or confirm an approved challenge pathway', 'Complete required workplace and technical training where applicable', 'Apply for exam eligibility through the responsible provincial or territorial authority', 'Prepare for and pass the required certification examination']],
      ['Before applying', ['Confirm current requirements with your provincial or territorial authority', 'Collect employer records and evidence of work experience', 'Check examination fees, identification rules and available dates', 'Review the current occupational standard and exam information']],
      ['How Red Seal Practice supports you', ['Free practice questions', 'Trade-specific premium question banks', 'Single mock tests and level quizzes', 'Journey support when you need help finding the next step']]
    ],
    cta: ['Get Journey Support', '/exam-journey-support']
  }),
  'passing-score': (trade) => ({
    kicker: 'Scoring and readiness',
    title: `${trade.title} Exam Passing Score and Readiness Guide`,
    description: `Understand common passing-score expectations, how to measure your readiness and how to improve your ${trade.title} practice-test results.`,
    sections: [
      ['Passing score', ['A 70% standard is commonly used for many Red Seal and apprenticeship examinations', 'Your provincial or territorial authority is the final source for current exam rules', 'A practice score above the minimum gives you a safer readiness margin']],
      ['Readiness targets', ['Aim for consistent scores rather than one high result', 'Track weak categories and repeat them after focused study', 'Practise under realistic time limits', 'Complete at least one full mock exam before test day']],
      ['After a low practice score', ['Review every incorrect answer', 'Group mistakes by topic', 'Return to foundational concepts before retesting', 'Use shorter focused quizzes before another full mock exam']]
    ],
    cta: ['Take a Practice Quiz', `/free/${trade.slug}`]
  })
};

const restyle = require('./rs-restyle');
function htmlPage(trade, levels, type, level, trainingLevel) {
  let data;
  if (type === 'level') {
    const isTrainingRequired = Number(level) === Number(trainingLevel);
    data = isTrainingRequired ? {
      kicker: `Level ${level} technical training information`,
      title: `${trade.title} Level ${level}: Technical Training Required`,
      description: `Level ${level} is shown so learners can see the complete ${trade.title} pathway. Red Seal Practice does not sell an individual challenge quiz for this level because it is treated here as the final technical-training level.`,
      sections: [
        [`Why there is no Level ${level} challenge quiz`, [`The available individual challenge-practice quizzes for this trade cover Levels ${levels.join(', ')}`, `Level ${level} is presented as a classroom or technical-training stage rather than a purchasable challenge level`, 'Training and challenge rules can change by province, territory, intake and individual eligibility', 'The responsible apprenticeship authority and training provider are the final sources for current requirements']],
        [`What to do for Level ${level}`, ['Contact your provincial or territorial apprenticeship authority', 'Confirm whether technical training attendance is mandatory for your registration and current program', 'Ask an approved training provider about schedules, prerequisites, tuition and exam requirements', 'Keep records of completed levels, workplace hours and any approved challenge credits']],
        ['How Red Seal Practice can still help', [`Use the available Level ${levels.join(', ')} challenge-practice pages`, `Review the ${trade.title} study guide and exam-preparation resources`, 'Use free questions and full-trade practice to maintain earlier-level knowledge', 'Confirm all official decisions before registering, paying fees or booking training']]
      ],
      cta: ['View Available Level Quizzes', '/level-tests'],
      trainingRequired: true
    } : {
      kicker: `Level ${level} apprenticeship exam`,
      title: `${trade.title} Level ${level} Exam Questions`,
      description: `Prepare for the ${trade.title} Level ${level} exam with an overview of likely study areas, practice options and direct access to the $20 Level ${level} Quiz 1.`,
      sections: [
        [`What to expect in Level ${level}`, [`Technical-training concepts for ${trade.title}`, 'Safety, tools, procedures and trade calculations', 'Applied troubleshooting and job-scenario questions', 'Questions that require selecting the best procedure or next step']],
        [`Level ${level} topics to review`, trade.topics],
        ['How to prepare', ['Review your training-provider notes and official curriculum', 'Practise questions without notes first', 'Study every incorrect response and identify the underlying topic', 'Retake the quiz during your 30-day access period']]
      ],
      cta: [`Buy Level ${level} Quiz — $20`, `/level-test/pricing?trade=${trade.slug}&level=${level}`],
      trainingRequired: false
    };
  } else data = pageContent[type](trade);

  const canonical = `${baseUrl}/trades/${trade.slug}/${type === 'level' ? `level-${level}-exam-questions` : type}`;
  const faq = JSON.stringify({'@context':'https://schema.org','@type':'FAQPage','mainEntity':[
    {'@type':'Question','name':`Are these official ${trade.title} exam questions or official training rules?`,'acceptedAnswer':{'@type':'Answer','text':'No. Red Seal Practice provides independent study information. Confirm current exam eligibility and technical-training requirements with the responsible apprenticeship authority.'}},
    {'@type':'Question','name':`Can I try ${trade.title} questions for free?`,'acceptedAnswer':{'@type':'Answer','text':`Yes. A free ${trade.title} practice quiz is available before purchasing paid access.`}}
  ]});
  const breadcrumb = JSON.stringify({'@context':'https://schema.org','@type':'BreadcrumbList','itemListElement':[
    {'@type':'ListItem','position':1,'name':'Home','item':baseUrl+'/'},
    {'@type':'ListItem','position':2,'name':'Trades','item':baseUrl+'/trades'},
    {'@type':'ListItem','position':3,'name':trade.title,'item':baseUrl+`/trades/${trade.slug}`},
    {'@type':'ListItem','position':4,'name':data.title,'item':canonical}
  ]});
  const sectionHtml = data.sections.map(([heading, items], idx)=>`<section class="seo-section"><span class="seo-section-no">${String(idx+1).padStart(2,'0')}</span><div><h2>${esc(heading)}</h2>${list(items)}</div></section>`).join('');
  return `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>${esc(data.title)} | Red Seal Practice</title><meta name="description" content="${esc(data.description)}"><link rel="canonical" href="${canonical}">
<meta property="og:title" content="${esc(data.title)}"><meta property="og:description" content="${esc(data.description)}"><meta property="og:url" content="${canonical}"><meta property="og:type" content="website">
<link rel="stylesheet" href="/css/premium-quiz.min.css?release=20260724-mobile-fix"><link rel="stylesheet" href="/css/reference-pro-theme.css?release=20260724-mobile-fix"><link rel="stylesheet" href="/css/trade-seo-pages.css?release=20260724-mobile-fix"><link rel="stylesheet" href="/css/mobile-responsive.min.css?release=20260724-mobile-fix">
<script type="application/ld+json">${breadcrumb}</script><script type="application/ld+json">${faq}</script><link rel=stylesheet href=/css/rs-theme.css?release=20261117-redesign></head>
<body class="trade-seo-page"><div id="site-navbar"></div>
<nav class="trade-resource-bar" aria-label="${esc(trade.title)} preparation resources"><div class="seo-wrap trade-resource-bar-inner"><a href="/trades/${trade.slug}">Overview</a><a href="/free/${trade.slug}">Free Questions</a><a href="/trades/${trade.slug}/mock-test">Mock Test</a>${levels.map(l=>`<a href="/trades/${trade.slug}/level-${l}-exam-questions">Level ${l}</a>`).join('')}${trainingLevel ? `<a href="/trades/${trade.slug}/level-${trainingLevel}-exam-questions">Level ${trainingLevel} Training</a>` : ''}<a href="/trades/${trade.slug}/study-guide">Study Guide</a><a href="/trades/${trade.slug}/exam-preparation">Exam Prep</a><a href="/trades/${trade.slug}/red-seal-certification">Certification</a><a href="/trades/${trade.slug}/passing-score">Passing Score</a></div></nav>
<header class="seo-hero"><div class="seo-wrap"><nav class="seo-breadcrumb"><a href="/">Home</a><span>›</span><a href="/trades">Trades</a><span>›</span><a href="/trades/${trade.slug}">${esc(trade.title)}</a><span>›</span><b>${esc(type === 'level' ? `Level ${level}` : slugLabel(type))}</b></nav><p class="seo-kicker">${esc(data.kicker)}</p><h1>${esc(data.title)}</h1><p class="seo-lead">${esc(data.description)}</p><div class="seo-hero-actions"><a class="seo-btn primary" href="${data.cta[1]}">${esc(data.cta[0])}</a><a class="seo-btn secondary" href="/free/${trade.slug}">Try Free Questions</a><a class="seo-btn ghost" href="/trades/${trade.slug}">View ${esc(trade.title)} Hub</a></div></div></header>
<main class="seo-wrap seo-main"><div class="seo-content">${sectionHtml}<section class="seo-offer"><div><p class="seo-kicker">All preparation options</p><h2>Choose the right way to prepare</h2><p>${data.trainingRequired ? `Review available challenge-level practice and confirm Level ${level} technical-training requirements with the responsible authority.` : 'Use free questions, a single $20 mock test, a $20 level quiz, or full trade access for $99 CAD.'}</p></div><a class="seo-btn primary" href="/pricing?trade=${trade.slug}">Compare Access Options</a></section><section><p class="seo-kicker">${esc(trade.title)} resources</p><h2>Continue your preparation</h2>${cards(trade,levels,trainingLevel)}</section></div>
<aside class="seo-side"><div class="seo-side-card"><p class="seo-kicker">Quick access</p><h2>${esc(trade.title)}</h2><a href="/free/${trade.slug}">Free practice questions</a><a href="/mock-test/pricing?trade=${trade.slug}">$20 mock test</a>${levels.map(l=>`<a href="/trades/${trade.slug}/level-${l}-exam-questions">Level ${l} exam page</a>`).join('')}${trainingLevel ? `<a href="/trades/${trade.slug}/level-${trainingLevel}-exam-questions">Level ${trainingLevel} training information</a>` : ''}<a href="/pricing?trade=${trade.slug}">Full access — $99 CAD</a></div><div class="seo-note"><strong>Independent preparation:</strong> These are not official government exam questions. Confirm current rules with the responsible apprenticeship authority.</div></aside></main>
<div id="site-footer"></div><script src="/js/layout.min.js?release=20260724-mobile-fix" defer></script></body></html>`;
}

fs.rmSync(outRoot, {recursive:true, force:true});
fs.mkdirSync(outRoot,{recursive:true});
const trades = getAllTrades();
const exams = getAllSingleLevelExams();
const trainingRequiredLevels = getTrainingRequiredLevels();
const generatedUrls = [];
for (const trade of trades) {
  const dir = path.join(outRoot, trade.slug); fs.mkdirSync(dir,{recursive:true});
  const levels = [...new Set(exams.filter(x=>x.trade===trade.slug).map(x=>Number(x.level)))].sort((a,b)=>a-b);
  const trainingLevel = trainingRequiredLevels.find(item => item.trade === trade.slug)?.trainingLevel || null;
  for (const type of Object.keys(pageContent)) {
    fs.writeFileSync(path.join(dir, `${type}.html`), restyle(htmlPage(trade,levels,type,null,trainingLevel),'/trades'), 'utf8');
    generatedUrls.push(`/trades/${trade.slug}/${type}`);
  }
  for (const level of levels) {
    fs.writeFileSync(path.join(dir, `level-${level}-exam-questions.html`), restyle(htmlPage(trade,levels,'level',level,trainingLevel),'/trades'), 'utf8');
    generatedUrls.push(`/trades/${trade.slug}/level-${level}-exam-questions`);
  }
  if (trainingLevel) {
    fs.writeFileSync(path.join(dir, `level-${trainingLevel}-exam-questions.html`), restyle(htmlPage(trade,levels,'level',trainingLevel,trainingLevel),'/trades'), 'utf8');
    generatedUrls.push(`/trades/${trade.slug}/level-${trainingLevel}-exam-questions`);
  }
}


function resourceDirectoryPage(trades, exams) {
  const tradeCards = trades.map(trade => {
    const levels = [...new Set(exams.filter(x => x.trade === trade.slug).map(x => Number(x.level)))].sort((a,b)=>a-b);
    const levelLinks = levels.length
      ? levels.map(level => `<a href="/trades/${trade.slug}/level-${level}-exam-questions">Level ${level}</a>`).join('')
      : '<span class="library-no-levels">No separate level quiz listed</span>';
    const searchText = `${trade.title} ${trade.slug} mock test practice questions study guide exam preparation certification passing score ${levels.map(l=>`level ${l}`).join(' ')}`.toLowerCase();
    return `<article class="library-trade-card" data-search="${esc(searchText)}">
      <div class="library-card-head"><div><span class="library-category">${esc(trade.category || 'Skilled Trade')}</span><h2>${esc(trade.title)}</h2></div><a class="library-hub-link" href="/trades/${trade.slug}">Open trade hub →</a></div>
      <p>${esc(trade.description || `Explore ${trade.title} practice and study resources.`)}</p>
      <div class="library-action-grid">
        <a href="/free/${trade.slug}"><strong>Free questions</strong><span>Start with sample practice</span></a>
        <a href="/trades/${trade.slug}/mock-test"><strong>Mock test</strong><span>Exam format and access</span></a>
        <a href="/trades/${trade.slug}/study-guide"><strong>Study guide</strong><span>Topics and study method</span></a>
        <a href="/trades/${trade.slug}/exam-preparation"><strong>Exam preparation</strong><span>Study plan and test strategy</span></a>
        <a href="/trades/${trade.slug}/red-seal-certification"><strong>Certification</strong><span>Training and challenge pathway</span></a>
        <a href="/trades/${trade.slug}/passing-score"><strong>Passing score</strong><span>Scoring and readiness</span></a>
      </div>
      <div class="library-levels"><strong>Level exam pages</strong><div>${levelLinks}</div></div>
    </article>`;
  }).join('');
  return `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Trade Exam Resources: Mock Tests, Level Questions & Study Guides</title><meta name="description" content="Browse Red Seal practice resources by trade, including free questions, mock tests, Level exam pages, study guides, certification information and passing-score guidance."><link rel="canonical" href="${baseUrl}/trade-resources"><link rel="stylesheet" href="/css/premium-quiz.min.css?release=20260724-mobile-fix"><link rel="stylesheet" href="/css/reference-pro-theme.css?release=20260724-mobile-fix"><link rel="stylesheet" href="/css/mobile-responsive.min.css?release=20260724-mobile-fix"><link rel="stylesheet" href="/css/trade-resource-library.css?release=20260724-mobile-fix"><link rel=stylesheet href=/css/rs-theme.css?release=20261117-redesign></head><body class="trade-library-page"><div id="site-navbar"></div>
  <header class="library-hero"><div class="library-wrap"><nav class="library-breadcrumb"><a href="/">Home</a><span>›</span><a href="/trades">Trades</a><span>›</span><b>Preparation Library</b></nav><span class="library-kicker">Everything organized by trade</span><h1>Find every exam resource in one place</h1><p>Choose your trade to find free practice questions, mock tests, apprenticeship Level pages, study guides, exam-preparation plans, certification information and passing-score guidance.</p><div class="library-search"><label for="tradeResourceSearch">Search by trade or resource</label><div><input id="tradeResourceSearch" type="search" placeholder="Example: Carpenter Level 2 or Millwright mock test" autocomplete="off"><button type="button" id="clearResourceSearch">Clear</button></div><small id="resourceResultCount">Showing all ${trades.length} trades</small></div></div></header>
  <main class="library-wrap library-main"><section class="library-quick-links" aria-label="Popular resource types"><a href="/trades"><strong>Trade hubs</strong><span>Complete information for each trade</span></a><a href="/mock-tests"><strong>Practice tests</strong><span>Browse available mock tests</span></a><a href="/level-tests"><strong>Level quizzes</strong><span>Purchase individual level quizzes</span></a><a href="/exam-journey-support"><strong>Journey support</strong><span>Get help finding your next step</span></a></section><div class="library-heading"><div><span class="library-kicker">Browse all trades</span><h2>Complete preparation library</h2></div><p>Select any card below. Every resource page links back to its trade hub and to the other preparation pages.</p></div><div class="library-trade-grid" id="tradeResourceGrid">${tradeCards}</div><div class="library-empty" id="resourceEmpty" hidden><h2>No matching trade found</h2><p>Try a trade name such as Carpenter, Plumber, Welder, Automotive Technician or Millwright.</p><a href="/contact">Contact us about a missing trade</a></div></main><div id="site-footer"></div><script src="/js/layout.min.js?release=20260724-mobile-fix" defer></script><script src="/js/trade-resource-library.js?release=20260724-mobile-fix" defer></script></body></html>`;
}

fs.writeFileSync(path.join(root, 'views', 'trade-resources.html'), restyle(resourceDirectoryPage(trades, exams),'/trades'), 'utf8');
// Resource directory retired: all discovery now lives on /trades.

let sitemap = fs.readFileSync(sitemapPath,'utf8');
// Remove any prior generated block.
sitemap = sitemap.replace(/\n\s*<!-- TRADE SEO PAGES START -->[\s\S]*?<!-- TRADE SEO PAGES END -->\s*/g,'\n');
const block = `\n  <!-- TRADE SEO PAGES START -->\n${generatedUrls.map(url=>`  <url><loc>${baseUrl}${url}</loc><changefreq>monthly</changefreq><priority>0.75</priority></url>`).join('\n')}\n  <!-- TRADE SEO PAGES END -->\n`;
sitemap = sitemap.replace('</urlset>', block + '</urlset>');
fs.writeFileSync(sitemapPath,sitemap,'utf8');
console.log(`Generated ${generatedUrls.length} visible SEO page files in ${outRoot}`);
