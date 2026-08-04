import Link from "next/link";
import { getCategoryBySlug } from "@/services/categoryService";
import { getPostsByCategory } from "@/services/postService";
import { getImagePreview } from "@/services/storageService";
import { getPostUrl, formatDate } from "@/utils/blog";
import { FaRegCalendarAlt, FaUser, FaFolder } from "react-icons/fa";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const category = await getCategoryBySlug(slug);

  if (!category) {
    return {
      title: "Category Not Found | Ownadz",
      description: "The requested blog category was not found.",
    };
  }

  return {
    title: `${category.title || "Category"} | Ownadz Blog`,
    description:
      category.description ||
      `Explore articles and insights in the ${category.title || "category"} section on Ownadz blog.`,
    alternates: {
      canonical: `https://www.ownadz.com/categories/${category.slug}`,
    },
    openGraph: {
      title: `${category.title || "Category"} | Ownadz Blog`,
      description:
        category.description ||
        `Explore articles and insights in the ${category.title || "category"} section on Ownadz blog.`,
      url: `https://www.ownadz.com/categories/${category.slug}`,
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

export default async function CategoryPage({ params }) {
  const { slug } = await params;

  const category = await getCategoryBySlug(slug);
  if (!category) {
    return (
      <div className="p-10">
        Category Not Found
      </div>
    );
  }

  let posts = [];
  try {
    posts = await getPostsByCategory(category.slug);
  } catch (err) {
    console.error("Error loading category posts:", err);
  }

  const categoryImage = category.image
    ? getImagePreview(category.image)
    : null;

  return (
    <div className="bg-white">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-[#121212] py-10 lg:py-16 text-white">
        <div className="absolute -left-10 -top-10 h-72 w-72 rounded-full bg-[#ffbd59]/10 blur-3xl animate-pulse z-0" />
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-[#ffbd59]/5 blur-3xl z-0" />
        {categoryImage && (
          <div className="absolute inset-0 z-0">
            <img
              src={categoryImage}
              alt={category.title}
              className="w-full h-full object-cover opacity-25"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#121212] via-[#121212]/85 to-[#121212]/40" />
          </div>
        )}
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center md:text-left">
          <nav className="text-sm text-white/50 mb-4">
            <Link href="/" className="hover:text-[#ffbd59] transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-[#ffbd59] transition-colors">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-[#ffbd59]">{category.title}</span>
          </nav>
          <div className="max-w-3xl">
            <h1 className="text-5xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.05]">
              <span className="text-[#ffbd59] bg-white/5 border border-white/10 px-4 py-0.5 inline-block rounded-2xl mt-2">
                {category.title}
              </span>
            </h1>
            {category.description && (
              <p className="mt-6 text-lg sm:text-xl text-white/70 max-w-3xl font-medium leading-8">
                {category.description}
              </p>
            )}
            <p className="mt-4 text-sm text-white/50">
              {posts.length} {posts.length === 1 ? "article" : "articles"} in this category
            </p>
          </div>
        </div>
      </section>

      {/* POSTS LIST */}
      <div className="py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {posts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-slate-400 text-lg">No posts published in this category yet.</p>
              <Link
                href="/blog"
                className="inline-block mt-4 bg-[#ffbd59] hover:bg-black text-black hover:text-[#ffbd59] font-bold text-sm tracking-wider uppercase px-6 py-3 rounded-md transition-all"
              >
                Browse all blog posts
              </Link>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => {
              const imgSrc = post.featuredImage
                ? getImagePreview(post.featuredImage)
                : post.blog_image
                ? getImagePreview(post.blog_image)
                : null;
              const excerpt =
                post.excerpt ||
                stripHtml(post.content || post.blog_des || "").slice(0, 160);
              const postCategories = (post.categories || "")
                .split(",")
                .map((c) => c.trim())
                .filter(Boolean);

              return (
                <article
                  key={post.$id}
                  className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all flex flex-col"
                >
                  {/* Card Image */}
                  {imgSrc && (
                    <Link href={getPostUrl(post)} className="block overflow-hidden">
                      <img
                        src={imgSrc}
                        alt={post.title || post.blog_Heading || "Blog post"}
                        className="w-full h-52 object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </Link>
                  )}

                  {/* Card Body */}
                  <div className="p-5 flex flex-col flex-1">
                    {/* Meta line */}
                    <p className="text-xs text-slate-500 flex items-center gap-3 mb-3">
                      <span className="inline-flex items-center gap-1.5">
                        <FaRegCalendarAlt className="text-slate-400" />
                        {formatDate(post.publishedAt || post.blog_date || post.$createdAt)}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <FaUser className="text-slate-400" />
                        {post.authorName || post.blog_publish || "Ownadz"}
                      </span>
                    </p>

                    {/* Title */}
                    <h2 className="text-xl font-extrabold text-[#111827] tracking-tight leading-snug mb-3">
                      <Link href={getPostUrl(post)} className="hover:text-[#ffbd59] transition-colors">
                        {post.title || post.blog_Heading}
                      </Link>
                    </h2>

                    {/* Categories */}
                    {postCategories.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-3">
                        {postCategories.map((c) => (
                          <Link
                            key={c}
                            href={`/categories/${c}`}
                            className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wide bg-[#ffbd59]/20 text-slate-800 px-2 py-0.5 rounded-md border border-[#ffbd59]/40 hover:bg-[#ffbd59]/40 transition-colors"
                          >
                            <FaFolder size={8} /> {c}
                          </Link>
                        ))}
                      </div>
                    )}

                    {/* Excerpt */}
                    <p className="text-slate-600 text-sm leading-relaxed mb-5 line-clamp-3 flex-1">
                      {excerpt || "Read more about this topic from Ownadz experts."}
                    </p>

{/* Read More */}
                    <Link
                      href={getPostUrl(post)}
                      className="inline-flex items-center justify-center self-start bg-[#ffbd59] hover:bg-black text-black hover:text-[#ffbd59] font-bold text-xs tracking-wider uppercase px-5 py-2.5 rounded-md shadow-sm hover:shadow-md transition-all border border-[#ffbd59] hover:border-black active:scale-[0.98]"
                    >
                      Read More &rarr;
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

