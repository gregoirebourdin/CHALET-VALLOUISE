# Fiche 02 : Charpente bois traditionnelle

`/charpente-bois/` · Phase 1 · Statut : rédigée, à relire et valider par Jean

**Conventions.** Le texte à coller sur le site est en citation (lignes qui commencent par `>`). Dans les titres (H1, H2), les mots entre `**` passent en vert (#336233 sur fond clair, sauge #A3D2A3 sur fond sombre) ; dans les paragraphes, `**` veut simplement dire gras. Les espaces insécables sont déjà en place. Tout ce qui est entre `[À VALIDER AVEC JEAN : …]` est à confirmer ou à supprimer avant publication. Sources : `../00-brief.md` et `../realisations-source.md`.

---

## 1. Carte d'identité

- **Adresse :** `/charpente-bois/` (canonique : `https://3bcharpente.fr/charpente-bois/`).
- **Objectif de la page :**
  - se positionner sur « charpente bois » et « charpente traditionnelle » avec un ancrage local fort ;
  - montrer le savoir-faire concret (trait, taille à l'atelier, assemblages bois sur bois, levage) ;
  - faire demander un devis ou une visite.
- **Visiteurs visés :**
  - particuliers des Hautes-Alpes qui construisent, refont ou agrandissent une maison ou un chalet ;
  - propriétaires d'une maison ancienne dont la charpente fatigue ;
  - architectes et maîtres d'œuvre qui cherchent un charpentier pour une charpente traditionnelle ou apparente.
- **Mots-clés :**
  - principal : charpente bois (5 400 recherches/mois) ;
  - secondaire : charpente traditionnelle (2 900/mois) ;
  - longue traîne locale (volumes non mesurables) : charpentier Hautes-Alpes (30), charpentier 05 (30), charpentier Briançon, charpentier L'Argentière-la-Bessée, charpente mélèze, assemblage tenon mortaise, ferme de charpente.
- **Intention de recherche :** mixte. Au niveau national, « charpente bois » et « charpente traditionnelle » sont surtout informatives (qu'est-ce que c'est, quel bois, quel prix). La page y répond par des définitions courtes et des étapes, puis convertit les visiteurs des Hautes-Alpes (devis, visite).
- **Pages liées :**
  - prestations proches : `/renovation-charpente-combles/`, `/maison-ossature-bois/`, `/extension-surelevation-bois/`, `/balcon-terrasse-abri-bois/` ;
  - filière : `/3b-recup/` ;
  - preuves : 4 fiches réalisations (section 3.9) et `/realisations/` ;
  - confiance : `/a-propos/` ;
  - conversion : `/contact/`.

---

## 2. SEO

- **Balise title :** `Charpente bois traditionnelle, Hautes-Alpes | 3B Charpente`
- **Meta description :** `Charpente bois traditionnelle en mélèze et sapin des Hautes-Alpes, taillée et assemblée dans notre atelier. Charpentiers depuis 2007. Demandez votre devis.`
- **Contrôles (mesurés) :** title 58 caractères · meta 155 caractères · corps de page 1190 mots (section 3, hors FAQ) · En bref 54 mots · FAQ 6 questions, 51 à 62 mots par réponse.
- **H1 (unique) :** Charpente bois **traditionnelle** dans les **Hautes-Alpes**
- **Fil d'Ariane :** Accueil › Charpente bois
- **Données structurées :** Service, FAQPage et BreadcrumbList, en JSON-LD. Le LocalBusiness est déclaré une seule fois pour tout le site ; ici, on y renvoie par son `@id` (à aligner avec l'`@id` retenu sur l'accueil).

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://3bcharpente.fr/charpente-bois/#service",
  "name": "Charpente bois traditionnelle",
  "serviceType": "Charpente bois",
  "description": "Conception, taille en atelier et levage de charpentes bois traditionnelles en mélèze et sapin des Hautes-Alpes : charpentes neuves, réfections de charpentes anciennes, charpentes apparentes, abris et terrasses couvertes.",
  "url": "https://3bcharpente.fr/charpente-bois/",
  "image": "https://3bcharpente.fr/images/charpente-traditionnelle-levage-fermes-argentiere-la-bessee.webp",
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
    { "@type": "City", "name": "Vallouise-Pelvoux" },
    { "@type": "City", "name": "La Salle-les-Alpes" }
  ]
}
```

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://3bcharpente.fr/charpente-bois/#faq",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Quel bois utiliser pour une charpente traditionnelle ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nous utilisons principalement du mélèze et du sapin des Hautes-Alpes, sciés par la Scierie Savoldelli, notre partenaire local. Le mélèze, essence de montagne, tient bien en extérieur et se prête aux pièces apparentes. Le sapin, plus léger, est un bois de structure courant. Le choix dépend de la portée, de l'exposition et de l'aspect recherché : nous en parlons ensemble lors de l'étude."
      }
    },
    {
      "@type": "Question",
      "name": "Combien coûte une charpente bois traditionnelle ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Le prix dépend de la surface et de la forme du toit, des sections de bois, du type d'assemblages, de l'accès au chantier et des travaux associés (isolation, couverture). Un prix au mètre carré donné sans voir le projet serait trompeur. Contactez-nous : nous discuterons de vos besoins lors d'une rencontre et vous proposerons un devis détaillé adapté à votre projet."
      }
    },
    {
      "@type": "Question",
      "name": "Quelle différence entre une charpente traditionnelle et une charpente en fermettes ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "La charpente traditionnelle est faite de pièces massives (fermes, pannes, chevrons) taillées sur mesure et assemblées bois sur bois. La charpente industrielle utilise des fermettes : de petites fermes en W, rapprochées et reliées par des connecteurs métalliques. Les fermettes occupent le volume sous le toit ; une charpente traditionnelle laisse en général les combles plus libres et peut rester apparente."
      }
    },
    {
      "@type": "Question",
      "name": "Combien de temps faut-il pour faire une charpente ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Le délai peut varier selon la complexité et la taille du projet. Nous vous fournirons un calendrier estimatif lors de notre première rencontre. Une bonne partie du travail se fait à l'atelier : traçage, taille et assemblage à blanc. Sur le chantier, il reste le levage, puis l'isolation et la couverture si vous nous les confiez."
      }
    },
    {
      "@type": "Question",
      "name": "Intervenez-vous à Briançon et en dehors des Hautes-Alpes ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oui. Basés à L'Argentière-la-Bessée, dans le nord des Hautes-Alpes, nous intervenons dans tout le département : Briançon, la Vallouise, Serre Chevalier, le Pays des Écrins. Nous travaillons aussi en région PACA et Rhône-Alpes, par exemple pour une maison à ossature bois dans les monts du Lyonnais ou un balcon terrasse à Gresse-en-Vercors."
      }
    },
    {
      "@type": "Question",
      "name": "Peut-on garder ou réutiliser une vieille charpente ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Souvent, au moins en partie. Une charpente ancienne se répare : remplacement de pièces, reprise des fermes, rallonge par un trait de Jupiter. Quand elle doit être déposée, 3B Récup', notre activité de réemploi, trie les pièces saines, les nettoie et les usine à l'atelier pour les remettre en œuvre, comme cette ferme en vieux bois reposée lors d'une réfection de toiture."
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
    { "@type": "ListItem", "position": 2, "name": "Charpente bois", "item": "https://3bcharpente.fr/charpente-bois/" }
  ]
}
```

