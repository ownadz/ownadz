"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { getImagePreview } from "@/services/storageService";
import { getPostUrl, formatDate } from "@/utils/blog";
import {
  FaRegCalendarAlt,
  FaFolder,
  FaChevronLeft,
  FaChevronRight,
  FaArrowRight,
} from "react-icons/fa";

export default function RelatedPostsCarousel({ posts = [] }) {
  const scrollRef = useRef(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const updateArrows = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
  }, []);

  useEffect(() => {
    updateArrows();
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateArrows, { passive: true });
    window.addEventListener("resize", updateArrows);
    return () => {
      el.removeEventListener("scroll", updateArrows);
      window.removeEventListener("resize", updateArrows);
    };
  }, [updateArrows]);

  const scrollByCard = (dir) => {
    const el = scrollRef.current;
    if (!el) return;
    const card = el.querySelector(":scope > *");
    const step = card ? card.offsetWidth + 20 : 320;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  if (!posts || posts.length === 0) return null;

  const showCarousel = posts.length > 3;

  return (
    <div className="mt-12">
      {/* Section header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
          Related Posts
        </h2>
        {showCarousel && (
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => scrollByCard(-1)}
              disabled={!canPrev}
              className="w-9 h-9 rounded-full border border-slate-200 bg-white text-slate-600 flex items-center justify-center hover:bg-black hover:text-[#ffbd59] hover:border-black transition-all disabled:opacity-40 disabled:pointer-events-none"
              aria-label="Previous related posts"
            >
              <FaChevronLeft size={13} />
            </button>
            <button
              type="button"
              onClick={() => scrollByCard(1)}
              disabled={!canNext}
              className="w-9 h-9 rounded-full border border-slate-200 bg-white text-slate-600 flex items-center justify-center hover:bg-black hover:text-[#ffbd59] hover:border-black transition-all disabled:opacity-40 disabled:pointer-events-none"
              aria-label="Next related posts"
            >
              <FaChevronRight size={13} />
            </button>
          </div>
        )}
      </div>

      {/* Carousel track */}
      <div
        ref={scrollRef}
        className="flex gap-5 overflow-x-auto snap-x snap-mandatory pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {posts.map((rp) => {
          const rpImg = rp.featuredImage
            ? getImagePreview(rp.featuredImage)
            : rp.blog_image
            ? getImagePreview(rp.blog_image)
            : null;
          const rpCats = (rp.categories || "")
            .split(",")
            .map((c) => c.trim())
            .filter(Boolean);
          const rpDate = formatDate(rp.publishedAt || rp.blog_date || rp.$createdAt);

          return (
            <article
              key={rp.$id}
              className="group w-full min-w-[calc(100%)] sm:min-w-[calc(50%-0.75rem)] lg:min-w-[calc(33.333%-0.9rem)] snap-start bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all flex flex-col"
            >
{/* Image */}
              {rpImg && (
                <Link href={getPostUrl(rp)} className="block overflow-hidden">
                  <img
                    src={rpImg}
                    alt={rp.title || rp.blog_Heading || "Blog post"}
                    className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </Link>
              )}

              {/* Body */}
              <div className="p-5 flex flex-col flex-1">
                {/* Category */}
                {rpCats.length > 0 && (
                  <Link
                    href={`/categories/${rpCats[0]}`}
                    className="inline-flex items-center gap-1.5 self-start text-[11px] font-bold uppercase tracking-wide bg-[#ffbd59]/20 text-slate-800 px-2.5 py-1 rounded-md border border-[#ffbd59]/40 hover:bg-[#ffbd59]/40 transition-colors mb-3"
                  >
                    <FaFolder size={9} /> {rpCats[0]}
                  </Link>
                )}

                {/* Heading */}
                <h3 className="font-bold text-slate-900 group-hover:text-[#ffbd59] transition-colors leading-snug text-[15px] line-clamp-2 mb-3">
                  <Link href={getPostUrl(rp)}>
                    {rp.title || rp.blog_Heading}
                  </Link>
                </h3>

                {/* Posted date */}
                <p className="text-xs text-slate-500 flex items-center gap-1.5 mb-4">
                  <FaRegCalendarAlt className="text-[#ffbd59]" /> {rpDate}
                </p>

                {/* Read more */}
                <div className="mt-auto">
                  <Link
                    href={getPostUrl(rp)}
                    className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-black bg-[#ffbd59] hover:bg-black hover:text-[#ffbd59] border border-[#ffbd59] hover:border-black px-4 py-2.5 rounded-lg transition-all"
                  >
                    Read More <FaArrowRight size={10} />
                  </Link>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}

