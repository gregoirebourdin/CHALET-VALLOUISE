# 16 — Fiches réalisations : `/realisations/{slug}/` (24 pages)

Ce document couvre les 24 pages de chantier du nouveau site. La partie A donne le gabarit commun. La partie C donne, pour chaque chantier, tout ce qu'il faut pour monter la page.

Sources : `00-brief.md` (§1, §5, §6, §8, §9) et `realisations-source.md`. Chaque phrase s'appuie sur le titre, le texte publié ou les légendes des photos du site actuel. Les définitions de termes de métier (ferme, trait de Jupiter, lucarne…) sont des explications générales. Ce ne sont pas des faits sur le chantier.

**Conventions**

- Le texte en bloc de citation (`>`) est le texte final, prêt à coller.
- Dans les titres, les mots entre `**` passent en vert accent (#336233).
- `[À VALIDER AVEC JEAN : …]` est un champ visible en préproduction. Avant la mise en ligne, il est rempli ou la ligne est masquée. Il n'est jamais publié tel quel.
- Les espaces insécables sont déjà saisies dans ce fichier (avant « : ; ? ! » et dans les guillemets).

---

## Partie A — Gabarit commun

### A1. Carte d'identité (commune aux 24 pages)

- **Adresse :** `/realisations/{slug}/`. Le slug reprend l'adresse actuelle de la galerie (brief §7 et §8).
- **Objectif de la page :**
  - prouver le savoir-faire par des chantiers réels, avec la commune ;
  - capter la longue traîne « ouvrage + commune » ;
  - fournir des preuves aux pages prestation et aux pages secteur ;
  - donner aux IA des faits courts et localisés.
- **Visiteurs visés :**
  - particuliers qui comparent des charpentiers et regardent d'abord les photos ;
  - visiteurs qui arrivent par Google Images ou par une recherche « ouvrage + commune » ;
  - architectes et maîtres d'œuvre qui vérifient les références.
- **Mots-clés :** longue traîne « {ouvrage} {commune} », par exemple « abri voiture l'argentière-la-bessée », « rénovation copropriété briançon », « surélévation ossature bois briançon », « escalier quart tournant mélèze ». Volumes trop faibles pour être mesurés. Preuve que ces pages comptent : la galerie « réfection d'une charpente » arrive déjà 15e sur « charpentier l'argentière-la-bessée » (brief §2).
- **Intention de recherche :** réassurance (« ont-ils déjà fait ce que je veux, près de chez moi ? »), puis demande de devis.
- **Pages liées :** la page prestation principale, la page secteur, `/realisations/`, trois réalisations proches, `/contact/`, et `/3b-recup/` quand le chantier montre du réemploi.

### A2. Sections dans l'ordre

#### Section 1 — Héros photo

- **Rôle :** montrer le résultat tout de suite, et dire quoi et où.
- **Composant de la maquette :** héros à titre deux couleurs et deux boutons, en version photo plein cadre. On y pose l'étiquette « 3B Charpente » des cartes de réalisations.

*Fil d'Ariane*
> Accueil › Réalisations › {H1 court}

*Étiquettes (pastilles sauge)*
> {Commune} · {Prestation} · {Essence ou matériau, seulement s'il est montré}

*H1*
> {H1 de la fiche, la commune en vert}

*Boutons*
> Demander mon devis → `/contact/` (bouton plein vert)
> Toutes nos réalisations → `/realisations/` (bouton contour)

#### Section 2 — Le projet

- **Rôle :** dire en 40 à 70 mots ce qui a été fait, où et avec quoi. Des phrases autonomes, que les IA peuvent citer.
- **Composant :** texte à gauche ; à droite, une carte blanche à coins arrondis « Fiche technique ».

*Kicker*
> Le projet

*H2*
> Le projet à **{Commune}**

Sans commune connue : « Le **projet** ».

*Texte*
> {texte « Le projet » de la fiche}

*Fiche technique (carte blanche)*
> - Commune : {Commune} (Hautes-Alpes)
> - Prestation : {Prestation}
> - Année : {année}
> - Durée : {durée}
> - Surface : {surface}
> - Contexte : {contexte du client}
> - Architecte : {architecte éventuel}

Une ligne dont la valeur n'est pas validée est masquée à la mise en ligne.

#### Section 3 — Ce que nous avons fait

- **Rôle :** la liste des étapes, tirée des légendes des photos. Google et les IA reprennent volontiers les listes d'étapes.
- **Composant :** onglets numérotés 01, 02, 03… (repris de la méthode 3B Récup') sur ordinateur ; liste numérotée simple sur mobile.

*Kicker*
> Étape par étape

*H2*
> Ce que nous avons **fait**

*Liste*
> {étapes de la fiche}

#### Section 4 — Galerie

- **Rôle :** la preuve. Toutes les photos, dans l'ordre du chantier, avec une légende visible sous chacune.
- **Composant :** grille de photos à coins arrondis, ouverture en plein écran au clic, légende sous chaque photo.

*Kicker*
> En images

*H2*
> Le chantier en **{N} photos**

*Légendes et textes alternatifs*
> {tableau de la fiche}

#### Section 5 — Les matériaux (seulement si les photos ou le texte les montrent)

- **Rôle :** donner les faits concrets (essence, isolant, épaisseur) que les visiteurs et les IA cherchent.
- **Composant :** liste à puces avec pastilles sauge.

*Kicker*
> Matériaux

*H2*
> Les **matériaux** du chantier

*Liste*
> {matériaux de la fiche}

Quand la fiche montre du vieux bois ou du réemploi, ajouter le lien « Découvrir 3B Récup' → » vers `/3b-recup/`.

#### Section 6 — Pour aller plus loin

- **Rôle :** renvoyer vers la page prestation et la page secteur (brief §6 : « chaque réalisation renvoie vers sa prestation et sa page secteur »).
- **Composant :** deux cartes de services blanches, icône dans une pastille sauge.

*Kicker*
> Pour aller plus loin

*H2*
> Le **savoir-faire** derrière ce chantier

*Carte prestation*
> **{Nom de la prestation}**
> Techniques, étapes et questions fréquentes : tout ce que nous faisons en {prestation, en minuscules}.
> Voir la prestation →

*Carte secteur*
> **Charpentier à {secteur}**
> Nos autres chantiers et les communes où nous intervenons autour de {secteur}.
> Voir nos chantiers du secteur →

Pour les chantiers hors des Hautes-Alpes (n° 05 et n° 13), la carte secteur devient :

> **Où intervenons-nous ?**
> « Basé dans le nord des Hautes-Alpes, nous intervenons dans les Hautes-Alpes mais aussi en région PACA et Rhône-Alpes. »
> Voir toutes nos réalisations →

Pour les chantiers sans commune connue (n° 06, 07, 08, 09, 10, 15), la carte secteur est masquée jusqu'à validation.

#### Section 7 — Réalisations similaires

- **Rôle :** garder le visiteur sur le site et renforcer le maillage entre fiches.
- **Composant :** cartes de réalisations (photo, étiquette « 3B Charpente », titre, lien « Voir les travaux → »).

*Kicker*
> D'autres chantiers

*H2*
> Des réalisations **proches**

*Cartes*
> {trois fiches, voir chaque fiche}

*Lien*
> Voir toutes nos réalisations →

#### Section 8 — Appel à l'action

- **Composant :** bandeau vert forêt, formes organiques vert clair en fond, grille ronde translucide.

*H2*
> Un projet **semblable** ?

*Texte*
> Chaque projet chez 3B Charpente débute par une étude sur mesure. Parlons du vôtre lors d'une rencontre : nous vous proposerons un devis détaillé, adapté à votre projet.

*Boutons*
> Demander mon devis → `/contact/`
> Appeler le 06 34 67 31 49 → `tel:+33634673149`

*Coordonnées (pied de page, identiques au caractère près sur tout le site)*
> 3B Charpente, 5 rue Saint-Michel, 05120 L'Argentière-la-Bessée, 06 34 67 31 49

### A3. SEO

- **URL :** `/realisations/{slug}/`, en minuscules, avec la barre finale. Canonique : l'adresse elle-même.
- **H1 :** « {Ouvrage} à {Commune} ». Orthographe corrigée : « Réfection », « abri », accents et traits d'union des communes. Un seul H1 par page.
- **Balise title :** « {Ouvrage} à {Commune} | 3B Charpente », de 50 à 60 caractères.
  - Si c'est trop long, raccourcir l'ouvrage, jamais la commune.
  - Sans commune connue : « {Ouvrage} {précision} | 3B Charpente ». À reprendre dès que la commune est validée.
- **Meta description :** de 140 à 155 caractères, sur ce modèle :
  - « {Ouvrage} à {Commune} : {2 à 4 étapes ou matériaux visibles}. {Preuve selon le chantier : depuis 2007, bois local, RGE, réemploi}. {Voir le chantier / Voir les photos}. »
- **Texte alternatif :** « {ce que montre la photo} {de l'ouvrage} {en essence, si elle est connue} à {Commune} ».
  - 125 caractères au plus.
  - Pas de « photo de », pas de liste de mots-clés.
  - « 3B Charpente » au plus une fois par page.
- **Noms de fichiers :** `{préfixe}-{nn}-{legende-courte}.webp`, en minuscules, sans accents, avec des tirets. Exemple : `refection-charpente-argentiere-la-bessee-06-assemblage-a-blanc.webp`.
- **Images :**
  - WebP ou AVIF ;
  - héros en 1 600 px de large, galerie en 1 200 px, vignettes en 600 px ;
  - `loading="lazy"` sauf pour la photo du héros ;
  - `width` et `height` toujours renseignés.
- **Pas de FAQ sur les fiches.** Les faits disponibles sont trop maigres pour trois questions sans rien inventer. La FAQ vit sur la page prestation liée.

### A4. Données structurées (Article + BreadcrumbList)

Le développeur remplit le modèle avec les champs de chaque fiche :

- `headline` : le H1 ;
- `description` : la meta description ;
- `about` : la prestation principale ;
- `contentLocation` : la commune ;
- `image` : la photo du héros.

Quelques règles :

- `datePublished` est la date de mise en ligne de la fiche sur le nouveau site.
- `dateCreated`, c'est-à-dire l'année du chantier, n'est ajoutée que si Jean la donne.
- Sans commune validée, on retire `contentLocation`.
- Pour les monts du Lyonnais, on met `"name": "Monts du Lyonnais"` sans `address`.
- Pour Gresse-en-Vercors, on met `"addressRegion": "Isère"`.

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://3bcharpente.fr/realisations/{slug}/#article",
      "headline": "{H1}",
      "description": "{meta description}",
      "image": ["https://3bcharpente.fr/{chemin-des-images}/{fichier-heros}.webp"],
      "datePublished": "{AAAA-MM-JJ, date de mise en ligne}",
      "inLanguage": "fr-FR",
      "mainEntityOfPage": "https://3bcharpente.fr/realisations/{slug}/",
      "author": { "@id": "https://3bcharpente.fr/#entreprise" },
      "publisher": { "@id": "https://3bcharpente.fr/#entreprise" },
      "about": {
        "@type": "Service",
        "name": "{nom de la prestation principale}",
        "url": "https://3bcharpente.fr/{adresse-de-la-prestation}/"
      },
      "contentLocation": {
        "@type": "Place",
        "name": "{Commune}",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "{Commune}",
          "addressRegion": "Hautes-Alpes",
          "addressCountry": "FR"
        }
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://3bcharpente.fr/" },
        { "@type": "ListItem", "position": 2, "name": "Réalisations", "item": "https://3bcharpente.fr/realisations/" },
        { "@type": "ListItem", "position": 3, "name": "{H1 court}", "item": "https://3bcharpente.fr/realisations/{slug}/" }
      ]
    }
  ]
}
```

L'`@id` `https://3bcharpente.fr/#entreprise` doit être le même que celui du LocalBusiness déclaré sur l'accueil (fiche 01).

### A5. Redirections 301

**Règle générale** (brief §8) :

- `3bcharpente.fr/galerie/{slug}` → `/realisations/{slug}/` ;
- `www.3bcharpente.fr/galerie/{slug}` → `/realisations/{slug}/` ;
- `new.3bcharpente.fr/galerie/{slug}` → `/realisations/{slug}/`.

Les anciennes adresses n'ont pas de barre finale ; les nouvelles en ont une. Chaque redirection va directement vers l'adresse finale, sans chaîne de redirections.

**Liste complète :**

```
/galerie/abris-voiture-a-l-argentiere-la-bessee                                   → /realisations/abris-voiture-a-l-argentiere-la-bessee/
/galerie/construction-d-une-terrasse-couverte-a-champcella                        → /realisations/construction-d-une-terrasse-couverte-a-champcella/
/galerie/creation-d-un-abris-de-jardin-a-pelvoux                                  → /realisations/creation-d-un-abris-de-jardin-a-pelvoux/
/galerie/creation-d-un-balcon-a-la-roche-de-rame                                  → /realisations/creation-d-un-balcon-a-la-roche-de-rame/
/galerie/creation-d-un-balcon-terrasse-a-gresse-en-vercors                        → /realisations/creation-d-un-balcon-terrasse-a-gresse-en-vercors/
/galerie/creation-d-un-escalier-en-bois-debout-dans-un-bati-ancien                → /realisations/creation-d-un-escalier-en-bois-debout-dans-un-bati-ancien/
/galerie/creation-d-un-plancher-dans-un-bati-ancien                               → /realisations/creation-d-un-plancher-dans-un-bati-ancien/
/galerie/escalier-1-4-tournant-en-meleze-lamelle-colle                            → /realisations/escalier-1-4-tournant-en-meleze-lamelle-colle/
/galerie/fabrication-d-un-escalier                                                → /realisations/fabrication-d-un-escalier/
/galerie/isolation-d-un-bati-ancien-par-l-interieur                               → /realisations/isolation-d-un-bati-ancien-par-l-interieur/
/galerie/isolation-d-une-toiture-ancienne-a-l-argentiere-la-bessee                → /realisations/isolation-d-une-toiture-ancienne-a-l-argentiere-la-bessee/
/galerie/isolation-et-habillage-d-une-voute-a-l-argentiere-la-bessee              → /realisations/isolation-et-habillage-d-une-voute-a-l-argentiere-la-bessee/   (voir n° 12)
/galerie/maison-a-ossature-bois-dans-les-monts-du-lyonnais                        → /realisations/maison-a-ossature-bois-dans-les-monts-du-lyonnais/
/galerie/refection-d-une-charpente-a-l-argentiere-la-bessee                       → /realisations/refection-d-une-charpente-a-l-argentiere-la-bessee/
/galerie/refection-d-une-toiture-a-ronatlon                                       → /realisations/refection-d-une-toiture-a-ronatlon/
/galerie/rehabilitation-d-une-ancienne-forge-a-la-salle-les-alpes                 → /realisations/rehabilitation-d-une-ancienne-forge-a-la-salle-les-alpes/
/galerie/renovation-d-un-toit-en-bardeau-meleze-au-casset                         → /realisations/renovation-d-un-toit-en-bardeau-meleze-au-casset/
/galerie/renovation-d-une-copropriete-a-briancon                                  → /realisations/renovation-d-une-copropriete-a-briancon/
/galerie/renovation-d-une-maison-d-habitation-a-l-argentiere-la-bessee            → /realisations/renovation-d-une-maison-d-habitation-a-l-argentiere-la-bessee/
/galerie/renovation-d-une-maison-d-habitation-sur-la-commune-de-prelles           → /realisations/renovation-d-une-maison-d-habitation-sur-la-commune-de-prelles/
/galerie/renovation-energetique-et-ouverture-d-une-lucarne-a-saint-martin-de-queyriere → /realisations/renovation-energetique-et-ouverture-d-une-lucarne-a-saint-martin-de-queyriere/
/galerie/renovation-et-isolation-d-un-chalet-a-vallouise                          → /realisations/renovation-et-isolation-d-un-chalet-a-vallouise/
/galerie/surelevation-a-pelvoux                                                   → /realisations/surelevation-a-pelvoux/
/galerie/surelevation-en-ossature-bois-d-une-maison-a-briancon                    → /realisations/surelevation-en-ossature-bois-d-une-maison-a-briancon/
```

**Images :** les photos actuelles sont servies depuis `/galeries/{slug}/`. Si elles changent d'adresse, rediriger chaque ancien fichier vers son nouveau fichier (301, image vers image). C'est une priorité basse.

### A6. Règles de rédaction des fiches

- Seulement ce que montrent le titre, le texte publié et les légendes. Pas de date, de durée, de surface, de budget, de citation de client ni de problème résolu inventés.
- Le site actuel classe les légendes par ordre alphabétique des fichiers. L'ordre proposé ici suit la logique d'un chantier. Il est à confirmer avec Jean en regardant les photos.
- On peut expliquer un terme de métier en une phrase. On ne peut pas en tirer un fait sur le chantier.
- Voix : « nous », phrases courtes, pas de superlatif, pas de promesse de délai ni de prix.

---

## Partie B — Tableau de correspondance

