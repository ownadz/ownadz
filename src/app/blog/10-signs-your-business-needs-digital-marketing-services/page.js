import Link from "next/link";
import { 
  FaRegCalendarAlt, 
  FaUser, 
  FaFolder, 
  FaCheck, 
  FaExclamationTriangle, 
  FaRocket, 
  FaLightbulb,
  FaArrowRight,
  FaQuestionCircle
} from "react-icons/fa";
import ConsultationModalWrapper from "./ConsultationModalWrapper";

// NEXT.JS METADATA CONFIGURATION (SEO META TAGS)
export async function generateMetadata() {
  return {
    title: "10 Signs Your Business Needs Digital Marketing Services | OwnAdz",
    description: "Discover 10 critical warning signs that indicate your business needs professional Digital Marketing Services to increase website traffic, lead generation, and overall revenue.",
    keywords: "Digital Marketing Services, SEO Services, Lead Generation Services, PPC Advertising, Social Media Marketing, OwnAdz Digital Agency",
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: "https://www.ownadz.com/blog/10-signs-your-business-needs-digital-marketing-services",
    },
    openGraph: {
      title: "10 Signs Your Business Needs Digital Marketing Services | OwnAdz",
      description: "Discover 10 critical warning signs that indicate your business needs professional Digital Marketing Services to increase website traffic, lead generation, and overall revenue.",
      url: "https://www.ownadz.com/blog/10-signs-your-business-needs-digital-marketing-services",
      siteName: "OwnAdz Digital Agency",
      images: [
        {
          url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1415&auto=format&fit=crop",
          width: 1200,
          height: 630,
          alt: "10 Signs Your Business Needs Digital Marketing Services",
        },
      ],
      locale: "en_US",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: "10 Signs Your Business Needs Digital Marketing Services | OwnAdz",
      description: "Discover 10 critical warning signs that indicate your business needs professional Digital Marketing Services to increase website traffic, lead generation, and overall revenue.",
      images: ["https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1415&auto=format&fit=crop"],
    },
  };
}

