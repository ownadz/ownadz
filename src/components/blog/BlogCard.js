import Link from "next/link";
import { getImagePreview } from "@/services/storageService";
import { getPostUrl, formatDate } from "@/utils/blog";
import {
  FaRegCalendarAlt,
  FaFolder,
  FaArrowRight,
} from "react-icons/fa";

const stripHtml = (html = "") =>
  String(html)
    .replace(/<[^>]*>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();

const getPostImage = (post) => {
  if (post.featuredImage) return getImagePreview(post.featuredImage);
  if (post.blog_image) return getImagePreview(post.blog_image);
  if (post.ogImage)
    return post.ogImage.startsWith("http")
      ? post.ogImage
      : getImagePreview(post.ogImage);
  return null;
};

const getPostCategories = (post) =>
  (post.categories || "")
    .split(",")
    .map((c) => c.trim())
    .filter(Boolean);

// Ensure the category string is turned into a valid URL slug
const toSlug = (str) =>
  String(str || "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop";

export default function BlogCard({ post, index = 0 }) {
  if (!post) return null;

  const imgSrc = getPostImage(post);
  const excerpt =
    post.excerpt ||
    stripHtml(post.content || post.blog_des || "").slice(0, 120);
  const categories = getPostCategories(post);
  const displayCategory = categories[0] || "";

  return (
    <article
      className="blog-card group relative flex h-full flex-col bg-white"
      style={{ animationDelay: `${Math.min(index, 8) * 60}ms` }}
    >
      {/* 1. Featured image */}
      <div className="blog-card-image relative block w-full">
        
          <img
            src={imgSrc || FALLBACK_IMAGE}
            alt={post.title || post.blog_Heading || "Blog post"}
            loading="lazy"
            decoding="async"
            className="aspect-[16/10] w-full object-cover"
          />
       
      </div>

      {/* 2. Card body */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        {/* 2a. Category */}
        {displayCategory && (
          <Link
            href={`/categories/${toSlug(displayCategory)}`}
            className="group flex w-fit items-center gap-2.5 rounded-lg px-3 py-2.5 transition-all duration-300 hover:bg-[#ffbd59]/10"
          >
            <span className="inline-flex items-center gap-2.5 text-sm font-medium text-[#1f2937] transition-colors group-hover:text-[#111827]">
              <FaFolder size={13} className="text-[#ffbd59]" />
              {displayCategory}
            </span>
          </Link>
        )}

        {/* 2b. Heading */}
<h3 className="mt-3 text-[1.15rem] font-bold leading-snug text-[#111827] sm:text-lg [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:2] overflow-hidden">
          <Link href={getPostUrl(post)} className="after:absolute after:inset-0">
            {post.title || post.blog_Heading}
          </Link>
        </h3>

        {/* 2c. Two-line description */}
        <p className="mt-2.5 text-sm leading-relaxed text-[#1f2937] [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:2] overflow-hidden">
          {excerpt || "Read more about this topic from Ownadz experts."}
        </p>

        {/* 2d. Bottom row: posted date (left) + Read More (right) */}
        <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-4">
          <span className="inline-flex items-center gap-1.5 text-xs text-slate-500">
            <FaRegCalendarAlt className="text-[#ffbd59]" />
            {formatDate(post.publishedAt || post.blog_date || post.$createdAt, { month: "short" })}
          </span>

          <span className="blog-card-arrow inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-black">
            Read More <FaArrowRight size={11} className="text-[#ffbd59]" />
          </span>
        </div>
      </div>
    </article>
  );
}

