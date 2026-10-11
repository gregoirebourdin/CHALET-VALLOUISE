# Fiche 13 · Déconstruction sélective · `/3b-recup/deconstruction-selective/`

> **Statut :** rédaction complète, à relire par Jean. Rédigée le 11 octobre 2026 à partir de `00-brief.md` et `realisations-source.md` uniquement.
>
> **Conventions :**
> - dans les **titres** (H1, H2), les mots entre `**` passent en vert accent ; dans les **textes**, `**` veut dire gras ;
> - les lignes en italique (_Rôle_, _Composant_, _Note_) sont des consignes, pas du texte à publier ;
> - les espaces insécables sont déjà dans le texte ;
> - tout `[À VALIDER AVEC JEAN : …]` doit être résolu ou retiré avant la mise en ligne.

## 1. Carte d'identité

- **Adresse :** `/3b-recup/deconstruction-selective/`
- **Objectif de la page :**
  - se positionner sur « déconstruction » (1 000 recherches par mois) avec l'angle propre à 3B : une dépose faite par des charpentiers ;
  - expliquer la différence entre déconstruction et démolition en termes simples et citables ;
  - montrer le déroulé, la logistique et le tri, en signalant ce qui reste à confirmer ;
  - convertir vers une demande de rendez-vous.
- **Visiteurs visés :**
  - entreprises de démolition et de construction qui cherchent un sous-traitant pour la dépose du bois ;
  - architectes, maîtres d'ouvrage et collectivités qui préparent une réhabilitation ou une démolition avec réemploi ;
  - particuliers qui rénovent une grange ou un chalet et doivent déposer une partie de la structure.
