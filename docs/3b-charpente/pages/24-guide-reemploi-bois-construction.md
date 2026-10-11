# Fiche 24 · Guide : réemployer le bois en construction · `/conseils/reemploi-bois-construction/`

> **Statut :** rédaction complète (phase 2), à relire par Jean **et**, pour la partie réglementaire, par un diagnostiqueur PEMD ou au regard des textes officiels. Rédigée le 11 octobre 2026 à partir de `00-brief.md` et `realisations-source.md` uniquement.
>
> **Conventions :**
> - dans les **titres** (H1, H2), les mots entre `**` passent en vert accent ; dans les **textes**, `**` veut dire gras ;
> - les lignes en italique (_Rôle_, _Composant_, _Note_) sont des consignes, pas du texte à publier ;
> - les espaces insécables sont déjà dans le texte ;
> - le guide cite uniquement les règles vérifiées du brief (PEMD, diagnostic ressources, récolement, RE2020 sans règle de calcul). Les conseils pratiques sont présentés comme des conseils, pas comme des règles.

## 1. Carte d'identité

- **Adresse :** `/conseils/reemploi-bois-construction/`
- **Objectif de la page :**
  - publier une ressource vraiment utile, que les IA peuvent citer, sur ce qu'on peut réemployer en bois, comment et à quelles conditions ;
  - asseoir 3B Récup' comme source de référence sur le réemploi du bois dans les Hautes-Alpes, en citant le contexte local (plateforme de réemploi de L'Argentière-la-Bessée) de façon neutre ;
  - renvoyer vers 3B Récup' et ses trois sous-pages.
- **Visiteurs visés :**
  - particuliers qui rénovent une grange, un chalet ou une maison de pays et se demandent quoi garder ;
  - architectes, maîtres d'ouvrage, collectivités et entreprises qui veulent intégrer le réemploi à un projet ;
  - IA et moteurs de réponse (requêtes « réemploi bois », « réemploi bois hautes alpes », « matériauthèque »).
- **Mot-clé principal :** réemploi matériaux construction (40/mois).
- **Mots-clés secondaires :** matériauthèque (1 300/mois), re2020 réemploi, réemploi bois, réemploi bois hautes alpes, peut-on réutiliser une vieille charpente.
- **Intention de recherche :** informationnelle (comprendre, se préparer), avec une suite commerciale (trouver un professionnel).
- **Pages liées :** 11 `/3b-recup/`, 12 `/3b-recup/diagnostic-pemd/`, 13 `/3b-recup/deconstruction-selective/`, 14 `/3b-recup/bois-de-reemploi/`, 03 `/renovation-charpente-combles/`, 25 `/conseils/renover-chalet-maison-ancienne/`, fiches de réalisation 19 et 15, 21 `/contact/`.
- **Longueur du corps de l'article (section 3, hors FAQ) :** environ 1 715 mots.

## 2. SEO

