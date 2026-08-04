import Link from "next/link";
import { getPublishedPosts } from "@/services/postService";
import { getCategories } from "@/services/categoryService";
import BlogCard from "@/components/blog/BlogCard";
import BlogSidebar from "@/components/blog/BlogSidebar";
import { FaArrowRight, FaSearch, FaChevronRight } from "react-icons/fa";

export const dynamic = "force-dynamic";

export async function generateMetadata() {
  return {
    title: "Blog | Ownadz Digital Marketing Insights",
    description:
      "Read expert articles on SEO, performance marketing, social media strategy, content marketing, and digital growth from Ownadz.",
    alternates: {
      canonical: "https://www.ownadz.com/blog",
    },
    openGraph: {
      title: "Blog | Ownadz Digital Marketing Insights",
      description:
        "Read expert articles on SEO, performance marketing, social media strategy, content marketing, and digital growth from Ownadz.",
      url: "https://www.ownadz.com/blog",
      type: "website",
    },
  };
}

const stripHtml = (html = "") =>
  String(html)
    .replace(/<[^>]*>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();

const normalizeSlug = (slug) =>
  String(slug || "")
    .toLowerCase()
    .replace(/[^a-z0-9-]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");

export default async function BlogPage({ searchParams }) {
  const params = await searchParams;
  const rawQuery = typeof params?.q === "string" ? params.q : "";
  const query = rawQuery.trim().toLowerCase();
  const activeTag = typeof params?.tag === "string" ? params.tag.trim() : "";

  let posts = [];
  let categories = [];

  try {
    posts = await getPublishedPosts();
  } catch (err) {
    console.error("Error loading posts:", err);
  }

  try {
    const catResponse = await getCategories();
    categories = catResponse.documents || [];
  } catch (err) {
    console.error("Error loading categories:", err);
  }

  // ---- Filtering ----
  let visiblePosts = posts;
  if (query) {
    visiblePosts = posts.filter((post) => {
      const haystack = stripHtml(
        `${post.title || ""} ${post.blog_Heading || ""} ${post.excerpt || ""} ${post.content || ""} ${post.blog_des || ""} ${post.categories || ""} ${post.tags || ""}`
      ).toLowerCase();
      return haystack.includes(query);
    });
  } else if (activeTag) {
    visiblePosts = posts.filter((post) =>
      (post.tags || "")
        .split(",")
        .map((t) => t.trim().toLowerCase())
        .includes(activeTag.toLowerCase())
    );
  }

  const sortedPosts = [...visiblePosts].sort(
    (a, b) =>
      new Date(b.publishedAt || b.$createdAt) -
      new Date(a.publishedAt || a.$createdAt)
  );

// ---- Sidebar data ----
  // Convert Appwrite documents to plain JSON-serializable objects before
  // passing them to the client <BlogSidebar> component.
  const toPlain = (item) => JSON.parse(JSON.stringify(item || {}));

  const categoryCounts = {};
  posts.forEach((post) => {
    (post.categories || "")
      .split(",")
      .map((c) => c.trim())
      .filter(Boolean)
      .forEach((c) => {
        categoryCounts[normalizeSlug(c)] = (categoryCounts[normalizeSlug(c)] || 0) + 1;
      });
  });

  const recentPosts = sortedPosts.slice(0, 4).map(toPlain);
  const popularPosts = (
    [...visiblePosts]
      .sort((a, b) => Number(b.featured || 0) - Number(a.featured || 0))
      .slice(0, 4) || sortedPosts.slice(0, 4)
  ).map(toPlain);

  const tagSet = new Set();
  posts.forEach((post) => {
    (post.tags || "")
      .split(",")
      .map((t) => t.trim())
      .filter(Boolean)
      .forEach((t) => tagSet.add(t));
  });
  const allTags = [...tagSet].slice(0, 12);

const sidebarCategories = categories.map(toPlain);

  const hasSearchOrTag = Boolean(query) || Boolean(activeTag);

  return (
    <div className="bg-white">
      {/* ========================= HERO ========================= */}
      <section className="relative overflow-hidden bg-[#111827] text-white">
        {/* Glow & pattern layers */}
        <div className="blog-hero-glow pointer-events-none absolute inset-0 z-0" />
        <div className="blog-hero-pattern pointer-events-none absolute inset-0 z-0" />
        <div className="pointer-events-none absolute -left-20 -top-20 h-80 w-80 rounded-full bg-[#ffbd59]/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 right-0 h-96 w-96 rounded-full bg-[#2563eb]/15 blur-3xl" />

        {/* Subtle image overlay */}
        <div
          className="pointer-events-none absolute inset-0 z-0 bg-cover bg-center opacity-[0.08] mix-blend-overlay"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600&auto=format&fit=crop')",
          }}
        />

        <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-3xl text-center">
            {/* Badge */}
            <span className="inline-flex items-center gap-2 rounded-full border border-[#ffbd59]/30 bg-[#ffbd59]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#ffbd59]">
              Insights &amp; Resources
            </span>

            <h1 className="mt-6 text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.25rem]">
              The Ownadz <span className="text-[#ffbd59]">Blog</span>
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
              Explore expert articles, tips, industry updates and marketing
              strategies to help your business grow online.
            </p>

            {/* Breadcrumb */}
            <nav
              aria-label="Breadcrumb"
              className="mt-7 inline-flex flex-wrap items-center justify-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm text-white/60 backdrop-blur-sm"
            >
              <Link href="/" className="transition-colors hover:text-[#ffbd59]">Home</Link>
              <FaChevronRight size={10} className="text-[#ffbd59]" />
              <span className="font-semibold text-[#ffbd59]">Blog</span>
            </nav>
          </div>
        </div>
      </section>

      {/* ========================= MAIN CONTENT ========================= */}
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
          {/* -------- LEFT: blog content -------- */}
          <div className="lg:col-span-8">
            {hasSearchOrTag ? (
              /* ===== SEARCH RESULTS ===== */
              <section>
                <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <span className="mb-2 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#8a5a00]">
                      <FaSearch size={12} /> Search Results
                    </span>
                    <h2 className="text-3xl font-bold tracking-tight text-[#111827]">
                      {query
                        ? `Results for "${rawQuery.trim()}"`
                        : `Posts tagged "${activeTag}"`}
                    </h2>
                  </div>
                  <Link href="/blog" className="btn-blog-secondary">
                    Clear filters
                  </Link>
                </div>
                <p className="mb-8 text-sm text-slate-500">
                  {sortedPosts.length}{" "}
                  {sortedPosts.length === 1 ? "article" : "articles"} found
                </p>

                {sortedPosts.length === 0 ? (
                  <div className="rounded-2xl border border-dashed border-slate-200 bg-slate-50/60 p-14 text-center">
                    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#ffbd59]/15 text-[#8a5a00]">
                      <FaSearch size={22} />
                    </div>
                    <h3 className="text-xl font-bold text-[#111827]">No articles found</h3>
                    <p className="mx-auto mt-2 max-w-md text-sm text-slate-500">
                      We couldn&apos;t find any posts matching your search. Try
                      different keywords or browse all articles.
                    </p>
                    <Link href="/blog" className="btn-blog-primary mt-6">
                      Browse all articles <FaArrowRight size={14} />
                    </Link>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 gap-7 sm:grid-cols-2">
                    {sortedPosts.map((post, i) => (
                      <div key={post.$id} className="animate-fade-up">
                        <BlogCard post={post} index={i} />
                      </div>
                    ))}
                  </div>
                )}
              </section>
            ) : (
              <>
                {/* ===== LATEST ARTICLES ===== */}
                <section className="mb-16">
                  <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
                    <div>
                      <span className="mb-2 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#8a5a00]">
                        <span className="h-0.5 w-8 bg-[#ffbd59]" /> Fresh Content
                      </span>
                      <h2 className="text-3xl font-bold tracking-tight text-[#111827] sm:text-4xl">
                        Latest Articles
                      </h2>
                    </div>
                    <p className="text-sm text-slate-500">
                      {sortedPosts.length} articles and counting
                    </p>
                  </div>

                  {sortedPosts.length === 0 ? (
                    <div className="rounded-2xl border border-dashed border-slate-200 bg-slate-50/60 p-14 text-center">
                      <p className="text-slate-500">No blog posts published yet.</p>
                      <p className="mt-2 text-sm text-slate-400">
                        Check back soon for expert articles from Ownadz.
                      </p>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 gap-7 sm:grid-cols-2">
                      {sortedPosts.slice(0, 6).map((post, i) => (
                        <div key={post.$id} className="animate-fade-up">
                          <BlogCard post={post} index={i} />
                        </div>
                      ))}
                    </div>
                  )}
                </section>

{/* ===== ALL POSTS ===== */}
                <section>
                  <div className="mb-8 flex items-end justify-between gap-4">
                    <div>
                      <span className="mb-2 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#8a5a00]">
                        <span className="h-0.5 w-8 bg-[#ffbd59]" /> Explore More
                      </span>
                      <h2 className="text-3xl font-bold tracking-tight text-[#111827] sm:text-4xl">
                        All Articles
                      </h2>
                    </div>
                  </div>

{sortedPosts.length > 6 ? (
                    <div className="grid grid-cols-1 gap-7 sm:grid-cols-2">
                      {sortedPosts.slice(6).map((post, i) => (
                        <div key={post.$id} className="animate-fade-up">
                          <BlogCard post={post} index={i} />
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-sm text-slate-400">
                      Browse all the latest articles above.
                    </p>
                  )}
                </section>
              </>
            )}
          </div>

          {/* -------- RIGHT: sidebar -------- */}
          <div className="lg:col-span-4 lg:sticky lg:top-24">
<BlogSidebar
              categories={sidebarCategories}
              categoryCounts={categoryCounts}
              recentPosts={recentPosts}
              popularPosts={popularPosts.length ? popularPosts : recentPosts}
              allTags={allTags}
              initialQuery={rawQuery}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

