# Fiche 08 : Extension et surélévation bois

`/extension-surelevation-bois/` · Phase 1 · Statut : rédigée, à relire et valider par Jean

**Conventions.** Le texte à coller sur le site est en citation (lignes qui commencent par `>`). Dans les titres (H1, H2), les mots entre `**` passent en vert (#336233 sur fond clair, sauge #A3D2A3 sur fond sombre) ; dans les paragraphes, `**` veut simplement dire gras. Les espaces insécables sont déjà en place. Tout ce qui est entre `[À VALIDER AVEC JEAN : …]` est à confirmer ou à supprimer avant publication. Sources : `../00-brief.md` et `../realisations-source.md`.

---

## 1. Carte d'identité

- **Adresse :** `/extension-surelevation-bois/` (canonique : `https://3bcharpente.fr/extension-surelevation-bois/`).
- **Objectif de la page :**
  - se positionner sur « extension bois » et « surélévation bois », avec Briançon dans le H1 ;
  - prouver le savoir-faire par deux surélévations réelles (Briançon, Pelvoux) ;
  - rassurer sur les questions qui bloquent (structure existante, urbanisme, chantier en site occupé) ;
  - faire demander une visite.
- **Visiteurs visés :**
  - propriétaires à Briançon et dans le Briançonnais, où le foncier est rare et cher, qui veulent gagner de la place sans déménager ;
  - familles qui veulent une chambre ou un étage en plus ;
  - architectes qui cherchent un charpentier pour une surélévation en ossature bois.
- **Mots-clés :**
  - principal : extension bois (1 100/mois) ;
  - secondaire : surélévation bois (480/mois) ;
  - associés (volumes non relevés) : surélévation maison Briançon, extension ossature bois Hautes-Alpes, agrandir sa maison, surélever une maison, rehausse de toiture.
- **Intention de recherche :** projet en réflexion. Les gens veulent savoir si c'est possible chez eux, ce qu'il faut comme autorisation, combien ça coûte et qui peut le faire. La page répond aux trois premières questions sans chiffre inventé, puis montre deux chantiers réels.
- **Pages liées :**
  - prestations proches : `/maison-ossature-bois/`, `/charpente-bois/`, `/balcon-terrasse-abri-bois/`, `/isolation-biosourcee/` ;
  - filière : `/3b-recup/` ;
  - preuves : 4 fiches réalisations (section 3.11) ;
  - secteurs : `/charpentier-briancon/`, `/charpentier-vallouise-pays-des-ecrins/` ;
  - conversion : `/contact/`.

---

## 2. SEO

- **Balise title :** `Extension et surélévation bois, Hautes-Alpes | 3B Charpente`
- **Meta description :** `Extension et surélévation bois à Briançon et dans les Hautes-Alpes : ossature légère, bois local, isolants biosourcés. Charpentiers depuis 2007. Devis.`
- **Contrôles (mesurés) :** title 59 caractères · meta 151 caractères · corps de page 1080 mots (section 3, hors FAQ) · En bref 48 mots · FAQ 6 questions, 49 à 60 mots par réponse.
- **H1 (unique) :** Extension et **surélévation bois** à Briançon et dans les **Hautes-Alpes**
- **Fil d'Ariane :** Accueil › Extension et surélévation bois
- **Données structurées :** Service, FAQPage et BreadcrumbList, en JSON-LD. Le LocalBusiness est déclaré une seule fois pour tout le site ; ici, on y renvoie par son `@id`.

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://3bcharpente.fr/extension-surelevation-bois/#service",
  "name": "Extension et surélévation bois",
  "serviceType": "Surélévation et extension en ossature bois",
  "description": "Surélévation et extension de maisons en ossature bois à Briançon et dans les Hautes-Alpes : structure légère préparée en atelier, bois des Hautes-Alpes, isolants biosourcés, dépassées de toit et bardage.",
  "url": "https://3bcharpente.fr/extension-surelevation-bois/",
  "image": "https://3bcharpente.fr/images/surelevation-ossature-bois-levage-mur-pignon-briancon.webp",
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
    { "@type": "City", "name": "Briançon" },
    { "@type": "AdministrativeArea", "name": "Hautes-Alpes" },
    { "@type": "City", "name": "Vallouise-Pelvoux" },
    { "@type": "City", "name": "L'Argentière-la-Bessée" },
    { "@type": "City", "name": "Champcella" }
  ]
}
```

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://3bcharpente.fr/extension-surelevation-bois/#faq",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Peut-on surélever n'importe quelle maison ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Non, pas sans vérification. Les murs, les planchers et les fondations doivent pouvoir porter le nouveau niveau, et le plan local d'urbanisme doit autoriser la hauteur. Le bois aide beaucoup : une ossature bois pèse bien moins qu'une maçonnerie. C'est pour cela qu'on choisit souvent le bois pour surélever une maison existante."
      }
    },
    {
      "@type": "Question",
      "name": "Faut-il un permis de construire pour une surélévation ou une extension ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Le plus souvent, oui. Une surélévation change la hauteur et l'aspect de la maison : un permis de construire est en général demandé, parfois une simple déclaration préalable selon la surface créée et la zone. Si la surface de plancher totale dépasse 150 m² après travaux, l'architecte est obligatoire. Renseignez-vous en mairie dès le début du projet."
      }
    },
    {
      "@type": "Question",
      "name": "Combien coûte une surélévation en bois ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Le prix dépend de la surface créée, de l'état de la maison existante, de l'accès au chantier, de la toiture à déposer, des isolants et des finitions. Sans voir la maison, un chiffre serait trompeur. Chaque projet chez 3B Charpente débute par une étude sur mesure : nous venons sur place et vous proposons un devis détaillé."
      }
    },
    {
      "@type": "Question",
      "name": "Peut-on habiter la maison pendant une surélévation ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Cela dépend du chantier. Une extension se construit à côté de la maison, qui reste en général habitable. Une surélévation touche la toiture : il faut organiser la dépose et la mise hors d'eau pour limiter le temps où la maison est ouverte. Préparer la structure à l'atelier y aide. Nous en parlons dès l'étude pour organiser le chantier avec vous."
      }
    },
    {
      "@type": "Question",
      "name": "Quelle isolation pour une extension ou une surélévation en bois ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Des isolants biosourcés, comme sur nos autres chantiers : ouate de cellulose, panneaux de fibre de bois, laine de bois. À Briançon, la surélévation est isolée par un remplissage en laine de bois, sous des panneaux trois plis en épicéa qui assurent aussi l'étanchéité à l'air. Le raccord avec l'isolation de la maison existante doit être continu."
      }
    },
    {
      "@type": "Question",
      "name": "Peut-on faire une extension bois sur une maison en pierre ou en béton ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oui, c'est courant. L'ossature bois se fixe sur la maçonnerie existante, avec un soin particulier à la jonction : étanchéité à l'eau, étanchéité à l'air et continuité de l'isolant. La façade peut rester dans l'esprit de la maison, avec un enduit, ou affirmer le bois avec un bardage en mélèze."
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
    { "@type": "ListItem", "position": 2, "name": "Extension et surélévation bois", "item": "https://3bcharpente.fr/extension-surelevation-bois/" }
  ]
}
```

