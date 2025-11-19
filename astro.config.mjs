// @ts-check

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig, envField } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://vegasaviation.com/",
  integrations: [
    mdx(),
    sitemap({
      filter: (page) =>
        !page.includes("confirmation") && !page.includes("404") && !page.includes("500") && !page.includes("/api"),
      serialize: (item) => {
        if (item.url === "/") {
          item.priority = 1.0;
          // @ts-ignore
          item.changefreq = "daily";
        } else if (item.url.startsWith("/flight-training") || item.url.startsWith("/blog")) {
          item.priority = 0.9;
          // @ts-ignore
          item.changefreq = "weekly";
        } else if (item.url.startsWith("/services") || item.url === "/about-us" || item.url.startsWith("/resources")) {
          item.priority = 0.8;
          // @ts-ignore
          item.changefreq = "monthly";
        } else if (item.url.includes("privacy-policy") || item.url.includes("terms-of-service")) {
          item.priority = 0.3;
          // @ts-ignore
          item.changefreq = "yearly";
        } else {
          item.priority = 0.6;
          // @ts-ignore
          item.changefreq = "monthly";
        }

        return item;
      },
    }),
    react(),
  ],
  env: {
    schema: {
      PORTAL_URL: envField.string({ context: "client", access: "public", optional: false }),
      PORTAL_API_KEY: envField.string({ context: "client", access: "public", optional: false }),
      SCHOOL_RANDOM_ID: envField.string({ context: "client", access: "public", optional: false }),
      ENROLL_WEBHOOK_URL: envField.string({ context: "client", access: "public", optional: false }),
      CONTACT_US_WEBHOOK_URL: envField.string({ context: "client", access: "public", optional: false }),
      DISCOVERY_SESSION_WEBHOOK_URL: envField.string({ context: "client", access: "public", optional: false }),
    },
  },
  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      include: ["picocolors"],
    },
  },
  redirects: {
    "/scholarships": "/resources/scholarships",
    "/academic-partnerships": "/resources/education",
    "/insurance-requirements-for-students-and-renters": "/resources/insurance",
    "/aircraft-services": "/services",
    "/aircraft-rental": "/services/aircraft-rental",
    "/aircraft-maintenance": "/services/aircraft-maintenance",
    "/private-pilot": "/flight-training/private-pilot",
    "/instrument-rating": "/flight-training/instrument-rating",
    "/commercial-pilot": "/flight-training/commercial-pilot",
    "/flight-simulation": "/flight-training/flight-simulation",
    "/multi-engine-add-on": "/flight-training/multi-engine",
    "/certified-flight-instructor": "/flight-training/cfi",
    "/contact-us": "/contact",
    "/flight-training/summertime-flying": "/blog/summertime-flying",
    "/flight-training/csn-aviation-program": "/blog/csn-aviation-program",
    "/flight-training/hot-weather-flight-tips": "/blog/hot-weather-flight-tips",
    "/updates/vegas-aviation-partnership-with-purdue-global": "/blog/vegas-aviation-partnership-with-purdue-global",
    "/flight-training/rancho-h-s-aviation-magnet": "/blog/rancho-h-s-aviation-magnet",
    "/updates/vegas-aviation-partnership-with-stratus-financial":
      "/blog/vegas-aviation-partnership-with-stratus-financial",
    "/updates/announcing-two-additional-group-ground-schools": "/blog/announcing-two-additional-group-ground-schools",
    "/flight-training/the-importance-of-flight-simulators-in-pilot-training":
      "/blog/the-importance-of-flight-simulators-in-pilot-training",
    "/flight-training/7-reasons-las-vegas-is-ideal-for-flight-training":
      "/blog/7-reasons-las-vegas-is-ideal-for-flight-training",
    "/flight-training/10-reasons-why-the-beechcraft-duchess-is-the-best-plane":
      "/blog/10-reasons-why-the-beechcraft-duchess-is-the-best-plane",
    "/flight-training/guide-to-choosing-a-flight-school-for-your-pilot-training":
      "/blog/guide-to-choosing-a-flight-school-for-your-pilot-training",
  },
});
