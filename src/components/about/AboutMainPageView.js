"use client";

import Link from "next/link";

export default function AboutMainPageView({ page }) {
  return (
    <div className="relative min-h-[90vh] bg-white text-black flex items-center overflow-hidden">
      
      {/* Background Architectural Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:30px_30px]" />

      <div className="mx-auto max-w-[1280px] w-full px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          
          {/* LEFT COLUMN: Premium Typography & Content Messaging */}
          <div className="lg:col-span-7 space-y-8 text-left relative z-10">
            
            <div className="inline-flex items-center gap-3">
              <span className="h-px w-8 bg-black animate-pulse" />
              <span className="text-xs font-black tracking-[0.4em] uppercase text-black/40">
                Status: Under Development
              </span>
            </div>

            <h1 className="text-6xl sm:text-7xl font-black tracking-tight leading-[0.95] text-black">
              WE ARE <br />
              <span className="text-[#ffbd59] bg-black px-4 py-1 inline-block rounded-md my-1 select-none transform hover:scale-[1.02] transition-transform duration-300">
                BUILDING
              </span> <br />
              SOMETHING NEW.
            </h1>

            <p className="max-w-xl text-base sm:text-lg font-medium leading-8 text-slate-600">
              {page?.heroDescription || "Our team is engineering an entirely re-imagined platform dashboard layout structure to seamlessly display brand case profiles, technical service paradigms, and execution roadmaps."}
            </p>

            {/* Asymmetric Informational Performance Counters */}
            <div className="grid grid-cols-2 gap-4 border-t border-slate-100 pt-8 max-w-md">
              <div>
                <div className="text-2xl font-black tracking-tight text-black flex items-center gap-1">
                  01<span className="text-[#ffbd59] font-black">.</span>
                </div>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mt-1">Core Identity</p>
              </div>
              <div>
                <div className="text-2xl font-black tracking-tight text-black flex items-center gap-1">
                  02<span className="text-[#ffbd59] font-black">.</span>
                </div>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mt-1">Creative Execution</p>
              </div>
            </div>

            {/* Action Navigation Controls */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                href="/"
                className="inline-flex h-14 items-center justify-center rounded-xl bg-black px-8 font-bold text-[#ffbd59] border border-black transition-all duration-300 hover:bg-transparent hover:text-black active:scale-[0.98]"
              >
                Return Home
              </Link>
              <Link
                href="/contact"
                className="inline-flex h-14 items-center justify-center rounded-xl border border-slate-200 bg-transparent px-8 font-bold text-slate-800 transition-all duration-300 hover:bg-slate-50 hover:border-slate-300"
              >
                Get In Touch
              </Link>
            </div>
          </div>

          {/* RIGHT COLUMN: Asymmetric Floating Modular Visual Blocks */}
          <div className="lg:col-span-5 relative flex items-center justify-center lg:justify-end">
            
            {/* Ambient Background Glow Container */}
            <div className="absolute right-1/4 top-1/4 h-64 w-64 rounded-full bg-[#ffbd59]/10 blur-3xl animate-pulse" />

            {/* Layout Block Wrapper Structural Container */}
            <div className="relative w-full max-w-[380px] aspect-square flex items-center justify-center">
              
              {/* Outer Wireframe Corner Anchors */}
              <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-black" />
              <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-black" />

              {/* Box 1: Large Base Charcoal Block */}
              <div className="absolute top-0 left-0 w-[75%] h-[75%] bg-slate-900 rounded-[2rem] shadow-2xl p-6 flex flex-col justify-between transform -rotate-3 transition-transform duration-500 hover:rotate-0 group">
                <div className="h-3 w-3 rounded-full bg-[#ffbd59] animate-ping" />
                <div className="space-y-2">
                  <div className="h-1.5 w-12 bg-white/20 rounded-full" />
                  <div className="h-1.5 w-24 bg-white/10 rounded-full" />
                </div>
              </div>

              {/* Box 2: Intersecting Accent Gold Blocks Grid Frame */}
              <div className="absolute bottom-4 right-0 w-[55%] h-[55%] bg-[#ffbd59] rounded-[1.75rem] shadow-xl p-5 flex flex-col justify-between transform rotate-6 transition-transform duration-500 hover:rotate-2">
                <div className="flex justify-between items-start">
                  <span className="text-xs font-black bg-black text-[#ffbd59] px-2 py-0.5 rounded-md">
                    LIVE
                  </span>
                  <div className="flex gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-black/40 animate-bounce" />
                    <span className="h-1.5 w-1.5 rounded-full bg-black/40 animate-bounce [animation-delay:0.2s]" />
                    <span className="h-1.5 w-1.5 rounded-full bg-black/40 animate-bounce [animation-delay:0.4s]" />
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="h-4 w-4 rounded-full border-2 border-black/20" />
                </div>
              </div>

              {/* Box 3: Minimal Floating Spec Counter Panel */}
              <div className="absolute -bottom-6 left-12 bg-white border border-slate-100 rounded-xl px-4 py-2.5 shadow-md flex items-center gap-3 transform -translate-y-2 animate-bounce [animation-duration:3s]">
                <span className="flex h-2 w-2 rounded-full bg-[#ffbd59]" />
                <span className="text-xs font-bold text-slate-800 tracking-wider uppercase">Syncing CMS</span>
              </div>

            </div>
          </div>

        </div>

        {/* Dynamic Legacy Sub-Content Rich Text Rendering Node */}
        {page?.content && (
          <div className="mt-24 pt-8 border-t border-slate-100 max-w-xl text-left opacity-30 hover:opacity-100 transition-opacity duration-300">
            <h5 className="text-[10px] font-bold tracking-widest uppercase text-slate-400 mb-2">System Content Fallback Log</h5>
            <div className="prose prose-xs text-slate-500" dangerouslySetInnerHTML={{ __html: page.content }} />
          </div>
        )}
      </div>
    </div>
  );
}