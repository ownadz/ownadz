import Link from "next/link";
import { getLeads } from "@/services/leadService";

export default async function LeadsPage() {

  const response = await getLeads();

  return (
    <div className="p-6">

      <h1 className="text-3xl font-bold mb-6">
        Leads
      </h1>

      <table className="w-full border">

        <thead>

          <tr>

            <th className="border p-3">
              Name
            </th>

            <th className="border p-3">
              Phone
            </th>

            <th className="border p-3">
              Service
            </th>

            <th className="border p-3">
              Status
            </th>

            <th className="border p-3">
              Action
            </th>

          </tr>

        </thead>

        <tbody>

          {response.documents.map(
            (lead) => (

              <tr key={lead.$id}>

                <td className="border p-3">
                  {lead.name}
                </td>

                <td className="border p-3">
                  {lead.phone}
                </td>

                <td className="border p-3">
                  {lead.service}
                </td>

                <td className="border p-3">
                  {lead.status}
                </td>

                <td className="border p-3">

                  <Link
                    href={`/admin/leads/${lead.$id}`}
                    className="bg-blue-600 text-white px-3 py-1 rounded"
                  >
                    View
                  </Link>

                </td>

              </tr>

            )
          )}

        </tbody>

      </table>

    </div>
  );
}