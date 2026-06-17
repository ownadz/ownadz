import { databases } from "@/lib/appwrite/client";
import { APPWRITE_CONFIG } from "@/lib/appwrite/config";
import { ID } from "appwrite";

export const getSEO = async () => {

  const response =
    await databases.listDocuments(
      APPWRITE_CONFIG.databaseId,
      APPWRITE_CONFIG.seoCollectionId
    );

  return response.documents[0] || null;
};

export const saveSEO = async (
  data
) => {

  const existing =
    await getSEO();

  if (existing) {

    return await databases.updateDocument(
      APPWRITE_CONFIG.databaseId,
      APPWRITE_CONFIG.seoCollectionId,
      existing.$id,
      data
    );

  }

  return await databases.createDocument(
    APPWRITE_CONFIG.databaseId,
    APPWRITE_CONFIG.seoCollectionId,
    ID.unique(),
    data
  );
};