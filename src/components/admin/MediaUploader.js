"use client";

import { useState } from "react";
import { uploadImage } from "@/services/storageService";
import { useRouter } from "next/navigation";

export default function MediaUploader() {

  const router = useRouter();

  const [file, setFile] =
    useState(null);

  const [loading, setLoading] =
    useState(false);

  const handleUpload = async () => {

    if (!file) return;

    setLoading(true);

    try {

      await uploadImage(file);

      alert(
        "Image Uploaded"
      );

      router.refresh();

    } catch (error) {

      alert(error.message);

    }

    setLoading(false);
  };

  return (
    <div className="mb-6">

      <input
        type="file"
        accept="image/*"
        onChange={(e)=>
          setFile(
            e.target.files[0]
          )
        }
      />

      <button
        onClick={handleUpload}
        className="bg-black text-white px-4 py-2 ml-3 rounded"
      >
        {loading
          ? "Uploading..."
          : "Upload"}
      </button>

    </div>
  );
}