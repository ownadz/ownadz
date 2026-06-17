"use client";

import { useRouter } from "next/navigation";
import { deleteMainPage } from "@/services/mainPageManagementService";

export default function DeleteMainPageButton({ id }) {
  const router = useRouter();

  const handleDelete = async () => {
    if (!window.confirm("Are you sure you want to delete this main page?")) {
      return;
    }

    try {
      await deleteMainPage(id);
      alert("Main page deleted successfully!");
      router.refresh();
    } catch (error) {
      alert("Failed to delete main page: " + error.message);
      console.error("Delete error:", error);
    }
  };

  return (
    <button
      onClick={handleDelete}
      className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 text-sm"
    >
      Delete
    </button>
  );
}
