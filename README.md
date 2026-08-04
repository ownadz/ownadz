# Ownadz CMS — Next.js Marketing Site with WordPress-style Blog CMS

A marketing website for **Ownadz Digital Agency** built with Next.js (App Router), Appwrite (backend), TinyMCE (rich text editor), and Tailwind CSS. Includes a WordPress-like blog CMS with a **Gutenberg/Elementor-style block builder** and a **Yoast-style SEO panel**.

---

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Environment variables

Create a `.env.local` file at the project root:

```env
# Appwrite
NEXT_PUBLIC_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
NEXT_PUBLIC_APPWRITE_PROJECT_ID=your_project_id
NEXT_PUBLIC_APPWRITE_DATABASE_ID=your_database_id
NEXT_PUBLIC_BUCKET_ID=your_bucket_id

# Collections
NEXT_PUBLIC_POSTS_COLLECTION_ID=your_posts_collection_id
NEXT_PUBLIC_PAGES_COLLECTION_ID=your_pages_collection_id
NEXT_PUBLIC_CATEGORIES_COLLECTION_ID=your_categories_collection_id
NEXT_PUBLIC_SERVICES_COLLECTION_ID=your_services_collection_id
NEXT_PUBLIC_LEADS_COLLECTION_ID=your_leads_collection_id
NEXT_PUBLIC_SETTINGS_COLLECTION_ID=your_settings_collection_id
NEXT_PUBLIC_SEO_COLLECTION_ID=your_seo_collection_id
NEXT_PUBLIC_HOMEPAGE_COLLECTION_ID=your_homepage_collection_id
NEXT_PUBLIC_HOMEPAGE_FAQS_COLLECTION_ID=your_homepage_faqs_collection_id
NEXT_PUBLIC_HOMEPAGE_SERVICES_COLLECTION_ID=your_homepage_services_collection_id
NEXT_PUBLIC_HOMEPAGE_BRANDS_COLLECTION_ID=your_homepage_brands_collection_id
NEXT_PUBLIC_HOMEPAGE_FEATURES_COLLECTION_ID=your_homepage_features_collection_id
NEXT_PUBLIC_HOMEPAGE_WHY_CHOOSE_COLLECTION_ID=your_homepage_why_choose_collection_id
NEXT_PUBLIC_HOMEPAGE_RESULTS_COLLECTION_ID=your_homepage_results_collection_id
NEXT_PUBLIC_HOMEPAGE_PROCESS_COLLECTION_ID=your_homepage_process_collection_id
NEXT_PUBLIC_HOMEPAGE_CTA_COLLECTION_ID=your_homepage_cta_collection_id
NEXT_PUBLIC_HOMEPAGE_CONTACT_COLLECTION_ID=your_homepage_contact_collection_id
```

### 3. Run the dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Blog Database Schema (Appwrite)

The blog CMS stores posts in the Appwrite **posts** collection. Before creating blog posts you must add the required attributes.

**See `docs/blog-database-schema.md` for the full attribute list.**

Quick summary of the new WordPress-style attributes:

| Group | Attributes |
|---|---|
| **Post core** | `title`, `slug`, `excerpt`, `content`, `blocks`, `featuredImage`, `status` (`published`/`draft`), `featured`, `publishedAt`, `updatedAt` |
| **Taxonomy** | `categories` (comma-separated slugs), `tags` (comma-separated) |
| **Author** | `authorName`, `authorBio`, `authorImage` |
| **Yoast-style SEO** | `seoTitle`, `seoDescription`, `focusKeyword`, `canonicalUrl`, `noindex`, `ogTitle`, `ogDescription`, `ogImage` |
| **Legacy (kept for compatibility)** | `blog_Heading`, `blog_publish`, `blog_date`, `blog_image`, `blog_des`, `blog_breadcomes*`, `blog_card_*`, `blog_faq_*` |

### `blocks` JSON format (Elementor/Gutenberg-style)

