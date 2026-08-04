# Appwrite Posts Collection — Complete Attribute List

Create these attributes in your Appwrite **posts** collection exactly as listed. Attribute names are **case-sensitive**.

---

## ✅ MINIMUM REQUIRED — WordPress-style Post Fields

| # | Attribute Name | Type | Size | Notes |
|---|---|---|---|---|
| 1 | `title` | string | 255 | Post title |
| 2 | `slug` | string | 255 | URL slug (unique) |
| 3 | `content` | string | large | Rich HTML content |
| 4 | `excerpt` | string | 1000 | Short excerpt shown on blog cards |
| 5 | `blocks` | string | large | JSON string of block data |
| 6 | `featuredImage` | string | 255 | Appwrite file ID of featured image |
| 7 | `status` | string | 50 | `published` or `draft` |
| 8 | `featured` | boolean | — | Is this a featured post? |
| 9 | `publishedAt` | string | 255 | ISO date |
| 10 | `updatedAt` | string | 255 | ISO date |

---

## ✅ TAXONOMY & AUTHOR FIELDS

| # | Attribute Name | Type | Size | Notes |
|---|---|---|---|---|
| 11 | `categories` | string | 1000 | Comma-separated slugs (e.g. `seo,digital-marketing`) |
| 12 | `tags` | string | 1000 | Comma-separated tags |
| 13 | `authorName` | string | 255 | Author display name |
| 14 | `authorBio` | string | 2000 | Short author bio |
| 15 | `authorImage` | string | 255 | Author avatar URL or file ID |

---

## ✅ YOAST-STYLE SEO FIELDS

| # | Attribute Name | Type | Size | Notes |
|---|---|---|---|---|
| 16 | `seoTitle` | string | 255 | SEO title |
| 17 | `seoDescription` | string | 255 | Meta description |
| 18 | `focusKeyword` | string | 255 | Main keyword |
| 19 | `canonicalUrl` | string | 255 | Canonical URL override |
| 20 | `noindex` | boolean | — | Hide from search engines |
| 21 | `ogTitle` | string | 255 | Social (Open Graph) title |
| 22 | `ogDescription` | string | 1000 | Social description |
| 23 | `ogImage` | string | 255 | Social share image URL or file ID |

---

## ✅ LEGACY FIELDS (keep for backward compatibility)

| # | Attribute Name | Type | Size |
|---|---|---|---|
| 24 | `blog_Heading` | string | 255 |
| 25 | `blog_publish` | string | 255 |
| 26 | `blog_date` | string | 50 |
| 27 | `blog_image` | string | 255 |
| 28 | `blog_des` | string | large |
| 29 | `blog_breadcomes1` | string | 255 |
| 30 | `blog_breadcomeslink1` | string | 255 |
| 31 | `blog_breadcomes2` | string | 255 |
| 32 | `blog_breadcomeslink2` | string | 255 |
| 33 | `blog_breadcomes3` | string | 255 |
| 34 | `blog_card_title1` | string | large |
| 35 | `blog_card_des1` | string | large |
| 36 | `blog_card_number2` | string | 255 |
| 37 | `blog_card_title2` | string | 255 |
| 38 | `blog_card_des2` | string | large |
| 39 | `blog_card_subtitle2` | string | 255 |
| 40 | `blog_card_list21` | string | 255 |
| 41 | `blog_card_list22` | string | 255 |
| 42 | `blog_card_list23` | string | 255 |
| 43 | `blog_card_list24` | string | 255 |
| 44 | `blog_card_list25` | string | 255 |
| 45 | `blog_card_number3` | string | 255 |
| 46 | `blog_card_title3` | string | 255 |
| 47 | `blog_card_des3` | string | large |
| 48 | `blog_card_subtitle3` | string | 255 |
| 49 | `blog_card_list31` | string | 255 |
| 50 | `blog_card_list32` | string | 255 |
| 51 | `blog_card_list33` | string | 255 |
| 52 | `blog_card_list34` | string | 255 |
| 53 | `blog_faq_main_title` | string | 255 |
| 54 | `blog_faq_title1` | string | 255 |
| 55 | `blog_faq_des1` | string | large |
| 56 | `blog_faq_title2` | string | 255 |
| 57 | `blog_faq_des2` | string | large |
| 58 | `blog_faq_title3` | string | 255 |
| 59 | `blog_faq_des3` | string | large |
| 60 | `blog_faq_title4` | string | 255 |
| 61 | `blog_faq_des4` | string | large |
| 62 | `blog_faq_title5` | string | 255 |
| 63 | `blog_faq_des5` | string | large |

---

## ⚡ QUICK START — Create only the NEW fields (1-23)

If you already have the legacy fields (24-63), just add these **23 new attributes**:

| # | Name | Type | Size |
|---|---|---|---|
| 1 | `title` | string | 255 |
| 2 | `slug` | string | 255 |
| 3 | `content` | string | large |
| 4 | `excerpt` | string | 1000 |
| 5 | `blocks` | string | large |
| 6 | `featuredImage` | string | 255 |
| 7 | `status` | string | 50 |
| 8 | `featured` | boolean | — |
| 9 | `publishedAt` | string | 255 |
| 10 | `updatedAt` | string | 255 |
| 11 | `categories` | string | 1000 |
| 12 | `tags` | string | 1000 |
| 13 | `authorName` | string | 255 |
| 14 | `authorBio` | string | 2000 |
| 15 | `authorImage` | string | 255 |
| 16 | `seoTitle` | string | 255 |
| 17 | `seoDescription` | string | 255 |
| 18 | `focusKeyword` | string | 255 |
| 19 | `canonicalUrl` | string | 255 |
| 20 | `noindex` | boolean | — |
| 21 | `ogTitle` | string | 255 |
| 22 | `ogDescription` | string | 1000 |
| 23 | `ogImage` | string | 255 |
