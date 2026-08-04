"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getPosts } from "@/services/postService";
import { deletePost } from "@/services/postService";
import { getImagePreview } from "@/services/storageService";
import { getPostUrl } from "@/utils/blog";
import { FaPlus, FaEye, FaEdit, FaTrash } from "react-icons/fa";

const formatDate = (dateStr) => {
  if (!dateStr) return "—";
  try {
    const d = new Date(dateStr);
    if (isNaN(d.getTime())) return String(dateStr);
    return d.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  } catch {
    return String(dateStr);
  }
};

export default function PostsPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all"); // all | published | draft
  const [search, setSearch] = useState("");

  const loadPosts = async () => {
    setLoading(true);
    try {
      const response = await getPosts();
      setPosts(response.documents);
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  useEffect(() => {
    loadPosts();
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = confirm("Are you sure you want to delete this post?");
    if (!confirmDelete) return;

    try {
      await deletePost(id);
      await fetch("/api/revalidate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ path: "/admin/posts" }),
      });
      loadPosts();
      alert("Post Deleted Successfully");
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  };

  const filteredPosts = posts
    .filter((post) => (filter === "all" ? true : post.status === filter))
    .filter((post) => {
      if (!search) return true;
      const q = search.toLowerCase();
      return (
        (post.title || "").toLowerCase().includes(q) ||
        (post.slug || "").toLowerCase().includes(q)
      );
    });

  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="bg-white border-b border-slate-200 px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <h1 className="text-2xl font-black text-slate-900">Posts</h1>
        <Link
          href="/admin/posts/create"
          className="inline-flex items-center gap-2 bg-black text-white text-sm font-bold px-5 py-2.5 rounded-lg hover:bg-slate-800 transition-all"
        >
          <FaPlus /> Add New Post
        </Link>
      </div>

      <div className="p-6">
        {/* Filters */}
        <div className="bg-white border border-slate-200 rounded-xl p-4 mb-5 flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
          <div className="flex gap-1.5">
            {[
              { key: "all", label: "All" },
              { key: "published", label: "Published" },
              { key: "draft", label: "Draft" },
            ].map((f) => (
              <button
                key={f.key}
                type="button"
                onClick={() => setFilter(f.key)}
                className={`px-4 py-1.5 rounded-lg text-sm font-bold transition-all ${
                  filter === f.key ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {f.label}
                <span className="ml-1.5 text-xs opacity-70">
                  {f.key === "all"
                    ? posts.length
                    : posts.filter((p) => p.status === f.key).length}
                </span>
              </button>
            ))}
          </div>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search posts..."
            className="md:w-64 text-sm border border-slate-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#ffbd59]/40"
          />
        </div>

        {/* Table */}
        <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200">
                <th className="px-5 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider">Title</th>
                <th className="px-5 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider">Category</th>
                <th className="px-5 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider">Author</th>
                <th className="px-5 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider">Date</th>
                <th className="px-5 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider">Status</th>
                <th className="px-5 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {loading && (
                <tr>
                  <td colSpan="6" className="px-5 py-8 text-center text-sm text-slate-400">
                    Loading posts...
                  </td>
                </tr>
              )}

              {!loading && filteredPosts.length === 0 && (
                <tr>
                  <td colSpan="6" className="px-5 py-8 text-center text-sm text-slate-400">
                    No posts found.
                  </td>
                </tr>
              )}

              {filteredPosts.map((post) => (
                <tr key={post.$id} className="hover:bg-slate-50/70 transition-colors">
                  <td className="px-5 py-3">
                    <div className="flex items-center gap-3">
                      {post.featuredImage ? (
                        <img
                          src={getImagePreview(post.featuredImage)}
                          alt=""
                          className="w-14 h-10 object-cover rounded-md border border-slate-200"
                        />
                      ) : (
                        <div className="w-14 h-10 rounded-md bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-300 text-xs">
                          No img
                        </div>
                      )}
                      <div>
                        <Link
                          href={`/admin/posts/edit/${post.$id}`}
                          className="font-bold text-slate-900 hover:text-[#ffbd59] transition-colors"
                        >
                          {post.title || "Untitled"}
                        </Link>
<p className="text-xs text-slate-400 font-mono">{getPostUrl(post)}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-3">
                    <div className="flex flex-wrap gap-1">
                      {(post.categories || "").split(",").filter(Boolean).map((c) => (
                        <span
                          key={c}
                          className="inline-block bg-[#ffbd59]/20 text-slate-800 text-[11px] font-semibold px-2 py-0.5 rounded-full"
                        >
                          {c.trim()}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-5 py-3 text-sm text-slate-600">{post.authorName || post.blog_publish || "—"}</td>
                  <td className="px-5 py-3 text-sm text-slate-600">
                    {formatDate(post.publishedAt || post.blog_date || post.$createdAt)}
                  </td>
                  <td className="px-5 py-3">
                    <span
                      className={`inline-flex items-center gap-1.5 text-[11px] font-bold px-2.5 py-1 rounded-full ${
                        post.status === "published"
                          ? "bg-emerald-100 text-emerald-700"
                          : "bg-amber-100 text-amber-700"
                      }`}
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${
                          post.status === "published" ? "bg-emerald-500" : "bg-amber-500"
                        }`}
                      />
                      {post.status || "draft"}
                    </span>
                  </td>
                  <td className="px-5 py-3">
                    <div className="flex items-center justify-end gap-1">
                      <Link
                        href={getPostUrl(post)}
                        target="_blank"
                        className="p-2 text-slate-500 hover:text-green-600 hover:bg-green-50 rounded-lg"
                        title="View post"
                      >
                        <FaEye />
                      </Link>
                      <Link
                        href={`/admin/posts/edit/${post.$id}`}
                        className="p-2 text-slate-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg"
                        title="Edit post"
                      >
                        <FaEdit />
                      </Link>
                      <button
                        onClick={() => handleDelete(post.$id)}
                        className="p-2 text-slate-500 hover:text-red-600 hover:bg-red-50 rounded-lg"
                        title="Delete post"
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

