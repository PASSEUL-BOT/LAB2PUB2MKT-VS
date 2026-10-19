import type { APIRoute } from 'astro';

export const GET: APIRoute = () => {
  const siteUrl = import.meta.env.SITE ?? 'https://example.github.io';
  const sitemapUrl = new URL(`${import.meta.env.BASE_URL}sitemap.xml`, siteUrl).href;

  return new Response(`User-agent: *\nAllow: /\nSitemap: ${sitemapUrl}\n`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
