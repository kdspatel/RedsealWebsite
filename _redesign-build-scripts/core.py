import re, os, sys, html
SP = '/tmp/claude-0/-home-claude/69038024-22ce-5d0f-bf4d-cb07154b7261/scratchpad'
ORIG = SP + '/orig/red-seal-practice-p-navjeet-singh-lab-patch-28'
REL = '20261118-redesign'

def _home():
    return open(SP + '/out2/redseal-practice-updated/views/home.html', encoding='utf-8').read()
_H = _home()
NOTICE = re.search(r'<div class="rsh-notice">.*?</div>', _H, re.S).group(0)
HEADER = re.search(r'<header class="rsh-header".*?</header>', _H, re.S).group(0)
FOOTER = re.search(r'<footer class="rsh-footer">.*?</footer>', _H, re.S).group(0)

def header_for(active):
    h = HEADER.replace('<a class="active" href="/">', '<a href="/">')
    if active:
        # mark the first top-level nav link that points to `active`
        h = h.replace('<a href="%s">' % active, '<a class="active" href="%s">' % active, 1)
    return h

def orig(rel):
    return open(os.path.join(ORIG, rel), encoding='utf-8').read()

def head_meta(src):
    """Keep title/description/canonical/og/twitter + JSON-LD of the original page, drop legacy css/js links."""
    m = re.search(r'<head>(.*?)</head>', src, re.S)
    h = m.group(1)
    h = re.sub(r'<link[^>]*rel="stylesheet"[^>]*>\s*', '', h)
    h = re.sub(r'<link[^>]*rel="preload"[^>]*as="style"[^>]*>\s*', '', h)
    h = re.sub(r'<meta\s+charset[^>]*>\s*', '', h)
    h = re.sub(r'<meta\s+name="viewport"[^>]*>\s*', '', h)
    h = re.sub(r'<style>\s*\.g-recaptcha.*?</style>\s*', '', h, flags=re.S)
    return h.strip()

FONTS = ('<link rel="preconnect" href="https://fonts.googleapis.com" />\n'
         '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />\n'
         '<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&amp;family=Space+Grotesk:wght@500;600;700&amp;display=swap" rel="stylesheet" />')

def page(src_rel, body, active=None, bodyclass='', extra_head='', scripts='', lang='en', keep_legacy_css=None):
    src = orig(src_rel)
    meta = head_meta(src)
    css = ('<link rel="stylesheet" href="/css/rs-home.css?release=%s" />\n'
           '<link rel="stylesheet" href="/css/rs-pages.css?release=%s" />') % (REL, REL)
    if keep_legacy_css:
        css += '\n' + keep_legacy_css
    return ('<!DOCTYPE html>\n<html lang="%s">\n<head>\n<meta charset="UTF-8" />\n'
            '<meta name="viewport" content="width=device-width, initial-scale=1.0" />\n%s\n%s\n%s\n%s\n</head>\n'
            '<body class="rsh rsp %s">\n%s\n%s\n<main id="top">\n%s\n</main>\n%s\n'
            '<script src="/js/rs-home.js?release=%s" defer></script>\n<script src="/js/rs-icons.js?release=%s" defer></script>\n%s\n</body>\n</html>\n') % (
        lang, meta, FONTS, css, extra_head, bodyclass, NOTICE, header_for(active), body, FOOTER, REL, REL, scripts)

CAPTCHA_ERR = ('<script id="captcha-error-message">\n(function(){var p=new URLSearchParams(location.search);'
  "if(p.get('error')==='captcha'){var f=document.querySelector('form');if(f){var m=document.createElement('p');"
  "m.setAttribute('role','alert');m.className='rsp-alert';m.textContent='Please complete the reCAPTCHA check and try again.';f.prepend(m);}}})();\n</script>")
RECAPTCHA = '<script src="https://www.google.com/recaptcha/api.js" async defer></script>'
SITEKEY = '6Ley2GMtAAAAAIfrpV5WtkQpkmCG_ru6LgMFy1F8'

SHIELD = '<svg viewBox="0 0 34 38" aria-hidden="true"><path d="M17 2l13 5v10c0 9-6 15-13 19C10 32 4 26 4 17V7z" fill="#fff" fill-opacity=".92"/><path d="M11 18.5l4.5 4.5 8-9" fill="none" stroke="#B3171F" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>'

def crumb(*items):
    out = ['<nav class="rsp-crumb" aria-label="Breadcrumb"><a href="/">Home</a>']
    for i, (label, href) in enumerate(items):
        out.append('<span>/</span>')
        if href: out.append('<a href="%s">%s</a>' % (href, label))
        else: out.append('<span aria-current="page">%s</span>' % label)
    out.append('</nav>')
    return ''.join(out)

def hero(title, lead='', tag='', crumbs=None, center=False, actions='', img=None, pos='50% 30%'):
    text = '%s%s<h1>%s</h1>%s%s' % (
        crumb(*crumbs) if crumbs else '',
        '<span class="rsp-tag">%s</span>' % tag if tag else '',
        title, '<p>%s</p>' % lead if lead else '',
        '<div class="rsp-actions">%s</div>' % actions if actions else '')
    if img:
        text = ('<div class="rsp-hero-grid"><div class="rsp-hero-copy">%s</div><div class="rsp-hero-media" aria-hidden="true">'
                '<img src="%s" alt="" loading="eager" style="object-position:%s" onerror="this.parentNode.remove()"></div></div>') % (text, img, pos)
    return '<section class="rsp-hero%s"><div class="rsh-wrap rsp-hero-in">%s</div></section>' % (' center' if center else '', text)

def write(root, rel, content):
    p = os.path.join(root, rel)
    os.makedirs(os.path.dirname(p), exist_ok=True)
    open(p, 'w', encoding='utf-8').write(content)
