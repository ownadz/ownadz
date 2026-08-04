"use client";

import { useMemo, useState } from "react";

// ============================================================
// Yoast-Style SEO Panel
// Provides: focus keyword, SEO title with placeholders, meta
// description, Google SERP preview, keyword density analysis,
// readability score, social (Open Graph) preview, advanced SEO.
// ============================================================

const DEFAULT_SITE_TITLE = "Ownadz";

const slugify = (str = "") =>
  str
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");

const countWords = (str = "") => {
  const clean = String(str)
    .replace(/<[^>]*>/g, " ")
    .replace(/&nbsp;/g, " ");
  return clean.split(/\s+/).filter(Boolean).length;
};

const keywordDensity = (content, keyword) => {
  if (!keyword) return 0;
  const cleanContent = String(content || "")
    .replace(/<[^>]*>/g, " ")
    .toLowerCase();
  const cleanKeyword = keyword.toLowerCase();
  const totalWords = countWords(cleanContent) || 1;
  const occurrences = cleanContent.split(cleanKeyword).length - 1;
  return Number(((occurrences / totalWords) * 100).toFixed(1));
};

const readabilityScore = (content = "") => {
  const words = countWords(content);
  const sentences = String(content)
    .replace(/<[^>]*>/g, " ")
    .split(/[.!?]+/)
    .filter((s) => s.trim()).length || 1;
  const avgWordsPerSentence = words / sentences;

  if (avgWordsPerSentence <= 12) return { score: 90, label: "Very easy to read", color: "#7fad39" };
  if (avgWordsPerSentence <= 16) return { score: 75, label: "Easy to read", color: "#7fad39" };
  if (avgWordsPerSentence <= 20) return { score: 60, label: "Fairly difficult to read", color: "#ee7c1b" };
  if (avgWordsPerSentence <= 25) return { score: 40, label: "Difficult to read", color: "#dc3232" };
  return { score: 25, label: "Very difficult to read", color: "#dc3232" };
};