| n° | Fiche | Commune | Prestation principale | Page secteur | Photos |
|---|---|---|---|---|---|
| 16 | Ancienne forge réhabilitée | La Salle-les-Alpes | `/charpente-bois/` | `/charpentier-serre-chevalier/` | 9 |
| 20 | Maison rénovée en mélèze de pays | Prelles (Saint-Martin-de-Queyrières) | `/charpente-bois/` | `/charpentier-vallouise-pays-des-ecrins/` | 14 |
| 14 | Réfection d'une charpente avec lucarne | L'Argentière-la-Bessée | `/renovation-charpente-combles/` | `/charpentier-vallouise-pays-des-ecrins/` | 22 |
| 18 | Copropriété : charpente, isolation, couverture | Briançon | `/renovation-charpente-combles/` | `/charpentier-briancon/` | 8 |
| 17 | Toit en bardeaux de mélèze | Le Casset (Le Monêtier-les-Bains) | `/renovation-charpente-combles/` | `/charpentier-serre-chevalier/` | 2 |
| 15 | Toiture avec ferme en vieux bois | « Ronatlon » [à confirmer] | `/renovation-charpente-combles/` | selon la commune | 3 |
| 07 | Plancher en douglas et épicéa | [à valider] | `/renovation-charpente-combles/` | selon la commune | 2 |
| 22 | Chalet rénové et isolé, terrasse agrandie | Vallouise | `/isolation-biosourcee/` | `/charpentier-vallouise-pays-des-ecrins/` | 11 |
| 21 | Rénovation énergétique et lucarne | Saint-Martin-de-Queyrières | `/isolation-biosourcee/` | `/charpentier-vallouise-pays-des-ecrins/` | 4 |
| 12 | Voûte isolée et habillée | L'Argentière-la-Bessée | `/isolation-biosourcee/` | `/charpentier-vallouise-pays-des-ecrins/` | 0 |
| 11 | Toiture ancienne isolée en fibre de bois | L'Argentière-la-Bessée | `/isolation-toiture-sarking/` [à confirmer] | `/charpentier-vallouise-pays-des-ecrins/` | 7 |
| 10 | Bâti ancien isolé par l'intérieur | [à valider] | `/isolation-murs-ite/` | selon la commune | 12 |
| 13 | Maison à ossature bois | Monts du Lyonnais | `/maison-ossature-bois/` | aucune (hors Hautes-Alpes) | 13 |
| 24 | Surélévation en ossature bois | Briançon | `/extension-surelevation-bois/` | `/charpentier-briancon/` | 10 |
| 23 | Surélévation | Pelvoux | `/extension-surelevation-bois/` | `/charpentier-vallouise-pays-des-ecrins/` | 6 |
| 08 | Escalier quart tournant en mélèze lamellé-collé | [à valider] | `/escalier-bois-sur-mesure/` | selon la commune | 7 |
| 06 | Escalier en bois debout | [à valider] | `/escalier-bois-sur-mesure/` | selon la commune | 6 |
| 09 | Escalier en frêne et aluminium | [à valider] | `/escalier-bois-sur-mesure/` | selon la commune | 2 |
| 02 | Terrasse couverte et abri voiture | Champcella | `/balcon-terrasse-abri-bois/` | `/charpentier-vallouise-pays-des-ecrins/` | 5 |
| 01 | Abri voiture en charpente traditionnelle | L'Argentière-la-Bessée | `/balcon-terrasse-abri-bois/` | `/charpentier-vallouise-pays-des-ecrins/` | 2 |
| 04 | Balcon en mélèze | La Roche-de-Rame | `/balcon-terrasse-abri-bois/` | `/charpentier-vallouise-pays-des-ecrins/` | 2 |
| 03 | Abri de jardin | Pelvoux | `/balcon-terrasse-abri-bois/` | `/charpentier-vallouise-pays-des-ecrins/` | 2 |
| 05 | Balcon-terrasse | Gresse-en-Vercors (Isère) | `/balcon-terrasse-abri-bois/` | aucune (hors Hautes-Alpes) | 5 |
| 19 | Maison rénovée, vieux bois et réemploi | L'Argentière-la-Bessée | `/3b-recup/bois-de-reemploi/` | `/charpentier-vallouise-pays-des-ecrins/` | 12 |

Total : 166 photos. Les numéros sont ceux de `realisations-source.md`.

---

## Partie C — Les 24 fiches, classées par prestation

### C1. Charpente bois traditionnelle — `/charpente-bois/`

#### n° 16 — Réhabilitation d'une ancienne forge à La Salle-les-Alpes

- **Nouvelle adresse :** `/realisations/rehabilitation-d-une-ancienne-forge-a-la-salle-les-alpes/`
- **Ancienne adresse (301) :** `3bcharpente.fr/galerie/rehabilitation-d-une-ancienne-forge-a-la-salle-les-alpes`
- **Prestation principale :** Charpente bois traditionnelle → `/charpente-bois/`
- **Autres prestations liées :** `/escalier-bois-sur-mesure/`, `/balcon-terrasse-abri-bois/`
- **Page secteur :** `/charpentier-serre-chevalier/`
- **Étiquettes du héros :** La Salle-les-Alpes · Charpente · Escaliers · Balcon
- **H1 :** Réhabilitation d'une ancienne forge à **La Salle-les-Alpes**
- **Balise title (53 car.) :** Forge réhabilitée à La Salle-les-Alpes | 3B Charpente
- **Meta description (148 car.) :** Réhabilitation d'une ancienne forge à La Salle-les-Alpes : charpente taillée, levage de la toiture, couverture, deux escaliers et un balcon. Photos.
- **Photo du héros :** n° 8 (Chantier terminé 1/2)
- **Préfixe des fichiers :** `ancienne-forge-la-salle-les-alpes`

*Le projet* — H2 : « Le projet à **La Salle-les-Alpes** »
> À La Salle-les-Alpes, dans la vallée de Serre Chevalier, nous avons réhabilité une ancienne forge. Ce chantier a réuni plusieurs savoir-faire du charpentier : une charpente taillée puis levée, la couverture de la toiture, deux escaliers à l'intérieur et un balcon à l'extérieur.

*Fiche technique*
> - Commune : La Salle-les-Alpes (Hautes-Alpes)
> - Prestation : Charpente bois traditionnelle
> - Année : [À VALIDER AVEC JEAN : année]
> - Durée : [À VALIDER AVEC JEAN : durée]
> - Surface : [À VALIDER AVEC JEAN : surface]
> - Contexte : [À VALIDER AVEC JEAN : contexte du client et nouvel usage du bâtiment]
> - Architecte : [À VALIDER AVEC JEAN : architecte éventuel]

*Ce que nous avons fait* — H2 : « Ce que nous avons **fait** »
> 1. **Taille de la charpente.** Chaque pièce est tracée, puis taillée avant le levage.
> 2. **Levage de la toiture.** La charpente est montée et assemblée sur le bâtiment.
> 3. **Couverture.** La toiture est couverte jusqu'à la finition.
> 4. **Escalier encloisonné.** C'est un escalier fermé, pris entre deux murs ou deux cloisons.
> 5. **Escalier quart tournant.** Il tourne d'un quart de tour pour changer de direction.
> 6. **Balcon extérieur**, en complément de la charpente et des escaliers.

Longueur « Le projet » + « Ce que nous avons fait » : 112 mots.

*Les matériaux :* non montrés par les légendes. Section masquée. [À VALIDER AVEC JEAN : essences de la charpente, des escaliers et du balcon ; type de couverture]

*Galerie* — H2 : « Le chantier en **9 photos** »

| # | Légende actuelle | Légende à afficher | Texte alternatif |
|---|---|---|---|
| 1 | Taille de la charpente | Taille de la charpente | Taille des pièces de la charpente pour la réhabilitation d'une ancienne forge à La Salle-les-Alpes |
| 2 | Levage de la toiture | Levage de la toiture | Levage de la toiture de l'ancienne forge à La Salle-les-Alpes, vallée de Serre Chevalier |
| 3 | Vue d'en haut | Vue d'en haut | Vue d'en haut du chantier de l'ancienne forge à La Salle-les-Alpes |
| 4 | Couverture finie | Couverture terminée | Couverture terminée sur l'ancienne forge réhabilitée à La Salle-les-Alpes |
| 5 | Escalier encloisonné | Escalier encloisonné | Escalier encloisonné réalisé dans l'ancienne forge de La Salle-les-Alpes |
| 6 | Escalier quart tournant | Escalier quart tournant | Escalier quart tournant réalisé dans l'ancienne forge de La Salle-les-Alpes |
| 7 | Balcon exterieur | Balcon extérieur | Balcon extérieur de l'ancienne forge réhabilitée à La Salle-les-Alpes |
| 8 ★ | Chantier fini | Chantier terminé (1/2) | L'ancienne forge réhabilitée à La Salle-les-Alpes, chantier terminé |
| 9 | Chantier fini | Chantier terminé (2/2) | Autre vue de l'ancienne forge réhabilitée à La Salle-les-Alpes, chantier terminé |

*Réalisations similaires :* n° 20 (maison en mélèze de pays à Prelles), n° 08 (escalier quart tournant en mélèze lamellé-collé), n° 17 (toit en bardeaux de mélèze au Casset).

*À valider avec Jean :*
- le nouvel usage de la forge (habitation, atelier, gîte…) ;
- la charpente est-elle neuve, ou en partie conservée ?
- les essences et le type de couverture ;
- l'ordre des deux photos « Chantier fini ».

---

#### n° 20 — Rénovation d'une maison d'habitation en mélèze de pays à Prelles

- **Nouvelle adresse :** `/realisations/renovation-d-une-maison-d-habitation-sur-la-commune-de-prelles/`
- **Ancienne adresse (301) :** `3bcharpente.fr/galerie/renovation-d-une-maison-d-habitation-sur-la-commune-de-prelles`
- **Prestation principale :** Charpente bois traditionnelle → `/charpente-bois/`
- **Autres prestations liées :** `/balcon-terrasse-abri-bois/` (terrasse et garde-corps), `/renovation-charpente-combles/`
- **Page secteur :** `/charpentier-vallouise-pays-des-ecrins/`
- **Étiquettes du héros :** Prelles · Charpente · Terrasse · Mélèze de pays
- **H1 :** Rénovation d'une maison d'habitation en mélèze de pays à **Prelles**
- **Balise title (58 car.) :** Rénovation d'une maison en mélèze à Prelles | 3B Charpente
- **Meta description (152 car.) :** À Prelles, rénovation d'une maison en mélèze de pays : taille de la charpente, assemblage à blanc, solivage, terrasse et garde-corps bois-métal. Photos.
- **Photo du héros :** n° 14 (Le bâtiment terminé)
- **Préfixe des fichiers :** `renovation-maison-meleze-prelles`

*Le projet* — H2 : « Le projet à **Prelles** »
> À Prelles, sur la commune de Saint-Martin-de-Queyrières, nous avons rénové un bâtiment d'habitation en mélèze de pays, c'est-à-dire en mélèze local. Le chantier comprenait aussi la création d'une terrasse en mélèze et d'un garde-corps qui associe le bois et le métal.

*Fiche technique*
> - Commune : Prelles, Saint-Martin-de-Queyrières (Hautes-Alpes)
> - Prestation : Charpente bois traditionnelle
> - Année : [À VALIDER AVEC JEAN : année]
> - Durée : [À VALIDER AVEC JEAN : durée]
> - Surface : [À VALIDER AVEC JEAN : surface]
> - Contexte : [À VALIDER AVEC JEAN : contexte du client et étendue de la rénovation]
> - Architecte : [À VALIDER AVEC JEAN : architecte éventuel]

*Ce que nous avons fait* — H2 : « Ce que nous avons **fait** »
> 1. **État des lieux** du bâtiment existant.
> 2. **Taille de la charpente** en mélèze de pays.
> 3. **Assemblage à blanc.** La charpente est montée une première fois au sol, pour vérifier chaque assemblage avant le levage.
> 4. **Levage du solivage**, c'est-à-dire des poutres qui portent le plancher.
> 5. **Charpente assemblée** sur le bâtiment.
> 6. **Terrasse en mélèze.**
> 7. **Garde-corps bois-métal.**
> 8. **Bâtiment terminé.**

Longueur « Le projet » + « Ce que nous avons fait » : 96 mots.

*Les matériaux* — H2 : « Les **matériaux** du chantier »
> - **Mélèze de pays** : l'essence de la rénovation et de la terrasse.
> - **Bois et métal** : associés pour le garde-corps.

*Galerie* — H2 : « Le chantier en **14 photos** »

| # | Légende actuelle | Légende à afficher | Texte alternatif |
|---|---|---|---|
| 1 | Batiment existant (1) | Le bâtiment avant les travaux (1/3) | Maison d'habitation à Prelles avant sa rénovation en mélèze de pays |
| 2 | Batiment existant (2) | Le bâtiment avant les travaux (2/3) | Autre vue de la maison de Prelles avant les travaux |
| 3 | Batiment existant (3) | Le bâtiment avant les travaux (3/3) | Troisième vue de la maison de Prelles avant sa rénovation |
| 4 | Taille de la charpente (1) | Taille de la charpente (1/2) | Taille de la charpente en mélèze de pays pour une maison à Prelles (Hautes-Alpes) |
| 5 | Taille de la charpente (2) | Taille de la charpente (2/2) | Pièces de charpente en mélèze de pays taillées pour la maison de Prelles |
| 6 | Assemblage à blanc (1) | Assemblage à blanc (1/2) | Assemblage à blanc de la charpente en mélèze avant le levage, maison de Prelles |
| 7 | Assemblage à blanc (2) | Assemblage à blanc (2/2) | Autre vue de l'assemblage à blanc de la charpente en mélèze, maison de Prelles |
| 8 | Levage du solivage (1) | Levage du solivage (1/2) | Levage du solivage en mélèze sur la maison rénovée à Prelles |
| 9 | Levage du solivage (2) | Levage du solivage (2/2) | Solives en mélèze en cours de levage, rénovation d'une maison à Prelles |
| 10 | Charpente assemblée | Charpente assemblée | Charpente en mélèze de pays assemblée sur la maison de Prelles |
| 11 | Terrasse mélèze | Terrasse en mélèze | Terrasse en mélèze créée pour la maison rénovée à Prelles |
| 12 | Garde corps bois-métal (1) | Garde-corps bois-métal (1/2) | Garde-corps bois-métal de la terrasse en mélèze, maison de Prelles |
| 13 | Garde corps bois-métal (1) | Garde-corps bois-métal (2/2) | Autre vue du garde-corps bois-métal, maison rénovée à Prelles |
| 14 ★ | Batiment fini | Le bâtiment terminé | Maison d'habitation rénovée en mélèze de pays à Prelles (Hautes-Alpes), chantier terminé |

*Réalisations similaires :* n° 16 (ancienne forge à La Salle-les-Alpes), n° 14 (réfection d'une charpente à L'Argentière-la-Bessée), n° 02 (terrasse couverte à Champcella).

*À valider avec Jean :*
- Prelles est un village de la commune de Saint-Martin-de-Queyrières : confirmer cette mention ;
- ce qui a été refait exactement (charpente complète, planchers, façades) ;
- le garde-corps est-il celui de la terrasse ? La partie métal a-t-elle été faite par 3B ou par un serrurier ?
- les deux photos portent la même légende « Garde corps bois-métal (1) » : vérifier qu'il s'agit bien de deux vues différentes.

---

### C2. Rénovation de charpente, toiture et combles — `/renovation-charpente-combles/`

#### n° 14 — Réfection d'une charpente avec lucarne à L'Argentière-la-Bessée

Page prioritaire : l'ancienne page arrive déjà 15e sur « charpentier l'argentière-la-bessée » (brief §2). Garder l'adresse, soigner la 301 et enrichir le texte.

- **Nouvelle adresse :** `/realisations/refection-d-une-charpente-a-l-argentiere-la-bessee/`
- **Ancienne adresse (301) :** `3bcharpente.fr/galerie/refection-d-une-charpente-a-l-argentiere-la-bessee`
- **Prestation principale :** Rénovation de charpente et combles → `/renovation-charpente-combles/`
- **Autres prestations liées :** `/charpente-bois/` (taille traditionnelle), `/isolation-biosourcee/` (fibre de bois)
- **Page secteur :** `/charpentier-vallouise-pays-des-ecrins/`
- **Étiquettes du héros :** L'Argentière-la-Bessée · Réfection de charpente · Lucarne · Mélèze
- **H1 :** Réfection d'une charpente avec lucarne à **L'Argentière-la-Bessée**
- **Balise title (57 car.) :** Charpente refaite à L'Argentière-la-Bessée | 3B Charpente
- **Meta description (155 car.) :** Réfection d'une charpente à L'Argentière-la-Bessée : dépose, taille à la besaiguë, trait de Jupiter, levage des fermes, lucarne, bardage mélèze. 22 photos.
- **Photo du héros :** n° 21 (Bardage posé), ou n° 13 (Lucarne en cours de levage) après visionnage
- **Préfixe des fichiers :** `refection-charpente-argentiere-la-bessee`

*Le projet* — H2 : « Le projet à **L'Argentière-la-Bessée** »
> À L'Argentière-la-Bessée, la commune où notre entreprise est installée, nous avons déposé une ancienne charpente pour en lever une nouvelle. Le chantier comprend une lucarne, des fenêtres de toit, des panneaux en fibre de bois, un bardage et un plancher en mélèze. Un tenon y a été taillé à la main, à la besaiguë.

*Fiche technique*
> - Commune : L'Argentière-la-Bessée (Hautes-Alpes)
> - Prestation : Rénovation de charpente et combles
> - Année : [À VALIDER AVEC JEAN : année]
> - Durée : [À VALIDER AVEC JEAN : durée]
> - Surface : [À VALIDER AVEC JEAN : surface]
> - Contexte : [À VALIDER AVEC JEAN : type de bâtiment, raison de la réfection]
> - Architecte : [À VALIDER AVEC JEAN : architecte éventuel]

