# Trade SEO Pages — Implemented

This project contains **153 real HTML page files** in:

`views/trade-seo-pages/<trade>/`

For each trade, the generated files include:

- `mock-test.html`
- `study-guide.html`
- `exam-preparation.html`
- `red-seal-certification.html`
- `passing-score.html`
- `level-1-exam-questions.html` through the levels that actually exist for that trade

Clean public URLs are handled in `server/server.js`, for example:

- `/trades/carpentry/mock-test`
- `/trades/carpentry/study-guide`
- `/trades/carpentry/level-1-exam-questions`

The main trade hub renderer (`server/utils/renderTradePage.js`) now displays links to these pages on every `/trades/<trade>` page.

The design is in:

`public/css/trade-seo-pages.css`

To regenerate all pages after adding or editing a trade:

```bash
npm run generate:trade-seo
```

Backend payment, database, account, authentication and access-control functions were not changed.
