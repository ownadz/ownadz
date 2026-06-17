import { databases } from "@/lib/appwrite/client";
import { APPWRITE_CONFIG } from "@/lib/appwrite/config";
import { ID } from "appwrite";
import { unstable_noStore as noStore } from "next/cache";

export const createService = async (data) => {
  return await databases.createDocument(
    APPWRITE_CONFIG.databaseId,
    APPWRITE_CONFIG.servicesCollectionId,
    ID.unique(),
    data
  );
};

export const getServices = async () => {
  noStore();
  return await databases.listDocuments(
    APPWRITE_CONFIG.databaseId,
    APPWRITE_CONFIG.servicesCollectionId
  );
};

export const getService = async (id) => {
  noStore();
  return await databases.getDocument(
    APPWRITE_CONFIG.databaseId,
    APPWRITE_CONFIG.servicesCollectionId,
    id
  );
};

export const getServiceBySlug = async (slug) => {
  noStore();
  const response = await databases.listDocuments(
    APPWRITE_CONFIG.databaseId,
    APPWRITE_CONFIG.servicesCollectionId
  );

  return response.documents.find((item) => item.slug === slug);
};

export const updateService = async (id, data) => {
  return await databases.updateDocument(
    APPWRITE_CONFIG.databaseId,
    APPWRITE_CONFIG.servicesCollectionId,
    id,
    data
  );
};

export const deleteService = async (id) => {
  return await databases.deleteDocument(
    APPWRITE_CONFIG.databaseId,
    APPWRITE_CONFIG.servicesCollectionId,
    id
  );
};

export const getServicesCount = async () => {
  noStore();
  const response = await databases.listDocuments(
    APPWRITE_CONFIG.databaseId,
    APPWRITE_CONFIG.servicesCollectionId
  );

  return response.total;
};

