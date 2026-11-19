/* Red Seal Practice - inner page behaviour: FAQ accordion + search, terms table of contents. Content is never changed, only shown/hidden. */
(function () {
  // ---- FAQ accordion ----
  var items = Array.prototype.slice.call(document.querySelectorAll('.faq-item'));
  if (items.length) {
    document.body.classList.add('rsp-faq-js');
    items.forEach(function (it, i) {
      var h = it.querySelector('h3'); if (!h) return;
      h.setAttribute('role', 'button'); h.setAttribute('tabindex', '0');
      h.setAttribute('aria-expanded', it.classList.contains('is-open') ? 'true' : 'false');
      function toggle() { var o = it.classList.toggle('is-open'); h.setAttribute('aria-expanded', String(o)); }
      h.addEventListener('click', toggle);
      h.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(); } });
    });
    var nav = document.querySelector('.faq-quick-nav');
    if (nav) {
      var box = document.createElement('div'); box.className = 'rsp-faq-tools';
      box.innerHTML = '<input type="search" id="rspFaqSearch" placeholder="Search questions…" aria-label="Search FAQ"><button type="button" id="rspFaqAll">Expand all</button>';
      nav.parentNode.insertBefore(box, nav.nextSibling);
      var s = box.querySelector('input'), b = box.querySelector('button'), all = false;
      s.addEventListener('input', function () {
        var q = s.value.trim().toLowerCase();
        items.forEach(function (it) {
          var m = !q || it.textContent.toLowerCase().indexOf(q) > -1;
          it.style.display = m ? '' : 'none';
          if (q && m) it.classList.add('is-open');
        });
        document.querySelectorAll('.seo-section').forEach(function (sec) {
          var any = Array.prototype.some.call(sec.querySelectorAll('.faq-item'), function (x) { return x.style.display !== 'none'; });
          sec.style.display = any ? '' : 'none';
        });
      });
      b.addEventListener('click', function () {
        all = !all; items.forEach(function (it) { it.classList.toggle('is-open', all); var h = it.querySelector('h3'); if (h) h.setAttribute('aria-expanded', String(all)); });
        b.textContent = all ? 'Collapse all' : 'Expand all';
      });
    }
  }
  // ---- Terms: table of contents ----
  var card = document.querySelector('.terms-card');
  if (card) {
    var hs = card.querySelectorAll('h2');
    if (hs.length > 2) {
      var toc = document.createElement('nav'); toc.className = 'rsp-toc'; toc.setAttribute('aria-label', 'On this page');
      var html = '<strong>On this page</strong>';
      Array.prototype.forEach.call(hs, function (h, i) { if (!h.id) h.id = 'sec-' + (i + 1); html += '<a href="#' + h.id + '">' + h.textContent + '</a>'; });
      toc.innerHTML = html;
      var shell = card.parentNode; shell.classList.add('rsp-has-toc'); shell.insertBefore(toc, card);
      var links = toc.querySelectorAll('a');
      if ('IntersectionObserver' in window) {
        var io = new IntersectionObserver(function (es) {
          es.forEach(function (e) { if (e.isIntersecting) { links.forEach(function (l) { l.classList.toggle('on', l.getAttribute('href') === '#' + e.target.id); }); } });
        }, { rootMargin: '-20% 0px -70% 0px' });
        Array.prototype.forEach.call(hs, function (h) { io.observe(h); });
      }
    }
  }
})();