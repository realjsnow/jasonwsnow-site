// Keeps the address out of the page source; assembled only on click.
(function () {
  var btn = document.getElementById('contact-btn');
  if (!btn) return;
  var encoded = 'amFzb253YWRlc25vd0BnbWFpbC5jb20=';

  btn.addEventListener('click', function () {
    window.location.href = 'mailto:' + atob(encoded);
  });
})();
