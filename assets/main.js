const header = document.querySelector('[data-header]');
const navToggle = document.querySelector('[data-nav-toggle]');
const nav = document.querySelector('[data-nav]');

const closeNavigation = () => {
  if (!navToggle || !nav) return;
  navToggle.setAttribute('aria-expanded', 'false');
  navToggle.setAttribute('aria-label', 'Abrir menu');
  nav.classList.remove('is-open');
  document.body.classList.remove('nav-open');
};

navToggle?.addEventListener('click', () => {
  const isOpen = navToggle.getAttribute('aria-expanded') === 'true';
  navToggle.setAttribute('aria-expanded', String(!isOpen));
  navToggle.setAttribute('aria-label', isOpen ? 'Abrir menu' : 'Fechar menu');
  nav?.classList.toggle('is-open', !isOpen);
  document.body.classList.toggle('nav-open', !isOpen);
});

nav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeNavigation));

window.addEventListener(
  'scroll',
  () => header?.classList.toggle('is-scrolled', window.scrollY > 24),
  { passive: true },
);

document.querySelectorAll('[data-year]').forEach((node) => {
  node.textContent = new Date().getFullYear();
});

const revealItems = document.querySelectorAll('[data-reveal]');
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px' },
  );
  revealItems.forEach((item) => {
    if (item.getBoundingClientRect().top < window.innerHeight * 0.96) {
      item.classList.add('is-visible');
    } else {
      revealObserver.observe(item);
    }
  });
} else {
  revealItems.forEach((item) => item.classList.add('is-visible'));
}

const contactForm = document.querySelector('[data-contact-form]');
contactForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  const form = new FormData(contactForm);
  const name = form.get('nome');
  const sender = form.get('email');
  const topic = form.get('assunto');
  const message = form.get('mensagem');
  const subject = encodeURIComponent(`[Site] ${topic} — ${name}`);
  const body = encodeURIComponent(`Olá, Kika!\n\n${message}\n\nNome: ${name}\nE-mail para retorno: ${sender}`);
  const status = contactForm.querySelector('[data-form-status]');

  if (status) status.textContent = 'Abrindo seu aplicativo de e-mail…';
  window.location.href = `mailto:contato@kikamagalhaes.com.br?subject=${subject}&body=${body}`;
});

document.querySelectorAll('[data-coming-soon]').forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const originalText = link.textContent;
    link.textContent = 'Link da Play Store em breve';
    window.setTimeout(() => {
      link.textContent = originalText;
    }, 2200);
  });
});

const productFromQuery = new URLSearchParams(window.location.search).get('produto');
if (productFromQuery) {
  const products = {
    creedbuilder: 'CreedBuilder',
    trefos: 'Trefós',
    escolabiblica: 'Escola Bíblica',
  };
  const productName = products[productFromQuery.toLowerCase()];
  if (productName) {
    document.querySelectorAll('[data-product-name]').forEach((node) => {
      node.textContent = productName;
    });
  }
}
