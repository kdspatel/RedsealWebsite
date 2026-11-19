const fs = require('fs');
const path = require('path');

const templatePath = path.join(__dirname, '../../views/article-detail.html');
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

function renderReferences(references = []) {
  if (!references.length) return '';
  const items = references.map(reference => {
    const label = escapeHtml(reference.label || 'Source');
    const url = String(reference.url || '').trim();
    return `<li>${url ? `<a href="${escapeHtml(url)}" target="_blank" rel="noopener noreferrer">${label}</a>` : label}</li>`;
  }).join('');
  return `<section class="news-article-references"><h2>Sources and further reading</h2><ol>${items}</ol></section>`;
}

function renderTags(tags = []) {
  if (!tags.length) return '';
  return `<div class="news-article-tags">${tags.map(tag => `<span>${escapeHtml(tag)}</span>`).join('')}</div>`;
}

module.exports = function renderArticlePage(article, baseUrl = 'https://www.redsealpractice.ca') {
  const cleanBase = baseUrl.replace(/\/$/, '');
  const url = `${cleanBase}/blog/${article.slug}`;
  const image = article.image || '/images/articles/default-article.svg';
  const absoluteImage = image.startsWith('http') ? image : `${cleanBase}${image}`;
  const updatedAt = article.updatedAt || article.publishedAt;

  return template()
    .replaceAll('{{title}}', escapeHtml(article.title))
    .replaceAll('{{description}}', escapeHtml(article.description))
    .replaceAll('{{category}}', escapeHtml(article.category))
    .replaceAll('{{canonicalUrl}}', escapeHtml(url))
    .replaceAll('{{imageUrl}}', escapeHtml(image))
    .replaceAll('{{absoluteImageUrl}}', escapeHtml(absoluteImage))
    .replaceAll('{{imageAlt}}', escapeHtml(article.imageAlt || article.title))
    .replaceAll('{{publishedDate}}', escapeHtml(prettyDate(article.publishedAt)))
    .replaceAll('{{updatedDate}}', escapeHtml(prettyDate(updatedAt)))
    .replaceAll('{{publishedIso}}', escapeHtml(article.publishedAt))
    .replaceAll('{{updatedIso}}', escapeHtml(updatedAt))
    .replaceAll('{{readingMinutes}}', escapeHtml(article.readingMinutes || 5))
    .replaceAll('{{author}}', escapeHtml(article.author || 'Red Seal Practice Editorial Team'))
    .replace('{{articleContent}}', article.content || '')
    .replace('{{articleReferences}}', renderReferences(article.references))
    .replace('{{articleTags}}', renderTags(article.tags))
    .replace('{{articleDisclaimer}}', article.disclaimer ? `<div class="news-article-disclaimer"><strong>Editorial note:</strong> ${escapeHtml(article.disclaimer)}</div>` : '');
};
