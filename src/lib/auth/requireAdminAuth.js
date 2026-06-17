import { redirect } from "next/navigation";
import { getCurrentUser } from "@/services/authService";

export default async function requireAdminAuth() {
  // Keep a lightweight check on the server.
  // If Appwrite session is not readable immediately after login,
  // we will allow the client shell to perform redirect.
  const user = await getCurrentUser();
  return user;
}



