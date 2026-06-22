"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { loginUser } from "@/services/authService";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

const handleLogin = async (e) => {
  e.preventDefault();

  try {
    localStorage.removeItem("adminLoginAt");
  } catch {}

  try {
    const session = await loginUser(email, password);
    console.log("SESSION:", session);

    try {
      localStorage.setItem("adminLoginAt", String(Date.now()));
    } catch {}

    alert("Login Success");

    // 1. Force clear the Next.js server-side cache for the admin layout/dashboard
    try {
      await fetch("/api/revalidate", { // Adjust this path to match where your POST revalidate route is located
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ path: "/admin" }),
      });
    } catch (revalErr) {
      console.error("Revalidation failed, attempting standard navigation...", revalErr);
    }

    // 2. Refresh the client-side router to wipe out stale client-side cache data
    router.refresh();

    // 3. Now route to the dashboard safely
    router.push("/admin/dashboard");
  } catch (error) {
    console.error(error);
    alert(error.message);
  }
};

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form
        onSubmit={handleLogin}
        className="w-full max-w-md border p-6 rounded-lg"
      >
        <h1 className="text-2xl font-bold mb-5">
          Admin Login
        </h1>

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-3 mb-4 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-3 mb-4 rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="submit"
          className="w-full bg-black text-white p-3 rounded"
        >
          Login
        </button>
      </form>
    </div>
  );
}