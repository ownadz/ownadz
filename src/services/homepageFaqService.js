import { databases } from "@/lib/appwrite/client";
import { APPWRITE_CONFIG } from "@/lib/appwrite/config";
import { ID } from "appwrite";

export const getHomepageFaqs = async () => {
  // Disabled: homepage FAQs collection is removed.
  // Keep the function to avoid build/runtime errors.
  return [];
};


export const createFaq = async (
  data
) => {

  return await databases.createDocument(
    APPWRITE_CONFIG.databaseId,
    APPWRITE_CONFIG.homepageFaqCollectionId,
    ID.unique(),
    data
  );
};

export const updateFaq = async (
  id,
  data
) => {

  return await databases.updateDocument(
    APPWRITE_CONFIG.databaseId,
    APPWRITE_CONFIG.homepageFaqCollectionId,
    id,
    data
  );
};

export const deleteFaq = async (
  id
) => {

  return await databases.deleteDocument(
    APPWRITE_CONFIG.databaseId,
    APPWRITE_CONFIG.homepageFaqCollectionId,
    id
  );
};