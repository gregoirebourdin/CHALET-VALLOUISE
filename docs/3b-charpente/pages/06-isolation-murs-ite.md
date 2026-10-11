# Fiche page 06 — Isolation des murs : ITE et bâti ancien

> **Adresse :** `/isolation-murs-ite/` · **Phase :** 1 · **Type :** page de prestation, rattachée à la page pilier `/isolation-biosourcee/` (04).
> **Sources :** `00-brief.md` (faits vérifiés, textes validés, règles SEO et GEO) et `realisations-source.md`. Tout fait propre à 3B Charpente vient de ces deux fichiers. Ce qui manque est signalé `[À VALIDER AVEC JEAN : …]` et doit rester visible tant que Jean n'a pas répondu.
> **Conventions :** dans les titres, les mots entre `**` passent en vert accent (#336233), ou en vert sauge (#A3D2A3) sur fond sombre. Les lignes en italique qui commencent par un tiret (*Rôle*, *Composant*, *Photo*, *Note*) sont des consignes : elles ne se publient pas. Tout le reste est du texte prêt à coller.

---

## 1. Carte d'identité

- **Adresse :** `https://3bcharpente.fr/isolation-murs-ite/`
- **Objectif de la page :**
  - se positionner sur « isolation par l'extérieur », la plus grosse requête de la thématique, avec une offre précise : fibre de bois, puis bardage bois ou enduit ;
  - traiter le cas du bâti ancien isolé par l'intérieur (ouate insufflée, poutres en I), où 3B a un chantier documenté ;
  - expliquer l'étanchéité à l'air, deuxième mot-clé de la page ;
  - couvrir le domaine RGE « fenêtres, volets, portes donnant sur l'extérieur » ;
  - générer des demandes de devis.
- **Visiteurs visés :**
  - propriétaires de maisons des années 1960 à 1990 et de chalets qui veulent isoler et refaire leur façade ;
  - propriétaires de maisons anciennes en pierre (maisons de pays, granges) qui cherchent une isolation compatible avec leurs murs ;
  - personnes qui veulent changer leurs fenêtres et se demandent s'il faut isoler en même temps.
- **Mot-clé principal :** isolation par l'extérieur (10 800 recherches par mois).
- **Mots-clés secondaires :**
  - étanchéité à l'air (320) ;
  - variantes à placer naturellement : ITE, isolation thermique par l'extérieur, isolation des murs, isolation fibre de bois, bardage bois, enduit sur fibre de bois, isolation par l'intérieur, bâti ancien ;
  - longue traîne locale, non mesurée : isolation par l'extérieur hautes alpes, ITE briançon, isolation maison ancienne hautes alpes.
- **Intention de recherche :** information (qu'est-ce que l'ITE, extérieur ou intérieur, quelle finition) qui débouche sur une recherche d'entreprise locale RGE.
- **Pages liées :**
  - page pilier : `/isolation-biosourcee/` (04) ;
  - prestations proches : `/isolation-toiture-sarking/` (05) et `/maison-ossature-bois/` (07) ;
  - guides : `/conseils/isolant-biosource-montagne/` (23), `/conseils/aides-renovation-artisan-rge/` (26), `/conseils/renover-chalet-maison-ancienne/` (25) ;
  - `/3b-recup/` et `/3b-recup/bois-de-reemploi/`, trois fiches réalisations, `/contact/`.

---

## 2. SEO

- **Balise title** (59 caractères) : `Isolation par l'extérieur (ITE) Hautes-Alpes | 3B Charpente`
- **Meta description** (155 caractères) : `Isolation des murs par l'extérieur en fibre de bois, bardage mélèze ou enduit, et bâti ancien isolé en ouate. Charpentier RGE dans les Hautes-Alpes. Devis.`
- **H1 :** Isolation des murs par l'extérieur (ITE) et du bâti ancien dans les Hautes-Alpes
- **URL canonique :** `https://3bcharpente.fr/isolation-murs-ite/`
- **Fil d'Ariane visible :** Accueil › Isolation biosourcée › Isolation des murs

### Données structurées (JSON-LD)

*Le `@id` `https://3bcharpente.fr/#entreprise` doit être celui du LocalBusiness déclaré sur tout le site (fiche 01).*

**Service**

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://3bcharpente.fr/isolation-murs-ite/#service",
  "name": "Isolation des murs par l'extérieur (ITE) et du bâti ancien",
  "serviceType": "Isolation thermique des murs par l'extérieur et par l'intérieur",
  "description": "Isolation thermique par l'extérieur (ITE) en panneaux de fibre de bois, finie par un bardage bois ou un enduit, isolation du bâti ancien par l'intérieur avec de la ouate de cellulose insufflée, étanchéité à l'air et pose de menuiseries extérieures, par un charpentier qualifié QUALIBAT-RGE à L'Argentière-la-Bessée.",
  "url": "https://3bcharpente.fr/isolation-murs-ite/",
  "provider": { "@id": "https://3bcharpente.fr/#entreprise" },
  "isRelatedTo": { "@id": "https://3bcharpente.fr/isolation-biosourcee/#service" },
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
  "@id": "https://3bcharpente.fr/isolation-murs-ite/#faq",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Isolation par l'extérieur ou par l'intérieur : que choisir ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "L'isolation par l'extérieur (ITE) traite mieux les ponts thermiques, ne prend pas de place dans les pièces et rénove la façade. Elle demande un accord de la mairie et des débords de toit suffisants. L'isolation par l'intérieur convient quand la façade doit être conservée ou que l'ITE est impossible. Dans un mur ancien, elle se conçoit avec des isolants qui gèrent l'humidité."
      }
    },
    {
      "@type": "Question",
      "name": "Quel isolant pour une isolation par l'extérieur en montagne ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nous utilisons des panneaux de fibre de bois, un isolant biosourcé qui reçoit un bardage ou, pour certains panneaux, un enduit. Sa densité aide aussi au confort d'été. Sur un chalet de Vallouise, les murs ont reçu 28 cm de laine de chanvre/lin/coton et de fibre de bois, avec un bardage en mélèze d'un côté et un enduit sur fibre de bois de l'autre."
      }
    },
    {
      "@type": "Question",
      "name": "Qu'est-ce que l'étanchéité à l'air d'une maison ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "C'est une couche continue, membrane ou panneaux aux joints collés, qui empêche l'air de traverser les murs et la toiture. Elle évite les courants d'air, protège l'isolant de la vapeur d'eau qui pourrait condenser dans la paroi et lui permet d'isoler vraiment. Elle ne remplace pas la ventilation et se distingue de l'étanchéité à l'eau, qui protège de la pluie."
      }
    },
    {
      "@type": "Question",
      "name": "Faut-il une autorisation pour isoler ses murs par l'extérieur ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "En général, oui. Une ITE modifie l'aspect extérieur de la maison : une déclaration préalable de travaux est le plus souvent demandée en mairie, et le plan local d'urbanisme peut encadrer les matériaux, les teintes ou les débords. Dans certains secteurs protégés, d'autres avis s'ajoutent. Renseignez-vous en mairie avant de fixer le calendrier des travaux."
      }
    },
    {
      "@type": "Question",
      "name": "Peut-on isoler un mur en pierre par l'intérieur ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oui, avec précaution : un mur en pierre doit pouvoir sécher. On choisit des isolants biosourcés capables de gérer l'humidité, avec une étanchéité à l'air continue côté pièce et un frein-vapeur adapté. Sur un bâti ancien, nous avons ainsi monté une ossature en poutres en I, posé l'étanchéité à l'air et insufflé de la ouate de cellulose dans les caissons."
      }
    },
    {
      "@type": "Question",
      "name": "Faut-il changer les fenêtres en même temps que l'isolation des murs ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "C'est souvent le bon moment. La position de la fenêtre dans le mur, son raccord à l'isolant et à l'étanchéité à l'air comptent autant que la fenêtre elle-même. En traitant les deux ensemble, on évite un pont thermique tout autour de l'ouverture. Les fenêtres, volets et portes donnant sur l'extérieur font partie de nos domaines RGE."
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
    { "@type": "ListItem", "position": 2, "name": "Isolation biosourcée", "item": "https://3bcharpente.fr/isolation-biosourcee/" },
    { "@type": "ListItem", "position": 3, "name": "Isolation des murs", "item": "https://3bcharpente.fr/isolation-murs-ite/" }
  ]
}
```

### Textes alternatifs des images clés

| Emplacement | Photo source (dossier · légende d'origine) | Nom de fichier | Texte alternatif |
|---|---|---|---|
| Héros | `/galeries/renovation-et-isolation-d-un-chalet-a-vallouise` · « Façade Nord et Ouest » | `chalet-isole-bardage-meleze-enduit-vallouise.webp` | Façades nord et ouest d'un chalet des années 1980 isolé en fibre de bois et laines végétales à Vallouise, après rénovation |
| Finitions | `/galeries/maison-a-ossature-bois-dans-les-monts-du-lyonnais` · « Fibre de bois sur l'ossature bois » | `panneaux-fibre-de-bois-ossature-monts-du-lyonnais.webp` | Panneaux de fibre de bois posés côté extérieur sur une ossature bois, maison neuve dans les monts du Lyonnais |
| Bâti ancien | `/galeries/isolation-d-un-bati-ancien-par-l-interieur` · « poutre en I » | `ossature-poutres-en-i-isolation-bati-ancien.webp` | Ossature en poutres en I montée contre un mur ancien avant l'insufflation de ouate de cellulose |
| Bâti ancien (bis) | `/galeries/isolation-d-un-bati-ancien-par-l-interieur` · « insufflation de ouate de cellulose » | `insufflation-ouate-cellulose-mur-bati-ancien.webp` | Insufflation de ouate de cellulose dans les caissons d'une ossature, isolation d'un bâti ancien par l'intérieur |
| Étanchéité à l'air | `/galeries/isolation-d-un-bati-ancien-par-l-interieur` · « pose de l'étanchéité à l'air » | `pose-membrane-etancheite-air-bati-ancien.webp` | Pose de la membrane d'étanchéité à l'air sur l'ossature d'un bâti ancien isolé par l'intérieur |
| Menuiseries | `/galeries/isolation-d-un-bati-ancien-par-l-interieur` · « encadrement » | `encadrement-fenetre-isolation-bati-ancien.webp` | Encadrement d'une ouverture raccordé à l'isolation d'un bâti ancien par l'intérieur |

---

## 3. Sections dans l'ordre

### 3.1 Héros

- *Rôle :* poser le sujet (isolation des murs, ITE, bâti ancien), le lieu et la promesse, avec deux preuves.
- *Composant Framer :* héros de la maquette (titre en deux couleurs, texte avec mots forts en gras, bouton plein vert, bouton contour, deux preuves avec pastille sauge). Fil d'Ariane au-dessus du titre, en petit, couleur pierre.
- *Photo :* chalet de Vallouise après travaux (voir tableau des textes alternatifs).

**Fil d'Ariane :** Accueil › Isolation biosourcée › Isolation des murs

**Kicker :** Isolation des murs · Qualifié RGE

**H1 :** Isolation des murs **par l'extérieur** (ITE) et du **bâti ancien** dans les Hautes-Alpes

**Texte :** Des murs froids, des courants d'air, une façade à refaire ? 3B Charpente, charpentier à L'Argentière-la-Bessée depuis 2007, isole les murs des maisons et des chalets avec des **isolants biosourcés**, issus du bois ou de plantes. Par l'extérieur, avec un manteau de fibre de bois fini par un **bardage bois ou un enduit**. Par l'intérieur, quand la façade doit rester telle qu'elle est. Avec, à chaque fois, une **étanchéité à l'air** soignée : la couche qui empêche l'air de traverser les murs.

**Bouton plein :** Demander mon devis → `/contact/`

**Bouton contour :** Voir l'isolation d'un bâti ancien → `/realisations/isolation-d-un-bati-ancien-par-l-interieur/`

**Preuves (pastilles sauge) :** Qualifié RGE murs et menuiseries · Charpentiers depuis 2007

**Légende photo :** Chalet des années 1980 à Vallouise : 28 cm de laine de chanvre/lin/coton et de fibre de bois dans les murs.

### 3.2 En bref

- *Rôle :* réponse directe et autonome, reprenable par les moteurs et les assistants IA.
- *Composant :* nouveau. Encadré pleine largeur sur fond de section clair (#F2F2EC), filet vertical vert accent, texte Inter. Juste sous le héros.

> **En bref.** 3B Charpente, charpentier qualifié RGE à L'Argentière-la-Bessée, isole les murs des maisons des Hautes-Alpes. Par l'extérieur (ITE, isolation thermique par l'extérieur) : panneaux de fibre de bois, puis bardage en mélèze ou enduit. Par l'intérieur, pour le bâti ancien : ossature en poutres en I et ouate de cellulose insufflée. L'étanchéité à l'air est traitée à chaque fois.

### 3.3 L'ITE, un manteau isolant

- *Rôle :* définir l'ITE, dire ce qu'elle change, et les deux points propres à la montagne (débords de toit, démarches).
- *Composant Framer :* bloc manifeste (titre à gauche, texte à droite), avec une liste à coches vert accent.
- *Note de réécriture :* reprend le texte validé « Isolation globale » (« créez une enveloppe isolante continue (ITE)… en utilisant des matériaux biosourcés »), recentré sur les murs.

**Kicker :** Isolation par l'extérieur

**H2 :** L'ITE, un **manteau isolant** autour de la maison

**Texte :**

L'ITE, pour isolation thermique par l'extérieur, consiste à poser l'isolant sur la face extérieure des murs, puis à le protéger par un parement : un bardage bois ou un enduit. Le mur existant se retrouve à l'intérieur de l'enveloppe isolante, au chaud. C'est la façon la plus directe de créer une enveloppe isolante continue.

Ce que ça change :

- **moins de ponts thermiques** : l'isolant passe devant les planchers et les murs de refend, sans interruption ;
- **aucune surface perdue** à l'intérieur, et peu de travaux dans les pièces ;
- **un meilleur confort d'été** : les murs maçonnés, restés côté intérieur, amortissent les variations de température ;
- **une façade neuve** : l'isolation et le ravalement se font en une fois.

Selon le mur, les panneaux de fibre de bois sont fixés directement sur la maçonnerie, ou posés sur une ossature bois rapportée, garnie d'isolant souple. Plus dense que beaucoup d'isolants, la fibre de bois aide aussi à garder la fraîcheur l'été.

**En montagne, deux points à anticiper.** D'abord, l'épaisseur ajoutée doit rester à l'abri sous les débords de toit, qu'on appelle ici les dépassées : il faut parfois les prolonger. Sur le chalet de Vallouise, la dépassée nord a été agrandie. Ensuite, une ITE change l'aspect de la façade : une déclaration préalable de travaux est en général nécessaire en mairie.

**Légende photo :** Dépassée nord agrandie sur un chalet rénové et isolé à Vallouise.

### 3.4 Deux finitions : bardage bois ou enduit

- *Rôle :* montrer les deux parements proposés, avec les essences réellement posées par 3B.
- *Composant Framer :* deux cartes de services blanches côte à côte, photo en tête de carte, icône dans une pastille sauge.

**Kicker :** Finitions de façade

**H2 :** Bardage bois **ou enduit** sur fibre de bois

**Carte 1 — Bardage bois**

Le bardage se pose sur des tasseaux qui laissent une lame d'air ventilée derrière les lames : la façade sèche vite après la pluie ou la neige. Notre bois est principalement du mélèze et du sapin des Hautes-Alpes, sciés par notre partenaire local, la Scierie Savoldelli. Sur nos chantiers, on trouve du bardage en mélèze, en pin, en douglas, et même en vieux bois de réemploi.

**Carte 2 — Enduit sur fibre de bois**

Certains panneaux de fibre de bois sont conçus pour recevoir directement un enduit, appliqué en plusieurs couches avec une trame d'armature. La façade garde un aspect minéral, proche de celui des maisons de pays, tout en étant isolée par un matériau biosourcé.

**Texte sous les cartes :** Sur le chalet de Vallouise, les deux finitions se répondent : une partie de l'extérieur est habillée de bardage en mélèze, l'autre est enduite sur une fibre de bois.

**Lien texte :** Voir le chalet de Vallouise → `/realisations/renovation-et-isolation-d-un-chalet-a-vallouise/`

### 3.5 Bâti ancien : isoler par l'intérieur

- *Rôle :* traiter le bâti ancien avec prudence (murs qui doivent sécher) et décrire le chantier documenté de 3B, sans inventer l'ordre exact des étapes ni la commune.
- *Composant Framer :* bloc texte et collage photo (deux vignettes qui débordent : « poutre en I » et « insufflation de ouate de cellulose »).

**Kicker :** Bâti ancien

**H2 :** Isoler un bâti ancien **par l'intérieur**

**Texte :**

L'isolation par l'extérieur n'est pas toujours possible : façade en pierre à préserver, maison mitoyenne, limite de propriété, règles d'urbanisme. On isole alors les murs par l'intérieur, un domaine de notre qualification RGE.

Un mur ancien en pierre doit pouvoir sécher. Une isolation par l'intérieur mal conçue peut piéger l'humidité dans la maçonnerie. Nous utilisons des isolants biosourcés, capables d'absorber puis de restituer une partie de l'humidité, et une étanchéité à l'air continue côté pièce, souvent avec une membrane dite frein-vapeur, qui limite le passage de la vapeur tout en laissant le mur sécher.

Sur notre chantier « Isolation d'un bâti ancien par l'intérieur », la technique se lit dans les photos :

- **une ossature en poutres en I** : des poutres légères en forme de I, faites de deux semelles en bois reliées par une âme mince. Elles créent des caissons profonds avec très peu de bois, donc peu de ponts thermiques ;
- **des panneaux OSB3**, faits de grandes lamelles de bois collées, adaptés aux ambiances humides ;
- **la pose de l'étanchéité à l'air** ;
- **l'insufflation de ouate de cellulose** : l'isolant en vrac est envoyé sous pression dans le caisson fermé, qu'il remplit sans laisser de vide ;
- **le doublage, les encadrements des ouvertures, de nouvelles menuiseries et un bardage en pin.**

Reste à traiter les planchers et les murs de refend qui touchent la façade : ce sont des ponts thermiques que l'isolation par l'intérieur ne coupe pas d'elle-même. Ils se traitent au cas par cas.

**Bouton contour :** Voir le chantier en photos → `/realisations/isolation-d-un-bati-ancien-par-l-interieur/`

**Lien texte :** Rénover une maison ancienne en montagne : notre guide → `/conseils/renover-chalet-maison-ancienne/`

### 3.6 L'étanchéité à l'air

- *Rôle :* définir l'étanchéité à l'air (mot-clé secondaire), la distinguer de l'étanchéité à l'eau et de la ventilation, et montrer qu'elle apparaît sur plusieurs chantiers.
- *Composant Framer :* section plein cadre « forêt » sombre, titre blanc, mots en sauge, liste à puces en blanc.

**Kicker :** Étanchéité à l'air

**H2 :** L'étanchéité à l'air, **la couche qu'on ne voit pas**

**Texte :**

L'étanchéité à l'air, c'est une couche continue qui empêche l'air intérieur de traverser les parois. On la réalise avec une membrane, ou avec des panneaux dont les joints sont collés à l'adhésif, et des manchettes autour des gaines et des tuyaux qui traversent. Elle ne se confond pas avec l'étanchéité à l'eau, qui protège de la pluie côté extérieur. Elle ne remplace pas non plus la ventilation : une maison bien étanche doit être bien ventilée.

Pourquoi elle compte :

- **le confort** : moins de courants d'air froids, surtout par grand vent ;
- **la durée de vie** : l'air chaud de la maison transporte de la vapeur d'eau ; s'il traverse l'isolant, cette vapeur peut condenser dans le mur froid ;
- **la performance** : un isolant traversé par l'air isole moins bien.

On la retrouve sur nos chantiers : pose de l'étanchéité à l'air sur le bâti ancien isolé par l'intérieur, étanchéité à l'air de la toiture ancienne de L'Argentière-la-Bessée, et panneaux trois plis en épicéa pour le contreventement et l'étanchéité à l'air de la toiture d'une surélévation à Briançon.

Une mesure de perméabilité à l'air (test d'infiltrométrie), réalisée par un opérateur spécialisé, permet de vérifier le résultat.

### 3.7 Menuiseries extérieures

- *Rôle :* couvrir le domaine RGE « fenêtres, volets, portes donnant sur l'extérieur » et l'enjeu du raccord fenêtre-isolant. Ancre `#menuiseries` (cible des liens des pages 04 et 26).
- *Composant Framer :* carte blanche large, photo à gauche, icône dans une pastille sauge.

