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
  'AWS · Terraform · Docker · Jenkins · Ansible',
  'System Administrator building DevOps skills',
  'Kubernetes · CI/CD · Cloud Infrastructure',
  'Open to DevOps & Cloud Engineer roles'
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
    setTimeout(type, 35);
  } else {
    charIndex++;
    typedEl.textContent = current.substring(0, charIndex);
    if (charIndex === current.length) {
      isDeleting = true;
      setTimeout(type, 2600);
      return;
    }
    setTimeout(type, 55);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  setTimeout(type, 1000);
});

/* =============================
   REVEAL ON SCROLL
============================= */
const revealEls = document.querySelectorAll(
  '.about-text, .arch-visual, .skill-card, .project-featured, .more-projects, .contact-card'
);
revealEls.forEach(el => el.classList.add('reveal'));

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), 70 * i);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealEls.forEach(el => observer.observe(el));

/* =============================
   METRIC BARS ANIMATE ON VIEW
============================= */
const metricObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.metric-fill').forEach(fill => {
        const target = getComputedStyle(fill).getPropertyValue('--w').trim();
        fill.style.width = target;
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
