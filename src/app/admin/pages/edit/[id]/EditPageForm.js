"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import TinyEditor from "@/components/editor/TinyEditor";

import {
  updatePage,
} from "@/services/pageService";

export default function EditPageForm({
  page,
}) {

  const router = useRouter();

  const [title, setTitle] =
    useState(page.title);

  const [slug, setSlug] =
    useState(page.slug);

  const [content, setContent] =
    useState(page.content);

  const [seoTitle, setSeoTitle] =
    useState(page.seoTitle);

  const [seoDescription,
    setSeoDescription] =
    useState(page.seoDescription);

  const [status, setStatus] =
    useState(page.status);

  const handleSubmit = async (e) => {

    e.preventDefault();

    await updatePage(
      page.$id,
      {
        title,
        slug,
        content,
        seoTitle,
        seoDescription,
        status,
      }
    );

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
        value={title}
        onChange={(e)=>
          setTitle(e.target.value)
        }
        className="border p-2 w-full mb-4"
      />

      <input
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
        value={seoTitle}
        onChange={(e)=>
          setSeoTitle(e.target.value)
        }
        className="border p-2 w-full my-4"
      />

      <textarea
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
        Update Page
      </button>

    </form>
  );
}