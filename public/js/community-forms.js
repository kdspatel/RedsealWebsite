document.querySelectorAll('.phase-form[data-endpoint]').forEach(form => {
  form.addEventListener('submit', async event => {
    event.preventDefault();

    const status = form.querySelector('.phase-status');
    const button = form.querySelector('button[type="submit"]');
    const captchaField = form.querySelector('[name="g-recaptcha-response"]');
    const captchaToken = String(captchaField?.value || '').trim();

    if (!captchaToken) {
      status.textContent = 'Please complete the reCAPTCHA check.';
      return;
    }

    status.textContent = 'Sending...';
    button.disabled = true;

    try {
      const body = Object.fromEntries(new FormData(form).entries());
      body['g-recaptcha-response'] = captchaToken;

      const response = await fetch(form.dataset.endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Could not send.');

      status.textContent = data.message || 'Sent successfully.';
      form.reset();

      if (window.grecaptcha) {
        window.grecaptcha.reset();
      }
    } catch (err) {
      status.textContent = err.message;
      if (window.grecaptcha) {
        window.grecaptcha.reset();
      }
    } finally {
      button.disabled = false;
    }
  });
});
