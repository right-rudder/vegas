import { SITE_DESCRIPTION, KEYWORDS } from "./consts";

export const data = {
  siteTitle: "Discovery Flight Request Confirmation | Vegas Aviation",
  siteDescription: SITE_DESCRIPTION /* TODO : Update? */,
  siteKeywords: KEYWORDS /* TODO : Update? */,
  header: {
    image: {
      src: "/src/assets/pilot-flying-over-city-vegas-aviation-summerlin-become-a-pilot.jpg",
      alt: "Pilot flying over a city",
    },
    eyebrow: "Success",
    title: "Request Sent",
    subTitle:
      "Your request for a Discovery Flight has been successfully sent and will be reviewed as soon as possible. Now, back to landing to landing with you.",
    cta: [
      {
        url: "/",
        text: "Back to Landing",
      },
    ],
  },
};