- **Textes alternatifs des images clés :**

| Fichier | Texte alternatif | Photo source |
|---|---|---|
| `surelevation-ossature-bois-levage-mur-pignon-briancon.webp` | Levage d'un mur pignon en ossature bois pour la surélévation d'une maison à Briançon (Hautes-Alpes) | `/galeries/surelevation-en-ossature-bois-d-une-maison-a-briancon`, « 1 levage d'un mur pignon » |
| `surelevation-pannes-porteuses-14x30-briancon.webp` | Pannes porteuses de 14 × 30 cm entaillées, surélévation en ossature bois à Briançon | même dossier, « 1 panes porteuses en14x30 entaillées » |
| `surelevation-panneaux-trois-plis-epicea-briancon.webp` | Panneaux trois plis en épicéa apparents sous la toiture d'une surélévation à Briançon | même dossier, « 1 panneaux trois plis épicéa apparents du dessous » |
| `surelevation-laine-de-bois-briancon.webp` | Remplissage en laine de bois dans la surélévation en ossature bois d'une maison à Briançon | même dossier, « 1 remplissage en laine de bois » |
| `surelevation-facade-sud-briancon.webp` | Façade sud terminée d'une maison surélevée en ossature bois à Briançon | même dossier, « 1façade sud finie » |
| `surelevation-pelvoux-console-depassee-toit.webp` | Console de dépassée de toit en bois sur la surélévation d'une maison à Pelvoux | `/galeries/surelevation-a-pelvoux`, « console de dépassée de toit » |
| `surelevation-pelvoux-chantier-termine.webp` | Maison surélevée par 3B Charpente à Pelvoux, chantier terminé | même dossier, « chantier terminé » |

