const RECAPTCHA_VERIFY_URL = 'https://www.google.com/recaptcha/api/siteverify';

function captchaFailure(req, res, mode, redirectPath) {
  if (mode === 'json') {
    return res.status(400).json({
      success: false,
      error: 'Please complete the reCAPTCHA check and try again.'
    });
  }

  const joiner = redirectPath.includes('?') ? '&' : '?';
  return res.redirect(`${redirectPath}${joiner}error=captcha`);
}

function getCaptchaToken(req) {
  const value = req.body?.['g-recaptcha-response'];

  if (Array.isArray(value)) {
    return value.map(item => String(item || '').trim()).find(Boolean) || '';
  }

  return String(value || '').trim();
}

function verifyRecaptcha({ mode = 'redirect', redirectPath = '/' } = {}) {
  return async function recaptchaMiddleware(req, res, next) {
    try {
      const secret = String(process.env.RECAPTCHA_SECRET_KEY || '').trim();
      const token = getCaptchaToken(req);

      if (!secret) {
        console.error('RECAPTCHA_SECRET_KEY is not configured.');
        if (mode === 'json') {
          return res.status(503).json({
            success: false,
            error: 'Security verification is temporarily unavailable.'
          });
        }
        return res.status(503).send('Security verification is temporarily unavailable.');
      }

      if (!token) {
        console.warn('reCAPTCHA token missing from form submission.');
        return captchaFailure(req, res, mode, redirectPath);
      }

      const body = new URLSearchParams();
      body.set('secret', secret);
      body.set('response', token);

      const response = await fetch(RECAPTCHA_VERIFY_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        },
        body: body.toString()
      });

      const result = await response.json().catch(() => null);

      if (!response.ok || !result) {
        console.error('reCAPTCHA verification request failed:', response.status);
        return captchaFailure(req, res, mode, redirectPath);
      }

      if (!result.success) {
        console.warn('reCAPTCHA rejected request:', {
          errorCodes: result['error-codes'] || [],
          tokenLength: token.length,
          hostname: result.hostname || null
        });
        return captchaFailure(req, res, mode, redirectPath);
      }

      return next();
    } catch (err) {
      console.error('reCAPTCHA verification error:', err);
      return captchaFailure(req, res, mode, redirectPath);
    }
  };
}

module.exports = { verifyRecaptcha };
