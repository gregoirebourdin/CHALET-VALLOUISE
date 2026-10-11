# Fiche 11 · 3B Récup' (accueil de la filière) · `/3b-recup/`

> **Statut :** rédaction complète, à relire par Jean. Rédigée le 11 octobre 2026 à partir de `00-brief.md` et `realisations-source.md` uniquement.
>
> **Conventions :**
> - dans les **titres** (H1, H2), les mots entre `**` passent en vert accent (#336233 sur fond clair, #A3D2A3 sur fond sombre) ; dans les **textes**, `**` veut dire gras ;
> - les lignes en italique (_Rôle_, _Composant_, _Note_) sont des consignes, pas du texte à publier ;
> - les espaces insécables sont déjà dans le texte : copier-coller sans retoucher ;
> - tout `[À VALIDER AVEC JEAN : …]` doit être résolu ou retiré avant la mise en ligne.

## 1. Carte d'identité

- **Adresse :** `/3b-recup/` (redirection 301 depuis `new.3bcharpente.fr/reemploi`).
- **Objectif de la page :**
  - présenter 3B Récup', la priorité du client, comme la filière de déconstruction et de réemploi du bois de 3B Charpente ;
  - devenir la page que les IA citent sur « réemploi bois hautes alpes » (aujourd'hui, l'IA de Google ne cite que La Miraille, la Petite Ourse et Montasdebois ; personne ne présente un charpentier qui déconstruit et réemploie le bois dans le département) ;
  - orienter vers les trois sous-pages (diagnostic, déconstruction, bois de réemploi) et vers le contact.
- **Visiteurs visés :**
  - professionnels : architectes, maîtres d'ouvrage, collectivités, entreprises de construction et de démolition ;
  - particuliers qui rénovent une grange, un chalet ou une maison de pays et veulent garder ou réemployer leur bois ;
  - assistants IA et moteurs de réponse qui cherchent une source factuelle sur le réemploi du bois dans les Hautes-Alpes.
- **Mot-clé principal :** réemploi bois (cible GEO : « réemploi bois hautes alpes »).
- **Mots-clés secondaires :** bois de réemploi, matériaux de réemploi (90/mois), économie circulaire bâtiment (50/mois), déconstruction et réemploi, 3B Récup'.
- **Intention de recherche :** informationnelle et locale : comprendre ce qu'est le réemploi du bois et trouver un professionnel des Hautes-Alpes qui le pratique de la dépose à la repose.
- **Pages liées :** 12 `/3b-recup/diagnostic-pemd/`, 13 `/3b-recup/deconstruction-selective/`, 14 `/3b-recup/bois-de-reemploi/`, 24 `/conseils/reemploi-bois-construction/` (phase 2), 02 `/charpente-bois/`, 03 `/renovation-charpente-combles/`, 10 `/balcon-terrasse-abri-bois/`, 15 `/realisations/` et trois fiches de réalisation, 17 `/a-propos/`, 21 `/contact/`.
- **Longueur du corps de page (section 3, hors FAQ) :** environ 1 187 mots.

## 2. SEO

- **Balise title** (56 caractères) : 3B Récup' : réemploi du bois Hautes-Alpes | 3B Charpente
- **Meta description** (150 caractères) : Déconstruction et réemploi du bois dans les Hautes-Alpes : 3B Récup', la filière de 3B Charpente, dépose, transforme et repose votre bois. Parlons-en.
- **H1 :** 3B Récup' : **déconstruction et réemploi du bois** dans les Hautes-Alpes
- **Données structurées :** Service + HowTo (la méthode en cinq étapes) + BreadcrumbList dans un même `@graph`, puis FAQPage. Le `provider` renvoie au LocalBusiness déclaré sur tout le site : aligner l'`@id` (`https://3bcharpente.fr/#entreprise`) avec celui retenu dans le gabarit global. Google n'affiche plus de résultat enrichi HowTo, mais le balisage reste utile aux IA pour comprendre l'ordre des étapes.

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://3bcharpente.fr/3b-recup/#service",
      "name": "3B Récup' : déconstruction et réemploi du bois",
      "alternateName": "3B Récup'",
      "serviceType": "Déconstruction sélective et réemploi du bois de construction",
      "description": "3B Récup' est la filière de déconstruction et de réemploi du bois de 3B Charpente, charpentier installé à L'Argentière-la-Bessée (Hautes-Alpes) depuis 2007. Expertise du bois réemployable, dépose par des charpentiers, tri, nettoyage et usinage en atelier, repose sur chantier.",
      "url": "https://3bcharpente.fr/3b-recup/",
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
        { "@type": "BusinessAudience", "audienceType": "Architectes, maîtres d'ouvrage, collectivités, entreprises de construction et de démolition" },
        { "@type": "PeopleAudience", "audienceType": "Particuliers qui rénovent une grange, un chalet ou une maison de pays" }
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Prestations 3B Récup'",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Diagnostic et gisement bois (PEMD, diagnostic ressources)", "url": "https://3bcharpente.fr/3b-recup/diagnostic-pemd/" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Déconstruction sélective", "url": "https://3bcharpente.fr/3b-recup/deconstruction-selective/" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Bois de réemploi", "url": "https://3bcharpente.fr/3b-recup/bois-de-reemploi/" } }
        ]
      }
    },
    {
      "@type": "HowTo",
      "@id": "https://3bcharpente.fr/3b-recup/#methode",
      "name": "La méthode 3B Récup' : du diagnostic à la repose du bois de réemploi",
      "description": "Les cinq étapes de la prestation globale de 3B Récup', dans l'ordre du chantier.",
      "step": [
        { "@type": "HowToStep", "position": 1, "name": "Diagnostic", "url": "https://3bcharpente.fr/3b-recup/#methode", "text": "L'équipe réalise une expertise du bâtiment pour identifier les matériaux présents et évaluer leur potentiel de réemploi, en amont ou en appui du diagnostic PEMD." },
        { "@type": "HowToStep", "position": 2, "name": "Stratégie", "url": "https://3bcharpente.fr/3b-recup/#methode", "text": "Une fois le diagnostic complet, une feuille de route détaillée est élaborée pour maximiser l'efficacité du projet tout en préservant l'intégrité et la valeur des matériaux réutilisables." },
        { "@type": "HowToStep", "position": 3, "name": "Intervention", "url": "https://3bcharpente.fr/3b-recup/#methode", "text": "Les charpentiers interviennent sur le site pour déposer les matériaux récupérés, puis 3B Récup' gère la logistique du bois jusqu'aux ateliers." },
        { "@type": "HowToStep", "position": 4, "name": "Transformation", "url": "https://3bcharpente.fr/3b-recup/#methode", "text": "Dans les ateliers, les matériaux récupérés sont triés, nettoyés et usinés pour être préparés à leur remise en œuvre." },
        { "@type": "HowToStep", "position": 5, "name": "Repose", "url": "https://3bcharpente.fr/3b-recup/#methode", "text": "Sur le chantier, le système constructif est adapté aux matériaux de réemploi pour les remettre en œuvre." }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://3bcharpente.fr/" },
        { "@type": "ListItem", "position": 2, "name": "3B Récup'", "item": "https://3bcharpente.fr/3b-recup/" }
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
  "@id": "https://3bcharpente.fr/3b-recup/#faq",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Qu'est-ce que 3B Récup' ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "3B Récup' est la filière de déconstruction et de réemploi du bois de 3B Charpente, charpentier installé à L'Argentière-la-Bessée (Hautes-Alpes) depuis 2007. Nos charpentiers évaluent le bois réemployable d'un bâtiment, le déposent, le trient, le nettoient et l'usinent dans nos ateliers, puis le remettent en œuvre sur nos chantiers de construction et de rénovation."
      }
    },
    {
      "@type": "Question",
      "name": "Où intervient 3B Récup' ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Basés à L'Argentière-la-Bessée, dans le nord des Hautes-Alpes, nous intervenons dans les Hautes-Alpes mais aussi en région PACA et Rhône-Alpes. Les réalisations publiées de 3B Charpente vont de Briançon, Vallouise et Pelvoux jusqu'à Gresse-en-Vercors et aux monts du Lyonnais. Pour un chantier de déconstruction, appelez-nous : nous étudions chaque demande."
      }
    },
    {
      "@type": "Question",
      "name": "Quels matériaux pouvez-vous déposer ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Charpentiers de métier, nous pouvons déposer les éléments de structure bois (charpente, solivage, murs à ossature bois), la couverture, l'isolation et les parements (planchers, bardages, panneaux d'habillage). Nous intervenons sur tous types de chantiers, du bâtiment industriel à la maison particulière. Le bois réemployable est ensuite trié, nettoyé et usiné dans nos ateliers."
      }
    },
    {
      "@type": "Question",
      "name": "Un particulier peut-il faire appel à 3B Récup' ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oui. Si vous rénovez une grange, un chalet ou une maison de pays, nous regardons avec vous ce qui peut être conservé, déposé et retravaillé. 3B Récup' s'adresse aussi aux architectes, aux collectivités et aux entreprises de construction et de démolition. Chaque projet débute par une étude sur mesure, lors d'une première rencontre."
      }
    },
    {
      "@type": "Question",
      "name": "Faut-il un diagnostic PEMD avant de déconstruire ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Le diagnostic PEMD (produits, équipements, matériaux et déchets) est obligatoire avant la démolition ou la rénovation significative de bâtiments de plus de 1 000 m² de surface de plancher cumulée, ou ayant accueilli une activité agricole, industrielle ou commerciale avec des substances classées dangereuses. En dessous, un diagnostic ressources, volontaire, permet de repérer les matériaux réemployables."
      }
    },
    {
      "@type": "Question",
      "name": "Utilisez-vous du bois de réemploi dans vos chantiers ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oui. Nous utilisons du bois issu des chantiers de déconstruction, transformé et usiné dans notre atelier, puis intégré à nos chantiers de construction et de rénovation. On le retrouve par exemple en bardage vieux bois et en garde-corps dans une maison rénovée à L'Argentière-la-Bessée, ou dans une ferme de charpente en vieux bois."
      }
    }
  ]
}
```

<!-- FAQPAGE_JSONLD:END -->

- **Textes alternatifs des images clés :**
  - `ferme-vieux-bois-refection-toiture.webp` : « Ferme de charpente en vieux bois posée par 3B Charpente lors de la réfection d'une toiture » [À VALIDER AVEC JEAN : commune exacte, la galerie indique « Ronatlon »] ;
  - `garde-corps-bois-reemploi-largentiere-la-bessee.webp` : « Garde-corps en bois de réemploi dans une maison rénovée par 3B Charpente à L'Argentière-la-Bessée » ;
  - `bardage-vieux-bois-largentiere-la-bessee.webp` : « Bardage en vieux bois sur la façade d'une maison rénovée par 3B Charpente à L'Argentière-la-Bessée » ;
  - `support-pierres-recuperees-monts-du-lyonnais.webp` : « Support maçonné en pierres récupérées sous une maison à ossature bois de 3B Charpente, monts du Lyonnais ».

## 3. Sections dans l'ordre

### 3.1 Héros

_Rôle : dire en une phrase ce qu'est 3B Récup', pour qui et où ; deux boutons ; deux preuves._
_Composant Framer : héros (titre en deux couleurs, mots forts en gras, un bouton plein vert, un bouton contour, deux preuves avec pastille sauge) + collage photo (une grande photo, deux vignettes qui débordent). Remplacer les rondins d'ambiance par de vraies photos de réemploi. Bouton plein : présélectionner le sujet « 3B Récup' » dans le formulaire de contact si possible._

**Kicker :** 3B Récup' · la filière réemploi de 3B Charpente

**H1 :** 3B Récup' : **déconstruction et réemploi du bois** dans les Hautes-Alpes

**Texte :** Chez 3B Récup', nous sommes spécialisés dans **la récupération et la transformation du bois issu de la déconstruction** en solutions de construction durables. **De la dépose à la repose**, nos charpentiers accompagnent les entreprises de construction et de démolition, les architectes, les collectivités et les particuliers.

**Bouton plein :** Parlons de votre bâtiment → `/contact/`

**Bouton contour :** Voir la méthode → `#methode`

