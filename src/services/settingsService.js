import { databases } from "@/lib/appwrite/client";
import { APPWRITE_CONFIG } from "@/lib/appwrite/config";
import { ID } from "appwrite";

export const getSettings = async () => {
  const response =
    await databases.listDocuments(
      APPWRITE_CONFIG.databaseId,
      APPWRITE_CONFIG.settingsCollectionId
    );

  return response.documents[0] || null;
};

export const createSettings = async (
  data
) => {
  return await databases.createDocument(
    APPWRITE_CONFIG.databaseId,
    APPWRITE_CONFIG.settingsCollectionId,
    ID.unique(),
    data
  );
};

export const updateSettings = async (
  id,
  data
) => {
  return await databases.updateDocument(
    APPWRITE_CONFIG.databaseId,
    APPWRITE_CONFIG.settingsCollectionId,
    id,
    data
  );
};