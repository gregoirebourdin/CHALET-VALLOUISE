import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { SITE } from '../lib/site';
import { listings, chalets, apartments, VILLAGES, inVillage, euro } from '../lib/listings';

// llms.txt : résumé structuré du site pour les moteurs de réponse IA (GEO).
export const GET: APIRoute = async () => {
  const posts = await getCollection('blog');
  const min = Math.min(...listings.map((l) => l.priceFrom ?? Infinity));
  const lines = [
    `# ${SITE.name}`,
    '',
    `> ${listings.length} locations de vacances (${chalets.length} chalets, ${apartments.length} appartements) à Vallouise, Pelvoux et Puy-Saint-Vincent (Hautes-Alpes, Parc national des Écrins), gérées par l'agence locale ${SITE.agency.name} (${SITE.agency.street}, ${SITE.agency.postalCode} ${SITE.agency.city}, ${SITE.agency.phone}, depuis ${SITE.agency.since}). Tarifs à la semaine dès ${euro(min)} (relevés le ${SITE.priceCheckedOn}). Réservation en ligne avec acompte.`,
    '',
    '## Villages',
    ...VILLAGES.map((v) => `- [Location à ${v.name}](${SITE.url}/${v.slug}/): ${inVillage(v.name).length} logements. ${v.blurb}`),
    '',
    '## Chalets',
    ...chalets.map((l) => `- [${l.name}](${SITE.url}/locations/${l.slug}/): ${l.village}, ${l.capacity} personnes${l.surface ? `, ${l.surface} m²` : ''}${l.tags.length ? `, ${l.tags.slice(0, 4).join(', ')}` : ''}${l.priceFrom ? `, dès ${euro(l.priceFrom)}/semaine` : ''}`),
    '',
    '## Appartements',
    ...apartments.map((l) => `- [${l.name}](${SITE.url}/locations/${l.slug}/): ${l.village}, ${l.capacity} personnes${l.skiInSkiOut ? ', skis aux pieds' : ''}${l.priceFrom ? `, dès ${euro(l.priceFrom)}/semaine` : ''}`),
    '',
    '## Guides',
    ...posts.map((p) => `- [${p.data.h1}](${SITE.url}/guides/${p.id}/): ${p.data.description}`),
    '',
  ];
  return new Response(lines.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
