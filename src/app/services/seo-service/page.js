import Link from "next/link";
import MetaTags from "@/components/seo/MetaTags";

export async function generateMetadata() {
  return {
    title: "SEO Services Company | Boost Organic Traffic | OwnAdz",
    description: "Improve your Google rankings with OwnAdz SEO Services. We provide technical SEO, on-page SEO, off-page SEO, local SEO, content optimization, and measurable organic growth.",
    keywords: "SEO services, SEO company, SEO agency, technical SEO, on-page SEO, off-page SEO, local SEO, enterprise SEO, keyword research, link building, organic traffic, OwnAdz",
    alternates: {
      canonical: "https://www.ownadz.com/services/seo-service",
    },
  };
}

// Comprehensive SEO Services Content Object
const CONTENT = {
  slug: "seo-services",
  title: "SEO Services That Drive Organic Growth with AI-Powered Search Optimization",
  subTitle: "Next-Generation Search Visibility",
  description: "Achieve better search rankings, higher organic traffic, and sustained market authority. We optimize your brand not just for legacy search engines, but for modern AI-driven search experiences.",
  heroBullets: [
    "Technical, on-page, and authority optimization",
    "AEO (Answer Engine Optimization) & Featured Snippets",
    "GEO (Generative Engine Optimization) for AI answers",
    "LLM visibility tuning (ChatGPT, Gemini, Claude)",
  ],
  whyChooseUs: [
    {
      title: "Data-Driven Strategy",
      desc: "Through continuous deep website audits, comprehensive competitor research, and behavioral keyword mappings, we craft precise organic roadmaps."
    },
    {
      title: "Experienced SEO Specialists",
      desc: "Our structural engineering teams adapt in real-time to the constant evolution of search algorithms, keeping your platform firmly at the top."
    },
    {
      title: "Transparent Reporting",
      desc: "Get completely clear, granular performance reports isolating keyword trajectories, index updates, traffic streams, and clear conversion paths."
    },
    {
      title: "Custom SEO Roadmap",
      desc: "Every enterprise has a unique blueprint. We align your organic campaigns directly to your competitive landscape, target niche, and buyer intent."
    }
  ],
  serviceCategories: [
    {
      category: "Technical SEO",
      desc: "Build a highly crawlable, perfectly indexed foundation that complies strictly with modern search performance requirements.",
      items: [
        { name: "Website Audit", detail: "Isolate structural flaws, broken routing networks, and performance bottlenecks limiting visibility." },
        { name: "Core Web Vitals", detail: "Optimize platform load speed, interaction latencies, and layout stability elements to maximize rank potential." },
        { name: "Crawlability", detail: "Ensure automated search spider arrays index and map your system architecture smoothly and efficiently." },
        { name: "Indexing Optimization", detail: "Resolve structural dead-ends, tag anomalies, and configure search-friendly internal schema paths." }
      ]
    },
    {
      category: "On-Page SEO",
      desc: "Ensure every page asset delivers deep contextual relevance to human audiences and semantic processing bots simultaneously.",
      items: [
        { name: "Keyword Optimization", detail: "Map highly profitable keyword clusters naturally inside core page structural components." },
        { name: "Meta Tags Tuning", detail: "Structure dynamic page titles, descriptions, and structural header tags to drive elevated organic click-throughs." },
        { name: "Internal Linking", detail: "Distribute semantic link authority evenly across your platform while clarifying page navigation trees." },
        { name: "Content Optimization", detail: "Refine on-site assets to align with search intent, user readability targets, and algorithm patterns." }
      ]
    },
    {
      category: "Off-Page SEO",
      desc: "Establish undisputed brand authority, trust, and historical domain credibility across your target market horizontal.",
      items: [
        { name: "Link Building", detail: "Secure authoritative, clean contextual backlink networks that signal high domain credibility." },
        { name: "Digital PR", detail: "Run strategic outreach campaigns to garner premium third-party brand mentions and high-value industry citations." },
        { name: "Authority Building", detail: "Cultivate holistic digital trust markers that translate into durable, long-term search placement rankings." },
        { name: "E-E-A-T Frameworks", detail: "Embed clear Experience, Expertise, Authoritativeness, and Trust signals across global platform profiles." }
      ]
    },
    {
      category: "Local SEO Services",
      desc: "Capture local high-intent transactional search queries within your immediate geographic or physical marketplace.",
      items: [
        { name: "Google Business Profile", detail: "Optimize core commercial property details to maximize map pack visibility and direct client touchpoints." },
        { name: "Local Citations", detail: "Deploy clean, consistent business directory alignment across authoritative local data hubs." },
        { name: "Local Keyword Target", detail: "Rank your core conversion landing pages for localized geographic search string prefixes and suffixes." },
        { name: "Maps Visibility", detail: "Scale physical map presence to attract immediate driving-range consumer actions and incoming local leads." }
      ]
    }
  ],
  aiOptimization: [
    {
      framework: "AEO (Answer Engine Optimization)",
      desc: "Position your brand directly inside conversational answer frameworks, direct response fields, and assistant queries.",
      subItems: [
        { title: "Featured Snippets", desc: "Format explicit content blocks to render cleanly in position-zero summary boxes and immediate answer grids." },
        { title: "Question-Based Content", desc: "Build thematic clusters matching the conversational syntax and interrogative queries utilized by real users." },
        { title: "Voice Search Optimization", desc: "Structure long-tail conversational content strings that parallel natural human spoken speech configurations." },
        { title: "FAQ Optimization", desc: "Deploy clean, highly structured schema arrays optimized to answer user queries across traditional and AI platforms." }
      ]
    },
    {
      framework: "GEO (Generative Engine Optimization)",
      desc: "Ensure your commercial properties are directly synthesized into AI-generated overview summaries across the digital landscape.",
      subItems: [
        { title: "AI Search Visibility", desc: "Optimize structural site copies to clear text synthesis requirements for modern generative search frames." },
        { title: "Entity Optimization", desc: "Strengthen clear machine-readable entity configurations to secure accurate, unified brand recognition patterns." },
        { title: "Structured Content", desc: "Design perfectly componentized layouts that streamline semantic classification and automated data scraping." },
        { title: "Citation-Ready Content", desc: "Produce deeply authoritative reference text elements crafted to be pulled by algorithmic attribution networks." }
      ]
    },
    {
      framework: "LLM (Large Language Model) Optimization",
      desc: "Make your enterprise referenceable across major native AI chat ecosystems globally.",
      subItems: [
        { title: "AI Conversational Models", desc: "Establish continuous brand mention pathways inside prominent platform horizons like ChatGPT, Gemini, and Claude." },
        { title: "Semantic Relevance", desc: "Ditch simple keyword stuffing for rich topic modeling, resolving core user intent at an architectural level." },
        { title: "Knowledge Graph Signals", desc: "Anchor clear semantic relationships to position your platform assets deep inside digital knowledge directories." },
        { title: "Topical Authority", desc: "Develop wide, deeply layered technical knowledge matrices that establish your brand as an industry category expert." }
      ]
    }
  ],
  processSteps: [
    { num: "01", title: "Discovery & Audit", desc: "Deep assessment of your architectural tech stack, market competitors, and domain profiles to isolate hidden growth tracks." },
    { num: "02", title: "Keyword Research", desc: "Compiling semantic maps of high-converting transactional, informational, and intent-based programmatic search strings." },
    { num: "03", title: "Strategy Development", desc: "Structuring a clear custom workflow encompassing core code adjustments, asset production schedules, and AI ingestion targets." },
    { num: "04", title: "Implementation", desc: "Deploying structural technical fixes, semantic on-page optimizations, and systematic brand authority link acquisition passes." },
    { num: "05", title: "Monitoring & Reporting", desc: "Tracking ongoing index updates, algorithm adaptations, and keyword positions using granular, unified visual reporting dashboard frameworks." }
  ],
  benefits: [
    "Sustained increases in organic traffic streams",
    "Elevated placements across legacy & AI search engines",
    "Highly efficient, predictable lead acquisition paths",
    "Polished core web metrics & overall user experience",
    "Elevated macro micro conversion transaction rates",
    "Compounding, long-term enterprise growth footprints",
    "Maximum digital market footprint and brand visibility",
    "Unshakable digital marketplace credibility & authority"
  ],
  industries: ["Healthcare", "SaaS", "E-commerce", "Education", "Real Estate", "Local Business"],
  tools: ["Google Search Console", "Google Analytics 4", "Ahrefs", "SEMrush", "Screaming Frog"],
  faqs: [
    { q: "What SEO services does Ownadz provide?", a: "We deliver full-lifecycle organic management including Technical SEO, On-Page SEO, Off-Page Link & Authority Building, Local Maps optimization, and cutting-edge AI-Powered Search Tuning (AEO, GEO, and LLM optimization)." },
    { q: "What is AEO and why is it important?", a: "AEO stands for Answer Engine Optimization. It modifies your platform content structures so that digital assistant software and AI systems pull your data directly to serve immediate, conversational answer prompts." },
    { q: "What is GEO in SEO?", a: "GEO (Generative Engine Optimization) is the discipline of optimizing text assets to ensure generative search engines reference and cite your brand inside machine-synthesized search overviews." },
    { q: "How does LLM optimization help businesses?", a: "LLM optimization targets language models like ChatGPT, Gemini, and Claude. It builds up semantic authority signals so that when users seek recommendations within AI chats, your firm is surfaced as a top solution." },
    { q: "What is AI Overview optimization?", a: "It focuses on configuring high-level expert content and structured schema to guarantee your corporate platforms are selected by Google's native AI search componentry to serve as source citations." },
    { q: "How long does SEO take?", a: "Typically, solid measurable shifts in traffic volumes and core keyword positions scale cleanly into view within 3 to 6 months, building compounding value over successive quarters." },
    { q: "Do you provide local SEO services?", a: "Yes, we handle complete map stack, local citations, and Google Business Profile optimization to ensure you capture transactional searchers in your target regional footprints." },
    { q: "How do you measure SEO success?", a: "We monitor performance strictly through conversion metrics, overall ranking changes, clean organic traffic numbers, system crawl performance, and raw client business revenue increases." }
  ]
};

