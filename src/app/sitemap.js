import { getPublishedPosts } from "@/services/postService";
import { getCategories } from "@/services/categoryService";
import { getPostUrl } from "@/utils/blog";

export const dynamic = "force-dynamic";

export default async function sitemap() {
  const baseUrl = "https://ownadz.com";

  const staticUrls = [
    "",
    "about/",
    "contact/",
    "blog/",
    "services/affiliate-marketing/",
    "services/app-development/",
    "services/digital-marketing/",
    "services/email-marketing/",
    "services/influencer-marketing/",
    "services/performance-marketing/",
    "services/seo-service/",
    "services/social-media-marketing/",
    "services/web-development/",
    "services/whatsapp-marketing/",
  ];

  let blogPostUrls = [];
  let categoryUrls = [];

  try {
const posts = await getPublishedPosts();
    blogPostUrls = posts.map((post) => ({
      url: `${baseUrl}${getPostUrl(post)}`,
      lastModified: post.updatedAt || post.publishedAt || post.$createdAt || new Date(),
      priority: 0.8,
    }));
  } catch (err) {
    console.error("Sitemap: error loading posts", err);
  }

  try {
    const catResponse = await getCategories();
    categoryUrls = (catResponse.documents || []).map((cat) => ({
      url: `${baseUrl}/categories/${cat.slug}`,
      lastModified: new Date(),
      priority: 0.6,
    }));
  } catch (err) {
    console.error("Sitemap: error loading categories", err);
  }

  return [
    ...staticUrls.map((path) => ({
      url: `${baseUrl}/${path}`.replace(/\/\/+/g, "/").replace(`${baseUrl}/`, `${baseUrl}/`),
      lastModified: new Date(),
      priority: 1.0,
    })),
    ...blogPostUrls,
    ...categoryUrls,
  ];
}