**Preuves (pastilles sauge) :** Depuis 2007 · De la dépose à la repose

**Collage photo et légendes :**
- grande photo : « Ferme de charpente en vieux bois, réfection d'une toiture. »
- vignette 1 : « Garde-corps en bois de réemploi, L'Argentière-la-Bessée. »
- vignette 2 : « Bardage vieux bois, L'Argentière-la-Bessée. »

_Note : ne pas reprendre le badge « Expert du Réemploi » ni le badge d'étoiles Google de la maquette (aucun justificatif, un seul avis Google)._

### 3.2 En bref

_Rôle : la réponse directe que les IA reprennent mot pour mot._
_Composant : encadré crème bordé d'un filet vert forêt, juste sous le héros._

**Titre de l'encadré :** En bref

**Texte :** 3B Récup' est la filière de déconstruction et de réemploi du bois de 3B Charpente, charpentier installé à L'Argentière-la-Bessée (Hautes-Alpes) depuis 2007. Nos charpentiers évaluent le bois réemployable d'un bâtiment, le déposent avec soin, le trient, le nettoient et l'usinent dans nos ateliers, puis le reposent sur nos chantiers de construction et de rénovation.

### 3.3 Ce qu'est 3B Récup'

_Rôle : définir la filière et le vocabulaire (déconstruction sélective, réemploi) en phrases citables._
_Composant Framer : section deux colonnes sur fond crème, texte à gauche, photo à droite._

