(function () {
  var form = document.getElementById('contact-form');
  var status = document.getElementById('contact-status');
  if (!form || !status) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    // Honeypot: bots tend to fill every field, humans never see this one.
    if (form.botcheck.checked) return;

    var submitBtn = form.querySelector('.contact-submit');
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';
    status.textContent = '';
    status.className = 'contact-status';

    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(Object.fromEntries(new FormData(form)))
    })
      .then(function (res) { return res.json(); })
      .then(function (data) {
        if (data.success) {
          form.reset();
          submitBtn.textContent = 'Send Message';
          status.textContent = 'Message sent — thanks, I’ll get back to you soon.';
          status.className = 'contact-status contact-status--ok';
        } else {
          throw new Error(data.message || 'Submission failed');
        }
      })
      .catch(function () {
        submitBtn.textContent = 'Send Message';
        status.textContent = 'Something went wrong — try again in a moment.';
        status.className = 'contact-status contact-status--error';
      })
      .finally(function () {
        submitBtn.disabled = false;
      });
  });
})();
