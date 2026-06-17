"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getPosts } from "@/services/postService";
import { deletePost } from "@/services/postService";
import { getImagePreview } from "@/services/storageService";

export default function PostsPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    loadPosts();
  }, []);

  const loadPosts = async () => {
    const response = await getPosts();
    setPosts(response.documents);
  };

  const handleDelete = async (id) => {
  const confirmDelete = confirm(
    "Are you sure you want to delete this post?"
  );

  if (!confirmDelete) return;

  try {
    await deletePost(id);

    loadPosts();

    alert("Post Deleted Successfully");
  } catch (error) {
    console.error(error);
    alert(error.message);
  }
};
  return (
    <div>
      <div className="flex justify-between mb-5">
        <h1 className="text-2xl font-bold">
          Posts
        </h1>

        <Link href="/admin/posts/create">
          Create Post
        </Link>
      </div>

      {posts.map((post) => (
        <div
  key={post.$id}
  className="border p-4 mb-4 flex gap-4 items-center"
>
  {post.featuredImage && (
    <img
      src={getImagePreview(post.featuredImage)}
      alt={post.title}
      width="100"
      height="60"
      className="rounded border"
    />
  )}

  <div className="flex-1">
    <h3 className="font-bold">
      {post.title}
    </h3>

    <p>{post.slug}</p>
  </div>

  <div className="flex gap-3">
  <Link
    href={`/blog/${post.slug}`}
    target="_blank"
    className="text-green-600"
  >
    View
  </Link>

  <Link
    href={`/admin/posts/edit/${post.$id}`}
    className="text-blue-600"
  >
    Edit
  </Link>

  <button
    onClick={() => handleDelete(post.$id)}
    className="text-red-600"
  >
    Delete
  </button>
</div>
</div>
      ))}
    </div>
  );
}