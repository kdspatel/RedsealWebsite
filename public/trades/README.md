Trade landing pages are now rendered dynamically from:

- views/trade-detail.html
- server/data/trades.js
- server/utils/renderTradePage.js

The public URLs are unchanged, for example:

- /trades/plumber
- /trades/welder
- /trades/construction-electrician

Old /trades/<slug>.html URLs redirect to the clean URLs.
