import Link from "next/link";
import blogHeroImg from "@/assets/seo-services-blog-img.jpeg";

export default function BlogPage() {
  return (
    <div className="bg-white">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-[#121212] py-10 lg:py-18 text-white">
        {/* Background Subtle Mesh / Glow Effects */}
        <div className="absolute -left-10 -top-10 h-72 w-72 rounded-full bg-[#ffbd59]/10 blur-3xl animate-pulse z-0" />
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-[#ffbd59]/5 blur-3xl z-0" />

        {/* FIXED IMAGE OVERLAY CONTAINER */}
        <div className="absolute inset-0 opacity-15 bg-cover bg-center mix-blend-overlay pointer-events-none z-0 bg-[url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1415&auto=format&fit=crop')]" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center md:text-left">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.05]">
              <span className="text-[#ffbd59] bg-white/5 border border-white/10 px-4 py-0.5 inline-block rounded-2xl mt-2">
                Blog
              </span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-white/70 max-w-3xl font-medium leading-8">
              Explore expert articles, tips and tricks, industry updates, motivational stories, and many other intriguing aspects related to technology, business, marketing, development, artificial intelligence, lifestyle, and many other industries.
            </p>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT CONTAINER */}
      <div className="py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          {/* 2-COLUMN LAYOUT */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* LEFT COLUMN: STATIC BLOG ARTICLE */}
            <div className="lg:col-span-8 flex flex-col gap-10">
              <article className="pb-8">
                
                {/* Article Title (H2) */}
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111827] tracking-tight leading-tight mb-3">
                  10 Signs Your Business Needs Digital Marketing Services
                </h2>

                {/* Metadata Line */}
                <p className="text-sm sm:text-base text-slate-700 mb-6 leading-relaxed">
                  Posted on{" "}
                  <span className="underline decoration-slate-400 underline-offset-4 font-medium">
                    July 23, 2026
                  </span>{" "}
                  by{" "}
                  <span className="underline decoration-slate-400 underline-offset-4 font-medium text-slate-900">
                    Innovative Digital Marketing — Leading Digital Agency
                  </span>
                </p>

                {/* Image + Excerpt Row Layout */}
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-start">
                  
                  {/* Blog Featured Thumbnail Image */}
                  <div className="sm:col-span-5 rounded-lg overflow-hidden border border-slate-200 shadow-sm bg-slate-100">
                    <img
                     src={blogHeroImg.src}
                      alt="10 Signs Your Business Needs Digital Marketing Services"
                      className="w-full h-52 sm:h-48 object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Static Provided Content */}
                  <div className="sm:col-span-7 flex flex-col justify-between h-full">
                    <p className="text-slate-800 text-base sm:text-[1.05rem] leading-relaxed mb-6 font-normal">
                      The highly competitive web environment demands much more than building a website for business today. Consumers who purchase goods on the web first do some research about various firms, compare their products, and have some communication with different firms before buying anything. Not having Digital Marketing Services can be a drawback for your firm online.
                    </p>

                    <div>
                      <Link
                        href="/blog/10-signs-your-business-needs-digital-marketing-services"
                        className="inline-flex items-center justify-center bg-[#ffbd59] hover:bg-black text-black hover:text-[#ffbd59] font-bold text-sm tracking-wider uppercase px-6 py-3 rounded-md shadow-md hover:shadow-lg transition-all border border-[#ffbd59] hover:border-black active:scale-[0.98]"
                      >
                        CONTINUE READING &rarr;
                      </Link>
                    </div>
                  </div>

                </div>
              </article>
            </div>

            {/* RIGHT COLUMN: SIDEBAR */}
            <div className="lg:col-span-4 space-y-10 lg:sticky lg:top-8">
              
              {/* SECTION 1: LEAVE A COMMENT FORM (Image 1 Reference) */}
              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8">
                <h3 className="text-2xl font-black text-[#0f172a] mb-6">
                  Leave a Comment
                </h3>

                <form className="space-y-4">
                  <div>
                    <textarea
                      rows={4}
                      placeholder="Write your comment..."
                      className="w-full rounded-xl bg-[#f1f5f9]/70 border border-slate-100 p-4 text-slate-800 placeholder-slate-400 focus:bg-white focus:border-black focus:outline-none focus:ring-2 focus:ring-[#ffbd59]/30 transition-all text-sm resize-none"
                    />
                  </div>

                  <div>
                    <input
                      type="text"
                      placeholder="Name"
                      className="w-full rounded-xl bg-[#f1f5f9]/70 border border-slate-100 px-4 py-3 text-slate-800 placeholder-slate-400 focus:bg-white focus:border-black focus:outline-none focus:ring-2 focus:ring-[#ffbd59]/30 transition-all text-sm"
                    />
                  </div>

                  <div>
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full rounded-xl bg-[#f1f5f9]/70 border border-slate-100 px-4 py-3 text-slate-800 placeholder-slate-400 focus:bg-white focus:border-black focus:outline-none focus:ring-2 focus:ring-[#ffbd59]/30 transition-all text-sm"
                    />
                  </div>

                  <button
                    type="button"
                    className="w-full mt-2 bg-[#ffbd59] hover:bg-black text-black hover:text-[#ffbd59] font-bold text-sm tracking-wide py-3 px-6 rounded-xl transition-all shadow-md border border-[#ffbd59] hover:border-black active:scale-[0.98]"
                  >
                    Post Comment
                  </button>
                </form>
              </div>

              {/* SECTION 2: OUR LATEST BLOG SIDEBAR (Image 2 Reference) */}
              <div className="space-y-4">
                
                {/* Dark Banner Header */}
                <div className="bg-[#121212] text-[#ffbd59] text-center py-3.5 px-6 rounded-xl shadow-sm border border-[#ffbd59]/20">
                  <h3 className="text-2xl font-black tracking-wide">
                    Our Latest Blog
                  </h3>
                </div>

                {/* Light Sidebar Card Box Container */}
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-5 space-y-6">
                  


                  {/* Article Card 2 */}
                  <div className="group cursor-pointer">
                    <div className="rounded-xl overflow-hidden mb-3 border border-slate-200 shadow-sm bg-white">
                      <img
                        src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop"
                        alt="Why Every Business Needs a Conversion-Optimized Website"
                        className="w-full h-36 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <h4 className="text-lg font-bold text-slate-900 group-hover:text-black transition-colors leading-snug underline decoration-slate-900/30 group-hover:decoration-[#ffbd59] underline-offset-2">
                      Why Every Business Needs a Conversion-Optimized Website in 2026
                    </h4>
                  </div>

                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </div>
  );
}