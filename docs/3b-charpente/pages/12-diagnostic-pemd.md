# Fiche 12 · Diagnostic PEMD et gisement bois · `/3b-recup/diagnostic-pemd/`

> **Statut :** rédaction complète, à relire par Jean **et** à faire relire, pour la partie réglementaire, par un diagnostiqueur PEMD ou au regard des textes officiels. Rédigée le 11 octobre 2026 à partir de `00-brief.md` et `realisations-source.md` uniquement.
>
> **Conventions :**
> - dans les **titres** (H1, H2), les mots entre `**` passent en vert accent ; dans les **textes**, `**` veut dire gras ;
> - les lignes en italique (_Rôle_, _Composant_, _Note_) sont des consignes, pas du texte à publier ;
> - les espaces insécables sont déjà dans le texte ;
> - **deux variantes** sont rédigées pour le rôle de 3B : **A** (par défaut, vraie dans tous les cas : expertise du gisement bois « en amont ou en appui du diagnostic PEMD ») et **B** (seulement si Jean confirme qu'il réalise lui-même le diagnostic PEMD réglementaire). Les passages concernés sont signalés.

## 1. Carte d'identité

- **Adresse :** `/3b-recup/diagnostic-pemd/`
- **Objectif de la page :**
  - capter la requête « pemd » (1 300 recherches par mois) avec une explication fiable, qui cite les textes sans les exagérer ;
  - montrer ce qu'un charpentier apporte au repérage : l'expertise du gisement bois ;
  - proposer le diagnostic ressources aux petits bâtiments et aux particuliers ;
  - convertir vers une demande d'évaluation (contact).
- **Visiteurs visés :**
  - maîtres d'ouvrage, collectivités, architectes et entreprises de démolition qui doivent prévoir un diagnostic PEMD ;
  - particuliers qui rénovent une grange ou un chalet et se demandent s'ils sont concernés ;
  - IA qui cherchent une définition claire du PEMD et du diagnostic ressources.
- **Mot-clé principal :** pemd (1 300/mois).
- **Mots-clés secondaires :** diagnostic ressources (50/mois), diagnostic pemd (20/mois), gisement bois, diagnostic réemploi, formulaire de récolement.
- **Intention de recherche :** d'abord informationnelle (qu'est-ce que le PEMD, suis-je concerné ?), puis commerciale (qui peut évaluer le bois réemployable de mon bâtiment ?).
- **Pages liées :** 11 `/3b-recup/`, 13 `/3b-recup/deconstruction-selective/`, 14 `/3b-recup/bois-de-reemploi/`, 24 `/conseils/reemploi-bois-construction/` (phase 2), 03 `/renovation-charpente-combles/`, 17 `/a-propos/`, 21 `/contact/`.
- **Longueur du corps de page (section 3, hors FAQ, variante A) :** environ 1 128 mots.

## 2. SEO

