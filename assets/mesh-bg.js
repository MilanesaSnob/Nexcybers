/* ============================================================
   NEXCYBERS — subtle constellation / network-mesh background
   Replaces .grid-bg on inner-page section headers.
   ============================================================ */
(function () {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function initMesh(canvas) {
    const ctx = canvas.getContext('2d');
    let w, h, dpr, pts;
    const DENSITY = 9000; // px^2 per point
    const LINK_DIST = 130;
    const SPEED = reduceMotion ? 0 : 0.12;

    function color() {
      const light = document.documentElement.getAttribute('data-theme') === 'light';
      return light ? { dot: '15,45,80', line: '15,45,80' } : { dot: '111,240,255', line: '111,240,255' };
    }

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.clientWidth; h = canvas.clientHeight;
      canvas.width = w * dpr; canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.max(18, Math.min(70, Math.floor((w * h) / DENSITY)));
      pts = Array.from({ length: count }, () => ({
        x: Math.random() * w, y: Math.random() * h,
        vx: (Math.random() - 0.5) * SPEED, vy: (Math.random() - 0.5) * SPEED
      }));
    }

    function step() {
      ctx.clearRect(0, 0, w, h);
      const c = color();
      for (const p of pts) {
        if (!reduceMotion) {
          p.x += p.vx; p.y += p.vy;
          if (p.x < 0 || p.x > w) p.vx *= -1;
          if (p.y < 0 || p.y > h) p.vy *= -1;
        }
      }
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x, dy = pts[i].y - pts[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < LINK_DIST) {
            ctx.strokeStyle = `rgba(${c.line},${0.16 * (1 - d / LINK_DIST)})`;
            ctx.lineWidth = 1;
            ctx.beginPath(); ctx.moveTo(pts[i].x, pts[i].y); ctx.lineTo(pts[j].x, pts[j].y); ctx.stroke();
          }
        }
      }
      for (const p of pts) {
        ctx.fillStyle = `rgba(${c.dot},0.55)`;
        ctx.beginPath(); ctx.arc(p.x, p.y, 1.6, 0, Math.PI * 2); ctx.fill();
      }
      if (!reduceMotion) requestAnimationFrame(step);
    }

    resize();
    step();
    window.addEventListener('resize', resize);
    new MutationObserver(() => {}).observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
  }

  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('canvas.mesh-bg').forEach(initMesh);
  });
})();
