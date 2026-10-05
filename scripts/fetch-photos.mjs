// Télécharge les photos des annonces (CDN de l'agence) et génère des WebP optimisés.
// Usage : node scripts/fetch-photos.mjs [maxParAnnonce=8]
import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const MAX = Number(process.argv[2] ?? 8);
const WIDTHS = [640, 1280];
const listings = JSON.parse(await fs.readFile('src/data/listings.raw.json', 'utf8'));
const refSlug = (ref) => ref.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function download(url, tries = 5) {
  for (let i = 1; i <= tries; i++) {
    try {
      const res = await fetch(encodeURI(url), { headers: { 'User-Agent': 'Mozilla/5.0' } });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return Buffer.from(await res.arrayBuffer());
    } catch (e) {
      if (i === tries) throw e;
      await sleep(800 * 2 ** i);
    }
  }
}

const manifestPath = 'src/data/photos.json';
let manifest = {};
try { manifest = JSON.parse(await fs.readFile(manifestPath, 'utf8')); } catch {}

const jobs = listings.map((l) => async () => {
  const slug = refSlug(l.ref);
  if (manifest[l.ref]?.length) return;
  const dir = path.join('public/photos', slug);
  await fs.mkdir(dir, { recursive: true });
  const out = [];
  for (const [i, url] of l.photos.slice(0, MAX).entries()) {
    try {
      const buf = await download(url);
      const meta = await sharp(buf).metadata();
      for (const w of WIDTHS) {
        await sharp(buf).rotate().resize({ width: w, withoutEnlargement: true })
          .webp({ quality: w > 700 ? 70 : 66 }).toFile(path.join(dir, `${i}-${w}.webp`));
      }
      const ratio = meta.height && meta.width ? +(meta.height / meta.width).toFixed(4) : 0.6667;
      out.push({ base: `/photos/${slug}/${i}`, ratio });
    } catch (e) {
      console.error(`ECHEC ${l.ref} #${i}: ${e.message}`);
    }
  }
  manifest[l.ref] = out;
  console.log(`${l.ref}: ${out.length} photos`);
});

const CONCURRENCY = 4;
const queue = [...jobs];
await Promise.all(Array.from({ length: CONCURRENCY }, async () => {
  while (queue.length) await queue.shift()();
}));
await fs.writeFile(manifestPath, JSON.stringify(manifest, null, 1));
console.log('OK', Object.keys(manifest).length, 'annonces');
