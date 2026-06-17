import SEOForm from "./seoForm";
import { getSEO } from "@/services/seoService";

export default async function SEOPage() {

  const seo =
    await getSEO();

  const plainSEO =
    JSON.parse(
      JSON.stringify(seo)
    );

  return (
    <div className="p-6">

      <h1 className="text-3xl font-bold mb-6">
        SEO Manager
      </h1>

      <SEOForm seo={plainSEO} />

    </div>
  );
}