**Kicker :** Menuiseries extérieures

**H2 :** Fenêtres, volets, portes : **raccorder les ouvertures**

**Texte :**

Changer les fenêtres sans isoler les murs, ou isoler les murs sans s'occuper des fenêtres, laisse des points faibles. Les deux se pensent ensemble : la position de la fenêtre dans l'épaisseur du mur, son raccord à l'isolant et à l'étanchéité à l'air comptent autant que la fenêtre elle-même.

Avec une ITE, on avance souvent la fenêtre vers l'isolant, ou on prolonge l'isolant sur les côtés de l'ouverture, pour éviter un pont thermique tout autour. Par l'intérieur, l'encadrement fait le lien entre la menuiserie, l'ossature et la membrane.

« Fenêtres, volets, portes donnant sur l'extérieur » fait partie de nos domaines RGE. Sur le bâti ancien isolé par l'intérieur, le chantier a compris les encadrements des ouvertures et de nouvelles menuiseries.

`[À VALIDER AVEC JEAN : types de menuiseries proposées (bois, bois-aluminium…), fabricant ou atelier, et volets ou portes déjà posés]`

**Légende photo :** Encadrement d'une ouverture, raccordé à l'isolation d'un bâti ancien.

### 3.8 Réalisations

- *Rôle :* prouver par de vrais chantiers, avec commune et technique.
- *Composant Framer :* cartes de réalisations avec l'étiquette « 3B Charpente » posée sur la photo et le lien « Voir les travaux → ».

