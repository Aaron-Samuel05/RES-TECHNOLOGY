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

const sections = [...document.querySelectorAll('main section[id]')];
const navLinks = [...document.querySelectorAll('.main-nav a:not(.quote-btn)')];

const observer = new IntersectionObserver(entries => {
  const visible = entries.filter(e => e.isIntersecting).sort((a,b) => b.intersectionRatio-a.intersectionRatio)[0];
  if (!visible) return;
  navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === `#${visible.target.id}`));
}, { rootMargin: '-35% 0px -55% 0px', threshold: [0, .25, .5] });

sections.forEach(section => observer.observe(section));

// Carousel functionality
const heroImages = [
  'assets/hero-bearing.jpg',
  'assets/product-crossed-roller.jpg',
  'assets/product-slewing.jpg'
];

let currentImageIndex = 0;
const hero = document.querySelector('.hero');
const heroDots = document.querySelectorAll('.hero-dots > *');
const prevBtn = document.querySelector('.hero-nav-prev');
const nextBtn = document.querySelector('.hero-nav-next');

function updateHeroImage() {
  hero.style.backgroundImage = `url("${heroImages[currentImageIndex]}")`;
  heroDots.forEach((dot, index) => {
    dot.classList.toggle('active', index === currentImageIndex);
  });
}

function nextImage() {
  currentImageIndex = (currentImageIndex + 1) % heroImages.length;
  updateHeroImage();
}

function prevImage() {
  currentImageIndex = (currentImageIndex - 1 + heroImages.length) % heroImages.length;
  updateHeroImage();
}

function goToImage(index) {
  currentImageIndex = index;
  updateHeroImage();
}

prevBtn?.addEventListener('click', prevImage);
nextBtn?.addEventListener('click', nextImage);

heroDots.forEach((dot, index) => {
  dot.addEventListener('click', () => goToImage(index));
});

// Auto-rotate carousel every 6 seconds
let autoRotateTimer = setInterval(nextImage, 6000);

// Pause auto-rotate on hover
hero?.addEventListener('mouseenter', () => clearInterval(autoRotateTimer));
hero?.addEventListener('mouseleave', () => {
  autoRotateTimer = setInterval(nextImage, 6000);
});

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
