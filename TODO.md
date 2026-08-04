# TODO — Fix React Hydration Mismatch Warning

## Root Cause
The `formatDate` helper uses `toLocaleDateString("en-US", ...)` without a fixed
timezone. Date-only strings (e.g. `"2025-01-01"`) are parsed as UTC midnight,
so the server (UTC) renders one day and a browser in a timezone behind UTC
renders the previous day → hydration mismatch → `emitPendingHydrationWarnings`.

## Steps

- [x] 1. Add a timezone-stable `formatDate` helper to `src/utils/blog.js`
      (uses `timeZone: "UTC"`, supports `short` month option).
- [x] 2. `src/components/blog/RelatedPostsCarousel.js` — use shared `formatDate`.
- [x] 3. `src/components/blog/BlogSidebar.js` — use shared `formatDate`.
- [x] 4. `src/app/blog/[category]/[slug]/page.js` — use shared `formatDate`.
- [x] 5. `src/app/blog/[slug]/page.js` — use shared `formatDate`.
- [x] 6. `src/components/blog/BlogCard.js` — use shared `formatDate` (`short`).
- [x] 7. `src/app/categories/[slug]/page.js` — use shared `formatDate`.

## Followup
- Run `npm run dev` and verify no hydration warning in the browser console.

