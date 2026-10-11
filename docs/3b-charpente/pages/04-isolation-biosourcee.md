# Fiche page 04 — Isolation biosourcée et rénovation énergétique RGE

> **Adresse :** `/isolation-biosourcee/` · **Phase :** 1 · **Type :** page pilier (hub) de la rénovation énergétique, qui distribue vers les fiches 05 (toiture) et 06 (murs).
> **Sources :** `00-brief.md` (faits vérifiés, textes validés, règles SEO et GEO) et `realisations-source.md`. Tout fait propre à 3B Charpente vient de ces deux fichiers. Ce qui manque est signalé `[À VALIDER AVEC JEAN : …]` et doit rester visible tant que Jean n'a pas répondu.
> **Conventions :** dans les titres, les mots entre `**` passent en vert accent (#336233), ou en vert sauge (#A3D2A3) sur fond sombre. Les lignes en italique qui commencent par un tiret (*Rôle*, *Composant*, *Photo*, *Note*) sont des consignes : elles ne se publient pas. Tout le reste est du texte prêt à coller.

---

## 1. Carte d'identité

- **Adresse :** `https://3bcharpente.fr/isolation-biosourcee/`
- **Objectif de la page :**
  - faire de 3B Charpente le charpentier qualifié RGE qui isole en biosourcé dans les Hautes-Alpes, une place que personne n'occupe aujourd'hui (sur « isolation biosourcée hautes alpes », Google ne montre que des isolateurs, aucun charpentier) ;
  - expliquer les isolants posés par 3B et l'intérêt d'une enveloppe isolante continue en climat de montagne ;
  - afficher les cinq domaines RGE exacts ;
  - renvoyer vers les deux pages techniques (05 toiture et sarking, 06 murs et ITE) et vers la demande de devis.
- **Visiteurs visés :**
  - propriétaires de maisons, de chalets et de maisons de pays du Briançonnais, de la Vallouise, du Pays des Écrins et de Serre Chevalier, qui veulent isoler avec des matériaux sains ;
  - syndics et copropriétés (référence : copropriété à Briançon) ;
  - architectes et maîtres d'œuvre qui cherchent un charpentier RGE pour le lot isolation.
- **Mot-clé principal :** isolation biosourcée (260 recherches par mois).
- **Mots-clés secondaires :**
  - isolant biosourcé (590) ;
  - isolation fibre de bois (90) ;
  - charpentier rge (40) ;
  - longue traîne locale, non mesurée : isolation biosourcée hautes alpes, rénovation énergétique briançon, isolation ouate de cellulose hautes alpes, artisan rge l'argentière-la-bessée.
- **Partage des mots-clés avec le guide 23 :** « isolant biosourcé » est aussi visé par le guide `/conseils/isolant-biosource-montagne/`. Cette page 04 garde l'intention « trouver une entreprise » (prestation, lieu, RGE, devis). Le guide garde l'intention « comparer et choisir » (tableau, déphasage, ouate de cellulose). Les deux pages se lient l'une à l'autre avec des ancres différentes.
- **Intention de recherche :** mixte. Commerciale et locale (trouver un professionnel RGE qui pose des isolants biosourcés près de chez soi), avec une part d'information (quels isolants, pour quel confort).
- **Pages liées :**
  - prestations : `/isolation-toiture-sarking/` (05), `/isolation-murs-ite/` (06), `/renovation-charpente-combles/` (03) ;
  - guides : `/conseils/isolant-biosource-montagne/` (23), `/conseils/aides-renovation-artisan-rge/` (26) ;
  - `/3b-recup/`, `/realisations/` et trois fiches réalisations, `/contact/`.

---

## 2. SEO

- **Balise title** (52 caractères) : `Isolation biosourcée RGE Hautes-Alpes | 3B Charpente`
- **Meta description** (147 caractères) : `Charpentier RGE à L'Argentière-la-Bessée depuis 2007 : isolation en ouate de cellulose, fibre de bois et chanvre, toits et murs. Demandez un devis.`
- **H1 :** Isolation biosourcée et rénovation énergétique dans les Hautes-Alpes
- **URL canonique :** `https://3bcharpente.fr/isolation-biosourcee/`
- **Fil d'Ariane visible :** Accueil › Isolation biosourcée

### Données structurées (JSON-LD)

*Le `@id` `https://3bcharpente.fr/#entreprise` doit être celui du LocalBusiness déclaré sur tout le site (fiche 01). Si la qualification RGE est déclarée en `hasCredential` sur ce LocalBusiness, attendre le numéro de certificat (voir section 7).*

**Service**

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://3bcharpente.fr/isolation-biosourcee/#service",
  "name": "Isolation biosourcée et rénovation énergétique",
  "serviceType": "Isolation thermique avec des isolants biosourcés",
  "description": "Isolation des toitures et des murs, par l'extérieur ou par l'intérieur, avec des isolants biosourcés (ouate de cellulose, fibre de bois, laines de chanvre, lin et coton), par un charpentier qualifié QUALIBAT-RGE installé à L'Argentière-la-Bessée.",
  "url": "https://3bcharpente.fr/isolation-biosourcee/",
  "provider": { "@id": "https://3bcharpente.fr/#entreprise" },
  "areaServed": [
    { "@type": "AdministrativeArea", "name": "Hautes-Alpes" },
    { "@type": "City", "name": "Briançon" },
    { "@type": "City", "name": "L'Argentière-la-Bessée" }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Prestations d'isolation biosourcée",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Isolation de toiture et sarking", "url": "https://3bcharpente.fr/isolation-toiture-sarking/" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Isolation des murs par l'extérieur (ITE) et du bâti ancien", "url": "https://3bcharpente.fr/isolation-murs-ite/" } }
    ]
  }
}
```

**FAQPage** (généré à partir de la section 4, à garder identique au texte visible)

<!-- FAQPAGE_JSONLD -->
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://3bcharpente.fr/isolation-biosourcee/#faq",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Qu'est-ce qu'un isolant biosourcé ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Un isolant biosourcé est fabriqué à partir de matières issues du vivant : bois, papier recyclé, chanvre, lin, coton. Chez 3B Charpente, nous posons surtout de la ouate de cellulose, des panneaux de fibre de bois et des laines de chanvre, lin et coton. Ils isolent du froid, aident à garder la fraîcheur l'été et peuvent absorber puis restituer une partie de l'humidité de l'air."
      }
    },
    {
      "@type": "Question",
      "name": "Quels isolants biosourcés utilisez-vous ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nous nous engageons à utiliser des matériaux biosourcés et locaux. Notre système constructif inclut l'isolation en ouate de cellulose et les panneaux de fibre de bois, auxquels nous associons des laines de chanvre, lin et coton selon la paroi. Sur un chalet de Vallouise, par exemple, les murs ont reçu 28 cm de laine de chanvre/lin/coton et de fibre de bois."
      }
    },
    {
      "@type": "Question",
      "name": "L'isolation biosourcée est-elle adaptée à la montagne ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oui, à condition d'être bien conçue et bien posée. L'hiver, ce sont l'épaisseur et la continuité de l'isolant qui comptent. L'été, les isolants denses comme la fibre de bois ralentissent la chaleur qui traverse le toit. Dans tous les cas, l'étanchéité à l'air doit être soignée pour protéger l'isolant de l'humidité. C'est ce que nous faisons sur nos chantiers du Briançonnais et de la Vallouise."
      }
    },
    {
      "@type": "Question",
      "name": "3B Charpente est-il un charpentier RGE ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oui. 3B Charpente est qualifié QUALIBAT-RGE, au nom de Jean-Michel Tardy, pour cinq domaines : isolation des murs par l'extérieur ; isolation des toitures par l'extérieur ; isolation par l'intérieur des murs ou rampants de toitures ou plafonds ; fenêtres de toit ; fenêtres, volets, portes donnant sur l'extérieur. Vous pouvez le vérifier dans l'annuaire des professionnels RGE de France Rénov'."
      }
    },
    {
      "@type": "Question",
      "name": "Quelles aides pour une isolation biosourcée ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Des aides publiques existent pour l'isolation, sous conditions, et la plupart exigent une entreprise qualifiée RGE pour les travaux concernés. Leurs règles et leurs montants changent chaque année. Le plus sûr est de contacter un conseiller France Rénov' (france-renov.gouv.fr), un service public gratuit, avant de signer un devis. Nous en parlons aussi lors de notre rencontre."
      }
    },
    {
      "@type": "Question",
      "name": "Un charpentier peut-il s'occuper de l'isolation ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oui, et c'est souvent logique : isoler une toiture ou un mur à ossature, c'est travailler sur la charpente, les chevrons, les débords de toit. En charpentiers, nous vérifions la structure et la renforçons si besoin avant d'isoler. Nous posons ensuite l'isolant, l'étanchéité à l'air, les fenêtres de toit et les parements, comme le bardage."
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
    { "@type": "ListItem", "position": 2, "name": "Isolation biosourcée", "item": "https://3bcharpente.fr/isolation-biosourcee/" }
  ]
}
```

