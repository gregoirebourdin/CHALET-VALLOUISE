# 20 — Charpentier en Vallouise et Pays des Écrins : `/charpentier-vallouise-pays-des-ecrins/`

Page secteur du territoire de 3B : L'Argentière-la-Bessée, où l'entreprise est installée, la Vallouise et le Pays des Écrins. C'est la page secteur la plus riche en preuves : 12 des 24 chantiers publiés se trouvent ici. Elle ne doit pas être une page « satellite ». Elle s'appuie sur :

- douze chantiers réels, classés par commune ;
- le contexte du bâti du pays ;
- le réemploi, dont la base est à L'Argentière-la-Bessée ;
- une FAQ propre au secteur ;
- la liste des communes.

Sources : `00-brief.md` et `realisations-source.md` (n° 01, 02, 03, 04, 11, 12, 14, 19, 20, 21, 22, 23). Conventions : le texte en bloc de citation (`>`) est prêt à coller ; dans les titres, les mots entre `**` passent en vert ; `[À VALIDER AVEC JEAN : …]` n'est jamais publié tel quel.

---

## 1. Carte d'identité

- **Adresse :** `/charpentier-vallouise-pays-des-ecrins/`
- **Objectif de la page :**
  - apparaître sur « charpentier l'argentière-la-bessée », où 3B est absent de la carte et seulement 15e avec une page de galerie (brief §2) ;
  - apparaître sur « charpentier vallouise » et « charpentier pelvoux » ;
  - montrer la densité de chantiers autour de l'atelier ;
  - transformer la visite en demande de devis.
- **Visiteurs visés :**
  - habitants et propriétaires de résidences secondaires de L'Argentière-la-Bessée, Vallouise, Pelvoux, Puy-Saint-Vincent, Saint-Martin-de-Queyrières, Champcella et La Roche-de-Rame ;
  - architectes et entreprises du secteur, notamment pour le réemploi.
- **Mots-clés principaux :**
  - « charpentier l'argentière-la-bessée » ;
  - « charpentier vallouise » ;
  - « charpentier pelvoux ».

  Volumes trop faibles pour être mesurés (brief §7).
- **Mots-clés secondaires** (volumes non mesurés) :
  - « rénovation chalet vallouise » ;
  - « charpentier pays des écrins » ;
  - « charpentier puy-saint-vincent » ;
  - « bardage vieux bois hautes alpes ».
- **Intention de recherche :** locale et transactionnelle.
- **Concurrence relevée (brief §2), sur « charpentier l'argentière-la-bessée » :**
  - sur la carte : Atelier Rêves&Bois, Boulot, Giraud Bois Construction, Atelier de Roche ;
  - Alpes Bois Conception (Briançon) est 5e, avec une page par commune.
- **Partage des rôles avec l'accueil :** l'accueil vise aussi « charpentier l'argentière-la-bessée ».
  - L'accueil parle de l'entreprise dans son ensemble.
  - Cette page montre les chantiers et les communes du secteur.
  - Les deux pages se font des liens réciproques.
- **Pages liées :**
  - les 12 fiches du secteur ;
  - toutes les prestations ;
  - `/3b-recup/` et `/3b-recup/bois-de-reemploi/` ;
  - les deux autres pages secteur ;
  - `/a-propos/` ;
  - `/contact/`.

---

## 2. SEO

- **Balise title (60 car.) :** Charpentier L'Argentière-la-Bessée, Vallouise | 3B Charpente
- **Meta description (152 car.) :** Charpentier à L'Argentière-la-Bessée depuis 2007 : charpente, isolation biosourcée, chalets, balcons et réemploi en Vallouise et Pays des Écrins. Devis.
- **H1 :** Charpentier à **L'Argentière-la-Bessée**, en Vallouise et dans le Pays des Écrins
- **URL canonique :** `https://3bcharpente.fr/charpentier-vallouise-pays-des-ecrins/`

