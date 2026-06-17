import { databases } from "@/lib/appwrite/client";
import { APPWRITE_CONFIG } from "@/lib/appwrite/config";
import { ID } from "appwrite";

export const createLead = async (data) => {
  return await databases.createDocument(
    APPWRITE_CONFIG.databaseId,
    APPWRITE_CONFIG.leadsCollectionId,
    ID.unique(),
    data
  );
};

export const getLeads = async () => {
  return await databases.listDocuments(
    APPWRITE_CONFIG.databaseId,
    APPWRITE_CONFIG.leadsCollectionId
  );
};

export const getLead = async (id) => {
  return await databases.getDocument(
    APPWRITE_CONFIG.databaseId,
    APPWRITE_CONFIG.leadsCollectionId,
    id
  );
};

export const updateLead = async (
  id,
  data
) => {
  return await databases.updateDocument(
    APPWRITE_CONFIG.databaseId,
    APPWRITE_CONFIG.leadsCollectionId,
    id,
    data
  );
};

export const deleteLead = async (id) => {
  return await databases.deleteDocument(
    APPWRITE_CONFIG.databaseId,
    APPWRITE_CONFIG.leadsCollectionId,
    id
  );
};

export const getLeadsCount = async () => {
  const response = await databases.listDocuments(
    APPWRITE_CONFIG.databaseId,
    APPWRITE_CONFIG.leadsCollectionId
  );

  return response.total;
};