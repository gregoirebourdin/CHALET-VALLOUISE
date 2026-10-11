# Prompt : site complet 3B Charpente (kit autonome)

Tu es un développeur full-stack et designer web senior. Tu construis des sites d'artisans qui sont à la fois très beaux, très rapides, très bien référencés (sur Google comme dans les réponses des IA : ChatGPT, Gemini, l'aperçu IA de Google), et que le client gère entièrement lui-même depuis un espace d'administration.

Tu travailles dans un dépôt dédié à ce site. Tout ce dont tu as besoin est dans le dossier `3b-charpente-kit/` à la racine du dépôt : documents, fiches de page, captures de la maquette, logos et photos des chantiers.

**Ta mission : construire le site complet de 3B Charpente**, charpentier écologique installé à L'Argentière-la-Bessée (Hautes-Alpes) depuis 2007. Tu pars de la direction artistique de la maquette Framer déjà validée et des fiches de rédaction page par page. **Tout le contenu doit être modifiable par Jean depuis un espace d'administration** (section 6).

---

## 0. Avant de coder

1. **Lis en entier les fichiers de référence.** Tout ce que tu écris en découle.
   - `3b-charpente-kit/docs/00-brief.md` : faits vérifiés, textes validés, direction artistique, ton, règles SEO et GEO, plan du site, redirections.
   - `3b-charpente-kit/docs/realisations-source.md` : les 24 chantiers réels, avec les légendes des photos et les dossiers d'images.
   - `3b-charpente-kit/docs/decisions-par-defaut.md` : **les réponses à toutes les questions ouvertes. Elles priment sur les mentions « À VALIDER » des fiches.**
   - **Tous** les fichiers de `3b-charpente-kit/docs/pages/` : une fiche par page, avec les sections dans l'ordre, le texte prêt à intégrer, les balises, la FAQ, les liens internes et les photos.