### Données structurées (JSON-LD)

Les notes d'intégration sont les mêmes que pour la page 18 :

- même `@id` et même type que sur l'accueil ;
- horaires, `geo` et fiche Google ajoutés seulement une fois validés ;
- texte des FAQ identique à la section 9.

Dans `areaServed`, Puy-Saint-Vincent, Les Vigneaux et Freissinières sont à retirer si Jean ne les confirme pas.

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "GeneralContractor",
      "@id": "https://3bcharpente.fr/#entreprise",
      "name": "3B Charpente",
      "url": "https://3bcharpente.fr/",
      "telephone": "06 34 67 31 49",
      "email": "tardy@3bcharpente.fr",
      "foundingDate": "2007",
      "founder": { "@type": "Person", "name": "Jean-Michel Tardy" },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "5 rue Saint-Michel",
        "postalCode": "05120",
        "addressLocality": "L'Argentière-la-Bessée",
        "addressRegion": "Hautes-Alpes",
        "addressCountry": "FR"
      },
      "areaServed": [
        { "@type": "City", "name": "L'Argentière-la-Bessée" },
        { "@type": "City", "name": "Vallouise-Pelvoux" },
        { "@type": "City", "name": "Saint-Martin-de-Queyrières" },
        { "@type": "City", "name": "Champcella" },
        { "@type": "City", "name": "La Roche-de-Rame" },
        { "@type": "City", "name": "Puy-Saint-Vincent" },
        { "@type": "City", "name": "Les Vigneaux" },
        { "@type": "City", "name": "Freissinières" }
      ],
      "sameAs": ["https://www.facebook.com/3bcharpente"]
    },
    {
      "@type": "Service",
      "@id": "https://3bcharpente.fr/charpentier-vallouise-pays-des-ecrins/#service",
      "name": "Charpentier à L'Argentière-la-Bessée, en Vallouise et dans le Pays des Écrins",
      "serviceType": "Charpente, rénovation de toiture, isolation biosourcée, rénovation de chalets, balcons et terrasses, réemploi du bois",
      "url": "https://3bcharpente.fr/charpentier-vallouise-pays-des-ecrins/",
      "provider": { "@id": "https://3bcharpente.fr/#entreprise" },
      "areaServed": [
        { "@type": "City", "name": "L'Argentière-la-Bessée" },
        { "@type": "City", "name": "Vallouise-Pelvoux" },
        { "@type": "City", "name": "Saint-Martin-de-Queyrières" },
        { "@type": "City", "name": "Champcella" },
        { "@type": "City", "name": "La Roche-de-Rame" },
        { "@type": "City", "name": "Puy-Saint-Vincent" },
        { "@type": "City", "name": "Les Vigneaux" },
        { "@type": "City", "name": "Freissinières" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Où se trouve 3B Charpente ?",
          "acceptedAnswer": { "@type": "Answer", "text": "3B Charpente est installée au 5 rue Saint-Michel, 05120 L'Argentière-la-Bessée, dans les Hautes-Alpes. C'est l'entreprise individuelle de Jean-Michel Tardy, charpentier formé chez les Compagnons du Devoir, créée en 2007. Vous pouvez nous joindre au 06 34 67 31 49 ou par e-mail à tardy@3bcharpente.fr." }
        },
        {
          "@type": "Question",
          "name": "Intervenez-vous à Vallouise et à Pelvoux ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Oui. À Vallouise, nous avons rénové et isolé un chalet des années 1980 et agrandi son balcon en terrasse. À Pelvoux, nous avons réalisé une surélévation et un abri de jardin. Nous intervenons aussi dans les communes voisines du Pays des Écrins, de L'Argentière-la-Bessée à Saint-Martin-de-Queyrières, Champcella et La Roche-de-Rame." }
        },
        {
          "@type": "Question",
          "name": "Pouvez-vous rénover et isoler un chalet ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Oui. À Vallouise, nous avons entièrement rénové et isolé un chalet des années 1980 : 28 cm de laine de chanvre, lin et coton et de fibre de bois dans les murs, 32 cm en toiture. Une partie des façades a reçu un bardage en mélèze, l'autre un enduit sur fibre de bois. Des ouvertures ont été créées ou modifiées, et la terrasse a été agrandie." }
        },
        {
          "@type": "Question",
          "name": "Utilisez-vous du bois de réemploi dans vos rénovations ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Oui. À L'Argentière-la-Bessée, une maison que nous avons rénovée a reçu un bardage en vieux bois et un garde-corps en bois de réemploi. Avec 3B Récup', nous intervenons sur des chantiers de déconstruction ; le bois récupéré est trié, nettoyé et usiné dans nos ateliers, puis réemployé sur nos chantiers de construction et de rénovation." }
        },
        {
          "@type": "Question",
          "name": "Réalisez-vous aussi les petits ouvrages : abri, balcon, terrasse ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Oui. Nous avons créé un abri de jardin à Pelvoux, un abri voiture en charpente traditionnelle à L'Argentière-la-Bessée, un balcon en mélèze à La Roche-de-Rame et une terrasse couverte à Champcella. Petit ou grand, chaque projet commence par une étude sur mesure, puis un devis détaillé, adapté à votre projet." }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://3bcharpente.fr/" },
        { "@type": "ListItem", "position": 2, "name": "Charpentier en Vallouise et Pays des Écrins", "item": "https://3bcharpente.fr/charpentier-vallouise-pays-des-ecrins/" }
      ]
    }
  ]
}
```

### Texte alternatif des images clés

| Emplacement | Photo (fiche, n° de photo) | Texte alternatif |
|---|---|---|
| Héros | n° 14, photo 13 « lucarne en cours de levage » (ou photo 21 « bardage posé ») | Lucarne en cours de levage sur la toiture refaite à L'Argentière-la-Bessée |
| Vignettes des sections 3 et 4 | photo du héros de chaque fiche (voir fiche 16) | texte alternatif du héros de chaque fiche |
| Section « Le bâti du pays » | n° 19, photo 7 « Bardage vieux bois » | Bardage en vieux bois de réemploi sur une maison rénovée à L'Argentière-la-Bessée |
| Section « Bois local et réemploi » | n° 19, photo 9 « Garde corps en bois de réemploi » | Garde-corps en bois de réemploi, maison rénovée à L'Argentière-la-Bessée |
| Section « Chantiers du pays » | n° 22, photo 7 « Façade Sud et sa terrasse » | Façade sud du chalet rénové à Vallouise et sa terrasse agrandie en mélèze |

---

## 3. Sections dans l'ordre

Corps de page (sections 1 à 8, hors FAQ et coordonnées) : 822 mots.

### Section 1 — Héros

- **Rôle :** ancrer l'entreprise dans sa commune et son territoire.
- **Composant de la maquette :** héros (titre deux couleurs, mots forts en gras, bouton plein vert, bouton contour, deux preuves avec pastille sauge). Photo de chantier réel à L'Argentière-la-Bessée.

*Fil d'Ariane*
> Accueil › Charpentier en Vallouise et Pays des Écrins

*Kicker*
> Charpente · Isolation · Réemploi · Balcons

*H1*
> Charpentier à **L'Argentière-la-Bessée**, en Vallouise et dans le Pays des Écrins

*Texte*
> 3B Charpente est installée au 5 rue Saint-Michel, à L'Argentière-la-Bessée, là où la Gyronde rejoint la Durance. C'est ici, dans le Pays des Écrins, que se trouve la moitié de nos chantiers publiés : charpentes, toitures, chalets, balcons et abris. Nous travaillons le **bois des Hautes-Alpes** et des **isolants biosourcés**.

*Boutons*
> Demander mon devis → `/contact/` (plein)
> Voir nos chantiers du secteur → `#chantiers` (contour)

