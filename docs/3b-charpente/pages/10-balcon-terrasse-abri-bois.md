# Fiche page 10 — Balcons, terrasses et abris bois

> **Adresse :** `/balcon-terrasse-abri-bois/` · **Phase :** 1 · **Type :** page de prestation (ouvrages extérieurs en bois).
> **Sources :** `00-brief.md` (faits vérifiés, textes validés, règles SEO et GEO) et `realisations-source.md`. Tout fait propre à 3B Charpente vient de ces deux fichiers. Ce qui manque est signalé `[À VALIDER AVEC JEAN : …]` et doit rester visible tant que Jean n'a pas répondu.
> **Conventions :** dans les titres, les mots entre `**` passent en vert accent (#336233), ou en vert sauge (#A3D2A3) sur fond sombre. Les lignes en italique qui commencent par un tiret (*Rôle*, *Composant*, *Photo*, *Note*) sont des consignes : elles ne se publient pas. Tout le reste est du texte prêt à coller.

---

## 1. Carte d'identité

- **Adresse :** `https://3bcharpente.fr/balcon-terrasse-abri-bois/`
- **Objectif de la page :**
  - capter les grosses requêtes « terrasse bois » et « carport bois » sur le terrain local, avec la preuve de neuf chantiers réels ;
  - montrer le savoir-faire de charpentier (assemblages traditionnels, mélèze local) appliqué aux ouvrages extérieurs ;
  - générer des demandes de devis pour des balcons, terrasses, garde-corps, abris voiture et abris de jardin.
- **Visiteurs visés :**
  - propriétaires de chalets et de maisons qui veulent créer, agrandir ou refaire un balcon ou une terrasse ;
  - propriétaires qui veulent abriter leur voiture de la neige (carport) ou construire un abri de jardin ;
  - propriétaires qui cherchent un garde-corps bois, bois-métal ou en bois de réemploi.
- **Mot-clé principal :** terrasse bois (12 100 recherches par mois).
- **Mots-clés secondaires :**
  - carport bois (20 100) ;
  - garde corps bois (660) ;
  - balcon bois (590) ;
  - variantes à placer naturellement : abri voiture bois, abri de jardin bois, terrasse couverte, terrasse mélèze, balcon mélèze ;
  - longue traîne locale, non mesurée : terrasse bois hautes alpes, balcon bois briançon, carport bois hautes alpes, charpentier terrasse vallouise.
- **Note sur les volumes :** « carport bois » a le plus gros volume, mais la plupart de ces recherches visent des kits en magasin. La page ne se bat pas sur le prix : elle vise les gens qui veulent un abri sur mesure, taillé par un charpentier et dimensionné pour la neige. D'où le H1 centré sur « balcons, terrasses et abris », et le mot « carport » placé dans un H2.
- **Intention de recherche :** commerciale (trouver un artisan pour un ouvrage sur mesure), avec une part d'inspiration (voir des réalisations).
- **Pages liées :**
  - prestations proches : `/escalier-bois-sur-mesure/` (09) et `/charpente-bois/` (02) ;
  - `/3b-recup/` et `/3b-recup/bois-de-reemploi/` ;
  - sept fiches réalisations, `/realisations/`, `/contact/`.

---

## 2. SEO

- **Balise title** (60 caractères) : `Terrasse, balcon et carport bois Hautes-Alpes | 3B Charpente`
- **Meta description** (148 caractères) : `Balcons, terrasses, garde-corps et abris voiture en mélèze, sur mesure, par un charpentier de L'Argentière-la-Bessée depuis 2007. Demandez un devis.`
- **H1 :** Balcons, terrasses et abris en bois dans les Hautes-Alpes
- **URL canonique :** `https://3bcharpente.fr/balcon-terrasse-abri-bois/`
- **Fil d'Ariane visible :** Accueil › Balcons, terrasses et abris bois

*Note :* si Jean confirme que le devis est gratuit (section 7), « Demandez un devis. » peut devenir « Devis gratuit. » sans dépasser 155 caractères.

### Données structurées (JSON-LD)

*Le `@id` `https://3bcharpente.fr/#entreprise` doit être celui du LocalBusiness déclaré sur tout le site (fiche 01).*

**Service**

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://3bcharpente.fr/balcon-terrasse-abri-bois/#service",
  "name": "Balcons, terrasses et abris en bois",
  "serviceType": "Construction de balcons, terrasses, garde-corps, abris voiture et abris de jardin en bois",
  "description": "Conception et construction sur mesure de balcons, de terrasses couvertes ou ouvertes, de garde-corps, d'abris voiture (carports) et d'abris de jardin en bois, principalement en mélèze, avec des assemblages traditionnels de charpentier, par 3B Charpente à L'Argentière-la-Bessée.",
  "url": "https://3bcharpente.fr/balcon-terrasse-abri-bois/",
  "provider": { "@id": "https://3bcharpente.fr/#entreprise" },
  "areaServed": [
    { "@type": "AdministrativeArea", "name": "Hautes-Alpes" },
    { "@type": "City", "name": "Briançon" },
    { "@type": "City", "name": "L'Argentière-la-Bessée" }
  ]
}
```

**FAQPage** (généré à partir de la section 4, à garder identique au texte visible)

<!-- FAQPAGE_JSONLD -->
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://3bcharpente.fr/balcon-terrasse-abri-bois/#faq",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Quel bois choisir pour une terrasse en montagne ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Pour nos terrasses et balcons, nous utilisons le plus souvent du mélèze : une essence de montagne réputée pour sa durabilité naturelle en extérieur, et disponible près de chez nous. Notre bois provient principalement des Hautes-Alpes et est scié par la Scierie Savoldelli. Laissé brut, le mélèze grise avec le temps ; un saturateur permet de garder plus longtemps sa teinte d'origine."
      }
    },
    {
      "@type": "Question",
      "name": "Faut-il un permis pour construire un carport en bois ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Cela dépend de la surface et des règles de votre commune. Un carport crée de l'emprise au sol : selon sa taille, une déclaration préalable ou un permis de construire est demandé, et le plan local d'urbanisme peut fixer des règles d'aspect ou d'implantation. Renseignez-vous en mairie dès le début du projet, avant de fixer les dimensions de l'abri."
      }
    },
    {
      "@type": "Question",
      "name": "Quelle hauteur pour un garde-corps de balcon en bois ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "En France, la norme NF P01-012 fixe les dimensions des garde-corps. En règle générale, la hauteur de protection est d'au moins 1 mètre au-dessus du plancher du balcon, et les espacements doivent empêcher un enfant de passer au travers ou d'escalader. Ces règles s'intègrent dès le dessin, que le garde-corps soit en bois, en bois-métal ou en bois de réemploi."
      }
    },
    {
      "@type": "Question",
      "name": "Pouvez-vous agrandir un balcon existant ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oui. Sur un chalet des années 1980 à Vallouise, nous avons agrandi le balcon en terrasse, avec un plancher en mélèze, des assemblages traditionnels et un escalier d'accès ; la terrasse a été étanchée. Avant d'agrandir, il faut vérifier la structure existante et ses appuis : un balcon plus grand porte plus de poids, notamment la neige en hiver."
      }
    },
    {
      "@type": "Question",
      "name": "Construisez-vous des abris de jardin en bois ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oui. À Pelvoux, nous avons créé un abri de jardin en bois, levé comme une petite charpente. Nous construisons aussi des abris voiture, comme à L'Argentière-la-Bessée, avec poinçon, entrait cintré et assemblages à tenons et mortaises chevillés. Chaque abri se dessine sur mesure, selon l'usage, la place disponible et la neige du secteur."
      }
    },
    {
      "@type": "Question",
      "name": "Combien de temps faut-il pour construire un balcon ou une terrasse ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Le délai peut varier selon la complexité et la taille du projet, la saison et les éventuelles démarches en mairie. Nous vous fournirons un calendrier estimatif lors de notre première rencontre. En montagne, la saison compte : pour une terrasse prête aux beaux jours, mieux vaut nous en parler tôt."
      }
    }
  ]
}
```

