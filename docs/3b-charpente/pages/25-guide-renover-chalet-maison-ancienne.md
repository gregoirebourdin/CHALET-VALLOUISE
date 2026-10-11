# Fiche 25 : Guide « Rénover un chalet ou une maison ancienne en montagne : par où commencer ? »

`/conseils/renover-chalet-maison-ancienne/` · Phase 2 · Statut : rédigée, à relire et valider par Jean

**Conventions.** Le texte à coller sur le site est en citation (lignes qui commencent par `>`). Dans les titres (H1, H2), les mots entre `**` passent en vert (#336233 sur fond clair, sauge #A3D2A3 sur fond sombre) ; dans les paragraphes, `**` veut simplement dire gras. Les espaces insécables sont déjà en place. Tout ce qui est entre `[À VALIDER AVEC JEAN : …]` est à confirmer ou à supprimer avant publication. Sources : `../00-brief.md` et `../realisations-source.md`.

---

## 1. Carte d'identité

- **Adresse :** `/conseils/renover-chalet-maison-ancienne/` (canonique : `https://3bcharpente.fr/conseils/renover-chalet-maison-ancienne/`).
- **Type :** guide (article de conseil), phase 2 du plan du site.
- **Objectif de la page :**
  - répondre à la question que se posent les propriétaires avant tout devis : dans quel ordre rénover ? ;
  - montrer, chantiers réels à l'appui, que 3B couvre toute la chaîne bois (charpente, isolation biosourcée, ouvertures, finitions, réemploi) ;
  - devenir la page que Google et les assistants IA citent sur « rénover un chalet » dans les Hautes-Alpes ;
  - nourrir les pages de prestation par des liens internes et amener vers une visite.
- **Visiteurs visés :**
  - acheteurs ou héritiers d'un chalet, d'une maison de pays ou d'une maison ancienne dans le Briançonnais, la Vallouise, le Pays des Écrins ;
  - propriétaires de résidences secondaires qui préparent des travaux à distance ;
  - personnes qui comparent les isolants pour une maison en pierre ou un chalet.
- **Mots-clés :**
  - principal : rénovation maison ancienne (330/mois) ;
  - secondaires : rénovation chalet (volume non relevé), rénover un chalet, rénover une maison ancienne, ordre des travaux rénovation, isolation maison ancienne, isolant biosourcé bâti ancien ;
  - local : rénovation chalet Briançon, rénovation chalet Vallouise, rénovation maison Hautes-Alpes.
- **Intention de recherche :** informative (méthode, ordre, pièges à éviter), avec une suite commerciale naturelle (trouver un professionnel local).
- **Pages liées :**
  - prestations : `/renovation-charpente-combles/`, `/isolation-biosourcee/`, `/isolation-toiture-sarking/`, `/isolation-murs-ite/`, `/escalier-bois-sur-mesure/`, `/balcon-terrasse-abri-bois/` ;
  - filière : `/3b-recup/`, `/3b-recup/bois-de-reemploi/` ;
  - preuves : 7 fiches réalisations (Vallouise, Prelles, Briançon, L'Argentière-la-Bessée ×3, Le Casset, Saint-Martin-de-Queyrières, bâti ancien) ;
  - guides : `/conseils/isolant-biosource-montagne/`, `/conseils/aides-renovation-artisan-rge/`, `/conseils/reemploi-bois-construction/` (phase 2, à lier quand ils existent) ;
  - secteurs : `/charpentier-vallouise-pays-des-ecrins/`, `/charpentier-briancon/` ;
  - conversion : `/contact/`.

---

## 2. SEO

- **Balise title :** `Rénovation maison ancienne en montagne | 3B Charpente`
- **Note sur le title :** il porte le mot-clé mesuré (« rénovation maison ancienne », 330/mois), le lieu (« en montagne ») et la marque. « Chalet » est porté par l'adresse, le H1 et la meta. Une version complète (« Rénover un chalet ou une maison ancienne en montagne ») dépasse 60 caractères avec la marque.
- **Meta description :** `Rénover un chalet ou une maison ancienne en montagne : l'ordre des travaux, l'isolation biosourcée, le vieux bois à garder. Le guide d'un charpentier RGE.`
- **Contrôles (mesurés) :** title 53 caractères · meta 154 caractères · corps de page 1677 mots (section 3, hors FAQ) · En bref 55 mots · FAQ 6 questions, 57 à 66 mots par réponse.
- **H1 (unique) :** Rénover un chalet ou une maison ancienne dans les Hautes-Alpes : **par où commencer** ?
- **Note sur le H1 :** le titre de travail disait « en montagne » ; il passe à « dans les Hautes-Alpes » pour respecter la règle du lieu dans le H1. « En montagne » reste dans le title, le chapô et la meta.
- **Fil d'Ariane :** Accueil › Conseils › Rénover un chalet ou une maison ancienne. « Conseils » reste en texte simple tant qu'il n'existe pas de page `/conseils/` (le BreadcrumbList ci-dessous n'a donc que deux niveaux).
- **Données structurées :** Article, FAQPage et BreadcrumbList, en JSON-LD (pas de Service sur un guide). L'auteur est l'entreprise par défaut ; s'il relit et signe le guide, remplacer `author` par `{ "@id": "https://3bcharpente.fr/a-propos/#jean-michel-tardy" }`, la `Person` déclarée sur la fiche 17 (À propos).

```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": "https://3bcharpente.fr/conseils/renover-chalet-maison-ancienne/#article",
  "headline": "Rénover un chalet ou une maison ancienne en montagne : par où commencer ?",
  "description": "L'ordre des travaux pour rénover un chalet ou une maison ancienne en montagne : structure et charpente, couverture, isolation biosourcée et étanchéité à l'air, ouvertures, finitions, et réemploi du vieux bois.",
  "image": "https://3bcharpente.fr/images/renovation-chalet-vallouise-facade-sud-terrasse.webp",
  "inLanguage": "fr-FR",
  "datePublished": "AAAA-MM-JJ",
  "dateModified": "AAAA-MM-JJ",
  "mainEntityOfPage": "https://3bcharpente.fr/conseils/renover-chalet-maison-ancienne/",
  "author": {
    "@type": "Organization",
    "@id": "https://3bcharpente.fr/#entreprise",
    "name": "3B Charpente"
  },
  "publisher": {
    "@type": "Organization",
    "@id": "https://3bcharpente.fr/#entreprise",
    "name": "3B Charpente",
    "logo": { "@type": "ImageObject", "url": "https://3bcharpente.fr/images/logo-3b-charpente.svg" }
  },
  "about": [
    { "@type": "Thing", "name": "Rénovation de maison ancienne" },
    { "@type": "Thing", "name": "Rénovation de chalet" },
    { "@type": "Thing", "name": "Isolation biosourcée" },
    { "@type": "Thing", "name": "Réemploi du bois" }
  ],
  "spatialCoverage": { "@type": "AdministrativeArea", "name": "Hautes-Alpes" }
}
```

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://3bcharpente.fr/conseils/renover-chalet-maison-ancienne/#faq",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Par quoi commencer la rénovation d'une maison ancienne ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Par un état des lieux, puis par la structure. On vérifie la charpente, la toiture, les murs et les planchers, et on précise le projet. L'ordre logique est ensuite : structure et charpente, couverture, isolation et étanchéité à l'air, ouvertures, finitions. Commencer par les finitions, c'est risquer de tout reprendre le jour où l'on touche à la structure."
      }
    },
    {
      "@type": "Question",
      "name": "Faut-il refaire la toiture avant d'isoler ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Il faut au moins qu'elle soit saine et étanche : isoler sous une couverture qui fuit abîme l'isolant et les bois. Si la couverture doit de toute façon être refaite, profitez-en pour isoler par l'extérieur, en sarking : les panneaux isolants sont posés en continu sur la charpente, sous la nouvelle couverture, et la charpente reste apparente à l'intérieur."
      }
    },
    {
      "@type": "Question",
      "name": "Quel isolant choisir pour un chalet ou une maison ancienne en pierre ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Pour un bâti ancien, on privilégie des isolants biosourcés et ouverts à la vapeur d'eau : fibre de bois, ouate de cellulose, laines de chanvre, de lin ou de coton. Ils gèrent mieux l'humidité des murs anciens. Sur un chalet de Vallouise, nous avons posé 28 cm de laine de chanvre, lin et coton et de fibre de bois dans les murs, et 32 cm en toiture."
      }
    },
    {
      "@type": "Question",
      "name": "Peut-on garder la charpente d'origine d'une maison ancienne ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Souvent, oui. Une charpente ancienne se répare : remplacement de pièces, reprise des fermes, renfort par doublage, rallonge par un trait de Jupiter, un assemblage qui aboute deux pièces. Il faut l'examiner de près avant de décider. Si elle doit être déposée, ses pièces saines peuvent être triées, nettoyées et réemployées : c'est le rôle de 3B Récup', notre activité de réemploi du bois."
      }
    },
    {
      "@type": "Question",
      "name": "Combien de temps dure la rénovation d'un chalet ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Cela dépend de l'état de la maison et de l'ampleur des travaux : refaire une toiture ou rénover toute l'enveloppe, ce n'est pas le même chantier. Le délai peut varier selon la complexité et la taille du projet ; nous vous fournirons un calendrier estimatif lors de notre première rencontre. En montagne, pensez aussi aux saisons : la mise hors d'eau se prévoit avant l'hiver."
      }
    },
    {
      "@type": "Question",
      "name": "Existe-t-il des aides pour rénover une maison ancienne ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oui, sous conditions. Certains travaux d'isolation et de menuiseries réalisés par un artisan RGE peuvent ouvrir droit à des aides publiques à la rénovation énergétique. 3B Charpente est qualifiée QUALIBAT-RGE pour l'isolation des murs, des toitures et des rampants, et pour les fenêtres et fenêtres de toit. Les règles changent souvent : vérifiez votre situation auprès de France Rénov' avant de signer."
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
    { "@type": "ListItem", "position": 2, "name": "Rénover un chalet ou une maison ancienne", "item": "https://3bcharpente.fr/conseils/renover-chalet-maison-ancienne/" }
  ]
}
```

- **Textes alternatifs des images clés :**

| Fichier | Texte alternatif | Photo source |
|---|---|---|
| `renovation-chalet-vallouise-facade-sud-terrasse.webp` | Chalet des années 1980 rénové et isolé par 3B Charpente à Vallouise, façade sud et terrasse en mélèze | `/galeries/renovation-et-isolation-d-un-chalet-a-vallouise`, « Façade Sud et sa terrasse » |
| `renovation-chalet-vallouise-avant-travaux.webp` | Façade ouest du chalet de Vallouise avant les travaux de rénovation | même dossier, « Façade Ouest avant les travaux » |
| `copropriete-briancon-reprise-des-fermes.webp` | Reprise des fermes de la charpente d'une copropriété à Briançon | `/galeries/renovation-d-une-copropriete-a-briancon`, « Reprise des fermes » |
| `maison-prelles-charpente-meleze-assemblage-a-blanc.webp` | Assemblage à blanc de la charpente en mélèze pays d'une maison rénovée à Prelles | `/galeries/renovation-d-une-maison-d-habitation-sur-la-commune-de-prelles`, « Assemblage à blanc (1) » |
| `toit-bardeaux-meleze-le-casset.webp` | Toit en bardeaux de mélèze rénové au Casset (Hautes-Alpes) | `/galeries/renovation-d-un-toit-en-bardeau-meleze-au-casset`, « après » |
| `bati-ancien-insufflation-ouate-de-cellulose.webp` | Insufflation de ouate de cellulose lors de l'isolation d'un bâti ancien par l'intérieur | `/galeries/isolation-d-un-bati-ancien-par-l-interieur`, « insufflation de ouate de cellulose » |
| `maison-argentiere-la-bessee-bardage-vieux-bois.webp` | Bardage en vieux bois de réemploi sur une maison rénovée à L'Argentière-la-Bessée | `/galeries/renovation-d-une-maison-d-habitation-a-l-argentiere-la-bessee`, « Bardage vieux bois » |

---

## 3. Sections, dans l'ordre

### 3.1 Fil d'Ariane

- **Rôle :** situer le guide.
- **Composant :** ligne de texte discrète au-dessus du titre.

> Accueil › Conseils › Rénover un chalet ou une maison ancienne

### 3.2 En-tête de l'article

- **Rôle :** titre, promesse, signature (E-E-A-T), photo d'un chantier réel.
- **Composant Framer :** héros simplifié (titre en deux couleurs, chapô, ligne d'auteur, grande photo en dessous ; pas de bouton).
- **Photo :** « Façade Sud et sa terrasse » (chalet de Vallouise).

> _Kicker :_ Guide · Rénovation
>
> _H1 :_ Rénover un chalet ou une maison ancienne dans les Hautes-Alpes : **par où commencer** ?
>
> _Chapô :_ En montagne, une maison ancienne ou un chalet se rénove dans un ordre précis : ce qui porte, puis ce qui protège, puis ce qui isole, et enfin ce qui se voit. Voici l'ordre que nous recommandons, illustré par des maisons que nous avons rénovées à Vallouise, Prelles, Briançon et L'Argentière-la-Bessée.
>
> _Ligne d'auteur :_ Par 3B Charpente, charpentiers à L'Argentière-la-Bessée depuis 2007. [À VALIDER AVEC JEAN : relu et signé par Jean-Michel Tardy ?] · Publié le [date] · Lecture : 8 minutes
>
> _Légende photo :_ Chalet des années 1980 rénové et isolé à Vallouise, avec sa terrasse en mélèze.

### 3.3 En bref

- **Rôle :** la réponse en quelques lignes, que les assistants IA reprennent.
- **Composant :** carte blanche à coins arrondis avec une pastille sauge.

> _Titre de la carte :_ En bref
>
> _Texte :_ Pour rénover un chalet ou une maison ancienne en montagne, commencez par un état des lieux, puis suivez cet ordre : la structure et la charpente ; la couverture, pour mettre hors d'eau ; l'isolation et l'étanchéité à l'air ; les ouvertures ; les finitions. Gardez le vieux bois sain et isolez avec des matériaux biosourcés, adaptés au bâti ancien.

### 3.4 Sommaire

- **Rôle :** navigation et liens d'ancre (Google les affiche parfois sous le résultat).
- **Composant :** liste de liens dans une carte claire, collante sur le côté sur ordinateur.

> _Titre :_ Dans ce guide
>
> _Lien :_ Avant tout, l'état des lieux → `#etat-des-lieux`
>
> _Lien :_ 1. La structure et la charpente → `#charpente`
>
> _Lien :_ 2. La couverture → `#couverture`
>
> _Lien :_ 3. L'isolation et l'étanchéité à l'air → `#isolation`
>
> _Lien :_ 4. Les ouvertures → `#ouvertures`
>
> _Lien :_ 5. Les finitions → `#finitions`
>
> _Lien :_ Garder et réemployer le vieux bois → `#vieux-bois`
>
> _Lien :_ L'exemple du chalet de Vallouise → `#vallouise`
>
> _Lien :_ Par où commencer, concrètement → `#checklist`

