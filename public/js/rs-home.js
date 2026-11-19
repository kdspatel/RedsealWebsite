/* Red Seal Practice - homepage behaviour: mobile menu, dropdowns, login state, "View all trades" link. */
(function () {
  var header = document.getElementById('rshHeader');
  var burger = document.getElementById('rshBurger');

  function closeAll() {
    document.querySelectorAll('.rsh-dd.open').forEach(function (d) {
      d.classList.remove('open');
      var b = d.querySelector('.rsh-dd-btn');
      if (b) b.setAttribute('aria-expanded', 'false');
    });
  }

  if (burger && header) {
    burger.addEventListener('click', function () {
      var open = header.classList.toggle('open');
      burger.setAttribute('aria-expanded', String(open));
      burger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    });
  }

  document.querySelectorAll('.rsh-dd-btn').forEach(function (btn) {
    btn.addEventListener('click', function (ev) {
      ev.stopPropagation();
      var parent = btn.closest('.rsh-dd');
      var willOpen = !parent.classList.contains('open');
      closeAll();
      parent.classList.toggle('open', willOpen);
      btn.setAttribute('aria-expanded', String(willOpen));
    });
  });
  document.addEventListener('click', closeAll);
  document.addEventListener('keydown', function (ev) {
    if (ev.key === 'Escape') {
      closeAll();
      if (header) header.classList.remove('open');
    }
  });

  // Same session endpoint the old navbar used (/api/session). Logged-in visitors see Dashboard + Log out.
  function setLoggedIn(user) {
    var auth = document.getElementById('rshAuth');
    if (auth) {
      auth.innerHTML = '<a class="rsh-user-btn" href="/account">' + (user && user.province ? user.province : 'My Account') + '</a>' +
        '<a class="rsh-out" href="/logout">Log out</a>';
    }
    ['guestPrimaryCta', 'guestBottomCta', 'rshAccountLink'].forEach(function (id) {
      var el = document.getElementById(id);
      if (el) el.classList.add('hidden');
    });
    ['userPrimaryCta', 'userBottomCta'].forEach(function (id) {
      var el = document.getElementById(id);
      if (el) el.classList.remove('hidden');
    });
  }

  fetch('/api/session', { credentials: 'include' })
    .then(function (r) { return r.json(); })
    .then(function (s) { if (s && s.loggedIn) setLoggedIn(s.user); })
    .catch(function () {});

  // Trade search + "View all"
  var grid = document.getElementById('premium-trades');
  var input = document.getElementById('rshTradeSearch');
  var count = document.getElementById('rshTradeCount');
  var empty = document.getElementById('rshTradeEmpty');
  var viewAll = document.getElementById('rshViewAll');
  if (grid && input) {
    var cards = Array.prototype.slice.call(grid.querySelectorAll('.rsh-trade'));
    input.addEventListener('input', function () {
      var q = input.value.trim().toLowerCase();
      var shown = 0;
      grid.classList.toggle('searching', q.length > 0);
      cards.forEach(function (c) {
        var match = !q || (c.getAttribute('data-name') || '').indexOf(q) !== -1;
        c.classList.toggle('hide', !match);
        if (match) shown++;
      });
      if (count) count.textContent = q ? shown + ' found' : '';
      if (empty) empty.hidden = !(q && shown === 0);
      if (viewAll) viewAll.parentNode.hidden = q.length > 0;
    });
  }
  if (grid && viewAll) {
    viewAll.addEventListener('click', function () {
      var open = grid.classList.toggle('all');
      viewAll.textContent = open ? viewAll.getAttribute('data-less') : viewAll.getAttribute('data-all');
      viewAll.setAttribute('aria-expanded', String(open));
      if (!open) grid.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }

  // Same behaviour as before: logged-in visitors go to /trades, guests jump to the trade list.
  document.querySelectorAll('.trades-link').forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      fetch('/api/session', { credentials: 'include' })
        .then(function (r) { return r.json(); })
        .catch(function () { return { loggedIn: false }; })
        .then(function (s) {
          if (s && s.loggedIn) { window.location.href = '/trades'; return; }
          var t = document.getElementById('premium-trades');
          if (t) t.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });
  });
})();
