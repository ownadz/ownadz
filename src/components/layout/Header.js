"use client";

import { useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import logo from "@/assets/ownadz-transparent-logo.png";

export default function Header({ logoUrl, mainPages = [] }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();

  const hideHeader =
    pathname &&
    (pathname === "/login" ||
      pathname.startsWith("/login") ||
      pathname.startsWith("/admin"));

  if (hideHeader) return null;

  const serviceItems = [
    { slug: "services/affiliate-marketing/", title: "Affiliate Marketing" },
    { slug: "services/performance-marketing/", title: "Performance Marketing" },
    { slug: "services/seo-service/", title: "SEO Service" },
    { slug: "services/social-media-marketing/", title: "Social Media Marketing" },
     { slug: "services/web-development/", title: "Web Development" },
     { slug: "services/app-development/", title: "App Development" }
  ];


  const navPages = useMemo(() => {
    const keyPages = [
      { slug: "about/", label: "About" },
      { slug: "blog/", label: "Blog", href: "/blog" },
      { slug: "contact/", label: "Contact", href: "/contact" },
    ];

    return keyPages.map((page) => ({
      ...page,
      href: page.href || `/${page.slug}`,
    }));
  }, []);

  // Determine if the current route falls under any service pages
  const isServicesActive =
    pathname &&
    [
      "service/affiliate-marketing/",
      "service/influencer-marketing/",
      "service/performance-marketing/",
      "service/seo-service/",
      "service/whatsapp-marketing/",
      "service/email-marketing/",
      "service/lead-generation/",
      "service/social-media-marketing/",
      "services/web-development/",
      "services/app-development/"
    ].includes(pathname);

  return (
    <header className="sticky top-0 z-40 bg-white backdrop-blur-md border-b border-slate-100 transition-all duration-300">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        
        {/* Brand Logo Wrapper */}
        <Link href="/" className="flex items-center gap-3 transition-opacity duration-200 hover:opacity-90">
          <img
            src={logoUrl || logo.src}
            alt="OwnAdz Logo"
            className="h-10 w-auto object-contain md:h-15"
            title="OwnAdz Digital Agency Logo"
          />
        </Link>

        {/* Desktop Navigation Link Array */}
        <div className="hidden items-center gap-3 md:flex">
          <nav className="flex items-center gap-1.5">
            
            {/* Services Hybrid Hover/Click Dropdown */}
                <div className="relative group">
              <button
                type="button"
                onClick={() => setServicesOpen((open) => !open)}
                className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-base font-bold transition-all duration-200 hover:bg-black hover:text-[#ffbd59] ${
                  isServicesActive 
                    ? "bg-black text-[#ffbd59]" 
                    : "text-slate-900 bg-transparent"
                }`}
              >
                Services
                <svg 
                  className={`h-4 w-4 transition-transform duration-300 group-hover:rotate-180 ${servicesOpen ? "rotate-180" : ""} ${
                    isServicesActive ? "text-[#ffbd59]" : "text-slate-500"
                  }`} 
                  viewBox="0 0 20 24" 
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Premium Floating List Overlay Panel */}
              <div className={`absolute left-0 top-full z-20 mt-1 w-64 origin-top-left rounded-2xl border border-slate-100 bg-white p-2.5 shadow-xl transition-all duration-200 group-hover:opacity-100 group-hover:visible ${servicesOpen ? "opacity-100 visible scale-100" : "opacity-0 invisible scale-95 md:opacity-0 md:invisible md:group-hover:scale-100"}`}>
                <div className="max-h-[320px] overflow-y-auto space-y-0.5 custom-scrollbar">
                  {serviceItems.length > 0 ? (
                    serviceItems.map((service) => {
                      const serviceHref = `/${service.slug}`;
                      const isChildActive = pathname === serviceHref;

                      return (
                        <Link
                          key={service.$id || service.id || service.slug}
                          href={serviceHref}
                          onClick={() => setServicesOpen(false)}
                          className={`block rounded-xl px-4 py-2.5 text-sm font-medium transition duration-150 hover:bg-black hover:text-[#ffbd59] ${
                            isChildActive 
                              ? "bg-black text-[#ffbd59]" 
                              : "text-slate-600 bg-transparent"
                          }`}
                        >
                          {service.title || service.slug}
                        </Link>
                      );
                    })
                  ) : (
                    <div className="px-4 py-3 text-sm font-medium text-slate-400 italic">
                      No service pages yet
                    </div>
                  )}
                </div>
              </div>
            </div>

            {navPages.map((page) => {
              const isPageActive = pathname === page.href;

              return (
                <Link
                  key={page.slug}
                  href={page.href}
                  className={`rounded-full px-4 py-2 text-base font-bold transition duration-200 hover:bg-black hover:text-[#ffbd59] ${
                    isPageActive 
                      ? "bg-black text-[#ffbd59]" 
                      : "text-slate-700 bg-transparent"
                  }`}
                >
                  {page.label}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Action Callouts */}
        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/contact"
            className="rounded-full border border-slate-900 bg-slate-900 px-5 py-2.5 text-base font-bold text-white transition-all duration-200 hover:bg-slate-800 hover:shadow-md active:scale-[0.98]"
          >
            Book Free Consultation
          </Link>
        </div>

        {/* Interactive Hamburger Icon Controls */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white p-2 text-slate-700 shadow-sm transition hover:bg-slate-50 md:hidden"
          onClick={() => setMobileOpen((open) => !open)}
          aria-label="Toggle navigation"
        >
          <svg className="h-5 w-5 transition-transform duration-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Nav Overlay Panel Tree */}
      <div className={`border-t border-slate-100 bg-white md:hidden transition-all duration-300 ${mobileOpen ? "block opacity-100" : "hidden opacity-0"}`}>
        <div className="space-y-1.5 px-4 py-4">
          <button
            type="button"
            className={`flex w-full items-center justify-between rounded-xl border border-slate-100 px-4 py-3 text-left text-sm font-bold shadow-sm ${
              isServicesActive ? "bg-black text-[#ffbd59]" : "bg-slate-50 text-slate-900"
            }`}
            onClick={() => setServicesOpen((open) => !open)}
          >
            Services
            <svg 
              className={`h-4 w-4 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""} ${
                isServicesActive ? "text-[#ffbd59]" : "text-slate-500"
              }`} 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2.5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {servicesOpen && (
            <div className="space-y-0.5 rounded-xl bg-slate-50/50 p-1.5 pl-3 border border-slate-100/50">
              {serviceItems.length > 0 ? (
                serviceItems.map((service) => {
                      const serviceHref = `/${service.slug}`;
                  const isChildActive = pathname === serviceHref;

                  return (
                    <Link
                      key={service.$id || service.id || service.slug}
                      href={serviceHref}
                      className={`block rounded-lg px-4 py-2.5 text-sm font-medium transition hover:bg-black hover:text-[#ffbd59] ${
                        isChildActive ? "bg-black text-[#ffbd59]" : "text-slate-600 bg-transparent"
                      }`}
                      onClick={() => {
                        setMobileOpen(false);
                        setServicesOpen(false);
                      }}
                    >
                      {service.title || service.slug}
                    </Link>
                  );
                })
              ) : (
                <div className="px-4 py-2 text-sm text-slate-400 italic">
                  No service pages yet
                </div>
              )}
            </div>
          )}

          {navPages.map((page) => {
            const isPageActive = pathname === page.href;

            return (
              <Link
                key={page.slug}
                href={page.href}
                className={`block rounded-xl px-4 py-3 text-sm font-semibold transition hover:bg-black hover:text-[#ffbd59] ${
                  isPageActive ? "bg-black text-[#ffbd59]" : "text-slate-700 bg-transparent"
                }`}
                onClick={() => setMobileOpen(false)}
              >
                {page.label}
              </Link>
            );
          })}

          <div className="pt-2">
            <Link
              key="mobile-cta"
              href="/contact"
              className="block rounded-xl bg-slate-900 px-4 py-3.5 text-center text-sm font-bold text-white transition hover:bg-slate-800"
              onClick={() => setMobileOpen(false)}
            >
              Book Free Consultation
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}