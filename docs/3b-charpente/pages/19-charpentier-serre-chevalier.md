# 19 — Charpentier à Serre Chevalier : `/charpentier-serre-chevalier/`

Page secteur pour la vallée de la Guisane : Saint-Chaffrey, La Salle-les-Alpes, Le Monêtier-les-Bains. Elle ne doit pas être une page « satellite ». Elle s'appuie sur :

- deux chantiers réels de la vallée (une ancienne forge à La Salle-les-Alpes, un toit en bardeaux de mélèze au Casset) ;
- le contexte du bâti ancien de la vallée ;
- une FAQ propre au secteur ;
- la liste des communes.

Sources : `00-brief.md` et `realisations-source.md` (n° 16 et 17). Conventions : le texte en bloc de citation (`>`) est prêt à coller ; dans les titres, les mots entre `**` passent en vert ; `[À VALIDER AVEC JEAN : …]` n'est jamais publié tel quel.

---

## 1. Carte d'identité

- **Adresse :** `/charpentier-serre-chevalier/`
- **Objectif de la page :**
  - apparaître sur les recherches de charpentier dans la vallée de Serre Chevalier et ses communes ;
  - montrer les deux chantiers de la vallée ;
  - transformer la visite en demande de devis.
- **Visiteurs visés :**
  - propriétaires de maisons anciennes, de granges et de chalets à Saint-Chaffrey, La Salle-les-Alpes et Le Monêtier-les-Bains ;
  - propriétaires de résidences dans la station qui préparent des travaux ;
  - architectes de la vallée.
- **Mot-clé principal :** « charpentier serre chevalier ». Volume trop faible pour être mesuré (brief §7).
- **Mots-clés secondaires** (volumes non mesurés) :
  - « charpentier la salle les alpes » ;
  - « charpentier le monêtier les bains » ;
  - « charpentier saint chaffrey » ;
  - « toit bardeaux mélèze » ;
  - « rénovation grange serre chevalier ».
- **Intention de recherche :** locale et transactionnelle.
- **Concurrence relevée (brief §2) :** sur « charpentier briançon », la carte montre notamment Serre Che Toiture. Pas de relevé propre à « charpentier serre chevalier » : à faire après la mise en ligne.
- **Ce qui distingue la page :**
  - une réhabilitation complète d'un bâtiment d'artisan (charpente, toiture, escaliers, balcon) ;
  - une couverture traditionnelle en bardeaux de mélèze ;
  - le bois des Hautes-Alpes.
- **Pages liées :**
  - fiches n° 16 et n° 17 ;
  - les prestations 02, 03, 09 et 10 en priorité ;
  - `/3b-recup/` ;
  - les deux autres pages secteur ;
  - `/contact/`.

---

## 2. SEO

- **Balise title (59 car.) :** Charpentier à Serre Chevalier et au Monêtier | 3B Charpente
- **Meta description (145 car.) :** Charpentier à Serre Chevalier : forge réhabilitée à La Salle-les-Alpes, toit en bardeaux de mélèze au Casset. Bois local, RGE. Demandez un devis.
- **H1 :** Charpentier à **Serre Chevalier**, de Saint-Chaffrey au Monêtier-les-Bains
- **URL canonique :** `https://3bcharpente.fr/charpentier-serre-chevalier/`

### Données structurées (JSON-LD)

Les notes d'intégration sont les mêmes que pour la page 18 :

