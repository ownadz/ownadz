import HomepageForm from "../homepage/HomepageForm";

import {
  getHomepage,
} from "@/services/homepageService";



export default async function CreateHomepagePage() {
  const homepage = await getHomepage();
  const faqs = [];


  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">
        Homepage CMS
      </h1>

      <HomepageForm
        homepage={
          homepage
            ? JSON.parse(JSON.stringify(homepage))
            : null
        }
        faqs={JSON.parse(JSON.stringify(faqs))}
      />
    </div>
  );
}

