"use client";

import { useState } from "react";
import { createLead } from "@/services/leadService";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await createLead({
        ...formData,
        status: "New",
      });
      alert("Message Sent");
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white ">
      <section className="relative overflow-hidden bg-[#121212] py-10 lg:py-18 text-white">
  {/* Background Subtle Mesh / Glow Effects */}
  <div className="absolute -left-10 -top-10 h-72 w-72 rounded-full bg-[#ffbd59]/10 blur-3xl animate-pulse z-0" />
  <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-[#ffbd59]/5 blur-3xl z-0" />
  
  {/* FIXED IMAGE OVERLAY CONTAINER - Swapped to a premium workspace communication visual */}
  <div 
    className="absolute inset-0 opacity-15 bg-cover bg-center mix-blend-overlay pointer-events-none z-0 bg-[url('https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=1470&auto=format&fit=crop')]"
  />

  <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center md:text-left">
    <div className="max-w-3xl">
      <span className="inline-flex items-center rounded-full border border-[#ffbd59]/30 bg-[#ffbd59]/10 px-5 py-2 text-sm font-black uppercase tracking-[0.25em] text-[#ffbd59] mb-6 shadow-sm">
        Get In Touch
      </span>
      <h1 className="text-5xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.05]">
        Let’s Build Something <br />
        <span className="text-[#ffbd59] bg-white/5 border border-white/10 px-4 py-0.5 inline-block rounded-2xl mt-2">
          Together
        </span>
      </h1>
      <p className="mt-6 text-lg sm:text-xl text-white/70 max-w-2xl font-medium leading-8">
        Have an idea, project blueprint, or partnership strategy in mind? Reach out to our execution team and accelerate your digital footprint.
      </p>
    </div>
  </div>
</section>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid gap-16 lg:grid-cols-12 lg:items-start">
          
          {/* LEFT SIDE FORM CARD */}
          <div className="lg:col-span-6 xl:col-span-7">
            <div className="rounded-[2rem] bg-dark p-6 sm:p-10 shadow-2xl">
              <h2 className="text-3xl font-black text-[#ffbd59] mb-8 tracking-tight">
                Send Message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <input
                    type="text"
                    required
                    placeholder="Full Name*"
                    className="h-14 w-full rounded-xl border border-black bg-white/5 px-4 text-sm font-semibold text-black outline-none transition-all duration-300 placeholder:text-black/70 focus:border-[#ffbd59] focus:bg-white/10"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />

                  <input
                    type="tel"
                    required
                    placeholder="Phone*"
                    className="h-14 w-full rounded-xl border border-black bg-white/5 px-4 text-sm font-semibold text-black outline-none transition-all duration-300 placeholder:text-black/70 focus:border-[#ffbd59] focus:bg-white/10"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>

                <input
                  type="email"
                  required
                  placeholder="Email*"
                  className="h-14 w-full rounded-xl border border-black bg-white/5 px-4 text-sm font-semibold text-black outline-none transition-all duration-300 placeholder:text-black/70 focus:border-[#ffbd59] focus:bg-white/10"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />

                {/* Styled Select Element replacing plain input for better UX */}
                <div className="relative">
                  <select
                    required
                    className="h-14 w-full appearance-none rounded-xl border border-black bg-white/5 px-4 text-sm font-semibold text-black outline-none transition-all duration-300 focus:border-[#ffbd59] focus:bg-white/10"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  >
                    <option value="" disabled className="text-slate-900">Select Services *</option>
                    <option value="Web Development" className="text-slate-900">Web Development</option>
                    <option value="Digital Marketing" className="text-slate-900">Digital Marketing</option>
                    <option value="Mobile App Development" className="text-slate-900">Mobile App Development</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-white/50">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path d="M19 9l-7 7-7-7" /></svg>
                  </div>
                </div>

                <textarea
                  rows="5"
                  placeholder="Message"
                  className="w-full rounded-xl border border-black bg-white/5 p-4 text-sm font-semibold text-black outline-none transition-all duration-300 placeholder:text-black/70 focus:border-[#ffbd59] focus:bg-white/10 resize-none"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />

                {/* Submit Action Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="group relative flex h-14 w-full items-center justify-center overflow-hidden rounded-xl bg-[#ffbd59] px-6 font-bold text-white shadow-lg shadow-[#f15a24]/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#f15a24]/30 disabled:opacity-50"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <svg className="h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3.4 22a.8.8 0 0 1-.6-1.3l4-7.5H13a1 1 0 0 0 0-2H6.8l-4-7.4A.8.8 0 0 1 3.5 2.7l18 8.5a.8.8 0 0 1 0 1.5z" />
                    </svg>
                    {loading ? "Sending..." : "Send Message!"}
                  </span>
                  <div className="absolute inset-0 translate-y-full bg-black transition-transform duration-300 group-hover:translate-y-0"></div>
                </button>
              </form>
            </div>
          </div>

          {/* RIGHT SIDE CONTACT INFORMATION */}
          <div className="lg:col-span-6 xl:col-span-5 lg:pt-4">
            <div className="space-y-2">
              <span className="flex items-center gap-2 text-sm font-black uppercase tracking-[0.25em] text-[#ffbd59]">
                <span className="h-0.5 w-6 bg-[#ffbd59]" /> NEED ANY HELP?
              </span>
              <h1 className="text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">
                Get in touch with us
              </h1>
              <p className="pt-3 text-base leading-7 text-slate-600">
                Get in touch today to start growing your digital presence with expert guidance.
              </p>
            </div>

            {/* Information Cards Stack Layout */}
            <div className="mt-12 space-y-6">
              
              {/* Box Info: Phone */}
              <div className="group flex items-start gap-5 rounded-2xl border border-slate-100 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#ffbd59] hover:shadow-md">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-slate-50 text-slate-900 transition-colors duration-300 group-hover:bg-[#ffbd59]/10 group-hover:text-[#ffbd59]">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                </div>
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400">
                    Have any question?
                  </h3>
                  <p className="mt-1 text-base font-extrabold text-slate-900">
                    +91-9490100650
                  </p>
                </div>
              </div>

              {/* Box Info: Email */}
              <div className="group flex items-start gap-5 rounded-2xl border border-slate-100 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#ffbd59] hover:shadow-md">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-slate-50 text-slate-900 transition-colors duration-300 group-hover:bg-[#ffbd59]/10 group-hover:text-[#ffbd59]">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 002-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400">
                    Write email
                  </h3>
                  <p className="mt-1 text-base font-extrabold text-slate-900 break-all">
                    info@ownadz.com
                  </p>
                </div>
              </div>

              {/* Box Info: Location */}
              <div className="group flex items-start gap-5 rounded-2xl border border-slate-100 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#ffbd59] hover:shadow-md">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-slate-50 text-slate-900 transition-colors duration-300 group-hover:bg-[#ffbd59]/10 group-hover:text-[#ffbd59]">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 21.414a2 2 0 01-2.828 0L6.343 17.657A8 8 0 1117.657 16.657z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400">
                    Our Location
                  </h3>
                  <p className="mt-1 text-base font-extrabold text-slate-900 leading-6">
                    8/80, Sreeramulapeta, Proddtur, Kadapa District, Andhra Pradesh - 516360
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* GOOGLE MAP SECTION */}
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-16 lg:mt-24">
  <div className="group overflow-hidden rounded-[2rem] border border-slate-100 bg-white p-2 shadow-sm transition-all duration-300 hover:border-[#ffbd59] hover:shadow-md">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7740788.756533413!2d71.93525494421372!3d18.678260237065924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb4790042755895%3A0x715fda605f2f1671!2sOwnadz%20Digital%20Agency!5e0!3m2!1sen!2sin!4v1781601101397!5m2!1sen!2sin"
      width="100%"
      height="450"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Google Map Location"
      className="rounded-[1.75rem] filter grayscale opacity-99 transition-all duration-500 group-hover:grayscale-0 group-hover:opacity-100"
    />
  </div>
</div>
    </div>
  );
}

