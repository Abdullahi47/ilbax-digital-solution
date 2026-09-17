export const SITE_URL = "https://ilbaxdigital.com";

export const pages = {
  home: {
    title: "ILBAX Digital Solution | Website, Branding & Marketing Mogadishu",
    description:
      "ILBAX Digital Solution waa digital agency ku yaal Mogadishu. Waxaan sameynaa website, logo, branding, graphic design, digital marketing iyo IT support oo loogu talagalay ganacsiyada Somalia.",
    path: "/",
  },
  about: {
    title: "Nagu Saabsan | ILBAX Digital Solution Mogadishu",
    description:
      "Ogow ILBAX Digital Solution: koox ku taal Mogadishu oo dhisata website, brand, design iyo xalal dhijitaal ah ganacsiyada, hay'adaha iyo shaqsiyaadka Somalia.",
    path: "/about",
  },
  services: {
    title: "Adeegyada | Website, Design, Branding iyo IT Support",
    description:
      "Adeegyada ILBAX: website development, database, graphic design, logo iyo branding, business card, poster, company profile, digital marketing iyo IT support.",
    path: "/services",
  },
  contact: {
    title: "Nala Xiriir | ILBAX Digital Solution",
    description:
      "Nala soo xiriir ILBAX Digital Solution, Mogadishu. Wac 615766571 ama email ilbaxdigitalsolution@gmail.com si aad u bilowdo mashruucaaga website ama branding.",
    path: "/contact",
  },
  quote: {
    title: "Hel Qiimeyn Bilaash ah | ILBAX Digital Solution",
    description:
      "Codso qiimeyn bilaash ah website, logo, branding, marketing ama IT support. ILBAX Digital Solution, Mogadishu, Somalia.",
    path: "/request-quote",
  },
};

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": `${SITE_URL}/#business`,
      name: "ILBAX Digital Solution",
      url: SITE_URL,
      image: `${SITE_URL}/images/ilbax-logo.jpg`,
      logo: `${SITE_URL}/images/ilbax-logo.jpg`,
      description:
        "Digital agency ku yaal Mogadishu, Somalia. Website development, branding, graphic design, digital marketing iyo IT support.",
      telephone: ["+252615766571", "+252615776076"],
      email: "ilbaxdigitalsolution@gmail.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Mogadishu",
        addressCountry: "SO",
      },
      areaServed: ["Mogadishu", "Somalia"],
      priceRange: "$$",
      sameAs: [],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Adeegyada ILBAX",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Website Development" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Logo and Branding" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Graphic Design" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Digital Marketing" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "IT Support" } },
        ],
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "ILBAX Digital Solution",
      inLanguage: "so",
      publisher: { "@id": `${SITE_URL}/#business` },
    },
  ],
};
