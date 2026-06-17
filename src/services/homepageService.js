import { databases } from "@/lib/appwrite/client";

import { ID } from "appwrite";

import { APPWRITE_CONFIG } from "@/lib/appwrite/config";

const DATABASE_ID = APPWRITE_CONFIG.databaseId;
const COLLECTION_ID = APPWRITE_CONFIG.homepageCollectionId;



export async function getHomepage() {
  try {
    const response = await databases.listDocuments(
      DATABASE_ID,
      COLLECTION_ID,

    );

    const doc = response.documents?.[0] || null;
    return doc || {
      home_banner_badge: "",
      home_banner_title: "",
      home_banner_des: "",
      home_banner_btn1: "",
      home_banner_btn1link: "",
      home_banner_btn2: "",
      home_banner_btn2link: "",
    };
  } catch (error) {

    console.error("Get Homepage Error:", error);
    return null;
  }
}

export async function saveHomepage(data) {
  try {
    const existing = await getHomepage();

    // Prefer explicit documentId (passed from admin UI). Fallback to existing document.
    const documentId = data?.documentId || existing?.$id;

    if (documentId) {
      return await databases.updateDocument(
        DATABASE_ID,
        COLLECTION_ID,
        documentId,
        {
          ...data,
          // documentId should not be stored as a field
          documentId: undefined,
          updated_at: new Date().toISOString(),
        }
      );
    }

    return await databases.createDocument(
        DATABASE_ID,
        COLLECTION_ID,
        ID.unique(),
        {
          // do not inject fields that may not exist in the collection schema
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
          // Only send fields that are supported by the collection schema.
          // This prevents Appwrite "Unknown attribute" errors.
          ...Object.fromEntries(
            Object.entries(data || {}).filter(
              ([key]) => ![
                "documentId",
                "slug",
                "status"
              ].includes(key)
            )
          ),
        }
      );
  } catch (error) {
    console.error("Save Homepage Error:", error);
    throw error;
  }
}