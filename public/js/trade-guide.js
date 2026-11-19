(() => {
  const accordions = Array.from(document.querySelectorAll('.trade-guide-accordion'));
  accordions.forEach(item => {
    item.addEventListener('toggle', () => {
      if (!item.open) return;
      accordions.forEach(other => {
        if (other !== item) other.open = false;
      });
    });
  });
})();
