# 18 — Charpentier à Briançon : `/charpentier-briancon/`

Page secteur. Elle ne doit pas être une page « satellite » où seul le nom de la ville change. Elle s'appuie sur :

- deux chantiers réels à Briançon, décrits en détail ;
- le contexte du bâti briançonnais (altitude, copropriétés, secteur protégé) ;
- une FAQ propre à Briançon ;
- la liste des communes desservies.

Sources : `00-brief.md` et `realisations-source.md` (n° 18 et 24). Conventions : le texte en bloc de citation (`>`) est prêt à coller ; dans les titres, les mots entre `**` passent en vert ; `[À VALIDER AVEC JEAN : …]` n'est jamais publié tel quel.

---

## 1. Carte d'identité

- **Adresse :** `/charpentier-briancon/`
- **Objectif de la page :**
  - apparaître sur « charpentier briançon », où 3B est absent des 100 premiers résultats (brief §2) ;
  - montrer des chantiers réels à Briançon ;
  - transformer la visite en demande de devis.
- **Visiteurs visés :**
  - propriétaires de maisons, de chalets et d'appartements en copropriété à Briançon et dans les communes voisines ;
  - conseils syndicaux et syndics qui cherchent une entreprise pour une toiture ;
  - architectes du Briançonnais.
- **Mot-clé principal :** « charpentier briançon ». Volume trop faible pour être mesuré (brief §7), mais ce sont des clients directs.
- **Mots-clés secondaires** (volumes non mesurés) :
  - « rénovation chalet briançon » ;
  - « charpente briançon » ;
  - « rénovation toiture briançon » ;
  - « surélévation bois briançon » ;
  - « isolation toiture briançon ».
- **Intention de recherche :** locale et transactionnelle. Trouver un charpentier proche, voir des preuves, demander un devis.
- **Concurrence relevée (brief §2) :**
  - sur la carte : Philip Christophe, construction-chalet-bois.fr, Thibo Charpente, Serre Che Toiture ;
  - sur « rénovation chalet briançon » : Alpes Bois Conception (30 avis, une page par prestation et par commune), FC Peinture, Le Chalet Briançonnais, Chalets Lombard, ACR Provence.
- **Ce qui distingue la page :**
  - deux chantiers briançonnais avec leurs étapes ;
  - le bois des Hautes-Alpes ;
  - les isolants biosourcés ;
  - la qualification RGE ;
  - le réemploi.
- **Pages liées :**
  - fiches n° 18 et n° 24 ;
  - les prestations 02 à 10 ;
  - `/3b-recup/` ;
  - les deux autres pages secteur ;
  - `/contact/`.

---

## 2. SEO

- **Balise title (59 car.) :** Charpentier à Briançon, toiture et isolation | 3B Charpente
- **Meta description (151 car.) :** 3B Charpente, charpentier depuis 2007 : reprise de charpente, isolation biosourcée et surélévation bois à Briançon. Bois local, RGE. Demandez un devis.
- **H1 :** Charpentier à **Briançon** et dans le Briançonnais
- **URL canonique :** `https://3bcharpente.fr/charpentier-briancon/`

### Données structurées (JSON-LD)

Notes pour l'intégration :

