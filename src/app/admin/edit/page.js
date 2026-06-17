"use client";

import { useEffect, useState } from "react";

export default function AdminEditPlaceholderPage() {
  const [now, setNow] = useState(Date.now());

  useEffect(() => {
    const t = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Admin Edit</h1>
      <p className="text-gray-700">
        Edit landing page is a placeholder. Use the specific edit pages (categories/pages/posts/services) from the admin navigation.
      </p>
      <p className="text-sm text-gray-500 mt-4">{new Date(now).toLocaleString()}</p>
    </div>
  );
}

