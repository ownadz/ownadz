"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import {
  updateService,
} from "@/services/serviceService";

import {
  uploadImage,
  getImagePreview,
} from "@/services/storageService";

import TinyEditor from "@/components/editor/TinyEditor";

export default function EditServiceForm({
  service,
}) {

  const [activeTab, setActiveTab] = useState("page");
const [whyChooseOpen, setWhyChooseOpen] =
  useState(false);
  const [faqOpen, setFaqOpen] = useState(false);

const [bannerOpen, setBannerOpen] = useState(true);
const [ourServiceOpen, setOurServiceOpen] = useState(false);

const [aboutOpen, setAboutOpen] = useState(false);
  const [successOpen, setSuccessOpen] = useState(false);
  const [serviceProcessOpen, setServiceProcessOpen] = useState(false);

  const router = useRouter();

  const [title, setTitle] =
    useState(service.title);

  const [slug, setSlug] =
    useState(service.slug);

  const [content, setContent] =
    useState(service.content);

  const [seoTitle, setSeoTitle] =
    useState(service.seoTitle);

  const [seoDescription,
    setSeoDescription] =
    useState(service.seoDescription);

  const [status, setStatus] =
    useState(service.status);

  const [image, setImage] =
    useState(null);

    const [service_banner_alt, setServiceBannerAlt] =
  useState(service?.service_banner_alt || "");

const [service_banner_img_title,
  setServiceBannerImgTitle] =
  useState(service?.service_banner_img_title || "");

const [service_banner_title,
  setServiceBannerTitle] =
  useState(service?.service_banner_title || "");

const [service_banner_breadcome1,
  setServiceBannerBreadcome1] =
  useState(service?.service_banner_breadcome1 || "");

const [service_banner_breadcomelink1,
  setServiceBannerBreadcomeLink1] =
  useState(service?.service_banner_breadcomelink1 || "");

const [service_banner_breadcome2,
  setServiceBannerBreadcome2] =
  useState(service?.service_banner_breadcome2 || "");

const [service_banner_breadcomelink2,
  setServiceBannerBreadcomeLink2] =
  useState(service?.service_banner_breadcomelink2 || "");

const [service_banner_breadcome3,
  setServiceBannerBreadcome3] =
  useState(service?.service_banner_breadcome3 || "");

const [service_banner_breadcomelink3,
  setServiceBannerBreadcomeLink3] =
  useState(service?.service_banner_breadcomelink3 || "");

  const [service_about_title,
  setServiceAboutTitle] =
  useState(service?.service_about_title || "");

const [service_about_para1,
  setServiceAboutPara1] =
  useState(service?.service_about_para1 || "");

const [Service_about_para2,
  setServiceAboutPara2] =
  useState(service?.Service_about_para2 || "");

const [Service_about_para3,
  setServiceAboutPara3] =
  useState(service?.Service_about_para3 || "");

const [service_about_para4,
  setServiceAboutPara4] =
  useState(service?.service_about_para4 || "");

const [service_about_para5,
  setServiceAboutPara5] =
  useState(service?.service_about_para5 || "");

const [service_about_cardtitle1,
  setServiceAboutCardTitle1] =
  useState(service?.service_about_cardtitle1 || "");

const [Service_about_carddes1,
  setServiceAboutCardDes1] =
  useState(service?.Service_about_carddes1 || "");

const [service_about_cardtitle2,
  setServiceAboutCardTitle2] =
  useState(service?.service_about_cardtitle2 || "");

const [Service_about_carddes2,
  setServiceAboutCardDes2] =
  useState(service?.Service_about_carddes2 || "");

const [service_about_cardtitle3,
  setServiceAboutCardTitle3] =
  useState(service?.service_about_cardtitle3 || "");

const [Service_about_carddes3,
  setServiceAboutCardDes3] =
  useState(service?.Service_about_carddes3 || "");

  const [service_banner_img,
  setServiceBannerImg] =
  useState(null);

const [service_about_card_image1,
  setServiceAboutCardImage1] =
  useState(null);

const [service_about_card_image2,
  setServiceAboutCardImage2] =
  useState(null);

const [service_about_card_image3,
  setServiceAboutCardImage3] =
  useState(null);

  const [service_whychoose_title, setServiceWhyChooseTitle] =
  useState(service?.service_whychoose_title || "");

const [service_whychoose_des, setServiceWhyChooseDes] =
  useState(service?.service_whychoose_des || "");

const [service_whychoose_cardtitle1, setServiceWhyChooseCardTitle1] =
  useState(service?.service_whychoose_cardtitle1 || "");

const [service_whychoose_carddes1, setServiceWhyChooseCardDes1] =
  useState(service?.service_whychoose_carddes1 || "");

const [service_whychoose_cardtitle2, setServiceWhyChooseCardTitle2] =
  useState(service?.service_whychoose_cardtitle2 || "");

const [service_whychoose_carddes2, setServiceWhyChooseCardDes2] =
  useState(service?.service_whychoose_carddes2 || "");

const [service_whychoose_cardtitle3, setServiceWhyChooseCardTitle3] =
  useState(service?.service_whychoose_cardtitle3 || "");

const [service_whychoose_carddes3, setServiceWhyChooseCardDes3] =
  useState(service?.service_whychoose_carddes3 || "");

const [service_whychoose_cardtitle4, setServiceWhyChooseCardTitle4] =
  useState(service?.service_whychoose_cardtitle4 || "");

const [service_whychoose_carddes4, setServiceWhyChooseCardDes4] =
  useState(service?.service_whychoose_carddes4 || "");

const [service_whychoose_cardtitle5, setServiceWhyChooseCardTitle5] =
  useState(service?.service_whychoose_cardtitle5 || "");

const [service_whychoose_carddes5, setServiceWhyChooseCardDes5] =
  useState(service?.service_whychoose_carddes5 || "");

const [service_whychoose_cardtitle6, setServiceWhyChooseCardTitle6] =
  useState(service?.service_whychoose_cardtitle6 || "");

const [service_whychoose_carddes6, setServiceWhyChooseCardDes6] =
  useState(service?.service_whychoose_carddes6 || "");

const [service_whychoose_cardtitle7, setServiceWhyChooseCardTitle7] =
  useState(service?.service_whychoose_cardtitle7 || "");

const [service_whychoose_carddes7, setServiceWhyChooseCardDes7] =
  useState(service?.service_whychoose_carddes7 || "");

const [service_whychoose_cardtitle8, setServiceWhyChooseCardTitle8] =
  useState(service?.service_whychoose_cardtitle8 || "");

const [service_whychoose_carddes8, setServiceWhyChooseCardDes8] =
  useState(service?.service_whychoose_carddes8 || "");

  const [service_success_title, setServiceSuccessTitle] =
  useState(service?.service_success_title || "");

const [service_success_des, setServiceSuccessDes] =
  useState(service?.service_success_des || "");

const [service_success_card1, setServiceSuccessCard1] =
  useState(service?.service_success_card1 || "");

const [service_success_des1, setServiceSuccessDes1] =
  useState(service?.service_success_des1 || "");

const [service_success_card2, setServiceSuccessCard2] =
  useState(service?.service_success_card2 || "");

const [service_success_des2, setServiceSuccessDes2] =
  useState(service?.service_success_des2 || "");

const [service_success_card3, setServiceSuccessCard3] =
  useState(service?.service_success_card3 || "");

const [service_success_des3, setServiceSuccessDes3] =
  useState(service?.service_success_des3 || "");

const [service_success_card4, setServiceSuccessCard4] =
  useState(service?.service_success_card4 || "");

  const [service_faq_badge, setServiceFaqBadge] =
  useState(service?.service_faq_badge || "");

const [service_faq_title, setServiceFaqTitle] =
  useState(service?.service_faq_title || "");

const [service_faq_q1, setServiceFaqQ1] =
  useState(service?.service_faq_q1 || "");

const [service_faq_d1, setServiceFaqD1] =
  useState(service?.service_faq_d1 || "");

const [service_faq_q2, setServiceFaqQ2] =
  useState(service?.service_faq_q2 || "");

const [service_faq_d2, setServiceFaqD2] =
  useState(service?.service_faq_d2 || "");

const [service_faq_q3, setServiceFaqQ3] =
  useState(service?.service_faq_q3 || "");

const [service_faq_d3, setServiceFaqD3] =
  useState(service?.service_faq_d3 || "");

const [service_faq_q4, setServiceFaqQ4] =
  useState(service?.service_faq_q4 || "");

const [service_faq_d4, setServiceFaqD4] =
  useState(service?.service_faq_d4 || "");

const [service_faq_q5, setServiceFaqQ5] =
  useState(service?.service_faq_q5 || "");

const [service_faq_d5, setServiceFaqD5] =
  useState(service?.service_faq_d5 || "");

const [service_faq_q6, setServiceFaqQ6] =
  useState(service?.service_faq_q6 || "");

const [service_faq_d6, setServiceFaqD6] =
  useState(service?.service_faq_d6 || "");

const [service_faq_q7, setServiceFaqQ7] =
  useState(service?.service_faq_q7 || "");

const [service_faq_d7, setServiceFaqD7] =
  useState(service?.service_faq_d7 || "");

const [service_faq_q8, setServiceFaqQ8] =
  useState(service?.service_faq_q8 || "");

const [service_faq_d8, setServiceFaqD8] =
  useState(service?.service_faq_d8 || "");

  const [our_service_main_title, setOurServiceMainTitle] = useState(service?.our_service_main_title || "");
const [our_service_main_des, setOurServiceMainDes] = useState(service?.our_service_main_des || "");

const [our_service_list1, setOurServiceList1] = useState(service?.our_service_list1 || "");
const [our_service_list2, setOurServiceList2] = useState(service?.our_service_list2 || "");
const [our_service_list3, setOurServiceList3] = useState(service?.our_service_list3 || "");
const [our_service_list4, setOurServiceList4] = useState(service?.our_service_list4 || "");
const [our_service_list5, setOurServiceList5] = useState(service?.our_service_list5 || "");
const [our_service_list6, setOurServiceList6] = useState(service?.our_service_list6 || "");
const [our_service_list7, setOurServiceList7] = useState(service?.our_service_list7 || "");
const [our_service_list8, setOurServiceList8] = useState(service?.our_service_list8 || "");
const [our_service_list9, setOurServiceList9] = useState(service?.our_service_list9 || "");
const [our_service_list10, setOurServiceList10] = useState(service?.our_service_list10 || "");
const [our_service_list11, setOurServiceList11] = useState(service?.our_service_list11 || "");
const [our_service_list12, setOurServiceList12] = useState(service?.our_service_list12 || "");
const [our_service_list13, setOurServiceList13] = useState(service?.our_service_list13 || "");
const [our_service_list14, setOurServiceList14] = useState(service?.our_service_list14 || "");
const [our_service_list15, setOurServiceList15] = useState(service?.our_service_list15 || "");
const [our_service_list16, setOurServiceList16] = useState(service?.our_service_list16 || "");
const [our_service_list17, setOurServiceList17] = useState(service?.our_service_list17 || "");
const [our_service_list18, setOurServiceList18] = useState(service?.our_service_list18 || "");
const [our_service_list19, setOurServiceList19] = useState(service?.our_service_list19 || "");
const [our_service_list20, setOurServiceList20] = useState(service?.our_service_list20 || "");

const [service_canonical, setServiceCanonical] = useState(service?.service_canonical || "");
const [service_og_title, setServiceOgTitle] = useState(service?.service_og_title || "");
const [service_og_description, setServiceOgDescription] = useState(service?.service_og_description || "");
const [service_og_type, setServiceOgType] = useState(service?.service_og_type || "");
const [service_og_url, setServiceOgUrl] = useState(service?.service_og_url || "");
const [service_og_site_name, setServiceOgSiteName] = useState(service?.service_og_site_name || "");
const [service_og_image, setServiceOgImage] = useState(null);
const [service_schema, setServiceSchema] = useState(service?.service_schema || "");

const [service_process_title, setServiceProcessTitle] = useState(service?.service_process_title || "");
const [service_process_des, setServiceProcessDes] = useState(service?.service_process_des || "");

const [service_process_title1, setServiceProcessTitle1] = useState(service?.service_process_title1 || "");
const [service_process_des1, setServiceProcessDes1] = useState(service?.service_process_des1 || "");

const [service_process_title2, setServiceProcessTitle2] = useState(service?.service_process_title2 || "");
const [service_process_des2, setServiceProcessDes2] = useState(service?.service_process_des2 || "");

const [service_process_title3, setServiceProcessTitle3] = useState(service?.service_process_title3 || "");
const [service_process_des3, setServiceProcessDes3] = useState(service?.service_process_des3 || "");

const [service_process_title4, setServiceProcessTitle4] = useState(service?.service_process_title4 || "");
const [service_process_des4, setServiceProcessDes4] = useState(service?.service_process_des4 || "");

const [service_success_des4, setServiceSuccessDes4] =
  useState(service?.service_success_des4 || "");
  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

    // Ensure SEO values from SEO tab are actually saved to service document
    // (Previously the SEO tab state exists, but the submit payload might not include all fields correctly)
    // Also ensure we persist latest slug (seo tab allows editing slug)

    let featuredImageId =
      service.featuredImage;


    let bannerImageId =
      service.service_banner_img;

    let cardImage1 =
      service.service_about_card_image1;

    let cardImage2 =
      service.service_about_card_image2;

    let cardImage3 =
      service.service_about_card_image3;

    if (image) {
      const uploaded =
        await uploadImage(image);

      featuredImageId =
        uploaded.$id;
    }

    if (service_banner_img) {
      const uploaded =
        await uploadImage(
          service_banner_img
        );

      bannerImageId =
        uploaded.$id;
    }

    if (service_about_card_image1) {
      const uploaded =
        await uploadImage(
          service_about_card_image1
        );

      cardImage1 =
        uploaded.$id;
    }

    if (service_about_card_image2) {
      const uploaded =
        await uploadImage(
          service_about_card_image2
        );

      cardImage2 =
        uploaded.$id;
    }

    if (service_about_card_image3) {
      const uploaded =
        await uploadImage(
          service_about_card_image3
        );

      cardImage3 =
        uploaded.$id;
    }

    await updateService(
      service.$id,
      {

        title,
        slug,
        content,

        seoTitle,
        seoDescription,
        status,

        featuredImage:
          featuredImageId,

        service_banner_img:
          bannerImageId,

        service_banner_alt,
        service_banner_img_title,
        service_banner_title,

        service_banner_breadcome1,
        service_banner_breadcomelink1,

        service_banner_breadcome2,
        service_banner_breadcomelink2,

        service_banner_breadcome3,
        service_banner_breadcomelink3,

        service_about_title,
        service_about_para1,
        Service_about_para2,
        Service_about_para3,
        service_about_para4,
        service_about_para5,

        service_about_card_image1:
          cardImage1,

        service_about_cardtitle1,
        Service_about_carddes1,

        service_about_card_image2:
          cardImage2,

        service_about_cardtitle2,
        Service_about_carddes2,

        service_about_card_image3:
          cardImage3,

        service_about_cardtitle3,
        Service_about_carddes3,

              service_whychoose_title,
service_whychoose_des,

service_whychoose_cardtitle1,
service_whychoose_carddes1,

service_whychoose_cardtitle2,
service_whychoose_carddes2,

service_whychoose_cardtitle3,
service_whychoose_carddes3,

service_whychoose_cardtitle4,
service_whychoose_carddes4,

service_whychoose_cardtitle5,
service_whychoose_carddes5,

service_whychoose_cardtitle6,
service_whychoose_carddes6,

service_whychoose_cardtitle7,
service_whychoose_carddes7,

service_whychoose_cardtitle8,
service_whychoose_carddes8,
service_success_title,
service_success_des,

service_success_card1,
service_success_des1,

service_success_card2,
service_success_des2,

service_success_card3,
service_success_des3,

service_success_card4,
service_success_des4,

service_faq_badge,
service_faq_title,

service_faq_q1,
service_faq_d1,

service_faq_q2,
service_faq_d2,

service_faq_q3,
service_faq_d3,

service_faq_q4,
service_faq_d4,

service_faq_q5,
service_faq_d5,

service_faq_q6,
service_faq_d6,

service_faq_q7,
service_faq_d7,

service_faq_q8,
service_faq_d8,

our_service_main_title,
our_service_main_des,
our_service_list1,
our_service_list2,
our_service_list3,
our_service_list4,
our_service_list5,
our_service_list6,
our_service_list7,
our_service_list8,
our_service_list9,
our_service_list10,
our_service_list11,
our_service_list12,
our_service_list13,
our_service_list14,
our_service_list15,
our_service_list16,
our_service_list17,
our_service_list18,
our_service_list19,
our_service_list20,

service_canonical,
service_og_title,
service_og_description,
service_og_type,
service_og_url,
service_og_site_name,
service_og_image,
service_schema,

service_process_title,
service_process_des,
service_process_title1,
service_process_des1,
service_process_title2,
service_process_des2,
service_process_title3,
service_process_des3,
service_process_title4,
service_process_des4,
      }
    );

    alert(
      "Service Updated Successfully"
    );

    router.push(
      "/admin/services"
    );

  } catch (error) {

    console.error(error);

    alert(error.message);
  }
};

  return (
     <div className="p-6 max-w-6xl mx-auto">

    <h1 className="text-3xl font-bold mb-8">
      Edit Service Page
    </h1>

    <form onSubmit={handleSubmit}>

      {/* Tabs */}

      <div className="flex gap-3 mb-8">

        <button
          type="button"
          onClick={() => setActiveTab("page")}
          className={`px-6 py-3 rounded-xl font-semibold transition-all ${
            activeTab === "page"
              ? "bg-black text-white"
              : "border border-slate-300"
          }`}
        >
          Page
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("seo")}
          className={`px-6 py-3 rounded-xl font-semibold transition-all ${
            activeTab === "seo"
              ? "bg-black text-white"
              : "border border-slate-300"
          }`}
        >
          SEO
        </button>

      </div>

      {/* PAGE TAB */}

      {activeTab === "page" && (

        <div className="space-y-8">

          <div className="border border-slate-200 rounded-2xl overflow-hidden bg-dark shadow-sm">

            <button
              type="button"
              onClick={() =>
                setBannerOpen(!bannerOpen)
              }
              className="w-full flex items-center justify-between px-6 py-5 bg-black text-white"
            >
              <div className="text-left">

                <h2 className="text-xl font-bold">
                  Service Banner Section
                </h2>

                <p className="text-sm text-slate-300 mt-1">
                  Manage Service Banner Content
                </p>

              </div>

              <span className="text-2xl font-bold">
                {bannerOpen ? "−" : "+"}
              </span>

            </button>

            {bannerOpen && (

              <div className="p-6 space-y-8">

                {/* Banner Image */}

                <div className="space-y-4">

                  <h3 className="text-lg font-semibold border-b pb-2">
                    Banner Image
                  </h3>

                  <input
                    type="file"
                    onChange={(e) =>
                      setServiceBannerImg(
                        e.target.files[0]
                      )
                    }
                    className="w-full border p-3 rounded-xl"
                  />

                  <input
                    type="text"
                    value={service_banner_alt}
                    onChange={(e) =>
                      setServiceBannerAlt(
                        e.target.value
                      )
                    }
                    placeholder="Banner Alt"
                    className="w-full border p-3 rounded-xl"
                  />

                  <input
                    type="text"
                    value={service_banner_img_title}
                    onChange={(e) =>
                      setServiceBannerImgTitle(
                        e.target.value
                      )
                    }
                    placeholder="Banner Image Title"
                    className="w-full border p-3 rounded-xl"
                  />

                </div>

                {/* Banner Content */}

                <div className="space-y-4">

                  <h3 className="text-lg font-semibold border-b pb-2">
                    Banner Content
                  </h3>

                  <input
                    type="text"
                    value={service_banner_title}
                    onChange={(e) =>
                      setServiceBannerTitle(
                        e.target.value
                      )
                    }
                    placeholder="Banner Title"
                    className="w-full border p-3 rounded-xl"
                  />

                </div>

                {/* Breadcrumbs */}

                <div className="space-y-4">

                  <h3 className="text-lg font-semibold border-b pb-2">
                    Breadcrumbs
                  </h3>

                  <div className="grid md:grid-cols-3 gap-5">

                    <div className="border rounded-xl p-4 space-y-3">

                      <input
                        value={service_banner_breadcome1}
                        onChange={(e) =>
                          setServiceBannerBreadcome1(
                            e.target.value
                          )
                        }
                        placeholder="Breadcrumb 1"
                        className="w-full border p-3 rounded-xl"
                      />

                      <input
                        value={service_banner_breadcomelink1}
                        onChange={(e) =>
                          setServiceBannerBreadcomeLink1(
                            e.target.value
                          )
                        }
                        placeholder="Link 1"
                        className="w-full border p-3 rounded-xl"
                      />

                    </div>

                    <div className="border rounded-xl p-4 space-y-3">

                      <input
                        value={service_banner_breadcome2}
                        onChange={(e) =>
                          setServiceBannerBreadcome2(
                            e.target.value
                          )
                        }
                        placeholder="Breadcrumb 2"
                        className="w-full border p-3 rounded-xl"
                      />

                      <input
                        value={service_banner_breadcomelink2}
                        onChange={(e) =>
                          setServiceBannerBreadcomeLink2(
                            e.target.value
                          )
                        }
                        placeholder="Link 2"
                        className="w-full border p-3 rounded-xl"
                      />

                    </div>

                    <div className="border rounded-xl p-4 space-y-3">

                      <input
                        value={service_banner_breadcome3}
                        onChange={(e) =>
                          setServiceBannerBreadcome3(
                            e.target.value
                          )
                        }
                        placeholder="Breadcrumb 3"
                        className="w-full border p-3 rounded-xl"
                      />

                      <input
                        value={service_banner_breadcomelink3}
                        onChange={(e) =>
                          setServiceBannerBreadcomeLink3(
                            e.target.value
                          )
                        }
                        placeholder="Link 3"
                        className="w-full border p-3 rounded-xl"
                      />

                    </div>

                  </div>

                </div>

              </div>

            )}


          </div>

          
          <div className="border border-slate-200 rounded-2xl overflow-hidden bg-dark shadow-sm">

            <button
              type="button"
              onClick={() =>
                setAboutOpen(!aboutOpen)
              }
              className="w-full flex items-center justify-between px-6 py-5 bg-black text-white"
            >
              <div className="text-left">

                <h2 className="text-xl font-bold">
                  About Section
                </h2>

                <p className="text-sm text-slate-300 mt-1">
                  Manage About Banner Content
                </p>

              </div>

              <span className="text-2xl font-bold">
                {aboutOpen ? "−" : "+"}
              </span>

            </button>

           {aboutOpen && (

  <div className="p-6 space-y-8">

    {/* About Content */}

    <div className="space-y-4">

      <h3 className="text-lg font-semibold border-b pb-2">
        About Content
      </h3>

      <input
        type="text"
        value={service_about_title}
        onChange={(e) =>
          setServiceAboutTitle(e.target.value)
        }
        placeholder="About Title"
        className="w-full border p-3 rounded-xl"
      />

      <textarea
        value={service_about_para1}
        onChange={(e) =>
          setServiceAboutPara1(e.target.value)
        }
        placeholder="Paragraph 1"
        className="w-full border p-3 rounded-xl min-h-[120px]"
      />

      <textarea
        value={Service_about_para2}
        onChange={(e) =>
          setServiceAboutPara2(e.target.value)
        }
        placeholder="Paragraph 2"
        className="w-full border p-3 rounded-xl min-h-[120px]"
      />

      <textarea
        value={Service_about_para3}
        onChange={(e) =>
          setServiceAboutPara3(e.target.value)
        }
        placeholder="Paragraph 3"
        className="w-full border p-3 rounded-xl min-h-[120px]"
      />

      <textarea
        value={service_about_para4}
        onChange={(e) =>
          setServiceAboutPara4(e.target.value)
        }
        placeholder="Paragraph 4"
        className="w-full border p-3 rounded-xl min-h-[120px]"
      />

      <textarea
        value={service_about_para5}
        onChange={(e) =>
          setServiceAboutPara5(e.target.value)
        }
        placeholder="Paragraph 5"
        className="w-full border p-3 rounded-xl min-h-[120px]"
      />

    </div>

    {/* About Cards */}

    <div className="space-y-4">

      <h3 className="text-lg font-semibold border-b pb-2">
        About Cards
      </h3>

      <div className="grid md:grid-cols-3 gap-5">

        {/* Card 1 */}
        <div className="border rounded-xl p-4 space-y-3">

          <input
            type="file"
            onChange={(e) =>
              setServiceAboutCardImage1(
                e.target.files[0]
              )
            }
            className="w-full border p-3 rounded-xl"
          />

          <input
            value={service_about_cardtitle1}
            onChange={(e) =>
              setServiceAboutCardTitle1(
                e.target.value
              )
            }
            placeholder="Card 1 Title"
            className="w-full border p-3 rounded-xl"
          />

          <textarea
            value={Service_about_carddes1}
            onChange={(e) =>
              setServiceAboutCardDes1(
                e.target.value
              )
            }
            placeholder="Card 1 Description"
            className="w-full border p-3 rounded-xl min-h-[120px]"
          />

        </div>

        {/* Card 2 */}
        <div className="border rounded-xl p-4 space-y-3">

          <input
            type="file"
            onChange={(e) =>
              setServiceAboutCardImage2(
                e.target.files[0]
              )
            }
            className="w-full border p-3 rounded-xl"
          />

          <input
            value={service_about_cardtitle2}
            onChange={(e) =>
              setServiceAboutCardTitle2(
                e.target.value
              )
            }
            placeholder="Card 2 Title"
            className="w-full border p-3 rounded-xl"
          />

          <textarea
            value={Service_about_carddes2}
            onChange={(e) =>
              setServiceAboutCardDes2(
                e.target.value
              )
            }
            placeholder="Card 2 Description"
            className="w-full border p-3 rounded-xl min-h-[120px]"
          />

        </div>

        {/* Card 3 */}
        <div className="border rounded-xl p-4 space-y-3">

          <input
            type="file"
            onChange={(e) =>
              setServiceAboutCardImage3(
                e.target.files[0]
              )
            }
            className="w-full border p-3 rounded-xl"
          />

          <input
            value={service_about_cardtitle3}
            onChange={(e) =>
              setServiceAboutCardTitle3(
                e.target.value
              )
            }
            placeholder="Card 3 Title"
            className="w-full border p-3 rounded-xl"
          />

          <textarea
            value={Service_about_carddes3}
            onChange={(e) =>
              setServiceAboutCardDes3(
                e.target.value
              )
            }
            placeholder="Card 3 Description"
            className="w-full border p-3 rounded-xl min-h-[120px]"
          />

        </div>

      </div>

    </div>

  </div>

)}


          </div>

              <div className="border border-slate-200 rounded-2xl overflow-hidden bg-dark shadow-sm">

  <button
    type="button"
    onClick={() =>
      setWhyChooseOpen(!whyChooseOpen)
    }
    className="w-full flex items-center justify-between px-6 py-5 bg-black text-white"
  >
    <div className="text-left">

      <h2 className="text-xl font-bold">
        Why Choose Section
      </h2>

      <p className="text-sm text-slate-300 mt-1">
        Manage Why Choose Content
      </p>

    </div>

    <span className="text-2xl font-bold">
      {whyChooseOpen ? "−" : "+"}
    </span>

  </button>

  {whyChooseOpen && (

    <div className="p-6 space-y-8">

      {/* Main Content */}

      <div className="space-y-4">

        <h3 className="text-lg font-semibold border-b pb-2">
          Section Content
        </h3>

        <input
          type="text"
          value={service_whychoose_title}
          onChange={(e) =>
            setServiceWhyChooseTitle(
              e.target.value
            )
          }
          placeholder="Section Title"
          className="w-full border p-3 rounded-xl"
        />

        <textarea
          value={service_whychoose_des}
          onChange={(e) =>
            setServiceWhyChooseDes(
              e.target.value
            )
          }
          placeholder="Section Description"
          className="w-full border p-3 rounded-xl min-h-[150px]"
        />

      </div>

      {/* Cards */}

      <div className="space-y-4">

        <h3 className="text-lg font-semibold border-b pb-2">
          Why Choose Cards
        </h3>

        <div className="grid md:grid-cols-2 gap-5">

          {/* Card 1 */}
          <div className="border rounded-xl p-4 space-y-3">
            <input
              value={service_whychoose_cardtitle1}
              onChange={(e) =>
                setServiceWhyChooseCardTitle1(
                  e.target.value
                )
              }
              placeholder="Card 1 Title"
              className="w-full border p-3 rounded-xl"
            />
            <textarea
              value={service_whychoose_carddes1}
              onChange={(e) =>
                setServiceWhyChooseCardDes1(
                  e.target.value
                )
              }
              placeholder="Card 1 Description"
              className="w-full border p-3 rounded-xl min-h-[120px]"
            />
          </div>

          {/* Card 2 */}
          <div className="border rounded-xl p-4 space-y-3">
            <input
              value={service_whychoose_cardtitle2}
              onChange={(e) =>
                setServiceWhyChooseCardTitle2(
                  e.target.value
                )
              }
              placeholder="Card 2 Title"
              className="w-full border p-3 rounded-xl"
            />
            <textarea
              value={service_whychoose_carddes2}
              onChange={(e) =>
                setServiceWhyChooseCardDes2(
                  e.target.value
                )
              }
              placeholder="Card 2 Description"
              className="w-full border p-3 rounded-xl min-h-[120px]"
            />
          </div>

          {/* Card 3 */}
          <div className="border rounded-xl p-4 space-y-3">
            <input
              value={service_whychoose_cardtitle3}
              onChange={(e) =>
                setServiceWhyChooseCardTitle3(
                  e.target.value
                )
              }
              placeholder="Card 3 Title"
              className="w-full border p-3 rounded-xl"
            />
            <textarea
              value={service_whychoose_carddes3}
              onChange={(e) =>
                setServiceWhyChooseCardDes3(
                  e.target.value
                )
              }
              placeholder="Card 3 Description"
              className="w-full border p-3 rounded-xl min-h-[120px]"
            />
          </div>

          {/* Card 4 */}
          <div className="border rounded-xl p-4 space-y-3">
            <input
              value={service_whychoose_cardtitle4}
              onChange={(e) =>
                setServiceWhyChooseCardTitle4(
                  e.target.value
                )
              }
              placeholder="Card 4 Title"
              className="w-full border p-3 rounded-xl"
            />
            <textarea
              value={service_whychoose_carddes4}
              onChange={(e) =>
                setServiceWhyChooseCardDes4(
                  e.target.value
                )
              }
              placeholder="Card 4 Description"
              className="w-full border p-3 rounded-xl min-h-[120px]"
            />
          </div>

          {/* Card 5 */}
          <div className="border rounded-xl p-4 space-y-3">
            <input
              value={service_whychoose_cardtitle5}
              onChange={(e) =>
                setServiceWhyChooseCardTitle5(
                  e.target.value
                )
              }
              placeholder="Card 5 Title"
              className="w-full border p-3 rounded-xl"
            />
            <textarea
              value={service_whychoose_carddes5}
              onChange={(e) =>
                setServiceWhyChooseCardDes5(
                  e.target.value
                )
              }
              placeholder="Card 5 Description"
              className="w-full border p-3 rounded-xl min-h-[120px]"
            />
          </div>

          {/* Card 6 */}
          <div className="border rounded-xl p-4 space-y-3">
            <input
              value={service_whychoose_cardtitle6}
              onChange={(e) =>
                setServiceWhyChooseCardTitle6(
                  e.target.value
                )
              }
              placeholder="Card 6 Title"
              className="w-full border p-3 rounded-xl"
            />
            <textarea
              value={service_whychoose_carddes6}
              onChange={(e) =>
                setServiceWhyChooseCardDes6(
                  e.target.value
                )
              }
              placeholder="Card 6 Description"
              className="w-full border p-3 rounded-xl min-h-[120px]"
            />
          </div>

          {/* Card 7 */}
          <div className="border rounded-xl p-4 space-y-3">
            <input
              value={service_whychoose_cardtitle7}
              onChange={(e) =>
                setServiceWhyChooseCardTitle7(
                  e.target.value
                )
              }
              placeholder="Card 7 Title"
              className="w-full border p-3 rounded-xl"
            />
            <textarea
              value={service_whychoose_carddes7}
              onChange={(e) =>
                setServiceWhyChooseCardDes7(
                  e.target.value
                )
              }
              placeholder="Card 7 Description"
              className="w-full border p-3 rounded-xl min-h-[120px]"
            />
          </div>

          {/* Card 8 */}
          <div className="border rounded-xl p-4 space-y-3">
            <input
              value={service_whychoose_cardtitle8}
              onChange={(e) =>
                setServiceWhyChooseCardTitle8(
                  e.target.value
                )
              }
              placeholder="Card 8 Title"
              className="w-full border p-3 rounded-xl"
            />
            <textarea
              value={service_whychoose_carddes8}
              onChange={(e) =>
                setServiceWhyChooseCardDes8(
                  e.target.value
                )
              }
              placeholder="Card 8 Description"
              className="w-full border p-3 rounded-xl min-h-[120px]"
            />
          </div>

        </div>

      </div>

    </div>

  )}

</div>



        <div className="border border-slate-200 rounded-2xl overflow-hidden bg-dark shadow-sm">
  <button
    type="button"
    onClick={() => setOurServiceOpen(!ourServiceOpen)}
    className="w-full flex items-center justify-between px-6 py-5 bg-black text-white"
  >
    <div className="text-left">
      <h2 className="text-xl font-bold">Our Service Section</h2>
      <p className="text-sm text-slate-300 mt-1">
        Manage Our Service Content
      </p>
    </div>

    <span className="text-2xl font-bold">
      {ourServiceOpen ? "−" : "+"}
    </span>
  </button>

  {ourServiceOpen && (
    <div className="p-6 space-y-8">
      {/* Main Content */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold border-b pb-2">
          Our Service Content
        </h3>

        <input
          type="text"
          value={our_service_main_title}
          onChange={(e) => setOurServiceMainTitle(e.target.value)}
          placeholder="Our Service Main Title"
          className="w-full border p-3 rounded-xl"
        />

        <textarea
          value={our_service_main_des}
          onChange={(e) => setOurServiceMainDes(e.target.value)}
          placeholder="Our Service Main Description"
          className="w-full border p-3 rounded-xl min-h-[120px]"
        />
      </div>

      {/* Service List */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold border-b pb-2">
          Our Service List
        </h3>

        <div className="grid md:grid-cols-2 gap-4">
          <input
            type="text"
            value={our_service_list1}
            onChange={(e) => setOurServiceList1(e.target.value)}
            placeholder="Service List 1"
            className="w-full border p-3 rounded-xl"
          />
          <input
            type="text"
            value={our_service_list2}
            onChange={(e) => setOurServiceList2(e.target.value)}
            placeholder="Service List 2"
            className="w-full border p-3 rounded-xl"
          />
          <input
            type="text"
            value={our_service_list3}
            onChange={(e) => setOurServiceList3(e.target.value)}
            placeholder="Service List 3"
            className="w-full border p-3 rounded-xl"
          />
          <input
            type="text"
            value={our_service_list4}
            onChange={(e) => setOurServiceList4(e.target.value)}
            placeholder="Service List 4"
            className="w-full border p-3 rounded-xl"
          />
          <input
            type="text"
            value={our_service_list5}
            onChange={(e) => setOurServiceList5(e.target.value)}
            placeholder="Service List 5"
            className="w-full border p-3 rounded-xl"
          />
          <input
            type="text"
            value={our_service_list6}
            onChange={(e) => setOurServiceList6(e.target.value)}
            placeholder="Service List 6"
            className="w-full border p-3 rounded-xl"
          />
          <input
            type="text"
            value={our_service_list7}
            onChange={(e) => setOurServiceList7(e.target.value)}
            placeholder="Service List 7"
            className="w-full border p-3 rounded-xl"
          />
          <input
            type="text"
            value={our_service_list8}
            onChange={(e) => setOurServiceList8(e.target.value)}
            placeholder="Service List 8"
            className="w-full border p-3 rounded-xl"
          />
          <input
            type="text"
            value={our_service_list9}
            onChange={(e) => setOurServiceList9(e.target.value)}
            placeholder="Service List 9"
            className="w-full border p-3 rounded-xl"
          />
          <input
            type="text"
            value={our_service_list10}
            onChange={(e) => setOurServiceList10(e.target.value)}
            placeholder="Service List 10"
            className="w-full border p-3 rounded-xl"
          />
          <input
            type="text"
            value={our_service_list11}
            onChange={(e) => setOurServiceList11(e.target.value)}
            placeholder="Service List 11"
            className="w-full border p-3 rounded-xl"
          />
          <input
            type="text"
            value={our_service_list12}
            onChange={(e) => setOurServiceList12(e.target.value)}
            placeholder="Service List 12"
            className="w-full border p-3 rounded-xl"
          />
          <input
            type="text"
            value={our_service_list13}
            onChange={(e) => setOurServiceList13(e.target.value)}
            placeholder="Service List 13"
            className="w-full border p-3 rounded-xl"
          />
          <input
            type="text"
            value={our_service_list14}
            onChange={(e) => setOurServiceList14(e.target.value)}
            placeholder="Service List 14"
            className="w-full border p-3 rounded-xl"
          />
          <input
            type="text"
            value={our_service_list15}
            onChange={(e) => setOurServiceList15(e.target.value)}
            placeholder="Service List 15"
            className="w-full border p-3 rounded-xl"
          />
          <input
            type="text"
            value={our_service_list16}
            onChange={(e) => setOurServiceList16(e.target.value)}
            placeholder="Service List 16"
            className="w-full border p-3 rounded-xl"
          />
          <input
            type="text"
            value={our_service_list17}
            onChange={(e) => setOurServiceList17(e.target.value)}
            placeholder="Service List 17"
            className="w-full border p-3 rounded-xl"
          />
          <input
            type="text"
            value={our_service_list18}
            onChange={(e) => setOurServiceList18(e.target.value)}
            placeholder="Service List 18"
            className="w-full border p-3 rounded-xl"
          />
          <input
            type="text"
            value={our_service_list19}
            onChange={(e) => setOurServiceList19(e.target.value)}
            placeholder="Service List 19"
            className="w-full border p-3 rounded-xl"
          />
          <input
            type="text"
            value={our_service_list20}
            onChange={(e) => setOurServiceList20(e.target.value)}
            placeholder="Service List 20"
            className="w-full border p-3 rounded-xl"
          />
        </div>
      </div>
    </div>
  )}
</div>



<div className="border border-slate-200 rounded-2xl overflow-hidden bg-dark shadow-sm">

  <button
    type="button"
    onClick={() =>
      setSuccessOpen(!successOpen)
    }
    className="w-full flex items-center justify-between px-6 py-5 bg-black text-white"
  >
    <div className="text-left">

      <h2 className="text-xl font-bold">
        Success Section
      </h2>

      <p className="text-sm text-slate-300 mt-1">
        Manage Success Content
      </p>

    </div>

    <span className="text-2xl font-bold">
      {successOpen ? "−" : "+"}
    </span>

  </button>

  {successOpen && (

    <div className="p-6 space-y-8">

      {/* Main Content */}

      <div className="space-y-4">

        <h3 className="text-lg font-semibold border-b pb-2">
          Section Content
        </h3>

        <input
          type="text"
          value={service_success_title}
          onChange={(e) =>
            setServiceSuccessTitle(
              e.target.value
            )
          }
          placeholder="Section Title"
          className="w-full border p-3 rounded-xl"
        />

        <textarea
          value={service_success_des}
          onChange={(e) =>
            setServiceSuccessDes(
              e.target.value
            )
          }
          placeholder="Section Description"
          className="w-full border p-3 rounded-xl min-h-[150px]"
        />

      </div>

      {/* Success Cards */}

      <div className="space-y-4">

        <h3 className="text-lg font-semibold border-b pb-2">
          Success Cards
        </h3>

        <div className="grid md:grid-cols-2 gap-5">

          {/* Card 1 */}
          <div className="border rounded-xl p-4 space-y-3">

            <input
              value={service_success_card1}
              onChange={(e) =>
                setServiceSuccessCard1(
                  e.target.value
                )
              }
              placeholder="Card 1 Value"
              className="w-full border p-3 rounded-xl"
            />

            <textarea
              value={service_success_des1}
              onChange={(e) =>
                setServiceSuccessDes1(
                  e.target.value
                )
              }
              placeholder="Card 1 Description"
              className="w-full border p-3 rounded-xl min-h-[120px]"
            />

          </div>

          {/* Card 2 */}
          <div className="border rounded-xl p-4 space-y-3">

            <input
              value={service_success_card2}
              onChange={(e) =>
                setServiceSuccessCard2(
                  e.target.value
                )
              }
              placeholder="Card 2 Value"
              className="w-full border p-3 rounded-xl"
            />

            <textarea
              value={service_success_des2}
              onChange={(e) =>
                setServiceSuccessDes2(
                  e.target.value
                )
              }
              placeholder="Card 2 Description"
              className="w-full border p-3 rounded-xl min-h-[120px]"
            />

          </div>

          {/* Card 3 */}
          <div className="border rounded-xl p-4 space-y-3">

            <input
              value={service_success_card3}
              onChange={(e) =>
                setServiceSuccessCard3(
                  e.target.value
                )
              }
              placeholder="Card 3 Value"
              className="w-full border p-3 rounded-xl"
            />

            <textarea
              value={service_success_des3}
              onChange={(e) =>
                setServiceSuccessDes3(
                  e.target.value
                )
              }
              placeholder="Card 3 Description"
              className="w-full border p-3 rounded-xl min-h-[120px]"
            />

          </div>

          {/* Card 4 */}
          <div className="border rounded-xl p-4 space-y-3">

            <input
              value={service_success_card4}
              onChange={(e) =>
                setServiceSuccessCard4(
                  e.target.value
                )
              }
              placeholder="Card 4 Value"
              className="w-full border p-3 rounded-xl"
            />

            <textarea
              value={service_success_des4}
              onChange={(e) =>
                setServiceSuccessDes4(
                  e.target.value
                )
              }
              placeholder="Card 4 Description"
              className="w-full border p-3 rounded-xl min-h-[120px]"
            />

          </div>

        </div>

      </div>

    </div>

  )}

</div>


<div className="border border-slate-200 rounded-2xl overflow-hidden bg-dark shadow-sm">
  <button
    type="button"
    onClick={() => setServiceProcessOpen(!serviceProcessOpen)}
    className="w-full flex items-center justify-between px-6 py-5 bg-black text-white"
  >
    <div className="text-left">
      <h2 className="text-xl font-bold">Service Process Section</h2>
      <p className="text-sm text-slate-300 mt-1">
        Manage Service Process Content
      </p>
    </div>

    <span className="text-2xl font-bold">
      {serviceProcessOpen ? "−" : "+"}
    </span>
  </button>

  {serviceProcessOpen && (
    <div className="p-6 space-y-8">
      {/* Main Content */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold border-b pb-2">
          Process Section Content
        </h3>

        <div className="space-y-2">
          <label className="block text-sm font-semibold text-white">
            Process Main Title
          </label>
          <input
            type="text"
            value={service_process_title}
            onChange={(e) => setServiceProcessTitle(e.target.value)}
            placeholder="Process Main Title"
            className="w-full border p-3 rounded-xl"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-semibold text-white">
            Process Main Description
          </label>
          <textarea
            value={service_process_des}
            onChange={(e) => setServiceProcessDes(e.target.value)}
            placeholder="Process Main Description"
            className="w-full border p-3 rounded-xl min-h-[120px]"
          />
        </div>
      </div>

      {/* Process Steps */}
      <div className="space-y-6">
        <h3 className="text-lg font-semibold border-b pb-2">
          Process Steps
        </h3>

        <div className="grid gap-6">
          {/* Step 1 */}
          <div className="border border-slate-700 rounded-2xl p-5 space-y-4">
            <h4 className="text-lg font-semibold text-white">Step 1</h4>

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-white">
                Step 1 Title
              </label>
              <input
                type="text"
                value={service_process_title1}
                onChange={(e) => setServiceProcessTitle1(e.target.value)}
                placeholder="Step 1 Title"
                className="w-full border p-3 rounded-xl"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-white">
                Step 1 Description
              </label>
              <textarea
                value={service_process_des1}
                onChange={(e) => setServiceProcessDes1(e.target.value)}
                placeholder="Step 1 Description"
                className="w-full border p-3 rounded-xl min-h-[120px]"
              />
            </div>
          </div>

          {/* Step 2 */}
          <div className="border border-slate-700 rounded-2xl p-5 space-y-4">
            <h4 className="text-lg font-semibold text-white">Step 2</h4>

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-white">
                Step 2 Title
              </label>
              <input
                type="text"
                value={service_process_title2}
                onChange={(e) => setServiceProcessTitle2(e.target.value)}
                placeholder="Step 2 Title"
                className="w-full border p-3 rounded-xl"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-white">
                Step 2 Description
              </label>
              <textarea
                value={service_process_des2}
                onChange={(e) => setServiceProcessDes2(e.target.value)}
                placeholder="Step 2 Description"
                className="w-full border p-3 rounded-xl min-h-[120px]"
              />
            </div>
          </div>

          {/* Step 3 */}
          <div className="border border-slate-700 rounded-2xl p-5 space-y-4">
            <h4 className="text-lg font-semibold text-white">Step 3</h4>

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-white">
                Step 3 Title
              </label>
              <input
                type="text"
                value={service_process_title3}
                onChange={(e) => setServiceProcessTitle3(e.target.value)}
                placeholder="Step 3 Title"
                className="w-full border p-3 rounded-xl"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-white">
                Step 3 Description
              </label>
              <textarea
                value={service_process_des3}
                onChange={(e) => setServiceProcessDes3(e.target.value)}
                placeholder="Step 3 Description"
                className="w-full border p-3 rounded-xl min-h-[120px]"
              />
            </div>
          </div>

          {/* Step 4 */}
          <div className="border border-slate-700 rounded-2xl p-5 space-y-4">
            <h4 className="text-lg font-semibold text-white">Step 4</h4>

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-white">
                Step 4 Title
              </label>
              <input
                type="text"
                value={service_process_title4}
                onChange={(e) => setServiceProcessTitle4(e.target.value)}
                placeholder="Step 4 Title"
                className="w-full border p-3 rounded-xl"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-white">
                Step 4 Description
              </label>
              <textarea
                value={service_process_des4}
                onChange={(e) => setServiceProcessDes4(e.target.value)}
                placeholder="Step 4 Description"
                className="w-full border p-3 rounded-xl min-h-[120px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )}
</div>



<div className="border border-slate-200 rounded-2xl overflow-hidden bg-dark shadow-sm">

  <button
    type="button"
    onClick={() =>
      setFaqOpen(!faqOpen)
    }
    className="w-full flex items-center justify-between px-6 py-5 bg-black text-white"
  >
    <div className="text-left">

      <h2 className="text-xl font-bold">
        FAQ Section
      </h2>

      <p className="text-sm text-slate-300 mt-1">
        Manage FAQ Content
      </p>

    </div>

    <span className="text-2xl font-bold">
      {faqOpen ? "−" : "+"}
    </span>

  </button>

  {faqOpen && (

    <div className="p-6 space-y-8">

      {/* Main Content */}

      <div className="space-y-4">

        <h3 className="text-lg font-semibold border-b pb-2">
          Section Content
        </h3>

        <input
          type="text"
          value={service_faq_badge}
          onChange={(e) =>
            setServiceFaqBadge(
              e.target.value
            )
          }
          placeholder="FAQ Badge"
          className="w-full border p-3 rounded-xl"
        />

        <input
          type="text"
          value={service_faq_title}
          onChange={(e) =>
            setServiceFaqTitle(
              e.target.value
            )
          }
          placeholder="FAQ Title"
          className="w-full border p-3 rounded-xl"
        />

      </div>

      {/* FAQ Items */}

      <div className="space-y-4">

        <h3 className="text-lg font-semibold border-b pb-2">
          FAQ Questions
        </h3>

        <div className="grid md:grid-cols-2 gap-5">

          {/* FAQ 1 */}
          <div className="border rounded-xl p-4 space-y-3">
            <input
              value={service_faq_q1}
              onChange={(e) =>
                setServiceFaqQ1(e.target.value)
              }
              placeholder="Question 1"
              className="w-full border p-3 rounded-xl"
            />
            <textarea
              value={service_faq_d1}
              onChange={(e) =>
                setServiceFaqD1(e.target.value)
              }
              placeholder="Answer 1"
              className="w-full border p-3 rounded-xl min-h-[120px]"
            />
          </div>

          {/* FAQ 2 */}
          <div className="border rounded-xl p-4 space-y-3">
            <input
              value={service_faq_q2}
              onChange={(e) =>
                setServiceFaqQ2(e.target.value)
              }
              placeholder="Question 2"
              className="w-full border p-3 rounded-xl"
            />
            <textarea
              value={service_faq_d2}
              onChange={(e) =>
                setServiceFaqD2(e.target.value)
              }
              placeholder="Answer 2"
              className="w-full border p-3 rounded-xl min-h-[120px]"
            />
          </div>

          {/* FAQ 3 */}
          <div className="border rounded-xl p-4 space-y-3">
            <input
              value={service_faq_q3}
              onChange={(e) =>
                setServiceFaqQ3(e.target.value)
              }
              placeholder="Question 3"
              className="w-full border p-3 rounded-xl"
            />
            <textarea
              value={service_faq_d3}
              onChange={(e) =>
                setServiceFaqD3(e.target.value)
              }
              placeholder="Answer 3"
              className="w-full border p-3 rounded-xl min-h-[120px]"
            />
          </div>

          {/* FAQ 4 */}
          <div className="border rounded-xl p-4 space-y-3">
            <input
              value={service_faq_q4}
              onChange={(e) =>
                setServiceFaqQ4(e.target.value)
              }
              placeholder="Question 4"
              className="w-full border p-3 rounded-xl"
            />
            <textarea
              value={service_faq_d4}
              onChange={(e) =>
                setServiceFaqD4(e.target.value)
              }
              placeholder="Answer 4"
              className="w-full border p-3 rounded-xl min-h-[120px]"
            />
          </div>

          {/* FAQ 5 */}
          <div className="border rounded-xl p-4 space-y-3">
            <input
              value={service_faq_q5}
              onChange={(e) =>
                setServiceFaqQ5(e.target.value)
              }
              placeholder="Question 5"
              className="w-full border p-3 rounded-xl"
            />
            <textarea
              value={service_faq_d5}
              onChange={(e) =>
                setServiceFaqD5(e.target.value)
              }
              placeholder="Answer 5"
              className="w-full border p-3 rounded-xl min-h-[120px]"
            />
          </div>

          {/* FAQ 6 */}
          <div className="border rounded-xl p-4 space-y-3">
            <input
              value={service_faq_q6}
              onChange={(e) =>
                setServiceFaqQ6(e.target.value)
              }
              placeholder="Question 6"
              className="w-full border p-3 rounded-xl"
            />
            <textarea
              value={service_faq_d6}
              onChange={(e) =>
                setServiceFaqD6(e.target.value)
              }
              placeholder="Answer 6"
              className="w-full border p-3 rounded-xl min-h-[120px]"
            />
          </div>

          {/* FAQ 7 */}
          <div className="border rounded-xl p-4 space-y-3">
            <input
              value={service_faq_q7}
              onChange={(e) =>
                setServiceFaqQ7(e.target.value)
              }
              placeholder="Question 7"
              className="w-full border p-3 rounded-xl"
            />
            <textarea
              value={service_faq_d7}
              onChange={(e) =>
                setServiceFaqD7(e.target.value)
              }
              placeholder="Answer 7"
              className="w-full border p-3 rounded-xl min-h-[120px]"
            />
          </div>

          {/* FAQ 8 */}
          <div className="border rounded-xl p-4 space-y-3">
            <input
              value={service_faq_q8}
              onChange={(e) =>
                setServiceFaqQ8(e.target.value)
              }
              placeholder="Question 8"
              className="w-full border p-3 rounded-xl"
            />
            <textarea
              value={service_faq_d8}
              onChange={(e) =>
                setServiceFaqD8(e.target.value)
              }
              placeholder="Answer 8"
              className="w-full border p-3 rounded-xl min-h-[120px]"
            />
          </div>

        </div>

      </div>

    </div>

  )}

</div>
        </div>

      )}

      {/* SEO TAB */}

      {activeTab === "seo" && (

        <div className="space-y-5 border border-slate-200 rounded-2xl p-6 bg-dark shadow-sm">
  <h2 className="text-xl font-bold">SEO Settings</h2>

  {/* Title */}
  <div className="space-y-2">
    <label className="block text-sm font-semibold text-white">
      Title
    </label>
    <input
      type="text"
      placeholder="Title"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      className="w-full border p-3 rounded-xl"
    />
  </div>

  {/* Slug */}
  <div className="space-y-2">
    <label className="block text-sm font-semibold text-white">
      Slug
    </label>
    <input
      type="text"
      placeholder="Slug"
      value={slug}
      onChange={(e) => setSlug(e.target.value)}
      className="w-full border p-3 rounded-xl"
    />
  </div>

  {/* Content */}
  <div className="space-y-2">
    <label className="block text-sm font-semibold text-white">
      Content
    </label>
    <textarea
      placeholder="Content"
      value={content}
      onChange={(e) => setContent(e.target.value)}
      className="w-full border p-3 rounded-xl min-h-[180px]"
    />
  </div>

  {/* SEO Title */}
  <div className="space-y-2">
    <label className="block text-sm font-semibold text-white">
      SEO Title
    </label>
    <input
      type="text"
      placeholder="SEO Title"
      value={seoTitle}
      onChange={(e) => setSeoTitle(e.target.value)}
      className="w-full border p-3 rounded-xl"
    />
  </div>

  {/* SEO Description */}
  <div className="space-y-2">
    <label className="block text-sm font-semibold text-white">
      SEO Description
    </label>
    <textarea
      placeholder="SEO Description"
      value={seoDescription}
      onChange={(e) => setSeoDescription(e.target.value)}
      className="w-full border p-3 rounded-xl min-h-[120px]"
    />
  </div>

  {/* Canonical URL */}
  <div className="space-y-2">
    <label className="block text-sm font-semibold text-white">
      Canonical URL
    </label>
    <input
      type="text"
      value={service_canonical}
      onChange={(e) => setServiceCanonical(e.target.value)}
      placeholder="Canonical URL"
      className="w-full border p-3 rounded-xl"
    />
  </div>

  {/* OG Title */}
  <div className="space-y-2">
    <label className="block text-sm font-semibold text-white">
      OG Title
    </label>
    <input
      type="text"
      value={service_og_title}
      onChange={(e) => setServiceOgTitle(e.target.value)}
      placeholder="OG Title"
      className="w-full border p-3 rounded-xl"
    />
  </div>

  {/* OG Description */}
  <div className="space-y-2">
    <label className="block text-sm font-semibold text-white">
      OG Description
    </label>
    <textarea
      value={service_og_description}
      onChange={(e) => setServiceOgDescription(e.target.value)}
      placeholder="OG Description"
      className="w-full border p-3 rounded-xl min-h-[120px]"
    />
  </div>

  {/* OG Type */}
  <div className="space-y-2">
    <label className="block text-sm font-semibold text-white">
      OG Type
    </label>
    <input
      type="text"
      value={service_og_type}
      onChange={(e) => setServiceOgType(e.target.value)}
      placeholder="OG Type (example: website)"
      className="w-full border p-3 rounded-xl"
    />
  </div>

  {/* OG URL */}
  <div className="space-y-2">
    <label className="block text-sm font-semibold text-white">
      OG URL
    </label>
    <input
      type="text"
      value={service_og_url}
      onChange={(e) => setServiceOgUrl(e.target.value)}
      placeholder="OG URL"
      className="w-full border p-3 rounded-xl"
    />
  </div>

  {/* OG Site Name */}
  <div className="space-y-2">
    <label className="block text-sm font-semibold text-white">
      OG Site Name
    </label>
    <input
      type="text"
      value={service_og_site_name}
      onChange={(e) => setServiceOgSiteName(e.target.value)}
      placeholder="OG Site Name"
      className="w-full border p-3 rounded-xl"
    />
  </div>

  {/* OG Image */}
  <div className="space-y-2">
    <label className="block text-sm font-semibold text-white">
      OG Image
    </label>
    <input
      type="text"
      placeholder="OG Image Link"
      onChange={(e) => setServiceOgImage(e.target.value)}
      className="w-full border p-3 rounded-xl"
    />
  </div>

  {/* Schema JSON */}
  <div className="space-y-2">
    <label className="block text-sm font-semibold text-white">
      Schema JSON
    </label>
    <textarea
      value={service_schema}
      onChange={(e) => setServiceSchema(e.target.value)}
      placeholder="Schema JSON"
      className="w-full border p-3 rounded-xl min-h-[180px]"
    />
  </div>

  {/* Status */}
  <div className="space-y-2">
    <label className="block text-sm font-semibold text-white">
      Status
    </label>
    <select
      value={status}
      onChange={(e) => setStatus(e.target.value)}
      className="w-full border p-3 rounded-xl"
    >
      <option value="published">Published</option>
      <option value="draft">Draft</option>
    </select>
  </div>
</div>

      )}

      {/* SAVE BUTTON */}

      <div className="mt-8">

        <button
          type="submit"
          className="bg-black text-white px-8 py-3 rounded-xl font-semibold"
        >
          Update Service
        </button>

      </div>

    </form>

  </div>
  );
}