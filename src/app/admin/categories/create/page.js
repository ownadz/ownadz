"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import slugify from "slugify";
import { Query } from "appwrite";
import { createCategory, getCategories } from "@/services/categoryService";
import MediaLibraryPicker from "@/components/admin/MediaLibraryPicker";
import { FaArrowLeft } from "react-icons/fa";

const getCategorySortQuery = (sortBy, sortOrder) => {
  if (sortBy === "slug") {
    return sortOrder === "asc" ? [Query.orderAsc("slug")] : [Query.orderDesc("slug")];
  }

  if (sortBy === "date") {
    return sortOrder === "asc" ? [Query.orderAsc("$createdAt")] : [Query.orderDesc("$createdAt")];
  }

  return sortOrder === "asc" ? [Query.orderAsc("title")] : [Query.orderDesc("title")];
};

export default function CreateCategory() {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("active");
  const [image, setImage] = useState("");
  const [imageAlt, setImageAlt] = useState("");
  const [imageTitle, setImageTitle] = useState("");
  const [categoryList, setCategoryList] = useState([]);
  const [categoryListLoading, setCategoryListLoading] = useState(true);
  const [sortBy, setSortBy] = useState("title");
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    let active = true;

    const loadCategories = async () => {
      setCategoryListLoading(true);
      try {
        const response = await getCategories(getCategorySortQuery(sortBy, sortOrder));
        if (active) {
          setCategoryList(response.documents || []);
        }
      } catch (error) {
        console.error("Load categories error:", error);
        if (active) {
          setCategoryList([]);
        }
      } finally {
        if (active) {
          setCategoryListLoading(false);
        }
      }
    };

    loadCategories();

    return () => {
      active = false;
    };
  }, [sortBy, sortOrder]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const cleanTitle = title.trim();
    if (!cleanTitle) {
      alert("Category title is required.");
      return;
    }

    const finalSlug = (slug.trim() || slugify(cleanTitle, { lower: true, strict: true }) || `category-${Date.now()}`).toLowerCase();

    try {
      await createCategory({
        title: cleanTitle,
        slug: finalSlug,
        description: description.trim(),
        status,
        image,
        imageAlt,
        imageTitle,
      });

      await fetch("/api/revalidate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ path: "/admin/categories" }),
      });

      router.push("/admin/categories");
    } catch (err) {
      alert(err?.message || "Category creation failed.");
    }
  };

  return (
    <div className="p-6">
      <div className="mx-auto max-w-5xl space-y-8">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => router.push("/admin/categories")}
            className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700 hover:border-slate-400 hover:bg-slate-50"
          >
            <FaArrowLeft size={12} /> Back
          </button>
          <h1 className="text-3xl font-bold text-slate-900">Add Category</h1>
        </div>

        <form onSubmit={handleSubmit} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="md:col-span-2">
              <label className="mb-2 block text-sm font-semibold text-slate-700">Category Title</label>
              <input
                placeholder="Category Title"
                className="w-full border border-slate-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-slate-200"
                value={title}
                onChange={(e) => {
                  const nextTitle = e.target.value;
                  setTitle(nextTitle);
                  if (!slug.trim()) {
                    setSlug(slugify(nextTitle, { lower: true, strict: true }));
                  }
                }}
              />
            </div>

            <div className="md:col-span-2">
              <label className="mb-2 block text-sm font-semibold text-slate-700">Slug</label>
              <input
                placeholder="Slug"
                className="w-full border border-slate-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-slate-200"
                value={slug}
                onChange={(e) => setSlug(e.target.value)}
              />
            </div>

            <div className="md:col-span-2">
              <label className="mb-2 block text-sm font-semibold text-slate-700">Description</label>
              <textarea
                placeholder="Description"
                className="w-full border border-slate-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-slate-200"
                rows="5"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <div className="md:col-span-2">
              <label className="mb-2 block text-sm font-semibold text-slate-700">Status</label>
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="w-full border border-slate-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-slate-200"
              >
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <MediaLibraryPicker
                label="Category image"
                value={image}
                onChange={setImage}
                altValue={imageAlt}
                onAltChange={setImageAlt}
                titleValue={imageTitle}
                onTitleChange={setImageTitle}
              />
            </div>
          </div>

          <div className="mt-6 flex items-center gap-3">
            <button type="submit" className="rounded-lg bg-black px-5 py-2.5 font-semibold text-white hover:bg-slate-800">
              Create Category
            </button>
          </div>
        </form>

        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="flex flex-col gap-3 border-b border-slate-200 bg-slate-50 px-4 py-3 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-lg font-bold text-slate-900">Categories</h2>
              <p className="text-sm text-slate-500">{categoryList.length} total</p>
            </div>

            <div className="flex items-center gap-2">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-200"
              >
                <option value="title">Name</option>
                <option value="slug">Slug</option>
                <option value="date">Date</option>
              </select>

              <button
                type="button"
                onClick={() => setSortOrder((current) => (current === "asc" ? "desc" : "asc"))}
                className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
              >
                {sortOrder === "asc" ? "Ascending" : "Descending"}
              </button>
            </div>
          </div>

          <div className="divide-y divide-slate-200">
            {categoryListLoading ? (
              <div className="p-6 text-center text-sm text-slate-500">Loading categories...</div>
            ) : categoryList.length === 0 ? (
              <div className="p-6 text-center text-sm text-slate-500">No categories found yet.</div>
            ) : (
              categoryList.map((category) => (
                <div key={category.$id} className="flex flex-col gap-3 px-4 py-3 md:flex-row md:items-center md:justify-between">
                  <div>
                    <div className="font-semibold text-slate-800">{category.title}</div>
                    <div className="text-sm text-slate-500">/{category.slug}</div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="rounded-full bg-emerald-100 px-2 py-1 text-[11px] font-semibold uppercase tracking-wide text-emerald-700">
                      {category.status || "active"}
                    </span>
                    <Link
                      href={`/admin/categories/edit/${category.$id}`}
                      className="rounded bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-blue-700"
                    >
                      Edit
                    </Link>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

