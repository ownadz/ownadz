"use client";

import { useState } from "react";
import { saveSEO } from "@/services/seoService";

export default function seoForm({
  seo,
}) {

  const [siteTitle,
    setSiteTitle] =
    useState(
      seo?.siteTitle || ""
    );

  const [siteDescription,
    setSiteDescription] =
    useState(
      seo?.siteDescription || ""
    );

  const [keywords,
    setKeywords] =
    useState(
      seo?.keywords || ""
    );

  const [googleAnalytics,
    setGoogleAnalytics] =
    useState(
      seo?.googleAnalytics || ""
    );

  const [logoUrl,
    setLogoUrl] =
    useState(
      seo?.logoUrl || ""
    );

  const handleSubmit = async (
    e
  ) => {

    e.preventDefault();

    await saveSEO({
      siteTitle,
      siteDescription,
      keywords,
      googleAnalytics,
      logoUrl,
    });

    alert(
      "SEO Saved"
    );
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4"
    >

      <input
        value={siteTitle}
        onChange={(e)=>
          setSiteTitle(
            e.target.value
          )
        }
        placeholder="Site Title"
        className="border p-3 w-full"
      />

      <textarea
        value={siteDescription}
        onChange={(e)=>
          setSiteDescription(
            e.target.value
          )
        }
        placeholder="Site Description"
        className="border p-3 w-full"
      />

      <input
        value={keywords}
        onChange={(e)=>
          setKeywords(
            e.target.value
          )
        }
        placeholder="Keywords"
        className="border p-3 w-full"
      />

      <input
        value={googleAnalytics}
        onChange={(e)=>
          setGoogleAnalytics(
            e.target.value
          )
        }
        placeholder="GA Measurement ID"
        className="border p-3 w-full"
      />

      <input
        value={logoUrl}
        onChange={(e)=>
          setLogoUrl(
            e.target.value
          )
        }
        placeholder="Logo URL"
        className="border p-3 w-full"
      />

      {logoUrl && (
        <div className="flex items-center gap-3 p-3 rounded border border-gray-200">
          <img
            src={logoUrl}
            alt="Logo preview"
            className="h-12 w-auto object-contain"
          />
          <span className="text-sm text-gray-600">Logo preview</span>
        </div>
      )}

      <button
        className="bg-black text-white px-5 py-2 rounded"
      >
        Save SEO
      </button>

    </form>
  );
}