/* =============================
   NAVBAR SCROLL
============================= */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
});

/* =============================
   TYPING EFFECT
============================= */
const phrases = [
  'System Administrator → DevOps Engineer',
  'AWS · Terraform · Docker · CI/CD · Linux',
  'Building reliable cloud infrastructure',
  'Actively seeking DevOps internships'
];

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typedEl = document.getElementById('typed-text');

function type() {
  const current = phrases[phraseIndex];
  if (isDeleting) {
    charIndex--;
    typedEl.textContent = current.substring(0, charIndex);
    if (charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      setTimeout(type, 400);
      return;
    }
    setTimeout(type, 40);
  } else {
    charIndex++;
    typedEl.textContent = current.substring(0, charIndex);
    if (charIndex === current.length) {
      isDeleting = true;
      setTimeout(type, 2600);
      return;
    }
    setTimeout(type, 60);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  setTimeout(type, 1200);
});

/* =============================
   REVEAL ON SCROLL
============================= */
const revealEls = document.querySelectorAll(
  '.about-terminal, .about-text, .skill-card, .project-featured, .more-projects, .contact-card'
);

revealEls.forEach(el => el.classList.add('reveal'));

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, 80 * i);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealEls.forEach(el => observer.observe(el));

/* =============================
   METRIC BARS ANIMATE ON VIEW
============================= */
const metricFills = document.querySelectorAll('.metric-fill');
const metricObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const fills = entry.target.querySelectorAll('.metric-fill');
      fills.forEach(fill => {
        const target = fill.style.width;
        fill.style.width = '0%';
        setTimeout(() => { fill.style.width = target; }, 200);
      });
      metricObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

const monitorScreen = document.querySelector('.monitor-screen');
if (monitorScreen) metricObserver.observe(monitorScreen);

/* =============================
   SMOOTH ANCHOR SCROLL
============================= */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
