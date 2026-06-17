import Link from "next/link";
import { getServices } from "@/services/serviceService";
import { getImagePreview } from "@/services/storageService";

export default async function ServicesPage() {
  const response = await getServices();
  const services = response.documents;

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8">
        Our Services
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        {services.map((service) => (
          <div
            key={service.$id}
            className="border rounded-lg overflow-hidden shadow"
          >
            {service.featuredImage && (
              <img
                src={getImagePreview(service.featuredImage)}
                alt={service.title}
                className="w-full h-52 object-cover"
              />
            )}

            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">
                {service.title}
              </h2>

              <p className="text-gray-600 mb-4">
                {service.seoDescription}
              </p>

              <Link
                href={`/services/${service.slug}`}
                className="text-blue-600 font-medium"
              >
                View Service →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}