*Ce que nous avons fait* — H2 : « Ce que nous avons **fait** »
> 1. **Préparation du chantier** et dépose de l'ancienne charpente.
> 2. **Taille.** Un tenon à double embrèvement taillé à la besaiguë, l'outil traditionnel du charpentier à deux tranchants. Un trait de Jupiter, assemblage en zigzag qui raboute deux pièces bout à bout.
> 3. **Assemblage à blanc** au sol, pour vérifier chaque pièce avant le levage.
> 4. **Levage** des porteuses, des fermes et du solivage, avec un chevêtre : le cadre qui laisse passer la cheminée.
> 5. **Lucarne.** Levage des jouées, c'est-à-dire ses côtés, puis de la lucarne.
> 6. **Encadrements des fenêtres de toit** et panneaux en fibre de bois.
> 7. **Bardage et plancher en mélèze.**

Longueur « Le projet » + « Ce que nous avons fait » : 150 mots.

*Les matériaux* — H2 : « Les **matériaux** du chantier »
> - **Mélèze** : bardage et plancher.
> - **Fibre de bois** : panneaux isolants biosourcés.

*Galerie* — H2 : « Le chantier en **22 photos** »

| # | Légende actuelle | Légende à afficher | Texte alternatif |
|---|---|---|---|
| 1 | préparation de chantier | Préparation du chantier | Préparation du chantier de réfection d'une charpente à L'Argentière-la-Bessée |
| 2 | dépose de l'ancienne charpente | Dépose de l'ancienne charpente | Dépose de l'ancienne charpente avant sa réfection, L'Argentière-la-Bessée |
| 3 | taille d'un tenon à double embrèvement à la besaïgue | Taille d'un tenon à double embrèvement à la besaiguë | Taille à la besaiguë d'un tenon à double embrèvement pour la charpente de L'Argentière-la-Bessée |
| 4 | trait de jupiter | Trait de Jupiter | Trait de Jupiter taillé pour abouter deux pièces de la charpente, L'Argentière-la-Bessée |
| 5 | trait de jupiter assemblé | Trait de Jupiter assemblé | Trait de Jupiter assemblé : deux pièces de charpente raboutées, L'Argentière-la-Bessée |
| 6 | assamblage à blanc | Assemblage à blanc | Assemblage à blanc de la nouvelle charpente avant le levage, L'Argentière-la-Bessée |
| 7 | levage des porteuses | Levage des porteuses | Levage des pièces porteuses de la charpente à L'Argentière-la-Bessée |
| 8 | levage des fermes | Levage des fermes | Levage des fermes de la nouvelle charpente à L'Argentière-la-Bessée |
| 9 | ferme posée | Ferme posée | Ferme de charpente posée sur le bâtiment, L'Argentière-la-Bessée |
| 10 | solivage en cours de levage | Solivage en cours de levage | Levage du solivage pendant la réfection de la charpente, L'Argentière-la-Bessée |
| 11 | chevêtre de cheminée | Chevêtre de cheminée | Chevêtre laissant passer le conduit de cheminée dans la charpente, L'Argentière-la-Bessée |
| 12 | levage des jouées de lucarne | Levage des jouées de lucarne | Levage des jouées de la lucarne sur la charpente de L'Argentière-la-Bessée |
| 13 | lucarne en cours de levage | Lucarne en cours de levage | Lucarne en cours de levage sur la toiture refaite à L'Argentière-la-Bessée |
| 14 | détail de lucarne | Détail de la lucarne | Détail de la charpente de la lucarne, L'Argentière-la-Bessée |
| 15 | pose des encadrements de Velux | Pose des encadrements de fenêtres de toit | Pose des encadrements de fenêtres de toit dans la charpente, L'Argentière-la-Bessée |
| 16 | encadrements posés | Encadrements posés | Encadrements posés dans la nouvelle charpente, L'Argentière-la-Bessée |
| 17 | paose des panneaux en fibre de bois | Pose des panneaux en fibre de bois | Pose de panneaux isolants en fibre de bois, réfection de charpente à L'Argentière-la-Bessée |
| 18 | stockage des murs intérieurs | Stockage des murs intérieurs | Murs intérieurs stockés sur le chantier avant leur pose, L'Argentière-la-Bessée |
| 19 | chantier en cours | Chantier en cours | Vue du chantier de réfection de charpente en cours à L'Argentière-la-Bessée |
| 20 | pose du bardage mélèze | Pose du bardage en mélèze | Pose d'un bardage en mélèze, réfection d'une charpente à L'Argentière-la-Bessée |
| 21 ★ | bardage posé | Bardage posé | Bardage posé après la réfection de la charpente, L'Argentière-la-Bessée (Hautes-Alpes) |
| 22 | plancher en mélèze | Plancher en mélèze | Plancher en mélèze posé lors de la réfection, L'Argentière-la-Bessée |

