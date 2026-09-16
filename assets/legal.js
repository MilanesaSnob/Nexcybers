/* ============================================================
   NEXCYBERS — legal pages: hero + long-form body renderer
   Used by privacy.html, cookies.html, terms.html
   ============================================================ */
(function () {
  function lang() { return window.NX_currentLang || localStorage.getItem('nx_lang') || 'en'; }
  const LUCIDE = ' fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"';
  const ICONS = {
    lock:   `<svg viewBox="0 0 24 24"${LUCIDE}><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>`,
    cookie: `<svg viewBox="0 0 24 24"${LUCIDE}><path d="M12 2a10 10 0 1010 10 4 4 0 01-5-5 4 4 0 01-5-5"/><path d="M8.5 8.5h.01M15.5 15.5h.01M8.5 15.5h.01M12 12h.01"/></svg>`,
    doc:    `<svg viewBox="0 0 24 24"${LUCIDE}><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6"/><path d="M9 13h6M9 17h6"/></svg>`
  };

  function render() {
    const slug = document.body.dataset.legal;
    const page = (window.NX_LEGAL || {})[slug];
    if (!page) return;
    const c = page[lang()] || page.en;
    const kicker = document.getElementById('legal-kicker');
    const title = document.getElementById('legal-title');
    const meta = document.getElementById('legal-meta');
    const ico = document.getElementById('legal-ico');
    const body = document.getElementById('legal-body');
    if (kicker) kicker.textContent = c.kicker;
    if (title) title.textContent = c.title;
    if (meta) meta.innerHTML = c.meta || '';
    if (ico) ico.innerHTML = ICONS[page.ico] || '';
    if (body) body.innerHTML = c.body;
    document.title = c.title + ' — Nexcybers';
  }

  function bindTop() {
    const btn = document.getElementById('legal-top');
    if (!btn || btn.dataset.bound) return;
    btn.dataset.bound = '1';
    btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    const sync = () => {
      const on = window.scrollY > 420;
      btn.hidden = !on;
      btn.classList.toggle('is-in', on);
    };
    window.addEventListener('scroll', sync, { passive: true });
    sync();
  }

  document.addEventListener('DOMContentLoaded', () => { render(); bindTop(); });
  window.NX_pageRender = render;
})();
