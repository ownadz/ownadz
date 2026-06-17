"use client";

import { useState } from "react";

import { saveHomepage } from "@/services/homepageService";
import { storage } from "@/lib/appwrite";
import { ID } from "appwrite";
import { uploadFile } from "@/lib/appwrite/uploadFile";

const emptyStr = "";

// Appwrite Configurations for dynamic link generation
const APPWRITE_ENDPOINT = "https://syd.cloud.appwrite.io/v1";
const APPWRITE_PROJECT_ID = "6a1d5b900036ddfccf1f";
const BUCKET_ID = "6a1da6560028fed7b5b8";

export default function HomepageForm({
  homepage,
  faqs,
  services,
  brands,
  features,
  whyChoose,
  results,
  processSteps,
  cta,
  contact,
}) {
  const [activeTab, setActiveTab] = useState("page");

  const [heroOpen, setHeroOpen] = useState(true);
  const [trustedBrandOpen, setTrustedBrandOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);
  const [resultOpen, setResulteOpen] = useState(false);
  const [processOpen, setProcessOpen] = useState(false);
  const [ctaOpen, setCtaOpen] = useState(false);
  const [formOpen, setFormOpen] = useState(false);

  const [saving, setSaving] = useState(false);

  const [home_banner_badge, setHomeBannerBadge] = useState(
    homepage?.home_banner_badge || "",
  );

  const [home_banner_title, setHomeBannerTitle] = useState(
    homepage?.home_banner_title || "",
  );

  const [home_banner_des, setHomeBannerDes] = useState(
    homepage?.home_banner_des || "",
  );
  const [home_banner_btn1, setHomeBannerBtn1] = useState(
    homepage?.home_banner_btn1 || "",
  );

  const [home_banner_btn1link, setHomeBannerBtn1Link] = useState(
    homepage?.home_banner_btn1link || "",
  );

  const [home_banner_btn2, setHomeBannerBtn2] = useState(
    homepage?.home_banner_btn2 || "",
  );

  const [home_banner_btn2link, setHomeBannerBtn2Link] = useState(
    homepage?.home_banner_btn2link || "",
  );
  const [home_banner_cardtitle1, setCardTitle1] = useState(
    homepage?.home_banner_cardtitle1 || "",
  );

  const [home_banner_carddesc1, setCardDesc1] = useState(
    homepage?.home_banner_carddesc1 || "",
  );

  const [home_banner_cardtitle2, setCardTitle2] = useState(
    homepage?.home_banner_cardtitle2 || "",
  );
  const [home_banner_carddesc2, setCardDesc2] = useState(
    homepage?.home_banner_carddesc2 || "",
  );

  const [home_banner_cardtitle3, setCardTitle3] = useState(
    homepage?.home_banner_cardtitle3 || "",
  );
  const [home_banner_carddesc3, setCardDesc3] = useState(
    homepage?.home_banner_carddesc3 || "",
  );

  const [home_banner_cardtitle4, setCardTitle4] = useState(
    homepage?.home_banner_cardtitle4 || "",
  );
  const [home_banner_carddesc4, setCardDesc4] = useState(
    homepage?.home_banner_carddesc4 || "",
  );

  const [home_banner_countnumber1, setCount1] = useState(
    homepage?.home_banner_countnumber1 || "",
  );

  const [home_banner_countdes1, setCountDesc1] = useState(
    homepage?.home_banner_countdes1 || "",
  );

  const [home_banner_countnumber2, setCountNumber2] = useState(
    homepage?.home_banner_countnumber2 || "",
  );

  const [home_banner_countdes2, setCountDes2] = useState(
    homepage?.home_banner_countdes2 || "",
  );

  const [home_banner_countnumber3, setCountNumber3] = useState(
    homepage?.home_banner_countnumber3 || "",
  );

  const [home_banner_countdes3, setCountDes3] = useState(
    homepage?.home_banner_countdes3 || "",
  );

  const [home_banner_countnumber4, setCountNumber4] = useState(
    homepage?.home_banner_countnumber4 || "",
  );

  const [home_banner_countdes4, setCountDes4] = useState(
    homepage?.home_banner_countdes4 || "",
  );

  const updateListItem = (items, setItems, index, field, value) => {
    const next = [...items];
    next[index] = { ...next[index], [field]: value };
    setItems(next);
  };

  const addListItem = (items, setItems, template) => {
    setItems([...items, template]);
  };

  const [home_trusted_badge, setHomeTrustedBadge] = useState(
    homepage?.home_trusted_badge || "",
  );

  const [home_trusted_image1, setHomeTrustedImage1] = useState(
    homepage?.home_trusted_image1 || "",
  );

  const [home_trusted_image2, setHomeTrustedImage2] = useState(
    homepage?.home_trusted_image2 || "",
  );

  const [home_trusted_image3, setHomeTrustedImage3] = useState(
    homepage?.home_trusted_image3 || "",
  );

  const [home_trusted_image4, setHomeTrustedImage4] = useState(
    homepage?.home_trusted_image4 || "",
  );

  const [home_trusted_image5, setHomeTrustedImage5] = useState(
    homepage?.home_trusted_image5 || "",
  );

  const [home_trusted_image6, setHomeTrustedImage6] = useState(
    homepage?.home_trusted_image6 || "",
  );

  const [home_trusted_image1_alt, setHomeTrustedImage1Alt] = useState(
    homepage?.home_trusted_image1_alt || "",
  );

  const [home_trusted_image1_title, setHomeTrustedImage1Title] = useState(
    homepage?.home_trusted_image1_title || "",
  );

  const [home_trusted_image2_alt, setHomeTrustedImage2Alt] = useState(
    homepage?.home_trusted_image2_alt || "",
  );

  const [home_trusted_image2_title, setHomeTrustedImage2Title] = useState(
    homepage?.home_trusted_image2_title || "",
  );

  const [home_trusted_image3_alt, setHomeTrustedImage3Alt] = useState(
    homepage?.home_trusted_image3_alt || "",
  );

  const [home_trusted_image3_title, setHomeTrustedImage3Title] = useState(
    homepage?.home_trusted_image3_title || "",
  );

  const [home_trusted_image4_alt, setHomeTrustedImage4Alt] = useState(
    homepage?.home_trusted_image4_alt || "",
  );

  const [home_trusted_image4_title, setHomeTrustedImage4Title] = useState(
    homepage?.home_trusted_image4_title || "",
  );

  const [home_trusted_image5_alt, setHomeTrustedImage5Alt] = useState(
    homepage?.home_trusted_image5_alt || "",
  );

  const [home_trusted_image5_title, setHomeTrustedImage5Title] = useState(
    homepage?.home_trusted_image5_title || "",
  );

  const [home_trusted_image6_alt, setHomeTrustedImage6Alt] = useState(
    homepage?.home_trusted_image6_alt || "",
  );

  const [home_trusted_image6_title, setHomeTrustedImage6Title] = useState(
    homepage?.home_trusted_image6_title || "",
  );

  const [home_about_badge, setHomeAboutBadge] = useState(
    homepage?.home_about_badge || "",
  );

  const [home_about_title, setHomeAboutTitle] = useState(
    homepage?.home_about_title || "",
  );

  const [home_about_des, setHomeAboutDes] = useState(
    homepage?.home_about_des || "",
  );

  const [home_about_cardtitle1, setHomeAboutCardTitle1] = useState(
    homepage?.home_about_cardtitle1 || "",
  );

  const [home_about_carddesc1, setHomeAboutCardDesc1] = useState(
    homepage?.home_about_carddesc1 || "",
  );

  const [home_about_cardtitle2, setHomeAboutCardTitle2] = useState(
    homepage?.home_about_cardtitle2 || "",
  );

  const [home_about_carddesc2, setHomeAboutCardDesc2] = useState(
    homepage?.home_about_carddesc2 || "",
  );

  const [home_about_why, setHomeAboutWhy] = useState(
    homepage?.home_about_why || "",
  );

  const [home_about_list1, setHomeAboutList1] = useState(
    homepage?.home_about_list1 || "",
  );

  const [home_about_list2, setHomeAboutList2] = useState(
    homepage?.home_about_list2 || "",
  );

  const [home_about_list3, setHomeAboutList3] = useState(
    homepage?.home_about_list3 || "",
  );

  const [home_about_list4, setHomeAboutList4] = useState(
    homepage?.home_about_list4 || "",
  );

  const [home_about_list5, setHomeAboutList5] = useState(
    homepage?.home_about_list5 || "",
  );

  const [home_about_list6, setHomeAboutList6] = useState(
    homepage?.home_about_list6 || "",
  );

  const [home_about_vision, setHomeAboutVision] = useState(
    homepage?.home_about_vision || "",
  );

  const [home_about_vision_des, setHomeAboutVisionDes] = useState(
    homepage?.home_about_vision_des || "",
  );

  const [home_service_badge, setHomeServiceBadge] = useState(
    homepage?.home_service_badge || "",
  );

  const [home_service_title, setHomeServiceTitle] = useState(
    homepage?.home_service_title || "",
  );

  const [home_service_des, setHomeServiceDes] = useState(
    homepage?.home_service_des || "",
  );

  const [home_service_cardnumber, setHomeServiceCardNumber] = useState(
    homepage?.home_service_cardnumber || "",
  );

  const [home_service_card_Title, setHomeServiceCardTitle] = useState(
    homepage?.home_service_card_Title || "",
  );

  const [home_service_card_des, setHomeServiceCardDes] = useState(
    homepage?.home_service_card_des || "",
  );

  const [home_service_cardnumber1, setHomeServiceCardNumber1] = useState(
    homepage?.home_service_cardnumber1 || "",
  );

  const [home_service_card_title1, setHomeServiceCardTitle1] = useState(
    homepage?.home_service_card_title1 || "",
  );

  const [home_service_card_des1, setHomeServiceCardDes1] = useState(
    homepage?.home_service_card_des1 || "",
  );

  const [home_service_cardnumber2, setHomeServiceCardNumber2] = useState(
    homepage?.home_service_cardnumber2 || "",
  );

  const [home_service_card_title2, setHomeServiceCardTitle2] = useState(
    homepage?.home_service_card_title2 || "",
  );

  const [home_service_card_des2, setHomeServiceCardDes2] = useState(
    homepage?.home_service_card_des2 || "",
  );

  const [home_service_cardnumber3, setHomeServiceCardNumber3] = useState(
    homepage?.home_service_cardnumber3 || "",
  );

  const [home_service_card_title3, setHomeServiceCardTitle3] = useState(
    homepage?.home_service_card_title3 || "",
  );

  const [home_service_card_des3, setHomeServiceCardDes3] = useState(
    homepage?.home_service_card_des3 || "",
  );

  const [home_service_cardnumber4, setHomeServiceCardNumber4] = useState(
    homepage?.home_service_cardnumber4 || "",
  );

  const [home_service_card_title4, setHomeServiceCardTitle4] = useState(
    homepage?.home_service_card_title4 || "",
  );

  const [home_service_card_des4, setHomeServiceCardDes4] = useState(
    homepage?.home_service_card_des4 || "",
  );

  const [home_service_cardnumber5, setHomeServiceCardNumber5] = useState(
    homepage?.home_service_cardnumber5 || "",
  );

  const [home_service_card_title5, setHomeServiceCardTitle5] = useState(
    homepage?.home_service_card_title5 || "",
  );

  const [home_service_card_des5, setHomeServiceCardDes5] = useState(
    homepage?.home_service_card_des5 || "",
  );

  const [home_result_badge, setHomeResultBadge] = useState(
    homepage?.home_result_badge || "",
  );
  const [home_result_badgedes, setHomeResultBadgedes] = useState(
    homepage?.home_result_badgedes || "",
  );
  const [home_result_cardtitle, setHomeResultCardTitle] = useState(
    homepage?.home_result_cardtitle || "",
  );
  const [home_result_badgetitle, setHomeBadgeTitle] = useState(
    homepage?.home_result_badgetitle || "",
  );
  const [home_result_carddes, setHomeResultCarddes] = useState(
    homepage?.home_result_carddes || "",
  );
  const [home_result_cardtitle1, setHomeResultCardTitle1] = useState(
    homepage?.home_result_cardtitle1 || "",
  );
  const [home_result_carddes1, setHomeResultCardDes1] = useState(
    homepage?.home_result_carddes1 || "",
  );
  const [home_result_cardtitle2, setHomeResultCardTitle2] = useState(
    homepage?.home_result_cardtitle2 || "",
  );
  const [home_result_carddes2, setHomeResultCardDes2] = useState(
    homepage?.home_result_carddes2 || "",
  );
  const [home_result_cardtitle3, setHomeResultCardTitle3] = useState(
    homepage?.home_result_cardtitle3 || "",
  );
  const [home_result_carddes3, setHomeResultCardDes3] = useState(
    homepage?.home_result_carddes3 || "",
  );

  const [home_process_badge, setHomeProcessBadge] = useState(
    homepage?.home_process_badge || "",
  );

  const [home_process_title, setHomeProcessTitle] = useState(
    homepage?.home_process_title || "",
  );

  const [home_process_des, setHomeProcessDes] = useState(
    homepage?.home_process_des || "",
  );

  const [home_process_cardnumber, setHomeProcessCardNumber] = useState(
    homepage?.home_process_cardnumber || "",
  );

  const [home_process_cardtitle, setHomeProcessCardTitle] = useState(
    homepage?.home_process_cardtitle || "",
  );

  const [home_process_carddes, setHomeProcessCardDes] = useState(
    homepage?.home_process_carddes || "",
  );

  const [home_process_cardnumber1, setHomeProcessCardNumber1] = useState(
    homepage?.home_process_cardnumber1 || "",
  );

  const [home_process_cardtitle1, setHomeProcessCardTitle1] = useState(
    homepage?.home_process_cardtitle1 || "",
  );

  const [home_process_carddes1, setHomeProcessCardDes1] = useState(
    homepage?.home_process_carddes1 || "",
  );

  const [home_process_cardnumber2, setHomeProcessCardNumber2] = useState(
    homepage?.home_process_cardnumber2 || "",
  );

  const [home_process_cardtitle2, setHomeProcessCardTitle2] = useState(
    homepage?.home_process_cardtitle2 || "",
  );

  const [home_process_carddes2, setHomeProcessCardDes2] = useState(
    homepage?.home_process_carddes2 || "",
  );

  const [home_process_cardnumber3, setHomeProcessCardNumber3] = useState(
    homepage?.home_process_cardnumber3 || "",
  );

  const [home_process_cardtitle3, setHomeProcessCardTitle3] = useState(
    homepage?.home_process_cardtitle3 || "",
  );

  const [home_process_carddes3, setHomeProcessCardDes3] = useState(
    homepage?.home_process_carddes3 || "",
  );

  const [ctaTitle, setCtaTitle] = useState(homepage?.ctaTitle || "");

  const [ctaDescription, setCtaDescription] = useState(
    homepage?.ctaDescription || "",
  );

  const [ctabtn1, setCtaBtn1] = useState(homepage?.ctabtn1 || "");

  const [ctabtnlink1, setCtaBtnLink1] = useState(homepage?.ctabtnlink1 || "");

  const [ctabtn2, setCtaBtn2] = useState(homepage?.ctabtn2 || "");

  const [ctabtnlink2, setCtaBtnLink2] = useState(homepage?.ctabtnlink2 || "");

  const [home_contact_badge, setHomeContactBadge] = useState(
    homepage?.home_contact_badge || "",
  );

  const [home_contact_title, setHomeContactTitle] = useState(
    homepage?.home_contact_title || "",
  );

  const [home_contact_des, setHomeContactDes] = useState(
    homepage?.home_contact_des || "",
  );

  const [home_contact_mailtitle, setHomeContactMailTitle] = useState(
    homepage?.home_contact_mailtitle || "",
  );

  const [home_contact_mailaddress, setHomeContactMailAddress] = useState(
    homepage?.home_contact_mailaddress || "",
  );

  const [home_contact_numtitle, setHomeContactNumTitle] = useState(
    homepage?.home_contact_numtitle || "",
  );

  const [home_contact_nummber, setHomeContactNummber] = useState(
    homepage?.home_contact_nummber || "",
  );

  const [home_contact_addtitle, setHomeContactAddTitle] = useState(
    homepage?.home_contact_addtitle || "",
  );

  const [home_contact_address, setHomeContactAddress] = useState(
    homepage?.home_contact_address || "",
  );

  const [home_seo_title, setHomeSeoTitle] = useState(
    homepage?.home_seo_title || "",
  );
  const [home_seo_des, setHomeSeoDes] = useState(
    homepage?.home_seo_des || "",
  );
  const [home_seo_keywords, setHomeSeoKeywords] = useState(
    homepage?.home_seo_keywords || "",
  );
  const [home_seo_canonical, setHomeSeoCanonical] = useState(
    homepage?.home_seo_canonical || "",
  );

  const [home_og_title, setHomeOgTitle] = useState(
    homepage?.home_og_title || ""
  );

  const [home_og_description, setHomeOgDescription] = useState(
    homepage?.home_og_description || ""
  );

  const [home_og_type, setHomeOgType] = useState(
    homepage?.home_og_type || "website"
  );

  const [home_og_url, setHomeOgUrl] = useState(
    homepage?.home_og_url || ""
  );

  const [home_og_site_name, setHomeOgSiteName] = useState(
    homepage?.home_og_site_name || ""
  );

  const [home_og_image, setHomeOgImage] = useState(
    homepage?.home_og_image || ""
  );

  const [home_fav_icon, setHomeFavIcon] = useState(null);
  const [home_favicon_16x16, setHomeFavicon16] = useState(null);
  const [home_favicon_32x32, setHomeFavicon32] = useState(null);
  const [home_favicon_48x48, setHomeFavicon48] = useState(null);
  const [home_apple_touch_icon, setHomeAppleTouchIcon] = useState(null);
  const [home_android_icon_192, setHomeAndroidIcon192] = useState(null);
  const [home_android_icon_512, setHomeAndroidIcon512] = useState(null);

  const resizeImage = (file, width, height) => {
    return new Promise((resolve) => {
      const img = new Image();

      img.onload = () => {
        const canvas = document.createElement("canvas");

        canvas.width = width;
        canvas.height = height;

        const ctx = canvas.getContext("2d");

        ctx.drawImage(img, 0, 0, width, height);

        canvas.toBlob((blob) => {
          const resizedFile = new File(
            [blob],
            `${width}x${height}-${file.name}`,
            {
              type: "image/png",
            }
          );

          resolve(resizedFile);
        }, "image/png");
      };

      img.src = URL.createObjectURL(file);
    });
  };

  const removeItem = async (items, setItems, index, deleteFn) => {
    const item = items[index];
    if (item?.$id && deleteFn) {
      await deleteFn(item.$id);
    }
    const next = [...items];
    next.splice(index, 1);
    setItems(next);
  };

  const uploadTrustedImage = async (file, index) => {
    if (!file) return;

    try {
      const fileUrl = await uploadFile(file);

      switch (index) {
        case 1:
          setHomeTrustedImage1(fileUrl);
          break;

        case 2:
          setHomeTrustedImage2(fileUrl);
          break;

        case 3:
          setHomeTrustedImage3(fileUrl);
          break;

        case 4:
          setHomeTrustedImage4(fileUrl);
          break;

        case 5:
          setHomeTrustedImage5(fileUrl);
          break;

        case 6:
          setHomeTrustedImage6(fileUrl);
          break;
      }
    } catch (error) {
      console.error(error);
      alert("Image upload failed");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);

    try {
      // Keep existing data as fallback URLs so they aren't erased
      let favIconUrl = homepage?.home_fav_icon || "";
      let favicon16Url = homepage?.home_favicon_16x16 || "";
      let favicon32Url = homepage?.home_favicon_32x32 || "";
      let favicon48Url = homepage?.home_favicon_48x48 || "";
      let appleTouchUrl = homepage?.home_apple_touch_icon || "";
      let android192Url = homepage?.home_android_icon_192 || "";
      let android512Url = homepage?.home_android_icon_512 || "";

      // Perform upload and convert storage File ID to complete renderable view URLs
      if (home_fav_icon) {
        const uploaded = await uploadFile(home_fav_icon);
        favIconUrl = `${APPWRITE_ENDPOINT}/storage/buckets/${BUCKET_ID}/files/${uploaded.$id}/view?project=${APPWRITE_PROJECT_ID}`;
      }

      if (home_favicon_16x16) {
        const uploaded = await uploadFile(home_favicon_16x16);
        favicon16Url = `${APPWRITE_ENDPOINT}/storage/buckets/${BUCKET_ID}/files/${uploaded.$id}/view?project=${APPWRITE_PROJECT_ID}`;
      }

      if (home_favicon_32x32) {
        const uploaded = await uploadFile(home_favicon_32x32);
        favicon32Url = `${APPWRITE_ENDPOINT}/storage/buckets/${BUCKET_ID}/files/${uploaded.$id}/view?project=${APPWRITE_PROJECT_ID}`;
      }

      if (home_favicon_48x48) {
        const uploaded = await uploadFile(home_favicon_48x48);
        favicon48Url = `${APPWRITE_ENDPOINT}/storage/buckets/${BUCKET_ID}/files/${uploaded.$id}/view?project=${APPWRITE_PROJECT_ID}`;
      }

      if (home_apple_touch_icon) {
        const uploaded = await uploadFile(home_apple_touch_icon);
        appleTouchUrl = `${APPWRITE_ENDPOINT}/storage/buckets/${BUCKET_ID}/files/${uploaded.$id}/view?project=${APPWRITE_PROJECT_ID}`;
      }

      if (home_android_icon_192) {
        const uploaded = await uploadFile(home_android_icon_192);
        android192Url = `${APPWRITE_ENDPOINT}/storage/buckets/${BUCKET_ID}/files/${uploaded.$id}/view?project=${APPWRITE_PROJECT_ID}`;
      }

      if (home_android_icon_512) {
        const uploaded = await uploadFile(home_android_icon_512);
        android512Url = `${APPWRITE_ENDPOINT}/storage/buckets/${BUCKET_ID}/files/${uploaded.$id}/view?project=${APPWRITE_PROJECT_ID}`;
      }

      // Save payload directly with complete absolute Appwrite View URL strings 
      await saveHomepage({
        documentId: homepage?.$id,

        home_banner_badge,
        home_banner_title,
        home_banner_des,

        home_banner_btn1,
        home_banner_btn1link,

        home_banner_btn2,
        home_banner_btn2link,

        home_banner_cardtitle1,
        home_banner_carddesc1,

        home_banner_cardtitle2,
        home_banner_carddesc2,

        home_banner_cardtitle3,
        home_banner_carddesc3,

        home_banner_cardtitle4,
        home_banner_carddesc4,

        home_banner_countnumber1,
        home_banner_countdes1,

        home_banner_countnumber2,
        home_banner_countdes2,

        home_banner_countnumber3,
        home_banner_countdes3,

        home_banner_countnumber4,
        home_banner_countdes4,

        home_trusted_badge,

        home_trusted_image1,
        home_trusted_image2,
        home_trusted_image3,
        home_trusted_image4,
        home_trusted_image5,
        home_trusted_image6,

        home_trusted_image1_alt,
        home_trusted_image1_title,

        home_trusted_image2_alt,
        home_trusted_image2_title,

        home_trusted_image3_alt,
        home_trusted_image3_title,

        home_trusted_image4_alt,
        home_trusted_image4_title,

        home_trusted_image5_alt,
        home_trusted_image5_title,

        home_trusted_image6_alt,
        home_trusted_image6_title,

        home_about_badge,
        home_about_title,
        home_about_des,
        home_about_cardtitle1,
        home_about_carddesc1,

        home_about_cardtitle2,
        home_about_carddesc2,

        home_about_why,

        home_about_list1,
        home_about_list2,
        home_about_list3,
        home_about_list4,
        home_about_list5,
        home_about_list6,

        home_about_vision,
        home_about_vision_des,

        home_service_badge,
        home_service_title,
        home_service_des,

        home_service_cardnumber,
        home_service_card_Title,
        home_service_card_des,

        home_service_cardnumber1,
        home_service_card_title1,
        home_service_card_des1,

        home_service_cardnumber2,
        home_service_card_title2,
        home_service_card_des2,

        home_service_cardnumber3,
        home_service_card_title3,
        home_service_card_des3,

        home_service_cardnumber4,
        home_service_card_title4,
        home_service_card_des4,

        home_service_cardnumber5,
        home_service_card_title5,
        home_service_card_des5,

        home_result_badge,
        home_result_badgetitle,
        home_result_badgedes,

        home_result_cardtitle,
        home_result_carddes,

        home_result_cardtitle1,
        home_result_carddes1,

        home_result_cardtitle2,
        home_result_carddes2,

        home_result_cardtitle3,
        home_result_carddes3,

        home_process_badge,
        home_process_title,
        home_process_des,

        home_process_cardnumber,
        home_process_cardtitle,
        home_process_carddes,

        home_process_cardnumber1,
        home_process_cardtitle1,
        home_process_carddes1,

        home_process_cardnumber2,
        home_process_cardtitle2,
        home_process_carddes2,

        home_process_cardnumber3,
        home_process_cardtitle3,
        home_process_carddes3,

        ctaTitle,
        ctaDescription,

        ctabtn1,
        ctabtnlink1,

        ctabtn2,
        ctabtnlink2,

        home_contact_badge,
        home_contact_title,
        home_contact_des,

        home_contact_mailtitle,
        home_contact_mailaddress,

        home_contact_numtitle,
        home_contact_nummber,

        home_contact_addtitle,
        home_contact_address,

        home_seo_title,
        home_seo_des,
        home_seo_keywords,
        home_seo_canonical,

        home_og_title,
        home_og_description,
        home_og_type,
        home_og_url,
        home_og_site_name,
        home_og_image,

        home_fav_icon : favIconUrl,
        home_favicon_16x16 : favicon16Url,
        home_favicon_32x32 : favicon32Url,
        home_favicon_48x48 : favicon48Url,
        home_apple_touch_icon : appleTouchUrl,
        home_android_icon_192 : android192Url,
        home_android_icon_512 : android512Url,
      });

      alert("Homepage saved successfully");
    } catch (error) {
      console.error(error);
      alert("Failed to save homepage");
    }

    setSaving(false);
  };

  const trustedImages = [
    home_trusted_image1,
    home_trusted_image2,
    home_trusted_image3,
    home_trusted_image4,
    home_trusted_image5,
    home_trusted_image6,
  ];
  const trustedImageAlts = [
    home_trusted_image1_alt,
    home_trusted_image2_alt,
    home_trusted_image3_alt,
    home_trusted_image4_alt,
    home_trusted_image5_alt,
    home_trusted_image6_alt,
  ];

  const trustedImageTitles = [
    home_trusted_image1_title,
    home_trusted_image2_title,
    home_trusted_image3_title,
    home_trusted_image4_title,
    home_trusted_image5_title,
    home_trusted_image6_title,
  ];
  const trustedImageAltSetters = [
    setHomeTrustedImage1Alt,
    setHomeTrustedImage2Alt,
    setHomeTrustedImage3Alt,
    setHomeTrustedImage4Alt,
    setHomeTrustedImage5Alt,
    setHomeTrustedImage6Alt,
  ];

  const trustedImageTitleSetters = [
    setHomeTrustedImage1Title,
    setHomeTrustedImage2Title,
    setHomeTrustedImage3Title,
    setHomeTrustedImage4Title,
    setHomeTrustedImage5Title,
    setHomeTrustedImage6Title,
  ];
  return (
    <form onSubmit={handleSubmit} className="space-y-10">
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

      {activeTab === "page" && (
        <>
          <div className="border border-slate-200 rounded-2xl overflow-hidden bg-dark shadow-sm">
            <button
              type="button"
              onClick={() => setHeroOpen(!heroOpen)}
              className="w-full flex items-center justify-between px-6 py-5 bg-black text-white"
            >
              <div>
                <h2 className="text-xl font-bold">Home Banner Section</h2>

                <p className="text-sm text-slate-300 mt-1">
                  Banner Content + banner Cards
                </p>
              </div>

              <span className="text-2xl">{heroOpen ? "−" : "+"}</span>
            </button>

            {heroOpen && (
              <div className="p-6 space-y-8">
                {/* HERO CONTENT */}

                <div className="space-y-5">
                  <h3 className="text-lg font-semibold border-b pb-3">
                    Banner Content
                  </h3>

                  <input
                    value={home_banner_badge}
                    onChange={(e) => setHomeBannerBadge(e.target.value)}
                    placeholder="Banner Badge"
                    className="border p-3 rounded-xl w-full"
                  />

                  <input
                    value={home_banner_title}
                    onChange={(e) => setHomeBannerTitle(e.target.value)}
                    placeholder="Banner Title"
                    className="border p-3 rounded-xl w-full"
                  />

                  <textarea
                    value={home_banner_des}
                    onChange={(e) => setHomeBannerDes(e.target.value)}
                    placeholder="Banner Description"
                    className="border p-3 rounded-xl w-full min-h-[140px]"
                  />

                  <div className="grid md:grid-cols-2 gap-4">
                    <input
                      value={home_banner_btn1}
                      onChange={(e) => setHomeBannerBtn1(e.target.value)}
                      placeholder="Button 1 Text"
                      className="border p-3 rounded-xl"
                    />

                    <input
                      value={home_banner_btn1link}
                      onChange={(e) => setHomeBannerBtn1Link(e.target.value)}
                      placeholder="Button 1 Link"
                      className="border p-3 rounded-xl"
                    />

                    <input
                      value={home_banner_btn2}
                      onChange={(e) => setHomeBannerBtn2(e.target.value)}
                      placeholder="Button 2 Text"
                      className="border p-3 rounded-xl"
                    />

                    <input
                      value={home_banner_btn2link}
                      onChange={(e) => setHomeBannerBtn2Link(e.target.value)}
                      placeholder="Button 2 Link"
                      className="border p-3 rounded-xl"
                    />
                  </div>
                </div>

                {/* HERO CARDS */}

                <div className="space-y-5">
                  <h3 className="text-lg font-semibold border-b pb-3">
                    Banner Cards
                  </h3>

                  <div className="grid lg:grid-cols-2 gap-5">
                    {/* CARD 1 */}
                    <div className="border rounded-2xl p-5  bg-dark space-y-3">
                      <div className="font-semibold text-white">Card 1</div>

                      <input
                        value={home_banner_cardtitle1}
                        onChange={(e) => setCardTitle1(e.target.value)}
                        placeholder="Title"
                        className="border p-3 rounded-xl w-full"
                      />

                      <textarea
                        value={home_banner_carddesc1}
                        onChange={(e) => setCardDesc1(e.target.value)}
                        placeholder="Description"
                        className="border p-3 rounded-xl w-full min-h-[100px]"
                      />
                    </div>

                    {/* CARD 2 */}
                    <div className="border rounded-2xl p-5 bg-dark space-y-3">
                      <div className="font-semibold text-white">Card 2</div>

                      <input
                        value={home_banner_cardtitle2}
                        onChange={(e) => setCardTitle2(e.target.value)}
                        placeholder="Title"
                        className="border p-3 rounded-xl w-full"
                      />

                      <textarea
                        value={home_banner_carddesc2}
                        onChange={(e) => setCardDesc2(e.target.value)}
                        placeholder="Description"
                        className="border p-3 rounded-xl w-full min-h-[100px]"
                      />
                    </div>

                    {/* CARD 3 */}
                    <div className="border rounded-2xl p-5 bg-dark space-y-3">
                      <div className="font-semibold text-white">Card 3</div>

                      <input
                        value={home_banner_cardtitle3}
                        onChange={(e) => setCardTitle3(e.target.value)}
                        placeholder="Title"
                        className="border p-3 rounded-xl w-full"
                      />

                      <textarea
                        value={home_banner_carddesc3}
                        onChange={(e) => setCardDesc3(e.target.value)}
                        placeholder="Description"
                        className="border p-3 rounded-xl w-full min-h-[100px]"
                      />
                    </div>

                    {/* CARD 4 */}
                    <div className="border rounded-2xl p-5 bg-dark space-y-3">
                      <div className="font-semibold text-white">Card 4</div>

                      <input
                        value={home_banner_cardtitle4}
                        onChange={(e) => setCardTitle4(e.target.value)}
                        placeholder="Title"
                        className="border p-3 rounded-xl w-full"
                      />

                      <textarea
                        value={home_banner_carddesc4}
                        onChange={(e) => setCardDesc4(e.target.value)}
                        placeholder="Description"
                        className="border p-3 rounded-xl w-full min-h-[100px]"
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
              onClick={() => setTrustedBrandOpen(!trustedBrandOpen)}
              className="w-full flex items-center justify-between px-6 py-5 bg-black text-white"
            >
              <div className="text-left">
                <h2 className="text-xl font-bold">Trusted Brands Section</h2>

                <p className="text-sm text-slate-300 mt-1">
                  Upload Brand Logos
                </p>
              </div>

              <span className="text-2xl font-bold">
                {trustedBrandOpen ? "−" : "+"}
              </span>
            </button>

            {trustedBrandOpen && (
              <div className="p-6 space-y-5">
                {" "}
                <div>
                  <label className="block mb-2 font-medium">
                    Trusted Brand Badge
                  </label>

                  <input
                    value={home_trusted_badge}
                    onChange={(e) => setHomeTrustedBadge(e.target.value)}
                    placeholder="Trusted By Leading Brands"
                    className="w-full border p-3 rounded-xl"
                  />
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {trustedImages.map((image, index) => (
                    <div
                      key={index}
                      className="space-y-3 border rounded-xl p-4"
                    >
                      <label className="font-medium">
                        Brand Logo {index + 1}
                      </label>

                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) =>
                          uploadTrustedImage(e.target.files?.[0], index + 1)
                        }
                        className="w-full border p-3 rounded-xl"
                      />

                      {image && (
                        <img
                          src={image}
                          alt={`Brand Logo ${index + 1}`}
                          className="h-20 w-auto object-contain border rounded-lg p-2"
                        />
                      )}

                      <input
                        type="text"
                        value={trustedImageAlts[index]}
                        onChange={(e) =>
                          trustedImageAltSetters[index](e.target.value)
                        }
                        placeholder={`Brand ${index + 1} Alt Text`}
                        className="w-full border p-3 rounded-xl"
                      />

                      <input
                        type="text"
                        value={trustedImageTitles[index]}
                        onChange={(e) =>
                          trustedImageTitleSetters[index](e.target.value)
                        }
                        placeholder={`Brand ${index + 1} Title`}
                        className="w-full border p-3 rounded-xl"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="border border-slate-200 rounded-2xl overflow-hidden bg-dark shadow-sm">
            <button
              type="button"
              onClick={() => setAboutOpen(!aboutOpen)}
              className="w-full flex items-center justify-between px-6 py-5 bg-black text-white"
            >
              <div className="text-left">
                <h2 className="text-xl font-bold">About Section</h2>

                <p className="text-sm text-slate-300 mt-1">
                  Manage About OwnAdz Content
                </p>
              </div>

              <span className="text-2xl font-bold">
                {aboutOpen ? "−" : "+"}
              </span>
            </button>

            {aboutOpen && (
              <div className="p-6 space-y-8">
                {/* Header Content */}

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold border-b pb-2">
                    About Content
                  </h3>

                  <input
                    value={home_about_badge}
                    onChange={(e) => setHomeAboutBadge(e.target.value)}
                    placeholder="About Badge"
                    className="w-full border p-3 rounded-xl"
                  />

                  <input
                    value={home_about_title}
                    onChange={(e) => setHomeAboutTitle(e.target.value)}
                    placeholder="About Title"
                    className="w-full border p-3 rounded-xl"
                  />

                  <textarea
                    value={home_about_des}
                    onChange={(e) => setHomeAboutDes(e.target.value)}
                    placeholder="About Description"
                    className="w-full border p-3 rounded-xl min-h-[180px]"
                  />
                </div>

                {/* Feature Cards */}

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold border-b pb-2">
                    Feature Cards
                  </h3>

                  <div className="grid md:grid-cols-2 gap-5">
                    <div className="border rounded-xl p-4 space-y-3">
                      <input
                        value={home_about_cardtitle1}
                        onChange={(e) => setHomeAboutCardTitle1(e.target.value)}
                        placeholder="Card 1 Title"
                        className="w-full border p-3 rounded-xl"
                      />

                      <textarea
                        value={home_about_carddesc1}
                        onChange={(e) => setHomeAboutCardDesc1(e.target.value)}
                        placeholder="Card 1 Description"
                        className="w-full border p-3 rounded-xl min-h-[120px]"
                      />
                    </div>

                    <div className="border rounded-xl p-4 space-y-3">
                      <input
                        value={home_about_cardtitle2}
                        onChange={(e) => setHomeAboutCardTitle2(e.target.value)}
                        placeholder="Card 2 Title"
                        className="w-full border p-3 rounded-xl"
                      />

                      <textarea
                        value={home_about_carddesc2}
                        onChange={(e) => setHomeAboutCardDesc2(e.target.value)}
                        placeholder="Card 2 Description"
                        className="w-full border p-3 rounded-xl min-h-[120px]"
                      />
                    </div>
                  </div>
                </div>

                {/* Why Choose */}

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold border-b pb-2">
                    Why Businesses Choose OwnAdz
                  </h3>

                  <input
                    value={home_about_why}
                    onChange={(e) => setHomeAboutWhy(e.target.value)}
                    placeholder="Blue Card Title"
                    className="w-full border p-3 rounded-xl"
                  />

                  <div className="grid md:grid-cols-2 gap-4">
                    <input
                      value={home_about_list1}
                      onChange={(e) => setHomeAboutList1(e.target.value)}
                      placeholder="List Item 1"
                      className="border p-3 rounded-xl"
                    />

                    <input
                      value={home_about_list2}
                      onChange={(e) => setHomeAboutList2(e.target.value)}
                      placeholder="List Item 2"
                      className="border p-3 rounded-xl"
                    />

                    <input
                      value={home_about_list3}
                      onChange={(e) => setHomeAboutList3(e.target.value)}
                      placeholder="List Item 3"
                      className="border p-3 rounded-xl"
                    />

                    <input
                      value={home_about_list4}
                      onChange={(e) => setHomeAboutList4(e.target.value)}
                      placeholder="List Item 4"
                      className="border p-3 rounded-xl"
                    />

                    <input
                      value={home_about_list5}
                      onChange={(e) => setHomeAboutList5(e.target.value)}
                      placeholder="List Item 5"
                      className="border p-3 rounded-xl"
                    />

                    <input
                      value={home_about_list6}
                      onChange={(e) => setHomeAboutList6(e.target.value)}
                      placeholder="List Item 6"
                      className="border p-3 rounded-xl"
                    />
                  </div>
                </div>

                {/* Vision */}

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold border-b pb-2">
                    Vision Card
                  </h3>

                  <input
                    value={home_about_vision}
                    onChange={(e) => setHomeAboutVision(e.target.value)}
                    placeholder="Vision Title"
                    className="w-full border p-3 rounded-xl"
                  />

                  <textarea
                    value={home_about_vision_des}
                    onChange={(e) => setHomeAboutVisionDes(e.target.value)}
                    placeholder="Vision Description"
                    className="w-full border p-3 rounded-xl min-h-[150px]"
                  />
                </div>
              </div>
            )}
          </div>

          <div className="border border-slate-200 rounded-2xl overflow-hidden bg-dark shadow-sm">
            <button
              type="button"
              onClick={() => setServiceOpen(!serviceOpen)}
              className="w-full flex items-center justify-between px-6 py-5 bg-black text-white"
            >
              <div className="text-left">
                <h2 className="text-xl font-bold">Service Section</h2>

                <p className="text-sm text-slate-300 mt-1">
                  Manage Service OwnAdz Content
                </p>
              </div>

              <span className="text-2xl font-bold">
                {serviceOpen ? "−" : "+"}
              </span>
            </button>

            {serviceOpen && (
              <div className="p-6 space-y-8">
                {/* Header Content */}

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold border-b pb-2">
                    Service Content
                  </h3>

                  <input
                    value={home_service_badge}
                    onChange={(e) => setHomeServiceBadge(e.target.value)}
                    placeholder="Service Badge"
                    className="w-full border p-3 rounded-xl"
                  />

                  <input
                    value={home_service_title}
                    onChange={(e) => setHomeServiceTitle(e.target.value)}
                    placeholder="Title"
                    className="w-full border p-3 rounded-xl"
                  />

                  <textarea
                    value={home_service_des}
                    onChange={(e) => setHomeServiceDes(e.target.value)}
                    placeholder="Description"
                    className="w-full border p-3 rounded-xl min-h-[180px]"
                  />
                </div>

                {/* Feature Cards */}

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold border-b pb-2">
                    Service Cards
                  </h3>

                  <div className="grid md:grid-cols-2 gap-5">
                    <div className="border rounded-xl p-4 space-y-3">
                      <input
                        value={home_service_cardnumber}
                        onChange={(e) =>
                          setHomeServiceCardNumber(e.target.value)
                        }
                        placeholder="Card 1 Number"
                        className="w-full border p-3 rounded-xl"
                      />
                      <input
                        value={home_service_card_Title}
                        onChange={(e) =>
                          setHomeServiceCardTitle(e.target.value)
                        }
                        placeholder="Card 1 Title"
                        className="w-full border p-3 rounded-xl"
                      />

                      <textarea
                        value={home_service_card_des}
                        onChange={(e) => setHomeServiceCardDes(e.target.value)}
                        placeholder="Card 1 Description"
                        className="w-full border p-3 rounded-xl min-h-[120px]"
                      />
                    </div>

                    <div className="border rounded-xl p-4 space-y-3">
                      <input
                        value={home_service_cardnumber1}
                        onChange={(e) =>
                          setHomeServiceCardNumber1(e.target.value)
                        }
                        placeholder="Card 2 Number"
                        className="w-full border p-3 rounded-xl"
                      />
                      <input
                        value={home_service_card_title1}
                        onChange={(e) =>
                          setHomeServiceCardTitle1(e.target.value)
                        }
                        placeholder="Card 2 Title"
                        className="w-full border p-3 rounded-xl"
                      />

                      <textarea
                        value={home_service_card_des1}
                        onChange={(e) => setHomeServiceCardDes1(e.target.value)}
                        placeholder="Card 2 Description"
                        className="w-full border p-3 rounded-xl min-h-[120px]"
                      />
                    </div>

                    <div className="border rounded-xl p-4 space-y-3">
                      <input
                        value={home_service_cardnumber2}
                        onChange={(e) =>
                          setHomeServiceCardNumber2(e.target.value)
                        }
                        placeholder="Card 3 Number"
                        className="w-full border p-3 rounded-xl"
                      />
                      <input
                        value={home_service_card_title2}
                        onChange={(e) =>
                          setHomeServiceCardTitle2(e.target.value)
                        }
                        placeholder="Card 3 Title"
                        className="w-full border p-3 rounded-xl"
                      />

                      <textarea
                        value={home_service_card_des2}
                        onChange={(e) => setHomeServiceCardDes2(e.target.value)}
                        placeholder="Card 3 Description"
                        className="w-full border p-3 rounded-xl min-h-[120px]"
                      />
                    </div>

                    <div className="border rounded-xl p-4 space-y-3">
                      <input
                        value={home_service_cardnumber3}
                        onChange={(e) =>
                          setHomeServiceCardNumber3(e.target.value)
                        }
                        placeholder="Card 4 Number"
                        className="w-full border p-3 rounded-xl"
                      />
                      <input
                        value={home_service_card_title3}
                        onChange={(e) =>
                          setHomeServiceCardTitle3(e.target.value)
                        }
                        placeholder="Card 4 Title"
                        className="w-full border p-3 rounded-xl"
                      />

                      <textarea
                        value={home_service_card_des3}
                        onChange={(e) => setHomeServiceCardDes3(e.target.value)}
                        placeholder="Card 4 Description"
                        className="w-full border p-3 rounded-xl min-h-[120px]"
                      />
                    </div>

                    <div className="border rounded-xl p-4 space-y-3">
                      <input
                        value={home_service_cardnumber4}
                        onChange={(e) =>
                          setHomeServiceCardNumber4(e.target.value)
                        }
                        placeholder="Card 5 Number"
                        className="w-full border p-3 rounded-xl"
                      />
                      <input
                        value={home_service_card_title4}
                        onChange={(e) =>
                          setHomeServiceCardTitle4(e.target.value)
                        }
                        placeholder="Card 5 Title"
                        className="w-full border p-3 rounded-xl"
                      />

                      <textarea
                        value={home_service_card_des4}
                        onChange={(e) => setHomeServiceCardDes4(e.target.value)}
                        placeholder="Card 5 Description"
                        className="w-full border p-3 rounded-xl min-h-[120px]"
                      />
                    </div>

                    <div className="border rounded-xl p-4 space-y-3">
                      <input
                        value={home_service_cardnumber5}
                        onChange={(e) =>
                          setHomeServiceCardNumber5(e.target.value)
                        }
                        placeholder="Card 6 Number"
                        className="w-full border p-3 rounded-xl"
                      />
                      <input
                        value={home_service_card_title5}
                        onChange={(e) =>
                          setHomeServiceCardTitle5(e.target.value)
                        }
                        placeholder="Card 6 Title"
                        className="w-full border p-3 rounded-xl"
                      />

                      <textarea
                        value={home_service_card_des5}
                        onChange={(e) => setHomeServiceCardDes5(e.target.value)}
                        placeholder="Card 6 Description"
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
              onClick={() => setResulteOpen(!resultOpen)}
              className="w-full flex items-center justify-between px-6 py-5 bg-black text-white"
            >
              <div className="text-left">
                <h2 className="text-xl font-bold">Result Section</h2>

                <p className="text-sm text-slate-300 mt-1">
                  Manage Result OwnAdz Content
                </p>
              </div>

              <span className="text-2xl font-bold">
                {resultOpen ? "−" : "+"}
              </span>
            </button>

            {resultOpen && (
              <div className="p-6 space-y-8">
                {/* Header Content */}

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold border-b pb-2">
                    Result Content
                  </h3>

                  <input
                    value={home_result_badge}
                    onChange={(e) => setHomeResultBadge(e.target.value)}
                    placeholder="Resulr Badge"
                    className="w-full border p-3 rounded-xl"
                  />

                  <textarea
                    value={home_result_badgedes}
                    onChange={(e) => setHomeResultBadgedes(e.target.value)}
                    placeholder="Description"
                    className="w-full border p-3 rounded-xl min-h-[180px]"
                  />
                </div>

                {/* Feature Cards */}

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold border-b pb-2">
                    Result Cards
                  </h3>

                  <div className="grid md:grid-cols-2 gap-5">
                    <div className="border rounded-xl p-4 space-y-3">
                      <input
                        value={home_result_cardtitle}
                        onChange={(e) => setHomeResultCardTitle(e.target.value)}
                        placeholder="Card 1 Title"
                        className="w-full border p-3 rounded-xl"
                      />

                      <textarea
                        value={home_result_carddes}
                        onChange={(e) => setHomeResultCarddes(e.target.value)}
                        placeholder="Card 1 Description"
                        className="w-full border p-3 rounded-xl min-h-[120px]"
                      />
                    </div>

                    <div className="border rounded-xl p-4 space-y-3">
                      <input
                        value={home_result_cardtitle1}
                        onChange={(e) =>
                          setHomeResultCardTitle1(e.target.value)
                        }
                        placeholder="Card 2 Title"
                        className="w-full border p-3 rounded-xl"
                      />

                      <textarea
                        value={home_result_carddes1}
                        onChange={(e) => setHomeResultCardDes1(e.target.value)}
                        placeholder="Card 2 Description"
                        className="w-full border p-3 rounded-xl min-h-[120px]"
                      />
                    </div>

                    <div className="border rounded-xl p-4 space-y-3">
                      <input
                        value={home_result_cardtitle2}
                        onChange={(e) =>
                          setHomeResultCardTitle2(e.target.value)
                        }
                        placeholder="Card 3 Title"
                        className="w-full border p-3 rounded-xl"
                      />

                      <textarea
                        value={home_result_carddes2}
                        onChange={(e) => setHomeResultCardDes2(e.target.value)}
                        placeholder="Card 3 Description"
                        className="w-full border p-3 rounded-xl min-h-[120px]"
                      />
                    </div>

                    <div className="border rounded-xl p-4 space-y-3">
                      <input
                        value={home_result_cardtitle3}
                        onChange={(e) =>
                          setHomeResultCardTitle3(e.target.value)
                        }
                        placeholder="Card 4 Title"
                        className="w-full border p-3 rounded-xl"
                      />

                      <textarea
                        value={home_result_carddes3}
                        onChange={(e) => setHomeResultCardDes3(e.target.value)}
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
              onClick={() => setCtaOpen(!ctaOpen)}
              className="w-full flex items-center justify-between px-6 py-5 bg-black text-white"
            >
              <div className="text-left">
                <h2 className="text-xl font-bold">CTA Section</h2>

                <p className="text-sm text-slate-300 mt-1">
                  Manage CTA OwnAdz Content
                </p>
              </div>

              <span className="text-2xl font-bold">{ctaOpen ? "−" : "+"}</span>
            </button>

            {ctaOpen && (
              <div className="p-6 space-y-8">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold border-b pb-2">
                    CTA Content
                  </h3>

                  <input
                    value={ctaTitle}
                    onChange={(e) => setCtaTitle(e.target.value)}
                    placeholder="CTA Title"
                    className="w-full border p-3 rounded-xl"
                  />

                  <textarea
                    value={ctaDescription}
                    onChange={(e) => setCtaDescription(e.target.value)}
                    placeholder="CTA Description"
                    className="w-full border p-3 rounded-xl min-h-[180px]"
                  />
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold border-b pb-2">
                    CTA Buttons
                  </h3>

                  <div className="grid md:grid-cols-2 gap-5">
                    <div className="border rounded-xl p-4 space-y-3">
                      <h4 className="font-medium">Button 1</h4>

                      <input
                        value={ctabtn1}
                        onChange={(e) => setCtaBtn1(e.target.value)}
                        placeholder="Button 1 Text"
                        className="w-full border p-3 rounded-xl"
                      />

                      <input
                        value={ctabtnlink1}
                        onChange={(e) => setCtaBtnLink1(e.target.value)}
                        placeholder="Button 1 Link"
                        className="w-full border p-3 rounded-xl"
                      />
                    </div>

                    <div className="border rounded-xl p-4 space-y-3">
                      <h4 className="font-medium">Button 2</h4>

                      <input
                        value={ctabtn2}
                        onChange={(e) => setCtaBtn2(e.target.value)}
                        placeholder="Button 2 Text"
                        className="w-full border p-3 rounded-xl"
                      />

                      <input
                        value={ctabtnlink2}
                        onChange={(e) => setCtaBtnLink2(e.target.value)}
                        placeholder="Button 2 Link"
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
              onClick={() => setFormOpen(!formOpen)}
              className="w-full flex items-center justify-between px-6 py-5 bg-black text-white"
            >
              <div className="text-left">
                <h2 className="text-xl font-bold">Contact Section</h2>

                <p className="text-sm text-slate-300 mt-1">
                  Manage Contact OwnAdz Content
                </p>
              </div>

              <span className="text-2xl font-bold">{formOpen ? "−" : "+"}</span>
            </button>

            {formOpen && (
              <div className="p-6 space-y-8">
                {/* Contact Content */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold border-b pb-2">
                    Contact Content
                  </h3>

                  <input
                    value={home_contact_badge}
                    onChange={(e) => setHomeContactBadge(e.target.value)}
                    placeholder="Contact Badge"
                    className="w-full border p-3 rounded-xl"
                  />

                  <input
                    value={home_contact_title}
                    onChange={(e) => setHomeContactTitle(e.target.value)}
                    placeholder="Contact Title"
                    className="w-full border p-3 rounded-xl"
                  />

                  <textarea
                    value={home_contact_des}
                    onChange={(e) => setHomeContactDes(e.target.value)}
                    placeholder="Contact Description"
                    className="w-full border p-3 rounded-xl min-h-[180px]"
                  />
                </div>

                {/* Contact Details */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold border-b pb-2">
                    Contact Details
                  </h3>

                  <div className="grid md:grid-cols-2 gap-5">
                    {/* Email */}
                    <div className="border rounded-xl p-4 space-y-3">
                      <input
                        value={home_contact_mailtitle}
                        onChange={(e) =>
                          setHomeContactMailTitle(e.target.value)
                        }
                        placeholder="Email Title"
                        className="w-full border p-3 rounded-xl"
                      />

                      <input
                        value={home_contact_mailaddress}
                        onChange={(e) =>
                          setHomeContactMailAddress(e.target.value)
                        }
                        placeholder="Email Address"
                        className="w-full border p-3 rounded-xl"
                      />
                    </div>

                    {/* Phone */}
                    <div className="border rounded-xl p-4 space-y-3">
                      <input
                        value={home_contact_numtitle}
                        onChange={(e) => setHomeContactNumTitle(e.target.value)}
                        placeholder="Phone Title"
                        className="w-full border p-3 rounded-xl"
                      />

                      <input
                        value={home_contact_nummber}
                        onChange={(e) => setHomeContactNummber(e.target.value)}
                        placeholder="Phone Number"
                        className="w-full border p-3 rounded-xl"
                      />
                    </div>

                    {/* Address */}
                    <div className="border rounded-xl p-4 space-y-3 md:col-span-2">
                      <input
                        value={home_contact_addtitle}
                        onChange={(e) => setHomeContactAddTitle(e.target.value)}
                        placeholder="Address Title"
                        className="w-full border p-3 rounded-xl"
                      />

                      <textarea
                        value={home_contact_address}
                        onChange={(e) => setHomeContactAddress(e.target.value)}
                        placeholder="Address"
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
          <h2 className="text-xl font-bold">SEO Settings</h2>
          <label htmlFor="home-seo-title" className="block mb-2 font-medium">
            Meta Title
          </label>
          <input
            id="home-seo-title"
            type="text"
            placeholder="Meta Title"
            value={home_seo_title}
            onChange={(e) => setHomeSeoTitle(e.target.value)}
            className="w-full border p-3 rounded-xl"
          />
          <label htmlFor="home-seo-title" className="block mb-2 font-medium">
            Meta Description
          </label>
          <input
            id="home-seo-des"
            type="text"
            placeholder="Meta Description"
            value={home_seo_des}
            onChange={(e) => setHomeSeoDes(e.target.value)}
            className="w-full border p-3 rounded-xl"
          />
          <label htmlFor="home-seo-title" className="block mb-2 font-medium">
            Meta Keywords
          </label>
          <input
            id="home-seo-keywords"
            type="text"
            placeholder="Meta Keywords"
            value={home_seo_keywords}
            onChange={(e) => setHomeSeoKeywords(e.target.value)}
            className="w-full border p-3 rounded-xl"
          />
          <label htmlFor="home-seo-title" className="block mb-2 font-medium">
            Cononical Link
          </label>
          <input
            id="canonical_link"
            type="text"
            placeholder="Cononical Link"
            value={home_seo_canonical}
            onChange={(e) => setHomeSeoCanonical(e.target.value)}
            className="w-full border p-3 rounded-xl"
          />
          <label htmlFor="home-og-title" className="block mb-2 font-medium">
            OG Title
          </label>

          <input
            id="home-og-title"
            type="text"
            placeholder="OG Title"
            value={home_og_title}
            onChange={(e) => setHomeOgTitle(e.target.value)}
            className="w-full border p-3 rounded-xl"
          />

          <label
            htmlFor="home-og-description"
            className="block mb-2 font-medium mt-4"
          >
            OG Description
          </label>

          <input
            id="home-og-description"
            type="text"
            placeholder="OG Description"
            value={home_og_description}
            onChange={(e) => setHomeOgDescription(e.target.value)}
            className="w-full border p-3 rounded-xl"
          />

          <label
            htmlFor="home-og-type"
            className="block mb-2 font-medium mt-4"
          >
            OG Type
          </label>

          <input
            id="home-og-type"
            type="text"
            placeholder="website"
            value={home_og_type}
            onChange={(e) => setHomeOgType(e.target.value)}
            className="w-full border p-3 rounded-xl"
          />

          <label
            htmlFor="home-og-url"
            className="block mb-2 font-medium mt-4"
          >
            OG URL
          </label>

          <input
            id="home-og-url"
            type="text"
            placeholder="https://www.ownadz.com"
            value={home_og_url}
            onChange={(e) => setHomeOgUrl(e.target.value)}
            className="w-full border p-3 rounded-xl"
          />

          <label
            htmlFor="home-og-site-name"
            className="block mb-2 font-medium mt-4"
          >
            OG Site Name
          </label>

          <input
            id="home-og-site-name"
            type="text"
            placeholder="OwnAdz"
            value={home_og_site_name}
            onChange={(e) => setHomeOgSiteName(e.target.value)}
            className="w-full border p-3 rounded-xl"
          />

          <label
            htmlFor="home-og-image"
            className="block mb-2 font-medium mt-4"
          >
            OG Image
          </label>

          <input
            id="home-og-image"
            type="text"
            placeholder="OG Image URL"
            value={home_og_image}
            onChange={(e) => setHomeOgImage(e.target.value)}
            className="w-full border p-3 rounded-xl"
          />

          <label
            htmlFor="home-fav-icon"
            className="block mb-2 font-medium mt-4"
          >
            Fav Icon
          </label>

          <input
            type="file"
            accept="image/*"
            onChange={(e) => setHomeFavIcon(e.target.files[0])}
          />

          <label
            htmlFor="home-fav-icon"
            className="block mb-2 font-medium mt-4"
          >
            Fav Icon 16
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setHomeFavicon16(e.target.files[0])}
          />

          <label
            htmlFor="home-fav-icon"
            className="block mb-2 font-medium mt-4"
          >
            Fav Icon 32 x 32
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setHomeFavicon32(e.target.files[0])}
          />
          <label
            htmlFor="home-fav-icon"
            className="block mb-2 font-medium mt-4"
          >
            Fav Icon 48 x 48
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setHomeFavicon48(e.target.files[0])}
          />

          <label
            htmlFor="home-fav-icon"
            className="block mb-2 font-medium mt-4"
          >
            Fav Icon AppleTouchIcon
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setHomeAppleTouchIcon(e.target.files[0])}
          />
          <label
            htmlFor="home-fav-icon"
            className="block mb-2 font-medium mt-4"
          >
            Fav Icon Android192
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setHomeAndroidIcon192(e.target.files[0])}
          />
          <label
            htmlFor="home-fav-icon"
            className="block mb-2 font-medium mt-4"
          >
            Fav Icon Android512
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setHomeAndroidIcon512(e.target.files[0])}
          />
        </div>
      )}

      <button
        disabled={saving}
        className="inline-flex items-center justify-center rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:opacity-50"
      >
        {saving ? "Saving homepage..." : "Save Full Homepage"}
      </button>
    </form>
  );
}

function SectionList({
  title,
  subtitle,
  items,
  setItems,
  fields,
  addTemplate,
  onDelete,
}) {
  return (
    <div className="grid gap-4 rounded-[1.75rem] border border-slate-200 bg-dark p-6 shadow-sm">
      <div>
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-sm text-slate-600">{subtitle}</p>
      </div>

      {items.map((item, index) => (
        <div
          key={item.$id || index}
          className="space-y-3 rounded-[1.5rem] border border-slate-200 bg-dark p-4"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            {fields.map(({ key, label, isTextarea }) =>
              isTextarea ? (
                <textarea
                  key={key}
                  value={item[key] || ""}
                  onChange={(e) =>
                    setItems((prev) => {
                      const next = [...prev];
                      next[index] = { ...next[index], [key]: e.target.value };
                      return next;
                    })
                  }
                  placeholder={label}
                  className="border p-3 w-full rounded-xl min-h-[100px]"
                />
              ) : (
                <input
                  key={key}
                  value={item[key] || ""}
                  onChange={(e) =>
                    setItems((prev) => {
                      const next = [...prev];
                      next[index] = { ...next[index], [key]: e.target.value };
                      return next;
                    })
                  }
                  placeholder={label}
                  className="border p-3 w-full rounded-xl"
                />
              ),
            )}
          </div>
          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={async () => {
                if (item.$id && onDelete) {
                  await onDelete(item.$id);
                }
                setItems((prev) =>
                  prev.filter((_, prevIndex) => prevIndex !== index),
                );
              }}
              className="rounded-full bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700"
            >
              Delete
            </button>
          </div>
        </div>
      ))}

      <button
        type="button"
        onClick={() => setItems([...items, addTemplate])}
        className="rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800"
      >
        Add {title}
      </button>
    </div>
  );
}