- **Textes alternatifs des images clés :**

| Fichier | Texte alternatif | Photo source |
|---|---|---|
| `charpente-traditionnelle-levage-fermes-argentiere-la-bessee.webp` | Levage des fermes d'une charpente traditionnelle refaite par 3B Charpente à L'Argentière-la-Bessée (Hautes-Alpes) | `/galeries/refection-d-une-charpente-a-l-argentiere-la-bessee`, « levage des fermes » |
| `taille-tenon-double-embrevement-besaigue.webp` | Charpentier de 3B Charpente taillant à la besaiguë un tenon à double embrèvement | même dossier, « taille d'un tenon à double embrèvement à la besaïgue » |
| `trait-de-jupiter-assemble-argentiere-la-bessee.webp` | Trait de Jupiter assemblé sur une pièce de charpente, réfection à L'Argentière-la-Bessée | même dossier, « trait de jupiter assemblé » |
| `charpente-meleze-assemblage-a-blanc-prelles.webp` | Assemblage à blanc d'une charpente en mélèze pays avant levage, maison rénovée à Prelles (Hautes-Alpes) | `/galeries/renovation-d-une-maison-d-habitation-sur-la-commune-de-prelles`, « Assemblage à blanc (1) » |
| `abri-voiture-poincon-entrait-cintre-argentiere-la-bessee.webp` | Ferme d'un abri voiture avec poinçon et entrait cintré, assemblée par 3B Charpente à L'Argentière-la-Bessée | `/galeries/abris-voiture-a-l-argentiere-la-bessee`, « poinçon et entrait cintré » |
| `ferme-vieux-bois-reemploi.webp` | Ferme de charpente en vieux bois de réemploi reposée par 3B Charpente lors d'une réfection de toiture | `/galeries/refection-d-une-toiture-a-ronatlon`, « ferme en vieux bois » |

