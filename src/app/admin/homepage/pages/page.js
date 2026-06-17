import Link from "next/link";

import { getPages } from "@/services/pageService";
import DeletePageButton from "@/components/admin/DeletePageButton";

const getPageUrl = (slug) =>
  ["about", "contact", "home"].includes(slug)
    ? `/${slug}`
    : `/pages/${slug}`;
const getDocumentId = (doc) => doc?.$id || doc?.id || "";

export default async function AdminHomepagePages() {
  const response = await getPages();

  return (
    <div className="p-6">
      <div className="flex justify-between mb-6">
        <h1 className="text-3xl font-bold">Homepage Pages</h1>
        <Link
          href="/admin/pages/create"
          className="bg-black text-white px-4 py-2 rounded"
        >
          Add Page
        </Link>
      </div>

      <table className="w-full border">
        <thead>
          <tr>
            <th className="border p-3">Title</th>
            <th className="border p-3">Slug</th>
            <th className="border p-3">Status</th>
            <th className="border p-3">Actions</th>
          </tr>
        </thead>

        <tbody>
          {response.documents.map((page) => (
            <tr key={page.$id}>
              <td className="border p-3">{page.title}</td>
              <td className="border p-3">{page.slug}</td>
              <td className="border p-3">{page.status}</td>
              <td className="border p-3">
                <div className="flex gap-2">
                  <a
                    href={getPageUrl(page.slug)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-600 text-white px-3 py-1 rounded"
                  >
                    View
                  </a>

                  <Link
                    href={`/admin/pages/edit/${getDocumentId(page)}`}
                    className="bg-blue-600 text-white px-3 py-1 rounded"
                  >
                    Edit
                  </Link>

                  <DeletePageButton id={page.$id} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

