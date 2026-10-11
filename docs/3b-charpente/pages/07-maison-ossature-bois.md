# Fiche 07 : Maison ossature bois

`/maison-ossature-bois/` · Phase 1 · Statut : rédigée, à relire et valider par Jean

**Conventions.** Le texte à coller sur le site est en citation (lignes qui commencent par `>`). Dans les titres (H1, H2), les mots entre `**` passent en vert (#336233 sur fond clair, sauge #A3D2A3 sur fond sombre) ; dans les paragraphes, `**` veut simplement dire gras. Les espaces insécables sont déjà en place. Tout ce qui est entre `[À VALIDER AVEC JEAN : …]` est à confirmer ou à supprimer avant publication. Sources : `../00-brief.md` et `../realisations-source.md`.

---

## 1. Carte d'identité

- **Adresse :** `/maison-ossature-bois/` (canonique : `https://3bcharpente.fr/maison-ossature-bois/`).
- **Objectif de la page :**
  - porter le service validé « Construction neuve et maison ossature bois » ;
  - se positionner sur « maison ossature bois » et « construction bois » avec l'angle qui distingue 3B des constructeurs relevés sur Google (Booa, Alp'Ecrins Construction, Natilia, CGA, Mary Marc et Fils) : bois des Hautes-Alpes, isolants biosourcés, sarking, savoir-faire de charpentier, réemploi ;
  - raconter un chantier complet (monts du Lyonnais) pour prouver la méthode ;
  - faire prendre contact en amont du projet.
- **Visiteurs visés :**
  - particuliers qui ont un terrain dans les Hautes-Alpes (ou en PACA, Rhône-Alpes) et hésitent entre maçonnerie, chalet et ossature bois ;
  - architectes et maîtres d'œuvre qui cherchent un charpentier pour réaliser la structure bois et l'enveloppe d'un projet.
- **Mots-clés :**
  - principal : maison ossature bois (8 000/mois) ;
  - secondaire : construction bois (3 600/mois) ;
  - associés (volumes non relevés) : maison ossature bois Hautes-Alpes, maison bois Briançon, constructeur maison bois 05, maison bois écologique, sarking.
- **Intention de recherche :** informative puis commerciale (comprendre la technique, comparer, estimer, trouver un professionnel local). La page définit, compare, montre les étapes réelles, puis convertit.
- **Pages liées :**
  - prestations proches : `/isolation-toiture-sarking/`, `/extension-surelevation-bois/`, `/charpente-bois/`, `/isolation-biosourcee/` ;
  - filière : `/3b-recup/` ;
  - preuves : 3 fiches réalisations (section 3.9) ;
  - confiance : `/a-propos/` ;
  - conversion : `/contact/`.

---

## 2. SEO

