# Fiche 09 : Escaliers bois sur mesure

`/escalier-bois-sur-mesure/` · Phase 1 · Statut : rédigée, à relire et valider par Jean

**Conventions.** Le texte à coller sur le site est en citation (lignes qui commencent par `>`). Dans les titres (H1, H2), les mots entre `**` passent en vert (#336233 sur fond clair, sauge #A3D2A3 sur fond sombre) ; dans les paragraphes, `**` veut simplement dire gras. Les espaces insécables sont déjà en place. Tout ce qui est entre `[À VALIDER AVEC JEAN : …]` est à confirmer ou à supprimer avant publication. Sources : `../00-brief.md` et `../realisations-source.md`.

---

## 1. Carte d'identité

- **Adresse :** `/escalier-bois-sur-mesure/` (canonique : `https://3bcharpente.fr/escalier-bois-sur-mesure/`).
- **Objectif de la page :**
  - porter la partie « escaliers » du service validé « Création de balcons et escaliers » ;
  - capter une partie des gros volumes « escalier quart tournant » et « escalier bois » avec une section dédiée et des repères utiles (loi de Blondel, balancement) ;
  - convertir sur « escalier bois sur mesure » dans les Hautes-Alpes, avec la méthode publiée (cotes, dessin, validation, atelier, montage) ;
  - faire demander une prise de cotes.
- **Visiteurs visés :**
  - propriétaires qui rénovent une maison ou aménagent des combles et doivent créer ou remplacer un escalier ;
  - propriétaires de maisons anciennes où un escalier standard ne rentre pas ;
  - architectes et maîtres d'œuvre qui cherchent un escalier bois sur mesure.
- **Mots-clés :**
  - principal : escalier bois sur mesure (590/mois), le plus proche de l'offre de 3B ;
  - secondaires : escalier quart tournant (14 800/mois), escalier bois (9 900/mois) ;
  - associés (volumes non relevés) : escalier mélèze, escalier lamellé-collé, escalier balancé, escalier bois debout, escalier frêne, escalier sur mesure Briançon.
- **Intention de recherche :**
  - « escalier quart tournant » et « escalier bois » : surtout informatives ou d'achat en kit au niveau national. On ne gagnera pas toute la requête ; on vise les variantes longues (« escalier quart tournant sur mesure », « escalier quart tournant mélèze ») et les extraits « définition » ;
  - « escalier bois sur mesure » : transactionnelle, à convertir.
- **Pages liées :**
  - prestations proches : `/renovation-charpente-combles/`, `/balcon-terrasse-abri-bois/`, `/charpente-bois/` ;
  - filière : `/3b-recup/`, `/3b-recup/bois-de-reemploi/` ;
  - preuves : 5 fiches réalisations (section 3.9) ;
  - conversion : `/contact/`.

---

## 2. SEO

- **Balise title :** `Escalier bois sur mesure, Hautes-Alpes | 3B Charpente`
- **Variante testable plus tard (sans lieu) :** `Escalier bois quart tournant sur mesure | 3B Charpente`, si la page se positionne bien localement et qu'on veut viser « quart tournant » au niveau national.
- **Meta description :** `Escalier bois sur mesure dans les Hautes-Alpes : quart tournant en mélèze lamellé-collé, frêne, bois debout. Dessiné et taillé dans notre atelier. Devis.`
- **Contrôles (mesurés) :** title 53 caractères · meta 153 caractères · corps de page 1098 mots (section 3, hors FAQ) · En bref 56 mots · FAQ 6 questions, 49 à 60 mots par réponse.
- **H1 (unique) :** Escalier bois **sur mesure** dans les **Hautes-Alpes**
- **Fil d'Ariane :** Accueil › Escaliers bois sur mesure
- **Données structurées :** Service, FAQPage et BreadcrumbList, en JSON-LD. Le LocalBusiness est déclaré une seule fois pour tout le site ; ici, on y renvoie par son `@id`.

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://3bcharpente.fr/escalier-bois-sur-mesure/#service",
  "name": "Escalier bois sur mesure",
  "serviceType": "Fabrication et pose d'escaliers en bois",
  "description": "Escaliers bois sur mesure dans les Hautes-Alpes : quart tournant, balancé, encloisonné, en mélèze lamellé-collé, frêne ou bois debout. Prise de cotes, dessin, validation, traçage, taille et assemblage en atelier, puis montage sur place.",
  "url": "https://3bcharpente.fr/escalier-bois-sur-mesure/",
  "image": "https://3bcharpente.fr/images/escalier-quart-tournant-meleze-lamelle-colle.webp",
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
    { "@type": "City", "name": "La Salle-les-Alpes" }
  ]
}
```

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://3bcharpente.fr/escalier-bois-sur-mesure/#faq",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Quel est le prix d'un escalier quart tournant en bois sur mesure ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Il dépend de l'essence (mélèze massif ou lamellé-collé, frêne…), du nombre de marches, de la présence de contremarches, du garde-corps, des finitions et de la configuration de la trémie. Un prix catalogue n'aurait pas de sens pour un escalier dessiné pour votre maison. Après la prise de cotes, nous vous proposons un dessin et un devis détaillé."
      }
    },
    {
      "@type": "Question",
      "name": "Combien de temps pour fabriquer et poser un escalier sur mesure ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Le délai dépend du projet ; nous vous donnons un calendrier estimatif lors de notre première rencontre. L'essentiel du travail se fait à l'atelier : traçage, taille et assemblage. Sur place, le montage est court : pour notre escalier quart tournant en mélèze lamellé-collé, il s'est fait en deux jours, finitions comprises."
      }
    },
    {
      "@type": "Question",
      "name": "Quel bois choisir pour un escalier intérieur ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Il faut un bois qui résiste à l'usure et reste stable. Nous travaillons beaucoup le mélèze, essence de montagne, en massif ou en lamellé-collé, qui bouge moins. Le frêne, bois dur et clair, convient à un style plus contemporain, par exemple avec de l'aluminium. Le bois debout offre un rendu unique. Nous privilégions les bois locaux des Hautes-Alpes."
      }
    },
    {
      "@type": "Question",
      "name": "Escalier quart tournant ou escalier droit : lequel prend le moins de place ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "À hauteur égale, le quart tournant prend moins de longueur au sol, car il tourne à 90 degrés dans un angle. L'escalier droit est plus simple à fabriquer et à monter, mais il demande une grande longueur libre. Dans une maison de montagne ou pour monter aux combles, le quart tournant est souvent le bon compromis entre confort et encombrement."
      }
    },
    {
      "@type": "Question",
      "name": "Pouvez-vous remplacer un vieil escalier dans une maison ancienne ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oui. Dans un bâti ancien, nous avons démoli l'ancien escalier pour en construire un neuf en bois debout, avec des caissons en panneau trois plis. Dans une maison ancienne, rien n'est d'équerre : c'est tout l'intérêt d'un escalier tracé d'après les cotes réelles. Si l'ouverture dans le plancher doit être agrandie, la trémie est reprise avec un chevêtre."
      }
    },
    {
      "@type": "Question",
      "name": "Faites-vous aussi les garde-corps d'escalier et de balcon ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oui. Nous avons posé un garde-corps en bois de réemploi dans une maison rénovée à L'Argentière-la-Bessée, un garde-corps bois-métal à Prelles et une balustrade en mélèze sur un balcon à La Roche-de-Rame. Le garde-corps se dessine en même temps que l'escalier, pour un ensemble cohérent. Pour l'extérieur, nous utilisons volontiers le mélèze, qui tient bien aux intempéries."
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
    { "@type": "ListItem", "position": 2, "name": "Escaliers bois sur mesure", "item": "https://3bcharpente.fr/escalier-bois-sur-mesure/" }
  ]
}
```