*Réalisations similaires :* n° 11 (toiture ancienne isolée à L'Argentière-la-Bessée), n° 21 (lucarne à Saint-Martin-de-Queyrières), n° 20 (maison en mélèze de pays à Prelles).

*À valider avec Jean :*
- le type de bâtiment (maison, grange…) et la raison de la réfection ;
- l'essence de la charpente ;
- la lucarne : créée, ou refaite à l'identique ?
- « porteuses » : s'agit-il de pannes ou de poutres porteuses ?
- les « murs intérieurs » stockés sont-ils des murs à ossature bois préparés par 3B ?
- les panneaux en fibre de bois sont-ils posés en toiture ou en murs ?
- le bardage posé (photo 21) est-il le bardage en mélèze ?
- l'atelier est-il au 5 rue Saint-Michel ? Si oui, on peut écrire « où se trouve notre atelier ».

---

#### n° 18 — Rénovation d'une copropriété à Briançon : charpente, isolation et couverture

- **Nouvelle adresse :** `/realisations/renovation-d-une-copropriete-a-briancon/`
- **Ancienne adresse (301) :** `3bcharpente.fr/galerie/renovation-d-une-copropriete-a-briancon`
- **Prestation principale :** Rénovation de charpente et combles → `/renovation-charpente-combles/`
- **Autre prestation liée :** `/isolation-biosourcee/`
- **Page secteur :** `/charpentier-briancon/`
- **Étiquettes du héros :** Briançon · Copropriété · Charpente · Isolation · Couverture
- **H1 :** Rénovation d'une copropriété à **Briançon** : charpente, isolation et couverture
- **Balise title (54 car.) :** Rénovation d'une copropriété à Briançon | 3B Charpente
- **Meta description (147 car.) :** À Briançon, 3B Charpente a repris la charpente, l'isolation et la couverture d'une copropriété : fermes reprises, dépassée de toit recréée. Photos.
- **Photo du héros :** n° 7 (La couverture) ou n° 8 (Le paysage briançonnais)
- **Préfixe des fichiers :** `renovation-copropriete-briancon`

*Le projet* — H2 : « Le projet à **Briançon** »
> À Briançon, nous avons rénové la toiture d'une copropriété : reprise de la charpente, isolation et couverture. Un chantier en hauteur, avec en prime une belle vue sur le paysage briançonnais.

*Fiche technique*
> - Commune : Briançon (Hautes-Alpes)
> - Prestation : Rénovation de charpente et toiture
> - Année : [À VALIDER AVEC JEAN : année]
> - Durée : [À VALIDER AVEC JEAN : durée]
> - Surface : [À VALIDER AVEC JEAN : surface de toiture]
> - Contexte : [À VALIDER AVEC JEAN : contexte du client (syndic, nombre de logements)]
> - Architecte : [À VALIDER AVEC JEAN : architecte ou maître d'œuvre éventuel]

*Ce que nous avons fait* — H2 : « Ce que nous avons **fait** »
> 1. **État des lieux** avant intervention.
> 2. **Découverture et soufflage.** Une fois la couverture retirée, l'isolant a été soufflé.
> 3. **Reprise de la charpente et des fermes.** Les fermes sont les assemblages en triangle qui portent la toiture.
> 4. **Recréation d'une dépassée de toiture.** La dépassée, c'est le débord du toit au-delà du mur : elle protège la façade de la pluie et de la neige.
> 5. **Couverture** refaite.

Longueur « Le projet » + « Ce que nous avons fait » : 93 mots.

*Les matériaux :* non précisés par la source. Section masquée. [À VALIDER AVEC JEAN : isolant soufflé (ouate de cellulose ?) et épaisseur ; matériau de couverture ; essence des bois de reprise]

*Galerie* — H2 : « Le chantier en **8 photos** »

| # | Légende actuelle | Légende à afficher | Texte alternatif |
|---|---|---|---|
| 1 | Avant intervention | Avant intervention | Toiture de la copropriété de Briançon avant la rénovation |
| 2 | Soufflage après découverture | Soufflage de l'isolant après découverture | Isolant soufflé après la découverture du toit d'une copropriété à Briançon |
| 3 | Charpente | La charpente | Charpente de la copropriété de Briançon pendant la rénovation |
| 4 | Reprise des fermes | Reprise des fermes (1/2) | Reprise des fermes de la charpente d'une copropriété à Briançon |
| 5 | Reprise des fermes | Reprise des fermes (2/2) | Fermes reprises sur la charpente de la copropriété, Briançon |
| 6 | Recréation d'une dépassée de toiture | Recréation d'une dépassée de toiture | Dépassée de toiture recréée sur une copropriété à Briançon |
| 7 ★ | Couverture | La couverture | Couverture refaite sur la toiture d'une copropriété à Briançon (Hautes-Alpes) |
| 8 | Paysage Briançonnais | Le paysage briançonnais | Vue sur le paysage briançonnais depuis le chantier de la copropriété |

*Réalisations similaires :* n° 24 (surélévation en ossature bois à Briançon), n° 11 (toiture ancienne isolée à L'Argentière-la-Bessée), n° 14 (réfection d'une charpente à L'Argentière-la-Bessée).

*À valider avec Jean :*
- l'isolant soufflé, son épaisseur, et l'endroit où il a été soufflé (rampants, plancher des combles) ;
- le matériau de couverture ;
- l'ordre réel des étapes (soufflage avant ou après la reprise des fermes) ;
- l'accord du syndic pour citer « copropriété à Briançon » (sans adresse).

---

#### n° 17 — Rénovation d'un toit en bardeaux de mélèze au Casset (Le Monêtier-les-Bains)

- **Nouvelle adresse :** `/realisations/renovation-d-un-toit-en-bardeau-meleze-au-casset/`
- **Ancienne adresse (301) :** `3bcharpente.fr/galerie/renovation-d-un-toit-en-bardeau-meleze-au-casset`
- **Prestation principale :** Rénovation de charpente et combles → `/renovation-charpente-combles/`
- **Page secteur :** `/charpentier-serre-chevalier/`
- **Étiquettes du héros :** Le Casset · Le Monêtier-les-Bains · Toiture · Bardeaux de mélèze
- **H1 :** Rénovation d'un toit en bardeaux de mélèze au **Casset** (Le Monêtier-les-Bains)
- **Balise title (51 car.) :** Toit en bardeaux de mélèze au Casset | 3B Charpente
- **Meta description (155 car.) :** Au Casset, au Monêtier-les-Bains, 3B Charpente a rénové un toit en bardeaux de mélèze. Photos avant et après d'un chantier de la vallée de Serre Chevalier.
- **Photo du héros :** n° 2 (Après la rénovation)
- **Préfixe des fichiers :** `toit-bardeaux-meleze-le-casset`

*Le projet* — H2 : « Le projet au **Casset** »
> Au Casset, hameau du Monêtier-les-Bains dans la vallée de Serre Chevalier, nous avons rénové un toit couvert de bardeaux de mélèze. Les bardeaux sont de petites planches de bois posées en recouvrement, comme des tuiles. Le mélèze, arbre des forêts de montagne, est une essence traditionnelle des toits alpins.

*Fiche technique*
> - Commune : Le Casset, Le Monêtier-les-Bains (Hautes-Alpes)
> - Prestation : Rénovation de toiture
> - Année : [À VALIDER AVEC JEAN : année]
> - Durée : [À VALIDER AVEC JEAN : durée]
> - Surface : [À VALIDER AVEC JEAN : surface de toiture]
> - Contexte : [À VALIDER AVEC JEAN : contexte du client, type de bâtiment]
> - Architecte : [À VALIDER AVEC JEAN : architecte éventuel]

*Ce que nous avons fait* — H2 : « Ce que nous avons **fait** »
> 1. **État des lieux.** La photo « avant » montre le toit d'origine.
> 2. **Rénovation de la couverture en bardeaux de mélèze.** Les bardeaux se posent en rangs qui se recouvrent, du bas vers le haut du toit.
> 3. **Résultat.** La photo « après » montre le toit rénové.
>
> Dans la même vallée, nous avons aussi réhabilité une ancienne forge à La Salle-les-Alpes.

Longueur « Le projet » + « Ce que nous avons fait » : 105 mots.

*Les matériaux* — H2 : « Les **matériaux** du chantier »
> - **Bardeaux de mélèze** : la couverture du toit.

*Galerie* — H2 : « Le chantier **avant et après** »

| # | Légende actuelle | Légende à afficher | Texte alternatif |
|---|---|---|---|
| 1 | avant | Avant les travaux | Toit en bardeaux de mélèze au Casset, Le Monêtier-les-Bains, avant sa rénovation |
| 2 ★ | après | Après la rénovation | Toit en bardeaux de mélèze rénové au Casset, Le Monêtier-les-Bains (Hautes-Alpes) |

Composant conseillé : un curseur « avant / après » sur les deux photos, si elles ont le même cadrage.

*Réalisations similaires :* n° 16 (ancienne forge à La Salle-les-Alpes), n° 18 (copropriété à Briançon), n° 15 (toiture avec ferme en vieux bois).

*À valider avec Jean :*
- bardeaux remplacés en totalité ou en partie ? Charpente reprise ou non ?
- bardeaux fendus ou sciés ? Provenance du mélèze (Scierie Savoldelli ?) ;
- d'autres photos du chantier en cours, pour enrichir une page très courte.

---

#### n° 15 — Réfection d'une toiture avec une ferme en vieux bois (commune à confirmer)

- **Nouvelle adresse :** `/realisations/refection-d-une-toiture-a-ronatlon/` (slug conservé, voir « À valider »)
- **Ancienne adresse (301) :** `3bcharpente.fr/galerie/refection-d-une-toiture-a-ronatlon`
- **Prestation principale :** Rénovation de charpente et combles → `/renovation-charpente-combles/`
- **Autre page liée :** `/3b-recup/bois-de-reemploi/` (ferme en vieux bois)
- **Page secteur :** à déterminer selon la commune
- **Étiquettes du héros :** [Commune à confirmer] · Réfection de toiture · Vieux bois
- **H1 provisoire :** Réfection d'une toiture avec une ferme en **vieux bois**
- **H1 cible :** Réfection d'une toiture avec une ferme en vieux bois à **{Commune}**
- **Balise title provisoire (59 car.) :** Toiture refaite avec une ferme en vieux bois | 3B Charpente
- **Balise title cible :** « Réfection de toiture à {Commune} | 3B Charpente »
- **Meta description (151 car.) :** Réfection d'une toiture avec une ferme en vieux bois de réemploi : pied d'arbalétrier, pose de la charpente et du bardage. Un chantier de 3B Charpente.
- **Photo du héros :** n° 3 (Pose de la charpente et du bardage)
- **Préfixe des fichiers :** `refection-toiture-vieux-bois`

*Le projet* — H2 : « Le **projet** »
> Sur ce chantier, nous avons refait une toiture en y intégrant une ferme en vieux bois. Le vieux bois a déjà servi dans un autre bâtiment : réemployé, il garde sa patine et prolonge la vie du matériau. Ce savoir-faire est au cœur de 3B Récup', notre initiative dédiée au réemploi des matériaux.

*Fiche technique*
> - Commune : [À VALIDER AVEC JEAN : nom exact de la commune, « Ronatlon » sur le site actuel]
> - Prestation : Réfection de toiture
> - Année : [À VALIDER AVEC JEAN : année]
> - Durée : [À VALIDER AVEC JEAN : durée]
> - Surface : [À VALIDER AVEC JEAN : surface]
> - Contexte : [À VALIDER AVEC JEAN : contexte du client, origine du vieux bois]
> - Architecte : [À VALIDER AVEC JEAN : architecte éventuel]

*Ce que nous avons fait* — H2 : « Ce que nous avons **fait** »
> 1. **Ferme en vieux bois.** La ferme est l'assemblage en triangle qui porte la toiture. Celle-ci est faite de bois ancien.
> 2. **Pied d'arbalétrier.** L'arbalétrier est la pièce inclinée de la ferme ; son pied s'assemble sur l'entrait, la pièce horizontale du bas.
> 3. **Pose de la charpente et du bardage.**

Longueur « Le projet » + « Ce que nous avons fait » : 99 mots.

*Les matériaux* — H2 : « Les **matériaux** du chantier »
> - **Vieux bois** : la ferme de charpente.

Ajouter le lien « Découvrir 3B Récup' → » vers `/3b-recup/`.

*Galerie* — H2 : « Le chantier en **3 photos** »

| # | Légende actuelle | Légende à afficher | Texte alternatif |
|---|---|---|---|
| 1 | ferme en vieux bois | Ferme en vieux bois | Ferme de charpente en vieux bois pour la réfection d'une toiture |
| 2 | pied d'arbalétrier | Pied d'arbalétrier | Détail du pied d'arbalétrier d'une ferme en vieux bois |
| 3 ★ | pose de la charpente et du bardage | Pose de la charpente et du bardage | Pose de la charpente et du bardage lors de la réfection d'une toiture |

Ajouter la commune à chaque texte alternatif dès qu'elle est validée.

*Réalisations similaires :* n° 19 (maison avec bardage en vieux bois à L'Argentière-la-Bessée), n° 14 (réfection d'une charpente à L'Argentière-la-Bessée), n° 17 (toit en bardeaux de mélèze au Casset).

*À valider avec Jean :*
- **« Ronatlon » est sans doute une faute de frappe dans le nom d'une commune.** Il faut le vrai nom pour le H1, le title, les textes alternatifs et la page secteur. Le slug actuel est conservé pour ne pas casser la 301.
- l'origine du vieux bois (déconstruction par 3B Récup' ? autre chantier ?) et son essence ;
- s'agit-il d'une toiture d'habitation, de grange, d'annexe ?

---

#### n° 07 — Création d'un plancher en douglas et épicéa dans un bâti ancien

- **Nouvelle adresse :** `/realisations/creation-d-un-plancher-dans-un-bati-ancien/`
- **Ancienne adresse (301) :** `3bcharpente.fr/galerie/creation-d-un-plancher-dans-un-bati-ancien`
- **Prestation principale :** Rénovation de charpente et combles → `/renovation-charpente-combles/`
- **Page secteur :** à déterminer selon la commune
- **Étiquettes du héros :** Bâti ancien · Plancher · Douglas et épicéa
- **H1 :** Création d'un plancher en **douglas et épicéa** dans un bâti ancien
- **Balise title (56 car.) :** Plancher douglas et épicéa en bâti ancien | 3B Charpente
- **Balise title cible :** « Plancher en bâti ancien à {Commune} | 3B Charpente »
- **Meta description (147 car.) :** Création d'un plancher en douglas et épicéa dans un bâti ancien, du choix des bois au levage. Un chantier de 3B Charpente, charpentier depuis 2007.
- **Photo du héros :** n° 2 (En cours de levage)
- **Préfixe des fichiers :** `plancher-douglas-epicea-bati-ancien`

*Le projet* — H2 : « Le **projet** »
> Dans un bâti ancien, nous avons créé un plancher en douglas et en épicéa, deux résineux courants en charpente. Créer un plancher dans un bâtiment ancien permet par exemple de gagner une pièce à l'étage ou de remplacer un plancher fatigué. Les murs n'y sont pas toujours d'équerre : chaque pièce se règle sur place.

*Fiche technique*
> - Commune : [À VALIDER AVEC JEAN : commune]
> - Prestation : Rénovation de charpente et planchers
> - Année : [À VALIDER AVEC JEAN : année]
> - Durée : [À VALIDER AVEC JEAN : durée]
> - Surface : [À VALIDER AVEC JEAN : surface du plancher]
> - Contexte : [À VALIDER AVEC JEAN : contexte du client, raison du nouveau plancher]
> - Architecte : [À VALIDER AVEC JEAN : architecte éventuel]

*Ce que nous avons fait* — H2 : « Ce que nous avons **fait** »
> 1. **Douglas et épicéa.** Les deux essences du plancher, que montre la première photo.
> 2. **Levage.** Le levage, c'est le moment où les pièces préparées sont montées et posées dans le bâtiment existant. Les solives sont les poutres qui portent le plancher.

Longueur « Le projet » + « Ce que nous avons fait » : 94 mots.

*Les matériaux* — H2 : « Les **matériaux** du chantier »
> - **Douglas** et **épicéa** : les bois du plancher.

*Galerie* — H2 : « Le chantier en **2 photos** »

| # | Légende actuelle | Légende à afficher | Texte alternatif |
|---|---|---|---|
| 1 | douglas et épicéa | Douglas et épicéa | Pièces de douglas et d'épicéa préparées pour un plancher dans un bâti ancien |
| 2 ★ | en cours de levage | En cours de levage | Levage d'un plancher en douglas et épicéa dans un bâti ancien |

*Réalisations similaires :* n° 06 (escalier en bois debout dans un bâti ancien), n° 10 (bâti ancien isolé par l'intérieur), n° 14 (réfection d'une charpente à L'Argentière-la-Bessée).

*À valider avec Jean :*
- la commune ;
- la raison du nouveau plancher (nouveau niveau, remplacement) ;
- le rôle de chaque essence (solives en douglas, plancher en épicéa ?) ;
- d'autres photos (plancher terminé), car la page est très courte.

---

### C3. Isolation biosourcée et rénovation énergétique — `/isolation-biosourcee/`

#### n° 22 — Rénovation et isolation d'un chalet à Vallouise, et agrandissement de sa terrasse

- **Nouvelle adresse :** `/realisations/renovation-et-isolation-d-un-chalet-a-vallouise/`
- **Ancienne adresse (301) :** `3bcharpente.fr/galerie/renovation-et-isolation-d-un-chalet-a-vallouise`
- **Prestation principale :** Isolation biosourcée et rénovation énergétique → `/isolation-biosourcee/`
- **Autres prestations liées :** `/isolation-murs-ite/` (façades enduites sur fibre de bois), `/balcon-terrasse-abri-bois/` (terrasse)
- **Page secteur :** `/charpentier-vallouise-pays-des-ecrins/`
- **Étiquettes du héros :** Vallouise · Rénovation énergétique · Isolation biosourcée · Terrasse en mélèze
- **H1 :** Rénovation et isolation d'un chalet à **Vallouise**, et agrandissement de sa terrasse
- **Balise title (54 car.) :** Chalet rénové et isolé à Vallouise (05) | 3B Charpente
- **Meta description (152 car.) :** Chalet des années 1980 à Vallouise : 28 cm d'isolants biosourcés dans les murs, 32 cm en toiture, bardage mélèze et terrasse agrandie. Voir le chantier.
- **Photo du héros :** n° 7 (Façade sud et sa terrasse)
- **Préfixe des fichiers :** `renovation-chalet-vallouise`

*Le projet* — H2 : « Le projet à **Vallouise** »
> À Vallouise, ce chalet des années 1980 a été entièrement rénové et isolé avec des isolants biosourcés, c'est-à-dire issus de matières végétales. Des ouvertures ont été créées ou modifiées, et le balcon a été agrandi en terrasse.

*Fiche technique*
> - Commune : Vallouise, Vallouise-Pelvoux (Hautes-Alpes)
> - Prestation : Isolation biosourcée et rénovation énergétique
> - Bâtiment : chalet des années 1980
> - Année du chantier : [À VALIDER AVEC JEAN : année]
> - Durée : [À VALIDER AVEC JEAN : durée]
> - Surface : [À VALIDER AVEC JEAN : surface]
> - Contexte : [À VALIDER AVEC JEAN : contexte du client]
> - Architecte : [À VALIDER AVEC JEAN : architecte éventuel]

*Ce que nous avons fait* — H2 : « Ce que nous avons **fait** »
> 1. **Murs.** 28 cm de laine de chanvre, lin et coton, et de fibre de bois.
> 2. **Toiture.** 32 cm des mêmes isolants.
> 3. **Façades.** Une partie est habillée d'un bardage en mélèze, l'autre est enduite sur de la fibre de bois.
> 4. **Ouvertures** créées ou modifiées.
> 5. **Dépassée nord agrandie.** Le débord du toit côté nord a été allongé.
> 6. **Terrasse agrandie et étanchée**, en mélèze avec des assemblages traditionnels, et son escalier d'accès.

Longueur « Le projet » + « Ce que nous avons fait » : 106 mots.

*Les matériaux* — H2 : « Les **matériaux** du chantier »
> - **Laine de chanvre, lin et coton** : isolant biosourcé des murs et de la toiture.
> - **Fibre de bois** : isolant biosourcé des murs et de la toiture, et support de l'enduit sur une partie des façades.
> - **Mélèze** : bardage et terrasse.

*Galerie* — H2 : « Le chantier en **11 photos** »

| # | Légende actuelle | Légende à afficher | Texte alternatif |
|---|---|---|---|
| 1 | Façade Ouest avant les travaux | Façade ouest avant les travaux | Façade ouest d'un chalet des années 1980 à Vallouise avant sa rénovation |
| 2 | Façade sud avant les travaux | Façade sud avant les travaux | Façade sud du chalet de Vallouise avant la rénovation et l'isolation |
| 3 | Face Nord et Est avant les travaux | Façades nord et est avant les travaux | Façades nord et est du chalet de Vallouise avant les travaux |
| 4 | Façade Nord et Ouest | Façades nord et ouest | Façades nord et ouest du chalet de Vallouise |
| 5 | Dépassée Nord agrandie | Dépassée nord agrandie | Dépassée de toit agrandie côté nord sur le chalet rénové à Vallouise |
| 6 | Dépassée Nord en détail | Détail de la dépassée nord | Détail de la dépassée nord agrandie du chalet de Vallouise |
| 7 ★ | Façade Sud et sa terrasse | Façade sud et sa terrasse | Façade sud du chalet rénové à Vallouise et sa terrasse agrandie en mélèze |
| 8 | Facade Sud et Est. Escalier d'accès à la terrasse | Façades sud et est, escalier d'accès à la terrasse | Façades sud et est du chalet de Vallouise et escalier d'accès à la terrasse |
| 9 | Vue de la terrasse | Vue de la terrasse (1/2) | Terrasse en mélèze agrandie et étanchée, chalet de Vallouise |
| 10 | Terrasse en mélèze et ses assemblages traditionnels | Terrasse en mélèze et ses assemblages traditionnels | Assemblages traditionnels de la terrasse en mélèze du chalet de Vallouise |
| 11 | vue de la terrasse | Vue de la terrasse (2/2) | Autre vue de la terrasse en mélèze du chalet rénové à Vallouise |

*Réalisations similaires :* n° 21 (rénovation énergétique et lucarne à Saint-Martin-de-Queyrières), n° 10 (bâti ancien isolé par l'intérieur), n° 02 (terrasse couverte à Champcella).

*À valider avec Jean :*
- les murs sont-ils isolés par l'extérieur (ITE), par l'intérieur, ou des deux côtés ? Si c'est par l'extérieur, la fiche peut aussi servir de preuve principale à `/isolation-murs-ite/` ;
- la marque ou la composition exacte de la « laine de chanvre/lin/coton » ;
- le chantier a-t-il bénéficié d'aides à la rénovation ? À mentionner seulement sans montant (brief §1).

---

#### n° 21 — Rénovation énergétique et ouverture d'une lucarne à Saint-Martin-de-Queyrières

- **Nouvelle adresse :** `/realisations/renovation-energetique-et-ouverture-d-une-lucarne-a-saint-martin-de-queyriere/`
- **Ancienne adresse (301) :** `3bcharpente.fr/galerie/renovation-energetique-et-ouverture-d-une-lucarne-a-saint-martin-de-queyriere`
- **Prestation principale :** Isolation biosourcée et rénovation énergétique → `/isolation-biosourcee/`
- **Autre prestation liée :** `/renovation-charpente-combles/` (lucarne)
- **Page secteur :** `/charpentier-vallouise-pays-des-ecrins/`
- **Étiquettes du héros :** Saint-Martin-de-Queyrières · Rénovation énergétique · Lucarne
- **H1 :** Rénovation énergétique et ouverture d'une lucarne à **Saint-Martin-de-Queyrières**
- **Balise title (51 car.) :** Lucarne à Saint-Martin-de-Queyrières | 3B Charpente
- **Meta description (148 car.) :** Rénovation énergétique et ouverture d'une lucarne à Saint-Martin-de-Queyrières : étanchéité à l'air, caissons d'isolation, toiture terminée. Photos.
- **Photo du héros :** n° 2 (Toiture terminée)
- **Préfixe des fichiers :** `lucarne-saint-martin-de-queyrieres`

*Le projet* — H2 : « Le projet à **Saint-Martin-de-Queyrières** »
> À Saint-Martin-de-Queyrières, nous avons mené une rénovation énergétique et ouvert une lucarne dans la toiture. Une lucarne est une ouverture verticale construite dans la pente du toit : elle fait entrer la lumière et donne de la hauteur sous les combles.

*Fiche technique*
> - Commune : Saint-Martin-de-Queyrières (Hautes-Alpes)
> - Prestation : Rénovation énergétique, lucarne
> - Année : [À VALIDER AVEC JEAN : année]
> - Durée : [À VALIDER AVEC JEAN : durée]
> - Surface : [À VALIDER AVEC JEAN : surface isolée]
> - Contexte : [À VALIDER AVEC JEAN : contexte du client, étendue de la rénovation]
> - Architecte : [À VALIDER AVEC JEAN : architecte éventuel]

*Ce que nous avons fait* — H2 : « Ce que nous avons **fait** »
> 1. **Ouverture de la lucarne** dans la toiture existante.
> 2. **Étanchéité à l'air.** Une barrière continue, en membrane ou en panneaux, empêche l'air chaud et humide de la maison de passer dans l'isolant.
> 3. **Caissons d'isolation** mis en place : ils reçoivent l'isolant sur toute l'épaisseur prévue.
> 4. **Toiture terminée.**
> 5. **À l'intérieur**, deux vues montrent le résultat.

Longueur « Le projet » + « Ce que nous avons fait » : 92 mots.

*Les matériaux :* isolant non précisé par la source. Section masquée. [À VALIDER AVEC JEAN : isolant des caissons et épaisseur]

*Galerie* — H2 : « Le chantier en **4 photos** »

| # | Légende actuelle | Légende à afficher | Texte alternatif |
|---|---|---|---|
| 1 | étanchéité à l'air et caissons d'isolation | Étanchéité à l'air et caissons d'isolation | Étanchéité à l'air et caissons d'isolation, rénovation énergétique à Saint-Martin-de-Queyrières |
| 2 ★ | toiture terminée | Toiture terminée | Toiture terminée après la rénovation énergétique, Saint-Martin-de-Queyrières (Hautes-Alpes) |
| 3 | vue de l'intérieur | Vue de l'intérieur (1/2) | Vue intérieure sous la toiture rénovée à Saint-Martin-de-Queyrières |
| 4 | vue de l'intérieur 2 | Vue de l'intérieur (2/2) | Autre vue intérieure après la rénovation énergétique, Saint-Martin-de-Queyrières |

*Réalisations similaires :* n° 14 (réfection d'une charpente avec lucarne à L'Argentière-la-Bessée), n° 11 (toiture ancienne isolée à L'Argentière-la-Bessée), n° 22 (chalet rénové et isolé à Vallouise).

*À valider avec Jean :*
- l'isolant des caissons et son épaisseur ;
- la rénovation porte-t-elle seulement sur la toiture ?
- la lucarne est-elle visible sur la photo « toiture terminée » ? Si oui, la mentionner dans le texte alternatif ;
- une photo de la lucarne en cours de création serait précieuse : « lucarne » se cherche 8 000 fois par mois (brief §7).

---

#### n° 12 — Isolation et habillage d'une voûte à L'Argentière-la-Bessée

**Cas particulier : aucune photo et aucun texte sur le site actuel.** Une page sans photo serait une page vide.

Deux options :

- **Option 1, recommandée si Jean a des photos :** publier la fiche avec le texte ci-dessous, une fois les champs remplis.
- **Option 2, sinon :** ne pas créer la page. L'ancienne adresse est redirigée (301) vers `/isolation-biosourcee/`, la page la plus proche du sujet. On ne la redirige pas vers l'accueil.

Les champs ci-dessous servent pour l'option 1.

- **Nouvelle adresse :** `/realisations/isolation-et-habillage-d-une-voute-a-l-argentiere-la-bessee/`
- **Ancienne adresse (301) :** `3bcharpente.fr/galerie/isolation-et-habillage-d-une-voute-a-l-argentiere-la-bessee`
- **Prestation principale :** Isolation biosourcée et rénovation énergétique → `/isolation-biosourcee/`
- **Page secteur :** `/charpentier-vallouise-pays-des-ecrins/`
- **Étiquettes du héros :** L'Argentière-la-Bessée · Isolation · Voûte
- **H1 :** Isolation et habillage d'une voûte à **L'Argentière-la-Bessée**
- **Balise title (52 car.) :** Voûte isolée à L'Argentière-la-Bessée | 3B Charpente
- **Meta description (146 car.) :** Isolation et habillage d'une voûte à L'Argentière-la-Bessée par 3B Charpente, charpentier et entreprise RGE installée dans la commune depuis 2007.
- **Photo du héros :** à fournir
- **Préfixe des fichiers :** `voute-isolee-argentiere-la-bessee`

*Le projet* — H2 : « Le projet à **L'Argentière-la-Bessée** »
> À L'Argentière-la-Bessée, nous avons isolé et habillé une voûte. Une voûte est un plafond en arc, le plus souvent en pierre ou en maçonnerie. L'isoler, c'est limiter les pertes de chaleur à travers elle. L'habiller, c'est la recouvrir d'un parement qui suit sa courbe.

*Fiche technique*
> - Commune : L'Argentière-la-Bessée (Hautes-Alpes)
> - Prestation : Isolation biosourcée
> - Année : [À VALIDER AVEC JEAN : année]
> - Durée : [À VALIDER AVEC JEAN : durée]
> - Surface : [À VALIDER AVEC JEAN : surface]
> - Contexte : [À VALIDER AVEC JEAN : type de pièce (cave, rez-de-chaussée…) et contexte du client]
> - Architecte : [À VALIDER AVEC JEAN : architecte éventuel]

*Ce que nous avons fait* — H2 : « Ce que nous avons **fait** »
> 1. **Isolation de la voûte.** [À VALIDER AVEC JEAN : isolant et mise en œuvre]
> 2. **Habillage.** [À VALIDER AVEC JEAN : matériau et finition du parement]

Longueur « Le projet » + « Ce que nous avons fait » : 49 mots. C'est volontairement sous la cible de 90 mots : il faut les réponses de Jean pour compléter la page.

*Galerie :* aucune photo. [À VALIDER AVEC JEAN : photos avant, pendant et après]

*Réalisations similaires :* n° 10 (bâti ancien isolé par l'intérieur), n° 11 (toiture ancienne isolée à L'Argentière-la-Bessée), n° 22 (chalet rénové et isolé à Vallouise).

*À valider avec Jean :*
- **des photos existent-elles ?** Sans photos, appliquer l'option 2 ;
- l'isolant, le matériau d'habillage et la technique (cintrage, lames, panneaux).

---

### C4. Isolation de toiture — `/isolation-toiture-sarking/`

#### n° 11 — Isolation d'une toiture ancienne en fibre de bois à L'Argentière-la-Bessée

- **Nouvelle adresse :** `/realisations/isolation-d-une-toiture-ancienne-a-l-argentiere-la-bessee/`
- **Ancienne adresse (301) :** `3bcharpente.fr/galerie/isolation-d-une-toiture-ancienne-a-l-argentiere-la-bessee`
- **Prestation principale :** Isolation de toiture → `/isolation-toiture-sarking/`. [À VALIDER AVEC JEAN : si la toiture n'est pas isolée par l'extérieur (sarking), rattacher la fiche à `/isolation-biosourcee/`.]
- **Autres prestations liées :** `/isolation-biosourcee/`, `/renovation-charpente-combles/` (renfort de charpente)
- **Page secteur :** `/charpentier-vallouise-pays-des-ecrins/`
- **Étiquettes du héros :** L'Argentière-la-Bessée · Isolation de toiture · Fibre de bois · Fenêtre de toit
- **H1 :** Isolation d'une toiture ancienne en fibre de bois à **L'Argentière-la-Bessée**
- **Balise title (57 car.) :** Toit ancien isolé à L'Argentière-la-Bessée | 3B Charpente
- **Meta description (154 car.) :** À L'Argentière-la-Bessée, isolation d'une toiture ancienne : renfort de charpente, étanchéité à l'air, panneaux en fibre de bois, fenêtre de toit. Photos.
- **Photo du héros :** n° 6 (Couverture terminée)
- **Préfixe des fichiers :** `isolation-toiture-ancienne-argentiere`

*Le projet* — H2 : « Le projet à **L'Argentière-la-Bessée** »
> Sur cette toiture ancienne de L'Argentière-la-Bessée, nous avons renforcé la charpente et isolé le toit avec des panneaux en fibre de bois, un isolant biosourcé. Le chantier comprend aussi une fenêtre de toit de 78 × 98 cm et la couverture.

*Fiche technique*
> - Commune : L'Argentière-la-Bessée (Hautes-Alpes)
> - Prestation : Isolation de toiture
> - Année : [À VALIDER AVEC JEAN : année]
> - Durée : [À VALIDER AVEC JEAN : durée]
> - Surface : [À VALIDER AVEC JEAN : surface de toiture]
> - Épaisseur d'isolant : [À VALIDER AVEC JEAN : épaisseur]
> - Contexte : [À VALIDER AVEC JEAN : contexte du client, type de bâtiment]
> - Architecte : [À VALIDER AVEC JEAN : architecte éventuel]

*Ce que nous avons fait* — H2 : « Ce que nous avons **fait** »
> 1. **Doublage pour le renfort et l'isolation.** Des pièces de bois sont ajoutées à la charpente existante : elles la renforcent et donnent l'épaisseur nécessaire à l'isolant.
> 2. **Étanchéité à l'air**, pour que l'air chaud et humide de la maison ne traverse pas l'isolant.
> 3. **Panneaux en fibre de bois.**
> 4. **Étanchéité à l'eau et ventilation** sous la couverture.
> 5. **Fenêtre de toit** de 78 × 98 cm.
> 6. **Couverture terminée.**

Longueur « Le projet » + « Ce que nous avons fait » : 105 mots.

*Les matériaux* — H2 : « Les **matériaux** du chantier »
> - **Fibre de bois** : panneaux isolants biosourcés.
> - **Bois de doublage** : renfort de la charpente existante.
> - **Fenêtre de toit** de 78 × 98 cm.

*Galerie* — H2 : « Le chantier en **7 photos** »

| # | Légende actuelle | Légende à afficher | Texte alternatif |
|---|---|---|---|
| 1 | doublage pour le renfort et l'isolation | Doublage pour le renfort et l'isolation | Doublage de la charpente ancienne pour la renforcer et l'isoler, L'Argentière-la-Bessée |
| 2 | étanchéité à l'air | Étanchéité à l'air | Pose de l'étanchéité à l'air sous une toiture ancienne à L'Argentière-la-Bessée |
| 3 | panneaux en fibre de bois | Panneaux en fibre de bois | Panneaux isolants en fibre de bois sur une toiture ancienne à L'Argentière-la-Bessée |
| 4 | étanchéité à l'eau et ventilation | Étanchéité à l'eau et ventilation | Étanchéité à l'eau et ventilation de la toiture isolée, L'Argentière-la-Bessée |
| 5 | vue de dessous d'un velux 78x98 | Fenêtre de toit de 78 × 98 cm, vue de dessous | Fenêtre de toit de 78 × 98 cm vue de l'intérieur, toiture isolée à L'Argentière-la-Bessée |
| 6 ★ | couverture terminée | Couverture terminée | Couverture terminée sur la toiture ancienne isolée en fibre de bois, L'Argentière-la-Bessée |
| 7 | vue d'ensemble intérieure | Vue d'ensemble intérieure | Vue d'ensemble sous la toiture isolée à L'Argentière-la-Bessée |

*Réalisations similaires :* n° 14 (réfection d'une charpente à L'Argentière-la-Bessée), n° 21 (lucarne à Saint-Martin-de-Queyrières), n° 18 (copropriété à Briançon).

*À valider avec Jean :*
- **la technique.** Isolation par l'extérieur (sarking : l'isolant posé en continu au-dessus des chevrons) ou entre chevrons doublés ? La page prestation liée en dépend ;
- l'épaisseur de fibre de bois ;
- le matériau de couverture ;
- le site actuel écrit « velux ». Velux est une marque : garder « fenêtre de toit », sauf si c'est bien un Velux et que Jean veut le dire.

---

### C5. Isolation des murs — `/isolation-murs-ite/`

#### n° 10 — Isolation par l'intérieur d'un bâti ancien en ouate de cellulose

- **Nouvelle adresse :** `/realisations/isolation-d-un-bati-ancien-par-l-interieur/`
- **Ancienne adresse (301) :** `3bcharpente.fr/galerie/isolation-d-un-bati-ancien-par-l-interieur`
- **Prestation principale :** Isolation des murs (ITE et bâti ancien) → `/isolation-murs-ite/`
- **Autre prestation liée :** `/isolation-biosourcee/`
- **Page secteur :** à déterminer selon la commune
- **Étiquettes du héros :** Bâti ancien · Isolation par l'intérieur · Ouate de cellulose
- **H1 :** Isolation par l'intérieur d'un bâti ancien en **ouate de cellulose**
- **Balise title (52 car.) :** Isolation intérieure d'un bâti ancien | 3B Charpente
- **Balise title cible :** « Bâti ancien isolé à {Commune} | 3B Charpente »
- **Meta description (153 car.) :** Isolation d'un bâti ancien par l'intérieur : poutres en I, OSB3, étanchéité à l'air, ouate de cellulose insufflée, bardage en pin. 12 photos du chantier.
- **Photo du héros :** n° 7 (Insufflation de ouate de cellulose)
- **Préfixe des fichiers :** `isolation-interieur-bati-ancien`

*Le projet* — H2 : « Le **projet** »
> Dans ce bâti ancien, nous avons réalisé une isolation par l'intérieur. L'isolant est de la ouate de cellulose, un isolant biosourcé fabriqué à partir de papier recyclé. Elle est insufflée, c'est-à-dire soufflée sous pression dans une paroi fermée. Le chantier comprend aussi les encadrements des menuiseries et la pose d'un bardage en pin.

*Fiche technique*
> - Commune : [À VALIDER AVEC JEAN : commune]
> - Prestation : Isolation des murs par l'intérieur
> - Année : [À VALIDER AVEC JEAN : année]
> - Durée : [À VALIDER AVEC JEAN : durée]
> - Surface : [À VALIDER AVEC JEAN : surface isolée]
> - Épaisseur d'isolant : [À VALIDER AVEC JEAN : épaisseur]
> - Contexte : [À VALIDER AVEC JEAN : type de bâtiment, contexte du client]
> - Architecte : [À VALIDER AVEC JEAN : architecte éventuel]

*Ce que nous avons fait* — H2 : « Ce que nous avons **fait** »
> 1. **Préparation** du bâti existant.
> 2. **Poutres en I.** Ce sont des poutres légères en forme de I, avec une âme fine entre deux semelles. Elles créent l'épaisseur de l'isolant.
> 3. **Panneaux OSB3** posés : des panneaux de lamelles de bois collées.
> 4. **Étanchéité à l'air**, pour que l'air chaud et humide ne traverse pas l'isolant.
> 5. **Insufflation de ouate de cellulose.**
> 6. **Doublage et encadrements** des menuiseries, livrées sur le chantier.
> 7. **Bardage en pin** posé.

Longueur « Le projet » + « Ce que nous avons fait » : 122 mots.

*Les matériaux* — H2 : « Les **matériaux** du chantier »
> - **Ouate de cellulose** insufflée : isolant biosourcé.
> - **Poutres en I** et **panneaux OSB3** : la structure qui reçoit l'isolant.
> - **Pin** : bardage.

*Galerie* — H2 : « Le chantier en **12 photos** »

| # | Légende actuelle | Légende à afficher | Texte alternatif |
|---|---|---|---|
| 1 | avant les travaux | Avant les travaux | Bâti ancien avant son isolation par l'intérieur |
| 2 | préparation | Préparation | Préparation du bâti ancien avant l'isolation par l'intérieur |
| 3 | poutre en I | Poutres en I | Poutres en I posées pour créer l'épaisseur d'isolant dans un bâti ancien |
| 4 | panneaux OSB3 | Panneaux OSB3 | Panneaux OSB3 pour l'isolation par l'intérieur d'un bâti ancien |
| 5 | panneaux posés | Panneaux posés | Panneaux posés sur la structure d'isolation intérieure d'un bâti ancien |
| 6 | pose de l'étanchéité à l'air | Pose de l'étanchéité à l'air | Pose de l'étanchéité à l'air pour l'isolation intérieure d'un bâti ancien |
| 7 ★ | insufflation de ouate de cellulose | Insufflation de ouate de cellulose | Insufflation de ouate de cellulose dans les parois d'un bâti ancien isolé par l'intérieur |
| 8 | doublage | Doublage | Doublage intérieur posé dans le bâti ancien isolé |
| 9 | menuiseries livrées! | Livraison des menuiseries | Menuiseries livrées sur le chantier d'isolation d'un bâti ancien |
| 10 | encadrement | Encadrement | Encadrement de menuiserie dans le bâti ancien isolé par l'intérieur |
| 11 | pose du bardage en pin | Pose du bardage en pin | Pose d'un bardage en pin sur le bâti ancien rénové |
| 12 | bardage posé | Bardage posé | Bardage en pin posé, fin du chantier d'isolation d'un bâti ancien |

*Réalisations similaires :* n° 22 (chalet rénové et isolé à Vallouise), n° 11 (toiture ancienne isolée à L'Argentière-la-Bessée), n° 06 (escalier en bois debout dans un bâti ancien).

*À valider avec Jean :*
- la commune ;
- l'épaisseur de ouate ;
- murs seulement, ou aussi rampants et plafonds ?
- le bardage en pin est-il à l'intérieur ou à l'extérieur ?
- les menuiseries ont-elles été fournies et posées par 3B ? (Fenêtres et portes font partie des domaines RGE de l'entreprise.)

---

### C6. Maison ossature bois — `/maison-ossature-bois/`

#### n° 13 — Maison à ossature bois dans les monts du Lyonnais

- **Nouvelle adresse :** `/realisations/maison-a-ossature-bois-dans-les-monts-du-lyonnais/`
- **Ancienne adresse (301) :** `3bcharpente.fr/galerie/maison-a-ossature-bois-dans-les-monts-du-lyonnais`
- **Prestation principale :** Maison ossature bois → `/maison-ossature-bois/`
- **Autres pages liées :** `/charpente-bois/` (charpente apparente), `/3b-recup/` (support en pierres récupérées)
- **Page secteur :** aucune, chantier hors des Hautes-Alpes. Carte « Où intervenons-nous ? » (voir A2, section 6).
- **Étiquettes du héros :** Monts du Lyonnais · Maison ossature bois · Charpente apparente · Douglas
- **H1 :** Maison à ossature bois dans les **monts du Lyonnais**
- **Balise title (54 car.) :** Maison ossature bois, monts du Lyonnais | 3B Charpente
- **Meta description (155 car.) :** Maison à ossature bois dans les monts du Lyonnais : solivage sur poteaux, charpente apparente, fibre de bois, bardage douglas, socle en pierres récupérées.
- **Photo du héros :** n° 13 (Chantier terminé) ou n° 12 (Charpente apparente au soleil couchant)
- **Préfixe des fichiers :** `maison-ossature-bois-monts-du-lyonnais`

*Le projet* — H2 : « Le projet dans les **monts du Lyonnais** »
> Hors des Hautes-Alpes, dans les monts du Lyonnais, nous avons construit une maison à ossature bois, avec une charpente et un solivage apparents. L'ossature bois est un système constructif où les murs sont faits d'une structure en bois remplie d'isolant. Les éléments ont voyagé en camion jusqu'au chantier.

*Fiche technique*
> - Lieu : monts du Lyonnais [À VALIDER AVEC JEAN : commune exacte]
> - Prestation : Maison ossature bois
> - Année : [À VALIDER AVEC JEAN : année]
> - Durée : [À VALIDER AVEC JEAN : durée]
> - Surface : [À VALIDER AVEC JEAN : surface habitable]
> - Contexte : [À VALIDER AVEC JEAN : contexte du client, pourquoi un charpentier des Hautes-Alpes]
> - Architecte : [À VALIDER AVEC JEAN : architecte éventuel]

*Ce que nous avons fait* — H2 : « Ce que nous avons **fait** »
> 1. **Chargement et départ** du camion.
> 2. **Déchargement** sur le chantier.
> 3. **Support maçonné en pierres récupérées**, un premier geste de réemploi.
> 4. **Levage du solivage sur poteaux**, jusqu'au solivage terminé.
> 5. **Levage des murs à ossature bois** et de la charpente apparente.
> 6. **Fibre de bois** posée sur l'ossature.
> 7. **Bardage en douglas.**
> 8. **Couverture terminée.**

Longueur « Le projet » + « Ce que nous avons fait » : 97 mots.

*Les matériaux* — H2 : « Les **matériaux** du chantier »
> - **Ossature bois**, avec charpente et solivage apparents.
> - **Fibre de bois** : isolant biosourcé sur l'ossature.
> - **Douglas** : bardage.
> - **Pierres récupérées** : support maçonné.

Ajouter le lien « Découvrir 3B Récup' → » vers `/3b-recup/`.

*Galerie* — H2 : « Le chantier en **13 photos** »

| # | Légende actuelle | Légende à afficher | Texte alternatif |
|---|---|---|---|
| 1 | chargement | Chargement | Chargement du camion avec les éléments de la maison à ossature bois |
| 2 | départ imminent! | Prêt pour le départ | Camion chargé, prêt à partir vers le chantier des monts du Lyonnais |
| 3 | déchargement du camion | Déchargement du camion | Déchargement du camion sur le chantier de la maison ossature bois, monts du Lyonnais |
| 4 | support maçonné en pierre récupérées | Support maçonné en pierres récupérées | Support maçonné en pierres récupérées sous la maison à ossature bois, monts du Lyonnais |
| 5 | Levage du solivage sur poteaux | Levage du solivage sur poteaux | Levage du solivage sur poteaux, maison à ossature bois dans les monts du Lyonnais |
| 6 | solivage terminé | Solivage terminé | Solivage terminé de la maison à ossature bois, monts du Lyonnais |
| 7 | Levage des murs à ossature bois et de la charpente apparente | Levage des murs à ossature bois et de la charpente apparente | Levage des murs à ossature bois et de la charpente apparente, monts du Lyonnais |
| 8 | Fibre de bois sur l'ossature bois | Fibre de bois sur l'ossature bois | Fibre de bois posée sur l'ossature bois de la maison, monts du Lyonnais |
| 9 | Bardage en douglas | Bardage en douglas | Bardage en douglas sur la maison à ossature bois des monts du Lyonnais |
| 10 | couverture terminée | Couverture terminée | Couverture terminée sur la maison à ossature bois, monts du Lyonnais |
| 11 | charpente et solivage apparents | Charpente et solivage apparents | Charpente et solivage apparents à l'intérieur de la maison à ossature bois |
| 12 | charpente apparent et soleil couchant.. | Charpente apparente au soleil couchant | Charpente apparente de la maison à ossature bois au soleil couchant, monts du Lyonnais |
| 13 ★ | chantier terminé! | Chantier terminé | Maison à ossature bois terminée dans les monts du Lyonnais |

*Réalisations similaires :* n° 24 (surélévation en ossature bois à Briançon), n° 20 (maison en mélèze de pays à Prelles), n° 19 (maison avec bardage en vieux bois à L'Argentière-la-Bessée).

*À valider avec Jean :*
- la commune exacte (monts du Lyonnais = Rhône ou Loire) ;
- les éléments ont-ils été préparés à l'atelier de L'Argentière-la-Bessée ? Si oui, c'est une preuve forte de préfabrication à écrire ;
- le support maçonné en pierres récupérées : réalisé par 3B ou par un maçon ?
- l'isolant des murs et son épaisseur ;
- l'origine du douglas.

---

### C7. Extension et surélévation bois — `/extension-surelevation-bois/`

#### n° 24 — Surélévation en ossature bois d'une maison à Briançon

- **Nouvelle adresse :** `/realisations/surelevation-en-ossature-bois-d-une-maison-a-briancon/`
- **Ancienne adresse (301) :** `3bcharpente.fr/galerie/surelevation-en-ossature-bois-d-une-maison-a-briancon`
- **Prestation principale :** Extension et surélévation bois → `/extension-surelevation-bois/`
- **Autres prestations liées :** `/maison-ossature-bois/`, `/isolation-biosourcee/` (laine de bois)
- **Page secteur :** `/charpentier-briancon/`
- **Étiquettes du héros :** Briançon · Surélévation · Ossature bois · Épicéa
- **H1 :** Surélévation en ossature bois d'une maison à **Briançon**
- **Balise title (55 car.) :** Surélévation en ossature bois à Briançon | 3B Charpente
- **Meta description (152 car.) :** Surélévation d'une maison à Briançon en ossature bois : murs pignons, pannes de 14 × 30 cm, panneaux trois plis épicéa, laine de bois. Voir le chantier.
- **Photo du héros :** n° 10 (Façade sud terminée)
- **Préfixe des fichiers :** `surelevation-ossature-bois-briancon`

*Le projet* — H2 : « Le projet à **Briançon** »
> À Briançon, nous avons surélevé une maison avec une structure en ossature bois. Surélever, c'est rehausser un bâtiment existant, souvent pour gagner un niveau. L'ossature bois, plus légère qu'une maçonnerie, limite la charge ajoutée sur les murs en place.

*Fiche technique*
> - Commune : Briançon (Hautes-Alpes)
> - Prestation : Surélévation en ossature bois
> - Année : [À VALIDER AVEC JEAN : année]
> - Durée : [À VALIDER AVEC JEAN : durée]
> - Surface gagnée : [À VALIDER AVEC JEAN : surface]
> - Contexte : [À VALIDER AVEC JEAN : contexte du client]
> - Architecte : [À VALIDER AVEC JEAN : architecte éventuel]

*Ce que nous avons fait* — H2 : « Ce que nous avons **fait** »
> 1. **Levage des murs pignons** en ossature bois. Le pignon est le mur en triangle qui suit la pente du toit.
> 2. **Pannes levées**, dont des pannes porteuses de 14 × 30 cm, entaillées. Les pannes sont les poutres horizontales qui portent la toiture.
> 3. **Décor des pannes.**
> 4. **Panneaux trois plis en épicéa** sur la toiture : trois couches de bois croisées, qui assurent le contreventement (la stabilité face au vent) et l'étanchéité à l'air. Ils restent apparents à l'intérieur.
> 5. **Remplissage en laine de bois.**
> 6. **Dépassée de toit** et façade sud terminée.

Longueur « Le projet » + « Ce que nous avons fait » : 127 mots.

*Les matériaux* — H2 : « Les **matériaux** du chantier »
> - **Ossature bois** : murs pignons.
> - **Pannes porteuses** de 14 × 30 cm, entaillées.
> - **Panneaux trois plis en épicéa** : contreventement et étanchéité à l'air de la toiture, apparents en sous-face.
> - **Laine de bois** : isolant biosourcé de remplissage.

*Galerie* — H2 : « Le chantier en **10 photos** »

| # | Légende actuelle | Légende à afficher | Texte alternatif |
|---|---|---|---|
| 1 | 1 levage d'un mur pignonIMG_0948 | Levage d'un mur pignon (1/2) | Levage d'un mur pignon en ossature bois pour la surélévation d'une maison à Briançon |
| 2 | 1 levage d'un mur pignon | Levage d'un mur pignon (2/2) | Mur pignon en ossature bois levé sur une maison à Briançon |
| 3 | 1 pannes levéesP8290281 | Pannes levées | Pannes de toiture levées sur la surélévation en ossature bois, Briançon |
| 4 | 1 panes porteuses en14x30 entaillées | Pannes porteuses de 14 × 30 cm, entaillées | Pannes porteuses de 14 × 30 cm entaillées, surélévation d'une maison à Briançon |
| 5 | 1décors de pannes | Décor des pannes | Pannes décorées de la surélévation en ossature bois à Briançon |
| 6 | 1panneau trois plis épicéa pour le contreventement et l'étanchéité à l'air de la toiture | Panneaux trois plis en épicéa pour le contreventement et l'étanchéité à l'air de la toiture | Panneaux trois plis en épicéa posés sur la toiture pour le contreventement, Briançon |
| 7 | 1 panneaux trois plis épicéa apparents du dessous | Panneaux trois plis en épicéa, apparents depuis l'intérieur | Sous-face apparente des panneaux trois plis en épicéa, surélévation à Briançon |
| 8 | 1 remplissage en laine de bois | Remplissage en laine de bois | Isolation en laine de bois dans la surélévation en ossature bois à Briançon |
| 9 | 1 détail de dépassée de toit | Détail de la dépassée de toit | Détail de la dépassée de toit de la maison surélevée à Briançon |
| 10 ★ | 1façade sud finie | Façade sud terminée | Façade sud de la maison surélevée en ossature bois à Briançon (Hautes-Alpes) |

*Réalisations similaires :* n° 23 (surélévation à Pelvoux), n° 13 (maison à ossature bois dans les monts du Lyonnais), n° 18 (copropriété à Briançon).

*À valider avec Jean :*
- l'essence de l'ossature et des pannes (mélèze, sapin ?) ;
- l'épaisseur de laine de bois ;
- la surface gagnée et le nombre de niveaux ajoutés ;
- le « décor des pannes » : abouts sculptés, chanfreins ? Une phrase de Jean sur ce détail serait précieuse.

---

#### n° 23 — Surélévation à Pelvoux

- **Nouvelle adresse :** `/realisations/surelevation-a-pelvoux/`
- **Ancienne adresse (301) :** `3bcharpente.fr/galerie/surelevation-a-pelvoux`
- **Prestation principale :** Extension et surélévation bois → `/extension-surelevation-bois/`
- **Page secteur :** `/charpentier-vallouise-pays-des-ecrins/`
- **Étiquettes du héros :** Pelvoux · Vallouise-Pelvoux · Surélévation
- **H1 :** Surélévation à **Pelvoux**, avec une dépassée de toit sur consoles
- **Balise title (57 car.) :** Surélévation à Pelvoux (Vallouise-Pelvoux) | 3B Charpente
- **Meta description (153 car.) :** Surélévation à Pelvoux par 3B Charpente, charpentier à L'Argentière-la-Bessée depuis 2007 : levage, consoles de dépassée de toit, vue intérieure. Photos.
- **Photo du héros :** n° 6 (Chantier terminé)
- **Préfixe des fichiers :** `surelevation-pelvoux`

*Le projet* — H2 : « Le projet à **Pelvoux** »
> À Pelvoux, au pied du massif des Écrins, nous avons réalisé une surélévation. Surélever, c'est rehausser un bâtiment existant pour gagner de la hauteur ou un niveau. Pelvoux fait partie de la commune de Vallouise-Pelvoux. La nouvelle toiture déborde du mur : c'est la dépassée, qui repose ici sur des consoles. Les photos suivent le chantier de l'état d'origine jusqu'au résultat, dedans comme dehors.

*Fiche technique*
> - Commune : Pelvoux, Vallouise-Pelvoux (Hautes-Alpes)
> - Prestation : Surélévation
> - Année : [À VALIDER AVEC JEAN : année]
> - Durée : [À VALIDER AVEC JEAN : durée]
> - Surface gagnée : [À VALIDER AVEC JEAN : surface]
> - Contexte : [À VALIDER AVEC JEAN : type de bâtiment, contexte du client]
> - Architecte : [À VALIDER AVEC JEAN : architecte éventuel]

*Ce que nous avons fait* — H2 : « Ce que nous avons **fait** »
> 1. **État avant travaux.**
> 2. **Chantier en cours**, puis première moitié de l'ouvrage.
> 3. **Console de dépassée de toit.** Une console est une pièce en porte-à-faux, fixée au mur, qui soutient ce débord.
> 4. **Vue intérieure.**
> 5. **Chantier terminé.**

Longueur « Le projet » + « Ce que nous avons fait » : 97 mots.

*Les matériaux :* non précisés par la source. Section masquée. [À VALIDER AVEC JEAN : système constructif (ossature bois ?), essences, isolant]

*Galerie* — H2 : « Le chantier en **6 photos** »

| # | Légende actuelle | Légende à afficher | Texte alternatif |
|---|---|---|---|
| 1 | avnat | Avant les travaux | Bâtiment à Pelvoux avant sa surélévation |
| 2 | en cours | Chantier en cours | Chantier de surélévation en cours à Pelvoux (Vallouise-Pelvoux) |
| 3 | première moitié | Première moitié de l'ouvrage | Première moitié de la surélévation à Pelvoux |
| 4 | console de dépassée de toit | Console de dépassée de toit | Console soutenant la dépassée de toit de la surélévation à Pelvoux |
| 5 | vue intérieure | Vue intérieure | Vue intérieure de la surélévation à Pelvoux |
| 6 ★ | chantier terminé | Chantier terminé | Surélévation terminée à Pelvoux, dans le Pays des Écrins (Hautes-Alpes) |

*Réalisations similaires :* n° 24 (surélévation en ossature bois à Briançon), n° 03 (abri de jardin à Pelvoux), n° 22 (chalet rénové et isolé à Vallouise).

*À valider avec Jean :*
- le type de bâtiment (maison, chalet, grange) ;
- le système constructif (ossature bois ?) et les essences ;
- l'isolant ;
- ce que montre « première moitié » (la moitié de la structure levée ?).

---

### C8. Escaliers bois sur mesure — `/escalier-bois-sur-mesure/`

#### n° 08 — Escalier quart tournant en mélèze lamellé-collé

- **Nouvelle adresse :** `/realisations/escalier-1-4-tournant-en-meleze-lamelle-colle/`
- **Ancienne adresse (301) :** `3bcharpente.fr/galerie/escalier-1-4-tournant-en-meleze-lamelle-colle`
- **Prestation principale :** Escaliers bois sur mesure → `/escalier-bois-sur-mesure/`
- **Autre prestation liée :** `/renovation-charpente-combles/` (combles rénovés par 3B)
- **Page secteur :** à déterminer selon la commune
- **Étiquettes du héros :** Escalier quart tournant · Mélèze lamellé-collé · Combles
- **H1 :** Escalier quart tournant en **mélèze lamellé-collé**
- **Balise title (59 car.) :** Escalier quart tournant en mélèze sur mesure | 3B Charpente
- **Balise title cible :** « Escalier quart tournant à {Commune} | 3B Charpente »
- **Meta description (153 car.) :** Escalier quart tournant en mélèze lamellé-collé : dessiné, tracé et taillé dans notre atelier, monté en deux jours finitions comprises. Voir le chantier.
- **Photo du héros :** n° 6 (Montage terminé)
- **Préfixe des fichiers :** `escalier-quart-tournant-meleze`

*Le projet* — H2 : « Le **projet** »
> Nous avons rénové la maison où cet escalier est posé, combles compris. L'escalier mène aux combles et sert aussi de cloison rampante à la salle de bains. Il est en mélèze lamellé-collé : des lamelles de mélèze collées entre elles, pour un bois stable qui travaille peu.

*Fiche technique*
> - Commune : [À VALIDER AVEC JEAN : commune]
> - Prestation : Escalier sur mesure
> - Bois : mélèze lamellé-collé
> - Montage sur place : deux jours, finitions comprises
> - Année : [À VALIDER AVEC JEAN : année]
> - Contexte : [À VALIDER AVEC JEAN : contexte du client]
> - Architecte : [À VALIDER AVEC JEAN : architecte éventuel]

*Ce que nous avons fait* — H2 : « Ce que nous avons **fait** »
> 1. **Prise de cotes** sur place.
> 2. **Dessin.** Nous dessinons l'escalier et proposons une esthétique au client.
> 3. **Atelier.** Une fois le dessin validé, nous traçons, taillons et assemblons l'escalier dans notre atelier.
> 4. **Montage en deux jours**, finitions comprises : départ de l'escalier, balancement des marches, puis seconde volée. Balancer les marches, c'est faire varier leur largeur dans le virage pour garder un pas régulier.
> 5. **Marches et contremarches** posées sur des crémaillères, les pièces découpées en escalier qui les portent.

Longueur « Le projet » + « Ce que nous avons fait » : 122 mots.

*Les matériaux* — H2 : « Les **matériaux** du chantier »
> - **Mélèze lamellé-collé** : marches, contremarches et crémaillères.

*Galerie* — H2 : « Le chantier en **7 photos** »

| # | Légende actuelle | Légende à afficher | Texte alternatif |
|---|---|---|---|
| 1 | Lieu en attente de l'escalier | L'emplacement avant l'escalier | Emplacement prévu pour l'escalier quart tournant, avant le montage |
| 2 | début de montage | Début du montage | Début du montage de l'escalier quart tournant en mélèze lamellé-collé |
| 3 | départ d'escalier terminé | Départ de l'escalier terminé | Départ terminé de l'escalier quart tournant en mélèze lamellé-collé |
| 4 | balancement des marches | Balancement des marches | Marches balancées dans le virage de l'escalier quart tournant en mélèze |
| 5 | seconde volée | Seconde volée | Seconde volée de l'escalier quart tournant en mélèze lamellé-collé |
| 6 ★ | montage terminé | Montage terminé | Escalier quart tournant en mélèze lamellé-collé terminé, accès aux combles |
| 7 | combles rénovés par nos soins | Les combles, rénovés par nos soins | Combles rénovés par 3B Charpente, desservis par l'escalier quart tournant en mélèze |

*Réalisations similaires :* n° 06 (escalier en bois debout dans un bâti ancien), n° 09 (escalier en frêne et aluminium), n° 16 (ancienne forge à La Salle-les-Alpes, avec un escalier quart tournant).

*À valider avec Jean :*
- la commune ;
- l'année ;
- d'autres photos des combles rénovés : elles pourraient nourrir `/renovation-charpente-combles/`.

---

#### n° 06 — Création d'un escalier en bois debout dans un bâti ancien

- **Nouvelle adresse :** `/realisations/creation-d-un-escalier-en-bois-debout-dans-un-bati-ancien/`
- **Ancienne adresse (301) :** `3bcharpente.fr/galerie/creation-d-un-escalier-en-bois-debout-dans-un-bati-ancien`
- **Prestation principale :** Escaliers bois sur mesure → `/escalier-bois-sur-mesure/`
- **Page secteur :** à déterminer selon la commune
- **Étiquettes du héros :** Bâti ancien · Escalier · Bois debout · Trois plis
- **H1 :** Création d'un escalier en **bois debout** dans un bâti ancien
- **Balise title (58 car.) :** Escalier en bois debout dans un bâti ancien | 3B Charpente
- **Meta description (150 car.) :** Escalier en bois debout dans un bâti ancien : dépose de l'ancien escalier, caissons en panneau trois plis, contremarches, pose du bois debout. Photos.
- **Photo du héros :** n° 6 (Escalier terminé)
- **Préfixe des fichiers :** `escalier-bois-debout-bati-ancien`

*Le projet* — H2 : « Le **projet** »
> Dans un bâti ancien, nous avons remplacé un vieil escalier par un escalier neuf en bois debout. Le bois debout est du bois coupé en travers des fibres : on voit en surface les cernes de croissance, comme sur une tranche de rondin. Il est associé ici à des caissons en panneau trois plis.

*Fiche technique*
> - Commune : [À VALIDER AVEC JEAN : commune]
> - Prestation : Escalier sur mesure
> - Année : [À VALIDER AVEC JEAN : année]
> - Durée : [À VALIDER AVEC JEAN : durée]
> - Contexte : [À VALIDER AVEC JEAN : contexte du client]
> - Architecte : [À VALIDER AVEC JEAN : architecte éventuel]

*Ce que nous avons fait* — H2 : « Ce que nous avons **fait** »
> 1. **Démolition de l'ancien escalier.**
> 2. **Caissons en panneau trois plis.** Le trois plis est un panneau de bois massif fait de trois couches croisées.
> 3. **Caissons terminés.**
> 4. **Contremarches**, les parties verticales entre deux marches.
> 5. **Pose du bois debout.**
> 6. **Escalier terminé.**

Longueur « Le projet » + « Ce que nous avons fait » : 91 mots.

*Les matériaux* — H2 : « Les **matériaux** du chantier »
> - **Bois debout** : bois coupé en travers des fibres.
> - **Panneau trois plis** : les caissons.

*Galerie* — H2 : « Le chantier en **6 photos** »

| # | Légende actuelle | Légende à afficher | Texte alternatif |
|---|---|---|---|
| 1 | ancien escalier démoli | Ancien escalier démoli | Ancien escalier démoli dans un bâti ancien, avant le nouvel escalier en bois debout |
| 2 | caisson en panneau 3plis | Caisson en panneau trois plis | Caisson en panneau trois plis pour l'escalier en bois debout d'un bâti ancien |
| 3 | caissons terminés | Caissons terminés | Caissons en trois plis terminés pour le nouvel escalier du bâti ancien |
| 4 | contre marches | Contremarches | Contremarches de l'escalier en bois debout dans un bâti ancien |
| 5 | bois debout en cours de pose | Pose du bois debout | Pose du bois debout sur l'escalier neuf d'un bâti ancien |
| 6 ★ | escalier terminé | Escalier terminé | Escalier en bois debout terminé dans un bâti ancien |

*Réalisations similaires :* n° 08 (escalier quart tournant en mélèze lamellé-collé), n° 09 (escalier en frêne et aluminium), n° 07 (plancher dans un bâti ancien).

*À valider avec Jean :*
- la commune ;
- l'essence du bois debout et son rôle (dessus des marches ?) ;
- l'ordre des étapes 4 et 5 (contremarches avant ou après le bois debout) ;
- la forme de l'escalier (droit, tournant).

---

#### n° 09 — Fabrication d'un escalier en frêne et aluminium

- **Nouvelle adresse :** `/realisations/fabrication-d-un-escalier/`
- **Ancienne adresse (301) :** `3bcharpente.fr/galerie/fabrication-d-un-escalier`
- **Prestation principale :** Escaliers bois sur mesure → `/escalier-bois-sur-mesure/`
- **Page secteur :** à déterminer selon la commune
- **Étiquettes du héros :** Escalier · Frêne · Aluminium
- **H1 :** Fabrication d'un escalier en **frêne et aluminium**
- **Balise title (56 car.) :** Escalier en frêne et aluminium sur mesure | 3B Charpente
- **Meta description (151 car.) :** Fabrication d'un escalier sur mesure en frêne et aluminium par 3B Charpente, charpentier dans les Hautes-Alpes depuis 2007. Voir le résultat en photos.
- **Photo du héros :** n° 1 (Frêne et aluminium)
- **Préfixe des fichiers :** `escalier-frene-aluminium`

*Le projet* — H2 : « Le **projet** »
> Nous avons fabriqué un escalier sur mesure qui associe le frêne et l'aluminium. Le frêne est un bois feuillu, clair et dur, qui résiste bien à l'usure : il convient aux marches. L'aluminium est un métal léger qui ne rouille pas. Comme tous nos escaliers, celui-ci est fait sur mesure : il est dessiné pour son emplacement exact, selon la hauteur à monter, la place disponible et la forme de la trémie, c'est-à-dire l'ouverture dans le plancher.

*Fiche technique*
> - Commune : [À VALIDER AVEC JEAN : commune]
> - Prestation : Escalier sur mesure
> - Matériaux : frêne et aluminium
> - Année : [À VALIDER AVEC JEAN : année]
> - Contexte : [À VALIDER AVEC JEAN : contexte du client]
> - Architecte : [À VALIDER AVEC JEAN : architecte éventuel]

*Ce que nous avons fait* — H2 : « Ce que nous avons **fait** »
> 1. **Fabrication** de l'escalier en frêne et aluminium.
> 2. **L'arrivée de l'escalier**, c'est-à-dire sa partie haute.
> 3. **Le détail du frêne et de l'aluminium**, que montre la photo principale.

Longueur « Le projet » + « Ce que nous avons fait » : 101 mots.

*Les matériaux* — H2 : « Les **matériaux** du chantier »
> - **Frêne** : bois feuillu clair et dur.
> - **Aluminium.**

*Galerie* — H2 : « Le chantier en **2 photos** »

| # | Légende actuelle | Légende à afficher | Texte alternatif |
|---|---|---|---|
| 1 ★ | frêne et aluminium | Frêne et aluminium | Escalier sur mesure en frêne et aluminium fabriqué par 3B Charpente |
| 2 | arrivée de l'escalier | L'arrivée de l'escalier | Arrivée de l'escalier en frêne et aluminium |

*Réalisations similaires :* n° 08 (escalier quart tournant en mélèze lamellé-collé), n° 06 (escalier en bois debout dans un bâti ancien), n° 19 (maison avec escalier balancé à L'Argentière-la-Bessée).

*À valider avec Jean :*
- **le sens de « arrivée de l'escalier ».** Partie haute de l'escalier, ou livraison sur le chantier ? Corriger l'étape 2 si c'est une livraison ;
- la commune ;
- la forme de l'escalier ;
- le rôle de l'aluminium (limons, garde-corps, nez de marche ?) et qui a fait la partie métal ;
- l'escalier a-t-il été fabriqué à l'atelier ?
- d'autres photos : la page est très courte.

---

### C9. Balcons, terrasses et abris bois — `/balcon-terrasse-abri-bois/`

#### n° 02 — Terrasse couverte et abri voiture à Champcella

- **Nouvelle adresse :** `/realisations/construction-d-une-terrasse-couverte-a-champcella/`
- **Ancienne adresse (301) :** `3bcharpente.fr/galerie/construction-d-une-terrasse-couverte-a-champcella`
- **Prestation principale :** Balcons, terrasses et abris bois → `/balcon-terrasse-abri-bois/`
- **Autre prestation liée :** `/charpente-bois/` (assemblages traditionnels)
- **Page secteur :** `/charpentier-vallouise-pays-des-ecrins/`
- **Étiquettes du héros :** Champcella · Terrasse couverte · Abri voiture · Mélèze de pays
- **H1 :** Terrasse couverte et abri voiture à **Champcella**
- **Balise title (53 car.) :** Terrasse couverte en bois à Champcella | 3B Charpente
- **Meta description (152 car.) :** À Champcella, terrasse couverte avec local technique et abri voiture dans le prolongement du toit : plancher en mélèze de pays, tenons passants. Photos.
- **Photo du héros :** n° 1 (Terrasse couverte et local technique)
- **Préfixe des fichiers :** `terrasse-couverte-champcella`

*Le projet* — H2 : « Le projet à **Champcella** »
> À Champcella, nous avons construit une terrasse couverte. Sa toiture se prolonge pour abriter une voiture, et l'ensemble accueille aussi un local technique. Le plancher est en mélèze de pays, c'est-à-dire en mélèze local, et les assemblages restent visibles. Une terrasse couverte permet de profiter de l'extérieur à l'abri de la pluie et de la neige.

*Fiche technique*
> - Commune : Champcella (Hautes-Alpes)
> - Prestation : Terrasse couverte et abri voiture
> - Année : [À VALIDER AVEC JEAN : année]
> - Durée : [À VALIDER AVEC JEAN : durée]
> - Surface : [À VALIDER AVEC JEAN : surface couverte]
> - Contexte : [À VALIDER AVEC JEAN : contexte du client]
> - Architecte : [À VALIDER AVEC JEAN : architecte éventuel]

*Ce que nous avons fait* — H2 : « Ce que nous avons **fait** »
> 1. **Charpente de la terrasse couverte**, avec ses assemblages taillés.
> 2. **Tenons passants.** Le tenon traverse toute la pièce et ressort de l'autre côté, où on le voit.
> 3. **Plancher en mélèze de pays.**
> 4. **Abri voiture** dans le prolongement de la toiture.
> 5. **Local technique** intégré à l'ouvrage.

Longueur « Le projet » + « Ce que nous avons fait » : 100 mots.

*Les matériaux* — H2 : « Les **matériaux** du chantier »
> - **Mélèze de pays** : plancher de la terrasse.

*Galerie* — H2 : « Le chantier en **5 photos** »

| # | Légende actuelle | Légende à afficher | Texte alternatif |
|---|---|---|---|
| 1 ★ | terrasse couverte et local technique | Terrasse couverte et local technique | Terrasse couverte en bois et local technique construits à Champcella (Hautes-Alpes) |
| 2 | abris de voiture en prolongement de toiture | Abri voiture dans le prolongement de la toiture | Abri voiture dans le prolongement de la toiture de la terrasse couverte, Champcella |
| 3 | plancher en mélèze pays | Plancher en mélèze de pays | Plancher en mélèze de pays de la terrasse couverte à Champcella |
| 4 | tenon passant | Tenon passant | Assemblage à tenon passant sur la charpente de la terrasse couverte, Champcella |
| 5 | détail d'assemblage | Détail d'assemblage | Détail d'assemblage de la charpente de la terrasse couverte à Champcella |

*Réalisations similaires :* n° 01 (abri voiture à L'Argentière-la-Bessée), n° 04 (balcon en mélèze à La Roche-de-Rame), n° 20 (maison en mélèze de pays à Prelles).

*À valider avec Jean :*
- l'essence de la charpente ;
- le matériau de couverture ;
- la terrasse est-elle accolée à la maison ou indépendante ?

---

#### n° 01 — Abri voiture en charpente traditionnelle à L'Argentière-la-Bessée

- **Nouvelle adresse :** `/realisations/abris-voiture-a-l-argentiere-la-bessee/`
- **Ancienne adresse (301) :** `3bcharpente.fr/galerie/abris-voiture-a-l-argentiere-la-bessee`
- **Prestation principale :** Balcons, terrasses et abris bois → `/balcon-terrasse-abri-bois/`
- **Autre prestation liée :** `/charpente-bois/` (ferme et assemblages chevillés)
- **Page secteur :** `/charpentier-vallouise-pays-des-ecrins/`
- **Étiquettes du héros :** L'Argentière-la-Bessée · Abri voiture · Charpente traditionnelle
- **H1 :** Abri voiture en charpente traditionnelle à **L'Argentière-la-Bessée**
- **Balise title (52 car.) :** Abri voiture à L'Argentière-la-Bessée | 3B Charpente
- **Meta description (151 car.) :** Abri voiture en bois à L'Argentière-la-Bessée : ferme avec poinçon et entrait cintré, assemblages tenon-mortaise chevillés. Voir le chantier en photos.
- **Photo du héros :** n° 1 (Poinçon et entrait cintré)
- **Préfixe des fichiers :** `abri-voiture-argentiere-la-bessee`

*Le projet* — H2 : « Le projet à **L'Argentière-la-Bessée** »
> À L'Argentière-la-Bessée, nous avons construit un abri voiture en charpente traditionnelle. Sa structure comprend une ferme avec un poinçon et un entrait cintré, assemblée par tenons et mortaises chevillés. C'est un petit ouvrage, mais il est taillé avec les assemblages de la charpente traditionnelle.

*Fiche technique*
> - Commune : L'Argentière-la-Bessée (Hautes-Alpes)
> - Prestation : Abri voiture en bois
> - Année : [À VALIDER AVEC JEAN : année]
> - Durée : [À VALIDER AVEC JEAN : durée]
> - Surface : [À VALIDER AVEC JEAN : surface couverte]
> - Contexte : [À VALIDER AVEC JEAN : contexte du client]
> - Essence et couverture : [À VALIDER AVEC JEAN : essence, matériau de couverture]

*Ce que nous avons fait* — H2 : « Ce que nous avons **fait** »
> 1. **La ferme.** Le poinçon est la pièce verticale au centre. L'entrait est la pièce horizontale du bas, ici cintrée, c'est-à-dire courbe.
> 2. **Les assemblages tenon-mortaise chevillés.** Le tenon, au bout d'une pièce, entre dans la mortaise, une entaille creusée dans l'autre. Une cheville en bois traverse le tout et le serre.

Longueur « Le projet » + « Ce que nous avons fait » : 94 mots.

*Les matériaux :* essence non précisée par la source. Section masquée. [À VALIDER AVEC JEAN : essence]

*Galerie* — H2 : « Le chantier en **2 photos** »

| # | Légende actuelle | Légende à afficher | Texte alternatif |
|---|---|---|---|
| 1 ★ | poinçon et entrait cintré | Poinçon et entrait cintré | Ferme d'abri voiture avec poinçon et entrait cintré à L'Argentière-la-Bessée |
| 2 | tenons mortaise chevillé | Assemblage tenon-mortaise chevillé | Assemblage tenon-mortaise chevillé de l'abri voiture en bois, L'Argentière-la-Bessée |

*Réalisations similaires :* n° 02 (terrasse couverte et abri voiture à Champcella), n° 03 (abri de jardin à Pelvoux), n° 14 (réfection d'une charpente à L'Argentière-la-Bessée).

*À valider avec Jean :*
- un ou plusieurs abris ? Le titre actuel dit « Abris ». Le H1 corrigé met « abri » au singulier, comme les légendes ;
- l'essence et la couverture ;
- une photo d'ensemble de l'abri terminé, qui manque aujourd'hui.

---

#### n° 04 — Création d'un balcon en mélèze à La Roche-de-Rame

- **Nouvelle adresse :** `/realisations/creation-d-un-balcon-a-la-roche-de-rame/`
- **Ancienne adresse (301) :** `3bcharpente.fr/galerie/creation-d-un-balcon-a-la-roche-de-rame`
- **Prestation principale :** Balcons, terrasses et abris bois → `/balcon-terrasse-abri-bois/`
- **Page secteur :** `/charpentier-vallouise-pays-des-ecrins/`
- **Étiquettes du héros :** La Roche-de-Rame · Balcon · Mélèze
- **H1 :** Création d'un balcon en mélèze à **La Roche-de-Rame**
- **Balise title (50 car.) :** Balcon en mélèze à La Roche-de-Rame | 3B Charpente
- **Meta description (147 car.) :** À La Roche-de-Rame, 3B Charpente a créé un balcon en mélèze porté par des portiques, avec sa balustrade en mélèze. Charpentier depuis 2007. Photos.
- **Photo du héros :** n° 2 (Vue d'ensemble)
- **Préfixe des fichiers :** `balcon-meleze-la-roche-de-rame`

*Le projet* — H2 : « Le projet à **La Roche-de-Rame** »
> À La Roche-de-Rame, nous avons créé un balcon en mélèze. Il est porté par des portiques : des cadres en bois faits de poteaux et d'une poutre. Ces cadres reprennent le poids du balcon, qui ne pèse pas seulement sur la façade. Une balustrade en mélèze le borde. Avec le sapin, le mélèze est l'essence que nous utilisons le plus ; il pousse dans les forêts des Hautes-Alpes.

*Fiche technique*
> - Commune : La Roche-de-Rame (Hautes-Alpes)
> - Prestation : Balcon en bois
> - Bois : mélèze
> - Année : [À VALIDER AVEC JEAN : année]
> - Durée : [À VALIDER AVEC JEAN : durée]
> - Surface : [À VALIDER AVEC JEAN : surface du balcon]
> - Contexte : [À VALIDER AVEC JEAN : contexte du client]

*Ce que nous avons fait* — H2 : « Ce que nous avons **fait** »
> 1. **Portiques porteurs en mélèze**, qui portent le balcon.
> 2. **Balustrade en mélèze**, le garde-corps qui protège des chutes.
> 3. **Vue d'ensemble** du balcon terminé, avec ses portiques et sa balustrade.

Longueur « Le projet » + « Ce que nous avons fait » : 94 mots.

*Les matériaux* — H2 : « Les **matériaux** du chantier »
> - **Mélèze** : portiques porteurs et balustrade.

*Galerie* — H2 : « Le chantier en **2 photos** »

| # | Légende actuelle | Légende à afficher | Texte alternatif |
|---|---|---|---|
| 1 | portiques porteurs et balustrade en mélèze | Portiques porteurs et balustrade en mélèze | Portiques porteurs et balustrade en mélèze du balcon créé à La Roche-de-Rame |
| 2 ★ | vue d'ensemble | Vue d'ensemble | Balcon en mélèze sur portiques à La Roche-de-Rame (Hautes-Alpes), vue d'ensemble |

*Réalisations similaires :* n° 05 (balcon-terrasse à Gresse-en-Vercors), n° 02 (terrasse couverte à Champcella), n° 22 (chalet de Vallouise et sa terrasse en mélèze).

*À valider avec Jean :*
- la provenance du mélèze (Scierie Savoldelli ?). Si oui, on peut l'écrire pour ce chantier ;
- le plancher du balcon : essence, lames ;
- une photo du balcon en cours de pose.

---

#### n° 03 — Création d'un abri de jardin à Pelvoux

- **Nouvelle adresse :** `/realisations/creation-d-un-abris-de-jardin-a-pelvoux/`
- **Ancienne adresse (301) :** `3bcharpente.fr/galerie/creation-d-un-abris-de-jardin-a-pelvoux`
- **Prestation principale :** Balcons, terrasses et abris bois → `/balcon-terrasse-abri-bois/`
- **Page secteur :** `/charpentier-vallouise-pays-des-ecrins/`
- **Étiquettes du héros :** Pelvoux · Vallouise-Pelvoux · Abri de jardin
- **H1 :** Création d'un abri de jardin à **Pelvoux**
- **Balise title (59 car.) :** Abri de jardin à Pelvoux (Vallouise-Pelvoux) | 3B Charpente
- **Meta description (144 car.) :** Création d'un abri de jardin à Pelvoux par 3B Charpente, charpentier installé à L'Argentière-la-Bessée depuis 2007 : du levage à l'abri terminé.
- **Photo du héros :** n° 2 (Abri terminé)
- **Préfixe des fichiers :** `abri-jardin-pelvoux`

*Le projet* — H2 : « Le projet à **Pelvoux** »
> À Pelvoux, nous avons créé un abri de jardin. Même pour un petit ouvrage, la méthode reste celle du charpentier : une structure levée sur place, jusqu'à l'abri terminé. En montagne, un abri sert souvent à garder au sec le bois de chauffage, les outils ou le matériel. Pelvoux fait partie de la commune de Vallouise-Pelvoux, où nous avons aussi réalisé une surélévation. Nous construisons aussi des abris voiture, comme à L'Argentière-la-Bessée, et des terrasses couvertes, comme à Champcella.

*Fiche technique*
> - Commune : Pelvoux, Vallouise-Pelvoux (Hautes-Alpes)
> - Prestation : Abri de jardin
> - Année : [À VALIDER AVEC JEAN : année]
> - Durée : [À VALIDER AVEC JEAN : durée]
> - Surface : [À VALIDER AVEC JEAN : surface de l'abri]
> - Contexte : [À VALIDER AVEC JEAN : contexte du client, usage de l'abri]
> - Essence et couverture : [À VALIDER AVEC JEAN : essence, matériau de couverture]

*Ce que nous avons fait* — H2 : « Ce que nous avons **fait** »
> 1. **Levage de la structure.** Le levage, c'est le moment où la charpente préparée est montée et assemblée sur place.
> 2. **Abri terminé.**

Longueur « Le projet » + « Ce que nous avons fait » : 99 mots.

*Les matériaux :* non précisés par la source. Section masquée. [À VALIDER AVEC JEAN : essence et couverture]

*Galerie* — H2 : « Le chantier en **2 photos** »

| # | Légende actuelle | Légende à afficher | Texte alternatif |
|---|---|---|---|
| 1 | en cours de levage | En cours de levage | Levage de la structure d'un abri de jardin à Pelvoux |
| 2 ★ | réalisation terminé | Abri terminé | Abri de jardin terminé à Pelvoux (Vallouise-Pelvoux, Hautes-Alpes) |

*Réalisations similaires :* n° 01 (abri voiture à L'Argentière-la-Bessée), n° 02 (terrasse couverte à Champcella), n° 23 (surélévation à Pelvoux).

*À valider avec Jean :*
- l'essence et la couverture. Avec une essence confirmée, le H1 peut devenir « Abri de jardin en {essence} à Pelvoux » (« abri de jardin bois » est une recherche courante) ;
- l'usage de l'abri : la phrase « en montagne, un abri sert souvent… » reste générale tant que l'usage réel n'est pas connu.

---

#### n° 05 — Création d'un balcon-terrasse à Gresse-en-Vercors (Isère)

- **Nouvelle adresse :** `/realisations/creation-d-un-balcon-terrasse-a-gresse-en-vercors/`
- **Ancienne adresse (301) :** `3bcharpente.fr/galerie/creation-d-un-balcon-terrasse-a-gresse-en-vercors`
- **Prestation principale :** Balcons, terrasses et abris bois → `/balcon-terrasse-abri-bois/`
- **Page secteur :** aucune, chantier hors des Hautes-Alpes. Carte « Où intervenons-nous ? » (voir A2, section 6).
- **Étiquettes du héros :** Gresse-en-Vercors · Isère · Balcon-terrasse
- **H1 :** Création d'un balcon-terrasse à **Gresse-en-Vercors**
- **Balise title (58 car.) :** Balcon-terrasse à Gresse-en-Vercors (Isère) | 3B Charpente
- **Meta description (154 car.) :** Création d'un balcon-terrasse à Gresse-en-Vercors, en Isère : du dessin du projet à l'ouvrage terminé, vu d'en bas, d'en haut et de face. Voir les photos.
- **Photo du héros :** n° 5 (Vu de face)
- **Préfixe des fichiers :** `balcon-terrasse-gresse-en-vercors`

*Le projet* — H2 : « Le projet à **Gresse-en-Vercors** »
> Hors des Hautes-Alpes, à Gresse-en-Vercors, en Isère, nous avons créé un balcon-terrasse. Comme chaque projet chez nous, il a commencé par une étude sur mesure et un dessin. Comme tous nos balcons, il est conçu pour s'intégrer à l'environnement de montagne et à l'âme de la maison. Basés dans le nord des Hautes-Alpes, nous intervenons aussi en région PACA et en Rhône-Alpes.

*Fiche technique*
> - Commune : Gresse-en-Vercors (Isère)
> - Prestation : Balcon-terrasse
> - Année : [À VALIDER AVEC JEAN : année]
> - Durée : [À VALIDER AVEC JEAN : durée]
> - Surface : [À VALIDER AVEC JEAN : surface]
> - Contexte : [À VALIDER AVEC JEAN : contexte du client]
> - Essence et structure : [À VALIDER AVEC JEAN : essence, système porteur]

*Ce que nous avons fait* — H2 : « Ce que nous avons **fait** »
> 1. **Le dessin** du balcon-terrasse. Il permet de valider la forme et les dimensions avant de tailler la moindre pièce.
> 2. **L'état avant travaux.**
> 3. **Le balcon-terrasse terminé**, vu d'en bas, d'en haut et de face.

Longueur « Le projet » + « Ce que nous avons fait » : 95 mots.

*Les matériaux :* non précisés par la source. Section masquée. [À VALIDER AVEC JEAN : essence et structure]

*Galerie* — H2 : « Le chantier en **5 photos** »

| # | Légende actuelle | Légende à afficher | Texte alternatif |
|---|---|---|---|
| 1 | dessin | Le dessin du projet | Dessin du projet de balcon-terrasse à Gresse-en-Vercors |
| 2 | avant | Avant les travaux | Emplacement du balcon-terrasse avant les travaux, Gresse-en-Vercors |
| 3 | d'en bas | Vu d'en bas | Balcon-terrasse vu d'en bas à Gresse-en-Vercors (Isère) |
| 4 | d'en haut | Vu d'en haut | Balcon-terrasse vu d'en haut à Gresse-en-Vercors |
| 5 ★ | de face | Vu de face | Balcon-terrasse terminé vu de face à Gresse-en-Vercors (Isère) |

*Réalisations similaires :* n° 04 (balcon en mélèze à La Roche-de-Rame), n° 22 (chalet de Vallouise et sa terrasse agrandie), n° 13 (maison à ossature bois dans les monts du Lyonnais).

*À valider avec Jean :*
- l'essence et le système porteur (poteaux, consoles) ;
- le dessin montré est-il un dessin de 3B (croquis, plan, 3D) ? Si oui, c'est une belle preuve de l'étude sur mesure.

---

### C10. Bois de réemploi — `/3b-recup/bois-de-reemploi/`

#### n° 19 — Rénovation d'une maison d'habitation à L'Argentière-la-Bessée : vieux bois et réemploi

- **Nouvelle adresse :** `/realisations/renovation-d-une-maison-d-habitation-a-l-argentiere-la-bessee/`
- **Ancienne adresse (301) :** `3bcharpente.fr/galerie/renovation-d-une-maison-d-habitation-a-l-argentiere-la-bessee`
- **Prestation principale :** Bois de réemploi (vieux bois) → `/3b-recup/bois-de-reemploi/`
- **Autres prestations liées :** `/escalier-bois-sur-mesure/` (escalier balancé), `/balcon-terrasse-abri-bois/` (balcon), `/3b-recup/`
- **Page secteur :** `/charpentier-vallouise-pays-des-ecrins/`
- **Étiquettes du héros :** L'Argentière-la-Bessée · Rénovation · Bardage vieux bois · Réemploi
- **H1 :** Rénovation d'une maison d'habitation à **L'Argentière-la-Bessée** : vieux bois et réemploi
- **Balise title (58 car.) :** Bardage vieux bois à L'Argentière-la-Bessée | 3B Charpente
- **Meta description (155 car.) :** Rénovation d'une maison à L'Argentière-la-Bessée : pignon vitré, bardage en vieux bois, garde-corps en bois de réemploi, escalier balancé. Voir les photos.
- **Photo du héros :** n° 6 (Façade sud) ou n° 7 (Bardage en vieux bois) après visionnage
- **Préfixe des fichiers :** `renovation-maison-argentiere-vieux-bois`

*Le projet* — H2 : « Le projet à **L'Argentière-la-Bessée** »
> À L'Argentière-la-Bessée, nous avons rénové une maison d'habitation en donnant une seconde vie au bois. La maison reçoit un bardage en vieux bois, et le garde-corps est fait en bois de réemploi. Le bois de réemploi vient de chantiers de déconstruction ; il est trié, nettoyé et usiné pour un nouvel usage.

*Fiche technique*
> - Commune : L'Argentière-la-Bessée (Hautes-Alpes)
> - Prestation : Rénovation avec bois de réemploi
> - Année : [À VALIDER AVEC JEAN : année]
> - Durée : [À VALIDER AVEC JEAN : durée]
> - Surface : [À VALIDER AVEC JEAN : surface]
> - Contexte : [À VALIDER AVEC JEAN : contexte du client, origine du vieux bois]
> - Architecte : [À VALIDER AVEC JEAN : architecte éventuel]

*Ce que nous avons fait* — H2 : « Ce que nous avons **fait** »
> 1. **État existant** de la maison.
> 2. **Pignon vitré.** Le pignon, mur en triangle sous la pente du toit, reçoit des vitrages.
> 3. **Bardage en vieux bois** et façade sud.
> 4. **Balcon** et garde-corps en bois de réemploi.
> 5. **Escalier balancé.** Ses marches tournantes changent de largeur pour garder un pas régulier.
> 6. **Pièce de vie** et bas de pente.

Longueur « Le projet » + « Ce que nous avons fait » : 105 mots.

*Les matériaux* — H2 : « Les **matériaux** du chantier »
> - **Vieux bois** : bardage.
> - **Bois de réemploi** : garde-corps.
> - **Vitrages** : pignon.

Ajouter le lien « Découvrir 3B Récup' → » vers `/3b-recup/`.

*Galerie* — H2 : « Le chantier en **12 photos** »

| # | Légende actuelle | Légende à afficher | Texte alternatif |
|---|---|---|---|
| 1 | Existant | La maison avant les travaux (1/2) | Maison d'habitation à L'Argentière-la-Bessée avant sa rénovation |
| 2 | Existant | La maison avant les travaux (2/2) | Autre vue de la maison de L'Argentière-la-Bessée avant les travaux |
| 3 | Pignon vitré | Pignon vitré (1/2) | Pignon vitré de la maison rénovée à L'Argentière-la-Bessée |
| 4 | Pignon vitré | Pignon vitré (2/2) | Autre vue du pignon vitré de la maison rénovée à L'Argentière-la-Bessée |
| 5 | Vitrages posés | Vitrages posés | Vitrages posés sur la maison rénovée à L'Argentière-la-Bessée |
| 6 ★ | Façade sud | Façade sud | Façade sud de la maison rénovée à L'Argentière-la-Bessée (Hautes-Alpes) |
| 7 | Bardage vieux bois | Bardage en vieux bois | Bardage en vieux bois de réemploi sur une maison rénovée à L'Argentière-la-Bessée |
| 8 | Balcon | Balcon | Balcon de la maison rénovée à L'Argentière-la-Bessée |
| 9 | Garde corps en bois de réemploi | Garde-corps en bois de réemploi | Garde-corps en bois de réemploi, maison rénovée à L'Argentière-la-Bessée |
| 10 | Escalier balancé | Escalier balancé | Escalier balancé dans la maison rénovée à L'Argentière-la-Bessée |
| 11 | Pièce de vie | Pièce de vie | Pièce de vie de la maison rénovée à L'Argentière-la-Bessée |
| 12 | bas de pente | Bas de pente | Bas de pente sous la toiture de la maison rénovée à L'Argentière-la-Bessée |

*Réalisations similaires :* n° 15 (toiture avec ferme en vieux bois), n° 14 (réfection d'une charpente à L'Argentière-la-Bessée), n° 22 (chalet rénové et isolé à Vallouise).

*À valider avec Jean :*
- **l'origine du vieux bois et du bois de réemploi.** Viennent-ils d'une déconstruction faite par 3B Récup' ? Si oui, c'est la preuve la plus forte du site pour `/3b-recup/bois-de-reemploi/` (« bardage vieux bois » : 170 recherches par mois) ;
- l'essence du vieux bois ;
- le garde-corps de réemploi est-il celui du balcon ?
- ce qui a été fait d'autre (charpente, isolation, ouvertures du pignon) ;
- « bas de pente » : vue intérieure sous le toit, ou vue extérieure ?

---

## Partie D — Liens internes

**Depuis chaque fiche** (voir les champs de chaque fiche) :

- la page prestation principale (carte « Pour aller plus loin ») ;
- la page secteur ;
- trois réalisations similaires ;
- `/realisations/` ;
- `/contact/` ;
- `/3b-recup/` pour les n° 13, 15 et 19.

Texte des liens : le nom de la prestation ou le H1 court de la fiche, jamais « cliquez ici ».

**Vers les fiches, depuis les pages prestation** (à transmettre aux rédacteurs des fiches 02 à 14) :

| Page prestation | Fiches à citer en priorité | Fiches à citer en second |
|---|---|---|
| `/charpente-bois/` | n° 16, 20 | n° 14, 01, 02 |
| `/renovation-charpente-combles/` | n° 14, 18, 17 | n° 15, 07, 21, 08 |
| `/isolation-biosourcee/` | n° 22, 21 | n° 10, 11, 24, 12 (si publiée) |
| `/isolation-toiture-sarking/` | n° 11 (si la technique est confirmée) | n° 21, 18 |
| `/isolation-murs-ite/` | n° 10 | n° 22 |
| `/maison-ossature-bois/` | n° 13 | n° 24 |
| `/extension-surelevation-bois/` | n° 24, 23 | — |
| `/escalier-bois-sur-mesure/` | n° 08, 06, 09 | n° 16, 19 |
| `/balcon-terrasse-abri-bois/` | n° 02, 01, 04 | n° 03, 05, 20, 22 |
| `/3b-recup/bois-de-reemploi/` | n° 19, 15 | n° 13 |

**Vers les fiches, depuis les pages secteur :**

- `/charpentier-briancon/` : n° 18 et 24 ;
- `/charpentier-serre-chevalier/` : n° 16 et 17 ;
- `/charpentier-vallouise-pays-des-ecrins/` : n° 14, 11, 19, 01, 12 (si publiée), 22, 23, 03, 21, 20, 02, 04.

---

## Partie E — Photos à utiliser et photos manquantes

**À utiliser :** les 166 photos des dossiers `https://3bcharpente.fr/galeries/{slug}`. Le dossier de chaque fiche correspond à son ancienne adresse.

Récupérer les fichiers d'origine en haute définition auprès de Jean si possible. Les photos de la galerie actuelle sont peut-être compressées.

**Photos manquantes à demander :**

- n° 12 (voûte) : toutes, sinon la page n'est pas publiée ;
- n° 17 (Le Casset), n° 07 (plancher), n° 09 (escalier frêne), n° 01 (abri voiture), n° 03 (abri de jardin), n° 04 (balcon) : deux photos seulement. Demander des vues de chantier en cours et une vue d'ensemble finie ;
- n° 21 (lucarne) : la lucarne en cours de création ;
- n° 01 (abri voiture) : l'abri terminé, en entier ;
- pour toutes les fiches : une photo par chantier où l'équipe apparaît au travail, avec l'accord des personnes. C'est la meilleure preuve d'un vrai chantier.

---

## Partie F — Points à valider avec Jean

**Pour toutes les fiches**

1. **Année, durée, surface, contexte du client, architecte éventuel**, chantier par chantier (fiches techniques). L'année est la plus utile : elle date la preuve et alimente `dateCreated`.
2. **Ordre des photos.** Le site actuel les classe par ordre alphabétique ; l'ordre proposé suit la logique du chantier.
3. **Photo du héros** de chaque fiche (proposition notée ★).
4. **Accord des clients** pour afficher la commune avec les photos de leur maison, sans adresse.
5. **Atelier :** est-il au 5 rue Saint-Michel ? Le texte écrit « notre entreprise est installée à L'Argentière-la-Bessée » ; « notre atelier » demande une confirmation.
6. **Correction de slugs, en option.** La 301 est nécessaire de toute façon (`/galerie/` devient `/realisations/`). Corriger trois slugs ne coûterait donc rien de plus :
   - `abris` → `abri` (n° 01 et 03) ;
   - `queyriere` → `queyrieres` (n° 21) ;
   - `ronatlon` → vraie commune (n° 15).

   Le brief (§7) demande de garder l'adresse actuelle : à trancher avant l'intégration.

**Fiche par fiche (les points clés)**

7. **n° 15 :** « Ronatlon » est sans doute une faute de frappe. Quelle est la vraie commune ?
8. **n° 12 :** existe-t-il des photos de la voûte ? Sinon, pas de page, et 301 vers `/isolation-biosourcee/`.
9. **n° 06, 07, 08, 09, 10 :** dans quelle commune ? Sans elle, pas de page secteur ni de title localisé.
10. **n° 13 :** commune exacte dans les monts du Lyonnais ; éléments préparés à l'atelier ? Support en pierres fait par qui ?
11. **n° 20 :** confirmer « Prelles, commune de Saint-Martin-de-Queyrières » ; étendue de la rénovation.
12. **n° 11 :** sarking ou isolation entre chevrons doublés ? Cela décide de la page prestation liée.
13. **n° 10 :** bardage en pin intérieur ou extérieur ? Menuiseries posées par 3B ?
14. **n° 14 :** type de bâtiment ; lucarne créée ou refaite ; sens de « porteuses » ; murs intérieurs en ossature ?
15. **n° 18 :** isolant soufflé, épaisseur, matériau de couverture ; accord du syndic.
16. **n° 19 et 15 :** origine du vieux bois. S'il vient de 3B Récup', le dire : c'est la preuve qui manque à la filière réemploi.
17. **n° 22 :** murs isolés par l'extérieur ou par l'intérieur ?
18. **n° 09 :** « arrivée de l'escalier » = partie haute ou livraison ? Qui a fait l'aluminium ?
19. **n° 16 :** nouvel usage de la forge.
20. **n° 17 :** rénovation totale ou partielle du toit en bardeaux ; provenance du mélèze.
