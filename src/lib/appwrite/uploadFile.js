import { Client, Storage, ID } from "appwrite";

const client = new Client()
  .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT)
  .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID);

const storage = new Storage(client);

export async function uploadFile(file) {
  const uploaded = await storage.createFile(
    process.env.NEXT_PUBLIC_BUCKET_ID,
    ID.unique(),
    file
  );

  return storage.getFileView(
    process.env.NEXT_PUBLIC_BUCKET_ID,
    uploaded.$id
  );
}