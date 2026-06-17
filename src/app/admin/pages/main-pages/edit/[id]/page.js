import { notFound } from "next/navigation";
import CreateEditMainPageForm from "@/components/admin/CreateEditMainPageForm";
import { getMainPageById } from "@/services/mainPageManagementService";

// Required for `output: 'export'` with dynamic routes.
export async function generateStaticParams() {
  return [];
}

export default async function EditMainPage({ params }) {
  const { id } = await params;


  if (!id) {
    notFound();
  }

  const mainPage = await getMainPageById(id);

  if (!mainPage) {
    notFound();
  }

  return (
    <CreateEditMainPageForm
      mode="edit"
      mainPage={mainPage}
    />
  );
}


