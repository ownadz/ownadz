import { databases } from "@/lib/appwrite/client";
import { APPWRITE_CONFIG } from "@/lib/appwrite/config";
import { ID } from "appwrite";
import { Query } from "appwrite";

const toPlainObject = (value) => {
  if (value === null || value === undefined) return value;

  try {
    return JSON.parse(JSON.stringify(value));
  } catch (error) {
    return value;
  }
};

// NOTE: These functions intentionally avoid `unstable_noStore()` from
// "next/cache" because they are also called from client components
// (e.g. the admin Post Editor). Server components that need fresh data
// should declare `export const dynamic = "force-dynamic"`.

export const createCategory = async (data) => {
  return await databases.createDocument(
    APPWRITE_CONFIG.databaseId,
    APPWRITE_CONFIG.categoriesCollectionId,
    ID.unique(),
    data
  );
};

export const getCategories = async (queries = []) => {
  const response = await databases.listDocuments(
    APPWRITE_CONFIG.databaseId,
    APPWRITE_CONFIG.categoriesCollectionId,
    queries
  );

  return {
    ...response,
    documents: (response.documents || []).map((doc) => toPlainObject(doc)),
  };
};

export const getCategory = async (id) => {
  const document = await databases.getDocument(
    APPWRITE_CONFIG.databaseId,
    APPWRITE_CONFIG.categoriesCollectionId,
    id
  );

  return toPlainObject(document);
};

export const updateCategory = async (
  id,
  data
) => {
  return await databases.updateDocument(
    APPWRITE_CONFIG.databaseId,
    APPWRITE_CONFIG.categoriesCollectionId,
    id,
    data
  );
};

export const deleteCategory = async (id) => {
  return await databases.deleteDocument(
    APPWRITE_CONFIG.databaseId,
    APPWRITE_CONFIG.categoriesCollectionId,
    id
  );
};

export const getCategoryBySlug = async (
  slug
) => {
  const response =

    await databases.listDocuments(
      APPWRITE_CONFIG.databaseId,
      APPWRITE_CONFIG.categoriesCollectionId,
      [
        Query.equal(
          "slug",
          slug
        ),
      ]
    );

  return toPlainObject(response.documents[0] || null);
};