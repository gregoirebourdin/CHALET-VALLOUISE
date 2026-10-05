export const SITE = {
  name: 'Chalet Vallouise',
  tagline: 'Chalets et appartements de vacances au cœur des Écrins',
  url: 'https://www.chalet-vallouise.fr',
  locale: 'fr_FR',
  // Tant que l'accord avec l'agence n'est pas signé, le site reste en démo : noindex + robots fermé.
  indexable: import.meta.env.PUBLIC_INDEXABLE === 'true',
  agency: {
    name: 'Vallouise Immobilier',
    url: 'https://www.vallouise-immobilier.com/',
    phone: '04 92 23 43 29',
    phoneHref: 'tel:+33492234329',
    street: '493 route du Gyr, Les Auches',
    since: 2004,
    hours: 'du lundi au samedi, 9 h – 12 h et 14 h – 18 h',
    postalCode: '05290',
    city: 'Vallouise',
    region: 'Hautes-Alpes',
    country: 'FR',
    geo: { lat: 44.84203, lng: 6.49277 },
  },
  priceCheckedOn: '5 octobre 2026',
} as const;

export const UTM = (content: string, campaign = 'annonce') =>
  `utm_source=chalet-vallouise.fr&utm_medium=referral&utm_campaign=${campaign}&utm_content=${encodeURIComponent(content)}`;
