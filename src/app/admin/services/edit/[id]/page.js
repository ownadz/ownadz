import { getService } from "@/services/serviceService";
import EditServiceForm from "./EditServiceForm";

export const dynamic = "force-static";


export default async function EditPage({
  params,
}) {

  const { id } = await params;

  const service = await getService(id);

  const plainService =
    JSON.parse(
      JSON.stringify(service)
    );

  return (
    <EditServiceForm
      service={plainService}
    />
  );
}