**Kicker :** Nos chantiers de murs

**H2 :** Des murs isolés **en photos**

**Carte 1 — Isolation d'un bâti ancien par l'intérieur**

Poutres en I, panneaux OSB3, étanchéité à l'air, ouate de cellulose insufflée, encadrements, menuiseries et bardage en pin. Commune : `[À VALIDER AVEC JEAN : commune du chantier]`

**Lien :** Voir les travaux → `/realisations/isolation-d-un-bati-ancien-par-l-interieur/`

**Carte 2 — Rénovation et isolation d'un chalet à Vallouise**

Chalet des années 1980 entièrement rénové : 28 cm de laine de chanvre/lin/coton et de fibre de bois dans les murs, bardage en mélèze et enduit sur fibre de bois, ouvertures créées ou modifiées.

**Lien :** Voir les travaux → `/realisations/renovation-et-isolation-d-un-chalet-a-vallouise/`

**Carte 3 — Maison à ossature bois dans les monts du Lyonnais**

Construction neuve : fibre de bois sur l'ossature bois, bardage en douglas, support maçonné en pierres récupérées.

**Lien :** Voir les travaux → `/realisations/maison-a-ossature-bois-dans-les-monts-du-lyonnais/`

**Ligne « Voir aussi » :** Rénovation d'une maison d'habitation à L'Argentière-la-Bessée (bardage en vieux bois, pignon vitré) → `/realisations/renovation-d-une-maison-d-habitation-a-l-argentiere-la-bessee/`

