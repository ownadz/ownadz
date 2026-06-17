import { databases } from "@/lib/appwrite/client";
import { APPWRITE_CONFIG } from "@/lib/appwrite/config";
import { ID } from "appwrite";
import { Query } from "appwrite";
import { unstable_noStore as noStore } from "next/cache";

export const createCategory = async (data) => {
  return await databases.createDocument(
    APPWRITE_CONFIG.databaseId,
    APPWRITE_CONFIG.categoriesCollectionId,
    ID.unique(),
    data
  );
};

export const getCategories = async () => {
  noStore();
  return await databases.listDocuments(

    APPWRITE_CONFIG.databaseId,
    APPWRITE_CONFIG.categoriesCollectionId
  );
};

export const getCategory = async (id) => {
  noStore();
  return await databases.getDocument(

    APPWRITE_CONFIG.databaseId,
    APPWRITE_CONFIG.categoriesCollectionId,
    id
  );
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
  noStore();

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

  return (
    response.documents[0] ||
    null
  );
};