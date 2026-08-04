"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { getImagePreview } from "@/services/storageService";
import { getPostUrl, formatDate } from "@/utils/blog";
import { createLead } from "@/services/leadService";
import {
  FaSearch,
  FaFolder,
  FaRegCalendarAlt,
  FaArrowRight,
  FaPaperPlane,
  FaCheckCircle,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

const getPostImage = (post) => {
  if (post.featuredImage) return getImagePreview(post.featuredImage);
  if (post.blog_image) return getImagePreview(post.blog_image);
  if (post.ogImage)
    return post.ogImage.startsWith("http")
      ? post.ogImage
      : getImagePreview(post.ogImage);
  return null;
};

export default function BlogSidebar({
  categories = [],
  categoryCounts = {},
  recentPosts = [],
  popularPosts = [],
  allTags = [],
  initialQuery = "",
}) {
  const router = useRouter();
  const [query, setQuery] = useState(initialQuery || "");

  // Contact form state
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [contactLoading, setContactLoading] = useState(false);
  const [contactSuccess, setContactSuccess] = useState(false);

  // Newsletter state
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterLoading, setNewsletterLoading] = useState(false);
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    const q = query.trim();
    if (!q) return;
    router.push(`/blog?q=${encodeURIComponent(q)}`);
  };

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setContactLoading(true);
    try {
      await createLead({
        ...contactForm,
        service: "Blog Callback",
        status: "New",
      });
      setContactSuccess(true);
      setContactForm({ name: "", email: "", phone: "", message: "" });
      setTimeout(() => setContactSuccess(false), 5000);
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Please try again.");
    } finally {
      setContactLoading(false);
    }
  };

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) return;
    setNewsletterLoading(true);
    try {
      await createLead({
        name: "Newsletter Subscriber",
        email: newsletterEmail,
        service: "Newsletter",
        status: "New",
        message: "Newsletter subscription",
      });
      setNewsletterSuccess(true);
      setNewsletterEmail("");
      setTimeout(() => setNewsletterSuccess(false), 5000);
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Please try again.");
    } finally {
      setNewsletterLoading(false);
    }
  };

  const sortedCategories = [...categories].sort(
    (a, b) => (categoryCounts[b.slug] || 0) - (categoryCounts[a.slug] || 0)
  );

  return (
    <aside className="space-y-8">
      {/* SEARCH WIDGET */}
      <div className="blog-widget p-6">
        <h3 className="blog-widget-title mb-5">Search</h3>
        <form onSubmit={handleSearch} className="relative">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search articles..."
            className="w-full rounded-xl border border-[#e5e7eb] bg-[#f9fafb] py-3 pl-10 pr-11 text-sm text-[#1f2937] outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-[#ffbd59] focus:bg-white focus:ring-2 focus:ring-[#ffbd59]/20"
          />
          <FaSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={14} />
          <button
            type="submit"
            aria-label="Search"
            className="absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-lg bg-[#ffbd59] text-black transition-all duration-300 hover:bg-black hover:text-[#ffbd59]"
          >
            <FaArrowRight size={13} />
          </button>
        </form>
      </div>

      {/* CATEGORIES WIDGET */}
      <div className="blog-widget p-6">
        <h3 className="blog-widget-title mb-5">Categories</h3>
        {sortedCategories.length === 0 ? (
          <p className="text-sm text-slate-400">No categories yet.</p>
        ) : (
          <ul className="space-y-1">
            {sortedCategories.map((cat) => (
              <li key={cat.$id}>
                <Link
                  href={`/categories/${cat.slug}`}
                  className="group flex items-center justify-between rounded-lg px-3 py-2.5 transition-all duration-300 hover:bg-[#ffbd59]/10"
                >
                  <span className="inline-flex items-center gap-2.5 text-sm font-medium text-[#1f2937] transition-colors group-hover:text-[#111827]">
                    <FaFolder size={13} className="text-[#ffbd59]" />
                    {cat.title}
                  </span>
                  <span className="flex h-6 min-w-6 items-center justify-center rounded-full bg-[#ffbd59]/15 px-2 text-xs font-bold text-[#8a5a00]">
                    {categoryCounts[cat.slug] || 0}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* RECENT POSTS WIDGET */}
      {recentPosts.length > 0 && (
        <div className="blog-widget p-6">
          <h3 className="blog-widget-title mb-5">Recent Posts</h3>
          <ul className="space-y-4">
            {recentPosts.map((post) => {
              const img = getPostImage(post);
              return (
<li key={post.$id}>
                  <Link href={getPostUrl(post)} className="group flex items-center gap-3">
                    {img ? (
                      <div className="h-14 w-16 shrink-0 overflow-hidden rounded-lg border border-slate-100">
                        <img
                          src={img}
                          alt={post.title || post.blog_Heading}
                          loading="lazy"
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                    ) : (
                      <div className="flex h-14 w-16 shrink-0 items-center justify-center rounded-lg bg-[#ffbd59]/15 text-[#8a5a00]">
                        <FaFolder size={16} />
                      </div>
                    )}
                    <div className="min-w-0">
                      <h4 className="line-clamp-2 text-sm font-semibold leading-snug text-[#111827] transition-colors group-hover:text-[#8a5a00]">
                        {post.title || post.blog_Heading}
                      </h4>
                      <p className="mt-1 flex items-center gap-1.5 text-xs text-slate-500">
                        <FaRegCalendarAlt size={10} className="text-[#ffbd59]" />
                        {formatDate(post.publishedAt || post.blog_date || post.$createdAt)}
                      </p>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}

      {/* POPULAR POSTS WIDGET */}
      {popularPosts.length > 0 && (
        <div className="blog-widget p-6">
          <h3 className="blog-widget-title mb-5">Popular Posts</h3>
          <ul className="space-y-4">
            {popularPosts.map((post, i) => {
              const img = getPostImage(post);
              return (
                <li key={post.$id}>
                  <Link href={getPostUrl(post)} className="group flex items-center gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#ffbd59] text-sm font-black text-[#111827]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {img ? (
                      <div className="h-14 w-16 shrink-0 overflow-hidden rounded-lg border border-slate-100">
                        <img
                          src={img}
                          alt={post.title || post.blog_Heading}
                          loading="lazy"
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                    ) : null}
                    <div className="min-w-0">
                      <h4 className="line-clamp-2 text-sm font-semibold leading-snug text-[#111827] transition-colors group-hover:text-[#8a5a00]">
                        {post.title || post.blog_Heading}
                      </h4>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}

      {/* TAGS WIDGET */}
      {allTags.length > 0 && (
        <div className="blog-widget p-6">
          <h3 className="blog-widget-title mb-5">Tags</h3>
          <div className="flex flex-wrap gap-2">
            {allTags.map((tag) => (
              <Link
                key={tag}
                href={`/blog?tag=${encodeURIComponent(tag)}`}
                className="rounded-full border border-[#e5e7eb] bg-[#f9fafb] px-3.5 py-1.5 text-xs font-semibold text-[#1f2937] transition-all duration-300 hover:border-[#ffbd59] hover:bg-[#ffbd59] hover:text-[#111827]"
              >
                #{tag}
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* CONTACT / CALLBACK FORM */}
      <div className="overflow-hidden rounded-2xl bg-[#111827] p-6 text-white shadow-lg">
        <div className="mb-5">
          <span className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#ffbd59]">
            <FaPhone size={11} /> Get a Callback
          </span>
          <h3 className="text-xl font-bold leading-snug">
            Need a Free Consultation?
          </h3>
          <p className="mt-1.5 text-sm text-white/60">
            Share your details and our experts will reach out shortly.
          </p>
        </div>

        {contactSuccess ? (
          <div className="flex items-center gap-3 rounded-xl bg-[#ffbd59]/10 p-4 text-sm font-semibold text-[#ffbd59]">
            <FaCheckCircle size={18} />
            Thank you! We will get back to you soon.
          </div>
        ) : (
          <form onSubmit={handleContactSubmit} className="space-y-3">
            <input
              type="text"
              required
              placeholder="Your Name"
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-all placeholder:text-white/40 focus:border-[#ffbd59] focus:bg-white/10"
              value={contactForm.name}
              onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
            />
            <input
              type="email"
              required
              placeholder="Email Address"
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-all placeholder:text-white/40 focus:border-[#ffbd59] focus:bg-white/10"
              value={contactForm.email}
              onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
            />
            <input
              type="tel"
              required
              placeholder="Phone Number"
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-all placeholder:text-white/40 focus:border-[#ffbd59] focus:bg-white/10"
              value={contactForm.phone}
              onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
            />
            <button
              type="submit"
              disabled={contactLoading}
              className="w-full rounded-xl bg-[#ffbd59] py-3 text-sm font-bold text-[#111827] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#ffbd59]/30 disabled:opacity-60"
            >
              {contactLoading ? "Sending..." : "Get Free Consultation"}
            </button>
          </form>
        )}
      </div>

      {/* NEWSLETTER SUBSCRIPTION */}
      <div className="overflow-hidden rounded-2xl border border-[#ffbd59]/30 bg-gradient-to-br from-[#fff8eb] to-white p-6">
        <span className="mb-3 inline-flex items-center gap-2 rounded-full bg-[#ffbd59]/15 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#8a5a00]">
          <FaEnvelope size={11} /> Newsletter
        </span>
        <h3 className="text-xl font-bold text-[#111827]">Subscribe to Our Blog</h3>
        <p className="mt-1.5 text-sm text-[#1f2937]/70">
          Get the latest marketing insights delivered to your inbox.
        </p>

        {newsletterSuccess ? (
          <div className="mt-4 flex items-center gap-3 rounded-xl bg-[#ffbd59]/15 p-4 text-sm font-semibold text-[#8a5a00]">
            <FaCheckCircle size={18} />
            Subscribed! Stay tuned for updates.
          </div>
        ) : (
          <form onSubmit={handleNewsletterSubmit} className="mt-4">
            <div className="flex gap-2">
              <input
                type="email"
                required
                placeholder="Your email"
                className="w-full rounded-xl border border-[#e5e7eb] bg-white px-4 py-3 text-sm text-[#1f2937] outline-none transition-all placeholder:text-slate-400 focus:border-[#ffbd59] focus:ring-2 focus:ring-[#ffbd59]/20"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
              />
              <button
                type="submit"
                disabled={newsletterLoading}
                aria-label="Subscribe"
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#ffbd59] text-[#111827] transition-all duration-300 hover:bg-black hover:text-[#ffbd59] disabled:opacity-60"
              >
                <FaPaperPlane size={15} />
              </button>
            </div>
          </form>
        )}
      </div>
    </aside>
  );
}
