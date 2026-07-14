import Link from "next/link";
import MetaTags from "@/components/seo/MetaTags";

export async function generateMetadata() {
  return {
    title: "Web Development Services | Custom Website Development | OwnAdz",
    description: "Build fast, secure, and SEO-friendly websites with OwnAdz Web Development Services. We create custom business websites, eCommerce stores, and scalable web applications that drive growth.",
    keywords: "web development services, website development company, custom web development, ecommerce website development, responsive web design, wordpress development, business website development, web application development, SEO friendly website, OwnAdz",
    alternates: {
      canonical: "https://www.ownadz.com/services/web-development",
    },
  };
}

// Complete Content Object built from your provided text copy
const CONTENT = {
  slug: "web-development",
  title: "Web Development Services for High-Performing Websites",
  subTitle: "Build a Website That Drives Business Growth",
  description: "The professional Web Development Services offer businesses an opportunity to develop fast, secure and interactive websites which help in attracting potential visitors and turning them into customers. At OwnadZ, our Web Development Services make use of strategy, creativity and technology to help businesses achieve real results.",
  heroBullets: [
    "Modern functionalities & responsiveness",
    "Seamless digital experiences",
    "Tailored strategy, creativity & tech",
    "Optimized conversion architecture",
  ],
  whyChooseUs: [
    {
      title: "Customized to Your Strategy",
      desc: "The experts at Ownadz can develop custom web development to meet your unique business needs without the need of using any ready-made templates."
    },
    {
      title: "Efficient Code & Security",
      desc: "All the sites created here have been made using efficient code, robust security features, and scalable architecture that helps in further business expansion."
    },
    {
      title: "SEO & Speed Optimization",
      desc: "We build SEO-optimized websites that load faster and are highly efficient to deliver an optimal user experience on all platforms."
    },
    {
      title: "Marketing Integration & Support",
      desc: "We collaborate with developers along with our marketers to make sure that your website works according to your digital marketing strategy and also generates relevant leads. We will also offer you website maintenance services after launching."
    }
  ],
  benefits: [
    { title: "Blazing Fast Load Speeds", desc: "Faster websites with Professional Web Development Services come along with greater security and higher conversion rates." },
    { title: "Advanced Security & Architecture", desc: "Protect user transactions and details with robust server protocols and clean security standards." },
    { title: "Optimized SEO Architecture", desc: "Build authority from the ground up with structured code built strictly according to search engine best practices." },
    { title: "Future-Proof & Adaptable", desc: "Partnering with a professional team helps keep your website future-proof and adapt easily to new technologies." }
  ],
  pillars: [
    { title: "Custom Website Development", desc: "Every company has unique objectives, hence our Custom Web Development services have been tailored to suit your business. Our Web Development Services include custom websites that represent you, engage your customers better and perform exceptionally. We develop scalable websites with user-friendly navigation and layout." },
    { title: "WordPress Development Services", desc: "We offer you our WordPress Development Services that offer you the ability to build secure and easy to manage websites for your company regardless of its size. We will develop customized websites using WordPress depending on your needs whether it is a company website, blog, portfolio or a business portal. Secure, user-friendly, and easy to maintain." },
    { title: "Ecommerce Website Development", desc: "Online sales are not only about having a good-looking site. Our Ecommerce Website Development Services allow us to build online shops that provide good browsing experience, secure payments, and manage inventory. Our services are aimed at helping ecommerce businesses gain customers’ trust, convert leads, and manage stores effectively." },
    { title: "Web Application Development", desc: "Often businesses need to develop custom software solutions to increase efficiency and automation. The Web Application Development Services we offer include CRM, customer portals, booking systems, dashboards, and enterprise applications that are developed using latest technologies. Scalable, secure, and tailored to your needs." },
    { title: "UI/UX Design Services", desc: "Good design enhances user satisfaction as well as conversion rates. Our UI UX Design Services emphasize intuitive design, appealing layout and efficient user flow that motivates the visitor to do something. Coupled with our Responsive Web Design strategy, we make sure that every website is the same on desktop, tablet, and mobile platforms." },
    { title: "Website Maintenance & Support", desc: "The process of website launch marks just the start. Maintenance allows your site to stay safe, secure, and perform optimally. Our Website Maintenance Services include security updates, bug fixations, backup of websites, plugin updates, website performance, and technical support. Enable your website to be operational most of the time." }
  ],
  steps: [
    { num: "01", title: "Discovery & Planning", desc: "We start off with identifying the objectives of your business, its competitors and customers' expectations. We are thus able to come up with a well-defined strategy prior to development." },
    { num: "02", title: "UI/UX Design", desc: "We work on designing aesthetically pleasing layouts and prototypes that offer exceptional user experience with high brand consistency." },
    { num: "03", title: "Development", desc: "We use modern technologies and Industry best practices to build secure, scalable, and high-performing websites. Our Full stack Development expertise enables us to develop both frontend and backend systems efficiently." },
    { num: "04", title: "Testing & QA", desc: "Every website undergoes detailed testing for performance, responsiveness, browser compatibility, functionality, and security before launch." },
    { num: "05", title: "Launch & Support", desc: "Your website will be fully optimized upon approval and launched. Our Web Development Services do not stop at launch; they continue after launch too." }
  ],
  technologies: ["HTML", "CSS", "JavaScript", "React.js", "Node.js", "WordPress", "Shopify", "PHP", "MySQL"],
  industries: ["Ecommerce", "Healthcare", "SaaS", "Education", "Real Estate", "Local Businesses"],
  faqs: [
    { q: "What web development services do you offer?", a: "We have websites for business, eCommerce websites, web applications, WordPress websites, website redesigning and website maintenance services." },
    { q: "Do you build custom websites?", a: "Yes. We specialize in Custom Web Development tailored to your business goals and branding." },
    { q: "Which platforms do you work with?", a: "We work with WordPress, Shopify, React.js, Node.js, PHP, MySQL, and other modern technologies." },
    { q: "How long does website development take?", a: "Project timelines vary depending on complexity, features, and business requirements, typically ranging from a few weeks to several months." },
    { q: "Do you provide website maintenance?", a: "Yes. Our Website Maintenance Services consist of updates, backup, monitoring and technical support." },
    { q: "Will my website be mobile-friendly?", a: "Absolutely. Every website we create is based on Responsive Web Design to perform great at any device." },
    { q: "Is SEO included in web development?", a: "Yes. We develop SEO-friendly websites which have optimal structure, fast load speed and follow all search engine best practices." },
    { q: "Can you redesign my existing website?", a: "Yes. We can redesign your current website to improve its appearance, performance, user experience, and conversion rate." }
  ]
};

