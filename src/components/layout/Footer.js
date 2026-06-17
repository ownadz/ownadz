"use client";

import Link from "next/link";
import logo from "@/assets/ownadz-logo.jpg";

import routes from "@/lib/routes.frontend.generated.json";

export default function Footer({ logoUrl, services = [], contactData = null }) {
  // Safe extraction of services data to map dynamically under links
  const serviceLinks = services.slice(0, 5);

  const allFrontendRoutes = Array.isArray(routes) ? routes : [];


  return (
    <footer className="relative overflow-hidden bg-dark text-white border-t border-white/5 pt-16">
      
      {/* Upper Footer Layout Grid */}
      <div className="mx-auto max-w-[1280px] px-4 pb-20 sm:px-6 lg:px-8 py-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          
          {/* COLUMN 1: Company Profile & Socials */}
          <div className="space-y-6">
           <Link 
  href="/" 
  className="inline-block rounded-[5px] overflow-hidden transition-opacity duration-200 hover:opacity-90"
>
  <img
    src={logoUrl || logo.src}
    alt="OwnAdz Logo"
    className="h-16 w-auto object-contain"
  />
</Link>
            <p className="max-w-md text-sm leading-7 text-white/70">
              Ownadz is always considered for its high valued and supportive services that make clients gratifying when it comes to real time digital solutions.
            </p>
            
            {/* Social Icons Array Grid */}
            <div className="flex items-center gap-3">
  {/* Facebook Icon */}
  <a 
    href="#" 
    className="flex h-10 w-14 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white transition-all duration-300 hover:bg-[#ffbd59] hover:text-black"
    aria-label="Facebook"
  >
    <svg 
      className="h-5 w-5 fill-current" 
      viewBox="0 0 24 24"
    >
      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
    </svg>
  </a>

  {/* Twitter / X Icon */}
  <a 
    href="#" 
    className="flex h-10 w-14 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white transition-all duration-300 hover:bg-[#ffbd59] hover:text-black"
    aria-label="Twitter X"
  >
    <svg 
      className="h-4 w-4 fill-current" 
      viewBox="0 0 24 24"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  </a>

  {/* Instagram Icon */}
  <a 
    href="#" 
    className="flex h-10 w-14 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white transition-all duration-300 hover:bg-[#ffbd59] hover:text-black"
    aria-label="Instagram"
  >
    <svg 
      className="h-5 w-5 fill-none stroke-current" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      viewBox="0 0 24 24"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  </a>
</div>
          </div>

          {/* COLUMN 2: Quick Navigation Links Tree */}
          {/* COLUMN 2: Quick Navigation Links Tree */}
<div className="space-y-6">
  <h3 className="text-xl font-black tracking-wide text-white relative after:content-[''] after:block after:h-0.5 after:w-10 after:bg-[#ffbd59] after:mt-2">
    Quick Links
  </h3>
  <ul className="grid gap-3.5">
    {allFrontendRoutes
      .filter((r) => {
        if (!r || typeof r.href !== "string") return false;
        
        // 1. Drop Next.js dynamic boilerplates
        if (r.href.includes("[")) return false;

        // 2. Define standard pages and test routes to completely exclude
        const excludedPaths = ["/", "/about", "/contact", "/blog", "/login", "/test"];
        if (excludedPaths.includes(r.href)) return false;
        
        // 3. Exclude admin layouts and /services paths from this JSON loop
        if (r.href.startsWith("/admin") || r.href.startsWith("/services")) return false;

        return true;
      })
      .map((r) => (
        <li key={r.href}>
          <Link
            href={r.href}
            className="group inline-flex items-center gap-2 text-sm font-semibold text-white/70 transition-colors hover:text-[#ffbd59]"
            prefetch={false}
          >
            <span className="text-[#ffbd59] transition-transform duration-200 group-hover:translate-x-1">»</span>{" "}
            {r.displayRoute || r.href.replace("/", "").replace("-", " ")}
          </Link>
        </li>
      ))}

    {/* Fallback to render your real database services smoothly with clean URLs */}
    {services.slice(0, 5).map((service) => (
      <li key={service.slug}>
        <Link 
          href={`/services/${service.slug}`} 
          className="group inline-flex items-center gap-2 text-sm font-semibold text-white/70 transition-colors hover:text-[#ffbd59]"
        >
          <span className="text-[#ffbd59] transition-transform duration-200 group-hover:translate-x-1">»</span>{" "}
          {service.title || service.slug}
        </Link>
      </li>
    ))}
  </ul>
</div>

          {/* COLUMN 3: Contact Metrics & Gateway Badges */}
          <div className="space-y-6">
            <h3 className="text-xl font-black tracking-wide text-white relative after:content-[''] after:block after:h-0.5 after:w-10 after:bg-[#ffbd59] after:mt-2">
              Contact Us
            </h3>
            
            <div className="space-y-4">
              {/* Phone Block */}
              <div className="flex items-start gap-4 rounded-2xl bg-white/5 border border-white/5 p-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/5 text-[#ffbd59] font-bold">
                  ☎
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-white/50">Phone</h4>
                  <p className="mt-0.5 text-sm font-bold text-white/90">{contactData?.phone || "+91 9212223317"}</p>
                </div>
              </div>

              {/* Email Block */}
              <div className="flex items-start gap-4 rounded-2xl bg-white/5 border border-white/5 p-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/5 text-[#ffbd59] font-bold">
                  ✉
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-white/50">E-mail</h4>
                  <p className="mt-0.5 text-sm font-bold text-white/90 break-all">{contactData?.email || "info@ownadz.com"}</p>
                </div>
              </div>

              {/* Location Block */}
              <div className="flex items-start gap-4 rounded-2xl bg-white/5 border border-white/5 p-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/5 text-[#ffbd59] font-bold">
                  📍
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-white/50">Location</h4>
                  <p className="mt-0.5 text-sm font-bold text-white/90 leading-5">{contactData?.address || "Proddatur, Andhra Pradesh, India"}</p>
                </div>
              </div>
            </div>



          </div>
        </div>
      </div>

      {/* Lower Copyright & Legal Policy Footer Bar */}
      <div className="border-t border-white/5 bg-black/20 py-5">
        <div className="mx-auto flex max-w-[1280px] flex-col items-center justify-between gap-4 px-4 text-center sm:px-6 md:flex-row lg:px-8">
          <p className="text-xs font-medium text-white/50">
            © {new Date().getFullYear()} OwnAdz Digital Agency. All Rights Reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs font-semibold text-white/50">
            <Link href="/terms" className="transition-colors hover:text-[#ffbd59]">Terms & Conditions</Link>
            <Link href="/privacy" className="transition-colors hover:text-[#ffbd59]">Privacy Policy</Link>
          </div>
        </div>
      </div>

    </footer>
  );
}