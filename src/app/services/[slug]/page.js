import {
  getServiceBySlug,
} from "@/services/serviceService";

export const dynamic = "force-dynamic";

// Required for `output: 'export'`
// (prevents Next from failing the build for missing static params)
export async function generateStaticParams() {
  return [];
}



import {
  getImagePreview,
} from "@/services/storageService";

import { getHomepage } from "@/services/homepageService";



export async function generateMetadata({
  
  params,
}) {

  const { slug } = await params;

  const service =
    await getServiceBySlug(slug);

  return {
    title:
      service?.seoTitle ||
      service?.title,

    description:
      service?.seoDescription,

    keywords:
      service?.title,
  };
}

export default async function ServiceDetailsPage({
  params,
}) {
      const homepage = await getHomepage();

  const { slug } = await params;

  const service =
    await getServiceBySlug(slug);

  if (!service) {
    return (
      <div className="p-10 text-center">
        Service Not Found
      </div>
    );
  }

  return (
   <>
<section className="ownadz_service_banner relative">

  {/* Banner Background */}

  <div className="relative h-[220px] md:h-[250px] overflow-hidden">

    {service?.service_banner_img && (
      <img
        src={getImagePreview(
          service?.service_banner_img
        )}
        alt={
          service?.service_banner_alt ||
          service?.service_banner_title
        }
        title={
          service?.service_banner_img_title ||
          service?.service_banner_title
        }
        className="absolute inset-0 h-full w-full object-cover"
      />
    )}

    {/* Overlay */}

    <div className="absolute inset-0 bg-[#0a4dbe]/80"></div>

    {/* Content */}

    <div className="relative z-10 flex h-full items-center justify-center px-6">

      <div className="max-w-5xl text-center">

        <h1 className="text-4xl font-black uppercase tracking-wide text-white md:text-6xl lg:text-7xl leading-tight">

          {service?.service_banner_title}

        </h1>

      </div>

    </div>

  </div>

  {/* Breadcrumb Section */}

  <div className="border-b border-black/5 bg-white">

    <div className="mx-auto max-w-7xl px-6 py-5">

      <div className="flex flex-wrap items-center gap-3 text-sm md:text-base">

        {service?.service_banner_breadcome1 && (
          <>
            <a
              href={
                service?.service_banner_breadcomelink1 ||
                "#"
              }
              className="font-medium text-[#0a4dbe] hover:text-black transition"
            >
              {service?.service_banner_breadcome1}
            </a>

            <span className="text-black/40">
              |
            </span>
          </>
        )}

        {service?.service_banner_breadcome2 && (
          <>
            <a
              href={
                service?.service_banner_breadcomelink2 ||
                "#"
              }
              className="font-medium text-[#0a4dbe] hover:text-black transition"
            >
              {service?.service_banner_breadcome2}
            </a>

            <span className="text-black/40">
              |
            </span>
          </>
        )}

        {service?.service_banner_breadcome3 && (
          <span className="font-semibold text-black">
            {service?.service_banner_breadcome3}
          </span>
        )}

      </div>

    </div>

  </div>

</section>


<section className="ownadz_service_about relative overflow-hidden py-20 lg:py-10 bg-white">

  {/* Background Effects */}

  <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-[#ffbd59]/10 blur-3xl"></div>

  <div className="absolute right-0 bottom-0 h-[400px] w-[400px] rounded-full bg-[#2458ff]/5 blur-3xl"></div>

  <div className="ownadz_service_about_container mx-auto max-w-7xl px-6 lg:px-8">

    {/* Heading */}

    <div className="ownadz_service_about_header max-w-5xl">
{/* 
      <span className="ownadz_service_about_badge inline-flex items-center gap-3 text-sm font-bold uppercase tracking-[0.25em] text-[#2458ff]">

        <span className="h-[2px] w-14 bg-[#2458ff]"></span>

        Service Overview

      </span> */}

      <h2 className="ownadz_service_about_title mt-5 text-4xl font-black leading-tight text-black md:text-5xl lg:text-6xl">
        {service?.service_about_title}
      </h2>

    </div>

    {/* Content */}

    <div className="ownadz_service_about_content mt-10 max-w-6xl space-y-4">

      {service?.service_about_para1 && (
        <p className="text-lg leading-8 text-black/75">
          {service?.service_about_para1}
        </p>
      )}

      {service?.Service_about_para2 && (
        <p className="text-lg leading-8 text-black/75">
          {service?.Service_about_para2}
        </p>
      )}

      {service?.Service_about_para3 && (
        <p className="text-lg leading-8 text-black/75">
          {service?.Service_about_para3}
        </p>
      )}

      {service?.service_about_para4 && (
        <p className="text-lg leading-8 text-black/75">
          {service?.service_about_para4}
        </p>
      )}

      {service?.service_about_para5 && (
        <p className="text-lg leading-8 text-black/75">
          {service?.service_about_para5}
        </p>
      )}

    </div>

    {/* Cards */}

    <div className="ownadz_service_about_cards mt-20 grid gap-8 lg:grid-cols-3">

  {/* Card 1 */}
  <div className="ownadz_service_about_card group relative overflow-hidden rounded-[36px] border border-[#ffbd59]/20 bg-white transition-all duration-500 hover:-translate-y-4 hover:shadow-[0_35px_80px_rgba(255,189,89,0.20)]">

    {service?.service_about_card_image1 && (
      <div className="relative overflow-hidden">
        <img
          src={getImagePreview(service?.service_about_card_image1)}
          alt={service?.service_about_cardtitle1}
          className="h-[100px] w-full object-cover transition-all duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>

        <div className="absolute bottom-6 left-6">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#ffbd59] text-xl font-black text-black shadow-lg">
            01
          </div>
        </div>
      </div>
    )}

    <div className="p-8">
      <h3 className="text-3xl font-black leading-tight text-black transition-colors duration-300 group-hover:text-[#ffbd59]">
        {service?.service_about_cardtitle1}
      </h3>

      <p className="mt-5 text-lg leading-8 text-black/70">
        {service?.Service_about_carddes1}
      </p>
    </div>

  </div>

  {/* Card 2 */}
  <div className="ownadz_service_about_card group relative overflow-hidden rounded-[36px] border border-[#ffbd59]/20 bg-white transition-all duration-500 hover:-translate-y-4 hover:shadow-[0_35px_80px_rgba(255,189,89,0.20)]">

    {service?.service_about_card_image2 && (
      <div className="relative overflow-hidden">
        <img
          src={getImagePreview(service?.service_about_card_image2)}
          alt={service?.service_about_cardtitle2}
          className="h-[100px] w-full object-cover transition-all duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>

        <div className="absolute bottom-6 left-6">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#ffbd59] text-xl font-black text-black shadow-lg">
            02
          </div>
        </div>
      </div>
    )}

    <div className="p-8">
      <h3 className="text-3xl font-black leading-tight text-black transition-colors duration-300 group-hover:text-[#ffbd59]">
        {service?.service_about_cardtitle2}
      </h3>

      <p className="mt-5 text-lg leading-8 text-black/70">
        {service?.Service_about_carddes2}
      </p>
    </div>

  </div>

  {/* Card 3 */}
  <div className="ownadz_service_about_card group relative overflow-hidden rounded-[36px] border border-[#ffbd59]/20 bg-white transition-all duration-500 hover:-translate-y-4 hover:shadow-[0_35px_80px_rgba(255,189,89,0.20)]">

    {service?.service_about_card_image3 && (
      <div className="relative overflow-hidden">
        <img
          src={getImagePreview(service?.service_about_card_image3)}
          alt={service?.service_about_cardtitle3}
          className="h-[100px] w-full object-cover transition-all duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>

        <div className="absolute bottom-6 left-6">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#ffbd59] text-xl font-black text-black shadow-lg">
            03
          </div>
        </div>
      </div>
    )}

    <div className="p-8">
      <h3 className="text-3xl font-black leading-tight text-black transition-colors duration-300 group-hover:text-[#ffbd59]">
        {service?.service_about_cardtitle3}
      </h3>

      <p className="mt-5 text-lg leading-8 text-black/70">
        {service?.Service_about_carddes3}
      </p>
    </div>

  </div>

</div>

  </div>

</section>

<section className="ownadz_service_whychoose relative overflow-hidden py-24">

  {/* Background Glow */}

  <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-[#ffbd59]/10 blur-3xl"></div>

  <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-[#ffbd59]/10 blur-3xl"></div>

  <div className="ownadz_service_whychoose_container relative mx-auto max-w-7xl px-6 lg:px-8">

    {/* Header */}

    <div className="ownadz_service_whychoose_header mx-auto max-w-4xl text-center">

      <span className="ownadz_service_whychoose_badge inline-flex rounded-full border border-[#ffbd59]/30 bg-[#ffbd59]/10 px-5 py-2 text-sm font-bold uppercase tracking-[0.2em] text-white">
        Why Choose Us
      </span>

      <h2 className="ownadz_service_whychoose_title mt-6 text-4xl font-black leading-tight text-white md:text-5xl">
        {service?.service_whychoose_title}
      </h2>

      <p className="ownadz_service_whychoose_description mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/70">
        {service?.service_whychoose_des}
      </p>

    </div>

    {/* Cards */}

    <div className="ownadz_service_whychoose_grid mt-20 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">

      {[
        {
          title: service?.service_whychoose_cardtitle1,
          des: service?.service_whychoose_carddes1,
        },
        {
          title: service?.service_whychoose_cardtitle2,
          des: service?.service_whychoose_carddes2,
        },
        {
          title: service?.service_whychoose_cardtitle3,
          des: service?.service_whychoose_carddes3,
        },
        {
          title: service?.service_whychoose_cardtitle4,
          des: service?.service_whychoose_carddes4,
        },
        {
          title: service?.service_whychoose_cardtitle5,
          des: service?.service_whychoose_carddes5,
        },
        {
          title: service?.service_whychoose_cardtitle6,
          des: service?.service_whychoose_carddes6,
        },
        {
          title: service?.service_whychoose_cardtitle7,
          des: service?.service_whychoose_carddes7,
        },
        {
          title: service?.service_whychoose_cardtitle8,
          des: service?.service_whychoose_carddes8,
        },
      ].map((item, index) => (

        <div
          key={index}
          className="ownadz_service_whychoose_card group relative overflow-hidden rounded-[30px] border border-black/5 bg-white p-8 shadow-[0_15px_40px_rgba(0,0,0,0.06)] transition-all duration-500 hover:-translate-y-3 hover:border-[#ffbd59] hover:shadow-[0_25px_70px_rgba(255,189,89,0.18)]"
        >

          {/* Large Number */}

          <span className="absolute right-5 top-3 text-[90px] font-black leading-none text-black/[0.04] transition-all duration-500 group-hover:text-[#ffbd59]/10">
            {String(index + 1).padStart(2, "0")}
          </span>

          {/* Accent Line */}

          <div className="ownadz_service_whychoose_card_line h-1.5 w-14 rounded-full bg-[#ffbd59] transition-all duration-500 group-hover:w-24"></div>

          {/* Content */}

          <h3 className="ownadz_service_whychoose_card_title mt-8 text-2xl font-black leading-tight text-black">
            {item.title}
          </h3>

          <p className="ownadz_service_whychoose_card_des mt-5 leading-8 text-black/70">
            {item.des}
          </p>

          {/* Hover Glow */}

          <div className="absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-[#ffbd59]/10 opacity-0 blur-2xl transition-all duration-500 group-hover:opacity-100"></div>

        </div>

      ))}

    </div>

  </div>

</section>

  
  <section className="ownadz_service_success py-16 md:py-14 bg-white">

  <div className="max-w-7xl mx-auto px-5 lg:px-8">

    {/* Heading */}

    <div className="text-center max-w-4xl mx-auto">


      <h2 className="mt-5 text-3xl md:text-4xl font-bold text-[#0f172a] leading-tight">
        {service.service_success_title}
      </h2>

      <p className="mt-6 text-slate-600 text-base md:text-lg leading-8">
        {service.service_success_des}
      </p>

    </div>

    {/* Metrics */}

    <div className="mt-16 md:mt-10 grid grid-cols-2 lg:grid-cols-4 gap-y-5 lg:gap-y-0">

      {/* Item 1 */}

      <div className="ownadz_service_success_item text-center px-4 lg:border-r border-slate-100 group">

        <h3 className="text-5xl md:text-4xl lg:text-5xl font-black text-[#2563eb] transition-all duration-300 group-hover:scale-110">

          {service.service_success_card1}

        </h3>

        <p className="mt-4 text-[#0f172a] font-semibold text-lg">
          {service.service_success_des1}
        </p>

      </div>

      {/* Item 2 */}

      <div className="ownadz_service_success_item text-center px-4 lg:border-r border-slate-100 group">

        <h3 className="text-5xl md:text-4xl lg:text-5xl font-black text-[#2563eb] transition-all duration-300 group-hover:scale-110">

          {service.service_success_card2}

        </h3>

        <p className="mt-4 text-[#0f172a] font-semibold text-lg">
          {service.service_success_des2}
        </p>

      </div>

      {/* Item 3 */}

      <div className="ownadz_service_success_item text-center px-4 lg:border-r border-slate-100 group">

        <h3 className="text-5xl md:text-4xl lg:text-5xl font-black text-[#2563eb] transition-all duration-300 group-hover:scale-110">

          {service.service_success_card3}

        </h3>

        <p className="mt-4 text-[#0f172a] font-semibold text-lg">
          {service.service_success_des3}
        </p>

      </div>

      {/* Item 4 */}

      <div className="ownadz_service_success_item text-center px-4 group">

        <h3 className="text-5xl md:text-4xl lg:text-5xl font-black text-[#2563eb] transition-all duration-300 group-hover:scale-110">

          {service.service_success_card4}

        </h3>

        <p className="mt-4 text-[#0f172a] font-semibold text-lg">
          {service.service_success_des4}
        </p>

      </div>

    </div>

  </div>

</section>

<section className="ownadz_service_faq py-16 lg:py-24 bg-[#f8fafc]">

  <div className="max-w-7xl mx-auto px-5 lg:px-8">

    <div className="grid lg:grid-cols-12 gap-12 items-start">

      {/* Left Content */}

      <div className="lg:col-span-4 lg:sticky lg:top-24">

        {service.service_faq_badge && (
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-[#ffbd59]/10 text-[#ffbd59] text-sm font-bold uppercase tracking-wider mb-6">
            {service.service_faq_badge}
          </span>
        )}

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0f172a] leading-tight mb-6">
          {service.service_faq_title}
        </h2>

        <p className="text-slate-600 text-lg leading-8">
          Find answers to the most frequently asked questions about our services,
          process, timelines, pricing, and support.
        </p>

        <div className="hidden lg:block mt-10">
          <div className="w-24 h-1 bg-[#ffbd59] rounded-full" />
        </div>

      </div>

      {/* Right FAQ */}

      <div className="lg:col-span-8">

        <div className="space-y-5">

          {/* FAQ 1 */}

          <details className="group bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">

            <summary className="flex items-center justify-between gap-5 cursor-pointer list-none p-6">

              <div className="flex items-center gap-5">

                <div className="w-12 h-12 rounded-full bg-[#ffbd59]/10 flex items-center justify-center text-[#ffbd59] font-bold">
                  01
                </div>

                <h3 className="text-lg font-semibold text-[#0f172a]">
                  {service.service_faq_q1}
                </h3>

              </div>

              <span className="text-3xl text-[#ffbd59] transition duration-300 group-open:rotate-45">
                +
              </span>

            </summary>

            <div className="px-6 pb-6 pl-[88px]">
              <p className="text-slate-600 leading-8">
                {service.service_faq_d1}
              </p>
            </div>

          </details>

          {/* FAQ 2 */}

          <details className="group bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">

            <summary className="flex items-center justify-between gap-5 cursor-pointer list-none p-6">

              <div className="flex items-center gap-5">

                <div className="w-12 h-12 rounded-full bg-[#ffbd59]/10 flex items-center justify-center text-[#ffbd59] font-bold">
                  02
                </div>

                <h3 className="text-lg font-semibold text-[#0f172a]">
                  {service.service_faq_q2}
                </h3>

              </div>

              <span className="text-3xl text-[#ffbd59] transition duration-300 group-open:rotate-45">
                +
              </span>

            </summary>

            <div className="px-6 pb-6 pl-[88px]">
              <p className="text-slate-600 leading-8">
                {service.service_faq_d2}
              </p>
            </div>

          </details>

          {/* FAQ 3 */}

          <details className="group bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">

            <summary className="flex items-center justify-between gap-5 cursor-pointer list-none p-6">

              <div className="flex items-center gap-5">

                <div className="w-12 h-12 rounded-full bg-[#ffbd59]/10 flex items-center justify-center text-[#ffbd59] font-bold">
                  03
                </div>

                <h3 className="text-lg font-semibold text-[#0f172a]">
                  {service.service_faq_q3}
                </h3>

              </div>

              <span className="text-3xl text-[#ffbd59] transition duration-300 group-open:rotate-45">
                +
              </span>

            </summary>

            <div className="px-6 pb-6 pl-[88px]">
              <p className="text-slate-600 leading-8">
                {service.service_faq_d3}
              </p>
            </div>

          </details>

          {/* FAQ 4 */}

          <details className="group bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">

            <summary className="flex items-center justify-between gap-5 cursor-pointer list-none p-6">

              <div className="flex items-center gap-5">

                <div className="w-12 h-12 rounded-full bg-[#ffbd59]/10 flex items-center justify-center text-[#ffbd59] font-bold">
                  04
                </div>

                <h3 className="text-lg font-semibold text-[#0f172a]">
                  {service.service_faq_q4}
                </h3>

              </div>

              <span className="text-3xl text-[#ffbd59] transition duration-300 group-open:rotate-45">
                +
              </span>

            </summary>

            <div className="px-6 pb-6 pl-[88px]">
              <p className="text-slate-600 leading-8">
                {service.service_faq_d4}
              </p>
            </div>

          </details>

          {/* FAQ 5 */}

          <details className="group bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
            <summary className="flex items-center justify-between gap-5 cursor-pointer list-none p-6">
              <div className="flex items-center gap-5">
                <div className="w-12 h-12 rounded-full bg-[#ffbd59]/10 flex items-center justify-center text-[#ffbd59] font-bold">
                  05
                </div>
                <h3 className="text-lg font-semibold text-[#0f172a]">
                  {service.service_faq_q5}
                </h3>
              </div>
              <span className="text-3xl text-[#ffbd59] transition duration-300 group-open:rotate-45">
                +
              </span>
            </summary>
            <div className="px-6 pb-6 pl-[88px]">
              <p className="text-slate-600 leading-8">
                {service.service_faq_d5}
              </p>
            </div>
          </details>

          {/* FAQ 6 */}

          <details className="group bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
            <summary className="flex items-center justify-between gap-5 cursor-pointer list-none p-6">
              <div className="flex items-center gap-5">
                <div className="w-12 h-12 rounded-full bg-[#ffbd59]/10 flex items-center justify-center text-[#ffbd59] font-bold">
                  06
                </div>
                <h3 className="text-lg font-semibold text-[#0f172a]">
                  {service.service_faq_q6}
                </h3>
              </div>
              <span className="text-3xl text-[#ffbd59] transition duration-300 group-open:rotate-45">
                +
              </span>
            </summary>
            <div className="px-6 pb-6 pl-[88px]">
              <p className="text-slate-600 leading-8">
                {service.service_faq_d6}
              </p>
            </div>
          </details>

          {/* FAQ 7 */}

          <details className="group bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
            <summary className="flex items-center justify-between gap-5 cursor-pointer list-none p-6">
              <div className="flex items-center gap-5">
                <div className="w-12 h-12 rounded-full bg-[#ffbd59]/10 flex items-center justify-center text-[#ffbd59] font-bold">
                  07
                </div>
                <h3 className="text-lg font-semibold text-[#0f172a]">
                  {service.service_faq_q7}
                </h3>
              </div>
              <span className="text-3xl text-[#ffbd59] transition duration-300 group-open:rotate-45">
                +
              </span>
            </summary>
            <div className="px-6 pb-6 pl-[88px]">
              <p className="text-slate-600 leading-8">
                {service.service_faq_d7}
              </p>
            </div>
          </details>

          {/* FAQ 8 */}

          <details className="group bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
            <summary className="flex items-center justify-between gap-5 cursor-pointer list-none p-6">
              <div className="flex items-center gap-5">
                <div className="w-12 h-12 rounded-full bg-[#ffbd59]/10 flex items-center justify-center text-[#ffbd59] font-bold">
                  08
                </div>
                <h3 className="text-lg font-semibold text-[#0f172a]">
                  {service.service_faq_q8}
                </h3>
              </div>
              <span className="text-3xl text-[#ffbd59] transition duration-300 group-open:rotate-45">
                +
              </span>
            </summary>
            <div className="px-6 pb-6 pl-[88px]">
              <p className="text-slate-600 leading-8">
                {service.service_faq_d8}
              </p>
            </div>
          </details>

        </div>

      </div>

    </div>

  </div>

</section>

<section className="ownadz_cta relative overflow-hidden py-28">

  {/* Background Glow */}

  <div className="absolute left-0 top-0 h-[450px] w-[450px] rounded-full bg-[#ffbd59]/15 blur-3xl"></div>

  <div className="absolute right-0 bottom-0 h-[400px] w-[400px] rounded-full bg-[#ffbd59]/10 blur-3xl"></div>

  <div className="ownadz_cta_container relative mx-auto max-w-7xl px-6 lg:px-8">

    <div className="ownadz_cta_wrapper relative overflow-hidden rounded-[40px] border border-black/5 bg-white px-8 py-16 shadow-[0_30px_80px_rgba(0,0,0,0.08)] md:px-14 md:py-20">

      {/* Decorative Elements */}

      <div className="absolute left-0 top-0 h-48 w-48 -translate-x-20 -translate-y-20 rounded-full bg-[#ffbd59]/10"></div>

      <div className="absolute right-0 bottom-0 h-56 w-56 translate-x-24 translate-y-24 rounded-full bg-[#ffbd59]/10"></div>

      {/* Content */}

      <div className="ownadz_cta_content relative z-10 mx-auto max-w-4xl text-center">

        {/* <span className="ownadz_cta_badge inline-flex rounded-full border border-[#ffbd59]/30 bg-[#ffbd59]/10 px-5 py-2 text-sm font-bold uppercase tracking-[0.25em] text-black">
          {homepage?.ctaTitle}
        </span> */}

        <h2 className="ownadz_cta_title mt-6 text-4xl font-black leading-tight text-black md:text-5xl lg:text-6xl">
          {homepage?.ctaTitle}
        </h2>

        <p className="ownadz_cta_description mx-auto mt-6 max-w-3xl text-lg leading-8 text-black/70">
          {homepage?.ctaDescription}
        </p>

        {/* Buttons */}

        <div className="ownadz_cta_buttons mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row">

          {/* Primary Button */}

          <a
            href={homepage?.ctabtnlink1 || "#"}
            className="group relative overflow-hidden rounded-2xl bg-black px-10 py-4 font-semibold text-white transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_25px_50px_rgba(0,0,0,0.25)]"
          >
            <span className="relative z-10">
              {homepage?.ctabtn1}
            </span>

            <div className="absolute inset-0 translate-y-full bg-[#ffbd59] transition-transform duration-500 group-hover:translate-y-0"></div>

            <span className="absolute inset-0 z-20 flex items-center justify-center font-semibold text-black opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              {homepage?.ctabtn1}
            </span>
          </a>

          {/* Secondary Button */}

          <a
            href={homepage?.ctabtnlink2 || "#"}
            className="rounded-2xl border-2 border-black bg-white px-10 py-4 font-semibold text-black transition-all duration-500 hover:-translate-y-1 hover:border-[#ffbd59] hover:bg-[#ffbd59] hover:shadow-[0_25px_50px_rgba(255,189,89,0.30)]"
          >
            {homepage?.ctabtn2}
          </a>

        </div>

      </div>

    </div>

  </div>

</section>
</>
  );
}