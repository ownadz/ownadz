import { notFound } from "next/navigation";
import EditPageForm from "./EditPageForm";
import { getPage } from "@/services/pageService";

// Required for `output: 'export'` with dynamic routes.
export async function generateStaticParams() {
  return [];
}

export default async function EditPage({
  params,
}) {

  const { id } = await params;
  if (!id) {
    notFound();
  }

  const page = await getPage(id);
  if (!page) {
    notFound();
  }

  const plainPage = JSON.parse(JSON.stringify(page));

  return (
    <EditPageForm
      page={plainPage}
    />
  );
}