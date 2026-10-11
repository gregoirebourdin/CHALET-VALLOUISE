# Fiche page 05 — Isolation de toiture et sarking

> **Adresse :** `/isolation-toiture-sarking/` · **Phase :** 1 · **Type :** page de prestation, rattachée à la page pilier `/isolation-biosourcee/` (04).
> **Sources :** `00-brief.md` (faits vérifiés, textes validés, règles SEO et GEO) et `realisations-source.md`. Tout fait propre à 3B Charpente vient de ces deux fichiers. Ce qui manque est signalé `[À VALIDER AVEC JEAN : …]` et doit rester visible tant que Jean n'a pas répondu.
> **Conventions :** dans les titres, les mots entre `**` passent en vert accent (#336233), ou en vert sauge (#A3D2A3) sur fond sombre. Les lignes en italique qui commencent par un tiret (*Rôle*, *Composant*, *Photo*, *Note*) sont des consignes : elles ne se publient pas. Tout le reste est du texte prêt à coller.
> **Attention :** la galerie ne contient pas encore de chantier explicitement présenté comme un « sarking ». La page s'appuie sur la qualification RGE « isolation des toitures par l'extérieur », sur le texte validé « isolation par l'extérieur pour la toiture (type Sarking) » et sur des chantiers de toiture réels, sans les requalifier. Voir section 7, point 1.

---

## 1. Carte d'identité

- **Adresse :** `https://3bcharpente.fr/isolation-toiture-sarking/`
- **Objectif de la page :**
  - se positionner sur « isolation toiture » et « sarking » avec un angle charpentier : la toiture s'isole en regardant d'abord la charpente ;
  - expliquer le sarking (isolation par l'extérieur) et le comparer à l'isolation des rampants par l'intérieur et des combles ;
  - montrer l'intérêt de coupler isolation et réfection de couverture ;
  - couvrir le domaine RGE « fenêtres de toit » ;
  - générer des demandes de devis.
- **Visiteurs visés :**
  - propriétaires dont la couverture arrive en fin de vie, ou qui ont trop froid l'hiver et trop chaud l'été sous les combles ;
  - propriétaires qui aménagent leurs combles ;
  - copropriétés qui refont leur toiture (référence : copropriété à Briançon).
- **Mot-clé principal :** isolation toiture (6 600 recherches par mois).
- **Mots-clés secondaires :**
  - sarking (3 200) ;
  - variantes à placer naturellement : isolation toiture par l'extérieur, isolation des rampants, isolation sous toiture, isolation toiture fibre de bois, fenêtre de toit ;
  - longue traîne locale, non mesurée : isolation toiture hautes alpes, sarking briançon, isolation toiture l'argentière-la-bessée.
- **Intention de recherche :** information et comparaison (qu'est-ce que le sarking, extérieur ou intérieur) qui débouche sur une recherche d'entreprise locale RGE.
- **Pages liées :**
  - page pilier : `/isolation-biosourcee/` (04) ;
  - prestations proches : `/renovation-charpente-combles/` (03) et `/isolation-murs-ite/` (06) ;
  - guides : `/conseils/isolant-biosource-montagne/` (23), `/conseils/aides-renovation-artisan-rge/` (26) ;
  - `/3b-recup/`, trois fiches réalisations, `/contact/`.

---

## 2. SEO

- **Balise title** (56 caractères) : `Isolation toiture et sarking Hautes-Alpes | 3B Charpente`
- **Meta description** (153 caractères) : `Isolation de toiture par l'extérieur (sarking) ou par l'intérieur, en fibre de bois et ouate. Charpentier RGE à L'Argentière-la-Bessée. Devis sur mesure.`
- **H1 :** Isolation de toiture et sarking dans les Hautes-Alpes
- **URL canonique :** `https://3bcharpente.fr/isolation-toiture-sarking/`
- **Fil d'Ariane visible :** Accueil › Isolation biosourcée › Isolation de toiture et sarking

### Données structurées (JSON-LD)

*Le `@id` `https://3bcharpente.fr/#entreprise` doit être celui du LocalBusiness déclaré sur tout le site (fiche 01).*

**Service**

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://3bcharpente.fr/isolation-toiture-sarking/#service",
  "name": "Isolation de toiture et sarking",
  "serviceType": "Isolation de toiture par l'extérieur (sarking) et par l'intérieur",
  "description": "Isolation des toitures par l'extérieur (sarking, isolant continu au-dessus des chevrons) ou par l'intérieur des rampants et des combles, avec des isolants biosourcés, et pose de fenêtres de toit, par un charpentier qualifié QUALIBAT-RGE à L'Argentière-la-Bessée.",
  "url": "https://3bcharpente.fr/isolation-toiture-sarking/",
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
  "@id": "https://3bcharpente.fr/isolation-toiture-sarking/#faq",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Qu'est-ce que le sarking en toiture ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Le sarking est une isolation de toiture par l'extérieur. Après dépose de la couverture, on pose des panneaux isolants rigides, souvent en fibre de bois, au-dessus des chevrons et sans interruption. On referme avec un écran de sous-toiture, une lame d'air ventilée et une couverture neuve. La charpente reste visible et le volume intérieur est conservé."
      }
    },
    {
      "@type": "Question",
      "name": "Sarking ou isolation par l'intérieur : que choisir ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Tout dépend de votre couverture. Si elle est à refaire, le sarking est logique : on isole pendant que le toit est ouvert, sans perdre de volume. Si elle est saine, l'isolation des rampants par l'intérieur évite de la déposer, mais réduit un peu la hauteur sous plafond et cache en général la charpente. Nous vous conseillons après une visite."
      }
    },
    {
      "@type": "Question",
      "name": "Faut-il refaire la couverture pour faire un sarking ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oui. Le sarking se pose au-dessus des chevrons, donc sous la couverture : il faut la déposer, puis la reposer ou la remplacer. C'est pourquoi il est surtout intéressant quand la toiture arrive en fin de vie. Certains matériaux de couverture ou bois en bon état peuvent parfois être réemployés : nous en parlons lors de la visite."
      }
    },
    {
      "@type": "Question",
      "name": "Quelle épaisseur d'isolant pour une toiture en montagne ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Il n'y a pas de chiffre unique : l'épaisseur dépend de l'isolant, de la charpente, de la technique choisie et de la performance visée. À titre d'exemple, sur un chalet des années 1980 à Vallouise, nous avons isolé la toiture avec 32 cm de laine de chanvre/lin/coton et de fibre de bois. Nous définissons l'épaisseur lors de l'étude de votre projet."
      }
    },
    {
      "@type": "Question",
      "name": "Faut-il une autorisation pour isoler sa toiture par l'extérieur ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Le plus souvent, oui. Un sarking rehausse la toiture de l'épaisseur de l'isolant et peut changer son aspect : une déclaration préalable de travaux est en général demandée en mairie, et les règles du plan local d'urbanisme s'appliquent. Dans certains secteurs protégés, l'avis de l'architecte des Bâtiments de France peut être requis. Renseignez-vous en mairie avant de lancer les travaux."
      }
    },
    {
      "@type": "Question",
      "name": "Le sarking donne-t-il droit à des aides ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "L'isolation des toitures par l'extérieur peut ouvrir droit à des aides publiques, sous conditions, quand elle est réalisée par une entreprise qualifiée RGE dans ce domaine. 3B Charpente l'est, avec la qualification QUALIBAT-RGE. Les montants et les conditions changent chaque année : renseignez-vous auprès d'un conseiller France Rénov' (france-renov.gouv.fr) avant de signer votre devis."
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
    { "@type": "ListItem", "position": 3, "name": "Isolation de toiture et sarking", "item": "https://3bcharpente.fr/isolation-toiture-sarking/" }
  ]
}
```

### Textes alternatifs des images clés

| Emplacement | Photo source (dossier · légende d'origine) | Nom de fichier | Texte alternatif |
|---|---|---|---|
| Héros | `/galeries/isolation-d-une-toiture-ancienne-a-l-argentiere-la-bessee` · « panneaux en fibre de bois » | `isolation-toiture-fibre-de-bois-argentiere-la-bessee.webp` | Panneaux de fibre de bois posés lors de l'isolation d'une toiture ancienne à L'Argentière-la-Bessée |
| Comparatif | `/galeries/isolation-d-une-toiture-ancienne-a-l-argentiere-la-bessee` · « doublage pour le renfort et l'isolation » | `doublage-renfort-isolation-toiture-argentiere-la-bessee.webp` | Doublage de charpente pour le renfort et l'isolation d'une toiture ancienne à L'Argentière-la-Bessée |
| Réfection | `/galeries/renovation-d-une-copropriete-a-briancon` · « Soufflage après découverture » | `soufflage-isolant-apres-decouverture-copropriete-briancon.webp` | Soufflage de l'isolant après dépose de la couverture, rénovation d'une copropriété à Briançon |
| Fenêtres de toit | `/galeries/isolation-d-une-toiture-ancienne-a-l-argentiere-la-bessee` · « vue de dessous d'un velux 78x98 » | `fenetre-de-toit-78x98-toiture-isolee-argentiere-la-bessee.webp` | Fenêtre de toit de 78 × 98 cm vue de dessous, dans un rampant isolé à L'Argentière-la-Bessée |
| Étapes | `/galeries/isolation-d-une-toiture-ancienne-a-l-argentiere-la-bessee` · « étanchéité à l'eau et ventilation » | `ecran-sous-toiture-ventilation-argentiere-la-bessee.webp` | Écran d'étanchéité à l'eau et lame de ventilation sous la couverture d'une toiture isolée à L'Argentière-la-Bessée |

---

## 3. Sections dans l'ordre

### 3.1 Héros

- *Rôle :* poser le sujet (isolation de toiture, sarking), le lieu et l'angle charpentier, avec deux preuves.
- *Composant Framer :* héros de la maquette (titre en deux couleurs, texte avec mots forts en gras, bouton plein vert, bouton contour, deux preuves avec pastille sauge). Fil d'Ariane au-dessus du titre, en petit, couleur pierre.
- *Photo :* vraie photo de chantier (panneaux de fibre de bois sur la toiture ancienne de L'Argentière-la-Bessée).

**Fil d'Ariane :** Accueil › Isolation biosourcée › Isolation de toiture et sarking

**Kicker :** Isolation de toiture · Qualifié RGE

**H1 :** Isolation de toiture et **sarking** dans les **Hautes-Alpes**

**Texte :** Dans une maison peu isolée, le toit est souvent la première source de pertes de chaleur, et la première à surchauffer l'été. 3B Charpente, charpentier à L'Argentière-la-Bessée depuis 2007, isole les toitures avec des **isolants biosourcés** (issus du bois ou de plantes) : par l'extérieur avec le **sarking**, par l'intérieur sous les rampants, ou sur le plancher des combles. Avant d'isoler, **nous vérifions la charpente**.

**Bouton plein :** Demander mon devis → `/contact/`

**Bouton contour :** Sarking ou intérieur : comparer → `#comparatif`

