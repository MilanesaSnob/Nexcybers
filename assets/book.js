/* ============================================================
   NEXCYBERS — book.html page-specific render
   ============================================================ */
(function () {
  function fill(key, val) {
    document.querySelectorAll(`[data-i="${key}"]`).forEach(el => { el.textContent = val; });
  }
  window.NX_pageRender = function () {
    const lang = window.NX_currentLang || localStorage.getItem('nx_lang') || 'en';
    const d = window.NX_CONTENT[lang];

    fill('book_eyebrow', d.book_eyebrow);
    document.querySelectorAll('[data-i="book_h2"]').forEach(el => { el.innerHTML = d.book_h2; });
    fill('book_lead', d.book_lead);
    fill('book_intro', d.book_intro);
    fill('book_form_hint', d.book_form_hint);
    fill('book_privacy', d.book_privacy);

    const set = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
    set('label-name', d.book_form_name);
    set('label-email', d.book_form_email);
    set('label-phone', d.book_form_phone);
    set('label-message', d.book_form_message);
    set('form-submit', d.book_form_submit);
  };

  document.addEventListener('submit', (e) => {
    if (e.target && e.target.id === 'book-form') {
      e.preventDefault();
      const btn = document.getElementById('form-submit');
      if (btn) { btn.textContent = '✓'; btn.disabled = true; }
    }
  });
})();
