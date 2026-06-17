"use client";

import { useRouter } from "next/navigation";
import { deleteCategory } from "@/services/categoryService";

export default function DeleteCategoryButton({
  id,
}) {

  const router = useRouter();

  const handleDelete = async () => {

    const confirmed =
      confirm(
        "Delete this category?"
      );

    if (!confirmed) return;

    await deleteCategory(id);

    await fetch("/api/revalidate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: "/admin/categories" }),
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