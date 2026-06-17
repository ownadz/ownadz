import { getPostBySlug } from "@/services/postService";

export const dynamic = "force-dynamic";

import { getImagePreview } from "@/services/storageService";
import { FaRegCalendarAlt } from "react-icons/fa";

export default async function BlogPostPage({ params }) {
  const { slug } = await params;

  const post = await getPostBySlug(slug);

  if (!post) {
    return <div className="max-w-4xl mx-auto p-6">Post Not Found</div>;
  }

  return (
    <>
      <section className="ownadz_blog_breadcrumb py-2  bg-white">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="inline-flex flex-wrap items-center gap-3 bg-[#fff8eb] border border-[#ffe2a6] rounded-full px-5 py-3">
            <a
              href={post.blog_breadcomeslink1}
              className="text-slate-700 hover:text-[#ffbd59] transition-all duration-300"
            >
              {post.blog_breadcomes1}
            </a>

            <span className="text-[#ffbd59] font-bold">→</span>

            <a
              href={post.blog_breadcomeslink2}
              className="text-slate-700 hover:text-[#ffbd59] transition-all duration-300"
            >
              {post.blog_breadcomes2}
            </a>

            <span className="text-[#ffbd59] font-bold">→</span>

            <span className="font-semibold text-black">
              {post.blog_breadcomes3}
            </span>
          </div>
        </div>
      </section>
      <section className="ownadz_blog_content py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10">
            {/* LEFT SIDE - 60% */}

            <div className="ownadz_blog_left lg:col-span-8">
              {/* Heading */}

              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-8">
                {post.blog_Heading}
              </h1>

              {/* Blog Meta */}

              <div className="flex flex-wrap items-center gap-4 mb-6">
                <span className="text-slate-500 text-sm">
                  {post.blog_publish}
                </span>

                <span className="text-slate-400">:</span>

                <div className="flex items-center gap-2 text-slate-500 text-sm">
                  <FaRegCalendarAlt className="text-[#ffbd59]" />
                  <span>{post.blog_date}</span>
                </div>
              </div>
              {/* Featured Image */}

              <div className="ownadz_blog_image overflow-hidden rounded-3xl mb-10">
                <img
                  src={getImagePreview(post.blog_image)}
                  alt={post.blog_Heading}
                  className="w-full h-auto object-cover rounded-3xl"
                />
              </div>

              {/* Content */}

              <div className="ownadz_blog_description prose prose-lg max-w-none text-slate-700 leading-8">
                {post.blog_des}
              </div>

              <div className="ownadz_blog_card1 relative overflow-hidden rounded-3xl bg-black p-8 md:p-10">
                {/* Accent Circle */}
                <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-[#ffbd59]/20 blur-3xl"></div>

                <div className="relative z-10">
                  <span className="inline-flex items-center px-4 py-2 rounded-full bg-[#ffbd59] text-black font-semibold text-sm mb-5">
                    Quick Insight
                  </span>

                  <h3 className="text-3xl font-bold text-white mb-5">
                    {post.blog_card_title1}
                  </h3>

                  <p className="text-slate-300 text-lg leading-8">
                    {post.blog_card_des1}
                  </p>
                </div>
              </div>

            <section className="ownadz_blog_highlight py-12">

  <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-8 md:p-12">

    {/* Background Number */}
    <div className="absolute top-6 right-6 text-[100px] md:text-[140px] font-black text-slate-100 leading-none select-none">
      {post.blog_card_number2}
    </div>

    <div className="relative z-10 max-w-4xl">

      <span className="inline-flex items-center px-4 py-2 rounded-full bg-[#ffbd59]/20 text-black font-semibold text-sm mb-5">
        {post.blog_card_subtitle2}
      </span>

      <h2 className="text-3xl md:text-4xl font-bold text-black mb-6 leading-tight">
        {post.blog_card_title2}
      </h2>

      <p className="text-slate-600 text-lg leading-8 mb-8">
        {post.blog_card_des2}
      </p>

      <div className="grid md:grid-cols-2 gap-4">

        {post.blog_card_list21 && (
          <div className="flex items-start gap-3">
            <span className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-[#ffbd59] text-black text-sm font-bold">
              ✓
            </span>
            <p className="text-black">{post.blog_card_list21}</p>
          </div>
        )}

        {post.blog_card_list22 && (
          <div className="flex items-start gap-3">
            <span className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-[#ffbd59] text-black text-sm font-bold">
              ✓
            </span>
            <p className="text-black">{post.blog_card_list22}</p>
          </div>
        )}

        {post.blog_card_list23 && (
          <div className="flex items-start gap-3">
            <span className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-[#ffbd59] text-black text-sm font-bold">
              ✓
            </span>
            <p className="text-black">{post.blog_card_list23}</p>
          </div>
        )}

        {post.blog_card_list24 && (
          <div className="flex items-start gap-3">
            <span className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-[#ffbd59] text-black text-sm font-bold">
              ✓
            </span>
            <p className="text-black">{post.blog_card_list24}</p>
          </div>
        )}

        {post.blog_card_list25 && (
          <div className="flex items-start gap-3">
            <span className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-[#ffbd59] text-black text-sm font-bold">
              ✓
            </span>
            <p className="text-black">{post.blog_card_list25}</p>
          </div>
        )}

      </div>

    </div>

  </div>

</section>

<section className="ownadz_blog_highlight py-12">

  <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-8 md:p-12">

    {/* Background Number */}
    <div className="absolute top-6 right-6 text-[100px] md:text-[140px] font-black text-slate-100 leading-none select-none">
      {post.blog_card_number3}
    </div>

    <div className="relative z-10 max-w-4xl">

      <span className="inline-flex items-center px-4 py-2 rounded-full bg-[#ffbd59]/20 text-black font-semibold text-sm mb-5">
        {post.blog_card_subtitle3}
      </span>

      <h2 className="text-3xl md:text-4xl font-bold text-black mb-6 leading-tight">
        {post.blog_card_title3}
      </h2>

      <p className="text-slate-600 text-lg leading-8 mb-8">
        {post.blog_card_des3}
      </p>

      <div className="grid md:grid-cols-2 gap-4">

        {post.blog_card_list31 && (
          <div className="flex items-start gap-3">
            <span className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-[#ffbd59] text-black text-sm font-bold">
              ✓
            </span>
            <p className="text-black">{post.blog_card_list31}</p>
          </div>
        )}

        {post.blog_card_list32 && (
          <div className="flex items-start gap-3">
            <span className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-[#ffbd59] text-black text-sm font-bold">
              ✓
            </span>
            <p className="text-black">{post.blog_card_list32}</p>
          </div>
        )}

        {post.blog_card_list33 && (
          <div className="flex items-start gap-3">
            <span className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-[#ffbd59] text-black text-sm font-bold">
              ✓
            </span>
            <p className="text-black">{post.blog_card_list33}</p>
          </div>
        )}

        {post.blog_card_list34 && (
          <div className="flex items-start gap-3">
            <span className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-[#ffbd59] text-black text-sm font-bold">
              ✓
            </span>
            <p className="text-black">{post.blog_card_list34}</p>
          </div>
        )}

      </div>

    </div>

  </div>

</section>

<section className="ownadz_blog_faq py-20 bg-[#fafafa]">

  <div className="max-w-5xl mx-auto px-5">

    {/* Heading */}

    <div className="text-left mb-14">


      <h2 className="text-4xl md:text-5xl font-bold text-black">
        {post.blog_faq_main_title}
      </h2>

      <div className=""></div>

    </div>

    {/* FAQ List */}

    <div className="space-y-5">

      <details className="ownadz_blog_faq_item group bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">

        <summary className="flex items-center justify-between cursor-pointer list-none p-7">

          <h3 className="text-xl font-bold text-black">
            {post.blog_faq_title1}
          </h3>

          <span className="w-10 h-10 rounded-full bg-[#ffbd59] flex items-center justify-center text-black font-bold group-open:rotate-45 transition-all">
            +
          </span>

        </summary>

        <div className="px-7 pb-7 text-slate-600 leading-8">
          {post.blog_faq_des1}
        </div>

      </details>

      <details className="ownadz_blog_faq_item group bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">

        <summary className="flex items-center justify-between cursor-pointer list-none p-7">

          <h3 className="text-xl font-bold text-black">
            {post.blog_faq_title2}
          </h3>

          <span className="w-10 h-10 rounded-full bg-[#ffbd59] flex items-center justify-center text-black font-bold group-open:rotate-45 transition-all">
            +
          </span>

        </summary>

        <div className="px-7 pb-7 text-slate-600 leading-8">
          {post.blog_faq_des2}
        </div>

      </details>

      <details className="ownadz_blog_faq_item group bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">

        <summary className="flex items-center justify-between cursor-pointer list-none p-7">

          <h3 className="text-xl font-bold text-black">
            {post.blog_faq_title3}
          </h3>

          <span className="w-10 h-10 rounded-full bg-[#ffbd59] flex items-center justify-center text-black font-bold group-open:rotate-45 transition-all">
            +
          </span>

        </summary>

        <div className="px-7 pb-7 text-slate-600 leading-8">
          {post.blog_faq_des3}
        </div>

      </details>

      <details className="ownadz_blog_faq_item group bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">

        <summary className="flex items-center justify-between cursor-pointer list-none p-7">

          <h3 className="text-xl font-bold text-black">
            {post.blog_faq_title4}
          </h3>

          <span className="w-10 h-10 rounded-full bg-[#ffbd59] flex items-center justify-center text-black font-bold group-open:rotate-45 transition-all">
            +
          </span>

        </summary>

        <div className="px-7 pb-7 text-slate-600 leading-8">
          {post.blog_faq_des4}
        </div>

      </details>

      <details className="ownadz_blog_faq_item group bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">

        <summary className="flex items-center justify-between cursor-pointer list-none p-7">

          <h3 className="text-xl font-bold text-black">
            {post.blog_faq_title5}
          </h3>

          <span className="w-10 h-10 rounded-full bg-[#ffbd59] flex items-center justify-center text-black font-bold group-open:rotate-45 transition-all">
            +
          </span>

        </summary>

        <div className="px-7 pb-7 text-slate-600 leading-8">
          {post.blog_faq_des5}
        </div>

      </details>

    </div>

  </div>

</section>

            </div>

            {/* RIGHT SIDE - 40% */}

            <aside className="ownadz_blog_sidebar lg:col-span-4">
              <div className="sticky top-24 space-y-8">
                {/* Contact Form */}

                <div className="bg-[#0f172a] rounded-3xl p-8">
                  <span className="inline-block bg-[#ffbd59] text-black font-semibold px-4 py-2 rounded-full text-sm mb-5">
                    Let's Talk
                  </span>

                  <h3 className="text-white text-2xl font-bold mb-6">
                    Need More Leads?
                  </h3>

                  <div className="space-y-4">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full bg-white rounded-xl p-3 outline-none text-black"
                    />

                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full bg-white rounded-xl p-3 outline-none text-black"
                    />

                    <input
                      type="tel"
                      placeholder="Phone Number"
                      className="w-full bg-white rounded-xl p-3 outline-none text-black"
                    />

                    <button className="w-full bg-[#ffbd59] text-black font-bold py-3 rounded-xl hover:scale-105 transition-all duration-300">
                      Get Free Consultation
                    </button>
                  </div>
                </div>

                {/* Categories */}

                <div className="bg-white border border-slate-200 rounded-3xl p-8">
                  <h3 className="text-2xl font-bold mb-6 text-slate-900">
                    Categories
                  </h3>

                  <ul className="space-y-4">
                    <li className="flex justify-between items-center pb-3 border-b">
                      <span className="text-black">SEO</span>
                      <span className="text-[#ffbd59] font-bold">12</span>
                    </li>

                    <li className="flex justify-between items-center pb-3 border-b">
                      <span className="text-black">Google Ads</span>
                      <span className="text-[#ffbd59] font-bold">08</span>
                    </li>

                    <li className="flex justify-between items-center pb-3 border-b">
                      <span className="text-black">Web Design</span>
                      <span className="text-[#ffbd59] font-bold">15</span>
                    </li>
                  </ul>
                </div>

                {/* Services */}

                <div className="bg-white border border-slate-200 rounded-3xl p-8">
                  <h3 className="text-2xl font-bold mb-6 text-slate-900">
                    Our Services
                  </h3>

                  <div className="space-y-4">
                    <a
                      href="#"
                      className="block p-4 rounded-2xl bg-slate-50 hover:bg-[#ffbd59] hover:text-black transition-all duration-300 text-black"
                    >
                      SEO Services
                    </a>

                    <a
                      href="#"
                      className="block p-4 rounded-2xl bg-slate-50 hover:bg-[#ffbd59] hover:text-black transition-all duration-300 text-black"
                    >
                      Google Ads
                    </a>

                    <a
                      href="#"
                      className="block p-4 rounded-2xl bg-slate-50 hover:bg-[#ffbd59] hover:text-black transition-all duration-300 text-black"
                    >
                      Website Development
                    </a>

                    <a
                      href="#"
                      className="block p-4 rounded-2xl bg-slate-50 hover:bg-[#ffbd59] hover:text-black transition-all duration-300 text-black"
                    >
                      Social Media Marketing
                    </a>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
