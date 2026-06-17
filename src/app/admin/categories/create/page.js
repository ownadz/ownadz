"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createCategory } from "@/services/categoryService";

export default function CreateCategory() {

  const router = useRouter();

  const [title, setTitle] =
    useState("");

  const [slug, setSlug] =
    useState("");

  const [description, setDescription] =
    useState("");

  const [status, setStatus] =
    useState("active");

  const handleSubmit = async (e) => {

    e.preventDefault();

    await createCategory({
      title,
      slug,
      description,
      status,
    });

    await fetch("/api/revalidate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: "/admin/categories" }),
    });

    router.push(
      "/admin/categories"
    );
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6"
    >

      <input
        placeholder="Category Title"
        className="border p-2 w-full mb-4"
        value={title}
        onChange={(e)=>
          setTitle(e.target.value)
        }
      />

      <input
        placeholder="Slug"
        className="border p-2 w-full mb-4"
        value={slug}
        onChange={(e)=>
          setSlug(e.target.value)
        }
      />

      <textarea
        placeholder="Description"
        className="border p-2 w-full mb-4"
        value={description}
        onChange={(e)=>
          setDescription(e.target.value)
        }
      />

      <button
        className="bg-black text-white px-5 py-2 rounded"
      >
        Create Category
      </button>

    </form>
  );
}