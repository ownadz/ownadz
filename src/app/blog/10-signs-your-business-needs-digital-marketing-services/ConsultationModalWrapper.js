"use client";

import { useState } from "react";
import ConsultationModal from "@/components/common/ConsultationModal";

export default function ConsultationModalWrapper({ variant = "primary", className = "" }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const baseStyles =
    "inline-flex items-center justify-center font-bold text-sm tracking-wider uppercase px-6 py-3 rounded-xl shadow-md transition-all active:scale-[0.98]";

  const variants = {
    primary: `${baseStyles} bg-[#ffbd59] hover:bg-black text-black hover:text-[#ffbd59] border border-[#ffbd59] hover:border-black shadow-md hover:shadow-lg`,
    secondary: `${baseStyles} bg-slate-900 hover:bg-[#ffbd59] text-white hover:text-black border border-slate-900 hover:border-[#ffbd59] shadow-md hover:shadow-lg`,
    outline: `${baseStyles} bg-transparent hover:bg-[#ffbd59] text-white hover:text-black border border-white/30 hover:border-[#ffbd59]`,
    dark: `${baseStyles} bg-[#121212] hover:bg-[#ffbd59] text-[#ffbd59] hover:text-black border border-[#ffbd59]/30 hover:border-[#ffbd59]`,
  };

  return (
    <>
      <button
        type="button"
        onClick={openModal}
        className={`${variants[variant] || variants.primary} ${className}`}
      >
        Book Free Consultation
      </button>

      {/* Modal rendered at page root level via portal positioning */}
      <ConsultationModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}

