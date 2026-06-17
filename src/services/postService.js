import { databases } from "@/lib/appwrite/client";
import { APPWRITE_CONFIG } from "@/lib/appwrite/config";
import { ID } from "appwrite";
import { Query } from "appwrite";

export const createPost = async (data) => {
  return await databases.createDocument(
    APPWRITE_CONFIG.databaseId,
    APPWRITE_CONFIG.postsCollectionId,
    ID.unique(),
    data
  );
};

export const getPosts = async () => {
  return await databases.listDocuments(
    APPWRITE_CONFIG.databaseId,
    APPWRITE_CONFIG.postsCollectionId
  );
};

export const getPost = async (id) => {
  return await databases.getDocument(
    APPWRITE_CONFIG.databaseId,
    APPWRITE_CONFIG.postsCollectionId,
    id
  );
};

export const updatePost = async (id, data) => {
  return await databases.updateDocument(
    APPWRITE_CONFIG.databaseId,
    APPWRITE_CONFIG.postsCollectionId,
    id,
    data
  );
};

export const deletePost = async (id) => {
  return await databases.deleteDocument(
    APPWRITE_CONFIG.databaseId,
    APPWRITE_CONFIG.postsCollectionId,
    id
  );
};


export const getPostBySlug = async (
  slug
) => {
  const response =
    await databases.listDocuments(
      APPWRITE_CONFIG.databaseId,
      APPWRITE_CONFIG.postsCollectionId,
      [Query.equal("slug", slug)]
    );

  return response.documents[0];
};

export const getPostsCount = async () => {
  const response = await databases.listDocuments(
    APPWRITE_CONFIG.databaseId,
    APPWRITE_CONFIG.postsCollectionId
  );

  return response.total;
};