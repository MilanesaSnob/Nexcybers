/* ============================================================
   NEXCYBERS — about.html page-specific render
   ============================================================ */
(function () {
  /* Material Symbols (Google) for the benefits row, in benefits[] order. */
  const NX_BENEFIT_ICONS = ['shield', 'gavel', 'trending_up', 'savings', 'handshake'];
  function fill(key, val) {
    document.querySelectorAll(`[data-i="${key}"]`).forEach(el => { el.textContent = val; });
  }

  window.NX_pageRender = function () {
    const lang = window.NX_currentLang || localStorage.getItem('nx_lang') || 'en';
    const d = window.NX_CONTENT[lang];

    fill('about_eyebrow', d.about_eyebrow);
    document.querySelectorAll('[data-i="about_h2"]').forEach(el => { el.innerHTML = d.about_h2; });
    fill('about_lead', d.about_lead);
    document.querySelectorAll('[data-i="about_p1"]').forEach(el => { el.innerHTML = d.about_p1; });
    fill('about_p2', d.about_p2);
    fill('about_p3', d.about_p3);
    fill('about_p4_strong', d.about_p4_strong);
    fill('about_p4', d.about_p4);
    fill('about_p5', d.about_p5);

    fill('why_eyebrow', d.why_eyebrow);
    document.querySelectorAll('[data-i="why_h2"]').forEach(el => { el.innerHTML = d.why_h2; });
    fill('why_lead', d.why_lead);
    const pillarsGrid = document.getElementById('pillars-grid');
    if (pillarsGrid) pillarsGrid.innerHTML = d.pillars.map((p, i) => `
      <div class="principle pil-card" data-reveal style="--pd:${i * 1.1}s">
        <div class="pil-ico" aria-hidden="true">
          <svg viewBox="0 0 64 64"><circle class="pil-track" cx="32" cy="32" r="27"/><circle class="pil-arc" cx="32" cy="32" r="27"/></svg>
          <span class="material-symbols-outlined">${p.ico || 'shield'}</span>
        </div>
        <div class="pil-txt">
          <div class="k">${p.k}</div>
          <p>${p.d}</p>
        </div>
      </div>`).join('');

    fill('team_eyebrow', d.team_eyebrow);
    fill('team_h2', d.team_h2);
    const teamGrid = document.getElementById('team-grid');
    const TEAM_PHOTOS = ['assets/team/nadia_enciso.webp', 'assets/team/ezequiel_lopez_pareja.webp', 'assets/team/juan_pablo_astorga.webp'];
    if (teamGrid) teamGrid.innerHTML = d.team.map((m, i) => `
      <div class="team-card" data-reveal tabindex="0">
        <div class="team-photo">
          <div class="team-flip">
            <div class="team-face team-face-front">
              <svg class="team-figure" viewBox="0 0 120 120" aria-hidden="true">
                <circle class="tf-head" cx="60" cy="46" r="19"/>
                <path class="tf-body" d="M24 108c0-20 16-32 36-32s36 12 36 32"/>
              </svg>
            </div>
            <div class="team-face team-face-back">
              <img src="${TEAM_PHOTOS[i] || ''}" alt="${m.name}" loading="lazy">
            </div>
          </div>
          <span class="team-tip">${d.team_tip}</span>
        </div>
        <div class="team-meta">
          <h3>${m.name}</h3>
          <p>${m.role}</p>
        </div>
      </div>`).join('');

    if (teamGrid) {
      teamGrid.querySelectorAll('.team-card').forEach(card => {
        const photo = card.querySelector('.team-photo');
        const flip = (fromTop) => {
          card.style.setProperty('--flip-dir', fromTop ? '-180deg' : '180deg');
          card.classList.toggle('is-flipped');
        };
        photo.addEventListener('click', (e) => {
          const r = photo.getBoundingClientRect();
          flip(e.clientY < r.top + r.height / 2);
        });
        card.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); flip(false); }
        });
      });
      const mq = window.matchMedia('(max-width: 600px)');
      if (mq.matches && 'IntersectionObserver' in window) {
        const io = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            const card = entry.target;
            const i = [...teamGrid.querySelectorAll('.team-card')].indexOf(card);
            setTimeout(() => {
              card.style.setProperty('--flip-dir', '180deg');
              card.classList.add('is-flipped');
            }, Math.max(0, i) * 220);
            io.unobserve(card);
          });
        }, { threshold: 0.4 });
        teamGrid.querySelectorAll('.team-card').forEach(c => io.observe(c));
      }
    }

    fill('sub_eyebrow', d.sub_eyebrow);
    fill('sub_h2', d.sub_h2);
    document.querySelectorAll('[data-i="sub_cta"]').forEach(el => { el.innerHTML = d.sub_cta + ' <span class="arw">→</span>'; });

    fill('benefits_eyebrow', d.benefits_eyebrow);
    fill('benefits_h2', d.benefits_h2);
    const benefitsGrid = document.getElementById('benefits-grid');
    if (benefitsGrid) benefitsGrid.innerHTML = d.benefits.map((b, i) => `
      <div class="bene-panel" data-tone="${i}" tabindex="0">
        <div class="bene-panel-in">
          <span class="bene-icon material-symbols-outlined" aria-hidden="true">${NX_BENEFIT_ICONS[i % NX_BENEFIT_ICONS.length]}</span>
          <span class="bene-label">${b}</span>
        </div>
      </div>`).join('');
  };
})();
