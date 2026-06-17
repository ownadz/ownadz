import { getCategoryBySlug } from "@/services/categoryService";

export const dynamic = "force-dynamic";



export default async function CategoryPage({
  params,
}) {

  const { slug } = await params;

  const category =
    await getCategoryBySlug(slug);

  if (!category) {
    return (
      <div className="p-10">
        Category Not Found
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-6">

      <h1 className="text-4xl font-bold mb-4">
        {category.title}
      </h1>

      <p className="text-gray-600">
        {category.description}
      </p>

    </div>
  );
}