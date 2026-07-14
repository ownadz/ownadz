import Link from "next/link";
import MetaTags from "@/components/seo/MetaTags";

// Complete Content Object built from your provided text copy
const CONTENT = {
  slug: "app-development",
  title: "App Development Services for Scalable Mobile Solutions",
  subTitle: "Build Powerful Mobile Apps for Business Growth",
  description: "In the modern digital era, applications play a crucial role in making sure that a business can create better engagement, optimize their processes, and make additional money through their business processes. At Ownadz, our App Development Services ensure that your company can develop innovative, reliable, and highly performing mobile applications to provide an amazing experience to customers.",
  heroBullets: [
    "Native Android & iOS engineering",
    "Cross-platform efficiency (Flutter & React Native)",
    "Robust security architecture & performance",
    "End-to-end deployment & lifecycle support",
  ],
  whyChooseUs: [
    {
      title: "Tailored Custom App Development",
      desc: "Our specialists offer mobile apps specifically designed in accordance with your business processes and customer requirements. We do not use common templates but create applications that match your business identity and goals."
    },
    {
      title: "Agile Architecture & Collaboration",
      desc: "Our application development approach implies agility, which means cooperation, fast delivery, and continuous improvements. Security, scalability, and performance are the main criteria for any app we develop."
    },
    {
      title: "No-Template Unique Identity",
      desc: "We build custom interfaces from scratch, matching your business workflows precisely without the limitations of ready-made off-the-shelf frameworks."
    },
    {
      title: "Long-Term Maintenance & Success",
      desc: "Once the application has been deployed, we continue providing maintenance, updating, performance optimization, bug fixing, and feature implementation to guarantee the success of your application."
    }
  ],
  benefits: [
    { title: "Deepen Customer Engagement", desc: "Professional App Development Services will help organizations to engage customers effectively and make them significantly more accessible." },
    { title: "Elevated Brand Visibility", desc: "Establish a permanent, premium real estate presence on your customers' devices to drive top-of-mind brand recollection." },
    { title: "Optimized Operational Efficiency", desc: "Streamline workflows, automate manual operations, and integrate company portals or CRMs smoothly into your field applications." },
    { title: "Future-Proof Deployments", desc: "When you choose a professional mobile application development company, your app will align perfectly with industry standards and the latest technologies." }
  ],
  pillars: [
    { title: "Android App Development", desc: "Our Android App Development solutions are designed to create fast, reliable, and feature-rich applications for Android smartphones and tablets. We develop native Android apps using advanced development techniques to make sure that our apps work smoothly. The performance of each and every app is enhanced for security, scalability, and speed, while incorporating various third party APIs, payment gateways, location services, notifications, and cloud services into an application." },
    { title: "iOS App Development", desc: "Our services for iOS App Development will help you develop the best iOS applications to attract users through your aesthetically appealing and very secure applications. Our team of programmers creates iPhone & iPad applications using the latest development tools from Apple. We help you get your iOS app from concept to completion on the App Store, guaranteeing its outstanding functionality and usability in line with all the Apple quality specifications." },
    { title: "Cross-Platform App Development", desc: "We provide services for Cross Platform App Development for companies requiring rapid development and lower costs. Flutter App Development and React Native App Development are some of the ways in which we develop apps for both Android and iOS devices using one code base. Cross-platform app development leads to saving time on development, saves maintenance costs and ensures consistency in user experience on various platforms." },
    { title: "Custom App Development", desc: "Businesses have their own set of demands and Custom App Development Services are aimed at fulfilling them. We provide enterprise applications, CRM, HRM, customer portals, booking applications and business automation software. Professional developers use APIs, payment gateways, cloud computing and other third party services to create business applications for companies." },
    { title: "UI/UX Design for Mobile Apps", desc: "The first step toward a good app is its great design. Our app design services offer you to create such an intuitive interface that will increase usability and customer engagement. Our approach to app design covers wireframes, interactive prototypes, user journey maps, and customer-centered interfaces. Each screen is designed to make navigation and user interaction easy." }
  ],
  steps: [
    { num: "01", title: "Discovery & Planning", desc: "Every successful project starts with an analysis of your business goals, customer needs, your competitors and the technical requirements. We develop a plan which outlines the process of the entire development." },
    { num: "02", title: "UI/UX Design", desc: "Our designers transform ideas into engaging user experiences through wireframes, prototypes, and visually appealing mobile interfaces that prioritize usability and accessibility." },
    { num: "03", title: "Development", desc: "Our developers develop safe, scalable and high-performing applications using the latest technologies and coding standards. Throughout the process of development we guarantee constant communication and testing." },
    { num: "04", title: "Testing & QA", desc: "Testing is an essential part for every application prior to its deployment because we need to be sure that everything works correctly from the functional perspective, that there is good performance, compatibility, security, and responsiveness." },
    { num: "05", title: "Deployment & Support", desc: "Once the application is successfully tested, we will deploy your application to the Google Play Store and Apple App Store, providing you with continuous maintenance and updates of it." }
  ],
  technologies: ["Flutter", "React Native", "Kotlin", "Swift", "Node.js", "Firebase"],
  industries: ["E-commerce", "Healthcare", "Educational institutes", "Software as a Service (SaaS)", "Real Estate", "Local Businesses"],
  faqs: [
    { q: "What app development services do you offer?", a: "We offer services for developing Android, iOS, cross-platform, enterprise, e-commerce and customized mobile applications." },
    { q: "Do you build Android and iOS apps?", a: "Yes. We develop both native Android and iOS apps and also cross-platform apps utilizing Flutter and React Native." },
    { q: "Which technologies do you use?", a: "We develop both native Android and iOS apps and also cross-platform apps utilizing modern frameworks like Flutter, React Native, Kotlin, Swift, Node.js, and Firebase." },
    { q: "How long does app development take?", a: "Timeline of work depends on the complexity of projects, number of features, integrations and other factors. Development of most applications takes several weeks to a few months." },
    { q: "Do you provide maintenance services?", a: "Yes. We provide maintenance services for updating, fixing, improvement of applications' security and other issues, and providing technical support." },
    { q: "Can you redesign an existing app?", a: "Yes. We redesign and enhance the existing application by improving its usability, performance, security and other aspects." },
    { q: "What is cross-platform app development?", a: "Cross-platform development makes it possible to develop one application for Android and iOS platforms from one code base." },
    { q: "How much does app development cost?", a: "Costs of developing applications depend on number of features, complexity, technologies, integrations, and other factors. We will offer you an individual quotation." }
  ]
};

