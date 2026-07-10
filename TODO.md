# TODO

## Plan for adding fav icon on every page

- [x] Verify current metadata/head handling (root layout uses `<head>` in `src/app/layout.js`; favicons added there).
- [x] Add favicon links in `src/app/layout.js` `<head>` pointing to `/favicon.png`.
- [x] Ensure runtime asset exists: `public/favicon.png`.
- [x] Build/test: `npm run build` succeeds.

## Note
- Request “remove only services page” clarified: favicon should stay on **all pages** (including `/services/*`).