- Le LocalBusiness reprend le même `@id` que sur l'accueil, avec la zone desservie propre à cette page.
- Le type (`GeneralContractor` ou `RoofingContractor`) doit être le même que sur l'accueil.
- Les horaires (`openingHoursSpecification`) et les coordonnées GPS (`geo`) ne sont ajoutés qu'une fois validés.
- La fiche Google n'est ajoutée à `sameAs` qu'une fois revendiquée.
- Le texte des FAQ doit rester identique à celui de la section 9.

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
        { "@type": "City", "name": "Briançon" },
        { "@type": "City", "name": "Villard-Saint-Pancrace" },
        { "@type": "City", "name": "Puy-Saint-André" },
        { "@type": "City", "name": "Montgenèvre" },
        { "@type": "City", "name": "Cervières" }
      ],
      "sameAs": ["https://www.facebook.com/3bcharpente"]
    },
    {
      "@type": "Service",
      "@id": "https://3bcharpente.fr/charpentier-briancon/#service",
      "name": "Charpentier à Briançon",
      "serviceType": "Charpente, rénovation de toiture, isolation biosourcée, surélévation en ossature bois",
      "url": "https://3bcharpente.fr/charpentier-briancon/",
      "provider": { "@id": "https://3bcharpente.fr/#entreprise" },
      "areaServed": [
        { "@type": "City", "name": "Briançon" },
        { "@type": "City", "name": "Villard-Saint-Pancrace" },
        { "@type": "City", "name": "Puy-Saint-André" },
        { "@type": "City", "name": "Montgenèvre" },
        { "@type": "City", "name": "Cervières" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Intervenez-vous à Briançon et dans les villages autour ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Oui. 3B Charpente est installée à L'Argentière-la-Bessée, un peu plus bas dans la vallée de la Durance. À Briançon, nous avons déjà rénové la toiture d'une copropriété et surélevé une maison en ossature bois. Nous intervenons aussi dans les communes voisines, en vallée de Serre Chevalier et dans le Pays des Écrins, et plus largement dans les Hautes-Alpes, en région PACA et en Rhône-Alpes." }
        },
        {
          "@type": "Question",
          "name": "Pouvez-vous rénover la toiture d'une copropriété à Briançon ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Oui. À Briançon, nous avons repris la charpente, l'isolation et la couverture d'une copropriété : découverture, soufflage de l'isolant, reprise des fermes, recréation d'une dépassée de toiture, puis couverture. Nous remettons un devis détaillé, utile pour présenter les travaux aux copropriétaires, et un calendrier estimatif dès la première rencontre." }
        },
        {
          "@type": "Question",
          "name": "Peut-on surélever une maison en ossature bois à Briançon ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Oui, selon ce que la maison existante peut porter. Nous l'avons fait à Briançon : murs pignons en ossature bois, pannes porteuses de 14 × 30 cm, panneaux trois plis en épicéa et isolation en laine de bois. Le bois est plus léger qu'une maçonnerie, ce qui limite la charge ajoutée. Une surélévation demande une autorisation d'urbanisme : renseignez-vous en mairie avant de lancer le projet." }
        },
        {
          "@type": "Question",
          "name": "Êtes-vous RGE pour isoler une toiture à Briançon ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Oui. 3B Charpente est qualifiée QUALIBAT-RGE pour l'isolation des toitures et des murs par l'extérieur, l'isolation par l'intérieur des murs, rampants et plafonds, les fenêtres de toit et les menuiseries extérieures. Cette qualification ouvre l'accès aux aides publiques à la rénovation énergétique, sous conditions. Nous isolons avec des matériaux biosourcés, comme la ouate de cellulose et la fibre de bois." }
        },
        {
          "@type": "Question",
          "name": "Comment obtenir un devis de charpente à Briançon ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Appelez-nous au 06 34 67 31 49 ou écrivez-nous depuis le formulaire de contact. Nous discutons de vos besoins lors d'une rencontre, puis nous vous proposons un devis détaillé, adapté à votre projet. Le délai des travaux dépend de la complexité et de la taille du chantier : nous vous donnons un calendrier estimatif dès la première rencontre." }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://3bcharpente.fr/" },
        { "@type": "ListItem", "position": 2, "name": "Charpentier à Briançon", "item": "https://3bcharpente.fr/charpentier-briancon/" }
      ]
    }
  ]
}
```

### Texte alternatif des images clés

| Emplacement | Photo (fiche, n° de photo) | Texte alternatif |
|---|---|---|
| Héros | n° 18, photo 7 « Couverture » (ou photo 8 « Paysage briançonnais ») | Couverture refaite sur la toiture d'une copropriété à Briançon (Hautes-Alpes) |
| Carte chantier 1 | n° 18, photo 4 « Reprise des fermes » | Reprise des fermes de la charpente d'une copropriété à Briançon |
| Carte chantier 2 | n° 24, photo 10 « Façade sud finie » | Façade sud de la maison surélevée en ossature bois à Briançon (Hautes-Alpes) |
| Section « Le bâti briançonnais » | n° 18, photo 6 « Recréation d'une dépassée de toiture » | Dépassée de toiture recréée sur une copropriété à Briançon |
| Section « Nos matériaux » | n° 24, photo 7 « Panneaux trois plis épicéa apparents du dessous » | Sous-face apparente des panneaux trois plis en épicéa, surélévation à Briançon |

---

## 3. Sections dans l'ordre

Corps de page (sections 1 à 8, hors FAQ et coordonnées) : 846 mots.

### Section 1 — Héros

- **Rôle :** dire en une ligne qui, quoi, où, et donner les deux actions.
- **Composant de la maquette :** héros (titre deux couleurs, texte avec mots forts en gras, bouton plein vert, bouton contour, deux preuves avec pastille sauge). Photo de chantier réel à droite, à la place du collage de rondins.

*Fil d'Ariane*
> Accueil › Charpentier à Briançon

*Kicker*
> Charpente · Toiture · Isolation · Ossature bois

*H1*
> Charpentier à **Briançon** et dans le Briançonnais

*Texte*
> 3B Charpente reprend, isole et surélève les toitures et les maisons de Briançon avec du **bois des Hautes-Alpes** et des **isolants biosourcés**. Nous sommes installés depuis 2007 à L'Argentière-la-Bessée, un peu plus bas dans la vallée de la Durance.

*Boutons*
> Demander mon devis → `/contact/` (plein)
> Voir nos chantiers à Briançon → `#chantiers` (contour)

