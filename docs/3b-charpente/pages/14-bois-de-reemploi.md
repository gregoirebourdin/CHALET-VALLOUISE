# Fiche 14 · Bois de réemploi et vieux bois · `/3b-recup/bois-de-reemploi/`

> **Statut :** rédaction complète, à relire par Jean. Rédigée le 11 octobre 2026 à partir de `00-brief.md` et `realisations-source.md` uniquement.
>
> **Conventions :**
> - dans les **titres** (H1, H2), les mots entre `**` passent en vert accent ; dans les **textes**, `**` veut dire gras ;
> - les lignes en italique (_Rôle_, _Composant_, _Note_) sont des consignes, pas du texte à publier ;
> - les espaces insécables sont déjà dans le texte ;
> - **deux variantes** sont rédigées pour la vente de bois : **A** (le bois est réemployé seulement sur les chantiers de 3B) et **B** (3B vend aussi du bois de réemploi). Les passages concernés sont signalés. Sans réponse de Jean, publier la variante A.

## 1. Carte d'identité

- **Adresse :** `/3b-recup/bois-de-reemploi/`
- **Objectif de la page :**
  - capter les recherches sur le vieux bois (480/mois au total sur « vieux bois », 170 sur « bardage vieux bois », 140 sur « bois de récupération », 110 sur « poutres anciennes », 110 sur « planche vieux bois ») ;
  - montrer, avec des chantiers réels, comment 3B remet le bois de réemploi en œuvre ;
  - expliquer la préparation en atelier (tri, nettoyage, usinage) ;
  - répondre clairement à la question « vendez-vous du vieux bois ? ».
- **Visiteurs visés :**
  - particuliers qui veulent du vieux bois dans leur projet (bardage, poutres apparentes, garde-corps) ou qui veulent garder le bois de leur grange ou de leur chalet ;
  - architectes et maîtres d'ouvrage qui veulent intégrer du bois de réemploi à un projet ;
  - IA qui cherchent qui transforme et pose du bois de réemploi dans les Hautes-Alpes.
- **Mot-clé principal :** vieux bois (480/mois).
- **Mots-clés secondaires :** bardage vieux bois (170), bois de récupération (140), poutres anciennes (110), planche vieux bois (110), bois de réemploi.
- **Intention de recherche :** mixte. Inspiration et information (que faire avec du vieux bois, comment est-il préparé ?) et transaction (où en trouver, qui le pose ?). La variante B répond mieux à l'intention d'achat ; la variante A capte l'intention de projet.
- **Pages liées :** 11 `/3b-recup/`, 12 `/3b-recup/diagnostic-pemd/`, 13 `/3b-recup/deconstruction-selective/`, 10 `/balcon-terrasse-abri-bois/`, 02 `/charpente-bois/`, 03 `/renovation-charpente-combles/`, fiches de réalisation 19, 15 et 13, 24 `/conseils/reemploi-bois-construction/` (phase 2), 21 `/contact/`.
- **Longueur du corps de page (section 3, hors FAQ, une seule variante comptée) :** environ 981 mots.

## 2. SEO