**BreadcrumbList**

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://3bcharpente.fr/" },
    { "@type": "ListItem", "position": 2, "name": "Balcons, terrasses et abris bois", "item": "https://3bcharpente.fr/balcon-terrasse-abri-bois/" }
  ]
}
```

### Textes alternatifs des images clés

| Emplacement | Photo source (dossier · légende d'origine) | Nom de fichier | Texte alternatif |
|---|---|---|---|
| Héros | `/galeries/renovation-et-isolation-d-un-chalet-a-vallouise` · « Terrasse en mélèze et ses assemblages traditionnels » | `terrasse-meleze-assemblages-traditionnels-vallouise.webp` | Terrasse en mélèze et ses assemblages traditionnels sur un chalet rénové à Vallouise |
| Balcons | `/galeries/creation-d-un-balcon-a-la-roche-de-rame` · « portiques porteurs et balustrade en mélèze » | `balcon-portiques-balustrade-meleze-la-roche-de-rame.webp` | Balcon en bois sur portiques porteurs, avec balustrade en mélèze, à La Roche-de-Rame |
| Terrasses | `/galeries/construction-d-une-terrasse-couverte-a-champcella` · « terrasse couverte et local technique » | `terrasse-couverte-bois-champcella.webp` | Terrasse couverte en bois et son local technique à Champcella |
| Assemblages | `/galeries/construction-d-une-terrasse-couverte-a-champcella` · « tenon passant » | `assemblage-tenon-passant-terrasse-champcella.webp` | Assemblage à tenon passant sur la charpente d'une terrasse couverte à Champcella |
| Abris | `/galeries/abris-voiture-a-l-argentiere-la-bessee` · « poinçon et entrait cintré » | `abri-voiture-bois-poincon-entrait-cintre-argentiere-la-bessee.webp` | Abri voiture en bois avec poinçon et entrait cintré à L'Argentière-la-Bessée |
| Garde-corps | `/galeries/renovation-d-une-maison-d-habitation-sur-la-commune-de-prelles` · « Garde corps bois-métal (1) » | `garde-corps-bois-metal-terrasse-meleze-prelles.webp` | Garde-corps bois et métal sur une terrasse en mélèze à Prelles |

---

## 3. Sections dans l'ordre

### 3.1 Héros

- *Rôle :* poser les ouvrages, le lieu, le bois et le savoir-faire, avec deux preuves.
- *Composant Framer :* héros de la maquette (titre en deux couleurs, texte avec mots forts en gras, bouton plein vert, bouton contour, deux preuves avec pastille sauge). Fil d'Ariane au-dessus du titre, en petit, couleur pierre.
- *Photo :* terrasse en mélèze de Vallouise (voir tableau des textes alternatifs).

**Fil d'Ariane :** Accueil › Balcons, terrasses et abris bois

**Kicker :** Balcons · Terrasses · Abris

**H1 :** Balcons, terrasses et **abris en bois** dans les **Hautes-Alpes**

**Texte :** Un balcon à créer ou à agrandir, une terrasse à couvrir, un abri pour la voiture ou le jardin ? 3B Charpente, charpentier à L'Argentière-la-Bessée depuis 2007, conçoit et construit vos ouvrages extérieurs **sur mesure**, avec des **assemblages de charpentier** et du **bois des Hautes-Alpes**, le plus souvent du mélèze.

**Bouton plein :** Demander mon devis → `/contact/`

**Bouton contour :** Voir nos réalisations → `#realisations`