### 3.5 Avant tout, l'état des lieux

- **Rôle :** première étape, liste citable. Ancre `#etat-des-lieux`.
- **Composant Framer :** texte courant, liste à puces, encadré clair.

> _H2 :_ Avant tout, **l'état des lieux**
>
> _Texte :_ Une maison ancienne raconte son histoire à qui sait la lire. Avant de choisir un isolant ou une fenêtre, il faut savoir ce qui tient, ce qui souffre, et pourquoi. Regardez en particulier :
>
> _Puce :_ **la charpente :** pièces fendues, affaissées, attaquées par les insectes ou l'humidité, surtout aux appuis et aux pieds de fermes ;
>
> _Puce :_ **la toiture :** traces d'infiltration, état de la couverture et des dépassées de toit, ces débords qui protègent les façades ;
>
> _Puce :_ **les murs :** humidité en pied de mur, enduits qui cloquent, fissures ;
>
> _Puce :_ **les planchers :** solives qui fléchissent, planchers qui vibrent ou penchent ;
>
> _Puce :_ **votre projet :** habiter les combles, ouvrir une pièce, agrandir. Il change l'ordre des priorités.
>
> _Texte :_ Faites ce tour avec un professionnel. Chez 3B Charpente, chaque projet débute par une étude sur mesure, et nous vous fournissons un calendrier estimatif dès la première rencontre. Côté démarches, passez tôt en mairie : modifier l'aspect extérieur d'une maison demande en général une autorisation.

