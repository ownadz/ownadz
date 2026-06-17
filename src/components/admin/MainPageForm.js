"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import TinyEditor from "@/components/editor/TinyEditor";

import { createPage, updatePage } from "@/services/pageService";

export default function MainPageForm({
  mode = "create", // "create" | "edit"
  page = null,
}) {
  const router = useRouter();

  const [title, setTitle] = useState(page?.title || "");
  const [slug, setSlug] = useState(page?.slug || "about");
  const [content, setContent] = useState(page?.content || "");
  // these are stored in the same document fields used by homepage
  const [seoTitle, setSeoTitle] = useState(page?.seoTitle || "");
  const [seoDescription, setSeoDescription] = useState(page?.seoDescription || "");

  const [status, setStatus] = useState(page?.status || "published");

  // Use homepage collection fields directly (same DB collection attributes)
  const [heroTitle, setHeroTitle] = useState(page?.heroTitle || "");
  const [heroDescription, setHeroDescription] = useState(page?.heroDescription || "");
  const [heroButtonText, setHeroButtonText] = useState(page?.heroButtonText || "");
  const [heroButtonLink, setHeroButtonLink] = useState(page?.heroButtonLink || "");
  const [seoTitleField, setSeoTitleField] = useState(page?.seoTitle || "");
  const [seoDescriptionField, setSeoDescriptionField] = useState(page?.seoDescription || "");
  const [seoKeywords, setSeoKeywords] = useState(page?.seoKeywords || "");

  const [faqsRaw, setFaqsRaw] = useState(
    page?.faqsRaw || JSON.stringify(page?.faqs || [], null, 2)
  );



  const handleSubmit = async (e) => {
    e.preventDefault();

    // pages collection only supports: title, slug, content, seoTitle, seoDescription, status
    // store homepage-like fields/FAQs safely inside `content`.
    let faqs = [];
    try {
      const parsed = JSON.parse(faqsRaw || "[]");
      if (Array.isArray(parsed)) faqs = parsed;
    } catch {
      // keep empty
    }

    const payload = {
      title,
      slug,
      status,
      seoTitle: seoTitleField,
      seoDescription: seoDescriptionField,

      content: JSON.stringify(
        {
          content,
          heroTitle,
          heroDescription,
          heroButtonText,
          heroButtonLink,
          seoKeywords,
          faqs,
        },
        null,
        2
      ),
    };


    if (mode === "edit" && page?.$id) {
      await updatePage(page.$id, payload);
    } else {
      await createPage(payload);
    }

    router.push("/admin/pages");
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 space-y-4">
      <h1 className="text-3xl font-bold">
        {mode === "edit" ? "Edit Main Page" : "Create Main Page"}
      </h1>

      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Page Title"
        className="border p-2 w-full"
      />

      <input
        value={slug}
        onChange={(e) => setSlug(e.target.value)}
        placeholder="Slug (for /about use: about)"
        className="border p-2 w-full"
      />

      <div className="border rounded p-4">
        <h2 className="text-xl font-semibold mb-3">Homepage-like Fields</h2>

        <input
          value={heroTitle}
          onChange={(e) => setHeroTitle(e.target.value)}
          placeholder="Hero Title"
          className="border p-2 w-full mb-3"
        />

        <textarea
          value={heroDescription}
          onChange={(e) => setHeroDescription(e.target.value)}
          placeholder="Hero Description"
          className="border p-2 w-full mb-3"
          rows={4}
        />

        <input
          value={heroButtonText}
          onChange={(e) => setHeroButtonText(e.target.value)}
          placeholder="Hero Button Text"
          className="border p-2 w-full mb-3"
        />

        <input
          value={heroButtonLink}
          onChange={(e) => setHeroButtonLink(e.target.value)}
          placeholder="Hero Button Link"
          className="border p-2 w-full mb-3"
        />

        <input
          value={seoKeywords}
          onChange={(e) => setSeoKeywords(e.target.value)}
          placeholder="SEO Keywords"
          className="border p-2 w-full mb-3"
        />

        <textarea
          value={faqsRaw}
          onChange={(e) => setFaqsRaw(e.target.value)}
          placeholder='FAQs JSON: [{"question":"...","answer":"..."}]'
          className="border p-2 w-full mb-3"
          rows={6}
        />
      </div>

      <TinyEditor value={content} onEditorChange={setContent} />

      <input
        value={seoTitleField}
        onChange={(e) => setSeoTitleField(e.target.value)}
        placeholder="SEO Title"
        className="border p-2 w-full"
      />

      <textarea
        value={seoDescriptionField}
        onChange={(e) => setSeoDescriptionField(e.target.value)}
        placeholder="SEO Description"
        className="border p-2 w-full"
        rows={3}
      />


      <div>
        <label className="mr-3">Status</label>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="border p-2"
        >
          <option value="published">published</option>
          <option value="draft">draft</option>
        </select>
      </div>

      <button className="bg-black text-white px-5 py-2 rounded">
        {mode === "edit" ? "Update" : "Create"}
      </button>
    </form>
  );
}

