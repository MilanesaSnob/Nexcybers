/* ============================================================
   About hero radar — regular breathing at rest; press and hold
   to settle into an irregular, real-world organization profile.
   Every vertex only ever moves along its own axis.
   ============================================================ */
(function () {
  const HOST = document.getElementById('pentagon-chart');
  const POLY = document.getElementById('pent-data');
  if (!HOST || !POLY) return;

  const DOTS = [...HOST.querySelectorAll('.pentagon-dot')];
  const C = 100, RMAX = 90, N = 5;

  // axis unit vectors: first vertex points up, then clockwise every 72°
  const AXIS = Array.from({ length: N }, (_, i) => {
    const a = (-90 + i * 72) * Math.PI / 180;
    return [Math.cos(a), Math.sin(a)];
  });

  /* Profiles are shaped like real assessment outcomes: strong on some
     dimensions, thin on others. Axes, clockwise from the top:
     people · technology · process · compliance · resilience */
  const PROFILES = [
    [0.86, 0.42, 0.58, 0.34, 0.70], // awareness-led, weak tooling
    [0.36, 0.92, 0.78, 0.44, 0.33], // tech-heavy, low governance
    [0.52, 0.38, 0.45, 0.90, 0.82], // audit-driven
    [0.28, 0.34, 0.30, 0.26, 0.44], // early stage, thin everywhere
    [0.80, 0.76, 0.72, 0.88, 0.92]  // mature program
  ];

  // per-axis approach rates and jitter phases, so nothing moves in lockstep
  const RATE = [0.055, 0.038, 0.070, 0.030, 0.048];
  const JIT = [0.7, 1.15, 0.9, 1.45, 1.0];
  const PHASE = [0, 1.9, 3.4, 0.8, 2.6];

  const BASE_LO = 0.47, BASE_HI = 0.90, BREATH = 4500;

  let held = false, profile = -1, t0 = performance.now();
  let cur = new Array(N).fill(BASE_LO);
  let reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;

  function paint() {
    let pts = '';
    for (let i = 0; i < N; i++) {
      const r = cur[i] * RMAX;
      const x = C + AXIS[i][0] * r, y = C + AXIS[i][1] * r;
      pts += (i ? ' ' : '') + x.toFixed(2) + ',' + y.toFixed(2);
      if (DOTS[i]) { DOTS[i].setAttribute('cx', x.toFixed(2)); DOTS[i].setAttribute('cy', y.toFixed(2)); }
    }
    POLY.setAttribute('points', pts);
  }

  function frame(now) {
    const t = (now - t0) / 1000;
    if (held && profile >= 0) {
      const p = PROFILES[profile];
      for (let i = 0; i < N; i++) {
        const jitter = reduced ? 0 : Math.sin(t * JIT[i] + PHASE[i]) * 0.022;
        const want = Math.max(0.16, Math.min(0.95, p[i] + jitter));
        cur[i] += (want - cur[i]) * RATE[i] * 1.6;
      }
    } else {
      const k = 0.5 - 0.5 * Math.cos((now % BREATH) / BREATH * Math.PI * 2);
      const want = BASE_LO + (BASE_HI - BASE_LO) * (reduced ? 0.5 : k);
      for (let i = 0; i < N; i++) cur[i] += (want - cur[i]) * 0.09;
    }
    paint();
    requestAnimationFrame(frame);
  }

  function hold(e) {
    if (e.button !== undefined && e.button !== 0) return;
    held = true;
    profile = (profile + 1) % PROFILES.length;
    HOST.classList.add('is-held');
  }
  function release() {
    held = false;
    HOST.classList.remove('is-held');
  }

  HOST.addEventListener('pointerdown', hold);
  window.addEventListener('pointerup', release);
  window.addEventListener('pointercancel', release);
  HOST.addEventListener('keydown', e => { if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); hold(e); } });
  HOST.addEventListener('keyup', release);
  HOST.addEventListener('blur', release);
  HOST.tabIndex = 0;

  requestAnimationFrame(frame);
})();
