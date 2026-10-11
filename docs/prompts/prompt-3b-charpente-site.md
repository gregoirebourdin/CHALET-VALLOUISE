# Prompt : site complet 3B Charpente

Tu es un développeur front-end et designer web senior. Tu construis des sites d'artisans qui sont à la fois très beaux, très rapides et très bien référencés, sur Google comme dans les réponses des IA (ChatGPT, Gemini, l'aperçu IA de Google).

**Ta mission : construire le site complet de 3B Charpente**, charpentier écologique installé à L'Argentière-la-Bessée (Hautes-Alpes) depuis 2007. Tu pars de la direction artistique de la maquette Framer déjà validée et des fiches de rédaction page par page.

---

## 0. Avant de coder

1. **Lis en entier les fichiers de référence.** Tout ce que tu écris en découle.
   - `docs/3b-charpente/00-brief.md` : faits vérifiés, textes validés, direction artistique, ton, règles SEO et GEO, plan du site, redirections.
   - `docs/3b-charpente/realisations-source.md` : les 24 chantiers réels, avec les légendes des photos et les dossiers d'images.
   - **Tous** les fichiers de `docs/3b-charpente/pages/` : une fiche par page, avec les sections dans l'ordre, le texte prêt à intégrer, les balises, la FAQ, les liens internes et les photos.
2. **Ouvre la maquette** https://3bcharpente.framer.website/ (accueil, /3b-recup, /a-propos, /projets, /contact) et observe-la sur ordinateur et sur mobile. C'est la référence visuelle : couleurs, typographies, rythme, composants, animations.
3. **Écris `docs/3b-charpente/design.md`** : jetons de couleur, échelle typographique, espacements, rayons, ombres, composants, animations (déclencheur, durée, courbe). Puis code.
4. **Liste les skills de ta session et charge ceux qui touchent au front-end ou au design**, s'il y en a. N'invente pas de nom de skill.

---

## 1. Règles intangibles

- **Les textes viennent des fiches de page.** Tu peux raccourcir une phrase qui casse la mise en page, jamais ajouter un fait.
  - Aucun chiffre, prix, délai, avis, label, partenaire ou nom de client inventé.
  - Les mentions `[À VALIDER AVEC JEAN : …]` restent visibles en développement, dans un style dédié (fond jaune pâle, bordure pointillée). Liste-les toutes dans `docs/3b-charpente/a-valider.md`.
- **Supprime tout le contenu de modèle de la maquette Framer :**
  - les témoignages « TechMatter » ;
  - le bloc Trustpilot « 4.7 out of 5 » ;
  - le badge « Expert du Réemploi » ;
  - les textes anglais des études de cas ;
  - les pages Pricing, Demo, Feature, Blog et Old-home.
- **Photos :**
  - Uniquement les vraies photos de chantier de 3bcharpente.fr/galeries/… (dossiers indiqués dans chaque fiche). Les photos d'ambiance forêt et rondins de la maquette servent au plus une ou deux fois (bandeau manifeste, page À propos).
  - Aucune image générée par IA présentée comme un chantier de 3B.
  - Aucune photo de banque d'images de personnes.
- **Section avis :** elle n'existe pas tant que de vrais avis Google ne sont pas fournis. À la place, mets un appel discret « Vous avez travaillé avec nous ? Laissez un avis sur Google » avec un lien `[À VALIDER : lien de la fiche Google]`.

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

- **Titres :** Nohemi Bold et SemiBold, auto-hébergée (licence et fichiers : `[À VALIDER : fichiers Nohemi]`).
  - Si elle n'est pas disponible, choisis une grotesque géométrique très grasse au rendu proche, et justifie ce choix dans design.md.
  - Approche légèrement serrée (−0,02 em) ; deux ou trois mots par titre en vert `#336233`. Dans les fiches, ces mots sont entre `**`.
- **Texte :** Inter, avec les mots forts en gras comme dans la maquette.
- `font-display: swap`, sous-ensemble latin.

### Composants à reproduire fidèlement

