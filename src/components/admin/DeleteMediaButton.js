"use client";

import { deleteImage } from "@/services/storageService";
import { useRouter } from "next/navigation";

export default function DeleteMediaButton({
  fileId,
}) {

  const router = useRouter();

  const handleDelete = async () => {

    const confirmed =
      confirm(
        "Delete Image?"
      );

    if (!confirmed) return;

    await deleteImage(fileId);

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