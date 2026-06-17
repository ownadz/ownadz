"use client";

import { useState } from "react";
import { createPost } from "@/services/postService";
import { uploadImage } from "@/services/storageService";


export default function CreatePostPage() {
  const [faqOpen, setFaqOpen] = useState(false);
  const [card3Open, setCard3Open] = useState(false);
  const [card2Open, setCard2Open] = useState(false);
  const [blogOpen, setBlogOpen] = useState(true);
  const [activeTab, setActiveTab] = useState("page");
const [status, setStatus] = useState("draft");
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");

  const [seoTitle, setSeoTitle] = useState("");
  const [seoDescription, setSeoDescription] = useState("");
  const [focusKeyword, setFocusKeyword] = useState("");

  const [image, setImage] = useState(null);

  const [blog_breadcomes1, setBlogBreadcomes1] = useState("");
const [blog_breadcomeslink1, setBlogBreadcomeslink1] = useState("");

const [blog_breadcomes2, setBlogBreadcomes2] = useState("");
const [blog_breadcomeslink2, setBlogBreadcomeslink2] = useState("");

const [blog_breadcomes3, setBlogBreadcomes3] = useState("");

const [blog_Heading, setBlogHeading] = useState("");
const [blog_publish, setBlogPublish] = useState("");
const [blog_date, setBlogDate] = useState("");

const [blog_image, setBlogImage] = useState(null);

const [blog_des, setBlogDes] = useState("");

const [blog_card_title1, setBlogCardTitle1] = useState("");
const [blog_card_des1, setBlogCardDes1] = useState("");

const [blog_card_number2, setBlogCardNumber2] = useState("");
const [blog_card_title2, setBlogCardTitle2] = useState("");
const [blog_card_des2, setBlogCardDes2] = useState("");
const [blog_card_subtitle2, setBlogCardSubtitle2] = useState("");

const [blog_card_list21, setBlogCardList21] = useState("");
const [blog_card_list22, setBlogCardList22] = useState("");
const [blog_card_list23, setBlogCardList23] = useState("");
const [blog_card_list24, setBlogCardList24] = useState("");
const [blog_card_list25, setBlogCardList25] = useState("");

const [blog_card_number3, setBlogCardNumber3] = useState("");
const [blog_card_title3, setBlogCardTitle3] = useState("");
const [blog_card_des3, setBlogCardDes3] = useState("");
const [blog_card_subtitle3, setBlogCardSubtitle3] = useState("");

const [blog_card_list31, setBlogCardList31] = useState("");
const [blog_card_list32, setBlogCardList32] = useState("");
const [blog_card_list33, setBlogCardList33] = useState("");
const [blog_card_list34, setBlogCardList34] = useState("");
const [blog_faq_main_title, setBlogFaqMainTitle] = useState("");

const [blog_faq_title1, setBlogFaqTitle1] = useState("");
const [blog_faq_des1, setBlogFaqDes1] = useState("");

const [blog_faq_title2, setBlogFaqTitle2] = useState("");
const [blog_faq_des2, setBlogFaqDes2] = useState("");

const [blog_faq_title3, setBlogFaqTitle3] = useState("");
const [blog_faq_des3, setBlogFaqDes3] = useState("");

const [blog_faq_title4, setBlogFaqTitle4] = useState("");
const [blog_faq_des4, setBlogFaqDes4] = useState("");

const [blog_faq_title5, setBlogFaqTitle5] = useState("");
const [blog_faq_des5, setBlogFaqDes5] = useState("");

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
   const finalDate =
  blog_date || new Date().toISOString().split("T")[0];
    let blogImageId = "";

if (blog_image) {
  const uploadedFile = await uploadImage(blog_image);
  blogImageId = uploadedFile.$id;
}

    await createPost({
      title,
      slug,

      seoTitle,
      seoDescription,
      focusKeyword,

      blog_breadcomes1,
      blog_breadcomeslink1,
      blog_breadcomes2,
      blog_breadcomeslink2,
      blog_breadcomes3,

      blog_Heading,
      blog_publish,

    
  blog_date: finalDate,

  blog_image: blogImageId,

      blog_des,

      status,
      blog_card_title1,
blog_card_des1,
blog_card_number2,
blog_card_title2,
blog_card_des2,
blog_card_subtitle2,
blog_card_list21,
blog_card_list22,
blog_card_list23,
blog_card_list24,
blog_card_list25,
blog_faq_main_title,
blog_faq_title1,
blog_faq_des1,
blog_faq_title2,
blog_faq_des2,
blog_faq_title3,
blog_faq_des3,
blog_faq_title4,
blog_faq_des4,
blog_faq_title5,
blog_faq_des5,
    });

    alert("Post Created Successfully");
    await fetch("/api/revalidate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: "/admin/posts" }),
    });
  } catch (error) {
    console.error(error);
    alert(error.message);
  }
};

  return (
   <div className="p-6 max-w-6xl mx-auto">
  <h1 className="text-3xl font-bold mb-8">
    Create Post
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
<>
      <div className="border border-slate-200 rounded-2xl overflow-hidden bg-dark shadow-sm">

  <button
    type="button"
    onClick={() => setBlogOpen(!blogOpen)}
    className="w-full flex items-center justify-between px-6 py-5 bg-black text-white"
  >
    <div className="text-left">
      <h2 className="text-xl font-bold">
        Blog Content Section
      </h2>

      <p className="text-sm text-slate-300 mt-1">
        Manage Blog Content
      </p>
    </div>

    <span className="text-2xl font-bold">
      {blogOpen ? "−" : "+"}
    </span>
  </button>

  {blogOpen && (

    <div className="p-6 space-y-8">

      {/* Breadcrumbs */}

      <div className="space-y-4">

        <h3 className="text-lg font-semibold border-b pb-2">
          Breadcrumbs
        </h3>

        <div className="grid md:grid-cols-2 gap-5">

          <input
            value={blog_breadcomes1}
            onChange={(e) =>
              setBlogBreadcomes1(e.target.value)
            }
            placeholder="Breadcrumb 1"
            className="w-full border p-3 rounded-xl"
          />

          <input
            value={blog_breadcomeslink1}
            onChange={(e) =>
              setBlogBreadcomeslink1(e.target.value)
            }
            placeholder="Breadcrumb Link 1"
            className="w-full border p-3 rounded-xl"
          />

          <input
            value={blog_breadcomes2}
            onChange={(e) =>
              setBlogBreadcomes2(e.target.value)
            }
            placeholder="Breadcrumb 2"
            className="w-full border p-3 rounded-xl"
          />

          <input
            value={blog_breadcomeslink2}
            onChange={(e) =>
              setBlogBreadcomeslink2(e.target.value)
            }
            placeholder="Breadcrumb Link 2"
            className="w-full border p-3 rounded-xl"
          />

          <input
            value={blog_breadcomes3}
            onChange={(e) =>
              setBlogBreadcomes3(e.target.value)
            }
            placeholder="Breadcrumb 3"
            className="w-full border p-3 rounded-xl"
          />

        </div>

      </div>

      {/* Blog Info */}

      <div className="space-y-4">

        <h3 className="text-lg font-semibold border-b pb-2">
          Blog Information
        </h3>

        <input
          value={blog_Heading}
          onChange={(e) =>
            setBlogHeading(e.target.value)
          }
          placeholder="Blog Heading"
          className="w-full border p-3 rounded-xl"
        />

        <input
          value={blog_publish}
          onChange={(e) =>
            setBlogPublish(e.target.value)
          }
          placeholder="Published By"
          className="w-full border p-3 rounded-xl"
        />

        <input
          type="date"
          value={blog_date}
          onChange={(e) =>
            setBlogDate(e.target.value)
          }
          className="w-full border p-3 rounded-xl"
        />

      </div>

      {/* Blog Image */}

      <div className="space-y-4">

        <h3 className="text-lg font-semibold border-b pb-2">
          Blog Image
        </h3>

        <input
          type="file"
          accept="image/*"
          onChange={(e) =>
            setBlogImage(e.target.files[0])
          }
          className="w-full border p-3 rounded-xl"
        />

      </div>

      {/* Description */}

      <div className="space-y-4">

        <h3 className="text-lg font-semibold border-b pb-2">
          Blog Description
        </h3>

        <textarea
          value={blog_des}
          onChange={(e) =>
            setBlogDes(e.target.value)
          }
          placeholder="Blog Description"
          className="w-full border p-3 rounded-xl min-h-[250px]"
        />

      </div>

      <div className="space-y-4">

  <h3 className="text-lg font-semibold border-b pb-2">
    Blog Card Section
  </h3>

  <div className="border rounded-xl p-4 space-y-3">

    <input
      type="text"
      value={blog_card_title1}
      onChange={(e) =>
        setBlogCardTitle1(e.target.value)
      }
      placeholder="Card Title"
      className="w-full border p-3 rounded-xl"
    />

    <textarea
      value={blog_card_des1}
      onChange={(e) =>
        setBlogCardDes1(e.target.value)
      }
      placeholder="Card Description"
      className="w-full border p-3 rounded-xl min-h-[200px]"
    />

  </div>

</div>

    </div>

  )}


</div>


  <div className="border border-slate-200 rounded-2xl overflow-hidden bg-dark shadow-sm">

  <button
    type="button"
    onClick={() => setCard2Open(!card2Open)}
    className="w-full flex items-center justify-between px-6 py-5 bg-black text-white"
  >
    <div className="text-left">

      <h2 className="text-xl font-bold">
        Blog Card 2 Section
      </h2>

      <p className="text-sm text-slate-300 mt-1">
        Manage Blog Card 2 Content
      </p>

    </div>

    <span className="text-2xl font-bold">
      {card2Open ? "−" : "+"}
    </span>

  </button>

  {card2Open && (

    <div className="p-6 space-y-4">

      <input
        type="text"
        value={blog_card_number2}
        onChange={(e) =>
          setBlogCardNumber2(e.target.value)
        }
        placeholder="Card Number"
        className="w-full border p-3 rounded-xl"
      />

      <input
        type="text"
        value={blog_card_title2}
        onChange={(e) =>
          setBlogCardTitle2(e.target.value)
        }
        placeholder="Card Title"
        className="w-full border p-3 rounded-xl"
      />

      <textarea
        value={blog_card_des2}
        onChange={(e) =>
          setBlogCardDes2(e.target.value)
        }
        placeholder="Card Description"
        className="w-full border p-3 rounded-xl min-h-[180px]"
      />

      <input
        type="text"
        value={blog_card_subtitle2}
        onChange={(e) =>
          setBlogCardSubtitle2(e.target.value)
        }
        placeholder="Card Subtitle"
        className="w-full border p-3 rounded-xl"
      />

      <div className="grid md:grid-cols-2 gap-4">

        <input
          value={blog_card_list21}
          onChange={(e) =>
            setBlogCardList21(e.target.value)
          }
          placeholder="List Item 1"
          className="w-full border p-3 rounded-xl"
        />

        <input
          value={blog_card_list22}
          onChange={(e) =>
            setBlogCardList22(e.target.value)
          }
          placeholder="List Item 2"
          className="w-full border p-3 rounded-xl"
        />

        <input
          value={blog_card_list23}
          onChange={(e) =>
            setBlogCardList23(e.target.value)
          }
          placeholder="List Item 3"
          className="w-full border p-3 rounded-xl"
        />

        <input
          value={blog_card_list24}
          onChange={(e) =>
            setBlogCardList24(e.target.value)
          }
          placeholder="List Item 4"
          className="w-full border p-3 rounded-xl"
        />

        <input
          value={blog_card_list25}
          onChange={(e) =>
            setBlogCardList25(e.target.value)
          }
          placeholder="List Item 5"
          className="w-full border p-3 rounded-xl"
        />

      </div>

    </div>

  )}

</div>

<div className="border border-slate-200 rounded-2xl overflow-hidden bg-dark shadow-sm">

  <button
    type="button"
    onClick={() => setCard3Open(!card3Open)}
    className="w-full flex items-center justify-between px-6 py-5 bg-black text-white"
  >
    <div className="text-left">

      <h2 className="text-xl font-bold">
        Blog Card 3 Section
      </h2>

      <p className="text-sm text-slate-300 mt-1">
        Manage Blog Card 3 Content
      </p>

    </div>

    <span className="text-2xl font-bold">
      {card3Open ? "−" : "+"}
    </span>

  </button>

  {card3Open && (

    <div className="p-6 space-y-4">

      <input
        type="text"
        value={blog_card_number3}
        onChange={(e) =>
          setBlogCardNumber3(e.target.value)
        }
        placeholder="Card Number"
        className="w-full border p-3 rounded-xl"
      />

      <input
        type="text"
        value={blog_card_title3}
        onChange={(e) =>
          setBlogCardTitle3(e.target.value)
        }
        placeholder="Card Title"
        className="w-full border p-3 rounded-xl"
      />

      <textarea
        value={blog_card_des3}
        onChange={(e) =>
          setBlogCardDes3(e.target.value)
        }
        placeholder="Card Description"
        className="w-full border p-3 rounded-xl min-h-[180px]"
      />

      <input
        type="text"
        value={blog_card_subtitle3}
        onChange={(e) =>
          setBlogCardSubtitle3(e.target.value)
        }
        placeholder="Card Subtitle"
        className="w-full border p-3 rounded-xl"
      />

      <div className="grid md:grid-cols-2 gap-4">

        <input
          value={blog_card_list31}
          onChange={(e) =>
            setBlogCardList31(e.target.value)
          }
          placeholder="List Item 1"
          className="w-full border p-3 rounded-xl"
        />

        <input
          value={blog_card_list32}
          onChange={(e) =>
            setBlogCardList32(e.target.value)
          }
          placeholder="List Item 2"
          className="w-full border p-3 rounded-xl"
        />

        <input
          value={blog_card_list33}
          onChange={(e) =>
            setBlogCardList33(e.target.value)
          }
          placeholder="List Item 3"
          className="w-full border p-3 rounded-xl"
        />

        <input
          value={blog_card_list34}
          onChange={(e) =>
            setBlogCardList34(e.target.value)
          }
          placeholder="List Item 4"
          className="w-full border p-3 rounded-xl"
        />

      </div>

    </div>

  )}

</div>

<div className="border border-slate-200 rounded-2xl overflow-hidden bg-dark shadow-sm">

  <button
    type="button"
    onClick={() => setFaqOpen(!faqOpen)}
    className="w-full flex items-center justify-between px-6 py-5 bg-black text-white"
  >
    <div className="text-left">

      <h2 className="text-xl font-bold">
        Blog FAQ Section
      </h2>

      <p className="text-sm text-slate-300 mt-1">
        Manage Blog FAQ Content
      </p>

    </div>

    <span className="text-2xl font-bold">
      {faqOpen ? "−" : "+"}
    </span>

  </button>

  {faqOpen && (

    <div className="p-6 space-y-8">

      {/* Main Title */}

      <div className="space-y-4">

        <h3 className="text-lg font-semibold border-b pb-2">
          FAQ Heading
        </h3>

        <input
          type="text"
          value={blog_faq_main_title}
          onChange={(e) =>
            setBlogFaqMainTitle(e.target.value)
          }
          placeholder="FAQ Main Title"
          className="w-full border p-3 rounded-xl"
        />

      </div>

      {/* FAQ Items */}

      <div className="space-y-4">

        <h3 className="text-lg font-semibold border-b pb-2">
          FAQ Questions & Answers
        </h3>

        <div className="grid gap-5">

          {/* FAQ 1 */}
          <div className="border rounded-xl p-5 space-y-3">

            <input
              value={blog_faq_title1}
              onChange={(e) =>
                setBlogFaqTitle1(e.target.value)
              }
              placeholder="Question 1"
              className="w-full border p-3 rounded-xl"
            />

            <textarea
              value={blog_faq_des1}
              onChange={(e) =>
                setBlogFaqDes1(e.target.value)
              }
              placeholder="Answer 1"
              className="w-full border p-3 rounded-xl min-h-[120px]"
            />

          </div>

          {/* FAQ 2 */}
          <div className="border rounded-xl p-5 space-y-3">

            <input
              value={blog_faq_title2}
              onChange={(e) =>
                setBlogFaqTitle2(e.target.value)
              }
              placeholder="Question 2"
              className="w-full border p-3 rounded-xl"
            />

            <textarea
              value={blog_faq_des2}
              onChange={(e) =>
                setBlogFaqDes2(e.target.value)
              }
              placeholder="Answer 2"
              className="w-full border p-3 rounded-xl min-h-[120px]"
            />

          </div>

          {/* FAQ 3 */}
          <div className="border rounded-xl p-5 space-y-3">

            <input
              value={blog_faq_title3}
              onChange={(e) =>
                setBlogFaqTitle3(e.target.value)
              }
              placeholder="Question 3"
              className="w-full border p-3 rounded-xl"
            />

            <textarea
              value={blog_faq_des3}
              onChange={(e) =>
                setBlogFaqDes3(e.target.value)
              }
              placeholder="Answer 3"
              className="w-full border p-3 rounded-xl min-h-[120px]"
            />

          </div>

          {/* FAQ 4 */}
          <div className="border rounded-xl p-5 space-y-3">

            <input
              value={blog_faq_title4}
              onChange={(e) =>
                setBlogFaqTitle4(e.target.value)
              }
              placeholder="Question 4"
              className="w-full border p-3 rounded-xl"
            />

            <textarea
              value={blog_faq_des4}
              onChange={(e) =>
                setBlogFaqDes4(e.target.value)
              }
              placeholder="Answer 4"
              className="w-full border p-3 rounded-xl min-h-[120px]"
            />

          </div>

          {/* FAQ 5 */}
          <div className="border rounded-xl p-5 space-y-3">

            <input
              value={blog_faq_title5}
              onChange={(e) =>
                setBlogFaqTitle5(e.target.value)
              }
              placeholder="Question 5"
              className="w-full border p-3 rounded-xl"
            />

            <textarea
              value={blog_faq_des5}
              onChange={(e) =>
                setBlogFaqDes5(e.target.value)
              }
              placeholder="Answer 5"
              className="w-full border p-3 rounded-xl min-h-[120px]"
            />

          </div>

        </div>

      </div>

    </div>

  )}

</div>

</>

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
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border p-3 rounded-xl"
        />

        <input
          type="text"
          placeholder="Slug"
          value={slug}
          onChange={(e) => setSlug(e.target.value)}
          className="w-full border p-3 rounded-xl"
        />

        <input
          type="text"
          placeholder="SEO Title"
          value={seoTitle}
          onChange={(e) => setSeoTitle(e.target.value)}
          className="w-full border p-3 rounded-xl"
        />

        <textarea
          placeholder="SEO Description"
          value={seoDescription}
          onChange={(e) =>
            setSeoDescription(e.target.value)
          }
          className="w-full border p-3 rounded-xl min-h-[120px]"
        />

        <input
          type="text"
          placeholder="Focus Keyword"
          value={focusKeyword}
          onChange={(e) =>
            setFocusKeyword(e.target.value)
          }
          className="w-full border p-3 rounded-xl"
        />

        <select
          value={status}
          onChange={(e) =>
            setStatus(e.target.value)
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
        Create Post
      </button>

    </div>

  </form>

</div>
  );
}