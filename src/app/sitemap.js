// This forces Next.js to compile this route into a static file during build!
export const dynamic = 'force-static';

// In `output: 'export'` mode, the sitemap must be 100% static.
// Returning a deterministic URL list (no DB/service calls) keeps it build-time safe.
export default function sitemap() {
  const baseUrl = 'https://ownadz.com';

  const urls = [
    '',
    'about/',
    'contact/',
    'blog/',
    'services/affiliate-marketing/',
    'services/performance-marketing/',
    'services/seo-service/',
    'services/social-media-marketing/',
    'services/web-development/',
    'services/app-development/',
  ].map((path) => `${baseUrl}/${path}`.replace(`${baseUrl}//`, `${baseUrl}/`).replace(`${baseUrl}/`, `${baseUrl}/`));

  // Next.js sitemap export format
  return urls.map((url) => ({
    url,
    lastModified: new Date(),
  }));
}

