# Fiche page 26 — Guide : aides à la rénovation avec un artisan RGE

> **Adresse :** `/conseils/aides-renovation-artisan-rge/` · **Phase :** 2 · **Type :** guide (article de conseil), rattaché à la page pilier `/isolation-biosourcee/` (04).
> **Sources :** `00-brief.md` (faits vérifiés, dont les domaines RGE exacts et la date de rattachement, règles SEO et GEO) et `realisations-source.md`. Tout fait propre à 3B Charpente vient de ces deux fichiers. Ce qui manque est signalé `[À VALIDER AVEC JEAN : …]` et doit rester visible tant que Jean n'a pas répondu.
> **Règle propre à cette page :** aucun montant, aucun plafond de ressources, aucune règle d'éligibilité. Les aides sont nommées, présentées comme existant « sous conditions », et le lecteur est renvoyé vers France Rénov' (france-renov.gouv.fr) et vers la rencontre pour le devis. À relire chaque année : les noms des dispositifs peuvent aussi changer.
> **Conventions :** dans les titres, les mots entre `**` passent en vert accent (#336233), ou en vert sauge (#A3D2A3) sur fond sombre. Les lignes en italique qui commencent par un tiret (*Rôle*, *Composant*, *Photo*, *Note*) sont des consignes : elles ne se publient pas. Tout le reste est du texte prêt à coller.

---

## 1. Carte d'identité

- **Adresse :** `https://3bcharpente.fr/conseils/aides-renovation-artisan-rge/`
- **Objectif de la page :**
  - capter les recherches « artisan rge » avec un contenu utile et prudent ;
  - expliquer ce qu'est le RGE, pourquoi il compte pour les aides et comment vérifier une entreprise ;
  - afficher les cinq domaines RGE exacts de 3B Charpente, avec la source (annuaire de l'ADEME) ;
  - donner les étapes d'un projet aidé, en renvoyant vers France Rénov' pour tout ce qui touche aux montants et aux conditions ;
  - renvoyer vers les prestations d'isolation et vers le devis.
- **Visiteurs visés :**
  - propriétaires qui préparent des travaux d'isolation ou de menuiseries et veulent bénéficier d'aides ;
  - personnes qui ont reçu un devis et veulent vérifier que l'entreprise est bien RGE ;
  - personnes méfiantes après un démarchage.
- **Mot-clé principal :** artisan rge (1 900 recherches par mois).
- **Mots-clés secondaires :**
  - charpentier rge (40) ;
  - variantes à placer naturellement : entreprise RGE, label RGE, qualification RGE, Qualibat RGE, vérifier artisan RGE, annuaire RGE, France Rénov', aides rénovation énergétique ;
  - longue traîne locale, non mesurée : artisan rge hautes alpes, artisan rge briançon, entreprise rge isolation l'argentière-la-bessée.
- **Intention de recherche :** information (qu'est-ce que le RGE, comment vérifier) avec un fort potentiel de conversion locale (trouver une entreprise RGE).
- **Pages liées :**
  - page pilier : `/isolation-biosourcee/` (04) ;
  - prestations : `/isolation-toiture-sarking/` (05), `/isolation-murs-ite/` (06) ;
  - guide : `/conseils/isolant-biosource-montagne/` (23) ;
  - `/3b-recup/`, trois fiches réalisations, `/contact/`.

---

## 2. SEO

- **Balise title** (60 caractères) : `Artisan RGE et aides rénovation, Hautes-Alpes | 3B Charpente`
- **Meta description** (143 caractères) : `Qu'est-ce qu'un artisan RGE, comment le vérifier sur France Rénov' et préparer un projet aidé ? Le guide d'un charpentier RGE des Hautes-Alpes.`
- **H1 :** Aides à la rénovation : pourquoi choisir un artisan RGE dans les Hautes-Alpes ?
- **URL canonique :** `https://3bcharpente.fr/conseils/aides-renovation-artisan-rge/`
- **Fil d'Ariane visible :** Accueil › Conseils › Aides à la rénovation et artisan RGE

### Données structurées (JSON-LD)

*Même convention que les guides 23 et 24 : l'auteur est l'entreprise tant que Jean n'a pas accepté de signer (remplacement prévu : `{"@type": "Person", "@id": "https://3bcharpente.fr/a-propos/#jean-michel-tardy", "name": "Jean-Michel Tardy", "jobTitle": "Charpentier, fondateur de 3B Charpente", "worksFor": {"@id": "https://3bcharpente.fr/#entreprise"}}`). Remplacer `AAAA-MM-JJ` par la date réelle de mise en ligne, et mettre à jour `dateModified` à chaque relecture annuelle. Si la page `/conseils/` n'existe pas, retirer le niveau 2 du fil d'Ariane ou le remplacer par « Isolation biosourcée » → `/isolation-biosourcee/`.*

**Article**

```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": "https://3bcharpente.fr/conseils/aides-renovation-artisan-rge/#article",
  "headline": "Aides à la rénovation : pourquoi choisir un artisan RGE dans les Hautes-Alpes ?",
  "description": "Ce qu'est le label RGE, pourquoi il compte pour les aides à la rénovation énergétique, comment vérifier une entreprise dans l'annuaire France Rénov' et comment préparer un projet aidé, par un charpentier qualifié QUALIBAT-RGE à L'Argentière-la-Bessée.",
  "inLanguage": "fr-FR",
  "mainEntityOfPage": "https://3bcharpente.fr/conseils/aides-renovation-artisan-rge/",
  "datePublished": "AAAA-MM-JJ",
  "dateModified": "AAAA-MM-JJ",
  "image": "https://3bcharpente.fr/images/renovation-energetique-lucarne-saint-martin-de-queyrieres.webp",
  "author": { "@type": "Organization", "@id": "https://3bcharpente.fr/#entreprise", "name": "3B Charpente" },
  "publisher": { "@type": "Organization", "@id": "https://3bcharpente.fr/#entreprise", "name": "3B Charpente" },
  "about": [
    { "@type": "Thing", "name": "Qualification RGE (Reconnu garant de l'environnement)" },
    { "@type": "Thing", "name": "Aides à la rénovation énergétique" }
  ],
  "isPartOf": { "@id": "https://3bcharpente.fr/#site" }
}
```

**FAQPage** (généré à partir de la section 4, à garder identique au texte visible)

<!-- FAQPAGE_JSONLD -->
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://3bcharpente.fr/conseils/aides-renovation-artisan-rge/#faq",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Qu'est-ce qu'un artisan RGE ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Un artisan RGE (Reconnu garant de l'environnement) est une entreprise qualifiée par un organisme comme Qualibat pour des travaux de rénovation énergétique précis : isolation, fenêtres, chauffage… La qualification est attribuée domaine par domaine, pour une durée limitée, avec des contrôles. Pour la plupart des aides publiques à la rénovation énergétique, elle est exigée, sous conditions."
      }
    },
    {
      "@type": "Question",
      "name": "Comment vérifier qu'un artisan est bien RGE ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Consultez l'annuaire des professionnels RGE sur france-renov.gouv.fr et cherchez l'entreprise par son nom ou sa commune. Vérifiez que le domaine affiché correspond exactement à vos travaux, que la qualification est en cours de validité et que le nom et le SIRET sont ceux du devis. Vous pouvez aussi demander le certificat à l'entreprise."
      }
    },
    {
      "@type": "Question",
      "name": "Faut-il un artisan RGE pour avoir MaPrimeRénov' ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Pour MaPrimeRénov', comme pour la plupart des aides publiques à la rénovation énergétique, les travaux doivent être réalisés par une entreprise qualifiée RGE dans le domaine concerné. Les montants, les plafonds et les conditions changent régulièrement : vérifiez votre situation avec un conseiller France Rénov' (france-renov.gouv.fr) avant de signer votre devis."
      }
    },
    {
      "@type": "Question",
      "name": "Un charpentier peut-il être RGE ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oui. Un charpentier peut être qualifié RGE pour les travaux d'isolation et d'ouvertures qu'il réalise. 3B Charpente, à L'Argentière-la-Bessée, est qualifié QUALIBAT-RGE pour l'isolation des murs et des toitures par l'extérieur, l'isolation par l'intérieur des murs, rampants et plafonds, les fenêtres de toit, et les fenêtres, volets et portes donnant sur l'extérieur."
      }
    },
    {
      "@type": "Question",
      "name": "Le RGE couvre-t-il tous les travaux d'une entreprise ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Non. Le RGE est attribué par domaine de travaux. Une entreprise peut être RGE pour l'isolation des toitures sans l'être pour les fenêtres ou le chauffage. Avant de compter sur une aide, vérifiez que le domaine exact de vos travaux figure sur le certificat de l'entreprise ou dans l'annuaire de France Rénov'. Une terrasse ou un escalier, eux, ne relèvent pas du RGE."
      }
    },
    {
      "@type": "Question",
      "name": "Qui contacter pour connaître les aides auxquelles j'ai droit ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Le réseau public France Rénov'. Ses conseillers sont gratuits et neutres : ils étudient votre logement, vos travaux et votre situation, puis vous indiquent les aides possibles et l'ordre des démarches. Rendez-vous sur france-renov.gouv.fr ou appelez le 0 808 800 700. Nous vous recommandons de le faire avant de signer un devis."
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
    { "@type": "ListItem", "position": 2, "name": "Conseils", "item": "https://3bcharpente.fr/conseils/" },
    { "@type": "ListItem", "position": 3, "name": "Aides à la rénovation et artisan RGE", "item": "https://3bcharpente.fr/conseils/aides-renovation-artisan-rge/" }
  ]
}
```

### Textes alternatifs des images clés

| Emplacement | Photo source (dossier · légende d'origine) | Nom de fichier | Texte alternatif |
|---|---|---|---|
| Héros | `/galeries/renovation-energetique-et-ouverture-d-une-lucarne-a-saint-martin-de-queyriere` · « toiture terminée » | `renovation-energetique-lucarne-saint-martin-de-queyrieres.webp` | Toiture terminée après une rénovation énergétique et l'ouverture d'une lucarne à Saint-Martin-de-Queyrières |
| Domaines RGE | `/galeries/isolation-d-une-toiture-ancienne-a-l-argentiere-la-bessee` · « vue de dessous d'un velux 78x98 » | `fenetre-de-toit-78x98-toiture-isolee-argentiere-la-bessee.webp` | Fenêtre de toit de 78 × 98 cm dans un rampant isolé à L'Argentière-la-Bessée |
| Étapes | `/galeries/isolation-d-un-bati-ancien-par-l-interieur` · « menuiseries livrées! » | `menuiseries-livrees-renovation-bati-ancien.webp` | Menuiseries livrées sur un chantier d'isolation d'un bâti ancien par l'intérieur |

---

## 3. Sections dans l'ordre

*Gabarit :* gabarit « Article » (voir fiche 23) : colonne de lecture de 680 à 720 px, texte Inter 18 px, intertitres H2 en Nohemi avec deux ou trois mots en vert, sommaire collant à droite sur ordinateur, encadrés sur fond de section clair. Pied d'article avec les composants de la maquette (cartes de réalisations, FAQ en accordéon, bandeau d'appel à l'action).

### 3.1 Héros de l'article

- *Rôle :* poser la question, le lieu, et l'angle (vérifier avant de signer).
- *Composant :* héros simplifié (fond crème), fil d'Ariane au-dessus du titre, ligne d'auteur et de date sous le chapô, photo pleine largeur en dessous.

**Fil d'Ariane :** Accueil › Conseils › Aides à la rénovation et artisan RGE

**Kicker :** Conseils · Aides et RGE

**H1 :** Aides à la rénovation : pourquoi choisir un **artisan RGE** dans les **Hautes-Alpes** ?

**Chapô :** Vous voulez isoler votre toit ou vos murs, ou changer vos fenêtres, et vous avez entendu parler des aides ? Avant les montants, une question compte : l'entreprise est-elle qualifiée RGE pour vos travaux ? Voici ce que recouvre ce label, comment le vérifier et comment préparer votre projet.

**Byline :** Par 3B Charpente, charpentier qualifié RGE à L'Argentière-la-Bessée · Mis à jour en octobre 2026

**Légende photo :** Rénovation énergétique et ouverture d'une lucarne à Saint-Martin-de-Queyrières.

### 3.2 En bref

- *Rôle :* réponse directe et autonome, reprenable par les moteurs et les assistants IA.
- *Composant :* encadré pleine largeur sur fond de section clair (#F2F2EC), filet vertical vert accent, texte Inter. Juste sous le héros.

> **En bref.** Un artisan RGE (Reconnu garant de l'environnement) est qualifié, domaine par domaine, pour des travaux de rénovation énergétique. La plupart des aides publiques, comme MaPrimeRénov' ou les certificats d'économies d'énergie, l'exigent, sous conditions. Vérifiez l'entreprise dans l'annuaire de France Rénov' et faites le point avec un conseiller France Rénov' avant de signer un devis.

### 3.3 Encadré « Ce que ce guide ne dit pas »

- *Rôle :* poser la règle de prudence dès le début (et protéger 3B d'une information périmée).
- *Composant :* encadré à bordure vert accent, icône « i » dans une pastille sauge.

**Encadré :** Ce guide ne donne volontairement aucun montant, aucun plafond et aucune condition d'accès : les règles des aides changent chaque année, parfois en cours d'année. Pour votre situation, la seule référence à jour est France Rénov' (france-renov.gouv.fr), le service public de la rénovation de l'habitat.

### 3.4 Sommaire

- *Rôle :* navigation et liens d'ancre.
- *Composant :* liste numérotée, collante à droite sur ordinateur.

**Sommaire :**

1. Le label RGE, c'est quoi ? → `#rge`
2. Pourquoi le RGE compte pour les aides → `#aides`
3. Comment vérifier qu'un artisan est RGE → `#verifier`
4. Les domaines RGE de 3B Charpente → `#domaines-3b`
5. Les étapes d'un projet de rénovation aidé → `#etapes`
6. Par où commencer : l'ordre des travaux → `#ordre-des-travaux`
7. Les pièges à éviter → `#pieges`

