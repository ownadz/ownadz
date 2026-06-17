import { getHomepage } from "@/services/homepageService";
import { getImagePreview } from "@/services/storageService";

// Helper function to extract a clean Appwrite File ID if a full URL accidentally saved to the column
function cleanFileId(input) {
  if (!input || input === "undefined" || input === "null") return "";
  if (typeof input !== "string") return "";

  // Extract fileId from any Appwrite view URL containing: /files/{fileId}/
  const match = input.match(/\/files\/([^/?#]+)\//);
  if (match?.[1]) return match[1];

  // If it's already a plain file id (avoid returning full URLs)
  if (/^[a-zA-Z0-9]+$/.test(input)) return input;

  return "";
}



export async function generateMetadata() {
  const homepage = await getHomepage();

  const ogImageId = cleanFileId(homepage?.home_og_image);
  const ogImage = ogImageId ? getImagePreview(ogImageId) : "";

  const title = homepage?.home_seo_title || "Ownadz";
  const description = homepage?.home_seo_des || "Ownadz";
  const keywords = homepage?.home_seo_keywords || "";
  const canonical = homepage?.home_seo_canonical || "";

  // 1. Extract pure file IDs out of database columns
  const favIconId = cleanFileId(homepage?.home_fav_icon);
  const favicon16Id = cleanFileId(homepage?.home_favicon_16x16);
  const favicon32Id = cleanFileId(homepage?.home_favicon_32x32);
  const favicon48Id = cleanFileId(homepage?.home_favicon_48x48);
  const appleTouchId = cleanFileId(homepage?.home_apple_touch_icon);
  const android192Id = cleanFileId(homepage?.home_android_icon_192);
  const android512Id = cleanFileId(homepage?.home_android_icon_512);

  // Cache busting query string
  const versionQuery = `v=${homepage?.$updatedAt || Date.now()}`;

  function withVersion(previewUrl) {
    if (!previewUrl) return "";
    const joiner = previewUrl.includes("?") ? "&" : "?";
    return `${previewUrl}${joiner}${versionQuery}`;
  }

  // 2. Only build the preview URL if the ID actually exists. Otherwise, leave it as an empty string ("").
  const favicon = favIconId
    ? `${withVersion(getImagePreview(favIconId))}&ext=.png`
    : "";
  const favicon16 = favicon16Id
    ? `${withVersion(getImagePreview(favicon16Id))}&ext=.png`
    : "";
  const favicon32 = favicon32Id
    ? `${withVersion(getImagePreview(favicon32Id))}&ext=.png`
    : "";
  const favicon48 = favicon48Id
    ? `${withVersion(getImagePreview(favicon48Id))}&ext=.png`
    : "";
  const appleIcon = appleTouchId
    ? `${withVersion(getImagePreview(appleTouchId))}&ext=.png`
    : "";
  const android192 = android192Id
    ? `${withVersion(getImagePreview(android192Id))}&ext=.png`
    : "";
  const android512 = android512Id
    ? `${withVersion(getImagePreview(android512Id))}&ext=.png`
    : "";


  return {
    title,
    description,
    keywords,
    alternates: {
      canonical,
    },
    icons: {
      // 3. We use the spread operator (...) to completely skip adding the tag if the URL string is empty
      icon: [
        ...(favicon ? [{ url: favicon, rel: "icon", type: "image/x-icon" }] : []),
        ...(favicon16 ? [{ url: favicon16, sizes: "16x16", type: "image/png", rel: "icon" }] : []),
        ...(favicon32 ? [{ url: favicon32, sizes: "32x32", type: "image/png", rel: "icon" }] : []),
        ...(favicon48 ? [{ url: favicon48, sizes: "48x48", type: "image/png", rel: "icon" }] : []),
      ],
      shortcut: favicon ? favicon : undefined,
      apple: [
        ...(appleIcon ? [{ url: appleIcon, sizes: "180x180", type: "image/png", rel: "apple-touch-icon" }] : []),
      ],
      other: [
        ...(android192 ? [{ rel: "android-chrome-192x192", url: android192 }] : []),
        ...(android512 ? [{ rel: "android-chrome-512x512", url: android512 }] : []),
      ],
    },
    openGraph: {
      title: homepage?.home_og_title || title,
      description: homepage?.home_og_description || description,
      type: homepage?.home_og_type || "website",
      url: homepage?.home_og_url || canonical,
      siteName: homepage?.home_og_site_name || "OwnAdz",
      images: ogImage
        ? [
            {
              url: ogImage,
              width: 1200,
              height: 630,
              alt: homepage?.home_og_title || title,
            },
          ]
        : [],
    },
  };
}

export default async function HomePage() {
  const homepage = await getHomepage();

  return (
    <>
     {/* HERO SECTION */}
<section className="ownadz-hero relative overflow-hidden bg-gradient-to-b from-[#030304] via-[#070605] to-[#0e0c09] text-white ">  
  
  {/* Ultra-Smooth Ambient Spotlight Glow - Blending Black with #ffbd59 across the entire canvas */}
  <div className="absolute left-1/2 top-1/2 -z-10 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-radial-gradient from-[#ffbd59]/8 via-[#ffbd59]/2 to-transparent opacity-90 blur-[150px] pointer-events-none" />

  {/* Studio Ambient Aura Backlighting - Layered edge accents */}
  <div className="absolute right-[-10%] top-[-20%] -z-10 h-[600px] w-[600px] rounded-full bg-[#ffbd59]/12 blur-[140px] pointer-events-none" />
  <div className="absolute left-[-5%] bottom-[-10%] -z-10 h-[500px] w-[500px] rounded-full bg-[#ffbd59]/4 blur-[120px] pointer-events-none "  />
  <div className="absolute left-[40%] top-[30%] -z-10 h-[350px] w-[350px] rounded-full bg-[#ffbd59]/4 blur-[100px] pointer-events-none" />
  
  {/* Engineering Grid Overlay - Tinted slightly with a gold hue to sit cleanly over the black canvas */}
  <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffbd5904_1px,transparent_1px),linear-gradient(to_bottom,#ffbd5904_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" />

  <div className="mx-auto max-w-7xl px-6 py-20 lg:py-32 lg:px-8">
    <div className="grid items-center gap-16 lg:grid-cols-12">
      
      {/* LEFT CONTENT */}
      <div className="ownadz-left relative z-10 lg:col-span-6 text-center md:text-left">
        <div className="mb-8 flex justify-center md:justify-start">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#ffbd59]/20 bg-[#ffbd59]/5 backdrop-blur-md px-5 py-2 text-sm font-semibold text-[#ffbd59] shadow-[0_10px_30px_rgba(255,189,89,0.05)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#ffbd59] shadow-[0_0_8px_#ffbd59]" />
            {homepage?.home_banner_badge || ""}
          </span>
        </div>

        <h1 className="ownadz-title text-5xl font-black leading-[1.05] text-white md:text-6xl lg:text-5xl">
          {homepage?.home_banner_title || ""}
        </h1>

        <p className="ownadz-description mt-5 max-w-2xl leading-relaxed text-white/70 font-medium">
          {homepage?.home_banner_des || ""}
        </p>

        <div className="mt-10 flex flex-wrap justify-center md:justify-start gap-5">
          {homepage?.home_banner_btn1 && (
            <a
              href={homepage?.home_banner_btn1link || "#"}
              className="group relative overflow-hidden rounded-2xl bg-[#ffbd59] px-8 py-4 font-black text-black shadow-[0_20px_40px_rgba(255,189,89,0.15)] transition-all duration-500 hover:-translate-y-1 hover:bg-[#ffb33f] hover:shadow-[0_20px_40px_rgba(255,189,89,0.3)]"
            >
              <span className="relative z-10">{homepage.home_banner_btn1}</span>
            </a>
          )}

          {homepage?.home_banner_btn2 && (
            <a
              href={homepage?.home_banner_btn2link || "#"}
              className="rounded-2xl border-2 border-[#ffbd59]/20 bg-gradient-to-r from-black to-[#141417] px-8 py-4 font-bold text-white transition-all duration-500 hover:-translate-y-1 hover:bg-black hover:border-[#ffbd59]/60 hover:shadow-[0_15px_30px_rgba(255,189,89,0.1)]"
            >
              {homepage.home_banner_btn2}
            </a>
          )}
        </div>
      </div>

      {/* RIGHT SIDE ASYMMETRIC MASONRY CARDS */}
      <div className="ownadz-right relative z-10 lg:col-span-6 mt-12 lg:mt-0">
        <div className="grid gap-4 sm:grid-cols-2">
          
          {/* FIRST BLOCK - 2 CARDS (Shifted Upwards) */}
          <div className="space-y-4 sm:-translate-y-4">
            {/* CARD 1 */}
            <div className="group relative rounded-[2rem] border border-[#ffbd59]/10 bg-gradient-to-br from-[#0d0d11] to-black p-6 transition-all duration-500 hover:border-[#ffbd59]/40 hover:shadow-[0_30px_60px_-15px_rgba(255,189,89,0.15)] hover:-translate-y-1">
              <div className="absolute top-4 right-6 text-[10px] font-black tracking-widest text-white/20 group-hover:text-[#ffbd59] transition-colors duration-300">
                01
              </div>
              <h3 className="text-lg font-black text-white tracking-tight group-hover:text-[#ffbd59] transition-colors duration-300">
                {homepage?.home_banner_cardtitle1 || ""}
              </h3>
              <div className="mt-3 h-0.5 w-10 rounded-full bg-[#ffbd59] transition-all duration-500 group-hover:w-16"></div>
              <p className="mt-4 text-xs leading-relaxed text-white/60 font-medium group-hover:text-white/80 transition-colors duration-300">
                {homepage?.home_banner_carddesc1 || ""}
              </p>
            </div>

            {/* CARD 2 */}
            <div className="group relative rounded-[2rem] border border-[#ffbd59]/10 bg-gradient-to-br from-[#0d0d11] to-black p-6 transition-all duration-500 hover:border-[#ffbd59]/40 hover:shadow-[0_30px_60px_-15px_rgba(255,189,89,0.15)] hover:-translate-y-1">
              <div className="absolute top-4 right-6 text-[10px] font-black tracking-widest text-white/20 group-hover:text-[#ffbd59] transition-colors duration-300">
                02
              </div>
              <h3 className="text-lg font-black text-white tracking-tight group-hover:text-[#ffbd59] transition-colors duration-300">
                {homepage?.home_banner_cardtitle2 || ""}
              </h3>
              <div className="mt-3 h-0.5 w-10 rounded-full bg-[#ffbd59] transition-all duration-500 group-hover:w-16"></div>
              <p className="mt-4 text-xs leading-relaxed text-white/60 font-medium group-hover:text-white/80 transition-colors duration-300">
                {homepage?.home_banner_carddesc2 || ""}
              </p>
            </div>
          </div>

          {/* NEXT BLOCK - 2 CARDS (Shifted Downwards) */}
          <div className="space-y-4 sm:translate-y-4">
            {/* CARD 3 */}
            <div className="group relative rounded-[2rem] border border-[#ffbd59]/10 bg-gradient-to-br from-[#0d0d11] to-black p-6 transition-all duration-500 hover:border-[#ffbd59]/40 hover:shadow-[0_30px_60px_-15px_rgba(255,189,89,0.15)] hover:-translate-y-1">
              <div className="absolute top-4 right-6 text-[10px] font-black tracking-widest text-white/20 group-hover:text-[#ffbd59] transition-colors duration-300">
                03
              </div>
              <h3 className="text-lg font-black text-white tracking-tight group-hover:text-[#ffbd59] transition-colors duration-300">
                {homepage?.home_banner_cardtitle3 || ""}
              </h3>
              <div className="mt-3 h-0.5 w-10 rounded-full bg-[#ffbd59] transition-all duration-500 group-hover:w-16"></div>
              <p className="mt-4 text-xs leading-relaxed text-white/60 font-medium group-hover:text-white/80 transition-colors duration-300">
                {homepage?.home_banner_carddesc3 || ""}
              </p>
            </div>

            {/* CARD 4 */}
            <div className="group relative rounded-[2rem] border border-[#ffbd59]/10 bg-gradient-to-br from-[#0d0d11] to-black p-6 transition-all duration-500 hover:border-[#ffbd59]/40 hover:shadow-[0_30px_60px_-15px_rgba(255,189,89,0.15)] hover:-translate-y-1">
              <div className="absolute top-4 right-6 text-[10px] font-black tracking-widest text-white/20 group-hover:text-[#ffbd59] transition-colors duration-300">
                04
              </div>
              <h3 className="text-lg font-black text-white tracking-tight group-hover:text-[#ffbd59] transition-colors duration-300">
                {homepage?.home_banner_cardtitle4 || ""}
              </h3>
              <div className="mt-3 h-0.5 w-10 rounded-full bg-[#ffbd59] transition-all duration-500 group-hover:w-16"></div>
              <p className="mt-4 text-xs leading-relaxed text-white/60 font-medium group-hover:text-white/80 transition-colors duration-300">
                {homepage?.home_banner_carddesc4 || ""}
              </p>
            </div>
          </div>

        </div>
      </div>

    </div>
  </div>
</section>

      {/* TRUSTED BRANDS SECTION */}
      <section className="ownadz-trusted relative bg-[#f8f8f8] py-20 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="ownadz-trusted-badge inline-block text-xs font-semibold tracking-[0.45em] uppercase text-black/60">
              {homepage?.home_trusted_badge}
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 items-center">
            {[
              homepage?.home_trusted_image1,
              homepage?.home_trusted_image2,
              homepage?.home_trusted_image3,
              homepage?.home_trusted_image4,
              homepage?.home_trusted_image5,
              homepage?.home_trusted_image6,
            ]
              .filter(Boolean)
              .map((logo, index) => (
                <div
                  key={index}
                  className="ownadz-brand-item group flex items-center justify-center"
                >
                  <div className="relative flex h-24 w-full items-center justify-center rounded-2xl bg-white border border-black/5 transition-all duration-500 hover:-translate-y-2 hover:border-[#ffbd59] hover:shadow-[0_20px_50px_rgba(255,189,89,0.25)]">
                    <img
                      src={logo}
                      alt={homepage?.[`home_trusted_image${index + 1}_alt`] || ""}
                      title={homepage?.[`home_trusted_image${index + 1}_title`] || ""}
                      className="max-h-22 w-auto object-contain opacity-90 transition-all duration-500 group-hover:opacity-100 group-hover:grayscale-0"
                    />
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* About SECTION */}
      <section className="ownadz-about relative overflow-hidden bg-white py-24">
        <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-[#ffbd59]/10 blur-3xl"></div>
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-[#ffbd59]/10 blur-3xl"></div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-2 items-start">
            
            <div className="ownadz-about-left">
              <span className="inline-flex rounded-full border border-[#ffbd59]/30 bg-[#ffbd59]/10 px-5 py-2 text-sm font-bold uppercase tracking-[0.2em] text-black">
                {homepage?.home_about_badge}
              </span>

              <h2 className="mt-6 text-4xl font-black leading-tight text-black md:text-5xl">
                {homepage?.home_about_title}
              </h2>

              <div className="mt-8 text-black/70">
                {homepage?.home_about_des
                  ?.split("\n")
                  .map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
              </div>

              <div className="mt-10 grid gap-5 sm:grid-cols-2">
                <div className="group rounded-[28px] border border-black/10 bg-white p-6 shadow-[0_15px_40px_rgba(0,0,0,0.06)] transition-all duration-500 hover:-translate-y-2 hover:border-[#ffbd59] hover:shadow-[0_25px_60px_rgba(255,189,89,0.25)]">
                  <div className="mb-4 h-1.5 w-12 rounded-full bg-[#ffbd59] transition-all duration-500 group-hover:w-24"></div>
                  <h3 className="text-xl font-black text-black">
                    {homepage?.home_about_cardtitle1}
                  </h3>
                  <p className="mt-3 text-black/70">
                    {homepage?.home_about_carddesc1}
                  </p>
                </div>

                <div className="group rounded-[28px] border border-black/10 bg-white p-6 shadow-[0_15px_40px_rgba(0,0,0,0.06)] transition-all duration-500 hover:-translate-y-2 hover:border-[#ffbd59] hover:shadow-[0_25px_60px_rgba(255,189,89,0.25)]">
                  <div className="mb-4 h-1.5 w-12 rounded-full bg-[#ffbd59] transition-all duration-500 group-hover:w-24"></div>
                  <h3 className="text-xl font-black text-black">
                    {homepage?.home_about_cardtitle2}
                  </h3>
                  <p className="mt-3 text-black/70">
                    {homepage?.home_about_carddesc2}
                  </p>
                </div>
              </div>
            </div>

            <div className="ownadz-about-right space-y-8">
              <div className="rounded-[36px] bg-black p-8 text-white shadow-[0_35px_80px_rgba(0,0,0,0.18)]">
                <div className="mb-6 flex items-center gap-3">
                  <div className="h-3 w-3 rounded-full bg-[#ffbd59]"></div>
                  <h3 className="text-3xl font-black">
                    {homepage?.home_about_why}
                  </h3>
                </div>

                <ul className="space-y-5">
                  {[
                    homepage?.home_about_list1,
                    homepage?.home_about_list2,
                    homepage?.home_about_list3,
                    homepage?.home_about_list4,
                    homepage?.home_about_list5,
                    homepage?.home_about_list6,
                  ]
                    .filter(Boolean)
                    .map((item, index) => (
                      <li key={index} className="flex gap-4">
                        <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#ffbd59] text-black font-bold">
                          ✓
                        </div>
                        <span className="leading-7 text-white/90">
                          {item}
                        </span>
                      </li>
                    ))}
                </ul>
              </div>

              <div className="group rounded-[36px] border border-black/10 bg-white p-8 shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-2 hover:border-[#ffbd59] hover:shadow-[0_30px_70px_rgba(255,189,89,0.25)]">
                <div className="mb-4 h-1.5 w-14 rounded-full bg-[#ffbd59] transition-all duration-500 group-hover:w-24"></div>
                <h3 className="text-3xl font-black text-black">
                  {homepage?.home_about_vision}
                </h3>
                <p className="mt-5  text-black/70">
                  {homepage?.home_about_vision_des}
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="ownadz_digital relative overflow-hidden bg-[#f8f8f8] py-24">
        <div className="ownadz_digital mx-auto max-w-7xl px-6 lg:px-8">
          <div className="ownadz_digital mx-auto max-w-4xl text-center">
            <span className="ownadz_digital inline-flex rounded-full border border-[#ffbd59]/30 bg-[#ffbd59]/10 px-5 py-2 text-sm font-bold uppercase tracking-[0.2em] text-black">
              {homepage?.home_service_badge || ""}
            </span>

            <h2 className="ownadz_digital mt-6 text-4xl font-black text-black md:text-4xl">
              {homepage?.home_service_title || ""}
            </h2>

            <p className="ownadz_digital mx-auto mt-6 max-w-3xl  text-black/70">
              {homepage?.home_service_des || ""}
            </p>
          </div>

          <div className="ownadz_digital mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            <div className="ownadz_digital rounded-[32px] bg-white p-8 shadow-lg">
              <div className="ownadz_digital mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#ffbd59]/15 text-lg font-black text-black">
                {homepage?.home_service_cardnumber}
              </div>
              <h3 className="ownadz_digital text-2xl font-black text-black">
                {homepage?.home_service_card_Title}
              </h3>
              <p className="ownadz_digital mt-5 text-black/70">
                {homepage?.home_service_card_des}
              </p>
            </div>

            <div className="ownadz_digital rounded-[32px] bg-white p-8 shadow-lg">
              <div className="ownadz_digital mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#ffbd59]/15 text-lg font-black text-black">
                {homepage?.home_service_cardnumber1}
              </div>
              <h3 className="ownadz_digital text-2xl font-black text-black">
                {homepage?.home_service_card_title1}
              </h3>
              <p className="ownadz_digital mt-5 text-black/70">
                {homepage?.home_service_card_des1}
              </p>
            </div>

            <div className="ownadz_digital rounded-[32px] bg-white p-8 shadow-lg">
              <div className="ownadz_digital mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#ffbd59]/15 text-lg font-black text-black">
                {homepage?.home_service_cardnumber2}
              </div>
              <h3 className="ownadz_digital text-2xl font-black text-black">
                {homepage?.home_service_card_title2}
              </h3>
              <p className="ownadz_digital mt-5 text-black/70">
                {homepage?.home_service_card_des2}
              </p>
            </div>

            <div className="ownadz_digital rounded-[32px] bg-white p-8 shadow-lg">
              <div className="ownadz_digital mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#ffbd59]/15 text-lg font-black text-black">
                {homepage?.home_service_cardnumber3}
              </div>
              <h3 className="ownadz_digital text-2xl font-black text-black">
                {homepage?.home_service_card_title3}
              </h3>
              <p className="ownadz_digital mt-5 text-black/70">
                {homepage?.home_service_card_des3}
              </p>
            </div>

            <div className="ownadz_digital rounded-[32px] bg-white p-8 shadow-lg">
              <div className="ownadz_digital mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#ffbd59]/15 text-lg font-black text-black">
                {homepage?.home_service_cardnumber4}
              </div>
              <h3 className="ownadz_digital text-2xl font-black text-black">
                {homepage?.home_service_card_title4}
              </h3>
              <p className="ownadz_digital mt-5 text-black/70">
                {homepage?.home_service_card_des4}
              </p>
            </div>

            <div className="ownadz_digital rounded-[32px] bg-white p-8 shadow-lg">
              <div className="ownadz_digital mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#ffbd59]/15 text-lg font-black text-black">
                {homepage?.home_service_cardnumber5}
              </div>
              <h3 className="ownadz_digital text-2xl font-black text-black">
                {homepage?.home_service_card_title5}
              </h3>
              <p className="ownadz_digital mt-5 text-black/70">
                {homepage?.home_service_card_des5}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* RESULTS SECTION */}
      <section className="ownadz-result relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b bg-dark" />

        <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-[#ffbd59]/20 blur-3xl"></div>
        <div className="absolute right-0 bottom-0 h-[450px] w-[450px] rounded-full bg-[#ffbd59]/15 blur-3xl"></div>
        <div className="absolute left-1/2 top-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ffbd59]/10 blur-3xl"></div>

        <div className="ownadz-result-container relative mx-auto max-w-7xl px-6 lg:px-8 py-24">
          <div className="ownadz-result-header mx-auto max-w-4xl text-center">
            <span className="ownadz-result-badge inline-flex rounded-full border border-[#ffbd59]/30 bg-[#ffbd59]/10 px-5 py-2 text-sm font-bold uppercase tracking-[0.25em] text-white">
              RESULTS
            </span>
            <h2 className="ownadz-result-title mt-6 text-4xl font-black leading-tight text-white md:text-5xl lg:text-6xl">
              {homepage?.home_result_badge}
            </h2>
            <p className="ownadz-result-description mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/70">
              {homepage?.home_result_badgedes}
            </p>
          </div>

          <div className="ownadz-result-grid mt-20 grid gap-7 sm:grid-cols-2 xl:grid-cols-4">
            <div className="ownadz-result-card group relative overflow-hidden rounded-[32px] border border-white bg-white/90 backdrop-blur-xl p-8 shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-4 hover:border-[#ffbd59] hover:shadow-[0_35px_80px_rgba(255,189,89,0.25)]">
              <div className="absolute right-0 top-0 h-32 w-32 translate-x-10 -translate-y-10 rounded-full bg-[#ffbd59]/10 transition-all duration-500 group-hover:scale-150"></div>
              <div className="absolute bottom-0 left-0 h-24 w-24 -translate-x-8 translate-y-8 rounded-full bg-[#ffbd59]/5 transition-all duration-500 group-hover:scale-125"></div>
              <h3 className="ownadz-result-card-number relative text-5xl font-black text-black md:text-6xl">
                {homepage?.home_result_cardtitle}
              </h3>
              <div className="ownadz-result-card-line mt-5 h-1.5 w-14 rounded-full bg-[#ffbd59] transition-all duration-500 group-hover:w-24"></div>
              <p className="ownadz-result-card-description mt-6 text-base leading-7 text-black/70">
                {homepage?.result_carddes || homepage?.home_result_carddes}
              </p>
            </div>

            <div className="ownadz-result-card group relative overflow-hidden rounded-[32px] border border-white bg-white/90 backdrop-blur-xl p-8 shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-4 hover:border-[#ffbd59] hover:shadow-[0_35px_80px_rgba(255,189,89,0.25)]">
              <div className="absolute right-0 top-0 h-32 w-32 translate-x-10 -translate-y-10 rounded-full bg-[#ffbd59]/10 transition-all duration-500 group-hover:scale-150"></div>
              <div className="absolute bottom-0 left-0 h-24 w-24 -translate-x-8 translate-y-8 rounded-full bg-[#ffbd59]/5 transition-all duration-500 group-hover:scale-125"></div>
              <h3 className="text-5xl font-black text-black md:text-6xl">
                {homepage?.home_result_cardtitle1}
              </h3>
              <div className="mt-5 h-1.5 w-14 rounded-full bg-[#ffbd59] transition-all duration-500 group-hover:w-24"></div>
              <p className="mt-6 text-base leading-7 text-black/70">
                {homepage?.home_result_carddes1}
              </p>
            </div>

            <div className="ownadz-result-card group relative overflow-hidden rounded-[32px] border border-white bg-white/90 backdrop-blur-xl p-8 shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-4 hover:border-[#ffbd59] hover:shadow-[0_35px_80px_rgba(255,189,89,0.25)]">
              <div className="absolute right-0 top-0 h-32 w-32 translate-x-10 -translate-y-10 rounded-full bg-[#ffbd59]/10 transition-all duration-500 group-hover:scale-150"></div>
              <div className="absolute bottom-0 left-0 h-24 w-24 -translate-x-8 translate-y-8 rounded-full bg-[#ffbd59]/5 transition-all duration-500 group-hover:scale-125"></div>
              <h3 className="text-5xl font-black text-black md:text-6xl">
                {homepage?.home_result_cardtitle2}
              </h3>
              <div className="mt-5 h-1.5 w-14 rounded-full bg-[#ffbd59] transition-all duration-500 group-hover:w-24"></div>
              <p className="mt-6 text-base leading-7 text-black/70">
                {homepage?.home_result_carddes2}
              </p>
            </div>

            <div className="ownadz-result-card group relative overflow-hidden rounded-[32px] border border-white bg-white/90 backdrop-blur-xl p-8 shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-4 hover:border-[#ffbd59] hover:shadow-[0_35px_80px_rgba(255,189,89,0.25)]">
              <div className="absolute right-0 top-0 h-32 w-32 translate-x-10 -translate-y-10 rounded-full bg-[#ffbd59]/10 transition-all duration-500 group-hover:scale-150"></div>
              <div className="absolute bottom-0 left-0 h-24 w-24 -translate-x-8 translate-y-8 rounded-full bg-[#ffbd59]/5 transition-all duration-500 group-hover:scale-125"></div>
              <h3 className="text-5xl font-black text-black md:text-6xl">
                {homepage?.home_result_cardtitle3}
              </h3>
              <div className="mt-5 h-1.5 w-14 rounded-full bg-[#ffbd59] transition-all duration-500 group-hover:w-24"></div>
              <p className="mt-6 text-base leading-7 text-black/70">
                {homepage?.home_result_carddes3}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="ownadz-process relative overflow-hidden py-24 bg-white">
        <div className="absolute left-0 top-20 h-[400px] w-[400px] rounded-full bg-[#ffbd59]/10 blur-3xl"></div>
        <div className="absolute right-0 bottom-20 h-[350px] w-[350px] rounded-full bg-[#ffbd59]/10 blur-3xl"></div>

        <div className="ownadz-process-container relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="ownadz-process-header mx-auto max-w-4xl text-center">
            <span className="ownadz-process-badge inline-flex rounded-full border border-[#ffbd59]/30 bg-[#ffbd59]/10 px-5 py-2 text-sm font-bold uppercase tracking-[0.25em] text-black">
              {homepage?.home_process_badge}
            </span>
            <h2 className="ownadz-process-title mt-6 text-4xl font-black leading-tight text-black md:text-5xl lg:text-6xl">
              {homepage?.home_process_title}
            </h2>
            <p className="ownadz-process-description mx-auto mt-6 max-w-3xl text-lg leading-8 text-black/70">
              {homepage?.home_process_des}
            </p>
          </div>

          <div className="ownadz-process-grid relative mt-24 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            <div className="absolute left-0 right-0 top-12 hidden xl:block">
              <div className="mx-auto h-[2px] w-[82%] bg-gradient-to-r from-[#ffbd59]/20 via-[#ffbd59] to-[#ffbd59]/20"></div>
            </div>

            {/* STEP 01 */}
            <div className="ownadz-process-card group relative rounded-[32px] border border-black/5 bg-white p-8 shadow-[0_20px_60px_rgba(0,0,0,0.06)] transition-all duration-500 hover:-translate-y-4 hover:border-[#ffbd59] hover:shadow-[0_30px_70px_rgba(255,189,89,0.25)]">
              <div className="absolute -top-5 left-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#ffbd59] text-xl font-black text-black shadow-lg">
                {homepage?.home_process_cardnumber}
              </div>
              <div className="pt-10">
                <h3 className="text-2xl font-black text-black leading-tight">
                  {homepage?.home_process_cardtitle}
                </h3>
                <div className="mt-5 h-1.5 w-14 rounded-full bg-[#ffbd59] transition-all duration-500 group-hover:w-24"></div>
                <p className="mt-6 leading-8 text-black/70">
                  {homepage?.home_process_carddes}
                </p>
              </div>
            </div>

            {/* STEP 02 */}
            <div className="ownadz-process-card group relative rounded-[32px] border border-black/5 bg-white p-8 shadow-[0_20px_60px_rgba(0,0,0,0.06)] transition-all duration-500 hover:-translate-y-4 hover:border-[#ffbd59] hover:shadow-[0_30px_70px_rgba(255,189,89,0.25)]">
              <div className="absolute -top-5 left-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#ffbd59] text-xl font-black text-black shadow-lg">
                {homepage?.home_process_cardnumber1}
              </div>
              <div className="pt-10">
                <h3 className="text-2xl font-black text-black leading-tight">
                  {homepage?.home_process_cardtitle1}
                </h3>
                <div className="mt-5 h-1.5 w-14 rounded-full bg-[#ffbd59] transition-all duration-500 group-hover:w-24"></div>
                <p className="mt-6 leading-8 text-black/70">
                  {homepage?.home_process_carddes1}
                </p>
              </div>
            </div>

            {/* STEP 03 */}
            <div className="ownadz-process-card group relative rounded-[32px] border border-black/5 bg-white p-8 shadow-[0_20px_60px_rgba(0,0,0,0.06)] transition-all duration-500 hover:-translate-y-4 hover:border-[#ffbd59] hover:shadow-[0_30px_70px_rgba(255,189,89,0.25)]">
              <div className="absolute -top-5 left-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#ffbd59] text-xl font-black text-black shadow-lg">
                {homepage?.home_process_cardnumber2}
              </div>
              <div className="pt-10">
                <h3 className="text-2xl font-black text-black leading-tight">
                  {homepage?.home_process_cardtitle2}
                </h3>
                <div className="mt-5 h-1.5 w-14 rounded-full bg-[#ffbd59] transition-all duration-500 group-hover:w-24"></div>
                <p className="mt-6 leading-8 text-black/70">
                  {homepage?.home_process_carddes2}
                </p>
              </div>
            </div>

            {/* STEP 04 */}
            <div className="ownadz-process-card group relative rounded-[32px] border border-black/5 bg-white p-8 shadow-[0_20px_60px_rgba(0,0,0,0.06)] transition-all duration-500 hover:-translate-y-4 hover:border-[#ffbd59] hover:shadow-[0_30px_70px_rgba(255,189,89,0.25)]">
              <div className="absolute -top-5 left-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#ffbd59] text-xl font-black text-black shadow-lg">
                {homepage?.home_process_cardnumber3}
              </div>
              <div className="pt-10">
                <h3 className="text-2xl font-black text-black leading-tight">
                  {homepage?.home_process_cardtitle3}
                </h3>
                <div className="mt-5 h-1.5 w-14 rounded-full bg-[#ffbd59] transition-all duration-500 group-hover:w-24"></div>
                <p className="mt-6 leading-8 text-black/70">
                  {homepage?.home_process_carddes3}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="ownadz_cta relative overflow-hidden py-28">
        <div className="absolute left-0 top-0 h-[450px] w-[450px] rounded-full bg-[#ffbd59]/15 blur-3xl"></div>
        <div className="absolute right-0 bottom-0 h-[400px] w-[400px] rounded-full bg-[#ffbd59]/10 blur-3xl"></div>

        <div className="ownadz_cta_container relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="ownadz_cta_wrapper relative overflow-hidden rounded-[40px] border border-black/5 bg-white px-8 py-16 shadow-[0_30px_80px_rgba(0,0,0,0.08)] md:px-14 md:py-20">
            <div className="absolute left-0 top-0 h-48 w-48 -translate-x-20 -translate-y-20 rounded-full bg-[#ffbd59]/10"></div>
            <div className="absolute right-0 bottom-0 h-56 w-56 translate-x-24 translate-y-24 rounded-full bg-[#ffbd59]/10"></div>

            <div className="ownadz_cta_content relative z-10 mx-auto max-w-4xl text-center">
              <h2 className="ownadz_cta_title mt-6 text-4xl font-black leading-tight text-black md:text-5xl lg:text-6xl">
                {homepage?.ctaTitle}
              </h2>

              <p className="ownadz_cta_description mx-auto mt-6 max-w-3xl text-lg leading-8 text-black/70">
                {homepage?.ctaDescription}
              </p>

              <div className="ownadz_cta_buttons mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row">
                <a
                  href={homepage?.ctabtnlink1 || "#"}
                  className="group relative overflow-hidden rounded-2xl bg-black px-10 py-4 font-semibold text-white transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_25px_50px_rgba(0,0,0,0.25)]"
                >
                  <span className="relative z-10">{homepage?.ctabtn1}</span>
                  <div className="absolute inset-0 translate-y-full bg-[#ffbd59] transition-transform duration-500 group-hover:translate-y-0"></div>
                  <span className="absolute inset-0 z-20 flex items-center justify-center font-semibold text-black opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    {homepage?.ctabtn1}
                  </span>
                </a>

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

      {/* CONTACT SECTION */}
      <section className="ownadz-contact relative overflow-hidden py-24 bg-[#f8f8f8]">
        <div className="absolute left-0 top-0 h-[450px] w-[450px] rounded-full bg-[#ffbd59]/10 blur-3xl"></div>
        <div className="absolute right-0 bottom-0 h-[400px] w-[400px] rounded-full bg-[#ffbd59]/10 blur-3xl"></div>

        <div className="ownadz-contact-container mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-2 items-center">
            
            <div className="ownadz-contact-left">
              <span className="ownadz-contact-badge inline-flex rounded-full border border-[#ffbd59]/30 bg-[#ffbd59]/10 px-5 py-2 text-sm font-bold uppercase tracking-[0.25em] text-black">
                {homepage?.home_contact_badge}
              </span>

              <h2 className="ownadz-contact-title mt-6 text-4xl font-black leading-tight text-black md:text-5xl">
                {homepage?.home_contact_title}
              </h2>

              <p className="ownadz-contact-description mt-6 max-w-xl  text-black/70">
                {homepage?.home_contact_des}
              </p>

              <div className="mt-10 space-y-5">
                <div className="ownadz-contact-info group flex items-start gap-5 rounded-[28px] border border-black/5 bg-white p-4 shadow-[0_10px_30px_rgba(0,0,0,0.05)] transition-all duration-500 hover:-translate-y-1 hover:border-[#ffbd59] hover:shadow-[0_20px_50px_rgba(255,189,89,0.18)]">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#ffbd59]/15 text-black text-2xl font-bold">
                    ✉
                  </div>
                  <div>
                    <h3 className="font-black text-xl text-black">
                      {homepage?.home_contact_mailtitle}
                    </h3>
                    <p className="mt-2 text-black/70">
                      {homepage?.home_contact_mailaddress}
                    </p>
                  </div>
                </div>

                <div className="ownadz-contact-info group flex items-start gap-5 rounded-[28px] border border-black/5 bg-white p-4 shadow-[0_10px_30px_rgba(0,0,0,0.05)] transition-all duration-500 hover:-translate-y-1 hover:border-[#ffbd59] hover:shadow-[0_20px_50px_rgba(255,189,89,0.18)]">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#ffbd59]/15 text-black text-2xl font-bold">
                    ☎
                  </div>
                  <div>
                    <h3 className="font-black text-xl text-black">
                      {homepage?.home_contact_numtitle}
                    </h3>
                    <p className="mt-2 text-black/70">
                      {homepage?.home_contact_nummber}
                    </p>
                  </div>
                </div>

                <div className="ownadz-contact-info group flex items-start gap-5 rounded-[28px] border border-black/5 bg-white p-4 shadow-[0_10px_30px_rgba(0,0,0,0.05)] transition-all duration-500 hover:-translate-y-1 hover:border-[#ffbd59] hover:shadow-[0_20px_50px_rgba(255,189,89,0.18)]">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#ffbd59]/15 text-black text-2xl font-bold">
                    📍
                  </div>
                  <div>
                    <h3 className="font-black text-xl text-black">
                      {homepage?.home_contact_addtitle}
                    </h3>
                    <p className="mt-2 text-black/70">
                      {homepage?.home_contact_address}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="ownadz-contact-right relative">
              <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-[#ffbd59]/20 blur-3xl"></div>

              <div className="relative rounded-[40px] border border-black/5 bg-white p-6 md:p-8 shadow-[0_25px_80px_rgba(0,0,0,0.08)]">
                <form className="space-y-5">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="ownadz-contact-input h-16 w-full rounded-2xl border border-black/10 bg-[#fafafa] px-5 text-black outline-none transition-all duration-300 focus:border-[#ffbd59] focus:bg-white"
                  />

                  <input
                    type="email"
                    placeholder="Your Email"
                    className="ownadz-contact-input h-16 w-full rounded-2xl border border-black/10 bg-[#fafafa] px-5 text-black outline-none transition-all duration-300 focus:border-[#ffbd59] focus:bg-white"
                  />

                  <input
                    type="text"
                    placeholder="Your Business"
                    className="ownadz-contact-input h-16 w-full rounded-2xl border border-black/10 bg-[#fafafa] px-5 text-black outline-none transition-all duration-300 focus:border-[#ffbd59] focus:bg-white"
                  />

                  <textarea
                    rows="6"
                    placeholder="Tell us about your project"
                    className="ownadz-contact-textarea w-full rounded-2xl border border-black/10 bg-[#fafafa] p-5 text-black outline-none transition-all duration-300 focus:border-[#ffbd59] focus:bg-white"
                  />

                  <button
                    type="submit"
                    className="ownadz-contact-button group relative w-full overflow-hidden rounded-2xl bg-black py-5 font-bold text-white transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(255,189,89,0.35)]"
                  >
                    <span className="relative z-10">Send Inquiry</span>
                    <div className="absolute inset-0 translate-y-full bg-[#ffbd59] transition-transform duration-500 group-hover:translate-y-0"></div>
                    <span className="absolute inset-0 z-20 flex items-center justify-center font-bold text-black opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                      Send Inquiry
                    </span>
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}