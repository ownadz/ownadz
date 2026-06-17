"use client";

import { useRouter } from "next/navigation";
import { deletePage } from "@/services/pageService";

export default function DeletePageButton({
  id,
}) {

  const router = useRouter();

  const handleDelete = async () => {

    if (
      !confirm(
        "Delete Page?"
      )
    ) return;

    await deletePage(id);

    await fetch("/api/revalidate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: "/admin/pages" }),
    });

    router.refresh();
  };

  return (
    <button
      onClick={handleDelete}
      className="bg-red-600 text-white px-3 py-1 rounded"
    >
      Delete
    </button>
  );
}