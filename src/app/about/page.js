import { getMainPageBySlug } from "@/services/mainPageManagementService";
import AboutMainPageView from "@/components/about/AboutMainPageView";

export default async function AboutPage() {
  const page = await getMainPageBySlug("about");
  // About is rendered from the main pages record in homepage collection.
  return (
    <AboutMainPageView
      page={page ? JSON.parse(JSON.stringify(page)) : null}
    />
  );
}



