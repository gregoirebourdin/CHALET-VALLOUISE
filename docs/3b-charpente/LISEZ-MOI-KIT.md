# Kit 3B Charpente : mode d'emploi

Ce kit contient tout ce qu'il faut pour qu'un autre Claude Code construise le site complet de 3B Charpente, dans son propre dépôt, sans poser de question.

## Ce qu'il y a dedans

| Dossier ou fichier | Contenu |
|---|---|
| `PROMPT.md` | Le prompt complet : direction artistique, pages, SEO et GEO, espace d'administration (Payload CMS), livrables. |
| `docs/00-brief.md` | Faits vérifiés, textes validés, direction artistique, ton, règles SEO et GEO, plan du site, redirections. |
| `docs/decisions-par-defaut.md` | La réponse prudente à chaque question ouverte, pour construire sans attendre Jean. |
| `docs/pages/` | 27 fiches : sections, textes prêts à intégrer, balises, FAQ, liens, photos. |
| `docs/realisations-source.md` | Les 24 chantiers : textes, légendes, dossiers de photos. |
| `docs/questions-jean.md` | Les questions à poser à Jean plus tard. Elles se règlent ensuite dans l'administration. |
| `docs/audit-3b-charpente.html` | L'audit SEO et GEO, pour le contexte. |
| `reference/maquette-framer/` | Captures pleine page de ta maquette, en version ordinateur et mobile. |
| `reference/logos/` | Logos de la maquette (horizontal, vertical, favicon), image de partage, forme organique des bandeaux, ancien logo. |
| `reference/ambiance-maquette/` | Les deux photos d'ambiance de la maquette : forêt et rondins. |
| `photos-chantiers/` | Les 166 photos des 24 chantiers du site actuel, rangées par chantier, avec `manifest.json`. |

## Comment l'utiliser (3 étapes)

1. **Crée un nouveau dépôt GitHub vide** pour le site, par exemple `3b-charpente-site`.
2. **Décompresse le kit et pousse-le dans ce dépôt**, à la racine, dans un dossier nommé exactement `3b-charpente-kit/`.
3. **Ouvre une session Claude Code sur ce dépôt et colle ce message :**

```
Lis en entier 3b-charpente-kit/PROMPT.md, puis tous les fichiers qu'il cite dans 3b-charpente-kit/ (docs, fiches de page, captures de la maquette, logos, photos).
Construis le site complet en suivant ce prompt à la lettre.
Le client n'est pas joignable : ne me pose aucune question sur son entreprise, applique 3b-charpente-kit/docs/decisions-par-defaut.md.
Commence par docs/architecture.md et docs/design.md, puis code, importe tout le contenu et les photos, et termine par le rapport de contrôle.
Fais des commits réguliers.
```

## Ce que tu devras faire toi-même ensuite

- **Créer les comptes et renseigner les variables d'environnement** listées dans `.env.example` :
  - base PostgreSQL (Neon ou Supabase) ;
  - stockage des médias ;
  - clé Resend pour les e-mails du formulaire ;
  - hébergement Vercel.
- **Mettre en ligne :**
  - brancher le nom de domaine 3bcharpente.fr ;
  - fermer new.3bcharpente.fr une fois les redirections actives.
- **Avec Jean :**
  - passer `docs/questions-jean.md` en revue ;
  - corriger les « Points à valider » dans l'administration ;
  - revendiquer sa fiche Google.
