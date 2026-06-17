"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

import { logoutUser } from "@/services/authService";

export default function AdminShellClient({ children }) {
  const router = useRouter();
  const hasRedirectedRef = useRef(false);

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
    const ONE_HOUR_MS = 60 * 60 * 1000;

    const loginAtRaw = (() => {
      try {
        return localStorage.getItem("adminLoginAt");
      } catch {
        return null;
      }
    })();

    const loginAt = loginAtRaw ? Number(loginAtRaw) : NaN;

    if (!loginAt || Number.isNaN(loginAt)) {
      handleLogout();
      return;
    }

    const expiresAt = loginAt + ONE_HOUR_MS;
    const remaining = expiresAt - Date.now();

    if (remaining <= 0) {
      handleLogout();
      return;
    }

    clearAutoLogoutTimer();
    window.__adminAutoLogoutTimer = setTimeout(() => {
      handleLogout();
    }, remaining);

    return () => {
      clearAutoLogoutTimer();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="min-h-screen flex">
      <aside className="w-64 border-r p-5">
        <h2 className="font-bold text-xl mb-5">Ownadz CMS</h2>

        <ul className="space-y-3">
          <Link href="/admin">Dashboard</Link>
          <br />
          <Link href="/admin/posts">Posts</Link>
          <br />
          <Link href="/admin/pages">Pages</Link>
          <br />
          <Link href="/admin/homepage">Homepage</Link>
          <br />
          <Link href="/admin/services">Services</Link>
          <br />
          <Link href="/admin/media">Media Library</Link>

          <br />
          <Link href="/admin/leads">Leads</Link>
          <br />
          <Link href="/admin/seo">SEO Manager</Link>
          <br />
          <Link href="/admin/settings">Settings</Link>
          <br />
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