*Preuves (pastilles sauge)*
> Depuis 2007
> Entreprise RGE

### Section 2 — En bref

- **Rôle :** la réponse directe que les IA reprennent (40 à 60 mots).
- **Composant :** encadré crème clair, sous le héros.

*Kicker*
> En bref

*Texte*
> 3B Charpente est un charpentier installé à L'Argentière-la-Bessée depuis 2007, au cœur du Pays des Écrins. Douze de nos chantiers publiés se trouvent dans le secteur : réfection de charpente, isolation de toiture, chalet rénové à Vallouise, surélévation à Pelvoux, balcons, terrasse et abris. Bois des Hautes-Alpes, isolants biosourcés et bois de réemploi.

Longueur : 54 mots.

### Section 3 — Nos chantiers à L'Argentière-la-Bessée (ancre `#chantiers`)

- **Rôle :** la preuve, commune par commune. On commence par la commune de l'entreprise.
- **Composant :** cartes de réalisations compactes (vignette, étiquette « 3B Charpente », titre, une phrase, « Voir les travaux → »), grille de 2 ou 3 colonnes.

*Kicker*
> Nos chantiers

*H2*
> À **L'Argentière-la-Bessée**, notre commune

*Carte — Réfection d'une charpente avec lucarne*
> Dépose de l'ancienne charpente, tenon taillé à la besaiguë, trait de Jupiter, assemblage à blanc, levage des fermes, lucarne, bardage et plancher en mélèze.
> Voir les travaux → `/realisations/refection-d-une-charpente-a-l-argentiere-la-bessee/`

