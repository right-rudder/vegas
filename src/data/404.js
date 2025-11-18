import { SITE_DESCRIPTION, KEYWORDS } from "./consts";

export const data = {
  siteTitle: "Page Not Found | Vegas Aviation",
  siteDescription: SITE_DESCRIPTION,
  siteKeywords: KEYWORDS,
  header: {
    image: {
      src: "/src/assets/pilot-flying-over-city-vegas-aviation-summerlin-become-a-pilot.jpg",
      alt: "Pilot flying over a city",
    },
    eyebrow: "404",
    title: "This Page Seems to Have Taken Off",
    subTitle:
      "The page you are looking for is not here. Head back to landing or send us a message with any inquiries you might have.",
    cta: [
      {
        url: "/",
        text: "Back to Landing",
      },
      {
        url: "/contact",
        text: "Get in Touch",
      },
    ],
  },
};