**Preuves (pastilles sauge) :** Qualifié RGE toitures · Charpentiers depuis 2007

**Légende photo :** Panneaux de fibre de bois sur une toiture ancienne, à L'Argentière-la-Bessée.

### 3.2 En bref

- *Rôle :* réponse directe et autonome, reprenable par les moteurs et les assistants IA.
- *Composant :* nouveau. Encadré pleine largeur sur fond de section clair (#F2F2EC), filet vertical vert accent, texte Inter. Juste sous le héros.

> **En bref.** 3B Charpente, charpentier qualifié RGE à L'Argentière-la-Bessée, isole les toitures des Hautes-Alpes en fibre de bois, ouate de cellulose et laines végétales. Le sarking pose l'isolant par l'extérieur, au-dessus des chevrons : c'est la bonne option quand la couverture est à refaire. Sinon, nous isolons les rampants par l'intérieur ou les combles. Nous posons aussi les fenêtres de toit.

### 3.3 Le sarking, c'est quoi ?

- *Rôle :* définir le sarking en une phrase, puis expliquer ce qu'il change. Bloc très « citable » pour les IA.
- *Composant Framer :* bloc manifeste (titre à gauche, texte à droite) suivi d'un schéma en coupe.
- *Note de réécriture :* s'appuie sur le texte validé « Construction neuve et maison ossature bois » (« isolation par l'extérieur pour la toiture (type Sarking) »), étendu à la rénovation, couverte par le domaine RGE « isolation des toitures par l'extérieur ».