- **Mot-clé principal :** déconstruction (1 000/mois).
- **Mots-clés secondaires :** déconstruction sélective (20/mois), dépose de charpente, déconstruction bâtiment bois, démolition ou déconstruction.
- **Intention de recherche :** informationnelle (qu'est-ce que la déconstruction sélective ?) et commerciale locale (qui peut déconstruire un bâtiment dans les Hautes-Alpes ?).
- **Pages liées :** 11 `/3b-recup/`, 12 `/3b-recup/diagnostic-pemd/`, 14 `/3b-recup/bois-de-reemploi/`, 03 `/renovation-charpente-combles/`, 02 `/charpente-bois/`, 17 `/a-propos/`, fiches de réalisation 14, 19 et 15, 21 `/contact/`.
- **Longueur du corps de page (section 3, hors FAQ) :** environ 1 088 mots.

## 2. SEO

- **Balise title** (58 caractères) : Déconstruction sélective bois, Hautes-Alpes | 3B Charpente
- **Meta description** (153 caractères) : Déconstruction sélective dans les Hautes-Alpes : charpente, solivage, ossature et bardage déposés par les charpentiers de 3B Récup' pour être réemployés.
- **H1 :** **Déconstruction sélective** et dépose du bois dans les Hautes-Alpes
- **Données structurées :** Service + BreadcrumbList dans un `@graph`, puis FAQPage.

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://3bcharpente.fr/3b-recup/deconstruction-selective/#service",
      "name": "Déconstruction sélective et dépose du bois",
      "serviceType": "Déconstruction sélective",
      "description": "Les charpentiers de 3B Récup', filière de 3B Charpente à L'Argentière-la-Bessée (Hautes-Alpes), déposent les éléments de structure bois (charpente, solivage, murs à ossature bois), la couverture, l'isolation et les parements (planchers, bardages, panneaux d'habillage), puis gèrent la logistique du bois récupéré jusqu'à leurs ateliers.",
      "url": "https://3bcharpente.fr/3b-recup/deconstruction-selective/",
      "isRelatedTo": { "@id": "https://3bcharpente.fr/3b-recup/#service" },
      "provider": {
        "@type": "GeneralContractor",
        "@id": "https://3bcharpente.fr/#entreprise",
        "name": "3B Charpente"
      },
      "areaServed": [
        { "@type": "AdministrativeArea", "name": "Hautes-Alpes" },
        { "@type": "AdministrativeArea", "name": "Provence-Alpes-Côte d'Azur" },
        { "@type": "AdministrativeArea", "name": "Rhône-Alpes" }
      ],
      "audience": [
        { "@type": "BusinessAudience", "audienceType": "Entreprises de démolition et de construction, architectes, maîtres d'ouvrage, collectivités" },
        { "@type": "PeopleAudience", "audienceType": "Particuliers qui rénovent une grange ou un chalet" }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://3bcharpente.fr/" },
        { "@type": "ListItem", "position": 2, "name": "3B Récup'", "item": "https://3bcharpente.fr/3b-recup/" },
        { "@type": "ListItem", "position": 3, "name": "Déconstruction sélective", "item": "https://3bcharpente.fr/3b-recup/deconstruction-selective/" }
      ]
    }
  ]
}
```

<!-- FAQPAGE_JSONLD:START -->

_FAQPage, généré à partir de la section 4 (même texte, mot pour mot ; à régénérer si la FAQ change) :_

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://3bcharpente.fr/3b-recup/deconstruction-selective/#faq",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Quelle est la différence entre démolition et déconstruction ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "La démolition abat un ouvrage : les matériaux finissent mélangés et le bois est difficile à récupérer intact. La déconstruction sélective démonte le bâtiment élément par élément, dans l'ordre inverse de sa construction, et sépare les matériaux au fur et à mesure. Elle demande plus de soin, mais elle préserve ce qui peut être réemployé."
      }
    },
    {
      "@type": "Question",
      "name": "Que peut-on déposer lors d'une déconstruction sélective ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Chez 3B Récup', nos charpentiers peuvent déposer les éléments de structure bois (charpente, solivage, murs à ossature bois), la couverture, l'isolation et les parements (planchers, bardages, panneaux d'habillage). Nous intervenons du bâtiment industriel à la maison particulière, dans les Hautes-Alpes mais aussi en région PACA et Rhône-Alpes."
      }
    },
    {
      "@type": "Question",
      "name": "Pourquoi confier la déconstruction à un charpentier ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Parce qu'une charpente tient par ses assemblages : tenons, mortaises, traits de Jupiter, chevilles. Pour la démonter en préservant les pièces, il faut savoir comment elle a été taillée. Chez 3B Charpente, le fondateur s'est formé chez les Compagnons du Devoir et l'équipe taille encore ces assemblages traditionnels sur ses chantiers."
      }
    },
    {
      "@type": "Question",
      "name": "Que devient le bois déposé ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Le bois réemployable part dans nos ateliers, où il est trié, nettoyé et usiné, puis remis en œuvre sur nos chantiers de construction et de rénovation : en bardage, en garde-corps ou en pièces de charpente, par exemple. Ce qui ne peut pas être réemployé est séparé du reste. [À VALIDER AVEC JEAN : filières utilisées pour le bois non réemployable.]"
      }
    },
    {
      "@type": "Question",
      "name": "Faut-il un diagnostic avant de déconstruire ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Pour les bâtiments de plus de 1 000 m² de surface de plancher, ou ayant accueilli une activité agricole, industrielle ou commerciale avec des substances classées dangereuses, le diagnostic PEMD est obligatoire avant la démolition ou la rénovation significative. Pour les autres, un diagnostic ressources volontaire permet de savoir ce qui mérite d'être déposé avec soin."
      }
    },
    {
      "@type": "Question",
      "name": "Intervenez-vous pour les entreprises de démolition ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oui. 3B Récup' s'adresse aux entreprises de construction et de démolition, aux architectes, aux collectivités et aux particuliers. Sur une opération de démolition, nos charpentiers peuvent intervenir en amont pour déposer la structure bois et les parements réemployables. Le mieux est de nous associer dès l'étude de faisabilité, pour prévoir cette étape dans le planning."
      }
    }
  ]
}
```

<!-- FAQPAGE_JSONLD:END -->

