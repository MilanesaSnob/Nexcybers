(function () {
  const R = 78, CX = 100, CY = 100, BASE = 50, MIN = -18, MAX = 26, PERIOD = 7000;
  const rad = d => d * Math.PI / 180;
  function frame(phi, pivots, edges) {
    const a = BASE + phi;
    const d = R * Math.cos(rad(a));
    const ux = -Math.sin(rad(a)), uy = Math.cos(rad(a));
    const rv = d / Math.cos(rad(30));
    const vx = CX + rv * Math.cos(rad(a - 30)), vy = CY + rv * Math.sin(rad(a - 30));
    const t = -((vx - CX) * ux + (vy - CY) * uy) + Math.sqrt(Math.max(R * R - d * d, 0));
    const ex = vx + t * ux, ey = vy + t * uy;
    for (const p of pivots) p.setAttribute('transform', 'rotate(' + phi.toFixed(2) + ' 178 100)');
    for (const l of edges) {
      l.setAttribute('x1', vx.toFixed(2)); l.setAttribute('y1', vy.toFixed(2));
      l.setAttribute('x2', ex.toFixed(2)); l.setAttribute('y2', ey.toFixed(2));
    }
  }
  function init() {
    const pivots = document.querySelectorAll('.iris-blade-pivot');
    const edges = document.querySelectorAll('.iris-edge');
    if (!pivots.length) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { frame(0, pivots, edges); return; }
    const t0 = performance.now();
    (function loop(now) {
      const p = ((now - t0) % PERIOD) / PERIOD;
      frame(MIN + (MAX - MIN) * (0.5 - 0.5 * Math.cos(2 * Math.PI * p)), pivots, edges);
      requestAnimationFrame(loop);
    })(t0);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
