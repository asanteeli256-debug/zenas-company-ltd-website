/* Zenas Group — shared contact & form handling */
const ZENAS_CONTACT = {
  phone: '+256700000000',
  phoneDisplay: '+256 700 000 000',
  travelEmail: 'travel@zenasgroup.com',
  estateEmail: 'estate@zenasgroup.com',
  groupEmail: 'info@zenasgroup.com',
  location: 'Kampala, Uganda',
  whatsapp: '256700000000'
};

function whatsappUrl(message) {
  const text = encodeURIComponent(message);
  return `https://wa.me/${ZENAS_CONTACT.whatsapp}?text=${text}`;
}

function initInquiryForms() {
  document.querySelectorAll('form[data-inquiry]').forEach((form) => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const division = form.dataset.inquiry || 'Zenas Group';
      const name = form.querySelector('[name="name"]')?.value?.trim() || '';
      const contact = form.querySelector('[name="contact"]')?.value?.trim() || '';
      const interest = form.querySelector('[name="interest"]')?.value?.trim() || '';
      const message = form.querySelector('[name="message"]')?.value?.trim() || '';

      const lines = [
        `Hello Zenas ${division},`,
        '',
        name && `Name: ${name}`,
        contact && `Contact: ${contact}`,
        interest && `Interest: ${interest}`,
        message && `Message: ${message}`
      ].filter(Boolean);

      const note = form.querySelector('.form-note');
      if (note) {
        note.textContent = 'Opening WhatsApp… We typically reply within 24 hours.';
        note.style.color = 'rgba(56,189,248,.9)';
      }

      window.open(whatsappUrl(lines.join('\n')), '_blank', 'noopener');
    });
  });
}

document.addEventListener('DOMContentLoaded', initInquiryForms);
