import Link from "next/link";
import MetaTags from "@/components/seo/MetaTags";

export async function generateMetadata() {
  return {
    title: "Affiliate Marketing Services | Drive Sales & ROI | OwnAdz",
    description: "Grow your business with OwnAdz Affiliate Marketing Services. Partner with trusted affiliates, increase sales, generate quality leads, and maximize ROI with performance-based campaigns.",
    keywords: "affiliate marketing services, affiliate marketing agency, performance marketing, affiliate program management, CPA marketing, CPL marketing, CPS marketing, affiliate network, lead generation, performance advertising, digital marketing agency, affiliate campaign management, ROI marketing, online affiliate marketing, OwnAdz",
    alternates: {
      canonical: "https://www.ownadz.com/services/affiliate-marketing",
    },
  };
}

// Complete Content Object built from your provided text copy
const CONTENT = {
  slug: "affiliate-marketing",
  title: "Affiliate Marketing Services That Drive Revenue Growth",
  subTitle: "Performance-Based Growth",
  description: "Drive scalable affiliate growth with strategy, tracking, and high-converting campaigns. Pay only for actual results, not just clicks or impressions.",
  heroBullets: [
    "Partner strategy & onboarding",
    "Tracking & attribution setup",
    "Campaign optimization & reporting",
    "Landing page conversion improvements",
  ],
  whyChooseUs: [
    {
      title: "Data-Driven Strategies",
      desc: "We conduct market, competitor, and consumer behavior analysis to make decisions using verified data rather than assumptions."
    },
    {
      title: "Experienced Specialists",
      desc: "Deep industry expertise in structuring complex commission plans, managing affiliate networks, and optimizing performance architecture."
    },
    {
      title: "Transparent Reporting",
      desc: "Gain complete insight into your metrics with a full reporting suite covering conversions, individual affiliate performance, and clear ROI tracking."
    },
    {
      title: "Continuous Optimization",
      desc: "We actively audit your affiliate ecosystem—recruiting top performers, refining payouts, and eliminating low-performing leaks."
    }
  ],
  benefits: [
    { title: "Increase Sales and Leads", desc: "Identify and partner with high-intent publishers whose specific audiences map directly to your conversion goals." },
    { title: "Expand Brand Reach", desc: "Gain massive organic exposure inside niche communities through authoritative bloggers, creators, and key market influencers." },
    { title: "Performance-Based Results", desc: "Eliminate wasteful ad spend. Our framework ensures your budget is strictly tied to verifiable revenue milestones." },
    { title: "Maximize ROI", desc: "Continuous testing, tracking optimization, and metric analysis combine to deliver a much higher return on your overall marketing spend." }
  ],
  pillars: [
    { title: "Affiliate Program Strategy", desc: "The foundation lies in a flexible roadmap. We establish your core commission structures, select optimal affiliate networks, and lay down program guidelines aligned completely with your business objectives." },
    { title: "Affiliate Recruitment & Management", desc: "We evaluate and onboard top publishers, influencers, and niche creators. Plus, we handle ongoing communication, reviews, and incentives to keep them highly engaged." },
    { title: "Influencer Affiliate Marketing", desc: "We look past superficial follower numbers to evaluate engagement metrics and conversion likelihood, matching your brand with trusted creators who drive authentic sales." },
    { title: "Tracking & Performance Optimization", desc: "Our teams deploy robust tracking systems to monitor click-throughs, custom journeys, and partner attribution metrics. We strip out underperforming elements to protect margins." }
  ],
  steps: [
    { num: "01", title: "Business Analysis", desc: "We audit your company profile, products, target audience landscape, and competitive matrix to frame your target programmatic strategy." },
    { num: "02", title: "Affiliate Research", desc: "Deep discovery into prospective high-performing publishers, content networks, and influencers primed for your specific niche." },
    { num: "03", title: "Program Setup", desc: "We deploy tracking pixels, establish commission distribution hierarchies, compile promotional assets, and draft compliance guidelines." },
    { num: "04", title: "Campaign Management", desc: "Launch operations take over: ongoing recruiter outreach, active communication loops, and systematic partner optimizations." },
    { num: "05", title: "Reporting & Optimization", desc: "Granular monthly programmatic reviews tracking CPA performance, traffic distributions, and total revenue attribution." }
  ],
  industries: ["Commerce", "SaaS", "Health Care", "Education", "Real Estate"],
  faqs: [
    { q: "What is Affiliate Marketing?", a: "Affiliate marketing is a performance-based marketing discipline where businesses compensate external partners (affiliates) for generating specific actions, leads, or conversions via independent promotional efforts." },
    { q: "How does Affiliate Marketing work?", a: "Affiliates place unique tracking links across their websites or channels. When a user interacts with those links and completes a predetermined conversion goal on your platform, our system records the attribution data and calculates the due performance commission." },
    { q: "How quickly can I see results?", a: "While timeline performance depends on competitive variables and brand reach, structured programs generally present foundational efficiency spikes and volume scaling within the first 2 to 3 months following technical implementation." },
    { q: "How do you track performance?", a: "We utilize advanced, transparent tracking infrastructure built to isolate clicks, customer journey paths, conversion lifecycles, and relative margins, serving data directly to a unified dashboard client suite." }
  ]
};