export default function SeoServicesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What are SEO services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "SEO services improve your website visibility in search engines through technical, on-page, off-page, and content optimization."
        }
      },
      {
        "@type": "Question",
        "name": "How long does SEO take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most websites start seeing improvements within 3 to 6 months depending on competition and website health."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide local SEO?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, OwnAdz offers local SEO to improve visibility in Google Search and Maps."
        }
      },
      {
        "@type": "Question",
        "name": "What is included in SEO?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Keyword research, technical SEO, content optimization, link building, reporting, and continuous optimization."
        }
      },
      {
        "@type": "Question",
        "name": "Why choose OwnAdz?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "OwnAdz delivers data-driven SEO strategies focused on long-term rankings, qualified traffic, and measurable ROI."
        }
      }
    ]
  };

  return (
    <>
      {/* Search Engine Optimization Injection */}
      <MetaTags 
        title="SEO Services Company | Boost Organic Traffic | OwnAdz" 
        description="Improve your Google rankings with OwnAdz SEO Services. We provide technical SEO, on-page SEO, off-page SEO, local SEO, content optimization, and measurable organic growth." 
      />

      {/* Structured Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="min-h-screen bg-[#fafbfc] text-slate-900 font-sans antialiased selection:bg-blue-600 selection:text-white">
        
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
                  Get Your Free SEO Audit
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

        {/* --- INTRODUCTION & STRATEGIC INSIGHT BANNER --- */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 lg:py-24">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-slate-950 leading-tight">
                Organic Engineering for Modern Digital Discovery
              </h2>
              <p className="text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed">
                In today's highly technology-dependent world, brand success requires much more than basic web presentation. What any firm needs is visible market authority precisely where its target consumers perform searches.
              </p>
              <blockquote className="border-l-4 border-blue-600 pl-4 py-2 italic text-slate-700 bg-blue-50/50 rounded-r-xl pr-4 text-sm sm:text-base">
                "We break past typical technical limitations, configuring custom optimizations across legacy keyword architectures, semantic algorithms, and alternative generative answer engine ecosystems simultaneously."
              </blockquote>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                As an established SEO Company, we focus squarely on driving real commercial value. Our holistic process matches deep keyword discovery to conversion-focused assets, optimizing your ecosystem to capture traffic and convert clicks seamlessly into active revenue.
              </p>
            </div>

            {/* Strategic Action Card */}
            <div className="lg:col-span-5 rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-100/40 p-6 sm:p-8 lg:sticky lg:top-6">
              <span className="text-[10px] sm:text-xs font-bold text-blue-600 uppercase tracking-wider block mb-1">Organic Mapping</span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-950">Claim the Search Feed</h3>
              <p className="mt-2 text-slate-600 text-xs sm:text-sm leading-relaxed">
                Partner with our specialized technical analysts to deploy clean crawling hierarchies, optimize Core Web Vitals, and build scalable link networks.
              </p>
              <Link
                href="/contact"
                className="mt-6 inline-flex w-full justify-center rounded-xl bg-slate-950 px-6 py-4 font-semibold text-white hover:bg-slate-800 transition shadow-md text-sm sm:text-base"
              >
                Launch Custom Campaign
              </Link>
              <div className="mt-4 flex items-center justify-between text-[11px] sm:text-xs text-slate-500 border-t border-slate-100 pt-4">
                <span>⚡ Complete Audits Available</span>
                <span>AI Ingestion Optimized</span>
              </div>
            </div>
          </div>
        </section>

        {/* --- WHY CHOOSE US SECTION --- */}
        <section className="bg-slate-900 text-white py-16 sm:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black mb-4 tracking-tight">Why Choose Ownadz for SEO Services</h2>
              <p className="text-slate-400 text-sm sm:text-base">
                Selecting the right partner can be decisive in shaping your competitive footprint online. Our technical search solutions are driven by actionable data, structural knowledge, and repeatable methodology.
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

        {/* --- CORE CAPABILITIES / CORE SERVICES MATRIX --- */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
          <div className="max-w-2xl mb-12 sm:mb-16">
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-blue-600 block mb-1">Structural Deliverables</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 tracking-tight">Our Complete SEO Services</h2>
            <p className="mt-2 text-slate-600 text-sm sm:text-base">
              Our comprehensive package delivers every required technical and semantic asset to command higher search visibility and user interaction levels.
            </p>
          </div>

          <div className="space-y-16">
            {CONTENT.serviceCategories.map((cat, idx) => (
              <div key={idx} className="border-b border-slate-200/60 last:border-none pb-12 last:pb-0">
                <div className="max-w-xl mb-8">
                  <h3 className="text-xl sm:text-2xl font-black text-slate-950 mb-2 flex items-center gap-3">
                    <span className="h-2.5 w-2.5 rounded-full bg-blue-600" />
                    {cat.category}
                  </h3>
                  <p className="text-slate-500 text-xs sm:text-sm">{cat.desc}</p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {cat.items.map((item, i) => (
                    <div key={i} className="bg-white p-5 rounded-xl border border-slate-200/80 shadow-sm hover:shadow-md transition">
                      <h4 className="font-bold text-slate-900 text-sm sm:text-base mb-1.5">{item.name}</h4>
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{item.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- AI-POWERED SEARCH OPTIMIZATION SPECIALIZATION (AEO, GEO, LLM) --- */}
        <section className="bg-slate-50 border-t border-b border-slate-200 py-16 sm:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-amber-500 block mb-1">The Future of Discovery</span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 tracking-tight">AI-Powered Search Optimization</h2>
              <p className="mt-2 text-slate-600 text-sm sm:text-base">
                Artificial intelligence is shifting how users find, distill, and acquire digital resources. We architect content nodes optimized for advanced automated systems.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {CONTENT.aiOptimization.map((block, bIdx) => (
                <div key={bIdx} className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg sm:text-xl font-black text-slate-950 mb-3 text-blue-600">
                      {block.framework}
                    </h3>
                    <p className="text-slate-500 text-xs sm:text-sm mb-6 leading-relaxed border-b border-slate-100 pb-4">
                      {block.desc}
                    </p>
                    <div className="space-y-5">
                      {block.subItems.map((sub, sIdx) => (
                        <div key={sIdx}>
                          <h4 className="font-bold text-slate-900 text-sm mb-1">{sub.title}</h4>
                          <p className="text-slate-600 text-xs leading-relaxed">{sub.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- PROPRIETARY WORK PROCESS --- */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 tracking-tight mb-4">Our Tested SEO Process</h2>
            <p className="text-slate-600 text-sm sm:text-base">We approach organic scaling through a transparent, outcome-oriented delivery framework that accounts for every technical gap on your domain.</p>
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

        {/* --- ECOSYSTEM UTILITIES & BENEFITS GRID --- */}
        <section className="bg-slate-900 text-white py-16 sm:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 grid lg:grid-cols-12 gap-8 items-start">
            
            {/* Core Benefits */}
            <div className="lg:col-span-5 bg-slate-950 p-6 sm:p-8 rounded-2xl border border-slate-800 h-full">
              <h3 className="text-lg font-bold text-slate-100 mb-4 tracking-tight border-b border-slate-800 pb-3">SEO Benefits for Your Business</h3>
              <p className="text-slate-400 text-xs sm:text-sm mb-6 leading-relaxed">
                Investing in certified search components builds an appreciating corporate property asset that lowers paid channel dependencies.
              </p>
              <ul className="grid sm:grid-cols-2 gap-3">
                {CONTENT.benefits.map((b, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-slate-300 font-medium leading-tight">
                    <span className="text-blue-400 font-bold">✓</span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack Toolkit */}
            <div className="lg:col-span-4 bg-slate-950 p-6 sm:p-8 rounded-2xl border border-slate-800 h-full">
              <h3 className="text-lg font-bold text-slate-100 mb-4 tracking-tight border-b border-slate-800 pb-3">Tools & Technologies We Use</h3>
              <p className="text-slate-400 text-xs sm:text-sm mb-6 leading-relaxed">
                We monitor execution variables through industry-standard diagnostics configurations to protect structural integrity.
              </p>
              <div className="grid grid-cols-1 gap-2.5">
                {CONTENT.tools.map((t) => (
                  <div key={t} className="bg-slate-900 border border-slate-800 rounded-xl p-3 font-semibold text-slate-200 text-xs sm:text-sm">
                    🛠️ &nbsp; {t}
                  </div>
                ))}
              </div>
            </div>

            {/* Vertical Targets */}
            <div className="lg:col-span-3 bg-slate-950 p-6 sm:p-8 rounded-2xl border border-slate-800 h-full">
              <h3 className="text-lg font-bold text-slate-100 mb-4 tracking-tight border-b border-slate-800 pb-3">Operational Verticals</h3>
              <p className="text-slate-400 text-xs sm:text-sm mb-6 leading-relaxed">
                Tailoring platform algorithms across key specialized operational sectors:
              </p>
              <div className="flex flex-wrap gap-2">
                {CONTENT.industries.map((ind) => (
                  <span key={ind} className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 text-xs font-medium">
                    {ind}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* --- PERSUASIVE PARADIGM EXPLANATION BANNER --- */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-24 text-center">
          <div className="bg-blue-50/50 border border-blue-100 rounded-3xl p-8 sm:p-12">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-950 tracking-tight mb-4">Why SEO Matters in the AI Search Era</h3>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto">
              The paths users navigate to gather intelligence continue to evolve at an accelerating pace. Modern traffic flows rely heavily on AI-summarized outputs, voice-activated logic, and long-form conversational chats. Legacy practices alone cannot capture this landscape. Current optimization architectures require integrating specialized AEO, GEO, and LLM methodologies so your corporate assets stay discoverable everywhere consumers run research patterns.
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
            <h2 className="text-2xl sm:text-4xl font-black mb-4 tracking-tight">Future-Proof Your Organic Traffic</h2>
            <p className="text-blue-100 mb-8 max-w-xl mx-auto text-xs sm:text-sm md:text-base leading-relaxed">
              Equip your company with advanced link distribution, pixel-perfect technical setups, and machine-readable text properties optimized for the next age of internet data processing.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-white text-blue-950 font-bold px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl hover:bg-amber-400 hover:text-slate-950 transition-all shadow-lg text-xs sm:text-sm md:text-base"
            >
              Get Started with Ownadz SEO
            </Link>
          </div>
        </section>

      </main>
    </>
  );
}