const prefersReducedMotion = window.matchMedia(
  '(prefers-reduced-motion: reduce)',
);

function initCarousel(carousel) {
  const track = carousel.querySelector('[data-carousel-track]');
  const prev = carousel.querySelector('[data-carousel-prev]');
  const next = carousel.querySelector('[data-carousel-next]');

  const behavior = () => (prefersReducedMotion.matches ? 'auto' : 'smooth');

  const step = () => {
    const [first, second] = track.children;
    return second ? second.offsetLeft - first.offsetLeft : track.clientWidth;
  };

  const isAtStart = () => track.scrollLeft <= 1;
  const isAtEnd = () =>
    track.scrollLeft + track.clientWidth >= track.scrollWidth - 1;

  prev.addEventListener('click', () => {
    if (isAtStart()) {
      track.scrollTo({ left: track.scrollWidth, behavior: behavior() });
      return;
    }
    track.scrollBy({ left: -step(), behavior: behavior() });
  });

  next.addEventListener('click', () => {
    if (isAtEnd()) {
      track.scrollTo({ left: 0, behavior: behavior() });
      return;
    }
    track.scrollBy({ left: step(), behavior: behavior() });
  });
}

document.querySelectorAll('[data-carousel]').forEach(initCarousel);
