(function () {
  'use strict';

  const currentPath = location.pathname.replace(/\/$/, '') || '/';
  document.documentElement.dataset.ui = 'modern-education-v2';
  document.body.dataset.page = currentPath.split('/').filter(Boolean)[0] || 'home';

  function markActiveNavigation() {
    document.querySelectorAll('.nav-links a, .site-nav-links a').forEach((link) => {
      try {
        const linkPath = new URL(link.href, location.origin).pathname.replace(/\/$/, '') || '/';
        const active = linkPath === '/' ? currentPath === '/' : currentPath.startsWith(linkPath);
        link.classList.toggle('is-active', active);
      } catch (_) {}
    });
  }

  function makeTablesResponsive() {
    document.querySelectorAll('table').forEach((table) => {
      if (table.parentElement && table.parentElement.classList.contains('table-wrap')) return;
      const wrapper = document.createElement('div');
      wrapper.className = 'table-wrap';
      table.parentNode.insertBefore(wrapper, table);
      wrapper.appendChild(table);
    });
  }

  function setupFaqAccordion() {
    document.querySelectorAll('.faq-item').forEach((item, index) => {
      const heading = item.querySelector('h3');
      const answer = item.querySelector('p');
      if (!heading || !answer || heading.dataset.accordionReady === 'true') return;
      heading.dataset.accordionReady = 'true';
      const answerId = `faq-answer-${index + 1}`;
      answer.id = answerId;
      heading.setAttribute('role', 'button');
      heading.setAttribute('tabindex', '0');
      heading.setAttribute('aria-controls', answerId);
      const setState = (open) => {
        item.classList.toggle('is-open', open);
        heading.setAttribute('aria-expanded', String(open));
        answer.setAttribute('aria-hidden', String(!open));
        answer.hidden = !open;
      };
      setState(item.classList.contains('is-open'));
      const toggle = () => setState(!item.classList.contains('is-open'));
      heading.addEventListener('click', toggle);
      heading.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          toggle();
        }
      });
    });
  }

  function addUsefulLabels() {
    document.querySelectorAll('.card .btn-card').forEach((button) => {
      if (!button.querySelector('.ui-arrow')) {
        const arrow = document.createElement('span');
        arrow.className = 'ui-arrow';
        arrow.textContent = '→';
        button.appendChild(arrow);
      }
    });
  }

  function enhance() {
    markActiveNavigation();
    makeTablesResponsive();
    setupFaqAccordion();
    addUsefulLabels();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', enhance);
  } else {
    enhance();
  }

  // Navbar is injected asynchronously by layout.js.
  setTimeout(enhance, 350);
  setTimeout(enhance, 900);
})();
