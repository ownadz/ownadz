"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import slugify from "slugify";
import TinyEditor from "@/components/editor/TinyEditor";
import YoastSeoPanel from "@/components/admin/YoastSeoPanel";
import BlockBuilder from "@/components/admin/BlockBuilder";
import MediaLibraryPicker from "@/components/admin/MediaLibraryPicker";
import { uploadImage, getImagePreview } from "@/services/storageService";
import {
  FaEdit,
  FaEye,
  FaUpload,
  FaTrash,
  FaSave,
  FaArrowLeft,
  FaCheck,
  FaPlus,
  FaList,
  FaTimes,
  FaCalendarAlt,
  FaImage,
  FaUser,
  FaSyncAlt,
} from "react-icons/fa";

// ============================================================
// WordPress-style Post Editor
// "Enter title here" + permalink bar, content tabs (Classic /
// Blocks), Yoast SEO panel, publish box (status, date, featured),
// categories, tags, excerpt, featured image, author.
// ============================================================

const cleanText = (str = "") =>
  String(str).replace(/<[^>]*>/g, " ").replace(/&nbsp;/g, " ").replace(/\s+/g, " ").trim();

const stripHtml = (html = "") => {
  const doc = String(html).replace(/<[^>]*>/g, " ");
  return doc.replace(/&nbsp;/g, " ").replace(/\s+/g, " ").trim();
};

