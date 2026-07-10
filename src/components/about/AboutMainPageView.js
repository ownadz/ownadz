import Link from "next/link";
import MetaTags from "@/components/seo/MetaTags";

// Comprehensive About Page Content Object
const CONTENT = {
  slug: "about",
  title: "Empowering Brands with Smart Digital Growth",
  subTitle: "About Ownadz Digital",
  description: "Growth is not simply adding more figures; it is about creating successful brands, establishing strong client relations, and generating concrete, verifiable results.",
  founderQuote: "Anyone can start a company. However, building your own brand which people will appreciate and trust is an entirely different thing. Only when you create something valuable for them and generate real results, you become truly successful.",
  philosophyFormula: "Smart + Hard Work = Smart Work",
  philosophyDesc: "Strategic approach to any business task, creativity, technology, and data-driven decisions contribute directly to efficient enterprise growth and real revenue output.",
  services: [
    { title: "Digital Marketing", desc: "Develop great relationships with your target market by availing our marketing services which help you in achieving greater results." },
    { title: "Performance Marketing", desc: "Generate more leads, improve conversion rates, and maximize return on your advertising investments." },
    { title: "Search Engine Optimization (SEO)", desc: "Improve your online visibility and attract organic traffic with effective SEO strategies." },
    { title: "Social Media Marketing", desc: "Create engaging experiences and build lasting relationships with your customers." },
    { title: "Website Design & Development", desc: "Create modern, responsive websites for improving your digital presence." },
    { title: "Lead Generation", desc: "Generate more quality leads for sustaining business growth." }
  ],
  mission: "To provide innovative digital solutions for growth and ROI to modern business organizations.",
  vision: "Our mission is to become the trusted growth partner for companies around the world through performance-based digital marketing solutions.",
  pillars: [
    "ROI-Focused Strategies",
    "Data-Driven Decision Making",
    "Creative & Innovative Solutions",
    "Customer-Centric Approach",
    "Transparent Communication",
    "Long-Term Growth Partnership"
  ]
};