- **Textes alternatifs des images clés :**

| Fichier | Texte alternatif | Photo source |
|---|---|---|
| `escalier-quart-tournant-meleze-lamelle-colle.webp` | Escalier quart tournant en mélèze lamellé-collé dessiné, taillé et monté par 3B Charpente | `/galeries/escalier-1-4-tournant-en-meleze-lamelle-colle`, « montage terminé » |
| `escalier-quart-tournant-balancement-marches.webp` | Balancement des marches d'un escalier quart tournant en mélèze lamellé-collé | même dossier, « balancement des marches » |
| `escalier-quart-tournant-combles-renoves.webp` | Escalier quart tournant en mélèze menant aux combles rénovés par 3B Charpente | même dossier, « combles rénovés par nos soins » |
| `escalier-bois-debout-bati-ancien.webp` | Escalier en bois debout construit par 3B Charpente dans un bâti ancien | `/galeries/creation-d-un-escalier-en-bois-debout-dans-un-bati-ancien`, « escalier terminé » |
| `escalier-frene-aluminium.webp` | Escalier en frêne et aluminium fabriqué par 3B Charpente | `/galeries/fabrication-d-un-escalier`, « frêne et aluminium » |
| `escalier-quart-tournant-ancienne-forge-la-salle-les-alpes.webp` | Escalier quart tournant dans une ancienne forge réhabilitée à La Salle-les-Alpes (Hautes-Alpes) | `/galeries/rehabilitation-d-une-ancienne-forge-a-la-salle-les-alpes`, « Escalier quart tournant » |
| `escalier-balance-maison-argentiere-la-bessee.webp` | Escalier balancé dans une maison rénovée par 3B Charpente à L'Argentière-la-Bessée | `/galeries/renovation-d-une-maison-d-habitation-a-l-argentiere-la-bessee`, « Escalier balancé » |