### 3.6 1. La structure et la charpente d'abord

- **Rôle :** étape 1, avec trois chantiers réels. Ancre `#charpente`.
- **Composant Framer :** texte courant + collage de deux photos (« Reprise des fermes », Briançon ; « Assemblage à blanc (1) », Prelles).

> _H2 :_ 1. La structure et **la charpente** d'abord
>
> _Texte :_ Tout repose sur la structure. Isoler une toiture dont la charpente fléchit, c'est enfermer le problème sous un isolant neuf. On commence donc par réparer, renforcer ou, si besoin, remplacer.
>
> _Texte :_ À Briançon, sur une copropriété, nous avons repris les fermes de la charpente, puis isolé et refait la couverture. À L'Argentière-la-Bessée, l'ancienne charpente d'une maison a été déposée et remplacée par une charpente neuve, taillée et assemblée à blanc avant le levage. À Prelles, la charpente d'une maison d'habitation a été taillée en mélèze pays, le mélèze local, puis levée avec le solivage.
>
> _Texte :_ C'est aussi le moment de penser aux futures ouvertures : une lucarne ou une fenêtre de toit se prépare dans la charpente, avec un chevêtre, la pièce qui encadre l'ouverture. Et si vous voulez habiter les combles, le plancher doit pouvoir porter une pièce de vie : dans un autre bâti ancien, nous avons ainsi créé un plancher neuf en douglas et en épicéa.
>
> _Lien :_ Rénovation de charpente et combles → `/renovation-charpente-combles/`
>
> _Légende photo :_ Reprise des fermes sur une copropriété à Briançon.

