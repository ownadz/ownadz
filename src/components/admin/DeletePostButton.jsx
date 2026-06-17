"use client";

import { useRouter } from "next/navigation";

import { deletePost } from "@/services/postService";

export default function DeletePostButton({ id }) {
  const router = useRouter();

  const handleDelete = async () => {
    if (!confirm("Delete Post?")) return;

    await deletePost(id);

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