The `blocks` attribute stores a JSON string array of content blocks. Supported block types:

```json
[
  { "type": "paragraph", "content": "<p>Paragraph text</p>" },
  { "type": "heading", "level": 2, "content": "Section Heading" },
  { "type": "image", "src": "fileIdOrUrl", "alt": "Alt text", "caption": "Caption" },
  { "type": "list", "style": "unordered", "items": ["Item 1", "Item 2"] },
  { "type": "quote", "content": "Quote text", "author": "Author" },
  { "type": "cta", "title": "Ready?", "description": "Desc", "buttonText": "Contact", "buttonLink": "/contact" },
  { "type": "faq", "title": "FAQ", "items": [{ "question": "Q", "answer": "A" }] },
  { "type": "table", "headers": ["A", "B"], "rows": [["1", "2"]] },
  { "type": "html", "content": "<div>Custom HTML</div>" }
]
```

---

## Admin Blog CMS Features (WordPress-like)

- **Posts list** (`/admin/posts`) — WordPress-style table with title, featured image, category, author, date, status badge, search + status filters, and quick actions.
- **Add New Post** (`/admin/posts/create`) — WordPress-like editor with:
  - "Enter title here" input with auto-slug + permalink bar
  - **Classic Editor** (TinyMCE) and **Blocks (Elementor)** tabs
  - Publish box (status, date, featured flag)
  - Categories (multi-select from Appwrite categories collection) and Tags
  - Featured image upload
  - Author name / bio / image
  - **Yoast-style SEO panel** (focus keyword, SEO title with placeholders, meta description with char counter, Google SERP preview, social preview, readability/keyword analysis, canonical URL, noindex)
- **Edit Post** (`/admin/posts/edit/[id]`) — same editor pre-filled.

---

## Frontend Blog

- **Blog list** (`/blog`) — dynamic, shows published posts with featured images, categories, excerpt, date/author, plus sidebar (latest posts, categories with counts, comment form).
- **Blog detail** (`/blog/[slug]`) — dynamic with:
  - Blocks rendered to real HTML (headings, paragraphs, images, lists, quotes, CTA, FAQ accordions, tables, custom HTML)
  - Backward-compatible legacy `blog_*` field rendering
  - Yoast metadata (SEO title, meta description, canonical, robots, Open Graph, Twitter cards)
  - JSON-LD schema: **Article**, **BreadcrumbList**, **FAQPage**
  - Auto-generated **Table of Contents** from heading blocks
  - Author bio, tags, social share, related posts, latest posts, categories sidebar
- **Categories** (`/categories/[slug]`) — dynamic category pages.

---

## Sitemap & SEO

- `src/app/sitemap.js` dynamically includes:
  - Static pages
  - All **published blog posts** (`/blog/[slug]`)
  - All **categories** (`/categories/[slug]`)

---

## Project Scripts

```bash
npm run dev          # Start dev server
npm run build        # Generate routes manifest + build
npm run start        # Start production server
npm run lint         # Run ESLint
```

---

## Project Structure

```
src/
├── app/
│   ├── admin/               # Admin CMS (posts, pages, services, media, leads, seo, settings)
│   │   └── posts/           # Posts list, create, edit
│   ├── blog/                # Blog list + detail (dynamic)
│   ├── categories/          # Category pages
│   └── ...
├── components/
│   ├── admin/               # PostEditor, BlockBuilder, YoastSeoPanel, MediaUploader
│   ├── blog/                # BlogBlocksRenderer
│   └── editor/              # TinyEditor (TinyMCE wrapper)
├── lib/
│   └── appwrite/            # Appwrite client/config/databases/storage
├── services/                # Appwrite service wrappers (postService, categoryService, etc.)
└── ...
```

---

## Documentation

- **Database schema**: `docs/blog-database-schema.md`
- **Frontend routes manifest**: `src/lib/routes.frontend.generated.json` (generated by `npm run build` via `scripts/generate-frontend-routes-manifest.js`)