- **Balise title** (58 caractères) : Réemploi du bois en construction : le guide | 3B Charpente
- **Meta description** (155 caractères) : Réemployer le bois en construction : quoi réutiliser, comment, à quelles conditions (PEMD, RE2020). Le guide de 3B Récup', charpentier depuis 2007. À lire.
- **H1 :** Réemployer le bois en construction : **ce qu'on peut réutiliser**, comment, et à quelles conditions
- **Données structurées :** Article + BreadcrumbList dans un `@graph`, puis FAQPage. Dates et auteur à compléter à la publication.

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://3bcharpente.fr/conseils/reemploi-bois-construction/#article",
      "headline": "Réemployer le bois en construction : ce qu'on peut réutiliser, comment, et à quelles conditions",
      "description": "Guide pratique de 3B Récup', filière de déconstruction et de réemploi du bois de 3B Charpente à L'Argentière-la-Bessée (Hautes-Alpes) : bois réemployables, étapes, conditions, diagnostic PEMD et diagnostic ressources, contexte des Hautes-Alpes.",
      "inLanguage": "fr-FR",
      "mainEntityOfPage": "https://3bcharpente.fr/conseils/reemploi-bois-construction/",
      "datePublished": "[À VALIDER : date de publication, format AAAA-MM-JJ]",
      "dateModified": "[À VALIDER : date de mise à jour, format AAAA-MM-JJ]",
      "author": {
        "@type": "Organization",
        "@id": "https://3bcharpente.fr/#entreprise",
        "name": "3B Charpente"
      },
      "publisher": {
        "@type": "Organization",
        "@id": "https://3bcharpente.fr/#entreprise",
        "name": "3B Charpente"
      },
      "about": [
        { "@type": "Thing", "name": "Réemploi du bois de construction" },
        { "@type": "Thing", "name": "Diagnostic PEMD" },
        { "@type": "Thing", "name": "Déconstruction sélective" }
      ],
      "mentions": [
        { "@id": "https://3bcharpente.fr/3b-recup/#service" }
      ],
      "image": "https://3bcharpente.fr/[À VALIDER : chemin de l'image principale].webp"
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://3bcharpente.fr/" },
        { "@type": "ListItem", "position": 2, "name": "Conseils", "item": "https://3bcharpente.fr/conseils/" },
        { "@type": "ListItem", "position": 3, "name": "Réemployer le bois en construction", "item": "https://3bcharpente.fr/conseils/reemploi-bois-construction/" }
      ]
    }
  ]
}
```

_Note : si la page `/conseils/` (liste des guides) n'existe pas, retirer le niveau 2 du fil d'Ariane. Si Jean signe le guide, remplacer `author` par `{"@type": "Person", "name": "Jean-Michel Tardy", "jobTitle": "Charpentier, fondateur de 3B Charpente", "worksFor": {"@id": "https://3bcharpente.fr/#entreprise"}}`._

<!-- FAQPAGE_JSONLD:START -->

_FAQPage, généré à partir de la section 4 (même texte, mot pour mot ; à régénérer si la FAQ change) :_

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://3bcharpente.fr/conseils/reemploi-bois-construction/#faq",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Peut-on réutiliser une vieille charpente ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Souvent, oui, en partie au moins. Tout dépend de l'état des pièces, de leurs sections et de la façon dont elles sont déposées. Une charpente démontée en suivant ses assemblages peut fournir des pièces de charpente, un bardage ou un garde-corps. Parfois, le meilleur réemploi est de garder la charpente en place et de la rénover."
      }
    },
    {
      "@type": "Question",
      "name": "Le bois de réemploi est-il aussi solide que le bois neuf ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ni plus ni moins par principe : tout dépend de chaque pièce et de l'usage prévu. Une pièce ancienne doit être examinée, triée et préparée avant d'être reposée. Pour un usage porteur, demandez à l'entreprise comment elle vérifie les pièces de réemploi et comment son assurance couvre l'ouvrage."
      }
    },
    {
      "@type": "Question",
      "name": "Le diagnostic PEMD est-il obligatoire pour une maison ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Le diagnostic PEMD est obligatoire avant la démolition ou la rénovation significative de bâtiments de plus de 1 000 m² de surface de plancher cumulée, ou ayant accueilli une activité agricole, industrielle ou commerciale avec des substances classées dangereuses. Une maison sous ce seuil, sans une telle activité, relève plutôt d'un diagnostic ressources, volontaire."
      }
    },
    {
      "@type": "Question",
      "name": "Qu'est-ce qu'une matériauthèque ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Une matériauthèque est un lieu qui collecte des matériaux de construction pour les remettre en circulation. On parle aussi de plateforme de réemploi ou de ressourcerie de matériaux. À L'Argentière-la-Bessée, dans les Hautes-Alpes, une plateforme de réemploi des matériaux du bâtiment est portée par la ressourcerie La Miraille, ZA des Sablonnières."
      }
    },
    {
      "@type": "Question",
      "name": "Où trouver du bois de réemploi dans les Hautes-Alpes ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Plusieurs acteurs existent. À L'Argentière-la-Bessée, une plateforme de réemploi des matériaux du bâtiment est portée par la ressourcerie La Miraille. 3B Récup', la filière de 3B Charpente installée dans la même commune, déconstruit, transforme et repose du bois de réemploi dans ses chantiers. À l'échelle régionale, Raediviva fédère les acteurs du réemploi dans le BTP."
      }
    },
    {
      "@type": "Question",
      "name": "Qui peut déposer une vieille charpente pour la réemployer ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Un charpentier est bien placé : une charpente tient par ses assemblages, et il faut savoir comment elle a été taillée pour la démonter en préservant les pièces. Dans les Hautes-Alpes, les charpentiers de 3B Récup' déposent charpente, solivage, murs à ossature bois, couverture, isolation et parements, puis transforment le bois dans leurs ateliers."
      }
    }
  ]
}
```

