import { SITE_DESCRIPTION, KEYWORDS, LOCATION_KEYWORDS } from "../../data/consts";

const keywords = [
  KEYWORDS, 
  "aircraft rental, cessna 172, beechcraft duchess",
  LOCATION_KEYWORDS.primary,
  LOCATION_KEYWORDS.secondary,
].join(", ");

export const data = {
  siteTitle: "Aircraft Rental | Vegas Aviation",
  siteDescription: "Whether you're a newer pilot or an experienced aviator, Vegas Avoaton's fleet is meticulously maintained and ready to fly. Explore Las Vegas and beyond with confidence.",
  siteKeywords: keywords,

  header: {
    image: {
      src: "/src/assets/stock/airplane-takeoff-night-vegas-aviation-aircraft-rental-nevada.jpg",
      alt: "Airplane taking off at night",
    },
    eyebrow: "Aircraft Rental",
    title: "Ready for Your Next Adventure",
    subTitle:
      "Whether you're a newer pilot or an experienced aviator, our fleet is meticulously maintained and ready to fly. Explore Las Vegas and beyond with confidence.",
  },

  introSection: {
    underHeader: "Aircraft Rental",
    title: "Unlock the Skies with Premium Aircraft Rentals",
    description:
      "Vegas Aviation offers a versatile fleet designed to meet the needs of recreational pilots, students, and seasoned aviators. Our aircraft are kept in top condition by our in-house maintenance team, ensuring safety, reliability, and exceptional performance for every flight.",
    image: {
      src: "/src/assets/fleet/hangar-aircrafts-vegas-aviation-las-vegas-aircraft-rental.jpg",
      alt: "Hangar with multiple aircrafts",
    },
  },

  fleetSection: {
    eyebrow: "Our Rental Fleet",
    title: "Choose the Perfect Aircraft for Your Mission",

    cards: [
      {
        title: "Cessna 172N/P",
        subTitle: "$175/hr",
        description:
          "The Cessna 172N is a stable, reliable single-engine aircraft known for its ease of handling, spacious cabin, and trusted performance. Perfect for flight training, recreational flying, cross-country trips, or aerial photography.",
        highlights: ["Dual Garmin G5 PFD + MFD", "Garmin 430W GPS", "Garmin GTX 335", "Dual G5", "GNX 375", "GNC 255A"],
        image: {
          src: "/src/assets/vegas-aviation-cessna-las-vegas-flight-training.jpg",
          alt: "Cessna 172",
        },
        cta: {
          url: "/contact",
          text: "Rent Now",
        },
      },

      {
        title: "Beechcraft Duchess",
        subTitle: "$425/hr",
        description:
          "A dependable twin-engine aircraft ideal for multi-engine training and advanced flight experience. Known for strong performance, excellent handling, and dual-engine reliability.",
        highlights: [
          "Training toward Commercial Multi-Engine Land",
          "Fast, thorough transition to multi-engine operations",
          "Dual Garmin G5 EFIS",
          "Garmin 430W GPS",
        ],
        image: {
          src: "/src/assets/duchess-vegas-aviation-flight-training.jpg",
          alt: "Beechcraft Duchess",
        },
        cta: {
          url: "/contact",
          text: "Rent Now",
        },
      },
    ],
  },

  rentalPolicySection: {
    eyebrow: "Aircraft Rental",
    title: "Important Requirements for All Renters",
    subTitle: "Rental Insurance Policy",
    description:
      `<span class="font-force-roboto">All aircraft rentals must follow Vegas Aviation's safety and insurance standards to ensure a safe, smooth rental experience.</span>`,
    bullets: [
      `<span class="font-force-roboto">All renters must complete a checkout flight with a Vegas Aviation CFI.</span>`,
      `<span class="font-force-roboto">There is no hourly minimum for the checkout; maneuvers are at the instructor's discretion.</span>`,
      `<span class="font-force-roboto">Renters must carry non-owned aircraft (renter's) insurance with at least $50,000 in aircraft damage liability.</span>`,
      `<span class="font-force-roboto">Higher limits are recommended—choose what you can comfortably afford.</span>`,
      `<span class="font-force-roboto">Recommended insurance carriers: Avemco and AssuredPartners (but any approved provider is acceptable).</span>`,
    ],
  },

  CTASection: {
    underHeader: "Aircraft Rental",
    title: "Rent an Aircraft Now",
    description: "Ready to reserve an aircraft? Contact us to schedule your checkout or book your next flight.",
    image: {
      src: "/src/assets/las-vegas-nevada-flight-school-pilot-training-flying-lessons-learn-to-fly-vegas-aviation-copy.webp",
      alt: "Pilots in the cockpit of an aircraft",
    },
    button: {
      link: "/contact",
      title: "Contact Us",
    },
  },
};