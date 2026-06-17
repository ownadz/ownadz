import { databases } from "@/lib/appwrite/client";
import { APPWRITE_CONFIG } from "@/lib/appwrite/config";
import { ID, Query } from "appwrite";

const listDocuments = async (collectionId) => {
  if (!collectionId) {
    console.warn(
      "Missing Appwrite collectionId for homepage list collection; returning empty array."
    );
    return [];
  }

  const response = await databases.listDocuments(
    APPWRITE_CONFIG.databaseId,
    collectionId,
    [Query.orderAsc("sortOrder")]
  );

  return response.documents || [];
};

const createDocument = async (collectionId, data) => {
  if (!collectionId) {
    console.warn("Missing Appwrite collectionId for createDocument; returning null.");
    return null;
  }

  return await databases.createDocument(
    APPWRITE_CONFIG.databaseId,
    collectionId,
    ID.unique(),
    data
  );
};

const updateDocument = async (collectionId, documentId, data) => {
  if (!collectionId || !documentId) {
    console.warn(
      "Missing Appwrite collectionId or documentId for updateDocument; returning null."
    );
    return null;
  }

  return await databases.updateDocument(
    APPWRITE_CONFIG.databaseId,
    collectionId,
    documentId,
    data
  );
};

const deleteDocument = async (collectionId, documentId) => {
  if (!collectionId || !documentId) {
    console.warn(
      "Missing Appwrite collectionId or documentId for deleteDocument; skipping delete."
    );
    return null;
  }

  return await databases.deleteDocument(
    APPWRITE_CONFIG.databaseId,
    collectionId,
    documentId
  );
};

const getSingleDocument = async (collectionId) => {
  if (!collectionId) {
    console.warn(
      "Missing Appwrite collectionId for homepage single-item collection; returning null."
    );
    return null;
  }

  const response = await databases.listDocuments(
    APPWRITE_CONFIG.databaseId,
    collectionId
  );

  return response.documents[0] || null;
};

export const getHomepageServices = async () => [];



export const createHomepageService = async (data) => {
  return await createDocument(APPWRITE_CONFIG.homepageServicesCollectionId, data);
};

export const updateHomepageService = async (id, data) => {
  return await updateDocument(APPWRITE_CONFIG.homepageServicesCollectionId, id, data);
};

export const deleteHomepageService = async (id) => {
  return await deleteDocument(APPWRITE_CONFIG.homepageServicesCollectionId, id);
};

export const getHomepageBrands = async () => [];


export const createHomepageBrand = async (data) => {
  return await createDocument(APPWRITE_CONFIG.homepageBrandsCollectionId, data);
};

export const updateHomepageBrand = async (id, data) => {
  return await updateDocument(APPWRITE_CONFIG.homepageBrandsCollectionId, id, data);
};

export const deleteHomepageBrand = async (id) => {
  return await deleteDocument(APPWRITE_CONFIG.homepageBrandsCollectionId, id);
};

export const getHomepageFeatures = async () => [];


export const createHomepageFeature = async (data) => {
  return await createDocument(APPWRITE_CONFIG.homepageFeaturesCollectionId, data);
};

export const updateHomepageFeature = async (id, data) => {
  return await updateDocument(APPWRITE_CONFIG.homepageFeaturesCollectionId, id, data);
};

export const deleteHomepageFeature = async (id) => {
  return await deleteDocument(APPWRITE_CONFIG.homepageFeaturesCollectionId, id);
};

export const getHomepageWhyChoose = async () => [];


export const createHomepageWhyChoose = async (data) => {
  return await createDocument(APPWRITE_CONFIG.homepageWhyChooseCollectionId, data);
};

export const updateHomepageWhyChoose = async (id, data) => {
  return await updateDocument(APPWRITE_CONFIG.homepageWhyChooseCollectionId, id, data);
};

export const deleteHomepageWhyChoose = async (id) => {
  return await deleteDocument(APPWRITE_CONFIG.homepageWhyChooseCollectionId, id);
};

export const getHomepageResults = async () => [];


export const createHomepageResult = async (data) => {
  return await createDocument(APPWRITE_CONFIG.homepageResultsCollectionId, data);
};

export const updateHomepageResult = async (id, data) => {
  return await updateDocument(APPWRITE_CONFIG.homepageResultsCollectionId, id, data);
};

export const deleteHomepageResult = async (id) => {
  return await deleteDocument(APPWRITE_CONFIG.homepageResultsCollectionId, id);
};

export const getHomepageProcess = async () => [];


export const createHomepageProcessStep = async (data) => {
  return await createDocument(APPWRITE_CONFIG.homepageProcessCollectionId, data);
};

export const updateHomepageProcessStep = async (id, data) => {
  return await updateDocument(APPWRITE_CONFIG.homepageProcessCollectionId, id, data);
};

export const deleteHomepageProcessStep = async (id) => {
  return await deleteDocument(APPWRITE_CONFIG.homepageProcessCollectionId, id);
};

export const getHomepageCta = async () => ({
  title: "",
  description: "",
  buttonText: "",
  buttonLink: "",
});


export const saveHomepageCta = async (data) => {
  const existing = await getHomepageCta();
  if (existing) {
    return await updateDocument(APPWRITE_CONFIG.homepageCtaCollectionId, existing.$id, data);
  }
  return await createDocument(APPWRITE_CONFIG.homepageCtaCollectionId, data);
};

export const getHomepageContact = async () => ({
  title: "",
  description: "",
  email: "",
  phone: "",
  address: "",
  support: "",
});


export const saveHomepageContact = async (data) => {
  const existing = await getHomepageContact();
  if (existing) {
    return await updateDocument(APPWRITE_CONFIG.homepageContactCollectionId, existing.$id, data);
  }
  return await createDocument(APPWRITE_CONFIG.homepageContactCollectionId, data);
};
