import Link from "next/link";
import MetaTags from "@/components/seo/MetaTags";

const CONTENT = {
  slug: "whatsapp-marketing",
  title: "Whatsapp Marketing",
  description:
    "Reach customers instantly with WhatsApp campaigns—messages, automation, and lead follow-ups.",
  bullets: [
    "WhatsApp campaign planning",
    "Broadcasts & message sequences",
    "Lead capture + follow-up workflow",
    "Performance monitoring",
  ],
};

export default function WhatsappMarketingPage() {
  return (
    <>
      <MetaTags title={CONTENT.title} description={CONTENT.description} />

      <main className="min-h-screen bg-white">
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 md:py-24">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {CONTENT.title}
            </h1>
            <p className="text-lg md:text-xl mb-8 text-blue-100">
              {CONTENT.description}
            </p>
            <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Link
                href="/contact"
                className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition"
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
                A WhatsApp-first approach to convert inquiries into qualified leads and customers.
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
                Share your audience and we’ll outline a WhatsApp campaign plan with tracking.
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