### 3.7 2. La couverture, pour mettre hors d'eau

- **Rôle :** étape 2, définition du sarking. Ancre `#couverture`.
- **Composant Framer :** texte courant + curseur avant / après (« avant » et « après », Le Casset).

> _H2 :_ 2. La couverture, **pour mettre hors d'eau**
>
> _Texte :_ Une fois la structure saine, on referme le toit. Une couverture étanche protège tout ce qui suit : isolant, planchers, finitions.
>
> _Texte :_ Au Casset, nous avons rénové un toit en bardeaux de mélèze, ces petites planches de bois posées en recouvrement, un matériau traditionnel des toits alpins. À Briançon, la couverture de la copropriété a été refaite et une dépassée de toiture recréée.
>
> _Texte :_ Si la couverture doit être refaite, c'est l'occasion d'isoler par l'extérieur, en sarking : les panneaux isolants sont posés en continu sur la charpente, sous la nouvelle couverture. La charpente reste apparente à l'intérieur, et les pièces habitées ne sont pas touchées.
>
> _Lien :_ Isolation de toiture par l'extérieur (sarking) → `/isolation-toiture-sarking/`
>
> _Légende photo :_ Toit en bardeaux de mélèze au Casset, avant et après.

### 3.8 3. L'isolation et l'étanchéité à l'air

- **Rôle :** étape 3, cœur du guide : pourquoi le biosourcé dans l'ancien, définitions, deux chantiers réels. Ancre `#isolation`.
- **Composant Framer :** texte courant, encadré « Le chiffre du chantier » (28 cm / 32 cm), photo « insufflation de ouate de cellulose ».

