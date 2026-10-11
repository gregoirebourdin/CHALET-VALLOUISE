# Fiche 03 : Rénovation de charpente et combles

`/renovation-charpente-combles/` · Phase 1 · Statut : rédigée, à relire et valider par Jean

**Conventions.** Le texte à coller sur le site est en citation (lignes qui commencent par `>`). Dans les titres (H1, H2), les mots entre `**` passent en vert (#336233 sur fond clair, sauge #A3D2A3 sur fond sombre) ; dans les paragraphes, `**` veut simplement dire gras. Les espaces insécables sont déjà en place. Tout ce qui est entre `[À VALIDER AVEC JEAN : …]` est à confirmer ou à supprimer avant publication. Sources : `../00-brief.md` et `../realisations-source.md`.

---

## 1. Carte d'identité

- **Adresse :** `/renovation-charpente-combles/` (canonique : `https://3bcharpente.fr/renovation-charpente-combles/`).
- **Objectif de la page :**
  - porter le service validé « Rénovations de charpente et toiture » ;
  - se positionner sur l'aménagement des combles, la rénovation et le renforcement de charpente, et la création de lucarnes ;
  - mettre en avant la qualification RGE (fenêtres de toit, isolation des toitures) ;
  - faire demander une visite ou un devis.
- **Visiteurs visés :**
  - propriétaires d'une maison ancienne, d'un chalet ou d'une maison de pays qui veulent habiter le grenier ;
  - copropriétés et syndics dont la toiture est à reprendre (cas de Briançon) ;
  - architectes qui cherchent un charpentier pour une lucarne ou un renfort.
- **Mots-clés :**
  - principal : aménagement des combles (480/mois) ;
  - secondaires : rénovation charpente (170), renforcement charpente (110), lucarne (8 000) ;
  - associés (volumes non relevés) : création lucarne, fenêtre de toit, combles aménageables, isolation des rampants, rénovation charpente Briançon, charpentier RGE (40).
- **Intention de recherche :**
  - « aménagement des combles », « rénovation charpente », « renforcement charpente » : projet en cours de réflexion, besoin d'un professionnel ;
  - « lucarne » : surtout informative (définition, formes, autorisation). La page y répond par une section dédiée, ancrée `#lucarnes`, pour capter une partie de ce volume.
- **Pages liées :**
  - prestations proches : `/charpente-bois/`, `/isolation-toiture-sarking/`, `/isolation-biosourcee/`, `/escalier-bois-sur-mesure/` ;
  - filière : `/3b-recup/` ;
  - preuves : 4 fiches réalisations (section 3.10) ;
  - guides (phase 2) : `/conseils/renover-chalet-maison-ancienne/`, `/conseils/aides-renovation-artisan-rge/` ;
  - conversion : `/contact/`.

---

## 2. SEO

- **Balise title :** `Rénovation charpente et combles, Hautes-Alpes | 3B Charpente`
- **Meta description :** `Rénovation de charpente, aménagement des combles, lucarnes et fenêtres de toit dans les Hautes-Alpes. Artisan RGE, isolants biosourcés. Demandez un devis.`
- **Contrôles (mesurés) :** title 60 caractères · meta 154 caractères · corps de page 1154 mots (section 3, hors FAQ) · En bref 57 mots · FAQ 6 questions, 56 à 64 mots par réponse.
- **H1 (unique) :** Rénovation de **charpente** et aménagement des **combles** dans les Hautes-Alpes
- **Fil d'Ariane :** Accueil › Rénovation de charpente et combles
- **Données structurées :** Service, FAQPage et BreadcrumbList, en JSON-LD. Le LocalBusiness est déclaré une seule fois pour tout le site ; ici, on y renvoie par son `@id`.

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://3bcharpente.fr/renovation-charpente-combles/#service",
  "name": "Rénovation de charpente et aménagement des combles",
  "serviceType": "Rénovation de charpente",
  "description": "Réparation et renforcement de charpentes anciennes, aménagement des combles, création de lucarnes et pose de fenêtres de toit, isolation biosourcée des rampants et des toitures dans les Hautes-Alpes.",
  "url": "https://3bcharpente.fr/renovation-charpente-combles/",
  "image": "https://3bcharpente.fr/images/renovation-charpente-levage-jouees-lucarne-argentiere-la-bessee.webp",
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
    { "@type": "City", "name": "L'Argentière-la-Bessée" },
    { "@type": "City", "name": "Saint-Martin-de-Queyrières" },
    { "@type": "City", "name": "Vallouise-Pelvoux" }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Rénovation de charpente et combles",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Renforcement de charpente" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Création de lucarne" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Pose de fenêtres de toit" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Aménagement et isolation des combles" } }
    ]
  }
}
```

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://3bcharpente.fr/renovation-charpente-combles/#faq",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Comment savoir si mes combles sont aménageables ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Trois points comptent : la hauteur, la charpente et le plancher. Seules les parties de plus de 1,80 m de hauteur entrent dans la surface habitable. Une charpente à fermes et pannes se libère plus facilement que des fermettes en W. Enfin, les solives doivent pouvoir porter une pièce de vie. Le plus simple : nous montrer vos combles lors d'une visite."
      }
    },
    {
      "@type": "Question",
      "name": "Peut-on aménager des combles avec une charpente en fermettes ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "C'est possible, mais plus lourd. Les fermettes, petites fermes en W rapprochées, occupent tout le volume. Pour libérer l'espace, il faut les modifier ou les remplacer par une autre structure, ce qui demande une étude de charpente. Avec une charpente traditionnelle à fermes et pannes, l'espace sous le toit est en général plus facile à aménager."
      }
    },
    {
      "@type": "Question",
      "name": "Faut-il une autorisation pour créer une lucarne ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "En général, oui. Une lucarne modifie l'aspect extérieur de la maison : une déclaration préalable de travaux est le plus souvent demandée, et un permis de construire peut être nécessaire selon la surface créée. Le plan local d'urbanisme de la commune peut aussi imposer une forme ou des matériaux. Renseignez-vous en mairie avant de lancer le projet."
      }
    },
    {
      "@type": "Question",
      "name": "Comment renforcer une charpente ancienne ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Tout dépend de son état. On peut doubler des pièces trop faibles, reprendre les fermes, remplacer un pied d'arbalétrier abîmé ou rallonger une pièce par un trait de Jupiter. Si la charpente est trop atteinte, mieux vaut la déposer et en tailler une neuve, comme nous l'avons fait à L'Argentière-la-Bessée. Le diagnostic se fait sur place, en montant sous le toit."
      }
    },
    {
      "@type": "Question",
      "name": "Lucarne ou fenêtre de toit : que choisir ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "La fenêtre de toit est plus simple : elle se pose dans le plan du toit et apporte beaucoup de lumière. La lucarne sort du toit : elle demande plus de travail de charpente, mais elle crée de la hauteur sous plafond et une vraie fenêtre verticale. Dans des combles bas, la lucarne fait souvent la différence. Les deux doivent être raccordées avec soin à l'isolation."
      }
    },
    {
      "@type": "Question",
      "name": "Les travaux d'aménagement de combles ouvrent-ils droit à des aides ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Cela dépend des travaux et de votre situation. 3B Charpente est qualifiée QUALIBAT-RGE pour l'isolation des rampants et des toitures et pour la pose de fenêtres de toit. Ce label ouvre l'accès aux aides publiques à la rénovation énergétique, sous conditions. Les règles évoluent : vérifiez votre cas auprès de France Rénov', le service public de la rénovation, avant de signer."
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
    { "@type": "ListItem", "position": 2, "name": "Rénovation de charpente et combles", "item": "https://3bcharpente.fr/renovation-charpente-combles/" }
  ]
}
```