---

## 3. Sections, dans l'ordre

### 3.1 Fil d'Ariane

- **Rôle :** situer la page, alimenter le BreadcrumbList.
- **Composant :** ligne de texte discrète au-dessus du héros (pas dans la maquette Framer, à ajouter).

> Accueil › Charpente bois

### 3.2 Héros

- **Rôle :** dire le sujet et le lieu dès la première ligne, montrer un vrai chantier, donner deux preuves.
- **Composant Framer :** héros (titre en deux couleurs, texte avec mots forts en gras, bouton plein vert + bouton contour, deux preuves à pastille sauge). Photo de chantier réel à la place du collage de rondins.
- **Photo :** « levage des fermes » (réfection d'une charpente à L'Argentière-la-Bessée).
- **Note :** la maquette affichait « +100 projets » ; chiffre non vérifié, remplacé par « Bois des Hautes-Alpes ».

> _Kicker :_ Charpentier dans les Hautes-Alpes depuis 2007
>
> _H1 :_ Charpente bois **traditionnelle** dans les **Hautes-Alpes**
>
> _Texte :_ Nous traçons, taillons et assemblons vos charpentes **dans notre atelier**, en **mélèze et sapin des Hautes-Alpes**, avant de les lever sur votre maison. Des assemblages bois sur bois, un métier appris chez les **Compagnons du Devoir**, et une étude sur mesure pour chaque projet.
>
> _Bouton plein :_ Demander mon devis → `/contact/`
>
> _Bouton contour :_ Voir nos charpentes → `#realisations`
>
> _Preuve 1 :_ Depuis 2007
>
> _Preuve 2 :_ Bois des Hautes-Alpes
>
> _Légende photo :_ Levage des fermes, réfection d'une charpente à L'Argentière-la-Bessée.

### 3.3 En bref

- **Rôle :** réponse directe et autonome, que Google et les assistants IA peuvent citer telle quelle.
- **Composant :** carte blanche à coins arrondis avec une pastille sauge (style des cartes de services), placée juste sous le héros.

> _Titre de la carte :_ En bref
>
> _Texte :_ 3B Charpente, charpentier installé à L'Argentière-la-Bessée depuis 2007, conçoit et réalise des charpentes bois traditionnelles dans les Hautes-Alpes : charpentes neuves, réfections, charpentes apparentes, abris et terrasses couvertes. Les pièces sont tracées et taillées dans notre atelier, surtout en mélèze et sapin des Hautes-Alpes sciés par la Scierie Savoldelli, puis assemblées et levées sur place.

### 3.4 Qu'est-ce qu'une charpente traditionnelle ?

