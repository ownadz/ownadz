import { databases } from "@/lib/appwrite/client";
import { APPWRITE_CONFIG } from "@/lib/appwrite/config";
import { ID } from "appwrite";
import { unstable_noStore as noStore } from "next/cache";

const toPlainObject = (value) => {
  if (value === null || value === undefined) return value;

  try {
    return JSON.parse(JSON.stringify(value));
  } catch (error) {
    return value;
  }
};

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
  const response = await databases.listDocuments(
    APPWRITE_CONFIG.databaseId,
    APPWRITE_CONFIG.servicesCollectionId
  );

  return {
    ...response,
    documents: (response.documents || []).map((doc) => toPlainObject(doc)),
  };
};

export const getService = async (id) => {
  noStore();
  const service = await databases.getDocument(
    APPWRITE_CONFIG.databaseId,
    APPWRITE_CONFIG.servicesCollectionId,
    id
  );

  return toPlainObject(service);
};

export const getServiceBySlug = async (slug) => {
  noStore();
  const response = await databases.listDocuments(
    APPWRITE_CONFIG.databaseId,
    APPWRITE_CONFIG.servicesCollectionId
  );

  const item = response.documents.find((doc) => doc.slug === slug);
  return toPlainObject(item || null);
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

