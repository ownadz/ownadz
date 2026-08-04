"use client";

import { type FormEvent, useState } from "react";
import { FaPaperPlane } from "react-icons/fa";

export default function SidebarContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Add your form submission API logic here
    setTimeout(() => {
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="bg-gradient-to-b from-slate-900 to-slate-950 rounded-2xl p-6 text-white shadow-xl border border-slate-800">
      <div className="flex items-center gap-2 mb-2">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
        <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400">
          Free Consultation
        </span>
      </div>
      <h3 className="text-xl font-extrabold text-white mb-2 leading-snug">
        Get In Touch
      </h3>
      <p className="text-xs text-slate-300 mb-5 leading-relaxed">
        Have questions or want to scale your digital presence? Send us a quick message.
      </p>
      <form className="space-y-3.5" onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Your Full Name"
            required
            className="w-full bg-slate-800/80 border border-slate-700/80 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all"
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="Work Email Address"
            required
            className="w-full bg-slate-800/80 border border-slate-700/80 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all"
          />
        </div>
        <div>
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full bg-slate-800/80 border border-slate-700/80 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all"
          />
        </div>
        <div>
          <textarea
            rows={3}
            placeholder="How can we help you?"
            className="w-full bg-slate-800/80 border border-slate-700/80 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all resize-none"
          />
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs py-3 rounded-xl transition-all shadow-md hover:shadow-sky-500/20 active:scale-[0.99] flex items-center justify-center gap-2 disabled:opacity-70"
        >
          {isSubmitting ? "Sending..." : "Send Message"} <FaPaperPlane size={11} />
        </button>
      </form>
    </div>
  );
}