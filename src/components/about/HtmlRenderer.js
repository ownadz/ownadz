"use client";

import { useMemo } from "react";

export default function HtmlRenderer({ html }) {
  const safeHtml = useMemo(() => {
    if (!html) return "";
    return String(html);
  }, [html]);

  if (!safeHtml) return null;

  return (
    <div
      className="prose max-w-none"
      dangerouslySetInnerHTML={{ __html: safeHtml }}
    />
  );
}