> _H2 :_ 3. Isoler avec des **matériaux biosourcés**
>
> _Texte :_ Une maison ancienne n'est pas une maison neuve. Ses murs en pierre ou en bois ont besoin de laisser passer la vapeur d'eau et de sécher. Les isolants biosourcés, comme la fibre de bois, la ouate de cellulose ou les laines de chanvre, de lin et de coton, savent stocker puis rendre une partie de l'humidité : c'est un atout dans le bâti ancien. Les panneaux de fibre de bois, denses, ralentissent aussi la chaleur d'été.
>
> _Texte :_ Isoler ne suffit pas : il faut aussi rendre la maison étanche à l'air. Une membrane ou des panneaux continus, côté chauffé, empêchent l'air chaud et humide de traverser l'isolant, où il pourrait condenser. Une maison étanche à l'air doit, en contrepartie, être bien ventilée.
>
> _Encadré :_ **Le chalet de Vallouise :** 28 cm de laine de chanvre, lin et coton et de fibre de bois dans les murs, 32 cm en toiture.
>
> _Texte :_ Quand la façade peut changer d'aspect, l'isolation thermique par l'extérieur (ITE), un isolant continu posé sur la face extérieure des murs, supprime les ponts thermiques et garde la masse des murs anciens côté intérieur. À Vallouise, une partie du chalet est ainsi enduite sur fibre de bois, l'autre habillée de bardage en mélèze.
>
> _Texte :_ Quand on ne peut pas toucher à la façade, on isole par l'intérieur. Sur un bâti ancien isolé de cette façon, les photos du chantier montrent la méthode : doublage avec des poutres en I (des poutres légères en forme de I), panneaux OSB3, pose de l'étanchéité à l'air, puis insufflation de ouate de cellulose.
>
> _Texte :_ 3B Charpente est qualifiée QUALIBAT-RGE pour l'isolation des murs et des toitures par l'extérieur, et des murs et rampants par l'intérieur. Ce label ouvre l'accès aux aides publiques à la rénovation énergétique, sous conditions.
>
> _Lien 1 :_ Isolation biosourcée → `/isolation-biosourcee/`
>
> _Lien 2 :_ Isolation des murs par l'extérieur → `/isolation-murs-ite/`
>
> _Légende photo :_ Insufflation de ouate de cellulose dans un bâti ancien isolé par l'intérieur.

### 3.9 4. Les ouvertures

