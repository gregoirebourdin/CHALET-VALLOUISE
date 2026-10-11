# Fiche de page 17 : À propos et équipe (`/a-propos/`)

> **Sources :** `00-brief.md` et `realisations-source.md` uniquement. Fiche rédigée le 11 octobre 2026.
>
> **Conventions de lecture :**
> - dans les titres (H1, H2), les mots entre `**` passent en **vert accent** (#336233 sur fond clair, vert sauge #A3D2A3 sur fond sombre) ; dans les textes courants, `**` veut dire gras ;
> - les espaces insécables avant : ; ? ! et dans les guillemets sont déjà en place : copier-coller tel quel ;
> - tout ce qui est entre `[À VALIDER AVEC JEAN : …]` doit être confirmé ou retiré avant la mise en ligne.

---

## 1. Carte d'identité

- **Adresse :** `/a-propos/`
- **Objectif de la page :**
  - montrer qui est derrière 3B Charpente : un parcours, des valeurs, des qualifications vérifiables ;
  - donner aux moteurs et aux IA une fiche d'identité claire de l'entreprise et de son fondateur ;
  - recevoir les redirections de `new.3bcharpente.fr/nos-metiers` et `new.3bcharpente.fr/equipe` (qui contient aujourd'hui du faux texte latin).
- **Visiteurs visés :**
  - particuliers qui comparent des charpentiers avant d'appeler ;
  - architectes, entreprises et collectivités qui découvrent 3B Récup' ;
  - candidats et apprentis potentiels.
- **Mots-clés :**
  - principal : « 3b charpente » (marque) ;
  - secondaires : « jean-michel tardy charpentier », « compagnon du devoir charpentier », « charpentier rge hautes alpes ».
- **Intention de recherche :** réassurance et navigation sur la marque (« qui sont-ils, sont-ils sérieux ? »).
- **Pages liées :** 01 (accueil), 02 à 10 (prestations), 11 (3B Récup'), 15 (réalisations), 18 à 20 (secteurs), 21 (contact).

---

## 2. SEO

- **Balise title (57 caractères) :** Jean-Michel Tardy, charpentier depuis 2007 | 3B Charpente
- **Meta description (144 caractères) :** Fondée en 2007 par Jean-Michel Tardy, formé chez les Compagnons du Devoir, 3B Charpente construit avec le bois des Hautes-Alpes. Notre histoire.
- **H1 :** **3B Charpente**, charpentiers dans les **Hautes-Alpes** depuis 2007
- **Données structurées :** `AboutPage`, `Person` (Jean-Michel Tardy), rappel de l'entreprise par son `@id` (défini sur l'accueil), `BreadcrumbList`, `FAQPage`.

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      "@id": "https://3bcharpente.fr/a-propos/#page",
      "url": "https://3bcharpente.fr/a-propos/",
      "name": "À propos de 3B Charpente",
      "inLanguage": "fr-FR",
      "about": { "@id": "https://3bcharpente.fr/#entreprise" },
      "mainEntity": { "@id": "https://3bcharpente.fr/a-propos/#jean-michel-tardy" }
    },
    {
      "@type": "Person",
      "@id": "https://3bcharpente.fr/a-propos/#jean-michel-tardy",
      "name": "Jean-Michel Tardy",
      "jobTitle": "Charpentier, fondateur de 3B Charpente",
      "worksFor": { "@id": "https://3bcharpente.fr/#entreprise" },
      "alumniOf": {
        "@type": "EducationalOrganization",
        "name": "Les Compagnons du Devoir et du Tour de France"
      },
      "knowsAbout": [
        "Charpente traditionnelle",
        "Ossature bois",
        "Isolation biosourcée",
        "Réemploi du bois"
      ],
      "image": "https://3bcharpente.fr/images/jean-michel-tardy-charpentier.webp"
    },
    {
      "@type": "RoofingContractor",
      "@id": "https://3bcharpente.fr/#entreprise",
      "name": "3B Charpente",
      "foundingDate": "2007",
      "founder": { "@id": "https://3bcharpente.fr/a-propos/#jean-michel-tardy" },
      "employee": "[À VALIDER AVEC JEAN : ajouter les membres de l'équipe en Person, une fois la liste et les accords confirmés]"
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://3bcharpente.fr/" },
        { "@type": "ListItem", "position": 2, "name": "À propos", "item": "https://3bcharpente.fr/a-propos/" }
      ]
    }
  ]
}
```

- **Textes alternatifs des images clés :**
  - portrait : « Jean-Michel Tardy, charpentier et fondateur de 3B Charpente, dans son atelier » (photo à fournir) ;
  - histoire : « Assemblage à blanc d'une charpente à l'atelier avant le levage, chantier de L'Argentière-la-Bessée » ;
  - équipe : « [Prénom Nom], [rôle] chez 3B Charpente » (une fois l'équipe validée).

---

## 3. Sections dans l'ordre

### Section 1 : héros

- **Rôle :** poser l'identité : qui, où, depuis quand, pour quoi.
- **Composant Framer :** héros (titre en deux couleurs, texte, bouton plein et bouton contour, deux preuves en pastille sauge). Photo à droite : portrait de Jean à l'atelier ; à défaut, la photo « assamblage à blanc ».
- **Copywriting :**
  - **Kicker :** À propos de 3B Charpente
  - **H1 :** **3B Charpente**, charpentiers dans les **Hautes-Alpes** depuis 2007
  - **Texte :** Une entreprise de charpente installée à **L'Argentière-la-Bessée**, dans le nord des Hautes-Alpes. Notre mission est claire : **utiliser le bois local pour construire des maisons saines et durables.**
  - **Bouton plein :** Parler de mon projet → `/contact/`
  - **Bouton contour :** Voir nos réalisations → `/realisations/`
  - **Preuve 1 (pastille sauge) :** Depuis 2007
  - **Preuve 2 (pastille sauge) :** Qualifié RGE

### Section 2 : en bref

- **Rôle :** fiche d'identité autonome, reprise par les moteurs et les IA.
- **Composant Framer :** carte blanche à coins arrondis, pastille sauge « En bref ».
- **Copywriting :**
  - **Étiquette :** En bref
  - **Texte (57 mots) :** 3B Charpente est l'entreprise de charpente de Jean-Michel Tardy, fondée en 2007 à L'Argentière-la-Bessée (Hautes-Alpes). Formé chez les Compagnons du Devoir, Jean-Michel a fait son Tour de France en France métropolitaine, en Martinique et en Autriche. L'entreprise est qualifiée RGE par Qualibat, travaille le mélèze et le sapin des Hautes-Alpes et réemploie le bois avec 3B Récup'.

### Section 3 : notre histoire

- **Rôle :** raconter le chemin parcouru, avec les dates vérifiées.
- **Composant Framer :** deux colonnes. À gauche, texte. À droite, frise verticale (trait vert fin, points en pastille sauge, années en Nohemi SemiBold).
- **Copywriting :**
  - **Kicker :** Notre histoire
  - **H2 :** Une entreprise née de la **charpente**, grandie avec le **bois local**
  - **Paragraphe 1 :** Jean-Michel Tardy a fondé 3B Charpente en 2007, après plus de dix ans de métier. Il a choisi de s'installer à L'Argentière-la-Bessée, là où il avait été formateur.
  - **Paragraphe 2 :** Nous avons commencé avec des projets de charpente, puis nous avons progressivement étendu nos services à la rénovation de chalets et de maisons de pays, et à la construction neuve en ossature bois.
  - **Frise :**
    - **1995 :** Jean-Michel Tardy débute la charpente, apprenti à 16 ans dans une entreprise de Savoie.
    - **Ensuite :** CAP dans un CFA des Compagnons du Devoir, puis Tour de France, en France métropolitaine, en Martinique et en Autriche.
    - **Puis :** deux ans formateur à L'Argentière-la-Bessée.
    - **2007 :** création de 3B Charpente dans les Hautes-Alpes.
    - **[À VALIDER AVEC JEAN : année] :** lancement de 3B Récup', l'activité de déconstruction et de réemploi.
    - **Aujourd'hui :** une entreprise qualifiée RGE, 24 chantiers présentés sur ce site.
- *Notes :*
  - le paragraphe 2 est le texte validé de la maquette, presque mot pour mot ; les métiers ajoutés depuis (isolation, escaliers, balcons, 3B Récup') sont présentés en section 6 ;
  - « plus de dix ans de métier » se déduit des dates vérifiées (début en 1995, création en 2007) ;
  - « là où il avait été formateur » relie deux faits vérifiés (formateur à L'Argentière-la-Bessée, puis création dans les Hautes-Alpes) ; à faire relire par Jean.

### Section 4 : le fondateur

- **Rôle :** incarner l'entreprise (E-E-A-T) et capter « jean-michel tardy charpentier » et « compagnon du devoir charpentier ».
- **Composant Framer :** grande photo portrait à gauche, texte à droite, puis bloc citation pleine largeur (grand guillemet en vert sauge, texte en Nohemi SemiBold).
- **Copywriting :**
  - **Kicker :** Le fondateur
  - **H2 :** Jean-Michel Tardy, du **Tour de France** aux **Hautes-Alpes**
  - **Paragraphe 1 :** Jean-Michel Tardy est originaire des montagnes grenobloises. Il débute la charpente en 1995 : à 16 ans, il entre en apprentissage dans une entreprise de Savoie.
  - **Paragraphe 2 :** Il passe son CAP dans un CFA des Compagnons du Devoir, puis part sur le Tour de France. Ce parcours de formation fait passer le jeune charpentier d'entreprise en entreprise pour apprendre le métier auprès de différentes équipes. Pour Jean-Michel, ce sera en France métropolitaine, en Martinique et en Autriche.
  - **Paragraphe 3 :** Il devient ensuite formateur pendant deux ans à L'Argentière-la-Bessée, puis crée 3B Charpente dans les Hautes-Alpes, en 2007.
  - **Amorce de la citation :** Ce qui compte pour lui ?
  - **Citation :** « Le travail en équipe, l'écoute apportée aux clients, la belle ouvrage, la joie de venir travailler le matin. »
  - **Signature de la citation :** Jean-Michel Tardy, fondateur de 3B Charpente
- *Notes :*
  - parcours fidèle à la page équipe de new.3bcharpente.fr, écrite par Jean à la première personne et transposée ici à la troisième personne ;
  - la citation est la formule exacte de Jean ; « la belle ouvrage » reste au féminin, c'est l'expression des compagnons ;
  - la phrase qui explique le Tour de France est une définition générale, ajoutée pour les lecteurs qui ne connaissent pas le compagnonnage.

### Section 5 : Bio, Bâti, Bois

- **Rôle :** expliquer le nom et le relier à des pratiques concrètes (version plus détaillée que sur l'accueil).
- **Composant Framer :** fond de section clair (#F2F2EC), trois cartes blanches ; grand « B » vert en Nohemi Bold, mot, étymologie en italique, texte.
- **Copywriting :**
  - **Kicker :** Notre nom
  - **H2 :** **Bio**, **Bâti**, **Bois** : ce que veut dire 3B
  - **Intro :** Trois lettres, trois mots, choisis pour leur sens d'origine.
  - **Carte Bio :**
    - Étymologie : du grec ancien βίος, qui exprime l'idée de vie.
    - Texte : Pour nous, c'est la vie dans la maison : des matériaux sains et des isolants biosourcés, comme la fibre de bois, la ouate de cellulose ou la laine de chanvre, lin et coton.
  - **Carte Bâti :**
    - Étymologie : de l'ancien français bastir, idée d'entrelacer, d'assembler.
    - Texte : C'est le cœur du métier : tracer, tailler, assembler. Tenons et mortaises chevillés, traits de Jupiter (un assemblage qui raboute deux pièces de bois), charpentes montées à blanc à l'atelier avant le levage.
  - **Carte Bois :**
    - Étymologie : un être vivant.
    - Texte : Nous travaillons principalement du mélèze et du sapin des Hautes-Alpes, sciés par notre partenaire local, la Scierie Savoldelli. Et parce qu'un bois peut servir plusieurs fois, nous réemployons le bois issu de la déconstruction avec 3B Récup'.

### Section 6 : nos métiers

- **Rôle :** relier l'histoire aux prestations (maillage interne vers 02 à 10).
- **Composant Framer :** liste en deux colonnes, chaque ligne avec pastille sauge, titre lien et une ligne de texte ; flèche à droite.
- **Copywriting :**
  - **Kicker :** Nos métiers
  - **H2 :** Du **solivage** au **faîtage**, tout le travail du charpentier
  - **Intro :** Neuf prestations, une seule entreprise, de la structure aux finitions.
  - **Liste :**
    - Charpente bois traditionnelle : tracée, taillée et assemblée à l'atelier. → `/charpente-bois/`
    - Rénovation de charpente et combles : renforcer, ouvrir une lucarne, aménager les combles. → `/renovation-charpente-combles/`
    - Isolation biosourcée : fibre de bois, ouate de cellulose, laine de chanvre, lin et coton. → `/isolation-biosourcee/`
    - Isolation de toiture par l'extérieur (sarking) : l'isolant passe par-dessus les chevrons, côté extérieur. → `/isolation-toiture-sarking/`
    - Isolation des murs : ITE (isolation thermique par l'extérieur) ou isolation par l'intérieur en bâti ancien. → `/isolation-murs-ite/`
    - Maison ossature bois : une maison neuve, sur mesure. → `/maison-ossature-bois/`
    - Extension et surélévation bois : gagner de la place sans tout reconstruire. → `/extension-surelevation-bois/`
    - Escaliers bois sur mesure : quart tournant, balancé, en bois debout. → `/escalier-bois-sur-mesure/`
    - Balcons, terrasses et abris bois : en mélèze, avec garde-corps sur mesure. → `/balcon-terrasse-abri-bois/`

### Section 7 : l'équipe

- **Rôle :** montrer les visages (confiance) et l'apprentissage (transmission).
- **Composant Framer :** grille de cartes blanches, photo carrée en haut, nom en Nohemi SemiBold, rôle en texte pierre (#78716C).
- **Copywriting :**
  - **Kicker :** L'équipe
  - **H2 :** Les **mains** derrière vos **chantiers**
  - **Intro :** Charpentiers, chef d'équipe, organisation, apprentissage : chacun a sa place, à l'atelier comme sur le chantier. Jean-Michel a lui-même commencé comme apprenti à 16 ans, puis a été formateur : transmettre le métier fait partie de notre histoire.
  - **Cartes :**
    - Jean-Michel Tardy · Fondateur et charpentier
    - Abel Hamadene · Chef d'équipe [À VALIDER AVEC JEAN]
    - Claire Patin · Responsable organisation [À VALIDER AVEC JEAN]
    - Mickael Oudot · Charpentier [À VALIDER AVEC JEAN]
    - Chloé Nicod · Apprentie [À VALIDER AVEC JEAN]
  - **Version de repli si l'équipe n'est pas confirmée :** une seule carte « Jean-Michel Tardy · Fondateur et charpentier » et l'intro : « Autour de Jean-Michel, une équipe de charpentiers travaille à l'atelier et sur les chantiers. »
- *Notes :*
  - liste reprise de la maquette Framer, différente de la page équipe de new.3bcharpente.fr : à revalider entièrement ;
  - publier un nom ou une photo seulement avec l'accord de la personne (droit à l'image) ;
  - « commencé comme apprenti, puis formateur » : faits vérifiés sur Jean ; la phrase reste vraie même sans apprenti dans l'équipe actuelle.

### Section 8 : nos valeurs

- **Rôle :** traduire les valeurs validées en engagements concrets.
- **Composant Framer :** section plein cadre « forêt » sombre, titre blanc avec mots en sauge, cinq cartes translucides avec icône en pastille sauge.
- **Copywriting :**
  - **Kicker :** Nos valeurs
  - **H2 :** **Innovation** et **durabilité** guident notre travail quotidien
  - **Intro :** Notre mission : construire durablement, en réalisant des structures respectueuses de l'environnement. Innover, pour nous, c'est par exemple adapter notre système constructif aux matériaux de réemploi.
  - **Carte 1, L'écoute :** Chaque projet est unique. Nous travaillons en étroite collaboration avec vous pour adapter nos constructions à vos besoins, en respectant vos préférences esthétiques et fonctionnelles.
  - **Carte 2, La belle ouvrage :** Tracer, tailler, assembler à l'atelier, puis lever sur le chantier. Le savoir-faire appris sur le Tour de France, au service de votre maison.
  - **Carte 3, Le bois d'ici :** Du mélèze et du sapin des Hautes-Alpes, et des isolants biosourcés.
  - **Carte 4, Le réemploi :** Prolonger la vie des matériaux de construction, réduire les déchets et l'impact environnemental, tout en proposant des solutions esthétiques et économiques.
  - **Carte 5, La transparence :** Simple, transparent, et toujours à votre écoute : voilà notre promesse.
- *Note de réécriture :* titre validé « Innovation et durabilité guident notre travail quotidien » gardé tel quel ; la mission validée « Construire durablement… réaliser des structures respectueuses de l'environnement » est reprise dans l'intro.

### Section 9 : qualifications et partenaires

- **Rôle :** preuves vérifiables, sans badge inventé.
- **Composant Framer :** cartes blanches en grille de 2 × 2, logo ou icône en haut de chaque carte.
- **Copywriting :**
  - **Kicker :** Qualifications et partenaires
  - **H2 :** Des **qualifications** vérifiables, des **partenaires** d'ici
  - **Carte 1, Qualification RGE (Qualibat) :**
    - Texte : RGE signifie « reconnu garant de l'environnement ». Notre qualification QUALIBAT-RGE, enregistrée au nom de Jean-Michel Tardy, couvre cinq domaines :
      - isolation des murs par l'extérieur ;
      - isolation des toitures par l'extérieur ;
      - isolation par l'intérieur des murs ou rampants de toitures ou plafonds ;
      - fenêtres de toit ;
      - fenêtres, volets, portes donnant sur l'extérieur.
    - Suite : Elle ouvre l'accès aux aides publiques à la rénovation énergétique, sous conditions. Vous pouvez la vérifier dans l'annuaire officiel des professionnels RGE.
    - Lien : Vérifier notre qualification → [À COMPLÉTER : lien vers la fiche de l'annuaire RGE]
  - **Carte 2, Compagnons du Devoir :** CAP préparé dans un CFA des Compagnons du Devoir, puis Tour de France.
  - **Carte 3, Scierie Savoldelli :** Notre partenaire local scie le mélèze et le sapin des Hautes-Alpes que nous mettons en œuvre. [À VALIDER AVEC JEAN : accord de la scierie, logo et lien]
  - **Carte 4, PRECI :** 3B Récup' figure sur PRECI, la plateforme régionale de l'économie circulaire de la Région Sud, animée par CIRIDD. [À VALIDER AVEC JEAN : lien vers la fiche]
  - **Carte optionnelle, financement européen :** [À VALIDER AVEC JEAN : projet soutenu par le FEADER (programme LEADER), objet exact du financement et obligation d'affichage du logo]
- *Notes :*
  - pas de badge « Expert du Réemploi », pas de bloc Trustpilot, pas de « Entreprise vérifiée » ;
  - La Miraille, Raediviva ou Bois des Alpes ne sont **pas** cités comme partenaires sans accord écrit.

### Section 10 : 3B Récup' (teaser)

- **Rôle :** envoyer vers la filière réemploi, point de différence de l'entreprise.
- **Composant Framer :** bandeau d'appel à l'action vert forêt, formes organiques et grille ronde translucide ; pastille « 3B Récup' ».
- **Copywriting :**
  - **Pastille :** 3B Récup'
  - **H2 :** **Prolonger la vie** des matériaux de construction
  - **Texte :** Avec 3B Récup', nous voulons prolonger la vie des matériaux de construction, réduisant ainsi les déchets et l'impact environnemental, tout en offrant des solutions esthétiques et économiques. Nous déposons les structures bois, les transformons dans nos ateliers et les réemployons sur nos chantiers.
  - **Puces (pastilles sauge) :** Réduire l'impact environnemental · Maximiser l'utilisation des ressources
  - **Bouton plein clair :** Découvrir 3B Récup' → `/3b-recup/`
- *Note :* texte validé de la maquette, complété d'une phrase sur ce que fait 3B Récup' (faits du brief).

### Section 11 : où nous trouver

- **Rôle :** cohérence des coordonnées (NAP) et maillage vers les secteurs.
- **Composant Framer :** fond crème, texte à gauche, trois liens secteur en cartes à droite.
- **Copywriting :**
  - **Kicker :** Où nous trouver
  - **H2 :** Installés à **L'Argentière-la-Bessée**
  - **Texte :** 3B Charpente, 5 rue Saint-Michel, 05120 L'Argentière-la-Bessée. Basés dans le nord des Hautes-Alpes, nous intervenons dans tout le département, mais aussi en Provence-Alpes-Côte d'Azur et en Auvergne-Rhône-Alpes.
  - **Liens :**
    - Charpentier à Briançon → `/charpentier-briancon/`
    - Charpentier à Serre Chevalier → `/charpentier-serre-chevalier/`
    - Charpentier en Vallouise et Pays des Écrins → `/charpentier-vallouise-pays-des-ecrins/`

### Section 12 : FAQ

- **Composant Framer :** FAQ en accordéon dans des cartes blanches.
- **Copywriting :**
  - **Kicker :** Questions fréquentes
  - **H2 :** Mieux **nous connaître**
  - Questions et réponses : voir partie 4.

### Section 13 : appel à l'action final

- **Composant Framer :** bandeau d'appel à l'action vert forêt.
- **Copywriting :**
  - **Kicker :** Travaillons ensemble
  - **H2 :** Parlons de votre **projet**
  - **Texte :** Nous sommes là pour répondre à toutes vos questions et discuter de vos projets de construction et de rénovation.
  - **Bouton plein clair :** Demander mon devis → `/contact/`
  - **Bouton contour clair :** Appeler le 06 34 67 31 49 → `tel:+33634673149`
- *Note :* texte validé de la page contact de la maquette.

---

## 4. FAQ

Données structurées : `FAQPage`, textes identiques à ceux affichés.

**1. Qui a fondé 3B Charpente ?**
3B Charpente a été fondée en 2007 par Jean-Michel Tardy, charpentier originaire des montagnes grenobloises. Il a débuté en 1995, apprenti à 16 ans dans une entreprise de Savoie, puis s'est formé chez les Compagnons du Devoir et sur le Tour de France, en France métropolitaine, en Martinique et en Autriche. Après deux ans comme formateur à L'Argentière-la-Bessée, il a créé l'entreprise dans les Hautes-Alpes. *(65 mots)*

**2. Que signifie « 3B » dans 3B Charpente ?**
3B veut dire Bio, Bâti, Bois. Bio vient du grec ancien βίος, qui exprime l'idée de vie. Bâti vient de l'ancien français bastir, qui porte l'idée d'entrelacer, d'assembler. Le bois, enfin, est un être vivant. Ces trois mots résument notre façon de travailler : des maisons saines, des assemblages de charpentier et du bois local ou de réemploi. *(57 mots)*

**3. Jean-Michel Tardy a-t-il été formé chez les Compagnons du Devoir ?**
Oui. Jean-Michel Tardy a préparé son CAP dans un CFA des Compagnons du Devoir, puis il a effectué son Tour de France : il s'est formé dans des entreprises de France métropolitaine, de Martinique et d'Autriche. Ce parcours se retrouve dans nos chantiers : charpentes tracées et taillées à l'atelier, assemblages traditionnels, montage à blanc avant le levage. *(56 mots)*

**4. 3B Charpente est-elle qualifiée RGE ?**
Oui. 3B Charpente détient la qualification QUALIBAT-RGE, enregistrée au nom de Jean-Michel Tardy dans l'annuaire officiel des professionnels RGE. Elle couvre l'isolation des murs et des toitures par l'extérieur, l'isolation par l'intérieur des murs, rampants et plafonds, les fenêtres de toit, ainsi que les fenêtres, volets et portes donnant sur l'extérieur. Elle ouvre l'accès aux aides publiques à la rénovation énergétique, sous conditions. *(63 mots)*

**5. D'où vient le bois que vous utilisez ?**
Nous utilisons principalement du mélèze et du sapin provenant des Hautes-Alpes, sciés par notre partenaire local, la Scierie Savoldelli. Selon les chantiers, d'autres essences entrent en jeu, comme le douglas, l'épicéa ou le frêne. Nous intégrons aussi du bois de réemploi : déposé sur des chantiers de déconstruction, il est trié, nettoyé et usiné dans nos ateliers avec 3B Récup'. *(59 mots)*

*Note :* les essences douglas, épicéa et frêne viennent des légendes de la galerie (bardage en douglas, plancher en douglas et épicéa, panneaux trois plis en épicéa, escalier en frêne).

---

## 5. Liens internes

| Texte du lien | Page visée |
|---|---|
| Parler de mon projet / Demander mon devis | `/contact/` |
| Voir nos réalisations | `/realisations/` |
| Les 9 lignes de la section « Nos métiers » | `/charpente-bois/`, `/renovation-charpente-combles/`, `/isolation-biosourcee/`, `/isolation-toiture-sarking/`, `/isolation-murs-ite/`, `/maison-ossature-bois/`, `/extension-surelevation-bois/`, `/escalier-bois-sur-mesure/`, `/balcon-terrasse-abri-bois/` |
| Découvrir 3B Récup' | `/3b-recup/` |
| Charpentier à Briançon | `/charpentier-briancon/` |
| Charpentier à Serre Chevalier | `/charpentier-serre-chevalier/` |
| Charpentier en Vallouise et Pays des Écrins | `/charpentier-vallouise-pays-des-ecrins/` |
| « isolants biosourcés » (carte Bio) | `/isolation-biosourcee/` |
| « traits de Jupiter » (carte Bâti) | `/realisations/refection-d-une-charpente-a-l-argentiere-la-bessee/` |
| Vérifier notre qualification | lien externe vers l'annuaire RGE (à compléter, `rel="noopener"`) |

**Pages qui doivent pointer vers celle-ci :** l'accueil (« Découvrir notre histoire », « Qui sommes-nous ? »), le pied de page, la page 3B Récup' (« Qui sommes-nous ? ») et les pages secteur.

---

## 6. Photos à utiliser

| Emplacement | Dossier de galerie | Légende d'origine | Nom de fichier proposé | Texte alternatif |
|---|---|---|---|---|
| Héros (repli si pas de portrait) | `/galeries/refection-d-une-charpente-a-l-argentiere-la-bessee` | assamblage à blanc | `assemblage-a-blanc-charpente-argentiere-la-bessee.webp` | Assemblage à blanc d'une charpente à l'atelier avant le levage, chantier de L'Argentière-la-Bessée |
| Notre histoire | `/galeries/refection-d-une-charpente-a-l-argentiere-la-bessee` | levage des fermes | `levage-fermes-charpente-argentiere-la-bessee.webp` | Levage des fermes d'une charpente par l'équipe de 3B Charpente |
| Carte Bio | `/galeries/renovation-et-isolation-d-un-chalet-a-vallouise` | Façade Nord et Ouest | `chalet-isole-facade-nord-ouest-vallouise.webp` | Chalet des années 1980 rénové et isolé en fibres végétales et fibre de bois à Vallouise |
| Carte Bâti | `/galeries/refection-d-une-charpente-a-l-argentiere-la-bessee` | taille d'un tenon à double embrèvement à la besaïgue | `taille-tenon-double-embrevement-besaigue.webp` | Taille à la besaiguë d'un tenon à double embrèvement |
| Carte Bois | `/galeries/renovation-d-une-maison-d-habitation-sur-la-commune-de-prelles` | Taille de la charpente (1) | `taille-charpente-meleze-pays-prelles.webp` | Taille d'une charpente en mélèze du pays pour une maison à Prelles |
| Section 4 (fond de la citation, optionnel) | `/galeries/maison-a-ossature-bois-dans-les-monts-du-lyonnais` | charpente apparent et soleil couchant.. | `charpente-apparente-soleil-couchant-ossature-bois.webp` | Charpente apparente d'une maison à ossature bois au soleil couchant |
| 3B Récup' | `/galeries/renovation-d-une-maison-d-habitation-a-l-argentiere-la-bessee` | Garde corps en bois de réemploi | `garde-corps-bois-reemploi-argentiere-la-bessee.webp` | Garde-corps en bois de réemploi posé par 3B Charpente à L'Argentière-la-Bessée |

**Photos d'ambiance :** une au maximum (forêt de mélèzes de la maquette, possible en fond de la section 8 « valeurs »), signalée comme photo d'ambiance.

**Photos manquantes à demander à Jean :**
- portrait de Jean-Michel Tardy (format vertical, à l'atelier, outil en main) : indispensable pour cette page ;
- un portrait par membre de l'équipe confirmé (même fond, même lumière) ;
- photo de groupe sur un chantier ;
- l'atelier, vue d'ensemble ;
- photo ancienne du Tour de France ou de l'apprentissage, si Jean en a une et accepte de la publier ;
- logo de la Scierie Savoldelli (avec accord) et logo RGE Qualibat officiel.

---

## 7. Points à valider avec Jean

1. **Équipe :** liste actuelle des personnes, rôles exacts, accord écrit de chacun pour le nom et la photo. La liste de la maquette Framer diffère de la page équipe de new.3bcharpente.fr.
2. **Compagnons du Devoir :** Jean a-t-il été reçu compagnon (et dans quelle société) ? Si oui, on peut écrire « compagnon charpentier du Devoir » dans le H2, la FAQ et le `Person`.
3. **Spécialité du CAP :** CAP charpentier bois ? On l'écrira si c'est confirmé.
4. **Citation :** Jean valide-t-il la citation telle quelle ? Souhaite-t-il garder un texte plus long à la première personne (celui de new.3bcharpente.fr, nettoyé) ?
5. **Formateur :** dans quel organisme Jean a-t-il été formateur à L'Argentière-la-Bessée ? Peut-on le citer ?
6. **3B Récup' :** année de lancement, pour la frise.
7. **Date de création :** vérifier que 2007 correspond à la date d'immatriculation au répertoire SIRENE (SIREN 494 482 714).
8. **Scierie Savoldelli :** accord pour la citer comme partenaire, avec logo et lien.
9. **RGE :** lien vers la fiche de l'annuaire officiel. Attention, l'annuaire indique le SIRET 494 482 714 00024 alors que les mentions légales actuelles indiquent 00016 (voir fiche 22).
10. **PRECI :** lien exact vers la fiche 3B Récup'.
11. **FEADER / LEADER :** objet du financement, et faut-il afficher le logo sur cette page ?
12. **Atelier :** confirmer que les charpentes sont taillées et montées à blanc à l'atelier (cartes « Bâti » et « La belle ouvrage », FAQ 3).
13. **Photos :** portrait de Jean indispensable, voir partie 6.