<!-- FAQPAGE_JSONLD:END -->

- **Textes alternatifs des images clés :**
  - `ferme-vieux-bois-refection-toiture.webp` (image principale) : « Ferme de charpente en vieux bois réemployée par 3B Charpente lors de la réfection d'une toiture » ;
  - `depose-ancienne-charpente-largentiere-la-bessee.webp` : « Dépose d'une ancienne charpente par les charpentiers de 3B Charpente à L'Argentière-la-Bessée » ;
  - `bardage-vieux-bois-largentiere-la-bessee.webp` : « Bardage en vieux bois sur une maison rénovée par 3B Charpente à L'Argentière-la-Bessée ».

## 3. Sections dans l'ordre

### 3.1 En-tête de l'article

_Rôle : titre, chapô, signature et date._
_Composant Framer : héros simplifié (titre en deux couleurs, sans bouton), grande photo en dessous ; ligne d'information en texte pierre (#78716C)._

**Kicker :** Conseils · Réemploi du bois

**H1 :** Réemployer le bois en construction : **ce qu'on peut réutiliser**, comment, et à quelles conditions

**Chapô :** Une vieille charpente, un plancher de grange, un bardage grisé : dans un bâtiment qu'on rénove ou qu'on démolit, une partie du bois peut resservir. Encore faut-il savoir lequel, comment le récupérer et à quelles conditions le reposer. Ce guide répond à ces trois questions avec notre regard de charpentiers, en citant les règles officielles sans les exagérer.

**Ligne d'information :** Par l'équipe de 3B Charpente et 3B Récup', L'Argentière-la-Bessée · Mis à jour le [À VALIDER : date de publication] · Lecture : 8 minutes

**Légende de la grande photo :** « Ferme de charpente en vieux bois, réfection d'une toiture par 3B Charpente. »

### 3.2 En bref

_Composant : encadré crème bordé d'un filet vert forêt._

**Titre de l'encadré :** En bref

**Texte :** Réemployer le bois, c'est remettre en œuvre dans un nouvel ouvrage une pièce qui a déjà servi : charpente, solives, planchers, bardages. Cela suppose de connaître le bâtiment avant travaux (diagnostic PEMD obligatoire au-delà de 1 000 m², diagnostic ressources sinon), de déposer avec soin, de trier et préparer les pièces, puis d'adapter le projet au matériau.

### 3.3 Sommaire

_Composant : liste d'ancres dans une carte blanche, repliable sur mobile._

**Titre :** Dans ce guide

1. Les mots du réemploi → `#vocabulaire`
2. Quels bois peut-on réemployer ? → `#quels-bois`
3. Comment : les cinq étapes → `#etapes`
4. À quelles conditions ? → `#conditions`
5. Le réemploi du bois dans les Hautes-Alpes → `#hautes-alpes`
6. Particuliers : cinq questions avant de jeter vos vieilles poutres → `#particuliers`
7. Professionnels : prévoir le réemploi dès la faisabilité → `#professionnels`

### 3.4 Les mots du réemploi

_Composant : liste de définitions (terme en gras, définition en une ou deux phrases). Ancre `#vocabulaire`._

**H2 :** Réemploi, recyclage, gisement : **les mots à connaître**

