let trades = [];
let ownedTradesCache = [];


function getTradeIcon(slug) {
  const icons = {
    'architectural-sheet-metal-worker':'🏗️','automotive-technician':'🚗','automotive-service-technician':'🚗',
    'baker':'🧁','bricklayer':'🧱','cabinet-maker':'🪟','carpenter':'🪚','carpentry':'🪚',
    'concrete-finisher':'🧰','construction-electrician':'⚡','drywall-finisher-and-plasterer':'🛠️',
    'gasfitter-a':'🔥','gasfitter-b':'🔥','heavy-duty-equipment-technician':'🚜','industrial-electrician':'🔌',
    'industrial-mechanic-millwright':'⚙️','meatcutter':'🔪','motorcycle-technician':'🏍️',
    'painter-and-decorator':'🎨','plumber':'🚰','refrigeration-air-conditioning':'❄️','roofer':'🏠','welder':'🔥'
  };
  return icons[slug] || '🧰';
}

function formatDate(value) {
  return new Date(value).toDateString();
}

function safe(value) {
  return String(value || '').replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' }[char]));
}

function getTradeTitle(slug) {
  const trade = trades.find(item => item.slug === slug);
  return trade ? trade.title : slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
}

function populateCategoryFilter() {
  const filter = document.getElementById('tradeCategoryFilter');
  if (!filter) return;
  const categories = Array.from(new Set(trades.map(trade => trade.category).filter(Boolean))).sort();
  filter.innerHTML = '<option value="">All categories</option>' + categories.map(category => `<option value="${safe(category)}">${safe(category)}</option>`).join('');
}

function getFilteredTrades() {
  const search = String(document.getElementById('tradeSearchInput')?.value || '').toLowerCase().trim();
  const category = String(document.getElementById('tradeCategoryFilter')?.value || '').trim();

  return trades.filter(trade => {
    const matchesSearch = !search || [trade.title, trade.slug, trade.category, trade.description, trade.desc]
      .filter(Boolean)
      .some(value => String(value).toLowerCase().includes(search));
    const matchesCategory = !category || trade.category === category;
    return matchesSearch && matchesCategory;
  });
}

function renderTrades(ownedTrades) {
  const grid = document.getElementById('tradesGrid');
  const resultCount = document.getElementById('tradeResultCount');
  if (!grid) return;

  const ownedTradeSlugs = ownedTrades.map(t => t.trade);
  const hasActiveTrade = ownedTradeSlugs.length > 0;
  const filteredTrades = getFilteredTrades();

  if (resultCount) resultCount.textContent = `${filteredTrades.length} of ${trades.length} trades shown`;
  grid.innerHTML = '';

  if (!filteredTrades.length) {
    grid.innerHTML = '<div class="trade-empty-state"><strong>No matching trade found</strong>Try another keyword, choose All categories, or <a href="mailto:support@redsealpractice.ca?subject=Please%20add%20my%20trade">email us to request this trade</a>.</div>';
    return;
  }

  filteredTrades.forEach(trade => {
    const owned = ownedTradeSlugs.includes(trade.slug);
    const ownedEntry = ownedTrades.find(t => t.trade === trade.slug);
    const card = document.createElement('article');
    card.className = 'rspx-trade-card';

    let priceLabel = '$99 CAD';
    let priceNote = 'First trade full access';
    let actionText = 'Get Full Access — $99';
    let actionHref = `/pricing?trade=${trade.slug}`;
    let actionClass = 'rspx-trade-buy';

    if (owned) {
      priceLabel = 'Active Access';
      priceNote = `Available until ${formatDate(ownedEntry.expiresAt)}`;
      actionText = 'Open My Trade';
      actionHref = trade.premiumUrl;
      actionClass += ' rspx-owned';
    } else if (hasActiveTrade) {
      priceLabel = '$40 CAD';
      priceNote = 'Additional trade access';
      actionText = 'Add Trade — $40';
    }

    card.innerHTML = `
      <div class="rspx-trade-head">
        <div class="rspx-trade-icon" aria-hidden="true">${getTradeIcon(trade.slug)}</div>
        <div class="rspx-trade-heading">
          <span class="rspx-trade-category">${safe(trade.category || 'Skilled Trade')}</span>
          <h2 class="rspx-trade-title">${safe(trade.title)}</h2>
        </div>
      </div>
      <p class="rspx-trade-description">${safe(trade.desc || trade.description || `Prepare for ${trade.title} practice.`)}</p>
      <div class="rspx-trade-features">
        <span>1,200+ questions</span><span>Detailed explanations</span><span>Progress tracking</span><span>Mobile-friendly study</span>
      </div>
      <div class="rspx-trade-price"><strong>${priceLabel}</strong><span>${priceNote}</span></div>
      <a class="rspx-trade-primary" href="/trades/${trade.slug}">View Trade Hub →</a>
      <div class="rspx-trade-links">
        <a href="/free/${trade.slug}">Free Practice</a>
        <a href="/trades/${trade.slug}/mock-test">Mock Test</a>
        <a href="/level-tests">Level Quizzes</a>
      </div>
      <a class="${actionClass}" rel="nofollow" href="${actionHref}">${actionText}</a>
    `;

    grid.appendChild(card);
  });
}

