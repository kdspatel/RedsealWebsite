document.addEventListener('DOMContentLoaded', () => {
  const buttons = [...document.querySelectorAll('.news-filter')];
  const cards = [...document.querySelectorAll('.news-card')];
  const noResults = document.getElementById('newsNoResults');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const filter = button.dataset.filter || 'all';
      buttons.forEach(item => item.classList.toggle('is-active', item === button));
      let shown = 0;
      cards.forEach(card => {
        const match = filter === 'all' || card.dataset.category === filter;
        card.hidden = !match;
        if (match) shown += 1;
      });
      if (noResults) noResults.hidden = shown !== 0;
    });
  });
});
