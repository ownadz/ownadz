import Link from "next/link";
import MetaTags from "@/components/seo/MetaTags";

export async function generateMetadata() {
  return {
    alternates: {
      canonical: "https://ownadz.com/services/social-media-marketing",
    },
  };
}

// Comprehensive Social Media Marketing Content Object
const CONTENT = {
  slug: "social-media-marketing",
  title: "Social Media Marketing & Social Media Optimization Services",

  subTitle: "Grow Your Brand with Strategic Social Media Marketing",
  description: "Bypass the static noise. Interact directly with your exact target market, build deep relational trust, and engineer an ongoing conversion stream through creative asset deployment and proven audience data algorithms.",
  heroBullets: [
    "Comprehensive audience profiling & roadmapping",
    "High-impact graphic & short-form video creation",
    "Advanced cross-platform paid ad management",
    "Data-driven profile & traction optimization",
  ],
  whyChooseUs: [
    {
      title: "Individualized Platform Blueprints",
      desc: "Each company is entirely unique. We construct custom, tailormade asset distributions matching your specific target operational scale."
    },
    {
      title: "Multi-Platform Mastery",
      desc: "Our specialized management spans from Facebook and Instagram to corporate LinkedIn and TikTok channels to secure maximum organic and paid reach."
    },
    {
      title: "Uncompromising Analytics Transparency",
      desc: "Gain explicit visibility through consistent, detailed campaign updates and unified dashboard reporting metrics built around key performance indicators."
    },
    {
      title: "Performance Data Optimization",
      desc: "We leverage granular user engagement data and attribution analytics to continually calibrate your active ad spend and creative angles."
    }
  ],
  smmServices: [
    {
      title: "Social Media Strategy Development",
      desc: "Kick off your next campaign with absolute precision. We perform deep buyer demographic research, systematic competitor analysis, and macro trend tracking to outline complete content roadmaps that convert engagement into business growth."
    },
    {
      title: "Social Media Management",
      desc: "Cultivate a fiercely loyal online community. Our daily management handles systematic publishing schedules, continuous user interaction loops, native ecosystem monitoring, and structural traction mapping so your brand presence never goes dormant."
    },
    {
      title: "Social Media Advertising",
      desc: "Deploy highly efficient paid networks to bypass standard algorithmic throttling. We optimize targeted ad structures to re-engage warm audiences and capture immediate direct intent.",
      subAds: [
        { name: "Facebook Advertising", detail: "Develop hyper-targeted campaigns focused precisely on core customer behaviors." },
        { name: "Instagram Advertising", detail: "Leverage highly immersive visual styles and short-form storytelling formats to drive traffic." },
        { name: "LinkedIn Advertising", detail: "Architect professional B2B lead generation funnels targeting specific commercial decision-makers." },
        { name: "Dynamic Retargeting", detail: "Inject strategic ad variations to pull historical profile visitors back into your core purchasing tracks." }
      ]
    },
    {
      title: "Content Creation Studio",
      desc: "Elevate your brand recall through relatable, conversion-focused creative assets. We author custom script-based reels, short-form video loops, informative carousel slide decks, and narrative story styles that compel actions, shares, and high trust."
    }
  ],
  smoServices: [
    {
      title: "Profile Optimization",
      desc: "Transform your brand profiles into high-converting organic capture funnels. We clean up profile biographies, unify brand identity matrices, and deploy explicit, high-visibility calls-to-action to maximize visitor-to-lead ratios immediately."
    },
    {
      title: "Content Optimization",
      desc: "Calibrate structural tags, deploy algorithmic hashtag indexing, design cohesive content calendars, and adjust layout features to naturally prompt search visibility within individual platforms."
    },
    {
      title: "Audience Growth Optimization",
      desc: "Construct reliable corporate traction loops through consistent community interaction, target niche creator alignments, and long-term digital trust markers that trigger organic distribution algorithms."
    }
  ],
  platforms: ["Facebook", "Instagram", "LinkedIn", "X (Twitter)", "YouTube", "Pinterest"],
  processSteps: [
    { num: "01", title: "Research & Audit", desc: "Isolating hidden traffic gaps and hidden audience opportunities by evaluating sector competition and historic account metrics." },
    { num: "02", title: "Strategy Planning", desc: "Drafting a customized multi-channel marketing blueprint addressing your specific commercial objectives and buyer personas." },
    { num: "03", title: "Content Creation", desc: "Producing top-tier, identity-matched visual and textual assets focused cleanly on establishing distinct market authority." },
    { num: "04", title: "Campaign Execution", desc: "Deploying active organic feeds and paid ad runs concurrently, monitoring entry data layers to safeguard project returns." },
    { num: "05", title: "Reporting & Optimization", desc: "Delivering comprehensive KPI reviews alongside ongoing technical modifications to consistently compound acquisition volumes." }
  ],
  benefits: [
    "Significantly Improved Customer Engagement",
    "Elevated Digital Brand Authority & Awareness",
    "Increased Downstream Website Page Views",
    "Predictable Streams of New Conversions",
    "Unshakable, Omnipresent Online Footprint"
  ],
  industries: ["Health Care", "Real Estate", "E-commerce", "Education", "SaaS", "Local Businesses"],
  tools: ["Meta Business Suite", "Canva", "Buffer", "Hootsuite", "Google Analytics 4"],
  faqs: [
    { q: "What is Social Media Marketing?", a: "Social Media Marketing utilizes native interactive channels to distribute creative content layouts, drive structured brand awareness campaigns, and deploy targeted paid ads that guide ideal demographics into active consumer paths." },
    { q: "What is Social Media Optimization (SMO)?", a: "SMO is the technical discipline of structuring your company profiles, bios, indexing tags, and content formats to guarantee your properties rank efficiently within platform-specific search layers and discovery mechanics." },
    { q: "Which platforms should my business use?", a: "Your target horizontal depends precisely on your ideal customer profiles. B2B enterprises leverage the structural paths of LinkedIn, whereas e-commerce or local consumer models thrive inside highly visual loops like Instagram and Facebook." },
    { q: "How often should I post on social media?", a: "Maintaining a disciplined, predictable structure—typically between 3 to 5 highly curated, strategic asset distributions per week—is critical to stay favored by distribution algorithms without degrading content quality." },
    { q: "Do you manage paid advertising campaigns?", a: "Yes, we build and scale advanced paid advertising structures across all prominent network ecosystems, integrating conversion API scripts and advanced customer segmentation variables." },
    { q: "How do you measure social media success?", a: "Success is isolated across deep data tiers including target user engagement velocity, profile click-through weights, net web traffic, conversion actions tracking, and overall generated client revenue spikes." },
    { q: "Can social media generate leads?", a: "Absolutely. By combining custom native lead forms, targeted promotional landing pages, and specialized Lead Generation Services, we transform standard interactive impressions into highly qualified commercial prospects." },
    { q: "How long does it take to see results?", a: "While programmatic paid campaign spikes frequently generate customer actions within a few days of launch, scalable organic brand authority builds compounding momentum over 2 to 3 months of disciplined deployment." }
  ]
};

