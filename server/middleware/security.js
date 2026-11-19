let helmet = null;
let rateLimit = null;
let mongoSanitize = null;

try { helmet = require('helmet'); } catch (err) { console.warn('helmet is not installed yet. Run npm install to enable security headers.'); }
try { rateLimit = require('express-rate-limit'); } catch (err) { console.warn('express-rate-limit is not installed yet. Run npm install to enable rate limiting.'); }
try { mongoSanitize = require('express-mongo-sanitize'); } catch (err) { console.warn('express-mongo-sanitize is not installed yet. Run npm install to enable request sanitization.'); }

function createLimiter(options) {
  if (!rateLimit) {
    return (req, res, next) => next();
  }
  return rateLimit({
    standardHeaders: true,
    legacyHeaders: false,
    message: { error: options.message || 'Too many requests. Please try again later.' },
    ...options
  });
}

function applySecurity(app) {
  if (helmet) {
    app.use(helmet({
      contentSecurityPolicy: false,
      crossOriginEmbedderPolicy: false,
      referrerPolicy: { policy: 'strict-origin-when-cross-origin' },
      hsts: process.env.NODE_ENV === 'production' ? { maxAge: 15552000, includeSubDomains: true } : false
    }));
  }

  app.use((req, res, next) => {
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('X-Frame-Options', 'SAMEORIGIN');
    res.setHeader('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');
    next();
  });

}

function requestSanitizer(req, res, next) {
  if (!mongoSanitize) return next();
  return mongoSanitize({ replaceWith: '_' })(req, res, next);
}

const globalLimiter = createLimiter({
  windowMs: 15 * 60 * 1000,
  max: Number(process.env.RATE_LIMIT_GLOBAL_MAX || 600),
  message: 'Too many requests from this device. Please slow down and try again.'
});

const authLimiter = createLimiter({
  windowMs: 15 * 60 * 1000,
  max: Number(process.env.RATE_LIMIT_AUTH_MAX || 25),
  message: 'Too many login or account requests. Please wait and try again.'
});

const articleLimiter = createLimiter({
  windowMs: 60 * 60 * 1000,
  max: Number(process.env.RATE_LIMIT_ARTICLE_MAX || 20),
  message: 'Too many article actions. Please wait before trying again.'
});

const adminLimiter = createLimiter({
  windowMs: 15 * 60 * 1000,
  max: Number(process.env.RATE_LIMIT_ADMIN_MAX || 180),
  message: 'Too many admin requests. Please wait and try again.'
});

const contactLimiter = createLimiter({
  windowMs: 60 * 60 * 1000,
  max: Number(process.env.RATE_LIMIT_CONTACT_MAX || 5),
  message: 'Too many contact messages. Please try again later.'
});

module.exports = {
  applySecurity,
  globalLimiter,
  authLimiter,
  articleLimiter,
  adminLimiter,
  contactLimiter,
  requestSanitizer
};
