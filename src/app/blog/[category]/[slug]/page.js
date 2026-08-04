import { redirect } from "next/navigation";
import { getPostBySlug, getPublishedPosts, getRelatedPosts } from "@/services/postService";
import { getCategories } from "@/services/categoryService";
import { getImagePreview } from "@/services/storageService";
import BlogBlocksRenderer from "@/components/blog/BlogBlocksRenderer";
import RelatedPostsCarousel from "@/components/blog/RelatedPostsCarousel";
import SidebarContactForm from "@/components/blog/SidebarContactForm";
import {
  getPostCategories,
  getPostPrimaryCategory,
  getPostUrl,
  getPostAbsoluteUrl,
  formatDate,
  normalizeSlug,
} from "@/utils/blog";
import {
  FaRegCalendarAlt,
  FaFacebookF,
  FaLinkedinIn,
  FaTags,
  FaChevronUp,
  FaChevronDown,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";

export const dynamic = "force-dynamic";

const parseBlocks = (blocks) => {
  if (Array.isArray(blocks)) return blocks;
  if (!blocks) return [];
  try {
    const parsed = JSON.parse(blocks);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
};

const stripHtml = (html = "") =>
  String(html)
    .replace(/<[^>]*>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();

const buildTocFromBlocks = (blocks) => {
  return (Array.isArray(blocks) ? blocks : [])
    .filter((b) => b?.type === "heading" && b?.content)
    .map((b, i) => ({
      id: `section-${i + 1}`,
      label: b.content,
      level: b.level || 2,
    }));
};

const buildFaqSchema = (blocks) => {
  const faqBlock = (Array.isArray(blocks) ? blocks : []).find((b) => b?.type === "faq");
  if (!faqBlock || !Array.isArray(faqBlock.items) || !faqBlock.items.length) return null;

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqBlock.items
      .filter((i) => i.question && i.answer)
      .map((i) => ({
        "@type": "Question",
        name: i.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: i.answer,
        },
      })),
  };
};

const buildArticleSchema = (post, imageUrl) => {
  const canonicalUrl = getPostAbsoluteUrl(post);

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title || post.blog_Heading,
    description: post.excerpt || post.seoDescription || stripHtml(post.content || post.blog_des || "").slice(0, 160),
    image: imageUrl ? [imageUrl] : undefined,
    datePublished: post.publishedAt || post.blog_date || post.$createdAt,
    dateModified: post.updatedAt || post.publishedAt || post.$createdAt,
    author: {
      "@type": "Person",
      name: post.authorName || post.blog_publish || "Ownadz Digital Agency",
    },
    publisher: {
      "@type": "Organization",
      name: "Ownadz",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonicalUrl,
    },
    url: canonicalUrl,
  };
};

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found | Ownadz",
      description: "The requested blog post was not found.",
    };
  }

  const title = post.seoTitle
    ? post.seoTitle
        .replace(/%%title%%/g, post.title || post.blog_Heading || "")
        .replace(/%%sitetitle%%/g, "Ownadz")
        .replace(/%%slug%%/g, post.slug)
    : `${post.title || post.blog_Heading || "Blog Post"} | Ownadz`;

  const description =
    post.seoDescription || post.excerpt || stripHtml(post.content || post.blog_des || "").slice(0, 160);

  const image = post.ogImage
    ? post.ogImage.startsWith("http")
      ? post.ogImage
      : getImagePreview(post.ogImage)
    : post.featuredImage
    ? getImagePreview(post.featuredImage)
    : post.blog_image
    ? getImagePreview(post.blog_image)
    : null;

  const canonical = post.canonicalUrl || getPostAbsoluteUrl(post);

  return {
    title,
    description,
    alternates: { canonical },
    robots: post.noindex ? "noindex, nofollow" : "index, follow",
    openGraph: {
      title: post.ogTitle || title,
      description: post.ogDescription || description,
      type: "article",
      url: canonical,
      images: image ? [{ url: image }] : [],
      publishedTime: post.publishedAt || post.blog_date,
      authors: [post.authorName || post.blog_publish || "Ownadz"],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: image ? [image] : [],
    },
  };
}

