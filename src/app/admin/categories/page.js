import Link from "next/link";
import { getCategories } from "@/services/categoryService";
import DeleteCategoryButton from "@/components/admin/DeleteCategoryButton";

export default async function CategoriesPage() {

  const response =
    await getCategories();

  return (
    <div className="p-6">

      <div className="flex justify-between items-center mb-6">

        <h1 className="text-3xl font-bold">
          Categories
        </h1>

        <Link
          href="/admin/categories/create"
          className="bg-black text-white px-4 py-2 rounded"
        >
          Add Category
        </Link>

      </div>

      <table className="w-full border border-gray-300">

        <thead>

          <tr className="bg-gray-100">

            <th className="border p-3 text-left">
              Title
            </th>

            <th className="border p-3 text-left">
              Slug
            </th>

            <th className="border p-3 text-left">
              Status
            </th>

            <th className="border p-3 text-center">
              Actions
            </th>

          </tr>

        </thead>

        <tbody>

          {response.documents.map(
            (category) => (

              <tr key={category.$id}>

                <td className="border p-3">
                  {category.title}
                </td>

                <td className="border p-3">
                  {category.slug}
                </td>

                <td className="border p-3">
                  {category.status}
                </td>

                <td className="border p-3">

                  <div className="flex gap-2 justify-center">
   <a
      href={`/categories/${category.slug}`}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-green-600 text-white px-3 py-1 rounded"
    >
      View
    </a>
                    <Link
                      href={`/admin/categories/edit/${category.$id}`}
                      className="bg-blue-600 text-white px-3 py-1 rounded"
                    >
                      Edit
                    </Link>

                    <DeleteCategoryButton
                      id={category.$id}
                    />

                  </div>

                </td>

              </tr>

            )
          )}

          {response.documents.length === 0 && (

            <tr>

              <td
                colSpan="4"
                className="text-center p-6"
              >
                No Categories Found
              </td>

            </tr>

          )}

        </tbody>

      </table>

    </div>
  );
}