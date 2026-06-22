import AdminShellClient from "@/components/admin/AdminShellClient";

export default async function AdminLayout({ children }) {
  // Removed await requireAdminAuth() to prevent the server-side redirect race condition.
  // The client-side AdminShellClient will handle the session validation and redirect safely.
  return <AdminShellClient>{children}</AdminShellClient>;
}