import requireAdminAuth from "@/lib/auth/requireAdminAuth";

import AdminShellClient from "@/components/admin/AdminShellClient";

export default async function AdminLayout({ children }) {
  // Don't redirect here; Appwrite session may not be visible to the server
  // immediately after login. Client shell will handle redirect + 1-hour timer.
  await requireAdminAuth();

  return <AdminShellClient>{children}</AdminShellClient>;
}




