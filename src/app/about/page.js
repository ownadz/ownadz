import { getMainPageBySlug } from "@/services/mainPageManagementService";
import AboutMainPageView from "@/components/about/AboutMainPageView";

export async function generateMetadata() {
  const page = await getMainPageBySlug("about");

  return {
    title: page?.seoTitle || page?.title || "About Ownadz | Digital Marketing Agency",
    description:
      page?.seoDescription ||
      "Learn more about Ownadz, a digital marketing agency helping brands grow with SEO, performance marketing, web development, and content strategy.",
    alternates: {
      canonical: "https://www.ownadz.com/about",
    },
    openGraph: {
      title: page?.seoTitle || page?.title || "About Ownadz | Digital Marketing Agency",
      description:
        page?.seoDescription ||
        "Learn more about Ownadz, a digital marketing agency helping brands grow with SEO, performance marketing, web development, and content strategy.",
      url: "https://www.ownadz.com/about",
      type: "website",
    },
  };
}

export default async function AboutPage() {
  const page = await getMainPageBySlug("about");
  // About is rendered from the main pages record in homepage collection.
  return (
    <AboutMainPageView
      page={page ? JSON.parse(JSON.stringify(page)) : null}
    />
  );
}



