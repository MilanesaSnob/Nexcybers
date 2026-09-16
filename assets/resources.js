(function () {
  const RES = [
    { cat: 'reg', url: 'https://nexcybers.com/en/recursos/directive-nis2-on-the-security-of-network-and-information-systems/',
      en: { t: "Directive NIS2 on the Security of Network and Information Systems", d: "The NIS2 Directive (Directive on Security of Network and Information Systems 2) is the legislative framework of the European Union designed to achieve a high common level of cybersecurity across the Union, addressing the limitations of the previous 2016 regulation." },
      es: { t: "Directiva NIS2 sobre la seguridad de las redes y sistemas de información", d: "La Directiva NIS2 (Directiva sobre la Seguridad de las Redes y Sistemas de Información 2) es el marco legislativo de la Unión Europea diseñado para alcanzar un alto nivel común de ciberseguridad en toda la Unión, resolviendo las limitaciones de la regulación de 2016." } },
    { cat: 'guide', url: 'https://nexcybers.com/en/recursos/implementation-plan-incident-management/',
      dl: { en: "Download our free Incident Management guide:", es: "Descargá nuestra guía gratuita de Gestión de Incidentes:" },
      en: { t: "Implementation Plan: Incident Management", d: "A roadmap for building a robust incident response program: from preparation and continuous detection through recovery and post-incident improvement. Ten concrete actions, aligned with the NIST framework." },
      es: { t: "Plan de implementación: Gestión de incidentes", d: "Una hoja de ruta para construir un programa sólido de respuesta a incidentes: desde la preparación y la detección continua hasta la recuperación y la mejora posterior al incidente. Diez acciones concretas, alineadas con el marco NIST." } },
    { cat: 'guide', url: 'https://nexcybers.com/en/recursos/checklist-for-creating-and-managing-a-security-baseline/',
      dl: { en: "Download our free checklist:", es: "Descargá nuestro checklist gratuito:" },
      en: { t: "Checklist for creating and managing a security baseline", d: "Optimize your infrastructure with this technical baseline checklist. It covers risk assessment, system hardening, ISO/NIST compliance, and deployment automation to maintain a minimal attack surface." },
      es: { t: "Checklist para crear y gestionar una línea base de seguridad", d: "Optimizá tu infraestructura con este checklist técnico de línea base. Cubre evaluación de riesgos, endurecimiento de sistemas, cumplimiento ISO/NIST y automatización del despliegue para mantener una superficie de ataque mínima." } },
    { cat: 'reg', url: 'https://nexcybers.com/en/recursos/nist-cybersecurity-framework-csf-2-0-2/',
      en: { t: "NIST Cybersecurity Framework (CSF) 2.0", d: "The NIST Cybersecurity Framework (CSF 2.0) helps organizations manage and reduce cybersecurity risks through a flexible, structured approach applicable to any industry, enabling maturity assessments, prioritization of investments, and strengthened digital resilience." },
      es: { t: "NIST Cybersecurity Framework (CSF) 2.0", d: "El NIST Cybersecurity Framework (CSF 2.0) ayuda a las organizaciones a gestionar y reducir riesgos de ciberseguridad con un enfoque flexible y estructurado aplicable a cualquier industria, que permite evaluar madurez, priorizar inversiones y fortalecer la resiliencia digital." } },
    { cat: 'reg', url: 'https://nexcybers.com/en/recursos/risk-management-framework-rmf/',
      en: { t: "NIST Risk Management Framework (RMF)", d: "The Risk Management Framework (RMF) from NIST provides a structured, flexible, and measurable methodology to identify, assess, and manage information security and privacy risks across organizations of any size or industry, strengthening protection and decision-making capabilities." },
      es: { t: "NIST Risk Management Framework (RMF)", d: "El Risk Management Framework (RMF) de NIST ofrece una metodología estructurada, flexible y medible para identificar, evaluar y gestionar riesgos de seguridad de la información y privacidad en organizaciones de cualquier tamaño o industria, fortaleciendo la protección y la toma de decisiones." } },
    { cat: 'reg', url: 'https://nexcybers.com/en/recursos/iso-iec-270022022-information-security-controls/',
      en: { t: "ISO/IEC 27002:2022 — Information Security Controls", d: "ISO/IEC 27002:2022 is an international standard offering comprehensive, practical guidance to help organizations implement, maintain, and strengthen information security within an Information Security Management System, supporting effective controls and continuous improvement." },
      es: { t: "ISO/IEC 27002:2022 — Controles de seguridad de la información", d: "ISO/IEC 27002:2022 es una norma internacional que ofrece una guía práctica e integral para implementar, mantener y fortalecer la seguridad de la información dentro de un Sistema de Gestión de Seguridad de la Información, con controles efectivos y mejora continua." } },
    { cat: 'reg', url: 'https://nexcybers.com/en/recursos/iso-iec-270012022-information-security-management/',
      en: { t: "ISO/IEC 27001:2022 – Information Security Management", d: "ISO/IEC 27001:2022 is the leading international standard for implementing and improving an ISMS, providing a structured, adaptable framework to protect sensitive information, reduce cybersecurity risks, ensure operational continuity, and strengthen stakeholder trust." },
      es: { t: "ISO/IEC 27001:2022 – Gestión de la seguridad de la información", d: "ISO/IEC 27001:2022 es la norma internacional de referencia para implementar y mejorar un SGSI, con un marco estructurado y adaptable para proteger información sensible, reducir riesgos de ciberseguridad, asegurar la continuidad operativa y fortalecer la confianza." } },
    { cat: 'reg', url: 'https://nexcybers.com/en/recursos/cis-controls-cis-controls-v8/',
      en: { t: "CIS Controls (CIS Controls v8)", d: "The CIS Controls are a set of 18 prioritized cybersecurity best practices that help organizations protect themselves against common and dangerous cyberattacks, strengthening security posture and improving risk management across diverse environments." },
      es: { t: "CIS Controls (CIS Controls v8)", d: "Los CIS Controls son un conjunto de 18 buenas prácticas priorizadas de ciberseguridad que ayudan a las organizaciones a protegerse frente a los ciberataques más comunes y peligrosos, fortaleciendo la postura de seguridad y la gestión de riesgos." } },
    { cat: 'reg', url: 'https://nexcybers.com/en/recursos/gdpr-general-data-protection-regulation/',
      en: { t: "GDPR (General Data Protection Regulation)", d: "The General Data Protection Regulation (GDPR) is the European Union law designed to protect individuals’ personal data and give them greater control over how their information is collected, used, and stored." },
      es: { t: "GDPR (Reglamento General de Protección de Datos)", d: "El Reglamento General de Protección de Datos (GDPR) es la ley de la Unión Europea diseñada para proteger los datos personales de las personas y darles mayor control sobre cómo se recopila, se usa y se almacena su información." } },
    { cat: 'guide', url: 'https://nexcybers.com/en/recursos/cybersecurity-key-aspects-to-get-started/',
      en: { t: "Cybersecurity: Key aspects to get started", d: "Today even small businesses rely on technology and face risks like phishing, ransomware, data theft, identity fraud, and service disruptions. Although attacks seem aimed at large corporations, small businesses remain highly attractive due to perceived vulnerability." },
      es: { t: "Ciberseguridad: aspectos clave para empezar", d: "Hoy incluso las pequeñas empresas dependen de la tecnología y enfrentan riesgos como phishing, ransomware, robo de datos, fraude de identidad e interrupciones del servicio. Aunque los ataques parecen dirigidos a grandes corporaciones, las pymes siguen siendo muy atractivas por su vulnerabilidad percibida." } },
    { cat: 'guide', url: 'https://nexcybers.com/en/recursos/key-criteria-for-a-successful-governance-risk-and-compliance-grc-program/',
      en: { t: "Key criteria for a successful Governance, Risk, and Compliance (GRC) program", d: "Effective GRC program management is essential for ethical, efficient, and compliant operations. Organizations should apply five key criteria to build a solid, sustainable, and continuously improving governance, risk, and compliance system." },
      es: { t: "Criterios clave para un programa exitoso de Gobierno, Riesgo y Cumplimiento (GRC)", d: "Una gestión eficaz del programa de GRC es esencial para operar de forma ética, eficiente y conforme. Las organizaciones deberían aplicar cinco criterios clave para construir un sistema de gobierno, riesgo y cumplimiento sólido, sostenible y en mejora continua." } },
    { cat: 'reg', url: 'https://nexcybers.com/en/recursos/california-consumer-privacy-act-ccpa-2/',
      en: { t: "California Consumer Privacy Act (CCPA)", d: "The CCPA, strengthened by the CPRA, is a leading U.S. privacy law granting California consumers greater control over personal data and requiring businesses to ensure transparency, accountability, and responsible collection, use, sharing, and sale practices." },
      es: { t: "California Consumer Privacy Act (CCPA)", d: "La CCPA, reforzada por la CPRA, es una de las principales leyes de privacidad de EE. UU. Otorga a los consumidores de California mayor control sobre sus datos personales y exige a las empresas transparencia, responsabilidad y prácticas responsables de recolección, uso, cesión y venta." } }
  ];

  const LABELS = {
    en: { all: "All Resources", guide: "Guides & Tools", reg: "Regulatory Frameworks", more: "Learn more",
          back: "Back to resources", crumb: "Resources", top: "Back to top",
          pending: "The full text of this resource is not loaded here yet. You can read it on the site in the meantime.",
          dl_name: "Name", dl_email: "Email", dl_go: "Download this resource",
          dl_ok: "Thanks. We’ll send the guide to your inbox shortly." },
    es: { all: "Todos los recursos", guide: "Guías y herramientas", reg: "Marcos regulatorios", more: "Ver más",
          back: "Volver a recursos", crumb: "Recursos", top: "Volver arriba",
          pending: "El texto completo de este recurso todavía no está cargado acá. Mientras tanto podés leerlo en el sitio.",
          dl_name: "Nombre", dl_email: "Email", dl_go: "Descargar este recurso",
          dl_ok: "Gracias. Te enviamos la guía a tu correo en breve." }
  };

  const TAGS = {
    en: { guide: "Guide", reg: "Framework" },
    es: { guide: "Guía", reg: "Marco" }
  };

  let filter = 'all';
  let openSlug = null;

  function lang() { return window.NX_currentLang || localStorage.getItem('nx_lang') || 'en'; }
  function slugOf(r) { return r.url.split('/').filter(Boolean).pop(); }
  function bySlug(s) { return RES.find(r => slugOf(r) === s); }

  /* Material Symbols per category, pasted as <svg viewBox="0 -960 960 960">…</svg>. Empty = keep the hero animation. */
  const CAT_ICONS = {
    reg: '<svg viewBox="0 -960 960 960" aria-hidden="true"><path d="M160-120v-80h480v80H160Zm226-194L160-540l84-86 228 226-86 86Zm254-254L414-796l86-84 226 226-86 86Zm184 408L302-682l56-56 522 522-56 56Z"/></svg>',
    guide: '<svg viewBox="0 -960 960 960" aria-hidden="true"><path d="M739-83.5q-7-2.5-13-8.5L522-296q-6-6-8.5-13t-2.5-15q0-8 2.5-15t8.5-13l85-85q6-6 13-8.5t15-2.5q8 0 15 2.5t13 8.5l204 204q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13l-85 85q-6 6-13 8.5T754-81q-8 0-15-2.5Zm15-92.5 29-29-147-147-29 29 147 147ZM189.5-83q-7.5-3-13.5-9l-84-84q-6-6-9-13.5T80-205q0-8 3-15t9-13l212-212h85l34-34-165-165h-57L80-765l113-113 121 121v57l165 165 116-116-43-43 56-56H495l-28-28 142-142 28 28v113l56-56 142 142q17 17 26 38.5t9 45.5q0 24-9 46t-26 39l-85-85-56 56-42-42-207 207v84L233-92q-6 6-13 9t-15 3q-8 0-15.5-3Zm15.5-93 170-170v-29h-29L176-205l29 29Zm0 0-29-29 15 14 14 15Zm549 0 29-29-29 29Z"/></svg>'
  };

  function setHeroIcon(cat) {
    const ico = document.getElementById('res-hero-ico');
    const anim = document.getElementById('atom');
    if (!ico) return;
    const svg = cat && CAT_ICONS[cat];
    if (svg) { ico.innerHTML = svg; ico.dataset.cat = cat; }
    ico.hidden = !svg;
    if (anim) anim.hidden = !!svg;
  }

  function renderGrid() {
    setHeroIcon(null);
    const grid = document.getElementById('res-grid');
    if (!grid) return;
    const L = LABELS[lang()] || LABELS.en;
    const items = RES.filter(r => filter === 'all' || r.cat === filter);
    grid.innerHTML = items.map((r, i) => {
      const c = r[lang()] || r.en;
      return `<a class="rcard" data-cat="${r.cat}" href="#r=${slugOf(r)}" style="--d:${i * 55}ms">
        <div class="rc-img rc-cat"><img src="assets/cat/${r.cat}.png" alt="" loading="lazy"></div>
        <span class="rc-tag">${(TAGS[lang()]||TAGS.en)[r.cat]}</span>
        <h3 class="rc-t">${c.t}</h3>
        <p class="rc-d">${c.d}</p>
        <span class="rc-more">${L.more} <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span>
      </a>`;
    }).join('');
    requestAnimationFrame(() => grid.querySelectorAll('.rcard').forEach(el => el.classList.add('in')));
  }

  function renderTabs() {
    const bar = document.getElementById('res-tabs');
    if (!bar) return;
    const L = LABELS[lang()] || LABELS.en;
    bar.querySelectorAll('button').forEach(b => {
      b.querySelector('span').textContent = L[b.dataset.cat];
      b.classList.toggle('active', b.dataset.cat === filter);
    });
  }

  function bind() {
    const bar = document.getElementById('res-tabs');
    if (!bar || bar.dataset.bound) return;
    bar.dataset.bound = '1';
    bar.addEventListener('click', e => {
      const b = e.target.closest('button[data-cat]');
      if (!b || b.dataset.cat === filter) return;
      filter = b.dataset.cat;
      renderTabs();
      renderGrid();
    });
  }

  function renderDetail() {
    const box = document.getElementById('res-detail');
    const grid = document.getElementById('res-grid');
    const tabs = document.getElementById('res-tabs');
    const kicker = document.getElementById('res-kicker');
    const title = document.getElementById('res-title');
    const lead = document.getElementById('res-lead');
    if (!box || !grid) return;
    const L = LABELS[lang()] || LABELS.en;
    const r = openSlug ? bySlug(openSlug) : null;

    if (!r) {
      box.hidden = true;
      box.innerHTML = '';
      grid.hidden = false;
      if (tabs) tabs.hidden = false;
      document.body.classList.remove('res-reading');
      return;
    }

    const c = r[lang()] || r.en;
    const art = (window.NX_ARTICLES || {})[openSlug];
    const body = art ? (art[lang()] || art.en)
      : '<p class="ra-lead">' + c.d + '</p><p class="ra-note">' + L.pending + '</p>';

    grid.hidden = true;
    if (tabs) tabs.hidden = true;
    box.hidden = false;
    setHeroIcon(r.cat);
    document.body.classList.add('res-reading');
    box.innerHTML = `<nav class="res-crumb" aria-label="Breadcrumb">
        <a href="#" class="res-back" data-back><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5M11 18l-6-6 6-6"/></svg>${L.back}</a>
        <span class="res-crumb-trail"><a href="#" data-back>${L.crumb}</a><i>/</i><a href="#" data-back data-cat="${r.cat}">${L[r.cat]}</a></span>
      </nav>
      <article class="res-article" data-cat="${r.cat}">${body}</article>
      ${r.dl ? `<aside class="resd-dl">
        <h2 class="resd-dl-h">${r.dl[lang()] || r.dl.en}</h2>
        <form class="resd-dl-form" novalidate>
          <label class="resd-dl-f"><span>${L.dl_name} *</span><input type="text" required autocomplete="name"></label>
          <label class="resd-dl-f"><span>${L.dl_email} *</span><input type="email" required autocomplete="email"></label>
          <button class="btn btn-primary resd-dl-go" type="submit">${L.dl_go} <span class="arw">→</span></button>
        </form>
        <p class="resd-dl-ok" hidden>${L.dl_ok}</p>
      </aside>` : ''}`;

    const topBtn = document.getElementById('res-top');
    if (topBtn) topBtn.setAttribute('aria-label', L.top);
    if (kicker) kicker.textContent = L[r.cat];
    if (title) title.textContent = c.t;
    if (lead) lead.textContent = '';

    const dlForm = box.querySelector('.resd-dl-form');
    if (dlForm) dlForm.addEventListener('submit', e => {
      e.preventDefault();
      const [nm, em] = dlForm.querySelectorAll('input');
      if (!nm.value.trim()) { nm.focus(); return; }
      if (!em.value.includes('@')) { em.focus(); return; }
      dlForm.hidden = true;
      const ok = box.querySelector('.resd-dl-ok');
      if (ok) ok.hidden = false;
    });

    box.querySelectorAll('[data-back]').forEach(a => a.addEventListener('click', e => {
      e.preventDefault();
      if (a.dataset.cat) filter = a.dataset.cat;
      history.pushState(null, '', location.pathname);
      route();
    }));
  }

  function bindTopButton() {
    const btn = document.getElementById('res-top');
    if (!btn || btn.dataset.bound) return;
    btn.dataset.bound = '1';
    btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    const sync = () => {
      const on = document.body.classList.contains('res-reading') && window.scrollY > 420;
      btn.hidden = !on;
      btn.classList.toggle('is-in', on);
    };
    window.addEventListener('scroll', sync, { passive: true });
    window.__nxSyncTop = sync;
    sync();
  }

  function route() {
    const m = /^#r=(.+)$/.exec(location.hash);
    const next = m && bySlug(m[1]) ? m[1] : null;
    openSlug = next;
    if (!next) {
      const d = window.NX_CONTENT[lang()];
      const kicker = document.getElementById('res-kicker');
      const title = document.getElementById('res-title');
      const lead = document.getElementById('res-lead');
      if (kicker) kicker.textContent = d.res_eyebrow;
      if (title) title.innerHTML = d.res_h2;
      if (lead) lead.textContent = d.res_lead;
      renderTabs();
      renderGrid();
    }
    renderDetail();
    window.scrollTo({ top: 0, behavior: 'auto' });
    if (window.__nxSyncTop) window.__nxSyncTop();
  }

  window.addEventListener('hashchange', route);
  window.addEventListener('popstate', route);

  function fill(key, val) { document.querySelectorAll(`[data-i="${key}"]`).forEach(el => { el.textContent = val; }); }

  (function atomHold() {
    const atom = document.getElementById('atom');
    if (!atom) return;
    const on = e => { if (e.button === undefined || e.button === 0) atom.classList.add('is-held'); };
    const off = () => atom.classList.remove('is-held');
    atom.addEventListener('pointerdown', on);
    window.addEventListener('pointerup', off);
    window.addEventListener('pointercancel', off);
    atom.addEventListener('keydown', e => { if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); on(e); } });
    atom.addEventListener('keyup', off);
    atom.addEventListener('blur', off);

    // The SVG/CSS clocks start at parse time, so on a slow load the atom paints
    // mid-animation and ahead of the hero copy. Freeze it, then start from zero
    // once the page is loaded and fade it in with the rest of the hero.
    const svg = atom.querySelector('svg');
    atom.classList.add('is-gated');
    svg?.pauseAnimations();
    const start = () => {
      svg?.setCurrentTime(0);
      svg?.unpauseAnimations();
      atom.classList.add('is-ready');
    };
    if (document.readyState === 'complete') requestAnimationFrame(start);
    else window.addEventListener('load', () => requestAnimationFrame(start), { once: true });
  })();

  const prevRender = window.NX_pageRender;
  window.NX_pageRender = function () {
    if (prevRender) prevRender();
    const d = window.NX_CONTENT[lang()];
    fill('res_eyebrow', d.res_eyebrow);
    document.querySelectorAll('[data-i="res_h2"]').forEach(el => { el.innerHTML = d.res_h2; });
    fill('res_lead', d.res_lead);
    bind();
    bindTopButton();
    route();
  };
})();