export default function PostEditor({
  mode = "create", // "create" | "edit"
  initialData = {},
  categories = [], // [{title, slug, $id}]
  categoriesLoading = false,
  onRefreshCategories = null,
  onSubmit,
  submitLabel,
  onCancel,
}) {
  const router = useRouter();

  const [title, setTitle] = useState(initialData.title || "");
  const [slug, setSlug] = useState(initialData.slug || "");
  const [slugEdited, setSlugEdited] = useState(!!initialData.slug);
  const [status, setStatus] = useState(initialData.status || "draft");
  const [featured, setFeatured] = useState(!!initialData.featured);
const formatDateForInput = (date) => {
    if (!date) return new Date().toISOString().split("T")[0];
    const d = new Date(date);
    return isNaN(d) ? new Date().toISOString().split("T")[0] : d.toISOString().split("T")[0];
  };

  const [publishDate, setPublishDate] = useState(
    formatDateForInput(initialData.publishedAt)
  );

  // Content
  const [activeTab, setActiveTab] = useState("classic");
  const [content, setContent] = useState(initialData.content || "");
  const [blocks, setBlocks] = useState(Array.isArray(initialData.blocks) ? initialData.blocks : []);
  const [excerpt, setExcerpt] = useState(initialData.excerpt || "");

  // Featured image
  const [featuredImage, setFeaturedImage] = useState(null);
  const [currentFeaturedImage, setCurrentFeaturedImage] = useState(initialData.featuredImage || "");

  // Author
  const [authorName, setAuthorName] = useState(initialData.authorName || "");
  const [authorBio, setAuthorBio] = useState(initialData.authorBio || "");
  const [authorImage, setAuthorImage] = useState(initialData.authorImage || "");

  // Taxonomy
  const [selectedCategories, setSelectedCategories] = useState(() => {
    const cats = (initialData.categories || "").split(",").map((c) => c.trim()).filter(Boolean);
    return cats;
  });
  const [tags, setTags] = useState(initialData.tags || "");

  // SEO
  const [seoTitle, setSeoTitle] = useState(initialData.seoTitle || "");
  const [seoDescription, setSeoDescription] = useState(initialData.seoDescription || "");
  const [focusKeyword, setFocusKeyword] = useState(initialData.focusKeyword || "");
  const [canonicalUrl, setCanonicalUrl] = useState(initialData.canonicalUrl || "");
  const [noindex, setNoindex] = useState(!!initialData.noindex);
  const [ogTitle, setOgTitle] = useState(initialData.ogTitle || "");
  const [ogDescription, setOgDescription] = useState(initialData.ogDescription || "");
  const [ogImage, setOgImage] = useState(initialData.ogImage || "");

// UI state
  const [showCategoriesDropdown, setShowCategoriesDropdown] = useState(false);
  const [showCategoryQuickActions, setShowCategoryQuickActions] = useState(false);
  const [saving, setSaving] = useState(false);
  const [categoryError, setCategoryError] = useState("");

  const handleTitleChange = (val) => {
    setTitle(val);
    if (!slugEdited) {
      setSlug(slugify(val, { lower: true, strict: true }));
    }
  };

  const handleFeaturedImageUpload = async (file) => {
    try {
      const uploaded = await uploadImage(file);
      setCurrentFeaturedImage(uploaded.$id);
      setFeaturedImage(file);
      alert("Featured image uploaded");
    } catch (err) {
      alert(err.message);
    }
  };

const handleSubmit = async (e) => {
    e.preventDefault();

    // Require at least one category before creating/publishing a post.
    if (selectedCategories.length === 0) {
      setCategoryError("Please select at least one category before creating the post.");
      setShowCategoriesDropdown(true);
      setSaving(false);
      return;
    }
    setCategoryError("");

    setSaving(true);
    try {
      const finalSlug = slug || slugify(title, { lower: true, strict: true }) || `post-${Date.now()}`;
      const finalDate = publishDate || new Date().toISOString().split("T")[0];

const payload = {
        title: title.trim() || "Untitled Post",
        slug: finalSlug,
        status,
        featured,
        publishedAt: new Date(finalDate).toISOString(),
        content,
        blocks: JSON.stringify(blocks),
        excerpt: excerpt || stripHtml(content).slice(0, 300) || cleanText(content).slice(0, 300),
        featuredImage: currentFeaturedImage,
        authorName,
        authorBio,
        authorImage,
        categories: selectedCategories.join(", "),
        tags,
        seoTitle,
        seoDescription,
        focusKeyword,
        canonicalUrl,
        noindex,
        ogTitle,
        ogDescription,
        ogImage,
      };

      // Keep legacy blog_* fields for backward compatibility
      payload.blog_Heading = title.trim();
      payload.blog_date = finalDate;
      payload.blog_des = content;
      payload.blog_publish = authorName || "Ownadz";

      await onSubmit(payload);
    } catch (err) {
      alert(err.message);
    }
    setSaving(false);
  };

const toggleCategory = (slug) => {
    setSelectedCategories((prev) =>
      prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug]
    );
    if (categoryError) setCategoryError("");
  };

  const featuredImagePreview = currentFeaturedImage
    ? currentFeaturedImage.startsWith("http")
      ? currentFeaturedImage
      : getImagePreview(currentFeaturedImage)
    : null;

  return (
    <form onSubmit={handleSubmit} className="max-w-7xl mx-auto">
      {/* Top bar */}
      <div className="sticky top-0 z-20 bg-white border-b border-slate-200 px-6 py-3 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onCancel || (() => router.push("/admin/posts"))}
            className="p-2 text-slate-500 hover:text-black hover:bg-slate-100 rounded-lg"
            title="Back to posts"
          >
            <FaArrowLeft />
          </button>
          <div>
            <div className="flex items-center gap-2">
              <span
                className={`inline-flex items-center gap-1.5 text-[11px] font-bold px-2.5 py-0.5 rounded-full ${
                  status === "published" ? "bg-emerald-100 text-emerald-700" : "bg-amber-100 text-amber-700"
                }`}
              >
                <FaCheck size={9} /> {status === "published" ? "Published" : "Draft"}
              </span>
<span className="text-xs text-slate-400">
                {slug && (
                  <Link
                    href={selectedCategories.length ? `/blog/${selectedCategories[0]}/${slug}` : `/blog/${slug}`}
                    target="_blank"
                    className="hover:text-[#ffbd59]"
                  >
                    /blog/{selectedCategories.length ? `${selectedCategories[0]}/` : ""}{slug}/
                  </Link>
                )}
              </span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {slug && (
            <Link
              href={selectedCategories.length ? `/blog/${selectedCategories[0]}/${slug}` : `/blog/${slug}`}
              target="_blank"
              className="flex items-center gap-2 text-xs font-bold px-4 py-2 rounded-lg border border-slate-300 text-slate-700 hover:border-black hover:text-black transition-all"
            >
              <FaEye /> Preview
            </Link>
          )}
          <button
            type="submit"
            disabled={saving}
            className="flex items-center gap-2 bg-black text-white text-xs font-black px-6 py-2.5 rounded-lg hover:bg-slate-800 transition-all disabled:opacity-50"
          >
            <FaSave /> {saving ? "Saving..." : submitLabel || (mode === "edit" ? "Update" : "Publish")}
          </button>
        </div>
      </div>

      {/* Body grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-6 items-start">
        {/* LEFT: Main column */}
        <div className="lg:col-span-8 space-y-6">
          {/* Title */}
          <input
            type="text"
            value={title}
            onChange={(e) => handleTitleChange(e.target.value)}
            placeholder="Enter title here"
            className="w-full text-3xl sm:text-4xl font-black text-slate-950 border border-slate-200 rounded-xl px-5 py-4 placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-[#ffbd59]/40 focus:border-[#ffbd59]"
          />

          {/* Permalink bar */}
          <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5">
            <span className="text-sm text-slate-500">
              https://ownadz.com/blog/
              {selectedCategories.length > 0 && (
                <span className="text-[#d97706] font-medium">
                  {selectedCategories[0]}/
                </span>
              )}
            </span>
            <div className="flex items-center gap-1 flex-1">
              <input
                type="text"
                value={slug}
                onChange={(e) => {
                  setSlug(e.target.value);
                  setSlugEdited(true);
                }}
                className="flex-1 bg-transparent text-sm font-medium text-slate-900 focus:outline-none border-b border-dashed border-slate-300 focus:border-[#ffbd59]"
              />
              {slugEdited && (
                <button
                  type="button"
                  onClick={() => {
                    setSlug(slugify(title, { lower: true, strict: true }));
                    setSlugEdited(false);
                  }}
                  className="text-xs text-slate-400 hover:text-[#ffbd59]"
                  title="Edit slug"
                >
                  <FaEdit />
                </button>
              )}
            </div>
          </div>

          {/* Content tabs */}
          <div className="flex gap-2">
            {[
              { key: "classic", label: "Classic Editor" },
              { key: "blocks", label: "Blocks (Elementor)" },
            ].map((t) => (
              <button
                key={t.key}
                type="button"
                onClick={() => setActiveTab(t.key)}
                className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${
                  activeTab === t.key ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          {activeTab === "classic" && (
            <div className="border border-slate-200 rounded-2xl overflow-hidden bg-white">
              <div className="bg-slate-50 border-b border-slate-200 px-4 py-2.5">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Rich text editor — TinyMCE
                </span>
              </div>
              <div className="p-4">
                <TinyEditor value={content} onEditorChange={setContent} />
              </div>
            </div>
          )}

          {activeTab === "blocks" && (
            <BlockBuilder value={blocks} onChange={setBlocks} />
          )}

          {/* Excerpt */}
          <div className="border border-slate-200 rounded-2xl overflow-hidden bg-white">
            <div className="bg-slate-50 border-b border-slate-200 px-4 py-2.5">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Excerpt</span>
            </div>
            <textarea
              value={excerpt}
              onChange={(e) => setExcerpt(e.target.value)}
              rows={3}
              placeholder="Write a short excerpt shown on the blog listing page. Leave empty to auto-generate from content."
              className="w-full p-4 text-sm text-slate-800 placeholder:text-slate-300 focus:outline-none"
            />
          </div>
        </div>

        {/* RIGHT: Sidebar */}
        <div className="lg:col-span-4 space-y-5">
          {/* Publish box */}
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
            <div className="px-4 py-3 bg-slate-50 border-b border-slate-200 font-bold text-sm text-slate-900">
              Publish
            </div>
            <div className="p-4 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-slate-600">Status</span>
                <select
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  className="border border-slate-300 rounded-lg px-3 py-1.5 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#ffbd59]/40"
                >
                  <option value="draft">Draft</option>
                  <option value="published">Published</option>
                </select>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-slate-600 flex items-center gap-2">
                  <FaCalendarAlt className="text-slate-400" /> Publish date
                </span>
                <input
                  type="date"
                  value={publishDate}
                  onChange={(e) => setPublishDate(e.target.value)}
                  className="border border-slate-300 rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#ffbd59]/40"
                />
              </div>

              <label className="flex items-center justify-between bg-slate-50 rounded-xl p-3 cursor-pointer">
                <span className="text-sm font-medium text-slate-700">Featured post</span>
                <input
                  type="checkbox"
                  checked={featured}
                  onChange={(e) => setFeatured(e.target.checked)}
                  className="w-4 h-4 accent-[#ffbd59]"
                />
              </label>

              <button
                type="submit"
                disabled={saving}
                className="w-full bg-[#ffbd59] hover:bg-black text-black hover:text-[#ffbd59] font-bold text-sm py-2.5 rounded-lg transition-all disabled:opacity-50"
              >
                {saving ? "Saving..." : submitLabel || (mode === "edit" ? "Update Post" : "Publish Post")}
              </button>
            </div>
          </div>

          {/* Categories */}
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
<div className="px-4 py-3 bg-slate-50 border-b border-slate-200 font-bold text-sm text-slate-900 flex items-center justify-between">
              <span>
                Categories <span className="text-red-500">*</span>
              </span>
              <div className="flex items-center gap-2">
                {onRefreshCategories && (
                  <button
                    type="button"
                    onClick={onRefreshCategories}
                    title="Refresh categories"
                    className="p-1.5 text-slate-400 hover:text-[#ffbd59] rounded-md transition-colors"
                  >
                    <FaSyncAlt className={categoriesLoading ? "animate-spin" : ""} size={11} />
                  </button>
                )}
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setShowCategoryQuickActions((prev) => !prev)}
                    className="inline-flex items-center justify-center rounded-md border border-slate-200 bg-white p-1.5 text-[#ffbd59] hover:border-[#ffbd59] hover:text-black transition-colors"
                    title="Category actions"
                  >
                    <FaPlus size={10} />
                  </button>

                  {showCategoryQuickActions && (
                    <div className="absolute right-0 z-20 mt-2 w-40 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-lg">
                      <Link
                        href="/admin/categories/create"
                        onClick={() => setShowCategoryQuickActions(false)}
                        className="flex items-center gap-2 px-3 py-2 text-sm text-slate-700 hover:bg-slate-50"
                      >
                        <FaPlus size={10} /> Create
                      </Link>
                      <Link
                        href="/admin/categories"
                        onClick={() => setShowCategoryQuickActions(false)}
                        className="flex items-center gap-2 px-3 py-2 text-sm text-slate-700 hover:bg-slate-50"
                      >
                        <FaList size={10} /> List
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="p-4">
              <button
                type="button"
                onClick={() => setShowCategoriesDropdown(!showCategoriesDropdown)}
                className="w-full text-left text-sm bg-slate-50 border border-slate-200 rounded-lg px-3 py-2.5 flex items-center justify-between"
              >
                <span className={selectedCategories.length ? "text-slate-900" : "text-slate-400"}>
                  {categoriesLoading
                    ? "Loading..."
                    : selectedCategories.length
                    ? `${selectedCategories.length} selected`
                    : "Select categories"}
                </span>
                <span className="text-slate-400">{showCategoriesDropdown ? "−" : "+"}</span>
              </button>

              {categoryError && (
                <div className="mt-2 flex items-start gap-2 bg-red-50 border border-red-200 rounded-lg px-3 py-2.5">
                  <span className="text-red-500 font-bold text-sm leading-5">
                    {categoryError}
                  </span>
                </div>
              )}

              {showCategoriesDropdown && (
                <div className="mt-2 space-y-1.5 max-h-48 overflow-y-auto">
                  {categories.map((cat) => (
                    <label
                      key={cat.$id}
                      className="flex items-center gap-2 px-2 py-1.5 rounded-lg hover:bg-slate-50 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={selectedCategories.includes(cat.slug)}
                        onChange={() => toggleCategory(cat.slug)}
                        className="w-4 h-4 accent-[#ffbd59]"
                      />
                      <span className="text-sm text-slate-700">{cat.title}</span>
                      <span className="text-xs text-slate-400 ml-auto">/{cat.slug}</span>
                    </label>
                  ))}
                  {categories.length === 0 && (
                    <p className="text-xs text-slate-400 px-2 py-1">
                      {categoriesLoading ? "Loading categories..." : "No categories yet."}
                    </p>
                  )}
                </div>
              )}

              {selectedCategories.length > 0 && (
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {selectedCategories.map((slug) => {
                    const cat = categories.find((c) => c.slug === slug);
                    const label = cat ? cat.title : slug;
                    return (
                      <span
                        key={slug}
                        className="inline-flex items-center gap-1 bg-[#ffbd59]/20 text-slate-800 text-xs font-semibold px-2.5 py-1 rounded-full"
                      >
                        {label}
                        <button
                          type="button"
                          onClick={() => toggleCategory(slug)}
                          className="text-slate-500 hover:text-red-600"
                        >
                          <FaTimes size={9} />
                        </button>
                      </span>
                    );
                  })}
                </div>
              )}
            </div>
          </div>

          {/* Tags */}
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
            <div className="px-4 py-3 bg-slate-50 border-b border-slate-200 font-bold text-sm text-slate-900">
              Tags
            </div>
            <div className="p-4">
              <input
                type="text"
                value={tags}
                onChange={(e) => setTags(e.target.value)}
                placeholder="Comma separated tags, e.g. seo, marketing"
                className="w-full text-sm border border-slate-300 rounded-lg px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#ffbd59]/40"
              />
            </div>
          </div>

          {/* Featured image */}
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
            <div className="px-4 py-3 bg-slate-50 border-b border-slate-200 font-bold text-sm text-slate-900 flex items-center gap-2">
              <FaImage className="text-slate-400" /> Featured image
            </div>
            <div className="p-4 space-y-3">
              {featuredImagePreview && (
                <div className="relative rounded-xl overflow-hidden border border-slate-200">
                  <img src={featuredImagePreview} alt="Featured" className="w-full h-40 object-cover" />
                  <button
                    type="button"
                    onClick={() => {
                      setCurrentFeaturedImage("");
                      setFeaturedImage(null);
                    }}
                    className="absolute top-2 right-2 w-7 h-7 rounded-full bg-black/70 text-white flex items-center justify-center hover:bg-red-600 transition-colors"
                  >
                    <FaTrash size={11} />
                  </button>
                </div>
              )}

              <MediaLibraryPicker
                label="Featured image"
                modal={true}
                triggerLabel="Select featured image"
                value={currentFeaturedImage || ""}
                onChange={(fileId) => {
                  setCurrentFeaturedImage(fileId || "");
                  if (!fileId) setFeaturedImage(null);
                }}
              />
            </div>
          </div>

          {/* Author */}
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
            <div className="px-4 py-3 bg-slate-50 border-b border-slate-200 font-bold text-sm text-slate-900 flex items-center gap-2">
              <FaUser className="text-slate-400" /> Author
            </div>
            <div className="p-4 space-y-3">
              <input
                type="text"
                value={authorName}
                onChange={(e) => setAuthorName(e.target.value)}
                placeholder="Author name"
                className="w-full text-sm border border-slate-300 rounded-lg px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#ffbd59]/40"
              />
              <textarea
                value={authorBio}
                onChange={(e) => setAuthorBio(e.target.value)}
                rows={3}
                placeholder="Author bio"
                className="w-full text-sm border border-slate-300 rounded-lg px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#ffbd59]/40 resize-none"
              />
              <input
                type="text"
                value={authorImage}
                onChange={(e) => setAuthorImage(e.target.value)}
                placeholder="Author image URL"
                className="w-full text-sm border border-slate-300 rounded-lg px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#ffbd59]/40"
              />
            </div>
          </div>

          {/* SEO */}
          <YoastSeoPanel
            seoTitle={seoTitle}
            setSeoTitle={setSeoTitle}
            seoDescription={seoDescription}
            setSeoDescription={setSeoDescription}
            focusKeyword={focusKeyword}
            setFocusKeyword={setFocusKeyword}
            content={`${content} ${stripHtml(excerpt)}`}
            title={title}
            slug={slug}
            setCanonicalUrl={setCanonicalUrl}
            setNoindex={setNoindex}
            setOgTitle={setOgTitle}
            setOgDescription={setOgDescription}
            setOgImage={setOgImage}
            canonicalUrl={canonicalUrl}
            noindex={noindex}
            ogTitle={ogTitle}
            ogDescription={ogDescription}
            ogImage={ogImage || featuredImagePreview}
          />
        </div>
      </div>
    </form>
  );
}

