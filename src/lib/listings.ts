import raw from '../data/listings.raw.json';
import photosManifest from '../data/photos.json';
import { UTM } from './site';

// Textes réécrits (contenu unique) — générés à part ; repli propre si une fiche manque.
const copyModules = import.meta.glob<Record<string, Copy>>('../data/listings.copy.json', { eager: true, import: 'default' });
const copyData: Record<string, Copy> = Object.values(copyModules)[0] ?? {};

export type Village = 'Vallouise' | 'Pelvoux' | 'Puy-Saint-Vincent';
export type Kind = 'chalet' | 'appartement';

interface Copy {
  slug: string; name: string; seoTitle: string; metaDescription: string; headline: string;
  intro: string[]; highlights: string[]; rooms: string[]; bathrooms: string | null;
  equipment: string[]; tags: string[]; petsAllowed: boolean | null; skiInSkiOut: boolean;
}
interface RawListing {
  title_tag?: string; url: string; ref: string; type: string; village: string; capacity: number | null;
  features: Record<string, string | boolean>; etage: string | null; description: string;
  latlng: [number, number] | null; prices: Record<string, string>; enova_id: string | null; photos: string[];
}
export interface Photo { base: string; ratio: number }

export interface Listing {
  ref: string; slug: string; kind: Kind; village: Village; name: string;
  seoTitle: string; metaDescription: string; headline: string; intro: string[];
  highlights: string[]; rooms: string[]; bathrooms: string | null; equipment: string[];
  tags: string[]; petsAllowed: boolean | null; skiInSkiOut: boolean;
  capacity: number; surface: number | null; pieces: number | null; standing: string | null;
  floor: string | null; garage: boolean; parking: boolean;
  latlng: [number, number] | null; photos: Photo[]; remotePhotos: string[];
  prices: { key: string; label: string; amount: number | null }[]; priceFrom: number | null;
  bookingUrl: string;
  requestUrl: string;
}

export const PRICE_WEEKS: { key: string; label: string; season: 'hiver' | 'ete' }[] = [
  { key: 'noel', label: 'Semaine du 19 déc. 2026', season: 'hiver' },
  { key: 'hiver_janvier', label: 'Semaine du 9 janv. 2027', season: 'hiver' },
  { key: 'hiver_fevrier', label: 'Semaine du 13 févr. 2027', season: 'hiver' },
  { key: 'ete_juillet', label: 'Semaine du 17 juil. 2027', season: 'ete' },
  { key: 'ete_aout', label: 'Semaine du 7 août 2027', season: 'ete' },
];

// Formulaire de demande de l'agence, prérempli par l'URL (référence, dates, message).
// Le message porte la mention de source : chaque demande reçue par l'agence est attribuable.
export const REQUEST_MESSAGE = 'Demande envoyée via Chalet Vallouise. Bonjour, je souhaite réserver ce logement aux dates indiquées.';
const REQUEST_BASE = 'https://www.vallouise-immobilier.com/reservation/fillform-5';
export const requestUrl = (ref: string, from?: string, to?: string) =>
  `${REQUEST_BASE}-field28-${encodeURIComponent(ref)}${from && to ? `-field29-${from}-field30-${to}` : ''}-field27-${encodeURIComponent(REQUEST_MESSAGE)}`;