- **Rôle :** étape 4, lien avec la qualification RGE menuiseries. Ancre `#ouvertures`.
- **Composant Framer :** texte courant, photo « Pignon vitré » (L'Argentière-la-Bessée).

> _H2 :_ 4. Les ouvertures, **pensées avec l'isolation**
>
> _Texte :_ Fenêtres, portes, lucarnes, fenêtres de toit : on les choisit en même temps que l'isolant et on les pose quand l'enveloppe se referme. Leur position dans l'épaisseur du mur et leur raccord à l'étanchéité à l'air comptent autant que la menuiserie elle-même.
>
> _Texte :_ Sur le chalet de Vallouise, des ouvertures ont été créées ou modifiées. À L'Argentière-la-Bessée, une maison d'habitation a reçu un pignon vitré et de nouveaux vitrages. À Saint-Martin-de-Queyrières, une lucarne a été ouverte lors d'une rénovation énergétique. 3B Charpente est aussi qualifiée RGE pour les fenêtres de toit et pour les fenêtres, volets et portes donnant sur l'extérieur.
>
> _Légende photo :_ Pignon vitré d'une maison rénovée à L'Argentière-la-Bessée.

### 3.10 5. Les finitions

- **Rôle :** étape 5, mise en valeur du bois local et des savoir-faire (terrasse, escalier, garde-corps). Ancre `#finitions`.
- **Composant Framer :** texte courant + rangée de trois vignettes (« Terrasse en mélèze et ses assemblages traditionnels », Vallouise ; « Terrasse mélèze », Prelles ; « Escalier balancé », L'Argentière-la-Bessée).

> _H2 :_ 5. Les finitions, **ce qui se voit**
>
> _Texte :_ Vient enfin ce qui se voit et se touche : planchers, escaliers, bardages, terrasses, garde-corps. C'est là que le bois local fait la différence, en mélèze et en sapin des Hautes-Alpes sciés par la Scierie Savoldelli, notre partenaire.
>
> _Texte :_ À Vallouise, la terrasse agrandie du chalet est en mélèze, avec des assemblages traditionnels. À Prelles, la rénovation s'est terminée par une terrasse en mélèze et un garde-corps bois-métal. À L'Argentière-la-Bessée, une maison a reçu un bardage vieux bois, un escalier balancé et un garde-corps en bois de réemploi ; une autre, un plancher en mélèze.
>
> _Lien 1 :_ Escaliers bois sur mesure → `/escalier-bois-sur-mesure/`
>
> _Lien 2 :_ Balcons, terrasses et garde-corps → `/balcon-terrasse-abri-bois/`

### 3.11 Garder et réemployer le vieux bois

- **Rôle :** différenciation 3B Récup' ; définir le diagnostic ressources. Ancre `#vieux-bois`.
- **Composant Framer :** bandeau vert forêt, formes organiques, mots en sauge.

> _H2 :_ Garder le vieux bois **et lui donner une seconde vie**
>
> _Texte :_ Dans une maison ancienne, tout le bois n'est pas à jeter. Une poutre saine, une ferme encore droite, un plancher usé mais solide peuvent rester en place, être réparés, ou être déposés puis remis en œuvre ailleurs.
>
> _Texte :_ C'est le travail de 3B Récup', notre activité de déconstruction sélective et de réemploi. Nous déposons les éléments de structure bois (charpente, solivage, murs à ossature), la couverture, l'isolation et les parements. Dans notre atelier, ce bois est trié, nettoyé et usiné, puis reposé sur nos chantiers : bardage vieux bois et garde-corps à L'Argentière-la-Bessée, ferme en vieux bois lors d'une réfection de toiture.
>
> _Texte :_ Pour une maison particulière, un diagnostic ressources, c'est-à-dire un repérage volontaire des matériaux réemployables, permet de savoir avant les travaux ce qui mérite d'être sauvé. [À VALIDER AVEC JEAN : 3B propose-t-il ce repérage aux particuliers ?]
>
> _Bouton plein (sauge) :_ Découvrir 3B Récup' → `/3b-recup/`
>
> _Lien :_ Le bois de réemploi → `/3b-recup/bois-de-reemploi/`

### 3.12 L'exemple du chalet de Vallouise

- **Rôle :** étude de cas qui relie les cinq étapes à un seul chantier. Ancre `#vallouise`. Les travaux sont présentés par poste, pas dans l'ordre chronologique (non documenté).
- **Composant Framer :** grande carte blanche, photo « Façade Ouest avant les travaux » et « Façade Nord et Ouest » côte à côte, liste à droite.

> _H2 :_ Le chalet de Vallouise, **une rénovation complète**
>
> _Texte :_ Ce chalet des années 1980 a été entièrement rénové et isolé. Ce n'est pas une maison ancienne au sens du patrimoine, mais il pose les mêmes questions que toute maison de montagne : une enveloppe à reprendre, des ouvertures à revoir, des extérieurs à agrandir.
>
> _Puce :_ **Murs :** 28 cm de laine de chanvre, lin et coton et de fibre de bois.
>
> _Puce :_ **Toiture :** 32 cm des mêmes isolants.
>
> _Puce :_ **Façades :** une partie en bardage de mélèze, l'autre enduite sur fibre de bois.
>
> _Puce :_ **Ouvertures :** créées ou modifiées.
>
> _Puce :_ **Extérieurs :** dépassée nord agrandie, balcon agrandi en terrasse étanchée, en mélèze et assemblages traditionnels.
>
> _Lien :_ Voir le chantier en photos → `/realisations/renovation-et-isolation-d-un-chalet-a-vallouise/`

### 3.13 Par où commencer, concrètement

- **Rôle :** liste d'actions numérotée (format très repris par les IA). Ancre `#checklist`.
- **Composant Framer :** liste numérotée en cartes, numéros dans une pastille sauge.

> _H2 :_ Par où commencer, **concrètement**
>
> _Étape 1 :_ Notez ce que vous voulez faire de la maison, pièce par pièce.
>
> _Étape 2 :_ Faites venir un charpentier pour examiner la charpente et la toiture.
>
> _Étape 3 :_ Renseignez-vous en mairie sur les autorisations : ouvertures, façades, hauteur.
>
> _Étape 4 :_ Repérez le bois et les matériaux qui méritent d'être gardés ou réemployés.
>
> _Étape 5 :_ Choisissez l'isolant selon les murs : biosourcé et ouvert à la vapeur pour le bâti ancien.
>
> _Étape 6 :_ Vérifiez les aides possibles auprès de France Rénov', le service public de la rénovation, avec un artisan RGE.
>
> _Étape 7 :_ Demandez un calendrier qui suive l'ordre : structure, couverture, isolation, ouvertures, finitions.

### 3.14 Qui écrit ce guide

- **Rôle :** E-E-A-T, cohérence avec la page À propos.
- **Composant Framer :** petite carte avec portrait de Jean (à demander) et logo.
- **Textes validés :** À propos, « Fondée en 2007 par Jean Michel Tardy… » et « Nous avons commencé avec des projets de charpente et avons progressivement étendu nos services à la rénovation de chalets, de maisons de pays, et à la construction neuve en ossature bois », repris presque mot pour mot.

> _Titre :_ Qui écrit ce guide ?
>
> _Texte :_ 3B Charpente a été fondée en 2007 à L'Argentière-la-Bessée par Jean-Michel Tardy, charpentier formé chez les Compagnons du Devoir et sur le Tour de France. Nous avons commencé avec des projets de charpente, puis étendu nos services à la rénovation de chalets, de maisons de pays, et à la construction neuve en ossature bois.
>
> _Lien :_ Notre histoire → `/a-propos/`

### 3.15 FAQ

- **Rôle :** questions telles qu'on les tape ; FAQPage.
- **Composant Framer :** accordéon dans des cartes blanches. Texte complet en section 4.

> _H2 :_ Vos questions sur **la rénovation d'une maison ancienne**

### 3.16 Appel à l'action final

- **Rôle :** conversion.
- **Composant Framer :** bandeau vert forêt d'appel à l'action.
- **Texte validé :** « Prêt à transformer votre espace ? … chaque projet chez 3B Charpente débute par une étude sur mesure ».

> _H2 :_ Prêt à **transformer votre maison** ?
>
> _Texte :_ Chaque projet chez 3B Charpente débute par une étude sur mesure. Nous venons voir votre chalet ou votre maison, nous regardons la charpente et l'enveloppe avec vous, et nous vous proposons un devis détaillé, dans le bon ordre.
>
> _Bouton plein :_ Demander mon devis → `/contact/`
>
> _Bouton contour :_ Appeler le 06 34 67 31 49 → `tel:+33634673149`
>
> _Ligne d'adresse :_ 3B Charpente, 5 rue Saint-Michel, 05120 L'Argentière-la-Bessée.

---

## 4. FAQ

### Q1. Par quoi commencer la rénovation d'une maison ancienne ?

> Par un état des lieux, puis par la structure. On vérifie la charpente, la toiture, les murs et les planchers, et on précise le projet. L'ordre logique est ensuite : structure et charpente, couverture, isolation et étanchéité à l'air, ouvertures, finitions. Commencer par les finitions, c'est risquer de tout reprendre le jour où l'on touche à la structure.

### Q2. Faut-il refaire la toiture avant d'isoler ?

> Il faut au moins qu'elle soit saine et étanche : isoler sous une couverture qui fuit abîme l'isolant et les bois. Si la couverture doit de toute façon être refaite, profitez-en pour isoler par l'extérieur, en sarking : les panneaux isolants sont posés en continu sur la charpente, sous la nouvelle couverture, et la charpente reste apparente à l'intérieur.

### Q3. Quel isolant choisir pour un chalet ou une maison ancienne en pierre ?

> Pour un bâti ancien, on privilégie des isolants biosourcés et ouverts à la vapeur d'eau : fibre de bois, ouate de cellulose, laines de chanvre, de lin ou de coton. Ils gèrent mieux l'humidité des murs anciens. Sur un chalet de Vallouise, nous avons posé 28 cm de laine de chanvre, lin et coton et de fibre de bois dans les murs, et 32 cm en toiture.

### Q4. Peut-on garder la charpente d'origine d'une maison ancienne ?

> Souvent, oui. Une charpente ancienne se répare : remplacement de pièces, reprise des fermes, renfort par doublage, rallonge par un trait de Jupiter, un assemblage qui aboute deux pièces. Il faut l'examiner de près avant de décider. Si elle doit être déposée, ses pièces saines peuvent être triées, nettoyées et réemployées : c'est le rôle de 3B Récup', notre activité de réemploi du bois.

### Q5. Combien de temps dure la rénovation d'un chalet ?

> Cela dépend de l'état de la maison et de l'ampleur des travaux : refaire une toiture ou rénover toute l'enveloppe, ce n'est pas le même chantier. Le délai peut varier selon la complexité et la taille du projet ; nous vous fournirons un calendrier estimatif lors de notre première rencontre. En montagne, pensez aussi aux saisons : la mise hors d'eau se prévoit avant l'hiver.

### Q6. Existe-t-il des aides pour rénover une maison ancienne ?

> Oui, sous conditions. Certains travaux d'isolation et de menuiseries réalisés par un artisan RGE peuvent ouvrir droit à des aides publiques à la rénovation énergétique. 3B Charpente est qualifiée QUALIBAT-RGE pour l'isolation des murs, des toitures et des rampants, et pour les fenêtres et fenêtres de toit. Les règles changent souvent : vérifiez votre situation auprès de France Rénov' avant de signer.

---

## 5. Liens internes

| Texte du lien | Page visée | Emplacement |
|---|---|---|
| Rénovation de charpente et combles | `/renovation-charpente-combles/` | section 3.6 |
| Isolation de toiture par l'extérieur (sarking) | `/isolation-toiture-sarking/` | section 3.7 |
| Isolation biosourcée | `/isolation-biosourcee/` | section 3.8 |
| Isolation des murs par l'extérieur | `/isolation-murs-ite/` | section 3.8 |
| Escaliers bois sur mesure | `/escalier-bois-sur-mesure/` | section 3.10 |
| Balcons, terrasses et garde-corps | `/balcon-terrasse-abri-bois/` | section 3.10 |
| Découvrir 3B Récup' | `/3b-recup/` | section 3.11, FAQ Q4 (à lier) |
| Le bois de réemploi | `/3b-recup/bois-de-reemploi/` | section 3.11 |
| Voir le chantier en photos | `/realisations/renovation-et-isolation-d-un-chalet-a-vallouise/` | section 3.12 |
| Notre histoire | `/a-propos/` | section 3.14 |
| Demander mon devis | `/contact/` | appel à l'action final |
| Briançon, Prelles, L'Argentière-la-Bessée, Le Casset, Saint-Martin-de-Queyrières (noms de chantiers dans le texte, à lier) | fiches `/realisations/renovation-d-une-copropriete-a-briancon/`, `/realisations/renovation-d-une-maison-d-habitation-sur-la-commune-de-prelles/`, `/realisations/refection-d-une-charpente-a-l-argentiere-la-bessee/`, `/realisations/renovation-d-un-toit-en-bardeau-meleze-au-casset/`, `/realisations/renovation-energetique-et-ouverture-d-une-lucarne-a-saint-martin-de-queyriere/`, `/realisations/isolation-d-un-bati-ancien-par-l-interieur/`, `/realisations/renovation-d-une-maison-d-habitation-a-l-argentiere-la-bessee/` | sections 3.6 à 3.10 |
| Vallouise (chapô, à lier) | `/charpentier-vallouise-pays-des-ecrins/` | section 3.2 |
| Guide isolant biosourcé (phase 2) | `/conseils/isolant-biosource-montagne/` | section 3.8, quand il existe |
| Guide aides et artisan RGE (phase 2) | `/conseils/aides-renovation-artisan-rge/` | FAQ Q6 et étape 6 de 3.13, quand il existe |
| Guide réemploi du bois (phase 2) | `/conseils/reemploi-bois-construction/` | section 3.11, quand il existe |

**Liens entrants à prévoir :** depuis `/renovation-charpente-combles/` (section « Vos combles sont-ils aménageables ? »), `/isolation-biosourcee/`, `/isolation-murs-ite/`, `/charpentier-briancon/` (« rénovation chalet briançon »), `/charpentier-vallouise-pays-des-ecrins/`, et depuis la fiche réalisation du chalet de Vallouise.

---

## 6. Photos

**À utiliser (préfixe `https://3bcharpente.fr`) :**

- `/galeries/renovation-et-isolation-d-un-chalet-a-vallouise` (11 photos) : « Façade Sud et sa terrasse » (en-tête), « Façade Ouest avant les travaux », « Façade Nord et Ouest », « Dépassée Nord agrandie », « Terrasse en mélèze et ses assemblages traditionnels ».
- `/galeries/renovation-d-une-copropriete-a-briancon` : « Avant intervention », « Reprise des fermes », « Soufflage après découverture », « Recréation d'une dépassée de toiture », « Couverture ».
- `/galeries/renovation-d-une-maison-d-habitation-sur-la-commune-de-prelles` : « Batiment existant (1) », « Assemblage à blanc (1) », « Terrasse mélèze », « Batiment fini ».
- `/galeries/refection-d-une-charpente-a-l-argentiere-la-bessee` : « dépose de l'ancienne charpente », « levage des fermes ».
- `/galeries/renovation-d-un-toit-en-bardeau-meleze-au-casset` : « avant », « après ».
- `/galeries/isolation-d-un-bati-ancien-par-l-interieur` : « poutre en I », « pose de l'étanchéité à l'air », « insufflation de ouate de cellulose ».
- `/galeries/renovation-d-une-maison-d-habitation-a-l-argentiere-la-bessee` : « Existant », « Pignon vitré », « Bardage vieux bois », « Escalier balancé », « Garde corps en bois de réemploi ».
- `/galeries/creation-d-un-plancher-dans-un-bati-ancien` : « douglas et épicéa ».

**À demander à Jean :**

- un portrait (section 3.14) ;
- pour Vallouise : une photo pendant les travaux (isolation en cours de pose), pour illustrer l'étape 3 ;
- une photo de vieux bois trié à l'atelier, prêt à être réemployé (section 3.11) ;
- un schéma simple (même dessiné à la main) de l'ordre des travaux, à redessiner pour le site.

---

## 7. Points à valider avec Jean

1. **Signature :** Jean relit-il et signe-t-il le guide ? Si oui, faire pointer l'auteur du JSON-LD vers la `Person` de la page À propos (`https://3bcharpente.fr/a-propos/#jean-michel-tardy`) et retirer le placeholder de la ligne d'auteur.
2. **Ordre des travaux :** l'ordre proposé (structure, couverture, isolation, ouvertures, finitions) est-il celui que Jean recommande ? Y a-t-il une nuance qu'il veut ajouter (par exemple les menuiseries posées avant l'isolation par l'intérieur) ?
3. **Chalet de Vallouise :** ordre réel des travaux, durée, isolant précis des murs (marque ou composition) ; la page présente les travaux par poste, sans chronologie.
4. **Bâti ancien isolé par l'intérieur :** commune du chantier, et confirmation de la méthode lue sur les photos (doublage en poutres en I, OSB3, étanchéité à l'air, insufflation de ouate).
5. **Plancher en douglas et épicéa** (« Création d'un plancher dans un bâti ancien ») : commune, pour le citer avec un lieu.
6. **Diagnostic ressources :** 3B propose-t-il ce repérage aux particuliers ? (placeholder section 3.11).
7. **SIRET RGE :** la qualification est rattachée au SIRET 494 482 714 00024, les mentions légales indiquent 00016 ; à vérifier avant d'afficher RGE.
8. **Ventilation :** le guide dit qu'une maison étanche à l'air doit être ventilée ; 3B travaille-t-il avec un ventiliste qu'il recommande ? (facultatif).
9. **Date de publication** et page `/conseils/` : créer une page d'accueil des guides ? Sinon, garder « Conseils » en texte simple dans le fil d'Ariane.
