const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');

menu?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menu.setAttribute('aria-expanded', String(open));
});

document.querySelectorAll('.main-nav a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menu?.setAttribute('aria-expanded', 'false');
  });
});

// Real product imagery referenced from the partner/product sources.
const hero = document.querySelector('.hero');
const heroDots = [...document.querySelectorAll('.hero-dots > *')];
const heroImages = [
  'https://www.general-tp.com/1999-large_default/couronne-de-rotation-imo-wd-l-04193-04553.jpg',
  'https://image.made-in-china.com/2f0j00dvZGwDImNjqJ/Zys-Bearing-for-Wind-Turbine-Generator-Yaw-Bearing-and-Pitch-Bearing-010-30-560.jpg',
  'https://image.made-in-china.com/2f0j00mSptdPvBCufY/800mm-2400mm-Width-Steel-Cord-Conveyor-Belts-Made-in-China.webp',
  'https://shop.hilmanrollers.com/cdn/shop/products/pa30ccblue_1200x.jpg?v=1610463099'
];

heroImages.forEach(src => { const img = new Image(); img.src = src; });

let heroIndex = 0;
let heroTimer;

function setHeroSlide(index) {
  if (!hero) return;
  heroIndex = (index + heroImages.length) % heroImages.length;
  hero.style.setProperty('--hero-image', `url("${heroImages[heroIndex]}")`);
  heroDots.forEach((dot, i) => dot.classList.toggle('active', i === heroIndex));
}

heroDots.forEach((dot, index) => {
  dot.setAttribute('role', 'button');
  dot.setAttribute('tabindex', '0');
  dot.setAttribute('aria-label', `Show hero slide ${index + 1}`);
  dot.addEventListener('click', () => {
    setHeroSlide(index);
    startHeroAutoplay();
  });
  dot.addEventListener('keydown', event => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      setHeroSlide(index);
      startHeroAutoplay();
    }
  });
});

function startHeroAutoplay() {
  clearInterval(heroTimer);
  heroTimer = setInterval(() => setHeroSlide(heroIndex + 1), 5500);
}

setHeroSlide(0);
startHeroAutoplay();

const sections = [...document.querySelectorAll('main section[id]')];
const navLinks = [...document.querySelectorAll('.main-nav a:not(.quote-btn)')];

const observer = new IntersectionObserver(entries => {
  const visible = entries.filter(e => e.isIntersecting).sort((a,b) => b.intersectionRatio-a.intersectionRatio)[0];
  if (!visible) return;
  navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === `#${visible.target.id}`));
}, { rootMargin: '-35% 0px -55% 0px', threshold: [0, .25, .5] });

sections.forEach(section => observer.observe(section));

document.getElementById('quoteForm')?.addEventListener('submit', e => {
  e.preventDefault();
  const form = new FormData(e.currentTarget);
  const subject = encodeURIComponent(`RES Technologies Quote Enquiry — ${form.get('name')}`);
  const body = encodeURIComponent(
`Name: ${form.get('name')}
Company: ${form.get('company') || 'Not provided'}
Email: ${form.get('email')}

Requirement:
${form.get('message')}`
  );
  window.location.href = `mailto:ransiga@yahoo.com?subject=${subject}&body=${body}`;
});

document.getElementById('year').textContent = new Date().getFullYear();
