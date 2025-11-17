import { SITE_DESCRIPTION, KEYWORDS } from "./consts";

export const data = {
  siteTitle: "Discovery Flight | Vegas Aviation",
  siteDescription: SITE_DESCRIPTION,
  siteKeywords: KEYWORDS,

  header: {
    image: {
      src: "/src/assets/pilot-flying-over-city-vegas-aviation-summerlin-become-a-pilot-cropped.webp",
      alt: "Student taking the controls during a discovery flight at Vegas Aviation",
    },
    eyebrow: "Discovery Flight",
    title: "Your First Step Into the World of Aviation",
    subTitle:
      "Curious about becoming a pilot? A Discovery Flight lets you take the controls and experience what it's really like to fly, no experience needed.",
  },

  whatIsSection: {
    underHeader: "What Is a Discovery Flight?",
    title: "Take the Controls and Experience Real Flying",
    description:
      "A Discovery Flight is an introductory aviation experience where YOU get to take the controls of the airplane under the guidance of one of our Certified Flight Instructors (CFI). After your flight, you'll receive a detailed post-flight briefing. The best part? Your flight time counts toward your Private Pilot License requirements and can be logged in your Pilot Logbook.",
    button: {
      title: "Book a Flight",
      link: "/contact",
    },
    image: {
      src: "/src/assets/discovery-flight-cfi-student-vegas-aviation-nevada.jpg",
      alt: "Student and CFI next to an aircraft",
    },
  },
};
