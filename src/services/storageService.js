import { storage } from "@/lib/appwrite/client";
import { APPWRITE_CONFIG } from "@/lib/appwrite/config";
import { ID } from "appwrite";

export const uploadImage = async (file) => {
  const response = await storage.createFile(
    APPWRITE_CONFIG.bucketId,
    ID.unique(),
    file
  );

  return response;
};

export const getImagePreview = (fileId) => {
  return storage.getFileView(
    APPWRITE_CONFIG.bucketId,
    fileId
  );
};



export const uploadFile = async (file) => {
  return await storage.createFile(
    APPWRITE_CONFIG.bucketId,
    ID.unique(),
    file
  );
};

export const deleteFile = async (fileId) => {
  return await storage.deleteFile(
    APPWRITE_CONFIG.bucketId,
    fileId
  );
};

export const deleteImage = async (
  fileId
) => {
  return await storage.deleteFile(
    APPWRITE_CONFIG.bucketId,
    fileId
  );
};
export const getAllFiles = async () => {
  return await storage.listFiles(
    APPWRITE_CONFIG.bucketId
  );
};