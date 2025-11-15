// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig, envField } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  integrations: [mdx(), sitemap(), react()],
  env: {
    schema: {
      PORTAL_URL: envField.string({context: "client", access: "public", optional: false}),
      PORTAL_API_KEY: envField.string({context: "client", access: "public", optional: false}),
      SCHOOL_RANDOM_ID: envField.string({context: "client", access: "public", optional: false}),
      ENROLL_WEBHOOK_URL: envField.string({context: "client", access: "public", optional: false}),
      CONTACT_US_WEBHOOK_URL: envField.string({context: "client", access: "public", optional: false}),
      DISCOVERY_SESSION_WEBHOOK_URL: envField.string({context: "client", access: "public", optional: false}),
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});