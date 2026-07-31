// Keeps the address out of the page source; assembled only on click,
// and never shown or copied as plain text — just handed straight to
// the browser's mail handler via a real (throwaway) mailto link.
(function () {
  var btn = document.getElementById('contact-btn');
  if (!btn) return;
  var encoded = 'amFzb253YWRlc25vd0BnbWFpbC5jb20=';

  btn.addEventListener('click', function () {
    var a = document.createElement('a');
    a.href = 'mailto:' + atob(encoded);
    a.rel = 'noopener';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  });
})();
