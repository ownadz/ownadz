import AdminPagesController from "./_components/AdminPagesController";

import { getHomepage } from "@/services/homepageService";
import { getHomepageFaqs } from "@/services/homepageFaqService";
import { getAllMainPages } from "@/services/mainPageManagementService";

import { getPages } from "@/services/pageService";
import { getServices } from "@/services/serviceService";
import { getPosts } from "@/services/postService";

export default async function AdminPagesControllerPage() {
  const homepage = await getHomepage();
  const homepageFaqs = await getHomepageFaqs();
  const mainPages = await getAllMainPages();

  const pagesResponse = await getPages();
  const servicesResponse = await getServices();
  const postsResponse = await getPosts();

  return (
    <AdminPagesController
      homepage={homepage ? JSON.parse(JSON.stringify(homepage)) : null}
      homepageFaqs={JSON.parse(JSON.stringify(homepageFaqs || []))}
      mainPagesResponse={JSON.parse(JSON.stringify(mainPages || []))}
      pagesResponse={JSON.parse(JSON.stringify(pagesResponse))}
      servicesResponse={JSON.parse(JSON.stringify(servicesResponse))}
      postsResponse={JSON.parse(JSON.stringify(postsResponse))}
    />
  );
}

