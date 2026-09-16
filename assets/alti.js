/* Blog hero altimeter — drag (or arrow keys) to change the reading; drifts on its own when idle. */
(function () {
  const el = document.getElementById('blog-hero-anim');
  if (!el || !el.classList.contains('alti')) return;
  const tape = el.querySelector('#alti-tape');
  const horizon = el.querySelector('#alti-horizon');
  const read = el.querySelector('#alti-read');
  const mode = el.querySelector('#alti-mode');
  if (!tape || !read) return;

  const STEP = 25, MAX = 950, PX = 0.5;
  let ticks = '';
  for (let v = 0; v <= MAX; v += STEP) {
    const y = 100 - v * PX, maj = v % 50 === 0;
    ticks += `<line class="alti-tick${maj ? ' maj' : ''}" x1="168" y1="${y}" x2="${maj ? 175 : 172}" y2="${y}"/>`;
    if (maj) ticks += `<text class="alti-num" x="178" y="${y + 2.6}">${String(v).padStart(3, '0')}</text>`;
  }
  tape.innerHTML = ticks;

  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const clamp = (n, a, b) => Math.max(a, Math.min(b, n));
  let val = 480, target = 480, dragging = false, lastY = 0, manualUntil = 0, tilt = 0, pitch = 0;
  let hover = false, hx = 0, hy = 0;
  const t0 = performance.now();

  function frame(now) {
    if (!dragging && now > manualUntil) {
      if (!reduce) target = 500 + 130 * Math.sin((now - t0) / 7200);
      if (mode && mode.textContent !== 'AUTO') mode.textContent = 'AUTO';
      el.classList.remove('is-manual');
    }
    const prev = val;
    val += (target - val) * (dragging ? 0.3 : 0.055);
    const vel = val - prev;
    // roll/pitch follow the pointer while it is over the instrument; otherwise the
    // roll eases back from the rate of climb and the pitch returns to level.
    const rollTo = hover ? hx * 16 : clamp(-vel * 1.7, -9, 9);
    const pitchTo = hover ? hy * 17 : (reduce ? 0 : 3 * Math.sin((now - t0) / 5200));
    tilt += (rollTo - tilt) * 0.12;
    pitch += (pitchTo - pitch) * 0.1;
    tape.setAttribute('transform', `translate(0 ${(val * PX).toFixed(2)})`);
    if (horizon) horizon.setAttribute('transform', `translate(0 ${pitch.toFixed(2)}) rotate(${tilt.toFixed(2)} 100 100)`);
    read.textContent = String(Math.round(val)).padStart(4, '0');
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);

  const aim = e => {
    const r = el.getBoundingClientRect();
    hx = clamp(((e.clientX - r.left) / r.width - 0.5) * 2, -1, 1);
    hy = clamp(((e.clientY - r.top) / r.height - 0.5) * 2, -1, 1);
    hover = true;
  };
  el.addEventListener('pointermove', aim, { passive: true });
  el.addEventListener('pointerenter', aim, { passive: true });
  el.addEventListener('pointerleave', () => { hover = false; });

  const manual = () => {
    manualUntil = performance.now() + 3200;
    if (mode) mode.textContent = 'MANUAL';
    el.classList.add('is-manual');
  };
  el.addEventListener('pointerdown', e => {
    if (e.button !== undefined && e.button !== 0) return;
    e.preventDefault();
    dragging = true; lastY = e.clientY; manual();
    el.classList.add('is-held');
    el.setPointerCapture?.(e.pointerId);
  });
  el.addEventListener('pointermove', e => {
    if (!dragging) return;
    e.preventDefault();
    target = clamp(target + (lastY - e.clientY) * 1.6, 0, MAX);
    lastY = e.clientY;
    manual();
  });
  const release = () => { if (!dragging) return; dragging = false; el.classList.remove('is-held'); manualUntil = performance.now() + 3200; };
  el.addEventListener('pointerup', release);
  el.addEventListener('pointercancel', release);
  window.addEventListener('blur', release);
  el.addEventListener('keydown', e => {
    if (e.key !== 'ArrowUp' && e.key !== 'ArrowDown') return;
    e.preventDefault();
    target = clamp(target + (e.key === 'ArrowUp' ? 60 : -60), 0, MAX);
    manual();
  });
})();