export default function WebDevelopmentPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What web development services does OwnAdz offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "OwnAdz provides custom website development, eCommerce development, WordPress development, CMS solutions, and web application development."
        }
      },
      {
        "@type": "Question",
        "name": "Will my website be mobile-friendly?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, every website is fully responsive and optimized for desktops, tablets, and mobile devices."
        }
      },
      {
        "@type": "Question",
        "name": "Are your websites SEO-friendly?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we build SEO-friendly websites with fast loading speed, clean code, structured data, and optimized architecture."
        }
      },
      {
        "@type": "Question",
        "name": "How long does it take to develop a website?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Project timelines vary based on requirements, but most business websites are completed within 2 to 8 weeks."
        }
      },
      {
        "@type": "Question",
        "name": "Why choose OwnAdz for web development?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "OwnAdz delivers secure, scalable, user-friendly, and conversion-focused websites tailored to your business goals."
        }
      }
    ]
  };

  return (
    <>
      {/* Search Engine Optimization Injection */}
      <MetaTags 
        title="Web Development Services | Custom Website Development | OwnAdz" 
        description="Build fast, secure, and SEO-friendly websites with OwnAdz Web Development Services. We create custom business websites, eCommerce stores, and scalable web applications that drive growth." 
      />

      {/* Structured Schema Markup */}
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
                Design Seamless Digital Experiences with Modern Functionalities
              </h2>
              <p className="text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed">
                It is common for people to encounter a business through their website. No matter whether you require a corporate website, online store or any other web application, our professional team develops solutions based on the needs of the business.
              </p>
              <blockquote className="border-l-4 border-blue-600 pl-4 py-2 italic text-slate-700 bg-blue-50/50 rounded-r-xl pr-4 text-sm sm:text-base">
                "Every project begins with understanding your goals, audience, and industry. Our Web Development Services make sure that the website is designed to be visually attractive and effective in conversion."
              </blockquote>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Choosing the Right Website Development Company is necessary for ensuring success in developing your business online. At OwnadZ, we offer efficient Web Development Services that come with the help of technical skills, creativity, and customer-centricity.
              </p>
            </div>

            {/* Strategic Action Card */}
            <div className="lg:col-span-5 rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-100/40 p-6 sm:p-8 lg:sticky lg:top-6">
              <span className="text-[10px] sm:text-xs font-bold text-blue-600 uppercase tracking-wider block mb-1">Next Step</span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-950">Build Your Roadmap</h3>
              <p className="mt-2 text-slate-600 text-xs sm:text-sm leading-relaxed">
                Tell us your unique objectives and our website specialists will outline a tailored blueprint for architecture, responsive layouts, and immediate engagement uplift.
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
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black mb-4 tracking-tight">Why Choose OwnadZ for Web Development?</h2>
              <p className="text-slate-400 text-sm sm:text-base">
                The choice of partner determines the trajectory of your digital channels. We lean on professional architecture, optimized performance frameworks, and cross-team integration.
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
            <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 mb-4 tracking-tight">
              Benefits of Professional Web Development
            </div>
            <p className="text-slate-600 text-sm sm:text-base">
              Scale your digital footprint infinitely while adding deeply to your overall brand image and securing conversions for long-term digital growth.
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
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 tracking-tight">Our Web Development Services</h2>
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
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 mb-4 tracking-tight">Our Web Development Process</h2>
            <p className="text-slate-600 text-sm sm:text-base">How we plan, design, develop, and mature your online ecosystems from the ground up.</p>
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

        {/* --- TECHNOLOGIES WE USE --- */}
        <section className="bg-slate-100 border-t border-b border-slate-200 py-14 sm:py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-slate-950 uppercase tracking-widest text-[10px] sm:text-xs font-bold mb-3">Technologies We Use</h2>
            <p className="text-slate-600 max-w-xl mx-auto text-xs sm:text-sm mb-6">
              Our developers work with modern frameworks to deliver secure, scalable, and reliable digital solutions optimized for long-term business success.
            </p>
            <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 lg:gap-6">
              {CONTENT.technologies.map((tech) => (
                <div key={tech} className="px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-white border border-slate-200 text-slate-800 text-xs sm:text-sm font-medium shadow-sm hover:border-blue-500/40 transition">
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- INDUSTRIES SERVED --- */}
        <section className="bg-slate-950 text-white py-14 sm:py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-slate-400 uppercase tracking-widest text-[10px] sm:text-xs font-bold mb-3">Industries We Serve</h2>
            <p className="text-slate-400 max-w-xl mx-auto text-xs sm:text-xs mb-6">
              We understand the unique challenges of each industry and create customized solutions that improve customer engagement and streamline operations.
            </p>
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
            <h2 className="text-2xl sm:text-4xl font-black mb-4 tracking-tight">Ready to Build a Website That Converts?</h2>
            <p className="text-blue-100 mb-8 max-w-xl mx-auto text-xs sm:text-sm md:text-base leading-relaxed">
              Join hands with OwnadZ and make a website that performs exceptionally well, reaches the right people, and gives you the exact mix of technology and creativity that you need.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-white text-blue-950 font-bold px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl hover:bg-amber-400 hover:text-slate-950 transition-all shadow-lg text-xs sm:text-sm md:text-base"
            >
              Get Started with OwnadZ Services
            </Link>
          </div>
        </section>

      </main>
    </>
  );
}