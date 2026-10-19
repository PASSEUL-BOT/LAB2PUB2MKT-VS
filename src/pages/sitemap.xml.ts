import { getCollection } from 'astro:content';
import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  const articles = await getCollection('insight');
  const paths = [
    '/',
    '/services/',
    '/featured-cases/',
    '/insight/',
    '/expert-team/',
    '/testimonials/',
    '/contact/',
    ...articles.map((article) => `/insight/${article.id}/`),
  ];
  const siteUrl = import.meta.env.SITE ?? 'https://example.github.io';
  const baseUrl = import.meta.env.BASE_URL;
  const entries = paths
    .map((path) => {
      const sitePath = `${baseUrl}${path.replace(/^\/+/, '')}`;
      return `  <url><loc>${new URL(sitePath, siteUrl).href}</loc></url>`;
    })
    .join('\n');

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries}\n</urlset>`,
    { headers: { 'Content-Type': 'application/xml; charset=utf-8' } },
  );
};