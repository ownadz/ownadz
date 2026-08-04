"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { deleteCategory } from "@/services/categoryService";

const getSortValue = (category, key) => {
  if (key === "slug") return (category.slug || "").toLowerCase();
  if (key === "date") return new Date(category.$createdAt || 0).getTime();
  return (category.title || "").toLowerCase();
};

const normalizeCategories = (items = []) =>
  Array.isArray(items)
    ? items.map((item) => {
        if (!item || typeof item !== "object") return item;

        try {
          return JSON.parse(JSON.stringify(item));
        } catch (error) {
          return item;
        }
      })
    : [];

export default function CategoryAdminTable({ initialCategories = [] }) {
  const router = useRouter();
  const [categories, setCategories] = useState(() => normalizeCategories(initialCategories));
  const [query, setQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [sortBy, setSortBy] = useState("title");
  const [sortOrder, setSortOrder] = useState("asc");
  const [selectedIds, setSelectedIds] = useState([]);
  const [bulkAction, setBulkAction] = useState("delete");
  const [processing, setProcessing] = useState(false);

  const filteredCategories = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    const items = categories.filter((category) => {
      const matchesStatus = statusFilter === "all" || (category.status || "active") === statusFilter;
      const matchesQuery =
        !normalizedQuery ||
        [category.title, category.slug, category.description || ""]
          .join(" ")
          .toLowerCase()
          .includes(normalizedQuery);

      return matchesStatus && matchesQuery;
    });

    items.sort((a, b) => {
      const aValue = getSortValue(a, sortBy);
      const bValue = getSortValue(b, sortBy);

      if (typeof aValue === "number" && typeof bValue === "number") {
        return sortOrder === "asc" ? aValue - bValue : bValue - aValue;
      }

      const comparison = String(aValue).localeCompare(String(bValue));
      return sortOrder === "asc" ? comparison : comparison * -1;
    });

    return items;
  }, [categories, query, statusFilter, sortBy, sortOrder]);

  const allVisibleSelected =
    filteredCategories.length > 0 && filteredCategories.every((category) => selectedIds.includes(category.$id));

  const toggleSelectAll = () => {
    if (allVisibleSelected) {
      setSelectedIds((prev) => prev.filter((id) => !filteredCategories.some((category) => category.$id === id)));
      return;
    }

    setSelectedIds((prev) => {
      const next = new Set(prev);
      filteredCategories.forEach((category) => next.add(category.$id));
      return [...next];
    });
  };

  const toggleSelected = (id) => {
    setSelectedIds((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]));
  };

  const applyBulkAction = async () => {
    if (selectedIds.length === 0) return;

    if (bulkAction !== "delete") {
      return;
    }

    const confirmed = confirm(`Delete ${selectedIds.length} selected categories?`);
    if (!confirmed) return;

    setProcessing(true);

    try {
      await Promise.all(selectedIds.map((id) => deleteCategory(id)));
      await fetch("/api/revalidate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ path: "/admin/categories" }),
      });

      const remaining = categories.filter((category) => !selectedIds.includes(category.$id));
      setCategories(remaining);
      setSelectedIds([]);
      router.refresh();
    } catch (error) {
      alert(error?.message || "Bulk delete failed.");
    } finally {
      setProcessing(false);
    }
  };

  const handleSingleDelete = async (id) => {
    const confirmed = confirm("Delete this category?");
    if (!confirmed) return;

    try {
      await deleteCategory(id);
      await fetch("/api/revalidate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ path: "/admin/categories" }),
      });

      const remaining = categories.filter((category) => category.$id !== id);
      setCategories(remaining);
      setSelectedIds((prev) => prev.filter((item) => item !== id));
      router.refresh();
    } catch (error) {
      alert(error?.message || "Delete failed.");
    }
  };

  return (
    <div className="space-y-4">
      <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-1 items-center gap-3">
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search categories..."
              className="w-full rounded-lg border border-slate-300 bg-slate-50 px-3 py-2.5 text-sm text-slate-700 outline-none transition focus:border-slate-400 focus:bg-white"
            />
          </div>

          <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
            <select
              value={statusFilter}
              onChange={(event) => setStatusFilter(event.target.value)}
              className="rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-700 outline-none focus:border-slate-400"
            >
              <option value="all">All statuses</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>

            <select
              value={sortBy}
              onChange={(event) => setSortBy(event.target.value)}
              className="rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-700 outline-none focus:border-slate-400"
            >
              <option value="title">Sort by title</option>
              <option value="slug">Sort by slug</option>
              <option value="date">Sort by date</option>
            </select>

            <button
              type="button"
              onClick={() => setSortOrder((current) => (current === "asc" ? "desc" : "asc"))}
              className="rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50"
            >
              {sortOrder === "asc" ? "Ascending" : "Descending"}
            </button>
          </div>
        </div>
      </div>

      <div className="rounded-xl border border-slate-200 bg-white shadow-sm">
        <div className="flex flex-col gap-3 border-b border-slate-200 bg-slate-50 px-4 py-3 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              checked={allVisibleSelected}
              onChange={toggleSelectAll}
              className="h-4 w-4 accent-slate-900"
              aria-label="Select all visible categories"
            />
            <span className="text-sm font-medium text-slate-700">{filteredCategories.length} categories</span>
          </div>

          <div className="flex items-center gap-2">
            <select
              value={bulkAction}
              onChange={(event) => setBulkAction(event.target.value)}
              className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-700 outline-none focus:border-slate-400"
            >
              <option value="delete">Bulk actions</option>
            </select>

            <button
              type="button"
              onClick={applyBulkAction}
              disabled={processing || selectedIds.length === 0}
              className="rounded-lg bg-slate-900 px-3 py-2 text-sm font-medium text-white disabled:cursor-not-allowed disabled:opacity-50"
            >
              {processing ? "Working..." : "Apply"}
            </button>
          </div>
        </div>

        <div className="divide-y divide-slate-200">
          {filteredCategories.length === 0 ? (
            <div className="p-8 text-center text-sm text-slate-500">No categories match your search.</div>
          ) : (
            filteredCategories.map((category) => (
              <div key={category.$id} className="flex flex-col gap-3 px-4 py-3 md:flex-row md:items-center md:justify-between">
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    checked={selectedIds.includes(category.$id)}
                    onChange={() => toggleSelected(category.$id)}
                    className="mt-1 h-4 w-4 accent-slate-900"
                    aria-label={`Select ${category.title}`}
                  />

                  <div>
                    <div className="font-semibold text-slate-800">{category.title}</div>
                    <div className="text-sm text-slate-500">/{category.slug}</div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span
                    className={`rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide ${
                      (category.status || "active") === "active"
                        ? "bg-emerald-100 text-emerald-700"
                        : "bg-amber-100 text-amber-700"
                    }`}
                  >
                    {category.status || "active"}
                  </span>

                  <Link
                    href={`/admin/categories/edit/${category.$id}`}
                    className="rounded bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-blue-700"
                  >
                    Edit
                  </Link>

                  <button
                    type="button"
                    onClick={() => handleSingleDelete(category.$id)}
                    className="rounded bg-red-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-red-700"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
