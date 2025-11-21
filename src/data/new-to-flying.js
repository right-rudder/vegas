import { KEYWORDS, LOCATION_KEYWORDS, PRIMARY_KEYWORDS } from "./consts";

const keywords = [
  KEYWORDS,
  PRIMARY_KEYWORDS.transactional,
  PRIMARY_KEYWORDS.informational,
  LOCATION_KEYWORDS.secondary,
].join(", ");

export const data = {
  siteTitle: "New to Flying | Vegas Aviation",
  siteDescription:
    "Start your pilot career at Vegas Aviation during the boom of the expected shortage of pilots in the near future. There will be a need for over 600,000 new pilots in the next 20 years, this is your opportunity to become one of them.",
  siteKeywords: keywords,
  header: {
    image: {
      src: "/src/assets/pilot-flying-over-city-vegas-aviation-summerlin-become-a-pilot.jpg",
      alt: "Pilot flying over a city",
    },
    eyebrow: "Start Flying",
    title: "Why Become a Pilot?",
    subTitle:
      "With the expected shortage of pilots in the near future there will be a need for over <b>600,000</b> new pilots in the next <b>20 years</b>, this is your opportunity to become one of them",
    cta: [
      {
        url: "/enroll",
        text: "Enroll Now",
      },
    ],
  },
  howTo: {
    eyebrow: "YOUR JOURNEY",
    title: "How to Become a Pilot",
    subTitle:
      "Embark on the exciting journey to becoming a pilot with Vegas Aviation by following these structured steps.",
    steps: [
      {
        title: "Book a Discovery Flight",
        description: `<b>Try flying in the real cockpit, no experience required.</b>
          Take a 30-60 minute introductory lesson at North Las Vegas Airport (KVGT) with a Vegas Aviation instructor. You'll get hands-on stick time, see basic maneuvers, and experience radio work and a takeoff/landing, a fast, fun way to confirm a career choice.
          
          What to expect: Pre-flight briefing, ~20-40 minutes at the controls, post-flight debrief.`,
        image: {
          src: "/src/assets/stock/airplane-rainbow-las-vegas-vegas-aviation-nevada-flight-training.jpg",
          alt: "Airplane taking off over Las Vegas with a rainbow in the background",
        },
        cta: {
          url: "/discovery-flight",
          text: "Book a Discovery Flight",
        }
      },
      {
        title: "Get Your Medical Certificate",
        description:
          `<b>Secure the FAA medical you need to train and fly professionally.</b>
        For career pilots you'll typically need at least a FAA 3rd-class medical to solo and a 2nd-class (or higher) for commercial/airline career tracks. Schedule an appointment with an FAA-authorized Aviation Medical Examiner (AME) early, it's quick, inexpensive, and clears the way for formal training.

        What to expect: Medical history review, vision/hearing checks, basic physical exam.`,
        image: {
          src: "/src/assets/stock/medical-certificate-vegas-aviation-flight-training-nevada.webp",
          alt: "Medical certificate documents",
        },
      },
      {
        title: "Start Your Training",
        description: `<b>Structured flight + ground training to build skills, hours, and confidence.</b>
        At Vegas Aviation you'll combine flight lessons in our Cessna fleet with focused ground instruction and simulator time as needed. Typical Private Pilot progress for most students is ~60-75 hours (FAA minimum 40), then add Instrument, Commercial, and CFI phases for a professional path, we'll help you plan the most efficient sequence for career goals.

        What to expect: Weekly or intensive lesson schedules, pre/post-flight briefings, logbook tracking, and periodic progress checks.`,
        image: {
          src: "/src/assets/flying-lessons_vegas-aviation_become-a-pilot_las-vegas_nevada.jpg",
          alt: "Student and CFI on a study session indoors",
        },
      },
      {
        title: "Pass Your Checkride",
        description:
          `<b>Demonstrate your knowledge and skills to an FAA examiner and earn your certificate.</b>
          Your checkride (practical test) is the final step: an oral exam covering regulations and decision-making, followed by a flight evaluation. Vegas Aviation instructors will prepare you with mock orals and flight reviews until you're ready to pass confidently. Once you pass, you'll receive your pilot certificate or rating and move on to building professional flight time.

          What to expect: Examiner oral (knowledge, scenarios), flight demonstration (maneuvers, approaches, emergencies), paperwork and logbook endorsement.`,
        image: {
          src: "/src/assets/flight-training/cfi-student-front-plane-vegas-aviation-commercial-pilot.jpg",
          alt: "Student and CFI side by side in front of an airplane",
        },
      },
    ],
    cta: {
      url: "/enroll",
      text: "Start Your Journey Today",
    },
  },
  opportunity: {
    eyebrow: "Why",
    title: "Now is the Best Time to Learn to Fly",
    subTitle: "The aviation industry needs pilots more than ever, and your timing couldn't be better",
    bgImage: {
      src: "/src/assets/stock/bar-chart-background-vegas-aviation-pilot-career.png",
      alt: "Bar chart increasing from left to right",
    },
    data: [
      {
        title: "The projected demand for pilots in North America by 2044 is",
        stat: "119 K",
      },
      {
        title: "The mandatory retirements from 2023 to 2028 are",
        stat: "12 K",
      },
      {
        title: "Airlines are hiring above need, with an industry pilot desire of",
        stat: "11.5 K",
        suffix: "as of January 2022",
      },
      {
        title: "The starting yearly pay at regional airlines is",
        stat: "$80K - $100K",
      },
      {
        title: "The Senior Captains yearly pay is",
        stat: "$350K - $450K+",
        suffix: "(Air Line Pilots Association)",
      },
    ],
    cta: {
      url: "/enroll",
      text: "Start Your Career",
    },
  },
};