- **Textes alternatifs des images clés :**

| Fichier | Texte alternatif | Photo source |
|---|---|---|
| `renovation-charpente-levage-jouees-lucarne-argentiere-la-bessee.webp` | Levage des jouées d'une lucarne dans une charpente refaite par 3B Charpente à L'Argentière-la-Bessée (Hautes-Alpes) | `/galeries/refection-d-une-charpente-a-l-argentiere-la-bessee`, « levage des jouées de lucarne » |
| `lucarne-renovation-energetique-saint-martin-de-queyrieres.webp` | Toiture terminée avec la lucarne créée par 3B Charpente à Saint-Martin-de-Queyrières | `/galeries/renovation-energetique-et-ouverture-d-une-lucarne-a-saint-martin-de-queyriere`, « toiture terminée » |
| `renfort-charpente-doublage-argentiere-la-bessee.webp` | Doublage d'une charpente ancienne pour le renfort et l'isolation, L'Argentière-la-Bessée | `/galeries/isolation-d-une-toiture-ancienne-a-l-argentiere-la-bessee`, « doublage pour le renfort et l'isolation » |
| `combles-fibre-de-bois-toiture-ancienne-argentiere-la-bessee.webp` | Panneaux de fibre de bois posés sur une toiture ancienne à L'Argentière-la-Bessée | même dossier, « panneaux en fibre de bois » |
| `fenetre-de-toit-78x98-combles-argentiere-la-bessee.webp` | Fenêtre de toit de 78 × 98 cm vue de dessous dans des combles isolés à L'Argentière-la-Bessée | même dossier, « vue de dessous d'un velux 78x98 » |
| `copropriete-briancon-reprise-des-fermes.webp` | Reprise des fermes de la charpente d'une copropriété à Briançon par 3B Charpente | `/galeries/renovation-d-une-copropriete-a-briancon`, « Reprise des fermes » |
| `chevetre-cheminee-charpente-argentiere-la-bessee.webp` | Chevêtre autour d'une cheminée dans une charpente neuve à L'Argentière-la-Bessée | `/galeries/refection-d-une-charpente-a-l-argentiere-la-bessee`, « chevêtre de cheminée » |