### 3.5 Le label RGE, c'est quoi ?

- *Rôle :* définition courte et autonome (bloc citable), puis les deux nuances clés : par domaine, pas une garantie absolue. Ancre `#rge`.
- *Composant :* corps d'article ; la première phrase en gras sert de définition.

**H2 :** Le label RGE, **c'est quoi** ?

**Texte :**

**RGE signifie « Reconnu garant de l'environnement ». C'est un signe de qualité attribué aux entreprises du bâtiment qui réalisent des travaux de rénovation énergétique** : isolation, fenêtres, chauffage, énergies renouvelables…

Il est délivré par des organismes de qualification ou de certification, comme Qualibat pour le bâtiment. Pour l'obtenir, l'entreprise doit notamment justifier de compétences techniques, désigner une personne formée qui encadre les chantiers concernés et accepter des contrôles de ses réalisations. La qualification est accordée pour une durée limitée et suivie dans le temps.

**Point essentiel : le RGE s'obtient par domaine de travaux.** Une entreprise peut être RGE pour l'isolation des toitures et pas pour la pose de fenêtres, ou l'inverse. C'est le domaine qui compte, pas le logo seul.

Le RGE n'est pas une garantie absolue : c'est un niveau d'exigence vérifié. Il ne remplace ni un devis détaillé ni les assurances de l'entreprise. Demandez aussi son attestation d'assurance décennale.

