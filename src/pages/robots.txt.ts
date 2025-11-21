import type { APIRoute } from "astro";

const getRobotsTxt = (sitemapURL: URL) => `
User-agent: *
Allow: /

# Disallow sensitive or duplicate paths
Disallow: /api/
Disallow: /404
Disallow: /500
Disallow: /_astro/

# Crawl-delay for aggressive bots (optional, uncomment if needed)
Crawl-delay: 10

# Sitemap reference
Sitemap: ${sitemapURL.href}

# Host reference (optional, for Yandex and some bots)
Host: ${sitemapURL.origin}
`;

export const GET: APIRoute = ({ site }) => {
  const sitemapURL = new URL("sitemap-index.xml", site);
  return new Response(getRobotsTxt(sitemapURL), {
    headers: {
      "Content-Type": "text/plain",
    },
  });
};