- **En-tête :**
  - logo « 3B Charpente » à gauche ;
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
- **Phase 2 :** les 4 guides de `/conseils/`. Construis le gabarit Article et publie-les si leurs fiches sont prêtes.
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
  - sur tout le site, un LocalBusiness de type `["GeneralContractor","RoofingContractor"]` ;
  - champs : nom, adresse exacte, téléphone `+33634673149`, e-mail `tardy@3bcharpente.fr`, horaires (`[À VALIDER]` tant qu'ils ne le sont pas), géolocalisation, `areaServed` (communes des pages secteur, Hautes-Alpes), `foundingDate` 2007, `founder` Jean-Michel Tardy, `sameAs` (Facebook ; fiche Google à ajouter) ;
  - l'ancien e-mail des données structurées actuelles ne doit apparaître nulle part ;
  - par page : `Service`, `FAQPage` (questions et réponses identiques au texte visible), `BreadcrumbList`, `HowTo` pour la méthode 3B Récup', `Article` pour les guides, `ItemList` pour Réalisations, `CreativeWork` pour les fiches chantier.
- **Plan du site et robots :**
  - `sitemap.xml` généré automatiquement (avec `lastmod`) ;
  - `robots.txt` qui pointe vers lui ;
  - aucune page de test indexable.
- **Redirections 301** (table complète en section 8 du brief) :
  - à fournir dans le format de l'hébergeur (`_redirects`, `vercel.json`, `netlify.toml` ou `.htaccess` selon le cas) ;
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
- **Mesure :** Google Analytics 4 ou équivalent respectueux des données, avec bandeau de consentement en français. Événements suivis : clic sur le téléphone, clic sur l'e-mail, envoi du formulaire, clic sur « Demander mon devis ».

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
- envoi vers `tardy@3bcharpente.fr` via le service de l'hébergeur `[À VALIDER : service d'envoi]` ;
- message de confirmation clair ;
- aucun envoi simulé.

---

## 6. Stack

- **Astro**, site statique : TypeScript, CSS natif avec des variables, sans framework d'interface.
- **Contenu :**
  - collections de contenu Astro, un fichier Markdown ou MDX par page et par réalisation, générés à partir des fiches ;
  - Jean ou son prestataire peuvent ensuite modifier un texte sans toucher au code.
- **JavaScript :** uniquement pour le menu mobile, les accordéons, les onglets 3B Récup', les filtres et la galerie en plein écran.
- **Images :** script `scripts/fetch-images.mjs` qui télécharge les photos depuis 3bcharpente.fr/galeries, les renomme, les optimise avec `astro:assets` ou sharp, et écrit un `manifest.json` (source, chantier, légende, `alt`).
- **Dossier :** `3b-charpente-site/` à la racine du dépôt. Le site n'est pas mis en ligne tant que les points « À valider » ne sont pas levés.

---

## 7. Livrables, dans cet ordre

1. **`design.md`**, plus une planche des composants (une page `/styleguide/` en `noindex`).
2. **Le site complet en phase 1**, puis les guides de la phase 2 si leurs fiches sont prêtes.
3. **Fichiers techniques :** `a-valider.md`, le fichier de redirections, `sitemap.xml` et `robots.txt`.
4. **Un rapport de contrôle `docs/3b-charpente/controle.md`** :
   - pour chaque page : title, meta, H1, nombre de mots, données structurées validées (test des résultats enrichis), liens internes sortants et entrants ;
   - scores Lighthouse mobile de l'accueil, d'une prestation, de 3B Récup' et d'une fiche chantier ;
   - captures d'écran à 390 px et 1440 px des mêmes pages.
5. **Une relecture critique**, en te posant ces questions :
   - Un propriétaire de chalet à Briançon comprend-il en dix secondes ce que fait 3B et comment l'appeler ?
   - Un architecte comprend-il en trente secondes ce que 3B Récup' peut faire sur son chantier ?
   - Chaque page répond-elle à sa recherche principale mieux que le premier résultat actuel de Google ?
   - Retrouve-t-on bien l'univers de la maquette Framer ?

   Corrige ce qui ne va pas avant de livrer.
