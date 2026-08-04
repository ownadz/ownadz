import ContactForm from "@/components/forms/ContactForm";

export async function generateMetadata() {
  return {
    title: "Contact Ownadz | Digital Marketing Agency",
    description:
      "Contact Ownadz for SEO, performance marketing, web development, and digital growth services. Get a free consultation today.",
    alternates: {
      canonical: "https://www.ownadz.com/contact",
    },
    openGraph: {
      title: "Contact Ownadz | Digital Marketing Agency",
      description:
        "Contact Ownadz for SEO, performance marketing, web development, and digital growth services. Get a free consultation today.",
      url: "https://www.ownadz.com/contact",
      type: "website",
    },
  };
}

export default function ContactPage() {
  return <ContactForm />;
}

