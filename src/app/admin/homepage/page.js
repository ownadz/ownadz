import Link from "next/link";

import HomepageForm from "./HomepageForm";
import { getHomepage } from "@/services/homepageService";
import {
  getHomepageServices,
  getHomepageBrands,
  getHomepageFeatures,
  getHomepageWhyChoose,
  getHomepageResults,
  getHomepageProcess,
  getHomepageCta,
  getHomepageContact,
} from "@/services/homepageDataService";


export default async function HomepagePage() {
  const [homepage, faqs, services, brands, features, whyChoose, results, processSteps, cta, contact] = await Promise.all([
    getHomepage(),
    [],
    getHomepageServices(),
    getHomepageBrands(),
    getHomepageFeatures(),
    getHomepageWhyChoose(),
    getHomepageResults(),
    getHomepageProcess(),
    getHomepageCta(),
    getHomepageContact(),
  ]);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Homepage CMS</h1>

      <HomepageForm
        homepage={homepage ? JSON.parse(JSON.stringify(homepage)) : null}
        faqs={JSON.parse(JSON.stringify(faqs))}
        services={JSON.parse(JSON.stringify(services))}
        brands={JSON.parse(JSON.stringify(brands))}
        features={JSON.parse(JSON.stringify(features))}
        whyChoose={JSON.parse(JSON.stringify(whyChoose))}
        results={JSON.parse(JSON.stringify(results))}
        processSteps={JSON.parse(JSON.stringify(processSteps))}
        cta={JSON.parse(JSON.stringify(cta || {}))}
        contact={JSON.parse(JSON.stringify(contact || {}))}

      />

      <div className="mt-10 pt-6 border-t">
        <h2 className="text-2xl font-bold mb-4">Manage Pages</h2>
        <p className="text-gray-700 mb-4">Use this section to view/edit the main CMS pages.</p>
        <Link href="/admin/homepage/pages" className="inline-block bg-black text-white px-4 py-2 rounded">
          Open Pages Table
        </Link>
      </div>
    </div>
  );
}

