/* ============================================================
   Contact hero radar — hovering a blip identifies a team member,
   read out like a real radar contact label.
   ============================================================ */
(function () {
  const HOST = document.getElementById('radar');
  const POP = document.getElementById('radar-pop');
  if (!HOST || !POP) return;

  const SVG = HOST.querySelector('svg');
  const NS = 'http://www.w3.org/2000/svg';
  const BLIPS = [...HOST.querySelectorAll('.radar-blip')];
  const idEl = POP.querySelector('.rp-id');
  const nameEl = POP.querySelector('.rp-name');
  const roleEl = POP.querySelector('.rp-role');

  const LABELS = { en: 'Contact', es: 'Contacto' };
  function lang() { return window.NX_currentLang || localStorage.getItem('nx_lang') || 'en'; }
  function team() {
    const d = (window.NX_CONTENT || {})[lang()];
    return (d && d.team) || [];
  }

  // one transparent, generously sized hit target per blip
  const HITS = BLIPS.map(b => {
    const c = document.createElementNS(NS, 'circle');
    c.setAttribute('cx', b.getAttribute('cx'));
    c.setAttribute('cy', b.getAttribute('cy'));
    c.setAttribute('r', '11');
    c.setAttribute('class', 'radar-hit');
    c.setAttribute('tabindex', '0');
    SVG.appendChild(c);
    return c;
  });

  let active = -1;

  function show(i) {
    const t = team();
    if (i >= t.length) return;
    const m = t[i];
    const cx = parseFloat(BLIPS[i].getAttribute('cx'));
    const cy = parseFloat(BLIPS[i].getAttribute('cy'));

    idEl.textContent = (LABELS[lang()] || LABELS.en) + ' ' + String(i + 1).padStart(2, '0');
    nameEl.textContent = m.name;
    roleEl.textContent = m.role;

    POP.hidden = false;
    POP.style.left = (cx / 200 * 100).toFixed(2) + '%';
    POP.style.top = (cy / 200 * 100).toFixed(2) + '%';
    POP.classList.toggle('flip-x', cx > 108);
    POP.classList.toggle('flip-y', cy > 130);
    requestAnimationFrame(() => POP.classList.add('is-in'));

    BLIPS.forEach((b, k) => b.classList.toggle('is-locked', k === i));
    active = i;
  }

  function hide(i) {
    if (i !== undefined && i !== active) return;
    POP.classList.remove('is-in');
    BLIPS.forEach(b => b.classList.remove('is-locked'));
    active = -1;
    setTimeout(() => { if (active === -1) POP.hidden = true; }, 220);
  }

  function bind() {
    const n = team().length;
    HITS.forEach((hit, i) => {
      const on = i < n;
      hit.classList.toggle('is-live', on);
      if (hit.dataset.bound) return;
      hit.dataset.bound = '1';
      hit.addEventListener('pointerenter', () => show(i));
      hit.addEventListener('pointerleave', () => hide(i));
      hit.addEventListener('focus', () => show(i));
      hit.addEventListener('blur', () => hide(i));
    });
  }

  const prevRender = window.NX_pageRender;
  window.NX_pageRender = function () {
    if (prevRender) prevRender();
    hide();
    bind();
  };
  bind();
})();