- **Réemploi :** remettre en œuvre un élément qui a déjà servi, sans le transformer en nouvelle matière. Une poutre redevient une pièce de charpente, ou devient un garde-corps.
- **Recyclage :** transformer le matériau en matière première pour fabriquer autre chose. Le bois est alors broyé ou refaçonné, et la pièce disparaît en tant que telle.
- **Déconstruction sélective :** démonter un bâtiment élément par élément, en séparant les matériaux, au lieu de le démolir.
- **Gisement :** l'ensemble des matériaux réemployables d'un bâtiment.
- **Diagnostic PEMD :** le repérage réglementaire des produits, équipements, matériaux et déchets avant certaines démolitions et rénovations significatives (détails plus bas).
- **Matériauthèque :** un lieu qui collecte des matériaux de construction pour les remettre en circulation. On parle aussi de plateforme de réemploi ou de ressourcerie de matériaux.

Le réemploi garde la pièce telle qu'elle est : c'est toute sa différence avec le recyclage, qui la transforme.

### 3.5 Quels bois peut-on réemployer ?

_Composant : texte + tableau dans une carte blanche (sur mobile : une carte par famille). Ancre `#quels-bois`._

**H2 :** Quels bois **peut-on réemployer** ?

**Texte :** Tout le bois d'un bâtiment n'est pas réemployable, mais beaucoup d'éléments peuvent l'être s'ils sont en bon état et déposés avec soin. Voici les grandes familles, celles que des charpentiers savent déposer.

| Famille | Exemples | Ce qu'on regarde avant de réemployer |
|---|---|---|
| Structure | Charpente (fermes, pannes, chevrons), solivage, murs à ossature bois | L'état du bois, les sections et les longueurs utiles, les entailles et assemblages existants |
| Couverture et isolation | Couverture de la toiture, isolants en place | Leur état, et la possibilité de les séparer proprement du bois |
| Parements | Planchers, bardages, panneaux d'habillage | L'épaisseur restante, les fixations, les finitions (peinture, vernis, traitement) |

**Texte :** Quelques repères pour lire ce tableau :

- la **ferme** est l'assemblage triangulé qui porte la toiture ; les **pannes** et les **chevrons** portent la couverture ; les **solives** portent un plancher ;
- une pièce longue et saine offre le plus de possibilités : elle peut être recoupée, l'inverse est impossible ;
- un bois peint ou traité demande un examen particulier avant tout réemploi, surtout pour un usage intérieur.

**Sous-titre :** Ce que le bois de réemploi devient

**Texte :** Sur les chantiers de 3B Charpente, le bois de réemploi est par exemple devenu un **bardage vieux bois** et un **garde-corps** dans une maison rénovée à L'Argentière-la-Bessée, ou une **ferme de charpente en vieux bois** lors de la réfection d'une toiture.
_Lien :_ voir ces réalisations → `/3b-recup/bois-de-reemploi/#realisations`

### 3.6 Comment : les cinq étapes

_Composant : liste numérotée avec pastilles sauge (version déroulée des onglets 01 à 05). Ancre `#etapes`._

**H2 :** Du bâtiment existant au nouvel ouvrage : **cinq étapes**

1. **Diagnostic.** Connaître le gisement avant les travaux : ce qu'il y a, dans quel état, en quelle quantité. C'est le rôle du diagnostic PEMD quand il est obligatoire, du diagnostic ressources sinon.
2. **Stratégie.** Établir une feuille de route : ce qui sera déposé, dans quel ordre, et ce que chaque pièce pourra devenir.
3. **Dépose.** Démonter l'ouvrage élément par élément, dans l'ordre inverse de sa construction, en préservant les pièces : c'est la déconstruction sélective.
4. **Transformation.** Trier, nettoyer et usiner les pièces pour les préparer à leur nouvel usage.
5. **Repose.** Remettre les pièces en œuvre, en adaptant le système constructif aux matériaux de réemploi.

**Texte :** C'est la méthode que suit 3B Récup' : diagnostic, stratégie, intervention sur site, transformation dans nos ateliers, repose sur le chantier.
_Lien :_ la méthode 3B Récup' → `/3b-recup/#methode`