export default function AboutPage() {
  return (
    <>
      {/* SEO Injection */}
      <MetaTags 
        title={`About Us | ${CONTENT.title}`} 
        description={CONTENT.description} 
      />

      <main className="min-h-screen bg-[#fafbfc] text-slate-900 font-sans antialiased selection:bg-blue-600 selection:text-white">
        
        {/* --- DESIGN VARIATION: SPLIT ASYMMETRIC HERO CONTAINER --- */}
        <section className="relative overflow-hidden bg-slate-950 text-white border-b border-slate-900">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(59,130,246,0.08),transparent_40%)]" />
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20 lg:py-32 relative z-10">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-7 space-y-6">
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-amber-400 bg-amber-400/10 px-3 py-1 rounded-full inline-block">
                  {CONTENT.subTitle}
                </span>
                <h1 className="text-3xl sm:text-5xl lg:text-5xl font-black tracking-tight leading-[1.1] text-white">
                  {CONTENT.title}
                </h1>
                <p className="text-slate-300 text-base sm:text-lg lg:text-xl leading-relaxed max-w-xl">
                  {CONTENT.description}
                </p>
                <p className="text-slate-400 text-xs sm:text-sm max-w-lg leading-relaxed">
                  If you have been searching for a pristine way of promoting your business, becoming successful, and earning real profits, then you can trust us to turn your core ideas into scalable brands and high-performing marketing campaigns.
                </p>
              </div>

              {/* Asymmetric Design Accent Box */}
              <div className="lg:col-span-5 relative">
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-blue-600 to-amber-400 opacity-20 blur-xl" />
                <div className="relative bg-slate-900/80 border border-slate-800 p-8 rounded-2xl space-y-6 backdrop-blur">
                  <div className="space-y-2">
                    <span className="text-3xl font-black text-blue-500 block">01</span>
                    <h3 className="font-bold text-slate-100 text-sm sm:text-base">Creative Infrastructure</h3>
                  </div>
                  <div className="space-y-2">
                    <span className="text-3xl font-black text-amber-400 block">100%</span>
                    <h3 className="font-bold text-slate-100 text-sm sm:text-base">Performance Strategy Alignment</h3>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* --- EDITORIAL SECTOR: THE FOUNDER'S STORY & PHILOSOPHY --- */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 lg:py-24">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Stick Column - Section Header */}
            <div className="lg:col-span-4 lg:sticky lg:top-8">
              <span className="text-[10px] sm:text-xs font-bold text-blue-600 uppercase tracking-wider block mb-1">Background</span>
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-950">Our Story</h2>
              <div className="w-12 h-1 bg-blue-600 mt-4 rounded-full" />
            </div>

            {/* Right Main Body Content */}
            <div className="lg:col-span-8 space-y-8">
              <p className="text-slate-700 text-sm sm:text-base lg:text-lg leading-relaxed font-medium">
                Every entrepreneur dreams about making something worthwhile. To be a founder is already an accomplishment, but to establish a brand and create a firm that constantly generates high returns on investment is where the real challenge lies.
              </p>
              
              {/* Premium Founder Quotation Layout */}
              <div className="bg-white border border-slate-200 shadow-sm rounded-2xl p-6 sm:p-8 relative overflow-hidden">
                <div className="absolute -top-4 -right-4 text-9xl font-black text-slate-100/60 select-none pointer-events-none font-serif">“</div>
                <p className="text-slate-800 text-xs sm:text-sm md:text-base italic leading-relaxed relative z-10 mb-4">
                  "{CONTENT.founderQuote}"
                </p>
                <div className="text-xs sm:text-sm font-bold text-slate-950 border-t border-slate-100 pt-3">
                  Founder & CEO <span className="text-blue-600 font-medium">| Ownadz Digital</span>
                </div>
              </div>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                I began Ownadz with a clear vision to assist companies in developing with the help of proper strategy and tangible results. Over many years, I came to understand that being successful is not only about working hard but working smart as well.
              </p>

              {/* Dynamic Formula Showcase Callout Box */}
              <div className="bg-gradient-to-br from-slate-900 to-slate-950 text-white rounded-2xl p-6 sm:p-8 border border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div className="space-y-1">
                  <span className="text-amber-400 font-bold uppercase text-[10px] sm:text-xs tracking-widest block">The Core Philosophy</span>
                  <div className="text-xl sm:text-2xl lg:text-3xl font-black tracking-tight text-white font-mono">
                    {CONTENT.philosophyFormula}
                  </div>
                </div>
                <div className="text-slate-300 text-xs sm:text-sm max-w-md leading-relaxed border-t md:border-t-0 md:border-l border-slate-800 pt-4 md:pt-0 md:pl-6">
                  {CONTENT.philosophyDesc}
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* --- MISSION & VISION HIGHLIGHT TILES --- */}
        <section className="bg-slate-50 border-t border-b border-slate-200 py-16 lg:py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              
              {/* Mission Card */}
              <div className="bg-white border border-slate-200 p-8 rounded-2xl shadow-sm flex flex-col justify-between">
                <div>
                  <span className="h-2 w-12 bg-blue-600 block rounded-full mb-6" />
                  <h3 className="text-xl sm:text-2xl font-black tracking-tight text-slate-950 mb-3">Our Mission</h3>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">{CONTENT.mission}</p>
                </div>
              </div>

              {/* Vision Card */}
              <div className="bg-white border border-slate-200 p-8 rounded-2xl shadow-sm flex flex-col justify-between">
                <div>
                  <span className="h-2 w-12 bg-amber-400 block rounded-full mb-6" />
                  <h3 className="text-xl sm:text-2xl font-black tracking-tight text-slate-950 mb-3">Our Vision</h3>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">{CONTENT.vision}</p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* --- ACTIONS LAYOUT: WHAT WE DO CAPABILITIES ASYMMETRIC GRID --- */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
          <div className="max-w-2xl mb-12 sm:mb-16">
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-blue-600 block mb-1">Our Capabilities</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 tracking-tight">What We Do</h2>
            <p className="mt-2 text-slate-600 text-sm sm:text-base">
              Our company provides complete digital solutions that are targeted towards assisting business organizations to develop themselves in today's highly competitive scenarios.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CONTENT.services.map((svc, i) => (
              <div key={i} className="group bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:border-blue-500/40 hover:shadow-md transition duration-300">
                <div className="h-8 w-8 rounded-lg bg-blue-50 text-blue-600 font-bold flex items-center justify-center mb-4 text-xs group-hover:bg-blue-600 group-hover:text-white transition duration-300">
                  0{i + 1}
                </div>
                <h3 className="font-bold text-slate-950 text-sm sm:text-base mb-2 group-hover:text-blue-600 transition">
                  {svc.title}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {svc.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* --- PILLARS / WHY CHOOSE US VERTICAL LAYOUT --- */}
        <section className="bg-slate-900 text-white py-16 sm:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-5 space-y-4">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight">Why Choose Ownadz?</h2>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
                  We structure operational growth parameters carefully to unlock compounding brand authority across all major digital interfaces.
                </p>
              </div>

              <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
                {CONTENT.pillars.map((pillar, idx) => (
                  <div key={idx} className="bg-slate-950 p-4 rounded-xl border border-slate-800 flex items-center gap-3">
                    <span className="text-emerald-400 font-bold text-base sm:text-lg select-none">✓</span>
                    <span className="text-slate-200 text-xs sm:text-sm font-semibold">{pillar}</span>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* --- CONVERSION FOOTER BANNER --- */}
        <section className="bg-gradient-to-br from-blue-700 to-blue-900 text-white py-16 sm:py-24 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(255,189,89,0.08),transparent_60%)]" />
          <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10">
            <h2 className="text-2xl sm:text-4xl font-black mb-4 tracking-tight">Let's Build Something Great Together</h2>
            <p className="text-blue-100 mb-8 max-w-xl mx-auto text-xs sm:text-sm md:text-base leading-relaxed">
              There is no luck involved; success is achieved through proper planning and the right team. At Ownadz, we are committed to helping our clients grow smarter, more efficient, and more successful.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Link
                href="/contact"
                className="inline-block w-full sm:w-auto bg-white text-blue-950 font-bold px-8 py-4 rounded-xl hover:bg-amber-400 hover:text-slate-950 transition-all shadow-lg text-xs sm:text-sm"
              >
                Let's Build Your Digital Future
              </Link>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}