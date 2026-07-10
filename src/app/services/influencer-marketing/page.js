import Link from "next/link";
import MetaTags from "@/components/seo/MetaTags";

export async function generateMetadata() {
  return {
    alternates: {
      canonical: "https://ownadz.com/services/influencer-marketing",
    },
  };
}

const CONTENT = {
  slug: "influencer-marketing",
  title: "Influencer Marketing",
  description:
    "Grow your brand with curated influencers, content planning, and measurable campaigns.",
  bullets: [
    "Influencer discovery & vetting",
    "Campaign concepts & content briefs",
    "Performance tracking & reporting",
    "Engagement + conversion optimization",
  ],
};

export default function InfluencerMarketingPage() {
  return (
    <>
      <MetaTags title={CONTENT.title} description={CONTENT.description} />

      <main className="min-h-screen bg-[#fafbfc] text-slate-900 font-sans antialiased selection:bg-blue-500 selection:text-white">
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white py-16 sm:py-24 lg:py-32">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.14),transparent_50%)]" />
          <div className="max-w-5xl mx-auto px-4 text-center">
              <h1 className="text-3xl sm:text-5xl lg:text-5xl font-black tracking-tight mb-6 leading-[1.1] text-white">
                {CONTENT.title}
              </h1>
              <p className="text-base sm:text-lg lg:text-xl mb-10 text-slate-300 leading-relaxed max-w-2xl">
                {CONTENT.description}
              </p>
            <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Link
                href="/contact"
                className="inline-flex justify-center items-center bg-[#ffbd59] px-8 py-4 rounded-xl font-semibold text-black shadow-[0_20px_40px_rgba(255,189,89,0.15)] transition-all duration-500 hover:-translate-y-1 hover:bg-[#ffb33f] hover:shadow-[0_20px_40px_rgba(255,189,89,0.3)]"
              >
                Get a Free Consultation
              </Link>
              <Link
                href="/pages/what-we-do"
                className="inline-block border border-white/60 bg-transparent px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition"
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 py-12 md:py-16">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900">
                What you get
              </h2>
              <p className="mt-4 text-slate-600 leading-7">
                A strategic workflow—from selection to content and optimization—so
                influencer campaigns deliver real business outcomes.
              </p>

              <ul className="mt-6 space-y-3">
                {CONTENT.bullets.map((b) => (
                  <li key={b} className="flex gap-3 items-start">
                    <span className="mt-1 inline-flex h-6 w-6 rounded-full bg-[#ffbd59]/20 text-[#ffbd59] font-bold items-center justify-center">
                      ✓
                    </span>
                    <span className="text-slate-700 font-medium">{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white shadow-sm p-6 md:p-8">
              <h3 className="text-xl font-bold text-slate-900">Next step</h3>
              <p className="mt-3 text-slate-600 leading-7">
                Share your goals and we’ll recommend a creator strategy and campaign
                structure.
              </p>
              <Link
                href="/contact"
                className="mt-6 inline-flex w-full justify-center rounded-2xl bg-black px-6 py-4 font-semibold text-white hover:bg-slate-800 transition"
              >
                Contact Us
              </Link>
              <p className="mt-4 text-xs text-slate-500">
                Response within 1 business day.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