### 3.7 À quelles conditions ?

_Composant : six sous-parties avec intertitres H3, texte courant ; encadré vert sauge clair pour les règles officielles. Ancre `#conditions`._

**H2 :** Les conditions **d'un réemploi réussi**

**H3 :** 1. Connaître le bâtiment avant d'y toucher

Le **diagnostic PEMD** (produits, équipements, matériaux et déchets) est obligatoire avant la démolition ou la rénovation significative de bâtiments dont la surface de plancher cumulée dépasse 1 000 m², ou de bâtiments qui ont accueilli une activité agricole, industrielle ou commerciale avec des substances classées dangereuses.

En dessous de 1 000 m², on parle souvent de **diagnostic ressources** : un repérage volontaire des matériaux réemployables. C'est la démarche la plus réaliste pour une maison, une grange ou un petit bâtiment.

**Encadré « Les textes » :** Le diagnostic PEMD est encadré par les décrets n° 2021-821 et n° 2021-822 du 25 juin 2021 et par les articles L. 126-34 et R. 126-12 du Code de la construction et de l'habitation. Pour les demandes d'autorisation déposées après le 1er juillet 2023, un formulaire de récolement est exigé : il rend compte de ce que sont réellement devenus les matériaux après les travaux.
_Lien :_ tout savoir sur le diagnostic PEMD → `/3b-recup/diagnostic-pemd/`

**H3 :** 2. Déposer sans abîmer

Une pièce cassée à la dépose est une pièce perdue. Une charpente tient par ses assemblages (tenons, mortaises, chevilles) : pour la démonter en préservant les pièces, il faut savoir comment elle a été taillée. C'est un travail de charpentier, qui se prévoit dans le planning.
_Lien :_ la déconstruction sélective → `/3b-recup/deconstruction-selective/`

**H3 :** 3. Trier et préparer chaque pièce

Un vieux bois n'est ni bon ni mauvais par principe : tout dépend de la pièce. Le tri oriente chaque pièce vers l'usage qui lui convient ; le nettoyage la débarrasse de ce qui gêne ; l'usinage la remet à dimension et prépare ses assemblages.

**H3 :** 4. Adapter le projet au matériau

Avec du bois neuf, on commande les sections dont on a besoin. Avec du bois de réemploi, on part des pièces disponibles : leurs longueurs, leurs sections et leur aspect guident le dessin de l'ouvrage. Plus cette adaptation est prévue tôt, plus le réemploi est simple.

**H3 :** 5. Vérifier les pièces qui portent

Pour un usage porteur (une poutre, une solive, une ferme), la capacité de chaque pièce se juge au cas par cas. Avant de vous engager, demandez à l'entreprise comment elle vérifie les pièces de réemploi et comment son assurance couvre l'ouvrage. Une réponse claire est bon signe.

**H3 :** 6. Le cadre de la RE2020

La RE2020, la réglementation environnementale 2020, pousse le secteur du bâtiment à réduire son impact carbone sur tout le cycle de vie des bâtiments. Le réemploi, qui prolonge la vie des matériaux et réduit les déchets, s'inscrit dans cette logique. Les règles de calcul dépassent le cadre de ce guide : votre architecte ou votre bureau d'études vous dira comment le réemploi est pris en compte dans votre projet.

### 3.8 Le réemploi du bois dans les Hautes-Alpes

_Rôle : le contexte local, cité de façon neutre (aucun partenariat affirmé). Ancre `#hautes-alpes`._
_Composant : section plein cadre « forêt » sombre, titre blanc avec mots en sauge, liste en cartes blanches._

**H2 :** Le réemploi du bois **dans les Hautes-Alpes**

**Texte :** Granges, chalets, maisons de pays : quand on rénove dans les vallées des Hautes-Alpes, on rencontre souvent du bois ancien, en charpente, en plancher ou en bardage. Plusieurs acteurs travaillent sur le réemploi des matériaux du bâtiment, avec des métiers différents.