- **Balise title** (58 caractères) : Diagnostic PEMD et ressources, Hautes-Alpes | 3B Charpente
- **Meta description** (155 caractères) : Diagnostic PEMD : qui est concerné, diagnostic ressources sous 1 000 m², expertise du bois réemployable par 3B Récup', charpentier depuis 2007. Parlons-en.
- **H1 :** Diagnostic PEMD et **gisement de bois réemployable** dans les Hautes-Alpes
- **Données structurées :** Service + BreadcrumbList dans un `@graph`, puis FAQPage. Le `description` du Service est écrit pour rester vrai dans les deux variantes ; en variante B, ajouter « Diagnostic PEMD réglementaire » au `serviceType`.

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://3bcharpente.fr/3b-recup/diagnostic-pemd/#service",
      "name": "Expertise du gisement bois et diagnostic ressources",
      "serviceType": "Expertise du bois réemployable en amont ou en appui du diagnostic PEMD",
      "description": "3B Récup', filière de déconstruction et de réemploi du bois de 3B Charpente à L'Argentière-la-Bessée (Hautes-Alpes), repère les éléments en bois d'un bâtiment, évalue leur état et leur potentiel de réemploi, en amont ou en appui du diagnostic PEMD, et propose un diagnostic ressources pour les bâtiments de moins de 1 000 m².",
      "url": "https://3bcharpente.fr/3b-recup/diagnostic-pemd/",
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
        { "@type": "BusinessAudience", "audienceType": "Maîtres d'ouvrage, collectivités, architectes, entreprises de démolition" },
        { "@type": "PeopleAudience", "audienceType": "Particuliers propriétaires d'une grange, d'un chalet ou d'une maison ancienne" }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://3bcharpente.fr/" },
        { "@type": "ListItem", "position": 2, "name": "3B Récup'", "item": "https://3bcharpente.fr/3b-recup/" },
        { "@type": "ListItem", "position": 3, "name": "Diagnostic PEMD et gisement bois", "item": "https://3bcharpente.fr/3b-recup/diagnostic-pemd/" }
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
  "@id": "https://3bcharpente.fr/3b-recup/diagnostic-pemd/#faq",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Qu'est-ce que le diagnostic PEMD ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Le diagnostic PEMD (produits, équipements, matériaux et déchets) est un repérage réalisé avant certains travaux de démolition ou de rénovation significative. Il recense ce que contient le bâtiment pour savoir ce qui pourra être réemployé, valorisé ou éliminé. Il est encadré par les décrets n° 2021-821 et n° 2021-822 du 25 juin 2021 et par le Code de la construction et de l'habitation."
      }
    },
    {
      "@type": "Question",
      "name": "Quand le diagnostic PEMD est-il obligatoire ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Il est obligatoire avant la démolition ou la rénovation significative de bâtiments dont la surface de plancher cumulée dépasse 1 000 m². Il l'est aussi pour les bâtiments qui ont accueilli une activité agricole, industrielle ou commerciale avec des substances classées dangereuses. Pour les demandes d'autorisation déposées après le 1er juillet 2023, un formulaire de récolement est en plus exigé."
      }
    },
    {
      "@type": "Question",
      "name": "Qu'est-ce qu'un diagnostic ressources ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "En dessous de 1 000 m², on parle souvent de diagnostic ressources : un repérage volontaire des matériaux réemployables d'un bâtiment. Il n'est pas imposé, mais c'est la démarche la plus réaliste pour une maison, une grange, un chalet ou un petit bâtiment. Chez 3B Récup', il porte sur le bois : ce qui peut resservir, dans quel état et pour quel usage."
      }
    },
    {
      "@type": "Question",
      "name": "Ma grange est-elle concernée par le diagnostic PEMD ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Une grange de moins de 1 000 m² de surface de plancher n'atteint pas le seuil de surface. En revanche, si elle a accueilli une activité agricole avec des substances classées dangereuses, le diagnostic PEMD peut s'imposer avant sa démolition ou sa rénovation significative. En cas de doute, renseignez-vous avant de déposer votre demande d'autorisation."
      }
    },
    {
      "@type": "Question",
      "name": "3B Récup' réalise-t-il le diagnostic PEMD ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nous intervenons en amont ou en appui du diagnostic PEMD. Notre rôle est l'expertise du gisement bois : repérer les éléments en bois, évaluer leur état et leur potentiel de réemploi, et préparer leur dépose. Pour les bâtiments de moins de 1 000 m², nous proposons un diagnostic ressources centré sur le bois. Nos charpentiers peuvent ensuite déposer, transformer et reposer ce bois."
      }
    },
    {
      "@type": "Question",
      "name": "Qu'est-ce que le formulaire de récolement ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Le récolement est le bilan après travaux : il rend compte de ce que sont réellement devenus les produits, équipements, matériaux et déchets repérés par le diagnostic PEMD. Le formulaire de récolement est exigé pour les demandes d'autorisation déposées après le 1er juillet 2023. Une déconstruction sélective, qui trie les matériaux au fur et à mesure, aide à le renseigner."
      }
    }
  ]
}
```

<!-- FAQPAGE_JSONLD:END -->

- **Textes alternatifs des images clés :**
  - `releve-gisement-bois-charpente.webp` (photo à faire) : « Charpentier de 3B Récup' relevant l'état d'une charpente ancienne avant déconstruction, Hautes-Alpes » ;
  - `depose-ancienne-charpente-largentiere-la-bessee.webp` : « Dépose de l'ancienne charpente d'une maison avant sa réfection par 3B Charpente à L'Argentière-la-Bessée » ;
  - `pied-arbaletrier-vieux-bois.webp` : « Pied d'arbalétrier d'une charpente en vieux bois, réfection d'une toiture par 3B Charpente ».

## 3. Sections dans l'ordre

### 3.1 Héros

_Rôle : poser le sujet (PEMD) et l'angle de 3B (le bois réemployable) en deux phrases._
_Composant Framer : héros (titre en deux couleurs, mots forts en gras, bouton plein vert + bouton contour, deux preuves avec pastille sauge), une seule photo à droite._

**Kicker :** 3B Récup' · Diagnostic et gisement

**H1 :** Diagnostic PEMD et **gisement de bois réemployable** dans les Hautes-Alpes

**Texte :** Avant de démolir ou de rénover, mieux vaut savoir **ce que contient un bâtiment**. Le diagnostic PEMD le recense quand la réglementation l'impose ; le diagnostic ressources le fait, de façon volontaire, pour les autres bâtiments. Nos charpentiers y apportent un regard précis sur **le bois réemployable** : charpente, solivage, ossature, planchers, bardages.

**Bouton plein :** Faire évaluer mon bâtiment → `/contact/` (sujet « 3B Récup' »)

**Bouton contour :** Suis-je concerné ? → `#qui-est-concerne`