**Kicker :** Le sarking, c'est quoi ?

**H2 :** Le sarking : l'isolant **au-dessus** de la charpente

**Texte :**

Le sarking est une technique d'isolation de toiture par l'extérieur. On dépose la couverture, puis on pose des panneaux isolants rigides au-dessus des chevrons, en continu sur tout le pan de toit. On referme ensuite avec un écran de sous-toiture, une lame d'air ventilée et une couverture neuve. Le mot vient d'Écosse, où il désigne les planches posées sur les chevrons, sous l'ardoise.

Ce que ça change :

- **l'isolant ne s'arrête pas aux chevrons** : il passe d'un seul tenant au-dessus de la charpente, ce qui limite les ponts thermiques ;
- **vous gardez tout le volume** sous la toiture, et la charpente reste visible depuis l'intérieur ;
- **le confort d'été progresse** : avec des panneaux de fibre de bois, denses, la chaleur du soleil met plus de temps à traverser le toit ;
- **les travaux se font par le dessus**, sans démonter les pièces habitées.

**Schéma en coupe (à faire dessiner) — légendes, de l'intérieur vers l'extérieur :**

1. Chevrons de la charpente, laissés apparents.
2. Support (lambris ou panneau) et couche d'étanchéité à l'air, qui empêche l'air de la maison de traverser la paroi.
3. Panneaux de fibre de bois, posés en continu.
4. Écran de sous-toiture, qui protège de l'eau.
5. Contre-lattes, qui créent une lame d'air ventilée.
6. Liteaux.
7. Couverture : tuiles, ardoises, bac, bardeaux de mélèze…