- **Balise title** (59 caractères) : Vieux bois et bois de réemploi, Hautes-Alpes | 3B Charpente
- **Meta description** (152 caractères) : Bardage vieux bois, garde-corps, fermes : 3B Récup' trie, nettoie et usine le bois de réemploi dans ses ateliers, puis le pose. Charpentier depuis 2007.
- **H1 :** **Vieux bois et bois de réemploi** dans les Hautes-Alpes
- **Données structurées :** Service + BreadcrumbList dans un `@graph`, puis FAQPage. En variante B seulement, on pourra ajouter des fiches `Product` pour les bois réellement en vente (sans prix inventé).

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://3bcharpente.fr/3b-recup/bois-de-reemploi/#service",
      "name": "Transformation et pose de bois de réemploi",
      "serviceType": "Réemploi du bois : tri, nettoyage, usinage et remise en œuvre",
      "description": "3B Récup', filière de 3B Charpente à L'Argentière-la-Bessée (Hautes-Alpes), utilise du bois issu des chantiers de déconstruction : trié, nettoyé et usiné dans ses ateliers, il est remis en œuvre sur ses chantiers, par exemple en bardage vieux bois, en garde-corps ou en ferme de charpente.",
      "url": "https://3bcharpente.fr/3b-recup/bois-de-reemploi/",
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
      ]
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://3bcharpente.fr/" },
        { "@type": "ListItem", "position": 2, "name": "3B Récup'", "item": "https://3bcharpente.fr/3b-recup/" },
        { "@type": "ListItem", "position": 3, "name": "Bois de réemploi", "item": "https://3bcharpente.fr/3b-recup/bois-de-reemploi/" }
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
  "@id": "https://3bcharpente.fr/3b-recup/bois-de-reemploi/#faq",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Qu'est-ce que le bois de réemploi ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Le bois de réemploi est un bois déjà mis en œuvre dans un bâtiment, déposé avec soin puis remis en œuvre dans un nouvel ouvrage. Chez 3B Récup', filière de 3B Charpente à L'Argentière-la-Bessée, il vient des chantiers de déconstruction. Il est trié, nettoyé et usiné dans nos ateliers, puis posé par nos charpentiers."
      }
    },
    {
      "@type": "Question",
      "name": "Quelle différence entre vieux bois et bois de réemploi ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "« Vieux bois » désigne un bois ancien, patiné par le temps : poutres anciennes, planches, bardages. « Bois de réemploi » dit ce qu'on en fait : le remettre en œuvre dans un nouvel ouvrage après l'avoir préparé. Un vieux bois qui dort dans une grange est un gisement ; posé en bardage, il devient du bois de réemploi."
      }
    },
    {
      "@type": "Question",
      "name": "Comment le vieux bois est-il préparé avant d'être reposé ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Dans nos ateliers, les matériaux récupérés sont soigneusement triés, nettoyés et usinés. Le tri oriente chaque pièce vers l'usage qui lui convient, le nettoyage la débarrasse de ce qui gêne, et l'usinage la remet à dimension. À la repose, nous adaptons notre système constructif aux pièces de réemploi disponibles."
      }
    },
    {
      "@type": "Question",
      "name": "Peut-on faire un bardage en vieux bois ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oui. 3B Charpente a par exemple posé un bardage vieux bois sur une maison rénovée à L'Argentière-la-Bessée, avec un garde-corps en bois de réemploi. Le bardage est le revêtement en planches qui habille et protège une façade. La faisabilité dépend de l'état et de la quantité de planches disponibles : nous l'étudions pour chaque projet."
      }
    },
    {
      "@type": "Question",
      "name": "Vendez-vous du bois de réemploi ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Non, le bois que nous récupérons est réservé à nos propres chantiers. Nous le préparons dans nos ateliers, puis nos charpentiers le posent en bardage, en garde-corps ou en charpente, dans les projets de construction et de rénovation que nous réalisons. Si vous aimez le vieux bois, parlons de votre projet : chaque projet débute par une étude sur mesure."
      }
    },
    {
      "@type": "Question",
      "name": "Le bois de réemploi convient-il pour une charpente ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Tout dépend de la pièce et de l'usage. Dans nos ateliers, les matériaux récupérés sont triés, nettoyés et usinés pour répondre aux exigences de qualité et de sécurité de leur nouvelle utilisation. À la repose, nous adaptons notre système constructif aux pièces disponibles. 3B Charpente a par exemple réalisé une ferme de charpente en vieux bois lors de la réfection d'une toiture."
      }
    }
  ]
}
```

<!-- FAQPAGE_JSONLD:END -->

- **Textes alternatifs des images clés :**
  - `bardage-vieux-bois-largentiere-la-bessee.webp` : « Bardage en vieux bois sur la façade d'une maison rénovée par 3B Charpente à L'Argentière-la-Bessée » [À VALIDER AVEC JEAN : essence du bois] ;
  - `garde-corps-bois-reemploi-largentiere-la-bessee.webp` : « Garde-corps en bois de réemploi dans une maison rénovée par 3B Charpente à L'Argentière-la-Bessée » ;
  - `ferme-vieux-bois-refection-toiture.webp` : « Ferme de charpente en vieux bois posée par 3B Charpente lors de la réfection d'une toiture » [commune à valider] ;
  - `pied-arbaletrier-vieux-bois.webp` : « Pied d'arbalétrier d'une ferme en vieux bois, réfection d'une toiture par 3B Charpente ».

## 3. Sections dans l'ordre

### 3.1 Héros

_Rôle : montrer tout de suite le résultat (le vieux bois posé) et dire d'où il vient._
_Composant Framer : héros (titre en deux couleurs, mots forts en gras, bouton plein vert + bouton contour, deux preuves avec pastille sauge) + collage photo._

**Kicker :** 3B Récup' · Bois de réemploi

**H1 :** **Vieux bois et bois de réemploi** dans les Hautes-Alpes

**Texte :** Nous utilisons **du bois issu des chantiers de déconstruction**. Trié, nettoyé et usiné dans nos ateliers, il retrouve sa place **en bardage, en garde-corps ou en charpente**, sur nos chantiers de construction et de rénovation.

**Bouton plein :** Parlons de votre projet → `/contact/`

**Bouton contour :** Voir nos réalisations → `#realisations`