- **Textes alternatifs des images clés :**
  - `depose-ancienne-charpente-largentiere-la-bessee.webp` : « Dépose de l'ancienne charpente d'une maison par les charpentiers de 3B Charpente à L'Argentière-la-Bessée » ;
  - `tenon-double-embrevement-besaigue.webp` : « Taille d'un tenon à double embrèvement à la besaiguë, réfection d'une charpente à L'Argentière-la-Bessée » ;
  - `trait-de-jupiter-assemble.webp` : « Trait de Jupiter assemblé sur une pièce de charpente, 3B Charpente, L'Argentière-la-Bessée » ;
  - `garde-corps-bois-reemploi-largentiere-la-bessee.webp` : « Garde-corps en bois de réemploi dans une maison rénovée par 3B Charpente à L'Argentière-la-Bessée ».

## 3. Sections dans l'ordre

### 3.1 Héros

_Rôle : poser l'idée « démonter plutôt que démolir », faite par des charpentiers._
_Composant Framer : héros (titre en deux couleurs, mots forts en gras, bouton plein vert + bouton contour, deux preuves avec pastille sauge) + collage photo._

**Kicker :** 3B Récup' · Déconstruction sélective

**H1 :** **Déconstruction sélective** et dépose du bois dans les Hautes-Alpes

**Texte :** Démonter plutôt que démolir. Nos charpentiers **déposent pièce par pièce** la charpente, le solivage, les murs à ossature bois, la couverture, l'isolation et les parements, pour que le bois **retrouve un chantier** au lieu de partir en déchet.

**Bouton plein :** Parlons de votre bâtiment → `/contact/`

**Bouton contour :** Ce que nous déposons → `#materiaux`

**Preuves (pastilles sauge) :** Charpentiers de métier · Du bâtiment industriel à la maison particulière

**Collage photo et légendes :**
- grande photo : « Dépose de l'ancienne charpente, L'Argentière-la-Bessée. »
- vignette 1 : « Tenon à double embrèvement taillé à la besaiguë. »
- vignette 2 : « Trait de Jupiter assemblé. »

### 3.2 En bref

_Composant : encadré crème bordé d'un filet vert forêt._

**Titre de l'encadré :** En bref

**Texte :** La déconstruction sélective consiste à démonter un bâtiment élément par élément pour trier et réemployer ses matériaux, au lieu de le démolir. Dans les Hautes-Alpes, 3B Récup', filière de 3B Charpente à L'Argentière-la-Bessée, confie cette dépose à des charpentiers : structure bois, couverture, isolation et parements, puis tri et transformation en atelier.

### 3.3 Déconstruction ou démolition ?

_Rôle : définition et comparaison citables par les IA._
_Composant Framer : texte sur fond crème + tableau comparatif à deux colonnes dans une carte blanche (sur mobile : deux cartes empilées)._

**Kicker :** Définition

**H2 :** Déconstruire, ce n'est pas **démolir**

**Texte :**

La **démolition** abat un ouvrage : les matériaux finissent mélangés, et le bois est difficile à récupérer intact. La **déconstruction sélective** démonte l'ouvrage élément par élément, en commençant par ce qui a été posé en dernier, et sépare les matériaux au fur et à mesure. Elle demande plus de soin sur place ; en échange, elle préserve ce qui peut resservir.

**Tableau :**

| | Démolition | Déconstruction sélective |
|---|---|---|
| Objectif | Libérer le terrain ou le volume | Récupérer ce qui peut resservir |
| Méthode | Abattre l'ouvrage | Démonter élément par élément |
| Matériaux | Mélangés | Séparés au fur et à mesure |
| Le bois | Difficile à récupérer intact | Déposé en pièces entières, quand c'est possible |
| Ensuite | Évacuation | Tri, transformation en atelier, réemploi |

**Texte après le tableau :** Les deux approches peuvent se compléter : sur une opération de démolition, nous pouvons intervenir en amont pour déposer le bois réemployable.

### 3.4 Ce que nous déposons

_Rôle : reprendre la liste validée des matériaux, avec une définition de chaque terme. Ancre `#materiaux`._
_Composant Framer : six cartes de services blanches (grille 3 × 2, une colonne sur mobile), icône en pastille sauge._

**Kicker :** Matériaux

