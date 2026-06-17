import { account } from "@/lib/appwrite/client";

export const loginUser = async (email, password) => {
  // Appwrite throws if a session already exists in the same browser.
  // Best-effort cleanup before creating a new session.
  try {
    await account.deleteSession("current");
  } catch {
    // ignore: no active session
  }

  return await account.createEmailPasswordSession(email, password);
};

export const logoutUser = async () => {
  try {
    await account.deleteSession("current");
  } catch (error) {
    console.log("No active session");
  }
};

export const getCurrentUser = async () => {
  try {
    return await account.get();
  } catch {
    return null;
  }
};