import type { APIRoute } from 'astro';
import { SITE } from '../lib/site';

export const GET: APIRoute = () => {
  const body = SITE.indexable
    ? `User-agent: *\nAllow: /\n\nSitemap: ${SITE.url}/sitemap-index.xml\n`
    : `# Maquette de démonstration : indexation désactivée\nUser-agent: *\nDisallow: /\n`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
