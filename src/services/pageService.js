import { databases } from "@/lib/appwrite/client";
import { APPWRITE_CONFIG } from "@/lib/appwrite/config";
import { ID, Query } from "appwrite";
import { unstable_noStore as noStore } from "next/cache";

export const createPage = async (data) => {
  return await databases.createDocument(
    APPWRITE_CONFIG.databaseId,
    APPWRITE_CONFIG.pagesCollectionId,
    ID.unique(),
    data
  );
};

export const getPages = async () => {
  noStore();
  return await databases.listDocuments(
    APPWRITE_CONFIG.databaseId,
    APPWRITE_CONFIG.pagesCollectionId
  );
};

export const getPage = async (id) => {
  if (!id) {
    return null;
  }

  return await databases.getDocument(
    APPWRITE_CONFIG.databaseId,
    APPWRITE_CONFIG.pagesCollectionId,
    id
  );
};

export const updatePage = async (
  id,
  data
) => {
  return await databases.updateDocument(
    APPWRITE_CONFIG.databaseId,
    APPWRITE_CONFIG.pagesCollectionId,
    id,
    data
  );
};

export const deletePage = async (id) => {
  return await databases.deleteDocument(
    APPWRITE_CONFIG.databaseId,
    APPWRITE_CONFIG.pagesCollectionId,
    id
  );
};

export const getPageBySlug = async (slug) => {
  const response = await databases.listDocuments(
    APPWRITE_CONFIG.databaseId,
    APPWRITE_CONFIG.pagesCollectionId,
    [
      Query.equal("slug", slug),
    ]
  );

  return response.documents[0] || null;
};
export const getPagesCount = async () => {
  const response = await databases.listDocuments(
    APPWRITE_CONFIG.databaseId,
    APPWRITE_CONFIG.pagesCollectionId
  );

  return response.total;
};