- **Balise title :** `Maison ossature bois dans les Hautes-Alpes | 3B Charpente`
- **Meta description :** `Maison ossature bois dans les Hautes-Alpes : bois local, isolants biosourcés, toiture en sarking. Charpentiers depuis 2007. Demandez votre devis.`
- **Contrôles (mesurés) :** title 57 caractères · meta 145 caractères · corps de page 1151 mots (section 3, hors FAQ) · En bref 53 mots · FAQ 6 questions, 49 à 58 mots par réponse.
- **H1 (unique) :** Maison **ossature bois** dans les **Hautes-Alpes**
- **Fil d'Ariane :** Accueil › Maison ossature bois
- **Données structurées :** Service, FAQPage et BreadcrumbList, en JSON-LD. Le LocalBusiness est déclaré une seule fois pour tout le site ; ici, on y renvoie par son `@id`.

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://3bcharpente.fr/maison-ossature-bois/#service",
  "name": "Construction de maison à ossature bois",
  "serviceType": "Construction bois",
  "description": "Construction neuve en ossature bois dans les Hautes-Alpes : murs à ossature, solivage, charpente, isolation biosourcée en ouate de cellulose et fibre de bois, isolation de toiture par l'extérieur de type sarking, couverture et bardage, avec du mélèze et du sapin des Hautes-Alpes.",
  "url": "https://3bcharpente.fr/maison-ossature-bois/",
  "image": "https://3bcharpente.fr/images/maison-ossature-bois-levage-murs-charpente-monts-du-lyonnais.webp",
  "provider": {
    "@type": "LocalBusiness",
    "@id": "https://3bcharpente.fr/#entreprise",
    "name": "3B Charpente",
    "telephone": "+33634673149",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "5 rue Saint-Michel",
      "postalCode": "05120",
      "addressLocality": "L'Argentière-la-Bessée",
      "addressRegion": "Hautes-Alpes",
      "addressCountry": "FR"
    }
  },
  "areaServed": [
    { "@type": "AdministrativeArea", "name": "Hautes-Alpes" },
    { "@type": "City", "name": "Briançon" },
    { "@type": "AdministrativeArea", "name": "Provence-Alpes-Côte d'Azur" },
    { "@type": "AdministrativeArea", "name": "Auvergne-Rhône-Alpes" }
  ]
}
```

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://3bcharpente.fr/maison-ossature-bois/#faq",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Quel est le prix d'une maison ossature bois dans les Hautes-Alpes ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Il dépend de la surface, de la forme de la maison, de l'altitude et de l'accès au terrain, des isolants, des finitions, et de ce que vous nous confiez : structure seule ou enveloppe complète. Un prix au mètre carré donné sans projet serait trompeur. Nous vous proposons un devis détaillé après une rencontre et l'étude de vos plans."
      }
    },
    {
      "@type": "Question",
      "name": "Une maison ossature bois résiste-t-elle à la neige et au froid de montagne ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oui, si elle est bien conçue. Comme toute construction, sa structure est dimensionnée pour la charge de neige du lieu, fixée par les règles de construction selon l'altitude et la région. Côté froid, l'ossature accueille une forte épaisseur d'isolant, complétée par des panneaux de fibre de bois à l'extérieur et une étanchéité à l'air soignée."
      }
    },
    {
      "@type": "Question",
      "name": "Quelle différence entre une maison ossature bois et un chalet en madriers ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Dans un chalet en madriers, ce sont les pièces de bois massif empilées qui forment le mur. Dans une maison à ossature bois, une trame de montants porte la maison et l'isolant remplit son épaisseur. L'ossature permet d'isoler plus épais dans le mur et laisse une grande liberté de façade : bardage bois, enduit, grandes ouvertures."
      }
    },
    {
      "@type": "Question",
      "name": "Combien de temps dure la construction d'une maison ossature bois ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Le délai peut varier selon la complexité et la taille du projet. Nous vous fournirons un calendrier estimatif lors de notre première rencontre. Une partie du travail se fait à l'atelier, à l'abri, ce qui réduit le temps passé sur le terrain. Viennent ensuite le levage, l'isolation, la couverture, le bardage et les finitions."
      }
    },
    {
      "@type": "Question",
      "name": "Quels isolants utilisez-vous pour une maison ossature bois ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Des isolants biosourcés. Notre système constructif inclut l'isolation en ouate de cellulose et les panneaux de fibre de bois. Nous utilisons aussi la laine de chanvre, lin et coton, comme sur le chalet rénové à Vallouise. La toiture est isolée par l'extérieur, de type sarking, ce qui garde la charpente apparente à l'intérieur."
      }
    },
    {
      "@type": "Question",
      "name": "Construisez-vous des maisons bois en dehors des Hautes-Alpes ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oui. Basés à L'Argentière-la-Bessée, dans le nord des Hautes-Alpes, nous intervenons dans tout le département, mais aussi en région PACA et Rhône-Alpes. Nous avons par exemple construit une maison à ossature bois dans les monts du Lyonnais : les éléments ont été chargés, transportés par camion, puis levés sur place."
      }
    }
  ]
}
```

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://3bcharpente.fr/" },
    { "@type": "ListItem", "position": 2, "name": "Maison ossature bois", "item": "https://3bcharpente.fr/maison-ossature-bois/" }
  ]
}
```

- **Textes alternatifs des images clés :**

| Fichier | Texte alternatif | Photo source |
|---|---|---|
| `maison-ossature-bois-levage-murs-charpente-monts-du-lyonnais.webp` | Levage des murs à ossature bois et de la charpente apparente d'une maison construite par 3B Charpente dans les monts du Lyonnais | `/galeries/maison-a-ossature-bois-dans-les-monts-du-lyonnais`, « Levage des murs à ossature bois et de la charpente apparente » |
| `maison-ossature-bois-solivage-sur-poteaux.webp` | Levage du solivage sur poteaux d'une maison à ossature bois, monts du Lyonnais | même dossier, « Levage du solivage sur poteaux » |
| `maison-ossature-bois-fibre-de-bois-monts-du-lyonnais.webp` | Panneaux de fibre de bois posés sur l'ossature d'une maison neuve, monts du Lyonnais | même dossier, « Fibre de bois sur l'ossature bois » |
| `maison-ossature-bois-chargement-camion.webp` | Éléments d'une maison à ossature bois chargés sur le camion avant le départ vers le chantier | même dossier, « chargement » ou « départ imminent! » |
| `maison-ossature-bois-bardage-douglas.webp` | Maison à ossature bois terminée, bardage en douglas, monts du Lyonnais | même dossier, « Bardage en douglas » ou « chantier terminé! » |
| `charpente-solivage-apparents-maison-ossature-bois.webp` | Charpente et solivage apparents à l'intérieur d'une maison à ossature bois | même dossier, « charpente et solivage apparents » |
| `support-maconne-pierres-recuperees.webp` | Support maçonné en pierres récupérées sous une maison à ossature bois | même dossier, « support maçonné en pierre récupérées » |

---

## 3. Sections, dans l'ordre

### 3.1 Fil d'Ariane

- **Rôle :** situer la page, alimenter le BreadcrumbList.
- **Composant :** ligne de texte discrète au-dessus du héros (à ajouter à la maquette).

> Accueil › Maison ossature bois

### 3.2 Héros

- **Rôle :** sujet + lieu, promesse du service validé, deux preuves.
- **Composant Framer :** héros (titre en deux couleurs, texte avec mots forts en gras, bouton plein + bouton contour, deux preuves à pastille sauge).
- **Photo :** « Levage des murs à ossature bois et de la charpente apparente » (monts du Lyonnais).
- **Texte validé :** « … un habitat personnalisé, écologiquement performant avec un système constructif ossature bois et par isolation par l'extérieur pour la toiture (type Sarking) ». Repris presque mot pour mot, avec l'ajout du bois local, de l'atelier et de la définition du sarking (plus bas).

> _Kicker :_ Construction neuve et maison ossature bois
>
> _H1 :_ Maison **ossature bois** dans les **Hautes-Alpes**
>
> _Texte :_ Un habitat **personnalisé** et **écologiquement performant** : murs en ossature bois, isolants biosourcés et toiture isolée par l'extérieur, de type sarking. Nous dessinons votre maison avec vous, la préparons **dans notre atelier** et la levons sur votre terrain, avec du **bois des Hautes-Alpes**.
>
> _Bouton plein :_ Parler de mon projet → `/contact/`
>
> _Bouton contour :_ Voir un chantier complet → `#etapes`
>
> _Preuve 1 :_ Depuis 2007
>
> _Preuve 2 :_ Isolants biosourcés
>
> _Légende photo :_ Levage des murs à ossature bois et de la charpente apparente, monts du Lyonnais.

