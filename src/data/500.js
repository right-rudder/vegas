import { SITE_DESCRIPTION, KEYWORDS } from "./consts";

export const data = {
  siteTitle: "Server Error | Vegas Aviation",
  siteDescription: SITE_DESCRIPTION,
  siteKeywords: KEYWORDS,
  header: {
    image: {
      src: "/src/assets/pilot-flying-over-city-vegas-aviation-summerlin-become-a-pilot.jpg",
      alt: "Pilot flying over a city",
    },
    eyebrow: "500",
    title: "An error ocurred on our side",
    subTitle:
      "Plase try again and if the error persists contact us so we can fix it as soon as possible.",
    cta: [
      {
        url: "/",
        text: "Back to Landing",
      },
      {
        url: "/contact",
        text: "Contact Us",
      },
    ],
  },
};