**Preuves (pastilles sauge) :** Charpentiers depuis 2007 · Expertise du gisement bois

**Légende photo :** « Dépose de l'ancienne charpente avant sa réfection, à L'Argentière-la-Bessée. » _(en attendant une vraie photo de repérage sur site)_

### 3.2 En bref

_Rôle : la réponse directe reprise par les IA._
_Composant : encadré crème bordé d'un filet vert forêt._

**Titre de l'encadré :** En bref

**Texte (variante A) :** Le diagnostic PEMD (produits, équipements, matériaux et déchets) est obligatoire avant la démolition ou la rénovation significative de bâtiments de plus de 1 000 m², ou ayant accueilli certaines activités avec des substances dangereuses. En dessous, on parle de diagnostic ressources. 3B Récup', à L'Argentière-la-Bessée, évalue le bois réemployable en amont ou en appui de ces diagnostics.

**Texte (variante B) :** Le diagnostic PEMD (produits, équipements, matériaux et déchets) est obligatoire avant la démolition ou la rénovation significative de bâtiments de plus de 1 000 m², ou ayant accueilli certaines activités avec des substances dangereuses. En dessous, on parle de diagnostic ressources. 3B Récup', à L'Argentière-la-Bessée, réalise ces diagnostics avec un regard de charpentier sur le bois réemployable.

### 3.3 Qu'est-ce que le diagnostic PEMD ?

_Rôle : définition citable, références des textes, sans détailler ce que le brief ne vérifie pas._
_Composant Framer : section texte sur fond crème + trois cartes blanches « chiffres clés » (pastille sauge)._

**Kicker :** Définition

**H2 :** Le diagnostic PEMD, **en clair**

**Texte :**

PEMD signifie « produits, équipements, matériaux et déchets ». Le **diagnostic PEMD** est un repérage réalisé avant certains travaux de démolition ou de rénovation significative : il recense ce que contient le bâtiment, pour savoir avant le chantier ce qui pourra être réemployé, valorisé ou devra être éliminé.

Il est encadré par les décrets n° 2021-821 et n° 2021-822 du 25 juin 2021, et par les articles L. 126-34 et R. 126-12 du Code de la construction et de l'habitation.

Le diagnostic a un prolongement : pour les demandes d'autorisation déposées après le 1er juillet 2023, un **formulaire de récolement** est exigé. Le récolement, c'est le bilan après travaux : il rend compte de ce que sont réellement devenus les produits, équipements, matériaux et déchets.

**Carte 1 · 1 000 m²**
Le seuil de surface de plancher cumulée au-delà duquel le diagnostic est obligatoire avant démolition ou rénovation significative.

**Carte 2 · 25 juin 2021**
La date des deux décrets qui encadrent le diagnostic PEMD (n° 2021-821 et n° 2021-822).

