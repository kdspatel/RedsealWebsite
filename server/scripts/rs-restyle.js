// Applies the Red Seal Practice redesign shell (header, footer, stylesheets) to generated pages.
const chrome = require('./rs-chrome.json');
const FONTS = '<link rel="preconnect" href="https://fonts.googleapis.com" /><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin /><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&amp;family=Space+Grotesk:wght@500;600;700&amp;display=swap" rel="stylesheet" />';
module.exports = function restyle(html, activeHref) {
  let header = chrome.header.replace('<a class="active" href="/">', '<a href="/">');
  if (activeHref) header = header.replace('<a href="' + activeHref + '">', '<a class="active" href="' + activeHref + '">');
  html = html
    .replace(/<link[^>]*rel=["']?stylesheet["']?[^>]*>/gi, '')
    .replace(/<div id="site-navbar"><\/div>/, '')
    .replace(/<div id="site-footer"><\/div>/, '')
    .replace(/<script[^>]*src="[^"]*\/layout(?:\.min)?\.js[^"]*"[^>]*><\/script>/g, '');
  const css = FONTS + '<link rel="stylesheet" href="/css/rs-home.css?release=' + chrome.rel + '" /><link rel="stylesheet" href="/css/rs-pages.css?release=' + chrome.rel + '" />';
  html = html.replace('</head>', css + '</head>');
  html = html.replace(/<body class="([^"]*)">/, '<body class="$1 rsh rsp rsp-legacy">' + chrome.notice + header + '<div id="top">');
  html = html.replace('</body>', '</div>' + chrome.footer + '<script src="/js/rs-home.js?release=' + chrome.rel + '" defer></script><script src="/js/rs-icons.js?release=' + chrome.rel + '" defer></script></body>');
  return html;
};