- même `@id` et même type que sur l'accueil ;
- horaires, `geo` et fiche Google ajoutés seulement une fois validés ;
- texte des FAQ identique à la section 9.

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "GeneralContractor",
      "@id": "https://3bcharpente.fr/#entreprise",
      "name": "3B Charpente",
      "url": "https://3bcharpente.fr/",
      "telephone": "06 34 67 31 49",
      "email": "tardy@3bcharpente.fr",
      "foundingDate": "2007",
      "founder": { "@type": "Person", "name": "Jean-Michel Tardy" },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "5 rue Saint-Michel",
        "postalCode": "05120",
        "addressLocality": "L'Argentière-la-Bessée",
        "addressRegion": "Hautes-Alpes",
        "addressCountry": "FR"
      },
      "areaServed": [
        { "@type": "City", "name": "Saint-Chaffrey" },
        { "@type": "City", "name": "La Salle-les-Alpes" },
        { "@type": "City", "name": "Le Monêtier-les-Bains" },
        { "@type": "Place", "name": "Serre Chevalier" }
      ],
      "sameAs": ["https://www.facebook.com/3bcharpente"]
    },
    {
      "@type": "Service",
      "@id": "https://3bcharpente.fr/charpentier-serre-chevalier/#service",
      "name": "Charpentier à Serre Chevalier",
      "serviceType": "Charpente traditionnelle, rénovation de toiture, réhabilitation de bâti ancien, escaliers et balcons en bois",
      "url": "https://3bcharpente.fr/charpentier-serre-chevalier/",
      "provider": { "@id": "https://3bcharpente.fr/#entreprise" },
      "areaServed": [
        { "@type": "City", "name": "Saint-Chaffrey" },
        { "@type": "City", "name": "La Salle-les-Alpes" },
        { "@type": "City", "name": "Le Monêtier-les-Bains" },
        { "@type": "Place", "name": "Serre Chevalier" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Intervenez-vous à Serre Chevalier ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Oui. 3B Charpente est installée à L'Argentière-la-Bessée et intervient dans la vallée de Serre Chevalier : Saint-Chaffrey, La Salle-les-Alpes et Le Monêtier-les-Bains. Nous y avons réhabilité une ancienne forge à La Salle-les-Alpes et rénové un toit en bardeaux de mélèze au Casset. Nous travaillons aussi à Briançon et dans le Pays des Écrins." }
        },
        {
          "@type": "Question",
          "name": "Pouvez-vous rénover un toit en bardeaux de mélèze ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Oui. Au Casset, sur la commune du Monêtier-les-Bains, nous avons rénové un toit couvert de bardeaux de mélèze. Les bardeaux sont de petites planches de bois posées en recouvrement, comme des tuiles. Chaque toit est différent : nous commençons par une rencontre et une étude sur mesure, puis nous vous remettons un devis détaillé." }
        },
        {
          "@type": "Question",
          "name": "Réhabilitez-vous les bâtiments anciens de la vallée ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Oui. À La Salle-les-Alpes, nous avons réhabilité une ancienne forge : taille de la charpente, levage de la toiture, couverture, deux escaliers et un balcon extérieur. Sur ce type de bâtiment, nous réunissons la charpente, les escaliers et les ouvrages extérieurs. Nous pouvons aussi isoler avec des matériaux biosourcés, comme la ouate de cellulose et la fibre de bois." }
        },
        {
          "@type": "Question",
          "name": "Fabriquez-vous des escaliers et des balcons sur mesure ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Oui. Dans l'ancienne forge de La Salle-les-Alpes, nous avons réalisé un escalier encloisonné, un escalier quart tournant et un balcon extérieur. Pour nos escaliers, nous prenons les cotes, nous dessinons l'ouvrage et proposons une esthétique. Une fois le dessin validé, nous le traçons, le taillons et l'assemblons dans notre atelier." }
        },
        {
          "@type": "Question",
          "name": "Quel bois utilisez-vous pour vos charpentes ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Nous utilisons principalement du mélèze et du sapin provenant des Hautes-Alpes, sciés par notre partenaire local, la Scierie Savoldelli. Nous intégrons aussi à nos chantiers du bois de réemploi issu de la déconstruction, préparé dans nos ateliers. Pour isoler, nous choisissons des matériaux biosourcés : ouate de cellulose et panneaux de fibre de bois." }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://3bcharpente.fr/" },
        { "@type": "ListItem", "position": 2, "name": "Charpentier à Serre Chevalier", "item": "https://3bcharpente.fr/charpentier-serre-chevalier/" }
      ]
    }
  ]
}
```

### Texte alternatif des images clés

| Emplacement | Photo (fiche, n° de photo) | Texte alternatif |
|---|---|---|
| Héros | n° 16, photo 8 « Chantier fini » | L'ancienne forge réhabilitée à La Salle-les-Alpes, chantier terminé |
| Carte chantier 1 | n° 16, photo 2 « Levage de la toiture » | Levage de la toiture de l'ancienne forge à La Salle-les-Alpes, vallée de Serre Chevalier |
| Carte chantier 2 | n° 17, photo 2 « après » | Toit en bardeaux de mélèze rénové au Casset, Le Monêtier-les-Bains (Hautes-Alpes) |
| Section « Le bâti de la Guisane » | n° 16, photo 1 « Taille de la charpente » | Taille des pièces de la charpente pour la réhabilitation d'une ancienne forge à La Salle-les-Alpes |
| Section « Notre méthode » | n° 16, photo 6 « Escalier quart tournant » | Escalier quart tournant réalisé dans l'ancienne forge de La Salle-les-Alpes |

---

## 3. Sections dans l'ordre

Corps de page (sections 1 à 8, hors FAQ et coordonnées) : 789 mots.

### Section 1 — Héros

- **Rôle :** dire qui, quoi, où, et donner les deux actions.
- **Composant de la maquette :** héros (titre deux couleurs, mots forts en gras, bouton plein vert, bouton contour, deux preuves avec pastille sauge). Photo réelle de la forge réhabilitée.

*Fil d'Ariane*
> Accueil › Charpentier à Serre Chevalier

*Kicker*
> Charpente · Toiture · Escaliers · Balcons

*H1*
> Charpentier à **Serre Chevalier**, de Saint-Chaffrey au Monêtier-les-Bains

*Texte*
> Dans la vallée de la Guisane, 3B Charpente reprend les charpentes et les toitures, réhabilite le bâti ancien et crée des escaliers et des balcons en bois. Nous sommes installés depuis 2007 à L'Argentière-la-Bessée et nous travaillons le **bois des Hautes-Alpes** et des **isolants biosourcés**.

*Boutons*
> Demander mon devis → `/contact/` (plein)
> Voir nos chantiers de la vallée → `#chantiers` (contour)

