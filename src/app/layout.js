import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { getSEO } from "@/services/seoService";
import { getAllMainPages } from "@/services/mainPageManagementService";

import { getSettings } from "@/services/settingsService";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata() {
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

export default async function RootLayout({ children }) {
  const [rawSeo, mainPages, settings] = await Promise.all([
    getSEO(),
    getAllMainPages(),
    getSettings(),
  ]);

  const seo = rawSeo ? JSON.parse(JSON.stringify(rawSeo)) : null;

  const mainPagesData = JSON.parse(JSON.stringify(mainPages || []));

  const gtmHead = settings?.google_tag_manager || "";
  const gtmNoScript = settings?.google_tag_manager_noscript || "";

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        {/* Favicons (applies to all pages) */}
        <link rel="icon" href="/favicon.png" sizes="32x32" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <meta name="theme-color" content="#ffffff" />


        {/* Google Ads Base File */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-18250008046"></script>
        
        {/* Google Ads Initialization String */}

        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-18250008046');
            `,
          }}
        />

        {/* Hardcoded GTM Container (GTM-T76BVHT7) */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-T76BVHT7');
            `,
          }}
        />

        {/* Dynamic Admin Dashboard GTM Input */}
        {gtmHead ? (
          <script dangerouslySetInnerHTML={{ __html: gtmHead }} />
        ) : null}
      </head>
      
      <body className="min-h-full flex flex-col">
        {gtmNoScript ? (
          <noscript dangerouslySetInnerHTML={{ __html: gtmNoScript }} />
        ) : null}

        <Header
          logoUrl={seo?.logoUrl}
          mainPages={mainPagesData}
        />


        {children}

        <Footer logoUrl={seo?.logoUrl} contactData={null} />

      </body>
    </html>
  );
}