### 3.3 En bref

- **Rôle :** réponse directe, citable.
- **Composant :** carte blanche à coins arrondis avec une pastille sauge, sous le héros.

> _Titre de la carte :_ En bref
>
> _Texte :_ 3B Charpente construit des maisons à ossature bois dans les Hautes-Alpes et au-delà : murs à ossature, solivage, charpente, isolation biosourcée, couverture et bardage. Nous privilégions le mélèze et le sapin des Hautes-Alpes, la ouate de cellulose et la fibre de bois, et isolons la toiture par l'extérieur (sarking). Charpentier à L'Argentière-la-Bessée depuis 2007.

### 3.4 Qu'est-ce qu'une maison à ossature bois ?

- **Rôle :** capter l'intention informative avec une définition courte et un mini-glossaire citable.
- **Composant Framer :** section fond clair, texte à gauche, définitions en cartes blanches à droite.

> _Kicker :_ Le principe
>
> _H2 :_ Qu'est-ce qu'une **maison à ossature bois** ?
>
> _Texte :_ Dans une maison à ossature bois, les murs sont faits d'une trame de montants et de traverses en bois, rigidifiée par des panneaux. L'isolant se loge dans l'épaisseur de cette trame. Le mur est ensuite fermé côté intérieur et habillé côté extérieur d'un bardage ou d'un enduit.
>
> _Texte :_ C'est différent d'un chalet en madriers ou en rondins, où ce sont les pièces de bois empilées qui forment le mur. L'ossature laisse la place à une forte épaisseur d'isolant dans le mur lui-même.
>
> _Définition :_ **Contreventement :** les panneaux qui rigidifient la structure et l'empêchent de se déformer sous le vent.
>
> _Définition :_ **Pare-pluie :** l'écran qui protège l'isolant de l'eau tout en laissant sortir la vapeur.
>
> _Définition :_ **Bardage :** le parement extérieur en planches de bois, posé sur une lame d'air ventilée.
>
> _Définition :_ **ITE :** l'isolation thermique par l'extérieur, un isolant continu posé sur la face extérieure de la structure, qui coupe les ponts thermiques, ces points faibles où la chaleur s'échappe.

