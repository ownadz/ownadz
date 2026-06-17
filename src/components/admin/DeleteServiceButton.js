"use client";

import { useRouter } from "next/navigation";
import { deleteService } from "@/services/serviceService";

export default function DeleteServiceButton({
  id,
}) {

  const router = useRouter();

  const handleDelete = async () => {

    const confirmed = window.confirm(
      "Delete this service?"
    );

    if (!confirmed) return;

    try {

      await deleteService(id);

      router.refresh();

    } catch (error) {

      console.error(error);

      alert("Delete failed");
    }
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