async function loadTrades() {
  const grid=document.getElementById('tradesGrid');
  if(grid)grid.innerHTML=Array.from({length:6},()=>'<div class="rsp7-inline-skeleton" aria-hidden="true"></div>').join('');
  const expiryBox = document.getElementById('expiryBox');

  try {
    const tradesRes = await fetch('/api/trades');
    const tradesData = await tradesRes.json();
    trades = tradesData.trades || [];
    populateCategoryFilter();
  } catch (err) {
    console.error('Could not load trade data', err);
  }

  try {
    const res = await fetch('/api/my-access');
    const data = await res.json();
    ownedTradesCache = data.trades || [];
  } catch (err) {
    console.error('Could not load access data', err);
  }

  if (ownedTradesCache.length > 0 && expiryBox) {
    expiryBox.style.display = 'block';
    expiryBox.classList.add('active-access-section');
    expiryBox.innerHTML = `
      <div class="active-access-plan-banner">
        <div class="plan-crown">♛</div>
        <div class="plan-banner-copy">
          <strong>Save more with flexible access plans</strong>
          <span>Choose the plan that fits your goals and continue preparing with focused Canadian trade exam practice.</span>
        </div>
        <div class="plan-price-chips">
          <span class="plan-price-chip">First Trade · $99 CAD</span>
          <span class="plan-price-chip">Additional Trades · $40 CAD</span>
          <span class="plan-price-chip">Separate 4-Month Access</span>
        </div>
      </div>
      <div class="active-access-heading">
        <div>
          <span class="section-eyebrow">Your purchases</span>
          <h2>Active Trade Access</h2>
          <p>Open a trade or review when its access period ends.</p>
        </div>
        <a href="/account" class="manage-access-btn">Manage Account</a>
      </div>
      <div class="active-access-grid">
        ${ownedTradesCache.map(t => `
          <article class="active-access-card">
            <div class="active-access-icon">${getTradeIcon(t.trade)}</div>
            <div>
              <strong>${safe(getTradeTitle(t.trade))}</strong>
              <span>▣ Access expires ${formatDate(t.expiresAt)}</span>
            </div>
            <div class="active-access-status">✓</div>
            <a href="/${encodeURIComponent(t.trade)}">Open Trade</a>
          </article>
        `).join('')}
      </div>
      <div class="active-access-benefits">
        <div class="benefit-lead">
          <div class="benefit-shield">✓</div>
          <div><strong>Unlimited practice. Better results.</strong><span>Access exam-style questions, track your progress, and prepare with confidence.</span></div>
        </div>
        <div class="benefit-item">Real Exam Experience</div>
        <div class="benefit-item">Detailed Explanations</div>
        <div class="benefit-item">Progress Tracking</div>
        <div class="benefit-item">Study Anywhere</div>
      </div>
    `;
  }

  renderTrades(ownedTradesCache);
}

function bindTradeSearch() {
  const search = document.getElementById('tradeSearchInput');
  const category = document.getElementById('tradeCategoryFilter');
  search?.addEventListener('input', () => renderTrades(ownedTradesCache));
  category?.addEventListener('change', () => renderTrades(ownedTradesCache));
}

bindTradeSearch();
loadTrades();