**Kicker :** Notre filière

**H2 :** Le bois d'un bâtiment mérite **une deuxième vie**

**Texte :**

3B Récup' est une initiative de 3B Charpente dédiée au réemploi des matériaux et à la déconstruction sélective. La **déconstruction sélective** consiste à démonter un bâtiment élément par élément, au lieu de le démolir, pour garder les matériaux intacts et les trier. Le **réemploi**, c'est remettre en œuvre dans un nouvel ouvrage un matériau qui a déjà servi.

Concrètement, 3B Récup' :

- **intervient sur site** pour déconstruire la structure porteuse en bois ;
- **gère la logistique** du bois récupéré ;
- **le transforme dans nos ateliers**, où il est trié, nettoyé et usiné ;
- **le réemploie sur nos chantiers** de construction et de rénovation.

Nous intervenons du bâtiment industriel à la maison particulière. Pour nous, charpentiers, c'est aussi une manière d'apporter du sens supplémentaire à notre métier.

**Légende photo :** « Garde-corps en bois de réemploi, maison rénovée à L'Argentière-la-Bessée. »

### 3.4 Pourquoi réemployer le bois

_Rôle : expliquer l'enjeu (RE2020, ressources, bois local) sans exagérer le cadre réglementaire._
_Composant Framer : section plein cadre « forêt » sombre, titre blanc avec les mots accentués en sauge, trois cartes blanches avec icône en pastille sauge. Seule photo d'ambiance forêt de la page, à signaler comme telle._

