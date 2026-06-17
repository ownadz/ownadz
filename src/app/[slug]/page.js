import { getMainPageBySlug } from "@/services/mainPageManagementService";
import { notFound } from "next/navigation";

export const dynamic = "force-static";

import routesManifest from "@/lib/routes.frontend.generated.json";

// Required for `output: 'export'` and dynamic route pages.
// We source available slugs from the generated routes manifest.
export async function generateStaticParams() {
  const routes = routesManifest?.routes ?? [];
  const slugs = routes
    .filter((r) => r?.pathname === "/[slug]" || r?.pathname?.endsWith("/[slug]"))
    .map((r) => r?.params?.slug)
    .filter(Boolean);

  return slugs.map((slug) => ({ slug }));
}

import MetaTags from "@/components/seo/MetaTags";
import HtmlRenderer from "@/components/about/HtmlRenderer";

export default async function MainPageSlug({ params }) {
  const { slug } = await params;

  // Skip special routes
  const reservedSlugs = ["admin", "api", "auth", "login", "test"];
  if (!slug || reservedSlugs.includes(slug)) {
    notFound();
  }

  const mainPage = await getMainPageBySlug(slug);

  if (!mainPage) {
    notFound();
  }

  return (
    <>
      <MetaTags
        title={mainPage.seoTitle || mainPage.title}
        description={mainPage.seoDescription}
        keywords={mainPage.seoKeywords}
      />

      <main className="min-h-screen">
        {/* Hero Section */}
        {mainPage.heroTitle && (
          <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 md:py-24">
            <div className="max-w-5xl mx-auto px-4 text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                {mainPage.heroTitle}
              </h1>
              {mainPage.heroDescription && (
                <p className="text-lg md:text-xl mb-8 text-blue-100">
                  {mainPage.heroDescription}
                </p>
              )}
              {mainPage.heroButtonText && mainPage.heroButtonLink && (
                <a
                  href={mainPage.heroButtonLink}
                  className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition"
                >
                  {mainPage.heroButtonText}
                </a>
              )}
            </div>
          </section>
        )}

        {/* Main Content */}
        <section className="max-w-5xl mx-auto px-4 py-12 md:py-20">
          <div className="prose prose-lg max-w-none">
            {mainPage.content && <HtmlRenderer html={mainPage.content} />}
          </div>
        </section>
      </main>
    </>
  );
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const mainPage = await getMainPageBySlug(slug);

  if (!mainPage) {
    return {
      title: "Not Found",
      description: "Page not found",
    };
  }

  return {
    title: mainPage.seoTitle || mainPage.title,
    description: mainPage.seoDescription,
    keywords: mainPage.seoKeywords,
  };
}