---

## 3. Sections, dans l'ordre

### 3.1 Fil d'Ariane

- **Rôle :** situer la page, alimenter le BreadcrumbList.
- **Composant :** ligne de texte discrète au-dessus du héros (à ajouter à la maquette).

> Accueil › Extension et surélévation bois

### 3.2 Héros

- **Rôle :** sujet + Briançon, promesse, deux preuves.
- **Composant Framer :** héros (titre en deux couleurs, texte avec mots forts en gras, bouton plein + bouton contour, deux preuves à pastille sauge).
- **Photo :** « 1 levage d'un mur pignon » (Briançon). En vignette : « chantier terminé » (Pelvoux).
- **Texte validé :** pas de texte validé propre à cette prestation ; le texte reprend l'esprit des services « Construction neuve et maison ossature bois » et « Rénovations de charpente et toiture ».

> _Kicker :_ Agrandir en bois
>
> _H1 :_ Extension et **surélévation bois** à Briançon et dans les **Hautes-Alpes**
>
> _Texte :_ Surélever, ajouter une pièce, couvrir une terrasse : une structure en **ossature bois**, légère et **préparée dans notre atelier**, s'adapte à une maison existante. Nous la construisons en **bois des Hautes-Alpes** et l'isolons avec des **matériaux biosourcés**.
>
> _Bouton plein :_ Demander mon devis → `/contact/`
>
> _Bouton contour :_ Voir la surélévation de Briançon → `#briancon`
>
> _Preuve 1 :_ Depuis 2007
>
> _Preuve 2 :_ Bois des Hautes-Alpes
>
> _Légende photo :_ Levage d'un mur pignon en ossature bois, surélévation d'une maison à Briançon.

### 3.3 En bref

- **Rôle :** réponse directe, citable.
- **Composant :** carte blanche à coins arrondis avec une pastille sauge, sous le héros.

> _Titre de la carte :_ En bref
>
> _Texte :_ 3B Charpente, charpentier à L'Argentière-la-Bessée depuis 2007, agrandit les maisons des Hautes-Alpes avec des structures bois : surélévation, extension, terrasse couverte. Légère, l'ossature bois ménage la maison existante. Nous avons notamment surélevé une maison à Briançon, en ossature bois isolée en laine de bois, et une maison à Pelvoux.

### 3.4 Surélévation ou extension

- **Rôle :** définir les deux termes (intention informative), aider à choisir.
- **Composant Framer :** deux grandes cartes blanches côte à côte, icône dans une pastille sauge.

> _Kicker :_ Deux façons d'agrandir
>
> _H2 :_ Surélévation ou extension : **que choisir** ?
>
> _Carte 1, titre :_ La surélévation
>
> _Carte 1, texte :_ Surélever, c'est ajouter un niveau ou rehausser la toiture pour rendre les combles habitables. On gagne de la surface sans toucher au terrain, souvent avec une vue plus dégagée. La maison existante doit pouvoir porter le nouveau volume.
>
> _Carte 2, titre :_ L'extension
>
> _Carte 2, texte :_ Une extension agrandit la maison au sol, sur le côté. Elle convient quand le terrain le permet et qu'on ne veut pas charger la structure existante. Tout se joue à la jonction avec l'existant : toiture, étanchéité, isolation.
>
> _Texte :_ Dans les deux cas, le bois a des atouts : il est léger, se prépare à l'atelier et se pose à sec, sans temps de séchage comme le béton.

### 3.5 Avant de surélever

- **Rôle :** lever les freins par une liste de vérifications (conseils généraux, sans chiffre engageant).
- **Composant Framer :** liste numérotée dans une grande carte blanche, fond de section clair.

> _Kicker :_ Avant de vous lancer
>
> _H2 :_ Trois questions **avant de surélever**
>
> _Point 1 :_ **La maison peut-elle porter ?** Murs, planchers et fondations doivent supporter le nouveau niveau. Une ossature bois pèse bien moins qu'une maçonnerie, mais une vérification de la structure reste indispensable. [À VALIDER AVEC JEAN : vérification faite par 3B, par un bureau d'études, ou les deux ?]
>
> _Point 2 :_ **Le plan local d'urbanisme l'autorise-t-il ?** Il fixe une hauteur maximale et parfois l'aspect des toitures. Une surélévation demande en général un permis de construire, parfois une déclaration préalable selon la surface créée.
>
> _Point 3 :_ **Comment rester hors d'eau ?** Le toit est ouvert pendant une partie du chantier. Préparer la structure à l'atelier réduit le temps où la maison est découverte.