2. **Étudie la maquette.** Commence par les captures pleine page de `3b-charpente-kit/reference/maquette-framer/` (accueil, 3B Récup', à propos, réalisations, étude de cas, contact), en version ordinateur et en version mobile. Puis ouvre, si tu peux, la maquette en ligne https://3bcharpente.framer.website/. C'est la référence visuelle : couleurs, typographies, rythme, composants, animations. Les logos sont dans `3b-charpente-kit/reference/logos/`, les deux photos d'ambiance autorisées dans `3b-charpente-kit/reference/ambiance-maquette/`.
3. **Écris deux documents, puis code :**
   - `docs/design.md` : jetons de couleur, échelle typographique, espacements, rayons, ombres, composants, animations (déclencheur, durée, courbe) ;
   - `docs/architecture.md` : stack, modèle de contenu, blocs, rôles, publication (section 6).
4. **Liste les skills de ta session et charge ceux qui touchent au front-end ou au design**, s'il y en a. N'invente pas de nom de skill.

---

## 1. Règles intangibles

- **Les textes viennent des fiches de page**, importées dans l'administration (section 6.7). Tu peux raccourcir une phrase qui casse la mise en page, jamais ajouter un fait. Aucun texte affiché n'est écrit en dur dans le code.
  - Aucun chiffre, prix, délai, avis, label, partenaire ou nom de client inventé.
  - **Le client n'est pas joignable pendant le projet.** Aucune mention `[À VALIDER …]` ou `[À COMPLÉTER …]` n'apparaît sur le site : tu appliques `3b-charpente-kit/docs/decisions-par-defaut.md`. Chaque point est enregistré dans la collection « Points à valider » de l'administration et listé dans `docs/a-valider.md`.
- **Supprime tout le contenu de modèle de la maquette Framer :**
  - les témoignages « TechMatter » ;
  - le bloc Trustpilot « 4.7 out of 5 » ;
  - le badge « Expert du Réemploi » ;
  - les textes anglais des études de cas ;
  - les pages Pricing, Demo, Feature, Blog et Old-home.
- **Photos :**
  - Uniquement les vraies photos de chantier, fournies dans `3b-charpente-kit/photos-chantiers/` (un dossier par chantier, nommé comme l'adresse actuelle, avec `manifest.json`).
  - Elles font 800 à 1 200 px de large : ne les étire jamais au-delà (collages, cartes, galeries ; pas de plein écran).
  - Les photos d'ambiance forêt et rondins de la maquette (`3b-charpente-kit/reference/ambiance-maquette/`) servent au plus une ou deux fois : bandeau manifeste, page À propos.
  - Les photos de la maquette où apparaissent des personnes (atelier, perceuse, avatars) sont des photos de banque d'images : interdites.
  - Aucune image générée par IA présentée comme un chantier de 3B.
  - Aucune photo de banque d'images de personnes.
- **Section avis :** elle n'existe pas tant que de vrais avis Google ne sont pas fournis. L'appel discret « Vous avez travaillé avec nous ? Laissez un avis sur Google » ne s'affiche que si le lien de la fiche Google est renseigné dans le réglage « Entreprise ».

---

## 2. Direction artistique : reprendre la maquette Framer, en mieux

### Couleurs (jetons de la maquette)

| Rôle | Valeur |
|---|---|
| Fond crème | `#F8F4EE` |
| Texte | `#102311` |
| Vert forêt (boutons, bandeaux) | `#2C4F2D` |
| Vert des mots en accent dans les titres | `#336233` |
| Vert sauge (pastilles, accents sur fond sombre) | `#A3D2A3` |
| Pierre (texte secondaire) | `#78716C` |
| Cartes | `#FFFFFF` |
| Fond de section claire | `#F2F2EC` |

- Ajoute un thème sombre cohérent (forêt de nuit), qui suit le réglage de l'appareil.
- Vérifie les contrastes en AA.

### Typographies

- **Titres :** Nohemi Bold et SemiBold, auto-hébergée en WOFF2.
  - Elle est diffusée gratuitement par son créateur, Rajesh Rajput, sur Gumroad (rajputrajesh-448.gumroad.com/l/NOHEMI9), qui la déclare utilisable pour des projets commerciaux. Vérifie le fichier de licence du téléchargement avant la mise en ligne.
  - Si tu ne peux pas la télécharger, prends **Bricolage Grotesque** ou **Familjen Grotesk** (Google Fonts) en graisse 700 à 800, et note-le dans `design.md`.
  - Si elle n'est pas disponible, choisis une grotesque géométrique très grasse au rendu proche, et justifie ce choix dans design.md.
  - Approche légèrement serrée (−0,02 em) ; deux ou trois mots par titre en vert `#336233`. Dans les fiches, ces mots sont entre `**`.
- **Texte :** Inter, avec les mots forts en gras comme dans la maquette.
- `font-display: swap`, sous-ensemble latin.

### Composants à reproduire fidèlement

- **En-tête :**
  - logo « 3B Charpente » à gauche (`3b-charpente-kit/reference/logos/logo-horizontal-3b-charpente.png`). Redessine-le en SVG fidèle (le B en veinage de bois), sans le modifier ; garde le PNG comme référence. Le logo vertical et le favicon sont dans le même dossier. L'ancien logo du site actuel (`logo-actuel-site-3bcharpente-fr.png`, « Bio – Bâti – Bois ») sert seulement de référence d'histoire, pas sur le site.
  - au centre, les liens Prestations (menu déroulant), **3B Récup'** (pastille sauge pour le mettre en avant), Réalisations, À propos, Contact ;
  - à droite, le bouton contour « Demander mon devis » ;
  - sur mobile, un menu plein écran, avec le téléphone cliquable toujours visible.
- **Héros :**
  - titre en deux couleurs ;
  - texte avec les mots forts en gras ;
  - un bouton plein vert et un bouton contour ;
  - deux preuves avec pastille sauge ;
  - à droite, un collage de photos qui débordent (une grande, deux vignettes), avec de **vraies photos de chantier**.
- **Bandeau manifeste plein cadre :** fond photo sombre, titre blanc, mots en sauge, texte centré.
- **Cartes :**
  - prestations : blanches, coins arrondis, icône dans une pastille sauge ;
  - réalisations : étiquette « 3B Charpente » posée sur la photo et lien « Voir les travaux → ».
- **Bandeaux d'appel à l'action :** vert forêt, formes organiques vert clair en fond, grille ronde translucide, bouton blanc.
- **Méthode 3B Récup' :** cinq onglets numérotés de 01 à 05, avec un trait de progression ; en accordéon sur mobile.
- **FAQ :** accordéon dans des cartes blanches, avec le texte des réponses présent dans le HTML.
- **Pied de page :**
  - fond crème, logo, signature « Construire durablement, c'est construire pour l'avenir. » ;
  - colonnes Pages, 3B Récup', Secteurs, Conseils ;
  - coordonnées complètes et horaires.

### À ajouter, dans le même esprit

- **Bloc « En bref » en tête de chaque page de prestation :** fond `#F2F2EC`, liseré vert à gauche, texte de 40 à 60 mots.
- **Bandeau de preuves récurrent :** « Depuis 2007 · Compagnon du Devoir · Bois des Hautes-Alpes · Isolants biosourcés · RGE ». Un rappel compact sur chaque page de prestation.
- **Filtres de la page Réalisations :** par prestation et par commune, en pastilles. Filtrage côté client, sans recharger la page, et une adresse partageable par filtre (`#escaliers`, `#briancon`).
- **Galerie des fiches chantier :** photos en grille, ouverture en plein écran au clic, légendes en dessous, navigation au clavier.
- **Signature 3B Récup' :** un motif discret de cernes de bois ou de planches de réemploi dans les sections 3B Récup', pour que la filière ait son identité dans l'identité 3B. Reste sobre.

### Animations

Reprends celles de la maquette, sans en ajouter de spectaculaires :

- entrées en fondu montant (20 à 40 px, 500 à 700 ms, courbe douce) au premier affichage de chaque bloc ;
- survol des cartes : légère élévation et zoom de 1,03 sur la photo ;
- soulignement animé des liens ;
- accordéons fluides.

Contraintes :

- Tout le contenu reste visible sans JavaScript.
- Avec `prefers-reduced-motion`, aucun mouvement.
- Jamais de texte à opacité zéro dans le HTML.

---

## 3. Pages à construire

Le plan complet est dans `00-brief.md`, section 7 ; chaque page a sa fiche dans `pages/`.

- **Phase 1, au lancement :**
  - l'accueil ;
  - 9 pages de prestation ;
  - 3B Récup' et ses 3 pages ;
  - la page Réalisations et ses 24 fiches chantier ;
  - la page À propos ;
  - 3 pages de secteur ;
  - Contact ;
  - Mentions légales.
- **Phase 2 :** les 4 guides et la page `/conseils/` qui les liste (utile au fil d'Ariane). Construis le gabarit Article et publie les guides si leurs fiches sont prêtes.
- **Page 404 :** utile, avec la recherche des prestations et le téléphone.

**Les adresses sont celles du plan, à l'identique :** minuscules, tirets, barre oblique finale. Les 24 fiches chantier gardent l'identifiant de leur adresse actuelle (`/galerie/{slug}` → `/realisations/{slug}/`).

---

## 4. SEO technique (obligatoire)

- **Balises :**
  - title, meta description et H1 exactement comme dans les fiches ;
  - un seul H1 par page, visible ;
  - hiérarchie H2 et H3 propre ;
  - `<html lang="fr">`.
- **Adresse de référence et partage :**
  - balise canonique absolue sur chaque page, vers `https://3bcharpente.fr/…` (sans www) ;
  - Open Graph et Twitter : titre, description, image 1200 × 630 par page (photo du chantier principal).
- **Données structurées JSON-LD :**
  - sur tout le site, un LocalBusiness de type `["GeneralContractor","RoofingContractor"]`, généré à partir du réglage global « Entreprise » (section 6.3) ;
  - champs : nom, adresse exacte, téléphone `+33634673149`, e-mail `tardy@3bcharpente.fr`, horaires (ceux du réglage « Entreprise », par défaut ceux de `decisions-par-defaut.md`), géolocalisation, `areaServed` (communes des pages secteur, Hautes-Alpes), `foundingDate` 2007, `founder` Jean-Michel Tardy, `sameAs` (Facebook ; fiche Google à ajouter) ;
  - l'ancien e-mail des données structurées actuelles ne doit apparaître nulle part ;
  - par page : `Service`, `FAQPage` (questions et réponses identiques au texte visible), `BreadcrumbList`, `HowTo` pour la méthode 3B Récup', `Article` pour les guides, `ItemList` pour Réalisations, `CreativeWork` pour les fiches chantier.
- **Plan du site et robots :**
  - `sitemap.xml` généré automatiquement (avec `lastmod`) ;
  - `robots.txt` qui pointe vers lui ;
  - aucune page de test indexable.
- **Redirections 301** (table complète en section 8 du brief) :
  - gérées dans l'administration (section 6.5) ;
  - la redirection du domaine (www vers sans www, http vers https) se règle au niveau de l'hébergeur ;
  - une seule version du domaine en https, sans www ;
  - toutes les adresses de `new.3bcharpente.fr` redirigées.
- **Coordonnées :** les mêmes au caractère près sur toutes les pages, dans le pied de page et en données structurées. Téléphone en `tel:+33634673149`, toujours cliquable sur mobile.
- **Images :**
  - AVIF et WebP en 480, 960, 1440 et 1920 px, avec `srcset` et `sizes` ;
  - largeur et hauteur déclarées ;
  - chargement différé sous la ligne de flottaison ;
  - priorité haute sur l'image du héros ;
  - `alt` tirés des fiches ;
  - fichiers renommés en français (`escalier-quart-tournant-meleze-lamelle-colle-01.webp`).
- **Liens internes :** exactement ceux des fiches, avec les mêmes textes de lien. Fil d'Ariane visible sur toutes les pages, sauf l'accueil.
- **Mesure :** outil de mesure sans cookie (Plausible, Umami ou Vercel Analytics), donc sans bandeau de consentement. Événements suivis : clic sur le téléphone, clic sur l'e-mail, envoi du formulaire, clic sur « Demander mon devis ».

---

## 5. Performance et accessibilité

- **Performance :**
  - LCP sous 2,5 s en 4G, CLS sous 0,05, INP sous 200 ms ;
  - moins de 100 Ko de JavaScript compressé sur une page de prestation ;
  - score Lighthouse visé : au moins 95 en performance, accessibilité, bonnes pratiques et SEO, sur mobile.
- **Accessibilité :**
  - contrastes AA ;
  - navigation complète au clavier, focus visible ;
  - menus et accordéons avec les bons attributs ARIA ;
  - formulaire avec labels et messages d'erreur clairs.

**Formulaire de contact :**
- champs listés dans la fiche `21-contact.md` ;
- anti-spam sans captcha visuel (champ piège et délai) ;
- envoi vers `tardy@3bcharpente.fr` via Resend (voir section 6.6) ;
- message de confirmation clair ;
- aucun envoi simulé.

---

## 6. Architecture : un site entièrement géré depuis un espace d'administration

**Objectif :** Jean (ou Claire) peut tout modifier lui-même, sans développeur et sans risque de casser le design :
- les textes, les photos et les pages ;
- les réalisations, les questions fréquentes et l'équipe ;
- les horaires et les coordonnées ;
- les menus ;
- le référencement de chaque page ;
- les redirections ;
- les demandes reçues par le formulaire.

**Le code ne contient aucun texte affiché « en dur »** : tout vient de l'administration.

### 6.1 Stack

- **Next.js** (App Router, TypeScript) et **Payload CMS 3**, dans la même application. L'espace d'administration est à l'adresse `/admin`.
- **Pourquoi Payload :**
  - il est libre et gratuit, et Jean est propriétaire de ses données ;
  - l'interface d'administration est disponible en français ;
  - il propose des **blocs de sections** (constructeur de pages) : Jean compose une page avec des sections déjà dessinées, sans pouvoir en casser la mise en page ;
  - il gère les brouillons, l'aperçu en direct et l'historique des versions ;
  - il a des extensions officielles pour le SEO, les redirections et les formulaires.
- **Base de données :** PostgreSQL (Neon ou Supabase).
- **Médias :** stockage compatible S3 (Vercel Blob, Cloudflare R2 ou S3), avec génération automatique des tailles d'image.
- **Hébergement :** Vercel ou un hébergeur Node équivalent. Tu prépares le projet pour Vercel (variables d'environnement documentées dans `.env.example`), mais **tu ne déploies rien sur le domaine 3bcharpente.fr** : c'est Grégoire qui met en ligne.
- **Pages publiques :**
  - générées en statique avec revalidation à la demande : à chaque publication dans l'administration, un hook `afterChange` revalide les pages concernées et le `sitemap.xml` ;
  - le site reste aussi rapide qu'un site statique.
- **Style :** CSS natif avec des variables (jetons de `design.md`), sans framework d'interface. Le JavaScript côté visiteur est limité au menu mobile, aux accordéons, aux onglets 3B Récup', aux filtres et à la galerie.
- **Repli possible :** si l'hébergement impose un site 100 % statique, **Astro + Keystatic** (administration basée sur Git), avec le même modèle de contenu. Justifie ton choix dans `architecture.md` avant de coder.

### 6.2 Modèle de contenu (collections)

Chaque champ a une **aide en français simple** dans l'administration (par exemple : « Ce texte apparaît sous le titre, 2 ou 3 phrases »), une longueur maximale quand le design l'impose, et des valeurs par défaut.

- **Pages** (accueil, à propos, contact, mentions légales, pages 3B Récup', pages de secteur) :
  - titre, adresse (slug), page parente ;
  - **sections** (blocs, voir 6.4) ;
  - groupe SEO ;
  - statut brouillon ou publié.
- **Prestations** (les 9 pages de prestation) :
  - nom, adresse, phrase courte pour les cartes, icône, photo principale ;
  - **En bref** ;
  - sections (blocs) ;
  - questions fréquentes (relation) ;
  - réalisations liées et prestations liées (relations) ;
  - SEO ;
  - ordre d'affichage.

  Le menu Prestations et les cartes de l'accueil se construisent tout seuls à partir de cette collection.
- **Réalisations** (les 24 fiches) :
  - titre, adresse ;
  - commune (relation) et prestations (relations) ;
  - année et durée (facultatives) ;
  - « Le projet » (texte riche) ;
  - « Ce que nous avons fait » : liste d'étapes ;
  - matériaux ;
  - galerie : photos avec légende et texte alternatif **obligatoire**, ordre réglable par glisser-déposer ;
  - mise en avant (oui ou non) ;
  - SEO.

  Ajouter un chantier doit prendre cinq minutes, avec un bouton « Dupliquer ».
- **Communes :**
  - nom, adresse ;
  - secteur (Briançon, Serre Chevalier, Vallouise et Pays des Écrins…) ;
  - page de secteur liée.

  Ces données servent aux filtres de la page Réalisations et à la zone desservie dans les données structurées.
- **Conseils** (guides) : titre, adresse, résumé, image, corps (texte riche), date, auteur, questions fréquentes, SEO.
- **Questions fréquentes :**
  - question, réponse (texte simple), pages où elle s'affiche ;
  - réutilisables d'une page à l'autre ;
  - le JSON-LD FAQPage est généré automatiquement à partir du texte affiché.
- **Équipe :** nom, rôle, photo, courte présentation, ordre, visible (oui ou non).
- **Avis clients :**
  - nom ou initiales, commune, texte, note, source, date, publié (oui ou non) ;
  - la section Avis ne s'affiche **que** s'il existe au moins trois avis publiés.
- **Médias :**
  - texte alternatif obligatoire, légende, crédit photo ;
  - point focal pour le recadrage ;
  - formats AVIF et WebP générés automatiquement.
- **Utilisateurs**, avec deux rôles :
  - **Administrateur** (Grégoire) : tout, y compris les réglages techniques ;
  - **Éditeur** (Jean, Claire) : tout le contenu, les coordonnées, les menus, le SEO des pages, les avis et les demandes reçues. Pas les réglages techniques (code de mesure d'audience, gestion des utilisateurs).

### 6.3 Réglages globaux (une seule source de vérité)

- **Entreprise :**
  - nom, forme juridique, SIREN, SIRET, code APE ;
  - adresse, téléphone, e-mail ;
  - **horaires structurés** (jour par jour, avec les fermetures exceptionnelles) ;
  - coordonnées GPS, communes desservies ;
  - date de création, fondateur ;
  - qualifications (RGE avec ses domaines) ;
  - liens Facebook et fiche Google.

  Ces champs alimentent **automatiquement** le pied de page, la page Contact, les mentions légales, les liens `tel:` et le JSON-LD LocalBusiness de toutes les pages. Les coordonnées sont donc toujours identiques partout.
- **En-tête :**
  - liens du menu, avec l'ordre et la mise en avant de 3B Récup' ;
  - texte et lien du bouton « Demander mon devis ».
- **Pied de page :** colonnes de liens, signature.
- **Bandeau de preuves :** liste des éléments (« Depuis 2007 », « Compagnon du Devoir »…).
- **SEO par défaut :**
  - modèle de title (« %s | 3B Charpente ») ;
  - image de partage par défaut ;
  - vérification de la Search Console.
- **Mesure :** choix de l'outil et identifiant (rôle Administrateur). Si un outil avec cookies est choisi plus tard, un bandeau de consentement en français doit s'activer.

### 6.4 Blocs de sections (le constructeur de pages)

Chaque bloc reproduit un composant de la maquette Framer (section 2). Il a ses champs de texte et d'image, et **aucun réglage de couleur, de taille ou de police**, pour que le design reste cohérent quoi que fasse l'éditeur. Les titres ont un champ « mots en vert » : si ces mots sont dans le titre, ils s'affichent en vert accent. C'est la traduction des `**` des fiches.

Blocs à créer :

- **Héros :**
  - titre, mots en vert, texte, deux boutons ;
  - preuves (liste) ;
  - collage de trois photos.
- **En bref.**
- **Bandeau manifeste :** photo de fond, titre, mots en sauge, texte.
- **Cartes prestations :** automatique, ou sélection manuelle.
- **Texte et image** (image à gauche ou à droite).
- **Liste à puces ou à cocher.**
- **Étapes et méthode :** onglets 01 à 05 sur ordinateur, accordéon sur mobile.
- **Tableau comparatif.**
- **Réalisations :** sélection manuelle, ou automatique par prestation ou par commune, avec un nombre maximum.
- **Galerie photos.**
- **Questions fréquentes :** sélection dans la collection.
- **Bandeau d'appel à l'action :** vert forêt, titre, texte, bouton.
- **Bandeau de preuves.**
- **Équipe.**
- **Citation :** par exemple, une phrase de Jean.
- **Zone desservie :** liste des communes et carte statique légère, sans iframe Google Maps au chargement.
- **Formulaire de contact.**
- **Avis :** masqué s'il y a moins de trois avis.
- **Texte riche** (pour les mentions légales et les guides).

Les blocs ont un ordre libre, et l'administration en montre un **aperçu en direct** de la page.

### 6.5 Référencement géré depuis l'administration

- **Extension SEO officielle de Payload, sur chaque document :**
  - title, meta description et image de partage ;
  - compteurs de caractères (title 50 à 60, meta 140 à 155) ;
  - aperçu du résultat Google ;
  - case « ne pas indexer ».
- **Extension Redirections :**
  - table des redirections 301 modifiable dans l'administration, initialisée avec la section 8 du brief ;
  - **quand l'adresse d'une page change, une redirection de l'ancienne adresse est créée automatiquement** (hook).
- **Généré automatiquement à partir du contenu :** le JSON-LD (section 4), le fil d'Ariane, le `sitemap.xml` (pages publiées uniquement, avec `lastmod`) et le `robots.txt`.
- **Garde-fous à la publication :**
  - l'administration refuse de publier une page sans H1, sans meta description, ou avec une image sans texte alternatif ;
  - elle signale les liens internes cassés.

### 6.6 Formulaire et demandes reçues

- **Extension Form Builder :**
  - les champs de la fiche `21-contact.md` sont modifiables dans l'administration ;
  - chaque demande est **enregistrée dans l'administration** (collection « Demandes ») ;
  - chaque demande est **envoyée par e-mail** à l'adresse définie dans le réglage Entreprise, via Resend (clé en variable d'environnement). Sans clé, la demande est seulement enregistrée.
- **Anti-spam** : champ piège, délai minimum et limitation du nombre d'envois.

### 6.7 Mise en place et transmission

- **Script d'import `scripts/seed.ts`.** Il importe tout le contenu des fiches `3b-charpente-kit/docs/pages/*.md` dans Payload, en appliquant `decisions-par-defaut.md` :
  - pages, prestations, 24 réalisations, communes, questions fréquentes, équipe, réglages et redirections ;
  - photos importées depuis `3b-charpente-kit/photos-chantiers/` (à défaut, téléchargées depuis l'adresse source du `manifest.json`), renommées en français, avec légende et texte alternatif.

  Le site doit être complet dès le premier lancement, sans aucune saisie manuelle.
- **Mentions `[À VALIDER AVEC JEAN : …]`** : elles ne sont jamais importées telles quelles. La décision par défaut est appliquée, et une entrée est créée dans la collection « Points à valider » (page, question, décision appliquée, statut). La vue « À valider » de l'administration les liste toutes.
- **Sécurité :**
  - mots de passe forts ;
  - verrouillage après plusieurs échecs de connexion ;
  - `/admin` en `noindex` ;
  - sauvegarde automatique quotidienne de la base et des médias, avec restauration testée.
- **Guide d'utilisation en français, `docs/guide-admin.md`, avec captures d'écran.** Il explique comment :
  - modifier un texte ;
  - remplacer une photo ;
  - ajouter un chantier ;
  - changer les horaires ;
  - répondre à une demande ;
  - ajouter une redirection ;
  - revenir à une version précédente.

  Chaque explication tient en moins de dix lignes.
- **Dossier du projet :** l'application est à la racine du dépôt. Le dossier `3b-charpente-kit/` reste en lecture seule.
- **Mise en ligne :** le site doit être **complet et prêt à mettre en ligne** avec les décisions par défaut. Les points à valider se corrigeront ensuite dans l'administration.

---

## 7. Livrables, dans cet ordre

1. **`docs/architecture.md`** : choix de la stack (justifié), schéma du modèle de contenu (collections, réglages globaux, blocs, relations), rôles, flux de publication et de revalidation.
2. **`design.md`**, plus une planche des composants : une page `/styleguide/` en `noindex`, qui montre chaque bloc.
3. **Le site complet**, avec l'administration, l'import automatique de tout le contenu et toutes les photos. Les 4 guides et la page `/conseils/` sont publiés dès le lancement.
4. **Fichiers de contrôle :**
   - `docs/a-valider.md` ;
   - l'export de la table des redirections ;
   - `sitemap.xml` et `robots.txt` générés.
5. **`guide-admin.md`** avec captures d'écran, et une démonstration de bout en bout :
   - se connecter en Éditeur ;
   - modifier les horaires et vérifier qu'ils changent dans le pied de page, la page Contact et le JSON-LD ;
   - ajouter une réalisation et vérifier qu'elle apparaît dans le filtre de sa commune ;
   - changer l'adresse d'une page et vérifier que la redirection a été créée.
6. **Un rapport de contrôle `docs/controle.md`** :
   - pour chaque page : title, meta, H1, nombre de mots, données structurées validées (test des résultats enrichis), liens internes sortants et entrants ;
   - scores Lighthouse mobile de l'accueil, d'une prestation, de 3B Récup' et d'une fiche chantier ;
   - captures d'écran à 390 px et 1440 px des mêmes pages.
7. **Une relecture critique**, en te posant ces questions :
   - Un propriétaire de chalet à Briançon comprend-il en dix secondes ce que fait 3B et comment l'appeler ?
   - Un architecte comprend-il en trente secondes ce que 3B Récup' peut faire sur son chantier ?
   - Jean peut-il ajouter un chantier seul, en cinq minutes, sans casser la page ?
   - Chaque page répond-elle à sa recherche principale mieux que le premier résultat actuel de Google ?
   - Retrouve-t-on bien l'univers de la maquette Framer ?

   Corrige ce qui ne va pas avant de livrer.
