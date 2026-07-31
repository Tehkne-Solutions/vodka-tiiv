const html = document.documentElement;
html.classList.remove('no-js');
html.classList.add('js');

const body = document.body;
const ageGate = document.querySelector('[data-age-gate]');
const ageConfirm = document.querySelector('[data-age-confirm]');
const ageDeny = document.querySelector('[data-age-deny]');
const ageWarning = document.querySelector('[data-age-warning]');
const previewMode = new URLSearchParams(window.location.search).get('preview') === '1';
const ageStorageKey = 'tiiv-age-confirmed';

function readAgeConfirmation() {
  try {
    return window.localStorage.getItem(ageStorageKey) === 'true';
  } catch {
    return false;
  }
}

function saveAgeConfirmation() {
  try {
    window.localStorage.setItem(ageStorageKey, 'true');
  } catch {
    // Storage may be unavailable in strict privacy modes; access remains valid for this page view.
  }
}

function unlockSite() {
  ageGate?.setAttribute('hidden', '');
  body.classList.remove('is-age-locked');
}

function lockSite() {
  ageGate?.removeAttribute('hidden');
  body.classList.add('is-age-locked');
  window.setTimeout(() => ageConfirm?.focus(), 50);
}

if (previewMode || readAgeConfirmation()) {
  unlockSite();
} else {
  lockSite();
}

ageConfirm?.addEventListener('click', () => {
  saveAgeConfirmation();
  unlockSite();
});

ageDeny?.addEventListener('click', () => {
  ageWarning?.removeAttribute('hidden');
  ageConfirm?.focus();
});

const header = document.querySelector('[data-header]');
function syncHeader() {
  header?.classList.toggle('is-scrolled', window.scrollY > 24);
}
syncHeader();
window.addEventListener('scroll', syncHeader, { passive: true });

const menuToggle = document.querySelector('[data-menu-toggle]');
const menu = document.querySelector('[data-menu]');

function closeMenu() {
  menu?.classList.remove('is-open');
  header?.classList.remove('menu-open');
  menuToggle?.setAttribute('aria-expanded', 'false');
  menuToggle?.setAttribute('aria-label', 'Abrir menu');
  body.style.removeProperty('overflow');
}

menuToggle?.addEventListener('click', () => {
  const willOpen = menuToggle.getAttribute('aria-expanded') !== 'true';
  menuToggle.setAttribute('aria-expanded', String(willOpen));
  menuToggle.setAttribute('aria-label', willOpen ? 'Fechar menu' : 'Abrir menu');
  menu?.classList.toggle('is-open', willOpen);
  header?.classList.toggle('menu-open', willOpen);
  body.style.overflow = willOpen ? 'hidden' : '';
});

menu?.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
window.addEventListener('resize', () => {
  if (window.innerWidth > 768) closeMenu();
});

const revealItems = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.1 },
  );
  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add('is-visible'));
}

const lightbox = document.querySelector('[data-lightbox]');
const lightboxImage = document.querySelector('[data-lightbox-image]');
const lightboxClose = document.querySelector('[data-lightbox-close]');

document.querySelectorAll('[data-image]').forEach((button) => {
  button.addEventListener('click', () => {
    if (!lightbox || !lightboxImage) return;
    lightboxImage.src = button.dataset.image ?? '';
    lightboxImage.alt = button.dataset.alt ?? '';
    lightbox.showModal();
  });
});

function closeLightbox() {
  lightbox?.close();
}

lightboxClose?.addEventListener('click', closeLightbox);
lightbox?.addEventListener('click', (event) => {
  if (event.target === lightbox) closeLightbox();
});

window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeMenu();
});

document.querySelectorAll('[data-current-year]').forEach((element) => {
  element.textContent = String(new Date().getFullYear());
});
