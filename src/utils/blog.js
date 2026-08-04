// ============================================================
// Shared blog URL helpers
// Used across server components, client components and sitemap.
// ============================================================

export const normalizeSlug = (slug = "") =>
  String(slug)
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-+|-+$/g, "");

// Returns the list of category slugs assigned to a post
export const getPostCategories = (post) =>
  (post?.categories || "")
    .split(",")
    .map((c) => normalizeSlug(c))
    .filter(Boolean);

// Primary = first category assigned to the post
export const getPostPrimaryCategory = (post) => getPostCategories(post)[0] || null;

// WordPress-style permalink: /blog/{category}/{slug}
// Falls back to /blog/{slug} when the post has no category.
export const getPostUrl = (post) => {
  if (!post || !post.slug) return "/blog";
  const category = getPostPrimaryCategory(post);
  return category ? `/blog/${category}/${post.slug}` : `/blog/${post.slug}`;
};

// Absolute canonical URL for a post
export const getPostAbsoluteUrl = (post) => `https://ownadz.com${getPostUrl(post)}`;

// ============================================================
// Timezone-stable date formatter
// Formats dates in UTC so that the server-rendered HTML matches
// the client-rendered HTML exactly (prevents hydration mismatch).
// Date-only strings like "2025-01-01" are parsed as UTC midnight,
// so formatting in UTC avoids "one day off" between server (UTC)
// and browser (local timezone) rendering.
// ============================================================
export const formatDate = (dateStr, { month = "long" } = {}) => {
  if (!dateStr) return "";
  try {
    const d = new Date(dateStr);
    if (isNaN(d.getTime())) return String(dateStr);
    return d.toLocaleDateString("en-US", {
      year: "numeric",
      month,
      day: "numeric",
      timeZone: "UTC",
    });
  } catch {
    return String(dateStr);
  }
};