*Preuves (pastilles sauge)*
> Depuis 2007
> Entreprise RGE

### Section 2 — En bref

- **Rôle :** la réponse directe que les IA reprennent (40 à 60 mots).
- **Composant :** encadré crème clair, juste sous le héros.

*Kicker*
> En bref

*Texte*
> 3B Charpente est une entreprise de charpente installée à L'Argentière-la-Bessée depuis 2007. À Briançon, nous avons repris la charpente, l'isolation et la couverture d'une copropriété, et surélevé une maison en ossature bois. Nous travaillons le mélèze et le sapin des Hautes-Alpes, des isolants biosourcés et du bois de réemploi. Entreprise qualifiée RGE.

Longueur : 54 mots.

### Section 3 — Nos chantiers à Briançon (ancre `#chantiers`)

- **Rôle :** la preuve locale. C'est ce qui sépare cette page d'une page satellite.
- **Composant :** deux grandes cartes de réalisations (photo, étiquette « 3B Charpente », titre, texte, lien « Voir les travaux → »), côte à côte sur ordinateur, empilées sur mobile.

*Kicker*
> Nos chantiers à Briançon

*H2*
> Deux chantiers **briançonnais**, en photos

*Texte d'introduction*
> Voici deux chantiers que nous avons menés à Briançon. Ils montrent deux façons de travailler sur une maison existante : reprendre sa toiture, ou l'agrandir par le haut.

*Carte 1 — titre*
> Rénovation d'une copropriété à Briançon

*Carte 1 — texte*
> Sur cette copropriété, nous avons repris la charpente, l'isolation et la couverture. Après la découverture, l'isolant a été soufflé. Nous avons repris les fermes, ces assemblages en triangle qui portent le toit, et recréé une dépassée de toiture : le débord qui protège la façade de la pluie et de la neige. Avec en prime, une belle vue sur le paysage briançonnais.

*Carte 1 — lien*
> Voir les travaux → `/realisations/renovation-d-une-copropriete-a-briancon/`

*Carte 2 — titre*
> Surélévation en ossature bois d'une maison à Briançon

*Carte 2 — texte*
> Pour surélever cette maison, nous avons levé des murs pignons en ossature bois, puis des pannes porteuses de 14 × 30 cm, entaillées et décorées. Des panneaux trois plis en épicéa contreventent la toiture et la rendent étanche à l'air ; ils restent apparents à l'intérieur. L'isolant de remplissage est de la laine de bois.

*Carte 2 — lien*
> Voir les travaux → `/realisations/surelevation-en-ossature-bois-d-une-maison-a-briancon/`

*Ligne sous les cartes*
> Dans la vallée voisine, nous avons aussi réhabilité une ancienne forge à La Salle-les-Alpes et rénové un toit en bardeaux de mélèze au Casset. Voir nos chantiers à Serre Chevalier → `/charpentier-serre-chevalier/`

### Section 4 — Le bâti briançonnais

- **Rôle :** montrer qu'on connaît le terrain, sans statistique inventée. Formulations générales et prudentes.
- **Composant :** bloc texte sur deux colonnes, avec la photo de la dépassée recréée (fiche n° 18).

*Kicker*
> Le bâti briançonnais

*H2*
> Des toitures qui **travaillent** toute l'année