*Preuves (pastilles sauge)*
> Depuis 2007
> Entreprise RGE

### Section 2 — En bref

- **Rôle :** la réponse directe que les IA reprennent (40 à 60 mots).
- **Composant :** encadré crème clair, sous le héros.

*Kicker*
> En bref

*Texte*
> 3B Charpente, charpentier installé à L'Argentière-la-Bessée depuis 2007, intervient dans la vallée de Serre Chevalier. À La Salle-les-Alpes, nous avons réhabilité une ancienne forge : charpente, toiture, deux escaliers et un balcon. Au Casset, sur la commune du Monêtier-les-Bains, nous avons rénové un toit en bardeaux de mélèze. Bois des Hautes-Alpes, isolants biosourcés.

Longueur : 54 mots.

### Section 3 — Nos chantiers dans la vallée (ancre `#chantiers`)

- **Rôle :** la preuve locale.
- **Composant :** deux grandes cartes de réalisations (photo, étiquette « 3B Charpente », titre, texte, « Voir les travaux → »).

*Kicker*
> Nos chantiers à Serre Chevalier

*H2*
> Une **forge** et un **toit de mélèze**

*Texte d'introduction*
> Deux chantiers dans la vallée : la réhabilitation d'un ancien bâtiment d'artisan, et la rénovation d'une couverture traditionnelle en mélèze.

*Carte 1 — titre*
> Réhabilitation d'une ancienne forge à La Salle-les-Alpes

*Carte 1 — texte*
> Pour réhabiliter cette ancienne forge, nous avons taillé la charpente, levé la toiture et posé la couverture. À l'intérieur, nous avons réalisé deux escaliers : un escalier encloisonné, pris entre deux murs, et un escalier quart tournant, qui change de direction d'un quart de tour. Un balcon extérieur complète le chantier.

*Carte 1 — lien*
> Voir les travaux → `/realisations/rehabilitation-d-une-ancienne-forge-a-la-salle-les-alpes/`

*Carte 2 — titre*
> Rénovation d'un toit en bardeaux de mélèze au Casset

*Carte 2 — texte*
> Au Casset, hameau du Monêtier-les-Bains, nous avons rénové un toit couvert de bardeaux de mélèze : de petites planches de bois posées en recouvrement, comme des tuiles. Les photos avant et après montrent le toit d'origine et le toit rénové.

*Carte 2 — lien*
> Voir les travaux → `/realisations/renovation-d-un-toit-en-bardeau-meleze-au-casset/`

*Ligne sous les cartes*
> Plus bas dans la vallée, à Briançon, nous avons rénové la toiture d'une copropriété et surélevé une maison en ossature bois. Voir nos chantiers à Briançon → `/charpentier-briancon/`

### Section 4 — Le bâti de la Guisane

- **Rôle :** montrer qu'on connaît le terrain, avec des formulations générales et prudentes, sans chiffre inventé.
- **Composant :** bloc texte sur deux colonnes, avec la photo « Taille de la charpente » (fiche n° 16).

*Kicker*
> Le bâti de la Guisane

*H2*
> Des villages anciens et des toits **de mélèze**

