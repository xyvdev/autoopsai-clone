const themes = ['system', 'dark', 'light'] as const;
type Theme = (typeof themes)[number];

const themeToggleBtn = document.getElementById('themeToggleBtn');
const themeIcon = document.getElementById('themeIcon');
const themeLabel = document.getElementById('themeLabel');
const bookingModal = document.getElementById('bookingModal');
const modalTitle = document.getElementById('modalTitle');
const stubForm = document.getElementById('stubBookingForm') as HTMLFormElement | null;
const stubSuccess = document.getElementById('stubSuccess');

function getSavedTheme(): Theme {
  const saved = localStorage.getItem('autoops_theme');
  return themes.includes(saved as Theme) ? (saved as Theme) : 'dark';
}

function applyTheme(theme: Theme) {
  if (!themeIcon || !themeLabel) return;

  if (theme === 'system') {
    document.documentElement.removeAttribute('data-theme');
    const isSystemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    themeIcon.textContent = isSystemDark ? '🌙' : '☀️';
    themeLabel.textContent = 'Auto';
    return;
  }

  document.documentElement.setAttribute('data-theme', theme);
  themeIcon.textContent = theme === 'dark' ? '🌙' : '☀️';
  themeLabel.textContent = theme === 'dark' ? 'Dark' : 'Light';
}

function toggleTheme() {
  const current = getSavedTheme();
  const nextTheme = themes[(themes.indexOf(current) + 1) % themes.length];
  localStorage.setItem('autoops_theme', nextTheme);
  applyTheme(nextTheme);
}

function openModal(tierName?: string) {
  if (!bookingModal) return;
  if (modalTitle) {
    modalTitle.textContent = tierName || 'Book Your Free Audit';
  }
  if (stubSuccess) stubSuccess.classList.remove('visible');
  bookingModal.classList.add('active');
}

function closeModal() {
  bookingModal?.classList.remove('active');
}

themeToggleBtn?.addEventListener('click', toggleTheme);

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
  if (getSavedTheme() === 'system') applyTheme('system');
});

applyTheme(getSavedTheme());

document.querySelectorAll<HTMLAnchorElement>('.js-stub-cta').forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const label = link.textContent?.trim() || 'Book Your Free Audit';
    openModal(label.includes('999') ? 'Schedule $999 Assessment' : 'Book Your Free Audit');
  });
});

document.querySelectorAll('[data-close-modal]').forEach((btn) => {
  btn.addEventListener('click', closeModal);
});

bookingModal?.addEventListener('click', (event) => {
  if (event.target === bookingModal) closeModal();
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeModal();
});

stubForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  stubSuccess?.classList.add('visible');
});

const STAGING_BANNER_KEY = 'autoops_staging_banner_dismissed';
const stagingBanner = document.getElementById('stagingBanner');
const stagingBannerDismiss = document.getElementById('stagingBannerDismiss');

function hideStagingBanner() {
  document.documentElement.classList.add('staging-banner-dismissed');
  stagingBanner?.setAttribute('hidden', '');
}

try {
  if (sessionStorage.getItem(STAGING_BANNER_KEY) === '1') {
    hideStagingBanner();
  }
} catch {
  // Private mode may block sessionStorage; banner stays visible.
}

stagingBannerDismiss?.addEventListener('click', () => {
  try {
    sessionStorage.setItem(STAGING_BANNER_KEY, '1');
  } catch {
    // Ignore storage failures; dismiss still applies for this page view.
  }
  hideStagingBanner();
});

const reviewToggle = document.getElementById('stagingReviewToggle');
const reviewPanel = document.getElementById('stagingReviewPanel');
const reviewBackdrop = document.getElementById('stagingReviewBackdrop');
const reviewClose = document.getElementById('stagingReviewClose');

function setReviewOpen(open: boolean) {
  if (!reviewPanel || !reviewToggle || !reviewBackdrop) return;
  reviewToggle.setAttribute('aria-expanded', String(open));
  reviewPanel.hidden = !open;
  reviewBackdrop.hidden = !open;
  document.body.classList.toggle('staging-review-open', open);
  if (open) reviewClose?.focus();
  else reviewToggle.focus();
}

reviewToggle?.addEventListener('click', () => {
  const open = reviewToggle.getAttribute('aria-expanded') === 'true';
  setReviewOpen(!open);
});

reviewClose?.addEventListener('click', () => setReviewOpen(false));
reviewBackdrop?.addEventListener('click', () => setReviewOpen(false));

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && reviewToggle?.getAttribute('aria-expanded') === 'true') {
    setReviewOpen(false);
  }
});

const revealTargets = document.querySelectorAll('.reveal');
const canReveal =
  'IntersectionObserver' in window &&
  window.matchMedia('(prefers-reduced-motion: no-preference)').matches;

if (canReveal && revealTargets.length) {
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    },
    { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
  );
  revealTargets.forEach((el) => observer.observe(el));
} else {
  revealTargets.forEach((el) => el.classList.add('is-visible'));
}
