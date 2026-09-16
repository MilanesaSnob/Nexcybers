/* ============================================================
   NEXCYBERS — services hero: orbital system
   Drag to rotate (X) and tilt (Y). Hover/focus a planet to read
   the service it stands for. Same instrument family as the
   Resources atom / Blog altimeter / Product compass.
   ============================================================ */
(function () {
  const el = document.getElementById('svc-solar');
  if (!el) return;
  const NS = 'http://www.w3.org/2000/svg';
  const gOrbits = el.querySelector('#sys-orbits');
  const gBack = el.querySelector('#sys-back');
  const gFront = el.querySelector('#sys-front');
  const val = el.querySelector('#sys-val');
  if (!gOrbits || !gFront || !val) return;

  const R0 = 26, R1 = 92, REST = 0.6;
  const reduce = matchMedia('(prefers-reduced-motion:reduce)').matches;
  const coarse = matchMedia('(pointer:coarse)').matches;
  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));

  let orbits = [], orbs = [], names = [];
  const st = { az: 0, tilt: REST, tiltT: REST, sel: -1, held: false };

  function build(list) {
    names = list && list.length ? list : names;
    const n = Math.max(3, names.length || 6);
    if (orbs.length === n) { syncLabels(); return; }
    gOrbits.innerHTML = ''; gBack.innerHTML = ''; gFront.innerHTML = '';
    orbits = []; orbs = [];
    for (let i = 0; i < n; i++) {
      const r = R0 + (R1 - R0) * i / (n - 1);
      const e = document.createElementNS(NS, 'ellipse');
      e.setAttribute('class', 'sys-orbit'); e.setAttribute('cx', '100'); e.setAttribute('cy', '100');
      gOrbits.appendChild(e);
      orbits.push({ node: e, r });
      const g = document.createElementNS(NS, 'g');
      g.setAttribute('class', 'sys-orb');
      g.setAttribute('tabindex', '0');
      g.setAttribute('role', 'img');
      g.innerHTML = `<circle class="sys-hit" r="12"/><circle class="sys-sel" r="8.5"/><circle class="sys-planet" r="${(3 + (i % 3) * 0.5).toFixed(1)}"/>`;
      gFront.appendChild(g);
      const o = { node: g, r, th: i * 1.73, sp: 0.9 / Math.pow(r / R0, 1.5), i, front: true };
      g.addEventListener('pointerenter', () => select(i));
      g.addEventListener('pointerleave', () => { if (document.activeElement !== g) select(-1); });
      g.addEventListener('focus', () => select(i));
      g.addEventListener('blur', () => select(-1));
      orbs.push(o);
    }
    syncLabels();
  }

  function syncLabels() {
    orbs.forEach((o, i) => o.node.setAttribute('aria-label', names[i] || ''));
  }

  function select(i) {
    if (st.sel === i) return;
    st.sel = i;
    orbs.forEach((o, j) => o.node.classList.toggle('is-sel', j === i));
    orbits.forEach((o, j) => o.node.classList.toggle('is-lit', j === i));
    el.classList.toggle('is-reading', i >= 0);
  }

  let lastTxt = '';
  function write(txt) {
    if (txt === lastTxt) return;
    lastTxt = txt;
    val.textContent = txt;
  }
  function readout() {
    if (st.sel >= 0 && names[st.sel]) { write(names[st.sel].toUpperCase()); return; }
    const az = Math.round(((st.az * 180 / Math.PI) % 360 + 360) % 360);
    const inc = Math.round(Math.acos(clamp(st.tilt, 0, 1)) * 180 / Math.PI);
    write(`AZ ${String(az).padStart(3, '0')}°   INC ${String(inc).padStart(2, '0')}°`);
  }

  let last = performance.now();
  function frame(now) {
    const dt = Math.min(0.05, (now - last) / 1000); last = now;
    st.tilt += (st.tiltT - st.tilt) * Math.min(1, dt * 6);
    const k = st.tilt;
    for (const o of orbits) { o.node.setAttribute('rx', o.r.toFixed(1)); o.node.setAttribute('ry', (o.r * k).toFixed(2)); }
    for (const p of orbs) {
      if (!reduce) p.th += p.sp * dt;
      const a = p.th + st.az;
      const x = 100 + p.r * Math.cos(a);
      const y = 100 + p.r * k * Math.sin(a);
      const d = Math.sin(a), dep = (d + 1) / 2;
      p.node.setAttribute('transform', `translate(${x.toFixed(2)} ${y.toFixed(2)}) scale(${(0.78 + 0.34 * dep).toFixed(3)})`);
      p.node.style.opacity = (0.42 + 0.58 * dep).toFixed(2);
      const front = d >= 0;
      if (front !== p.front) { p.front = front; (front ? gFront : gBack).appendChild(p.node); }
    }
    readout();
    requestAnimationFrame(frame);
  }

  /* ---------- drag: X rotates the system, Y tilts the plane ---------- */
  let px = 0, py = 0, moved = 0;
  el.addEventListener('pointerdown', e => {
    if (e.button) return;
    st.held = true; moved = 0; px = e.clientX; py = e.clientY;
    el.classList.add('is-held');
    el.setPointerCapture(e.pointerId);
  });
  el.addEventListener('pointermove', e => {
    if (!st.held) return;
    const dx = e.clientX - px, dy = e.clientY - py;
    px = e.clientX; py = e.clientY;
    moved += Math.abs(dx) + Math.abs(dy);
    st.az += dx * 0.011;
    if (!coarse) st.tiltT = clamp(st.tiltT - dy * 0.006, 0.16, 1);
  });
  const release = e => {
    if (!st.held) return;
    st.held = false;
    el.classList.remove('is-held');
    if (moved < 5 && st.sel < 0) st.tiltT = st.tiltT > 0.75 ? 0.45 : st.tiltT > 0.3 ? 0.16 : 1;
    if (e && e.pointerId != null && el.hasPointerCapture(e.pointerId)) el.releasePointerCapture(e.pointerId);
  };
  el.addEventListener('pointerup', release);
  el.addEventListener('pointercancel', release);
  el.addEventListener('keydown', e => {
    const step = 0.22;
    if (e.key === 'ArrowLeft') { st.az -= step; e.preventDefault(); }
    else if (e.key === 'ArrowRight') { st.az += step; e.preventDefault(); }
    else if (e.key === 'ArrowUp') { st.tiltT = clamp(st.tiltT + 0.12, 0.16, 1); e.preventDefault(); }
    else if (e.key === 'ArrowDown') { st.tiltT = clamp(st.tiltT - 0.12, 0.16, 1); e.preventDefault(); }
  });

  window.NX_solarLabels = build;
  build(null);
  requestAnimationFrame(frame);
})();
