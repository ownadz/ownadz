## TODO

- [ ] Fix Next.js build error for `output: 'export'` by adding `generateStaticParams()` to dynamic route pages that currently miss it.
- [ ] Update `src/app/[slug]/page.js` (the error points here) to include `export async function generateStaticParams()`.
- [ ] Re-run `npm run build` to confirm the build passes.
- [ ] Fix next export error by adding `generateStaticParams()` to the dynamic admin edit route pages (currently failing: `src/app/admin/pages/edit/[id]/page.js`).


