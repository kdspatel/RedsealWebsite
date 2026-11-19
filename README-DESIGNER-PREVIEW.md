# Three-trade freelancer preview — original uploaded source

This is the actual uploaded Node/Express project, with original HTML, CSS, JS and images retained. A **separate** local designer-preview-server.js serves these files without login or database. The production server/server.js is not modified.

## Run

Install Node.js 18+ and run `node designer-preview-server.js` from this folder. Open http://localhost:4173/designer. No npm install is required for the preview.

## Scope

Carpenter (carpentry), Plumber (plumber), Baker (baker). Unrelated trade HTML and generated SEO pages are removed. The original shared pages and assets are kept, so some shared UI content may still mention other trades; navigation links to those are hidden by a small preview-only script. The source for the existing quiz pages and their quiz JS is retained; the premium quiz runtime is capped to ten questions when it uses createPremiumQuizApp. Other custom quiz scripts may not follow that cap. This preview does NOT provide real payment, account, progress or database services, and some server-dependent actions may not work. Do not publish it as a production site.

The original site files have not been visually redesigned or replaced with new templates.