### 3.6 Pourquoi le RGE compte pour les aides

- *Rôle :* nommer les dispositifs sans aucun chiffre ni condition, avec la seule formule autorisée (« la plupart exigent le RGE, sous conditions »). Ancre `#aides`.
- *Composant :* corps d'article, liste à puces.

**H2 :** Pourquoi le RGE compte **pour les aides**

**Texte :**

En France, plusieurs aides publiques soutiennent la rénovation énergétique des logements. Elles existent toutes sous conditions, et ces conditions changent souvent. Les principaux dispositifs sont :

- **MaPrimeRénov'**, l'aide de l'État gérée par l'Agence nationale de l'habitat (Anah) ;
- les **certificats d'économies d'énergie (CEE)**, souvent appelés « primes énergie », financés par les fournisseurs d'énergie ;
- l'**éco-prêt à taux zéro (éco-PTZ)**, un prêt sans intérêts pour financer des travaux ;
- une **TVA à taux réduit** sur certains travaux de rénovation énergétique ;
- des **aides locales** de collectivités, qui varient selon les territoires.

**Pour la plupart de ces aides, les travaux doivent être réalisés par une entreprise qualifiée RGE dans le domaine concerné.** Le label RGE ouvre ainsi l'accès aux aides publiques à la rénovation énergétique, sous conditions.

