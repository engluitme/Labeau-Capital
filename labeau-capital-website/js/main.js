// Mobile navigation toggle
document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');
  const heroSlides = document.querySelectorAll('.hero-slide');
  const brandCarousels = document.querySelectorAll('.brand-carousel');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', nav.classList.contains('open'));
    });

    // Close menu when a link is clicked (mobile)
    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  if (heroSlides.length > 1) {
    let activeIndex = 0;

    setInterval(() => {
      heroSlides[activeIndex].classList.remove('active');
      activeIndex = (activeIndex + 1) % heroSlides.length;
      heroSlides[activeIndex].classList.add('active');
    }, 5000);
  }

  // Brand carousels: each one has its own speed and start delay,
  // so they never change slides at the same moment.
  brandCarousels.forEach((carousel, carouselIndex) => {
    const brandSlides = carousel.querySelectorAll('.brand-slide');

    if (brandSlides.length > 1) {
      let activeBrandIndex = 0;
      const interval = 5000 + carouselIndex * 2000;   // 5s, 7s, 9s...
      const startDelay = carouselIndex * 2500;        // 0s, 2.5s, 5s...

      setTimeout(() => {
        setInterval(() => {
          brandSlides[activeBrandIndex].classList.remove('active');
          activeBrandIndex = (activeBrandIndex + 1) % brandSlides.length;
          brandSlides[activeBrandIndex].classList.add('active');
        }, interval);
      }, startDelay);
    }
  });
});