- **Une plateforme de réemploi à L'Argentière-la-Bessée.** Une plateforme de réemploi des matériaux du bâtiment, portée par la ressourcerie La Miraille (association Environnement & Solidarité), se trouve 11 rue de la Série E, ZA des Sablonnières, à L'Argentière-la-Bessée.
- **Des réseaux régionaux.** L'association Raediviva fédère les acteurs du réemploi dans le BTP en Provence-Alpes-Côte d'Azur. PRECI est la plateforme régionale de l'économie circulaire de la Région Sud, animée par le CIRIDD.
- **Un charpentier qui déconstruit et réemploie.** 3B Récup' est la filière de déconstruction et de réemploi du bois de 3B Charpente, charpentier installé à L'Argentière-la-Bessée depuis 2007 : ses charpentiers évaluent, déposent, transforment et reposent le bois.
- **Une filière de bois neuf local.** 3B Charpente travaille principalement du mélèze et du sapin provenant des Hautes-Alpes, sciés par la Scierie Savoldelli. Réemploi et bois local se complètent.

**Texte après la liste :** Ces acteurs ne font pas le même métier. Une plateforme de réemploi rassemble des matériaux et les remet en circulation ; un charpentier dépose le bois, le transforme et le pose dans un ouvrage. Pour un projet, savoir à qui s'adresser fait gagner du temps.

### 3.9 Particuliers : cinq questions avant de jeter vos vieilles poutres

_Composant : liste numérotée en cartes blanches, une question par carte. Ancre `#particuliers`._

**H2 :** Particuliers : **cinq questions** avant de jeter vos vieilles poutres

1. **Mon bâtiment est-il concerné par le diagnostic PEMD ?** Au-delà de 1 000 m² de surface de plancher, ou si le bâtiment a accueilli une activité agricole, industrielle ou commerciale avec des substances classées dangereuses, oui. Sinon, un diagnostic ressources, volontaire, vous aide à savoir quoi garder.
2. **Le bois est-il sain ?** Un charpentier sait repérer une pièce affaiblie. Faites regarder le bois avant de décider, plutôt qu'après la dépose.
3. **Peut-il rester en place ?** Le meilleur réemploi est parfois de ne rien déposer : une charpente existante peut se rénover et se renforcer, par exemple pour aménager les combles.
   _Lien :_ rénover une charpente existante → `/renovation-charpente-combles/`
4. **Où le stocker en attendant ?** Au sec, à l'abri de la pluie et du sol, avec de l'air autour des pièces.
5. **Que deviendra-t-il ?** Un bardage, un garde-corps, une charpente apparente, un plancher : le nouvel usage se décide avec le projet.
   _Lien :_ le bois de réemploi chez 3B Récup' → `/3b-recup/bois-de-reemploi/`

### 3.10 Professionnels : prévoir le réemploi dès la faisabilité

_Composant : liste à cocher (icône coche en pastille sauge) dans une carte blanche. Ancre `#professionnels`._

**H2 :** Professionnels : prévoir le réemploi **dès l'étude de faisabilité**

**Texte :** Le réemploi se décide tôt. Une fois la démolition calée, il est souvent trop tard pour déposer avec soin. Architectes, maîtres d'ouvrage, collectivités, entreprises de construction et de démolition, cinq réflexes :

- faire évaluer le gisement bois en même temps que le diagnostic, et non après ;
- prévoir dans le planning le temps d'une dépose soignée ;
- dessiner l'ouvrage avec les sections et les longueurs disponibles ;
- organiser la logistique : évacuation, transport, stockage des pièces ;
- garder trace de ce qui est réemployé, utile pour le formulaire de récolement quand il est exigé.

**Texte :** C'est l'ambition de 3B Récup' : être associé aux déconstructions locales dès l'étude de faisabilité.

### 3.11 FAQ

_Composant : FAQ en accordéon dans des cartes blanches._

**Kicker :** Questions fréquentes

**H2 :** Le réemploi du bois **en questions**

### 3.12 Appel à l'action