---

## 3. Sections, dans l'ordre

### 3.1 Fil d'Ariane

- **Rôle :** situer la page, alimenter le BreadcrumbList.
- **Composant :** ligne de texte discrète au-dessus du héros (à ajouter à la maquette).

> Accueil › Rénovation de charpente et combles

### 3.2 Héros

- **Rôle :** sujet + lieu, promesse du service validé, deux preuves.
- **Composant Framer :** héros (titre en deux couleurs, texte avec mots forts en gras, bouton plein vert + bouton contour, deux preuves à pastille sauge).
- **Photo :** « levage des jouées de lucarne » (L'Argentière-la-Bessée).
- **Texte validé :** « Rénovez la charpente existante de votre maison afin de réaménager les espaces sous combles. Renforcez la structure de toiture et créez des ouvertures (lucarnes, fenêtres de toit, …) ». Réécrit pour le référencement : ajout de « combles », « biosourcés » et « Hautes-Alpes », mêmes trois engagements (rénover, renforcer, ouvrir).

> _Kicker :_ Rénovation de charpente et toiture
>
> _H1 :_ Rénovation de **charpente** et aménagement des **combles** dans les Hautes-Alpes
>
> _Texte :_ Rénovez la charpente existante de votre maison pour **réaménager les combles**. Nous **renforçons la structure** de toiture, créons les ouvertures, **lucarnes et fenêtres de toit**, et isolons avec des **matériaux biosourcés**.
>
> _Bouton plein :_ Demander mon devis → `/contact/`
>
> _Bouton contour :_ Voir nos rénovations → `#realisations`
>
> _Preuve 1 :_ Depuis 2007
>
> _Preuve 2 :_ Artisan RGE
>
> _Légende photo :_ Levage des jouées d'une lucarne, réfection d'une charpente à L'Argentière-la-Bessée.

### 3.3 En bref

- **Rôle :** réponse directe, citable par les moteurs et les assistants IA.
- **Composant :** carte blanche à coins arrondis avec une pastille sauge, sous le héros.

> _Titre de la carte :_ En bref
>
> _Texte :_ 3B Charpente, charpentier qualifié RGE installé à L'Argentière-la-Bessée depuis 2007, rénove les charpentes anciennes des Hautes-Alpes pour rendre les combles habitables : réparation et renforcement des fermes, création de lucarnes et de fenêtres de toit, isolation biosourcée, plancher et escalier. Nous travaillons le mélèze et le sapin des Hautes-Alpes, et réemployons le bois déposé quand il est sain.

### 3.4 Ce que nous faisons

- **Rôle :** découper le service en quatre gestes clairs (réparer, renforcer, ouvrir, aménager), chacun relié à une recherche.
- **Composant Framer :** quatre cartes de services blanches, icône dans une pastille sauge.

> _Kicker :_ Ce que nous faisons
>
> _H2 :_ Rénover la charpente **pour vivre sous le toit**
>
> _Texte :_ Une charpente ancienne a souvent de la ressource. Avant de la remplacer, nous regardons ce qui peut être gardé, réparé ou renforcé.
>
> _Carte 1, titre :_ Réparer
>
> _Carte 1, texte :_ Remplacer une pièce abîmée, reprendre un pied d'arbalétrier, rallonger une poutre par un trait de Jupiter. Si la charpente est trop atteinte, nous la déposons et en taillons une neuve.
>
> _Carte 2, titre :_ Renforcer
>
> _Carte 2, texte :_ Pour porter un plancher, une isolation épaisse ou une nouvelle couverture, la structure doit parfois être renforcée : doublage des pièces, reprise des fermes.
>
> _Carte 3, titre :_ Ouvrir
>
> _Carte 3, texte :_ Lucarnes et fenêtres de toit apportent lumière et hauteur. Elles se préparent dans la charpente avec un chevêtre, la pièce qui encadre l'ouverture et reprend les chevrons coupés.
>
> _Carte 4, titre :_ Aménager
>
> _Carte 4, texte :_ Isolation biosourcée, étanchéité à l'air, plancher, escalier : nous réalisons tout ce qui touche au bois et à l'isolation. [À VALIDER AVEC JEAN : plâtrerie, électricité, plomberie confiées à des partenaires ? Si oui, le dire ici.]

### 3.5 Vos combles sont-ils aménageables ?

- **Rôle :** répondre à l'intention « aménagement des combles » par une liste de vérifications (format citable). Conseils généraux, pas d'engagement chiffré.
- **Composant Framer :** liste numérotée dans une grande carte blanche, sur fond de section clair.

> _Kicker :_ Avant de vous lancer
>
> _H2 :_ Vos combles sont-ils **aménageables** ?
>
> _Texte :_ Cinq questions à se poser avant d'aménager un grenier. Nous les regardons avec vous lors de la première visite.
>
> _Point 1 :_ **La hauteur.** Seules les parties de plus de 1,80 m de hauteur comptent dans la surface habitable. Une lucarne peut gagner la hauteur qui manque.
>
> _Point 2 :_ **La charpente.** Des fermettes en W encombrent le volume et demandent une transformation lourde ; une charpente à fermes et pannes se libère plus facilement.
>
> _Point 3 :_ **L'état des bois.** Traces d'humidité, d'insectes, pièces fendues ou affaissées : tout se voit en montant sous le toit.
>
> _Point 4 :_ **Le plancher.** Les solives d'un grenier n'ont pas toujours été prévues pour porter une pièce de vie.
>
> _Point 5 :_ **Les démarches.** Une lucarne ou une fenêtre de toit change l'aspect du toit : une déclaration préalable est en général demandée, parfois un permis de construire selon la surface créée. Renseignez-vous en mairie.

### 3.6 Créer une lucarne

- **Rôle :** capter le volume « lucarne » (définition, formes) et montrer deux chantiers réels. Ancre `#lucarnes`.
- **Composant Framer :** bloc deux colonnes (texte + deux photos superposées qui débordent, comme le collage de l'accueil).
- **Photos :** « levage des jouées de lucarne » ou « lucarne en cours de levage » (L'Argentière-la-Bessée) ; « toiture terminée » (Saint-Martin-de-Queyrières).

> _Kicker :_ Lucarnes
>
> _H2 :_ Créer une **lucarne** dans une charpente existante
>
> _Texte :_ Une lucarne est un ouvrage de charpente qui sort du toit : une petite façade verticale avec une fenêtre, deux côtés appelés jouées, et sa propre toiture. Elle apporte de la lumière et surtout de la hauteur, là où le toit descend bas.
>
> _Texte :_ Les formes varient : à deux pans (jacobine), à trois pans (capucine), à un seul pan (rampante). Dans les Hautes-Alpes, elle se choisit avec l'architecture de la maison et les règles d'urbanisme de la commune.
>
> _Texte :_ Pour l'ouvrir, on coupe des chevrons et on reprend leurs charges sur un chevêtre. La lucarne est ensuite tracée et taillée à l'atelier comme une petite charpente, puis levée sur le toit. C'est le métier que Jean-Michel Tardy, notre fondateur, a appris chez les Compagnons du Devoir.
>
> _Légende photo 1 :_ Levage des jouées de lucarne, L'Argentière-la-Bessée.
>
> _Légende photo 2 :_ Lucarne ouverte lors d'une rénovation énergétique à Saint-Martin-de-Queyrières.

### 3.7 Fenêtres de toit

- **Rôle :** preuve RGE vérifiée (domaine « fenêtres de toit »), raccord avec les aides.
- **Composant Framer :** bloc deux colonnes inversé (photo à gauche), pastille sauge « RGE » sur la photo.
- **Photo :** « vue de dessous d'un velux 78x98 » ou « pose des encadrements de Velux ».

> _Kicker :_ Fenêtres de toit
>
> _H2 :_ Des **fenêtres de toit** posées par un artisan RGE
>
> _Texte :_ Une fenêtre de toit se pose dans le plan de la toiture. Plus simple qu'une lucarne, elle demande quand même un travail de charpentier : chevêtre, encadrement, raccord soigné avec l'isolant et l'étanchéité à l'air, sans quoi elle devient un point froid.
>
> _Texte :_ 3B Charpente est qualifiée QUALIBAT-RGE pour la pose de fenêtres de toit, l'isolation des toitures par l'extérieur et l'isolation des rampants par l'intérieur. Ce label ouvre l'accès aux aides publiques à la rénovation énergétique, sous conditions.
>
> _Légende photo :_ Fenêtre de toit de 78 × 98 cm vue de dessous, toiture ancienne isolée à L'Argentière-la-Bessée.

### 3.8 Isoler les combles

- **Rôle :** lier la rénovation de charpente à l'isolation biosourcée et au sarking (pages 04 et 05), définir le jargon.
- **Composant Framer :** section sur fond de section clair, texte en deux colonnes, deux liens en bas.
- **Photo :** « panneaux en fibre de bois » ou « étanchéité à l'air » (toiture ancienne, L'Argentière-la-Bessée).

> _Kicker :_ Isolation des combles
>
> _H2 :_ Des combles isolés avec des **matériaux biosourcés**
>
> _Texte :_ Rénover une charpente, c'est le bon moment pour isoler. Nous posons des isolants biosourcés, issus de matières végétales : panneaux de fibre de bois, ouate de cellulose, laine de chanvre, lin et coton.
>
> _Texte :_ Deux techniques existent. Par l'intérieur, l'isolant se place entre et sous les chevrons : on parle d'isolation des rampants. Par l'extérieur, il se pose en continu au-dessus de la charpente, sous la couverture : c'est le sarking, qui laisse la charpente apparente côté pièce.
>
> _Texte :_ Dans les deux cas, une membrane d'étanchéité à l'air, posée côté chauffé, empêche l'air chaud et humide de traverser l'isolant. Côté extérieur, l'étanchéité à l'eau et la ventilation de la couverture protègent les bois.
>
> _Lien 1 :_ Nos isolants biosourcés → `/isolation-biosourcee/`
>
> _Lien 2 :_ Le sarking, isolation de toiture par l'extérieur → `/isolation-toiture-sarking/`
>
> _Légende photo :_ Panneaux de fibre de bois sur une toiture ancienne à L'Argentière-la-Bessée.

### 3.9 Plancher et escalier

- **Rôle :** compléter le parcours « combles habitables » et pousser vers la page escaliers.
- **Composant Framer :** bloc deux colonnes, photo de l'escalier quart tournant.
- **Photo :** « combles rénovés par nos soins » ou « montage terminé » (escalier 1/4 tournant).

> _Kicker :_ Plancher et escalier
>
> _H2 :_ Un plancher solide et **un escalier pour y monter**
>
> _Texte :_ Des combles habitables demandent un plancher qui porte et un accès confortable. Nous levons des solivages, posons des planchers en mélèze et dessinons des escaliers sur mesure. Dans une maison que nous avons rénovée, l'escalier quart tournant en mélèze lamellé-collé qui mène aux combles sert aussi de cloison rampante à la salle de bains.
>
> _Lien :_ Nos escaliers bois sur mesure → `/escalier-bois-sur-mesure/`
>
> _Légende photo :_ Escalier quart tournant en mélèze lamellé-collé menant aux combles rénovés par 3B Charpente.

### 3.10 Réalisations

- **Rôle :** quatre preuves locales. Ancre `#realisations`.
- **Composant Framer :** cartes de réalisations (étiquette « 3B Charpente » sur la photo, lien « Voir les travaux → »).

> _Kicker :_ Nos chantiers
>
> _H2 :_ Charpentes et combles **rénovés dans les Hautes-Alpes**
>
> _Carte 1, titre :_ Réfection d'une charpente à L'Argentière-la-Bessée
>
> _Carte 1, texte :_ Charpente neuve taillée et levée, lucarnes, chevêtre de cheminée, encadrements de fenêtres de toit, fibre de bois et plancher en mélèze.
>
> _Carte 1, lien :_ Voir les travaux → `/realisations/refection-d-une-charpente-a-l-argentiere-la-bessee/`
>
> _Carte 2, titre :_ Lucarne et rénovation énergétique à Saint-Martin-de-Queyrières
>
> _Carte 2, texte :_ Ouverture d'une lucarne, caissons d'isolation et étanchéité à l'air.
>
> _Carte 2, lien :_ Voir les travaux → `/realisations/renovation-energetique-et-ouverture-d-une-lucarne-a-saint-martin-de-queyriere/`
>
> _Carte 3, titre :_ Toiture ancienne isolée à L'Argentière-la-Bessée
>
> _Carte 3, texte :_ Doublage de la charpente pour le renfort et l'isolation, fibre de bois, étanchéité à l'air et fenêtre de toit.
>
> _Carte 3, lien :_ Voir les travaux → `/realisations/isolation-d-une-toiture-ancienne-a-l-argentiere-la-bessee/`
>
> _Carte 4, titre :_ Rénovation d'une copropriété à Briançon
>
> _Carte 4, texte :_ Reprise des fermes, isolant soufflé après découverture, dépassée de toiture (le débord du toit) recréée, nouvelle couverture.
>
> _Carte 4, lien :_ Voir les travaux → `/realisations/renovation-d-une-copropriete-a-briancon/`
>
> _Bouton contour :_ Toutes nos réalisations → `/realisations/`

### 3.11 3B Récup'

- **Rôle :** relier la rénovation au réemploi (la dépose d'une charpente est un gisement).
- **Composant Framer :** bandeau vert forêt, formes organiques vert clair, mots en sauge.
- **Texte validé :** esprit du service « Utilisation de bois de réemploi » (« donnant une nouvelle vie au matériau bois… transformation et usinage dans notre atelier »).

> _Kicker :_ 3B Récup'
>
> _H2 :_ Votre ancienne charpente **a encore de la valeur**
>
> _Texte :_ Quand une charpente doit être déposée, ses pièces saines ne partent pas forcément à la benne. Avec 3B Récup', notre activité de réemploi, nous les trions, les nettoyons et les usinons dans notre atelier pour les remettre en œuvre. Une ferme en vieux bois a ainsi retrouvé sa place lors d'une réfection de toiture.
>
> _Bouton plein (sauge) :_ Découvrir 3B Récup' → `/3b-recup/`

### 3.12 Prestations liées

- **Rôle :** maillage vers trois prestations proches.
- **Composant Framer :** trois petites cartes de services.

> _H2 :_ Pour aller **plus loin**
>
> _Carte 1 :_ Charpente bois traditionnelle → `/charpente-bois/`
>
> _Carte 2 :_ Isolation de toiture par l'extérieur (sarking) → `/isolation-toiture-sarking/`
>
> _Carte 3 :_ Escaliers bois sur mesure → `/escalier-bois-sur-mesure/`

### 3.13 FAQ

- **Rôle :** questions telles qu'on les tape ; FAQPage.
- **Composant Framer :** accordéon dans des cartes blanches. Texte complet en section 4.

> _Kicker :_ Questions fréquentes
>
> _H2 :_ Vos questions sur **les combles et la charpente**

### 3.14 Appel à l'action final

- **Rôle :** conversion.
- **Composant Framer :** bandeau vert forêt d'appel à l'action.
- **Texte validé :** « Prêt à transformer votre espace ? … chaque projet chez 3B Charpente débute par une étude sur mesure », adapté aux combles.

> _H2 :_ Prêt à **transformer vos combles** ?
>
> _Texte :_ Chaque projet chez 3B Charpente débute par une étude sur mesure. Nous venons voir votre charpente, nous discutons de vos besoins et vous proposons un devis détaillé.
>
> _Bouton plein :_ Demander mon devis → `/contact/`
>
> _Bouton contour :_ Appeler le 06 34 67 31 49 → `tel:+33634673149`
>
> _Ligne d'adresse :_ 3B Charpente, 5 rue Saint-Michel, 05120 L'Argentière-la-Bessée.

---

## 4. FAQ

### Q1. Comment savoir si mes combles sont aménageables ?

> Trois points comptent : la hauteur, la charpente et le plancher. Seules les parties de plus de 1,80 m de hauteur entrent dans la surface habitable. Une charpente à fermes et pannes se libère plus facilement que des fermettes en W. Enfin, les solives doivent pouvoir porter une pièce de vie. Le plus simple : nous montrer vos combles lors d'une visite.

### Q2. Peut-on aménager des combles avec une charpente en fermettes ?

> C'est possible, mais plus lourd. Les fermettes, petites fermes en W rapprochées, occupent tout le volume. Pour libérer l'espace, il faut les modifier ou les remplacer par une autre structure, ce qui demande une étude de charpente. Avec une charpente traditionnelle à fermes et pannes, l'espace sous le toit est en général plus facile à aménager.

### Q3. Faut-il une autorisation pour créer une lucarne ?

> En général, oui. Une lucarne modifie l'aspect extérieur de la maison : une déclaration préalable de travaux est le plus souvent demandée, et un permis de construire peut être nécessaire selon la surface créée. Le plan local d'urbanisme de la commune peut aussi imposer une forme ou des matériaux. Renseignez-vous en mairie avant de lancer le projet.

### Q4. Comment renforcer une charpente ancienne ?

> Tout dépend de son état. On peut doubler des pièces trop faibles, reprendre les fermes, remplacer un pied d'arbalétrier abîmé ou rallonger une pièce par un trait de Jupiter. Si la charpente est trop atteinte, mieux vaut la déposer et en tailler une neuve, comme nous l'avons fait à L'Argentière-la-Bessée. Le diagnostic se fait sur place, en montant sous le toit.

### Q5. Lucarne ou fenêtre de toit : que choisir ?

> La fenêtre de toit est plus simple : elle se pose dans le plan du toit et apporte beaucoup de lumière. La lucarne sort du toit : elle demande plus de travail de charpente, mais elle crée de la hauteur sous plafond et une vraie fenêtre verticale. Dans des combles bas, la lucarne fait souvent la différence. Les deux doivent être raccordées avec soin à l'isolation.

### Q6. Les travaux d'aménagement de combles ouvrent-ils droit à des aides ?

> Cela dépend des travaux et de votre situation. 3B Charpente est qualifiée QUALIBAT-RGE pour l'isolation des rampants et des toitures et pour la pose de fenêtres de toit. Ce label ouvre l'accès aux aides publiques à la rénovation énergétique, sous conditions. Les règles évoluent : vérifiez votre cas auprès de France Rénov', le service public de la rénovation, avant de signer.

---

## 5. Liens internes

| Texte du lien | Page visée | Emplacement |
|---|---|---|
| Demander mon devis | `/contact/` | héros, appel à l'action final |
| Nos isolants biosourcés | `/isolation-biosourcee/` | section 3.8 |
| Le sarking, isolation de toiture par l'extérieur | `/isolation-toiture-sarking/` | section 3.8, prestations liées |
| Nos escaliers bois sur mesure | `/escalier-bois-sur-mesure/` | section 3.9, prestations liées |
| Charpente bois traditionnelle | `/charpente-bois/` | prestations liées |
| Découvrir 3B Récup' | `/3b-recup/` | bandeau 3.11 |
| Voir les travaux (×4) | 4 fiches `/realisations/…/` | section 3.10 |
| Toutes nos réalisations | `/realisations/` | section 3.10 |
| Briançon (carte 4, à lier) | `/charpentier-briancon/` | section 3.10 |
| France Rénov' et aides (FAQ Q6, phase 2) | `/conseils/aides-renovation-artisan-rge/` | FAQ, quand le guide existe |
| Rénover un chalet ou une maison ancienne (phase 2) | `/conseils/renover-chalet-maison-ancienne/` | sous la section 3.5, quand le guide existe |

**Liens entrants à prévoir :** depuis l'accueil, depuis `/charpente-bois/` (cartes 2 et 3, ancre `#lucarnes`), depuis les fiches réalisations 11, 14, 18 et 21, et depuis le guide 25.

---

## 6. Photos

**À utiliser (préfixe `https://3bcharpente.fr`) :**

- `/galeries/refection-d-une-charpente-a-l-argentiere-la-bessee` : « levage des jouées de lucarne » (héros), « lucarne en cours de levage », « détail de lucarne », « chevêtre de cheminée », « pose des encadrements de Velux », « dépose de l'ancienne charpente », « plancher en mélèze ».
- `/galeries/renovation-energetique-et-ouverture-d-une-lucarne-a-saint-martin-de-queyriere` : « toiture terminée », « étanchéité à l'air et caissons d'isolation », « vue de l'intérieur ».
- `/galeries/isolation-d-une-toiture-ancienne-a-l-argentiere-la-bessee` : « doublage pour le renfort et l'isolation », « panneaux en fibre de bois », « étanchéité à l'air », « étanchéité à l'eau et ventilation », « vue de dessous d'un velux 78x98 ».
- `/galeries/renovation-d-une-copropriete-a-briancon` : « Avant intervention », « Reprise des fermes », « Soufflage après découverture », « Recréation d'une dépassée de toiture ».
- `/galeries/escalier-1-4-tournant-en-meleze-lamelle-colle` : « combles rénovés par nos soins », « montage terminé ».

**À demander à Jean :**

- des combles « avant / après » vus de l'intérieur (même cadrage), sur un chantier récent ;
- une lucarne terminée vue de l'extérieur, en plan large, avec la maison ;
- un gros plan d'un renfort (pièce doublée ou fermes reprises) ;
- une pièce de vie aménagée sous les combles, meublée, pour illustrer le résultat.

---

## 7. Points à valider avec Jean

1. **SIRET RGE :** l'annuaire ADEME rattache la qualification au SIRET 494 482 714 **00024**, alors que les mentions légales indiquent **00016**. Vérifier que l'établissement qualifié est bien l'établissement actuel avant d'afficher « Artisan RGE ».
2. **Logo QUALIBAT-RGE :** numéro de certificat et date de validité, pour afficher le logo et le lien vers l'attestation.
3. **Corps d'état associés :** plâtrerie, électricité, plomberie dans les combles : faites par 3B, par des partenaires, ou à la charge du client ? (placeholder dans la carte 4 de la section 3.5).
4. **Démarches :** 3B aide-t-il à préparer la déclaration préalable ou le permis (plans, insertion) ? Si oui, l'ajouter à la FAQ Q3.
5. **Fermettes :** 3B transforme-t-il des charpentes en fermettes pour aménager des combles ? La FAQ Q2 reste générale.
6. **Isolant soufflé à Briançon :** quel matériau (ouate de cellulose ?) ; la carte 4 dit seulement « isolant soufflé ».
7. **Commune « Ronatlon »** (ferme en vieux bois citée dans le bandeau 3B Récup') : libellé à corriger.
8. **Diagnostic de charpente :** la visite est-elle gratuite ? Donne-t-elle lieu à un compte rendu écrit ? À préciser dans la FAQ Q4 si oui.
9. **Traitement des bois** (insectes, champignons) : 3B le propose-t-il ? Rien n'est écrit pour l'instant.