*Texte*
> À Briançon, une charpente travaille plus qu'en plaine. Elle porte la neige l'hiver, la couverture passe par le gel et le dégel, et le soleil d'altitude grise les bois exposés. Les débords de toit, que l'on appelle souvent dépassées en montagne, protègent les façades : nous les reprenons ou les recréons quand il le faut, comme sur la copropriété présentée plus haut.
>
> Le bâti est varié : immeubles et copropriétés en ville, maisons anciennes en pierre et en bois, chalets plus récents dans les villages autour. Chaque cas demande sa méthode. Sur une copropriété, on travaille en hauteur et on s'organise avec les copropriétaires. Dans une maison ancienne, on découvre l'état réel des bois une fois la couverture ouverte. Pour une surélévation, on vérifie d'abord ce que les murs existants peuvent porter.
>
> Dans la vieille ville et autour des fortifications de Vauban, inscrites au patrimoine mondial de l'Unesco, les travaux qui changent l'aspect extérieur sont encadrés. Renseignez-vous auprès du service urbanisme de la mairie avant de lancer un projet. Nous en parlons avec vous dès l'étude.

### Section 5 — Nos prestations dans le Briançonnais

- **Rôle :** relier la page secteur aux pages prestation (maillage interne) avec une phrase utile pour chacune.
- **Composant :** cartes de services blanches à coins arrondis, icône dans une pastille sauge ; grille de 3 colonnes sur ordinateur, 1 sur mobile.

*Kicker*
> Ce que nous faisons

*H2*
> Nos **prestations** à Briançon

*Cartes (titre, texte, lien)*
> **Rénovation de charpente et toiture** — Reprise de fermes, recréation de dépassées, lucarnes et combles aménagés. → `/renovation-charpente-combles/`
>
> **Isolation biosourcée** — Ouate de cellulose et fibre de bois, posées par une entreprise qualifiée RGE. → `/isolation-biosourcee/`
>
> **Isolation de toiture par l'extérieur** — Le sarking : l'isolant posé en continu au-dessus des chevrons, sans perdre de place sous le toit. → `/isolation-toiture-sarking/`
>
> **Isolation des murs** — L'ITE, ou isolation thermique par l'extérieur, enveloppe les murs d'un isolant continu. → `/isolation-murs-ite/`
>
> **Extension et surélévation bois** — Gagner de la place par le haut, avec une structure légère en ossature bois. → `/extension-surelevation-bois/`
>
> **Maison ossature bois** — Une maison neuve en bois, isolée avec des matériaux biosourcés. → `/maison-ossature-bois/`
>
> **Charpente traditionnelle** — Des pièces tracées, taillées et assemblées à blanc, puis levées sur place. → `/charpente-bois/`
>
> **Balcons, terrasses et abris** — En mélèze, avec des assemblages traditionnels. → `/balcon-terrasse-abri-bois/`
>
> **Escaliers sur mesure** — Dessinés, tracés, taillés et assemblés dans notre atelier. → `/escalier-bois-sur-mesure/`

### Section 6 — Notre méthode

- **Rôle :** rassurer sur le déroulé, avec les engagements validés (brief §3).
- **Composant :** liste d'étapes numérotées 01 à 05 (reprise des onglets numérotés de la méthode 3B Récup').

*Kicker*
> Notre méthode

*H2*
> De la rencontre au **levage**

*Étapes*
> 01. **Premier contact.** Vous nous appelez au 06 34 67 31 49 ou vous nous écrivez depuis le formulaire.
> 02. **Rencontre.** Nous discutons de vos besoins et de votre maison.
> 03. **Devis.** Nous vous remettons un devis détaillé et un calendrier estimatif.
> 04. **Atelier.** Nous dessinons l'ouvrage, puis nous traçons, taillons et assemblons les pièces dans notre atelier.
> 05. **Chantier.** Nous levons et posons sur place, à Briançon ou dans les villages autour.

### Section 7 — Nos matériaux