**Preuves (pastilles sauge) :** Bois issu de la déconstruction · Transformé dans nos ateliers

**Collage photo et légendes :**
- grande photo : « Bardage vieux bois, maison rénovée à L'Argentière-la-Bessée. »
- vignette 1 : « Garde-corps en bois de réemploi. »
- vignette 2 : « Ferme de charpente en vieux bois. »

### 3.2 En bref

_Composant : encadré crème bordé d'un filet vert forêt._

**Titre de l'encadré :** En bref

**Texte :** Le bois de réemploi est un bois déjà mis en œuvre dans un bâtiment, déposé avec soin puis remis en œuvre dans un nouvel ouvrage. 3B Récup', filière de 3B Charpente à L'Argentière-la-Bessée (Hautes-Alpes), trie, nettoie et usine ce vieux bois dans ses ateliers, puis l'intègre à ses chantiers : bardage, garde-corps, fermes de charpente.

### 3.3 Vieux bois, bois de récupération, bois de réemploi

_Rôle : définitions courtes, citables, qui couvrent les trois expressions recherchées._
_Composant Framer : trois cartes blanches en ligne (pastille sauge), puis un paragraphe._

**Kicker :** Vocabulaire

**H2 :** Vieux bois, bois de récupération, **bois de réemploi**

**Carte 1 · Vieux bois**
Le nom courant d'un bois ancien, patiné par le temps : poutres anciennes, planches de vieux bois, bardages grisés.

**Carte 2 · Bois de récupération**
Un bois récupéré sur un bâtiment ou un chantier, quel que soit son usage futur.

**Carte 3 · Bois de réemploi**
Un bois récupéré puis remis en œuvre dans un nouvel ouvrage, après préparation. C'est le métier de 3B Récup', de la dépose à la repose.

**Texte :** Les trois expressions désignent souvent les mêmes pièces. La différence tient à ce qu'on en fait : un vieux bois qui dort dans une grange est un gisement ; posé en bardage sur une maison, il devient du bois de réemploi.

### 3.4 Le vieux bois dans nos chantiers

_Rôle : preuves par des réalisations réelles, puis usages possibles. Ancre `#realisations`._
_Composant Framer : cartes de réalisations (étiquette « 3B Charpente » sur la photo, lien « Voir les travaux → »), trois cartes, puis une liste d'usages en pastilles._

**Kicker :** Nos réalisations

**H2 :** Le vieux bois **dans nos chantiers**

**Texte d'introduction :** Nous utilisons du bois issu des chantiers de déconstruction, donnant une nouvelle vie au matériau bois, en l'intégrant dans nos chantiers de construction et de rénovation. On le retrouve dans plusieurs réalisations publiées.

**Carte 1 · Bardage vieux bois**
_Rénovation d'une maison d'habitation à L'Argentière-la-Bessée._ En façade, un bardage en vieux bois. Le bardage est le revêtement en planches qui habille et protège un mur.
_Lien :_ Voir les travaux → `/realisations/renovation-d-une-maison-d-habitation-a-l-argentiere-la-bessee/`