**Légende du schéma :** Principe du sarking. La composition exacte dépend de chaque toiture.

### 3.4 Sarking ou rampants par l'intérieur ?

- *Rôle :* aider à choisir, sans jargon, et montrer que 3B maîtrise les deux techniques (deux domaines RGE). Ancre `#comparatif`.
- *Composant :* nouveau. Tableau à trois colonnes dans une carte blanche à coins arrondis ; sur mobile, deux cartes empilées (« Sarking » puis « Par l'intérieur »).

**Kicker :** Comment choisir

**H2 :** Sarking ou rampants **par l'intérieur** ?

**Texte d'introduction :** Les deux techniques font partie de notre qualification RGE : « isolation des toitures par l'extérieur » et « isolation par l'intérieur des murs ou rampants de toitures ou plafonds ». Le bon choix dépend surtout de l'état de votre couverture.

| | Sarking (par l'extérieur) | Rampants (par l'intérieur) |
|---|---|---|
| Couverture | Déposée, puis refaite | Conservée si elle est saine |
| Volume sous toiture | Conservé | Réduit de l'épaisseur ajoutée sous les chevrons |
| Charpente | Reste apparente | Le plus souvent habillée |
| Continuité de l'isolant | Continue au-dessus des chevrons | À soigner entre et sous les chevrons |
| Hauteur du toit | Rehaussée : rives, faîtage et cheminées à raccorder | Inchangée |
| Chantier | Toit ouvert, à caler sur la météo | À l'abri, depuis l'intérieur |
| Mairie | Déclaration préalable le plus souvent | En général rien, si l'aspect extérieur ne change pas |

**Texte sous le tableau :**

**Par l'intérieur**, l'isolant se loge entre les chevrons, puis sous les chevrons pour couper les ponts thermiques. Il faut souvent gagner de l'épaisseur : on peut doubler la charpente, ce qui la renforce en même temps. Une couche d'étanchéité à l'air, côté pièce, empêche l'air chaud et humide de la maison de traverser l'isolant. On finit par un lambris ou un parement.

**Dans les combles perdus**, quand le grenier n'est pas habité, on isole le plancher plutôt que le toit. La ouate de cellulose soufflée en vrac s'y prête bien : elle se glisse partout, autour des solives et des gaines.

**Notre conseil :** si la couverture est en fin de vie, profitez-en pour isoler par l'extérieur. Si elle est saine, l'isolation par l'intérieur évite de la refaire.

**Légende photo :** Doublage pour le renfort et l'isolation d'une toiture ancienne, à L'Argentière-la-Bessée.

### 3.5 Couverture à refaire : le bon moment pour isoler

- *Rôle :* relier isolation et rénovation de toiture, mettre en avant le regard du charpentier (structure, neige) et renvoyer vers la page 03 et vers 3B Récup'.
- *Composant Framer :* bloc texte et photo en deux colonnes, sur fond crème.
- *Note de réécriture :* reprend l'esprit du texte validé « Rénovations de charpente et toiture » (« Renforcez la structure de toiture et créez des ouvertures (lucarnes, fenêtres de toit, …) »).

**Kicker :** Rénovation de toiture

**H2 :** Couverture à refaire ? **Le bon moment** pour isoler

**Texte :**

Refaire une couverture demande un échafaudage, la dépose des tuiles, des ardoises ou des bardeaux, puis une repose. Le toit est ouvert, la charpente est accessible : c'est le moment d'isoler par l'extérieur, et de régler ce qui ne va pas dans la structure.

En charpentiers, nous regardons d'abord la charpente : pièces abîmées, fermes à reprendre, sections trop faibles, débords de toit à refaire. En montagne, une toiture porte la neige tout l'hiver. Un isolant neuf ne doit pas cacher une structure fatiguée.

À Briançon, sur une copropriété, nous avons repris la charpente et les fermes, isolé la toiture par soufflage après découverture, recréé une dépassée de toiture et refait la couverture. À Saint-Martin-de-Queyrières, la rénovation énergétique d'une toiture s'est accompagnée de l'ouverture d'une lucarne, avec des caissons d'isolation et une étanchéité à l'air.

Les bois sains que l'on dépose ne partent pas forcément à la benne : avec 3B Récup', nous les trions et les réemployons quand c'est possible.

**Bouton contour :** Rénovation de charpente et combles → `/renovation-charpente-combles/`

**Lien texte :** 3B Récup' → `/3b-recup/`

**Légende photo :** Soufflage de l'isolant après découverture, sur une copropriété à Briançon.

### 3.6 Fenêtres de toit

- *Rôle :* couvrir le domaine RGE « fenêtres de toit », avec une explication de pose et des preuves. Ancre `#fenetres-de-toit` (cible des liens des pages 04 et 26).
- *Composant Framer :* carte blanche large avec photo à gauche, icône dans une pastille sauge.

**Kicker :** Fenêtres de toit

**H2 :** Des fenêtres de toit **bien raccordées**

**Texte :**

Les fenêtres de toit font partie de nos domaines RGE. Elles apportent la lumière sous les combles. Mais une fenêtre mal raccordée crée une fuite d'air et un pont thermique au milieu d'un toit bien isolé.

La pose se joue dans la charpente et dans les raccords. Il faut un chevêtre autour de l'ouverture (un cadre en bois qui reprend les chevrons coupés), un encadrement, puis le raccord de l'isolant, de l'étanchéité à l'air et de l'écran de sous-toiture tout autour de la fenêtre.

Sur la toiture ancienne isolée à L'Argentière-la-Bessée, une fenêtre de toit de 78 × 98 cm a été intégrée au rampant isolé. Lors de la réfection d'une charpente dans la même commune, nous avons posé les encadrements des fenêtres de toit et des panneaux de fibre de bois.

**Lien texte :** Voir la réfection de charpente à L'Argentière-la-Bessée → `/realisations/refection-d-une-charpente-a-l-argentiere-la-bessee/`

**Légende photo :** Fenêtre de toit de 78 × 98 cm vue de dessous, dans un rampant isolé à L'Argentière-la-Bessée.

### 3.7 Les étapes d'un sarking

- *Rôle :* liste d'étapes claire (format apprécié des moteurs et des IA). Texte général : il décrit la technique, pas un engagement de délai.
- *Composant Framer :* onglets numérotés de 01 à 06 (repris de la méthode 3B Récup').

**Kicker :** Déroulé d'un chantier

**H2 :** Les étapes d'un **sarking**

**Texte d'introduction :** Chaque toiture est différente. Voici, en général, comment se déroule une isolation de toiture par l'extérieur.

**01 — Visite et relevé.** État de la couverture, de la charpente et des points délicats : cheminées, noues, fenêtres de toit, débords.

**02 — Étude et devis.** Choix des panneaux et de leur épaisseur, détails des rives et des dépassées, démarches en mairie si l'aspect du toit change. Vous recevez un devis détaillé et un calendrier estimatif.

**03 — Dépose.** Dépose de la couverture et tri des matériaux : ce qui peut resservir est mis de côté.

**04 — Charpente et étanchéité à l'air.** Renfort ou reprise des pièces si besoin, puis pose du support et de la couche d'étanchéité à l'air.

**05 — Isolation.** Pose des panneaux de fibre de bois en continu, puis de l'écran de sous-toiture et des contre-lattes qui ventilent la couverture.

**06 — Couverture et finitions.** Liteaux, couverture neuve, raccords, rives et dépassées : le toit est refermé.

**Note sous les étapes :** Un toit ouvert doit être protégé à chaque étape. Un chantier de sarking se prépare donc avec la météo.

### 3.8 Réalisations

- *Rôle :* prouver par de vrais chantiers de toiture, avec commune et technique, sans les présenter comme des sarkings tant que Jean ne l'a pas confirmé.
- *Composant Framer :* cartes de réalisations avec l'étiquette « 3B Charpente » posée sur la photo et le lien « Voir les travaux → ».

**Kicker :** Nos chantiers de toiture

**H2 :** Des toitures isolées **en photos**

**Carte 1 — Isolation d'une toiture ancienne à L'Argentière-la-Bessée**

Doublage pour le renfort et l'isolation, panneaux de fibre de bois, étanchéité à l'air, étanchéité à l'eau et ventilation, fenêtre de toit de 78 × 98 cm.

**Lien :** Voir les travaux → `/realisations/isolation-d-une-toiture-ancienne-a-l-argentiere-la-bessee/`

**Carte 2 — Rénovation d'une copropriété à Briançon**

Reprise de la charpente et des fermes, soufflage de l'isolant après découverture, dépassée de toiture recréée, couverture neuve. Avec, en prime, une belle vue.

**Lien :** Voir les travaux → `/realisations/renovation-d-une-copropriete-a-briancon/`

**Carte 3 — Rénovation énergétique et ouverture d'une lucarne à Saint-Martin-de-Queyrières**

Caissons d'isolation et étanchéité à l'air, ouverture d'une lucarne, toiture terminée.

**Lien :** Voir les travaux → `/realisations/renovation-energetique-et-ouverture-d-une-lucarne-a-saint-martin-de-queyriere/`

**Ligne « Voir aussi » :** Rénovation et isolation d'un chalet à Vallouise, avec 32 cm de laine de chanvre/lin/coton et de fibre de bois en toiture → `/realisations/renovation-et-isolation-d-un-chalet-a-vallouise/`

### 3.9 Aides et RGE

- *Rôle :* rappel court de la qualification et de la formule autorisée sur les aides. Aucun montant, aucune règle d'éligibilité.
- *Composant Framer :* bandeau étroit sur fond de section clair, icône dans une pastille sauge, un bouton.

**Kicker :** Aides et RGE

**H2 :** Isolation de toiture : **les aides**

**Texte :** 3B Charpente est qualifié QUALIBAT-RGE pour l'isolation des toitures par l'extérieur, l'isolation par l'intérieur des rampants et des plafonds, et les fenêtres de toit. Ce label ouvre l'accès aux aides publiques à la rénovation énergétique, sous conditions. Les règles changent chaque année : faites le point avec un conseiller France Rénov' (france-renov.gouv.fr) avant de signer un devis.

**Bouton contour :** Notre guide des aides avec un artisan RGE → `/conseils/aides-renovation-artisan-rge/`

### 3.10 FAQ

- *Rôle :* répondre aux questions telles qu'on les tape ; balisage FAQPage.
- *Composant Framer :* FAQ en accordéon dans des cartes blanches.

**Kicker :** Questions fréquentes

**H2 :** Vos questions sur **l'isolation de toiture**

*(Questions et réponses : voir section 4, à reprendre mot pour mot.)*

### 3.11 Appel à l'action final

- *Rôle :* conclure vers le devis, avec les coordonnées identiques au caractère près, et un lien retour vers la page pilier.
- *Composant Framer :* bandeau d'appel à l'action vert forêt avec la grille ronde translucide.
- *Note de réécriture :* reprend l'appel validé (« chaque projet chez 3B Charpente débute par une étude sur mesure ») et la FAQ validée « Devis ».

**Kicker :** Votre toiture

**H2 :** Un toit à isoler **ou à refaire** ?

**Texte :** Chaque projet chez 3B Charpente débute par une étude sur mesure. Contactez-nous par le site ou par téléphone : nous venons voir votre toiture et sa charpente, puis nous vous proposons un devis détaillé.

**Bouton plein :** Demander mon devis → `/contact/`

**Bouton contour :** Appeler le 06 34 67 31 49 → `tel:+33634673149`

**Lien texte :** Toutes nos solutions d'isolation biosourcée → `/isolation-biosourcee/`

**Coordonnées :** 3B Charpente, 5 rue Saint-Michel, 05120 L'Argentière-la-Bessée, 06 34 67 31 49

---

## 4. FAQ

### Q1. Qu'est-ce que le sarking en toiture ?

Le sarking est une isolation de toiture par l'extérieur. Après dépose de la couverture, on pose des panneaux isolants rigides, souvent en fibre de bois, au-dessus des chevrons et sans interruption. On referme avec un écran de sous-toiture, une lame d'air ventilée et une couverture neuve. La charpente reste visible et le volume intérieur est conservé.

### Q2. Sarking ou isolation par l'intérieur : que choisir ?

Tout dépend de votre couverture. Si elle est à refaire, le sarking est logique : on isole pendant que le toit est ouvert, sans perdre de volume. Si elle est saine, l'isolation des rampants par l'intérieur évite de la déposer, mais réduit un peu la hauteur sous plafond et cache en général la charpente. Nous vous conseillons après une visite.

### Q3. Faut-il refaire la couverture pour faire un sarking ?

Oui. Le sarking se pose au-dessus des chevrons, donc sous la couverture : il faut la déposer, puis la reposer ou la remplacer. C'est pourquoi il est surtout intéressant quand la toiture arrive en fin de vie. Certains matériaux de couverture ou bois en bon état peuvent parfois être réemployés : nous en parlons lors de la visite.

### Q4. Quelle épaisseur d'isolant pour une toiture en montagne ?

Il n'y a pas de chiffre unique : l'épaisseur dépend de l'isolant, de la charpente, de la technique choisie et de la performance visée. À titre d'exemple, sur un chalet des années 1980 à Vallouise, nous avons isolé la toiture avec 32 cm de laine de chanvre/lin/coton et de fibre de bois. Nous définissons l'épaisseur lors de l'étude de votre projet.

### Q5. Faut-il une autorisation pour isoler sa toiture par l'extérieur ?

Le plus souvent, oui. Un sarking rehausse la toiture de l'épaisseur de l'isolant et peut changer son aspect : une déclaration préalable de travaux est en général demandée en mairie, et les règles du plan local d'urbanisme s'appliquent. Dans certains secteurs protégés, l'avis de l'architecte des Bâtiments de France peut être requis. Renseignez-vous en mairie avant de lancer les travaux.

### Q6. Le sarking donne-t-il droit à des aides ?

L'isolation des toitures par l'extérieur peut ouvrir droit à des aides publiques, sous conditions, quand elle est réalisée par une entreprise qualifiée RGE dans ce domaine. 3B Charpente l'est, avec la qualification QUALIBAT-RGE. Les montants et les conditions changent chaque année : renseignez-vous auprès d'un conseiller France Rénov' (france-renov.gouv.fr) avant de signer votre devis.

---

## 5. Liens internes

| Texte du lien (ancre) | Page visée | Emplacement |
|---|---|---|
| Isolation biosourcée (fil d'Ariane) | `/isolation-biosourcee/` | Haut de page |
| Demander mon devis | `/contact/` | Héros, appel final |
| Sarking ou intérieur : comparer | `#comparatif` | Héros |
| Rénovation de charpente et combles | `/renovation-charpente-combles/` | Section 3.5, prestation proche n° 1 |
| 3B Récup' | `/3b-recup/` | Section 3.5 |
| Voir la réfection de charpente à L'Argentière-la-Bessée | `/realisations/refection-d-une-charpente-a-l-argentiere-la-bessee/` | Section 3.6 |
| Voir les travaux (× 3) | trois fiches réalisations | Section 3.8 |
| Rénovation et isolation d'un chalet à Vallouise | `/realisations/renovation-et-isolation-d-un-chalet-a-vallouise/` | « Voir aussi » (3.8) |
| Notre guide des aides avec un artisan RGE | `/conseils/aides-renovation-artisan-rge/` | Section 3.9 |
| Toutes nos solutions d'isolation biosourcée | `/isolation-biosourcee/` | Appel final |
| Isolation des murs par l'extérieur | `/isolation-murs-ite/` | Bloc « Prestations proches » en pied de contenu, prestation proche n° 2 |
| Quel isolant biosourcé choisir en montagne ? | `/conseils/isolant-biosource-montagne/` | Bloc « Pour aller plus loin » en pied de contenu |

**Bloc « Prestations proches » (pied de contenu, avant le pied de page) :** deux cartes « Rénovation de charpente et combles » → `/renovation-charpente-combles/` et « Isolation des murs : ITE et bâti ancien » → `/isolation-murs-ite/`.

**Liens entrants à prévoir :** page pilier 04 (carte A et carte C, ancre `#fenetres-de-toit`), page 03 (rénovation de charpente), guides 23 et 26, fiches réalisations de toiture (L'Argentière-la-Bessée, Briançon, Saint-Martin-de-Queyrières, Le Casset).

---

## 6. Photos

### Photos à utiliser (galerie actuelle)

| Section | Dossier | Photo (légende d'origine) |
|---|---|---|
| Héros | `/galeries/isolation-d-une-toiture-ancienne-a-l-argentiere-la-bessee` | « panneaux en fibre de bois » |
| 3.3 Sarking | `/galeries/refection-d-une-charpente-a-l-argentiere-la-bessee` | « paose des panneaux en fibre de bois » (légende d'origine avec coquille, à corriger dans le nouveau site) |
| 3.4 Comparatif | `/galeries/isolation-d-une-toiture-ancienne-a-l-argentiere-la-bessee` | « doublage pour le renfort et l'isolation » et « étanchéité à l'air » |
| 3.5 Réfection | `/galeries/renovation-d-une-copropriete-a-briancon` | « Soufflage après découverture », « Reprise des fermes », « Recréation d'une dépassée de toiture » |
| 3.6 Fenêtres de toit | `/galeries/isolation-d-une-toiture-ancienne-a-l-argentiere-la-bessee` | « vue de dessous d'un velux 78x98 » |
| 3.6 Fenêtres de toit (bis) | `/galeries/refection-d-une-charpente-a-l-argentiere-la-bessee` | « pose des encadrements de Velux » |
| 3.7 Étapes | `/galeries/isolation-d-une-toiture-ancienne-a-l-argentiere-la-bessee` | « étanchéité à l'eau et ventilation », « couverture terminée » |
| 3.8 Carte 1 | `/galeries/isolation-d-une-toiture-ancienne-a-l-argentiere-la-bessee` | « couverture terminée » |
| 3.8 Carte 2 | `/galeries/renovation-d-une-copropriete-a-briancon` | « Couverture » ou « Paysage Briançonnais » |
| 3.8 Carte 3 | `/galeries/renovation-energetique-et-ouverture-d-une-lucarne-a-saint-martin-de-queyriere` | « étanchéité à l'air et caissons d'isolation » ou « toiture terminée » |
| Variante couverture (schéma) | `/galeries/renovation-d-un-toit-en-bardeau-meleze-au-casset` | « après » (toit en bardeau de mélèze) |

### Photos à demander à Jean

1. **Un sarking en cours, vu de l'extérieur** : panneaux de fibre de bois posés en continu au-dessus des chevrons, avant l'écran et les contre-lattes. C'est la photo qui manque le plus à cette page.
2. La même toiture vue de l'intérieur, charpente apparente, après travaux.
3. Une coupe ou un détail de rive ou de dépassée sur un sarking (raccord de la surépaisseur).
4. Un chevêtre de fenêtre de toit en cours de pose, avant isolation.
5. Un soufflage de ouate en combles perdus (si 3B en réalise).
6. Le schéma en coupe de la section 3.3, à faire dessiner dans la charte (traits vert forêt sur fond crème).

---

## 7. Points à valider avec Jean

1. **Sarking réalisé en rénovation :** quels chantiers de la galerie sont de vrais sarkings ? En particulier, la « toiture ancienne » de L'Argentière-la-Bessée, la lucarne de Saint-Martin-de-Queyrières (« caissons d'isolation ») et la réfection de charpente de L'Argentière-la-Bessée. Tant que ce n'est pas confirmé, la page ne les présente pas comme tels.
2. **Toiture ancienne de L'Argentière-la-Bessée :** que désigne le « doublage pour le renfort et l'isolation » (doublage des chevrons ?) Quel isolant, quelle épaisseur ?
3. **Copropriété de Briançon :** quel isolant a été soufflé après découverture, et où (plancher des combles, rampants) ?
4. **Saint-Martin-de-Queyrières :** les caissons d'isolation sont-ils posés par l'extérieur ? Avec quel isolant ?
5. **Panneaux de sarking :** quels panneaux de fibre de bois 3B utilise-t-il (épaisseurs habituelles, fabricant) ? Utile pour enrichir la page plus tard.
6. **Démarches en mairie :** 3B prépare-t-il les plans ou les pièces de la déclaration préalable pour ses clients ? Si oui, l'ajouter à l'étape 02.
7. **Combles perdus :** 3B fait-il des soufflages de ouate en combles perdus ? La page le présente comme une option, sans chantier à l'appui.
8. **Fenêtres de toit :** marque habituellement posée (la galerie mentionne « velux ») et accessoires proposés (volets, stores contre la chaleur) ?
9. **Réfection de toiture « Ronatlon » :** la commune est à vérifier. La « ferme en vieux bois » de ce chantier serait une belle preuve de réemploi pour la section 3.5, une fois le nom corrigé.
10. **SIRET de la qualification RGE** (00024 dans l'annuaire, 00016 dans les mentions légales) et **certificat QUALIBAT** (numéro, date de fin de validité) : voir fiche 04.