export default function YoastSeoPanel({
  seoTitle,
  setSeoTitle,
  seoDescription,
  setSeoDescription,
  focusKeyword,
  setFocusKeyword,
  content,
  title,
  slug,
  setCanonicalUrl,
  setNoindex,
  setOgTitle,
  setOgDescription,
  setOgImage,
  canonicalUrl,
  noindex,
  ogTitle,
  ogDescription,
  ogImage,
}) {
  const [tab, setTab] = useState("google");
  const [isPremium, setIsPremium] = useState(false); // decorative toggle

  const effectiveSiteTitle = DEFAULT_SITE_TITLE;

  // Google SERP preview
  const googleTitle = useMemo(() => {
    let t = seoTitle || title || "Post Title";
    t = t.replace(/%%title%%/g, title || "Post Title");
    t = t.replace(/%%sitetitle%%/g, effectiveSiteTitle);
    t = t.replace(/%%slug%%/g, slug);
    return t;
  }, [seoTitle, title, effectiveSiteTitle, slug]);

  const googleDescription = useMemo(() => {
    let d = seoDescription || "";
    d = d.replace(/%%title%%/g, title || "Post Title");
    d = d.replace(/%%sitetitle%%/g, effectiveSiteTitle);
    return d;
  }, [seoDescription, title, effectiveSiteTitle]);

  const seoTitleLength = useMemo(() => googleTitle.length, [googleTitle]);
  const seoDescLength = useMemo(() => googleDescription.length, [googleDescription]);

  const density = useMemo(() => keywordDensity(content, focusKeyword), [content, focusKeyword]);
  const keywordCount = useMemo(() => {
    if (!focusKeyword) return 0;
    const clean = String(content || "").replace(/<[^>]*>/g, " ").toLowerCase();
    return clean.split(focusKeyword.toLowerCase()).length - 1;
  }, [content, focusKeyword]);

  const readability = useMemo(() => readabilityScore(content), [content]);

  const seoBarColor = (len, max) => (len <= max ? "#7fad39" : len <= max + 15 ? "#ee7c1b" : "#dc3232");

  const analysisItems = [
    {
      label: "Focus keyword",
      value: focusKeyword ? `Found ${keywordCount} time${keywordCount === 1 ? "" : "s"} (${density}% density)` : "Set a focus keyword",
      ok: focusKeyword && keywordCount >= 1,
    },
    {
      label: "Meta title length",
      value: `${seoTitleLength} characters (ideal ≤ 60)`,
      ok: seoTitleLength > 0 && seoTitleLength <= 60,
    },
    {
      label: "Meta description length",
      value: `${seoDescLength} characters (ideal ≤ 160)`,
      ok: seoDescLength > 0 && seoDescLength <= 160,
    },
    {
      label: "Readability",
      value: readability.label,
      ok: readability.score >= 60,
    },
    {
      label: "Slug",
      value: slug ? `/${slug}/` : "Add a slug",
      ok: !!slug,
    },
  ];

  const socialTitle = ogTitle || googleTitle;
  const socialDescription = ogDescription || googleDescription;

  return (
    <div className="border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm">
      {/* Panel header */}
      <div className="flex items-center justify-between px-6 py-4 bg-slate-900 text-white">
        <div className="flex items-center gap-3">
          <span className="w-9 h-9 rounded-lg bg-[#a4286a] flex items-center justify-center text-white font-black text-lg">
            Y
          </span>
          <div>
            <h2 className="text-lg font-bold leading-tight">Yoast SEO</h2>
            <p className="text-xs text-slate-400">Post SEO settings</p>
          </div>
        </div>
        <span className="text-xs font-semibold bg-white/10 px-3 py-1 rounded-full">21.8</span>
      </div>

      <div className="p-6 space-y-6">
        {/* Focus keyword */}
        <div>
          <label className="block text-sm font-bold text-slate-900 mb-1.5">
            Focus keyphrase
          </label>
          <input
            type="text"
            value={focusKeyword}
            onChange={(e) => setFocusKeyword(e.target.value)}
            placeholder="e.g. digital marketing services"
            className="w-full border border-slate-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#ffbd59]/40"
          />
          <p className="text-xs text-slate-500 mt-1.5">
            Pick the main keyphrase people use when searching for this post.
          </p>
        </div>

        {/* SEO title */}
        <div>
          <label className="block text-sm font-bold text-slate-900 mb-1.5">
            SEO title
          </label>
          <input
            type="text"
            value={seoTitle}
            onChange={(e) => setSeoTitle(e.target.value)}
            placeholder={`%%title%% - %%sitetitle%%`}
            className="w-full border border-slate-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#ffbd59]/40"
          />
          <div className="flex items-center justify-between mt-1.5">
            <p className="text-xs text-slate-500">Use %%title%%, %%sitetitle%%, %%slug%%</p>
            <span className="text-xs font-mono font-semibold" style={{ color: seoBarColor(seoTitleLength, 60) }}>
              {seoTitleLength}/60
            </span>
          </div>
          <div className="h-1.5 w-full bg-slate-100 rounded-full mt-1">
            <div
              className="h-1.5 rounded-full transition-all"
              style={{ width: `${Math.min(100, (seoTitleLength / 60) * 100)}%`, backgroundColor: seoBarColor(seoTitleLength, 60) }}
            />
          </div>
        </div>

        {/* Meta description */}
        <div>
          <label className="block text-sm font-bold text-slate-900 mb-1.5">
            Meta description
          </label>
          <textarea
            value={seoDescription}
            onChange={(e) => setSeoDescription(e.target.value)}
            rows={3}
            placeholder="Write a compelling meta description..."
            className="w-full border border-slate-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#ffbd59]/40 resize-none"
          />
          <div className="flex items-center justify-between mt-1.5">
            <p className="text-xs text-slate-500">Recommended: 120-160 characters</p>
            <span className="text-xs font-mono font-semibold" style={{ color: seoBarColor(seoDescLength, 160) }}>
              {seoDescLength}/160
            </span>
          </div>
          <div className="h-1.5 w-full bg-slate-100 rounded-full mt-1">
            <div
              className="h-1.5 rounded-full transition-all"
              style={{ width: `${Math.min(100, (seoDescLength / 160) * 100)}%`, backgroundColor: seoBarColor(seoDescLength, 160) }}
            />
          </div>
        </div>

        {/* SERP / Social preview tabs */}
        <div>
          <div className="flex gap-2 mb-3">
            {[
              { key: "google", label: "Google preview" },
              { key: "social", label: "Social preview" },
              { key: "analysis", label: "Analysis" },
              { key: "advanced", label: "Advanced" },
            ].map((t) => (
              <button
                key={t.key}
                type="button"
                onClick={() => setTab(t.key)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  tab === t.key ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          {/* Google preview */}
          {tab === "google" && (
            <div className="bg-white border border-slate-200 rounded-xl p-4 space-y-1">
              <p className="text-[13px] text-[#1a0dab] hover:underline truncate">
                https://ownadz.com/blog/{slug || "post-slug"}/
              </p>
              <p className="text-xl leading-6 text-[#1a0dab] font-medium hover:underline truncate">
                {googleTitle || "Post title"}
              </p>
              <p className="text-sm text-[#4d5156] line-clamp-2">
                {googleDescription || "Post meta description appears here..."}
              </p>
            </div>
          )}

          {/* Social preview */}
          {tab === "social" && (
            <div className="space-y-4">
              <div className="bg-[#f0f2f5] rounded-xl overflow-hidden border border-slate-200">
                {ogImage && (
                  <img src={ogImage} alt="" className="w-full h-44 object-cover" />
                )}
                <div className="p-4 space-y-1">
                  <p className="text-xs uppercase text-slate-500 font-semibold">
                    {effectiveSiteTitle} • Blog
                  </p>
                  <p className="text-base font-bold text-slate-900 leading-snug">
                    {socialTitle || "Post title"}
                  </p>
                  <p className="text-sm text-slate-600 line-clamp-3">
                    {socialDescription || "Social description preview..."}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">OG title</label>
                  <input
                    type="text"
                    value={ogTitle}
                    onChange={(e) => setOgTitle(e.target.value)}
                    placeholder="Leave empty to use SEO title"
                    className="w-full border border-slate-300 rounded-lg px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-[#ffbd59]/40"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">OG image URL</label>
                  <input
                    type="text"
                    value={ogImage}
                    onChange={(e) => setOgImage(e.target.value)}
                    placeholder="https://... (or use featured image)"
                    className="w-full border border-slate-300 rounded-lg px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-[#ffbd59]/40"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold text-slate-700 mb-1">OG description</label>
                  <textarea
                    value={ogDescription}
                    onChange={(e) => setOgDescription(e.target.value)}
                    rows={2}
                    placeholder="Leave empty to use meta description"
                    className="w-full border border-slate-300 rounded-lg px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-[#ffbd59]/40 resize-none"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Analysis */}
          {tab === "analysis" && (
            <div className="space-y-3">
              {/* Readability */}
              <div className="flex items-center justify-between bg-slate-50 border border-slate-200 rounded-xl p-3.5">
                <div>
                  <p className="text-sm font-bold text-slate-900">Readability</p>
                  <p className="text-xs text-slate-500">{readability.label} — avg. sentence length</p>
                </div>
                <div className="flex items-center gap-2">
                  <span
                    className="w-11 h-11 rounded-full flex items-center justify-center text-white font-black text-sm"
                    style={{ backgroundColor: readability.color }}
                  >
                    {readability.score}
                  </span>
                </div>
              </div>

              {analysisItems.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 bg-slate-50 border border-slate-200 rounded-xl p-3.5">
                  <span
                    className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center text-white text-[10px] font-black shrink-0 ${
                      item.ok ? "bg-[#7fad39]" : "bg-[#dc3232]"
                    }`}
                  >
                    {item.ok ? "✓" : "!"}
                  </span>
                  <div>
                    <p className="text-sm font-bold text-slate-900">{item.label}</p>
                    <p className="text-xs text-slate-600">{item.value}</p>
                  </div>
                </div>
              ))}

              {/* Premium upsell (decorative) */}
              <div className="rounded-xl border border-[#a4286a]/30 bg-[#a4286a]/5 p-4">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-bold text-slate-900">Yoast SEO Premium</p>
                  <button
                    type="button"
                    onClick={() => setIsPremium(!isPremium)}
                    className={`text-xs font-bold px-3 py-1 rounded-full transition-all ${
                      isPremium ? "bg-[#a4286a] text-white" : "bg-slate-200 text-slate-700"
                    }`}
                  >
                    {isPremium ? "Enabled" : "Preview"}
                  </button>
                </div>
                <p className="text-xs text-slate-500 mt-1">
                  Get insights for multiple keyphrases, social previews, and content insights.
                </p>
              </div>
            </div>
          )}

          {/* Advanced */}
          {tab === "advanced" && (
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Canonical URL</label>
                <input
                  type="text"
                  value={canonicalUrl}
                  onChange={(e) => setCanonicalUrl(e.target.value)}
                  placeholder="https://ownadz.com/blog/your-post/"
                  className="w-full border border-slate-300 rounded-lg px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-[#ffbd59]/40"
                />
                <p className="text-[11px] text-slate-500 mt-1">Leave empty to auto-generate from slug.</p>
              </div>

              <label className="flex items-center justify-between bg-slate-50 border border-slate-200 rounded-xl p-3.5 cursor-pointer">
                <div>
                  <p className="text-sm font-bold text-slate-900">No index</p>
                  <p className="text-xs text-slate-500">Prevent this post from appearing in search results.</p>
                </div>
                <input
                  type="checkbox"
                  checked={noindex}
                  onChange={(e) => setNoindex(e.target.checked)}
                  className="w-4 h-4 accent-[#ffbd59]"
                />
              </label>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

