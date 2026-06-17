import { getCategory } from "@/services/categoryService";
import EditCategoryForm from "./EditCategoryForm";

export const dynamic = "force-static";


export default async function EditCategoryPage({
  params,
}) {

  const { id } = await params;

  const category =
    await getCategory(id);

  const plainCategory =
    JSON.parse(
      JSON.stringify(category)
    );

  return (
    <EditCategoryForm
      category={plainCategory}
    />
  );
}