*Carte — Isolation d'une toiture ancienne*
> Renfort de la charpente, étanchéité à l'air, panneaux en fibre de bois, fenêtre de toit et couverture.
> Voir les travaux → `/realisations/isolation-d-une-toiture-ancienne-a-l-argentiere-la-bessee/`

*Carte — Rénovation d'une maison d'habitation*
> Pignon vitré, bardage en vieux bois, garde-corps en bois de réemploi, escalier balancé et balcon.
> Voir les travaux → `/realisations/renovation-d-une-maison-d-habitation-a-l-argentiere-la-bessee/`

*Carte — Abri voiture en charpente traditionnelle*
> Une ferme avec poinçon et entrait cintré, assemblée par tenons et mortaises chevillés.
> Voir les travaux → `/realisations/abris-voiture-a-l-argentiere-la-bessee/`

*Carte — Isolation et habillage d'une voûte* (seulement si la fiche n° 12 est publiée, voir fiche 16)
> Une voûte isolée, puis habillée d'un parement qui suit sa courbe.
> Voir les travaux → `/realisations/isolation-et-habillage-d-une-voute-a-l-argentiere-la-bessee/`

### Section 4 — Nos chantiers en Vallouise et dans le Pays des Écrins

- **Rôle :** suite de la preuve, pour les autres communes du secteur.
- **Composant :** même grille de cartes compactes, avec la commune en étiquette sauge sur chaque carte.

*Kicker*
> Dans le Pays des Écrins

*H2*
> De **Vallouise** à La Roche-de-Rame

*Carte — Vallouise : chalet rénové et isolé*
> Un chalet des années 1980 entièrement rénové : 28 cm d'isolants biosourcés dans les murs, 32 cm en toiture, bardage en mélèze et terrasse agrandie.
> Voir les travaux → `/realisations/renovation-et-isolation-d-un-chalet-a-vallouise/`

*Carte — Pelvoux : surélévation*
> Une surélévation, avec une dépassée de toit portée par des consoles.
> Voir les travaux → `/realisations/surelevation-a-pelvoux/`

*Carte — Pelvoux : abri de jardin*
> Un abri de jardin, du levage de la structure à l'abri terminé.
> Voir les travaux → `/realisations/creation-d-un-abris-de-jardin-a-pelvoux/`