- **Rôle :** la différence de 3B : bois local, isolants biosourcés, réemploi.
- **Composant :** section plein cadre « forêt » sombre, titre blanc avec les mots en vert sauge (#A3D2A3).

*Kicker*
> Nos matériaux

*H2*
> Du bois **des Hautes-Alpes**, des isolants **biosourcés**

*Texte*
> Nous utilisons « principalement du mélèze et du sapin provenant des Hautes-Alpes et sciés par notre partenaire local : la Scierie Savoldelli ». Pour isoler, nous posons de la ouate de cellulose et des panneaux de fibre de bois. Avec 3B Récup', nous donnons aussi une seconde vie au bois issu de la déconstruction, en l'intégrant à nos chantiers. Notre qualification RGE ouvre l'accès aux aides publiques à la rénovation énergétique, sous conditions.

*Bouton*
> Découvrir 3B Récup' → `/3b-recup/`

### Section 8 — Communes desservies

- **Rôle :** dire où nous allons, renvoyer vers les deux autres pages secteur.
- **Composant :** bloc texte et liste en pastilles crème.

*Kicker*
> Où nous intervenons

*H2*
> Briançon et les **communes voisines**

*Texte*
> Depuis L'Argentière-la-Bessée, nous intervenons à Briançon et dans les communes autour :

*Liste (pastilles)*
> Briançon · Villard-Saint-Pancrace · Puy-Saint-André · Montgenèvre · Cervières

[À VALIDER AVEC JEAN : liste exacte des communes desservies autour de Briançon. Ajouter, si c'est le cas, Puy-Saint-Pierre, Val-des-Prés, Névache…]

*Texte*
> Nous travaillons aussi dans la vallée de Serre Chevalier (Saint-Chaffrey, La Salle-les-Alpes, Le Monêtier-les-Bains) et dans le Pays des Écrins, autour de Vallouise et de L'Argentière-la-Bessée. Plus largement, « nous intervenons dans les Hautes-Alpes mais aussi en région PACA et Rhône-Alpes ».

*Liens*
> Charpentier à Serre Chevalier → `/charpentier-serre-chevalier/`
> Charpentier en Vallouise et Pays des Écrins → `/charpentier-vallouise-pays-des-ecrins/`

### Section 9 — FAQ

- **Composant :** FAQ en accordéon dans des cartes blanches. Données structurées FAQPage (voir §2).

*Kicker*
> Questions fréquentes

*H2*
> Vos questions sur un chantier à **Briançon**

(Questions et réponses : voir §4 ci-dessous.)

### Section 10 — Appel à l'action et coordonnées

- **Composant :** bandeau vert forêt avec formes organiques vert clair et grille ronde translucide, puis bloc de coordonnées.

*H2*
> Un projet à **Briançon** ?

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

Composant conseillé : une petite carte (Google Maps ou OpenStreetMap) centrée sur le 5 rue Saint-Michel, une fois la fiche Google revendiquée.

---

## 4. FAQ

**Intervenez-vous à Briançon et dans les villages autour ?**
> Oui. 3B Charpente est installée à L'Argentière-la-Bessée, un peu plus bas dans la vallée de la Durance. À Briançon, nous avons déjà rénové la toiture d'une copropriété et surélevé une maison en ossature bois. Nous intervenons aussi dans les communes voisines, en vallée de Serre Chevalier et dans le Pays des Écrins, et plus largement dans les Hautes-Alpes, en région PACA et en Rhône-Alpes.

**Pouvez-vous rénover la toiture d'une copropriété à Briançon ?**
> Oui. À Briançon, nous avons repris la charpente, l'isolation et la couverture d'une copropriété : découverture, soufflage de l'isolant, reprise des fermes, recréation d'une dépassée de toiture, puis couverture. Nous remettons un devis détaillé, utile pour présenter les travaux aux copropriétaires, et un calendrier estimatif dès la première rencontre.

**Peut-on surélever une maison en ossature bois à Briançon ?**
> Oui, selon ce que la maison existante peut porter. Nous l'avons fait à Briançon : murs pignons en ossature bois, pannes porteuses de 14 × 30 cm, panneaux trois plis en épicéa et isolation en laine de bois. Le bois est plus léger qu'une maçonnerie, ce qui limite la charge ajoutée. Une surélévation demande une autorisation d'urbanisme : renseignez-vous en mairie avant de lancer le projet.

**Êtes-vous RGE pour isoler une toiture à Briançon ?**
> Oui. 3B Charpente est qualifiée QUALIBAT-RGE pour l'isolation des toitures et des murs par l'extérieur, l'isolation par l'intérieur des murs, rampants et plafonds, les fenêtres de toit et les menuiseries extérieures. Cette qualification ouvre l'accès aux aides publiques à la rénovation énergétique, sous conditions. Nous isolons avec des matériaux biosourcés, comme la ouate de cellulose et la fibre de bois.

**Comment obtenir un devis de charpente à Briançon ?**
> Appelez-nous au 06 34 67 31 49 ou écrivez-nous depuis le formulaire de contact. Nous discutons de vos besoins lors d'une rencontre, puis nous vous proposons un devis détaillé, adapté à votre projet. Le délai des travaux dépend de la complexité et de la taille du chantier : nous vous donnons un calendrier estimatif dès la première rencontre.

---

## 5. Liens internes

| Texte du lien | Page visée | Emplacement |
|---|---|---|
| Demander mon devis | `/contact/` | héros, section 10 |
| Voir nos chantiers à Briançon | `#chantiers` | héros |
| Voir les travaux (Rénovation d'une copropriété à Briançon) | `/realisations/renovation-d-une-copropriete-a-briancon/` | section 3 |
| Voir les travaux (Surélévation en ossature bois d'une maison à Briançon) | `/realisations/surelevation-en-ossature-bois-d-une-maison-a-briancon/` | section 3 |
| Voir nos chantiers à Serre Chevalier | `/charpentier-serre-chevalier/` | sections 3 et 8 |
| Rénovation de charpente et toiture | `/renovation-charpente-combles/` | section 5 |
| Isolation biosourcée | `/isolation-biosourcee/` | section 5 |
| Isolation de toiture par l'extérieur | `/isolation-toiture-sarking/` | section 5 |
| Isolation des murs | `/isolation-murs-ite/` | section 5 |
| Extension et surélévation bois | `/extension-surelevation-bois/` | section 5 |
| Maison ossature bois | `/maison-ossature-bois/` | section 5 |
| Charpente traditionnelle | `/charpente-bois/` | section 5 |
| Balcons, terrasses et abris | `/balcon-terrasse-abri-bois/` | section 5 |
| Escaliers sur mesure | `/escalier-bois-sur-mesure/` | section 5 |
| Découvrir 3B Récup' | `/3b-recup/` | section 7 |
| Charpentier en Vallouise et Pays des Écrins | `/charpentier-vallouise-pays-des-ecrins/` | section 8 |

**Liens entrants à prévoir :**

- l'accueil (bloc « Où nous intervenons ») ;
- le pied de page (les trois pages secteur, brief §7) ;
- les fiches n° 18 et n° 24 (carte « Pour aller plus loin ») ;
- `/contact/` (zone d'intervention).

---

## 6. Photos à utiliser

- **Fiche n° 18, Rénovation d'une copropriété à Briançon** (`/galeries/renovation-d-une-copropriete-a-briancon`) :
  - photo 7 « Couverture » ou photo 8 « Paysage briançonnais » pour le héros ;
  - photo 4 « Reprise des fermes » pour la carte 1 ;
  - photo 6 « Recréation d'une dépassée de toiture » pour la section 4.
- **Fiche n° 24, Surélévation en ossature bois d'une maison à Briançon** (`/galeries/surelevation-en-ossature-bois-d-une-maison-a-briancon`) :
  - photo 10 « façade sud finie » pour la carte 2 ;
  - photo 7 « panneaux trois plis épicéa apparents du dessous » pour la section 7.
- **Photo d'ambiance, une au maximum :** une forêt de mélèzes en fond de la section 7, en le signalant (brief §4).

**Photos manquantes à demander à Jean :**

- d'autres chantiers à Briançon ou dans les communes voisines (Villard-Saint-Pancrace, Montgenèvre, Puy-Saint-André, Cervières), même anciens ;
- une photo de l'équipe sur un toit briançonnais ;
- les fichiers d'origine en haute définition des fiches n° 18 et 24.

---

## 7. Points à valider avec Jean

1. **Communes desservies :** Briançon, Villard-Saint-Pancrace, Puy-Saint-André, Montgenèvre, Cervières. Jean y va-t-il vraiment ? Faut-il en ajouter (Puy-Saint-Pierre, Val-des-Prés, Névache) ?
2. **Horaires** à afficher (maquette ou PagesJaunes, voir brief §1).
3. **Années** des deux chantiers briançonnais. « En {année}, nous avons… » renforce la preuve.
4. **Secteur protégé :** Jean a-t-il déjà travaillé dans la vieille ville ou en périmètre protégé ? Si oui, on peut l'écrire ; sinon, la phrase reste un conseil général.
5. **Copropriété :** accord du syndic pour citer le chantier ; isolant soufflé et épaisseur ; matériau de couverture.
6. **Atelier :** est-il au 5 rue Saint-Michel ? La page écrit « notre atelier » (méthode validée du texte de l'escalier).
7. **Badge « Entreprise RGE » :**
   - la qualification est au nom de « TARDY JEAN-MICHEL », avec le SIRET 494 482 714 00024 ;
   - les mentions légales donnent 494 482 714 00016 ;
   - vérifier quel établissement est actif à l'adresse affichée.
8. **Fiche Google** à revendiquer, puis à ajouter dans `sameAs` et sur la carte.
9. **Coordonnées GPS** de l'adresse pour `geo`.
10. **Avis clients :** aucun à afficher pour l'instant (1 avis Google). Ne pas reprendre les faux témoignages de la maquette.