---

## 3. Sections, dans l'ordre

### 3.1 Fil d'Ariane

- **Rôle :** situer la page, alimenter le BreadcrumbList.
- **Composant :** ligne de texte discrète au-dessus du héros (à ajouter à la maquette).

> Accueil › Escaliers bois sur mesure

### 3.2 Héros

- **Rôle :** sujet + lieu, promesse du service validé, deux preuves.
- **Composant Framer :** héros (titre en deux couleurs, texte avec mots forts en gras, bouton plein + bouton contour, deux preuves à pastille sauge).
- **Photo :** « montage terminé » (escalier 1/4 tournant en mélèze lamellé-collé). En vignette : « frêne et aluminium ».
- **Texte validé :** « … nos balcons et escaliers sur mesure, conçus pour s'intégrer parfaitement à l'environnement de montagne et à l'âme de votre habitation ». Repris sans « parfaitement » (adjectif non prouvable) ; ajout des types d'escaliers et du travail en atelier.

> _Kicker :_ Escaliers bois sur mesure
>
> _H1 :_ Escalier bois **sur mesure** dans les **Hautes-Alpes**
>
> _Texte :_ Des escaliers **sur mesure**, conçus pour s'intégrer à l'environnement de montagne et à **l'âme de votre maison**. Quart tournant, balancé ou encloisonné, nous les dessinons après la prise de cotes, puis les traçons, taillons et assemblons **dans notre atelier**.
>
> _Bouton plein :_ Demander mon devis → `/contact/`
>
> _Bouton contour :_ Voir nos escaliers → `#realisations`
>
> _Preuve 1 :_ Depuis 2007
>
> _Preuve 2 :_ Taillés dans notre atelier
>
> _Légende photo :_ Escalier quart tournant en mélèze lamellé-collé, montage terminé.

### 3.3 En bref

- **Rôle :** réponse directe, citable.
- **Composant :** carte blanche à coins arrondis avec une pastille sauge, sous le héros.

