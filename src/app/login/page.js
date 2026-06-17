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

  // Clear client-side timer/timestamp before trying to create a new session.
  try {
    localStorage.removeItem("adminLoginAt");
  } catch {}

  try {
    const session = await loginUser(email, password);

    console.log("SESSION:", session);

    // Start 1-hour admin session timer for auto-logout.
    try {
      localStorage.setItem("adminLoginAt", String(Date.now()));
    } catch {}

    alert("Login Success");

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