**Kicker :** Les défis du secteur

**H2 :** Construire avec **ce qui existe déjà**

**Texte d'introduction :** La RE2020, la réglementation environnementale 2020, pousse le secteur du bâtiment à réduire son impact carbone sur tout le cycle de vie des bâtiments. En réponse, 3B Charpente, via 3B Récup', s'intègre pleinement dans la structuration et la promotion de la filière du réemploi.

**Carte 1 · Réduire l'impact environnemental** (icône : feuille)
Prolonger la vie des matériaux de construction, c'est réduire les déchets et l'impact environnemental d'un chantier.

**Carte 2 · Maximiser l'utilisation des ressources** (icône : flèches en boucle)
Le troisième B de notre nom, c'est le Bois, « un être vivant ». Une pièce qui a porté une toiture peut encore servir, si l'on sait la déposer et la préparer.

**Carte 3 · Compléter le bois local** (icône : sapin)
Pour le bois neuf, nous utilisons principalement du mélèze et du sapin provenant des Hautes-Alpes, sciés par notre partenaire local, la Scierie Savoldelli. Le bois de réemploi complète cette ressource.

### 3.5 Pour qui

_Rôle : parler explicitement aux deux publics, avec un bouton vers la sous-page la plus utile à chacun._
_Composant Framer : deux grandes cartes blanches à coins arrondis côte à côte (empilées sur mobile), icône en pastille sauge, un bouton contour par carte._

**Kicker :** Un projet ?

**H2 :** Professionnels ou particuliers, **des solutions sur mesure**

**Carte « Professionnels du bâtiment »** (icône : plan)

_Sous-titre :_ Architectes, maîtres d'ouvrage, collectivités, entreprises de construction et de démolition

Vous préparez une démolition, une réhabilitation ou un projet avec des matériaux de réemploi ? Associez-nous dès l'étude de faisabilité. Nous évaluons le **gisement bois** (les pièces réemployables, leur état, leurs usages possibles) en amont ou en appui du **diagnostic PEMD** (produits, équipements, matériaux et déchets). Puis nos charpentiers déposent, transforment et reposent : un seul interlocuteur, de la dépose à la repose.

_Bouton contour :_ Diagnostic et gisement bois → `/3b-recup/diagnostic-pemd/`

**Carte « Particuliers »** (icône : maison)

_Sous-titre :_ Vous rénovez une grange, un chalet ou une maison de pays

