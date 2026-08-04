"use client";

import { useState } from "react";
import Link from "next/link";
import { FaArrowRight, FaPlus, FaTimes } from "react-icons/fa";
import { getImagePreview } from "@/services/storageService";

// ============================================================
// Blog Blocks Renderer
// Renders block data (Gutenberg/Elementor-like) into real HTML
// tags: <p>, <h1>-<h6>, <img>, <ul>/<ol>, <blockquote>,
// <table>, CTA cards, FAQ accordions, custom HTML.
// ============================================================

const resolveImageSrc = (src) => {
  if (!src) return "";
  if (src.startsWith("http")) return src;
  try {
    return getImagePreview(src);
  } catch {
    return src;
  }
};

function HeadingBlock({ block }) {
  const { level = 2, content } = block;
  const HeadingTag = `h${level}`;
  const sizes = {
    1: "text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight",
    2: "text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight",
    3: "text-xl sm:text-2xl font-bold text-slate-950 tracking-tight",
    4: "text-lg sm:text-xl font-bold text-slate-900",
    5: "text-base sm:text-lg font-bold text-slate-900",
    6: "text-sm sm:text-base font-bold text-slate-800 uppercase tracking-wider",
  };
  return (
    <HeadingTag
      className={`${sizes[level] || sizes[2]} ownadz-blog-heading block mb-4 mt-6`}
    >
      {content}
    </HeadingTag>
  );
}

function ParagraphBlock({ block }) {
  return (
    <div
      className="ownadz-blog-paragraph text-slate-700 text-base sm:text-lg leading-relaxed mb-6"
      dangerouslySetInnerHTML={{ __html: block.content || "" }}
    />
  );
}

function ImageBlock({ block }) {
  const src = resolveImageSrc(block.src);
  if (!src) return null;
  return (
    <figure className="ownadz-blog-image-block my-8">
      <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-slate-50">
        <img
          src={src}
          alt={block.alt || ""}
          title={block.alt || ""}
          className="w-full h-auto object-cover"
          loading="lazy"
        />
      </div>
      {block.caption && (
        <figcaption className="text-center text-sm text-slate-500 mt-3 italic">
          {block.caption}
        </figcaption>
      )}
    </figure>
  );
}

function ListBlock({ block }) {
  const items = block.items || [];
  const Tag = block.style === "ordered" ? "ol" : "ul";
  return (
    <Tag
      className={`${
        block.style === "ordered" ? "list-decimal" : "list-disc"
      } pl-6 space-y-2 text-slate-700 text-base sm:text-lg leading-relaxed mb-6 ownadz-blog-list`}
    >
      {items.filter(Boolean).map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </Tag>
  );
}

function QuoteBlock({ block }) {
  return (
    <blockquote className="ownadz-blog-quote relative my-8 rounded-2xl bg-slate-50 border-l-4 border-[#ffbd59] p-6 sm:p-8">
      <p className="text-lg sm:text-xl font-medium text-slate-900 italic leading-relaxed">
        &ldquo;{block.content}&rdquo;
      </p>
      {block.author && (
        <footer className="mt-4 text-sm font-bold text-[#ffbd59]">
          — {block.author}
        </footer>
      )}
    </blockquote>
  );
}

function CtaBlock({ block }) {
  return (
    <div className="ownadz-blog-cta relative overflow-hidden rounded-3xl bg-slate-900 text-white p-8 sm:p-10 my-8">
      <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-[#ffbd59]/20 blur-3xl" />
      <div className="relative z-10">
        <span className="inline-flex items-center px-4 py-2 rounded-full bg-[#ffbd59] text-black font-semibold text-sm mb-5">
          Quick Insight
        </span>
        {block.title && (
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            {block.title}
          </h3>
        )}
        {block.description && (
          <p className="text-slate-300 text-base sm:text-lg leading-8 mb-6">
            {block.description}
          </p>
        )}
        {block.buttonText && block.buttonLink && (
          <Link
            href={block.buttonLink}
            className="inline-flex items-center justify-center bg-[#ffbd59] hover:bg-white text-black font-extrabold text-xs sm:text-sm tracking-wider uppercase px-6 py-3.5 rounded-xl transition-all gap-2"
          >
            {block.buttonText} <FaArrowRight />
          </Link>
        )}
      </div>
    </div>
  );
}

function FaqBlock({ block }) {
  const [openIndex, setOpenIndex] = useState(0);
  const items = block.items || [];

  if (!items.length) return null;

  return (
    <div className="ownadz-blog-faq my-8">
      {block.title && (
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight mb-6">
          {block.title}
        </h2>
      )}
      <div className="space-y-3">
        {items.map((item, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden transition-all"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                className="w-full text-left p-4 font-bold text-slate-950 text-sm sm:text-base flex items-center justify-between gap-4 hover:bg-slate-100/60 transition-colors"
              >
                <span>{item.question}</span>
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${
                    isOpen ? "bg-[#ffbd59] text-black" : "bg-slate-200 text-slate-600"
                  }`}
                >
                  {isOpen ? <FaTimes size={10} /> : <FaPlus size={10} />}
                </div>
              </button>
              {isOpen && (
                <div className="px-4 pb-4 text-sm text-slate-600 leading-relaxed border-t border-slate-200/60 bg-white">
                  {item.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function TableBlock({ block }) {
  const headers = block.headers || [];
  const rows = block.rows || [];
  if (!headers.length && !rows.length) return null;

  return (
    <div className="ownadz-blog-table overflow-x-auto my-8 rounded-xl border border-slate-200 shadow-sm">
      <table className="w-full text-left border-collapse text-xs sm:text-sm">
        {headers.length > 0 && (
          <thead>
            <tr className="bg-slate-100 text-slate-950">
              {headers.map((h, i) => (
                <th key={i} className="p-3.5 font-bold border-b border-slate-200">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
        )}
        <tbody className="divide-y divide-slate-200 bg-white">
          {rows.map((row, ri) => (
            <tr key={ri} className="hover:bg-slate-50/80 transition-colors">
              {row.map((cell, ci) => (
                <td key={ci} className={`p-3.5 text-slate-600 ${ci === 0 ? "font-bold text-slate-900 bg-slate-50/50" : ""}`}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function HtmlBlock({ block }) {
  if (!block.content) return null;
  return (
    <div
      className="ownadz-blog-html my-8"
      dangerouslySetInnerHTML={{ __html: block.content }}
    />
  );
}

export default function BlogBlocksRenderer({ blocks }) {
  const list = Array.isArray(blocks) ? blocks : [];

  if (!list.length) return null;

  return (
    <div className="ownadz-blog-blocks space-y-2">
      {list.map((block, idx) => {
        switch (block?.type) {
          case "paragraph":
            return <ParagraphBlock key={block.id || idx} block={block} />;
          case "heading":
            return <HeadingBlock key={block.id || idx} block={block} />;
          case "image":
            return <ImageBlock key={block.id || idx} block={block} />;
          case "list":
            return <ListBlock key={block.id || idx} block={block} />;
          case "quote":
            return <QuoteBlock key={block.id || idx} block={block} />;
          case "cta":
            return <CtaBlock key={block.id || idx} block={block} />;
          case "faq":
            return <FaqBlock key={block.id || idx} block={block} />;
          case "table":
            return <TableBlock key={block.id || idx} block={block} />;
          case "html":
            return <HtmlBlock key={block.id || idx} block={block} />;
          default:
            return null;
        }
      })}
    </div>
  );
}

