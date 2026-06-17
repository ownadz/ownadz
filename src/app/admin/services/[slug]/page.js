import EditServiceForm from "../edit/[id]/EditServiceForm";
import { getService } from "@/services/serviceService";

export async function generateStaticParams() {
  return [];
}

export default async function Page({ params }) {
  const service = await getService(params.id);

  return <EditServiceForm service={service} />;
}