- **Rôle :** capter l'intention informative (« charpente traditionnelle ») avec des définitions courtes, citables par les IA.
- **Composant Framer :** section sur fond clair, titre à gauche, liste de définitions en cartes blanches (2 colonnes sur ordinateur, 1 sur mobile).
- **Photo :** « tenons mortaise chevillé » (abri voiture, L'Argentière-la-Bessée).

> _Kicker :_ Le métier
>
> _H2 :_ Une charpente **traditionnelle**, c'est quoi ?
>
> _Texte :_ Une charpente traditionnelle est faite de pièces de bois massif, taillées sur mesure et assemblées bois sur bois. Elle porte la couverture, encaisse le poids de la neige et, quand elle reste apparente, donne son caractère à la maison.
>
> _Texte :_ À la différence des fermettes industrielles (petites fermes en W reliées par des connecteurs métalliques), elle laisse en général plus d'espace libre sous le toit : utile si vous voulez un jour aménager les combles.
>
> _Définition :_ **Ferme :** le triangle qui porte le toit. Ses pièces principales sont les arbalétriers (inclinés), l'entrait (la pièce horizontale du bas) et le poinçon (la pièce verticale du centre).
>
> _Définition :_ **Pannes et chevrons :** les pannes sont des poutres horizontales posées sur les fermes ; elles portent les chevrons, sur lesquels repose la couverture.
>
> _Définition :_ **Tenon-mortaise chevillé :** le tenon, taillé au bout d'une pièce, entre dans la mortaise creusée dans l'autre. Une cheville en bois traverse le tout et serre l'assemblage.
>
> _Définition :_ **Assemblage à blanc :** la charpente est montée une première fois à l'atelier pour vérifier chaque pièce, puis démontée et transportée jusqu'au chantier.
>
> _Légende photo :_ Tenons et mortaises chevillés sur un abri voiture à L'Argentière-la-Bessée.

### 3.5 Ce que nous réalisons

- **Rôle :** montrer l'étendue de l'offre et distribuer les liens internes vers les prestations proches.
- **Composant Framer :** cartes de services blanches à coins arrondis, icône dans une pastille sauge, lien en bas de carte.

> _Kicker :_ Nos charpentes
>
> _H2 :_ Du neuf à l'ancien, **une charpente pour chaque projet**
>
> _Carte 1, titre :_ Charpente neuve
>
> _Carte 1, texte :_ Pour une maison neuve, une maison ossature bois ou une annexe. Apparente ou cachée, nous la dessinons avec vous.
>
> _Carte 1, lien :_ Maison ossature bois → `/maison-ossature-bois/`
>
> _Carte 2, titre :_ Réfection de charpente ancienne
>
> _Carte 2, texte :_ Remplacer des pièces abîmées, reprendre des fermes, refaire une charpente entière : nous l'avons fait à L'Argentière-la-Bessée et à Briançon.
>
> _Carte 2, lien :_ Rénovation de charpente et combles → `/renovation-charpente-combles/`
>
> _Carte 3, titre :_ Lucarnes et fenêtres de toit
>
> _Carte 3, texte :_ Une ouverture dans le toit se prépare dans la charpente : chevêtre (la pièce qui encadre l'ouverture), jouées de lucarne, encadrements.
>
> _Carte 3, lien :_ Créer une lucarne → `/renovation-charpente-combles/#lucarnes`
>
> _Carte 4, titre :_ Surélévation et extension
>
> _Carte 4, texte :_ Une structure bois légère posée sur une maison existante, comme à Pelvoux ou à Briançon.
>
> _Carte 4, lien :_ Extension et surélévation bois → `/extension-surelevation-bois/`
>
> _Carte 5, titre :_ Abris, carports et terrasses couvertes
>
> _Carte 5, texte :_ Des ouvrages plus petits, mais les mêmes assemblages : poinçon, entrait cintré, tenons chevillés.
>
> _Carte 5, lien :_ Balcons, terrasses et abris → `/balcon-terrasse-abri-bois/`

### 3.6 Notre méthode

- **Rôle :** liste d'étapes (format apprécié des IA) qui prouve le travail en atelier.
- **Composant Framer :** onglets numérotés de 01 à 06 (même composant que la méthode 3B Récup'), avec une photo par onglet.
- **Photos :** 01 « préparation de chantier » · 03 « taille d'un tenon à double embrèvement à la besaïgue » · 04 « assamblage à blanc » · 05 « levage des fermes » · 06 « couverture terminée » (dossier monts du Lyonnais).

> _Kicker :_ Notre méthode
>
> _H2 :_ De l'étude **au levage**, en six étapes
>
> _01, titre :_ Rencontre et étude sur mesure
>
> _01, texte :_ Chaque projet chez 3B Charpente débute par une étude sur mesure. Nous venons voir la maison, prenons les cotes et écoutons ce que vous voulez en faire.
>
> _02, titre :_ Dessin et choix des bois
>
> _02, texte :_ Nous dessinons la charpente et vous proposons une esthétique : apparente ou non, forme des fermes, décors de pannes. Vous validez avant que la première pièce soit taillée.
>
> _03, titre :_ Traçage
>
> _03, texte :_ Chaque pièce est tracée avant d'être coupée. Ce savoir, que les charpentiers appellent « le trait », s'apprend sur le Tour de France des Compagnons. [À VALIDER AVEC JEAN : traçage sur épure au sol, en dessin numérique, ou les deux ?]
>
> _04, titre :_ Taille à l'atelier
>
> _04, texte :_ Tenons, mortaises, embrèvements (des entailles en biais qui transmettent l'effort d'une pièce à l'autre) : les assemblages sont taillés dans notre atelier, parfois encore à la besaiguë, l'outil à deux tranchants des charpentiers.
>
> _05, titre :_ Assemblage à blanc
>
> _05, texte :_ La charpente est montée une première fois à l'atelier. Tout est vérifié avant le transport, pour limiter les ajustements sur le chantier.
>
> _06, titre :_ Levage et couverture
>
> _06, texte :_ Sur place, nous levons les fermes, les pannes et les chevrons. Viennent ensuite, si vous nous les confiez, l'isolation biosourcée, la couverture et le bardage.

### 3.7 Nos bois

- **Rôle :** ancrer l'identité « bois local » et le réemploi ; preuve de circuit court.
- **Composant Framer :** bloc deux colonnes (texte à gauche, photo à droite) sur fond crème.
- **Photo :** « plancher en mélèze » (L'Argentière-la-Bessée) ou, mieux, une photo de grumes chez la Scierie Savoldelli (à demander).

> _Kicker :_ Nos bois
>
> _H2 :_ Du **mélèze et du sapin** des Hautes-Alpes
>
> _Texte :_ Nous travaillons principalement du mélèze et du sapin provenant des Hautes-Alpes, sciés par notre partenaire local, la Scierie Savoldelli. Un bois qui a poussé dans le département, c'est moins de transport et une filière locale qui vit.
>
> _Texte :_ Le mélèze, essence de montagne, est apprécié pour sa tenue en extérieur et sa teinte chaude. Le sapin, plus léger, est un bois de structure courant. Selon le projet, d'autres essences entrent en jeu : douglas pour un bardage, épicéa pour des panneaux trois plis, frêne pour un escalier.
>
> _Texte :_ Et quand une vieille charpente est déposée, ses pièces saines peuvent resservir : une **ferme en vieux bois** a ainsi retrouvé sa place lors d'une réfection de toiture.
>
> _Lien :_ Le bois de réemploi avec 3B Récup' → `/3b-recup/`
>
> _Légende photo :_ Plancher en mélèze posé lors de la réfection d'une charpente à L'Argentière-la-Bessée.

### 3.8 Le savoir-faire

- **Rôle :** preuve d'expertise (E-E-A-T) et lien vers la page À propos.
- **Composant Framer :** section plein cadre « forêt » sombre, titre blanc avec mots en sauge, portrait de Jean à droite (à demander).

> _Kicker :_ Le savoir-faire
>
> _H2 :_ Un charpentier formé chez les **Compagnons du Devoir**
>
> _Texte :_ Jean-Michel Tardy a commencé la charpente en 1995, apprenti à 16 ans dans une entreprise de Savoie. Il a passé son CAP dans un CFA des Compagnons du Devoir, puis fait son Tour de France, dans des entreprises de France métropolitaine, de Martinique et d'Autriche. Après deux ans comme formateur à L'Argentière-la-Bessée, il a créé 3B Charpente en 2007.
>
> _Texte :_ Ce savoir-faire se voit dans les détails : un trait de Jupiter, assemblage en forme d'éclair qui aboute deux pièces dans leur longueur ; un tenon à double embrèvement taillé à la main ; un entrait cintré pour un simple abri voiture.
>
> _Citation :_ Ce qui compte pour lui : « le travail en équipe, l'écoute apportée aux clients, la belle ouvrage, la joie de venir travailler le matin ». Jean-Michel Tardy, fondateur de 3B Charpente.
>
> _Bouton contour (clair) :_ Découvrir l'équipe → `/a-propos/`

### 3.9 Réalisations

- **Rôle :** preuves locales (communes réelles), liens vers les fiches réalisations.
- **Composant Framer :** cartes de réalisations avec l'étiquette « 3B Charpente » posée sur la photo et le lien « Voir les travaux → ». Ancre `#realisations`.

> _Kicker :_ Nos chantiers
>
> _H2 :_ Des charpentes **levées près de chez vous**
>
> _Carte 1, titre :_ Réfection d'une charpente à L'Argentière-la-Bessée
>
> _Carte 1, texte :_ Dépose de l'ancienne charpente, taille, assemblage à blanc, levage des fermes et des lucarnes, plancher et bardage en mélèze.
>
> _Carte 1, lien :_ Voir les travaux → `/realisations/refection-d-une-charpente-a-l-argentiere-la-bessee/`
>
> _Carte 2, titre :_ Abri voiture à L'Argentière-la-Bessée
>
> _Carte 2, texte :_ Une ferme à poinçon et entrait cintré, assemblée par tenons et mortaises chevillés.
>
> _Carte 2, lien :_ Voir les travaux → `/realisations/abris-voiture-a-l-argentiere-la-bessee/`
>
> _Carte 3, titre :_ Rénovation d'une maison à Prelles
>
> _Carte 3, texte :_ Charpente taillée en mélèze pays (du mélèze local), assemblée à blanc, puis levée avec le solivage.
>
> _Carte 3, lien :_ Voir les travaux → `/realisations/renovation-d-une-maison-d-habitation-sur-la-commune-de-prelles/`
>
> _Carte 4, titre :_ Ancienne forge à La Salle-les-Alpes
>
> _Carte 4, texte :_ Taille de la charpente, levage de la toiture et couverture d'un bâtiment réhabilité à Serre Chevalier.
>
> _Carte 4, lien :_ Voir les travaux → `/realisations/rehabilitation-d-une-ancienne-forge-a-la-salle-les-alpes/`
>
> _Bouton contour :_ Toutes nos réalisations → `/realisations/`

### 3.10 3B Récup'

- **Rôle :** relier chaque prestation à la filière réemploi (différenciation, voir brief section 2 : personne d'autre ne la présente dans le département).
- **Composant Framer :** bandeau vert forêt avec formes organiques vert clair et grille ronde translucide, mots en sauge.
- **Texte validé :** reprend l'esprit de « Nous utilisons du bois issu des chantiers de déconstruction, donnant une nouvelle vie au matériau bois… » (service « Utilisation de bois de réemploi »), réécrit pour parler de charpente.

> _Kicker :_ 3B Récup'
>
> _H2 :_ Une vieille charpente **n'est pas un déchet**
>
> _Texte :_ Avec 3B Récup', notre activité de déconstruction sélective et de réemploi, nous déposons charpentes, solivages et murs à ossature bois. Les pièces saines sont triées, nettoyées et usinées dans notre atelier, puis reposées sur nos chantiers. Nous donnons ainsi une nouvelle vie au matériau bois : une ferme en vieux bois, un bardage vieux bois, un garde-corps en bois de réemploi.
>
> _Bouton plein (sauge) :_ Découvrir 3B Récup' → `/3b-recup/`

### 3.11 Prestations liées

- **Rôle :** maillage interne vers 3 prestations proches.
- **Composant Framer :** trois petites cartes de services en ligne.

> _H2 :_ Vos **autres projets** bois
>
> _Carte 1 :_ Rénovation de charpente et combles → `/renovation-charpente-combles/`
>
> _Carte 2 :_ Maison ossature bois → `/maison-ossature-bois/`
>
> _Carte 3 :_ Extension et surélévation bois → `/extension-surelevation-bois/`

### 3.12 FAQ

- **Rôle :** répondre aux questions telles qu'on les tape ; données FAQPage.
- **Composant Framer :** FAQ en accordéon dans des cartes blanches. Texte complet en section 4.

> _Kicker :_ Questions fréquentes
>
> _H2 :_ Vos questions sur **la charpente bois**

### 3.13 Appel à l'action final

- **Rôle :** conversion.
- **Composant Framer :** bandeau vert forêt d'appel à l'action.
- **Texte validé :** « Prêt à transformer votre espace ? … chaque projet chez 3B Charpente débute par une étude sur mesure » et FAQ « Devis », repris presque mot pour mot.

> _H2 :_ Prêt à **transformer votre espace** ?
>
> _Texte :_ Chaque projet chez 3B Charpente débute par une étude sur mesure. Parlez-nous de votre charpente : nous discuterons de vos besoins lors d'une rencontre et vous proposerons un devis détaillé.
>
> _Bouton plein :_ Demander mon devis → `/contact/`
>
> _Bouton contour :_ Appeler le 06 34 67 31 49 → `tel:+33634673149`
>
> _Ligne d'adresse :_ 3B Charpente, 5 rue Saint-Michel, 05120 L'Argentière-la-Bessée.

---

## 4. FAQ

### Q1. Quel bois utiliser pour une charpente traditionnelle ?

> Nous utilisons principalement du mélèze et du sapin des Hautes-Alpes, sciés par la Scierie Savoldelli, notre partenaire local. Le mélèze, essence de montagne, tient bien en extérieur et se prête aux pièces apparentes. Le sapin, plus léger, est un bois de structure courant. Le choix dépend de la portée, de l'exposition et de l'aspect recherché : nous en parlons ensemble lors de l'étude.

### Q2. Combien coûte une charpente bois traditionnelle ?

> Le prix dépend de la surface et de la forme du toit, des sections de bois, du type d'assemblages, de l'accès au chantier et des travaux associés (isolation, couverture). Un prix au mètre carré donné sans voir le projet serait trompeur. Contactez-nous : nous discuterons de vos besoins lors d'une rencontre et vous proposerons un devis détaillé adapté à votre projet.

### Q3. Quelle différence entre une charpente traditionnelle et une charpente en fermettes ?

> La charpente traditionnelle est faite de pièces massives (fermes, pannes, chevrons) taillées sur mesure et assemblées bois sur bois. La charpente industrielle utilise des fermettes : de petites fermes en W, rapprochées et reliées par des connecteurs métalliques. Les fermettes occupent le volume sous le toit ; une charpente traditionnelle laisse en général les combles plus libres et peut rester apparente.

### Q4. Combien de temps faut-il pour faire une charpente ?

> Le délai peut varier selon la complexité et la taille du projet. Nous vous fournirons un calendrier estimatif lors de notre première rencontre. Une bonne partie du travail se fait à l'atelier : traçage, taille et assemblage à blanc. Sur le chantier, il reste le levage, puis l'isolation et la couverture si vous nous les confiez.

### Q5. Intervenez-vous à Briançon et en dehors des Hautes-Alpes ?

> Oui. Basés à L'Argentière-la-Bessée, dans le nord des Hautes-Alpes, nous intervenons dans tout le département : Briançon, la Vallouise, Serre Chevalier, le Pays des Écrins. Nous travaillons aussi en région PACA et Rhône-Alpes, par exemple pour une maison à ossature bois dans les monts du Lyonnais ou un balcon terrasse à Gresse-en-Vercors.

### Q6. Peut-on garder ou réutiliser une vieille charpente ?

> Souvent, au moins en partie. Une charpente ancienne se répare : remplacement de pièces, reprise des fermes, rallonge par un trait de Jupiter. Quand elle doit être déposée, 3B Récup', notre activité de réemploi, trie les pièces saines, les nettoie et les usine à l'atelier pour les remettre en œuvre, comme cette ferme en vieux bois reposée lors d'une réfection de toiture.

---

## 5. Liens internes

| Texte du lien | Page visée | Emplacement |
|---|---|---|
| Demander mon devis | `/contact/` | héros, appel à l'action final |
| Maison ossature bois | `/maison-ossature-bois/` | carte 1 (3.5), prestations liées |
| Rénovation de charpente et combles | `/renovation-charpente-combles/` | carte 2 (3.5), prestations liées |
| Créer une lucarne | `/renovation-charpente-combles/#lucarnes` | carte 3 (3.5) |
| Extension et surélévation bois | `/extension-surelevation-bois/` | carte 4 (3.5), prestations liées |
| Balcons, terrasses et abris | `/balcon-terrasse-abri-bois/` | carte 5 (3.5) |
| Le bois de réemploi avec 3B Récup' | `/3b-recup/` | section 3.7 |
| Découvrir 3B Récup' | `/3b-recup/` | bandeau 3.10 |
| Découvrir l'équipe | `/a-propos/` | section 3.8 |
| Voir les travaux (×4) | 4 fiches `/realisations/…/` | section 3.9 |
| Toutes nos réalisations | `/realisations/` | section 3.9 |
| Briançon (dans la FAQ Q5, à lier) | `/charpentier-briancon/` | FAQ |
| la Vallouise (FAQ Q5, à lier) | `/charpentier-vallouise-pays-des-ecrins/` | FAQ |
| Serre Chevalier (FAQ Q5, à lier) | `/charpentier-serre-chevalier/` | FAQ |

**Liens entrants à prévoir :** depuis l'accueil (carte de service), depuis les fiches réalisations 01, 14, 15, 16 et 20 (« Voir la prestation »), et depuis les trois pages secteur.

---

## 6. Photos

**À utiliser (préfixe `https://3bcharpente.fr`) :**

- `/galeries/refection-d-une-charpente-a-l-argentiere-la-bessee` : « levage des fermes » (héros), « taille d'un tenon à double embrèvement à la besaïgue », « assamblage à blanc », « trait de jupiter » et « trait de jupiter assemblé », « plancher en mélèze », « préparation de chantier ».
- `/galeries/abris-voiture-a-l-argentiere-la-bessee` : « poinçon et entrait cintré », « tenons mortaise chevillé ».
- `/galeries/renovation-d-une-maison-d-habitation-sur-la-commune-de-prelles` : « Taille de la charpente (1) », « Assemblage à blanc (1) », « Charpente assemblée ».
- `/galeries/rehabilitation-d-une-ancienne-forge-a-la-salle-les-alpes` : « Taille de la charpente », « Levage de la toiture ».
- `/galeries/refection-d-une-toiture-a-ronatlon` : « ferme en vieux bois » (bloc bois et réemploi).
- `/galeries/maison-a-ossature-bois-dans-les-monts-du-lyonnais` : « couverture terminée » ou « charpente apparent et soleil couchant.. » (étape 06).

**À demander à Jean :**

- l'atelier : traçage d'une épure ou d'une pièce, taille en cours, vue générale de l'atelier ;
- un portrait de Jean au travail (section 3.8) ;
- des grumes ou des plateaux de mélèze à la Scierie Savoldelli (section 3.7), avec l'accord de la scierie ;
- une charpente apparente terminée, vue de l'intérieur, dans une maison des Hautes-Alpes ;
- un gros plan d'une cheville en bois et d'un décor de panne.

---

## 7. Points à valider avec Jean

1. **Traçage :** sur épure au sol, en dessin numérique (logiciel ?), ou les deux ? La réponse fixe le texte de l'étape 03.
2. **Compagnons du Devoir :** formulation retenue « formé chez les Compagnons du Devoir » (CAP en CFA des Compagnons + Tour de France). Jean a-t-il été reçu Compagnon ? Si oui, on peut écrire « Compagnon du Devoir ».
3. **Atelier :** commune et adresse de l'atelier (même lieu que le 5 rue Saint-Michel ?), pour l'écrire et le montrer en photo.
4. **Calcul des charpentes :** dimensionnement fait en interne ou par un bureau d'études ? Utile pour une future question « charge de neige ».
5. **Couverture :** quels matériaux 3B pose-t-il (bardeau de mélèze comme au Casset, bac acier, tuiles, lauzes…) ? À ajouter à l'étape 06 si oui.
6. **Charpentes industrielles :** 3B en pose-t-il aussi ? La page ne l'affirme pas et ne le nie pas.
7. **Commune « Ronatlon »** (ferme en vieux bois) : libellé à corriger avant de citer le chantier par son nom ; la fiche est pour l'instant mentionnée sans commune.
8. **Prix :** Jean veut-il publier des fourchettes indicatives ? Sinon, la FAQ Q2 reste sans chiffre.
9. **Scierie Savoldelli :** accord pour la citer et la photographier ; commune de la scierie, pour un éventuel lien.
10. **Bois certifiés** (Bois des Alpes ou autre) : à confirmer avant toute mention ; rien n'est écrit pour l'instant.
