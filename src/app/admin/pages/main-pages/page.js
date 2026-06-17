import Link from "next/link";
import { getAllMainPages } from "@/services/mainPageManagementService";
import DeleteMainPageButton from "@/components/admin/DeleteMainPageButton";

const getDocumentId = (doc) => doc?.$id || doc?.id || "";

export default async function MainPagesTablePage() {
  const mainPages = await getAllMainPages();

  return (
    <div className="p-6">
      <div className="flex justify-between mb-6">
        <h1 className="text-3xl font-bold">Main Pages</h1>
        <Link
          href="/admin/pages/main-pages/create"
          className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
        >
          + Create Main Page
        </Link>
      </div>

      {mainPages.length === 0 ? (
        <div className="text-center py-8 text-gray-600">
          <p>No main pages created yet.</p>
          <Link
            href="/admin/pages/main-pages/create"
            className="text-blue-600 hover:underline mt-2 inline-block"
          >
            Create your first main page
          </Link>
        </div>
      ) : (
        <table className="w-full border">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-3 text-left">Title</th>
              <th className="border p-3 text-left">Slug</th>
              <th className="border p-3 text-left">URL</th>
              <th className="border p-3 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {mainPages.map((page) => (
              <tr key={getDocumentId(page)}>
                <td className="border p-3">{page.title}</td>
                <td className="border p-3">
                  <code className="bg-gray-100 px-2 py-1 rounded">{page.slug}</code>
                </td>
                <td className="border p-3">
                  <code className="bg-gray-100 px-2 py-1 rounded">/{page.slug}</code>
                </td>
                <td className="border p-3">
                  <div className="flex gap-2 justify-center">
                    <a
                      href={`/${page.slug}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 text-sm"
                    >
                      View
                    </a>

                    <Link
                      href={`/admin/pages/main-pages/edit/${getDocumentId(page)}`}
                      className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 text-sm"
                    >
                      Edit
                    </Link>

                    <DeleteMainPageButton id={getDocumentId(page)} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}


