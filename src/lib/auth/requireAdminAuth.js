import { redirect } from "next/navigation";
import { getCurrentUser } from "@/services/authService";

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

export default async function requireAdminAuth() {
  // Server-side guard for /admin/*.
  // Appwrite session cookies/tokens can lag right after login / direct navigation,
  // so we retry a few times before redirecting to avoid a login->/login loop.
  const MAX_ATTEMPTS = 8; // 8 * 250ms = 2.0s max
  const DELAY_MS = 250;

  for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt++) {
    try {
      const user = await getCurrentUser();
      if (user) return user;
    } catch {
      // ignore and retry
    }

    if (attempt < MAX_ATTEMPTS) {
      await sleep(DELAY_MS);
    }
  }

  redirect("/login");
}

export const __adminAuthGuardVersion = 2;