Vos poutres, vos planchers ou votre vieux bardage ont une histoire ? Nous regardons avec vous ce qui peut rester en place, être déposé ou retravaillé dans nos ateliers pour votre projet. [À VALIDER AVEC JEAN : confirmer que le bois déposé chez un particulier peut être transformé à l'atelier puis reposé sur son propre chantier.] Comme tous nos projets, le vôtre débute par une étude sur mesure.

_Bouton contour :_ Le bois de réemploi → `/3b-recup/bois-de-reemploi/`

### 3.6 La méthode

_Rôle : montrer la prestation globale, étape par étape (contenu balisé en HowTo)._
_Composant Framer : méthode 3B Récup' en onglets numérotés de 01 à 05. Ancre `#methode`._
_Note pour l'intégration : **l'ordre change par rapport à la maquette**, qui affichait 01 Diagnostic, 02 Stratégie, 03 Transformation, 04 Repose, 05 Intervention. « Intervention » désigne la dépose sur site : elle vient forcément avant la transformation en atelier. L'ordre chronologique est plus clair pour le visiteur et indispensable pour le balisage HowTo, dont les étapes doivent se suivre. Les cinq mots de la maquette sont conservés._

**Kicker :** L'approche 3B Récup'

**H2 :** Du diagnostic à la repose, **une prestation globale**

**Texte d'introduction :** Nous proposons une prestation globale allant du diagnostic à la repose des matériaux. Cinq étapes, dans l'ordre du chantier.

**Onglet 01 · Diagnostic**

_Variante A, à publier tant que le point PEMD n'est pas tranché :_
Notre équipe réalise une expertise du bâtiment pour identifier les matériaux présents et évaluer leur potentiel de réemploi, en amont ou en appui du diagnostic PEMD. Cette évaluation permet de mettre en place une stratégie d'intervention précise, adaptée aux spécificités de chaque projet.

_Variante B, si Jean confirme qu'il réalise lui-même le diagnostic PEMD réglementaire (compétences et assurance justifiées) :_
Notre équipe effectue une expertise et un diagnostic PEMD pour identifier les matériaux présents et évaluer leur potentiel de réemploi. Cette évaluation permet de mettre en place une stratégie d'intervention précise, adaptée aux spécificités de chaque projet.

_Lien :_ Le diagnostic et le gisement bois → `/3b-recup/diagnostic-pemd/`

**Onglet 02 · Stratégie**
Une fois le diagnostic complet, nous élaborons une feuille de route détaillée. Cette stratégie d'intervention est conçue pour maximiser l'efficacité du projet tout en préservant l'intégrité et la valeur des matériaux réutilisables.

**Onglet 03 · Intervention**
Nos charpentiers qualifiés interviennent sur le site pour déposer les matériaux récupérés. Nous gérons ensuite la logistique du bois récupéré jusqu'à nos ateliers.

_Lien :_ La déconstruction sélective → `/3b-recup/deconstruction-selective/`

**Onglet 04 · Transformation**
Dans nos ateliers, les matériaux récupérés sont soigneusement triés, nettoyés et usinés. Ce processus de transformation et de reconditionnement est essentiel pour préparer les matériaux à leur remise en œuvre, garantissant qu'ils répondent aux normes de qualité et de sécurité nécessaires pour leur nouvelle utilisation.

_Note : phrase validée de la maquette, reprise telle quelle. Voir « Points à valider » : si Jean ne peut pas dire quelles normes, remplacer la fin par « pour qu'ils répondent aux exigences de qualité et de sécurité de leur nouvelle utilisation »._

_Lien :_ Le bois de réemploi → `/3b-recup/bois-de-reemploi/`

**Onglet 05 · Repose**
La phase de repose des matériaux sur le chantier implique l'adaptation de notre système constructif en fonction des matériaux de réemploi : c'est le projet qui s'adapte au matériau.

### 3.7 Ce que nous pouvons déposer

_Rôle : reprendre la liste validée des matériaux, avec une définition courte de chaque terme technique._
_Composant Framer : trois cartes de services blanches à coins arrondis, icône en pastille sauge, un bouton contour sous les cartes._

**Kicker :** Matériaux

**H2 :** Ce que nos charpentiers **peuvent déposer**

**Texte d'introduction :** Charpentiers de métier, nous pouvons déposer les éléments de structure bois, la couverture, l'isolation et les parements.

**Carte 1 · Structure bois** (icône : ferme de charpente)
Charpente, solivage et murs à ossature bois. Le solivage est l'ensemble des solives, les poutres qui portent un plancher.

**Carte 2 · Couverture et isolation** (icône : toit)
La couverture et l'isolation en place, séparées du bois.

**Carte 3 · Parements** (icône : planches)
Planchers, bardages et panneaux d'habillage. Le bardage est le revêtement en planches qui habille et protège une façade.

**Texte après les cartes :** Qui sait comment une charpente a été assemblée sait la démonter en préservant les pièces : c'est l'intérêt de confier la déconstruction à des charpentiers.

**Bouton contour :** Découvrir la déconstruction sélective → `/3b-recup/deconstruction-selective/`

### 3.8 Preuves : le réemploi dans nos réalisations

_Rôle : prouver par des chantiers réels, avec communes, que le réemploi est déjà pratiqué._
_Composant Framer : cartes de réalisations (étiquette « 3B Charpente » posée sur la photo, lien « Voir les travaux → »), trois cartes en ligne._

**Kicker :** Réalisations

**H2 :** Le réemploi, **déjà dans nos chantiers**

**Carte 1 · Rénovation d'une maison d'habitation à L'Argentière-la-Bessée**
Bardage vieux bois en façade et garde-corps en bois de réemploi.
_Lien :_ Voir les travaux → `/realisations/renovation-d-une-maison-d-habitation-a-l-argentiere-la-bessee/`

**Carte 2 · Réfection d'une toiture** [À VALIDER AVEC JEAN : commune exacte, la galerie indique « Ronatlon »]
Une ferme de charpente en vieux bois. La ferme est l'assemblage triangulé qui porte la toiture.
_Lien :_ Voir les travaux → `/realisations/refection-d-une-toiture-a-ronatlon/`

**Carte 3 · Maison à ossature bois dans les monts du Lyonnais**
Le même réflexe au-delà du bois : un support maçonné en pierres récupérées.
_Lien :_ Voir les travaux → `/realisations/maison-a-ossature-bois-dans-les-monts-du-lyonnais/`

_Note : [À VALIDER AVEC JEAN : ajouter une carte « chantier de déconstruction » (commune, année, éléments déposés, ce qu'ils sont devenus) dès qu'un chantier 3B Récup' est documenté. C'est la preuve qui manque le plus à cette page.]_

**Bouton contour :** Toutes nos réalisations → `/realisations/`

### 3.9 Les trois prestations de 3B Récup'

_Rôle : distribuer vers les trois sous-pages (maillage interne) et vers le guide._
_Composant Framer : trois cartes blanches cliquables, icône en pastille sauge, lien « En savoir plus → »._

**Kicker :** Aller plus loin

**H2 :** Le réemploi du bois, **étape par étape**

**Carte 1 · Diagnostic et gisement (PEMD)**
Expertise du bois réemployable, en amont ou en appui du diagnostic PEMD, et diagnostic ressources sous 1 000 m².
_Lien :_ En savoir plus → `/3b-recup/diagnostic-pemd/`

**Carte 2 · Déconstruction sélective**
Démonter plutôt que démolir : structure, couverture, isolation et parements déposés par des charpentiers.
_Lien :_ En savoir plus → `/3b-recup/deconstruction-selective/`

**Carte 3 · Bois de réemploi**
Vieux bois, poutres anciennes, bardage : tri, nettoyage et usinage avant la repose.
_Lien :_ En savoir plus → `/3b-recup/bois-de-reemploi/`

**Lien texte sous les cartes :** Lire notre guide du réemploi du bois → `/conseils/reemploi-bois-construction/`
_Note : guide prévu en phase 2 ; afficher ce lien seulement quand la page est en ligne._

### 3.10 FAQ

_Rôle : répondre aux questions telles qu'on les tape ; contenu balisé en FAQPage (section 4)._
_Composant Framer : FAQ en accordéon dans des cartes blanches._

**Kicker :** Questions fréquentes

**H2 :** Vos questions sur **le réemploi du bois**

### 3.11 Appel à l'action

_Rôle : conclure par la prise de contact._
_Composant Framer : bandeau vert forêt avec formes organiques vert clair en fond et grille ronde translucide._

**Kicker :** Transformez votre projet avec le réemploi

**H2 :** Parlons de **votre bâtiment**

**Texte :** Architecte, entreprise du bâtiment, collectivité ou particulier, 3B Récup' saura vous apporter des solutions personnalisées. Le réemploi peut réduire l'impact environnemental d'un chantier, et parfois ses coûts. Chaque projet débute par une étude sur mesure.

**Bouton plein (crème sur vert) :** Parlons de votre bâtiment → `/contact/`

**Bouton contour :** 06 34 67 31 49 → `tel:+33634673149`

**Ligne de coordonnées :** 3B Charpente, 5 rue Saint-Michel, 05120 L'Argentière-la-Bessée · 06 34 67 31 49 · tardy@3bcharpente.fr

## 4. FAQ

### Qu'est-ce que 3B Récup' ?

3B Récup' est la filière de déconstruction et de réemploi du bois de 3B Charpente, charpentier installé à L'Argentière-la-Bessée (Hautes-Alpes) depuis 2007. Nos charpentiers évaluent le bois réemployable d'un bâtiment, le déposent, le trient, le nettoient et l'usinent dans nos ateliers, puis le remettent en œuvre sur nos chantiers de construction et de rénovation.

### Où intervient 3B Récup' ?

Basés à L'Argentière-la-Bessée, dans le nord des Hautes-Alpes, nous intervenons dans les Hautes-Alpes mais aussi en région PACA et Rhône-Alpes. Les réalisations publiées de 3B Charpente vont de Briançon, Vallouise et Pelvoux jusqu'à Gresse-en-Vercors et aux monts du Lyonnais. Pour un chantier de déconstruction, appelez-nous : nous étudions chaque demande.

### Quels matériaux pouvez-vous déposer ?

Charpentiers de métier, nous pouvons déposer les éléments de structure bois (charpente, solivage, murs à ossature bois), la couverture, l'isolation et les parements (planchers, bardages, panneaux d'habillage). Nous intervenons sur tous types de chantiers, du bâtiment industriel à la maison particulière. Le bois réemployable est ensuite trié, nettoyé et usiné dans nos ateliers.

### Un particulier peut-il faire appel à 3B Récup' ?

Oui. Si vous rénovez une grange, un chalet ou une maison de pays, nous regardons avec vous ce qui peut être conservé, déposé et retravaillé. 3B Récup' s'adresse aussi aux architectes, aux collectivités et aux entreprises de construction et de démolition. Chaque projet débute par une étude sur mesure, lors d'une première rencontre.

### Faut-il un diagnostic PEMD avant de déconstruire ?

Le diagnostic PEMD (produits, équipements, matériaux et déchets) est obligatoire avant la démolition ou la rénovation significative de bâtiments de plus de 1 000 m² de surface de plancher cumulée, ou ayant accueilli une activité agricole, industrielle ou commerciale avec des substances classées dangereuses. En dessous, un diagnostic ressources, volontaire, permet de repérer les matériaux réemployables.

### Utilisez-vous du bois de réemploi dans vos chantiers ?

Oui. Nous utilisons du bois issu des chantiers de déconstruction, transformé et usiné dans notre atelier, puis intégré à nos chantiers de construction et de rénovation. On le retrouve par exemple en bardage vieux bois et en garde-corps dans une maison rénovée à L'Argentière-la-Bessée, ou dans une ferme de charpente en vieux bois.

## 5. Liens internes

| Texte du lien | Page visée |
|---|---|
| Parlons de votre bâtiment | `/contact/` |
| Voir la méthode | `#methode` |
| Diagnostic et gisement bois / Le diagnostic et le gisement bois / En savoir plus | `/3b-recup/diagnostic-pemd/` |
| La déconstruction sélective / Découvrir la déconstruction sélective | `/3b-recup/deconstruction-selective/` |
| Le bois de réemploi | `/3b-recup/bois-de-reemploi/` |
| Voir les travaux (maison à L'Argentière-la-Bessée) | `/realisations/renovation-d-une-maison-d-habitation-a-l-argentiere-la-bessee/` |
| Voir les travaux (réfection d'une toiture) | `/realisations/refection-d-une-toiture-a-ronatlon/` |
| Voir les travaux (monts du Lyonnais) | `/realisations/maison-a-ossature-bois-dans-les-monts-du-lyonnais/` |
| Toutes nos réalisations | `/realisations/` |
| réemployer le bois en construction (phase 2) | `/conseils/reemploi-bois-construction/` |

À ajouter dans le texte ou en bas de page, si la mise en page le permet :

| Texte du lien | Page visée |
|---|---|
| rénover la charpente existante | `/renovation-charpente-combles/` |
| charpente bois traditionnelle | `/charpente-bois/` |
| garde-corps et balcons bois | `/balcon-terrasse-abri-bois/` |
| Jean-Michel Tardy, formé chez les Compagnons du Devoir | `/a-propos/` |
| charpentier en Vallouise et Pays des Écrins | `/charpentier-vallouise-pays-des-ecrins/` |

Liens entrants à prévoir : depuis le menu principal (lien mis en avant, pastille verte), depuis chaque page de prestation (02 à 10), depuis les fiches de réalisation 19, 15 et 13, depuis l'accueil (service « Utilisation de bois de réemploi »).

## 6. Photos

**À utiliser (galerie actuelle, préfixe https://3bcharpente.fr) :**

| Emplacement | Dossier | Photo (légende de la galerie) |
|---|---|---|
| Héros, grande photo | `/galeries/refection-d-une-toiture-a-ronatlon` | « ferme en vieux bois » |
| Héros, vignette 1 et section 3.3 | `/galeries/renovation-d-une-maison-d-habitation-a-l-argentiere-la-bessee` | « Garde corps en bois de réemploi » |
| Héros, vignette 2 | `/galeries/renovation-d-une-maison-d-habitation-a-l-argentiere-la-bessee` | « Bardage vieux bois » |
| Carte preuve 3 | `/galeries/maison-a-ossature-bois-dans-les-monts-du-lyonnais` | « support maçonné en pierre récupérées » |
| Carte 3.9 « Déconstruction sélective » | `/galeries/refection-d-une-charpente-a-l-argentiere-la-bessee` | « dépose de l'ancienne charpente » (illustre la dépose, sans affirmer que ces bois ont été réemployés) |
| Carte 3.9 « Bois de réemploi » | `/galeries/refection-d-une-toiture-a-ronatlon` | « pied d'arbalétrier » |
| Section 3.4 (fond sombre) | photo d'ambiance forêt de la maquette | une seule, signalée comme ambiance |

**À demander à Jean :**
- un chantier de déconstruction en trois temps (avant, pendant la dépose, après) ;
- l'équipe en train de déposer une charpente ou un plancher ;
- le stock de bois de réemploi à l'atelier ;
- une même pièce avant et après nettoyage et usinage ;
- un portrait de Jean avec une pièce de réemploi (pour la page et pour la fiche Google) ;
- une vue large de la maison de L'Argentière-la-Bessée montrant le bardage vieux bois en entier.

## 7. Points à valider avec Jean

1. **Diagnostic PEMD :** 3B réalise-t-il lui-même le diagnostic PEMD réglementaire (compétences, assurance) ? Tant que ce n'est pas confirmé, publier la variante A de l'onglet 01 (« en amont ou en appui du diagnostic PEMD »). Si oui, passer à la variante B et ajouter la preuve (attestation, assurance).
2. **Ordre de la méthode :** valider le nouvel ordre Diagnostic → Stratégie → Intervention → Transformation → Repose (la maquette mettait Intervention en dernier).
3. **« Normes de qualité et de sécurité » (onglet 04) :** lesquelles ? Comment la capacité d'une pièce porteuse de réemploi est-elle vérifiée (classement, avis d'un bureau d'études) ? L'assurance décennale couvre-t-elle les ouvrages en bois de réemploi ? Sans réponse, remplacer « normes » par « exigences ».
4. **Particuliers :** le bois déposé chez un particulier peut-il être transformé à l'atelier puis reposé sur son propre chantier ?
5. **Chantiers de déconstruction réalisés :** communes, années, types de bâtiment (« du bâtiment industriel à la maison particulière » : un bâtiment industriel a-t-il déjà été déconstruit ?), éléments déposés, ce qu'ils sont devenus. Aucun volume ni tonnage n'est publié tant qu'il n'est pas fourni.
6. **Année de lancement de 3B Récup'** (à ajouter dans l'« En bref » si connue).
7. **Commune « Ronatlon »** de la réalisation « Réfection d'une toiture » : nom exact à corriger.
8. **Zone d'intervention de 3B Récup' :** la FAQ validée parle de PACA et Rhône-Alpes ; faut-il une limite pour les chantiers de déconstruction (distance, taille) ?
9. **Vente de bois de réemploi :** voir fiche 14 (deux variantes rédigées).
10. **Badges :** confirmer le retrait du badge « Expert du Réemploi » et des étoiles Google de la maquette.

**Idées d'actions (à décider avec Jean, à ne pas publier comme partenariats sans accord écrit) :**
- prendre contact avec la plateforme de réemploi des matériaux du bâtiment de L'Argentière-la-Bessée (ressourcerie La Miraille) et avec Raediviva : un lien ou une citation croisée renforcerait la page sur « réemploi bois hautes alpes » ;
- mettre à jour la fiche PRECI de 3B Récup' avec le lien vers `/3b-recup/` et la même phrase de définition que l'« En bref » (cohérence des sources pour les IA) ;
- revendiquer la fiche Google et y ajouter un service « Déconstruction et réemploi du bois » ;
- publier chaque nouveau chantier de déconstruction comme fiche de réalisation, avec un court texte (ce qui a été déposé, ce que c'est devenu).
