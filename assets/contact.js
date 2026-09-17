/* ============================================================
   NEXCYBERS — contact.html page-specific render
   ============================================================ */
(function () {
  function fill(key, val) {
    document.querySelectorAll(`[data-i="${key}"]`).forEach(el => { el.textContent = val; });
  }
  const LUCIDE = ' fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"';
  const ICONS = {
    phone: `<svg viewBox="0 0 24 24"${LUCIDE}><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.362 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>`,
    mail: `<svg viewBox="0 0 24 24"${LUCIDE}><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><path d="M22 6l-10 7L2 6"/></svg>`,
    whatsapp: `<svg viewBox="0 0 24 24"${LUCIDE}><path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/></svg>`,
    pin: `<svg viewBox="0 0 24 24"${LUCIDE}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0116 0z"/><circle cx="12" cy="10" r="3"/></svg>`
  };

  const prevRender = window.NX_pageRender;
  window.NX_pageRender = function () {
    if (prevRender) prevRender();
    const lang = window.NX_currentLang || localStorage.getItem('nx_lang') || 'en';
    const d = window.NX_CONTENT[lang];

    fill('contact_eyebrow', d.contact_eyebrow);
    document.querySelectorAll('[data-i="contact_h2"]').forEach(el => { el.innerHTML = d.contact_h2; });
    fill('contact_lead', d.contact_lead);

    const nameL = document.getElementById('label-name'); if (nameL) nameL.textContent = d.contact_form_name;
    const emailL = document.getElementById('label-email'); if (emailL) emailL.textContent = d.book_form_email;
    const phoneL = document.getElementById('label-phone'); if (phoneL) phoneL.textContent = d.book_form_phone;
    const companyL = document.getElementById('label-company'); if (companyL) companyL.textContent = d.book_form_company;
    const subjectL = document.getElementById('label-subject'); if (subjectL) subjectL.textContent = d.book_form_subject;
    const opts = { book: d.book_subject_book, webinar: d.book_subject_webinar, training: d.book_subject_training, inquiry: d.book_subject_inquiry };
    document.querySelectorAll('#c-subject option').forEach(o => { const k = o.dataset.iOpt; if (opts[k]) o.textContent = opts[k]; });
    const msgL = document.getElementById('label-message'); if (msgL) msgL.textContent = d.book_form_message;
    const submitBtn = document.getElementById('form-submit'); if (submitBtn) submitBtn.textContent = d.contact_form_submit;

    fill('contact_info_h', d.contact_info_h);
    const infoRows = document.getElementById('contact-info-rows');
    if (infoRows) infoRows.innerHTML = `
      <div class="contact-info-row"><div class="icon-thumb">${ICONS.phone}</div><div><span>${d.contact_info_phone_l}</span><a href="tel:+17862992594">+1 786 299 2594</a></div></div>
      <div class="contact-info-row"><div class="icon-thumb">${ICONS.mail}</div><div><span>${d.contact_info_email_l}</span><a id="contact-email" data-user="info" data-dom="nexcybers.com">info@nexcybers.com</a></div></div>`;

  };

  document.addEventListener('submit', (e) => {
    if (e.target && e.target.id === 'contact-form') {
      e.preventDefault();
      const btn = document.getElementById('form-submit');
      if (btn) { btn.textContent = '✓'; btn.disabled = true; }
    }
  });
})();
