# chalet-vallouise.fr

Site vitrine des locations de vacances de l'agence Vallouise Immobilier (Vallouise, Pelvoux, Puy-Saint-Vincent), construit avec Astro (site statique).

- `src/data/listings.raw.json` : annonces relevées sur vallouise-immobilier.com (caractéristiques, tarifs indicatifs, photos)
- `src/data/listings.copy.json` : textes réécrits (contenu unique, SEO)
- `src/content/guides`, `src/content/blog` : pages villages et guides (Markdown)
- `scripts/fetch-photos.mjs` : télécharge et optimise les photos en WebP (`public/photos`)
- `docs/audit-vallouise-immobilier.html` : audit SEO/GEO et proposition

## Commandes

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # sortie statique dans dist/
```

## Indexation

Par défaut le site est en mode démo : `noindex` et `robots.txt` fermé.
Pour l'ouvrir aux moteurs, définir `PUBLIC_INDEXABLE=true` dans les variables d'environnement Vercel.