### 3.9 Aides et RGE

- *Rôle :* rappel court de la qualification et de la formule autorisée sur les aides. Aucun montant, aucune règle d'éligibilité.
- *Composant Framer :* bandeau étroit sur fond de section clair, icône dans une pastille sauge, un bouton.

**Kicker :** Aides et RGE

**H2 :** Isolation des murs : **les aides**

**Texte :** 3B Charpente est qualifié QUALIBAT-RGE pour l'isolation des murs par l'extérieur, l'isolation par l'intérieur des murs, et les fenêtres, volets et portes donnant sur l'extérieur. Ce label ouvre l'accès aux aides publiques à la rénovation énergétique, sous conditions. Les règles changent chaque année : faites le point avec un conseiller France Rénov' (france-renov.gouv.fr) avant de signer un devis.

**Bouton contour :** Notre guide des aides avec un artisan RGE → `/conseils/aides-renovation-artisan-rge/`

### 3.10 3B Récup'

- *Rôle :* relier la façade au réemploi (bardage vieux bois) et lier `/3b-recup/`.
- *Composant Framer :* bandeau d'appel à l'action vert forêt, formes organiques vert clair en fond, photo à droite.

**Kicker :** 3B Récup'

**H2 :** Un bardage **en vieux bois** ?

**Texte :** Sur une maison rénovée à L'Argentière-la-Bessée, nous avons posé un bardage en vieux bois et un garde-corps en bois de réemploi. Ce bois vient de la déconstruction : avec 3B Récup', notre initiative dédiée au réemploi, il est trié, nettoyé et usiné dans nos ateliers avant d'être reposé. Une façade isolée peut aussi raconter une histoire.

