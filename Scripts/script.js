function filterSelection(tag) {
  const cards = document.querySelectorAll('.portfolio-item');

  cards.forEach(card => {
      const tags = card.getAttribute('data-tech').split(',');

      if (tag === 'all' || tags.includes(tag)) {
          card.style.display = 'inline-block';
      } else {
          card.style.display = 'none';
      }
  });
}