const titleCase = (s: string) => s.toLowerCase().replace(/(^|[\s'-])(\p{L})/gu, (_m, p, c) => p + c.toUpperCase());
const slugify = (s: string) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const num = (v: unknown) => { const m = String(v ?? '').match(/\d+/); return m ? Number(m[0]) : null; };

function build(r: RawListing): Listing {
  const kind: Kind = r.type === 'CHALET' ? 'chalet' : 'appartement';
  const village = (r.village === 'Puy Saint Vincent' ? 'Puy-Saint-Vincent' : r.village) as Village;
  const c = copyData[r.ref];
  const fallbackName = `${kind === 'chalet' ? 'Chalet' : 'Appartement'} ${titleCase(r.ref.replace(/^(CHAL|APPA)\s+/, ''))}`;
  const capacity = r.capacity ?? 4;
  const slug = c?.slug ?? slugify(`${kind} ${r.ref.replace(/^(CHAL|APPA)\s+/, '')} ${village} ${capacity} personnes`);
  const prices = PRICE_WEEKS.map((w) => ({ key: w.key, label: w.label, amount: num(r.prices?.[w.key]) }));
  const amounts = prices.map((p) => p.amount).filter((a): a is number => !!a);
  const f = r.features ?? {};
  return {
    ref: r.ref, slug, kind, village,
    name: c?.name ?? fallbackName,
    seoTitle: c?.seoTitle ?? `${fallbackName} à ${village} · ${capacity} personnes`,
    metaDescription: c?.metaDescription ?? `${fallbackName} pour ${capacity} personnes à ${village}, dans le Parc national des Écrins. Photos, équipements et demande de réservation.`,
    headline: c?.headline ?? '',
    intro: c?.intro ?? [],
    highlights: c?.highlights ?? [],
    rooms: c?.rooms ?? [],
    bathrooms: c?.bathrooms ?? null,
    equipment: c?.equipment ?? Object.entries(f).filter(([, v]) => v === true).map(([k]) => k),
    tags: c?.tags ?? [],
    petsAllowed: c?.petsAllowed ?? null,
    skiInSkiOut: c?.skiInSkiOut ?? /skis? aux pieds|pied des pistes/i.test(`${r.title_tag ?? ''} ${r.description}`),
    capacity,
    surface: num(f['Surface habitable']),
    pieces: num(f['Nombre de pièces']),
    standing: typeof f['Standing'] === 'string' ? (f['Standing'] as string) : null,
    floor: r.etage ? r.etage.replace(/i[èe]me/, 'e').replace(/\s+/g, ' ') : null,
    garage: f['Garage'] === 'oui',
    parking: f['Parking'] === 'oui',
    latlng: r.latlng,
    photos: ((photosManifest as Record<string, Photo[]>)[r.ref] ?? []),
    remotePhotos: r.photos,
    prices,
    priceFrom: amounts.length ? Math.min(...amounts) : null,
    bookingUrl: `${r.url}?${UTM(slug)}`,
    requestUrl: requestUrl(r.ref),
  };
}

const order = (l: Listing) => (l.kind === 'chalet' ? 0 : 1);
export const listings: Listing[] = (raw as RawListing[])
  .map(build)
  .sort((a, b) => order(a) - order(b) || b.capacity - a.capacity || a.name.localeCompare(b.name, 'fr'));

export const bySlug = (slug: string) => listings.find((l) => l.slug === slug);
export const chalets = listings.filter((l) => l.kind === 'chalet');
export const apartments = listings.filter((l) => l.kind === 'appartement');
export const inVillage = (v: Village) => listings.filter((l) => l.village === v);

export const VILLAGES: { name: Village; slug: string; altitude: string; blurb: string; cover: string }[] = [
  { name: 'Vallouise', slug: 'vallouise', altitude: '1 165 m', blurb: 'Village historique, commerces, ski de fond et départ des grandes randonnées des Écrins.', cover: 'CHAL LES TROLLS' },
  { name: 'Pelvoux', slug: 'pelvoux', altitude: '1 250 m', blurb: 'Station-village familiale au pied du massif, avec plusieurs appartements skis aux pieds.', cover: 'CHAL LE GYPAETE' },
  { name: 'Puy-Saint-Vincent', slug: 'puy-saint-vincent', altitude: '1 400 – 1 800 m', blurb: 'Le grand domaine skiable de la vallée, à quelques minutes de Vallouise et Pelvoux.', cover: 'CHAL SCHMOES' },
];
export const villageBySlug = (slug: string) => VILLAGES.find((v) => v.slug === slug);

export const cover = (ref: string) => listings.find((l) => l.ref === ref)?.photos[0];

export const TAG_LABELS: Record<string, string> = {
  'skis aux pieds': 'Skis aux pieds', jacuzzi: 'Jacuzzi', sauna: 'Sauna', hammam: 'Hammam',
  'bain nordique': 'Bain nordique', 'cheminée': 'Cheminée', 'poêle à bois': 'Poêle à bois',
  jardin: 'Jardin', garage: 'Garage', 'grand groupe': 'Grand groupe', 'plein sud': 'Plein sud',
};

export const euro = (n: number) => new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(n);
