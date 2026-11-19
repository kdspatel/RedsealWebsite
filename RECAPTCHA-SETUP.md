# Google reCAPTCHA v2 setup

The public reCAPTCHA v2 checkbox site key installed in the protected forms is:

`6Ley2GMtAAAAAIfrpV5WtkQpkmCG_ru6LgMFy1F8`

The private secret must not be committed to this project. Set it locally in `.env` and in Railway Variables:

`RECAPTCHA_SECRET_KEY=your-private-secret-from-the-same-reCAPTCHA-key-pair`

Registered domains should include:

- `redsealpractice.ca`
- `localhost`

After changing `.env`, fully stop and restart Node.

Protected endpoints:

- signup
- login
- forgot password
- resend verification
- contact
- private review submission
- community question submission

Stripe payment routes, password-reset links, login logic, and quiz logic were not changed.