export default function AffiliateMarketingPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is affiliate marketing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Affiliate marketing is a performance-based marketing strategy where businesses pay affiliates only when they generate a sale, lead, or other predefined action."
        }
      },
      {
        "@type": "Question",
        "name": "How does OwnAdz manage affiliate marketing campaigns?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "OwnAdz manages affiliate campaigns by recruiting quality publishers, tracking performance, optimizing conversions, preventing fraud, and delivering transparent performance reports."
        }
      },
      {
        "@type": "Question",
        "name": "What industries can benefit from affiliate marketing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Affiliate marketing is suitable for eCommerce, SaaS, finance, education, healthcare, travel, gaming, mobile apps, and many other industries."
        }
      },
      {
        "@type": "Question",
        "name": "Why choose OwnAdz for affiliate marketing services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "OwnAdz provides data-driven affiliate strategies, trusted publishers, optimization, transparent reporting, and performance-focused growth."
        }
      },
      {
        "@type": "Question",
        "name": "How do you measure affiliate marketing success?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Success is measured using conversions, CPA, ROAS, revenue, lead quality, and ROI."
        }
      }
    ]
  };

  return (
    <>
      {/* Search Engine Optimization Injection */}
      <MetaTags 
        title="Affiliate Marketing Services | Drive Sales & ROI | OwnAdz" 
        description="Grow your business with OwnAdz Affiliate Marketing Services. Partner with trusted affiliates, increase sales, generate quality leads, and maximize ROI with performance-based campaigns." 
      />

      {/* Structured Schema Markup Injected Safe for Crawlers */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="min-h-screen bg-[#fafbfc] text-slate-900 font-sans antialiased selection:bg-blue-500 selection:text-white">
        
        {/* --- HERO SECTION --- */}
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white py-16 sm:py-24 lg:py-32">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.14),transparent_50%)]" />
          <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
            <div className="max-w-3xl">
              <span className="inline-block text-[10px] sm:text-xs font-bold uppercase tracking-widest text-amber-400 mb-4 bg-amber-400/10 px-3 py-1 rounded-full">
                {CONTENT.subTitle}
              </span>
              <h1 className="text-3xl sm:text-5xl lg:text-5xl font-black tracking-tight mb-6 leading-[1.1] text-white">
                {CONTENT.title}
              </h1>
              <p className="text-base sm:text-lg lg:text-xl mb-10 text-slate-300 leading-relaxed max-w-2xl">
                {CONTENT.description}
              </p>
              
              {/* Primary Call to Action Controls */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12">
                <Link
                  href="/contact"
                  className="inline-flex justify-center items-center bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-500 transition-all shadow-lg shadow-blue-600/20 text-center text-sm sm:text-base"
                >
                  Get a Free Consultation
                </Link>
                
              </div>

              {/* Highlighting Content Bullets Inline */}
              <div className="grid sm:grid-cols-2 gap-4 pt-6 border-t border-slate-800">
                {CONTENT.heroBullets.map((bullet) => (
                  <div key={bullet} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                    <span className="text-emerald-400 flex-shrink-0 text-base sm:text-lg select-none">✓</span>
                    <span className="leading-snug">{bullet}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* --- INTRODUCTION & VALUE PROP --- */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 lg:py-24">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-slate-950 leading-tight">
                An Efficient Way To Accomplish Measurable Results
              </h2>
              <p className="text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed">
                Today's world requires marketers to go beyond just creating advertisements. 
                Establishing a business demands sustainable strategies that attract quality prospective 
                customers while maintaining a reasonable cost of acquisition.
              </p>
              <blockquote className="border-l-4 border-blue-600 pl-4 py-2 italic text-slate-700 bg-blue-50/50 rounded-r-xl pr-4 text-sm sm:text-base">
                "Unlike traditional advertising, affiliate marketing is completely performance-based. 
                You only pay if results are obtained—never for empty impressions or low-value clicks."
              </blockquote>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Ownadz develops and manages performance-driven affiliate programs that provide reliable 
                revenue streams, high-quality leads, and long-term brand relationships. We match you with 
                the right publishers, influencers, and content creators to turn your traffic into conversions.
              </p>
            </div>

            {/* Strategic Action Card */}
            <div className="lg:col-span-5 rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-100/40 p-6 sm:p-8 lg:sticky lg:top-6">
              <span className="text-[10px] sm:text-xs font-bold text-blue-600 uppercase tracking-wider block mb-1">Next Step</span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-950">Build Your Roadmap</h3>
              <p className="mt-2 text-slate-600 text-xs sm:text-sm leading-relaxed">
                Tell us your core performance goals and our specialists will outline a tailored blueprint 
                for infrastructure setup, link-tracking setup, and immediate conversion uplift.
              </p>
              <Link
                href="/contact"
                className="mt-6 inline-flex w-full justify-center rounded-xl bg-slate-950 px-6 py-4 font-semibold text-white hover:bg-slate-800 transition shadow-md text-sm sm:text-base"
              >
                Contact Us
              </Link>
              <div className="mt-4 flex items-center justify-between text-[11px] sm:text-xs text-slate-500 border-t border-slate-100 pt-4">
                <span>⚡ Response within 1 business day</span>
                <span>No upfront risk</span>
              </div>
            </div>
          </div>
        </section>

        {/* --- WHY CHOOSE US SECTION --- */}
        <section className="bg-slate-900 text-white py-16 sm:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black mb-4 tracking-tight">Why Choose Ownadz</h2>
              <p className="text-slate-400 text-sm sm:text-base">
                The choice of partner determines the trajectory of your affiliate channels. We lean on deep market insights, data metrics, and rigorous asset optimization.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
              {CONTENT.whyChooseUs.map((item, index) => (
                <div key={index} className="bg-slate-950 p-6 sm:p-8 rounded-2xl border border-slate-800 hover:border-slate-700 transition">
                  <div className="h-9 w-9 rounded-lg bg-blue-600/10 text-blue-400 font-bold flex items-center justify-center mb-5 text-sm sm:text-base border border-blue-500/20">
                    0{index + 1}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2 text-slate-100">{item.title}</h3>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- CORE BENEFITS / VALUE DRIVERS --- */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 mb-4 tracking-tight">
              Grow Your Business With Performance Frameworks
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Scale your digital brand footprint infinitely without taking on heavy risk burdens common to traditional media channels.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CONTENT.benefits.map((benefit, i) => (
              <div key={i} className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="text-amber-500 font-bold text-lg mb-3 select-none">✓</div>
                  <h3 className="font-bold text-slate-950 text-sm sm:text-base mb-2">{benefit.title}</h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- DEEP DIVE SERVICE PILLARS --- */}
        <section className="bg-white border-t border-b border-slate-200 py-16 sm:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="max-w-2xl mb-10 sm:mb-14">
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-blue-600 block mb-1">Our Capabilities</span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 tracking-tight">Comprehensive Affiliate Architecture</h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
              {CONTENT.pillars.map((pillar, index) => (
                <div key={index} className="p-6 sm:p-8 rounded-2xl bg-[#fafbfc] border border-slate-200/60">
                  <h3 className="text-base sm:text-lg font-bold mb-2 text-slate-950 flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-blue-600 inline-block flex-shrink-0" />
                    {pillar.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{pillar.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- SYSTEMATIC STEPS / PROCESS --- */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 mb-4 tracking-tight">Our Lifecycle Deployment Process</h2>
            <p className="text-slate-600 text-sm sm:text-base">How we launch, manage, and mature your affiliate ecosystem from the ground up.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {CONTENT.steps.map((step, idx) => (
              <div key={idx} className="relative bg-white p-5 sm:p-6 rounded-xl border border-slate-200 shadow-sm">
                <div className="text-2xl sm:text-3xl font-black text-slate-200 mb-3 select-none">{step.num}</div>
                <h3 className="font-bold text-slate-950 text-sm sm:text-base mb-2">{step.title}</h3>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* --- INDUSTRIES SERVED --- */}
        <section className="bg-slate-950 text-white py-14 sm:py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-slate-400 uppercase tracking-widest text-[10px] sm:text-xs font-bold mb-6 sm:mb-8">Target Operational Verticals</h2>
            <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 lg:gap-6">
              {CONTENT.industries.map((industry) => (
                <div key={industry} className="px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 text-xs sm:text-sm font-medium hover:border-blue-500/40 transition">
                  {industry}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- FAQ ACCORDION SECTION --- */}
        <section className="max-w-3xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-950 text-center mb-10 sm:mb-12 tracking-tight">
            Frequently Asked Questions
          </h2>

          <div className="space-y-5">
            {CONTENT.faqs.map((faq, index) => (
              <div
                key={index}
                className="group rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl"
              >
                <h3 className="flex items-start gap-3 text-base sm:text-lg font-bold text-slate-900 mb-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white text-sm font-bold">
                    {index + 1}
                  </span>

                  <span>{faq.q}</span>
                </h3>

                <div className="ml-11 border-l-4 border-blue-100 pl-5">
                  <p className="text-sm sm:text-base leading-7 text-slate-600">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- FINAL CONVERSION FOOTER BANNER --- */}
        <section className="bg-gradient-to-br from-blue-700 to-blue-900 text-white py-16 sm:py-20 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(255,189,89,0.08),transparent_60%)]" />
          <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10">
            <h2 className="text-2xl sm:text-4xl font-black mb-4 tracking-tight">Ready to Scale Your Business?</h2>
            <p className="text-blue-100 mb-8 max-w-xl mx-auto text-xs sm:text-sm md:text-base leading-relaxed">
              Build a risk-mitigated, highly optimized affiliate program backed by automated tracking architectures and clear attribution models.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-white text-blue-950 font-bold px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl hover:bg-amber-400 hover:text-slate-950 transition-all shadow-lg text-xs sm:text-sm md:text-base"
            >
              Get Started with Ownadz Services
            </Link>
          </div>
        </section>

      </main>
    </>
  );
}