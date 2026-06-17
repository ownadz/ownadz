import { redirect, notFound } from "next/navigation";
import { getPageBySlug } from "@/services/pageService";
import { getMainPageBySlug } from "@/services/mainPageManagementService";

// Required for `output: 'export'`
export async function generateStaticParams() {
  return [];
}


export default async function Page({ params }) {
  const { slug } = await params;

  // If this slug exists as a main page, redirect to the root-level route.
  const mainPage = await getMainPageBySlug(slug);
  if (mainPage) {
    redirect(`/${slug}`);
  }

  const page = await getPageBySlug(slug);

  if (!page) {
    return (
      <div className="p-10">Page Not Found</div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6">{page.title}</h1>

      <div
        dangerouslySetInnerHTML={{
          __html: page.content,
        }}
      />
    </div>
  );
}

