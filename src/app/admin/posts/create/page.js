"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { createPost } from "@/services/postService";
import { getCategories } from "@/services/categoryService";
import PostEditor from "@/components/admin/PostEditor";

export default function CreatePostPage() {
  const router = useRouter();
  const [categories, setCategories] = useState([]);
  const [categoriesLoading, setCategoriesLoading] = useState(true);

  useEffect(() => {
    let active = true;
    const loadCategories = async () => {
      try {
        const response = await getCategories();
        if (active) setCategories(response.documents || []);
      } catch (err) {
        console.error("Load categories error:", err);
      } finally {
        if (active) setCategoriesLoading(false);
      }
    };
    loadCategories();
    return () => {
      active = false;
    };
  }, []);

  const handleRefreshCategories = async () => {
    setCategoriesLoading(true);
    try {
      const response = await getCategories();
      setCategories(response.documents || []);
    } catch (err) {
      console.error("Load categories error:", err);
    } finally {
      setCategoriesLoading(false);
    }
  };

  const handleSubmit = async (payload) => {
    await createPost(payload);
    alert("Post Created Successfully");
    await fetch("/api/revalidate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: "/admin/posts" }),
    });
    router.push("/admin/posts");
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="bg-white border-b border-slate-200 px-6 py-4">
        <h1 className="text-2xl font-black text-slate-900">Add New Post</h1>
      </div>
      <PostEditor
        mode="create"
        categories={categories}
        categoriesLoading={categoriesLoading}
        onRefreshCategories={handleRefreshCategories}
        onSubmit={handleSubmit}
        submitLabel="Publish"
        onCancel={() => router.push("/admin/posts")}
      />
    </div>
  );
}