*Texte*
> La vallée de Serre Chevalier suit la Guisane, de Briançon jusqu'au Monêtier-les-Bains. Ses villages mêlent maisons anciennes en pierre et en bois, granges, anciens bâtiments d'artisans comme la forge de La Salle-les-Alpes, et chalets plus récents autour de la station. Rénover ici, c'est souvent reprendre une structure ancienne en gardant ce qui fait son caractère.
>
> L'altitude compte. La neige peut charger les toitures une bonne partie de l'hiver, et les bois exposés vivent avec le gel et le soleil. Le mélèze, arbre des forêts de montagne, est une essence traditionnelle des toits en bardeaux que l'on voit encore dans certains hameaux, comme au Casset.
>
> Réhabiliter un bâtiment ancien demande de comprendre comment il a été construit avant de toucher à sa charpente. Chaque projet commence donc par une étude sur mesure. Avant de changer l'aspect d'un toit ou d'une façade, renseignez-vous aussi en mairie sur les règles d'urbanisme de votre commune.

### Section 5 — Nos prestations dans la vallée

- **Rôle :** maillage vers les pages prestation, avec une phrase propre à ce secteur.
- **Composant :** cartes de services blanches, icône dans une pastille sauge.

*Kicker*
> Ce que nous faisons

*H2*
> Nos **prestations** à Serre Chevalier

*Cartes (titre, texte, lien)*
> **Charpente traditionnelle** — Charpentes taillées puis levées sur place, comme celle de la forge de La Salle-les-Alpes. → `/charpente-bois/`
>
> **Rénovation de charpente et toiture** — Reprise de charpente, couvertures anciennes, lucarnes et combles. → `/renovation-charpente-combles/`
>
> **Escaliers sur mesure** — Escaliers encloisonnés, quart tournants ou balancés, dessinés pour votre maison. → `/escalier-bois-sur-mesure/`
>
> **Balcons, terrasses et abris** — Balcons, terrasses et garde-corps en mélèze. → `/balcon-terrasse-abri-bois/`
>
> **Isolation biosourcée** — Ouate de cellulose et fibre de bois, pour un confort d'hiver comme d'été. → `/isolation-biosourcee/`
>
> **Isolation de toiture par l'extérieur** — Le sarking : un isolant continu posé au-dessus des chevrons, qui laisse la charpente visible à l'intérieur. → `/isolation-toiture-sarking/`
>
> **Extension et surélévation bois** — Gagner de la place par le haut ou à côté, avec une structure en ossature bois. → `/extension-surelevation-bois/`
>
> **3B Récup'** — Déconstruction sélective et vieux bois réemployé dans nos rénovations. → `/3b-recup/`

### Section 6 — Notre méthode

- **Rôle :** montrer le déroulé d'une réhabilitation, avec les étapes visibles sur les chantiers réels.
- **Composant :** étapes numérotées 01 à 04, avec la photo de l'escalier quart tournant de la forge.

*Kicker*
> Notre méthode

*H2*
> De l'étude à la **dernière marche**

*Étapes*
> 01. **Rencontre.** Nous discutons de votre projet et de votre bâtiment.
> 02. **Étude et devis.** Une étude sur mesure, puis un devis détaillé et un calendrier estimatif.
> 03. **Taille.** La charpente est tracée et taillée, puis assemblée à blanc : montée une première fois au sol pour vérifier chaque pièce.
> 04. **Levage et finitions.** Nous levons la charpente, posons la couverture et réalisons les ouvrages en bois : escaliers, balcons, bardages.

### Section 7 — Nos matériaux

- **Rôle :** la différence de 3B.
- **Composant :** section plein cadre « forêt » sombre, titre blanc avec les mots en vert sauge.

*Kicker*
> Nos matériaux

*H2*
> Le bois **de nos montagnes**

*Texte*
> Notre bois vient des Hautes-Alpes : « principalement du mélèze et du sapin provenant des Hautes-Alpes et sciés par notre partenaire local : la Scierie Savoldelli ». Nous isolons avec des matériaux biosourcés, la ouate de cellulose et la fibre de bois. Nous intégrons aussi à nos chantiers du vieux bois issu de la déconstruction, préparé dans nos ateliers par 3B Récup'. Notre qualification RGE ouvre l'accès aux aides publiques à la rénovation énergétique, sous conditions.

*Bouton*
> Découvrir 3B Récup' → `/3b-recup/`

### Section 8 — Communes desservies

- **Rôle :** dire où nous allons et renvoyer vers les autres pages secteur.
- **Composant :** texte et liste en pastilles crème.

*Kicker*
> Où nous intervenons

