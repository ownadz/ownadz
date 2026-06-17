"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createService } from "@/services/serviceService";
import { uploadImage } from "@/services/storageService";

export default function CreateServicePage() {

  const [activeTab, setActiveTab] = useState("page");
const [bannerOpen, setBannerOpen] = useState(true);
const [aboutOpen, setAboutOpen] = useState(false);
const [whyChooseOpen, setWhyChooseOpen] =
  useState(false);
  const [faqOpen, setFaqOpen] = useState(false);

  const [successOpen, setSuccessOpen] = useState(false);
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [content, setContent] = useState("");

  const [image, setImage] = useState(null);

  const [seoTitle, setSeoTitle] = useState("");
  const [seoDescription, setSeoDescription] = useState("");
  const [status, setStatus] = useState("published");


const [service_banner_img, setServiceBannerImg] =
  useState(null);

const [service_banner_alt, setServiceBannerAlt] =
  useState("");

const [service_banner_img_title,
  setServiceBannerImgTitle] =
  useState("");

const [service_banner_title,
  setServiceBannerTitle] =
  useState("");

const [service_banner_breadcome1,
  setServiceBannerBreadcome1] =
  useState("");

const [service_banner_breadcomelink1,
  setServiceBannerBreadcomeLink1] =
  useState("");

const [service_banner_breadcome2,
  setServiceBannerBreadcome2] =
  useState("");

const [service_banner_breadcomelink2,
  setServiceBannerBreadcomeLink2] =
  useState("");

const [service_banner_breadcome3,
  setServiceBannerBreadcome3] =
  useState("");

const [service_banner_breadcomelink3,
  setServiceBannerBreadcomeLink3] =
  useState("");

const [service_about_title, setServiceAboutTitle] =
  useState("");

const [service_about_para1, setServiceAboutPara1] =
  useState("");

const [Service_about_para2, setServiceAboutPara2] =
  useState("");

const [Service_about_para3, setServiceAboutPara3] =
  useState("");

const [service_about_para4, setServiceAboutPara4] =
  useState("");

const [service_about_para5, setServiceAboutPara5] =
  useState("");

const [service_about_card_image1, setServiceAboutCardImage1] =
  useState(null);

const [service_about_cardtitle1, setServiceAboutCardTitle1] =
  useState("");

const [Service_about_carddes1, setServiceAboutCardDes1] =
  useState("");

const [service_about_card_image2, setServiceAboutCardImage2] =
  useState(null);

const [service_about_cardtitle2, setServiceAboutCardTitle2] =
  useState("");

const [Service_about_carddes2, setServiceAboutCardDes2] =
  useState("");

const [service_about_card_image3, setServiceAboutCardImage3] =
  useState(null);

const [service_about_cardtitle3, setServiceAboutCardTitle3] =
  useState("");

  const [service_whychoose_title, setServiceWhyChooseTitle] =
  useState("");

const [service_whychoose_des, setServiceWhyChooseDes] =
  useState("");

const [service_whychoose_cardtitle1, setServiceWhyChooseCardTitle1] =
  useState("");

const [service_whychoose_carddes1, setServiceWhyChooseCardDes1] =
  useState("");

const [service_whychoose_cardtitle2, setServiceWhyChooseCardTitle2] =
  useState("");

const [service_whychoose_carddes2, setServiceWhyChooseCardDes2] =
  useState("");

const [service_whychoose_cardtitle3, setServiceWhyChooseCardTitle3] =
  useState("");

const [service_whychoose_carddes3, setServiceWhyChooseCardDes3] =
  useState("");

const [service_whychoose_cardtitle4, setServiceWhyChooseCardTitle4] =
  useState("");

const [service_whychoose_carddes4, setServiceWhyChooseCardDes4] =
  useState("");

const [service_whychoose_cardtitle5, setServiceWhyChooseCardTitle5] =
  useState("");

const [service_whychoose_carddes5, setServiceWhyChooseCardDes5] =
  useState("");

const [service_whychoose_cardtitle6, setServiceWhyChooseCardTitle6] =
  useState("");

const [service_whychoose_carddes6, setServiceWhyChooseCardDes6] =
  useState("");

const [service_whychoose_cardtitle7, setServiceWhyChooseCardTitle7] =
  useState("");

const [service_whychoose_carddes7, setServiceWhyChooseCardDes7] =
  useState("");

const [service_whychoose_cardtitle8, setServiceWhyChooseCardTitle8] =
  useState("");

const [service_whychoose_carddes8, setServiceWhyChooseCardDes8] =
  useState("");

  const [service_success_title, setServiceSuccessTitle] =
  useState("");

const [service_success_des, setServiceSuccessDes] =
  useState("");

const [service_success_card1, setServiceSuccessCard1] =
  useState("");

const [service_success_des1, setServiceSuccessDes1] =
  useState("");

const [service_success_card2, setServiceSuccessCard2] =
  useState("");

const [service_success_des2, setServiceSuccessDes2] =
  useState("");

const [service_success_card3, setServiceSuccessCard3] =
  useState("");

const [service_success_des3, setServiceSuccessDes3] =
  useState("");

const [service_success_card4, setServiceSuccessCard4] =
  useState("");

const [service_success_des4, setServiceSuccessDes4] =
  useState("");

  const [service_faq_badge, setServiceFaqBadge] =
  useState("");

const [service_faq_title, setServiceFaqTitle] =
  useState("");

const [service_faq_q1, setServiceFaqQ1] =
  useState("");

const [service_faq_d1, setServiceFaqD1] =
  useState("");

const [service_faq_q2, setServiceFaqQ2] =
  useState("");

const [service_faq_d2, setServiceFaqD2] =
  useState("");

const [service_faq_q3, setServiceFaqQ3] =
  useState("");

const [service_faq_d3, setServiceFaqD3] =
  useState("");

const [service_faq_q4, setServiceFaqQ4] =
  useState("");

const [service_faq_d4, setServiceFaqD4] =
  useState("");

const [service_faq_q5, setServiceFaqQ5] =
  useState("");

const [service_faq_d5, setServiceFaqD5] =
  useState("");

const [service_faq_q6, setServiceFaqQ6] =
  useState("");

const [service_faq_d6, setServiceFaqD6] =
  useState("");

const [service_faq_q7, setServiceFaqQ7] =
  useState("");

const [service_faq_d7, setServiceFaqD7] =
  useState("");

const [service_faq_q8, setServiceFaqQ8] =
  useState("");

const [service_faq_d8, setServiceFaqD8] =
  useState("");


const [Service_about_carddes3, setServiceAboutCardDes3] =
  useState("");
  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    let featuredImageId = "";
    let bannerImageId = "";

    let aboutCardImage1Id = "";
    let aboutCardImage2Id = "";
    let aboutCardImage3Id = "";

    // Featured Image
    if (image) {
      const uploadedFile = await uploadImage(image);
      featuredImageId = uploadedFile.$id;
    }

    // Banner Image
    if (service_banner_img) {
      const uploadedFile = await uploadImage(
        service_banner_img
      );

      bannerImageId = uploadedFile.$id;
    }

    // About Card Image 1
    if (service_about_card_image1) {
      const uploadedFile = await uploadImage(
        service_about_card_image1
      );

      aboutCardImage1Id = uploadedFile.$id;
    }

    // About Card Image 2
    if (service_about_card_image2) {
      const uploadedFile = await uploadImage(
        service_about_card_image2
      );

      aboutCardImage2Id = uploadedFile.$id;
    }

    // About Card Image 3
    if (service_about_card_image3) {
      const uploadedFile = await uploadImage(
        service_about_card_image3
      );

      aboutCardImage3Id = uploadedFile.$id;
    }

    await createService({
      title,
      slug,
      content,
      featuredImage: featuredImageId,

      seoTitle,
      seoDescription,
      status,

      // Banner
      service_banner_img: bannerImageId,
      service_banner_alt,
      service_banner_img_title,

      service_banner_title,

      service_banner_breadcome1,
      service_banner_breadcomelink1,

      service_banner_breadcome2,
      service_banner_breadcomelink2,

      service_banner_breadcome3,
      service_banner_breadcomelink3,

      // About Section
      service_about_title,
      service_about_para1,
      Service_about_para2,
      Service_about_para3,
      service_about_para4,
      service_about_para5,

      service_about_card_image1:
        aboutCardImage1Id,

      service_about_cardtitle1,
      Service_about_carddes1,

      service_about_card_image2:
        aboutCardImage2Id,

      service_about_cardtitle2,
      Service_about_carddes2,

      service_about_card_image3:
        aboutCardImage3Id,

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
    });

    alert("Service Created Successfully");

    await fetch("/api/revalidate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: "/admin/services" }),
    });

    router.push("/admin/services");
  } catch (error) {
    console.error(error);
    alert(error.message);
  }
};

  return (
  <div className="p-6 max-w-6xl mx-auto">

    <h1 className="text-3xl font-bold mb-8">
      Create a New Page
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

          <h2 className="text-xl font-bold">
            SEO Settings
          </h2>

          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) =>
              setTitle(e.target.value)
            }
            className="w-full border p-3 rounded-xl"
          />

          <input
            type="text"
            placeholder="Slug"
            value={slug}
            onChange={(e) =>
              setSlug(e.target.value)
            }
            className="w-full border p-3 rounded-xl"
          />

          <textarea
            placeholder="Content"
            value={content}
            onChange={(e) =>
              setContent(e.target.value)
            }
            className="w-full border p-3 rounded-xl min-h-[180px]"
          />

          <input
            type="text"
            placeholder="SEO Title"
            value={seoTitle}
            onChange={(e) =>
              setSeoTitle(e.target.value)
            }
            className="w-full border p-3 rounded-xl"
          />

          <textarea
            placeholder="SEO Description"
            value={seoDescription}
            onChange={(e) =>
              setSeoDescription(
                e.target.value
              )
            }
            className="w-full border p-3 rounded-xl min-h-[120px]"
          />

          <select
            value={status}
            onChange={(e) =>
              setStatus(
                e.target.value
              )
            }
            className="w-full border p-3 rounded-xl"
          >
            <option value="published">
              Published
            </option>

            <option value="draft">
              Draft
            </option>
          </select>

        </div>

      )}

      {/* SAVE BUTTON */}

      <div className="mt-8">

        <button
          type="submit"
          className="bg-black text-white px-8 py-3 rounded-xl font-semibold"
        >
          Create Service
        </button>

      </div>

    </form>

  </div>
);
}