Les montants, les plafonds de ressources et les conditions évoluent régulièrement. Nous ne les détaillons pas ici, volontairement : la seule source à jour est France Rénov'.

Un point de méthode, valable quel que soit le dispositif : renseignez-vous **avant** de signer un devis ou de commencer les travaux. Pour plusieurs aides, l'ordre des démarches compte.

### 3.7 Comment vérifier qu'un artisan est RGE

- *Rôle :* liste d'étapes pratique (format apprécié des moteurs et des IA). Ancre `#verifier`.
- *Composant :* onglets numérotés de 01 à 05 (repris de la méthode 3B Récup'), puis un encadré d'alerte.

**H2 :** Comment vérifier **qu'un artisan est RGE**

**01 — Demandez le certificat.** Une entreprise RGE peut vous transmettre son certificat de qualification : nom de l'entreprise, organisme, domaines couverts, dates de validité.

**02 — Vérifiez dans l'annuaire officiel.** L'annuaire des professionnels RGE est accessible depuis france-renov.gouv.fr. Cherchez l'entreprise par son nom, sa commune ou le type de travaux.

**03 — Contrôlez le domaine.** Le domaine affiché doit correspondre exactement à vos travaux : « isolation des toitures par l'extérieur » n'est pas « isolation par l'intérieur des murs ou rampants de toitures ou plafonds ».

**04 — Comparez les identités.** Le nom et le numéro SIRET du certificat doivent correspondre à ceux du devis. Si une partie des travaux est confiée à une autre entreprise, demandez laquelle, et avec quelle qualification.

**05 — Regardez les dates.** Une qualification a une date de fin. Demandez à votre conseiller France Rénov' à quelle date elle doit être valide pour votre dossier.

**Encadré d'alerte :** Méfiez-vous des démarchages par téléphone ou à domicile, des promesses de travaux « gratuits » et des entreprises qui vous pressent de signer. Un conseiller France Rénov' est neutre et gratuit : il ne vend rien.

**Bouton contour :** Ouvrir l'annuaire RGE de France Rénov' → `https://france-renov.gouv.fr/annuaire-rge` (lien externe, nouvel onglet ; vérifier l'adresse exacte à l'intégration)

### 3.8 Les domaines RGE de 3B Charpente

- *Rôle :* la preuve, avec les intitulés exacts de l'annuaire et ce qu'ils recouvrent chez 3B ; lien vers chaque prestation. Ancre `#domaines-3b`.
- *Composant :* tableau dans une carte blanche à coins arrondis ; sur mobile, une carte par domaine. Logo QUALIBAT-RGE à droite du titre, uniquement après validation (section 7).

**Kicker :** Notre qualification

**H2 :** Les domaines RGE **de 3B Charpente**

**Texte d'introduction :** 3B Charpente, charpentier installé à L'Argentière-la-Bessée depuis 2007, est qualifié QUALIBAT-RGE. La qualification est au nom de son fondateur, « TARDY JEAN-MICHEL », et figure dans l'annuaire RGE de l'ADEME (données ouvertes), avec une date de rattachement au 2 octobre 2025. Elle couvre cinq domaines :

| Domaine RGE (intitulé de l'annuaire) | Ce que cela recouvre chez nous | Pour en savoir plus |
|---|---|---|
| Isolation des murs par l'extérieur | ITE (isolation thermique par l'extérieur) en panneaux de fibre de bois, sous bardage bois ou enduit | `/isolation-murs-ite/` |
| Isolation des toitures par l'extérieur | Sarking : isolant continu posé au-dessus des chevrons, sous la couverture | `/isolation-toiture-sarking/` |
| Isolation par l'intérieur des murs ou rampants de toitures ou plafonds | Murs du bâti ancien (ouate de cellulose insufflée), rampants, combles | `/isolation-murs-ite/` et `/isolation-toiture-sarking/` |
| Fenêtres de toit | Ouverture dans la charpente, pose et raccords à l'isolation | `/isolation-toiture-sarking/#fenetres-de-toit` |
| Fenêtres, volets, portes donnant sur l'extérieur | Menuiseries raccordées à l'isolation des murs | `/isolation-murs-ite/#menuiseries` |

`[À VALIDER AVEC JEAN : numéro du certificat QUALIBAT et date de fin de validité, à afficher ici avec le logo]`

**Texte sous le tableau :** Nos isolants sont biosourcés, c'est-à-dire fabriqués à partir de matières issues du vivant : ouate de cellulose, fibre de bois, laines de chanvre, lin et coton. Nos autres prestations (charpente, escaliers, terrasses) relèvent de notre métier de charpentier, en dehors de ces domaines. Et parce que rénover, c'est aussi réemployer, nous donnons une seconde vie au bois déposé avec 3B Récup'.

**Liens :** Isolation biosourcée dans les Hautes-Alpes → `/isolation-biosourcee/` · 3B Récup' → `/3b-recup/`

### 3.9 Les étapes d'un projet de rénovation aidé

- *Rôle :* parcours concret, sans aucune règle d'éligibilité ; place les engagements validés de 3B (étude sur mesure, devis détaillé, calendrier estimatif). Ancre `#etapes`.
- *Composant :* liste numérotée verticale (frise), numéros dans des pastilles sauge.
- *Note de réécriture :* l'étape 3 reprend la FAQ validée « Devis » (« Nous discuterons de vos besoins lors d'une rencontre et vous proposerons un devis détaillé adapté à votre projet ») ; l'étape 5 reprend la FAQ validée « Délais ».

