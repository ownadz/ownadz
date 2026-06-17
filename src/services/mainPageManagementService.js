import { databases } from "@/lib/appwrite/client";
import { APPWRITE_CONFIG } from "@/lib/appwrite/config";
import { ID, Query } from "appwrite";

/**
 * Main Pages Management Service
 * Manages pages like /about, /contact, /services stored in pages collection
 * Hero/SEO fields are stored in stringified JSON content since pages collection
 * only natively supports: title, slug, content, seoTitle, seoDescription, status
 */

const normalizeDocument = (doc) => {
  const baseDoc = JSON.parse(JSON.stringify(doc));
  const documentId = baseDoc.$id || baseDoc.id;
  return {
    ...baseDoc,
    $id: documentId,
    id: documentId,
  };
};

const expandMainPage = (doc) => {
  const baseDoc = normalizeDocument(doc);

  if (!baseDoc.content || typeof baseDoc.content !== "string") {
    return { ...baseDoc, isMainPage: false };
  }

  try {
    const parsed = JSON.parse(baseDoc.content);
    if (!parsed.isMainPage) {
      return { ...baseDoc, isMainPage: false };
    }

    return {
      ...baseDoc,
      content: parsed.content || baseDoc.content,
      heroTitle: parsed.heroTitle || "",
      heroDescription: parsed.heroDescription || "",
      heroButtonText: parsed.heroButtonText || "",
      heroButtonLink: parsed.heroButtonLink || "",
      seoKeywords: parsed.seoKeywords || "",
      isMainPage: true,
    };
  } catch {
    return { ...baseDoc, isMainPage: false };
  }
};

import { unstable_noStore as noStore } from "next/cache";

export const getAllMainPages = async () => {
  noStore();
  try {
    const response = await databases.listDocuments(
      APPWRITE_CONFIG.databaseId,
      APPWRITE_CONFIG.pagesCollectionId
    );

    return (response.documents || [])
      .map(expandMainPage)
      .filter((doc) => doc.isMainPage);
  } catch (error) {
    console.error("Error fetching main pages:", error);
    return [];
  }
};

export const getMainPageBySlug = async (slug) => {
  noStore();
  if (!slug) return null;

  try {
    const response = await databases.listDocuments(
      APPWRITE_CONFIG.databaseId,
      APPWRITE_CONFIG.pagesCollectionId,
      [Query.equal("slug", slug)]
    );
    const doc = response.documents[0] || null;
    if (!doc) return null;

    const mainPage = expandMainPage(doc);
    return mainPage.isMainPage ? mainPage : null;
  } catch (error) {
    console.error(`Error fetching main page with slug ${slug}:`, error);
    return null;
  }
};

export const getMainPageById = async (id) => {
  if (!id) return null;

  try {
    const doc = await databases.getDocument(
      APPWRITE_CONFIG.databaseId,
      APPWRITE_CONFIG.pagesCollectionId,
      id
    );
    if (!doc) return null;

    const mainPage = expandMainPage(doc);
    return mainPage.isMainPage ? mainPage : null;
  } catch (error) {
    console.error(`Error fetching main page by id ${id}:`, error);
    return null;
  }
};

export const createMainPage = async (data) => {
  if (!data.slug || !data.title) {
    throw new Error("slug and title are required");
  }

  try {
    const existing = await getMainPageBySlug(data.slug);
    if (existing) {
      throw new Error(`A main page with slug "${data.slug}" already exists`);
    }

    // Store hero/seo fields in nested content JSON and mark this as a main page
    const payload = {
      title: data.title,
      slug: data.slug.toLowerCase(),
      seoTitle: data.seoTitle || data.title,
      seoDescription: data.seoDescription || "",
      status: data.status || "published",
      content: JSON.stringify(
        {
          isMainPage: true,
          content: data.content || "",
          heroTitle: data.heroTitle || "",
          heroDescription: data.heroDescription || "",
          heroButtonText: data.heroButtonText || "",
          heroButtonLink: data.heroButtonLink || "",
          seoKeywords: data.seoKeywords || "",
        },
        null,
        2
      ),
    };

    return await databases.createDocument(
      APPWRITE_CONFIG.databaseId,
      APPWRITE_CONFIG.pagesCollectionId,
      ID.unique(),
      payload
    );
  } catch (error) {
    console.error("Error creating main page:", error);
    throw error;
  }
};

export const updateMainPage = async (id, data) => {
  if (!id) {
    throw new Error("Document ID is required");
  }

  try {
    // Don't allow slug changes
    const payload = {
      title: data.title,
      seoTitle: data.seoTitle || data.title,
      seoDescription: data.seoDescription || "",
      status: data.status || "published",
      content: JSON.stringify(
        {
          isMainPage: true,
          content: data.content || "",
          heroTitle: data.heroTitle || "",
          heroDescription: data.heroDescription || "",
          heroButtonText: data.heroButtonText || "",
          heroButtonLink: data.heroButtonLink || "",
          seoKeywords: data.seoKeywords || "",
        },
        null,
        2
      ),
    };

    return await databases.updateDocument(
      APPWRITE_CONFIG.databaseId,
      APPWRITE_CONFIG.pagesCollectionId,
      id,
      payload
    );
  } catch (error) {
    console.error("Error updating main page:", error);
    throw error;
  }
};

export const deleteMainPage = async (id) => {
  if (!id) {
    throw new Error("Document ID is required");
  }

  try {
    return await databases.deleteDocument(
      APPWRITE_CONFIG.databaseId,
      APPWRITE_CONFIG.pagesCollectionId,
      id
    );
  } catch (error) {
    console.error("Error deleting main page:", error);
    throw error;
  }
};

