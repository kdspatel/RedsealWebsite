const fs = require('fs');
const path = require('path');
const tradeCertificationDetails = require('../data/tradeCertificationDetails');
const { getAllSingleLevelExams, getTrainingRequiredLevels } = require('../data/singleLevelExams');

const templatePath = path.join(__dirname, '../../views/trade-detail.html');

function escapeHtml(value = '') {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function buildFaqSchema(trade) {
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: `Can I try ${trade.title} practice questions for free?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Yes. This page links to the free ${trade.title} practice quiz so users can try sample Red Seal-style questions before upgrading.`
        }
      },
      {
        '@type': 'Question',
        name: `Where can I confirm current British Columbia apprenticeship requirements for ${trade.title}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Program hours, examinations, credits and training availability can change. Confirm current requirements directly with SkilledTradesBC, Technical Safety BC where applicable, and the selected training provider.'
        }
      },
      {
        '@type': 'Question',
        name: 'Are these official Red Seal exam questions?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. Red Seal Practice provides independent Red Seal-style study questions and is not affiliated with or endorsed by the official Red Seal Program.'
        }
      }
    ]
  });
}

function renderList(items = []) {
  if (!items.length) return '';
  return `<ul class="trade-guide-list">${items.map(item => `<li>${escapeHtml(item)}</li>`).join('')}</ul>`;
}

function renderSeoResources(trade) {
  const levels = [...new Set(
    getAllSingleLevelExams()
      .filter(exam => exam.trade === trade.slug)
      .map(exam => Number(exam.level))
  )].sort((a, b) => a - b);

  const resources = [
    ['Mock Test', `/trades/${trade.slug}/mock-test`, 'Full mock-exam information and direct access to the $20 test.'],
    ['Study Guide', `/trades/${trade.slug}/study-guide`, 'Topics, study methods and common preparation mistakes.'],
    ['Exam Preparation', `/trades/${trade.slug}/exam-preparation`, 'A practical preparation timeline and test-day strategy.'],
    ['Certification Guide', `/trades/${trade.slug}/red-seal-certification`, 'Apprenticeship, challenge and Red Seal pathway information.'],
    ['Passing Score', `/trades/${trade.slug}/passing-score`, 'Scoring expectations and readiness targets.']
  ];

  levels.forEach(level => {
    resources.push([
      `Level ${level} Exam Questions`,
      `/trades/${trade.slug}/level-${level}-exam-questions`,
      `Level ${level} information, study topics and the $20 Quiz 1 purchase option.`
    ]);
  });

  const trainingLevel = getTrainingRequiredLevels().find(item => item.trade === trade.slug)?.trainingLevel;
  if (trainingLevel) {
    resources.push([
      `Level ${trainingLevel} Technical Training`,
      `/trades/${trade.slug}/level-${trainingLevel}-exam-questions`,
      `Information about the final technical-training level. No individual challenge quiz is sold for this level.`
    ]);
  }

  return `<div class="trade-seo-resource-grid">${resources.map(([title, url, description]) => `
    <a class="trade-seo-resource-card" href="${url}">
      <strong>${escapeHtml(title)}</strong>
      <span>${escapeHtml(description)}</span>
      <b>Open page →</b>
    </a>`).join('')}</div>`;
}


function renderLevelNav(trade) {
  const levels = [...new Set(getAllSingleLevelExams().filter(exam => exam.trade === trade.slug).map(exam => Number(exam.level)))].sort((a,b)=>a-b);
  const trainingLevel = getTrainingRequiredLevels().find(item => item.trade === trade.slug)?.trainingLevel;
  const links = levels.map(level => `<a href="/trades/${trade.slug}/level-${level}-exam-questions">Level ${level}</a>`);
  if (trainingLevel) links.push(`<a href="/trades/${trade.slug}/level-${trainingLevel}-exam-questions">Level ${trainingLevel} Training</a>`);
  return links.join('');
}

function renderQuickFacts(details) {
  const facts = [
    ['Typical duration', details.quickFacts?.duration, 'calendar'],
    ['Technical training', details.quickFacts?.technicalTraining, 'school'],
    ['Work-based training', details.quickFacts?.workBasedTraining, 'clock'],
    ['Passing standard', details.quickFacts?.passingStandard, 'check'],
    ['Challenge experience', details.quickFacts?.challengeExperience, 'briefcase']
  ].filter(([, value]) => value);

  return facts.map(([label, value, icon]) => `
    <article class="trade-fact-card">
      <span class="trade-fact-icon" data-icon="${icon}" aria-hidden="true"></span>
      <div><strong>${escapeHtml(label)}</strong><p>${escapeHtml(value)}</p></div>
    </article>`).join('');
}

function renderTrainingLevels(levels = []) {
  if (!levels.length) return '<p>No separate technical-training level summary was supplied for this trade.</p>';
  return `<div class="trade-level-list">${levels.map(level => `
    <article class="trade-level-row">
      <span class="trade-level-number">${level.level ? `Level ${level.level}` : 'Training'}</span>
      <p>${escapeHtml(level.description)}</p>
    </article>`).join('')}</div>`;
}

function friendlySectionTitle(title) {
  const names = {
    'Apprenticeship Training and Certification': 'Apprenticeship pathway and certification requirements',
    'Examinations and Grading': 'Examinations, grading and passing requirements',
    'Foundation or Entry Training': 'Foundation or entry-training pathway',
    'Challenging Individual Training Levels': 'Challenging individual training levels',
    'Certification Challenge Pathway': 'Experienced-worker certification challenge',
    'Related-Trade or Prior-Learning Credits': 'Related-trade and prior-learning credits',
    'Additional Notes': 'Additional notes'
  };
  return names[title] || title;
}

function renderCertificationGuide(details) {
  const blocks = [];

  const apprenticeship = details.sections.find(section => section.title === 'Apprenticeship Training and Certification');
  if (apprenticeship) {
    blocks.push(`
      <details class="trade-guide-accordion" open>
        <summary><span class="trade-guide-index">01</span><span><strong>${friendlySectionTitle(apprenticeship.title)}</strong><small>Program length, technical training, workplace hours and certification conditions.</small></span></summary>
        <div class="trade-guide-panel">${renderList(apprenticeship.items)}</div>
      </details>`);
  }

  blocks.push(`
    <details class="trade-guide-accordion">
      <summary><span class="trade-guide-index">02</span><span><strong>Technical-training levels</strong><small>What is generally covered at each stage of training.</small></span></summary>
      <div class="trade-guide-panel">${renderTrainingLevels(details.trainingLevels)}</div>
    </details>`);

  let index = 3;
  details.sections
    .filter(section => section.title !== 'Apprenticeship Training and Certification')
    .forEach(section => {
      blocks.push(`
        <details class="trade-guide-accordion">
          <summary><span class="trade-guide-index">${String(index).padStart(2, '0')}</span><span><strong>${escapeHtml(friendlySectionTitle(section.title))}</strong><small>Select to view the supplied requirements and notes.</small></span></summary>
          <div class="trade-guide-panel">${renderList(section.items)}</div>
        </details>`);
      index += 1;
    });

  return blocks.join('');
}

function renderTradePage(trade, baseUrl = 'https://www.redsealpractice.ca') {
  let html = fs.readFileSync(templatePath, 'utf8');
  const details = tradeCertificationDetails[trade.slug] || {
    overview: trade.description,
    quickFacts: {},
    trainingLevels: [],
    sections: []
  };

  const metaTitle = `${trade.title} BC Apprenticeship & Red Seal Practice Guide`;
  const metaDescription = `Review British Columbia ${trade.title} apprenticeship levels, training hours, examinations, challenge pathways, free practice questions and premium quizzes.`;
  const canonicalUrl = `${baseUrl.replace(/\/$/, '')}/trades/${trade.slug}`;
  const topicsHtml = (trade.topics || []).map(topic => `<li>${escapeHtml(topic)}</li>`).join('\n');

  const values = {
    metaTitle,
    metaDescription,
    canonicalUrl,
    title: trade.title,
    slug: trade.slug,
    category: trade.category,
    audience: trade.audience,
    description: trade.description,
    officialOverview: details.overview || trade.description,
    freeUrl: trade.freeUrl,
    premiumUrl: trade.premiumUrl,
    pricingUrl: trade.pricingUrl,
    mockTestUrl: `/mock-test/pricing?trade=${trade.slug}`, 
    topicsHtml,
    quickFactsHtml: renderQuickFacts(details),
    certificationGuideHtml: renderCertificationGuide(details),
    seoResourcesHtml: renderSeoResources(trade),
    levelNavHtml: renderLevelNav(trade),
    faqSchema: buildFaqSchema(trade)
  };

  Object.entries(values).forEach(([key, value]) => {
    const rawKeys = new Set(['topicsHtml', 'quickFactsHtml', 'certificationGuideHtml', 'seoResourcesHtml', 'levelNavHtml', 'faqSchema']);
    const safeValue = rawKeys.has(key) ? value : escapeHtml(value);
    html = html.replace(new RegExp(`{{${key}}}`, 'g'), safeValue);
  });

  return html;
}

module.exports = renderTradePage;