> _Titre de la carte :_ En bref
>
> _Texte :_ 3B Charpente, charpentier à L'Argentière-la-Bessée depuis 2007, dessine, taille et pose des escaliers bois sur mesure dans les Hautes-Alpes : quart tournant, balancé, encloisonné. Après la prise de cotes, nous dessinons l'escalier et proposons une esthétique ; une fois validé, il est tracé, taillé et assemblé dans notre atelier. Mélèze lamellé-collé, frêne, bois debout : chaque escalier est unique.

### 3.4 Notre méthode

- **Rôle :** liste d'étapes citable, fondée sur le texte publié de la réalisation « Escalier 1/4 tournant en mélèze lamellé collé ».
- **Composant Framer :** onglets numérotés de 01 à 05 (composant de la méthode 3B Récup'), une photo par onglet.
- **Photos :** 01 « Lieu en attente de l'escalier » · 04 « début de montage » · 05 « montage terminé ».
- **Texte publié :** « Une fois les cotes prises, nous dessinons l'escalier et proposons une esthétique aux client(e)s. Une fois validé, nous traçons, taillons et assemblons l'escalier dans notre atelier. Le montage se fait en deux jours, finitions comprises. » Repris presque mot pour mot ; la durée de deux jours est rattachée à cet escalier précis, pas présentée comme une règle.

> _Kicker :_ Notre méthode
>
> _H2 :_ Un escalier **dessiné pour votre maison**, en cinq étapes
>
> _01, titre :_ Prise de cotes
>
> _01, texte :_ Nous venons mesurer la trémie, c'est-à-dire l'ouverture dans le plancher, la hauteur à monter et la place disponible.
>
> _02, titre :_ Dessin
>
> _02, texte :_ Une fois les cotes prises, nous dessinons l'escalier et vous proposons une esthétique : essence, forme des marches, contremarches ou non, garde-corps.
>
> _03, titre :_ Validation
>
> _03, texte :_ Vous validez le dessin. Rien n'est taillé avant votre accord.
>
> _04, titre :_ Traçage, taille et assemblage à l'atelier
>
> _04, texte :_ Une fois le dessin validé, nous traçons, taillons et assemblons l'escalier dans notre atelier. Le tracé d'un escalier tournant est un exercice classique de l'art du trait, enseigné chez les Compagnons du Devoir, où s'est formé notre fondateur.
>
> _05, titre :_ Montage
>
> _05, texte :_ Sur place, il ne reste que le montage. Pour notre escalier quart tournant en mélèze lamellé-collé, il s'est fait en deux jours, finitions comprises.

### 3.5 L'escalier quart tournant

- **Rôle :** capter « escalier quart tournant » (14 800/mois) par une définition claire et un exemple réel. Ancre `#quart-tournant`.
- **Composant Framer :** bloc deux colonnes avec trois photos en collage (« départ d'escalier terminé », « balancement des marches », « seconde volée »).

> _Kicker :_ Quart tournant
>
> _H2 :_ L'escalier **quart tournant**, pour tourner sans perdre de place
>
> _Texte :_ Un escalier quart tournant change de direction à 90 degrés, soit un quart de tour. Il se loge dans un angle et prend moins de longueur qu'un escalier droit. C'est souvent la solution pour monter aux combles ou relier deux niveaux dans une maison ancienne.
>
> _Texte :_ Le virage se fait avec un palier ou avec des marches balancées. Balancer les marches, c'est faire varier leur largeur dans le tournant pour que le pas reste régulier sur la ligne de foulée, le chemin naturel du pied.
>
> _Texte :_ Dans une maison que nous avons rénovée, l'escalier quart tournant en mélèze lamellé-collé mène aux combles et sert aussi de cloison rampante à la salle de bains. Ses marches et contremarches sont posées sur des crémaillères, des limons découpés en dents de scie. À La Salle-les-Alpes, l'ancienne forge réhabilitée a elle aussi son escalier quart tournant.
>
> _Légende photo 1 :_ Départ d'escalier terminé.
>
> _Légende photo 2 :_ Balancement des marches dans le quart tournant.
>
> _Légende photo 3 :_ Seconde volée, vers les combles.

### 3.6 Les règles d'un escalier confortable

- **Rôle :** contenu utile et citable (repères généraux du métier, pas d'engagement propre à 3B).
- **Composant Framer :** quatre cartes blanches avec une icône dans une pastille sauge, sur fond de section clair.

> _Kicker :_ Bien dimensionner
>
> _H2 :_ Les règles d'un **escalier confortable**
>
> _Texte :_ Un escalier se calcule avant de se dessiner. Quelques repères, valables pour tout escalier :
>
> _Carte 1 :_ **La loi de Blondel.** Deux hauteurs de marche plus un giron (la profondeur de marche, où se pose le pied) doivent faire entre 60 et 64 cm environ : la longueur d'un pas confortable.
>
> _Carte 2 :_ **La régularité.** Toutes les marches d'une volée ont la même hauteur. Le pied s'y habitue et ne trébuche pas.
>
> _Carte 3 :_ **L'échappée.** La hauteur libre au-dessus des marches doit laisser passer la tête sans se baisser, surtout sous un rampant de toit.
>
> _Carte 4 :_ **La sécurité.** Main courante et garde-corps protègent les côtés ouverts.
>
> _Texte :_ Ces repères guident le dessin, avant toute taille.

### 3.7 Les bois

- **Rôle :** essences réelles des chantiers, lien bois local et réemploi ; définitions courtes.
- **Composant Framer :** section fond crème, liste de cartes « matière » avec une vignette photo chacune.

> _Kicker :_ Les bois
>
> _H2 :_ Mélèze, frêne, **bois debout** : le bois fait l'escalier
>
> _Texte :_ Nous travaillons principalement du mélèze et du sapin provenant des Hautes-Alpes, sciés par notre partenaire local, la Scierie Savoldelli : la même logique de matériaux locaux et sains que pour nos charpentes et nos isolants biosourcés. Pour un escalier, l'essence se choisit au dessin, selon l'usage et le style de la maison.
>
> _Matière 1 :_ **Mélèze lamellé-collé.** Des lamelles de mélèze collées entre elles. Ce bois reconstitué bouge moins qu'une pièce massive et se prête aux grandes pièces comme les crémaillères.
>
> _Matière 2 :_ **Frêne et aluminium.** Un bois dur et clair, associé au métal pour un escalier au style plus contemporain.
>
> _Matière 3 :_ **Bois debout.** Du bois coupé en travers du fil, qui montre ses cernes de croissance comme un billot. Il résiste bien à l'usure et donne à l'escalier un dessin unique.
>
> _Matière 4 :_ **Panneau trois plis.** Trois couches de bois croisées et collées, très stables, utilisées pour former des caissons.
>
> _Texte :_ Pour le garde-corps, le bois de réemploi a aussi sa place : nous en avons posé un dans une maison rénovée à L'Argentière-la-Bessée.

### 3.8 Dans une maison ancienne

- **Rôle :** répondre au besoin « remplacer un escalier dans une vieille maison », avec deux chantiers réels.
- **Composant Framer :** bloc deux colonnes, photos « ancien escalier démoli » et « escalier terminé » en avant / après.

> _Kicker :_ Maisons anciennes
>
> _H2 :_ Remplacer un escalier **dans un bâti ancien**
>
> _Texte :_ Dans une maison ancienne, rien n'est d'équerre : murs irréguliers, planchers qui ont bougé, trémie étroite. Un escalier standard s'y adapte mal ; un escalier sur mesure, tracé d'après les cotes réelles, s'y loge.
>
> _Texte :_ Dans un bâti ancien, nous avons démoli l'ancien escalier pour en construire un en bois debout. Les étapes : caissons en panneau trois plis, pose du bois debout, contremarches, puis escalier terminé. [À VALIDER AVEC JEAN : commune du chantier, essence du bois debout, et où il est posé (marches, contremarches ?).]
>
> _Texte :_ À L'Argentière-la-Bessée, une maison rénovée a reçu un escalier balancé et un garde-corps en bois de réemploi. À La Salle-les-Alpes, l'ancienne forge compte aussi un escalier encloisonné, c'est-à-dire pris entre deux murs ou cloisons.
>
> _Légende photo 1 :_ L'ancien escalier démoli.
>
> _Légende photo 2 :_ L'escalier en bois debout terminé.

### 3.9 Réalisations

- **Rôle :** cinq preuves (les quatre chantiers d'escaliers et l'escalier balancé de L'Argentière-la-Bessée). Ancre `#realisations`.
- **Composant Framer :** cartes de réalisations (étiquette « 3B Charpente », lien « Voir les travaux → »).

> _Kicker :_ Nos escaliers
>
> _H2 :_ Des escaliers **taillés dans notre atelier**
>
> _Carte 1, titre :_ Escalier quart tournant en mélèze lamellé-collé
>
> _Carte 1, texte :_ Marches et contremarches sur crémaillères, accès aux combles, montage en deux jours, finitions comprises.
>
> _Carte 1, lien :_ Voir les travaux → `/realisations/escalier-1-4-tournant-en-meleze-lamelle-colle/`
>
> _Carte 2, titre :_ Escalier en bois debout dans un bâti ancien
>
> _Carte 2, texte :_ Ancien escalier démoli, caissons en panneau trois plis, bois debout et contremarches.
>
> _Carte 2, lien :_ Voir les travaux → `/realisations/creation-d-un-escalier-en-bois-debout-dans-un-bati-ancien/`
>
> _Carte 3, titre :_ Escalier en frêne et aluminium
>
> _Carte 3, texte :_ Un escalier en frêne et aluminium, fabriqué puis livré sur le chantier.
>
> _Carte 3, lien :_ Voir les travaux → `/realisations/fabrication-d-un-escalier/`
>
> _Carte 4, titre :_ Ancienne forge à La Salle-les-Alpes
>
> _Carte 4, texte :_ Escalier quart tournant et escalier encloisonné dans un bâtiment réhabilité de Serre Chevalier.
>
> _Carte 4, lien :_ Voir les travaux → `/realisations/rehabilitation-d-une-ancienne-forge-a-la-salle-les-alpes/`
>
> _Carte 5, titre :_ Maison rénovée à L'Argentière-la-Bessée
>
> _Carte 5, texte :_ Escalier balancé, garde-corps en bois de réemploi et bardage vieux bois.
>
> _Carte 5, lien :_ Voir les travaux → `/realisations/renovation-d-une-maison-d-habitation-a-l-argentiere-la-bessee/`

### 3.10 3B Récup'

- **Rôle :** relier l'escalier au réemploi (preuve : garde-corps en bois de réemploi).
- **Composant Framer :** bandeau vert forêt, formes organiques, mots en sauge.

> _Kicker :_ 3B Récup'
>
> _H2 :_ Un garde-corps **en bois de réemploi**
>
> _Texte :_ Le bois de réemploi trouve aussi sa place à l'intérieur. Avec 3B Récup', nous déposons charpentes, planchers et bardages sur des chantiers de déconstruction, puis trions, nettoyons et usinons ce bois dans notre atelier. À L'Argentière-la-Bessée, il est devenu un garde-corps et un bardage vieux bois.
>
> _Bouton plein (sauge) :_ Découvrir 3B Récup' → `/3b-recup/`
>
> _Lien secondaire :_ Le bois de réemploi → `/3b-recup/bois-de-reemploi/`

### 3.11 Prestations liées

- **Rôle :** maillage vers trois prestations proches.
- **Composant Framer :** trois petites cartes de services.

> _H2 :_ Pour **compléter** votre projet
>
> _Carte 1 :_ Rénovation de charpente et combles → `/renovation-charpente-combles/`
>
> _Carte 2 :_ Balcons, terrasses et garde-corps bois → `/balcon-terrasse-abri-bois/`
>
> _Carte 3 :_ Charpente bois traditionnelle → `/charpente-bois/`

### 3.12 FAQ

- **Rôle :** questions telles qu'on les tape ; FAQPage.
- **Composant Framer :** accordéon dans des cartes blanches. Texte complet en section 4.

> _Kicker :_ Questions fréquentes
>
> _H2 :_ Vos questions sur **les escaliers bois**

### 3.13 Appel à l'action final

- **Rôle :** conversion.
- **Composant Framer :** bandeau vert forêt d'appel à l'action.
- **Texte validé :** « … chaque projet chez 3B Charpente débute par une étude sur mesure » et FAQ « Devis ».

> _H2 :_ Un escalier **à dessiner** ?
>
> _Texte :_ Chaque projet chez 3B Charpente débute par une étude sur mesure. Nous venons prendre les cotes, nous dessinons l'escalier avec vous et vous proposons un devis détaillé.
>
> _Bouton plein :_ Demander mon devis → `/contact/`
>
> _Bouton contour :_ Appeler le 06 34 67 31 49 → `tel:+33634673149`
>
> _Ligne d'adresse :_ 3B Charpente, 5 rue Saint-Michel, 05120 L'Argentière-la-Bessée.

---

## 4. FAQ

### Q1. Quel est le prix d'un escalier quart tournant en bois sur mesure ?

> Il dépend de l'essence (mélèze massif ou lamellé-collé, frêne…), du nombre de marches, de la présence de contremarches, du garde-corps, des finitions et de la configuration de la trémie. Un prix catalogue n'aurait pas de sens pour un escalier dessiné pour votre maison. Après la prise de cotes, nous vous proposons un dessin et un devis détaillé.

### Q2. Combien de temps pour fabriquer et poser un escalier sur mesure ?

> Le délai dépend du projet ; nous vous donnons un calendrier estimatif lors de notre première rencontre. L'essentiel du travail se fait à l'atelier : traçage, taille et assemblage. Sur place, le montage est court : pour notre escalier quart tournant en mélèze lamellé-collé, il s'est fait en deux jours, finitions comprises.

### Q3. Quel bois choisir pour un escalier intérieur ?

> Il faut un bois qui résiste à l'usure et reste stable. Nous travaillons beaucoup le mélèze, essence de montagne, en massif ou en lamellé-collé, qui bouge moins. Le frêne, bois dur et clair, convient à un style plus contemporain, par exemple avec de l'aluminium. Le bois debout offre un rendu unique. Nous privilégions les bois locaux des Hautes-Alpes.

### Q4. Escalier quart tournant ou escalier droit : lequel prend le moins de place ?

> À hauteur égale, le quart tournant prend moins de longueur au sol, car il tourne à 90 degrés dans un angle. L'escalier droit est plus simple à fabriquer et à monter, mais il demande une grande longueur libre. Dans une maison de montagne ou pour monter aux combles, le quart tournant est souvent le bon compromis entre confort et encombrement.

### Q5. Pouvez-vous remplacer un vieil escalier dans une maison ancienne ?

> Oui. Dans un bâti ancien, nous avons démoli l'ancien escalier pour en construire un neuf en bois debout, avec des caissons en panneau trois plis. Dans une maison ancienne, rien n'est d'équerre : c'est tout l'intérêt d'un escalier tracé d'après les cotes réelles. Si l'ouverture dans le plancher doit être agrandie, la trémie est reprise avec un chevêtre.

### Q6. Faites-vous aussi les garde-corps d'escalier et de balcon ?

> Oui. Nous avons posé un garde-corps en bois de réemploi dans une maison rénovée à L'Argentière-la-Bessée, un garde-corps bois-métal à Prelles et une balustrade en mélèze sur un balcon à La Roche-de-Rame. Le garde-corps se dessine en même temps que l'escalier, pour un ensemble cohérent. Pour l'extérieur, nous utilisons volontiers le mélèze, qui tient bien aux intempéries.

---

## 5. Liens internes

| Texte du lien | Page visée | Emplacement |
|---|---|---|
| Demander mon devis | `/contact/` | héros, appel à l'action final |
| Voir les travaux (×5) | 5 fiches `/realisations/…/` | section 3.9 |
| Découvrir 3B Récup' | `/3b-recup/` | bandeau 3.10 |
| Le bois de réemploi | `/3b-recup/bois-de-reemploi/` | bandeau 3.10 |
| Rénovation de charpente et combles | `/renovation-charpente-combles/` | prestations liées ; aussi sur « monter aux combles » (section 3.5) |
| Balcons, terrasses et garde-corps bois | `/balcon-terrasse-abri-bois/` | prestations liées, FAQ Q6 |
| Charpente bois traditionnelle | `/charpente-bois/` | prestations liées |
| chevêtre (FAQ Q5, à lier) | `/renovation-charpente-combles/#lucarnes` | FAQ |
| La Salle-les-Alpes (section 3.5, à lier) | `/charpentier-serre-chevalier/` | section 3.5 |

**Liens entrants à prévoir :** depuis l'accueil, depuis `/renovation-charpente-combles/` (section « Plancher et escalier »), depuis `/balcon-terrasse-abri-bois/`, et depuis les fiches réalisations 06, 08, 09, 16 et 19.

---

## 6. Photos

**À utiliser (préfixe `https://3bcharpente.fr`) :**

- `/galeries/escalier-1-4-tournant-en-meleze-lamelle-colle` (7 photos, séquence complète) : « Lieu en attente de l'escalier », « début de montage », « départ d'escalier terminé », « balancement des marches », « seconde volée », « combles rénovés par nos soins », « montage terminé » (héros).
- `/galeries/creation-d-un-escalier-en-bois-debout-dans-un-bati-ancien` (6 photos) : « ancien escalier démoli », « caisson en panneau 3plis », « caissons terminés », « bois debout en cours de pose », « contre marches », « escalier terminé ».
- `/galeries/fabrication-d-un-escalier` : « arrivée de l'escalier », « frêne et aluminium ».
- `/galeries/rehabilitation-d-une-ancienne-forge-a-la-salle-les-alpes` : « Escalier quart tournant », « Escalier encloisonné ».
- `/galeries/renovation-d-une-maison-d-habitation-a-l-argentiere-la-bessee` : « Escalier balancé », « Garde corps en bois de réemploi ».

**À demander à Jean :**

- un escalier en cours de taille ou d'assemblage **à l'atelier** (preuve de l'étape 04) ;
- un dessin d'escalier (plan ou perspective) remis à un client, avec son accord, pour illustrer l'étape 02 ;
- des gros plans : marche en bois debout, assemblage marche-crémaillère, main courante ;
- un escalier extérieur, s'il en existe un réalisé par 3B (par exemple l'escalier d'accès à la terrasse du chalet de Vallouise).

---

## 7. Points à valider avec Jean

1. **Escalier 1/4 tournant :** commune du chantier, pour l'afficher sur la carte et dans le texte alternatif. La durée « deux jours, finitions comprises » est citée pour cet escalier uniquement.
2. **Escalier en bois debout :** commune, essence, et emplacement exact du bois debout (marches ? contremarches ?), placeholder section 3.8.
3. **Escalier frêne et aluminium :** commune, et qui a fait la partie aluminium (3B ou un métallier partenaire) ?
4. **Escalier d'accès à la terrasse du chalet de Vallouise :** réalisé par 3B ? Si oui, on peut ajouter « escaliers extérieurs » à la page et à la FAQ Q6.
5. **Finitions :** quelles finitions sont proposées (huile, vernis, brut) ? Utile pour la FAQ Q3.
6. **Délai type à l'atelier :** à ne publier que si Jean le souhaite ; la FAQ Q2 renvoie au calendrier estimatif.
7. **Normes garde-corps :** 3B dimensionne-t-il ses garde-corps selon la norme française en vigueur ? Si oui, on peut l'écrire (aujourd'hui la page reste générale).
