# Red Seal Practice

## Run locally

1. Create a `.env` file beside `package.json`.
2. Run `npm install`.
3. Run `npm start`.
4. Open `http://localhost:3000`.

## Owner-managed articles

Visitors cannot submit or publish articles. All article content is managed by the site owner in:

```text
server/data/articles.js
```

To add a new article:

1. Copy one existing article object in `server/data/articles.js`.
2. Give it a unique `slug`.
3. Edit its title, category, description, date, reading time, and HTML content.
4. Put the article image in `public/images/articles/`.
5. Set the article's `image` value, for example:

```js
image: '/images/articles/plumber-study-guide.jpg'
```

Use a 16:9 image, ideally 1600 × 900 pixels. The image appears on the article listing card and as the large headline image when the article is opened.

If an image is missing, the page automatically uses:

```text
public/images/articles/default-article.svg
```

### Article image filenames currently referenced

Add your own JPG images at these exact paths (or edit the `image` values in `server/data/articles.js`):

```text
public/images/articles/canada-needs-200000-skilled-trades-workers-per-year.jpg
public/images/articles/canada-express-entry-crs-points-trade-apprentices.jpg
public/images/articles/canada-skilled-trades-workforce-growth.jpg
public/images/articles/canada-housing-construction-slowdown-unsold-inventory.jpg
public/images/articles/red-seal-exam-preparation-guide.jpg
public/images/articles/why-skilled-trades-are-a-strong-career-choice.jpg
public/images/articles/workplace-safety-skilled-trades.jpg
public/images/articles/essential-skills-successful-tradesperson.jpg
```

The former administrator portal has been removed. Old admin URLs redirect to the homepage.


## One-time $20 mock tests
- Listing: `/mock-tests`
- Purchase: `/mock-test/pricing?trade=plumber`
- Test: `/mock-test/plumber`
- Result: `/mock-test/plumber/result`
- Price: `$20 CAD`
- Default start window: 30 days
- Default timer: 180 minutes

Optional `.env` settings:
```
MOCK_TEST_VALID_DAYS=30
MOCK_TEST_DURATION_MINUTES=180
```
Question banks are in `server/data/mock-tests/`.


## Adding images
See `IMAGE-SETUP-README.md` and `IMAGE-FILE-MANIFEST.json` for every prepared image path and filename.
