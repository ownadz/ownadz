"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  FaRegCalendarAlt, 
  FaUser, 
  FaFolder, 
  FaCheck, 
  FaExclamationTriangle, 
  FaLightbulb,
  FaArrowRight,
  FaQuestionCircle,
  FaFacebookF, 
  FaLinkedinIn, 
  FaChevronDown, 
  FaChevronUp, 
  FaList, 
  FaPlus, 
  FaTimes,
  FaShareAlt,
  FaCheckSquare
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import blogHeroImg from "@/assets/seo-services-blog-img.jpeg";


export default function BlogDetailClient({ faqSchema }) {
  // Category Collapsible State
  const [isCategoryOpen, setIsCategoryOpen] = useState(true);

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const tocItems = [
    { id: "what-is-digital-marketing", label: "What Are Digital Marketing Services?" },
    { id: "10-signs-checklist", label: "10 Warning Signs Your Business Needs Digital Marketing" },
    { id: "transform-your-business", label: "How Digital Marketing Services Transform Your Business" },
    { id: "in-house-vs-agency", label: "In-House Marketing vs. Professional Agency" },
    { id: "why-choose-ownadz", label: "Why Businesses Choose Ownadz Digital Agency" },
    { id: "conclusion", label: "Conclusion & Final Thoughts" },
    { id: "faqs", label: "Frequently Asked Questions" },
  ];

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
    <div className="ownadz-blog-container bg-white text-slate-800 font-sans antialiased selection:bg-[#ffbd59] selection:text-black pb-20">
      
      {/* HEADER CONTENT WRAPPER */}
      <header className="ownadz-[#ffffff] text-slate-900 pt-4 border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb Navigation */}
          <nav className="ownadz-breadcrumbs text-xs sm:text-sm text-slate-500 flex flex-wrap items-center gap-2 mb-6">
            <Link href="/" className="hover:text-black transition-colors">Home</Link>
            <span className="text-slate-300">/</span>
            <Link href="/blog" className="hover:text-black transition-colors">Blog</Link>
            <span className="text-slate-300">/</span>
            <span className="text-slate-900 ">SEO & Services</span>
            <span className="text-slate-300">/</span>
            <span className="text-slate-900 font-semibold">10 Signs Your Business Needs Digital Marketing Services</span>
          </nav>

          

        </div>
      </header>

      {/* MAIN LAYOUT CONTAINER */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* LEFT COLUMN: ARTICLE CONTENT */}
          <main className="lg:col-span-8 flex flex-col gap-8">
            <div className="max-w-4xl space-y-4">
            <span className="ownadz-category-tag inline-block bg-[#ffbd59]/20 text-slate-950 font-extrabold text-xs uppercase tracking-wider px-3.5 py-1 rounded-md border border-[#ffbd59]/40">
              Strategy Guide
            </span>

            <h1 className="ownadz-main-title text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-tight">
              10 Signs Your Business Needs Digital Marketing Services
            </h1>

            {/* Meta Attributes Panel */}
            <div className="ownadz-meta-bar flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-100 text-xs sm:text-sm text-slate-600">
              <div className="flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-2">
                  <FaUser className="text-[#ffbd59]" size={14} />
                  <span className="font-semibold text-slate-900">Ownadz Digital Agency</span>
                </div>

                <div className="flex items-center gap-2">
                  <FaRegCalendarAlt className="text-[#ffbd59]" size={14} />
                  <time dateTime="2026-07-23" className="font-medium text-slate-700">July 23, 2026</time>
                </div>
              </div>

              {/* Social Share Bar */}
              <div className="flex items-center gap-2">
                <span className="text-xs text-slate-400 font-semibold mr-1 flex items-center gap-1">
                  <FaShareAlt size={10} /> Share
                </span>
                <button aria-label="Share on Facebook" className="w-7 h-7 rounded-full bg-slate-100 hover:bg-[#1877f2] hover:text-white text-slate-600 flex items-center justify-center transition-colors">
                  <FaFacebookF size={11} />
                </button>
                <button aria-label="Share on X" className="w-7 h-7 rounded-full bg-slate-100 hover:bg-black hover:text-white text-slate-600 flex items-center justify-center transition-colors">
                  <FaXTwitter size={11} />
                </button>
                <a href="https://www.linkedin.com/company/ownadz" target="_blank" rel="noopener noreferrer" aria-label="Share on LinkedIn" className="w-7 h-7 rounded-full bg-slate-100 hover:bg-[#0a66c2] hover:text-white text-slate-600 flex items-center justify-center transition-colors">
                  <FaLinkedinIn size={11} />
                </a>
              </div>
            </div>

          </div>
            {/* FEATURED BANNER IMAGE */}
            <div className="ownadz-hero-image rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-slate-50">
              <img
                src={blogHeroImg.src}
                alt="10 Signs Your Business Needs Digital Marketing Services"
                title="10 Signs Your Business Needs Digital Marketing Services"
                className="w-full h-auto max-h-[520px] object-cover"
                loading="eager"
              />
            </div>

            {/* TABLE OF CONTENTS */}
            <nav className="ownadz-toc bg-slate-50 rounded-2xl p-6 border border-slate-200/80">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-200">
                <div className="flex items-center gap-2.5">
                  <FaList className="text-slate-700" size={15} />
                  <h3 className="text-lg font-bold text-slate-950">Table of Contents</h3>
                </div>
              </div>
              <ul className="grid sm:grid-cols-2 gap-2 text-xs sm:text-sm font-medium">
                {tocItems.map((item, idx) => (
                  <li key={idx}>
                    <a href={`#${item.id}`} className="text-slate-700 hover:text-[#0284c7] transition-colors flex items-center gap-2">
                      <span className="text-[#ffbd59] font-bold">•</span>
                      <span className="truncate">{item.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* SECTION 1: INTRO CONTENT */}
            <section className="ownadz-article-section space-y-4 text-slate-700 text-base sm:text-lg leading-relaxed">
              <p>
                The highly competitive web environment demands much more than building a website for business today. Consumers who purchase goods on the web first do some research about various firms, compare their products, and have some communication with different firms before buying anything. <strong>Not having Digital Marketing Services can be a drawback for your firm online.</strong>
              </p>
              <p>
                Many entrepreneurs become aware of the importance of Digital Marketing Services once they start experiencing low website traffic, falling sales, or seeing their competitors dominating online searches. A proper digital marketing strategy will benefit a business in increasing its presence and growing sustainably.
              </p>
              <p className="p-4 rounded-xl bg-amber-500/10 border-l-4 border-[#ffbd59] text-slate-900 font-medium text-base">
                For both startups, small businesses, and even big enterprises, utilizing Digital Marketing Services would be beneficial to grow their brand awareness, lead generation, and customer interactions.
              </p>
            </section>

            {/* SECTION 2: WHAT ARE DIGITAL MARKETING SERVICES */}
            <section id="what-is-digital-marketing" className="ownadz-article-section space-y-4 pt-4 border-t border-slate-100">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
                What Are Digital Marketing Services?
              </h2>
              <p className="text-slate-700 leading-relaxed text-base sm:text-lg">
                Digital Marketing Services refer to professional services offered by companies to market their products or services digitally through modern online channels rather than traditional advertisements.
              </p>

              {/* Clean List Grid */}
              <div className="grid sm:grid-cols-2 gap-3 pt-2">
                {[
                  { title: "SEO Services", desc: "Improve your organic search engine rankings and attract searchers." },
                  { title: "Social Media Marketing", desc: "Connect with hyper-targeted audiences on Facebook, Instagram, LinkedIn & X." },
                  { title: "PPC Advertising", desc: "Generate immediate, high-intent traffic through paid search ads." },
                  { title: "Content Marketing", desc: "Educate buyers, solve problems, and build strong brand authority." },
                  { title: "Lead Generation & Analytics", desc: "Convert web visitors into real revenue with tracking & optimization." },
                ].map((service, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                    <div className="font-bold text-slate-950 text-sm sm:text-base mb-1 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#ffbd59]" />
                      {service.title}
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-4">
                      {service.desc}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* SECTION 3: 10 WARNING SIGNS */}
            <section id="10-signs-checklist" className="ownadz-article-section space-y-6 pt-4 border-t border-slate-100">
              <div className="flex items-center gap-3">
                <FaExclamationTriangle className="text-[#ffbd59] text-2xl shrink-0" />
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
                  10 Warning Signs Your Business Needs Help
                </h2>
              </div>

              {/* 10 Signs List */}
              <div className="space-y-6">
                {signsList.map((sign, index) => (
                  <div 
                    key={index}
                    className="ownadz-sign-item p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-black text-black bg-[#ffbd59] px-2.5 py-1 rounded-md">
                        {sign.num}
                      </span>
                      <h3 className="text-lg sm:text-xl font-bold text-slate-950">
                        {sign.title}
                      </h3>
                    </div>

                    <div className="space-y-2 text-slate-700 text-sm sm:text-base leading-relaxed pl-1">
                      {sign.desc.map((p, pIdx) => (
                        <p key={pIdx}>{p}</p>
                      ))}

                      {sign.reasons && (
                        <div className="my-3 p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm">
                          <span className="font-bold text-slate-900 block mb-2">Primary Contributing Factors:</span>
                          <ul className="grid sm:grid-cols-2 gap-1.5 list-disc pl-4 text-slate-700">
                            {sign.reasons.map((r, rIdx) => (
                              <li key={rIdx}>{r}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {sign.checklist && (
                        <div className="grid sm:grid-cols-2 gap-2 my-3">
                          {sign.checklist.map((item, cIdx) => (
                            <div key={cIdx} className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-900 font-medium">
                              <FaCheck className="text-emerald-600 shrink-0" size={12} />
                              {item}
                            </div>
                          ))}
                        </div>
                      )}

                      {sign.conclusion && (
                        <p className="font-medium text-slate-900 pt-2 border-t border-slate-100">
                          {sign.conclusion}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* SECTION 4: TRANSFORMATION & BENEFITS */}
            <section id="transform-your-business" className="ownadz-article-section space-y-4 pt-4 border-t border-slate-100">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
                How Digital Marketing Services Transform Your Business
              </h2>
              <p className="text-slate-700 leading-relaxed text-base sm:text-lg">
                Selecting the appropriate services yields a profound, measurable impact on your ability to attract, engage, and convert high-intent customers over the long term.
              </p>

              <div className="grid sm:grid-cols-2 gap-3 pt-2">
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
                  <div key={bIdx} className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-800">
                    <FaCheckSquare className="text-emerald-600 shrink-0" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* SECTION 5: IN-HOUSE VS AGENCY COMPARISON TABLE */}
            <section id="in-house-vs-agency" className="ownadz-article-section space-y-4 pt-4 border-t border-slate-100">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
                In-House Marketing vs. Professional Agency
              </h2>

              <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm mt-4">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-100 text-slate-950">
                      <th className="p-3.5 font-bold border-b border-slate-200">Feature</th>
                      <th className="p-3.5 font-bold border-b border-slate-200">In-House Team</th>
                      <th className="p-3.5 font-bold border-b border-slate-200 text-[#0284c7]">Digital Marketing Agency</th>
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
                      <tr key={rIdx} className="hover:bg-slate-50/80 transition-colors">
                        <td className="p-3.5 font-bold text-slate-900 bg-slate-50/50">{row.f}</td>
                        <td className="p-3.5 text-slate-600">{row.in}</td>
                        <td className="p-3.5 font-semibold text-slate-900 bg-amber-500/5">{row.ag}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 6: WHY CHOOSE OWNADZ CTA CARD */}
            <section id="why-choose-ownadz" className="ownadz-cta bg-slate-900 text-white rounded-2xl p-8 sm:p-10 relative overflow-hidden space-y-4">
              <span className="text-[#ffbd59] font-bold text-xs uppercase tracking-widest bg-white/10 px-3 py-1 rounded-md inline-block">
                Your Growth Partner
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                Why Businesses Choose Ownadz Digital Agency
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
                Ownadz does not offer generic template solutions. Instead, we design customized, performance-driven marketing campaigns tailored directly to your specific business ecosystem and growth milestones.
              </p>

              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center bg-[#ffbd59] hover:bg-white text-black font-extrabold text-xs sm:text-sm tracking-wider uppercase px-6 py-3.5 rounded-xl transition-all gap-2"
                >
                  Get Custom Solution <FaArrowRight />
                </Link>
              </div>
            </section>

            {/* SECTION 7: CONCLUSION */}
            <section id="conclusion" className="ownadz-article-section space-y-3 pt-4 border-t border-slate-100">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
                Conclusion & Final Thoughts
              </h2>
              <p className="text-slate-700 leading-relaxed text-base sm:text-lg">
                Not heeding the warning signs mentioned above will certainly put a cap on your business’s competitive edge in the current market environment. Low web traffic, low lead generation, poor search ranking, lack of engagement on social media platforms, poor results from your advertising efforts, and lack of growth all point to the need to look for an alternative marketing strategy.
              </p>
            </section>

            {/* SECTION 8: FREQUENTLY ASKED QUESTIONS */}
            <section id="faqs" className="ownadz-article-section space-y-4 pt-4 border-t border-slate-100">
              <div className="flex items-center gap-2.5">
                <FaQuestionCircle className="text-[#ffbd59] text-xl shrink-0" />
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
                  Frequently Asked Questions (FAQs)
                </h2>
              </div>

              <div className="space-y-3 pt-2">
                {faqSchema?.mainEntity?.length > 0 ? faqSchema.mainEntity.map((faq, fIdx) => {
                  const isOpen = openFaq === fIdx;
                  return (
                    <div key={fIdx} className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden transition-all">
                      <button
                        type="button"
                        onClick={() => toggleFaq(fIdx)}
                        className="w-full text-left p-4 font-bold text-slate-950 text-sm sm:text-base flex items-center justify-between gap-4 hover:bg-slate-100/60 transition-colors"
                      >
                        <span>{faq.name}</span>
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${isOpen ? 'bg-[#ffbd59] text-black' : 'bg-slate-200 text-slate-600'}`}>
                          {isOpen ? <FaTimes size={10} /> : <FaPlus size={10} />}
                        </div>
                      </button>
                      {isOpen && (
                        <div className="px-4 pb-4 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200/60 bg-white">
                          {faq.acceptedAnswer.text}
                        </div>
                      )}
                    </div>
                  );
                }) : null}
              </div>
            </section>

            {/* AUTHOR BIO CARD */}
            <div className="ownadz-author-bio p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center sm:items-start gap-5">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=250&auto=format&fit=crop"
                alt="Sarvesh Bagla"
                className="w-20 h-20 rounded-full object-cover border-2 border-[#ffbd59] shrink-0"
              />
              <div className="space-y-1.5 text-center sm:text-left">
                <h3 className="text-base font-extrabold text-slate-950">Sarvesh Bagla</h3>
                <p className="text-xs font-bold text-[#0284c7]">Founder and CEO - Ownadz</p>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Sarvesh Bagla is an enterprise SEO expert and industry leader who has driven transformational digital growth for top global brands.
                </p>
                <div className="pt-1">
                  <a href="https://www.linkedin.com/company/ownadz" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0a66c2] hover:underline">
                    <FaLinkedinIn size={12} /> LinkedIn Profile
                  </a>
                </div>
              </div>
            </div>

          </main>

          {/* RIGHT SIDEBAR CONTAINER */}
          <aside className="lg:col-span-4 space-y-6  lg:top-6">
            
         

            {/* 2. REQUEST A CALL BACK FORM */}
            <div className="ownadz-sidebar-box bg-slate-50 rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
              <h3 className="text-lg font-extrabold text-slate-950">Request a Call back Now</h3>
              
              <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <input
                    type="text"
                    placeholder="Name *"
                    required
                    className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#0284c7] transition"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    placeholder="Email Id *"
                    required
                    className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#0284c7] transition"
                  />
                </div>

                <div>
                  <input
                    type="tel"
                    placeholder="Mobile No*"
                    required
                    className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#0284c7] transition"
                  />
                </div>

                <div>
                  <select className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm text-slate-600 focus:outline-none focus:border-[#0284c7] transition appearance-none cursor-pointer">
                    <option value="">Choose Services</option>
                    <option value="seo">SEO Services</option>
                    <option value="ppc">PPC Advertising</option>
                    <option value="social">Social Media Marketing</option>
                    <option value="content">Content Marketing</option>
                  </select>
                </div>

                <div>
                  <textarea
                    rows={3}
                    placeholder="Type Your Message"
                    className="w-full bg-white border border-slate-200 rounded-xl p-3.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#0284c7] transition resize-none"
                  />
                </div>

                <div className="flex items-start gap-2 pt-0.5">
                  <input type="checkbox" id="terms" required className="mt-1 rounded border-slate-300 text-[#0284c7]" />
                  <label htmlFor="terms" className="text-[11px] text-slate-600 leading-tight">
                    By registering here, I agree to Terms of Service and Privacy Policy.
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#ffbd59] hover:bg-slate-950 text-black hover:text-[#ffbd59] font-extrabold text-xs uppercase tracking-wider py-3 rounded-xl transition-all shadow-sm flex items-center justify-center gap-2 border border-[#ffbd59] hover:border-slate-950"
                >
                  Submit Now <FaArrowRight size={10} />
                </button>
              </form>
            </div>

            {/* 3. LATEST BLOG SIDEBAR */}
            <div className="ownadz-sidebar-box space-y-3">
              <div className="bg-slate-900 text-[#ffbd59] text-center py-3 px-4 rounded-xl shadow-sm">
                <h3 className="text-base font-extrabold uppercase tracking-wider">
                  Our Latest Blog
                </h3>
              </div>

              <div className="bg-white border border-slate-200 rounded-2xl p-4 space-y-4 shadow-sm">
                <Link href="/blog/why-every-business-needs-a-website" className="group block">
                  <div className="rounded-xl overflow-hidden mb-2.5 border border-slate-200 bg-slate-50">
                    <img
                      src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop"
                      alt="Why Every Business Needs a Conversion-Optimized Website in 2026"
                      title="Why Every Business Needs a Conversion-Optimized Website"
                      className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-[#0284c7] transition-colors leading-snug">
                    Why Every Business Needs a Conversion-Optimized Website in 2026
                  </h4>
                </Link>
              </div>
            </div>

          </aside>

        </div>
      </div>
    </div>
  );
}