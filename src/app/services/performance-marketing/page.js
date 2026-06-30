import Link from "next/link";
import MetaTags from "@/components/seo/MetaTags";

// Comprehensive Performance Marketing Content Object
const CONTENT = {
  slug: "performance-marketing",
  title: "Performance Marketing Services That Drive Measurable Results",
  subTitle: "Result-Oriented Digital Advertising",
  description: "Ensure sustainable business growth through campaigns based on facts, accurate target audience identification, and constant real-time improvements. Pay for tangible outputs, not empty impressions.",
  heroBullets: [
    "Data-driven client acquisition blueprints",
    "Certified multi-platform ad specialists",
    "Real-time campaign & bid optimization",
    "Comprehensive full-funnel tracking analytics",
  ],
  whyChooseUs: [
    {
      title: "Data-Driven Strategies",
      desc: "All our decisions are made with the support of analytical data, insights gained from the performance of previous campaigns, and verified conversion metrics."
    },
    {
      title: "Certified Advertising Specialists",
      desc: "We have an experienced team that runs expert campaigns across multiple networks to ensure high-velocity output and industry-standard best practices."
    },
    {
      title: "Real-Time Campaign Optimization",
      desc: "At Ownadz, we track the progress of your campaigns continuously, refining variables instantly for better performance based on ongoing data analysis."
    },
    {
      title: "Transparent Reporting",
      desc: "Complete performance reports, attribution channels, and clear insights about your active marketing budgets are always securely available at your disposal."
    }
  ],
  coreDrivers: [
    {
      title: "Increase Leads and Sales",
      desc: "Our marketing efforts produce highly targeted campaigns, matching your brand directly to potential customers actively looking for your specific products or services."
    },
    {
      title: "Maximize Advertising ROI",
      desc: "Each and every campaign is structured strictly according to target KPIs. ROI-driven marketing guarantees your budget is placed entirely into the most profitable channels."
    },
    {
      title: "Reach the Right Audience",
      desc: "Utilizing advanced customer segmentation, granular behavioral analysis, and historic data profiling to place your ads in front of high-intent clients."
    },
    {
      title: "Scale Campaigns Efficiently",
      desc: "Built to match your ongoing business expansion, our performance infrastructure scales smoothly alongside your operational capacities and revenue targets."
    }
  ],
  serviceCategories: [
    {
      category: "Google Ads Management",
      desc: "Assist you in creating additional high-intent visitors along with increased company visibility across Google Search & Partner networks.",
      items: [
        { name: "Search Campaigns", detail: "Target users actively looking for services and products related to your business." },
        { name: "Display Advertising", detail: "Enhance visual brand awareness across millions of Google partner websites." },
        { name: "Shopping Campaigns", detail: "Increase store sales using optimized product listings directly in search results." },
        { name: "YouTube Advertising", detail: "Deploy high-impact video ads to increase engagement, visibility, and direct actions." }
      ]
    },
    {
      category: "Meta Ads Management",
      desc: "Connect your company to its exact target audience using precise programmatic social structures across Facebook and Instagram networks.",
      items: [
        { name: "Facebook Ads", detail: "Drive high-volume traffic and direct conversions using dynamic media frameworks." },
        { name: "Instagram Ads", detail: "Leverage immersive visual placements and story-telling formats to capture user focus." },
        { name: "Retargeting Campaigns", detail: "Re-engage historical website visitors and guide them through to final completion." },
        { name: "Lead Generation Ads", detail: "Capture user intent directly within the platform feed via native lead form funnels." }
      ]
    },
    {
      category: "LinkedIn Advertising",
      desc: "The premier business-to-business social ecosystem tailored specifically for high-ticket lead generation and corporate client acquisition.",
      items: [
        { name: "B2B Lead Generation", detail: "Pinpoint decision-makers by company size, corporate job title, or niche industry vertical." },
        { name: "Sponsored Content", detail: "Boost authoritative company visibility naturally directly inside professional user feeds." },
        { name: "Native Lead Forms", detail: "Gather verified corporate details seamlessly using pre-populated account profiles." },
        { name: "Account-Based Marketing", detail: "Focus ad campaigns specifically on selected target organizations and buying committees." }
      ]
    },
    {
      category: "PPC Management Services",
      desc: "Comprehensive pay-per-click management designed from the ground up to offer hyper-efficient, revenue-generating marketing tracks.",
      items: [
        { name: "Keyword Research", detail: "Isolate highly profitable search terms with strong conversion potential to lower costs." },
        { name: "Bid Management", detail: "Develop automated and manual bidding styles to capture maximum return on investment." },
        { name: "Ad Copy Optimization", detail: "Write highly persuasive, message-matched copy to drive elevated click-through rates." },
        { name: "Conversion Tracking", detail: "Deploy deep analytical pixels to evaluate exactly where every advertising dollar converts." }
      ]
    }
  ],
  croCapabilities: [
    {
      section: "Landing Page Optimization",
      items: [
        { title: "User Experience Improvements", desc: "Enhance customer navigation flows and reduce page latency to maximize user engagement metrics." },
        { title: "CTA Optimization", desc: "Design highly compelling, clear call-to-actions that prompt immediate decisions from site visitors." },
        { title: "A/B Testing", desc: "Systematically test diverse page variations, layouts, headlines, and structural design assets." },
        { title: "Conversion-Focused Design", desc: "Architect dedicated, clean web components designed explicitly to increase your macro transaction volume." }
      ]
    },
    {
      section: "Funnel Optimization",
      items: [
        { title: "Customer Journey Analysis", desc: "Isolate specific friction drop-off points preventing users from completing standard conversion paths." },
        { title: "Lead Nurturing", desc: "Guide prospective leads further down the purchasing journey through automated multi-channel engagement." },
        { title: "Performance Tracking", desc: "Monitor prospect behavior and source interactions across the complete operational timeline." },
        { title: "Revenue Optimization", desc: "Optimize each component step of the active sales cycle to maximize net enterprise profitability." }
      ]
    }
  ],
  processSteps: [
    { num: "01", title: "Business Analysis & Goal Setting", desc: "Gaining clear, structural knowledge about your unique business priorities, target audience, and near-term revenue targets." },
    { num: "02", title: "Audience Research", desc: "Running deep diagnostic segmentation to accurately pinpoint ideal customer behaviors, key interests, and modern search intent." },
    { num: "03", title: "Campaign Strategy Development", desc: "Creating a personalized performance roadmap across search channels, social networks, custom creative choices, and strict KPI targets." },
    { num: "04", title: "Campaign Launch & Management", desc: "Deploying active live campaigns under rigorous professional oversight, monitoring entry metrics and asset stability daily." },
    { num: "05", title: "Reporting & Optimization", desc: "Running cyclic systematic adjustments, budget redistributions, and testing variations to secure the highest potential marketing return." }
  ],
  platforms: ["Google Ads", "Facebook", "Instagram", "LinkedIn", "YouTube", "Microsoft Ads"],
  benefits: [
    "Highly cost-effective campaigns",
    "Rapid, predictable lead generation",
    "Significantly higher return on investment",
    "Seamless scaling of business infrastructure",
    "Enhanced digital brand authority & exposure",
    "Precise customer intent targeting capabilities",
    "Lowered cost of customer acquisition (CAC)"
  ],
  industries: ["E-commerce", "SaaS", "Healthcare", "Education", "Real Estate", "Local Business"],
  tools: ["Google Ads", "Google Analytics 4", "Google Tag Manager", "Meta Ads Manager", "SEMrush", "Looker Studio"],
  faqs: [
    { q: "What is Performance Marketing?", a: "Performance Marketing is an internet advertising strategy where marketing campaigns are systematically tracked and optimized based on explicit performance metrics like clicks, leads, conversions, and sales." },
    { q: "How is Performance Marketing different from traditional marketing?", a: "While traditional marketing primarily targets general visibility and broad brand awareness, performance marketing focuses squarely on the accountability, actions, and quantifiable direct outcomes driven by the campaigns." },
    { q: "Which advertising platforms do you manage?", a: "We manage expert campaigns across major ecosystems including Google Ads, Facebook Ads, Instagram Ads, LinkedIn Ads, YouTube Ads, and Microsoft Ads." },
    { q: "How do you track campaign performance?", a: "We deploy comprehensive data layers, custom conversion tracking scripts, and real-time client dashboards to seamlessly isolate attribution channels, user behaviors, and spend performance." },
    { q: "What budget is required for Performance Marketing?", a: "Budgets are highly scalable and vary based on your specific industry landscape, competitor keyword weights, campaign goals, and chosen networks. We structure spend to maximize programmatic efficiencies." },
    { q: "How quickly can I see results?", a: "Initial conversion tracking data and lead generations often begin within the first few weeks of campaign deployment, while deep algorithmic optimization curves yield compounding scaling efficiencies over successive months." },
    { q: "Do you provide landing page optimization?", a: "Yes, we offer fully built Conversion Rate Optimization (CRO) frameworks, applying rigorous UI adjustments, copy alignment, and visual tests to ensure traffic converts at peak efficiency." },
    { q: "How do you improve ROI?", a: "We continuously maximize client returns through laser-focused audience segmenting, automated bid management, strict negative keyword mitigation, copy variations testing, and margin-focused budgeting." }
  ]
};

