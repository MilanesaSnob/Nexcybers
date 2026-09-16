(function () {
  const POSTS = [
    { cat: 'identity',
      en: { u: 'https://nexcybers.com/en/blog-en/the-new-era-of-industrialized-cybercrime-identity-ai-and-the-fall-of-tycoon-2fa/', t: "The new era of industrialized cybercrime: identity, AI, and the fall of Tycoon 2FA", d: "In today’s cybersecurity landscape, organizations are no longer facing isolated individuals but rather a highly specialized and scalable fraud economy." },
      es: { u: 'https://nexcybers.com/blog/la-nueva-era-del-cibercrimen-industrializado-identidad-ia-y-la-caida-de-tycoon-2fa/', t: "La nueva era del cibercrimen industrializado: identidad, IA y la caída de Tycoon 2FA", d: "En el panorama actual de la ciberseguridad, no nos enfrentamos simplemente a individuos aislados, sino a una verdadera economía del fraude altamente especializada y escalable." } },
    { cat: 'risks',
      en: { u: 'https://nexcybers.com/en/blog-en/cybersecurity-forecast-2026-what-is-changing-in-cybersecurity/', t: "Cybersecurity Forecast 2026: what is changing in cybersecurity", d: "The Cybersecurity Forecast 2026 report by Google Cloud provides a clear view of the present: cybersecurity is entering a more complex stage, where artificial intelligence, organized cybercrime, and geopolitical factors are increasingly interconnected." },
      es: { u: 'https://nexcybers.com/blog/cybersecurity-forecast-2026-que-esta-cambiando-en-ciberseguridad/', t: "Cybersecurity Forecast 2026: qué está cambiando en ciberseguridad", d: "El informe Cybersecurity Forecast 2026 de Google Cloud ofrece una lectura clara del presente: la ciberseguridad está entrando en una etapa más compleja, donde la inteligencia artificial, el cibercrimen y los factores geopolíticos empiezan a combinarse de forma más evidente." } },
    { cat: 'risks',
      en: { u: 'https://nexcybers.com/en/blog-en/the-current-digital-threat-landscape-in-europe-key-insights-to-understand-the-risks-in-2025/', t: "The current digital threat landscape in Europe: key insights to understand the risks in 2025", d: "Digital transformation has brought enormous opportunities for organizations, but it has also significantly expanded the exposure surface to cyber threats." },
      es: { u: 'https://nexcybers.com/blog/el-panorama-actual-de-las-amenazas-digitales-en-europa-claves-para-entender-los-riesgos-en-2025/', t: "El panorama actual de las amenazas digitales en Europa: claves para entender los riesgos en 2025", d: "La transformación digital ha traído enormes oportunidades para las organizaciones, pero también ha ampliado de forma significativa la superficie de exposición a amenazas cibernéticas." } },
    { cat: 'ai',
      en: { u: 'https://nexcybers.com/en/blog-en/how-to-create-an-effective-prompt-the-key-to-working-better-with-artificial-intelligence/', t: "How to create an effective prompt: the key to working better with artificial intelligence", d: "Artificial intelligence is transforming how we study, work, and solve problems. To achieve good results, we must learn to communicate with it effectively—a skill known as prompting, essential for guiding AI toward useful outcomes." },
      es: { u: 'https://nexcybers.com/blog/como-crear-un-prompt-efectivo-la-clave-para-trabajar-mejor-con-la-inteligencia-artificial-2/', t: "Cómo crear un prompt efectivo: la clave para trabajar mejor con la inteligencia artificial", d: "La inteligencia artificial está transformando cómo estudiamos, trabajamos y resolvemos problemas. Para obtener buenos resultados no basta con usarla: es necesario aprender a comunicarse correctamente con ella mediante una práctica fundamental llamada prompting." } },
    { cat: 'phishing',
      en: { u: 'https://nexcybers.com/en/blog-en/the-art-of-digital-deception-how-social-engineering-works/', t: "The art of digital deception: how social engineering works", d: "We often imagine cyberattacks as advanced malware, but many breaches begin with human error. Social engineering exploits people to obtain access to information, money, or systems without relying on highly sophisticated technical methods." },
      es: { u: 'https://nexcybers.com/blog/el-arte-del-engano-digital-como-funciona-la-ingenieria-social/', t: "El arte del engaño digital: cómo funciona la ingeniería social", d: "Cuando pensamos en ciberataques, imaginamos malware sofisticado, pero muchas filtraciones surgen por errores humanos. La ingeniería social manipula personas para conseguir acceso a información, dinero o sistemas sin técnicas complejas." } },
    { cat: 'privacy',
      en: { u: 'https://nexcybers.com/en/blog-en/privacy-and-data-control-risks-when-using-generative-artificial-intelligence-tools/', t: "Privacy and data control risks when using generative artificial intelligence tools", d: "The rise of generative AI has transformed how we create content, automate processes, and manage information, becoming essential for professionals and organizations when drafting reports, generating code, analyzing documents, and streamlining daily operations." },
      es: { u: 'https://nexcybers.com/blog/como-crear-un-prompt-efectivo-la-clave-para-trabajar-mejor-con-la-inteligencia-artificial/', t: "Riesgos de privacidad y control de datos al utilizar herramientas de inteligencia artificial generativa", d: "El auge de la inteligencia artificial generativa ha transformado cómo creamos contenido, automatizamos procesos y gestionamos información, integrándose en la vida diaria de profesionales y empresas al redactar informes, analizar documentos y generar código." } }
  ];

  const LABELS = {
    en: { all: "All articles", ai: "AI", identity: "Identity", phishing: "Phishing", privacy: "Privacy", risks: "Risks", more: "Read more",
          back: "Back to blog", crumb: "Blog", top: "Back to top",
          pending: "The full text of this article is not loaded here yet. You can read it on the site in the meantime." },
    es: { all: "Todos los artículos", ai: "IA", identity: "Identidad", phishing: "Phishing", privacy: "Privacidad", risks: "Riesgos", more: "Ver más",
          back: "Volver al blog", crumb: "Blog", top: "Volver arriba",
          pending: "El texto completo de este artículo todavía no está cargado acá. Mientras tanto podés leerlo en el sitio." }
  };

  let filter = 'all';
  let openSlug = null;

  function lang() { return window.NX_currentLang || localStorage.getItem('nx_lang') || 'en'; }
  function slugOf(p) { return p.en.u.split('/').filter(Boolean).pop(); }
  function bySlug(s) { return POSTS.find(p => slugOf(p) === s); }

  /* Material Symbols per category, pasted as <svg viewBox="0 -960 960 960">…</svg>. Empty = keep the hero animation. */
  const CAT_ICONS = {
    identity: '<svg viewBox="0 -960 960 960" aria-hidden="true"><path d="M481-781q106 0 200 45.5T838-604q7 9 4.5 16t-8.5 12q-6 5-14 4.5t-14-8.5q-55-78-141.5-119.5T481-741q-97 0-182 41.5T158-580q-6 9-14 10t-14-4q-7-5-8.5-12.5T126-602q62-85 155.5-132T481-781Zm0 94q135 0 232 90t97 223q0 50-35.5 83.5T688-257q-51 0-87.5-33.5T564-374q0-33-24.5-55.5T481-452q-34 0-58.5 22.5T398-374q0 97 57.5 162T604-121q9 3 12 10t1 15q-2 7-8 12t-15 3q-104-26-170-103.5T358-374q0-50 36-84t87-34q51 0 87 34t36 84q0 33 25 55.5t59 22.5q34 0 58-22.5t24-55.5q0-116-85-195t-203-79q-118 0-203 79t-85 194q0 24 4.5 60t21.5 84q3 9-.5 16T208-205q-8 3-15.5-.5T182-217q-15-39-21.5-77.5T154-374q0-133 96.5-223T481-687Zm0-192q64 0 125 15.5T724-819q9 5 10.5 12t-1.5 14q-3 7-10 11t-17-1q-53-27-109.5-41.5T481-839q-58 0-114 13.5T260-783q-8 5-16 2.5T232-791q-4-8-2-14.5t10-11.5q56-30 117-46t124-16Zm0 289q93 0 160 62.5T708-374q0 9-5.5 14.5T688-354q-8 0-14-5.5t-6-14.5q0-75-55.5-125.5T481-550q-76 0-130.5 50.5T296-374q0 81 28 137.5T406-123q6 6 6 14t-6 14q-6 6-14 6t-14-6q-59-62-90.5-126.5T256-374q0-91 66-153.5T481-590Zm-1 196q9 0 14.5 6t5.5 14q0 75 54 123t126 48q6 0 17-1t23-3q9-2 15.5 2.5T744-191q2 8-3 14t-13 8q-18 5-31.5 5.5t-16.5.5q-89 0-154.5-60T460-374q0-8 5.5-14t14.5-6Z"/></svg>',
    phishing: '<svg viewBox="0 -960 960 960" aria-hidden="true"><path d="M270-190q-70-70-70-170v-240l200 200-56 57-64-64v47q0 66 47 113t113 47q66 0 113-47t47-113v-127q-36-14-58-44.5T520-600q0-38 22-68.5t58-44.5v-167h80v167q36 14 58 44.5t22 68.5q0 38-22 69t-58 44v127q0 100-70 170t-170 70q-100 0-170-70Zm398.5-381.5Q680-583 680-600t-11.5-28.5Q657-640 640-640t-28.5 11.5Q600-617 600-600t11.5 28.5Q623-560 640-560t28.5-11.5ZM640-600Z"/></svg>',
    privacy: '<svg viewBox="0 -960 960 960" aria-hidden="true"><path d="M420-360h120l-23-129q20-10 31.5-29t11.5-42q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 23 11.5 42t31.5 29l-23 129Zm60 280q-139-35-229.5-159.5T160-516v-244l320-120 320 120v244q0 152-90.5 276.5T480-80Zm0-84q104-33 172-132t68-220v-189l-240-90-240 90v189q0 121 68 220t172 132Zm0-316Z"/></svg>',
    risks: '<svg viewBox="0 -960 960 960" aria-hidden="true"><path d="M324-111.5Q251-143 197-197t-85.5-127Q80-397 80-480q0-114 59.5-210.5T301-838q1 19 4 38.5t10 45.5q-72 44-113.5 116.5T160-480q0 134 93 227t227 93q134 0 227-93t93-227q0-85-41.5-158T644-755q7-26 10-45.5t5-37.5q102 51 161.5 147T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80q-83 0-156-31.5ZM310-310q-70-70-70-170 0-58 25.5-109t72.5-85q5 15 11 34.5t16 48.5q-22 23-33.5 51T320-480q0 66 47 113t113 47q66 0 113-47t47-113q0-32-11.5-60T595-591q8-24 14.5-44.5T621-674q47 34 73 85t26 109q0 100-70 170t-170 70q-100 0-170-70Zm130-310q-37-112-48.5-157.5T380-860q0-42 29-71t71-29q42 0 71 29t29 71q0 37-11.5 82.5T520-620h-80Zm-16.5 196.5Q400-447 400-480t23.5-56.5Q447-560 480-560t56.5 23.5Q560-513 560-480t-23.5 56.5Q513-400 480-400t-56.5-23.5Z"/></svg>',
    ai: '<svg viewBox="0 -960 960 960" aria-hidden="true"><path d="M323-160q-11 0-20.5-5.5T288-181l-78-139h58l40 80h92v-40h-68l-40-80H188l-57-100q-2-5-3.5-10t-1.5-10q0-4 5-20l57-100h104l40-80h68v-40h-92l-40 80h-58l78-139q5-10 14.5-15.5T323-800h97q17 0 28.5 11.5T460-760v160h-60l-40 40h100v120h-88l-40-80h-92l-40 40h108l40 80h112v200q0 17-11.5 28.5T420-160h-97Zm217 0q-17 0-28.5-11.5T500-200v-200h112l40-80h108l-40-40h-92l-40 80h-88v-120h100l-40-40h-60v-160q0-17 11.5-28.5T540-800h97q11 0 20.5 5.5T672-779l78 139h-58l-40-80h-92v40h68l40 80h104l57 100q2 5 3.5 10t1.5 10q0 4-5 20l-57 100H668l-40 80h-68v40h92l40-80h58l-78 139q-5 10-14.5 15.5T637-160h-97Z"/></svg>'
  };

  function setHeroIcon(cat) {
    const ico = document.getElementById('blog-hero-ico');
    const anim = document.getElementById('blog-hero-anim');
    if (!ico) return;
    const svg = cat && CAT_ICONS[cat];
    if (svg) { ico.innerHTML = svg; ico.dataset.cat = cat; }
    ico.hidden = !svg;
    if (anim) anim.hidden = !!svg;
  }

  function renderGrid() {
    setHeroIcon(null);
    const grid = document.getElementById('blog-grid');
    if (!grid) return;
    const L = LABELS[lang()] || LABELS.en;
    const items = POSTS.filter(p => filter === 'all' || p.cat === filter);
    grid.innerHTML = items.map((p, i) => {
      const c = p[lang()] || p.en;
      return `<a class="rcard" data-cat="${p.cat}" href="#p=${slugOf(p)}" style="--d:${i * 55}ms">
        <div class="rc-img rc-cat"><img src="assets/cat/${p.cat}.png" alt="" loading="lazy"></div>
        <span class="rc-tag">${L[p.cat]}</span>
        <h3 class="rc-t">${c.t}</h3>
        <p class="rc-d">${c.d}</p>
        <span class="rc-more">${L.more} <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span>
      </a>`;
    }).join('');
    requestAnimationFrame(() => grid.querySelectorAll('.rcard').forEach(el => el.classList.add('in')));
  }

  function renderTabs() {
    const bar = document.getElementById('blog-tabs');
    if (!bar) return;
    const L = LABELS[lang()] || LABELS.en;
    bar.querySelectorAll('button').forEach(b => {
      b.querySelector('span').textContent = L[b.dataset.cat];
      b.classList.toggle('active', b.dataset.cat === filter);
    });
  }

  function bind() {
    const bar = document.getElementById('blog-tabs');
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
    const box = document.getElementById('blog-detail');
    const grid = document.getElementById('blog-grid');
    const tabs = document.getElementById('blog-tabs');
    const kicker = document.getElementById('blog-kicker');
    const title = document.getElementById('blog-title');
    const lead = document.getElementById('blog-lead');
    if (!box || !grid) return;
    const L = LABELS[lang()] || LABELS.en;
    const p = openSlug ? bySlug(openSlug) : null;

    if (!p) {
      box.hidden = true;
      box.innerHTML = '';
      grid.hidden = false;
      if (tabs) tabs.hidden = false;
      document.body.classList.remove('res-reading');
      return;
    }

    const c = p[lang()] || p.en;
    const art = (window.NX_POSTS_BODY || {})[openSlug];
    const body = art ? (art[lang()] || art.en)
      : '<p class="ra-lead">' + c.d + '</p><p class="ra-note">' + L.pending + '</p>';

    grid.hidden = true;
    if (tabs) tabs.hidden = true;
    box.hidden = false;
    setHeroIcon(p.cat);
    document.body.classList.add('res-reading');
    box.innerHTML = `<nav class="res-crumb" aria-label="Breadcrumb">
        <a href="#" class="res-back" data-back><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5M11 18l-6-6 6-6"/></svg>${L.back}</a>
        <span class="res-crumb-trail"><a href="#" data-back>${L.crumb}</a><i>/</i><a href="#" data-back data-cat="${p.cat}">${L[p.cat]}</a></span>
      </nav>
      <article class="res-article" data-cat="${p.cat}">${body}</article>`;

    const topBtn = document.getElementById('blog-top');
    if (topBtn) topBtn.setAttribute('aria-label', L.top);
    if (kicker) kicker.textContent = L[p.cat];
    if (title) title.textContent = c.t;
    if (lead) lead.textContent = '';

    box.querySelectorAll('[data-back]').forEach(a => a.addEventListener('click', e => {
      e.preventDefault();
      if (a.dataset.cat) filter = a.dataset.cat;
      history.pushState(null, '', location.pathname);
      route();
    }));
  }

  function bindTopButton() {
    const btn = document.getElementById('blog-top');
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
    const m = /^#p=(.+)$/.exec(location.hash);
    const next = m && bySlug(m[1]) ? m[1] : null;
    openSlug = next;
    if (!next) {
      const d = window.NX_CONTENT[lang()];
      const kicker = document.getElementById('blog-kicker');
      const title = document.getElementById('blog-title');
      const lead = document.getElementById('blog-lead');
      if (kicker) kicker.textContent = d.blog_eyebrow;
      if (title) title.innerHTML = d.blog_h2;
      if (lead) lead.textContent = d.blog_lead;
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

  const prevRender = window.NX_pageRender;
  window.NX_pageRender = function () {
    if (prevRender) prevRender();
    const d = window.NX_CONTENT[lang()];
    fill('blog_eyebrow', d.blog_eyebrow);
    document.querySelectorAll('[data-i="blog_h2"]').forEach(el => { el.innerHTML = d.blog_h2; });
    fill('blog_lead', d.blog_lead);
    bind();
    bindTopButton();
    route();
  };
})();