*H2*
> Toute la **vallée de Serre Chevalier**

*Texte*
> Depuis L'Argentière-la-Bessée, nous intervenons dans la vallée de Serre Chevalier :

*Liste (pastilles)*
> Saint-Chaffrey (Chantemerle) · La Salle-les-Alpes (Villeneuve) · Le Monêtier-les-Bains (Le Casset)

[À VALIDER AVEC JEAN : communes et villages réellement couverts. Ajouter Les Guibertes, Le Lauzet, ou La Grave et Villar-d'Arêne au-delà du Lautaret, seulement si Jean y va]

*Texte*
> À l'entrée de la vallée, Briançon a sa propre page. Nous travaillons aussi dans le Pays des Écrins, autour de Vallouise et de L'Argentière-la-Bessée. Plus largement, « nous intervenons dans les Hautes-Alpes mais aussi en région PACA et Rhône-Alpes ».

*Liens*
> Charpentier à Briançon → `/charpentier-briancon/`
> Charpentier en Vallouise et Pays des Écrins → `/charpentier-vallouise-pays-des-ecrins/`

### Section 9 — FAQ

- **Composant :** FAQ en accordéon dans des cartes blanches. Données structurées FAQPage (voir §2).

*Kicker*
> Questions fréquentes

*H2*
> Vos questions sur un chantier à **Serre Chevalier**

(Questions et réponses : voir §4 ci-dessous.)

### Section 10 — Appel à l'action et coordonnées

- **Composant :** bandeau vert forêt (formes organiques, grille ronde translucide), puis bloc de coordonnées.

*H2*
> Un projet dans la **vallée** ?

*Texte*
> Chaque projet chez 3B Charpente débute par une étude sur mesure. Parlons du vôtre.

*Boutons*
> Demander mon devis → `/contact/`
> Appeler le 06 34 67 31 49 → `tel:+33634673149`

*Bloc coordonnées (identique au caractère près sur tout le site)*
> 3B Charpente
> 5 rue Saint-Michel
> 05120 L'Argentière-la-Bessée
> 06 34 67 31 49
> tardy@3bcharpente.fr

*Horaires*
> [À VALIDER AVEC JEAN : horaires. La maquette indique « lundi au vendredi, 7 h 30 – 17 h », PagesJaunes « vendredi 7 h 30 – 12 h »]

---

## 4. FAQ

**Intervenez-vous à Serre Chevalier ?**
> Oui. 3B Charpente est installée à L'Argentière-la-Bessée et intervient dans la vallée de Serre Chevalier : Saint-Chaffrey, La Salle-les-Alpes et Le Monêtier-les-Bains. Nous y avons réhabilité une ancienne forge à La Salle-les-Alpes et rénové un toit en bardeaux de mélèze au Casset. Nous travaillons aussi à Briançon et dans le Pays des Écrins.

**Pouvez-vous rénover un toit en bardeaux de mélèze ?**
> Oui. Au Casset, sur la commune du Monêtier-les-Bains, nous avons rénové un toit couvert de bardeaux de mélèze. Les bardeaux sont de petites planches de bois posées en recouvrement, comme des tuiles. Chaque toit est différent : nous commençons par une rencontre et une étude sur mesure, puis nous vous remettons un devis détaillé.

**Réhabilitez-vous les bâtiments anciens de la vallée ?**
> Oui. À La Salle-les-Alpes, nous avons réhabilité une ancienne forge : taille de la charpente, levage de la toiture, couverture, deux escaliers et un balcon extérieur. Sur ce type de bâtiment, nous réunissons la charpente, les escaliers et les ouvrages extérieurs. Nous pouvons aussi isoler avec des matériaux biosourcés, comme la ouate de cellulose et la fibre de bois.

**Fabriquez-vous des escaliers et des balcons sur mesure ?**
> Oui. Dans l'ancienne forge de La Salle-les-Alpes, nous avons réalisé un escalier encloisonné, un escalier quart tournant et un balcon extérieur. Pour nos escaliers, nous prenons les cotes, nous dessinons l'ouvrage et proposons une esthétique. Une fois le dessin validé, nous le traçons, le taillons et l'assemblons dans notre atelier.

**Quel bois utilisez-vous pour vos charpentes ?**
> Nous utilisons principalement du mélèze et du sapin provenant des Hautes-Alpes, sciés par notre partenaire local, la Scierie Savoldelli. Nous intégrons aussi à nos chantiers du bois de réemploi issu de la déconstruction, préparé dans nos ateliers. Pour isoler, nous choisissons des matériaux biosourcés : ouate de cellulose et panneaux de fibre de bois.

---

## 5. Liens internes

| Texte du lien | Page visée | Emplacement |
|---|---|---|
| Demander mon devis | `/contact/` | héros, section 10 |
| Voir nos chantiers de la vallée | `#chantiers` | héros |
| Voir les travaux (Réhabilitation d'une ancienne forge à La Salle-les-Alpes) | `/realisations/rehabilitation-d-une-ancienne-forge-a-la-salle-les-alpes/` | section 3 |
| Voir les travaux (Rénovation d'un toit en bardeaux de mélèze au Casset) | `/realisations/renovation-d-un-toit-en-bardeau-meleze-au-casset/` | section 3 |
| Voir nos chantiers à Briançon | `/charpentier-briancon/` | sections 3 et 8 |
| Charpente traditionnelle | `/charpente-bois/` | section 5 |
| Rénovation de charpente et toiture | `/renovation-charpente-combles/` | section 5 |
| Escaliers sur mesure | `/escalier-bois-sur-mesure/` | section 5 |
| Balcons, terrasses et abris | `/balcon-terrasse-abri-bois/` | section 5 |
| Isolation biosourcée | `/isolation-biosourcee/` | section 5 |
| Isolation de toiture par l'extérieur | `/isolation-toiture-sarking/` | section 5 |
| Extension et surélévation bois | `/extension-surelevation-bois/` | section 5 |
| 3B Récup' / Découvrir 3B Récup' | `/3b-recup/` | sections 5 et 7 |
| Charpentier en Vallouise et Pays des Écrins | `/charpentier-vallouise-pays-des-ecrins/` | section 8 |

**Liens entrants à prévoir :**

- l'accueil ;
- le pied de page (pages secteur) ;
- les fiches n° 16 et n° 17 ;
- `/charpentier-briancon/` ;
- `/contact/`.

---

## 6. Photos à utiliser

- **Fiche n° 16, Réhabilitation d'une ancienne forge à La Salle-les-Alpes** (`/galeries/rehabilitation-d-une-ancienne-forge-a-la-salle-les-alpes`) :
  - photo 8 « Chantier fini » pour le héros ;
  - photo 2 « Levage de la toiture » pour la carte 1 ;
  - photo 1 « Taille de la charpente » pour la section 4 ;
  - photo 6 « Escalier quart tournant » pour la section 6.
- **Fiche n° 17, Rénovation d'un toit en bardeau mélèze au Casset** (`/galeries/renovation-d-un-toit-en-bardeau-meleze-au-casset`) : photo « après » pour la carte 2. Possibilité d'un curseur avant/après si les cadrages concordent.
- **Photo d'ambiance, une au maximum :** une forêt de mélèzes en fond de la section 7, signalée comme telle (brief §4).

**Photos manquantes à demander à Jean :**

- d'autres chantiers à Saint-Chaffrey, Chantemerle, Villeneuve ou au Monêtier ;
- le toit du Casset en cours de rénovation ;
- la forge avant les travaux.

---

## 7. Points à valider avec Jean

1. **Communes et villages couverts :** Saint-Chaffrey (Chantemerle), La Salle-les-Alpes (Villeneuve), Le Monêtier-les-Bains (Le Casset). Faut-il en ajouter (Les Guibertes, Le Lauzet, La Grave, Villar-d'Arêne) ?
2. **Forge de La Salle-les-Alpes :** nouvel usage du bâtiment, année, essences, type de couverture. Une phrase de Jean sur ce chantier serait la meilleure accroche de la page.
3. **Toit du Casset :** rénovation totale ou partielle ; bardeaux fendus ou sciés ; provenance du mélèze.
4. **Taille et assemblage à blanc** (étape 03 de la méthode) : confirmer que c'est la pratique habituelle de 3B, et pas seulement sur les chantiers photographiés (Prelles, L'Argentière-la-Bessée).
5. **Horaires**, **coordonnées GPS**, **fiche Google** à revendiquer : mêmes points que la page 18.
6. **Badge « Entreprise RGE » :** vérifier le SIRET actif (00016 dans les mentions légales, 00024 dans l'annuaire RGE).
7. **Nom du secteur :** l'usage courant est « Serre Chevalier », sans trait d'union ; la station dit « Serre Chevalier Vallée ». Garder « Serre Chevalier » dans le H1 et l'adresse, comme prévu dans le plan du site.
