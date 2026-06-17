import { databases } from "@/lib/appwrite/client";
import { APPWRITE_CONFIG } from "@/lib/appwrite/config";
import { ID, Query } from "appwrite";

export const createService = async (data) => {
  return await databases.createDocument(
    APPWRITE_CONFIG.databaseId,
    APPWRITE_CONFIG.servicesCollectionId,
    ID.unique(),
    data
  );
};

export const getServices = async () => {
  return await databases.listDocuments(
    APPWRITE_CONFIG.databaseId,
    APPWRITE_CONFIG.servicesCollectionId
  );
};

export const getService = async (id) => {

  return await databases.getDocument(
    APPWRITE_CONFIG.databaseId,
    APPWRITE_CONFIG.servicesCollectionId,
    id
  );

};

export const getServiceBySlug = async (slug) => {
  const response = await databases.listDocuments(
    APPWRITE_CONFIG.databaseId,
    APPWRITE_CONFIG.servicesCollectionId
  );

  console.log(response.documents);

  return response.documents.find(
    (item) => item.slug === slug
  );
};

export const updateService = async (
  id,
  data
) => {
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
  const response = await databases.listDocuments(
    APPWRITE_CONFIG.databaseId,
    APPWRITE_CONFIG.servicesCollectionId
  );

  return response.total;
};