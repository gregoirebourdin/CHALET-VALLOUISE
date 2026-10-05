import { SITE } from './site';
import type { Listing } from './listings';

const abs = (p: string) => new URL(p, SITE.url).href;

export const agencyLd = () => ({
  '@context': 'https://schema.org',
  '@type': 'RealEstateAgent',
  '@id': `${SITE.agency.url}#agence`,
  name: SITE.agency.name,
  url: SITE.agency.url,
  telephone: '+33492234329',
  address: {
    '@type': 'PostalAddress', streetAddress: SITE.agency.street, postalCode: SITE.agency.postalCode,
    addressLocality: SITE.agency.city, addressRegion: SITE.agency.region, addressCountry: SITE.agency.country,
  },
  geo: { '@type': 'GeoCoordinates', latitude: SITE.agency.geo.lat, longitude: SITE.agency.geo.lng },
  areaServed: ['Vallouise-Pelvoux', 'Puy-Saint-Vincent', 'Pays des Écrins'],
});

export const websiteLd = () => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: SITE.name,
  url: SITE.url,
  inLanguage: 'fr-FR',
  publisher: { '@id': `${SITE.agency.url}#agence` },
});

export const breadcrumbLd = (items: { name: string; href: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((c, i) => ({ '@type': 'ListItem', position: i + 1, name: c.name, item: abs(c.href) })),
});

export const faqLd = (items: { q: string; a: string }[]) => items.length ? ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: items.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
}) : null;

export const itemListLd = (ls: Listing[], name: string) => ({
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name,
  numberOfItems: ls.length,
  itemListElement: ls.map((l, i) => ({ '@type': 'ListItem', position: i + 1, url: abs(`/locations/${l.slug}/`), name: l.name })),
});

export const rentalLd = (l: Listing) => ({
  '@context': 'https://schema.org',
  '@type': 'VacationRental',
  '@id': abs(`/locations/${l.slug}/#logement`),
  name: l.name,
  identifier: l.ref,
  description: l.intro.join(' ') || l.metaDescription,
  url: abs(`/locations/${l.slug}/`),
  image: l.photos.map((p) => abs(`${p.base}-1280.webp`)),
  brand: { '@id': `${SITE.agency.url}#agence` },
  address: { '@type': 'PostalAddress', addressLocality: l.village, postalCode: '05290', addressRegion: 'Hautes-Alpes', addressCountry: 'FR' },
  ...(l.latlng ? { latitude: l.latlng[0], longitude: l.latlng[1] } : {}),
  containsPlace: {
    '@type': 'Accommodation',
    additionalType: l.kind === 'chalet' ? 'House' : 'Apartment',
    occupancy: { '@type': 'QuantitativeValue', value: l.capacity },
    ...(l.surface ? { floorSize: { '@type': 'QuantitativeValue', value: l.surface, unitCode: 'MTK' } } : {}),
    ...(l.pieces ? { numberOfRooms: l.pieces } : {}),
    amenityFeature: l.equipment.map((e) => ({ '@type': 'LocationFeatureSpecification', name: e, value: true })),
    ...(l.petsAllowed !== null ? { petsAllowed: l.petsAllowed } : {}),
  },
  ...(l.priceFrom ? {
    makesOffer: {
      '@type': 'Offer', priceCurrency: 'EUR', url: l.bookingUrl,
      priceSpecification: { '@type': 'UnitPriceSpecification', minPrice: l.priceFrom, priceCurrency: 'EUR', unitText: 'semaine' },
      seller: { '@id': `${SITE.agency.url}#agence` },
    },
  } : {}),
});

export const articleLd = (a: { title: string; description: string; url: string; updated: Date; image?: string }) => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: a.title,
  description: a.description,
  mainEntityOfPage: abs(a.url),
  dateModified: a.updated.toISOString().slice(0, 10),
  datePublished: a.updated.toISOString().slice(0, 10),
  inLanguage: 'fr-FR',
  ...(a.image ? { image: abs(a.image) } : {}),
  author: { '@type': 'Organization', name: SITE.name, url: SITE.url },
  publisher: { '@id': `${SITE.agency.url}#agence` },
});