*Carte — Saint-Martin-de-Queyrières : rénovation énergétique et lucarne*
> Ouverture d'une lucarne, étanchéité à l'air et caissons d'isolation.
> Voir les travaux → `/realisations/renovation-energetique-et-ouverture-d-une-lucarne-a-saint-martin-de-queyriere/`

*Carte — Prelles : maison en mélèze de pays*
> Taille de la charpente, assemblage à blanc, levage du solivage, terrasse en mélèze et garde-corps bois-métal.
> Voir les travaux → `/realisations/renovation-d-une-maison-d-habitation-sur-la-commune-de-prelles/`

*Carte — Champcella : terrasse couverte*
> Terrasse couverte avec local technique, abri voiture dans le prolongement du toit, plancher en mélèze de pays.
> Voir les travaux → `/realisations/construction-d-une-terrasse-couverte-a-champcella/`

*Carte — La Roche-de-Rame : balcon en mélèze*
> Un balcon en mélèze porté par des portiques, avec sa balustrade.
> Voir les travaux → `/realisations/creation-d-un-balcon-a-la-roche-de-rame/`

### Section 5 — Le bâti du pays

- **Rôle :** montrer qu'on connaît le terrain, avec des formulations générales et prudentes, sans chiffre inventé.
- **Composant :** bloc texte sur deux colonnes, avec la photo du bardage en vieux bois (fiche n° 19).

*Kicker*
> Le bâti du pays

*H2*
> Maisons de pays, chalets et **vieux bois**

*Texte*
> Entre L'Argentière-la-Bessée et les villages de la Vallouise, le bâti raconte plusieurs époques : maisons de pays en pierre et en bois, granges, chalets des années 1980 comme celui que nous avons rénové à Vallouise, maisons plus récentes. Quand la charpente d'origine peut être gardée, nous la reprenons et la renforçons. Quand elle ne peut plus l'être, nous la refaisons, comme à L'Argentière-la-Bessée.
>
> Ici, l'hiver est long et l'altitude monte vite, des bords de la Durance aux hameaux de Pelvoux, au pied des Écrins. Les toitures doivent porter la neige, et une bonne isolation change le confort d'hiver comme d'été. Aux portes du Parc national des Écrins comme ailleurs, renseignez-vous en mairie sur les règles d'urbanisme avant de modifier un toit ou une façade.
>
> Le réemploi a toute sa place dans ce bâti. Les vieux bois récupérés lors d'une déconstruction peuvent retrouver une place dans une rénovation. C'est le cas du bardage en vieux bois et du garde-corps de réemploi de la maison rénovée à L'Argentière-la-Bessée.

### Section 6 — Nos prestations dans le Pays des Écrins

- **Rôle :** maillage vers toutes les pages prestation.
- **Composant :** cartes de services blanches, icône dans une pastille sauge.

*Kicker*
> Ce que nous faisons

*H2*
> Nos **prestations** en Vallouise et autour

*Cartes (titre, texte, lien)*
> **Rénovation de charpente et combles** — Reprendre, renforcer ou refaire une charpente, ouvrir une lucarne. → `/renovation-charpente-combles/`
>
> **Charpente traditionnelle** — Taille, assemblage à blanc et levage, avec des assemblages chevillés. → `/charpente-bois/`
>
> **Isolation biosourcée** — Chanvre, lin, coton, fibre de bois ou ouate de cellulose, posés par une entreprise RGE. → `/isolation-biosourcee/`
>
> **Isolation de toiture** — Isoler un toit ancien, y compris par le sarking : un isolant continu posé au-dessus des chevrons. → `/isolation-toiture-sarking/`
>
> **Isolation des murs** — L'ITE, ou isolation thermique par l'extérieur, et l'isolation par l'intérieur du bâti ancien. → `/isolation-murs-ite/`
>
> **Extension et surélévation bois** — Gagner un niveau, comme à Pelvoux. → `/extension-surelevation-bois/`
>
> **Maison ossature bois** — Construire neuf en bois, avec des isolants biosourcés. → `/maison-ossature-bois/`
>
> **Escaliers sur mesure** — Quart tournant, balancé ou en bois debout, dessinés pour votre maison. → `/escalier-bois-sur-mesure/`
>
> **Balcons, terrasses et abris** — Balcons, terrasses couvertes, abris voiture et abris de jardin. → `/balcon-terrasse-abri-bois/`

