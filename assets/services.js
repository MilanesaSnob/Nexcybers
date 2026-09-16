/* ============================================================
   NEXCYBERS — services.html: list + service detail view
   ============================================================ */
(function () {
  function fill(key, val) {
    document.querySelectorAll(`[data-i="${key}"]`).forEach(el => { el.textContent = val; });
  }
  function lang() { return window.NX_currentLang || localStorage.getItem('nx_lang') || 'en'; }
  const LUCIDE = ' fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"';
  const ICONS = {
    shield: `<svg viewBox="0 0 24 24"${LUCIDE}><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 01-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 011-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 011.52 0C14.51 3.79 17 5 19 5a1 1 0 011 1z"/><path d="M9 12l2 2 4-4"/></svg>`,
    pulse:  `<svg viewBox="0 0 24 24"${LUCIDE}><path d="M22 12h-2.48a2 2 0 00-1.93 1.46l-2.35 8.36a.25.25 0 01-.48 0L9.24 2.18a.25.25 0 00-.48 0l-2.35 8.36A2 2 0 014.48 12H2"/></svg>`,
    scan:   `<svg viewBox="0 0 24 24"${LUCIDE}><path d="M3 7V5a2 2 0 012-2h2M17 3h2a2 2 0 012 2v2M21 17v2a2 2 0 01-2 2h-2M7 21H5a2 2 0 01-2-2v-2"/><circle cx="12" cy="12" r="3"/></svg>`,
    lock:   `<svg viewBox="0 0 24 24"${LUCIDE}><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>`,
    balance:`<svg viewBox="0 0 24 24"${LUCIDE}><path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="M7 21h10"/><path d="M12 3v18"/><path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"/></svg>`,
    people: `<svg viewBox="0 0 24 24"${LUCIDE}><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>`
  };
  const CHECK = `<svg viewBox="0 0 24 24"${LUCIDE} aria-hidden="true"><path d="M20 6L9 17l-5-5"/></svg>`;
  const PROC_ICONS = ['flag', 'build', 'diversity_2', 'security', 'support'];

  let openSlug = null;

  function slugAt(i) { return (window.NX_SERVICE_SLUGS || [])[i] || null; }
  function pageOf(slug) { return (window.NX_SERVICE_PAGES || {})[slug] || null; }
  function indexOfSlug(slug) { return (window.NX_SERVICE_SLUGS || []).indexOf(slug); }
  function labels() { const L = window.NX_SERVICE_LABELS || {}; return L[lang()] || L.en || {}; }

  /* ---------- list view ---------- */
  function renderList(d) {
    fill('svcgrid_eyebrow', d.svcgrid_eyebrow);
    document.querySelectorAll('[data-i="svcgrid_h2"]').forEach(el => { el.innerHTML = d.svcgrid_h2; });

    const grid = document.getElementById('svc-grid');
    if (grid) grid.innerHTML = d.services.map((s, i) => {
      const slug = slugAt(i);
      const linked = slug && pageOf(slug);
      const inner = `<div class="svc-ico">${ICONS[s.ico] || ''}</div>
        <h3>${s.t}</h3>
        <p>${s.d}</p>
        ${linked ? `<span class="more">${d.svc_more} <svg viewBox="0 0 24 24"${LUCIDE}><path d="M5 12h14M13 6l6 6-6 6"/></svg></span>` : ''}`;
      const anim = ` class="svc${linked ? ' svc-link' : ''} svc-anim" style="--d:${i * 60}ms"`;
      return linked
        ? `<a${anim} href="#s=${slug}">${inner}</a>`
        : `<div${anim}>${inner}</div>`;
    }).join('');
    if (grid) requestAnimationFrame(() => grid.querySelectorAll('.svc-anim').forEach(el => el.classList.add('in')));

    fill('svc_process_h2', d.svc_process_h2);
    fill('svc_process_lead', d.svc_process_lead);
    const stage = document.getElementById('proc-stage');
    const numEl = document.getElementById('proc-num');
    if (!stage) return;
    stage.innerHTML = d.svc_process.map((p, i) => `
      <div class="proc-item${i === 0 ? ' is-open' : ''}" data-idx="${i}">
        <button class="proc-tab${i === 0 ? ' is-active' : ''}" type="button" aria-expanded="${i === 0}" aria-controls="proc-panel-${i}">${i + 1}. ${p.t}</button>
        <div class="proc-panel${i === 0 ? ' is-active' : ''}" id="proc-panel-${i}" role="region">
          <span class="material-symbols-rounded proc-icon" aria-hidden="true">${PROC_ICONS[i] || 'flag'}</span>
          <span class="proc-panel-num" aria-hidden="true">0${i + 1}</span>
          <p>${p.d}</p>
          <div class="proc-meta" aria-hidden="true">
            <span class="proc-meta-bar"><i style="width:${Math.round((i + 1) / d.svc_process.length * 100)}%"></i></span>
          </div>
        </div>
      </div>`).join('');
    const items = [...stage.querySelectorAll('.proc-item')];
    const open = (idx) => {
      items.forEach((it, i) => {
        const on = i === idx;
        it.classList.toggle('is-open', on);
        it.querySelector('.proc-tab').classList.toggle('is-active', on);
        it.querySelector('.proc-tab').setAttribute('aria-expanded', String(on));
        it.querySelector('.proc-panel').classList.toggle('is-active', on);
      });
      if (numEl) { numEl.style.opacity = '0'; setTimeout(() => { numEl.textContent = '0' + (idx + 1); numEl.style.opacity = '1'; }, 180); }
    };
    items.forEach((it, i) => it.querySelector('.proc-tab').addEventListener('click', () => open(i)));
  }

  /* ---------- detail view ---------- */
  function renderDetail(d) {
    const band = document.getElementById('svc-detail-band');
    const box = document.getElementById('svc-detail');
    const procSec = document.getElementById('svc-process-sec');
    const gridSec = document.getElementById('svc-grid-sec');
    const webinar = document.getElementById('svc-webinar');
    const heroIco = document.getElementById('svc-hero-ico');
    const solar = document.getElementById('svc-solar');
    const kicker = document.getElementById('svc-kicker');
    const title = document.getElementById('svc-title');
    const lead = document.getElementById('svc-lead');
    if (!band || !box) return;

    const page = openSlug ? pageOf(openSlug) : null;
    if (!page) {
      band.hidden = true;
      box.innerHTML = '';
      if (procSec) procSec.hidden = false;
      if (gridSec) gridSec.hidden = false;
      if (webinar) webinar.hidden = false;
      if (heroIco) { heroIco.hidden = true; heroIco.innerHTML = ''; }
      if (solar) solar.hidden = false;
      document.body.classList.remove('res-reading');
      if (kicker) kicker.textContent = d.svc_eyebrow;
      if (title) title.innerHTML = d.svc_h2;
      if (lead) lead.textContent = d.svc_lead;
      return;
    }

    const c = page[lang()] || page.en;
    const L = labels();
    const svc = d.services[indexOfSlug(openSlug)] || {};
    const name = svc.t || '';
    if (heroIco) {
      heroIco.innerHTML = ICONS[svc.ico] || '';
      heroIco.hidden = !heroIco.innerHTML;
    }
    if (solar) solar.hidden = !!(heroIco && !heroIco.hidden);

    if (procSec) procSec.hidden = true;
    if (gridSec) gridSec.hidden = true;
    if (webinar) webinar.hidden = true;
    band.hidden = false;
    document.body.classList.add('res-reading');
    if (kicker) kicker.textContent = L.kicker;
    if (title) title.textContent = name;
    if (lead) lead.textContent = '';

    box.innerHTML = `<p class="svcd-intro">${c.intro}</p>
      <h2 class="svcd-h">${L.incl}</h2>
      <ol class="svcd-list">${c.items.map((it, i) => `
        <li class="svcd-item">
          <span class="svcd-n">${String(i + 1).padStart(2, '0')}</span>
          <span class="svcd-check">${CHECK}</span>
          <h3>${it.t}</h3>
          <p>${it.d}</p>
        </li>`).join('')}</ol>
      <aside class="svcd-goal">
        <span class="svcd-goal-k">${L.goal}</span>
        <p>${c.goal}</p>
        <a class="btn btn-primary" href="contact.html">${d.band_cta} <span class="arw">→</span></a>
      </aside>
      <nav class="svcd-back" aria-label="Breadcrumb">
        <a href="#" class="res-back" data-back><svg viewBox="0 0 24 24"${LUCIDE}><path d="M19 12H5M11 18l-6-6 6-6"/></svg>${L.back}</a>
      </nav>`;

    box.querySelectorAll('[data-back]').forEach(a => a.addEventListener('click', e => {
      e.preventDefault();
      history.pushState(null, '', location.pathname);
      route();
      scrollToList();
    }));
  }

  function scrollToList() {
    requestAnimationFrame(() => requestAnimationFrame(doScrollToList));
  }
  function doScrollToList() {
    const sec = document.getElementById('svc-grid-sec');
    if (!sec) return;
    const head = document.getElementById('header');
    const off = head ? head.getBoundingClientRect().height + 16 : 80;
    window.scrollTo({ top: Math.max(0, sec.getBoundingClientRect().top + window.scrollY - off), behavior: 'auto' });
  }

  function bindTopButton() {
    const btn = document.getElementById('svc-top');
    if (!btn || btn.dataset.bound) return;
    btn.dataset.bound = '1';
    btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    const sync = () => {
      const on = document.body.classList.contains('res-reading') && window.scrollY > 420;
      btn.hidden = !on;
      btn.classList.toggle('is-in', on);
    };
    window.addEventListener('scroll', sync, { passive: true });
    window.__nxSyncSvcTop = sync;
    sync();
  }

  function route() {
    const d = window.NX_CONTENT[lang()];
    const m = /^#s=(.+)$/.exec(location.hash);
    openSlug = m && pageOf(m[1]) ? m[1] : null;
    fill('svc_eyebrow', openSlug ? labels().kicker : d.svc_eyebrow);
    if (!openSlug) renderList(d);
    if (window.NX_solarLabels) window.NX_solarLabels(d.svc_short || d.services.map(s => s.t));
    renderDetail(d);
    const btn = document.getElementById('svc-top');
    if (btn) btn.setAttribute('aria-label', labels().top || 'Back to top');
    if (window.__nxSyncSvcTop) window.__nxSyncSvcTop();
  }

  window.addEventListener('hashchange', () => {
    const was = openSlug;
    route();
    if (was && !openSlug) scrollToList();
    else window.scrollTo({ top: 0, behavior: 'auto' });
  });
  window.addEventListener('popstate', () => {
    const was = openSlug;
    route();
    if (was && !openSlug) scrollToList();
  });

  window.NX_pageRender = function () {
    bindTopButton();
    route();
  };
})();
