import type { APIRoute } from 'astro';

export const GET: APIRoute = () => {
  const siteUrl = import.meta.env.SITE;
  const robotsTxt = [
    'User-agent: *',
    'Allow: /',
    '',
    siteUrl ? `Sitemap: ${siteUrl}/sitemap-index.xml` : '',
  ].filter(Boolean).join('\n');

  return new Response(robotsTxt, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
