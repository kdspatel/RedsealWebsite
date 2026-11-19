document.getElementById('contactForm').addEventListener('submit', async function (e) {
      e.preventDefault();

      const formStatus = document.getElementById('formStatus');
      const submitBtn = document.getElementById('sendMessageBtn');

      formStatus.className = 'form-status';
      formStatus.textContent = '';

      const payload = {
        name: document.getElementById('name').value.trim(),
        email: document.getElementById('email').value.trim(),
        topic: document.getElementById('topic').value.trim(),
        trade: document.getElementById('trade').value.trim(),
        message: document.getElementById('message').value.trim()
      };

      if (!payload.name || !payload.email || !payload.topic || !payload.message) {
        formStatus.className = 'form-status error';
        formStatus.textContent = 'Please fill all required fields.';
        return;
      }

      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending...';

      try {
        const res = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(payload)
        });

        const data = await res.json();

        if (!res.ok) {
          formStatus.className = 'form-status error';
          formStatus.textContent = data.error || 'Message could not be sent. Please try again.';
          return;
        }

        formStatus.className = 'form-status success';
        formStatus.textContent = 'Message sent successfully. We will contact you soon.';
        document.getElementById('contactForm').reset();

      } catch (err) {
        console.error(err);
        formStatus.className = 'form-status error';
        formStatus.textContent = 'Message could not be sent. Please try again.';
      } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Send Message';
      }
    });
