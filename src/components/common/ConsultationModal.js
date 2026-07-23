"use client";

import { useState } from "react";
import { createLead } from "@/services/leadService";

export default function ConsultationModal({ isOpen, onClose }) {
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
      alert("Message Sent Successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
      onClose();
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative z-10 w-full max-w-lg rounded-3xl bg-white shadow-2xl border border-slate-200 overflow-hidden animate-consultation-modal-in">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 transition-all"
          aria-label="Close modal"
        >
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Header */}
        <div className="bg-[#121212] p-6 sm:p-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            Book Free <span className="text-[#ffbd59]">Consultation</span>
          </h2>
          <p className="mt-2 text-sm text-slate-400">
            Fill in the form below and our team will get back to you shortly.
          </p>
        </div>

        {/* Form Body */}
        <div className="p-6 sm:p-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                type="text"
                required
                placeholder="Full Name*"
                className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 text-sm font-semibold text-slate-900 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-[#ffbd59] focus:bg-white focus:ring-2 focus:ring-[#ffbd59]/20"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />

              <input
                type="tel"
                required
                placeholder="Phone*"
                className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 text-sm font-semibold text-slate-900 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-[#ffbd59] focus:bg-white focus:ring-2 focus:ring-[#ffbd59]/20"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>

            <input
              type="email"
              required
              placeholder="Email*"
              className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 text-sm font-semibold text-slate-900 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-[#ffbd59] focus:bg-white focus:ring-2 focus:ring-[#ffbd59]/20"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />

            <div className="relative">
              <select
                required
                className="h-12 w-full appearance-none rounded-xl border border-slate-200 bg-slate-50/50 px-4 text-sm font-semibold text-slate-900 outline-none transition-all duration-300 focus:border-[#ffbd59] focus:bg-white focus:ring-2 focus:ring-[#ffbd59]/20"
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
              >
                <option value="" disabled>Select Services *</option>
                <option value="Affiliate Marketing">Affiliate Marketing</option>
                <option value="Performance Marketing">Performance Marketing</option>
                <option value="SEO Service">SEO Service</option>
                <option value="Social Media Marketing">Social Media Marketing</option>
                <option value="Web Development">Web Development</option>
                <option value="App Development">App Development</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-slate-400">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>

            <textarea
              rows={4}
              placeholder="Message"
              className="w-full rounded-xl border border-slate-200 bg-slate-50/50 p-4 text-sm font-semibold text-slate-900 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-[#ffbd59] focus:bg-white focus:ring-2 focus:ring-[#ffbd59]/20 resize-none"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />

            <button
              type="submit"
              disabled={loading}
              className="group relative flex h-12 w-full items-center justify-center overflow-hidden rounded-xl bg-[#ffbd59] px-6 font-bold text-black shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl disabled:opacity-50"
            >
              <span className="relative z-10 flex items-center gap-2">
                {loading ? "Sending..." : "Send Message"}
              </span>
              <div className="absolute inset-0 translate-y-full bg-black transition-transform duration-300 group-hover:translate-y-0"></div>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

