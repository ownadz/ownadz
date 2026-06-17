"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import {
  updateCategory,
} from "@/services/categoryService";

export default function EditCategoryForm({
  category,
}) {

  const router = useRouter();

  const [title, setTitle] =
    useState(category.title);

  const [slug, setSlug] =
    useState(category.slug);

  const [description,
    setDescription] =
    useState(
      category.description
    );

  const [status, setStatus] =
    useState(
      category.status
    );

  const handleSubmit = async (e) => {

    e.preventDefault();

    await updateCategory(
      category.$id,
      {
        title,
        slug,
        description,
        status,
      }
    );

    alert(
      "Category Updated"
    );

    router.push(
      "/admin/categories"
    );
  };

  return (
    <div className="p-6 max-w-3xl">

      <h1 className="text-3xl font-bold mb-6">
        Edit Category
      </h1>

      <form
        onSubmit={handleSubmit}
      >

        <input
          type="text"
          value={title}
          onChange={(e)=>
            setTitle(
              e.target.value
            )
          }
          className="border p-3 w-full mb-4"
          placeholder="Title"
        />

        <input
          type="text"
          value={slug}
          onChange={(e)=>
            setSlug(
              e.target.value
            )
          }
          className="border p-3 w-full mb-4"
          placeholder="Slug"
        />

        <textarea
          value={description}
          onChange={(e)=>
            setDescription(
              e.target.value
            )
          }
          className="border p-3 w-full mb-4"
          rows="5"
          placeholder="Description"
        />

        <select
          value={status}
          onChange={(e)=>
            setStatus(
              e.target.value
            )
          }
          className="border p-3 w-full mb-4"
        >

          <option value="active">
            Active
          </option>

          <option value="inactive">
            Inactive
          </option>

        </select>

        <button
          type="submit"
          className="bg-blue-600 text-white px-5 py-2 rounded"
        >
          Update Category
        </button>

      </form>

    </div>
  );
}