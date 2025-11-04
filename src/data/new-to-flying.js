import { SITE_DESCRIPTION, KEYWORDS } from "./consts";

export const data = {
  siteTitle: "New to Flying | Vegas Aviation",
  siteDescription: SITE_DESCRIPTION /* TODO : Update? */,
  siteKeywords: KEYWORDS /* TODO : Update? */,
  header: {
    image: {
      src: "/src/assets/pilot-flying-over-city-vegas-aviation-summerlin-become-a-pilot.jpg",
      alt: "Pilot flying over a city",
    },
    eyebrow: "Start Flying",
    title: "Why Become a Pilot?",
    subTitle:
      "With the expected shortage of pilots in the near future there will be a need for over <b>600,000</b> new pilots in the next <b>20 years</b>, this is your opportunity to become one of them",
    cta: {
      url: "/enroll",
      text: "Enroll Now",
    },
  },
  opportunity: {
    eyebrow: "Why",
    title: "Now is the Best Time to Learn to Fly",
    subTitle: "The aviation industry needs pilots more than ever, and your timing couldn't be better",
    bgImage: {
      src: "/src/assets/stock/bar-chart-background-vegas-aviation-pilot-career.png",
      alt: "Bar chart increasing from left to right"
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
    }
  }
};