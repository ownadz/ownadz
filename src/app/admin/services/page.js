import Link from "next/link";
import { getServices } from "@/services/serviceService";
import DeleteServiceButton from "@/components/admin/DeleteServiceButton";

export default async function ServicesPage() {
  const response = await getServices();

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">
          Services
        </h1>

        <Link
          href="/admin/services/create"
          className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
        >
          Add Service
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
          {response.documents.map((service) => (
            <tr key={service.$id}>
              <td className="border p-3">
                {service.title}
              </td>

              <td className="border p-3">
                {service.slug}
              </td>

              <td className="border p-3">
                {service.status}
              </td>

              <td className="border p-3">
                <div className="flex gap-2 justify-center">

                  {/* VIEW */}
                  <a
                    href={`/services/${service.slug}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
                  >
                    View
                  </a>

                  {/* EDIT */}
                  <Link
                    href={`/admin/services/edit/${service.$id}`}
                    className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
                  >
                    Edit
                  </Link>

                  {/* DELETE */}
                  <DeleteServiceButton
                    id={service.$id}
                  />

                </div>
              </td>
            </tr>
          ))}

          {response.documents.length === 0 && (
            <tr>
              <td
                colSpan="4"
                className="text-center p-6"
              >
                No Services Found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}