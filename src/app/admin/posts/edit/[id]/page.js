"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { getPost, updatePost } from "@/services/postService";
import { getCategories } from "@/services/categoryService";
import PostEditor from "@/components/admin/PostEditor";

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

const normalizeDate = (date) => {
  if (!date) return "";
  try {
    const d = new Date(date);
    return isNaN(d.getTime()) ? "" : d.toISOString();
  } catch {
    return "";
  }
};

export default function EditPostPage() {
  const router = useRouter();
  const params = useParams();
  const postId = params?.id;

  const [post, setPost] = useState(null);
  const [categories, setCategories] = useState([]);
  const [categoriesLoading, setCategoriesLoading] = useState(true);

  useEffect(() => {
    let active = true;
    const load = async () => {
      if (!postId) return;
      try {
        const [postData, catData] = await Promise.all([
          getPost(postId),
          getCategories(),
        ]);
        if (!active) return;
        setPost({
          ...postData,
          publishedAt: normalizeDate(postData.publishedAt),
          updatedAt: normalizeDate(postData.updatedAt),
          $createdAt: normalizeDate(postData.$createdAt),
          blocks: parseBlocks(postData.blocks),
        });
        setCategories(catData.documents || []);
      } catch (err) {
        console.error("Load error:", err);
        if (active) alert(err.message);
      } finally {
        if (active) setCategoriesLoading(false);
      }
    };
    load();
    return () => {
      active = false;
    };
  }, [postId]);

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
    await updatePost(postId, payload);
    alert("Post Updated Successfully");
    await fetch("/api/revalidate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: "/admin/posts" }),
    });
    router.push("/admin/posts");
  };

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <p className="animate-pulse text-sm font-medium text-slate-500">Loading post...</p>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="bg-white border-b border-slate-200 px-6 py-4">
        <h1 className="text-2xl font-black text-slate-900">Edit Post</h1>
      </div>
      <PostEditor
        mode="edit"
        initialData={post}
        categories={categories}
        categoriesLoading={categoriesLoading}
        onRefreshCategories={handleRefreshCategories}
        onSubmit={handleSubmit}
        submitLabel="Update"
        onCancel={() => router.push("/admin/posts")}
      />
    </div>
  );
}

