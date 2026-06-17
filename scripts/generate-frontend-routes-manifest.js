const fs = require('fs');
const path = require('path');

// Usage: node scripts/generate-frontend-routes-manifest.js
// Output: src/lib/routes.frontend.generated.json

const projectRoot = path.resolve(__dirname, '..');
const appDir = path.join(projectRoot, 'src', 'app');
const outPath = path.join(projectRoot, 'src', 'lib', 'routes.frontend.generated.json');

function isSkippableSegment(seg) {
  // Next.js route groups like (marketing)
  return seg.startsWith('(') && seg.endsWith(')');
}

function toRouteFromSegments(segments) {
  // Root route: [] => "/"
  if (!segments.length) return '/';
  return '/' + segments.join('/');
}

function walk(currentDir, segments, results) {
  const entries = fs.readdirSync(currentDir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(currentDir, entry.name);

    if (entry.isDirectory()) {
      // Exclude admin subtree entirely
      if (entry.name === 'admin') continue;

      if (isSkippableSegment(entry.name)) {
        // Don't add to path segments, but still traverse.
        walk(fullPath, segments, results);
        continue;
      }

      walk(fullPath, [...segments, entry.name], results);
      continue;
    }

    if (!entry.isFile()) continue;

    // We only care about Next route leaf files.
    // Convention: page.(js|jsx|ts|tsx)
    const isPage = /^page\.(js|jsx|ts|tsx)$/.test(entry.name);
    if (!isPage) continue;

    const routeSegments = segments
      .filter((s) => s && !isSkippableSegment(s))
      // Convert dynamic folder [id] => :id (for href we can't know real value)
      .map((s) => {
        const dynMatch = s.match(/^\[(.+)\]$/);
        if (dynMatch) return dynMatch[1];
        return s;
      })
      .map((s) => (s.startsWith(':') ? s : s));

    // Build an href that remains linkable by keeping dynamic params as bracket tokens.
    // e.g. services/[slug]/page.js => /services/[slug]
    const href = toRouteFromSegments(
      segments
        .filter((s) => s && !isSkippableSegment(s))
        .map((s) => s)
    );

    // For display, use a colon version.
    const displayRoute = toRouteFromSegments(
      segments
        .filter((s) => s && !isSkippableSegment(s))
        .map((s) => {
          const dynMatch = s.match(/^\[(.+)\]$/);
          return dynMatch ? `:${dynMatch[1]}` : s;
        })
    );

    results.push({
      href,
      displayRoute,
    });
  }
}

function uniqByHref(items) {
  const seen = new Set();
  const out = [];
  for (const it of items) {
    if (seen.has(it.href)) continue;
    seen.add(it.href);
    out.push(it);
  }
  return out;
}

function main() {
  const results = [];
  walk(appDir, [], results);

  const uniq = uniqByHref(results);

  // Basic sorting: root first, then alpha by displayRoute
  uniq.sort((a, b) => {
    if (a.href === '/' && b.href !== '/') return -1;
    if (b.href === '/' && a.href !== '/') return 1;
    return a.displayRoute.localeCompare(b.displayRoute);
  });

  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, JSON.stringify(uniq, null, 2), 'utf-8');
  console.log(`Generated frontend routes manifest: ${outPath} (${uniq.length} routes)`);
}

main();