### Section 7 — Bois local et réemploi

- **Rôle :** la différence de 3B, ancrée dans sa commune : le bois du département et le réemploi.
- **Composant :** section plein cadre « forêt » sombre, titre blanc avec les mots en vert sauge, photo du garde-corps en bois de réemploi (fiche n° 19).

*Kicker*
> Bois local et réemploi

*H2*
> Du bois **local**, et du bois qui **reprend vie**

*Texte*
> Notre bois vient des Hautes-Alpes : « principalement du mélèze et du sapin provenant des Hautes-Alpes et sciés par notre partenaire local : la Scierie Savoldelli ». C'est aussi depuis L'Argentière-la-Bessée que 3B Récup', notre initiative dédiée au réemploi des matériaux et à la déconstruction sélective, intervient. Nous déposons la structure bois sur le chantier de déconstruction ; le bois est trié, nettoyé et usiné dans nos ateliers, puis reposé sur nos chantiers. Notre qualification RGE ouvre l'accès aux aides publiques à la rénovation énergétique, sous conditions.

*Boutons*
> Découvrir 3B Récup' → `/3b-recup/`
> Le bois de réemploi → `/3b-recup/bois-de-reemploi/`

### Section 8 — Communes desservies

- **Rôle :** la liste complète des communes, et les liens vers les deux autres secteurs.
- **Composant :** texte et liste en pastilles crème.

*Kicker*
> Où nous intervenons

*H2*
> Tout le **Pays des Écrins**

*Texte*
> Nous intervenons dans les communes du Pays des Écrins, autour de notre base de L'Argentière-la-Bessée :

*Liste (pastilles)*
> L'Argentière-la-Bessée · Vallouise-Pelvoux (Vallouise, Pelvoux) · Saint-Martin-de-Queyrières (dont Prelles) · Champcella · La Roche-de-Rame · Puy-Saint-Vincent · Les Vigneaux · Freissinières

[À VALIDER AVEC JEAN : Puy-Saint-Vincent, Les Vigneaux et Freissinières sont proposés comme communes voisines, sans chantier publié. À garder seulement si Jean y intervient.]

*Texte*
> Plus au nord, nous travaillons à Briançon et dans la vallée de Serre Chevalier. Plus largement, « nous intervenons dans les Hautes-Alpes mais aussi en région PACA et Rhône-Alpes ».

*Liens*
> Charpentier à Briançon → `/charpentier-briancon/`
> Charpentier à Serre Chevalier → `/charpentier-serre-chevalier/`

### Section 9 — FAQ

- **Composant :** FAQ en accordéon dans des cartes blanches. Données structurées FAQPage (voir §2).

*Kicker*
> Questions fréquentes

*H2*
> Vos questions sur un chantier en **Vallouise** et autour

(Questions et réponses : voir §4 ci-dessous.)

### Section 10 — Appel à l'action, coordonnées et plan d'accès

- **Composant :** bandeau vert forêt (formes organiques, grille ronde translucide), puis bloc de coordonnées avec une petite carte centrée sur le 5 rue Saint-Michel. La carte n'est ajoutée qu'une fois la fiche Google revendiquée.

*H2*
> Un projet près de **chez nous** ?