**H2 :** Ce que nos charpentiers **déposent**

**Texte d'introduction :** Charpentiers de métier, nous pouvons déposer les éléments de structure bois (charpente, solivage, murs à ossature bois), la couverture, l'isolation et les parements (planchers, bardages, panneaux d'habillage).

**Carte 1 · Charpente** (icône : ferme)
La structure qui porte la toiture : fermes, pannes, chevrons. La ferme est l'assemblage triangulé qui reprend le poids du toit ; pannes et chevrons portent la couverture.

**Carte 2 · Solivage** (icône : poutres parallèles)
Les solives sont les poutres qui portent un plancher. Déposées entières, elles gardent toute leur longueur.

**Carte 3 · Murs à ossature bois** (icône : mur)
Une ossature bois est une structure de montants et de traverses, garnie d'isolant et habillée de panneaux. Nous la démontons en séparant ses couches.

**Carte 4 · Couverture** (icône : toit)
Le revêtement du toit, déposé avant la charpente qu'il recouvre.

**Carte 5 · Isolation** (icône : couches)
Les isolants en place, retirés et séparés du bois.

**Carte 6 · Parements** (icône : planches)
Planchers, bardages et panneaux d'habillage. Le bardage est le revêtement en planches qui habille et protège une façade.

### 3.5 Pourquoi des charpentiers

_Rôle : l'argument différenciant, prouvé par le parcours de Jean et les photos de chantier._
_Composant Framer : section deux colonnes, photo « dépose de l'ancienne charpente » à gauche, texte à droite ; citation de Jean en exergue._

**Kicker :** Notre savoir-faire

**H2 :** Qui sait assembler **sait démonter**

**Texte :**

Une charpente traditionnelle tient par ses assemblages : **tenons et mortaises** (une partie mâle qui s'emboîte dans une entaille), **traits de Jupiter** (un assemblage qui prolonge une pièce bout à bout), chevilles. Pour la démonter en préservant les pièces, il faut savoir comment elle a été taillée.

Jean-Michel Tardy, fondateur de 3B Charpente, a commencé la charpente en 1995, comme apprenti. Il a passé son CAP dans un CFA des Compagnons du Devoir, puis fait son Tour de France, en France métropolitaine, en Martinique et en Autriche. Ces assemblages, notre équipe les taille encore : on les voit dans nos réalisations, comme la réfection d'une charpente à L'Argentière-la-Bessée.

C'est ce regard qui compte lors d'une déconstruction : savoir quelles pièces portent quoi, et dans quel ordre les libérer.

**Citation en exergue (valeurs de Jean, page équipe) :** « Le travail en équipe, l'écoute apportée aux clients, la belle ouvrage, la joie de venir travailler le matin. » — Jean-Michel Tardy

**Légende photo :** « Dépose de l'ancienne charpente, première étape de sa réfection, à L'Argentière-la-Bessée. »

**Lien texte :** Découvrir l'équipe → `/a-propos/`

### 3.6 Le déroulé d'une déconstruction

_Rôle : montrer le chantier étape par étape, en signalant ce qui reste à confirmer._
_Composant Framer : liste numérotée verticale (style des onglets 01 à 05, mais déroulée), pastilles numérotées vert sauge._

**Kicker :** Sur le chantier

**H2 :** Une déconstruction, **étape par étape**

**01 · Préparer**
À partir du diagnostic, nous élaborons la feuille de route : ce qui sera déposé, dans quel ordre, avec quels moyens. Le chantier est préparé et mis en sécurité avant toute dépose. [À VALIDER AVEC JEAN : moyens de levage et de manutention, étaiement, protections.]

**02 · Déposer**
Nos charpentiers démontent l'ouvrage dans l'ordre inverse de sa construction : ce qui a été posé en dernier part en premier. Les pièces sont déposées entières chaque fois que c'est possible.

**03 · Séparer**
Les matériaux sont séparés au fur et à mesure : bois réemployable, bois non réemployable, couverture, isolants. C'est ce qui rend la déconstruction « sélective ».

**04 · Évacuer**
Nous gérons la logistique du bois récupéré : chargement, transport et stockage jusqu'à nos ateliers. [À VALIDER AVEC JEAN : moyens de transport et capacité de stockage.]

**05 · Transformer**
À l'atelier, le bois est trié, nettoyé et usiné.
_Lien :_ Le bois de réemploi → `/3b-recup/bois-de-reemploi/`

### 3.7 Que deviennent les matériaux ?

_Rôle : être transparent sur le tri et sur le devenir de ce qui n'est pas réemployé._
_Composant Framer : deux cartes blanches côte à côte (« Réemployé » avec pastille sauge, « Non réemployable » avec pastille pierre)._

**Kicker :** Tri

**H2 :** Chaque matériau **à sa place**

**Carte « Ce qui est réemployable »**
Le bois réemployable part dans nos ateliers. Il y est trié, nettoyé et usiné, puis remis en œuvre sur nos chantiers : en bardage, en garde-corps, en pièces de charpente.

**Carte « Ce qui ne l'est pas »**
Ce qui ne peut pas être réemployé est séparé du reste et orienté vers [À VALIDER AVEC JEAN : les filières réellement utilisées pour le bois non réemployable, la couverture et les isolants (recyclage, valorisation, plateforme de réemploi, déchetterie professionnelle) et qui en a la charge quand 3B intervient pour une entreprise de démolition. Ne rien publier sans réponse.]

**Texte sous les cartes :** Sur une opération soumise au diagnostic PEMD, ce tri aide aussi à renseigner le formulaire de récolement, qui rend compte de ce que sont devenus les matériaux.
_Lien :_ Le diagnostic PEMD → `/3b-recup/diagnostic-pemd/`

### 3.8 Pour qui

_Rôle : parler explicitement aux deux publics._
_Composant Framer : deux cartes blanches côte à côte, icône en pastille sauge, un bouton contour par carte._

**Kicker :** Pour qui

**H2 :** Pour les professionnels **comme pour les particuliers**

**Carte « Professionnels »** (icône : grue)
_Sous-titre :_ Entreprises de démolition et de construction, architectes, maîtres d'ouvrage, collectivités

Nous prenons en charge la dépose de la structure porteuse en bois et des parements, comme une étape à part entière de votre opération. Idéalement, nous sommes associés dès l'étude de faisabilité, pour que le réemploi soit prévu dans le projet et dans le planning.

_Bouton contour :_ Commencer par le diagnostic → `/3b-recup/diagnostic-pemd/`

**Carte « Particuliers »** (icône : maison)
_Sous-titre :_ Vous rénovez une grange, un chalet ou une maison de pays

Une partie de la structure doit partir ? Nous déposons avec soin ce qui peut resservir, vieilles poutres, planchers ou bardage, pour le retravailler à l'atelier. [À VALIDER AVEC JEAN : réemploi possible sur le chantier du particulier lui-même.] Le reste, nous pouvons le rénover : charpente, isolation, aménagement des combles.

_Bouton contour :_ Rénover une charpente → `/renovation-charpente-combles/`

### 3.9 Sur le terrain

_Rôle : preuves par des chantiers réels, sans attribuer à une photo plus que ce qu'elle montre._
_Composant Framer : cartes de réalisations (étiquette « 3B Charpente », lien « Voir les travaux → »)._

**Kicker :** Réalisations

**H2 :** La dépose et le réemploi **sur nos chantiers**

**Carte 1 · Réfection d'une charpente à L'Argentière-la-Bessée**
La dépose de l'ancienne charpente, puis la taille et le levage de la nouvelle.
_Lien :_ Voir les travaux → `/realisations/refection-d-une-charpente-a-l-argentiere-la-bessee/`

**Carte 2 · Rénovation d'une maison d'habitation à L'Argentière-la-Bessée**
Bardage vieux bois et garde-corps en bois de réemploi.
_Lien :_ Voir les travaux → `/realisations/renovation-d-une-maison-d-habitation-a-l-argentiere-la-bessee/`

**Carte 3 · Réfection d'une toiture** [À VALIDER AVEC JEAN : commune exacte, la galerie indique « Ronatlon »]
Une ferme de charpente en vieux bois.
_Lien :_ Voir les travaux → `/realisations/refection-d-une-toiture-a-ronatlon/`

_Note : [À VALIDER AVEC JEAN : remplacer ou compléter la carte 1 par un vrai chantier de déconstruction 3B Récup' (commune, type de bâtiment, éléments déposés, devenir) dès qu'il est documenté.]_

### 3.10 FAQ

_Composant Framer : FAQ en accordéon dans des cartes blanches._

**Kicker :** Questions fréquentes

**H2 :** La déconstruction **en questions**

### 3.11 Appel à l'action

_Composant Framer : bandeau vert forêt avec formes organiques et grille ronde translucide._

**Kicker :** Un bâtiment à déconstruire ?

**H2 :** Démontons-le **pièce par pièce**

**Texte :** Dites-nous où se trouve le bâtiment, ce qu'il faut déposer et ce que vous en attendez. Nous en parlons lors d'une première rencontre : chaque projet débute par une étude sur mesure.

**Bouton plein :** Parlons de votre bâtiment → `/contact/`

**Bouton contour :** 06 34 67 31 49 → `tel:+33634673149`

**Ligne de coordonnées :** 3B Charpente, 5 rue Saint-Michel, 05120 L'Argentière-la-Bessée · 06 34 67 31 49 · tardy@3bcharpente.fr

## 4. FAQ

### Quelle est la différence entre démolition et déconstruction ?

La démolition abat un ouvrage : les matériaux finissent mélangés et le bois est difficile à récupérer intact. La déconstruction sélective démonte le bâtiment élément par élément, dans l'ordre inverse de sa construction, et sépare les matériaux au fur et à mesure. Elle demande plus de soin, mais elle préserve ce qui peut être réemployé.

### Que peut-on déposer lors d'une déconstruction sélective ?

Chez 3B Récup', nos charpentiers peuvent déposer les éléments de structure bois (charpente, solivage, murs à ossature bois), la couverture, l'isolation et les parements (planchers, bardages, panneaux d'habillage). Nous intervenons du bâtiment industriel à la maison particulière, dans les Hautes-Alpes mais aussi en région PACA et Rhône-Alpes.

### Pourquoi confier la déconstruction à un charpentier ?

Parce qu'une charpente tient par ses assemblages : tenons, mortaises, traits de Jupiter, chevilles. Pour la démonter en préservant les pièces, il faut savoir comment elle a été taillée. Chez 3B Charpente, le fondateur s'est formé chez les Compagnons du Devoir et l'équipe taille encore ces assemblages traditionnels sur ses chantiers.

### Que devient le bois déposé ?

Le bois réemployable part dans nos ateliers, où il est trié, nettoyé et usiné, puis remis en œuvre sur nos chantiers de construction et de rénovation : en bardage, en garde-corps ou en pièces de charpente, par exemple. Ce qui ne peut pas être réemployé est séparé du reste. [À VALIDER AVEC JEAN : filières utilisées pour le bois non réemployable.]

### Faut-il un diagnostic avant de déconstruire ?

Pour les bâtiments de plus de 1 000 m² de surface de plancher, ou ayant accueilli une activité agricole, industrielle ou commerciale avec des substances classées dangereuses, le diagnostic PEMD est obligatoire avant la démolition ou la rénovation significative. Pour les autres, un diagnostic ressources volontaire permet de savoir ce qui mérite d'être déposé avec soin.

### Intervenez-vous pour les entreprises de démolition ?

Oui. 3B Récup' s'adresse aux entreprises de construction et de démolition, aux architectes, aux collectivités et aux particuliers. Sur une opération de démolition, nos charpentiers peuvent intervenir en amont pour déposer la structure bois et les parements réemployables. Le mieux est de nous associer dès l'étude de faisabilité, pour prévoir cette étape dans le planning.

## 5. Liens internes

| Texte du lien | Page visée |
|---|---|
| Parlons de votre bâtiment | `/contact/` |
| Ce que nous déposons | `#materiaux` |
| Découvrir l'équipe | `/a-propos/` |
| Le bois de réemploi | `/3b-recup/bois-de-reemploi/` |
| Le diagnostic PEMD / Commencer par le diagnostic | `/3b-recup/diagnostic-pemd/` |
| Rénover une charpente | `/renovation-charpente-combles/` |
| Voir les travaux (réfection d'une charpente) | `/realisations/refection-d-une-charpente-a-l-argentiere-la-bessee/` |
| Voir les travaux (maison à L'Argentière-la-Bessée) | `/realisations/renovation-d-une-maison-d-habitation-a-l-argentiere-la-bessee/` |
| Voir les travaux (réfection d'une toiture) | `/realisations/refection-d-une-toiture-a-ronatlon/` |

À ajouter dans le texte si la mise en page le permet :

| Texte du lien | Page visée |
|---|---|
| 3B Récup' (fil d'Ariane et premier paragraphe) | `/3b-recup/` |
| assemblages traditionnels | `/charpente-bois/` |
| murs à ossature bois | `/maison-ossature-bois/` |
| notre guide du réemploi du bois (phase 2) | `/conseils/reemploi-bois-construction/` |

## 6. Photos

**À utiliser (galerie actuelle) :**

| Emplacement | Dossier | Photo (légende de la galerie) |
|---|---|---|
| Héros, grande photo et section 3.5 | `/galeries/refection-d-une-charpente-a-l-argentiere-la-bessee` | « dépose de l'ancienne charpente » |
| Héros, vignette 1 | `/galeries/refection-d-une-charpente-a-l-argentiere-la-bessee` | « taille d'un tenon à double embrèvement à la besaïgue » |
| Héros, vignette 2 | `/galeries/refection-d-une-charpente-a-l-argentiere-la-bessee` | « trait de jupiter assemblé » |
| Section 3.6, étape 04 (illustration logistique) | `/galeries/maison-a-ossature-bois-dans-les-monts-du-lyonnais` | « chargement » ou « déchargement du camion » (légende neutre : ce sont des éléments neufs, ne pas les présenter comme bois récupéré) |
| Carte preuve 2 | `/galeries/renovation-d-une-maison-d-habitation-a-l-argentiere-la-bessee` | « Bardage vieux bois » |
| Carte preuve 3 | `/galeries/refection-d-une-toiture-a-ronatlon` | « ferme en vieux bois » |

**À demander à Jean (prioritaire pour cette page) :**
- un chantier de déconstruction complet : avant, dépose en cours, pièces triées, bâtiment vidé ;
- des pièces déposées et repérées, prêtes au chargement ;
- l'équipe en sécurité en hauteur pendant une dépose (casques, harnais) ;
- le camion chargé de bois récupéré.

## 7. Points à valider avec Jean

1. **Chantiers de déconstruction réalisés :** au moins un exemple documenté (commune, année, type de bâtiment, éléments déposés, devenir). C'est la preuve qui manque le plus ; aucun volume ni tonnage n'est publié sans chiffre fourni.
2. **Devenir des matériaux non réemployables** (bois, couverture, isolants) et répartition des responsabilités avec l'entreprise de démolition.
3. **Moyens et sécurité :** levage, manutention, étaiement, protections ; transport et capacité de stockage.
4. **Repérages réglementaires préalables** (par exemple amiante et plomb dans les bâtiments anciens) : qui s'en charge quand 3B intervient ? Rien n'est écrit sur la page à ce sujet tant que ce n'est pas validé.
5. **Sous-traitance pour les entreprises de démolition :** confirmer que 3B intervient bien comme « étape à part entière » d'une opération pilotée par un autre (lot, sous-traitance, contrat direct avec le maître d'ouvrage ?).
6. **Particuliers :** le bois déposé peut-il être retravaillé et reposé sur leur propre chantier ?
7. **Commune « Ronatlon »** : nom exact.
8. **Photos :** les légendes proposées n'attribuent pas de réemploi à la photo « dépose de l'ancienne charpente » ; confirmer si ces bois ont été réemployés (ce serait une preuve forte à ajouter).