### 3.5 Pourquoi le bois en montagne

- **Rôle :** arguments de choix, formulés de façon générale (pas de chiffres ni de promesse de délai).
- **Composant Framer :** quatre cartes de services blanches, icône dans une pastille sauge.

> _Kicker :_ Pourquoi le bois
>
> _H2 :_ Construire **en bois en montagne**
>
> _Carte 1, titre :_ Léger
>
> _Carte 1, texte :_ Une structure bois pèse bien moins qu'une maçonnerie : moins de charge sur les fondations, et une solution toute trouvée pour surélever une maison existante.
>
> _Carte 2, titre :_ Préparé à l'abri
>
> _Carte 2, texte :_ Une grande partie du travail se fait à l'atelier. Le temps passé sur le terrain, exposé à la météo de montagne, s'en trouve réduit.
>
> _Carte 3, titre :_ Bien isolé
>
> _Carte 3, texte :_ L'isolant occupe l'épaisseur des murs et peut être doublé à l'extérieur par des panneaux de fibre de bois, pour un confort d'hiver et d'été.
>
> _Carte 4, titre :_ Bas carbone
>
> _Carte 4, texte :_ Le bois stocke du carbone et, quand il vient des forêts du département, voyage peu. La réglementation environnementale RE2020 pousse la construction à réduire son impact carbone sur tout le cycle de vie du bâtiment.

### 3.6 Notre système constructif

- **Rôle :** dire concrètement comment 3B construit (validé : ouate de cellulose, fibre de bois, sarking) ; définir le sarking et l'étanchéité à l'air.
- **Composant Framer :** bloc deux colonnes ; à droite, emplacement pour un schéma en coupe d'un mur et d'une toiture (à dessiner quand la composition sera validée).
- **Texte validé :** FAQ « Durabilité » : « Notre système constructif inclut l'isolation en ouate de cellulose et les panneaux de fibre de bois… », repris tel quel en tête de section.