*Texte*
> Chaque projet chez 3B Charpente débute par une étude sur mesure. Nous sommes à L'Argentière-la-Bessée : parlons du vôtre.

*Boutons*
> Demander mon devis → `/contact/`
> Appeler le 06 34 67 31 49 → `tel:+33634673149`

*Bloc coordonnées (identique au caractère près sur tout le site)*
> 3B Charpente
> 5 rue Saint-Michel
> 05120 L'Argentière-la-Bessée
> 06 34 67 31 49
> tardy@3bcharpente.fr

*Horaires*
> [À VALIDER AVEC JEAN : horaires. La maquette indique « lundi au vendredi, 7 h 30 – 17 h », PagesJaunes « vendredi 7 h 30 – 12 h »]

---

## 4. FAQ

**Où se trouve 3B Charpente ?**
> 3B Charpente est installée au 5 rue Saint-Michel, 05120 L'Argentière-la-Bessée, dans les Hautes-Alpes. C'est l'entreprise individuelle de Jean-Michel Tardy, charpentier formé chez les Compagnons du Devoir, créée en 2007. Vous pouvez nous joindre au 06 34 67 31 49 ou par e-mail à tardy@3bcharpente.fr.

**Intervenez-vous à Vallouise et à Pelvoux ?**
> Oui. À Vallouise, nous avons rénové et isolé un chalet des années 1980 et agrandi son balcon en terrasse. À Pelvoux, nous avons réalisé une surélévation et un abri de jardin. Nous intervenons aussi dans les communes voisines du Pays des Écrins, de L'Argentière-la-Bessée à Saint-Martin-de-Queyrières, Champcella et La Roche-de-Rame.

**Pouvez-vous rénover et isoler un chalet ?**
> Oui. À Vallouise, nous avons entièrement rénové et isolé un chalet des années 1980 : 28 cm de laine de chanvre, lin et coton et de fibre de bois dans les murs, 32 cm en toiture. Une partie des façades a reçu un bardage en mélèze, l'autre un enduit sur fibre de bois. Des ouvertures ont été créées ou modifiées, et la terrasse a été agrandie.

**Utilisez-vous du bois de réemploi dans vos rénovations ?**
> Oui. À L'Argentière-la-Bessée, une maison que nous avons rénovée a reçu un bardage en vieux bois et un garde-corps en bois de réemploi. Avec 3B Récup', nous intervenons sur des chantiers de déconstruction ; le bois récupéré est trié, nettoyé et usiné dans nos ateliers, puis réemployé sur nos chantiers de construction et de rénovation.

**Réalisez-vous aussi les petits ouvrages : abri, balcon, terrasse ?**
> Oui. Nous avons créé un abri de jardin à Pelvoux, un abri voiture en charpente traditionnelle à L'Argentière-la-Bessée, un balcon en mélèze à La Roche-de-Rame et une terrasse couverte à Champcella. Petit ou grand, chaque projet commence par une étude sur mesure, puis un devis détaillé, adapté à votre projet.

---

## 5. Liens internes

| Texte du lien | Page visée | Emplacement |
|---|---|---|
| Demander mon devis | `/contact/` | héros, section 10 |
| Voir nos chantiers du secteur | `#chantiers` | héros |
| Voir les travaux (12 fiches) | `/realisations/{slug}/` des fiches n° 14, 11, 19, 01, 12 (si publiée), 22, 23, 03, 21, 20, 02, 04 | sections 3 et 4 |
| Rénovation de charpente et combles | `/renovation-charpente-combles/` | section 6 |
| Charpente traditionnelle | `/charpente-bois/` | section 6 |
| Isolation biosourcée | `/isolation-biosourcee/` | section 6 |
| Isolation de toiture | `/isolation-toiture-sarking/` | section 6 |
| Isolation des murs | `/isolation-murs-ite/` | section 6 |
| Extension et surélévation bois | `/extension-surelevation-bois/` | section 6 |
| Maison ossature bois | `/maison-ossature-bois/` | section 6 |
| Escaliers sur mesure | `/escalier-bois-sur-mesure/` | section 6 |
| Balcons, terrasses et abris | `/balcon-terrasse-abri-bois/` | section 6 |
| Découvrir 3B Récup' | `/3b-recup/` | section 7 |
| Le bois de réemploi | `/3b-recup/bois-de-reemploi/` | section 7 |
| Charpentier à Briançon | `/charpentier-briancon/` | section 8 |
| Charpentier à Serre Chevalier | `/charpentier-serre-chevalier/` | section 8 |

