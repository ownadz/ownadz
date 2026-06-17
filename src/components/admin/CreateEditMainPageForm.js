"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import TinyEditor from "@/components/editor/TinyEditor";
import {
  createMainPage,
  updateMainPage,
} from "@/services/mainPageManagementService";

export default function CreateEditMainPageForm({
  mode = "create", // "create" | "edit"
  mainPage = null,
}) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Main page fields
  const [slug, setSlug] = useState(mainPage?.slug || "");
  const [title, setTitle] = useState(mainPage?.title || "");
  const [content, setContent] = useState(mainPage?.content || "");

  // Hero section
  const [heroTitle, setHeroTitle] = useState(mainPage?.heroTitle || "");
  const [heroDescription, setHeroDescription] = useState(mainPage?.heroDescription || "");
  const [heroButtonText, setHeroButtonText] = useState(mainPage?.heroButtonText || "");
  const [heroButtonLink, setHeroButtonLink] = useState(mainPage?.heroButtonLink || "");

  // SEO fields
  const [seoTitle, setSeoTitle] = useState(mainPage?.seoTitle || "");
  const [seoDescription, setSeoDescription] = useState(mainPage?.seoDescription || "");
  const [seoKeywords, setSeoKeywords] = useState(mainPage?.seoKeywords || "");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      // Validation
      if (!slug.trim()) {
        throw new Error("Slug is required");
      }
      if (!title.trim()) {
        throw new Error("Title is required");
      }

      const payload = {
        slug: slug.toLowerCase().trim(),
        title: title.trim(),
        content,
        heroTitle,
        heroDescription,
        heroButtonText,
        heroButtonLink,
        seoTitle,
        seoDescription,
        seoKeywords,
      };

      const pageId = mainPage?.$id || mainPage?.id;
      if (mode === "edit" && pageId) {
        await updateMainPage(pageId, payload);
        alert("Main page updated successfully!");
      } else {
        await createMainPage(payload);
        alert("Main page created successfully!");
      }

      router.push("/admin/pages/main-pages");
    } catch (err) {
      setError(err.message || "An error occurred");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 space-y-4 max-w-4xl">
      <h1 className="text-3xl font-bold">
        {mode === "edit" ? "Edit Main Page" : "Create Main Page"}
      </h1>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          {error}
        </div>
      )}

      {/* Slug */}
      <div>
        <label className="block font-semibold mb-2">Slug (e.g., about, contact, services, insights)</label>
        <input
          type="text"
          value={slug}
          onChange={(e) => setSlug(e.target.value)}
          placeholder="about"
          className="border p-3 w-full rounded"
          disabled={mode === "edit"}
          title={mode === "edit" ? "Slug cannot be changed" : ""}
        />
        <p className="text-sm text-gray-600 mt-1">URL will be: /{slug}</p>
      </div>

      {/* Title */}
      <div>
        <label className="block font-semibold mb-2">Page Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="About Us"
          className="border p-3 w-full rounded"
        />
      </div>

      {/* Hero Section */}
      <div className="border rounded p-4 bg-blue-50">
        <h2 className="text-xl font-semibold mb-4">Hero Section</h2>

        <div className="space-y-4">
          <div>
            <label className="block font-semibold mb-2">Hero Title</label>
            <input
              type="text"
              value={heroTitle}
              onChange={(e) => setHeroTitle(e.target.value)}
              placeholder="Welcome to Our About Page"
              className="border p-3 w-full rounded"
            />
          </div>

          <div>
            <label className="block font-semibold mb-2">Hero Description</label>
            <textarea
              value={heroDescription}
              onChange={(e) => setHeroDescription(e.target.value)}
              placeholder="Tell your story..."
              className="border p-3 w-full rounded"
              rows={4}
            />
          </div>

          <div>
            <label className="block font-semibold mb-2">Button Text</label>
            <input
              type="text"
              value={heroButtonText}
              onChange={(e) => setHeroButtonText(e.target.value)}
              placeholder="Learn More"
              className="border p-3 w-full rounded"
            />
          </div>

          <div>
            <label className="block font-semibold mb-2">Button Link</label>
            <input
              type="text"
              value={heroButtonLink}
              onChange={(e) => setHeroButtonLink(e.target.value)}
              placeholder="/services"
              className="border p-3 w-full rounded"
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div>
        <label className="block font-semibold mb-2">Page Content</label>
        <TinyEditor value={content} onEditorChange={setContent} />
      </div>

      {/* SEO Section */}
      <div className="border rounded p-4 bg-green-50">
        <h2 className="text-xl font-semibold mb-4">SEO Settings</h2>

        <div className="space-y-4">
          <div>
            <label className="block font-semibold mb-2">SEO Title</label>
            <input
              type="text"
              value={seoTitle}
              onChange={(e) => setSeoTitle(e.target.value)}
              placeholder="About Us | Company Name"
              className="border p-3 w-full rounded"
              maxLength="60"
            />
            <p className="text-sm text-gray-600 mt-1">{seoTitle.length}/60 characters</p>
          </div>

          <div>
            <label className="block font-semibold mb-2">SEO Description</label>
            <textarea
              value={seoDescription}
              onChange={(e) => setSeoDescription(e.target.value)}
              placeholder="Learn about our company, mission, and values..."
              className="border p-3 w-full rounded"
              rows={3}
              maxLength="160"
            />
            <p className="text-sm text-gray-600 mt-1">{seoDescription.length}/160 characters</p>
          </div>

          <div>
            <label className="block font-semibold mb-2">SEO Keywords</label>
            <input
              type="text"
              value={seoKeywords}
              onChange={(e) => setSeoKeywords(e.target.value)}
              placeholder="about, company, mission, values"
              className="border p-3 w-full rounded"
            />
            <p className="text-sm text-gray-600 mt-1">Comma-separated keywords</p>
          </div>
        </div>
      </div>

      {/* Submit */}
      <div className="flex gap-2">
        <button
          type="submit"
          disabled={loading}
          className="bg-black text-white px-6 py-3 rounded disabled:opacity-50 cursor-pointer"
        >
          {loading ? "Saving..." : mode === "edit" ? "Update Main Page" : "Create Main Page"}
        </button>
        <button
          type="button"
          onClick={() => router.back()}
          className="bg-gray-400 text-white px-6 py-3 rounded"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