**Carte 2 · Garde-corps en bois de réemploi**
_Même maison, à L'Argentière-la-Bessée._ Un garde-corps réalisé en bois de réemploi, dans la même rénovation. [À VALIDER AVEC JEAN : préciser où (escalier, mezzanine, balcon ?) ; la galerie place la photo entre « Escalier balancé » et « Pièce de vie ».]
_Lien :_ Voir les travaux → `/realisations/renovation-d-une-maison-d-habitation-a-l-argentiere-la-bessee/`

**Carte 3 · Ferme en vieux bois**
_Réfection d'une toiture_ [À VALIDER AVEC JEAN : commune exacte, la galerie indique « Ronatlon »]. Une ferme de charpente en vieux bois, l'assemblage triangulé qui porte la toiture.
_Lien :_ Voir les travaux → `/realisations/refection-d-une-toiture-a-ronatlon/`

**Texte après les cartes :** Le réflexe vaut aussi au-delà du bois : dans les monts du Lyonnais, une maison à ossature bois de 3B Charpente repose sur un support maçonné en pierres récupérées.

**Sous-titre :** Ce que le bois de réemploi peut devenir

**Texte :** Selon l'état, la section et la longueur des pièces, le bois de réemploi peut devenir :

- un **bardage** de façade ;
- un **garde-corps** d'escalier, de mezzanine ou de balcon ;
- des **fermes et pièces de charpente**, apparentes ou non ;
- un **plancher** ou un **habillage intérieur** en planches de vieux bois.

[À VALIDER AVEC JEAN : confirmer cette liste ; ajouter escaliers, poutres apparentes ou mobilier si 3B en a déjà réalisé.]

### 3.5 De la pièce déposée à la pièce posée

_Rôle : expliquer la préparation en atelier avec les mots validés, sans inventer de procédé._
_Composant Framer : méthode en onglets réduite à trois onglets (Trier, Nettoyer, Usiner), puis un paragraphe « Repose »._

**Kicker :** À l'atelier

**H2 :** De la pièce déposée **à la pièce posée**

**Texte d'introduction :** Dans nos ateliers, les matériaux récupérés sont soigneusement triés, nettoyés et usinés. Ce processus de transformation et de reconditionnement est essentiel pour préparer les matériaux à leur remise en œuvre.

**Onglet 1 · Trier**
Chaque pièce est examinée, puis orientée vers l'usage qui lui convient. Une pièce saine et longue peut redevenir une pièce de charpente ; une planche abîmée en bout peut être recoupée pour un habillage. [À VALIDER AVEC JEAN : critères de tri réellement utilisés.]

**Onglet 2 · Nettoyer**
Les pièces sont débarrassées de ce qui gêne leur nouvel usage. [À VALIDER AVEC JEAN : opérations réelles, par exemple retrait des pointes et ferrures, brossage, traitement éventuel.]

**Onglet 3 · Usiner**
Nous remettons les pièces à dimension et taillons les assemblages nécessaires à leur nouvel usage, comme pour du bois neuf. [À VALIDER AVEC JEAN : opérations et machines courantes.]

**Paragraphe « Repose » :** La phase de repose des matériaux sur le chantier implique l'adaptation de notre système constructif en fonction des matériaux de réemploi. Le dessin de l'ouvrage tient compte des longueurs, des sections et de l'aspect des pièces disponibles : c'est le projet qui s'adapte au matériau.

### 3.6 Qualité et sécurité

_Rôle : rassurer avec la seule formulation validée, sans ajouter de promesse._
_Composant Framer : bandeau crème avec une icône bouclier en pastille sauge et un texte court._

**Kicker :** Qualité

**H2 :** Un vieux bois **prêt pour sa nouvelle vie**

**Texte :** Un vieux bois n'est ni bon ni mauvais par principe : tout dépend de la pièce. C'est pourquoi chaque pièce passe par l'atelier avant de retrouver un chantier. Le tri, le nettoyage et l'usinage préparent les matériaux à leur remise en œuvre, garantissant qu'ils répondent aux normes de qualité et de sécurité nécessaires pour leur nouvelle utilisation.