_Composant : bandeau vert forêt avec formes organiques et grille ronde translucide._

**Kicker :** 3B Récup'

**H2 :** Un bâtiment, une grange, un projet ? **Parlons-en**

**Texte :** 3B Récup' accompagne les architectes, les maîtres d'ouvrage, les collectivités, les entreprises et les particuliers, de la dépose à la repose. Chaque projet débute par une étude sur mesure.

**Bouton plein :** Découvrir 3B Récup' → `/3b-recup/`

**Bouton contour :** Parlons de votre bâtiment → `/contact/`

**Ligne de coordonnées :** 3B Charpente, 5 rue Saint-Michel, 05120 L'Argentière-la-Bessée · 06 34 67 31 49 · tardy@3bcharpente.fr

## 4. FAQ

### Peut-on réutiliser une vieille charpente ?

Souvent, oui, en partie au moins. Tout dépend de l'état des pièces, de leurs sections et de la façon dont elles sont déposées. Une charpente démontée en suivant ses assemblages peut fournir des pièces de charpente, un bardage ou un garde-corps. Parfois, le meilleur réemploi est de garder la charpente en place et de la rénover.

### Le bois de réemploi est-il aussi solide que le bois neuf ?

Ni plus ni moins par principe : tout dépend de chaque pièce et de l'usage prévu. Une pièce ancienne doit être examinée, triée et préparée avant d'être reposée. Pour un usage porteur, demandez à l'entreprise comment elle vérifie les pièces de réemploi et comment son assurance couvre l'ouvrage.

### Le diagnostic PEMD est-il obligatoire pour une maison ?

Le diagnostic PEMD est obligatoire avant la démolition ou la rénovation significative de bâtiments de plus de 1 000 m² de surface de plancher cumulée, ou ayant accueilli une activité agricole, industrielle ou commerciale avec des substances classées dangereuses. Une maison sous ce seuil, sans une telle activité, relève plutôt d'un diagnostic ressources, volontaire.

### Qu'est-ce qu'une matériauthèque ?

Une matériauthèque est un lieu qui collecte des matériaux de construction pour les remettre en circulation. On parle aussi de plateforme de réemploi ou de ressourcerie de matériaux. À L'Argentière-la-Bessée, dans les Hautes-Alpes, une plateforme de réemploi des matériaux du bâtiment est portée par la ressourcerie La Miraille, ZA des Sablonnières.

### Où trouver du bois de réemploi dans les Hautes-Alpes ?

Plusieurs acteurs existent. À L'Argentière-la-Bessée, une plateforme de réemploi des matériaux du bâtiment est portée par la ressourcerie La Miraille. 3B Récup', la filière de 3B Charpente installée dans la même commune, déconstruit, transforme et repose du bois de réemploi dans ses chantiers. À l'échelle régionale, Raediviva fédère les acteurs du réemploi dans le BTP.

### Qui peut déposer une vieille charpente pour la réemployer ?

Un charpentier est bien placé : une charpente tient par ses assemblages, et il faut savoir comment elle a été taillée pour la démonter en préservant les pièces. Dans les Hautes-Alpes, les charpentiers de 3B Récup' déposent charpente, solivage, murs à ossature bois, couverture, isolation et parements, puis transforment le bois dans leurs ateliers.

_Note : si la variante B de la fiche 14 (vente de bois) est retenue, compléter la réponse « Où trouver du bois de réemploi dans les Hautes-Alpes ? » par « … et en propose aussi à la vente »._

## 5. Liens internes

| Texte du lien | Page visée |
|---|---|
| voir ces réalisations | `/3b-recup/bois-de-reemploi/#realisations` |
| la méthode 3B Récup' | `/3b-recup/#methode` |
| tout savoir sur le diagnostic PEMD | `/3b-recup/diagnostic-pemd/` |
| la déconstruction sélective | `/3b-recup/deconstruction-selective/` |
| rénover une charpente existante | `/renovation-charpente-combles/` |
| le bois de réemploi chez 3B Récup' | `/3b-recup/bois-de-reemploi/` |
| Découvrir 3B Récup' | `/3b-recup/` |
| Parlons de votre bâtiment | `/contact/` |