**Carte 3 · 1er juillet 2023**
Le formulaire de récolement est exigé pour les demandes d'autorisation déposées après cette date.

### 3.4 Qui est concerné ?

_Rôle : répondre à « suis-je concerné ? », pour les professionnels comme pour les propriétaires de granges._
_Composant Framer : section texte avec liste à puces, puis un encadré vert sauge clair « Propriétaire d'une grange ? ». Ancre `#qui-est-concerne`._

**Kicker :** Obligations

**H2 :** Qui doit faire **un diagnostic PEMD** ?

**Texte :**

Le diagnostic PEMD est obligatoire avant la démolition ou la rénovation significative :

- des bâtiments dont la surface de plancher cumulée dépasse 1 000 m² ;
- des bâtiments qui ont accueilli une activité agricole, industrielle ou commerciale avec des substances classées dangereuses, même en dessous de 1 000 m².

Il concerne donc d'abord celui qui commande les travaux, le **maître d'ouvrage** : collectivité, bailleur, entreprise, propriétaire d'un grand bâtiment. [À VALIDER AVEC JEAN : faire confirmer cette phrase par un diagnostiqueur ou sur le texte officiel avant publication.]

Le diagnostic réglementaire est réalisé par un diagnostiqueur qui doit pouvoir justifier de ses compétences et de son assurance pour cette mission. La notion de « rénovation significative » est précisée par les textes : en cas de doute sur votre projet, posez la question à votre architecte ou à votre mairie avant de déposer votre demande d'autorisation.

**Encadré · Propriétaire d'une grange ?**
Une grange de moins de 1 000 m² n'atteint pas le seuil de surface. Mais si elle a accueilli une activité agricole avec des substances classées dangereuses, le diagnostic PEMD peut s'imposer. Dans tous les cas, un diagnostic ressources vous aide à savoir ce qui mérite d'être gardé.

### 3.5 Moins de 1 000 m² : le diagnostic ressources

_Rôle : présenter l'offre la plus réaliste pour les particuliers et les petits bâtiments._
_Composant Framer : section deux colonnes (texte à gauche, trois questions en cartes numérotées à droite)._

**Kicker :** Petits bâtiments

**H2 :** Le diagnostic ressources, **pour les bâtiments plus modestes**

**Texte :**

En dessous de 1 000 m², on parle souvent de **diagnostic ressources** : un repérage volontaire des matériaux réemployables. Ce n'est pas une obligation, c'est un outil. Pour une maison, une grange, un chalet ou un petit bâtiment communal, c'est souvent la démarche la plus réaliste.

Un diagnostic ressources répond à trois questions simples :

1. Qu'y a-t-il dans ce bâtiment qui puisse resservir ?
2. Dans quel état, et en quelle quantité ?
3. Comment le déposer sans l'abîmer, et pour en faire quoi ?

Pour le bois, ces réponses relèvent de notre métier.

### 3.6 Ce que 3B Récup' apporte

_Rôle : dire précisément ce que fait 3B, sans revendiquer une qualification non confirmée._
_Composant Framer : section plein cadre « forêt » sombre, titre blanc avec mots en sauge, liste à puces en blanc, photo de chantier à droite._

**Kicker :** Notre rôle

**H2 :** L'œil du charpentier **sur votre gisement bois**

**Texte (commun aux deux variantes) :** Le **gisement**, c'est l'ensemble des matériaux réemployables d'un bâtiment, comme on parle du gisement d'une carrière. Pour un charpentier, c'est d'abord le bois : charpente, solivage, ossature, planchers, bardages.

**Texte (variante A, à publier par défaut) :**

3B Récup' réalise l'expertise du gisement bois, en amont ou en appui du diagnostic PEMD. Pour les bâtiments de moins de 1 000 m², nous proposons un diagnostic ressources centré sur le bois et sur les éléments que nos charpentiers savent déposer. Charpentiers de métier, nous savons lire une structure : comment elle a été taillée, assemblée, chargée.

Concrètement, nous :

- **repérons les éléments en bois** : charpente, solivage, murs à ossature bois, planchers, bardages, panneaux d'habillage ;
- **évaluons leur état et leur potentiel de réemploi** ;
- **indiquons comment les déposer** en préservant les pièces ;
- **proposons ce qu'ils peuvent devenir** dans un nouveau projet.

