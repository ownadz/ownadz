import { databases } from "@/lib/appwrite/client";
import { APPWRITE_CONFIG } from "@/lib/appwrite/config";
import { ID } from "appwrite";
import { Query } from "appwrite";
import { unstable_noStore as noStore } from "next/cache";

const toPlainObject = (value) => {
  if (value === null || value === undefined) return value;

  try {
    return JSON.parse(JSON.stringify(value));
  } catch (error) {
    return value;
  }
};

export const createPost = async (data) => {
  return await databases.createDocument(
    APPWRITE_CONFIG.databaseId,
    APPWRITE_CONFIG.postsCollectionId,
    ID.unique(),
    data
  );
};

export const getPosts = async () => {
  noStore();
  const response = await databases.listDocuments(
    APPWRITE_CONFIG.databaseId,
    APPWRITE_CONFIG.postsCollectionId
  );

  return {
    ...response,
    documents: (response.documents || []).map((doc) => toPlainObject(doc)),
  };
};

export const getPost = async (id) => {
  noStore();
  const post = await databases.getDocument(
    APPWRITE_CONFIG.databaseId,
    APPWRITE_CONFIG.postsCollectionId,
    id
  );

  return toPlainObject(post);
};

export const updatePost = async (id, data) => {
  return await databases.updateDocument(
    APPWRITE_CONFIG.databaseId,
    APPWRITE_CONFIG.postsCollectionId,
    id,
    data
  );
};

export const deletePost = async (id) => {
  return await databases.deleteDocument(
    APPWRITE_CONFIG.databaseId,
    APPWRITE_CONFIG.postsCollectionId,
    id
  );
};


export const getPostBySlug = async (
  slug
) => {
  noStore();

  if (!slug) return null;

  // 1) Try the indexed query first (fast path).
  try {
    const response =
      await databases.listDocuments(
        APPWRITE_CONFIG.databaseId,
        APPWRITE_CONFIG.postsCollectionId,
        [Query.equal("slug", slug)]
      );
    if (response.documents[0]) return toPlainObject(response.documents[0]);
  } catch (err) {
    // Fall through — the "slug" attribute may not be indexed in Appwrite,
    // which makes Query.equal on it return empty / throw.
    console.error("getPostBySlug query error (falling back to JS filter):", err?.message);
  }

  // 2) Fallback: fetch all documents and match the slug in JS.
  //    This works even when the "slug" attribute has no index configured.
  //    Use a large limit so we don't miss the post (Appwrite caps at 5000).
  try {
    const all = await databases.listDocuments(
      APPWRITE_CONFIG.databaseId,
      APPWRITE_CONFIG.postsCollectionId,
      [Query.limit(5000)]
    );

    const target = String(slug || "").toLowerCase();
    const found = all.documents.find(
      (doc) => String(doc?.slug || "").toLowerCase() === target
    );

    return toPlainObject(found || null);
  } catch (err) {
    console.error("getPostBySlug fallback also failed:", err?.message);
    // 3) Last resort: try getPosts (no filters) and match by slug
    try {
      const allPosts = await databases.listDocuments(
        APPWRITE_CONFIG.databaseId,
        APPWRITE_CONFIG.postsCollectionId
      );
      const target = String(slug || "").toLowerCase();
      const found = allPosts.documents.find(
        (doc) => String(doc?.slug || "").toLowerCase() === target
      );
      return toPlainObject(found || null);
    } catch (err2) {
      console.error("getPostBySlug last resort also failed:", err2?.message);
      return null;
    }
  }
};

export const getPostsCount = async () => {
  const response = await databases.listDocuments(
    APPWRITE_CONFIG.databaseId,
    APPWRITE_CONFIG.postsCollectionId
  );

  return response.total;
};

// ============================================================
// WordPress-style query helpers
// ============================================================

const parsePost = (doc) => {
  let blocks = [];
  if (doc?.blocks && typeof doc.blocks === "string") {
    try {
      const parsed = JSON.parse(doc.blocks);
      if (Array.isArray(parsed)) blocks = parsed;
    } catch {
      blocks = [];
    }
  }
  return { ...doc, blocks };
};

export const getPublishedPosts = async () => {
  noStore();
  const response = await databases.listDocuments(
    APPWRITE_CONFIG.databaseId,
    APPWRITE_CONFIG.postsCollectionId,
    [Query.equal("status", "published")]
  );
  return response.documents.map(parsePost);
};

export const getRecentPosts = async (limit = 5) => {
  noStore();
  const response = await databases.listDocuments(
    APPWRITE_CONFIG.databaseId,
    APPWRITE_CONFIG.postsCollectionId,
    [Query.equal("status", "published"), Query.orderDesc("$createdAt"), Query.limit(limit)]
  );
  return response.documents.map(parsePost);
};

export const getFeaturedPosts = async () => {
  noStore();
  const response = await databases.listDocuments(
    APPWRITE_CONFIG.databaseId,
    APPWRITE_CONFIG.postsCollectionId,
    [Query.equal("status", "published"), Query.equal("featured", true)]
  );
  return response.documents.map(parsePost);
};

export const getPostsByCategory = async (categorySlug) => {
  noStore();
  const response = await databases.listDocuments(
    APPWRITE_CONFIG.databaseId,
    APPWRITE_CONFIG.postsCollectionId,
    [Query.equal("status", "published")]
  );
  return response.documents
    .filter((post) => {
      const cats = (post.categories || "").split(",").map((c) => c.trim().toLowerCase());
      return cats.includes(String(categorySlug).toLowerCase());
    })
    .map(parsePost);
};

export const getPostsByTag = async (tag) => {
  noStore();
  const response = await databases.listDocuments(
    APPWRITE_CONFIG.databaseId,
    APPWRITE_CONFIG.postsCollectionId,
    [Query.equal("status", "published")]
  );
  return response.documents
    .filter((post) => {
      const tags = (post.tags || "").split(",").map((t) => t.trim().toLowerCase());
      return tags.includes(String(tag).toLowerCase());
    })
    .map(parsePost);
};

export const getRelatedPosts = async (post, limit = 3) => {
  noStore();
  const all = await getPublishedPosts();
  const postCategories = (post?.categories || "").split(",").map((c) => c.trim().toLowerCase()).filter(Boolean);

  return all
    .filter((p) => p.$id !== post?.$id)
    .map((p) => {
      const pCats = (p.categories || "").split(",").map((c) => c.trim().toLowerCase());
      const overlap = pCats.filter((c) => postCategories.includes(c)).length;
      return { post: p, score: overlap };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((item) => item.post);
};
