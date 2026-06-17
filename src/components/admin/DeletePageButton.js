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