### 3.6 Chantier : surélévation en ossature bois à Briançon

- **Rôle :** preuve principale, avec Briançon (mot-clé local). Ancre `#briancon`.
- **Composant Framer :** bloc deux colonnes avec collage de photos qui débordent (comme le collage de l'accueil).
- **Photos :** « 1 levage d'un mur pignon », « 1 panes porteuses en14x30 entaillées », « 1décors de pannes », « 1 panneaux trois plis épicéa apparents du dessous », « 1façade sud finie ».

> _Kicker :_ Chantier à Briançon
>
> _H2 :_ Une surélévation **en ossature bois** à Briançon
>
> _Texte :_ Sur cette maison de Briançon, nous avons levé les murs pignons en ossature bois, puis les pannes porteuses : des pièces de 14 × 30 cm de section, entaillées. Leurs extrémités portent des décors de pannes, ces abouts sculptés qu'on retrouve sur les maisons de montagne.
>
> _Texte :_ La toiture repose sur des panneaux trois plis en épicéa, trois couches de bois croisées et collées. Ils assurent à la fois le contreventement (la rigidité de la structure) et l'étanchéité à l'air, et restent apparents au plafond. L'isolation est un remplissage en laine de bois, un isolant biosourcé. La dépassée de toit, ce débord qui protège la façade, termine l'ouvrage.
>
> _Légende photo 1 :_ Levage d'un mur pignon en ossature bois.
>
> _Légende photo 2 :_ Panneaux trois plis en épicéa, apparents depuis l'intérieur.
>
> _Légende photo 3 :_ Façade sud terminée.
>
> _Lien :_ Voir toutes les photos → `/realisations/surelevation-en-ossature-bois-d-une-maison-a-briancon/`

### 3.7 Chantier : surélévation à Pelvoux

- **Rôle :** deuxième preuve, en Vallouise (page secteur 20).
- **Composant Framer :** bloc deux colonnes inversé (photos à gauche), avec un curseur « avant / après » si possible (photos « avnat » et « chantier terminé »).

> _Kicker :_ Chantier à Pelvoux
>
> _H2 :_ Une surélévation **au pied des Écrins**
>
> _Texte :_ À Pelvoux, la surélévation s'est faite par étapes, comme le montrent les photos du chantier : la maison avant, les travaux en cours, une première moitié levée, puis le chantier terminé.
>
> _Texte :_ Les dépassées de toit reposent sur des consoles : des pièces de bois en porte-à-faux, fixées au mur, qui soutiennent le débord de toiture. Un détail de charpentier qui compte, là où la neige charge les toits. [À VALIDER AVEC JEAN : système constructif, surface gagnée et usage du nouvel étage.]
>
> _Légende photo 1 :_ La maison avant les travaux.
>
> _Légende photo 2 :_ Console de dépassée de toit.
>
> _Lien :_ Voir toutes les photos → `/realisations/surelevation-a-pelvoux/`

### 3.8 Extensions et espaces couverts

- **Rôle :** couvrir le mot-clé « extension bois » honnêtement (aucune extension habitable n'est publiée dans la galerie) et renvoyer vers les terrasses couvertes.
- **Composant Framer :** section fond clair, texte et deux vignettes photo.
- **Photos :** « terrasse couverte et local technique » (Champcella), « Dépassée Nord agrandie » (Vallouise).

> _Kicker :_ Extensions
>
> _H2 :_ Agrandir **de plain-pied**
>
> _Texte :_ Une extension en ossature bois suit les mêmes principes qu'une maison neuve : structure légère, isolants biosourcés, bardage ou enduit. Le point clé est la jonction avec la maison existante : raccord de toiture, étanchéité et continuité de l'isolation.
>
> _Texte :_ Agrandir, c'est aussi gagner un espace extérieur couvert. À Champcella, nous avons construit une terrasse couverte et un local technique, avec un abri voiture dans le prolongement de la toiture. À Vallouise, la dépassée nord du chalet a été agrandie et le balcon transformé en terrasse.
>
> _Encadré :_ [À VALIDER AVEC JEAN : photos d'une extension habitable (pièce en plus) réalisée par 3B, à ajouter ici.]
>
> _Lien :_ Terrasses couvertes et abris bois → `/balcon-terrasse-abri-bois/`

### 3.9 Notre méthode

- **Rôle :** liste d'étapes citable, preuve du travail en atelier.
- **Composant Framer :** onglets numérotés de 01 à 06 (composant de la méthode 3B Récup').

> _Kicker :_ Notre méthode
>
> _H2 :_ Six étapes, **de la visite au bardage**
>
> _01, titre :_ Visite et relevé
>
> _01, texte :_ Chaque projet chez 3B Charpente débute par une étude sur mesure : visite, cotes de l'existant, écoute de vos besoins.
>
> _02, titre :_ Dessin et démarches
>
> _02, texte :_ Nous dessinons l'agrandissement et vous proposons une esthétique en accord avec la maison. [À VALIDER AVEC JEAN : aide au dossier de permis de construire ?]
>
> _03, titre :_ Traçage et taille à l'atelier
>
> _03, texte :_ Les pièces de charpente et de structure sont tracées et taillées dans notre atelier, selon le savoir-faire que Jean-Michel Tardy, notre fondateur, a appris chez les Compagnons du Devoir.
>
> _04, titre :_ Levage et mise hors d'eau
>
> _04, texte :_ Sur place, la structure est levée, puis la toiture refermée.
>
> _05, titre :_ Isolation et étanchéité à l'air
>
> _05, texte :_ Laine de bois, ouate de cellulose ou fibre de bois, et une étanchéité à l'air continue jusqu'au raccord avec l'existant.
>
> _06, titre :_ Bardage et finitions bois
>
> _06, texte :_ Bardage en mélèze, dépassées de toit, menuiseries extérieures : la maison retrouve une façade cohérente.

### 3.10 3B Récup'

- **Rôle :** relier l'agrandissement au réemploi (la toiture déposée est un gisement).
- **Composant Framer :** bandeau vert forêt, formes organiques, mots en sauge.

> _Kicker :_ 3B Récup'
>
> _H2 :_ La toiture déposée **peut resservir**
>
> _Texte :_ Une surélévation commence souvent par la dépose de la toiture existante. Avec 3B Récup', ses bois sains ne partent pas à la benne : ils sont triés, nettoyés et usinés dans notre atelier, puis réemployés sur nos chantiers, en bardage vieux bois, en garde-corps ou en pièces de charpente.
>
> _Bouton plein (sauge) :_ Découvrir 3B Récup' → `/3b-recup/`

### 3.11 Réalisations

- **Rôle :** quatre preuves locales.
- **Composant Framer :** cartes de réalisations (étiquette « 3B Charpente », lien « Voir les travaux → »).

> _Kicker :_ Nos chantiers
>
> _H2 :_ Ils ont **agrandi en bois**
>
> _Carte 1, titre :_ Surélévation en ossature bois à Briançon
>
> _Carte 1, texte :_ Murs pignons, pannes porteuses de 14 × 30 cm, panneaux trois plis en épicéa, laine de bois.
>
> _Carte 1, lien :_ Voir les travaux → `/realisations/surelevation-en-ossature-bois-d-une-maison-a-briancon/`
>
> _Carte 2, titre :_ Surélévation à Pelvoux
>
> _Carte 2, texte :_ Une surélévation menée par étapes, avec ses consoles de dépassée de toit.
>
> _Carte 2, lien :_ Voir les travaux → `/realisations/surelevation-a-pelvoux/`
>
> _Carte 3, titre :_ Chalet rénové à Vallouise, balcon agrandi en terrasse
>
> _Carte 3, texte :_ Dépassée nord agrandie, balcon transformé en terrasse, murs et toiture isolés en matériaux biosourcés.
>
> _Carte 3, lien :_ Voir les travaux → `/realisations/renovation-et-isolation-d-un-chalet-a-vallouise/`
>
> _Carte 4, titre :_ Terrasse couverte à Champcella
>
> _Carte 4, texte :_ Terrasse couverte, local technique et abri voiture dans le prolongement de la toiture.
>
> _Carte 4, lien :_ Voir les travaux → `/realisations/construction-d-une-terrasse-couverte-a-champcella/`

### 3.12 Prestations liées

- **Rôle :** maillage vers trois prestations proches.
- **Composant Framer :** trois petites cartes de services.

> _H2 :_ Pour **compléter** votre projet
>
> _Carte 1 :_ Maison ossature bois → `/maison-ossature-bois/`
>
> _Carte 2 :_ Charpente bois traditionnelle → `/charpente-bois/`
>
> _Carte 3 :_ Balcons, terrasses et abris bois → `/balcon-terrasse-abri-bois/`

### 3.13 FAQ

- **Rôle :** questions telles qu'on les tape ; FAQPage.
- **Composant Framer :** accordéon dans des cartes blanches. Texte complet en section 4.

> _Kicker :_ Questions fréquentes
>
> _H2 :_ Vos questions sur **l'extension et la surélévation**

### 3.14 Appel à l'action final

- **Rôle :** conversion.
- **Composant Framer :** bandeau vert forêt d'appel à l'action.
- **Texte validé :** « … chaque projet chez 3B Charpente débute par une étude sur mesure » et FAQ « Devis ».

> _H2 :_ Besoin de **place en plus** ?
>
> _Texte :_ Chaque projet chez 3B Charpente débute par une étude sur mesure. Nous venons voir votre maison, nous discutons de vos besoins et vous proposons un devis détaillé.
>
> _Bouton plein :_ Demander mon devis → `/contact/`
>
> _Bouton contour :_ Appeler le 06 34 67 31 49 → `tel:+33634673149`
>
> _Ligne d'adresse :_ 3B Charpente, 5 rue Saint-Michel, 05120 L'Argentière-la-Bessée.

---

## 4. FAQ

### Q1. Peut-on surélever n'importe quelle maison ?

> Non, pas sans vérification. Les murs, les planchers et les fondations doivent pouvoir porter le nouveau niveau, et le plan local d'urbanisme doit autoriser la hauteur. Le bois aide beaucoup : une ossature bois pèse bien moins qu'une maçonnerie. C'est pour cela qu'on choisit souvent le bois pour surélever une maison existante.

### Q2. Faut-il un permis de construire pour une surélévation ou une extension ?

> Le plus souvent, oui. Une surélévation change la hauteur et l'aspect de la maison : un permis de construire est en général demandé, parfois une simple déclaration préalable selon la surface créée et la zone. Si la surface de plancher totale dépasse 150 m² après travaux, l'architecte est obligatoire. Renseignez-vous en mairie dès le début du projet.

### Q3. Combien coûte une surélévation en bois ?

> Le prix dépend de la surface créée, de l'état de la maison existante, de l'accès au chantier, de la toiture à déposer, des isolants et des finitions. Sans voir la maison, un chiffre serait trompeur. Chaque projet chez 3B Charpente débute par une étude sur mesure : nous venons sur place et vous proposons un devis détaillé.

### Q4. Peut-on habiter la maison pendant une surélévation ?

> Cela dépend du chantier. Une extension se construit à côté de la maison, qui reste en général habitable. Une surélévation touche la toiture : il faut organiser la dépose et la mise hors d'eau pour limiter le temps où la maison est ouverte. Préparer la structure à l'atelier y aide. Nous en parlons dès l'étude pour organiser le chantier avec vous.

### Q5. Quelle isolation pour une extension ou une surélévation en bois ?

> Des isolants biosourcés, comme sur nos autres chantiers : ouate de cellulose, panneaux de fibre de bois, laine de bois. À Briançon, la surélévation est isolée par un remplissage en laine de bois, sous des panneaux trois plis en épicéa qui assurent aussi l'étanchéité à l'air. Le raccord avec l'isolation de la maison existante doit être continu.

### Q6. Peut-on faire une extension bois sur une maison en pierre ou en béton ?

> Oui, c'est courant. L'ossature bois se fixe sur la maçonnerie existante, avec un soin particulier à la jonction : étanchéité à l'eau, étanchéité à l'air et continuité de l'isolant. La façade peut rester dans l'esprit de la maison, avec un enduit, ou affirmer le bois avec un bardage en mélèze.

---

## 5. Liens internes

| Texte du lien | Page visée | Emplacement |
|---|---|---|
| Demander mon devis | `/contact/` | héros, appel à l'action final |
| Voir toutes les photos (Briançon) | `/realisations/surelevation-en-ossature-bois-d-une-maison-a-briancon/` | section 3.6, carte 1 |
| Voir toutes les photos (Pelvoux) | `/realisations/surelevation-a-pelvoux/` | section 3.7, carte 2 |
| Terrasses couvertes et abris bois | `/balcon-terrasse-abri-bois/` | section 3.8, prestations liées |
| Découvrir 3B Récup' | `/3b-recup/` | bandeau 3.10 |
| Voir les travaux (Vallouise, Champcella) | `/realisations/renovation-et-isolation-d-un-chalet-a-vallouise/`, `/realisations/construction-d-une-terrasse-couverte-a-champcella/` | section 3.11 |
| Maison ossature bois | `/maison-ossature-bois/` | prestations liées |
| Charpente bois traditionnelle | `/charpente-bois/` | prestations liées |
| Briançon (H2 de 3.6, à lier dans le texte) | `/charpentier-briancon/` | section 3.6 |
| Pelvoux (texte de 3.7, à lier) | `/charpentier-vallouise-pays-des-ecrins/` | section 3.7 |
| isolants biosourcés (FAQ Q5, à lier) | `/isolation-biosourcee/` | FAQ |

**Liens entrants à prévoir :** depuis l'accueil, depuis `/charpente-bois/` (carte « Surélévation et extension »), depuis `/maison-ossature-bois/` (carte « Léger » et prestations liées), depuis `/charpentier-briancon/`, et depuis les fiches réalisations 23 et 24.

---

## 6. Photos

**À utiliser (préfixe `https://3bcharpente.fr`) :**

- `/galeries/surelevation-en-ossature-bois-d-une-maison-a-briancon` (10 photos) : « 1 levage d'un mur pignon » (héros), « 1 pannes levées », « 1 panes porteuses en14x30 entaillées », « 1décors de pannes », « 1panneau trois plis épicéa pour le contreventement et l'étanchéité à l'air de la toiture », « 1 panneaux trois plis épicéa apparents du dessous », « 1 remplissage en laine de bois », « 1 détail de dépassée de toit », « 1façade sud finie ».
- `/galeries/surelevation-a-pelvoux` (6 photos) : « avnat » (avant), « en cours », « première moitié », « console de dépassée de toit », « vue intérieure », « chantier terminé ».
- `/galeries/construction-d-une-terrasse-couverte-a-champcella` : « terrasse couverte et local technique », « abris de voiture en prolongement de toiture ».
- `/galeries/renovation-et-isolation-d-un-chalet-a-vallouise` : « Dépassée Nord agrandie », « Façade Sud et sa terrasse ».

**À demander à Jean :**

- une extension habitable réalisée par 3B (avant / pendant / après) : c'est le manque principal de la page ;
- Briançon : une photo « avant » de la maison, pour un curseur avant / après ;
- Pelvoux : une photo de l'intérieur fini et une vue de la façade sous le même angle que « avnat » ;
- une photo de la dépose d'une toiture avant surélévation (lien avec 3B Récup').

---

## 7. Points à valider avec Jean

1. **Extension habitable :** 3B en a-t-il réalisé (photos, commune) ? Sinon, garder la section 3.8 centrée sur les terrasses couvertes et le principe (placeholder).
2. **Pelvoux :** système constructif (ossature bois ?), surface gagnée, usage du nouvel étage. La légende « première moitié » veut-elle dire que la maison a été surélevée en deux moitiés pour rester habitable ? Si oui, c'est un argument fort pour la FAQ Q4.
3. **Briançon :** la maison était-elle habitée pendant le chantier ? Combien de temps la toiture est-elle restée ouverte ? (aucune durée n'est écrite tant que ce n'est pas confirmé).
4. **Vérification de structure :** faite par 3B, par un bureau d'études, ou les deux ? (placeholder 3.5).
5. **Permis de construire :** 3B aide-t-il à monter le dossier (plans, insertion) ? (placeholder étape 02).
6. **Mentions réglementaires** (permis, déclaration préalable, seuil de 150 m² pour l'architecte) : rédigées de façon générale ; à faire relire si Jean a un architecte partenaire.
7. **Menuiseries extérieures** (étape 06) : 3B les pose-t-il lui-même ? La qualification RGE couvre « fenêtres, volets, portes donnant sur l'extérieur », mais la page ne l'affirme pas encore pour les agrandissements.