**Bouton plein :** Découvrir 3B Récup' → `/3b-recup/`

**Bouton contour :** Le bois de réemploi → `/3b-recup/bois-de-reemploi/`

### 3.11 FAQ

- *Rôle :* répondre aux questions telles qu'on les tape ; balisage FAQPage.
- *Composant Framer :* FAQ en accordéon dans des cartes blanches.

**Kicker :** Questions fréquentes

**H2 :** Vos questions sur **l'isolation des murs**

*(Questions et réponses : voir section 4, à reprendre mot pour mot.)*

### 3.12 Appel à l'action final

- *Rôle :* conclure vers le devis, avec les coordonnées identiques au caractère près, et un lien retour vers la page pilier.
- *Composant Framer :* bandeau d'appel à l'action vert forêt avec la grille ronde translucide.
- *Note de réécriture :* reprend l'appel validé (« chaque projet chez 3B Charpente débute par une étude sur mesure ») et la FAQ validée « Sur mesure » (« Chaque projet est unique »).

**Kicker :** Votre façade

**H2 :** Des murs à isoler, **une façade à refaire** ?

**Texte :** Chaque projet est unique, et chaque projet chez 3B Charpente débute par une étude sur mesure. Nous venons voir vos murs, nous vous expliquons les options, par l'extérieur ou par l'intérieur, et nous vous proposons un devis détaillé.