_Note : la fin de la phrase est la formulation validée de la maquette. Voir « Points à valider » : si Jean ne peut pas préciser quelles normes et comment les pièces porteuses sont vérifiées, la remplacer par « pour qu'ils répondent aux exigences de qualité et de sécurité de leur nouvelle utilisation »._

### 3.7 Acheter du vieux bois ?

_Rôle : répondre franchement à l'intention d'achat (poutres anciennes, planches de vieux bois)._
_Composant Framer : carte blanche large avec un bouton plein vert._

**Kicker :** Disponibilité

**H2 :** Et si je cherche **du vieux bois** ?

**Texte (variante A : réemploi sur les chantiers de 3B seulement) :**

Le bois que nous récupérons est réservé à nos propres chantiers : nous ne le vendons pas au détail. Si vous aimez le vieux bois, le plus simple est de l'intégrer à votre projet de construction ou de rénovation. Nous le préparons dans nos ateliers et nos charpentiers le posent : bardage, garde-corps, charpente.

_Bouton :_ Parlons de votre projet → `/contact/`

**Texte (variante B : 3B vend aussi du bois de réemploi) :**

Nous proposons aussi du bois de réemploi à la vente : poutres anciennes, planches de vieux bois, bardage. [À VALIDER AVEC JEAN : produits réellement disponibles ; clients (particuliers, professionnels ou les deux) ; vente sur stock ou sur demande ; retrait à l'atelier ou livraison ; conditions.] Les disponibilités dépendent des déconstructions en cours : contactez-nous pour connaître le stock du moment, ou pour un projet posé par nos charpentiers.

_Bouton :_ Demander les disponibilités → `/contact/`

### 3.8 Pour qui

_Rôle : parler explicitement aux deux publics._
_Composant Framer : deux cartes blanches côte à côte, icône en pastille sauge, un bouton contour par carte._

**Kicker :** Pour qui

**H2 :** Votre projet, **votre vieux bois**

**Carte « Particuliers »** (icône : maison)
_Sous-titre :_ Vous rénovez une grange, un chalet ou une maison de pays

Vos vieilles poutres, vos planchers ou votre bardage ont du caractère ? Avant de les jeter, parlons-en : nous regardons ce qui peut être déposé, préparé à l'atelier et reposé dans votre projet. [À VALIDER AVEC JEAN : réemploi du bois du particulier sur son propre chantier.] Vous voulez un bardage vieux bois ou un garde-corps en bois de réemploi ? Notre réalisation à L'Argentière-la-Bessée montre ce que cela donne.

_Bouton contour :_ Garde-corps, balcons et terrasses → `/balcon-terrasse-abri-bois/`

**Carte « Professionnels »** (icône : plan)
_Sous-titre :_ Architectes, maîtres d'ouvrage, collectivités, entreprises de construction

Vous voulez intégrer du bois de réemploi à un projet ? Associez-nous dès l'étude de faisabilité : nous dessinons l'ouvrage avec vous à partir des pièces disponibles, puis nous le réalisons. Le bois peut venir du bâtiment déconstruit lui-même [À VALIDER AVEC JEAN : ou d'un stock de 3B ?].

_Bouton contour :_ Évaluer le gisement bois → `/3b-recup/diagnostic-pemd/`

### 3.9 FAQ

_Composant Framer : FAQ en accordéon dans des cartes blanches._

**Kicker :** Questions fréquentes

**H2 :** Le vieux bois **en questions**

### 3.10 Appel à l'action

_Composant Framer : bandeau vert forêt avec formes organiques et grille ronde translucide._

**Kicker :** Transformez votre projet avec le réemploi

**H2 :** Donnons une **nouvelle vie** à votre bois

**Texte :** Un bardage, un garde-corps, une charpente en vieux bois, ou des poutres anciennes à sauver ? Racontez-nous votre projet. Chaque projet chez 3B Charpente débute par une étude sur mesure.

**Bouton plein :** Parlons de votre projet → `/contact/`

**Bouton contour :** 06 34 67 31 49 → `tel:+33634673149`

**Ligne de coordonnées :** 3B Charpente, 5 rue Saint-Michel, 05120 L'Argentière-la-Bessée · 06 34 67 31 49 · tardy@3bcharpente.fr

## 4. FAQ

_La question 5 a deux réponses (variantes A et B). Le balisage FAQPage reprend la variante A ; le remplacer si la variante B est retenue._

### Qu'est-ce que le bois de réemploi ?

Le bois de réemploi est un bois déjà mis en œuvre dans un bâtiment, déposé avec soin puis remis en œuvre dans un nouvel ouvrage. Chez 3B Récup', filière de 3B Charpente à L'Argentière-la-Bessée, il vient des chantiers de déconstruction. Il est trié, nettoyé et usiné dans nos ateliers, puis posé par nos charpentiers.

### Quelle différence entre vieux bois et bois de réemploi ?

« Vieux bois » désigne un bois ancien, patiné par le temps : poutres anciennes, planches, bardages. « Bois de réemploi » dit ce qu'on en fait : le remettre en œuvre dans un nouvel ouvrage après l'avoir préparé. Un vieux bois qui dort dans une grange est un gisement ; posé en bardage, il devient du bois de réemploi.

### Comment le vieux bois est-il préparé avant d'être reposé ?

Dans nos ateliers, les matériaux récupérés sont soigneusement triés, nettoyés et usinés. Le tri oriente chaque pièce vers l'usage qui lui convient, le nettoyage la débarrasse de ce qui gêne, et l'usinage la remet à dimension. À la repose, nous adaptons notre système constructif aux pièces de réemploi disponibles.

### Peut-on faire un bardage en vieux bois ?

Oui. 3B Charpente a par exemple posé un bardage vieux bois sur une maison rénovée à L'Argentière-la-Bessée, avec un garde-corps en bois de réemploi. Le bardage est le revêtement en planches qui habille et protège une façade. La faisabilité dépend de l'état et de la quantité de planches disponibles : nous l'étudions pour chaque projet.

### Vendez-vous du bois de réemploi ?

_Réponse variante A :_

Non, le bois que nous récupérons est réservé à nos propres chantiers. Nous le préparons dans nos ateliers, puis nos charpentiers le posent en bardage, en garde-corps ou en charpente, dans les projets de construction et de rénovation que nous réalisons. Si vous aimez le vieux bois, parlons de votre projet : chaque projet débute par une étude sur mesure.

_Réponse variante B (remplace la précédente si Jean confirme) :_ Oui, nous proposons aussi du bois de réemploi à la vente [À VALIDER AVEC JEAN : produits, clients, conditions]. Les disponibilités dépendent des déconstructions en cours : contactez-nous pour connaître le stock du moment. Nous pouvons aussi intégrer ce bois à votre projet, préparé dans nos ateliers et posé par nos charpentiers.

### Le bois de réemploi convient-il pour une charpente ?

Tout dépend de la pièce et de l'usage. Dans nos ateliers, les matériaux récupérés sont triés, nettoyés et usinés pour répondre aux exigences de qualité et de sécurité de leur nouvelle utilisation. À la repose, nous adaptons notre système constructif aux pièces disponibles. 3B Charpente a par exemple réalisé une ferme de charpente en vieux bois lors de la réfection d'une toiture.

## 5. Liens internes

| Texte du lien | Page visée |
|---|---|
| Parlons de votre projet / Demander les disponibilités | `/contact/` |
| Voir nos réalisations | `#realisations` |
| Voir les travaux (bardage vieux bois, garde-corps) | `/realisations/renovation-d-une-maison-d-habitation-a-l-argentiere-la-bessee/` |
| Voir les travaux (ferme en vieux bois) | `/realisations/refection-d-une-toiture-a-ronatlon/` |
| Garde-corps, balcons et terrasses | `/balcon-terrasse-abri-bois/` |
| Évaluer le gisement bois | `/3b-recup/diagnostic-pemd/` |

À ajouter dans le texte si la mise en page le permet :

| Texte du lien | Page visée |
|---|---|
| 3B Récup' (fil d'Ariane et « En bref ») | `/3b-recup/` |
| chantiers de déconstruction (introduction de 3.4) | `/3b-recup/deconstruction-selective/` |
| support maçonné en pierres récupérées (monts du Lyonnais) | `/realisations/maison-a-ossature-bois-dans-les-monts-du-lyonnais/` |
| fermes et pièces de charpente | `/charpente-bois/` |
| rénover la charpente existante | `/renovation-charpente-combles/` |
| notre guide du réemploi du bois (phase 2) | `/conseils/reemploi-bois-construction/` |

## 6. Photos

**À utiliser (galerie actuelle) :**

| Emplacement | Dossier | Photo (légende de la galerie) |
|---|---|---|
| Héros, grande photo ; carte 1 | `/galeries/renovation-d-une-maison-d-habitation-a-l-argentiere-la-bessee` | « Bardage vieux bois » |
| Héros, vignette 1 ; carte 2 | `/galeries/renovation-d-une-maison-d-habitation-a-l-argentiere-la-bessee` | « Garde corps en bois de réemploi » |
| Héros, vignette 2 ; carte 3 | `/galeries/refection-d-une-toiture-a-ronatlon` | « ferme en vieux bois » |
| Section 3.5 « Repose » | `/galeries/refection-d-une-toiture-a-ronatlon` | « pied d'arbalétrier » ou « pose de la charpente et du bardage » |
| Texte après les cartes (pierres récupérées) | `/galeries/maison-a-ossature-bois-dans-les-monts-du-lyonnais` | « support maçonné en pierre récupérées » |

**À demander à Jean (prioritaire pour cette page) :**
- une même pièce de vieux bois avant et après nettoyage et usinage (deux photos cadrées pareil) ;
- le stock de bois de réemploi à l'atelier ;
- des gros plans de patine, de traces d'outils anciens, d'assemblages d'origine ;
- en variante B : une photo par type de bois disponible (poutres, planches, bardage).

## 7. Points à valider avec Jean

1. **Vente de bois de réemploi (point bloquant pour la section 3.7 et la FAQ 5) :** 3B vend-il du bois de réemploi, à qui (particuliers, professionnels), quels produits, sur stock ou sur demande, avec retrait ou livraison ? Sans réponse : **variante A**.
2. **« Normes de qualité et de sécurité » :** lesquelles ? Comment la capacité d'une pièce porteuse de réemploi est-elle vérifiée (classement, avis d'un bureau d'études) ? L'assurance décennale couvre-t-elle les ouvrages en bois de réemploi ? Sans réponse, remplacer « normes » par « exigences » (section 3.6).
3. **Préparation en atelier :** critères de tri, opérations de nettoyage (dépointage, brossage, traitement ?) et d'usinage réellement pratiqués.
4. **Usages déjà réalisés :** confirmer la liste (bardage, garde-corps, fermes, planchers, habillages) ; ajouter escaliers, poutres apparentes ou mobilier si 3B en a fait.
5. **Réalisation de L'Argentière-la-Bessée :** essence du bardage vieux bois, provenance du bois (bâtiment déconstruit par 3B ?), emplacement du garde-corps.
6. **Commune « Ronatlon »** : nom exact ; provenance de la ferme en vieux bois.
7. **Particuliers :** possibilité de reposer le bois d'un particulier sur son propre chantier.
8. **Origine du bois de réemploi :** vient-il uniquement des déconstructions de 3B, ou aussi d'autres sources ? Ne rien écrire sur l'origine locale tant que ce n'est pas confirmé.

**Idées d'actions (à décider avec Jean) :**
- créer une fiche de réalisation dédiée au bardage vieux bois de L'Argentière-la-Bessée, avec un court texte (provenance, préparation, pose) : c'est la meilleure preuve pour « bardage vieux bois » ;
- en variante A, décider s'il est utile d'indiquer aux particuliers qui cherchent du bois à acheter la plateforme de réemploi des matériaux du bâtiment de L'Argentière-la-Bessée (mention neutre, sans partenariat).