**Liens entrants à prévoir :**

- l'accueil, avec le texte « Nos chantiers à L'Argentière-la-Bessée et en Vallouise » ;
- `/a-propos/` (« installés à L'Argentière-la-Bessée ») ;
- le pied de page ;
- les 12 fiches du secteur ;
- `/contact/`.

---

## 6. Photos à utiliser

- **Héros :** fiche n° 14 (`/galeries/refection-d-une-charpente-a-l-argentiere-la-bessee`), photo « lucarne en cours de levage » ou « bardage posé ».
- **Vignettes des sections 3 et 4 :** la photo du héros de chaque fiche (★ dans la fiche 16).
- **Section 5 :** fiche n° 19 (`/galeries/renovation-d-une-maison-d-habitation-a-l-argentiere-la-bessee`), photo « Bardage vieux bois ».
- **Section 7 :** fiche n° 19, photo « Garde corps en bois de réemploi ». Une photo d'ambiance forêt en fond est possible, signalée comme telle (brief §4).

**Photos manquantes à demander à Jean :**

- l'atelier de L'Argentière-la-Bessée (machines, stock de vieux bois, taille d'une pièce). C'est la meilleure photo possible pour cette page et pour 3B Récup' ;
- la voûte de L'Argentière-la-Bessée (fiche n° 12) ;
- un chantier à Puy-Saint-Vincent, aux Vigneaux ou à Freissinières, s'il en existe.

---

## 7. Points à valider avec Jean

1. **Communes :**
   - Puy-Saint-Vincent, Les Vigneaux et Freissinières : Jean y intervient-il ?
   - Faut-il citer des hameaux (Ailefroide, hameaux de Vallouise et de Pelvoux…) ?
2. **Vallouise-Pelvoux :** depuis 2017, Vallouise et Pelvoux forment la commune de Vallouise-Pelvoux. Les gens cherchent encore « Vallouise » et « Pelvoux » : garder les deux noms, avec la commune nouvelle entre parenthèses. Confirmer que cela convient.
3. **Prelles :** village de Saint-Martin-de-Queyrières. Confirmer cette mention.
4. **Atelier :** est-il au 5 rue Saint-Michel ou ailleurs dans la commune ? La page dit « 3B Charpente est installée au 5 rue Saint-Michel » et « nos ateliers ». Si l'atelier est à une autre adresse, le dire sans créer de seconde adresse publique.
5. **Voûte (fiche n° 12) :** photos disponibles ? Sinon, la carte de la section 3 est retirée.
6. **Années** des 12 chantiers. Elles permettraient d'écrire par exemple « depuis 2007, plus de dix chantiers autour de l'atelier ». Le chiffre « +100 projets » de la maquette n'est pas repris tant qu'il n'est pas validé (brief §1).
7. **Horaires**, **coordonnées GPS**, **fiche Google** à revendiquer : mêmes points que la page 18.
8. **Badge « Entreprise RGE » :** vérifier le SIRET actif (00016 dans les mentions légales, 00024 dans l'annuaire RGE).
9. **Plateforme de réemploi de L'Argentière-la-Bessée (La Miraille) :** elle n'est pas citée sur cette page. Elle pourrait l'être comme acteur local du réemploi, jamais comme partenaire sans accord (brief §1). À décider avec Jean.