**H2 :** Les étapes d'un projet **de rénovation aidé**

**1. Faire le point avec un conseiller France Rénov'.** Gratuit et neutre, il vous aide à comprendre les aides possibles pour votre logement et votre situation, et l'ordre des démarches. Pour le trouver : france-renov.gouv.fr, ou le numéro national 0 808 800 700.

**2. Faire réaliser un audit ou un diagnostic, si besoin.** Pour un projet global, un audit énergétique aide à hiérarchiser les travaux, et il peut être demandé selon les dispositifs. Pour une rénovation d'ampleur, un accompagnement par un opérateur agréé, appelé Mon Accompagnateur Rénov', peut aussi être exigé : votre conseiller vous orientera.

**3. Rencontrer l'artisan et obtenir un devis détaillé.** Chez 3B Charpente, chaque projet débute par une étude sur mesure : nous discutons de vos besoins lors d'une rencontre et vous proposons un devis détaillé adapté à votre projet. Un bon devis précise les matériaux, les épaisseurs, les surfaces et les performances des isolants. Ces informations servent aussi à vos dossiers.

**4. Faire les demandes d'aides au bon moment.** Avec votre conseiller, vérifiez quelles demandes se font avant la signature du devis ou le début des travaux, et lesquelles après. `[À VALIDER AVEC JEAN : 3B accompagne-t-il ses clients dans le montage des dossiers (MaPrimeRénov', CEE) ou travaille-t-il avec un partenaire ?]`

**5. Réaliser les travaux.** Le délai peut varier selon la complexité et la taille du projet : nous vous fournissons un calendrier estimatif dès la première rencontre. Viennent ensuite la préparation, le chantier et la fin des travaux.

**6. Transmettre les factures et les justificatifs.** La facture finale reprend les travaux réalisés et leurs caractéristiques. Elle sert à obtenir le versement des aides accordées.

**Légende photo :** Menuiseries livrées sur un chantier d'isolation d'un bâti ancien.

### 3.10 Par où commencer : l'ordre des travaux

- *Rôle :* conseil pratique général sur l'ordre des travaux, utile que le projet soit aidé ou non. Aucune règle d'aide. Ancre `#ordre-des-travaux`.
- *Composant :* corps d'article, liste à puces avec pastilles sauge.