Ces informations peuvent nourrir le diagnostic PEMD réalisé par le diagnostiqueur, ou servir de base à la stratégie de déconstruction.

**Texte (variante B, si Jean confirme qu'il est diagnostiqueur PEMD) :**

3B Récup' réalise le diagnostic PEMD réglementaire. [À VALIDER AVEC JEAN : préciser la qualification, l'attestation de compétences et l'assurance correspondantes, et les afficher.] Notre équipe effectue une expertise et un diagnostic PEMD pour identifier les matériaux présents et évaluer leur potentiel de réemploi. Cette évaluation permet de mettre en place une stratégie d'intervention précise, adaptée aux spécificités de chaque projet. Pour les bâtiments de moins de 1 000 m², nous proposons un diagnostic ressources, plus léger, centré sur ce qui peut resservir.

_(La liste « Concrètement, nous : … » est conservée telle quelle dans la variante B.)_

### 3.7 Le livrable

_Rôle : rassurer sur ce que le client obtient, sans promettre un format non validé._
_Composant Framer : carte blanche unique, large, avec icône document en pastille sauge._

**Kicker :** Ce que vous obtenez

**H2 :** Un état des lieux **utile pour la suite**

**Texte :** À l'issue de l'expertise, vous disposez d'un document qui décrit le gisement bois de votre bâtiment : les éléments repérés, leur état, leur potentiel de réemploi et les conditions de leur dépose. [À VALIDER AVEC JEAN : forme exacte du livrable (rapport écrit, tableau d'inventaire, photos, plans annotés, estimation des quantités ?) et ce qui est remis au maître d'ouvrage ou au diagnostiqueur.]

Ce document sert de base à la feuille de route de la déconstruction : ce qui sera déposé, dans quel ordre, et ce que chaque pièce pourra devenir.

### 3.8 Pour qui

_Rôle : parler aux deux publics._
_Composant Framer : deux cartes blanches côte à côte, icône en pastille sauge._

**Kicker :** Pour qui

**H2 :** Maîtres d'ouvrage, architectes **ou particuliers**

**Carte « Professionnels »** (icône : plan)
Vous avez un diagnostic PEMD à prévoir ou un projet de réemploi à monter ? Associez-nous dès l'étude de faisabilité : le gisement bois se repère avant de caler la démolition, pas après. Nous travaillons pour les architectes, les maîtres d'ouvrage, les collectivités et les entreprises de construction et de démolition, du bâtiment industriel à la maison particulière.

**Carte « Particuliers »** (icône : maison)
Vous achetez une grange, vous rénovez un chalet ? Avant les travaux, un diagnostic ressources vous dit ce qui mérite d'être gardé : poutres, planchers, bardage. Vous décidez ensuite, en connaissance de cause, de ce qui reste en place, de ce qui est déposé et de ce qui est réemployé.

### 3.9 Et après le diagnostic ?

_Rôle : replacer le diagnostic dans la méthode complète et pousser vers les autres sous-pages._
_Composant Framer : version compacte de la méthode en onglets 01 à 05, l'onglet 01 actif. Même ordre que sur la page 11._

**Kicker :** La suite

**H2 :** Du diagnostic **à la repose**

**Texte :** Le diagnostic est la première des cinq étapes de la méthode 3B Récup'.

1. **Diagnostic** : connaître le gisement (vous êtes ici).
2. **Stratégie** : une feuille de route détaillée, qui préserve l'intégrité et la valeur des matériaux réutilisables.
3. **Intervention** : nos charpentiers déposent les matériaux sur site. _Lien :_ la déconstruction sélective → `/3b-recup/deconstruction-selective/`
4. **Transformation** : tri, nettoyage et usinage dans nos ateliers. _Lien :_ le bois de réemploi → `/3b-recup/bois-de-reemploi/`
5. **Repose** : notre système constructif s'adapte aux matériaux de réemploi.

_Lien texte :_ Découvrir 3B Récup' → `/3b-recup/`

### 3.10 FAQ

_Rôle : questions-réponses balisées en FAQPage (section 4)._
_Composant Framer : FAQ en accordéon dans des cartes blanches._

