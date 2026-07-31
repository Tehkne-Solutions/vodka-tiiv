const whatsappLink = document.querySelector('[data-whatsapp]');

whatsappLink?.addEventListener('click', (event) => {
  const destination = whatsappLink.getAttribute('href');

  if (!destination || destination === '#') {
    event.preventDefault();
  }
});
