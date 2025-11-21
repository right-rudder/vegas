import { SITE_DESCRIPTION, KEYWORDS, PRIMARY_KEYWORDS, LOCATION_KEYWORDS } from "./consts";

const keywords = [
  KEYWORDS, 
  PRIMARY_KEYWORDS.transactional,
  LOCATION_KEYWORDS.primary,
  LOCATION_KEYWORDS.secondary,
].join(", ");

export const data = {
  siteTitle: "Enroll | Vegas Aviation",
  siteDescription: SITE_DESCRIPTION,
  siteKeywords: keywords,

  header: {
    image: {
      src: "/src/assets/stock/airplane-rainbow-las-vegas-vegas-aviation-nevada-flight-training.jpg",
      alt: "Airplane taking off in Las Vegas with a rainbow in the background",
    },
    eyebrow: "Enroll",
    title: "Start your aviation journey",
    subTitle:
      "Make your dream of becoming a pilot come true, start now with Vegas Aviation",
  },
};