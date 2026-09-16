/* ============================================================
   NEXCYBERS — Interactive globe (Three.js)
   Node cloud + city threat-nodes + animated arcs + hover popovers
   ============================================================ */
function NX_initGlobe() {
  const canvas = document.getElementById('globe-canvas');
  const popover = document.getElementById('globe-popover');
  if (!canvas || !window.THREE || window.NX_globeReady) return;

  const C = {
    base:   new THREE.Color(0x4a6f93),
    land:   new THREE.Color(0x8fd6ff),
    node:   new THREE.Color(0x6ff0ff),
    nodeHi: new THREE.Color(0x00bffe),
    arcA:   new THREE.Color(0x2f7bff),
    arcB:   new THREE.Color(0x00bffe),
  };

  const R = 1.38;                // globe radius (~100px smaller diameter total)
  const deg = Math.PI / 180;

  let W = canvas.clientWidth, H = canvas.clientHeight;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(38, W / H, 0.1, 200);
  const CAM_Z_FINAL = 5.75, CAM_Z_START = 10.5;
  camera.position.set(0, 0, CAM_Z_START);
  canvas.style.opacity = '0';
  let introStart = null;
  const INTRO_MS = 2000;
  function easeOutQuint(t) { return 1 - Math.pow(1 - t, 5); }

  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
  renderer.setSize(W, H, false);

  /* ---------------- starfield (depth / "from space") ---------------- */
  const starGroup = new THREE.Group();
  scene.add(starGroup);
  function isLightTheme() { return document.documentElement.getAttribute('data-theme') === 'light'; }
  function starColor() { return isLightTheme() ? 0x2f6fdb : 0xcfe6ff; }
  function arcColors() { return isLightTheme() ? [0x0091c9, 0x00c2e0] : [0x2f7bff, 0x00bffe]; }
  /* Light theme inverts the sphere: pale body, dark geography */
  const PAL = {
    dark:  { ocean: 0x4a6f93, land: 0x8fd6ff, wire: 0x2a4866, wireOp: 0.22, glow: 0x14283c, node: 0x6ff0ff, nodeHi: 0x00bffe },
    light: { ocean: 0x6d94b6, land: 0x11405e, wire: 0x2c6285, wireOp: 0.34, glow: 0xe4eef8, node: 0x00648c, nodeHi: 0x0a3a56 }
  };
  function pal() { return isLightTheme() ? PAL.light : PAL.dark; }
  (function buildStars() {
    const layers = [
      { count: 820, size: 0.075, opacity: 0.7,  dist: [34, 70] },
      { count: 460, size: 0.13, opacity: 0.9,  dist: [24, 52] },
      { count: 170, size: 0.2, opacity: 1.0,  dist: [20, 46] }
    ];
    layers.forEach(L => {
      const pos = new Float32Array(L.count * 3);
      for (let i = 0; i < L.count; i++) {
        const u = Math.random(), v = Math.random();
        const theta = 2 * Math.PI * u, phi = Math.acos(2 * v - 1);
        const r = L.dist[0] + Math.random() * (L.dist[1] - L.dist[0]);
        pos[i*3]   = r * Math.sin(phi) * Math.cos(theta);
        pos[i*3+1] = r * Math.sin(phi) * Math.sin(theta);
        pos[i*3+2] = r * Math.cos(phi);
      }
      const geo = new THREE.BufferGeometry();
      geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
      const mat = new THREE.PointsMaterial({
        color: starColor(), size: L.size, sizeAttenuation: true,
        transparent: true, opacity: L.opacity, depthWrite: false
      });
      const pts = new THREE.Points(geo, mat);
      pts.userData = { baseOp: L.opacity, tw: Math.random() * Math.PI * 2, sp: 0.4 + Math.random() * 0.7 };
      starGroup.add(pts);
    });
  })();

  // ---- root group (rotates) ----
  const globe = new THREE.Group();
  scene.add(globe);
  globe.rotation.x = 0.32;
  globe.scale.setScalar(0.7);

  // ---- helper: lat/lon -> vec3 ----
  function toVec(lat, lon, r = R) {
    const phi = (90 - lat) * deg;
    const theta = (lon + 180) * deg;
    return new THREE.Vector3(
      -r * Math.sin(phi) * Math.cos(theta),
       r * Math.cos(phi),
       r * Math.sin(phi) * Math.sin(theta)
    );
  }
  function fromVec(x, y, z) {
    const phi = Math.acos(Math.max(-1, Math.min(1, y / R)));
    const lat = 90 - phi / deg;
    let theta = Math.atan2(z, -x);
    let lon = theta / deg - 180;
    if (lon < -180) lon += 360;
    if (lon > 180) lon -= 360;
    return { lat, lon };
  }

  /* ---------------- continents (simplified land mask, no political borders) ---------------- */
  const CONTINENTS = [
    [[-165,68],[-140,70],[-95,72],[-60,68],[-65,50],[-52,47],[-60,45],[-70,41],[-75,35],[-80,26],[-85,20],[-90,15],[-92,14],[-97,16],[-105,20],[-110,23],[-115,28],[-117,32],[-124,40],[-130,50],[-140,58],[-155,60],[-165,68]],
    [[-79,9],[-75,1],[-70,-4],[-70,-18],[-68,-22],[-70,-30],[-71,-40],[-73,-52],[-68,-55],[-65,-52],[-58,-38],[-55,-25],[-48,-25],[-40,-10],[-35,-6],[-40,2],[-50,5],[-60,8],[-70,10],[-79,9]],
    [[-17,15],[-16,12],[-13,8],[-10,5],[8,4],[9,2],[13,-5],[12,-15],[14,-22],[18,-28],[20,-34],[26,-33],[32,-27],[35,-23],[40,-15],[41,-3],[43,3],[48,10],[43,12],[38,15],[35,20],[33,27],[32,31],[25,32],[10,33],[0,35],[-6,33],[-10,30],[-13,25],[-17,20],[-17,15]],
    [[-9,43],[-9,50],[-5,58],[5,62],[12,65],[25,70],[40,68],[45,60],[40,55],[38,47],[28,42],[20,40],[18,40],[12,38],[3,40],[-2,37],[-9,37],[-9,43]],
    [[28,42],[40,55],[45,60],[60,68],[90,73],[130,72],[160,68],[170,65],[178,60],[170,55],[160,52],[150,45],[142,42],[135,35],[128,35],[122,30],[118,24],[110,18],[103,10],[100,5],[95,5],[100,15],[92,22],[88,22],[80,17],[73,15],[68,24],[62,25],[57,26],[52,30],[48,30],[45,25],[40,15],[38,20],[35,30],[33,35],[28,42]],
    [[113,-22],[114,-28],[118,-33],[124,-33],[131,-32],[136,-35],[140,-38],[147,-38],[150,-36],[153,-28],[150,-22],[145,-17],[142,-11],[137,-12],[132,-12],[128,-14],[122,-17],[113,-22]]
  ];
  function pointInRing(x, y, ring) {
    let inside = false;
    for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
      const xi = ring[i][0], yi = ring[i][1], xj = ring[j][0], yj = ring[j][1];
      const hit = ((yi > y) !== (yj > y)) && (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
      if (hit) inside = !inside;
    }
    return inside;
  }
  function isLand(lat, lon) {
    for (const ring of CONTINENTS) { if (pointInRing(lon, lat, ring)) return true; }
    return false;
  }
  let oceanPts = null, landPts = null, wireMesh = null, glowMesh = null;

  /* ---------------- 1. dotted sphere (fibonacci): ocean base + brighter/larger land dots ---------------- */
  (function buildDots() {
    const N = 1400;
    const oceanPos = [], landPos = [];
    const golden = Math.PI * (3 - Math.sqrt(5));
    for (let i = 0; i < N; i++) {
      const y = 1 - (i / (N - 1)) * 2;
      const rad = Math.sqrt(1 - y * y);
      const th = golden * i;
      const x = Math.cos(th) * rad * R, py = y * R, z = Math.sin(th) * rad * R;
      const { lat, lon } = fromVec(x, py, z);
      (isLand(lat, lon) ? landPos : oceanPos).push(x, py, z);
    }
    const oceanGeo = new THREE.BufferGeometry();
    oceanGeo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(oceanPos), 3));
    oceanPts = new THREE.Points(oceanGeo, new THREE.PointsMaterial({
      color: pal().ocean, size: 0.02, sizeAttenuation: true,
      transparent: true, opacity: 0.85, depthWrite: false
    }));
    globe.add(oceanPts);

    const landGeo = new THREE.BufferGeometry();
    landGeo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(landPos), 3));
    landPts = new THREE.Points(landGeo, new THREE.PointsMaterial({
      color: pal().land, size: 0.028, sizeAttenuation: true,
      transparent: true, opacity: 0.95, depthWrite: false
    }));
    globe.add(landPts);
  })();

  /* ---------------- 2. wireframe latitude/longitude ---------------- */
  (function buildWire() {
    wireMesh = new THREE.LineSegments(
      new THREE.WireframeGeometry(new THREE.SphereGeometry(R * 0.999, 36, 24)),
      new THREE.LineBasicMaterial({ color: pal().wire, transparent: true, opacity: pal().wireOp })
    );
    globe.add(wireMesh);
  })();

  /* ---------------- 3. inner glow sphere ---------------- */
  (function buildGlow() {
    const glowMat = new THREE.MeshBasicMaterial({ color: pal().glow });
    glowMesh = new THREE.Mesh(new THREE.SphereGeometry(R * 0.985, 48, 48), glowMat);
    globe.add(glowMesh);
  })();

  /* ---------------- 4. city threat nodes ---------------- */
  const NODES = window.NX_NODES || [];
  const nodeMeshes = [];
  const ringMeshes = [];

  const nodeGeo = new THREE.SphereGeometry(0.026, 16, 16);
  const nodeState = []; // per-node: {active, op}
  NODES.forEach((data, i) => {
    const p = toVec(data.lat, data.lon, R * 1.005);
    const col = data.sev === 'critical' ? pal().nodeHi : pal().node;

    const active = Math.random() < 0.55;
    nodeState[i] = { active, op: active ? 1 : 0 };

    const m = new THREE.Mesh(nodeGeo, new THREE.MeshBasicMaterial({ color: col, transparent: true, opacity: nodeState[i].op }));
    m.position.copy(p);
    m.scale.setScalar(nodeState[i].op);
    m.userData = { data, i, baseScale: 1, col, sev: data.sev };
    globe.add(m);
    nodeMeshes.push(m);

    // bigger invisible hit target
    const hit = new THREE.Mesh(new THREE.SphereGeometry(0.085, 8, 8),
      new THREE.MeshBasicMaterial({ visible: false }));
    hit.position.copy(p);
    hit.userData = m.userData;
    globe.add(hit);
    nodeMeshes.push(hit);

    // pulsing ring (flat, faces outward)
    const ring = new THREE.Mesh(
      new THREE.RingGeometry(0.04, 0.05, 24),
      new THREE.MeshBasicMaterial({ color: col, transparent: true, opacity: 0.6, side: THREE.DoubleSide, depthWrite: false })
    );
    ring.position.copy(p);
    ring.lookAt(p.clone().multiplyScalar(2));
    ring.userData = { phase: Math.random() * Math.PI * 2, i, sev: data.sev };
    globe.add(ring);
    ringMeshes.push(ring);
  });

  // periodically retire an active node and awaken a dormant one
  function cycleNodes() {
    const activeIdx = nodeState.map((s, i) => s.active ? i : -1).filter(i => i >= 0);
    const dormantIdx = nodeState.map((s, i) => !s.active ? i : -1).filter(i => i >= 0);
    const toggles = 2;
    for (let k = 0; k < toggles; k++) {
      if (activeIdx.length > 5) {
        const candidates = activeIdx.filter(i => i !== hoveredIndex);
        if (candidates.length) {
          const pick = candidates.splice(Math.floor(Math.random() * candidates.length), 1)[0];
          nodeState[pick].active = false;
          activeIdx.splice(activeIdx.indexOf(pick), 1);
        }
      }
    }
    for (let k = 0; k < toggles; k++) {
      if (dormantIdx.length) {
        const pick = dormantIdx.splice(Math.floor(Math.random() * dormantIdx.length), 1)[0];
        nodeState[pick].active = true;
      }
    }
  }
  setInterval(cycleNodes, 2600);

  /* ---------------- 5. animated arcs ---------------- */
  const arcs = [];
  function makeArc(a, b, color, speed, delay) {
    const va = toVec(a.lat, a.lon, R * 1.005);
    const vb = toVec(b.lat, b.lon, R * 1.005);
    const mid = va.clone().add(vb).multiplyScalar(0.5);
    const dist = va.distanceTo(vb);
    mid.normalize().multiplyScalar(R + dist * 0.42 + 0.12);
    const curve = new THREE.QuadraticBezierCurve3(va, mid, vb);
    const pts = curve.getPoints(60);

    const geo = new THREE.BufferGeometry().setFromPoints(pts);
    const mat = new THREE.LineBasicMaterial({ color, transparent: true, opacity: 0.22 });
    const line = new THREE.Line(geo, mat);
    globe.add(line);

    // traveling pulse
    const pulse = new THREE.Mesh(
      new THREE.SphereGeometry(0.011, 10, 10),
      new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.95 })
    );
    globe.add(pulse);

    arcs.push({ curve, pulse, line, t: delay || 0, speed: speed || 0.18, color, ia: null, ib: null });
  }

  // connect a hub set of pairs
  if (NODES.length > 2) {
    const pairs = [[7,0],[2,3],[1,5],[0,1],[3,11],[4,8],[8,9],[10,7],[6,4],[2,0],[5,9],[11,6],[12,3],[13,15],[14,16],[15,16],[13,3],[17,18],[18,19],[19,7],[20,21],[21,22],[22,6],[23,12],[24,12],[23,24],[25,6],[26,4],[25,26]];
    pairs.forEach((pr, k) => {
      if (NODES[pr[0]] && NODES[pr[1]]) {
        makeArc(NODES[pr[0]], NODES[pr[1]], k % 2 ? arcColors()[1] : arcColors()[0], 0.14 + Math.random()*0.1, Math.random());
        const last = arcs[arcs.length - 1];
        last.ia = pr[0]; last.ib = pr[1];
      }
    });
  }

  /* ---------------- interaction: drag + inertia ---------------- */
  let targetRotY = 0, targetRotX = 0.32;
  let curRotY = 0, curRotX = 0.32;
  let autoSpeed = 0.0016;
  let dragging = false, lastX = 0, lastY = 0, vel = 0;
  let pointerX = 0.5, pointerY = 0.5;

  function onDown(e) {
    dragging = true; autoSpeed = 0;
    lastX = (e.touches ? e.touches[0].clientX : e.clientX);
    lastY = (e.touches ? e.touches[0].clientY : e.clientY);
    canvas.style.cursor = 'grabbing';
  }
  function onMove(e) {
    const cx = (e.touches ? e.touches[0].clientX : e.clientX);
    const cy = (e.touches ? e.touches[0].clientY : e.clientY);
    pointerX = cx / window.innerWidth;
    pointerY = cy / window.innerHeight;
    if (dragging) {
      const dx = cx - lastX, dy = cy - lastY;
      targetRotY += dx * 0.005;
      targetRotX += dy * 0.003;
      targetRotX = Math.max(-0.6, Math.min(0.9, targetRotX));
      vel = dx * 0.005;
      lastX = cx; lastY = cy;
    }
    if (!e.touches) updateHover(cx, cy);
  }
  function onUp() {
    dragging = false;
    canvas.style.cursor = 'grab';
    setTimeout(() => { if (!dragging) autoSpeed = 0.0016; }, 1600);
  }
  canvas.addEventListener('mousedown', onDown);
  window.addEventListener('mousemove', onMove);
  window.addEventListener('mouseup', onUp);
  canvas.addEventListener('touchstart', onDown, { passive: true });
  canvas.addEventListener('touchmove', onMove, { passive: true });
  canvas.addEventListener('touchend', onUp);
  canvas.style.cursor = 'grab';

  /* ---------------- raycast hover ---------------- */
  const ray = new THREE.Raycaster();
  const mouse = new THREE.Vector2();
  let hovered = null;
  let hoveredIndex = null;

  function lang() { return window.NX_currentLang || 'en'; }

  function updateHover(cx, cy) {
    const rect = canvas.getBoundingClientRect();
    mouse.x = ((cx - rect.left) / rect.width) * 2 - 1;
    mouse.y = -((cy - rect.top) / rect.height) * 2 + 1;
    ray.setFromCamera(mouse, camera);
    const hits = ray.intersectObjects(nodeMeshes, false);
    // only count nodes facing camera (z of world pos)
    let found = null;
    for (const h of hits) {
      const wp = h.object.getWorldPosition(new THREE.Vector3());
      if (wp.z > -0.2) { found = h.object; break; }
    }
    if (found) {
      const d = found.userData.data;
      if (hovered !== d) {
        hovered = d;
        hoveredIndex = found.userData.i;
        const L = d[lang()];
        popover.innerHTML =
          `<div class="pop-loc"><span>${d.city}</span><span class="pop-sev sev-${d.sev}">${d.sev}</span></div>` +
          `<div class="pop-threat">${L.threat}</div>` +
          `<div class="pop-desc">${L.desc}</div>`;
        popover.classList.add('show');
      }
      // position popover (clamped)
      let px = cx + 18, py = cy + 18;
      if (px + 260 > window.innerWidth) px = cx - 266;
      if (py + 140 > window.innerHeight) py = cy - 150;
      popover.style.left = px + 'px';
      popover.style.top = py + 'px';
      canvas.style.cursor = dragging ? 'grabbing' : 'pointer';
    } else if (hovered) {
      hovered = null;
      hoveredIndex = null;
      popover.classList.remove('show');
      canvas.style.cursor = dragging ? 'grabbing' : 'grab';
    }
  }

  window.addEventListener('nx-theme-change', () => {
    const P = pal();
    if (oceanPts) oceanPts.material.color.setHex(P.ocean);
    if (landPts) landPts.material.color.setHex(P.land);
    if (wireMesh) { wireMesh.material.color.setHex(P.wire); wireMesh.material.opacity = P.wireOp; }
    if (glowMesh) glowMesh.material.color.setHex(P.glow);
    nodeMeshes.forEach(m => {
      if (!m.material || m.material.visible === false) return;
      const col = m.userData && m.userData.sev === 'critical' ? P.nodeHi : P.node;
      m.material.color.setHex(col);
      if (m.userData) m.userData.col = col;
    });
    ringMeshes.forEach(r => r.material.color.setHex(r.userData && r.userData.sev === 'critical' ? P.nodeHi : P.node));
    const c = starColor();
    starGroup.children.forEach(p => p.material.color.setHex(c));
    const [a, b] = arcColors();
    arcs.forEach((arc, idx) => {
      const col = idx % 2 ? b : a;
      arc.line.material.color.setHex(col);
      arc.pulse.material.color.setHex(col);
    });
  });

  /* ---------------- resize ---------------- */
  function resize() {
    W = canvas.clientWidth; H = canvas.clientHeight;
    camera.aspect = W / H; camera.updateProjectionMatrix();
    renderer.setSize(W, H, false);
  }
  window.addEventListener('resize', resize);

  /* ---------------- animate (paused when off-screen) ---------------- */
  const clock = new THREE.Clock();
  const wpTmp = new THREE.Vector3();
  const frontVec = camera.position.clone().normalize();
  let visible = true;
  let rafId = null;
  if ('IntersectionObserver' in window) {
    new IntersectionObserver((entries) => {
      visible = entries[0].isIntersecting;
      if (visible && rafId === null) { clock.getDelta(); rafId = requestAnimationFrame(animate); }
    }, { threshold: 0 }).observe(canvas);
  }
  function animate(now) {
    if (!visible) { rafId = null; return; }
    rafId = requestAnimationFrame(animate);
    if (introStart === null) introStart = now || performance.now();
    const introT = Math.min(1, ((now || performance.now()) - introStart) / INTRO_MS);
    if (introT < 1) {
      const e = easeOutQuint(introT);
      camera.position.z = CAM_Z_START + (CAM_Z_FINAL - CAM_Z_START) * e;
      globe.scale.setScalar(0.7 + 0.3 * e);
      canvas.style.opacity = String(Math.min(1, introT / 0.6));
    } else if (canvas.style.opacity !== '1') {
      camera.position.z = CAM_Z_FINAL;
      globe.scale.setScalar(1);
      canvas.style.opacity = '1';
    }
    const dt = Math.min(clock.getDelta(), 0.05);
    const t = clock.elapsedTime;

    if (!dragging) { targetRotY += autoSpeed; vel *= 0.94; targetRotY += vel; }
    curRotY += (targetRotY - curRotY) * 0.08;
    curRotX += (targetRotX - curRotX) * 0.08;

    // subtle parallax from pointer
    globe.rotation.y = curRotY + (pointerX - 0.5) * 0.18;
    globe.rotation.x = curRotX + (pointerY - 0.5) * 0.12;

    // starfield: gentle drift, pointer parallax, twinkle
    starGroup.rotation.y += dt * 0.006;
    starGroup.rotation.x = (pointerY - 0.5) * 0.06;
    starGroup.position.x = (pointerX - 0.5) * 0.5;
    starGroup.children.forEach(p => {
      const u = p.userData;
      p.material.opacity = u.baseOp * (0.65 + 0.35 * Math.sin(t * u.sp + u.tw));
    });

    // node + ring pulse (with active/dormant fade + far-side occlusion)
    const camDir = frontVec;
    nodeMeshes.forEach(m => {
      if (m.userData && m.userData.baseScale) {
        const st = nodeState[m.userData.i];
        st.op += ((st.active ? 1 : 0) - st.op) * dt * 2.2;
        const pulse = 1 + Math.sin(t * 2.4 + m.userData.i) * 0.18;
        m.scale.setScalar(pulse * st.op);
        if (m.material.transparent) {
          const facing = m.getWorldPosition(wpTmp).normalize().dot(camDir);
          const vis = Math.min(1, Math.max(0, (facing + 0.05) / 0.25));
          m.material.opacity = st.op * vis;
        }
      }
    });
    ringMeshes.forEach(r => {
      const p = (t * 0.7 + r.userData.phase) % 2;
      const st = nodeState[r.userData.i];
      r.scale.setScalar(1 + p * 1.6);
      const facing = r.getWorldPosition(wpTmp).normalize().dot(camDir);
      const vis = Math.min(1, Math.max(0, (facing + 0.05) / 0.25));
      r.material.opacity = Math.max(0, 0.55 * (1 - p / 2)) * st.op * vis;
    });

    // arcs pulse travel (faded when either endpoint node is dormant)
    arcs.forEach(a => {
      a.t += dt * a.speed * 2;
      if (a.t > 1) a.t -= 1;
      const pos = a.curve.getPoint(a.t);
      a.pulse.position.copy(pos);
      const arcOp = (a.ia != null && a.ib != null) ? Math.min(nodeState[a.ia].op, nodeState[a.ib].op) : 1;
      const facing = a.pulse.getWorldPosition(wpTmp).normalize().dot(frontVec);
      const vis = Math.min(1, Math.max(0, (facing + 0.05) / 0.25));
      a.line.material.opacity = 0.22 * arcOp;
      a.pulse.material.opacity = (0.4 + Math.sin(a.t * Math.PI) * 0.6) * arcOp * vis;
    });

    renderer.render(scene, camera);
  }

  // wait a tick to get proper size
  resize();
  animate();

  window.NX_globeReady = true;
}

/* Boot: three.js may still be in flight (or blocked). Wait for it, and fall
   back to a second CDN if the first never arrives. */
(function boot() {
  if (!document.getElementById('globe-canvas')) return;
  let tries = 0, fallbackAdded = false;
  (function tick() {
    if (window.THREE) { try { NX_initGlobe(); } catch (e) { console.error('[globe]', e); } return; }
    if (++tries === 20 && !fallbackAdded) {
      fallbackAdded = true;
      const s = document.createElement('script');
      s.src = 'https://unpkg.com/three@0.128.0/build/three.min.js';
      document.head.appendChild(s);
    }
    if (tries < 200) setTimeout(tick, 50);
  })();
})();