### Textes alternatifs des images clés

| Emplacement | Photo source (dossier · légende d'origine) | Nom de fichier | Texte alternatif |
|---|---|---|---|
| Héros | `/galeries/renovation-et-isolation-d-un-chalet-a-vallouise` · « Façade Sud et sa terrasse » | `chalet-renove-isole-terrasse-meleze-vallouise.webp` | Façade sud d'un chalet des années 1980 rénové et isolé en matériaux biosourcés à Vallouise, avec sa terrasse en mélèze |
| Carte ouate | `/galeries/isolation-d-un-bati-ancien-par-l-interieur` · « insufflation de ouate de cellulose » | `insufflation-ouate-cellulose-bati-ancien.webp` | Insufflation de ouate de cellulose dans une ossature, isolation d'un bâti ancien par l'intérieur |
| Carte fibre de bois | `/galeries/isolation-d-une-toiture-ancienne-a-l-argentiere-la-bessee` · « panneaux en fibre de bois » | `panneaux-fibre-de-bois-toiture-ancienne-argentiere-la-bessee.webp` | Panneaux de fibre de bois posés sur une toiture ancienne à L'Argentière-la-Bessée |
| Section climat | `/galeries/isolation-d-un-bati-ancien-par-l-interieur` · « pose de l'étanchéité à l'air » | `pose-etancheite-air-bati-ancien.webp` | Pose de la membrane d'étanchéité à l'air avant l'isolation d'un bâti ancien par l'intérieur |
| Bandeau 3B Récup' | `/galeries/renovation-d-une-maison-d-habitation-a-l-argentiere-la-bessee` · « Bardage vieux bois » | `bardage-vieux-bois-reemploi-argentiere-la-bessee.webp` | Bardage en vieux bois de réemploi sur une maison rénovée à L'Argentière-la-Bessée |

---

## 3. Sections dans l'ordre

### 3.1 Héros

- *Rôle :* dire en une phrase qui isole, avec quoi, où, et sous quelle qualification. Donner deux preuves et deux portes d'entrée (devis, chantiers).
- *Composant Framer :* héros de la maquette (titre en deux couleurs, texte avec mots forts en gras, bouton plein vert et bouton contour, deux preuves avec pastille sauge). Le fil d'Ariane s'affiche au-dessus du titre, en petit, couleur pierre (#78716C).
- *Photo :* vraie photo de chantier à la place du collage d'ambiance (voir tableau des textes alternatifs).

**Fil d'Ariane :** Accueil › Isolation biosourcée

**Kicker :** Rénovation énergétique · Qualifié RGE

**H1 :** Isolation **biosourcée** et rénovation énergétique dans les **Hautes-Alpes**

**Texte :** 3B Charpente, charpentier installé à L'Argentière-la-Bessée depuis 2007, isole les toitures et les murs avec des **isolants biosourcés**, fabriqués à partir de matières végétales : ouate de cellulose, fibre de bois, laines de chanvre, lin et coton. Nous créons une **enveloppe isolante continue**, posée par des charpentiers **qualifiés RGE**, pour un confort d'hiver et d'été.

**Bouton plein :** Demander mon devis → `/contact/`

**Bouton contour :** Voir nos chantiers d'isolation → `#realisations`

**Preuves (pastilles sauge) :** Depuis 2007 · Qualifié QUALIBAT-RGE

**Légende photo :** Chalet des années 1980 rénové et isolé à Vallouise : 28 cm d'isolant biosourcé dans les murs, 32 cm en toiture.

### 3.2 En bref

- *Rôle :* la réponse directe, autonome, que les moteurs et les assistants IA peuvent citer telle quelle.
- *Composant :* nouveau, absent de la maquette. Encadré pleine largeur sur fond de section clair (#F2F2EC), filet vertical vert accent à gauche, texte Inter. Placé juste sous le héros.

> **En bref.** 3B Charpente, charpentier qualifié QUALIBAT-RGE à L'Argentière-la-Bessée (Hautes-Alpes), isole maisons et chalets avec des isolants biosourcés, issus du bois, du papier recyclé ou de plantes : ouate de cellulose, fibre de bois, laines de chanvre, lin et coton. Nous isolons les toitures, dont le sarking (isolant posé au-dessus des chevrons), et les murs, par l'extérieur ou par l'intérieur.

### 3.3 Isolation globale

- *Rôle :* poser la promesse validée par le client (enveloppe continue, matériaux biosourcés, confort d'hiver et d'été) et définir « biosourcé ».
- *Composant Framer :* bloc manifeste de l'accueil (titre à gauche, texte à droite), avec une photo de chantier.
- *Note de réécriture :* reprend le texte validé « Isolation globale » (« Isolez toute votre habitation et créez une enveloppe isolante continue (ITE) et optimisez l'efficacité énergétique de votre habitat grâce à notre expertise en isolation, en utilisant des matériaux biosourcés. Apportez un confort d'hiver et d'été dans votre habitation. »). Les engagements sont gardés. La phrase est découpée et les mots-clés sont ajoutés. Le sigle ITE est déplacé vers la carte « murs », car il désigne l'isolation des murs par l'extérieur, pas toute l'enveloppe.

**Kicker :** Isolation globale

**H2 :** Une enveloppe isolante **continue**, du toit aux murs

**Texte :**

Isolez toute votre habitation, pas seulement une pièce ou un pan de toit. Notre travail consiste à créer une enveloppe isolante continue : la toiture, les murs et les ouvertures sont pensés ensemble. C'est ce qui améliore vraiment l'efficacité énergétique d'une maison. C'est aussi ce qui apporte un confort d'hiver et d'été.

Pour cela, nous utilisons des matériaux **biosourcés**. Un isolant biosourcé est fabriqué à partir de matière issue du vivant : le bois, le papier recyclé, le chanvre, le lin, le coton. Ces isolants contiennent du carbone capté par les plantes pendant leur croissance. Ils peuvent aussi absorber puis restituer une partie de l'humidité de l'air, un atout dans les maisons anciennes, dont les murs doivent pouvoir sécher.

Chez 3B Charpente, ce choix vient de loin : « 3B » veut dire Bio, Bâti, Bois. Nous travaillons principalement le mélèze et le sapin des Hautes-Alpes, sciés par notre partenaire local, la Scierie Savoldelli. Nous isolons avec des matériaux de la même famille.

### 3.4 Nos isolants

- *Rôle :* montrer les trois familles d'isolants réellement posées par 3B, chacune avec une preuve de chantier.
- *Composant Framer :* trois cartes de services blanches à coins arrondis, icône dans une pastille sauge, photo en tête de carte.
- *Note de réécriture :* la phrase d'introduction reprend la FAQ validée « Durabilité » (« Notre système constructif inclut l'isolation en ouate de cellulose et les panneaux de fibre de bois… »).

**Kicker :** Nos matériaux

**H2 :** Trois familles d'isolants **biosourcés**

**Texte d'introduction :** Notre système constructif inclut l'isolation en ouate de cellulose et les panneaux de fibre de bois. Selon la paroi, nous les associons à des laines végétales. Chaque isolant a sa place.

**Carte 1 — Ouate de cellulose**

Fabriquée à partir de papier recyclé, elle se pose en vrac. Soufflée sur un plancher de combles, ou insufflée sous pression dans un caisson fermé (mur, rampant, ossature), elle remplit chaque recoin sans laisser de vide.

*Sur nos chantiers :* insufflation de ouate de cellulose dans une ossature en poutres en I, pour isoler un bâti ancien par l'intérieur.

**Lien :** Voir le chantier → `/realisations/isolation-d-un-bati-ancien-par-l-interieur/`

**Carte 2 — Fibre de bois**

Fabriquée à partir de bois défibré, elle existe en panneaux rigides et en panneaux souples. Les panneaux rigides se posent par l'extérieur, sur les murs ou au-dessus des chevrons ; certains reçoivent directement un enduit. Les panneaux souples, qu'on appelle aussi laine de bois, garnissent les ossatures et les rampants.

*Sur nos chantiers :* panneaux de fibre de bois sur une toiture ancienne à L'Argentière-la-Bessée, remplissage en laine de bois sur une surélévation à Briançon, enduit sur fibre de bois à Vallouise.

**Lien :** Voir la toiture isolée → `/realisations/isolation-d-une-toiture-ancienne-a-l-argentiere-la-bessee/`

**Carte 3 — Laines de chanvre, lin et coton**

Ces laines végétales, souvent mélangées, se présentent en rouleaux ou en panneaux semi-rigides. On les glisse entre les montants d'une ossature ou entre les chevrons. Légères, elles se combinent bien avec des panneaux de fibre de bois, plus denses.

*Sur nos chantiers :* chalet de Vallouise, avec 28 cm de laine de chanvre/lin/coton et de fibre de bois dans les murs, et 32 cm en toiture.

**Lien :** Voir le chalet → `/realisations/renovation-et-isolation-d-un-chalet-a-vallouise/`

**Bouton contour sous les cartes :** Comparer les isolants dans notre guide → `/conseils/isolant-biosource-montagne/`

*(Les trois lignes « Sur nos chantiers » se publient, en italique, en bas de chaque carte.)*

### 3.5 Climat de montagne : hiver et été

- *Rôle :* expliquer simplement le confort d'hiver, le confort d'été (déphasage) et l'étanchéité à l'air, avec la définition de chaque notion.
- *Composant Framer :* section plein cadre « forêt » sombre, titre blanc, mots en sauge, trois colonnes de texte.

**Kicker :** Climat de montagne

**H2 :** Au chaud l'hiver, **au frais l'été**

**Texte d'introduction :** Dans les Hautes-Alpes, l'hiver est long et froid. L'été, le soleil d'altitude chauffe fort les toitures et les façades exposées au sud. Une bonne isolation doit répondre aux deux saisons.

**Colonne 1 — L'hiver : garder la chaleur**

Ce qui compte, c'est l'épaisseur et la qualité de l'isolant, et surtout sa continuité. Un pont thermique, c'est-à-dire un point où l'isolant est interrompu (un plancher, un linteau, une pièce de charpente), suffit à refroidir une pièce.

**Colonne 2 — L'été : retarder la chaleur**

Ce qui compte, c'est le déphasage : le temps que met la chaleur du jour pour traverser la paroi. À épaisseur égale, les isolants denses, comme la fibre de bois en panneaux ou la ouate de cellulose, la ralentissent davantage que les isolants très légers. La chaleur arrive plus tard, souvent quand on peut aérer la nuit.

**Colonne 3 — Toute l'année : bloquer l'air**

L'étanchéité à l'air est une couche continue, membrane ou panneaux aux joints collés, qui empêche l'air de traverser les parois. Sans elle, l'isolant perd une partie de son efficacité et la vapeur d'eau de la maison peut condenser dans les murs.

### 3.6 Toiture, murs, ouvertures

- *Rôle :* distribuer vers les pages 05 et 06, et vers les ouvertures (deux domaines RGE). C'est le cœur du maillage interne de la page pilier.
- *Composant Framer :* trois cartes de services blanches, icône dans une pastille sauge, lien en bas de carte.

**Kicker :** Nos prestations d'isolation

**H2 :** Toiture, murs, ouvertures : **par où commencer ?**

**Texte d'introduction :** La chaleur s'échappe par plusieurs chemins. Nous vous aidons à choisir les travaux utiles pour votre maison, et à les enchaîner dans le bon ordre.

**Carte A — Isolation de toiture et sarking**

Le sarking est une isolation de toiture par l'extérieur : des panneaux isolants continus, posés au-dessus des chevrons, sous la couverture. La charpente reste visible et vous ne perdez pas de volume. Nous isolons aussi les rampants par l'intérieur et les combles.

**Lien :** Isolation de toiture et sarking → `/isolation-toiture-sarking/`

**Carte B — Isolation des murs : ITE et bâti ancien**

L'ITE, ou isolation thermique par l'extérieur, enveloppe les murs d'un manteau de fibre de bois, fini par un bardage bois ou un enduit. Pour le bâti ancien, nous isolons aussi par l'intérieur, avec de la ouate de cellulose insufflée dans une ossature.

**Lien :** Isolation des murs par l'extérieur → `/isolation-murs-ite/`

**Carte C — Fenêtres de toit et menuiseries**

Une fenêtre mal raccordée crée une fuite d'air au milieu d'une paroi bien isolée. Les fenêtres de toit, ainsi que les fenêtres, volets et portes donnant sur l'extérieur, font partie de nos domaines RGE. Nous les raccordons à l'isolant et à l'étanchéité à l'air.

**Liens :** Fenêtres de toit → `/isolation-toiture-sarking/#fenetres-de-toit` · Menuiseries extérieures → `/isolation-murs-ite/#menuiseries`

**Ligne sous les cartes :** Une charpente à renforcer avant d'isoler ? Voir notre page Rénovation de charpente et combles → `/renovation-charpente-combles/`

### 3.7 Qualification RGE

- *Rôle :* donner la preuve RGE avec les cinq intitulés exacts de l'annuaire, la formule autorisée sur les aides et le renvoi vers France Rénov'. Aucun montant, aucun plafond, aucune règle d'éligibilité.
- *Composant Framer :* carte blanche large à coins arrondis, liste à puces avec coches vert accent, logo QUALIBAT-RGE à droite (uniquement après validation, voir section 7).

**Kicker :** Qualification RGE

**H2 :** Un charpentier **qualifié RGE** dans les Hautes-Alpes

**Texte :**

RGE signifie « Reconnu garant de l'environnement ». Ce signe de qualité est attribué par domaine de travaux. 3B Charpente est qualifié QUALIBAT-RGE : la qualification est au nom de son fondateur, Jean-Michel Tardy, et figure dans l'annuaire RGE de l'ADEME (date de rattachement : 2 octobre 2025). Elle couvre cinq domaines :

- isolation des murs par l'extérieur ;
- isolation des toitures par l'extérieur ;
- isolation par l'intérieur des murs ou rampants de toitures ou plafonds ;
- fenêtres de toit ;
- fenêtres, volets, portes donnant sur l'extérieur.

Le label RGE ouvre l'accès aux aides publiques à la rénovation énergétique, sous conditions. Ces aides (MaPrimeRénov', certificats d'économies d'énergie, éco-prêt à taux zéro…) changent souvent. Pour savoir ce qui s'applique à votre projet, contactez un conseiller France Rénov', service public gratuit, sur france-renov.gouv.fr. Nous en parlons aussi lors de notre rencontre pour le devis.

`[À VALIDER AVEC JEAN : numéro du certificat QUALIBAT et date de fin de validité, pour afficher le logo QUALIBAT-RGE et un lien vers la fiche de l'annuaire]`

**Bouton plein :** Comprendre les aides avec un artisan RGE → `/conseils/aides-renovation-artisan-rge/`

**Bouton contour :** Vérifier notre qualification sur France Rénov' → `https://france-renov.gouv.fr/annuaire-rge` (lien externe, nouvel onglet ; vérifier l'adresse exacte à l'intégration)

### 3.8 Réalisations

- *Rôle :* prouver par de vrais chantiers, avec commune et technique. Ancre `#realisations` (cible du bouton du héros).
- *Composant Framer :* cartes de réalisations avec l'étiquette « 3B Charpente » posée sur la photo et le lien « Voir les travaux → ».

**Kicker :** Nos chantiers d'isolation

**H2 :** Des isolations **en photos**

**Carte 1 — Isolation d'un bâti ancien par l'intérieur**

Ossature en poutres en I, panneaux OSB3, étanchéité à l'air, ouate de cellulose insufflée, puis doublage, encadrements et bardage en pin. Commune : `[À VALIDER AVEC JEAN : commune du chantier]`

**Lien :** Voir les travaux → `/realisations/isolation-d-un-bati-ancien-par-l-interieur/`

**Carte 2 — Isolation d'une toiture ancienne à L'Argentière-la-Bessée**

Doublage pour le renfort et l'isolation, panneaux de fibre de bois, étanchéité à l'air, étanchéité à l'eau et ventilation, fenêtre de toit de 78 × 98 cm.

**Lien :** Voir les travaux → `/realisations/isolation-d-une-toiture-ancienne-a-l-argentiere-la-bessee/`

**Carte 3 — Rénovation et isolation d'un chalet à Vallouise**

Chalet des années 1980 : 28 cm de laine de chanvre/lin/coton et de fibre de bois dans les murs, 32 cm en toiture, bardage en mélèze et enduit sur fibre de bois.

**Lien :** Voir les travaux → `/realisations/renovation-et-isolation-d-un-chalet-a-vallouise/`

**Ligne « Voir aussi » :** Rénovation énergétique et ouverture d'une lucarne à Saint-Martin-de-Queyrières → `/realisations/renovation-energetique-et-ouverture-d-une-lucarne-a-saint-martin-de-queyriere/` · Rénovation d'une copropriété à Briançon → `/realisations/renovation-d-une-copropriete-a-briancon/`

**Bouton contour :** Toutes nos réalisations → `/realisations/`

### 3.9 Méthode

- *Rôle :* rassurer sur le déroulé, avec les engagements validés (étude sur mesure, devis détaillé, calendrier estimatif). Aucun délai chiffré.
- *Composant Framer :* onglets numérotés de 01 à 05 (repris de la méthode 3B Récup').
- *Note de réécriture :* l'étape 02 reprend la phrase validée « chaque projet chez 3B Charpente débute par une étude sur mesure » ; l'étape 03 reprend l'esprit des FAQ validées « Devis » et « Délais ».

**Kicker :** Notre méthode

**H2 :** De la visite **au chantier fini**

**01 — Rencontre et visite.** Nous venons voir la maison : charpente, murs, ouvertures, traces d'humidité. Vous nous dites ce qui vous gêne : le froid, la surchauffe sous le toit, les courants d'air, un projet d'aménagement.

**02 — Étude sur mesure.** Chaque projet chez 3B Charpente débute par une étude sur mesure. Nous choisissons la technique, par l'extérieur ou par l'intérieur, puis l'isolant et son épaisseur, paroi par paroi.

**03 — Devis détaillé.** Nous vous remettons un devis détaillé et un calendrier estimatif. C'est le bon moment pour faire le point sur les aides avec votre conseiller France Rénov'.

**04 — Chantier.** Renfort de charpente si besoin, pose des isolants, de l'étanchéité à l'air et des raccords autour des fenêtres, des poutres et des conduits.

**05 — Finitions.** Bardage, enduit, lambris ou doublage intérieur : la maison retrouve son allure, avec une enveloppe plus performante.

### 3.10 3B Récup'

- *Rôle :* relier l'isolation au réemploi (lien obligatoire vers `/3b-recup/`).
- *Composant Framer :* bandeau d'appel à l'action vert forêt, formes organiques vert clair en fond, photo à droite.

**Kicker :** 3B Récup'

**H2 :** Rénover, c'est aussi **réemployer**

**Texte :** Avant d'isoler, il faut parfois déposer : une vieille charpente, un plancher, un bardage. 3B Récup', notre initiative dédiée au réemploi des matériaux et à la déconstruction sélective, donne une seconde vie à ce bois. Il est trié, nettoyé et usiné dans nos ateliers, puis reposé sur nos chantiers : bardage vieux bois, garde-corps en bois de réemploi.

**Bouton :** Découvrir 3B Récup' → `/3b-recup/`

### 3.11 FAQ

- *Rôle :* répondre aux questions telles qu'on les tape ; balisage FAQPage.
- *Composant Framer :* FAQ en accordéon dans des cartes blanches.

**Kicker :** Questions fréquentes

**H2 :** Vos questions sur **l'isolation biosourcée**

*(Questions et réponses : voir section 4, à reprendre mot pour mot.)*

### 3.12 Appel à l'action final

- *Rôle :* conclure vers le devis, avec les coordonnées identiques au caractère près.
- *Composant Framer :* bandeau d'appel à l'action vert forêt avec la grille ronde translucide.
- *Note de réécriture :* reprend l'appel validé « Prêt à transformer votre espace ? … chaque projet chez 3B Charpente débute par une étude sur mesure. » et la signature validée.

**Kicker :** Votre projet

**H2 :** Prêt à isoler **votre maison** ?

**Texte :** Chaque projet chez 3B Charpente débute par une étude sur mesure. Parlez-nous de votre maison : nous venons la voir, nous discutons de vos besoins et nous vous proposons un devis détaillé.

**Bouton plein :** Demander mon devis → `/contact/`

**Bouton contour :** Appeler le 06 34 67 31 49 → `tel:+33634673149`

**Coordonnées :** 3B Charpente, 5 rue Saint-Michel, 05120 L'Argentière-la-Bessée, 06 34 67 31 49

**Signature :** « Construire durablement, c'est construire pour l'avenir. »

---

## 4. FAQ

### Q1. Qu'est-ce qu'un isolant biosourcé ?

Un isolant biosourcé est fabriqué à partir de matières issues du vivant : bois, papier recyclé, chanvre, lin, coton. Chez 3B Charpente, nous posons surtout de la ouate de cellulose, des panneaux de fibre de bois et des laines de chanvre, lin et coton. Ils isolent du froid, aident à garder la fraîcheur l'été et peuvent absorber puis restituer une partie de l'humidité de l'air.

### Q2. Quels isolants biosourcés utilisez-vous ?

Nous nous engageons à utiliser des matériaux biosourcés et locaux. Notre système constructif inclut l'isolation en ouate de cellulose et les panneaux de fibre de bois, auxquels nous associons des laines de chanvre, lin et coton selon la paroi. Sur un chalet de Vallouise, par exemple, les murs ont reçu 28 cm de laine de chanvre/lin/coton et de fibre de bois.

<!-- Note de réécriture : Q2 reprend la FAQ validée « Durabilité ». La phrase sur le bois de réemploi est conservée sur la page 3B Récup' et dans le bandeau 3.10. -->

### Q3. L'isolation biosourcée est-elle adaptée à la montagne ?

Oui, à condition d'être bien conçue et bien posée. L'hiver, ce sont l'épaisseur et la continuité de l'isolant qui comptent. L'été, les isolants denses comme la fibre de bois ralentissent la chaleur qui traverse le toit. Dans tous les cas, l'étanchéité à l'air doit être soignée pour protéger l'isolant de l'humidité. C'est ce que nous faisons sur nos chantiers du Briançonnais et de la Vallouise.

### Q4. 3B Charpente est-il un charpentier RGE ?

Oui. 3B Charpente est qualifié QUALIBAT-RGE, au nom de Jean-Michel Tardy, pour cinq domaines : isolation des murs par l'extérieur ; isolation des toitures par l'extérieur ; isolation par l'intérieur des murs ou rampants de toitures ou plafonds ; fenêtres de toit ; fenêtres, volets, portes donnant sur l'extérieur. Vous pouvez le vérifier dans l'annuaire des professionnels RGE de France Rénov'.

### Q5. Quelles aides pour une isolation biosourcée ?

Des aides publiques existent pour l'isolation, sous conditions, et la plupart exigent une entreprise qualifiée RGE pour les travaux concernés. Leurs règles et leurs montants changent chaque année. Le plus sûr est de contacter un conseiller France Rénov' (france-renov.gouv.fr), un service public gratuit, avant de signer un devis. Nous en parlons aussi lors de notre rencontre.

### Q6. Un charpentier peut-il s'occuper de l'isolation ?

Oui, et c'est souvent logique : isoler une toiture ou un mur à ossature, c'est travailler sur la charpente, les chevrons, les débords de toit. En charpentiers, nous vérifions la structure et la renforçons si besoin avant d'isoler. Nous posons ensuite l'isolant, l'étanchéité à l'air, les fenêtres de toit et les parements, comme le bardage.

---

## 5. Liens internes

| Texte du lien (ancre) | Page visée | Emplacement |
|---|---|---|
| Demander mon devis | `/contact/` | Héros, appel final |
| Voir nos chantiers d'isolation | `#realisations` | Héros |
| Voir le chantier | `/realisations/isolation-d-un-bati-ancien-par-l-interieur/` | Carte ouate (3.4) |
| Voir la toiture isolée | `/realisations/isolation-d-une-toiture-ancienne-a-l-argentiere-la-bessee/` | Carte fibre de bois (3.4) |
| Voir le chalet | `/realisations/renovation-et-isolation-d-un-chalet-a-vallouise/` | Carte laines (3.4) |
| Comparer les isolants dans notre guide | `/conseils/isolant-biosource-montagne/` | Sous les cartes (3.4) |
| Isolation de toiture et sarking | `/isolation-toiture-sarking/` | Carte A (3.6), prestation proche n° 1 |
| Isolation des murs par l'extérieur | `/isolation-murs-ite/` | Carte B (3.6), prestation proche n° 2 |
| Fenêtres de toit | `/isolation-toiture-sarking/#fenetres-de-toit` | Carte C (3.6) |
| Menuiseries extérieures | `/isolation-murs-ite/#menuiseries` | Carte C (3.6) |
| Rénovation de charpente et combles | `/renovation-charpente-combles/` | Sous les cartes (3.6) |
| Comprendre les aides avec un artisan RGE | `/conseils/aides-renovation-artisan-rge/` | Section RGE (3.7) |
| Vérifier notre qualification sur France Rénov' | `https://france-renov.gouv.fr/annuaire-rge` (externe) | Section RGE (3.7) |
| Voir les travaux (× 3) | trois fiches réalisations | Section 3.8 |
| Saint-Martin-de-Queyrières, copropriété à Briançon | deux fiches réalisations | « Voir aussi » (3.8) |
| Toutes nos réalisations | `/realisations/` | Section 3.8 |
| Découvrir 3B Récup' | `/3b-recup/` | Bandeau 3.10 |

**Liens entrants à prévoir :** menu « Prestations », accueil (carte « Isolation globale »), pages 05 et 06 (fil d'Ariane et lien retour « Toutes nos solutions d'isolation biosourcée »), guides 23 et 26, fiches réalisations d'isolation (lien « Prestation : isolation biosourcée »).

---

## 6. Photos

### Photos à utiliser (galerie actuelle)

| Section | Dossier | Photo (légende d'origine) |
|---|---|---|
| Héros | `/galeries/renovation-et-isolation-d-un-chalet-a-vallouise` | « Façade Sud et sa terrasse » |
| 3.3 Isolation globale | `/galeries/renovation-et-isolation-d-un-chalet-a-vallouise` | « Façade Nord et Ouest » |
| 3.4 Carte ouate | `/galeries/isolation-d-un-bati-ancien-par-l-interieur` | « insufflation de ouate de cellulose » |
| 3.4 Carte fibre de bois | `/galeries/isolation-d-une-toiture-ancienne-a-l-argentiere-la-bessee` | « panneaux en fibre de bois » |
| 3.4 Carte laines | `/galeries/surelevation-en-ossature-bois-d-une-maison-a-briancon` | « 1 remplissage en laine de bois » (en attendant une photo de laine de chanvre/lin/coton) |
| 3.5 Climat | `/galeries/isolation-d-un-bati-ancien-par-l-interieur` | « pose de l'étanchéité à l'air » |
| 3.6 Carte A | `/galeries/renovation-energetique-et-ouverture-d-une-lucarne-a-saint-martin-de-queyriere` | « étanchéité à l'air et caissons d'isolation » |
| 3.6 Carte B | `/galeries/isolation-d-un-bati-ancien-par-l-interieur` | « poutre en I » |
| 3.6 Carte C | `/galeries/isolation-d-une-toiture-ancienne-a-l-argentiere-la-bessee` | « vue de dessous d'un velux 78x98 » |
| 3.8 Carte 1 | `/galeries/isolation-d-un-bati-ancien-par-l-interieur` | « poutre en I » ou « bardage posé » |
| 3.8 Carte 2 | `/galeries/isolation-d-une-toiture-ancienne-a-l-argentiere-la-bessee` | « couverture terminée » |
| 3.8 Carte 3 | `/galeries/renovation-et-isolation-d-un-chalet-a-vallouise` | « Façade Nord et Ouest » |
| 3.9 Méthode | `/galeries/renovation-d-une-copropriete-a-briancon` | « Soufflage après découverture » |
| 3.10 3B Récup' | `/galeries/renovation-d-une-maison-d-habitation-a-l-argentiere-la-bessee` | « Bardage vieux bois » |

### Photos à demander à Jean

1. Pose de laine de chanvre/lin/coton entre montants ou chevrons (aujourd'hui aucune photo de cet isolant).
2. Les trois isolants en gros plan, à l'atelier : sacs de ouate, panneaux de fibre de bois, rouleaux de laine végétale (pour les cartes 3.4, en format carré).
3. Une photo d'équipe sur un chantier d'isolation (pour humaniser la page).
4. Un « avant / après » d'une même façade isolée (Vallouise : « Façade Ouest avant les travaux » existe, il manque la même vue après).
5. Le certificat QUALIBAT-RGE (pour le logo et la vérification).

---

## 7. Points à valider avec Jean

1. **SIRET de la qualification RGE.** L'annuaire de l'ADEME indique le SIRET 494 482 714 00024. Les mentions légales indiquent 494 482 714 00016. Quel est l'établissement actif ? Il faut le même partout (mentions légales, données structurées, devis).
2. **Certificat QUALIBAT-RGE :** numéro, date de fin de validité, et accord pour afficher le logo et le lien vers l'annuaire.
3. **Pose de la ouate :** 3B souffle-t-il et insuffle-t-il la ouate lui-même (machine en propre) ou avec un partenaire ? La page dit seulement « nous posons » et « insufflation » : à confirmer.
4. **Enduit sur fibre de bois** (Vallouise) : réalisé par 3B ou par un façadier partenaire ? La méthode (étape 05) cite l'enduit parmi les finitions.
5. **Marques d'isolants :** Jean souhaite-t-il citer des fabricants ? Utilise-t-il d'autres isolants biosourcés (paille, liège, laine de mouton…) ? La page n'en parle pas tant que ce n'est pas confirmé.
6. **Chantier « Isolation d'un bâti ancien par l'intérieur » :** commune, nature du mur, et emplacement du bardage en pin (intérieur ou extérieur).
7. **Toiture ancienne à L'Argentière-la-Bessée :** que désigne exactement le « doublage pour le renfort et l'isolation » (doublage des chevrons ?) La toiture a-t-elle été isolée par l'extérieur ou par l'intérieur ?
8. **Accompagnement aux aides :** 3B aide-t-il à monter les dossiers (MaPrimeRénov', CEE) ou travaille-t-il avec un partenaire ? La page renvoie seulement vers France Rénov'.
9. **Preuve « +100 projets » :** non utilisée ici, faute de validation. À confirmer pour l'accueil.
10. **Phrase de Jean :** une citation courte sur son choix des isolants biosourcés renforcerait la page (bloc citation possible après 3.3).