**Bouton plein :** Demander mon devis → `/contact/`

**Bouton contour :** Appeler le 06 34 67 31 49 → `tel:+33634673149`

**Lien texte :** Toutes nos solutions d'isolation biosourcée → `/isolation-biosourcee/`

**Coordonnées :** 3B Charpente, 5 rue Saint-Michel, 05120 L'Argentière-la-Bessée, 06 34 67 31 49

---

## 4. FAQ

### Q1. Isolation par l'extérieur ou par l'intérieur : que choisir ?

L'isolation par l'extérieur (ITE) traite mieux les ponts thermiques, ne prend pas de place dans les pièces et rénove la façade. Elle demande un accord de la mairie et des débords de toit suffisants. L'isolation par l'intérieur convient quand la façade doit être conservée ou que l'ITE est impossible. Dans un mur ancien, elle se conçoit avec des isolants qui gèrent l'humidité.

### Q2. Quel isolant pour une isolation par l'extérieur en montagne ?

Nous utilisons des panneaux de fibre de bois, un isolant biosourcé qui reçoit un bardage ou, pour certains panneaux, un enduit. Sa densité aide aussi au confort d'été. Sur un chalet de Vallouise, les murs ont reçu 28 cm de laine de chanvre/lin/coton et de fibre de bois, avec un bardage en mélèze d'un côté et un enduit sur fibre de bois de l'autre.

