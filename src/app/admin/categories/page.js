import Link from "next/link";
import { Query } from "appwrite";
import { getCategories } from "@/services/categoryService";
import CategoryAdminTable from "@/components/admin/CategoryAdminTable";

export const dynamic = "force-dynamic";

export default async function CategoriesPage() {
  const response = await getCategories([Query.orderAsc("title")]);
  const categories = response.documents || [];

  return (
    <div className="p-6">
      <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Content</p>
          <h1 className="text-3xl font-bold text-slate-900">Categories</h1>
        </div>

        <Link
          href="/admin/categories/create"
          className="inline-flex items-center justify-center rounded-lg bg-black px-4 py-2.5 font-medium text-white transition-colors hover:bg-slate-800"
        >
          + Add Category
        </Link>
      </div>

      <div className="mb-4 flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-600">
        <span>{categories.length} total categories</span>
        <span>Sorted by title: A–Z</span>
      </div>

      <CategoryAdminTable initialCategories={categories} />
    </div>
  );
}