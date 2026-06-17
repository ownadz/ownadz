import { getLead } from "@/services/leadService";

export async function generateStaticParams() {
  return [];
}

export default async function LeadDetails({
  params,
}) {

  const { id } = await params;

  const lead =
    await getLead(id);

  return (
    <div className="p-6">

      <h1 className="text-3xl font-bold mb-6">
        Lead Details
      </h1>

      <p>
        <b>Name:</b> {lead.name}
      </p>

      <p>
        <b>Email:</b> {lead.email}
      </p>

      <p>
        <b>Phone:</b> {lead.phone}
      </p>

      <p>
        <b>Service:</b> {lead.service}
      </p>

      <p>
        <b>Status:</b> {lead.status}
      </p>

      <p className="mt-4">
        <b>Message:</b>
      </p>

      <div className="border p-4 mt-2">
        {lead.message}
      </div>

    </div>
  );
}