### Q3. Qu'est-ce que l'étanchéité à l'air d'une maison ?

C'est une couche continue, membrane ou panneaux aux joints collés, qui empêche l'air de traverser les murs et la toiture. Elle évite les courants d'air, protège l'isolant de la vapeur d'eau qui pourrait condenser dans la paroi et lui permet d'isoler vraiment. Elle ne remplace pas la ventilation et se distingue de l'étanchéité à l'eau, qui protège de la pluie.

### Q4. Faut-il une autorisation pour isoler ses murs par l'extérieur ?

En général, oui. Une ITE modifie l'aspect extérieur de la maison : une déclaration préalable de travaux est le plus souvent demandée en mairie, et le plan local d'urbanisme peut encadrer les matériaux, les teintes ou les débords. Dans certains secteurs protégés, d'autres avis s'ajoutent. Renseignez-vous en mairie avant de fixer le calendrier des travaux.

### Q5. Peut-on isoler un mur en pierre par l'intérieur ?

Oui, avec précaution : un mur en pierre doit pouvoir sécher. On choisit des isolants biosourcés capables de gérer l'humidité, avec une étanchéité à l'air continue côté pièce et un frein-vapeur adapté. Sur un bâti ancien, nous avons ainsi monté une ossature en poutres en I, posé l'étanchéité à l'air et insufflé de la ouate de cellulose dans les caissons.

### Q6. Faut-il changer les fenêtres en même temps que l'isolation des murs ?

C'est souvent le bon moment. La position de la fenêtre dans le mur, son raccord à l'isolant et à l'étanchéité à l'air comptent autant que la fenêtre elle-même. En traitant les deux ensemble, on évite un pont thermique tout autour de l'ouverture. Les fenêtres, volets et portes donnant sur l'extérieur font partie de nos domaines RGE.

---

## 5. Liens internes

