document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('tradeResourceSearch');
  const clear = document.getElementById('clearResourceSearch');
  const cards = Array.from(document.querySelectorAll('.library-trade-card'));
  const count = document.getElementById('resourceResultCount');
  const empty = document.getElementById('resourceEmpty');
  if (!input || !cards.length) return;

  const update = () => {
    const words = input.value.toLowerCase().trim().split(/\s+/).filter(Boolean);
    let visible = 0;
    cards.forEach(card => {
      const haystack = card.dataset.search || card.textContent.toLowerCase();
      const match = words.every(word => haystack.includes(word));
      card.hidden = !match;
      if (match) visible += 1;
    });
    count.textContent = words.length ? `Showing ${visible} matching trade${visible === 1 ? '' : 's'}` : `Showing all ${cards.length} trades`;
    empty.hidden = visible !== 0;
  };
  input.addEventListener('input', update);
  clear?.addEventListener('click', () => { input.value = ''; update(); input.focus(); });
});