**Kicker :** Questions fréquentes

**H2 :** Diagnostic PEMD : **vos questions**

### 3.11 Appel à l'action

_Composant Framer : bandeau vert forêt avec formes organiques et grille ronde translucide._

**Kicker :** Un bâtiment à évaluer ?

**H2 :** Faites le point sur **votre gisement bois**

**Texte :** Démolition, réhabilitation, grange à rénover : dites-nous où se trouve le bâtiment, sa surface approximative et ce que vous projetez. Nous vous proposons une première rencontre sur place pour en parler.

**Bouton plein :** Faire évaluer mon bâtiment → `/contact/`

**Bouton contour :** 06 34 67 31 49 → `tel:+33634673149`

**Ligne de coordonnées :** 3B Charpente, 5 rue Saint-Michel, 05120 L'Argentière-la-Bessée · 06 34 67 31 49 · tardy@3bcharpente.fr

## 4. FAQ

_Les questions 1 à 4 et 6 sont identiques dans les deux variantes ; la question 5 a deux réponses._

### Qu'est-ce que le diagnostic PEMD ?

Le diagnostic PEMD (produits, équipements, matériaux et déchets) est un repérage réalisé avant certains travaux de démolition ou de rénovation significative. Il recense ce que contient le bâtiment pour savoir ce qui pourra être réemployé, valorisé ou éliminé. Il est encadré par les décrets n° 2021-821 et n° 2021-822 du 25 juin 2021 et par le Code de la construction et de l'habitation.

### Quand le diagnostic PEMD est-il obligatoire ?

Il est obligatoire avant la démolition ou la rénovation significative de bâtiments dont la surface de plancher cumulée dépasse 1 000 m². Il l'est aussi pour les bâtiments qui ont accueilli une activité agricole, industrielle ou commerciale avec des substances classées dangereuses. Pour les demandes d'autorisation déposées après le 1er juillet 2023, un formulaire de récolement est en plus exigé.

### Qu'est-ce qu'un diagnostic ressources ?

En dessous de 1 000 m², on parle souvent de diagnostic ressources : un repérage volontaire des matériaux réemployables d'un bâtiment. Il n'est pas imposé, mais c'est la démarche la plus réaliste pour une maison, une grange, un chalet ou un petit bâtiment. Chez 3B Récup', il porte sur le bois : ce qui peut resservir, dans quel état et pour quel usage.

### Ma grange est-elle concernée par le diagnostic PEMD ?

Une grange de moins de 1 000 m² de surface de plancher n'atteint pas le seuil de surface. En revanche, si elle a accueilli une activité agricole avec des substances classées dangereuses, le diagnostic PEMD peut s'imposer avant sa démolition ou sa rénovation significative. En cas de doute, renseignez-vous avant de déposer votre demande d'autorisation.

### 3B Récup' réalise-t-il le diagnostic PEMD ?

_Réponse variante A :_

Nous intervenons en amont ou en appui du diagnostic PEMD. Notre rôle est l'expertise du gisement bois : repérer les éléments en bois, évaluer leur état et leur potentiel de réemploi, et préparer leur dépose. Pour les bâtiments de moins de 1 000 m², nous proposons un diagnostic ressources centré sur le bois. Nos charpentiers peuvent ensuite déposer, transformer et reposer ce bois.

_Réponse variante B (remplace la précédente si Jean confirme) :_ Oui. 3B Récup' réalise le diagnostic PEMD réglementaire [À VALIDER AVEC JEAN : qualification et assurance], avec un regard de charpentier sur le bois réemployable. Pour les bâtiments de moins de 1 000 m², nous proposons un diagnostic ressources, plus léger. Nos charpentiers peuvent ensuite déposer, transformer et reposer le bois repéré.

### Qu'est-ce que le formulaire de récolement ?

Le récolement est le bilan après travaux : il rend compte de ce que sont réellement devenus les produits, équipements, matériaux et déchets repérés par le diagnostic PEMD. Le formulaire de récolement est exigé pour les demandes d'autorisation déposées après le 1er juillet 2023. Une déconstruction sélective, qui trie les matériaux au fur et à mesure, aide à le renseigner.

