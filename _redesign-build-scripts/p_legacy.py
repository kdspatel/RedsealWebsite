from core import *
import glob

DROP_SCRIPT = re.compile(r'<script[^>]*src="[^"]*(?:/layout(?:\.min)?\.js|modern-education-ui\.js|reference-pro-theme\.js|load-components(?:\.min)?\.js)[^"]*"[^>]*>\s*</script>\s*', re.I)

def active_for(path):
    m = {'faq':'/faq','contact':'/contact','blog':'/blog','article-detail':'/blog','provinces':'/provinces','community':'/community',
         'exam-journey-support':'/exam-journey-support','trade-resources':'/trades','trade-detail':'/trades','level-exams':'/level-tests'}
    b = os.path.basename(path).replace('.html','')
    if 'provinces/' in path: return '/provinces'
    if 'level-exams/' in path: return '/level-tests'
    if b.startswith('free-'): return '/practice-tests'
    return m.get(b)

def transform(src_rel, active=None, text=None):
    src = text if text is not None else orig(src_rel)
    meta = head_meta(src)
    # keep inline <style> in head? they are page specific legacy tweaks; keep.
    bm = re.search(r'<body([^>]*)>(.*)</body>', src, re.S)
    attrs, inner = bm.group(1), bm.group(2)
    cm = re.search(r'class="([^"]*)"', attrs)
    bclass = cm.group(1) if cm else ''
    inner = re.sub(r'<div id="site-navbar">\s*</div>\s*', '', inner)
    inner = re.sub(r'<div id="site-footer">\s*</div>\s*', '', inner)
    inner = DROP_SCRIPT.sub('', inner)
    # scripts stay where they are, but move to the end so they run after markup
    scripts = re.findall(r'<script\b.*?</script>', inner, re.S)
    pg = os.path.basename(src_rel)
    IMG = '<img class="rsp-pic" src="/images/pages/%s.jpg" alt="" loading="eager" onerror="this.remove()">'
    if pg == 'faq.html':
        inner = re.sub(r'<img src="/images/ui/faq-support.jpg"[^>]*>', '<img src="/images/pages/faq.jpg" alt="Red Seal and apprenticeship exam support" onerror="this.hidden=true; this.parentElement.classList.add(\'image-missing\');">', inner)
    elif pg == 'contact.html':
        inner = inner.replace('<div class="hero-card">', '<div class="hero-card">' + IMG % 'faq', 1)
    elif pg == 'exam-journey-support.html':
        inner = re.sub(r'(<header class="journey-hero">\s*<div class="journey-wrap">)', r'\1<div class="rsp-hero-text">', inner, 1)
        inner = re.sub(r'(</div>)(\s*</header>)', lambda m: '</div>' + (IMG % 'journey') + m.group(1) + m.group(2), inner, 1)
    elif pg == 'provinces.html':
        inner = inner.replace('</section>', IMG % 'journey' + '</section>', 1)
    inner_no = re.sub(r'<script\b.*?</script>', '', inner, flags=re.S)
    quizcss = ''
    if 'premium-quiz' in src:
        hs = re.findall(r'<link[^>]*rel="stylesheet"[^>]*>', src)
        keep = [h for h in hs if re.search(r'premium-quiz|quiz-unified|premium-access-cta|quiz-desktop-polish|extracted/(public-free|private-|public-level)', h)]
        quizcss = '\n'.join(keep) + '\n'
    css = quizcss + ('<link rel="stylesheet" href="/css/rs-home.css?release=%s" />\n'
           '<link rel="stylesheet" href="/css/rs-pages.css?release=%s" />') % (REL, REL)
    return ('<!DOCTYPE html>\n<html lang="en">\n<head>\n<meta charset="UTF-8" />\n'
            '<meta name="viewport" content="width=device-width, initial-scale=1.0" />\n%s\n%s\n%s\n</head>\n'
            '<body class="%s rsh rsp rsp-legacy">\n%s\n%s\n<main id="top">\n%s\n</main>\n%s\n'
            '<script src="/js/rs-home.js?release=%s" defer></script>\n<script src="/js/rs-icons.js?release=%s" defer></script>\n<script src="/js/rs-pages.js?release=%s" defer></script>\n%s\n</body>\n</html>\n') % (
        meta, FONTS, css, bclass, NOTICE, header_for(active), inner_no.strip(), FOOTER, REL, REL, REL, '\n'.join(scripts))

PAGES = ['faq','contact','terms-and-conditions','exam-journey-support','provinces','community','blog','article-detail',
         'account','trade-resources','level-exams','trade-detail']

def build(root):
    for n in PAGES:
        rel = 'views/%s.html' % n
        write(root, rel, transform(rel, active_for(rel)))
    for pat in ['views/provinces/*.html','public/free-*.html','public/level-exams/*.html','views/trade-seo-pages/*/*.html']:
        for f in sorted(glob.glob(os.path.join(ORIG, pat))):
            rel = os.path.relpath(f, ORIG)
            write(root, rel, transform(rel, active_for(rel)))
