import requireAdminAuth from "@/lib/auth/requireAdminAuth";

export default async function AdminPagesLayout({
  children,
}) {
  await requireAdminAuth();
  return <div>{children}</div>;
}

