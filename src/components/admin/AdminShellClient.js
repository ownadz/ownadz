"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

import { logoutUser, getCurrentUser } from "@/services/authService"; // 1. Imported getCurrentUser

export default function AdminShellClient({ children }) {
  const router = useRouter();
  const hasRedirectedRef = useRef(false);
  const [isVerifying, setIsVerifying] = useState(true); // 2. Added a loading block

  const clearAutoLogoutTimer = () => {
    try {
      if (window.__adminAutoLogoutTimer) {
        clearTimeout(window.__adminAutoLogoutTimer);
      }
    } catch {}
    try {
      window.__adminAutoLogoutTimer = null;
    } catch {}
  };

  const handleLogout = async () => {
    try {
      await logoutUser();
    } finally {
      try {
        localStorage.removeItem("adminLoginAt");
      } catch {}

      clearAutoLogoutTimer();

      if (!hasRedirectedRef.current) {
        hasRedirectedRef.current = true;
        router.push("/login");
      }
    }
  };

  useEffect(() => {
    const verifyAuthAndSetupTimer = async () => {
      try {
        // 3. Fallback/Verification check against actual Appwrite Client instance
        const user = await getCurrentUser();
        if (!user) {
          await handleLogout();
          return;
        }

        // 4. Now evaluate the local storage timer
        const ONE_HOUR_MS = 60 * 60 * 1000;
        let loginAtRaw = null;
        try {
          loginAtRaw = localStorage.getItem("adminLoginAt");
        } catch {}

        // If the timestamp was missing during the transition, heal it using current time
        if (!loginAtRaw) {
          loginAtRaw = String(Date.now());
          try {
            localStorage.setItem("adminLoginAt", loginAtRaw);
          } catch {}
        }

        const loginAt = Number(loginAtRaw);
        const expiresAt = loginAt + ONE_HOUR_MS;
        const remaining = expiresAt - Date.now();

        if (remaining <= 0) {
          await handleLogout();
          return;
        }

        clearAutoLogoutTimer();
        window.__adminAutoLogoutTimer = setTimeout(() => {
          handleLogout();
        }, remaining);

        setIsVerifying(false); // Session confirmed valid!
      } catch (err) {
        console.error("Auth verification step failed:", err);
        await handleLogout();
      }
    };

    verifyAuthAndSetupTimer();

    return () => {
      clearAutoLogoutTimer();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // 5. Block rendering the sidebar or kids if verification is pending
  if (isVerifying) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <p className="animate-pulse tracking-wide text-sm">Verifying Admin Session...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex">
      <aside className="w-64 border-r p-5">
        <h2 className="font-bold text-xl mb-5">Ownadz CMS</h2>

        <ul className="flex flex-col space-y-3">
          <Link href="/admin">Dashboard</Link>
          <Link href="/admin/posts">Posts</Link>
          <Link href="/admin/pages">Pages</Link>
          <Link href="/admin/homepage">Homepage</Link>
          <Link href="/admin/services">Services</Link>
          <Link href="/admin/media">Media Library</Link>
          <Link href="/admin/leads">Leads</Link>
          <Link href="/admin/seo">SEO Manager</Link>
          <Link href="/admin/settings">Settings</Link>
        </ul>

        <button
          onClick={handleLogout}
          className="mt-10 w-full rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600"
        >
          Logout
        </button>
      </aside>

      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}