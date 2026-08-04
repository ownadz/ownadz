# Blog Database Schema (Appwrite Posts Collection)

This document lists all attributes you need to manually create in your Appwrite **posts** collection. These power the WordPress-like blog CMS (posts, blocks, categories, tags, Yoast-style SEO).

> **Important:** Appwrite attribute names are **case-sensitive** and become document keys as-is.

---

## Existing Attributes (already in use — keep these)

| Attribute | Type | Size | Required | Notes |
|---|---|---|---|---|
| `title` | string | 255 | No | Post title |
| `slug` | string | 255 | No | URL slug (unique) |
| `content` | string | large | No | Rich HTML content (legacy) |
| `featuredImage` | string | 255 | No | Appwrite file ID |
| `seoTitle` | string | 255 | No | SEO title |
| `seoDescription` | string | 255 | No | SEO meta description |
| `focusKeyword` | string | 255 | No | Yoast-style focus keyword |
| `status` | string | 50 | No | `published` / `draft` |
| `blog_Heading` | string | 255 | No | Blog heading (legacy) |
| `blog_publish` | string | 255 | No | Published by (legacy) |
| `blog_date` | string | 50 | No | Date (legacy) |
| `blog_image` | string | 255 | No | Blog image file ID (legacy) |
| `blog_des` | string | large | No | Blog description HTML (legacy) |
| `blog_breadcomes1` | string | 255 | No | Breadcrumb (legacy) |
| `blog_breadcomeslink1` | string | 255 | No | Breadcrumb link (legacy) |
| `blog_breadcomes2` | string | 255 | No | Breadcrumb (legacy) |
| `blog_breadcomeslink2` | string | 255 | No | Breadcrumb link (legacy) |
| `blog_breadcomes3` | string | 255 | No | Breadcrumb (legacy) |
| `blog_card_title1` … `blog_card_des5` | string | large | No | Card/FAQ fields (legacy) |

---

## New Attributes — WordPress-style Post Core

| Attribute | Type | Size | Required | Notes |
|---|---|---|---|---|
| `excerpt` | string | 1000 | No | Short excerpt shown in blog cards |
| `blocks` | string | large | No | **JSON string** of block data (Gutenberg/Elementor-like) |
| `featured` | boolean | — | No | Is this a featured post? |
| `publishedAt` | string | 255 | No | ISO publish date |
| `updatedAt` | string | 255 | No | ISO update date |
| `authorName` | string | 255 | No | Author display name |
| `authorBio` | string | 2000 | No | Author short bio |
| `authorImage` | string | 255 | No | Author avatar file ID |
| `categories` | string | 1000 | No | Comma-separated category slugs (e.g. `seo,digital-marketing`) |
| `tags` | string | 1000 | No | Comma-separated tags |

---

## New Attributes — Yoast-style SEO

| Attribute | Type | Size | Required | Notes |
|---|---|---|---|---|
| `canonicalUrl` | string | 255 | No | Canonical URL override |
| `noindex` | boolean | — | No | Hide from search engines |
| `ogTitle` | string | 255 | No | Social (Open Graph) title |
| `ogDescription` | string | 1000 | No | Social description |
| `ogImage` | string | 255 | No | Social share image file ID |
| `twitterTitle` | string | 255 | No | Twitter card title |
| `twitterDescription` | string | 1000 | No | Twitter card description |

---

## Example `blocks` JSON structure

```json
[
  {
    "type": "paragraph",
    "content": "<p>This is a paragraph of the blog post...</p>"
  },
  {
    "type": "heading",
    "level": 2,
    "content": "Why Digital Marketing Matters"
  },
  {
    "type": "image",
    "src": "fileIdOrUrl",
    "alt": "Description of the image",
    "caption": "Optional caption"
  },
  {
    "type": "list",
    "style": "unordered",
    "items": ["Item one", "Item two", "Item three"]
  },
  {
    "type": "quote",
    "content": "A great quote",
    "author": "Author Name"
  },
  {
    "type": "cta",
    "title": "Ready to Grow?",
    "description": "Get a free consultation",
    "buttonText": "Contact Us",
    "buttonLink": "/contact"
  },
  {
    "type": "faq",
    "title": "FAQ Heading",
    "items": [
      { "question": "Q1?", "answer": "A1." },
      { "question": "Q2?", "answer": "A2." }
    ]
  },
  {
    "type": "table",
    "headers": ["Feature", "Free", "Pro"],
    "rows": [
      ["SEO", "No", "Yes"],
      ["Support", "Email", "24/7"]
    ]
  },
  {
    "type": "html",
    "content": "<div>Custom HTML</div>"
  }
]
```

---

## Quick Appwrite Console Steps

1. Go to **Databases → Your Database → posts Collection → Attributes**.
2. Click **Add Attribute** for each attribute listed above.
3. For string attributes, choose the size shown. For `blocks`, `content`, `blog_des` use **large** size (or the largest available).
4. Make sure **Permissions**: set appropriate read/write for your admin role.
5. No attribute needs to be "Required" — the app always writes defaults.

That's it — the app code reads/writes these keys directly.