export default async function BlogPostPage({ params }) {
  const { category, slug } = await params;

  const post = await getPostBySlug(slug);

  if (!post) {
    return <div className="max-w-4xl mx-auto p-6 text-slate-800">Post Not Found</div>;
  }

  const primaryCategory = getPostPrimaryCategory(post);
  const canonicalUrl = getPostUrl(post);
  const requestedCategory = typeof category === "string" ? category.trim().toLowerCase() : "";
  const canonicalCategory = primaryCategory ? String(primaryCategory).trim().toLowerCase() : "";

  if (!requestedCategory && primaryCategory) {
    redirect(canonicalUrl);
  }

  if (requestedCategory && !primaryCategory) {
    redirect(`/blog/${slug}`);
  }

  if (requestedCategory && canonicalCategory && requestedCategory !== canonicalCategory) {
    redirect(canonicalUrl);
  }

  const blocks = parseBlocks(post.blocks);
  const hasBlocks = blocks.length > 0;
  const tocItems = hasBlocks ? buildTocFromBlocks(blocks) : [];
  const faqSchema = hasBlocks ? buildFaqSchema(blocks) : null;

  const title = post.title || post.blog_Heading || "Blog Post";
  const content = post.content || post.blog_des || "";
  const featuredImage = post.featuredImage
    ? getImagePreview(post.featuredImage)
    : post.blog_image
    ? getImagePreview(post.blog_image)
    : null;
  const categories = getPostCategories(post);
  const tags = (post.tags || "")
    .split(",")
    .map((t) => t.trim())
    .filter(Boolean);
  const authorName = post.authorName || post.blog_publish || "Ownadz Digital Agency";
  const authorImage = post.authorImage || null;
  const publishedDate = formatDate(post.publishedAt || post.blog_date || post.$createdAt);
  const updatedDate = post.updatedAt ? formatDate(post.updatedAt) : null;

  let relatedPosts = [];
  try {
    relatedPosts = await getRelatedPosts(post, 9);
  } catch (err) {
    console.error("Error loading related posts:", err);
  }

  let allCategories = [];
  try {
    const catResponse = await getCategories();
    allCategories = catResponse.documents || [];
  } catch (err) {
    console.error("Error loading categories:", err);
  }

  let allPosts = [];
  try {
    allPosts = await getPublishedPosts();
  } catch (err) {
    console.error("Error loading posts:", err);
  }

  const popularPosts = [...allPosts]
    .filter((p) => p.$id !== post.$id)
    .sort((a, b) => new Date(b.publishedAt || b.$createdAt) - new Date(a.publishedAt || a.$createdAt))
    .slice(0, 3);

  const articleSchema = buildArticleSchema(post, featuredImage);
  const canonicalAbsoluteUrl = getPostAbsoluteUrl(post);
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://ownadz.com/" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://ownadz.com/blog/" },
      { "@type": "ListItem", position: 3, name: primaryCategory || "Article", item: canonicalAbsoluteUrl },
      { "@type": "ListItem", position: 4, name: title, item: canonicalAbsoluteUrl },
    ],
  };

  const shareUrl = canonicalAbsoluteUrl;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <main className="bg-[#fcfdfd] min-h-screen pt-6 pb-24 font-sans text-slate-800 antialiased">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          {/* Breadcrumbs Navigation */}
          <nav className="text-xs text-slate-500 mb-6 flex items-center flex-wrap gap-1.5 font-medium tracking-wide">
            <Link href="/" className="hover:text-sky-600 transition-colors">
              Home
            </Link>
            <span className="text-slate-300 font-light">&gt;</span>
            <Link href="/blog" className="hover:text-sky-600 transition-colors">
              Blog
            </Link>
            {primaryCategory && (
              <>
                <span className="text-slate-300 font-light">&gt;</span>
                <Link
                  href={`/categories/${normalizeSlug(primaryCategory)}`}
                  className="hover:text-sky-600 transition-colors"
                >
                  {primaryCategory}
                </Link>
              </>
            )}
            <span className="text-slate-300 font-light">&gt;</span>
            <span className="text-slate-800 font-semibold truncate max-w-[280px] sm:max-w-none">
              {title}
            </span>
          </nav>

          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* Left Main Post Column */}
            <article className="lg:col-span-8">
              <h1 className="text-2xl sm:text-3xl md:text-[34px] font-black text-slate-900 leading-[1.25] tracking-tight mb-5">
                {title}
              </h1>

              {/* Publication Meta Info Header */}
              <div className="flex flex-wrap items-center justify-between gap-4 mb-7 pb-3 border-b border-slate-100">
                <div className="flex items-center flex-wrap gap-3 text-xs text-slate-600">
                  {categories.length > 0 && (
                    <span className="bg-[#eaf8f0] text-[#2e934a] font-semibold px-3 py-1 rounded-full border border-[#d2f0df] tracking-tight">
                      {categories[0]}
                    </span>
                  )}
                  <div className="flex items-center gap-1.5">
                    <FaRegCalendarAlt className="text-slate-400" size={13} />
                    <span>
                      <strong className="font-semibold text-slate-800">Published:</strong>{" "}
                      {publishedDate}
                    </span>
                  </div>
                  {updatedDate && (
                    <div className="flex items-center gap-1.5 border-l border-slate-200 pl-3">
                      <span>
                        <strong className="font-semibold text-slate-800">Updated on:</strong>{" "}
                        {updatedDate}
                      </span>
                    </div>
                  )}
                </div>

                {/* Social Media Share Buttons */}
                <div className="flex items-center gap-2 text-xs">
                  <span className="text-slate-500 font-medium mr-0.5">Share</span>
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-7 h-7 rounded-md bg-[#1877f2] text-white flex items-center justify-center hover:scale-105 hover:shadow-sm transition-all"
                    aria-label="Share on Facebook"
                  >
                    <FaFacebookF size={11} />
                  </a>
                  <a
                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-7 h-7 rounded-md bg-black text-white flex items-center justify-center hover:scale-105 hover:shadow-sm transition-all"
                    aria-label="Share on X"
                  >
                    <FaXTwitter size={11} />
                  </a>
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-7 h-7 rounded-md bg-[#0a66c2] text-white flex items-center justify-center hover:scale-105 hover:shadow-sm transition-all"
                    aria-label="Share on LinkedIn"
                  >
                    <FaLinkedinIn size={11} />
                  </a>
                </div>
              </div>

              {/* Featured Cover Banner */}
              {featuredImage && (
                <div className="overflow-hidden rounded-2xl mb-8 border border-slate-200/80 shadow-xs hover:shadow-md transition-shadow">
                  <img
                    src={featuredImage}
                    alt={title}
                    className="w-full h-auto object-cover max-h-[480px] w-full"
                  />
                </div>
              )}

              {/* Table of Contents Box */}
              {tocItems.length > 0 && (
                <nav className="bg-slate-50/90 backdrop-blur-xs rounded-xl p-5 border border-slate-200/80 mb-8 shadow-xs">
                  <h3 className="text-sm font-bold text-slate-900 mb-3 tracking-wide uppercase">
                    Table of Contents
                  </h3>
                  <ul className="space-y-2 text-xs text-slate-700">
                    {tocItems.map((item) => (
                      <li key={item.id}>
                        <a
                          href={`#${item.id}`}
                          className="hover:text-sky-600 hover:translate-x-0.5 transition-all inline-flex items-center gap-1.5 font-medium"
                        >
                          <span className="text-slate-400">•</span> {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              )}

              {/* Body Content */}
              {hasBlocks ? (
                <div className="text-slate-700 leading-relaxed text-sm sm:text-base space-y-4">
                  <BlogBlocksRenderer blocks={blocks} />
                </div>
              ) : (
                <div
                  className="prose prose-slate max-w-none text-slate-700 leading-relaxed text-sm sm:text-base"
                  dangerouslySetInnerHTML={{ __html: content }}
                />
              )}

              {/* Post Tags */}
              {tags.length > 0 && (
                <div className="flex flex-wrap items-center gap-2 mt-8 pt-6 border-t border-slate-100">
                  <FaTags className="text-slate-400" size={13} />
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-semibold bg-slate-100 text-slate-600 px-3 py-1 rounded-full border border-slate-200/60"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}

              {/* Author Info Section */}
              <div className="p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200/90 flex items-center gap-4 mt-8 shadow-xs">
                {authorImage && (
                  <img
                    src={authorImage.startsWith("http") ? authorImage : getImagePreview(authorImage)}
                    alt={authorName}
                    className="w-14 h-14 rounded-full object-cover shrink-0 ring-2 ring-white"
                  />
                )}
                <div className="text-xs sm:text-sm">
                  <h4 className="font-bold text-slate-900 text-base">{authorName}</h4>
                  <p className="text-slate-600 mt-1 leading-snug">
                    {post.authorBio ||
                      `${authorName} writes on SEO strategy, AI integrations, brand authority building, and performance marketing.`}
                  </p>
                </div>
              </div>

              {/* Related Articles Component */}
              <div className="mt-12">
                <RelatedPostsCarousel posts={relatedPosts} />
              </div>
            </article>

            {/* Right Sticky Sidebar */}
            <aside className="lg:col-span-4 space-y-7 sticky top-6">
              {/* Client Component: Lead Contact Form */}
              <SidebarContactForm />

              {/* Categories Section */}
              <div className="bg-white border border-slate-200/90 rounded-2xl p-5 shadow-xs">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-2">
                  <h3 className="text-sm font-bold text-slate-900 tracking-tight">Categories</h3>
                  <button className="text-sky-600 p-1" aria-label="Toggle categories">
                    <FaChevronUp size={13} />
                  </button>
                </div>
                <ul className="space-y-1 text-xs text-slate-600 pt-1">
                  {allCategories.map((cat) => (
                    <li key={cat.$id} className="flex items-center justify-between py-1.5 hover:text-slate-900">
                      <label className="flex items-center gap-2.5 cursor-pointer w-full">
                        <input
                          type="checkbox"
                          className="w-3.5 h-3.5 rounded border-slate-300 text-sky-600 focus:ring-0 cursor-pointer"
                          readOnly
                          checked={primaryCategory === cat.title}
                        />
                        <Link href={`/categories/${cat.slug}`} className="hover:underline font-medium">
                          {cat.title}
                        </Link>
                      </label>
                      {cat.hasChildren && (
                        <FaChevronDown size={10} className="text-slate-400 ml-2 shrink-0" />
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Popular Posts Cards */}
              <div className="space-y-4">
                <h3 className="text-base font-bold text-slate-900 tracking-tight">Popular Posts</h3>
                {popularPosts.map((lp) => {
                  const lpImg = lp.featuredImage
                    ? getImagePreview(lp.featuredImage)
                    : lp.blog_image
                    ? getImagePreview(lp.blog_image)
                    : null;
                  const postCat = getPostPrimaryCategory(lp) || "Blog";

                  return (
                    <div
                      key={lp.$id}
                      className="bg-white border border-slate-200/90 rounded-2xl p-3 shadow-xs hover:shadow-md transition-all group"
                    >
                      {lpImg && (
                        <div className="overflow-hidden rounded-xl mb-3 h-32 w-full bg-slate-100">
                          <img
                            src={lpImg}
                            alt={lp.title || lp.blog_Heading}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      )}
                      <span className="text-[10px] font-semibold bg-[#eaf8f0] text-[#2e934a] px-2 py-0.5 rounded border border-[#d2f0df] inline-block mb-1.5">
                        {postCat}
                      </span>
                      <h4 className="text-xs font-bold text-slate-900 group-hover:text-sky-600 transition-colors leading-snug">
                        <Link href={getPostUrl(lp)}>
                          {lp.title || lp.blog_Heading}
                        </Link>
                      </h4>
                    </div>
                  );
                })}
              </div>
            </aside>
          </div>
        </div>
      </main>
    </>
  );
}