export default function SocialMediaMarketingPage() {
  return (
    <>
      {/* Search Engine Optimization Injection */}
      <MetaTags 
        title={`${CONTENT.title} | Ownadz`} 
        description={CONTENT.description} 
      />

      <main className="min-h-screen bg-[#fafbfc] text-slate-900 font-sans antialiased selection:bg-blue-600 selection:text-white">
        
        {/* --- PREMIUM HERO SECTION --- */}
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
                  Book a Complimentary Consultation
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex justify-center items-center border border-slate-700 bg-slate-900/50 backdrop-blur px-8 py-4 rounded-xl font-semibold hover:bg-slate-800 transition text-center text-sm sm:text-base"
                >
                  Request a Custom Strategy
                </Link>
              </div>

              {/* Highlighting Content Bullets Inline */}
              <div className="grid sm:grid-cols-2 gap-4 pt-6 border-t border-slate-800">
                {CONTENT.heroBullets.map((bullet) => (
                  <div key={bullet} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                    <span className="text-amber-400 flex-shrink-0 text-base sm:text-lg select-none">✓</span>
                    <span className="leading-snug">{bullet}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* --- HORIZONTAL MANAGED PLATFORMS BADGE STREAM --- */}
        <section className="bg-slate-950 border-t border-slate-900 py-6 overflow-hidden">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-wrap items-center justify-center gap-4 lg:gap-8">
            <span className="text-slate-500 uppercase tracking-widest text-[10px] font-bold">Managed Ecosystems:</span>
            {CONTENT.platforms.map((p) => (
              <span key={p} className="text-slate-300 font-semibold text-xs sm:text-sm px-4 py-1.5 rounded-lg bg-slate-900 border border-slate-800">
                {p}
              </span>
            ))}
          </div>
        </section>

        {/* --- INTRODUCTION INTENT LAYER --- */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 lg:py-24">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-slate-950 leading-tight">
                Modern Distribution Beyond the Static Web Page
              </h2>
              <p className="text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed">
                Owning a website alone does not guarantee you the consistent pipeline of clients or customers you desire. High-performing Social Media Marketing Services allow businesses to interact systematically with their target markets and build deep relationships of trust.
              </p>
              <blockquote className="border-l-4 border-blue-600 pl-4 py-2 italic text-slate-700 bg-blue-50/50 rounded-r-xl pr-4 text-sm sm:text-base">
                "Whether your target goal is to scale broad brand awareness, generate high-intent leads, or amplify conversions, we craft custom, platform-specific actions that move your metrics forward safely."
              </blockquote>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                As an established Social Media Agency, we leverage performance data and analytics to continuously optimize all campaigns. We replace basic placeholder postings with dynamic, creative audience development maps that ensure your business stands far ahead of digital market competitors.
              </p>
            </div>

            {/* Strategic Action Split Interface */}
            <div className="lg:col-span-5 rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-100/40 p-6 sm:p-8 lg:sticky lg:top-6 space-y-6">
              <div>
                <span className="text-[10px] font-bold text-blue-600 uppercase tracking-wider block mb-1">Interactive Action</span>
                <h3 className="text-xl font-bold text-slate-950">Evaluate Your Presence</h3>
                <p className="mt-1 text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Connect with a social media specialist today to map your current digital channels and extract immediate optimization points.
                </p>
                <Link
                  href="/contact"
                  className="mt-4 inline-flex w-full justify-center rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-500 transition text-sm shadow-md"
                >
                  Talk to an Expert
                </Link>
              </div>
              
              <div className="border-t border-slate-100 pt-4">
                <span className="text-[10px] font-bold text-amber-500 uppercase tracking-wider block mb-1">Tailormade Architecture</span>
                <h3 className="text-base font-bold text-slate-950">Custom Niche Blueprint</h3>
                <p className="mt-1 text-slate-600 text-xs leading-relaxed">
                  We match your specific sector challenges, customer behavior maps, and ROI targets precisely.
                </p>
                <Link
                  href="/contact"
                  className="mt-3 inline-flex w-full justify-center rounded-xl bg-slate-950 px-5 py-3 font-semibold text-white hover:bg-slate-800 transition text-sm"
                >
                  Request a Strategy
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* --- WHY CHOOSE US VERTICAL TILES --- */}
        <section className="bg-slate-900 text-white py-16 sm:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black mb-4 tracking-tight">Why Choose Ownadz for Social Media Management</h2>
              <p className="text-slate-400 text-sm sm:text-base">
                We individualize options for brands of all sizes, combining deep creative execution with relentless analytics oversight to protect client campaign scalability.
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

        {/* --- SEGMENT A: CORE SOCIAL MEDIA MARKETING SERVICES --- */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
          <div className="max-w-2xl mb-12 sm:mb-16">
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-blue-600 block mb-1">Paid & Organic Traction</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 tracking-tight">Our Social Media Marketing Services</h2>
            <p className="mt-2 text-slate-600 text-sm sm:text-base">
              Deploy holistic, professional management tracks to consistently command visibility and expand community depth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            {CONTENT.smmServices.map((svc, sIdx) => (
              <div key={sIdx} className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/80 shadow-sm space-y-4">
                <h3 className="text-lg sm:text-xl font-black text-slate-950 flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-blue-600" />
                  {svc.title}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed border-b border-slate-50 pb-4">
                  {svc.desc}
                </p>

                {/* Inline Rendering for Social Advertising Platforms if array exists */}
                {svc.subAds && (
                  <div className="grid sm:grid-cols-2 gap-4 pt-2">
                    {svc.subAds.map((ad, aIdx) => (
                      <div key={aIdx} className="bg-[#fafbfc] border border-slate-200/60 p-4 rounded-xl">
                        <h4 className="font-bold text-slate-900 text-xs sm:text-sm mb-1">{ad.name}</h4>
                        <p className="text-slate-500 text-[11px] sm:text-xs leading-normal">{ad.detail}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* --- SEGMENT B: SOCIAL MEDIA OPTIMIZATION (SMO) SERVICES --- */}
        <section className="bg-white border-t border-b border-slate-200 py-16 sm:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="max-w-2xl mb-12">
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-amber-500 block mb-1">Algorithmic Calibration</span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 tracking-tight">Social Media Optimization (SMO) Services</h2>
              <p className="mt-2 text-slate-600 text-sm sm:text-base">
                Enhance your direct profile authority to transform passing interactive views into compounding audience properties naturally.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
              {CONTENT.smoServices.map((smo, smoIdx) => (
                <div key={smoIdx} className="bg-[#fafbfc] border border-slate-200 p-6 sm:p-8 rounded-xl flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold text-slate-900 text-base sm:text-lg mb-3">{smo.title}</h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{smo.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- FULL CAMPAIGN LIFECYCLE / PROCESS --- */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 tracking-tight mb-4">Our Social Media Process</h2>
            <p className="text-slate-600 text-sm sm:text-base">An established strategy ensuring every asset layer is thoroughly researched, properly executed, and continuously refined.</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {CONTENT.processSteps.map((step, idx) => (
              <div key={idx} className="relative bg-white p-5 sm:p-6 rounded-xl border border-slate-200 shadow-sm">
                <div className="text-2xl sm:text-3xl font-black text-slate-200 mb-3 select-none">{step.num}</div>
                <h3 className="font-bold text-slate-950 text-sm sm:text-base mb-2">{step.title}</h3>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* --- UTILITY MATRIX & BENEFIT HOVERS --- */}
        <section className="bg-slate-900 text-white py-16 sm:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 grid lg:grid-cols-12 gap-8 items-start">
            
            {/* Core Campaign Benefits */}
            <div className="lg:col-span-5 bg-slate-950 p-6 sm:p-8 rounded-2xl border border-slate-800 h-full">
              <h3 className="text-lg font-bold text-slate-100 mb-4 tracking-tight border-b border-slate-800 pb-3">Benefits of SMM & SMO</h3>
              <p className="text-slate-400 text-xs sm:text-sm mb-6 leading-relaxed">
                Systematically scaling these disciplines builds customer loyalty networks and drives long-term market valuation.
              </p>
              <ul className="space-y-3">
                {CONTENT.benefits.map((b, i) => (
                  <li key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300 font-medium">
                    <span className="text-blue-400 font-bold">✓</span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            {/* Infrastructure Toolkits */}
            <div className="lg:col-span-4 bg-slate-950 p-6 sm:p-8 rounded-2xl border border-slate-800 h-full">
              <h3 className="text-lg font-bold text-slate-100 mb-4 tracking-tight border-b border-slate-800 pb-3">Tools & Systems We Use</h3>
              <p className="text-slate-400 text-xs sm:text-sm mb-6 leading-relaxed">
                We manage publishing pipelines and data capture maps utilizing premium operational ecosystems:
              </p>
              <div className="grid grid-cols-1 gap-2">
                {CONTENT.tools.map((t) => (
                  <div key={t} className="bg-slate-900 border border-slate-800 rounded-xl p-3 text-slate-200 text-xs sm:text-sm font-mono">
                    🎛️ &nbsp; {t}
                  </div>
                ))}
              </div>
            </div>

            {/* Industrial Target Verticals */}
            <div className="lg:col-span-3 bg-slate-950 p-6 sm:p-8 rounded-2xl border border-slate-800 h-full">
              <h3 className="text-lg font-bold text-slate-100 mb-4 tracking-tight border-b border-slate-800 pb-3">Target Sectors</h3>
              <p className="text-slate-400 text-xs sm:text-sm mb-6 leading-relaxed">
                Custom marketing plans matching distinct operational challenges:
              </p>
              <div className="flex flex-wrap gap-2">
                {CONTENT.industries.map((ind) => (
                  <span key={ind} className="px-2.5 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 text-xs font-semibold">
                    {ind}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* --- PERSUASIVE PARADIGM BANNER --- */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-24 text-center">
          <div className="bg-blue-50/50 border border-blue-100 rounded-3xl p-8 sm:p-12">
            <h3 className="text-xl sm:text-2xl font-black text-slate-950 tracking-tight mb-4">Why Social Media Matters for Business Growth</h3>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto">
              A robust social presence allows buyers to connect directly with an enterprise identity. By combining focused, interactive communications with deep Lead Generation Services, companies establish trust, elevate visibility, and create dependable opportunities to generate recurring income safely over the long term.
            </p>
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
            <h2 className="text-2xl sm:text-4xl font-black mb-4 tracking-tight">Ready to Scale Your Social Footprint?</h2>
            <p className="text-blue-100 mb-8 max-w-xl mx-auto text-xs sm:text-sm md:text-base leading-relaxed">
              Equip your brand with highly strategic distribution networks, verified script-based content assets, and algorithmic profile configurations built to win.
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