_Note pour l'intégration : le script de balisage FAQPage ci-dessus reprend la réponse variante A pour la question 5. En variante B, remplacer le texte dans le JSON-LD._

## 5. Liens internes

| Texte du lien | Page visée |
|---|---|
| Faire évaluer mon bâtiment | `/contact/` |
| Suis-je concerné ? | `#qui-est-concerne` |
| la déconstruction sélective | `/3b-recup/deconstruction-selective/` |
| le bois de réemploi | `/3b-recup/bois-de-reemploi/` |
| Découvrir 3B Récup' | `/3b-recup/` |

À ajouter dans le texte si la mise en page le permet :

| Texte du lien | Page visée |
|---|---|
| rénover une charpente existante (dans l'encadré grange) | `/renovation-charpente-combles/` |
| des charpentiers formés chez les Compagnons du Devoir (section 3.6) | `/a-propos/` |
| notre guide du réemploi du bois (phase 2) | `/conseils/reemploi-bois-construction/` |
| la dépose d'une ancienne charpente à L'Argentière-la-Bessée (légende du héros) | `/realisations/refection-d-une-charpente-a-l-argentiere-la-bessee/` |

Liens entrants : depuis la page 11 (méthode, onglet 01, et carte « Diagnostic et gisement »), depuis les pages 13 et 14, depuis le guide 24.

## 6. Photos

**À utiliser (galerie actuelle) :**

| Emplacement | Dossier | Photo (légende de la galerie) |
|---|---|---|
| Héros (provisoire) | `/galeries/refection-d-une-charpente-a-l-argentiere-la-bessee` | « dépose de l'ancienne charpente » |
| Section 3.6 (fond sombre) | `/galeries/refection-d-une-toiture-a-ronatlon` | « pied d'arbalétrier » |
| Section 3.8, carte particuliers | `/galeries/renovation-d-une-maison-d-habitation-a-l-argentiere-la-bessee` | « Existant » (le bâtiment avant travaux) |

**À demander à Jean (prioritaire pour cette page) :**
- Jean ou un charpentier en train de relever une charpente ancienne (mètre, carnet, marquage des pièces) : photo principale du héros ;
- un extrait anonymisé de livrable (page de relevé, tableau, photo annotée), si Jean accepte de le montrer ;
- une grange ou un bâtiment avant déconstruction, vue large.

## 7. Points à valider avec Jean

1. **Rôle de 3B dans le diagnostic PEMD (point bloquant) :** 3B réalise-t-il lui-même le diagnostic PEMD réglementaire ? Si oui, avec quelle attestation de compétences et quelle assurance ? Tant que la réponse n'est pas « oui, avec justificatifs », publier la **variante A** partout (En bref, section 3.6, FAQ 5). Si oui, basculer en **variante B** et afficher les justificatifs.
2. **Diagnostic ressources :** 3B le propose-t-il déjà ? Sous quel nom ? Se limite-t-il au bois ou couvre-t-il aussi la couverture et l'isolation que nos charpentiers savent déposer ?
3. **Livrable :** forme, contenu, à qui il est remis ; un exemple anonymisé peut-il être montré ?
4. **Relecture réglementaire :** faire relire les sections 3.3 et 3.4 et les FAQ 1, 2, 4 et 6 par un diagnostiqueur PEMD ou au regard du formulaire Cerfa de récolement et de la note de la SPREC, en particulier : la phrase sur le maître d'ouvrage, la phrase sur les compétences et l'assurance du diagnostiqueur, et la formule « réemployé, valorisé ou éliminé ».
5. **Ambition PRECI :** confirmer le message « associez-nous dès l'étude de faisabilité » (repris de la fiche PRECI).
6. **Photos :** prévoir une séance photo de repérage sur un vrai bâtiment.

**Idées d'actions (à décider avec Jean) :**
- si 3B n'est pas diagnostiqueur, identifier un ou deux diagnostiqueurs PEMD du secteur avec qui travailler, et, avec leur accord écrit seulement, l'indiquer sur la page ;
- publier, en phase 2, un exemple réel et anonymisé de gisement bois relevé (types de pièces, état, devenir), sans chiffre non vérifié.