**H2 :** Par où commencer : **l'ordre des travaux**

**Texte :**

Une rénovation aidée n'est pas forcément une rénovation complète, faite en une seule fois. Mais l'ordre des travaux compte, pour ne pas défaire demain ce que l'on fait aujourd'hui.

- **L'enveloppe d'abord.** On isole avant de remplacer le chauffage : une maison mieux isolée a besoin d'un chauffage moins puissant.
- **Le toit, souvent en premier.** Dans une maison peu isolée, c'est souvent par là que part le plus de chaleur, et c'est sous le toit que l'été se fait le plus sentir.
- **Les murs et les fenêtres ensemble.** La position et le raccord des fenêtres dépendent de l'isolation des murs : les traiter en même temps évite un pont thermique autour de chaque ouverture.
- **La ventilation avec l'étanchéité à l'air.** L'étanchéité à l'air empêche l'air de traverser les parois ; une maison rendue plus étanche doit donc rester correctement ventilée.
- **Les travaux déjà prévus.** Une couverture à refaire, une façade à reprendre : c'est le bon moment pour isoler par l'extérieur, puisque l'échafaudage est là.

Un audit énergétique ou un rendez-vous avec un conseiller France Rénov' aide à construire ce plan. Lors de notre visite, nous regardons aussi la charpente et les ouvertures, pour que l'isolation s'inscrive dans un ensemble cohérent.

### 3.11 Les pièges à éviter

- *Rôle :* conseils pratiques de bon sens, sans règle chiffrée ; montrer le regard du charpentier. Ancre `#pieges`.
- *Composant :* liste à puces avec une croix rouge sourde (ou une pastille pierre) devant chaque piège.

**H2 :** Les **pièges** à éviter

- **Signer trop vite**, avant d'avoir fait le point sur les aides avec un conseiller France Rénov'.
- **Se fier au logo RGE** sans vérifier que le domaine correspond à vos travaux.
- **Choisir un isolant sur son seul prix**, sans penser au confort d'été ni à l'humidité. Notre guide des isolants biosourcés aide à comparer.
- **Oublier l'étanchéité à l'air et la ventilation.** L'étanchéité à l'air est la couche continue qui empêche l'air de traverser les parois ; sans elle, l'isolation perd une partie de son efficacité.
- **Isoler sans regarder la charpente.** En montagne, une toiture porte la neige tout l'hiver : un isolant neuf ne doit pas cacher une structure fatiguée.
- **Oublier la mairie.** Une isolation par l'extérieur modifie l'aspect de la maison et demande en général une déclaration préalable de travaux.

**Lien :** Quel isolant biosourcé choisir en montagne ? → `/conseils/isolant-biosource-montagne/`

### 3.12 Réalisations

- *Rôle :* prouver l'expérience en rénovation énergétique, avec communes.
- *Composant Framer :* cartes de réalisations avec l'étiquette « 3B Charpente » posée sur la photo et le lien « Voir les travaux → ».

**Kicker :** Nos chantiers

**H2 :** Des rénovations énergétiques **en photos**

**Carte 1 — Rénovation énergétique et ouverture d'une lucarne à Saint-Martin-de-Queyrières**

Caissons d'isolation et étanchéité à l'air, nouvelle lucarne, toiture terminée.

**Lien :** Voir les travaux → `/realisations/renovation-energetique-et-ouverture-d-une-lucarne-a-saint-martin-de-queyriere/`

**Carte 2 — Isolation d'un bâti ancien par l'intérieur**

Ossature en poutres en I, étanchéité à l'air, ouate de cellulose insufflée, encadrements et menuiseries.

**Lien :** Voir les travaux → `/realisations/isolation-d-un-bati-ancien-par-l-interieur/`

**Carte 3 — Isolation d'une toiture ancienne à L'Argentière-la-Bessée**

