import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { getSEO } from "@/services/seoService";
import { getAllMainPages } from "@/services/mainPageManagementService";
import { getServices } from "@/services/serviceService";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata() {

  // Keep existing SEO metadata
  try {
    const seo = await getSEO();

    return {
      title: seo?.siteTitle || "Ownadz",
      description: seo?.siteDescription || "Ownadz Website",
      keywords: seo?.keywords || "",
      robots: seo?.robots || "index,follow",
    };
  } catch (error) {
    return {
      title: "Ownadz",
      description: "Ownadz Website",
    };
  }
}


export default async function RootLayout({
  children,
}) {
  const [rawSeo, servicesResponse, mainPages] = await Promise.all([
    getSEO(),
    getServices(),
    getAllMainPages(),
  ]);

  const seo = rawSeo ? JSON.parse(JSON.stringify(rawSeo)) : null;
  const services = (servicesResponse?.documents || []).map((doc) =>
    JSON.parse(JSON.stringify(doc))
  );
  const mainPagesData = JSON.parse(JSON.stringify(mainPages || []));

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header
          logoUrl={seo?.logoUrl}
          services={services}
          mainPages={mainPagesData}
        />

        {/* Home favicon links injected on every page using homepage favicon fields.
            Requires homepage document to be available in metadata; for now we render in the page-level head via `generateMetadata`.
            (No-op placeholder removed.)
        */}
        {children}

        {/* Frontend footer only (no /admin routes) */}
        <Footer logoUrl={seo?.logoUrl} services={services} contactData={null} />
      </body>

    </html>
  );
}