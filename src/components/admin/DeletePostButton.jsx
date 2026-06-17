"use client";

import { useRouter } from "next/navigation";

import { deletePost } from "@/services/postService";

export default function DeletePostButton({ id }) {
  const router = useRouter();

  const handleDelete = async () => {
    if (!confirm("Delete Post?")) return;

    await deletePost(id);

    await fetch("/api/revalidate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: "/admin/posts" }),
    });

    router.refresh();
  };

  return (
    <button
      onClick={handleDelete}
      className="text-red-600"
    >
      Delete
    </button>
  );
}

