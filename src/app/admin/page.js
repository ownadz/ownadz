import {
  getPostsCount,
} from "@/services/postService";

import {
  getPagesCount,
} from "@/services/pageService";

import {
  getServicesCount,
} from "@/services/serviceService";

import {
  getLeadsCount,
} from "@/services/leadService";

import { getLeads } from "@/services/leadService";

export default async function Dashboard() {

  const posts =
    await getPostsCount();

  const pages =
    await getPagesCount();

  const services =
    await getServicesCount();

  const leads =
    await getLeadsCount();

    const recentLeads = await getLeads();

  return (
    <div className="p-6">

      <h1 className="text-4xl font-bold mb-8">
        Dashboard
      </h1>

      <div className="grid md:grid-cols-4 gap-6">

        <div className="bg-white border rounded-lg p-6 shadow">
          <h2 className="text-lg font-semibold">
            Total Posts
          </h2>

          <p className="text-4xl font-bold mt-3">
            {posts}
          </p>
        </div>

        <div className="bg-white border rounded-lg p-6 shadow">
          <h2 className="text-lg font-semibold">
            Total Pages
          </h2>

          <p className="text-4xl font-bold mt-3">
            {pages}
          </p>
        </div>

        <div className="bg-white border rounded-lg p-6 shadow">
          <h2 className="text-lg font-semibold">
            Total Services
          </h2>

          <p className="text-4xl font-bold mt-3">
            {services}
          </p>
        </div>

        <div className="bg-white border rounded-lg p-6 shadow">
          <h2 className="text-lg font-semibold">
            Total Leads
          </h2>

          <p className="text-4xl font-bold mt-3">
            {leads}
          </p>
        </div>

      </div>
 {/* Recent Leads Section */}

      <h2 className="text-2xl font-bold mt-10 mb-4">
        Recent Leads
      </h2>
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

          </tr>

        </thead>

        <tbody>

          {recentLeads.documents
            .slice(0, 5)
            .map((lead) => (

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

              </tr>

            ))}

        </tbody>

      </table>
    </div>
  );
}