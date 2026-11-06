(() => {
  const nav = document.getElementById('siteNav');
  const toggle = document.getElementById('menuToggle');
  const progress = document.getElementById('scrollProgress');
  const backTop = document.getElementById('backTop');
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  toggle?.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
  nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle?.setAttribute('aria-expanded', 'false');
  }));

  const updateScroll = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const value = max > 0 ? (window.scrollY / max) * 100 : 0;
    if (progress) progress.style.width = value + '%';
    backTop?.classList.toggle('visible', window.scrollY > 500);
  };
  window.addEventListener('scroll', updateScroll, { passive: true });
  updateScroll();
  backTop?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  const revealTargets = document.querySelectorAll('.section-heading,.about-grid,.principles,.expertise-card,.project-row,.research-copy,.journey-item,.contact-section h2');
  revealTargets.forEach(el => el.classList.add('reveal'));
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealTargets.forEach(el => observer.observe(el));
  } else {
    revealTargets.forEach(el => el.classList.add('in-view'));
  }
})();