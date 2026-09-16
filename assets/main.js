/* ============================================================
   NEXCYBERS — main: i18n render, nav, scroll animations
   ============================================================ */
(function () {
  const C = window.NX_CONTENT;
  let lang = localStorage.getItem('nx_lang') || 'en';
  window.NX_currentLang = lang;

  /* ---------------- active nav ---------------- */
  function setActiveNav() {
    const page = (location.pathname.split('/').pop() || 'index.html') || 'index.html';
    document.querySelectorAll('.nav a').forEach(a => {
      const href = (a.getAttribute('href') || '').split('#')[0] || 'index.html';
      a.classList.toggle('active', href === page || (page === '' && href === 'index.html'));
    });
  }

  /* ---------------- i18n render ---------------- */
  function t(path) {
    return path.split('.').reduce((o, k) => (o ? o[k] : undefined), C[lang]);
  }

  function fill(key, val) {
    document.querySelectorAll(`[data-i="${key}"]`).forEach(el => { el.textContent = val; });
  }

  function render() {
    const d = C[lang];
    document.documentElement.lang = lang;

    // nav
    fill('nav.about', d.nav.about);
    fill('nav.services', d.nav.services);
    fill('nav.resources', d.nav.resources);
    fill('nav.blog', d.nav.blog);
    fill('nav.product', d.nav.product);
    fill('nav.contact', d.nav.contact);
    document.querySelectorAll('[data-i="cta_book"]').forEach(el => el.textContent = d.cta_book);

    // hero
    fill('hero_eyebrow', d.hero_eyebrow);
    if (document.getElementById('h1a')) document.getElementById('h1a').textContent = d.hero_h1_a;
    if (document.getElementById('h1b')) document.getElementById('h1b').textContent = d.hero_h1_b;
    fill('hero_sub', d.hero_sub);
    fill('hero_cta_primary', d.hero_cta_primary);
    fill('hero_cta_secondary', d.hero_cta_secondary);
    fill('hero_hint', d.hero_hint);
    fill('hero_hint_alt', d.hero_hint_alt);

    // trust cards (moved out of hero)
    const tcIcons = ['scan', 'shield', 'pulse'];
    const cardsWrap = document.getElementById('trust-cards');
    if (cardsWrap) cardsWrap.innerHTML = d.stats.map((s, i) =>
      `<div class="trust-card" data-reveal-dir="${i === 0 ? 'left' : i === 1 ? 'up' : 'right'}">
         <div class="tc-top">
           <span class="tc-ico">${ICONS[tcIcons[i]] || ''}</span>
           <span class="tc-idx">0${i + 1}</span>
         </div>
         <div class="tc-n">${s.n}</div>
         <div class="tc-l">${s.l}</div>
       </div>`).join('');

    // intro
    fill('intro_eyebrow', d.intro_eyebrow);
    document.querySelectorAll('[data-i="intro_h2"]').forEach(el => { el.innerHTML = d.intro_h2; });
    fill('intro_p1', d.intro_p1);
    fill('intro_p2', d.intro_p2);
    fill('intro_p3', d.intro_p3);
    fill('intro_ph', d.intro_ph);
    const stakEl = document.getElementById('intro-stak');
    if (stakEl) stakEl.innerHTML = d.intro_stak.map(s => `<span>${s}</span>`).join('');

    // services
    fill('svc_eyebrow', d.svc_eyebrow);
    document.querySelectorAll('[data-i="svc_h2"]').forEach(el => { el.innerHTML = d.svc_h2; });
    fill('svc_lead', d.svc_lead);
    const svcGrid = document.getElementById('svc-grid');
    if (svcGrid) svcGrid.innerHTML = d.services.map((s, i) => {
      const slug = (window.NX_SERVICE_SLUGS || [])[i];
      const linked = slug && (window.NX_SERVICE_PAGES || {})[slug];
      const inner = `<div class="svc-ico">${ICONS[s.ico] || ''}</div>
        <h3>${s.t}</h3>
        <p>${s.d}</p>
        ${linked ? `<span class="more">${d.svc_more} <span class="arw">→</span></span>` : ''}`;
      return linked
        ? `<a class="svc svc-link" href="services.html#s=${slug}" data-reveal>${inner}</a>`
        : `<div class="svc" data-reveal>${inner}</div>`;
    }).join('');

    // principles
    fill('prin_eyebrow', d.prin_eyebrow);
    fill('prin_h2', d.prin_h2);
    const prinGrid = document.getElementById('principles-grid');
    if (prinGrid) prinGrid.innerHTML = d.principles.map(p => `
      <div class="principle" data-reveal>
        <div class="k">${p.k}</div>
        <p>${p.d}</p>
      </div>`).join('');

    // band
    fill('band_eyebrow', d.band_eyebrow);
    fill('band_h2', d.band_h2);
    fill('band_p', d.band_p);
    fill('band_cta', d.band_cta);

    // final
    fill('final_eyebrow', d.final_eyebrow);
    fill('final_h2', d.final_h2);
    fill('final_p', d.final_p);
    fill('final_cta', d.final_cta);

    // footer
    fill('foot_desc', d.foot_desc);
    fill('foot_nav_h', d.foot_nav_h);
    fill('foot_contact_h', d.foot_contact_h);
    fill('foot_rights', d.foot_rights);
    document.getElementById('foot-nav').innerHTML =
      `<a href="about.html">${d.nav.about}</a><a href="services.html">${d.nav.services}</a><a href="resources.html">${d.nav.resources}</a><a href="blog.html">${d.nav.blog}</a><a href="product.html">${d.nav.product}</a><a href="contact.html">${d.nav.contact}</a>`;
    fill('foot_news_h', d.foot_news_h);
    fill('foot_news_p', d.foot_news_p);
    const newsBtn = document.querySelector('.foot-news-go');
    if (newsBtn) newsBtn.setAttribute('aria-label', d.foot_news_cta);
    fill('foot_news_ok', d.foot_news_ok);
    const newsInput = document.getElementById('foot-news-email');
    if (newsInput) newsInput.placeholder = d.foot_news_ph || 'you@company.com';
    const legalHrefs = ['privacy.html', 'cookies.html', 'terms.html'];
    document.getElementById('foot-links').innerHTML =
      d.foot_links.map((x, i) => legalHrefs[i]
        ? `<a href="${legalHrefs[i]}">${x}</a>`
        : `<span class="foot-link-soon">${x}</span>`).join('');

    // lang buttons
    document.querySelectorAll('.lang-toggle button').forEach(b =>
      b.classList.toggle('active', b.dataset.lang === lang));
  }

  const LUCIDE = ' fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"';
  const ICONS = {
    shield: `<svg viewBox="0 0 24 24"${LUCIDE}><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 01-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 011-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 011.52 0C14.51 3.79 17 5 19 5a1 1 0 011 1z"/><path d="M9 12l2 2 4-4"/></svg>`,
    pulse:  `<svg viewBox="0 0 24 24"${LUCIDE}><path d="M22 12h-2.48a2 2 0 00-1.93 1.46l-2.35 8.36a.25.25 0 01-.48 0L9.24 2.18a.25.25 0 00-.48 0l-2.35 8.36A2 2 0 014.48 12H2"/></svg>`,
    scan:   `<svg viewBox="0 0 24 24"${LUCIDE}><path d="M3 7V5a2 2 0 012-2h2M17 3h2a2 2 0 012 2v2M21 17v2a2 2 0 01-2 2h-2M7 21H5a2 2 0 01-2-2v-2"/><circle cx="12" cy="12" r="3"/></svg>`,
    lock:   `<svg viewBox="0 0 24 24"${LUCIDE}><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>`,
    balance:`<svg viewBox="0 0 24 24"${LUCIDE}><path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="M7 21h10"/><path d="M12 3v18"/><path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"/></svg>`,
    people: `<svg viewBox="0 0 24 24"${LUCIDE}><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>`
  };

  /* ---------------- theme toggle ---------------- */
  const theme = localStorage.getItem('nx_theme') || 'dark';
  if (theme === 'light') document.documentElement.setAttribute('data-theme', 'light');
  const themeBtn = document.getElementById('theme-toggle');
  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      const isLight = document.documentElement.getAttribute('data-theme') === 'light';
      if (isLight) {
        document.documentElement.removeAttribute('data-theme');
        localStorage.setItem('nx_theme', 'dark');
      } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('nx_theme', 'light');
      }
      window.dispatchEvent(new CustomEvent('nx-theme-change'));
    });
  }

  /* ---------------- language toggle ---------------- */
  document.querySelectorAll('.lang-toggle button').forEach(btn => {
    btn.addEventListener('click', () => {
      if (btn.dataset.lang === lang) return;
      lang = btn.dataset.lang;
      window.NX_currentLang = lang;
      localStorage.setItem('nx_lang', lang);
      render();
      if (window.NX_pageRender) window.NX_pageRender();
      initReveal(true);
    });
  });

  /* ---------------- header scroll state ---------------- */
  const header = document.getElementById('header');
  function onScroll() { header.classList.toggle('scrolled', window.scrollY > 40); }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------------- keyboard section navigation ---------------- */
  function navSections() {
    return Array.from(document.querySelectorAll('body > section, body > footer'));
  }
  function currentSectionIndex(sections) {
    const y = window.scrollY + 100;
    let idx = 0;
    sections.forEach((s, i) => { if (s.offsetTop <= y) idx = i; });
    return idx;
  }
  window.addEventListener('keydown', (e) => {
    if (e.target && /input|textarea|select/i.test(e.target.tagName)) return;
    if (e.key !== 'ArrowDown' && e.key !== 'ArrowUp') return;
    e.preventDefault();
    if (document.activeElement && document.activeElement.tagName === 'BUTTON') document.activeElement.blur();
    const sections = navSections();
    const idx = currentSectionIndex(sections);
    const next = e.key === 'ArrowDown' ? Math.min(idx + 1, sections.length - 1) : Math.max(idx - 1, 0);
    const headerH = document.querySelector('.site-header')?.offsetHeight || 0;
    window.scrollTo({ top: Math.max(sections[next].offsetTop - headerH - 16, 0), behavior: 'smooth' });
  });

  /* ---------------- mobile menu (simple) ---------------- */
  const menuBtn = document.getElementById('menu-btn');
  if (menuBtn) menuBtn.addEventListener('click', () => {
    document.getElementById('contact-anchor')?.scrollIntoView ? null : null;
    window.location.hash = '#contact';
  });

  /* ---------------- about: inline band newsletter ---------------- */
  (function bandNewsletter() {
    const open = document.getElementById('sub-open');
    const form = document.getElementById('sub-form');
    if (!open || !form) return;
    const input = document.getElementById('sub-email');
    const ok = document.getElementById('sub-ok');
    open.addEventListener('click', () => {
      open.hidden = true;
      form.hidden = false;
      if (input) input.focus();
    });
    const cancel = document.getElementById('sub-cancel');
    if (cancel) cancel.addEventListener('click', () => {
      form.hidden = true;
      open.hidden = false;
      if (input) input.value = '';
      open.focus();
    });
    form.addEventListener('submit', e => {
      e.preventDefault();
      if (!input || !input.value.includes('@')) { if (input) input.focus(); return; }
      form.hidden = true;
      if (ok) ok.hidden = false;
    });
  })();

  /* ---------------- footer newsletter ---------------- */
  (function newsletter() {
    const form = document.getElementById('foot-news');
    if (!form) return;
    form.addEventListener('submit', e => {
      e.preventDefault();
      const input = document.getElementById('foot-news-email');
      const ok = document.getElementById('foot-news-ok');
      if (!input || !input.value.includes('@')) { if (input) input.focus(); return; }
      form.hidden = true;
      if (ok) ok.hidden = false;
    });
  })();

  /* ---------------- obfuscated email (anti-spam) ---------------- */
  (function emailGuard() {
    const el = document.getElementById('foot-email');
    if (!el) return;
    const addr = el.dataset.user + String.fromCharCode(64) + el.dataset.dom;
    (el.querySelector('span') || el).textContent = addr;
    el.addEventListener('click', e => {
      e.preventDefault();
      window.location.href = 'mai' + 'lto:' + addr;
    });
    el.style.cursor = 'pointer';
  })();

  /* ---------------- first render ---------------- */
  render();
  setActiveNav();
  if (window.NX_pageRender) window.NX_pageRender();

  /* ---------------- GSAP scroll animations ---------------- */
  function initReveal(rerun) {
    if (!window.gsap) return;
    if (window.ScrollTrigger) gsap.registerPlugin(ScrollTrigger);

    // hero entrance (only once)
    if (!rerun && document.querySelector('.hero')) {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      tl.fromTo('.hero .eyebrow', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7 })
        .fromTo('#h1a', { y: 36, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9 }, '-=0.3')
        .fromTo('#h1b', { y: 36, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9 }, '-=0.7')
        .fromTo('.hero-sub', { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7 }, '-=0.5')
        .fromTo('.hero-cta > *', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, stagger: 0.1 }, '-=0.4')
        .fromTo('.scroll-hint', { y: 16, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, '-=0.3')
        .fromTo('#globe-canvas', { opacity: 0 }, { opacity: 1, duration: 1.4 }, 0);
    }

    // generic reveals
    const items = gsap.utils.toArray('[data-reveal]');
    items.forEach(el => {
      if (el._revealed && rerun) return;
      el._revealed = true;
      gsap.set(el, { y: 40, opacity: 0 });
      gsap.fromTo(el, { y: 40, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 86%', once: true }
      });
    });

    // staggered reveals from below, left to right
    const dirCards = gsap.utils.toArray('[data-reveal-dir]');
    dirCards.forEach((el, i) => {
      if (el._revealed && rerun) return;
      el._revealed = true;
      el._nxIdx = i;
      gsap.set(el, { y: 40, opacity: 0 });
    });
    if (dirCards.length) {
      if (!window._nxCardObserver) {
        window._nxCardObserver = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            const el = entry.target;
            if (el._nxAnimated) return;
            el._nxAnimated = true;
            el.classList.add('revealing');
            gsap.to(el, {
              y: 0, opacity: 1, duration: 0.9, ease: 'power3.out', delay: Math.max(0, el._nxIdx || 0) * 0.12,
              onComplete: () => el.classList.remove('revealing')
            });
            window._nxCardObserver.unobserve(el);
          });
        }, { threshold: 0.15, rootMargin: '0px 0px -10% 0px' });
      }
      // observe every card, including ones injected after the first init (language switch, page scripts)
      dirCards.forEach(el => { if (!el._nxObserved) { el._nxObserved = true; window._nxCardObserver.observe(el); } });
    }

    // section headers
    gsap.utils.toArray('[data-reveal-head]').forEach(el => {
      gsap.set(el.children, { y: 30, opacity: 0 });
      gsap.fromTo(el.children, { y: 30, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.8, stagger: 0.08, ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 85%', once: true }
      });
    });

    // build seamless periodic wave paths (symmetric bezier humps) so the looping scroll never shows a seam/cut or self-crossing scribble
    function wavePath(period, amp, baseline, width, startDir) {
      const hp = period / 2;
      const n = Math.round(width / hp);
      let d = `M0,${baseline}`;
      for (let i = 0; i < n; i++) {
        const x0 = i * hp, x1 = (i + 1) * hp;
        const dir = (i % 2 === 0 ? 1 : -1) * startDir;
        const cy = baseline + dir * amp * (4 / 3);
        const cx = x0 + hp / 2;
        d += ` C${cx.toFixed(2)},${cy.toFixed(2)} ${cx.toFixed(2)},${cy.toFixed(2)} ${x1.toFixed(2)},${baseline}`;
      }
      return d;
    }
    const waveA = wavePath(280, 40, 95, 560, 1);
    const waveB = wavePath(560, 55, 140, 560, -1);
    ['wave-a-1', 'wave-a-2'].forEach(id => { const el = document.getElementById(id); if (el) el.setAttribute('d', waveA); });
    ['wave-b-1', 'wave-b-2'].forEach(id => { const el = document.getElementById(id); if (el) el.setAttribute('d', waveB); });

    // intro chart: bars grow + lines draw, once, on view
    const bands = document.querySelectorAll('.why-band, .proc-band, .res-band, .p-band');
    if (bands.length && !window._nxBandObserver) {
      window._nxBandObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('band-lit'); });
      }, { threshold: 0, rootMargin: '-12% 0px -10% 0px' });
      bands.forEach(b => window._nxBandObserver.observe(b));
    }

    const chartWrap = document.querySelector('.intro-visual');
    if (chartWrap && !window._nxChartObserver) {
      window._nxChartObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          chartWrap.classList.add('in-view');
          const bars = chartWrap.querySelectorAll('.chart-bars rect');
          gsap.to(bars, {
            attr: { height: (i, el) => el.dataset.h, y: (i, el) => 272 - el.dataset.h },
            duration: 2.2, ease: 'power2.out', stagger: 0.15, delay: 0.2
          });
          window._nxChartObserver.unobserve(chartWrap);
        });
      }, { threshold: 0.3 });
      window._nxChartObserver.observe(chartWrap);
    }

    // intro visual parallax
    if (window.ScrollTrigger && document.querySelector('.intro-visual')) {
      gsap.to('.intro-visual .chart', {
        yPercent: -6, ease: 'none',
        scrollTrigger: { trigger: '.intro-visual', start: 'top bottom', end: 'bottom top', scrub: true }
      });
      // big section titles slight rise on scrub
      gsap.utils.toArray('[data-parallax]').forEach(el => {
        gsap.fromTo(el, { yPercent: 8 }, {
          yPercent: -8, ease: 'none',
          scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom top', scrub: true }
        });
      });
    }
  }

  // init immediately — defer scripts already run after DOM parse, no need to wait for window.load
  initReveal(false);

  // Safety: if animations never progress (rAF paused in capture/export,
  // gsap failed to load, etc.) force the visible end-state so content
  // is never stuck hidden.
  function forceVisible() {
    const sel = '[data-reveal], [data-reveal-dir], .hero .eyebrow, #h1a, #h1b, .hero-sub, .hero-cta > *, .scroll-hint, .trust-card, [data-reveal-head] > *';
    document.querySelectorAll(sel).forEach(el => {
      const o = parseFloat(getComputedStyle(el).opacity);
      if (o < 0.99) { el.style.opacity = 1; el.style.transform = 'none'; }
    });
    const cv = document.getElementById('globe-canvas');
    if (cv) cv.style.opacity = 1;
  }
  setTimeout(forceVisible, window.gsap ? 4000 : 400);
})();
