"use client";

import { useState } from "react";
import { createLead } from "@/services/leadService";

export default function ContactForm() {
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
    <div className="bg-white">
      <section className="relative overflow-hidden bg-[#121212] py-10 text-white lg:py-18">
        <div className="absolute -left-10 -top-10 z-0 h-72 w-72 rounded-full bg-[#ffbd59]/10 blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 z-0 h-96 w-96 rounded-full bg-[#ffbd59]/5 blur-3xl" />

        <div
          className="pointer-events-none absolute inset-0 z-0 bg-cover bg-center opacity-15 mix-blend-overlay"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=1470&auto=format&fit=crop')",
          }}
        />

        <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 md:text-left lg:px-8">
          <div className="max-w-3xl">
            <span className="mb-6 inline-flex items-center rounded-full border border-[#ffbd59]/30 bg-[#ffbd59]/10 px-5 py-2 text-sm font-black uppercase tracking-[0.25em] text-[#ffbd59] shadow-sm">
              Get In Touch
            </span>
            <h1 className="text-5xl font-black leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-5xl">
              Let&apos;s Build Something <br />
              <span className="mt-2 inline-block rounded-2xl border border-white/10 bg-white/5 px-4 py-0.5 text-[#ffbd59]">
                Together
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg font-medium leading-8 text-white/70 sm:text-xl">
              Have an idea, project blueprint, or partnership strategy in mind? Reach out to our execution team and accelerate your digital footprint.
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="grid gap-16 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-6 xl:col-span-7">
            <div className="rounded-4xl bg-dark p-6 shadow-2xl sm:p-10">
              <h2 className="mb-8 text-3xl font-black tracking-tight text-[#ffbd59]">
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

                <div className="relative">
                  <select
                    required
                    className="h-14 w-full appearance-none rounded-xl border border-black bg-white/5 px-4 text-sm font-semibold text-black outline-none transition-all duration-300 focus:border-[#ffbd59] focus:bg-white/10"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  >
                    <option value="" disabled className="text-slate-900">Select Services *</option>
                    <option value="Affiliate Marketing" className="text-slate-900">Affiliate Marketing</option>
                    <option value="Performance Marketing" className="text-slate-900">Performance Marketing</option>
                    <option value="SEO Service" className="text-slate-900">SEO Service</option>
                    <option value="Social Media Marketing" className="text-slate-900">Social Media Marketing</option>
                    <option value="Web Development" className="text-slate-900">Web Development</option>
                    <option value="App Development" className="text-slate-900">App Development</option>
                  </select>
                </div>

                <textarea
                  rows="5"
                  placeholder="Message"
                  className="w-full resize-none rounded-xl border border-black bg-white/5 p-4 text-sm font-semibold text-black outline-none transition-all duration-300 placeholder:text-black/70 focus:border-[#ffbd59] focus:bg-white/10"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="group relative flex h-14 w-full items-center justify-center overflow-hidden rounded-xl bg-[#ffbd59] px-6 font-bold text-white shadow-lg shadow-[#f15a24]/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#f15a24]/30 disabled:opacity-50"
                >
                  <span className="relative z-10 flex items-center gap-2">{loading ? "Sending..." : "Send Message!"}</span>
                </button>
              </form>
            </div>
          </div>

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

            <div className="mt-12 space-y-6">
              <div className="group flex items-start gap-5 rounded-2xl border border-slate-100 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#ffbd59] hover:shadow-md">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-slate-50 text-slate-900 transition-colors duration-300 group-hover:bg-[#ffbd59]/10 group-hover:text-[#ffbd59]">
                  <span>☎</span>
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

              <div className="group flex items-start gap-5 rounded-2xl border border-slate-100 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#ffbd59] hover:shadow-md">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-slate-50 text-slate-900 transition-colors duration-300 group-hover:bg-[#ffbd59]/10 group-hover:text-[#ffbd59]">
                  <span>✉</span>
                </div>
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400">
                    Write email
                  </h3>
                  <p className="mt-1 break-all text-base font-extrabold text-slate-900">
                    info@ownadz.com
                  </p>
                </div>
              </div>

              <div className="group flex items-start gap-5 rounded-2xl border border-slate-100 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#ffbd59] hover:shadow-md">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-slate-50 text-slate-900 transition-colors duration-300 group-hover:bg-[#ffbd59]/10 group-hover:text-[#ffbd59]">
                  <span>⌖</span>
                </div>
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400">
                    Our Location
                  </h3>
                  <p className="mt-1 text-base font-extrabold leading-6 text-slate-900">
                    8/80, Sreeramulapeta, Proddtur, Kadapa District, Andhra Pradesh - 516360
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-16 max-w-7xl px-4 sm:px-6 lg:mt-24 lg:px-8">
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
            className="rounded-[1.75rem] grayscale transition-all duration-500 group-hover:grayscale-0"
          />
        </div>
      </div>
    </div>
  );
}