Panneaux de fibre de bois, étanchéité à l'air, fenêtre de toit de 78 × 98 cm.

**Lien :** Voir les travaux → `/realisations/isolation-d-une-toiture-ancienne-a-l-argentiere-la-bessee/`

### 3.13 FAQ

- *Rôle :* répondre aux questions telles qu'on les tape ; balisage FAQPage.
- *Composant Framer :* FAQ en accordéon dans des cartes blanches.

**Kicker :** Questions fréquentes

**H2 :** Vos questions sur **le RGE et les aides**

*(Questions et réponses : voir section 4, à reprendre mot pour mot.)*

### 3.14 Appel à l'action final

- *Rôle :* passer de l'information au projet, avec les coordonnées identiques au caractère près.
- *Composant Framer :* bandeau d'appel à l'action vert forêt avec la grille ronde translucide.
- *Note de réécriture :* reprend l'appel validé (« chaque projet chez 3B Charpente débute par une étude sur mesure ») et la FAQ validée « Devis » (« contactez-nous via notre site web ou par téléphone »).

**Kicker :** Un projet de rénovation énergétique ?

**H2 :** Parlons de **votre maison**

**Texte :** Isolation de toiture ou de murs, fenêtres de toit, menuiseries : contactez-nous par le site ou par téléphone. Nous venons voir votre maison et vous proposons un devis détaillé, en charpentiers qualifiés RGE. Pour les aides, nous vous orientons vers votre conseiller France Rénov'.

**Bouton plein :** Demander mon devis → `/contact/`

**Bouton contour :** Appeler le 06 34 67 31 49 → `tel:+33634673149`

**Coordonnées :** 3B Charpente, 5 rue Saint-Michel, 05120 L'Argentière-la-Bessée, 06 34 67 31 49

---

## 4. FAQ

### Q1. Qu'est-ce qu'un artisan RGE ?