> _Kicker :_ Notre système constructif
>
> _H2 :_ Une enveloppe **biosourcée**, des murs au toit
>
> _Texte :_ Notre système constructif inclut l'isolation en ouate de cellulose et les panneaux de fibre de bois. Dans les murs, l'isolant remplit l'ossature ; à l'extérieur, des panneaux de fibre de bois la recouvrent, comme sur la maison des monts du Lyonnais. La façade reçoit ensuite un bardage, en mélèze ou en douglas, ou un enduit appliqué sur la fibre de bois.
>
> _Texte :_ La toiture est isolée par l'extérieur, de type sarking : les panneaux isolants sont posés en continu sur la charpente, sous la couverture. La charpente reste apparente dans la maison, et l'isolant n'est pas interrompu par les chevrons.
>
> _Texte :_ Côté intérieur, une membrane ou des panneaux assurent l'étanchéité à l'air : ils empêchent l'air chaud et humide de passer dans les parois. À Briançon, des panneaux trois plis en épicéa jouent ce rôle sous la toiture, tout en restant apparents.
>
> _Encadré :_ [À VALIDER AVEC JEAN : composition type d'un mur et d'une toiture neufs (ordre des couches, épaisseurs d'isolant), pour l'afficher en schéma.]
>
> _Lien 1 :_ Le sarking expliqué → `/isolation-toiture-sarking/`
>
> _Lien 2 :_ Nos isolants biosourcés → `/isolation-biosourcee/`

### 3.7 Les étapes, sur un chantier réel

- **Rôle :** liste d'étapes (format citable) prouvée par les photos d'un vrai chantier. Ancre `#etapes`.
- **Composant Framer :** onglets numérotés de 01 à 06 (composant de la méthode 3B Récup'), une photo par onglet.
- **Photos :** voir les légendes, toutes dans `/galeries/maison-a-ossature-bois-dans-les-monts-du-lyonnais`.

> _Kicker :_ Les étapes
>
> _H2 :_ Une maison ossature bois, **de l'étude au chantier terminé**
>
> _Texte :_ Exemple réel : une maison à ossature bois que nous avons construite dans les monts du Lyonnais, loin de notre base de L'Argentière-la-Bessée.
>
> _01, titre :_ Étude sur mesure
>
> _01, texte :_ Chaque projet chez 3B Charpente débute par une étude sur mesure. Nous vous fournirons un calendrier estimatif lors de notre première rencontre. [À VALIDER AVEC JEAN : qui fait les plans et le permis de construire : 3B, un architecte, un maître d'œuvre ?]
>
> _02, titre :_ Préparation à l'atelier
>
> _02, texte :_ La charpente et les pièces de structure sont tracées et taillées dans notre atelier. [À VALIDER AVEC JEAN : les murs sont-ils assemblés en panneaux à l'atelier ?]
>
> _03, titre :_ Chargement et transport
>
> _03, texte :_ Les éléments sont chargés sur le camion, direction le terrain.
>
> _03, légende :_ Départ imminent pour les monts du Lyonnais.
>
> _04, titre :_ Levage
>
> _04, texte :_ Le solivage est levé sur poteaux, puis les murs à ossature bois et la charpente apparente.
>
> _04, légende :_ Levage du solivage sur poteaux.
>
> _05, titre :_ Enveloppe
>
> _05, texte :_ Les panneaux de fibre de bois recouvrent l'ossature, la couverture est posée, puis le bardage en douglas.
>
> _05, légende :_ Fibre de bois sur l'ossature bois.
>
> _06, titre :_ Chantier terminé
>
> _06, texte :_ À l'intérieur, la charpente et le solivage restent apparents. La maison repose sur un support maçonné en pierres récupérées.
>
> _06, légende :_ Charpente apparente au soleil couchant.
>
> _Lien :_ Voir toutes les photos du chantier → `/realisations/maison-a-ossature-bois-dans-les-monts-du-lyonnais/`

### 3.8 Bois local et savoir-faire

- **Rôle :** identité (bois local, Compagnons, histoire de l'entreprise).
- **Composant Framer :** section plein cadre « forêt » sombre, titre blanc et mots en sauge.
- **Textes validés :** À propos, « Fondée en 2007 par Jean Michel Tardy, 3B Charpente a une mission claire : utiliser le bois local pour construire des maisons saines et durables » et « Nous avons commencé avec des projets de charpente et avons progressivement étendu nos services… à la construction neuve en ossature bois », fusionnés.

> _Kicker :_ Notre façon de construire
>
> _H2 :_ Du **bois d'ici**, un savoir-faire de charpentier
>
> _Texte :_ Nous travaillons principalement du mélèze et du sapin provenant des Hautes-Alpes, sciés par notre partenaire local, la Scierie Savoldelli. Selon le projet, d'autres essences complètent : le bardage de la maison des monts du Lyonnais est en douglas.
>
> _Texte :_ Fondée en 2007 par Jean-Michel Tardy, formé chez les Compagnons du Devoir, 3B Charpente a commencé par la charpente, puis a étendu son métier à la rénovation de chalets et de maisons de pays, et à la construction neuve en ossature bois. La mission n'a pas changé : utiliser le bois local pour construire des maisons saines et durables.
>
> _Bouton contour (clair) :_ Notre histoire → `/a-propos/`

### 3.9 Réalisations

- **Rôle :** trois preuves, dont une hors département.
- **Composant Framer :** cartes de réalisations (étiquette « 3B Charpente », lien « Voir les travaux → »).

> _Kicker :_ Nos chantiers
>
> _H2 :_ Nos constructions **en ossature bois**
>
> _Carte 1, titre :_ Maison à ossature bois dans les monts du Lyonnais
>
> _Carte 1, texte :_ Solivage sur poteaux, murs à ossature, charpente apparente, fibre de bois et bardage en douglas.
>
> _Carte 1, lien :_ Voir les travaux → `/realisations/maison-a-ossature-bois-dans-les-monts-du-lyonnais/`
>
> _Carte 2, titre :_ Surélévation en ossature bois à Briançon
>
> _Carte 2, texte :_ Murs pignons levés, pannes porteuses entaillées, panneaux trois plis en épicéa et isolation en laine de bois.
>
> _Carte 2, lien :_ Voir les travaux → `/realisations/surelevation-en-ossature-bois-d-une-maison-a-briancon/`
>
> _Carte 3, titre :_ Chalet rénové et isolé à Vallouise
>
> _Carte 3, texte :_ 28 cm de laine de chanvre, lin et coton et de fibre de bois dans les murs, 32 cm en toiture, enduit sur fibre de bois et bardage en mélèze.
>
> _Carte 3, lien :_ Voir les travaux → `/realisations/renovation-et-isolation-d-un-chalet-a-vallouise/`

### 3.10 3B Récup'

- **Rôle :** relier la construction neuve au réemploi.
- **Composant Framer :** bandeau vert forêt, formes organiques, mots en sauge.

> _Kicker :_ 3B Récup'
>
> _H2 :_ Construire neuf **avec du réemploi**
>
> _Texte :_ Une maison neuve peut accueillir des matériaux de seconde vie : dans les monts du Lyonnais, la maison repose sur un support maçonné en pierres récupérées. Avec 3B Récup', nous déposons des charpentes et des murs à ossature bois sur d'autres chantiers, puis trions, nettoyons et usinons ce bois dans notre atelier pour le réemployer.
>
> _Bouton plein (sauge) :_ Découvrir 3B Récup' → `/3b-recup/`

### 3.11 Prestations liées

- **Rôle :** maillage vers trois prestations proches.
- **Composant Framer :** trois petites cartes de services.

> _H2 :_ Pour **compléter** votre projet
>
> _Carte 1 :_ Isolation de toiture par l'extérieur (sarking) → `/isolation-toiture-sarking/`
>
> _Carte 2 :_ Extension et surélévation bois → `/extension-surelevation-bois/`
>
> _Carte 3 :_ Charpente bois traditionnelle → `/charpente-bois/`

### 3.12 FAQ

- **Rôle :** questions telles qu'on les tape ; FAQPage.
- **Composant Framer :** accordéon dans des cartes blanches. Texte complet en section 4.

> _Kicker :_ Questions fréquentes
>
> _H2 :_ Vos questions sur **la maison ossature bois**

### 3.13 Appel à l'action final

- **Rôle :** conversion.
- **Composant Framer :** bandeau vert forêt d'appel à l'action.
- **Texte validé :** « … chaque projet chez 3B Charpente débute par une étude sur mesure » et FAQ « Devis ».

> _H2 :_ Un projet de **maison bois** ?
>
> _Texte :_ Chaque projet chez 3B Charpente débute par une étude sur mesure. Parlez-nous de votre terrain et de vos envies : nous discuterons de vos besoins lors d'une rencontre et vous proposerons un devis détaillé.
>
> _Bouton plein :_ Demander mon devis → `/contact/`
>
> _Bouton contour :_ Appeler le 06 34 67 31 49 → `tel:+33634673149`
>
> _Ligne d'adresse :_ 3B Charpente, 5 rue Saint-Michel, 05120 L'Argentière-la-Bessée.

---

## 4. FAQ

### Q1. Quel est le prix d'une maison ossature bois dans les Hautes-Alpes ?

> Il dépend de la surface, de la forme de la maison, de l'altitude et de l'accès au terrain, des isolants, des finitions, et de ce que vous nous confiez : structure seule ou enveloppe complète. Un prix au mètre carré donné sans projet serait trompeur. Nous vous proposons un devis détaillé après une rencontre et l'étude de vos plans.

### Q2. Une maison ossature bois résiste-t-elle à la neige et au froid de montagne ?

> Oui, si elle est bien conçue. Comme toute construction, sa structure est dimensionnée pour la charge de neige du lieu, fixée par les règles de construction selon l'altitude et la région. Côté froid, l'ossature accueille une forte épaisseur d'isolant, complétée par des panneaux de fibre de bois à l'extérieur et une étanchéité à l'air soignée.

### Q3. Quelle différence entre une maison ossature bois et un chalet en madriers ?

> Dans un chalet en madriers, ce sont les pièces de bois massif empilées qui forment le mur. Dans une maison à ossature bois, une trame de montants porte la maison et l'isolant remplit son épaisseur. L'ossature permet d'isoler plus épais dans le mur et laisse une grande liberté de façade : bardage bois, enduit, grandes ouvertures.

### Q4. Combien de temps dure la construction d'une maison ossature bois ?

> Le délai peut varier selon la complexité et la taille du projet. Nous vous fournirons un calendrier estimatif lors de notre première rencontre. Une partie du travail se fait à l'atelier, à l'abri, ce qui réduit le temps passé sur le terrain. Viennent ensuite le levage, l'isolation, la couverture, le bardage et les finitions.

### Q5. Quels isolants utilisez-vous pour une maison ossature bois ?

> Des isolants biosourcés. Notre système constructif inclut l'isolation en ouate de cellulose et les panneaux de fibre de bois. Nous utilisons aussi la laine de chanvre, lin et coton, comme sur le chalet rénové à Vallouise. La toiture est isolée par l'extérieur, de type sarking, ce qui garde la charpente apparente à l'intérieur.

### Q6. Construisez-vous des maisons bois en dehors des Hautes-Alpes ?

> Oui. Basés à L'Argentière-la-Bessée, dans le nord des Hautes-Alpes, nous intervenons dans tout le département, mais aussi en région PACA et Rhône-Alpes. Nous avons par exemple construit une maison à ossature bois dans les monts du Lyonnais : les éléments ont été chargés, transportés par camion, puis levés sur place.

---

## 5. Liens internes

| Texte du lien | Page visée | Emplacement |
|---|---|---|
| Parler de mon projet / Demander mon devis | `/contact/` | héros, appel à l'action final |
| Le sarking expliqué | `/isolation-toiture-sarking/` | section 3.6, prestations liées |
| Nos isolants biosourcés | `/isolation-biosourcee/` | section 3.6 |
| Voir toutes les photos du chantier | `/realisations/maison-a-ossature-bois-dans-les-monts-du-lyonnais/` | section 3.7 |
| Notre histoire | `/a-propos/` | section 3.8 |
| Voir les travaux (×3) | 3 fiches `/realisations/…/` | section 3.9 |
| Découvrir 3B Récup' | `/3b-recup/` | bandeau 3.10 |
| Extension et surélévation bois | `/extension-surelevation-bois/` | prestations liées ; aussi sur « surélever une maison existante » (carte 1, section 3.5) |
| Charpente bois traditionnelle | `/charpente-bois/` | prestations liées |
| Briançon (carte 2, à lier) | `/charpentier-briancon/` | section 3.9 |
| Vallouise (carte 3, à lier) | `/charpentier-vallouise-pays-des-ecrins/` | section 3.9 |

**Liens entrants à prévoir :** depuis l'accueil, depuis `/charpente-bois/` (carte « Charpente neuve »), depuis `/extension-surelevation-bois/`, et depuis les fiches réalisations 13 et 24.

---

## 6. Photos

**À utiliser (préfixe `https://3bcharpente.fr`) :**

- `/galeries/maison-a-ossature-bois-dans-les-monts-du-lyonnais` (13 photos, toute la séquence) : « Levage des murs à ossature bois et de la charpente apparente » (héros), « chargement », « départ imminent! », « déchargement du camion », « Levage du solivage sur poteaux », « solivage terminé », « Fibre de bois sur l'ossature bois », « couverture terminée », « Bardage en douglas », « charpente et solivage apparents », « charpente apparent et soleil couchant.. », « support maçonné en pierre récupérées », « chantier terminé! ».
- `/galeries/surelevation-en-ossature-bois-d-une-maison-a-briancon` : « 1panneau trois plis épicéa pour le contreventement et l'étanchéité à l'air de la toiture », « 1 remplissage en laine de bois ».
- `/galeries/renovation-et-isolation-d-un-chalet-a-vallouise` : « Façade Nord et Ouest » (enduit et bardage).

**À demander à Jean :**

- une maison ossature bois neuve **dans les Hautes-Alpes** (la seule construction neuve publiée est dans le Rhône) : extérieur fini et intérieur ;
- la préparation à l'atelier : murs ou pièces de structure en cours d'assemblage ;
- une coupe ou un échantillon de mur (ossature, ouate de cellulose, fibre de bois, pare-pluie, bardage) pour le schéma de la section 3.6 ;
- la pose de panneaux de sarking sur une charpente apparente.

---

## 7. Points à valider avec Jean

1. **Périmètre :** 3B livre-t-il la maison hors d'eau et hors d'air, ou fait-il aussi les fondations, les menuiseries, les finitions intérieures ? Travaille-t-il en direct avec le client, en sous-traitance d'un constructeur, ou avec un architecte ? (placeholder étape 01).
2. **Préfabrication :** les murs sont-ils assemblés en panneaux à l'atelier avant transport (les photos « chargement », « départ imminent! », « déchargement du camion » le laissent penser) ? Si oui, on peut l'affirmer dans le héros et l'étape 02.
3. **Composition type** d'un mur et d'une toiture neufs (couches, épaisseurs, performance visée) pour le schéma (placeholder section 3.6).
4. **Calcul de structure et charge de neige :** fait en interne ou par un bureau d'études ? La FAQ Q2 reste générale.
5. **Monts du Lyonnais :** commune exacte et année, pour enrichir la fiche réalisation ; qui a réalisé le support maçonné en pierres récupérées ?
6. **Autres constructions neuves** non publiées dans la galerie (surtout dans les Hautes-Alpes) : photos à récupérer.
7. **Assurance décennale :** obligatoire pour la construction ; nom de l'assureur à indiquer sur les devis et, si Jean le souhaite, sur le site.
8. **« +100 projets » :** chiffre de la maquette non vérifié, volontairement absent de la page.
