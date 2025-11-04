import { SITE_DESCRIPTION, KEYWORDS } from "./consts";

export const data = {
  siteTitle: "About Us | Vegas Aviation",
  siteDescription: SITE_DESCRIPTION /* TODO : Update? */,
  siteKeywords: KEYWORDS /* TODO : Update? */,
  header: {
    image: {
      src: "/src/assets/about-us-cfi-team-vegas-aviation-flight-lessons.jpg",
      alt: "Vegas Aviation CFI team in front of a plane",
    },
    eyebrow: "About Us",
    title: "Learn more about Vegas Aviation",
    subTitle:
      "We're excited to get to know you, if you have any questions or want to get to know us more closely, please contact us and schedule a visit or discovery flight",
    cta: {
      url: "/contact",
      text: "Contact Us",
    },
  },
};