export default function BlogDetailPage() {
  // 1. FAQ SCHEMA (JSON-LD)
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What are digital marketing services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Digital Marketing Services include SEO, PPC advertising, social media marketing, content marketing, email marketing, website optimization, and lead generation strategies that help businesses grow online."
        }
      },
      {
        "@type": "Question",
        "name": "How do I know if my business needs digital marketing services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "If your website receives low traffic, generates few leads, ranks poorly on Google, has weak social media engagement, or your sales have stalled, it's time to invest in professional Digital Marketing Services."
        }
      },
      {
        "@type": "Question",
        "name": "Which digital marketing service delivers the fastest results?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "PPC advertising delivers the fastest results by driving immediate traffic, while SEO and content marketing provide sustainable long-term growth."
        }
      },
      {
        "@type": "Question",
        "name": "Is SEO better than paid advertising?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "SEO builds long-term organic visibility, while paid advertising generates instant traffic. Combining both strategies usually delivers the best business results."
        }
      },
      {
        "@type": "Question",
        "name": "How long does digital marketing take to show results?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "PPC campaigns can produce results within days, while SEO and content marketing generally take three to six months to achieve sustainable growth."
        }
      }
    ]
  };

  // 2. BLOGPOSTING ARTICLE SCHEMA (JSON-LD)
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "10 Signs Your Business Needs Digital Marketing Services",
    "description": "Discover 10 critical warning signs that indicate your business needs professional Digital Marketing Services to increase website traffic, lead generation, and overall revenue.",
    "image": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1415&auto=format&fit=crop",
    "datePublished": "2026-07-23",
    "dateModified": "2026-07-23",
    "author": {
      "@type": "Organization",
      "name": "Ownadz Digital Agency",
      "url": "https://www.ownadz.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Ownadz Digital Agency",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.ownadz.com/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.ownadz.com/blog/10-signs-your-business-needs-digital-marketing-services"
    }
  };

  const signsList = [
    {
      num: "01",
      title: "Your Website Gets Very Little Traffic",
      tagline: "Red Flag #1: Low Visibility",
      desc: [
        "One of the major red flags is when you have an extremely low number of website visitors despite the presence of great products/services on your site. No matter how good your website looks, it will not make any sense if people cannot access it.",
        "The poor visibility of the website is mainly caused by the lack of SEO Services. With the absence of proper optimization, great content, and improvement of the website, search engines will have difficulty in ranking your website pages.",
        "With the reduced website traffic, it becomes hard for people to become aware of the presence of your business. The use of Digital Marketing Services increases your website's visibility."
      ]
    },
    {
      num: "02",
      title: "You're Not Generating Enough Qualified Leads",
      tagline: "Red Flag #2: Low Conversions",
      desc: [
        "Website hits in themselves will never help you grow your business. The thing you require is high-quality leads who will then convert into buyers.",
        "If you have experienced a drop in inquiries or your sales team has difficulty in finding any quality leads, then it may be possible that your marketing approach lacks any effective Lead Generation Services.",
        "Experienced marketers know how to create landing pages, campaigns, and calls to actions that attract interested people to your business using their optimization skills.",
        "Digital Marketing Services can help businesses increase their conversions, reduce marketing costs, and provide a continuous supply of quality leads."
      ]
    },
    {
      num: "03",
      title: "Your Competitors Rank Higher on Google",
      tagline: "Red Flag #3: Losing Organic Market Share",
      desc: [
        "Do you often see your competitors at the top positions in the Google search engines' results page?",
        "Good ranking means good SEO Services, optimized websites, and quality content. If your competitors always rank first in Google search engines, then it means they have won over customers before they even knew about your business.",
        "A reputable Digital Marketing Agency does competitor analysis, finds keywords, and executes technical SEO, among other methods used to improve ranking in organic searches.",
        "With the best Digital Marketing Services, you can beat those ranking positions and win over customers who are searching for your business."
      ]
    },
    {
      num: "04",
      title: "Your Social Media Engagement Is Low",
      tagline: "Red Flag #4: Ghost Town Channels",
      desc: [
        "Occasional social media posting will not result in having an audience.",
        "If you notice that your posts get minimal likes, comments, shares, or even inquiries, there is an issue with your content or lack of a well-targeted audience.",
        "Social Media Marketing Strategy involves developing quality content, sticking to a posting schedule, interacting with your audience, and launching a campaign that promotes engagement.",
        "Professional marketers have an idea of how platform algorithms work and how to behave in order to attract a target audience. This is one of the Online Marketing Services we provide."
      ]
    },
    {
      num: "05",
      title: "Your Paid Ads Aren't Delivering Results",
      tagline: "Red Flag #5: Wasted Ad Spend",
      desc: [
        "Companies may have paid advertisements but not get any profits from them due to non-optimization of the campaign."
      ],
      reasons: [
        "Negative audience targeting",
        "Bad ad copy",
        "Bad quality of landing pages",
        "High cost per click",
        "Low conversion rate"
      ],
      conclusion: "Professional PPC Advertising involves constant analysis, keyword optimization, A/B testing and budget control. Professional teams guarantee the most efficient use of every dollar on the advertisement campaign."
    },
    {
      num: "06",
      title: "Your Website Isn't Converting Visitors into Customers",
      tagline: "Red Flag #6: High Bounce & Abandonment",
      desc: [
        "However, getting website traffic is just the beginning of the problem. If you don't get a sale, a visitor does not complete a contact form, or ask for a quote, you will face website conversion problems."
      ],
      reasons: [
        "Slow loading pages",
        "Low mobile optimization",
        "Difficult website navigation",
        "Badly written CTAs (calls-to-action)",
        "Difficult to fill out contact forms"
      ],
      conclusion: "A professional website needs to lead people to take actions smoothly. By using Digital Marketing Services, you can optimize the user experience, enhance landing pages, perform A/B testing and make impressive CTAs that help to increase conversions."
    },
    {
      num: "07",
      title: "You Don't Have a Content Marketing Strategy",
      tagline: "Red Flag #7: Lack of Authority & Trust",
      desc: [
        "In case your company does not produce blog entries, guides, videos, or tutorials on a regular basis, then you are definitely neglecting one of the best methods for building trust among customers.",
        "Modern customers value the brands that inform their audience instead of selling all the time. Good Content Marketing can help address customers' queries, display knowledge, and boost SEO.",
        "Posting blogs is also an important element of SEO Services as it will enhance keyword relevance and generate organic traffic."
      ]
    },
    {
      num: "08",
      title: "Your Brand Isn't Visible Online",
      tagline: "Red Flag #8: Weak Digital Footprint",
      desc: [
        "Is your business easy to find online? If your website is not showing up on Google search results, your social media pages are having a limited reach, or there are very limited mentions of your business online, chances are that your online presence is weak.",
        "By hiring a reputable Digital Marketing Agency, you can increase your online visibility by leveraging:"
      ],
      checklist: [
        "SEO Optimization",
        "Local Search SEO",
        "Social Media Campaigns",
        "Reputation Management",
        "Business Listings",
        "Content Marketing"
      ]
    },
    {
      num: "09",
      title: "You're Not Using Data to Make Marketing Decisions",
      tagline: "Red Flag #9: Blind Guesswork",
      desc: [
        "Marketing cannot be about assumptions; it has to be all about data. If you are not measuring your website traffic, conversion rates, campaigns' performances, customer behavior, or advertising ROIs, then you are basing your decisions on blind guesswork.",
        "Analytics is an indispensable part of any Modern Digital Marketing Services. Those who use marketing data analysis can better target their customers, convert more prospects, lower advertising costs, optimize marketing budgets, and monitor campaign performance seamlessly."
      ]
    },
    {
      num: "10",
      title: "Your Business Growth Has Stagnated",
      tagline: "Red Flag #10: Plateaued Revenue",
      desc: [
        "Every business goes through a slow phase at some point, but if your sales, leads, and customer acquisitions have been stagnated for several months now, then there is a need for you to upgrade your marketing strategy.",
        "Professional Online Marketing Services assist businesses to recognize their areas of growth using SEO, paid advertisements, content creation, social media management, and conversion optimization to help you achieve long-term Online Business Growth."
      ]
    }
  ];

  return (
    <>
      {/* INJECT STRUCTURED SCHEMA MARKUP FOR CRAWLERS */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <div className="bg-white text-slate-900 font-sans antialiased selection:bg-[#ffbd59] selection:text-black">
        
        {/* HERO SECTION BANNER */}
        <section className="relative overflow-hidden bg-[#121212] py-14 sm:py-20 lg:py-24 text-white">
          {/* Glow Effects */}
          <div className="absolute -left-10 -top-10 h-80 w-80 rounded-full bg-[#ffbd59]/15 blur-3xl animate-pulse z-0" />
          <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-[#ffbd59]/10 blur-3xl z-0" />

          {/* Background Overlay */}
          <div className="absolute inset-0 opacity-20 bg-cover bg-center mix-blend-overlay pointer-events-none z-0 bg-[url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1415&auto=format&fit=crop')]" />

          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              {/* Tag Category */}
              <span className="text-[#ffbd59] bg-[#ffbd59]/10 border border-[#ffbd59]/30 px-4 py-1.5 inline-block rounded-full text-xs sm:text-sm font-bold uppercase tracking-widest mb-6">
                Digital Marketing Strategy
              </span>

              {/* Main Title */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight sm:leading-[1.12]">
                10 Signs Your Business Needs <span className="text-[#ffbd59]">Digital Marketing</span> Services
              </h1>

              {/* Meta Items Row */}
              <div className="mt-8 flex flex-wrap items-center gap-4 sm:gap-8 text-xs sm:text-sm text-slate-300 pt-6 border-t border-white/10">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-white/5 border border-white/10 text-[#ffbd59]">
                    <FaUser aria-hidden="true" />
                  </div>
                  <div>
                    <span className="block text-[10px] text-slate-400 uppercase tracking-wider font-semibold">Author</span>
                    <span className="font-semibold text-white">Ownadz Digital Agency</span>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-white/5 border border-white/10 text-[#ffbd59]">
                    <FaRegCalendarAlt aria-hidden="true" />
                  </div>
                  <div>
                    <span className="block text-[10px] text-slate-400 uppercase tracking-wider font-semibold">Published</span>
                    <time dateTime="2026-07-23" className="font-semibold text-white">July 23, 2026</time>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-white/5 border border-white/10 text-[#ffbd59]">
                    <FaFolder aria-hidden="true" />
                  </div>
                  <div>
                    <span className="block text-[10px] text-slate-400 uppercase tracking-wider font-semibold">Category</span>
                    <span className="font-semibold text-white">Services & Strategy</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MAIN LAYOUT CONTAINER */}
        <div className="py-12 lg:py-20 bg-slate-50/50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              
              {/* LEFT COLUMN: MAIN ARTICLE DETAILED CONTENT */}
              <main className="lg:col-span-8 flex flex-col gap-10">
                
                {/* Featured Banner Block with Glass Badge */}
                <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-xl bg-slate-900 group">
                  <img
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1415&auto=format&fit=crop"
                    alt="10 Signs Your Business Needs Digital Marketing Services Growth Strategy Dashboard"
                    title="10 Signs Your Business Needs Digital Marketing Services"
                    className="w-full h-auto max-h-[440px] object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 p-4 sm:p-6 rounded-2xl bg-slate-950/80 backdrop-blur-md border border-white/10 text-white">
                    <div className="flex items-center gap-3 text-[#ffbd59] font-bold text-xs sm:text-sm mb-1 uppercase tracking-wider">
                      <FaLightbulb aria-hidden="true" /> Key Insight
                    </div>
                    <p className="text-xs sm:text-sm text-slate-200 font-medium">
                      Without a structured digital marketing presence, your website operates like an unadvertised store in a hidden alley.
                    </p>
                  </div>
                </div>

                {/* SECTION: INTRO CONTENT CARD */}
                <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-sm relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#ffbd59]/10 rounded-bl-full pointer-events-none" />
                  
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight mb-6 flex items-center gap-3">
                    <span className="p-2 rounded-xl bg-black text-[#ffbd59] text-base"><FaRocket aria-hidden="true" /></span>
                    Why Modern Businesses Require Digital Marketing
                  </h2>

                  <div className="space-y-4 text-slate-700 text-base sm:text-lg leading-relaxed">
                    <p>
                      The highly competitive web environment demands much more than building a website for business today. Consumers who purchase goods on the web first do some research about various firms, compare their products, and have some communication with different firms before buying anything. <strong className="text-slate-900">Not having Digital Marketing Services can be a drawback for your firm online.</strong>
                    </p>
                    <p>
                      Many entrepreneurs become aware of the importance of Digital Marketing Services once they start experiencing low website traffic, falling sales, or seeing their competitors dominating online searches. A proper digital marketing strategy will benefit a business in increasing its presence and growing sustainably.
                    </p>
                    <p className="p-4 rounded-2xl bg-amber-500/10 border-l-4 border-[#ffbd59] text-slate-900 font-medium text-base">
                      For both startups, small businesses, and even big enterprises, utilizing Digital Marketing Services would be beneficial to grow their brand awareness, lead generation, and customer interactions.
                    </p>
                  </div>
                </section>

                {/* SECTION: WHAT ARE DIGITAL MARKETING SERVICES */}
                <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-sm">
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight mb-4">
                    What Are Digital Marketing Services?
                  </h2>
                  <p className="text-slate-600 text-base sm:text-lg mb-8 leading-relaxed">
                    Digital Marketing Services refer to professional services offered by companies to market their products or services digitally through modern online channels rather than traditional advertisements.
                  </p>

                  {/* Core Services Grid */}
                  <div className="grid sm:grid-cols-2 gap-4 mb-8">
                    {[
                      { title: "SEO Services", desc: "Improve your organic search engine rankings and attract searchers." },
                      { title: "Social Media Marketing", desc: "Connect with hyper-targeted audiences on Facebook, Instagram, LinkedIn & X." },
                      { title: "PPC Advertising", desc: "Generate immediate, high-intent traffic through paid search ads." },
                      { title: "Content Marketing", desc: "Educate buyers, solve problems, and build strong brand authority." },
                      { title: "Lead Generation & Analytics", desc: "Convert web visitors into real revenue with tracking & optimization." },
                    ].map((service, idx) => (
                      <div key={idx} className="p-5 rounded-2xl bg-slate-50 border border-slate-200/60 hover:border-[#ffbd59] transition-all group">
                        <div className="flex items-center gap-3 font-bold text-slate-900 text-base mb-2">
                          <span className="h-2 w-2 rounded-full bg-[#ffbd59] group-hover:scale-150 transition-transform" />
                          {service.title}
                        </div>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-5">
                          {service.desc}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="bg-[#121212] text-white p-6 rounded-2xl border border-white/10 flex flex-col sm:flex-row items-center gap-6">
                    <div className="p-4 rounded-2xl bg-[#ffbd59] text-black shrink-0 text-2xl font-black">
                      ROI
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-white mb-1">Maximized Marketing Return</h3>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        Through professional digital marketing agencies, businesses get access to the right knowledge, tools, and strategies that yield predictable and high returns on investment.
                      </p>
                    </div>
                  </div>
                </section>

                {/* SECTION: 10 WARNING SIGNS */}
                <section className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-2xl bg-[#121212] text-[#ffbd59] text-xl">
                      <FaExclamationTriangle aria-hidden="true" />
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-widest text-[#ffbd59] block">Diagnosis Checklist</span>
                      <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
                        10 Warning Signs Your Business Needs Help
                      </h2>
                    </div>
                  </div>

                  {/* Card Iteration Loop */}
                  <div className="space-y-6">
                    {signsList.map((sign, index) => (
                      <div 
                        key={index}
                        className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm hover:shadow-md transition-all relative overflow-hidden group"
                      >
                        {/* Top Bar Accent */}
                        <div className="absolute top-0 left-0 right-0 h-1.5 bg-slate-100 group-hover:bg-[#ffbd59] transition-colors" />

                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-100">
                          <div className="flex items-center gap-4">
                            <span className="text-3xl sm:text-4xl font-black text-[#ffbd59] bg-[#ffbd59]/10 h-12 w-12 sm:h-14 sm:w-14 rounded-2xl flex items-center justify-center shrink-0">
                              {sign.num}
                            </span>
                            <div>
                              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-0.5">
                                {sign.tagline}
                              </span>
                              <h3 className="text-xl sm:text-2xl font-black text-slate-900 leading-snug">
                                {sign.title}
                              </h3>
                            </div>
                          </div>
                        </div>

                        {/* Content Paragraphs */}
                        <div className="space-y-3 text-slate-700 text-base leading-relaxed">
                          {sign.desc.map((p, pIdx) => (
                            <p key={pIdx}>{p}</p>
                          ))}

                          {/* List Highlight Box */}
                          {sign.reasons && (
                            <div className="my-4 p-5 rounded-2xl bg-amber-500/10 border border-amber-500/20">
                              <span className="font-bold text-slate-900 text-sm block mb-3">Primary Contributing Factors:</span>
                              <div className="grid sm:grid-cols-2 gap-2">
                                {sign.reasons.map((r, rIdx) => (
                                  <div key={rIdx} className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-800">
                                    <span className="h-1.5 w-1.5 rounded-full bg-[#ffbd59]" />
                                    {r}
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Checklist Box */}
                          {sign.checklist && (
                            <div className="grid sm:grid-cols-2 gap-3 my-4">
                              {sign.checklist.map((item, cIdx) => (
                                <div key={cIdx} className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/60 font-semibold text-xs sm:text-sm text-slate-900">
                                  <FaCheck className="text-[#ffbd59] shrink-0" aria-hidden="true" />
                                  {item}
                                </div>
                              ))}
                            </div>
                          )}

                          {/* Conclusion snippet */}
                          {sign.conclusion && (
                            <p className="font-medium text-slate-900 pt-2 border-t border-slate-100 mt-3">
                              {sign.conclusion}
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* SECTION: TRANSFORMATION & BENEFITS */}
                <section className="bg-[#121212] text-white rounded-3xl p-6 sm:p-10 border border-white/10 relative overflow-hidden">
                  <div className="absolute -right-10 -bottom-10 h-64 w-64 rounded-full bg-[#ffbd59]/10 blur-3xl" />

                  <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-4">
                    How Digital Marketing Services Transform Your Business
                  </h2>
                  <p className="text-slate-300 text-base sm:text-lg mb-8 leading-relaxed">
                    Selecting the appropriate services yields a profound, measurable impact on your ability to attract, engage, and convert high-intent customers over the long term.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4">
                    {[
                      "Increased web traffic via SEO services",
                      "Higher quality leads via Lead Generation",
                      "Better search engine rankings in Google",
                      "Deeper relationships via social channels",
                      "Instant sales acceleration via PPC",
                      "More credible brand via content authority",
                      "Improved conversions via UX optimization",
                      "Measurable ROI through data analytics"
                    ].map((benefit, bIdx) => (
                      <div key={bIdx} className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-3">
                        <div className="h-7 w-7 rounded-lg bg-[#ffbd59] text-black font-black text-xs flex items-center justify-center shrink-0">
                          ✓
                        </div>
                        <span className="text-xs sm:text-sm font-semibold text-slate-200">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </section>

                {/* SECTION: IN-HOUSE VS AGENCY COMPARISON TABLE */}
                <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-sm">
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight mb-2">
                    In-House Marketing vs. Professional Agency
                  </h2>
                  <p className="text-slate-600 text-sm sm:text-base mb-6">
                    Compare the strategic advantages of partnering with a specialized agency versus building an internal department.
                  </p>

                  <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
                    <table className="w-full text-left border-collapse text-xs sm:text-sm">
                      <thead>
                        <tr className="bg-[#121212] text-[#ffbd59]">
                          <th className="p-4 font-bold border-b border-slate-800 uppercase tracking-wider">Feature</th>
                          <th className="p-4 font-bold border-b border-slate-800 uppercase tracking-wider text-slate-300">In-House Team</th>
                          <th className="p-4 font-bold border-b border-slate-800 uppercase tracking-wider text-[#ffbd59]">Digital Marketing Agency</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200 bg-white">
                        {[
                          { f: "Cost", in: "High hiring & training costs", ag: "Cost-effective monthly plans" },
                          { f: "Expertise", in: "Limited internal skill sets", ag: "Specialists across all channels" },
                          { f: "Tools", in: "Additional software expenses", ag: "Access to premium marketing tools" },
                          { f: "Scalability", in: "Difficult to expand quickly", ag: "Easily scales with business growth" },
                          { f: "Time to Results", in: "Longer learning curve", ag: "Faster campaign execution" },
                          { f: "ROI", in: "Depends on internal experience", ag: "Proven strategies with clear metrics" },
                        ].map((row, rIdx) => (
                          <tr key={rIdx} className="hover:bg-slate-50 transition-colors">
                            <td className="p-4 font-bold text-slate-900 bg-slate-50/50">{row.f}</td>
                            <td className="p-4 text-slate-600">{row.in}</td>
                            <td className="p-4 font-semibold text-slate-900 bg-[#ffbd59]/5">{row.ag}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </section>

                {/* SECTION: WHY CHOOSE OWNADZ CTA CARD */}
                <section className="bg-gradient-to-br from-[#121212] via-slate-900 to-black text-white rounded-3xl p-8 sm:p-12 border border-[#ffbd59]/30 relative overflow-hidden shadow-2xl">
                  <div className="relative z-10 space-y-6">
                    <span className="text-[#ffbd59] font-bold text-xs uppercase tracking-widest bg-[#ffbd59]/10 border border-[#ffbd59]/20 px-3.5 py-1 rounded-full inline-block">
                      Your Growth Partner
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                      Why Businesses Choose <span className="text-[#ffbd59]">Ownadz Digital Agency</span>
                    </h2>
                    <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
                      Ownadz does not offer generic template solutions. Instead, we design customized, performance-driven marketing campaigns tailored directly to your specific business ecosystem and growth milestones.
                    </p>

                    <div className="pt-4 flex flex-col sm:flex-row gap-4">
                      <Link
                        href="/contact"
                        className="inline-flex items-center justify-center bg-[#ffbd59] hover:bg-white text-black font-black text-sm tracking-wider uppercase px-8 py-4 rounded-xl shadow-lg transition-all border border-[#ffbd59] active:scale-[0.98] gap-2"
                      >
                        Get Custom Solution <FaArrowRight aria-hidden="true" />
                      </Link>
                    </div>
                  </div>
                </section>

                {/* SECTION: FREQUENTLY ASKED QUESTIONS */}
                <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-sm">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2.5 rounded-xl bg-[#ffbd59]/10 text-black font-bold text-lg">
                      <FaQuestionCircle aria-hidden="true" />
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
                      Frequently Asked Questions (FAQs)
                    </h2>
                  </div>

                  <div className="space-y-4">
                    {faqSchema.mainEntity.map((faq, fIdx) => (
                      <div key={fIdx} className="rounded-2xl border border-slate-200/80 bg-slate-50/50 p-5 hover:border-[#ffbd59]/50 transition-all">
                        <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2">
                          {faq.name}
                        </h3>
                        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                          {faq.acceptedAnswer.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>

              </main>

              {/* RIGHT COLUMN: STICKY SIDEBAR (BOOK CONSULTATION + LEAVE A COMMENT + OUR LATEST BLOG) */}
              <aside className="lg:col-span-4 space-y-8 lg:sticky lg:top-8">
                
                {/* SECTION 0: BOOK FREE CONSULTATION CTA */}
                <div className="bg-[#121212] rounded-3xl border border-[#ffbd59]/20 shadow-sm p-6 sm:p-8 text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#ffbd59]/10 mb-4">
                    <svg className="w-7 h-7 text-[#ffbd59]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                      <line x1="9" y1="10" x2="15" y2="10" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-black text-white mb-2">
                    Need Expert Guidance?
                  </h3>
                  <p className="text-sm text-slate-400 mb-6 leading-relaxed">
                    Get a free consultation call with our digital marketing experts to grow your business online.
                  </p>
                  <ConsultationModalWrapper variant="primary" className="w-full justify-center" />
                </div>

                {/* SECTION 1: LEAVE A COMMENT FORM */}
                <div className="bg-white rounded-3xl border border-slate-200/80 shadow-sm p-6 sm:p-8">
                  <h3 className="text-2xl font-black text-[#0f172a] mb-6">
                    Leave a Comment
                  </h3>

                  <form className="space-y-4">
                    <div>
                      <textarea
                        rows={4}
                        placeholder="Write your comment..."
                        aria-label="Write your comment"
                        className="w-full rounded-xl bg-[#f1f5f9]/70 border border-slate-200 p-4 text-slate-800 placeholder-slate-400 focus:bg-white focus:border-black focus:outline-none focus:ring-2 focus:ring-[#ffbd59]/30 transition-all text-sm resize-none"
                      />
                    </div>

                    <div>
                      <input
                        type="text"
                        placeholder="Name"
                        aria-label="Name"
                        className="w-full rounded-xl bg-[#f1f5f9]/70 border border-slate-200 px-4 py-3 text-slate-800 placeholder-slate-400 focus:bg-white focus:border-black focus:outline-none focus:ring-2 focus:ring-[#ffbd59]/30 transition-all text-sm"
                      />
                    </div>

                    <div>
                      <input
                        type="email"
                        placeholder="Email"
                        aria-label="Email"
                        className="w-full rounded-xl bg-[#f1f5f9]/70 border border-slate-200 px-4 py-3 text-slate-800 placeholder-slate-400 focus:bg-white focus:border-black focus:outline-none focus:ring-2 focus:ring-[#ffbd59]/30 transition-all text-sm"
                      />
                    </div>

                    <button
                      type="button"
                      className="w-full mt-2 bg-[#ffbd59] hover:bg-black text-black hover:text-[#ffbd59] font-bold text-sm tracking-wide py-3.5 px-6 rounded-xl transition-all shadow-md border border-[#ffbd59] hover:border-black active:scale-[0.98]"
                    >
                      Post Comment
                    </button>
                  </form>
                </div>

                {/* SECTION 2: OUR LATEST BLOG SIDEBAR */}
                <div className="space-y-4">
                  
                  {/* Dark Banner Header */}
                  <div className="bg-[#121212] text-[#ffbd59] text-center py-3.5 px-6 rounded-2xl shadow-sm border border-[#ffbd59]/20">
                    <h3 className="text-xl font-black tracking-wide">
                      Our Latest Blog
                    </h3>
                  </div>

                  {/* Light Sidebar Card Box Container */}
                  <div className="bg-slate-50 border border-slate-200/80 rounded-3xl p-4 sm:p-5 space-y-6">
                    
                    {/* Article Card 1 */}
                    <Link href="/blog/best-seo-agency-in-delhi" className="group block">
                      <div className="rounded-2xl overflow-hidden mb-3 border border-slate-200 shadow-sm bg-white">
                        <img
                          src="https://images.unsplash.com/photo-1571721795195-a2ca2d3370a9?q=80&w=800&auto=format&fit=crop"
                          alt="Best SEO Agency in Delhi Innovative Digital Marketing Strategy"
                          title="Best SEO Agency in Delhi"
                          className="w-full h-36 object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                      </div>
                      <h4 className="text-sm font-bold text-slate-900 group-hover:text-black transition-colors leading-snug underline decoration-slate-900/30 group-hover:decoration-[#ffbd59] underline-offset-2">
                        Best SEO Agency in Delhi — Innovative Digital Marketing
                      </h4>
                    </Link>

                    {/* Article Card 2 */}
                    <Link href="/blog/why-every-business-needs-a-website" className="group block">
                      <div className="rounded-2xl overflow-hidden mb-3 border border-slate-200 shadow-sm bg-white">
                        <img
                          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop"
                          alt="Why Every Business Needs a Conversion-Optimized Website in 2026"
                          title="Why Every Business Needs a Conversion-Optimized Website"
                          className="w-full h-36 object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                      </div>
                      <h4 className="text-sm font-bold text-slate-900 group-hover:text-black transition-colors leading-snug underline decoration-slate-900/30 group-hover:decoration-[#ffbd59] underline-offset-2">
                        Why Every Business Needs a Conversion-Optimized Website in 2026
                      </h4>
                    </Link>

                  </div>
                </div>

              </aside>

            </div>

          </div>
        </div>
      </div>
    </>
  );
}