export async function generateMetadata() {
  return {
    title: "App Development Services | Android & iOS App Development | OwnAdz",
    description: "Build high-performance Android, iOS, and cross-platform mobile apps with OwnAdz. We develop secure, scalable, and user-friendly applications tailored to your business goals.",
    keywords: "app development services, mobile app development, android app development, ios app development, cross platform app development, flutter app development, react native development, custom mobile app development, app development company, OwnAdz",
    alternates: {
      canonical: "https://www.ownadz.com/services/app-development",
    },
  };
}

export default function AppDevelopmentPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What app development services does OwnAdz offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "OwnAdz offers Android, iOS, Flutter, React Native, and custom mobile app development services for startups and enterprises."
        }
      },
      {
        "@type": "Question",
        "name": "Do you develop apps for both Android and iOS?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we build native and cross-platform applications for Android and iOS devices."
        }
      },
      {
        "@type": "Question",
        "name": "How long does it take to develop a mobile app?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Development timelines typically range from 4 to 16 weeks depending on the project's complexity."
        }
      },
      {
        "@type": "Question",
        "name": "Will my app be secure and scalable?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we develop secure, scalable, and high-performance mobile applications following industry best practices."
        }
      },
      {
        "@type": "Question",
        "name": "Why choose OwnAdz for app development?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "OwnAdz delivers custom app solutions with modern technologies, intuitive UI/UX, agile development, and ongoing support."
        }
      }
    ]
  };

  return (
    <>
      {/* Search Engine Optimization Injection */}
      <MetaTags 
        title="App Development Services | Android & iOS App Development | OwnAdz" 
        description="Build high-performance Android, iOS, and cross-platform mobile apps with OwnAdz. We develop secure, scalable, and user-friendly applications tailored to your business goals." 
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
                Build Powerful Mobile Apps Tailored Precisely to Business Verticals
              </h2>
              <p className="text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed">
                Whatever stage of development a business is in, whether launching a startup, growing an enterprise, or just going digital, the App Development Services by Ownadz ensures to provide tailored solutions to the needs of a particular business. 
              </p>
              <blockquote className="border-l-4 border-blue-600 pl-4 py-2 italic text-slate-700 bg-blue-50/50 rounded-r-xl pr-4 text-sm sm:text-base">
                "The main objective of developing an application is not only to get good user interface but also to keep the user engaged by providing good security architecture and functionality. Our apps are reliable and built for future scaling."
              </blockquote>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Our team provides production-ready development services that result in highly sophisticated applications which are scalable, feature-rich, and perform efficiently across Android as well as iOS ecosystems using verified coding architectures.
              </p>
            </div>

            {/* Strategic Action Card */}
            <div className="lg:col-span-5 rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-100/40 p-6 sm:p-8 lg:sticky lg:top-6">
              <span className="text-[10px] sm:text-xs font-bold text-blue-600 uppercase tracking-wider block mb-1">Next Step</span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-950">Launch Your Project</h3>
              <p className="mt-2 text-slate-600 text-xs sm:text-sm leading-relaxed">
                Share your platform vision with us. Our cross-platform experts will build an integrated architecture blueprint mapping out your core database dependencies and custom layout structures.
              </p>
              <Link
                href="/contact"
                className="mt-6 inline-flex w-full justify-center rounded-xl bg-slate-950 px-6 py-4 font-semibold text-white hover:bg-slate-800 transition shadow-md text-sm sm:text-base"
              >
                Contact Us
              </Link>
              <div className="mt-4 flex items-center justify-between text-[11px] sm:text-xs text-slate-500 border-t border-slate-100 pt-4">
                <span>⚡ Response within 1 business day</span>
                <span>Custom Engineering</span>
              </div>
            </div>
          </div>
        </section>

        {/* --- WHY CHOOSE US SECTION --- */}
        <section className="bg-slate-900 text-white py-16 sm:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black mb-4 tracking-tight">Why Choose Ownadz for App Development?</h2>
              <p className="text-slate-400 text-sm sm:text-base">
                Choosing the perfect Mobile Application Development Company is among the key decisions you will make. We provide quality App Development Services backed by advanced methodologies.
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
              Benefits of Professional App Development
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Ensure that your application aligns directly with rigid device hardware requirements, software store expectations, and modern consumer behaviors.
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
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 tracking-tight">Our App Development Services</h2>
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
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 mb-4 tracking-tight">Our App Development Process</h2>
            <p className="text-slate-600 text-sm sm:text-base">How we take your mobile application from abstract concept into a fully published store application.</p>
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
              We leverage modern architectures, languages, and backend computing configurations to design robust applications.
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
              We address the distinct structural operational demands across diverse enterprise channels.
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
            <h2 className="text-2xl sm:text-4xl font-black mb-4 tracking-tight">Ready to Build Your Mobile App?</h2>
            <p className="text-blue-100 mb-8 max-w-xl mx-auto text-xs sm:text-sm md:text-base leading-relaxed">
              Revolutionize your business with professional app development services by Ownadz. Get your free consultation now and receive an app tailored for your long-term success.
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