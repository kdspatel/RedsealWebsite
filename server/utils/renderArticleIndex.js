const fs = require('fs');
const path = require('path');

const templatePath = path.join(__dirname, '../../views/blog.html');
let cachedTemplate = null;

function template() {
  if (!cachedTemplate) cachedTemplate = fs.readFileSync(templatePath, 'utf8');
  return cachedTemplate;
}

function escapeHtml(value = '') {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function prettyDate(value) {
  return new Intl.DateTimeFormat('en-CA', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(new Date(value));
}

function imageMarkup(article) {
  const image = article.image || '/images/articles/default-article.svg';
  return `<img src="${escapeHtml(image)}" alt="${escapeHtml(article.imageAlt || article.title)}" loading="lazy" onerror="this.src='/images/articles/default-article.svg'">`;
}

module.exports = function renderArticleIndex(articles) {
  const [featured, ...remaining] = articles;
  const categories = [...new Set(articles.map(article => article.category))].sort();

  const featuredArticle = featured ? `
    <article class="news-feature-card" data-category="${escapeHtml(featured.category)}">
      <a class="news-feature-image" href="/blog/${escapeHtml(featured.slug)}">
        ${imageMarkup(featured)}
      </a>
      <div class="news-feature-content">
        <span class="news-category">${escapeHtml(featured.category)}</span>
        <h2><a href="/blog/${escapeHtml(featured.slug)}">${escapeHtml(featured.title)}</a></h2>
        <p>${escapeHtml(featured.description)}</p>
        <div class="news-meta">
          <span>${escapeHtml(featured.author || 'Red Seal Practice Editorial Team')}</span>
          <time datetime="${escapeHtml(featured.publishedAt)}">${escapeHtml(prettyDate(featured.publishedAt))}</time>
          <span>${escapeHtml(featured.readingMinutes || 5)} min read</span>
        </div>
        <a class="news-read-button" href="/blog/${escapeHtml(featured.slug)}">Read full article <span aria-hidden="true">→</span></a>
      </div>
    </article>` : '';

  const cards = remaining.map(article => `
    <article class="news-card" data-category="${escapeHtml(article.category)}">
      <a class="news-card-image" href="/blog/${escapeHtml(article.slug)}">
        ${imageMarkup(article)}
      </a>
      <div class="news-card-body">
        <span class="news-category">${escapeHtml(article.category)}</span>
        <h2><a href="/blog/${escapeHtml(article.slug)}">${escapeHtml(article.title)}</a></h2>
        <p>${escapeHtml(article.description)}</p>
        <div class="news-card-meta">
          <time datetime="${escapeHtml(article.publishedAt)}">${escapeHtml(prettyDate(article.publishedAt))}</time>
          <span>${escapeHtml(article.readingMinutes || 5)} min read</span>
        </div>
      </div>
    </article>`).join('');

  const categoryFilters = [
    '<button class="news-filter is-active" type="button" data-filter="all">All</button>',
    ...categories.map(category => `<button class="news-filter" type="button" data-filter="${escapeHtml(category)}">${escapeHtml(category)}</button>`)
  ].join('');

  return template()
    .replace('{{featuredArticle}}', featuredArticle)
    .replace('{{articleCards}}', cards)
    .replace('{{categoryFilters}}', categoryFilters);
};
