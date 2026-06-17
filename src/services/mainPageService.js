import { databases } from "@/lib/appwrite/client";
import { APPWRITE_CONFIG } from "@/lib/appwrite/config";
import { Query } from "appwrite";

// Use existing "pages" collection as storage for Main Pages (= About)
export const getMainPagesBySlug = async (slug) => {
  const response = await databases.listDocuments(
    APPWRITE_CONFIG.databaseId,
    APPWRITE_CONFIG.pagesCollectionId,
    [Query.equal("slug", slug)]
  );

  return response?.documents || [];
};

export const getMainPageBySlug = async (slug) => {
  const docs = await getMainPagesBySlug(slug);
  return docs[0] || null;
};