Un artisan RGE (Reconnu garant de l'environnement) est une entreprise qualifiée par un organisme comme Qualibat pour des travaux de rénovation énergétique précis : isolation, fenêtres, chauffage… La qualification est attribuée domaine par domaine, pour une durée limitée, avec des contrôles. Pour la plupart des aides publiques à la rénovation énergétique, elle est exigée, sous conditions.

### Q2. Comment vérifier qu'un artisan est bien RGE ?

Consultez l'annuaire des professionnels RGE sur france-renov.gouv.fr et cherchez l'entreprise par son nom ou sa commune. Vérifiez que le domaine affiché correspond exactement à vos travaux, que la qualification est en cours de validité et que le nom et le SIRET sont ceux du devis. Vous pouvez aussi demander le certificat à l'entreprise.

### Q3. Faut-il un artisan RGE pour avoir MaPrimeRénov' ?

Pour MaPrimeRénov', comme pour la plupart des aides publiques à la rénovation énergétique, les travaux doivent être réalisés par une entreprise qualifiée RGE dans le domaine concerné. Les montants, les plafonds et les conditions changent régulièrement : vérifiez votre situation avec un conseiller France Rénov' (france-renov.gouv.fr) avant de signer votre devis.

### Q4. Un charpentier peut-il être RGE ?

Oui. Un charpentier peut être qualifié RGE pour les travaux d'isolation et d'ouvertures qu'il réalise. 3B Charpente, à L'Argentière-la-Bessée, est qualifié QUALIBAT-RGE pour l'isolation des murs et des toitures par l'extérieur, l'isolation par l'intérieur des murs, rampants et plafonds, les fenêtres de toit, et les fenêtres, volets et portes donnant sur l'extérieur.

### Q5. Le RGE couvre-t-il tous les travaux d'une entreprise ?

Non. Le RGE est attribué par domaine de travaux. Une entreprise peut être RGE pour l'isolation des toitures sans l'être pour les fenêtres ou le chauffage. Avant de compter sur une aide, vérifiez que le domaine exact de vos travaux figure sur le certificat de l'entreprise ou dans l'annuaire de France Rénov'. Une terrasse ou un escalier, eux, ne relèvent pas du RGE.

### Q6. Qui contacter pour connaître les aides auxquelles j'ai droit ?

Le réseau public France Rénov'. Ses conseillers sont gratuits et neutres : ils étudient votre logement, vos travaux et votre situation, puis vous indiquent les aides possibles et l'ordre des démarches. Rendez-vous sur france-renov.gouv.fr ou appelez le 0 808 800 700. Nous vous recommandons de le faire avant de signer un devis.

---

## 5. Liens internes

| Texte du lien (ancre) | Page visée | Emplacement |
|---|---|---|
| Conseils (fil d'Ariane) | `/conseils/` | Haut de page (si la page existe, sinon voir note section 2) |
| Ouvrir l'annuaire RGE de France Rénov' | `https://france-renov.gouv.fr/annuaire-rge` (externe) | Section 3.7 |
| Isolation des murs par l'extérieur | `/isolation-murs-ite/` | Tableau 3.8, prestation proche n° 1 |
| Isolation de toiture et sarking | `/isolation-toiture-sarking/` | Tableau 3.8, prestation proche n° 2 |
| Fenêtres de toit | `/isolation-toiture-sarking/#fenetres-de-toit` | Tableau 3.8 |
| Menuiseries extérieures | `/isolation-murs-ite/#menuiseries` | Tableau 3.8 |
| Isolation biosourcée dans les Hautes-Alpes | `/isolation-biosourcee/` | Section 3.8 (lien vers la page pilier) |
| 3B Récup' | `/3b-recup/` | Section 3.8 |
| Quel isolant biosourcé choisir en montagne ? | `/conseils/isolant-biosource-montagne/` | Section 3.11 |
| Voir les travaux (× 3) | trois fiches réalisations | Section 3.12 |
| Demander mon devis | `/contact/` | Appel final |

**Liens entrants à prévoir :** page 04 (bouton « Comprendre les aides avec un artisan RGE »), pages 05 et 06 (sections « Aides et RGE »), guide 23 (section « Et les aides ? »), accueil (preuve RGE), page contact (ligne « Aides : comment ça marche ? »), pied de page (liste des guides).

---

## 6. Photos

### Photos à utiliser (galerie actuelle)

| Section | Dossier | Photo (légende d'origine) |
|---|---|---|
| Héros | `/galeries/renovation-energetique-et-ouverture-d-une-lucarne-a-saint-martin-de-queyriere` | « toiture terminée » |
| 3.8 Domaines | `/galeries/isolation-d-une-toiture-ancienne-a-l-argentiere-la-bessee` | « vue de dessous d'un velux 78x98 » |
| 3.9 Étapes | `/galeries/isolation-d-un-bati-ancien-par-l-interieur` | « menuiseries livrées! » |
| 3.12 Carte 1 | `/galeries/renovation-energetique-et-ouverture-d-une-lucarne-a-saint-martin-de-queyriere` | « étanchéité à l'air et caissons d'isolation » |
| 3.12 Carte 2 | `/galeries/isolation-d-un-bati-ancien-par-l-interieur` | « insufflation de ouate de cellulose » |
| 3.12 Carte 3 | `/galeries/isolation-d-une-toiture-ancienne-a-l-argentiere-la-bessee` | « couverture terminée » |

### Photos et visuels à demander ou à créer

1. **Le certificat QUALIBAT-RGE** (pour le logo et la vérification ; le logo ne s'affiche qu'avec un certificat valide).
2. Une photo de Jean en visite chez un client, carnet ou mètre à la main (illustre l'étape 3, « rencontrer l'artisan »).
3. Une capture de la fiche 3B Charpente dans l'annuaire France Rénov', une fois le SIRET clarifié (illustre l'étape « Vérifiez dans l'annuaire officiel »).
4. Un pictogramme par domaine RGE (mur, toit, fenêtre de toit, fenêtre), dans la charte (pastilles sauge).

---

## 7. Points à valider avec Jean

1. **SIRET de la qualification RGE.** L'annuaire de l'ADEME indique 494 482 714 00024 ; les mentions légales indiquent 494 482 714 00016. Ce guide conseille aux lecteurs de comparer le SIRET du certificat et celui du devis : il faut que ceux de 3B soient cohérents avant la mise en ligne.
2. **Certificat QUALIBAT-RGE :** numéro, date de fin de validité, et accord pour afficher le logo et un lien direct vers la fiche de l'annuaire.
3. **Accompagnement aux aides :** 3B aide-t-il ses clients à monter leurs dossiers (MaPrimeRénov', CEE) ? Travaille-t-il avec un partenaire, par exemple pour les CEE ? Le placeholder de l'étape 4 reste visible tant que ce n'est pas réglé.
4. **Assurance décennale :** le guide conseille de la demander. 3B peut-il fournir son attestation (nom de l'assureur) sur demande ou sur la page contact ?
5. **Signature du guide :** Jean accepte-t-il de signer de son nom ? (Voir section 2.)
6. **Conseiller France Rénov' local :** Jean connaît-il l'espace conseil France Rénov' qui couvre le nord des Hautes-Alpes ? Le citer nommément serait utile, une fois l'information vérifiée.
7. **Relecture annuelle :** qui relit cette page chaque année (noms des dispositifs, lien vers l'annuaire, numéro national) ? Prévoir une date de relecture dans le planning du site.
8. **Page `/conseils/` :** à créer (liste des guides) pour que le fil d'Ariane fonctionne, ou retirer ce niveau (voir section 2).
