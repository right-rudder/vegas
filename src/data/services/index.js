import { SITE_DESCRIPTION, KEYWORDS } from "../../data/consts";
import { BsAirplaneFill } from "react-icons/bs";
import { FaScrewdriverWrench } from "react-icons/fa6";
import { PiAirplaneTakeoffFill } from "react-icons/pi";
import { RiComputerFill } from "react-icons/ri";

export const data = {
  siteTitle: "Aircraft Services | Vegas Aviation",
  siteDescription: SITE_DESCRIPTION,
  siteKeywords: KEYWORDS,

  header: {
    image: {
      src: "/src/assets/stock/airplane-rainbow-las-vegas-vegas-aviation-nevada-flight-training.jpg",
      alt: "Airplane taking off over Las Vegas with a rainbow in the background",
    },
    eyebrow: "Aircraft Services",
    title: "Comprehensive Aircraft Services at Vegas Aviation",
    subTitle:
      "From maintenance and rentals to discovery flights and simulation, Vegas Aviation delivers safe, reliable, and expertly managed aircraft services for pilots at every level.",
  },

  aboutSection: {
    underHeader: "Our Services",
    title: "Explore Vegas Aviation's Aircraft Service Options",
    description:
      "Vegas Aviation offers a full suite of aircraft services tailored to students, renters, and aviation enthusiasts. Our certified technicians, well-maintained fleet, and experienced instructors ensure every pilot receives unmatched reliability, performance, and support—both on the ground and in the air.",
    image: {
      src: "/src/assets/fleet/hangar-aircrafts-vegas-aviation-las-vegas-aircraft-rental.jpg",
      alt: "Hangar with multiple aircrafts",
    },
    button: {
      title: "Contact Us",
      link: "/contact",
    },
  },

  servicesSection: {
    eyebrow: "What We Offer",
    title: "Aircraft Services and Flight Experiences",
    description:
      "Whether you're maintaining your aircraft, renting for an adventure, or taking your first step into aviation, Vegas Aviation provides safe, professional, and reliable aviation services.",
    highlights: [
      {
        url: "/services/aircraft-maintenance",
        icon: FaScrewdriverWrench,
        title: "Aircraft Maintenance",
        subTitle: "Excellence",
        description:
          "Our certified technicians deliver meticulous, technology-driven aircraft maintenance to ensure your aircraft operates safely and at peak performance.",
      },
      {
        url: "/services/aircraft-rental",
        icon: BsAirplaneFill,
        title: "Aircraft Rental",
        subTitle: "Best Value",
        description:
          "Rent from our fleet of eight Cessna 172N and one Beechcraft Duchess—each maintained to the highest standards and ready for your next flight.",
      },
      {
        url: "/discovery-flight",
        icon: PiAirplaneTakeoffFill,
        title: "Discovery Flight",
        subTitle: "Thrilling",
        description:
          "Fly with an experienced instructor and experience the thrill of taking the controls for the first time. A perfect introduction to aviation.",
      },
      {
        url: "/flight-training/flight-simulation",
        icon: RiComputerFill,
        title: "Flight Simulation",
        subTitle: "Accessible",
        description:
          "Train in a safe, controlled environment with our advanced simulation technology—ideal for procedural training, IFR practice, and skill development.",
      },
    ],
    cta: {
      primary: {
        label: "Book a Discovery Flight",
        href: "/discovery-flight",
      },
      secondary: {
        label: "View Training Programs",
        href: "/flight-training",
      },
    },
  },

  fleetSection: {
    eyebrow: "Our Training Fleet",
    title: "Reliable & Well-Equipped Training Aircraft",
    description:
      "Vegas Aviation operates a rigorously maintained fleet of aircraft designed to support student training, time-building, and advanced ratings with maximum safety and uptime.",
    cards: [
      {
        title: "Cessna 172 (N/P Models)",
        price: "$175/hr",
        description:
        "A fleet of 8 Cessna 172N/P aircraft equipped with Garmin G5 EFIS/EPFD + MFD displays, Garmin GTX 335 transponder, and Garmin 430W GPS.",
      },
      {
        title: "Beechcraft Duchess",
        price: "$425/hr",
        description:
          "Our multi-engine Beechcraft Duchess offers competitive rates for commercial multi-engine training with reliable performance and IFR capabilities.",
      },
      {
        title: "Flight Instruction",
        price: "$55/hr",
        description:
          "Professional, safety-focused flight instruction—billed in addition to the aircraft hourly rate. Ideal for student pilots and advanced training.",
      },
    ],
  },
};