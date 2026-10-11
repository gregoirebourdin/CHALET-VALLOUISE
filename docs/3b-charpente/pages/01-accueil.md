# Fiche de page 01 : Accueil (`/`)

> **Sources :** `00-brief.md` et `realisations-source.md` uniquement. Fiche rédigée le 11 octobre 2026.
>
> **Conventions de lecture :**
> - dans les titres (H1, H2), les mots entre `**` passent en **vert accent** (#336233 sur fond clair, vert sauge #A3D2A3 sur fond sombre) ; dans les textes courants, `**` veut dire gras ;
> - les espaces insécables avant : ; ? ! et dans les guillemets sont déjà en place : copier-coller tel quel ;
> - tout ce qui est entre `[À VALIDER AVEC JEAN : …]` doit être confirmé ou retiré avant la mise en ligne. Ne jamais publier un crochet.

---

## 1. Carte d'identité

- **Adresse :** `/` (https://3bcharpente.fr/)
- **Objectif de la page :**
  - dire en cinq secondes qui est 3B Charpente : des charpentiers, du bois local, de l'isolation biosourcée, du réemploi ;
  - dire où l'entreprise travaille (L'Argentière-la-Bessée, Briançon, nord des Hautes-Alpes) ;
  - orienter chaque visiteur vers la bonne prestation, vers 3B Récup' ou vers la demande de devis ;
  - être la page de référence de la fiche Google (qui pointe vers l'accueil) et de l'entité « 3B Charpente » pour les IA.
- **Visiteurs visés :**
  - propriétaires de chalets, de maisons de pays, de maisons des années 1980 ou de copropriétés dans le Briançonnais, à Serre Chevalier, en Vallouise et dans le Pays des Écrins ;
  - futurs propriétaires d'une maison ossature bois ;
  - architectes, entreprises du bâtiment et de la démolition, collectivités intéressés par le réemploi (3B Récup').
- **Mots-clés :**
  - principal : « charpentier hautes alpes » (30/mois) ;
  - secondaires : « charpentier 05 » (30/mois), « charpentier l'argentière-la-bessée » (non mesuré), « charpentier briançon » (non mesuré) ;
  - relais vers les pages filles : charpente bois, isolation biosourcée, maison ossature bois, réemploi bois.
- **Intention de recherche :** locale et transactionnelle (« trouver un charpentier sérieux près de chez moi et le contacter »), plus navigationnelle sur la marque.
- **Pages liées :** 02 à 10 (prestations), 11 à 14 (3B Récup'), 15 (réalisations), 17 (à propos), 18 à 20 (secteurs), 21 (contact).

---

## 2. SEO

- **Balise title (54 caractères) :** Charpentier Hautes-Alpes (05), Briançon | 3B Charpente
- **Meta description (152 caractères) :** Charpentiers à L'Argentière-la-Bessée depuis 2007 : charpente, isolation biosourcée RGE, ossature bois, réemploi du bois local. Parlons de votre projet.
- **H1 :** **Charpentiers** à Briançon, L'Argentière-la-Bessée et dans les **Hautes-Alpes**
  - *Note d'optimisation :* on garde l'idée du H1 validé (« Charpentiers à Briançon et dans les Hautes Alpes. »). On ajoute L'Argentière-la-Bessée, la commune du siège et de la fiche Google, où 3B est absent de la carte et de la première page. On corrige « Hautes-Alpes » (trait d'union) et on retire le point final.
  - *Repli si le titre casse la mise en page sur mobile :* garder le H1 validé « **Charpentiers** à Briançon et dans les **Hautes-Alpes** » et faire passer « L'Argentière-la-Bessée » dans le kicker.
- **Données structurées :** un seul bloc `@graph` dans le `<head>` de l'accueil :
  - `WebSite` (nom, URL, langue) ;
  - `RoofingContractor` (sous-type de LocalBusiness) avec un `@id` stable, réutilisé par toutes les autres pages du site ;
  - `FAQPage` pour les six questions de la partie 4.

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://3bcharpente.fr/#site",
      "url": "https://3bcharpente.fr/",
      "name": "3B Charpente",
      "inLanguage": "fr-FR",
      "publisher": { "@id": "https://3bcharpente.fr/#entreprise" }
    },
    {
      "@type": "RoofingContractor",
      "@id": "https://3bcharpente.fr/#entreprise",
      "name": "3B Charpente",
      "legalName": "Jean-Michel Tardy (entrepreneur individuel)",
      "url": "https://3bcharpente.fr/",
      "logo": "https://3bcharpente.fr/images/logo-3b-charpente.svg",
      "image": "https://3bcharpente.fr/images/levage-fermes-charpente-argentiere-la-bessee.webp",
      "description": "Entreprise de charpente bois fondée en 2007 à L'Argentière-la-Bessée (Hautes-Alpes) : charpente, rénovation, isolation biosourcée, ossature bois, escaliers, balcons et réemploi du bois avec 3B Récup'.",
      "telephone": "+33634673149",
      "email": "tardy@3bcharpente.fr",
      "foundingDate": "2007",
      "founder": { "@id": "https://3bcharpente.fr/a-propos/#jean-michel-tardy" },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "5 rue Saint-Michel",
        "postalCode": "05120",
        "addressLocality": "L'Argentière-la-Bessée",
        "addressRegion": "Hautes-Alpes",
        "addressCountry": "FR"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "[À COMPLÉTER : latitude du 5 rue Saint-Michel]",
        "longitude": "[À COMPLÉTER : longitude du 5 rue Saint-Michel]"
      },
      "openingHoursSpecification": "[À VALIDER AVEC JEAN : horaires définitifs, voir points à valider]",
      "areaServed": [
        { "@type": "AdministrativeArea", "name": "Hautes-Alpes" },
        { "@type": "City", "name": "Briançon" },
        { "@type": "City", "name": "L'Argentière-la-Bessée" },
        { "@type": "City", "name": "Vallouise-Pelvoux" },
        { "@type": "City", "name": "La Salle-les-Alpes" },
        { "@type": "City", "name": "Le Monêtier-les-Bains" },
        { "@type": "City", "name": "Saint-Martin-de-Queyrières" },
        { "@type": "City", "name": "Champcella" },
        { "@type": "City", "name": "La Roche-de-Rame" },
        { "@type": "AdministrativeArea", "name": "Provence-Alpes-Côte d'Azur" },
        { "@type": "AdministrativeArea", "name": "Auvergne-Rhône-Alpes" }
      ],
      "knowsAbout": [
        "Charpente bois traditionnelle",
        "Rénovation de charpente et aménagement de combles",
        "Isolation biosourcée",
        "Isolation de toiture par l'extérieur (sarking)",
        "Isolation thermique par l'extérieur (ITE)",
        "Maison ossature bois",
        "Surélévation bois",
        "Escalier bois sur mesure",
        "Balcon et terrasse en mélèze",
        "Déconstruction sélective",
        "Réemploi du bois"
      ],
      "hasCredential": {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "Qualification RGE (QUALIBAT-RGE)",
        "recognizedBy": { "@type": "Organization", "name": "Qualibat" }
      },
      "department": {
        "@type": "Organization",
        "name": "3B Récup'",
        "url": "https://3bcharpente.fr/3b-recup/",
        "description": "Initiative de 3B Charpente dédiée au réemploi des matériaux et à la déconstruction sélective."
      },
      "identifier": { "@type": "PropertyValue", "propertyID": "SIREN", "value": "494482714" },
      "sameAs": [
        "https://www.facebook.com/3bcharpente",
        "[À COMPLÉTER : URL de la fiche Google, une fois revendiquée]"
      ]
    }
  ]
}
```

- **Textes alternatifs des images clés :**
  - héros : « Levage des fermes d'une charpente neuve par l'équipe de 3B Charpente à L'Argentière-la-Bessée » ;
  - vignette 1 : « Taille à la besaiguë d'un tenon à double embrèvement, assemblage traditionnel de charpente » ;
  - vignette 2 : « Terrasse en mélèze et ses assemblages traditionnels, chalet rénové à Vallouise » ;
  - 3B Récup' : « Bardage en vieux bois de réemploi sur une maison rénovée à L'Argentière-la-Bessée ».

---

## 3. Sections dans l'ordre

### Section 0 : en-tête (commun à tout le site)

- **Rôle :** navigation, accès direct au devis et au téléphone.
- **Composant Framer :** en-tête (logo à gauche, liens au centre, bouton « Demander mon devis » en contour à droite).
- **Copywriting :**
  - Logo : 3B Charpente
  - Menu : Prestations ▾ · **3B Récup'** (pastille verte) · Réalisations · À propos · Contact
  - Menu déroulant « Prestations » :
    - Charpente bois traditionnelle
    - Rénovation de charpente et combles
    - Isolation biosourcée
    - Isolation de toiture (sarking)
    - Isolation des murs (ITE)
    - Maison ossature bois
    - Extension et surélévation
    - Escaliers sur mesure
    - Balcons, terrasses et abris
  - Bouton contour : Demander mon devis → `/contact/`
  - Mobile : menu burger + bouton rond « Appeler » → `tel:+33634673149`

### Section 1 : héros

- **Rôle :** dire qui, quoi, où, avec deux preuves et une action.
- **Composant Framer :** héros (titre en deux couleurs, texte avec les mots forts en gras, un bouton plein vert, un bouton contour, deux preuves en pastille sauge, collage photo avec deux vignettes qui débordent).
- **Copywriting :**
  - **Kicker :** Charpente · Isolation biosourcée · Ossature bois · Réemploi
  - **H1 :** **Charpentiers** à Briançon, L'Argentière-la-Bessée et dans les **Hautes-Alpes**
  - **Texte :** 3B Charpente transforme le **bois des Hautes-Alpes** en charpentes, maisons et rénovations faites pour durer. Nous travaillons le mélèze et le sapin du pays, des **isolants biosourcés** et du **bois de réemploi**, pour des constructions écoresponsables à Briançon et dans ses environs.
  - **Bouton plein :** Demander mon devis → `/contact/`
  - **Bouton contour :** Voir nos réalisations → `/realisations/`
  - **Preuve 1 (pastille sauge) :** Depuis 2007
  - **Preuve 2 (pastille sauge) :** Qualifié RGE
  - *Option :* remplacer la preuve 2 par « +100 projets » [À VALIDER AVEC JEAN : chiffre repris de la maquette, à confirmer avant usage].
- *Note de réécriture :* accroche validée réécrite pour le référencement. On garde « transforme le bois des Hautes Alpes », « matériaux locaux et biosourcés », « écoresponsables à Briançon et dans ses environs ». On ajoute les essences et le réemploi, qui distinguent 3B.
- **Collage photo :** voir partie 6 (photo principale « levage des fermes », vignettes « tenon à double embrèvement » et « terrasse en mélèze »).

### Section 2 : en bref

- **Rôle :** paragraphe factuel et autonome, que les moteurs et les IA peuvent reprendre tel quel.
- **Composant Framer :** carte blanche à coins arrondis, petite pastille sauge « En bref », posée à cheval entre le héros et la section suivante.
- **Copywriting :**
  - **Étiquette :** En bref
  - **Texte (53 mots) :** 3B Charpente est une entreprise de charpente bois fondée en 2007 par Jean-Michel Tardy, formé chez les Compagnons du Devoir, et installée à L'Argentière-la-Bessée (Hautes-Alpes). Elle réalise charpentes, rénovations, isolation biosourcée avec la qualification RGE, maisons ossature bois, escaliers et balcons, en bois local. Avec 3B Récup', elle déconstruit et réemploie le bois.

### Section 3 : manifeste

- **Rôle :** donner l'esprit de l'entreprise, avec les phrases validées par le client.
- **Composant Framer :** section plein cadre « forêt » sombre, titre blanc avec des mots en sauge. Image de fond : vraie photo « charpente apparent et soleil couchant » (monts du Lyonnais) avec un voile sombre, plutôt qu'une photo d'ambiance.
- **Copywriting :**
  - **Kicker :** Notre façon de travailler
  - **H2 :** Construire **simplement**, penser **durablement**.
  - **Paragraphe 1 :** Chez 3B Charpente, nous faisons les choses différemment. Notre engagement pour le bois local et les techniques écoresponsables nous distingue dans les Hautes-Alpes, à Briançon comme dans les communes voisines.
  - **Paragraphe 2 :** Nous privilégions les matériaux sains et le réemploi pour limiter notre impact sur l'environnement. Chaque charpente ou rénovation de chalet est le fruit d'un travail étroit avec vous : nous l'adaptons à votre maison, à vos usages et à vos goûts.
  - **Phrase forte (gras, plus grande) :** Simple, transparent, et toujours à votre écoute : voilà notre promesse.
  - **Bouton contour clair :** Découvrir notre histoire → `/a-propos/`
- *Note de réécriture :* « une satisfaction totale » est retirée (promesse impossible à prouver) ; « minimiser » devient « limiter ». Le reste est la formulation validée.

### Section 4 : prestations (9 cartes)

- **Rôle :** présenter toutes les prestations et envoyer vers les pages 02 à 10. C'est le principal réservoir de liens internes de l'accueil.
- **Composant Framer :** grille de cartes blanches à coins arrondis, icône dans une pastille sauge, lien en bas de carte. 3 colonnes sur ordinateur, 1 sur mobile.
- **Copywriting :**
  - **Kicker :** Nos prestations
  - **H2 :** Tous nos **métiers du bois**, de la charpente à l'**isolation**
  - **Carte 1 (icône : toit) :**
    - Titre (H3) : Charpente bois traditionnelle
    - Texte : Des charpentes taillées à l'ancienne, tenons, mortaises et chevilles, en mélèze et sapin du pays.
    - Lien : Voir la charpente bois → `/charpente-bois/`
  - **Carte 2 (icône : marteau) :**
    - Titre (H3) : Rénovation de charpente et combles
    - Texte : Renforcer la structure, aménager les combles, ouvrir lucarnes et fenêtres de toit.
    - Lien : Rénover ma charpente → `/renovation-charpente-combles/`
  - **Carte 3 (icône : feuille) :**
    - Titre (H3) : Isolation biosourcée
    - Texte : Fibre de bois, ouate de cellulose, laine de chanvre, lin et coton : le confort d'hiver et d'été.
    - Lien : Isoler ma maison → `/isolation-biosourcee/`
  - **Carte 4 (icône : couches superposées) :**
    - Titre (H3) : Isolation de toiture par l'extérieur (sarking)
    - Texte : Le sarking isole le toit par-dessus les chevrons, côté extérieur : la charpente reste visible.
    - Lien : Découvrir le sarking → `/isolation-toiture-sarking/`
  - **Carte 5 (icône : mur) :**
    - Titre (H3) : Isolation des murs (ITE et bâti ancien)
    - Texte : L'ITE, ou isolation thermique par l'extérieur, enveloppe les murs d'un manteau isolant. En bâti ancien, aussi par l'intérieur.
    - Lien : Isoler mes murs → `/isolation-murs-ite/`
  - **Carte 6 (icône : maison) :**
    - Titre (H3) : Maison ossature bois
    - Texte : Une maison neuve sur mesure, en ossature bois, avec une toiture isolée par sarking.
    - Lien : Construire en bois → `/maison-ossature-bois/`
  - **Carte 7 (icône : flèche vers le haut) :**
    - Titre (H3) : Extension et surélévation bois
    - Texte : Gagner une pièce ou un étage sans tout reconstruire, comme à Briançon et à Pelvoux.
    - Lien : Agrandir ma maison → `/extension-surelevation-bois/`
  - **Carte 8 (icône : escalier) :**
    - Titre (H3) : Escaliers bois sur mesure
    - Texte : Quart tournant, balancé ou en bois debout, dessinés pour votre maison, taillés à l'atelier.
    - Lien : Voir nos escaliers → `/escalier-bois-sur-mesure/`
  - **Carte 9 (icône : balcon) :**
    - Titre (H3) : Balcons, terrasses et abris bois
    - Texte : Balcons, terrasses, garde-corps et abris, pensés pour la montagne et l'âme de votre maison.
    - Lien : Voir balcons et terrasses → `/balcon-terrasse-abri-bois/`
  - **Bouton sous la grille (contour) :** Parler de mon projet → `/contact/`
- *Note de réécriture :* les cartes 2, 6 et 9 reprennent les textes de services validés, raccourcis ; les cartes 4 et 5 définissent sarking et ITE dès leur première apparition, comme l'exige le brief.

### Section 5 : 3B Récup' (bloc mis en avant)

- **Rôle :** mettre en avant le vrai point de différence de 3B (personne ne présente un charpentier qui déconstruit et réemploie le bois dans le département) et envoyer vers les pages 11 à 14.
- **Composant Framer :** grand bandeau vert forêt avec formes organiques vert clair et grille ronde translucide ; pastille « 3B Récup' » verte ; à droite, les cinq étapes en mini-onglets numérotés 01 à 05 (version courte de la méthode de la page 3B Récup') ; photo « bardage vieux bois » à gauche sur ordinateur.
- **Copywriting :**
  - **Pastille :** 3B Récup'
  - **Kicker :** Déconstruction et réemploi du bois
  - **H2 :** Donner une **seconde vie** au bois des **bâtiments déconstruits**
  - **Paragraphe 1 :** 3B Récup' est l'initiative de 3B Charpente dédiée au réemploi des matériaux et à la déconstruction sélective : démonter un bâtiment élément par élément pour récupérer ce qui peut resservir.
  - **Paragraphe 2 :** Charpentiers de métier, nous déposons les structures bois, du bâtiment industriel à la maison particulière. Le bois est trié, nettoyé et usiné dans nos ateliers, puis réemployé sur nos chantiers.
  - **Paragraphe 3 (gras) :** Architectes, entreprises, collectivités, particuliers : 3B Récup' vous apporte des solutions personnalisées.
  - **Les cinq étapes (onglets 01 à 05) :**
    - 01 Diagnostic : repérer les matériaux réemployables, en lien avec le diagnostic PEMD (produits, équipements, matériaux et déchets), exigé avant certaines démolitions.
    - 02 Stratégie : une feuille de route pour déposer sans abîmer.
    - 03 Intervention : nos charpentiers déposent les éléments sur site.
    - 04 Transformation : tri, nettoyage et usinage à l'atelier.
    - 05 Repose : notre système constructif s'adapte au bois de réemploi.
  - **Bouton plein (clair sur fond vert) :** Découvrir 3B Récup' → `/3b-recup/`
  - **Liens texte :**
    - Diagnostic et gisement (PEMD) → `/3b-recup/diagnostic-pemd/`
    - Déconstruction sélective → `/3b-recup/deconstruction-selective/`
    - Bois de réemploi → `/3b-recup/bois-de-reemploi/`
- *Notes :*
  - « en lien avec le diagnostic PEMD » : formulation prudente imposée par le brief tant que Jean n'a pas confirmé qu'il réalise lui-même le diagnostic réglementaire ;
  - les étapes sont remises dans l'ordre du chantier (l'intervention, c'est-à-dire la dépose, avant la transformation) ; la maquette les listait dans l'ordre diagnostic, stratégie, transformation, repose, intervention. À valider avec Jean et à harmoniser avec la fiche 11 ;
  - la preuve concrète (bardage en vieux bois, garde-corps de réemploi) est portée par la photo du bloc et par la carte 5 des réalisations ; la mention de PRECI est réservée à la page À propos et à la page 3B Récup' ;
  - pas de badge « Expert du Réemploi » (aucune source).

### Section 6 : 3B = Bio, Bâti, Bois

- **Rôle :** raconter le nom, en faire un outil de mémorisation et relier chaque lettre à une pratique concrète.
- **Composant Framer :** section de fond clair (#F2F2EC), trois cartes blanches côte à côte ; dans chaque carte, un grand « B » en Nohemi Bold vert, le mot, l'étymologie en petit italique, puis le texte.
- **Copywriting :**
  - **Kicker :** Pourquoi « 3B » ?
  - **H2 :** **Bio**, **Bâti**, **Bois** : trois mots pour une façon de construire
  - **Carte Bio :**
    - Étymologie : du grec ancien βίος, qui exprime l'idée de vie.
    - Texte : Des maisons saines, isolées avec des matériaux biosourcés.
  - **Carte Bâti :**
    - Étymologie : de l'ancien français bastir, idée d'entrelacer, d'assembler.
    - Texte : L'art d'assembler : tenons et mortaises chevillés, traits de Jupiter, fermes montées à blanc avant le levage.
  - **Carte Bois :**
    - Étymologie : un être vivant.
    - Texte : Du mélèze et du sapin des Hautes-Alpes, et du bois de réemploi, à qui nous donnons une seconde vie.

### Section 7 : nos preuves

- **Rôle :** rassurer avec des faits vérifiables, pas des adjectifs.
- **Composant Framer :** deux colonnes. À gauche, portrait de Jean-Michel Tardy à l'atelier (photo à fournir). À droite, cinq cartes blanches en liste, chacune avec pastille sauge et icône.
- **Copywriting :**
  - **Kicker :** Ce sur quoi vous pouvez compter
  - **H2 :** Un **savoir-faire** de compagnon, des **matériaux** d'ici
  - **Carte 1, Depuis 2007 :** Installés à L'Argentière-la-Bessée depuis 2007 : la charpente d'abord, puis la rénovation de chalets et l'ossature bois.
  - **Carte 2, Formé chez les Compagnons du Devoir :** Jean-Michel Tardy, notre fondateur, a débuté à 16 ans, en 1995. CAP chez les Compagnons du Devoir, puis Tour de France : France métropolitaine, Martinique, Autriche.
  - **Carte 3, Qualifié RGE :** RGE veut dire « reconnu garant de l'environnement ». Notre qualification Qualibat couvre l'isolation des murs et des toitures et les menuiseries extérieures. Elle ouvre l'accès aux aides publiques à la rénovation énergétique, sous conditions.
  - **Carte 4, Du bois des Hautes-Alpes :** Principalement du mélèze et du sapin des Hautes-Alpes, sciés par notre partenaire local, la Scierie Savoldelli.
  - **Carte 5, Des isolants biosourcés :** Ouate de cellulose, fibre de bois, laine de chanvre, lin et coton : 28 cm dans les murs du chalet de Vallouise, 32 cm en toiture.
  - **Bouton contour :** Qui sommes-nous ? → `/a-propos/`
- *Note :* la carte 3 résume les cinq domaines RGE ; la liste exacte figure dans la FAQ 3 et sur la page À propos.

### Section 8 : votre projet, étape par étape

- **Rôle :** lever la peur de l'inconnu et préparer la prise de contact.
- **Composant Framer :** onglets numérotés 01 à 05 (même composant que la méthode 3B Récup'), en frise horizontale sur ordinateur, liste verticale sur mobile.
- **Copywriting :**
  - **Kicker :** Votre projet, étape par étape
  - **H2 :** Chaque projet commence par une **étude sur mesure**
  - **01, Vous nous contactez :** par téléphone ou avec le formulaire, même en quelques lignes.
  - **02, Nous nous rencontrons :** nous parlons de vos besoins et vous donnons un calendrier estimatif.
  - **03, Vous recevez votre devis :** un devis détaillé, adapté à votre projet.
  - **04, Nous préparons à l'atelier :** traçage, taille et assemblage à blanc, c'est-à-dire un premier montage pour tout vérifier.
  - **05, Nous levons et posons :** levage, pose et finitions sur votre chantier.
  - **Bouton plein :** Demander mon devis → `/contact/`
- *Note :* étapes 02 et 03 tirées des réponses FAQ validées (rencontre, calendrier estimatif, devis détaillé) ; étape 04 tirée du texte publié sur l'escalier quart tournant et des légendes « taille de la charpente », « assemblage à blanc ».

### Section 9 : réalisations (6 cartes)

- **Rôle :** prouver par des chantiers réels, avec des communes réelles, et nourrir le maillage vers les fiches réalisations.
- **Composant Framer :** cartes de réalisations (photo, étiquette posée sur la photo, titre, lien « Voir les travaux → »). Proposition : l'étiquette affiche la **commune** au lieu de « 3B Charpente », plus utile au visiteur et au référencement local.
- **Copywriting :**
  - **Kicker :** Nos réalisations
  - **H2 :** Des chantiers **réels**, de Briançon à **Vallouise**
  - **Intro :** 24 chantiers présentés sur ce site. En voici six.
  - **Carte 1 :**
    - Étiquette : Vallouise
    - Titre (H3) : Rénovation et isolation d'un chalet
    - Texte : Chalet des années 1980 : 28 cm d'isolant biosourcé dans les murs, 32 cm en toiture.
    - Lien : Voir les travaux → `/realisations/renovation-et-isolation-d-un-chalet-a-vallouise/`
  - **Carte 2 :**
    - Étiquette : L'Argentière-la-Bessée
    - Titre (H3) : Réfection d'une charpente avec lucarne
    - Texte : Taille traditionnelle, fermes et lucarne levées, bardage en mélèze.
    - Lien : Voir les travaux → `/realisations/refection-d-une-charpente-a-l-argentiere-la-bessee/`
  - **Carte 3 :**
    - Étiquette : Briançon
    - Titre (H3) : Rénovation d'une copropriété
    - Texte : Reprise des fermes, isolation soufflée, nouvelle couverture. Avec en prime, une belle vue.
    - Lien : Voir les travaux → `/realisations/renovation-d-une-copropriete-a-briancon/`
  - **Carte 4 :**
    - Étiquette : Briançon
    - Titre (H3) : Surélévation en ossature bois
    - Texte : Pignons en ossature bois et panneaux trois plis en épicéa apparents.
    - Lien : Voir les travaux → `/realisations/surelevation-en-ossature-bois-d-une-maison-a-briancon/`
  - **Carte 5 :**
    - Étiquette : L'Argentière-la-Bessée
    - Titre (H3) : Rénovation d'une maison avec du bois de réemploi
    - Texte : Pignon vitré, escalier balancé, bardage en vieux bois et garde-corps de réemploi.
    - Lien : Voir les travaux → `/realisations/renovation-d-une-maison-d-habitation-a-l-argentiere-la-bessee/`
  - **Carte 6 :**
    - Étiquette : [À VALIDER AVEC JEAN : commune du chantier] (à défaut : « Escalier »)
    - Titre (H3) : Escalier quart tournant en mélèze lamellé-collé
    - Texte : Tracé et taillé à l'atelier, monté en deux jours, finitions comprises.
    - Lien : Voir les travaux → `/realisations/escalier-1-4-tournant-en-meleze-lamelle-colle/`
  - **Bouton contour :** Voir toutes nos réalisations → `/realisations/`

### Section 10 : zone d'intervention

- **Rôle :** ancrer l'entreprise dans ses communes et envoyer vers les trois pages secteur.
- **Composant Framer :** fond crème, deux colonnes. À gauche, texte et trois cartes de lien. À droite, une carte dessinée (SVG simple de la haute Durance) avec un point et le nom de chaque commune de chantier : L'Argentière-la-Bessée, Briançon, Vallouise, Pelvoux, La Salle-les-Alpes, Le Casset, Saint-Martin-de-Queyrières, Prelles, Champcella, La Roche-de-Rame. Pas de carte Google intégrée (pas de cookie tiers).
- **Copywriting :**
  - **Kicker :** Où nous intervenons
  - **H2 :** Charpentiers dans le **nord des Hautes-Alpes**, et au-delà
  - **Texte :** Basés à L'Argentière-la-Bessée, nous intervenons dans les Hautes-Alpes, mais aussi en Provence-Alpes-Côte d'Azur et en Auvergne-Rhône-Alpes.
  - **Carte secteur 1 :**
    - Titre (H3) : Charpentier à Briançon
    - Texte : Une copropriété rénovée, une maison surélevée en ossature bois.
    - Lien : Nos chantiers à Briançon → `/charpentier-briancon/`
  - **Carte secteur 2 :**
    - Titre (H3) : Charpentier à Serre Chevalier
    - Texte : Une ancienne forge à La Salle-les-Alpes, un toit en bardeaux de mélèze au Casset.
    - Lien : Nos chantiers à Serre Chevalier → `/charpentier-serre-chevalier/`
  - **Carte secteur 3 :**
    - Titre (H3) : Charpentier en Vallouise et Pays des Écrins
    - Texte : L'Argentière-la-Bessée, Vallouise, Pelvoux, Champcella, La Roche-de-Rame : notre secteur d'origine.
    - Lien : Nos chantiers en Vallouise → `/charpentier-vallouise-pays-des-ecrins/`
- *Note de réécriture :* la FAQ validée dit « en région PACA et Rhône Alpes » ; on écrit les noms actuels des régions (Provence-Alpes-Côte d'Azur, Auvergne-Rhône-Alpes).

### Section 11 : FAQ

- **Rôle :** répondre aux questions fréquentes et alimenter les données structurées FAQPage.
- **Composant Framer :** FAQ en accordéon dans des cartes blanches, première question ouverte.
- **Copywriting :**
  - **Kicker :** Questions fréquentes
  - **H2 :** Vos **questions**, nos **réponses**
  - Questions et réponses : voir partie 4.

### Section 12 : appel à l'action final

- **Rôle :** convertir.
- **Composant Framer :** bandeau d'appel à l'action vert forêt, formes organiques vert clair et grille ronde translucide.
- **Copywriting :**
  - **Kicker :** Votre projet
  - **H2 :** Prêt à **transformer** votre **espace** ?
  - **Texte :** Chaque projet chez 3B Charpente débute par une étude sur mesure. Racontez-nous votre chantier : nous en parlerons ensemble.
  - **Bouton plein clair :** Demander mon devis → `/contact/`
  - **Bouton contour clair :** Appeler le 06 34 67 31 49 → `tel:+33634673149`

### Section 13 : pied de page (commun à tout le site)

- **Rôle :** coordonnées identiques partout (NAP), liens secteurs et légaux.
- **Composant Framer :** pied de page crème avec le logo et la signature.
- **Copywriting :**
  - **Signature :** « Construire durablement, c'est construire pour l'avenir. »
  - **Bloc coordonnées :** 3B Charpente · 5 rue Saint-Michel, 05120 L'Argentière-la-Bessée · 06 34 67 31 49 · tardy@3bcharpente.fr
  - **Horaires :** [À VALIDER AVEC JEAN : horaires d'ouverture]
  - **Colonne « Secteurs » :** Charpentier à Briançon · Charpentier à Serre Chevalier · Charpentier en Vallouise et Pays des Écrins
  - **Colonne « Prestations » :** les 9 liens du menu, plus 3B Récup'
  - **Colonne « Conseils » (phase 2) :** les quatre guides, à ajouter quand ils seront publiés
  - **Ligne du bas :** © 3B Charpente · Mentions légales et confidentialité · Gestion des cookies · Facebook
  - **Qualification :** Entreprise qualifiée RGE (Qualibat) [À VALIDER AVEC JEAN : logo officiel et certificat en cours de validité]

### Sections de la maquette retirées

- **Témoignages défilants** (« John Martin, Manager, TechMatter ») : texte du modèle Framer, supprimé.
- **Bloc Trustpilot « 4.7 out of 5 based on 227 reviews »** : faux, supprimé.
- **Badges « Expert du Réemploi », « Google » et « Entreprise vérifiée »** : aucune source, supprimés.
- Un bloc d'avis pourra revenir **uniquement** avec de vrais avis Google, une fois la fiche revendiquée.

---

## 4. FAQ

Données structurées : `FAQPage`, textes identiques à ceux affichés.

**1. Dans quelles communes intervenez-vous ?**
3B Charpente est basée à L'Argentière-la-Bessée, dans le nord des Hautes-Alpes. Nous intervenons dans tout le département, notamment à Briançon, à Serre Chevalier, en Vallouise et dans le Pays des Écrins, mais aussi en Provence-Alpes-Côte d'Azur et en Auvergne-Rhône-Alpes. Nous avons par exemple construit un balcon terrasse à Gresse-en-Vercors et une maison à ossature bois dans les monts du Lyonnais. *(60 mots)*

**2. Quels bois et quels isolants utilisez-vous ?**
Nous utilisons principalement du mélèze et du sapin provenant des Hautes-Alpes, sciés par notre partenaire local, la Scierie Savoldelli. Pour l'isolation, nous posons des matériaux biosourcés : ouate de cellulose, panneaux de fibre de bois, laine de chanvre, lin et coton. Nous intégrons aussi dans nos chantiers du bois de réemploi, issu de la déconstruction et retravaillé dans notre atelier. *(59 mots)*

**3. Êtes-vous un artisan RGE pour les aides à la rénovation ?**
Oui. 3B Charpente est qualifiée RGE (reconnu garant de l'environnement) par Qualibat pour l'isolation des murs et des toitures par l'extérieur, l'isolation par l'intérieur des murs, rampants et plafonds, les fenêtres de toit, ainsi que les fenêtres, volets et portes donnant sur l'extérieur. Cette qualification ouvre l'accès aux aides publiques à la rénovation énergétique, sous conditions. Parlons de votre situation lors de notre rencontre. *(64 mots)*

**4. Qu'est-ce que 3B Récup' ?**
3B Récup' est l'initiative de 3B Charpente dédiée au réemploi des matériaux et à la déconstruction sélective. Nous déposons sur site les éléments de structure bois (charpente, solivage, murs à ossature bois), la couverture, l'isolation et les parements. Le bois est trié, nettoyé et usiné dans nos ateliers, puis réemployé sur nos chantiers. Nous travaillons avec des architectes, des entreprises, des collectivités et des particuliers. *(65 mots)*

**5. Combien de temps durent les travaux ?**
Le délai varie selon la complexité et la taille du projet : une charpente neuve, une surélévation ou une isolation complète ne demandent pas la même préparation. Nous vous fournissons un calendrier estimatif dès notre première rencontre. À titre d'exemple, l'escalier quart tournant présenté dans nos réalisations a été monté en deux jours, finitions comprises, après sa préparation à l'atelier. *(59 mots)*

**6. Comment obtenir un devis de charpente ?**
Contactez-nous par téléphone au 06 34 67 31 49 ou avec le formulaire de contact. Nous discutons de vos besoins lors d'une rencontre, puis nous vous proposons un devis détaillé, adapté à votre projet. Chaque projet est unique : nous adaptons nos constructions à vos besoins, à vos préférences esthétiques et fonctionnelles. *(51 mots)*

*Note :* les réponses 2, 4, 5 et 6 reprennent les réponses validées de la maquette, enrichies de faits vérifiés (essences, communes, exemple de l'escalier).

---

## 5. Liens internes

| Texte du lien | Page visée |
|---|---|
| Demander mon devis (héros, étapes, appel final, en-tête) | `/contact/` |
| Voir nos réalisations / Voir toutes nos réalisations | `/realisations/` |
| Découvrir notre histoire / Qui sommes-nous ? | `/a-propos/` |
| Voir la charpente bois | `/charpente-bois/` |
| Rénover ma charpente | `/renovation-charpente-combles/` |
| Isoler ma maison | `/isolation-biosourcee/` |
| Découvrir le sarking | `/isolation-toiture-sarking/` |
| Isoler mes murs | `/isolation-murs-ite/` |
| Construire en bois | `/maison-ossature-bois/` |
| Agrandir ma maison | `/extension-surelevation-bois/` |
| Voir nos escaliers | `/escalier-bois-sur-mesure/` |
| Voir balcons et terrasses | `/balcon-terrasse-abri-bois/` |
| Découvrir 3B Récup' | `/3b-recup/` |
| Diagnostic et gisement (PEMD) | `/3b-recup/diagnostic-pemd/` |
| Déconstruction sélective | `/3b-recup/deconstruction-selective/` |
| Bois de réemploi | `/3b-recup/bois-de-reemploi/` |
| Nos chantiers à Briançon | `/charpentier-briancon/` |
| Nos chantiers à Serre Chevalier | `/charpentier-serre-chevalier/` |
| Nos chantiers en Vallouise | `/charpentier-vallouise-pays-des-ecrins/` |
| Voir les travaux (6 cartes) | les 6 fiches `/realisations/…/` citées en section 9 |
| Mentions légales et confidentialité | `/mentions-legales/` |

---

## 6. Photos à utiliser

Photos à télécharger depuis https://3bcharpente.fr, à convertir en WebP, à renommer en minuscules avec tirets.

| Emplacement | Dossier de galerie | Légende d'origine | Nom de fichier proposé | Texte alternatif |
|---|---|---|---|---|
| Héros, photo principale | `/galeries/refection-d-une-charpente-a-l-argentiere-la-bessee` | levage des fermes | `levage-fermes-charpente-argentiere-la-bessee.webp` | Levage des fermes d'une charpente neuve par l'équipe de 3B Charpente à L'Argentière-la-Bessée |
| Héros, vignette 1 | `/galeries/refection-d-une-charpente-a-l-argentiere-la-bessee` | taille d'un tenon à double embrèvement à la besaïgue | `taille-tenon-double-embrevement-besaigue.webp` | Taille à la besaiguë d'un tenon à double embrèvement, assemblage traditionnel de charpente |
| Héros, vignette 2 | `/galeries/renovation-et-isolation-d-un-chalet-a-vallouise` | Terrasse en mélèze et ses assemblages traditionnels | `terrasse-meleze-assemblages-chalet-vallouise.webp` | Terrasse en mélèze et ses assemblages traditionnels, chalet rénové à Vallouise |
| Manifeste, fond sombre | `/galeries/maison-a-ossature-bois-dans-les-monts-du-lyonnais` | charpente apparent et soleil couchant.. | `charpente-apparente-soleil-couchant-ossature-bois.webp` | Charpente apparente d'une maison à ossature bois au soleil couchant |
| 3B Récup', photo principale | `/galeries/renovation-d-une-maison-d-habitation-a-l-argentiere-la-bessee` | Bardage vieux bois | `bardage-vieux-bois-reemploi-argentiere-la-bessee.webp` | Bardage en vieux bois de réemploi sur une maison rénovée à L'Argentière-la-Bessée |
| 3B Récup', vignette | `/galeries/renovation-d-une-maison-d-habitation-a-l-argentiere-la-bessee` | Garde corps en bois de réemploi | `garde-corps-bois-reemploi-argentiere-la-bessee.webp` | Garde-corps en bois de réemploi posé par 3B Charpente |
| 3B Récup', vignette | `/galeries/refection-d-une-toiture-a-ronatlon` | ferme en vieux bois | `ferme-charpente-vieux-bois.webp` | Ferme de charpente en vieux bois de réemploi |
| Carte « Bio » | `/galeries/isolation-d-un-bati-ancien-par-l-interieur` | insufflation de ouate de cellulose | `insufflation-ouate-cellulose-bati-ancien.webp` | Insufflation de ouate de cellulose dans les murs d'un bâti ancien |
| Carte « Bâti » | `/galeries/refection-d-une-charpente-a-l-argentiere-la-bessee` | trait de jupiter assemblé | `trait-de-jupiter-assemble.webp` | Trait de Jupiter assemblé, raboutage traditionnel de deux pièces de charpente |
| Carte « Bois » | `/galeries/construction-d-une-terrasse-couverte-a-champcella` | plancher en mélèze pays | `plancher-meleze-pays-champcella.webp` | Plancher en mélèze du pays sous une terrasse couverte à Champcella |
| Étape 04 (atelier) | `/galeries/renovation-d-une-maison-d-habitation-sur-la-commune-de-prelles` | Assemblage à blanc (1) | `assemblage-a-blanc-charpente-prelles.webp` | Assemblage à blanc d'une charpente en mélèze avant le levage, chantier de Prelles |
| Réalisation 1 | `/galeries/renovation-et-isolation-d-un-chalet-a-vallouise` | Façade Sud et sa terrasse | `chalet-renove-facade-sud-terrasse-vallouise.webp` | Façade sud d'un chalet rénové et isolé à Vallouise, avec sa terrasse en mélèze |
| Réalisation 2 | `/galeries/refection-d-une-charpente-a-l-argentiere-la-bessee` | lucarne en cours de levage | `lucarne-levage-argentiere-la-bessee.webp` | Lucarne en cours de levage sur une charpente refaite à L'Argentière-la-Bessée |
| Réalisation 3 | `/galeries/renovation-d-une-copropriete-a-briancon` | Reprise des fermes | `reprise-fermes-copropriete-briancon.webp` | Reprise des fermes de charpente d'une copropriété à Briançon |
| Réalisation 4 | `/galeries/surelevation-en-ossature-bois-d-une-maison-a-briancon` | 1façade sud finie | `surelevation-ossature-bois-facade-sud-briancon.webp` | Façade sud d'une maison surélevée en ossature bois à Briançon |
| Réalisation 5 | `/galeries/renovation-d-une-maison-d-habitation-a-l-argentiere-la-bessee` | Pignon vitré | `pignon-vitre-maison-argentiere-la-bessee.webp` | Pignon vitré d'une maison rénovée à L'Argentière-la-Bessée |
| Réalisation 6 | `/galeries/escalier-1-4-tournant-en-meleze-lamelle-colle` | montage terminé | `escalier-quart-tournant-meleze-lamelle-colle.webp` | Escalier quart tournant en mélèze lamellé-collé menant aux combles |

**Photos d'ambiance :** une seule au maximum sur l'accueil (rondins de la maquette, en option derrière la section 6), signalée comme photo d'ambiance dans le gestionnaire de médias.

**Photos manquantes à demander à Jean :**
- portrait de Jean-Michel Tardy à l'atelier ou sur un chantier (section 7) ;
- photo de l'équipe au complet, si l'équipe est confirmée ;
- l'atelier (établis, bois en stock, taille en cours) ;
- un chantier de déconstruction 3B Récup' en cours et un stock de bois de réemploi trié ;
- grumes ou planches de la Scierie Savoldelli (avec l'accord de la scierie) ;
- logo officiel RGE Qualibat.

---

## 7. Points à valider avec Jean

1. **H1 optimisé :** ajout de « L'Argentière-la-Bessée » au H1 validé. D'accord ?
2. **« +100 projets » :** chiffre de la maquette sans source. Le confirmer (et dire depuis quand) ou le retirer.
3. **Compagnons du Devoir :** nous écrivons « formé chez les Compagnons du Devoir » (CAP en CFA, puis Tour de France). Jean a-t-il été reçu compagnon ? Si oui, on peut écrire « compagnon charpentier du Devoir », plus fort pour le référencement.
4. **Horaires :** la maquette dit du lundi au vendredi, 7 h 30 – 17 h ; PagesJaunes dit le vendredi, 7 h 30 – 12 h. Quels horaires afficher partout (site, fiche Google, PagesJaunes) ?
5. **Devis :** le devis est-il gratuit ? Si oui, on l'écrit sur les boutons et dans la FAQ.
6. **3B Récup', ordre des étapes :** l'intervention (dépose) passe avant la transformation. D'accord ?
7. **Diagnostic PEMD :** Jean réalise-t-il lui-même le diagnostic PEMD réglementaire (compétences, assurance) ou intervient-il en appui du diagnostiqueur ? D'ici là, on écrit « en lien avec le diagnostic PEMD ».
8. **Escalier quart tournant :** dans quelle commune ? (Même question pour les fiches 06, 07, 09, 10 et « Ronatlon ».)
9. **Scierie Savoldelli :** accord pour la citer comme partenaire, avec logo et lien ?
10. **Fiche PRECI :** lien exact à afficher (page À propos et page 3B Récup').
11. **Fiche Google :** à revendiquer ; URL à mettre dans `sameAs` ; collecte de vrais avis avant de réintroduire un bloc d'avis.
12. **Qualibat :** logo officiel et certificat RGE en cours de validité pour le pied de page.
13. **Logo FEADER PACA LEADER :** faut-il l'afficher sur le site, et pour quel projet financé ?
14. **Atelier :** les charpentes sont-elles bien tracées, taillées et montées à blanc à l'atelier avant le levage (étape 04, carte « Bâti ») ? Une photo de l'atelier en action le prouverait.
15. **Photos manquantes :** voir partie 6.