export default function PerformanceMarketingPage() {
  return (
    <>
      {/* Search Engine Optimization Injection */}
      <MetaTags 
        title={`${CONTENT.title} | Ownadz`} 
        description={CONTENT.description} 
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
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-6 leading-[1.1] text-white">
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
                <Link
                  href="/contact"
                  className="inline-flex justify-center items-center border border-slate-700 bg-slate-900/50 backdrop-blur px-8 py-4 rounded-xl font-semibold hover:bg-slate-800 transition text-center text-sm sm:text-base"
                >
                  Request Architecture Setup
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

        {/* --- INTRODUCTION & STRATEGIC ACTION CARD --- */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 lg:py-24">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-slate-950 leading-tight">
                An Efficient Way To Accomplish Measurable Results
              </h2>
              <p className="text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed">
                In the current era, where business competition has become fierce due to the widespread use of technology, a company requires marketing tactics that result in tangible, measurable outputs. 
              </p>
              <blockquote className="border-l-4 border-blue-600 pl-4 py-2 italic text-slate-700 bg-blue-50/50 rounded-r-xl pr-4 text-sm sm:text-base">
                "As a renowned Performance Marketing Agency, we pride ourselves in being committed to making sure each dollar put into digital advertising goes a long way to ensure that your business gets the best possible gains from its ad expenses."
              </blockquote>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Our performance marketing services ensure your business finds the right customers to buy from them. We bypass guesswork to implement frameworks that track behavior, analyze client conversion actions, and optimize asset distribution scales systematically.
              </p>
            </div>

            {/* Strategic Action Card */}
            <div className="lg:col-span-5 rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-100/40 p-6 sm:p-8 lg:sticky lg:top-6">
              <span className="text-[10px] sm:text-xs font-bold text-blue-600 uppercase tracking-wider block mb-1">Next Step</span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-950">Maximize Your Growth</h3>
              <p className="mt-2 text-slate-600 text-xs sm:text-sm leading-relaxed">
                Connect with our certified digital advertising specialists to run full analytical keyword reviews, layout structured custom funnels, and eliminate wasted ad spend.
              </p>
              <Link
                href="/contact"
                className="mt-6 inline-flex w-full justify-center rounded-xl bg-slate-950 px-6 py-4 font-semibold text-white hover:bg-slate-800 transition shadow-md text-sm sm:text-base"
              >
                Contact Us
              </Link>
              <div className="mt-4 flex items-center justify-between text-[11px] sm:text-xs text-slate-500 border-t border-slate-100 pt-4">
                <span>⚡ Prompt Response (1 Business Day)</span>
                <span>ROI Driven Approach</span>
              </div>
            </div>
          </div>
        </section>

        {/* --- WHY CHOOSE US SECTION --- */}
        <section className="bg-slate-900 text-white py-16 sm:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black mb-4 tracking-tight">Why Choose Ownadz for Performance Marketing</h2>
              <p className="text-slate-400 text-sm sm:text-base">
                Selecting the right partner will play a vital role in your marketing strategies. Ownadz is the right company for you if you are looking for a result-oriented Digital Advertising Agency.
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

        {/* --- ACCELERATE BUSINESS GROWTH / CORE DRIVERS --- */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 mb-4 tracking-tight">
              Accelerate Business Growth with Performance Marketing
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Businesses need marketing campaigns that produce visible income and scaling. We provide marketing services that focus perfectly on outputs that truly matter.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CONTENT.coreDrivers.map((driver, i) => (
              <div key={i} className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="text-blue-600 font-bold text-lg mb-3 select-none">✓</div>
                  <h3 className="font-bold text-slate-950 text-sm sm:text-base mb-2">{driver.title}</h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{driver.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- DETAILED SERVICE VERTICALS GRID --- */}
        <section className="bg-white border-t border-b border-slate-200 py-16 sm:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="max-w-2xl mb-12 sm:mb-16">
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-blue-600 block mb-1">Our Deliverables</span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 tracking-tight">Our Performance Marketing Services</h2>
              <p className="mt-2 text-slate-600 text-sm sm:text-base">
                Our strategic structural frameworks will make sure that the entire lifecycle of acquiring customers is optimized through targeted expertise.
              </p>
            </div>
            
            <div className="space-y-16">
              {CONTENT.serviceCategories.map((cat, idx) => (
                <div key={idx} className="border-b border-slate-100 last:border-none pb-12 last:pb-0">
                  <div className="max-w-xl mb-8">
                    <h3 className="text-xl sm:text-2xl font-black text-slate-950 mb-2 flex items-center gap-3">
                      <span className="h-2 w-2 rounded-full bg-blue-600" />
                      {cat.category}
                    </h3>
                    <p className="text-slate-500 text-xs sm:text-sm">{cat.desc}</p>
                  </div>
                  
                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {cat.items.map((item, i) => (
                      <div key={i} className="bg-[#fafbfc] p-5 rounded-xl border border-slate-200/50 hover:shadow-md transition">
                        <h4 className="font-bold text-slate-900 text-sm sm:text-base mb-1.5">{item.name}</h4>
                        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{item.detail}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- CONVERSION RATE OPTIMIZATION (CRO) SPECIALIZATION --- */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-amber-500 block mb-1">Traffic Multiplication Frameworks</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 tracking-tight">Conversion Rate Optimization (CRO)</h2>
            <p className="mt-2 text-slate-600 text-sm sm:text-base">
              It is not all about generating raw volume but also improving systematic conversion rates using our technical data optimization assets.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {CONTENT.croCapabilities.map((block, bIdx) => (
              <div key={bIdx} className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm">
                <h3 className="text-lg sm:text-xl font-bold text-slate-950 mb-6 border-b border-slate-100 pb-3 text-blue-600">
                  {block.section}
                </h3>
                <div className="space-y-6">
                  {block.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="group">
                      <h4 className="font-bold text-slate-900 text-sm sm:text-base mb-1 group-hover:text-blue-600 transition">
                        {item.title}
                      </h4>
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- SYSTEMATIC STEPS / PROCESS --- */}
        <section className="bg-slate-900 text-white py-16 sm:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black mb-4 tracking-tight">Our Performance Marketing Process</h2>
              <p className="text-slate-400 text-sm sm:text-base">Our tested, highly data-backed configuration guarantees that each unique campaign is properly planned, well-executed, and constantly optimized.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {CONTENT.processSteps.map((step, idx) => (
                <div key={idx} className="relative bg-slate-950 p-5 sm:p-6 rounded-xl border border-slate-800">
                  <div className="text-2xl sm:text-3xl font-black text-slate-800 mb-3 select-none">{step.num}</div>
                  <h3 className="font-bold text-slate-100 text-sm sm:text-base mb-2">{step.title}</h3>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- ECOSYSTEM CHANNELS & ADVANCED UTILITIES --- */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24 grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Platforms We Advertise On */}
          <div className="lg:col-span-4 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm h-full">
            <h3 className="text-lg font-black text-slate-950 mb-4 tracking-tight border-b border-slate-100 pb-3">Platforms We Advertise On</h3>
            <p className="text-slate-600 text-xs sm:text-sm mb-6 leading-relaxed">
              Our Multi-Channel Performance Marketing structures work directly across all major global digital networks to engage targeted audiences anywhere online.
            </p>
            <div className="grid grid-cols-2 gap-3">
              {CONTENT.platforms.map((p) => (
                <div key={p} className="bg-[#fafbfc] border border-slate-200 rounded-xl p-3 text-center font-medium text-slate-800 text-xs sm:text-sm hover:border-blue-500 transition">
                  {p}
                </div>
              ))}
            </div>
          </div>

          {/* Tools & Technologies */}
          <div className="lg:col-span-4 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm h-full">
            <h3 className="text-lg font-black text-slate-950 mb-4 tracking-tight border-b border-slate-100 pb-3">Tools & Technologies We Use</h3>
            <p className="text-slate-600 text-xs sm:text-sm mb-6 leading-relaxed">
              At our Digital Advertising Agency, we deploy the latest analytics tracking architectures to uncover critical business insight trends.
            </p>
            <div className="grid grid-cols-2 gap-3">
              {CONTENT.tools.map((t) => (
                <div key={t} className="bg-[#fafbfc] border border-slate-200 rounded-xl p-3 text-center font-medium text-slate-800 text-xs sm:text-sm hover:border-amber-500 transition">
                  {t}
                </div>
              ))}
            </div>
          </div>

          {/* Core Campaign Benefits */}
          <div className="lg:col-span-4 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm h-full">
            <h3 className="text-lg font-black text-slate-950 mb-4 tracking-tight border-b border-slate-100 pb-3">Benefits of Performance Frameworks</h3>
            <p className="text-slate-600 text-xs sm:text-sm mb-4 leading-relaxed">
              Why opt for our professional performance structures? Here are several key outcomes driven by our setup:
            </p>
            <ul className="space-y-2.5">
              {CONTENT.benefits.map((b, i) => (
                <li key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                  <span className="text-emerald-500 font-bold">✓</span>
                  {b}
                </li>
              ))}
            </ul>
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

        {/* --- PERSUASIVE WHY IT MATTERS BLOCKQUOTE --- */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-24 text-center">
          <div className="bg-blue-50/50 border border-blue-100 rounded-3xl p-8 sm:p-12">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-950 tracking-tight mb-4">Why Performance Marketing Matters</h3>
            <p className="text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl mx-auto">
              Following fierce competition, modern companies require marketing solutions that definitely yield clear results. Performance marketing services involve strict accountability, transparency, and measures that guarantee tangible returns. Unlike legacy methodologies, our performance marketing setups enable companies to seamlessly track every step taken towards macro profits.
            </p>
          </div>
        </section>

        {/* --- FAQ ACCORDION SECTION --- */}
        <section className="max-w-3xl mx-auto px-4 sm:px-6 pb-16 sm:pb-24">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-950 text-center mb-10 sm:mb-12 tracking-tight">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {CONTENT.faqs.map((faq, index) => (
              <div key={index} className="bg-white p-5 sm:p-6 rounded-xl border border-slate-200 shadow-sm">
                <h3 className="font-bold text-slate-950 text-sm sm:text-base mb-2 flex gap-2">
                  <span className="text-blue-600 select-none">Q:</span>{faq.q}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed pl-5 border-l border-slate-100">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* --- FINAL CONVERSION FOOTER BANNER --- */}
        <section className="bg-gradient-to-br from-blue-700 to-blue-900 text-white py-16 sm:py-20 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(255,189,89,0.08),transparent_60%)]" />
          <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10">
            <h2 className="text-2xl sm:text-4xl font-black mb-4 tracking-tight">Ready to Drive Scalable Revenue?</h2>
            <p className="text-blue-100 mb-8 max-w-xl mx-auto text-xs sm:text-sm md:text-base leading-relaxed">
              Establish a risk-mitigated, highly optimized advertising channel backed by real-time optimization models, advanced custom data layering, and clear attribution systems.
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