Mobile cache delivery fix
Release: 20260724-mobile-fix

Changes made:
- Disabled caching for HTML, CSS and JavaScript.
- Kept image caching at one day.
- Added a release query parameter to local CSS and JS links.
- Did not intentionally change design, authentication, login/signup, Stripe, payment, quiz or progress logic.

Files changed: 738
Asset references versioned: 10760
