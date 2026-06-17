import Link from "next/link";
import { getPosts } from "@/services/postService";
import { getImagePreview } from "@/services/storageService";
import { FaRegCalendarAlt } from "react-icons/fa";

export default async function BlogPage() {
  const response = await getPosts();
  // Safe extraction of document loops directly matching your system keys
  const posts = response?.documents || [];

  return (
    <div className="bg-white">
      
    <section className="relative overflow-hidden bg-[#121212] py-10 lg:py-18 text-white">
  {/* Background Subtle Mesh / Glow Effects */}
  <div className="absolute -left-10 -top-10 h-72 w-72 rounded-full bg-[#ffbd59]/10 blur-3xl animate-pulse z-0" />
  <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-[#ffbd59]/5 blur-3xl z-0" />
  
  {/* FIXED IMAGE OVERLAY CONTAINER */}
  <div 
    className="absolute inset-0 opacity-15 bg-cover bg-center mix-blend-overlay pointer-events-none z-0 bg-[url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1415&auto=format&fit=crop')]"
  />

  <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center md:text-left">
    <div className="max-w-3xl">
      <span className="inline-flex items-center rounded-full border border-[#ffbd59]/30 bg-[#ffbd59]/10 px-5 py-2 text-sm font-black uppercase tracking-[0.25em] text-[#ffbd59] mb-6 shadow-sm">
        Knowledge Hub
      </span>
      <h1 className="text-5xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.05]">
        Insights & <br />
        <span className="text-[#ffbd59] bg-white/5 border border-white/10 px-4 py-0.5 inline-block rounded-2xl mt-2">
          Strategies
        </span>
      </h1>
      <p className="mt-6 text-lg sm:text-xl text-white/70 max-w-2xl font-medium leading-8">
        Stay ahead of the curve with corporate digital marketing developments, web engineering trends, and modern brand growth solutions.
      </p>
    </div>
  </div>
</section>

      {/* MAIN CONTENT CONTAINER */}
      <div className="py-20 lg:py-24">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          
          <div className="mb-12 border-b border-slate-100 pb-6 flex items-center justify-between">
            <h2 className="text-2xl font-black tracking-tight text-slate-900">
              Latest Articles ({posts.length})
            </h2>
            <span className="h-1 flex-1 bg-slate-50 mx-6 rounded-full hidden sm:block" />
          </div>

          {/* Dynamic Card Layout Container */}
          {posts.length === 0 ? (
            <div className="text-center py-16 bg-slate-50 rounded-3xl border border-dashed border-slate-200">
              <p className="text-slate-500 font-medium">No blog posts available at the moment.</p>
            </div>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <div
                  key={post.$id}
                  className="group flex flex-col overflow-hidden rounded-[2rem] border border-slate-100 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-[#ffbd59] hover:shadow-xl hover:shadow-[#ffbd59]/5"
                >
                  
                  {/* Image Wrapper Block - Standardizes varied sizes instantly */}
                  {post.blog_image && (
                    <div className="relative h-56 w-full overflow-hidden bg-slate-900">
                      <img
                        src={getImagePreview(post.blog_image)}
                        alt={post.title || "Blog Post Image"}
                        className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                      {post.blog_publish && (
                        <span className="absolute left-4 top-4 rounded-xl bg-black px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-[#ffbd59] shadow-md">
                          {post.blog_publish}
                        </span>
                      )}
                    </div>
                  )}

                  {/* Card Context Body details */}
                  <div className="flex flex-1 flex-col p-6">
                    
                    {/* Meta Details Row */}
                    <div className="flex flex-wrap items-center gap-3 mb-4 text-xs font-bold text-slate-400">
                      <div className="flex items-center gap-1.5 rounded-lg bg-slate-50 px-2.5 py-1.5 border border-slate-100">
                        <FaRegCalendarAlt className="text-[#ffbd59] h-3.5 w-3.5" />
                        <span className="text-slate-600">{post.blog_date || "Recent"}</span>
                      </div>
                    </div>

                    {/* Heading Title Link */}
                    <h2 className="text-xl font-black tracking-tight text-slate-900 line-clamp-2 mb-4 group-hover:text-black min-h-[56px] leading-tight">
                      <Link href={`/blog/${post.slug}`} className="hover:underline decoration-[#ffbd59] decoration-2 underline-offset-4">
                        {post.blog_Heading}
                      </Link>
                    </h2>

                    {/* Read More Bottom Call To Action Button Link */}
                    <div className="mt-auto pt-4 border-t border-slate-50">
                      <Link
                        href={`/blog/${post.slug}`}
                        className="inline-flex h-11 items-center justify-center rounded-xl bg-slate-50 px-5 text-sm font-bold text-slate-900 border border-slate-100 transition-all duration-300 hover:bg-black hover:text-[#ffbd59] hover:border-black active:scale-[0.98]"
                      >
                        Read More
                        <svg 
                          className="ml-2 h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor" 
                          strokeWidth="2.5"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          )}
          
        </div>
      </div>
    </div>
  );
}