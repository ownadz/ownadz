"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { createPage } from "@/services/pageService";
import TinyEditor from "@/components/editor/TinyEditor";

export default function CreatePage() {

  const router = useRouter();

  const [title, setTitle] =
    useState("");

  const [slug, setSlug] =
    useState("");

  const [content, setContent] =
    useState("");

  const [seoTitle, setSeoTitle] =
    useState("");

  const [seoDescription,
    setSeoDescription] =
    useState("");

  const [status, setStatus] =
    useState("published");

  const handleSubmit = async (e) => {

    e.preventDefault();

    await createPage({
      title,
      slug,
      content,
      seoTitle,
      seoDescription,
      status,
    });

    await fetch("/api/revalidate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: "/admin/pages" }),
    });

    router.push(
      "/admin/pages"
    );
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6"
    >

      <input
        placeholder="Title"
        value={title}
        onChange={(e)=>
          setTitle(e.target.value)
        }
        className="border p-2 w-full mb-4"
      />

      <input
        placeholder="Slug"
        value={slug}
        onChange={(e)=>
          setSlug(e.target.value)
        }
        className="border p-2 w-full mb-4"
      />

      <TinyEditor
        value={content}
        onEditorChange={setContent}
      />

      <input
        placeholder="SEO Title"
        value={seoTitle}
        onChange={(e)=>
          setSeoTitle(e.target.value)
        }
        className="border p-2 w-full my-4"
      />

      <textarea
        placeholder="SEO Description"
        value={seoDescription}
        onChange={(e)=>
          setSeoDescription(
            e.target.value
          )
        }
        className="border p-2 w-full mb-4"
      />

      <button
        className="bg-black text-white px-5 py-2 rounded"
      >
        Create Page
      </button>

    </form>
  );
}