| Texte du lien (ancre) | Page visée | Emplacement |
|---|---|---|
| Isolation biosourcée (fil d'Ariane) | `/isolation-biosourcee/` | Haut de page |
| Demander mon devis | `/contact/` | Héros, appel final |
| Voir l'isolation d'un bâti ancien | `/realisations/isolation-d-un-bati-ancien-par-l-interieur/` | Héros |
| Voir le chalet de Vallouise | `/realisations/renovation-et-isolation-d-un-chalet-a-vallouise/` | Section 3.4 |
| Voir le chantier en photos | `/realisations/isolation-d-un-bati-ancien-par-l-interieur/` | Section 3.5 |
| Rénover une maison ancienne en montagne : notre guide | `/conseils/renover-chalet-maison-ancienne/` | Section 3.5 |
| Voir les travaux (× 3) | trois fiches réalisations | Section 3.8 |
| Rénovation d'une maison d'habitation à L'Argentière-la-Bessée | `/realisations/renovation-d-une-maison-d-habitation-a-l-argentiere-la-bessee/` | « Voir aussi » (3.8) |
| Notre guide des aides avec un artisan RGE | `/conseils/aides-renovation-artisan-rge/` | Section 3.9 |
| Découvrir 3B Récup' | `/3b-recup/` | Bandeau 3.10 |
| Le bois de réemploi | `/3b-recup/bois-de-reemploi/` | Bandeau 3.10 |
| Toutes nos solutions d'isolation biosourcée | `/isolation-biosourcee/` | Appel final |
| Isolation de toiture et sarking | `/isolation-toiture-sarking/` | Bloc « Prestations proches », prestation proche n° 1 |
| Maison ossature bois | `/maison-ossature-bois/` | Bloc « Prestations proches », prestation proche n° 2 |
| Quel isolant biosourcé choisir en montagne ? | `/conseils/isolant-biosource-montagne/` | Bloc « Pour aller plus loin » |

**Bloc « Prestations proches » (pied de contenu, avant le pied de page) :** deux cartes « Isolation de toiture et sarking » → `/isolation-toiture-sarking/` et « Maison ossature bois » → `/maison-ossature-bois/` (même principe : fibre de bois côté extérieur, bardage bois).

**Liens entrants à prévoir :** page pilier 04 (carte B et carte C, ancre `#menuiseries`), page 07 (maison ossature bois), guides 23, 25 et 26, fiches réalisations « bâti ancien », Vallouise et monts du Lyonnais.

---

## 6. Photos

### Photos à utiliser (galerie actuelle)

| Section | Dossier | Photo (légende d'origine) |
|---|---|---|
| Héros | `/galeries/renovation-et-isolation-d-un-chalet-a-vallouise` | « Façade Nord et Ouest » |
| 3.3 ITE (avant / après) | `/galeries/renovation-et-isolation-d-un-chalet-a-vallouise` | « Façade Ouest avant les travaux » et « Façade Nord et Ouest » |
| 3.3 ITE (dépassée) | `/galeries/renovation-et-isolation-d-un-chalet-a-vallouise` | « Dépassée Nord agrandie » ou « Dépassée Nord en détail » |
| 3.4 Carte bardage | `/galeries/refection-d-une-charpente-a-l-argentiere-la-bessee` | « pose du bardage mélèze » |
| 3.4 Carte enduit | `/galeries/renovation-et-isolation-d-un-chalet-a-vallouise` | photo où la partie enduite est visible, à repérer parmi « Façade Sud et sa terrasse » ou « Facade Sud et Est » |
| 3.4 Variante | `/galeries/maison-a-ossature-bois-dans-les-monts-du-lyonnais` | « Fibre de bois sur l'ossature bois », « Bardage en douglas » |
| 3.5 Bâti ancien | `/galeries/isolation-d-un-bati-ancien-par-l-interieur` | « poutre en I », « insufflation de ouate de cellulose », « panneaux OSB3 », « avant les travaux » |
| 3.6 Étanchéité à l'air | `/galeries/isolation-d-un-bati-ancien-par-l-interieur` | « pose de l'étanchéité à l'air » |
| 3.6 Étanchéité à l'air (bis) | `/galeries/surelevation-en-ossature-bois-d-une-maison-a-briancon` | « 1panneau trois plis épicéa pour le contreventement et l'étanchéité à l'air de la toiture » |
| 3.7 Menuiseries | `/galeries/isolation-d-un-bati-ancien-par-l-interieur` | « encadrement », « menuiseries livrées! » |
| 3.8 Cartes | dossiers des trois réalisations | « bardage posé » (bâti ancien), « Façade Nord et Ouest » (Vallouise), « Bardage en douglas » (monts du Lyonnais) |
| 3.10 3B Récup' | `/galeries/renovation-d-une-maison-d-habitation-a-l-argentiere-la-bessee` | « Bardage vieux bois » |

### Photos à demander à Jean

1. **Une ITE en cours sur une maison existante** : panneaux de fibre de bois fixés sur une maçonnerie, avant bardage ou enduit. C'est la photo qui manque le plus à cette page (la seule vue de fibre de bois en façade est une construction neuve).
2. Un détail de bardage : tasseaux, lame d'air, grille anti-rongeurs en pied, angle de façade.
3. Un enduit sur fibre de bois en cours d'application ou en gros plan, et le nom du façadier s'il n'est pas de 3B.
4. Un détail d'étanchéité à l'air : adhésifs, manchette autour d'une gaine, raccord à une fenêtre.
5. Une fenêtre posée dans une ITE, vue de l'extérieur, avec son retour d'isolant.
6. Le mur du bâti ancien avant travaux, côté intérieur (pierre visible), pour illustrer la section 3.5.

---

## 7. Points à valider avec Jean

1. **Chantier « Isolation d'un bâti ancien par l'intérieur » :** commune, nature du mur (pierre ?), épaisseur de ouate insufflée, rôle exact des panneaux OSB3, et emplacement du bardage en pin (intérieur ou extérieur). La page décrit les photos sans en déduire l'ordre des étapes.
2. **Menuiseries :** 3B fournit-il et pose-t-il lui-même fenêtres, volets et portes ? En quels matériaux, avec quel fabricant ? La galerie montre « menuiseries livrées! » sans plus de détail.
3. **Enduit sur fibre de bois :** réalisé par 3B ou par un façadier partenaire ? Quel système d'enduit ?
4. **Chalet de Vallouise :** quelles façades sont en bardage mélèze, lesquelles en enduit ? L'agrandissement de la dépassée nord est-il lié à l'isolation par l'extérieur (la page les rapproche dans la même phrase) ? L'isolation des murs y est-elle par l'extérieur ?
5. **ITE sur maçonnerie :** 3B a-t-il déjà posé une ITE sur une maison existante (hors Vallouise) ? Une réalisation de ce type renforcerait beaucoup la page.
6. **Test d'infiltrométrie :** 3B en propose-t-il ou en fait-il réaliser ? La page cite le test de façon générale, sans engagement.
7. **Démarches en mairie :** 3B aide-t-il à préparer la déclaration préalable (plans, choix de teinte) ?
8. **Essences de bardage :** le pin et le douglas viennent-ils aussi de la Scierie Savoldelli ? La page dit seulement que le bois est « principalement » mélèze et sapin des Hautes-Alpes.
9. **SIRET de la qualification RGE** (00024 dans l'annuaire, 00016 dans les mentions légales) et **certificat QUALIBAT** (numéro, date de fin de validité) : voir fiche 04.