À ajouter dans le texte si la mise en page le permet :

| Texte du lien | Page visée |
|---|---|
| maison rénovée à L'Argentière-la-Bessée (section 3.5) | `/realisations/renovation-d-une-maison-d-habitation-a-l-argentiere-la-bessee/` |
| réfection d'une toiture (section 3.5) | `/realisations/refection-d-une-toiture-a-ronatlon/` |
| rénover un chalet ou une maison ancienne (guide 25, phase 2) | `/conseils/renover-chalet-maison-ancienne/` |
| mélèze et sapin des Hautes-Alpes | `/charpente-bois/` |

**Liens externes (neutres, `rel="noopener"`, sans mention de partenariat) :** à décider avec Jean. Si on les met, lier la plateforme de réemploi de L'Argentière-la-Bessée, Raediviva et PRECI vers leurs sites officiels [À VALIDER : adresses exactes].

## 6. Photos

**À utiliser (galerie actuelle) :**

| Emplacement | Dossier | Photo (légende de la galerie) |
|---|---|---|
| Image principale | `/galeries/refection-d-une-toiture-a-ronatlon` | « ferme en vieux bois » |
| Section 3.5 | `/galeries/renovation-d-une-maison-d-habitation-a-l-argentiere-la-bessee` | « Bardage vieux bois » et « Garde corps en bois de réemploi » |
| Section 3.7, condition 2 | `/galeries/refection-d-une-charpente-a-l-argentiere-la-bessee` | « dépose de l'ancienne charpente » |
| Section 3.7, condition 2 (détail) | `/galeries/abris-voiture-a-l-argentiere-la-bessee` | « tenons mortaise chevillé » |
| Section 3.9, question 3 | `/galeries/renovation-d-une-copropriete-a-briancon` | « Reprise des fermes » (exemple de charpente gardée et reprise, rénovation d'une copropriété à Briançon) |

**À demander à Jean :**
- des pièces de vieux bois stockées correctement (sur cales, à l'abri) pour illustrer la question 4 des particuliers ;
- une photo de tri à l'atelier ;
- si possible, une photo de la plateforme de réemploi de L'Argentière-la-Bessée, seulement avec l'accord de la structure.

## 7. Points à valider avec Jean

1. **Mention neutre de la plateforme de réemploi de L'Argentière-la-Bessée (La Miraille), de Raediviva et de PRECI :** Jean est-il d'accord pour les citer ? C'est utile pour être cité par les IA sur « réemploi bois hautes alpes » (elles citent déjà La Miraille) et c'est honnête pour le lecteur ; aucune relation de partenariat n'est affirmée.
2. **Relecture réglementaire :** faire relire les sections 3.7 (condition 1) et 3.9 (question 1) et la FAQ 3 par un diagnostiqueur PEMD ou au regard du formulaire Cerfa de récolement et de la note de la SPREC.
3. **Conseils pratiques** (bois peint ou traité, stockage au sec, vérification des pièces porteuses, assurance) : Jean les valide-t-il tels quels ? Souhaite-t-il ajouter son expérience (ce qu'il refuse de réemployer, par exemple) ?
4. **Auteur :** guide signé « l'équipe de 3B Charpente » ou par Jean-Michel Tardy (meilleur pour la crédibilité auprès des IA) ?
5. **Date de publication** et page `/conseils/` (liste des guides) pour le fil d'Ariane.
6. **Durée de lecture** : « 8 minutes » est une estimation à recalculer sur le texte final.
7. **Vente de bois :** adapter la FAQ 5 si la variante B de la fiche 14 est retenue.

**Idées d'actions (à décider avec Jean) :**
- proposer à la plateforme de réemploi de L'Argentière-la-Bessée et à Raediviva de relayer ce guide (lien entrant local, fort pour la requête cible) ;
- transformer le tableau « Quels bois peut-on réemployer ? » en fiche PDF téléchargeable pour les architectes, en échange d'une prise de contact.