**Preuves (pastilles sauge) :** Depuis 2007 · Bois des Hautes-Alpes

**Légende photo :** Terrasse en mélèze et ses assemblages traditionnels, sur un chalet rénové à Vallouise.

### 3.2 En bref

- *Rôle :* réponse directe et autonome, reprenable par les moteurs et les assistants IA.
- *Composant :* nouveau. Encadré pleine largeur sur fond de section clair (#F2F2EC), filet vertical vert accent, texte Inter. Juste sous le héros.

> **En bref.** 3B Charpente, charpentier installé à L'Argentière-la-Bessée (Hautes-Alpes) depuis 2007, crée sur mesure des balcons, des terrasses couvertes ou ouvertes, des garde-corps, des abris voiture (carports) et des abris de jardin en bois. Nous travaillons le plus souvent le mélèze, avec des assemblages traditionnels comme le tenon-mortaise chevillé, et dessinons chaque ouvrage pour la maison qui le reçoit.

### 3.3 Balcons et garde-corps

- *Rôle :* porter le texte validé sur les balcons, avec quatre preuves de chantier, et traiter les garde-corps (mot-clé « garde corps bois »).
- *Composant Framer :* bloc manifeste (titre à gauche, texte à droite), puis collage photo (vignettes La Roche-de-Rame et Gresse-en-Vercors qui débordent).
- *Note de réécriture :* reprend le texte validé « Création de balcons et escaliers » (« nos balcons et escaliers sur mesure, conçus pour s'intégrer parfaitement à l'environnement de montagne et à l'âme de votre habitation »). « Parfaitement » est retiré (superlatif). Les escaliers sont renvoyés vers la page 09.

**Kicker :** Balcons et garde-corps

**H2 :** Des balcons **sur mesure**, à l'âme de votre maison

**Texte :**

Un balcon se voit de loin : il fait partie de la façade. Nous concevons des balcons sur mesure, pensés pour s'intégrer à l'environnement de montagne et à l'âme de votre habitation, qu'il s'agisse d'un chalet, d'une maison de pays ou d'une construction récente.

Un balcon en bois, c'est d'abord une structure : des poteaux ou des portiques qui portent, des solives, un plancher, puis un garde-corps. À La Roche-de-Rame, le balcon repose sur des portiques porteurs en mélèze, avec une balustrade en mélèze. À Gresse-en-Vercors, nous avons créé un balcon terrasse, dessiné avant d'être construit. À La Salle-les-Alpes, la réhabilitation d'une ancienne forge comprenait un balcon extérieur.

**Les garde-corps** peuvent être tout bois, bois et métal, ou en bois de réemploi. À Prelles, une terrasse en mélèze a reçu un garde-corps bois-métal. À L'Argentière-la-Bessée, une maison rénovée a reçu un garde-corps en bois de réemploi. Hauteur et espacements obéissent à des règles de sécurité (norme NF P01-012), à intégrer dès le dessin.

**Lien texte :** Un escalier pour accéder au balcon ? Voir nos escaliers bois sur mesure → `/escalier-bois-sur-mesure/`

**Légende photo :** Portiques porteurs et balustrade en mélèze, balcon créé à La Roche-de-Rame.

### 3.4 Terrasses en bois

- *Rôle :* cibler « terrasse bois » avec trois chantiers réels (Champcella, Vallouise, Prelles).
- *Composant Framer :* deux colonnes texte et photo, sur fond crème.

**Kicker :** Terrasses bois

**H2 :** Terrasses en bois, **couvertes ou à ciel ouvert**

**Texte :**

Une terrasse en bois prolonge la maison vers l'extérieur. Couverte, elle protège de la neige et du soleil et devient une pièce de plus aux beaux jours. À ciel ouvert, elle profite pleinement de la vue.

À Champcella, nous avons construit une terrasse couverte avec son local technique ; dans le prolongement de la toiture, un abri protège aussi la voiture. La charpente montre des assemblages à tenon passant, et le plancher est en mélèze de pays.

À Vallouise, le balcon d'un chalet des années 1980 a été agrandi en terrasse et étanché, avec des assemblages traditionnels en mélèze et un escalier d'accès. À Prelles, la rénovation d'une maison en mélèze de pays comprenait la création d'une terrasse en mélèze et de son garde-corps bois-métal.

Une terrasse qui couvre une pièce ou un local doit être étanchée, pas seulement posée : c'est un point à prévoir dès l'étude.

**Légende photo :** Terrasse couverte et local technique à Champcella.

### 3.5 Carports et abris de jardin

- *Rôle :* cibler « carport bois » (le plus gros volume de la page) et « abri de jardin », définir le carport et poser l'enjeu neige et urbanisme.
- *Composant Framer :* deux cartes de services blanches (Abri voiture, Abri de jardin), photo en tête de carte, icône dans une pastille sauge.

**Kicker :** Abris voiture et abris de jardin

**H2 :** Carport et abri de jardin : **une vraie charpente**

**Texte d'introduction :** Un carport, ou abri voiture, est une toiture posée sur des poteaux, sans murs, qui protège la voiture de la neige et du givre. En montagne, il porte la neige tout l'hiver : sa charpente se dimensionne selon la charge de neige du lieu, qui augmente avec l'altitude.

**Carte 1 — Abri voiture (carport)**

À L'Argentière-la-Bessée, l'abri voiture que nous avons construit montre le travail du charpentier : un poinçon (la pièce verticale au centre de la ferme), un entrait cintré (la pièce horizontale du bas, ici courbe) et des assemblages à tenons et mortaises chevillés. À Champcella, l'abri voiture prolonge la toiture de la terrasse couverte.

**Carte 2 — Abri de jardin**

À Pelvoux, nous avons créé un abri de jardin en bois, levé comme une petite charpente. Ranger les outils, le bois de chauffage ou les vélos : l'abri se dessine selon l'usage, la place disponible et la neige du secteur.

**Texte sous les cartes :** Selon sa surface et votre commune, un abri voiture ou un abri de jardin demande une déclaration préalable ou un permis de construire. Renseignez-vous en mairie avant de lancer le projet.

**Lien texte :** Notre savoir-faire en charpente traditionnelle → `/charpente-bois/`

**Légende photo :** Poinçon et entrait cintré d'un abri voiture à L'Argentière-la-Bessée.

### 3.6 Bois local et assemblages

- *Rôle :* prouver l'origine du bois et le savoir-faire (Compagnons du Devoir), définir les assemblages, donner les règles générales de durabilité d'un ouvrage extérieur.
- *Composant Framer :* section plein cadre « forêt » sombre, titre blanc, mots en sauge ; photo « tenon passant » en vignette.

**Kicker :** Bois local, savoir-faire de charpentier

**H2 :** Du **mélèze des Hautes-Alpes**, assemblé comme une charpente

**Texte :**

Notre bois est principalement du mélèze et du sapin provenant des Hautes-Alpes, sciés par notre partenaire local, la Scierie Savoldelli. Pour les ouvrages extérieurs, le mélèze revient sur la plupart de nos chantiers : c'est une essence de montagne réputée pour sa bonne durabilité naturelle dehors. Laissé brut, il prend avec le temps une teinte grise argentée.

Jean-Michel Tardy, fondateur de 3B Charpente, a passé son CAP chez les Compagnons du Devoir, puis fait son Tour de France. Les assemblages traditionnels font partie du métier. Le tenon-mortaise chevillé : le tenon, taillé au bout d'une pièce, entre dans la mortaise creusée dans l'autre, et une cheville en bois traverse le tout. Le tenon passant : le tenon traverse la pièce et reste visible. Ces assemblages donnent aux ouvrages leur solidité et leur caractère.

Ce qui fait durer un ouvrage extérieur :

- des pieds de poteaux décollés du sol, pour que le bois ne reste pas dans l'eau ;
- des pièces dessinées pour que l'eau s'écoule et que le bois sèche vite ;
- un plancher ventilé par-dessous ;
- une couverture ou des débords qui protègent les pièces de structure.

### 3.7 Méthode

- *Rôle :* rassurer sur le déroulé, avec les engagements validés (sur mesure, devis détaillé, calendrier estimatif). Aucun délai chiffré.
- *Composant Framer :* onglets numérotés de 01 à 05 (repris de la méthode 3B Récup').
- *Note de réécriture :* l'étape 02 transpose aux balcons la méthode publiée pour l'escalier quart tournant (« nous dessinons l'escalier et proposons une esthétique aux client(e)s ») : à confirmer par Jean (section 7).

**Kicker :** Notre méthode

**H2 :** Du dessin **au levage**

**01 — Visite et prise de cotes.** Nous venons voir la maison, la façade, l'accès et l'exposition. Vous nous dites l'usage prévu : profiter de la vue, abriter la voiture, ranger le bois…

**02 — Dessin et devis.** Nous dessinons l'ouvrage et vous proposons une esthétique, comme pour le balcon terrasse de Gresse-en-Vercors. Vous recevez un devis détaillé et un calendrier estimatif.

**03 — Préparation.** Une fois le dessin validé, les pièces sont préparées : taille, assemblages, et parfois un assemblage à blanc pour tout vérifier avant le chantier.

**04 — Levage et pose.** Sur place, nous levons la structure, puis nous posons le plancher, le garde-corps ou la couverture.

**05 — Finitions.** Escalier d'accès, habillages, raccords avec la maison : l'ouvrage est prêt à servir.

### 3.8 Réalisations

- *Rôle :* prouver par de vrais chantiers, avec commune, essence et assemblage. Ancre `#realisations` (cible du bouton du héros).
- *Composant Framer :* cartes de réalisations avec l'étiquette « 3B Charpente » posée sur la photo et le lien « Voir les travaux → » ; trois grandes cartes, puis une rangée de quatre petites cartes.

**Kicker :** Nos réalisations

**H2 :** Balcons, terrasses et abris **en photos**

**Carte 1 — Création d'un balcon à La Roche-de-Rame**

Portiques porteurs et balustrade en mélèze.

**Lien :** Voir les travaux → `/realisations/creation-d-un-balcon-a-la-roche-de-rame/`

**Carte 2 — Construction d'une terrasse couverte à Champcella**

Assemblages à tenon passant, plancher en mélèze de pays, local technique, abri voiture dans le prolongement de la toiture.

**Lien :** Voir les travaux → `/realisations/construction-d-une-terrasse-couverte-a-champcella/`

**Carte 3 — Abri voiture à L'Argentière-la-Bessée**

Poinçon et entrait cintré, tenons et mortaises chevillés.

**Lien :** Voir les travaux → `/realisations/abris-voiture-a-l-argentiere-la-bessee/`

**Petites cartes « Voir aussi » :**

- Balcon terrasse à Gresse-en-Vercors → `/realisations/creation-d-un-balcon-terrasse-a-gresse-en-vercors/`
- Terrasse en mélèze et garde-corps bois-métal à Prelles → `/realisations/renovation-d-une-maison-d-habitation-sur-la-commune-de-prelles/`
- Balcon agrandi en terrasse à Vallouise → `/realisations/renovation-et-isolation-d-un-chalet-a-vallouise/`
- Abri de jardin à Pelvoux → `/realisations/creation-d-un-abris-de-jardin-a-pelvoux/`

**Bouton contour :** Toutes nos réalisations → `/realisations/`

### 3.9 3B Récup'

- *Rôle :* relier les ouvrages extérieurs au réemploi (garde-corps en bois de réemploi) et lier `/3b-recup/`.
- *Composant Framer :* bandeau d'appel à l'action vert forêt, formes organiques vert clair en fond, photo à droite.

**Kicker :** 3B Récup'

**H2 :** Un garde-corps **en bois de réemploi** ?

**Texte :** Le bois de déconstruction peut aussi avoir une seconde vie dehors. Sur une maison rénovée à L'Argentière-la-Bessée, nous avons posé un garde-corps en bois de réemploi et un bardage en vieux bois. Avec 3B Récup', notre initiative dédiée au réemploi, ce bois est trié, nettoyé et usiné dans nos ateliers avant d'être reposé.

**Bouton plein :** Découvrir 3B Récup' → `/3b-recup/`

**Bouton contour :** Le bois de réemploi → `/3b-recup/bois-de-reemploi/`

### 3.10 FAQ

- *Rôle :* répondre aux questions telles qu'on les tape ; balisage FAQPage.
- *Composant Framer :* FAQ en accordéon dans des cartes blanches.

**Kicker :** Questions fréquentes

**H2 :** Vos questions sur **les ouvrages extérieurs**

*(Questions et réponses : voir section 4, à reprendre mot pour mot.)*

### 3.11 Appel à l'action final

- *Rôle :* conclure vers le devis, avec les coordonnées identiques au caractère près.
- *Composant Framer :* bandeau d'appel à l'action vert forêt avec la grille ronde translucide.
- *Note de réécriture :* reprend l'appel validé (« Prêt à transformer votre espace ? … chaque projet chez 3B Charpente débute par une étude sur mesure. ») et la FAQ validée « Sur mesure ».

**Kicker :** Votre projet

**H2 :** Prêt à transformer **votre extérieur** ?

**Texte :** Chaque projet est unique, et chaque projet chez 3B Charpente débute par une étude sur mesure. Balcon, terrasse, garde-corps ou abri : parlez-nous de votre maison, nous venons la voir et nous vous proposons un devis détaillé.

**Bouton plein :** Demander mon devis → `/contact/`

**Bouton contour :** Appeler le 06 34 67 31 49 → `tel:+33634673149`

**Coordonnées :** 3B Charpente, 5 rue Saint-Michel, 05120 L'Argentière-la-Bessée, 06 34 67 31 49

**Signature :** « Construire durablement, c'est construire pour l'avenir. »

---

## 4. FAQ

### Q1. Quel bois choisir pour une terrasse en montagne ?

Pour nos terrasses et balcons, nous utilisons le plus souvent du mélèze : une essence de montagne réputée pour sa durabilité naturelle en extérieur, et disponible près de chez nous. Notre bois provient principalement des Hautes-Alpes et est scié par la Scierie Savoldelli. Laissé brut, le mélèze grise avec le temps ; un saturateur permet de garder plus longtemps sa teinte d'origine.

### Q2. Faut-il un permis pour construire un carport en bois ?

Cela dépend de la surface et des règles de votre commune. Un carport crée de l'emprise au sol : selon sa taille, une déclaration préalable ou un permis de construire est demandé, et le plan local d'urbanisme peut fixer des règles d'aspect ou d'implantation. Renseignez-vous en mairie dès le début du projet, avant de fixer les dimensions de l'abri.

### Q3. Quelle hauteur pour un garde-corps de balcon en bois ?

En France, la norme NF P01-012 fixe les dimensions des garde-corps. En règle générale, la hauteur de protection est d'au moins 1 mètre au-dessus du plancher du balcon, et les espacements doivent empêcher un enfant de passer au travers ou d'escalader. Ces règles s'intègrent dès le dessin, que le garde-corps soit en bois, en bois-métal ou en bois de réemploi.

### Q4. Pouvez-vous agrandir un balcon existant ?

Oui. Sur un chalet des années 1980 à Vallouise, nous avons agrandi le balcon en terrasse, avec un plancher en mélèze, des assemblages traditionnels et un escalier d'accès ; la terrasse a été étanchée. Avant d'agrandir, il faut vérifier la structure existante et ses appuis : un balcon plus grand porte plus de poids, notamment la neige en hiver.

### Q5. Construisez-vous des abris de jardin en bois ?

Oui. À Pelvoux, nous avons créé un abri de jardin en bois, levé comme une petite charpente. Nous construisons aussi des abris voiture, comme à L'Argentière-la-Bessée, avec poinçon, entrait cintré et assemblages à tenons et mortaises chevillés. Chaque abri se dessine sur mesure, selon l'usage, la place disponible et la neige du secteur.

### Q6. Combien de temps faut-il pour construire un balcon ou une terrasse ?

Le délai peut varier selon la complexité et la taille du projet, la saison et les éventuelles démarches en mairie. Nous vous fournirons un calendrier estimatif lors de notre première rencontre. En montagne, la saison compte : pour une terrasse prête aux beaux jours, mieux vaut nous en parler tôt.

<!-- Note de réécriture : Q6 reprend la FAQ validée « Délais » (« Le délai peut varier selon la complexité et la taille du projet. Nous vous fournirons un calendrier estimatif lors de notre première rencontre. »). -->

---

## 5. Liens internes

| Texte du lien (ancre) | Page visée | Emplacement |
|---|---|---|
| Demander mon devis | `/contact/` | Héros, appel final |
| Voir nos réalisations | `#realisations` | Héros |
| Voir nos escaliers bois sur mesure | `/escalier-bois-sur-mesure/` | Section 3.3, prestation proche n° 1 |
| Notre savoir-faire en charpente traditionnelle | `/charpente-bois/` | Section 3.5, prestation proche n° 2 |
| Voir les travaux (× 3) | trois fiches réalisations | Section 3.8 |
| Gresse-en-Vercors, Prelles, Vallouise, Pelvoux | quatre fiches réalisations | Petites cartes (3.8) |
| Toutes nos réalisations | `/realisations/` | Section 3.8 |
| Découvrir 3B Récup' | `/3b-recup/` | Bandeau 3.9 |
| Le bois de réemploi | `/3b-recup/bois-de-reemploi/` | Bandeau 3.9 |

**Bloc « Prestations proches » (pied de contenu, avant le pied de page) :** deux cartes « Escaliers bois sur mesure » → `/escalier-bois-sur-mesure/` et « Charpente bois traditionnelle » → `/charpente-bois/`.

**Liens entrants à prévoir :** menu « Prestations », accueil (carte « Création de balcons et escaliers »), page 09 (escaliers), pages secteur 19 et 20 (Serre Chevalier, Vallouise et Pays des Écrins), les sept fiches réalisations citées (lien « Prestation : balcons, terrasses et abris »).

---

## 6. Photos

### Photos à utiliser (galerie actuelle)

| Section | Dossier | Photo (légende d'origine) |
|---|---|---|
| Héros | `/galeries/renovation-et-isolation-d-un-chalet-a-vallouise` | « Terrasse en mélèze et ses assemblages traditionnels » |
| 3.3 Balcons | `/galeries/creation-d-un-balcon-a-la-roche-de-rame` | « portiques porteurs et balustrade en mélèze », « vue d'ensemble » |
| 3.3 Balcons (dessin) | `/galeries/creation-d-un-balcon-terrasse-a-gresse-en-vercors` | « dessin » et « de face » (paire dessin / réalisation) |
| 3.3 Garde-corps | `/galeries/renovation-d-une-maison-d-habitation-sur-la-commune-de-prelles` | « Garde corps bois-métal (1) » |
| 3.3 Balcon forge | `/galeries/rehabilitation-d-une-ancienne-forge-a-la-salle-les-alpes` | « Balcon exterieur » |
| 3.4 Terrasses | `/galeries/construction-d-une-terrasse-couverte-a-champcella` | « terrasse couverte et local technique », « plancher en mélèze pays » |
| 3.4 Terrasses (bis) | `/galeries/renovation-et-isolation-d-un-chalet-a-vallouise` | « Vue de la terrasse », « Facade Sud et Est. Escalier d'accès à la terrasse » |
| 3.4 Terrasses (ter) | `/galeries/renovation-d-une-maison-d-habitation-sur-la-commune-de-prelles` | « Terrasse mélèze » |
| 3.5 Carte abri voiture | `/galeries/abris-voiture-a-l-argentiere-la-bessee` | « poinçon et entrait cintré » |
| 3.5 Carte abri de jardin | `/galeries/creation-d-un-abris-de-jardin-a-pelvoux` | « réalisation terminé » (et « en cours de levage ») |
| 3.6 Assemblages | `/galeries/construction-d-une-terrasse-couverte-a-champcella` | « tenon passant » ; `/galeries/abris-voiture-a-l-argentiere-la-bessee` · « tenons mortaise chevillé » |
| 3.7 Méthode | `/galeries/creation-d-un-balcon-terrasse-a-gresse-en-vercors` | « dessin » |
| 3.8 Cartes | dossiers des réalisations citées | une photo de vue d'ensemble par chantier |
| 3.9 3B Récup' | `/galeries/renovation-d-une-maison-d-habitation-a-l-argentiere-la-bessee` | « Garde corps en bois de réemploi » |

### Photos à demander à Jean

1. **L'abri voiture de L'Argentière-la-Bessée en vue d'ensemble** : la galerie n'a que deux détails (poinçon, tenons). Une vue complète est indispensable pour une page qui vise « carport bois ».
2. Un carport sous la neige, en hiver (la preuve la plus parlante en montagne).
3. Le balcon de La Roche-de-Rame vu de plus loin, avec la maison entière.
4. Un détail de pied de poteau ou de plancher ventilé (pour illustrer « ce qui fait durer un ouvrage »).
5. Des photos d'atelier : taille d'un tenon, assemblage à blanc d'un balcon ou d'un abri.
6. Le garde-corps en bois de réemploi de L'Argentière-la-Bessée en gros plan.

---

## 7. Points à valider avec Jean

1. **Devis gratuit :** est-ce le cas ? Si oui, la meta description peut le dire (section 2). Tant que ce n'est pas confirmé, aucune page ne l'écrit.
2. **Méthode :** Jean dessine-t-il les balcons, terrasses et abris comme il le fait pour les escaliers (« nous dessinons… et proposons une esthétique ») ? Les pièces sont-elles taillées à l'atelier ? Le dessin du balcon de Gresse-en-Vercors est-il de 3B ?
3. **Dimensionnement neige :** les charpentes d'abris, de balcons et de terrasses couvertes sont-elles calculées par 3B ou par un bureau d'études ? La page dit seulement que la charpente « se dimensionne selon la charge de neige du lieu ».
4. **Finition du mélèze :** 3B le laisse-t-il brut ou propose-t-il un saturateur ? La FAQ Q1 évoque le saturateur de façon générale.
5. **Démarches d'urbanisme :** 3B fournit-il les plans pour la déclaration préalable ou le permis de construire d'un carport ?
6. **Garde-corps bois-métal de Prelles :** la partie métal est-elle faite par un serrurier partenaire ? Le nommer si Jean le souhaite.
7. **Terrasse étanchée de Vallouise :** quel système d'étanchéité (membrane ?) et qui l'a posé ?
8. **Abri voiture de L'Argentière-la-Bessée et abri de jardin de Pelvoux :** essence de bois et type de couverture.
9. **Prelles :** la galerie dit « commune de Prelles ». Prelles est un village de la commune de Saint-Martin-de-Queyrières : corriger le titre de la fiche réalisation si Jean est d'accord.
10. **Rénovation de vieux balcons :** 3B remplace-t-il des balcons de chalet abîmés (demande fréquente) ? Si oui, l'ajouter à la section 3.3 avec un exemple.
11. **Terrasses sur plots ou en lames composites :** la page n'en parle pas. À confirmer que 3B ne fait que du bois massif.
