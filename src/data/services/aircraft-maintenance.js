import { SITE_DESCRIPTION, KEYWORDS } from "../consts";

export const data = {
  siteTitle: "Aircraft Maintenance | Vegas Aviation",
  siteDescription: SITE_DESCRIPTION,
  siteKeywords: KEYWORDS,

  header: {
    image: {
      src: "/src/assets/maintenance/service-maintenance-aircraft-vegas-aviation-nevada-flight-school-cesnna.jpg",
      alt: "Two mechanics working on an aircraft",
    },
    eyebrow: "Aircraft Maintenance",
    title: "Professional Aircraft Maintenance",
    subTitle:
      "Your aircraft is a valuable investment, our certified mechanics and state-of-the-art facility ensure it stays safe, reliable, and performing at its best.",
  },

  aboutSection: {
    underHeader: "Vegas Aviation Mechanic",
    title: "If It Flies, We Can Fix It!",
    description:
      "Our skilled team of Certified A&P and IA mechanics is dedicated to keeping your aircraft in peak condition. Operating from a fully equipped maintenance facility, we provide comprehensive services for piston and jet-powered aircraft across all categories and classes. Whether you need routine inspections, advanced repairs, avionics upgrades, or damage restoration, we deliver safety, performance, and cost-effective results.",
    list: {
      title: "We Offer",
      items: [
        "Basic and advanced repairs and maintenance",
        "Oil changes",
        "100-hour inspections",
        "Pre-purchase inspections",
        "Annual inspections",
        "Aircraft damage repairs",
        "Avionics installations and upgrades",
        "Upholstery and more",
      ],
    },
    button: {
      title: "Book a Service",
      link: "/contact",
    },
    image: {
      src: "/src/assets/maintenance/service-maintenance-aircraft-vegas-aviation-nevada-flight-school-beechcraft duchess.jpg",
      alt: "Mechanic looking over an aircraft's engine",
    },
    sticky: "image",
  },

  maintenanceRatesSection: {
    eyebrow: "Our Maintenance Rates",
    title: "Cost-Effective, High-Quality Aircraft Maintenance",
    description:
      "Vegas Aviation delivers reliable, efficient, and competitively priced maintenance—without compromising on safety or workmanship.",
    cards: [
      {
        title: "Piston Aircraft",
        price: "$110/hr",
        description:
          "From routine oil changes and engine checks to structural inspections and avionics upgrades, we provide precise, end-to-end piston aircraft maintenance.",
      },
      {
        title: "Turbine Aircraft",
        price: "$130/hr",
        description:
          "We conduct thorough inspections, fuel system checks, repairs, avionics upgrades, and structural assessments to optimize performance and extend your turbine aircraft’s lifespan.",
      },
      {
        title: "Avionics",
        price: "$120/hr",
        description:
          "Our expert avionics team provides high-quality repairs, installations, updates, and performance upgrades to improve operational safety and efficiency.",
      },
      {
        title: "Aircraft-on-Ground (AOG)",
        price: "$130/hr",
        description:
          "Swift, reliable AOG service delivered from our state-of-the-art facility—minimizing downtime and restoring aircraft to airworthy condition quickly.",
      },
    ],
  },

  CTASection: {
    underHeader: "Aircraft Maintenance",
    title: "Request Our Services",
    description: "Get in touch with our team for scheduling or service inquiries.",
    button: {
      title: "Contact Us",
      link: "/contact",
    },
    image: {
      src: "/src/assets/maintenance/service-maintenance-aircraft-vegas-aviation-summerlin-flight-school_cesnna.jpg",
      alt: "Mechanics working on an aircraft's engine",
    },
    orientation: "left",
  },
};
