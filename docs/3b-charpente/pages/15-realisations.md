# Fiche de page 15 : Réalisations (`/realisations/`)

> **Sources :** `00-brief.md` et `realisations-source.md` uniquement (titres, textes publiés et légendes de photos de 3bcharpente.fr/galerie, relevé du 11 octobre 2026). Fiche rédigée le 11 octobre 2026.
>
> **Conventions de lecture :**
> - dans les titres (H1, H2), les mots entre `**` passent en **vert accent** (#336233 sur fond clair, vert sauge #A3D2A3 sur fond sombre) ; dans les textes courants, `**` veut dire gras ;
> - les espaces insécables avant : ; ? ! et dans les guillemets sont déjà en place ;
> - tout ce qui est entre `[À VALIDER AVEC JEAN : …]` doit être confirmé ou retiré avant la mise en ligne.

---

## 1. Carte d'identité

- **Adresse :** `/realisations/`
- **Objectif de la page :**
  - montrer les 24 chantiers réels, classés par prestation et filtrables par commune ;
  - être la page de destination de la redirection `3bcharpente.fr/galerie` → `/realisations/` et le point d'entrée des 24 fiches (`/realisations/{adresse actuelle}/`) ;
  - relier chaque chantier à sa prestation (pages 02 à 10, 3B Récup') et à sa page secteur (18 à 20).
- **Visiteurs visés :** particuliers qui veulent voir « des chantiers comme le mien, près de chez moi » ; architectes et maîtres d'œuvre qui jugent la qualité d'exécution ; visiteurs venus des anciennes adresses de la galerie.
- **Mots-clés :**
  - principal : « réalisations charpente hautes alpes » (non mesuré) ;
  - secondaires (longue traîne portée par les fiches) : commune + ouvrage, par exemple « charpente l'argentière-la-bessée », « surélévation ossature bois briançon », « escalier quart tournant mélèze », « balcon mélèze ».
- **Intention de recherche :** informationnelle et de réassurance (« voir leur travail avant de les appeler »).
- **Pages liées :** 01, 02 à 10, 11 et 14, 16 (les 24 fiches), 18 à 20, 21.

---

## 2. SEO

- **Balise title (55 caractères) :** Réalisations charpente bois Hautes-Alpes | 3B Charpente
- **Meta description (150 caractères) :** Nos chantiers en photos : charpentes en mélèze du pays, isolation biosourcée, ossature bois et bois de réemploi, de Briançon à Vallouise. À découvrir.
- **H1 :** Nos **réalisations** de charpente dans les **Hautes-Alpes**
- **Données structurées :** `CollectionPage` contenant un `ItemList` des fiches (ordre d'affichage par défaut), `BreadcrumbList`, `FAQPage`. Bloc complet en fin de partie 3.
- **Canonique :** toujours `https://3bcharpente.fr/realisations/`, y compris pour les vues filtrées (`?prestation=…&commune=…`).
- **Textes alternatifs :** modèle et liste complète en partie 6.

---

## 3. Sections dans l'ordre

### Section 1 : héros

- **Rôle :** dire ce qu'on va voir et où.
- **Composant Framer :** héros réduit (titre en deux couleurs, texte, un bouton), avec à droite une mosaïque de trois photos réelles qui débordent (reprise du collage de l'accueil).
- **Copywriting :**
  - **Kicker :** Réalisations
  - **H1 :** Nos **réalisations** de charpente dans les **Hautes-Alpes**
  - **Texte :** Des chantiers réels, photographiés de la **taille à l'atelier** jusqu'aux **finitions**. Charpentes, rénovations, isolation biosourcée, ossature bois, escaliers et balcons : voici le travail de 3B Charpente à L'Argentière-la-Bessée, à Briançon, en Vallouise, à Serre Chevalier, et parfois plus loin.
  - **Bouton plein :** Demander mon devis → `/contact/`
- **Mosaïque :** « Façade Sud et sa terrasse » (Vallouise), « levage des fermes » (L'Argentière-la-Bessée), « 1façade sud finie » (surélévation, Briançon).

### Section 2 : en bref

- **Rôle :** paragraphe autonome, repris par les moteurs et les IA.
- **Composant Framer :** carte blanche, pastille sauge « En bref ».
- **Copywriting :**
  - **Étiquette :** En bref
  - **Texte (51 mots) :** 3B Charpente présente ici 24 chantiers, réalisés pour la plupart dans le nord des Hautes-Alpes : L'Argentière-la-Bessée, Briançon, Vallouise, Pelvoux, La Salle-les-Alpes, Saint-Martin-de-Queyrières. On y voit des charpentes taillées à l'atelier, des isolations biosourcées, des surélévations en ossature bois, des escaliers sur mesure, des balcons en mélèze et du bois de réemploi.

### Section 3 : bandeau de chiffres

- **Rôle :** preuves rapides, toutes vérifiables dans la galerie.
- **Composant Framer :** ligne de quatre pastilles sauge sur fond clair.
- **Copywriting :**
  - 24 chantiers présentés
  - Depuis 2007
  - Mélèze, douglas, épicéa, frêne, pin
  - Du bois de réemploi
- *Note :* les essences viennent des légendes de photos (plancher en mélèze pays, bardage en douglas, plancher douglas et épicéa, panneaux trois plis épicéa, escalier en frêne, bardage en pin).

### Section 4 : filtres

- **Rôle :** trouver vite « un chantier comme le mien » ou « près de chez moi ».
- **Composant Framer :** barre de filtres collante sous l'en-tête au défilement ; pastilles cliquables (style des pastilles sauge, état actif en vert forêt avec texte blanc) ; liste déroulante pour la commune.
- **Copywriting :**
  - **Libellé du filtre 1 :** Par prestation
  - **Pastilles (avec nombre de chantiers entre parenthèses, calculé automatiquement) :**
    - Toutes
    - Charpente bois
    - Rénovation de charpente et combles
    - Isolation biosourcée
    - Isolation de toiture
    - Isolation des murs
    - Maison ossature bois
    - Extension et surélévation
    - Escaliers
    - Balcons, terrasses et abris
    - Réemploi (3B Récup')
  - **Libellé du filtre 2 :** Par commune
  - **Liste déroulante, groupée par secteur :**
    - Toutes les communes
    - *Briançon et Briançonnais :* Briançon
    - *Serre Chevalier :* La Salle-les-Alpes ; Le Monêtier-les-Bains (Le Casset)
    - *Vallouise et Pays des Écrins :* L'Argentière-la-Bessée ; Vallouise-Pelvoux (Vallouise, Pelvoux) ; Saint-Martin-de-Queyrières (Prelles) ; Champcella ; La Roche-de-Rame
    - *Hors Hautes-Alpes :* Gresse-en-Vercors (Isère) ; monts du Lyonnais
  - **Compteur (zone annoncée aux lecteurs d'écran) :** {n} chantiers
  - **Bouton texte :** Effacer les filtres
  - **Message si aucun résultat :** Aucun chantier ne correspond encore à ce choix. Le vôtre sera peut-être le premier : parlons-en. → bouton « Demander mon devis » (`/contact/`)
- **Comportement :**
  - par défaut, la page affiche les chantiers **groupés par famille** (sections 5 à 10) ; dès qu'un filtre est actif, les titres de famille disparaissent et les cartes correspondantes s'affichent en grille simple ;
  - un chantier peut répondre à plusieurs prestations (étiquettes « autres prestations » des tableaux) : il apparaît dans chaque filtre concerné ;
  - les chantiers dont la commune n'est pas connue n'apparaissent que dans « Toutes les communes » ;
  - les 24 cartes sont présentes dans le code HTML dès le chargement (les filtres masquent, ils ne chargent rien) : Google voit tous les liens ;
  - le filtre actif s'écrit dans l'adresse (`?prestation=escaliers&commune=briancon`) pour pouvoir partager une vue ; la balise canonique reste `/realisations/` et ces adresses ne sont jamais liées dans le menu ;
  - pastilles en `<button aria-pressed>`, navigables au clavier.
- *Note :* « Vallouise-Pelvoux », « Le Monêtier-les-Bains » et « Saint-Martin-de-Queyrières » sont les communes officielles qui regroupent Vallouise et Pelvoux, Le Casset, et Prelles. On garde les noms de villages entre parenthèses, car ce sont ceux de la galerie et ceux que les gens cherchent.

### Section 4 bis : spécification des cartes

- **Composant Framer :** carte de réalisation de la maquette (photo, étiquette posée sur la photo, titre, lien « Voir les travaux → »).
- **Contenu de chaque carte, dans l'ordre :**
  1. **Photo** au format 4:3, coins arrondis comme la maquette, WebP avec plusieurs tailles (400, 800, 1 200 px), largeur et hauteur déclarées ; chargement différé sauf pour les trois premières cartes.
  2. **Étiquette posée sur la photo** (pastille crème, en haut à gauche) : la **commune** (par exemple « Briançon »), à la place de « 3B Charpente » ; si la commune n'est pas connue, la prestation principale.
  3. **Titre (H3)** : titre corrigé (colonne « Titre affiché » des tableaux), deux lignes au plus.
  4. **Ligne d'information** en texte pierre (#78716C) : prestation principale · nombre de photos (par exemple « Rénovation de charpente · 22 photos »).
  5. **Texte** : une phrase de 25 mots au plus, uniquement avec les faits de la fiche (colonne « Texte de carte »).
  6. **Lien** : Voir les travaux → (toute la carte est cliquable ; le nom accessible du lien est le titre).
- **Survol :** léger zoom de la photo (1,03) et ombre douce, comme les animations de la maquette ; entrée en fondu montant au défilement.
- **Attributs de filtrage :** `data-prestation` (une ou plusieurs valeurs : `charpente-bois`, `renovation-charpente`, `isolation-biosourcee`, `isolation-toiture`, `isolation-murs`, `ossature-bois`, `extension-surelevation`, `escaliers`, `balcons-terrasses-abris`, `reemploi`) et `data-commune` (`argentiere-la-bessee`, `briancon`, `vallouise-pelvoux`, `la-salle-les-alpes`, `le-monetier-les-bains`, `saint-martin-de-queyrieres`, `champcella`, `la-roche-de-rame`, `gresse-en-vercors`, `monts-du-lyonnais`).
- **Adresses :** les fiches gardent **exactement** l'adresse actuelle de la galerie (`/realisations/{adresse actuelle}/`), fautes comprises (« abris », « queyriere »), pour que chaque redirection 301 soit simple et sans chaîne. Seuls les titres affichés sont corrigés.

### Section 5 : famille « Charpente » (7 chantiers)

- **Composant Framer :** titre de section, intro, liens vers les prestations, grille de cartes (3 colonnes sur ordinateur, 1 sur mobile).
- **Copywriting :**
  - **Kicker :** Charpente
  - **H2 :** **Charpentes** neuves et **rénovées**
  - **Intro :** Charpentes neuves tracées, taillées et assemblées à blanc à l'atelier ; charpentes anciennes reprises ou refaites ; lucarnes ouvertes et toitures rénovées.
  - **Liens :** Charpente bois traditionnelle → `/charpente-bois/` · Rénovation de charpente et combles → `/renovation-charpente-combles/`

| # | Titre affiché (H3) | Nouvelle adresse | Commune · page secteur | Prestation principale · autres | Photo de carte (légende) | Texte de carte |
|---|---|---|---|---|---|---|
| 14 | Réfection d'une charpente à L'Argentière-la-Bessée | `/realisations/refection-d-une-charpente-a-l-argentiere-la-bessee/` | L'Argentière-la-Bessée · 20 | Rénovation de charpente et combles · charpente bois, isolation biosourcée | levage des fermes | Dépose de l'ancienne charpente, taille traditionnelle à l'atelier, lucarne, panneaux en fibre de bois, plancher et bardage en mélèze. |
| 18 | Rénovation d'une copropriété à Briançon | `/realisations/renovation-d-une-copropriete-a-briancon/` | Briançon · 18 | Rénovation de charpente et combles · isolation biosourcée | Reprise des fermes | Reprise de la charpente et des fermes, isolation soufflée, dépassée de toiture recréée et nouvelle couverture. Avec en prime, une belle vue. |
| 16 | Réhabilitation d'une ancienne forge à La Salle-les-Alpes | `/realisations/rehabilitation-d-une-ancienne-forge-a-la-salle-les-alpes/` | La Salle-les-Alpes · 19 | Charpente bois · escaliers, balcons | Chantier fini | Charpente taillée puis levée, couverture finie, escalier quart tournant encloisonné et balcon extérieur. |
| 20 | Rénovation d'une maison en mélèze à Prelles | `/realisations/renovation-d-une-maison-d-habitation-sur-la-commune-de-prelles/` | Prelles (Saint-Martin-de-Queyrières) · 20 | Charpente bois · balcons, terrasses | Batiment fini | Rénovation en mélèze du pays : charpente taillée et assemblée à blanc, solivage, terrasse en mélèze et garde-corps bois-métal. |
| 17 | Rénovation d'un toit en bardeaux de mélèze au Casset | `/realisations/renovation-d-un-toit-en-bardeau-meleze-au-casset/` | Le Casset (Le Monêtier-les-Bains) · 19 | Rénovation de charpente et combles | après | Une toiture en bardeaux de mélèze (petites planchettes posées en recouvrement, comme des tuiles), avant et après rénovation. |
| 15 | Réfection d'une toiture à [À VALIDER AVEC JEAN : lieu, « Ronatlon » sur la galerie] | `/realisations/refection-d-une-toiture-a-ronatlon/` | à préciser · — | Rénovation de charpente et combles · réemploi | ferme en vieux bois | La pose d'une charpente avec une ferme en vieux bois, le détail d'un pied d'arbalétrier, puis le bardage. |
| 7 | Plancher en douglas et épicéa dans un bâti ancien | `/realisations/creation-d-un-plancher-dans-un-bati-ancien/` | [À VALIDER AVEC JEAN : commune] · — | Rénovation de charpente et combles | en cours de levage | Un nouveau plancher en douglas et épicéa, levé dans un bâti ancien. |

### Section 6 : famille « Isolation biosourcée » (5 chantiers)

- **Copywriting :**
  - **Kicker :** Isolation
  - **H2 :** **Isoler** avec des matériaux **biosourcés**
  - **Intro :** Ouate de cellulose insufflée, panneaux de fibre de bois, laine de chanvre, lin et coton : des isolations posées avec une étanchéité à l'air soignée, en rénovation de chalet comme en bâti ancien.
  - **Liens :** Isolation biosourcée → `/isolation-biosourcee/` · Isolation de toiture (sarking) → `/isolation-toiture-sarking/` · Isolation des murs (ITE et bâti ancien) → `/isolation-murs-ite/`

| # | Titre affiché (H3) | Nouvelle adresse | Commune · page secteur | Prestation principale · autres | Photo de carte (légende) | Texte de carte |
|---|---|---|---|---|---|---|
| 22 | Rénovation et isolation d'un chalet à Vallouise | `/realisations/renovation-et-isolation-d-un-chalet-a-vallouise/` | Vallouise (Vallouise-Pelvoux) · 20 | Isolation biosourcée · isolation des murs, balcons et terrasses | Façade Sud et sa terrasse | Chalet des années 1980 : 28 cm d'isolant biosourcé dans les murs, 32 cm en toiture, bardage mélèze, enduit sur fibre de bois, terrasse agrandie. |
| 21 | Rénovation énergétique et lucarne à Saint-Martin-de-Queyrières | `/realisations/renovation-energetique-et-ouverture-d-une-lucarne-a-saint-martin-de-queyriere/` | Saint-Martin-de-Queyrières · 20 | Isolation biosourcée · rénovation de charpente et combles | toiture terminée | Ouverture d'une lucarne, caissons d'isolation et étanchéité à l'air, jusqu'à la toiture terminée. |
| 11 | Isolation d'une toiture ancienne à L'Argentière-la-Bessée | `/realisations/isolation-d-une-toiture-ancienne-a-l-argentiere-la-bessee/` | L'Argentière-la-Bessée · 20 | Isolation de toiture [À VALIDER AVEC JEAN : par l'extérieur ?] · isolation biosourcée, rénovation de charpente | panneaux en fibre de bois | Doublage pour le renfort et l'isolation, panneaux en fibre de bois, étanchéité à l'air et à l'eau, fenêtre de toit. |
| 10 | Isolation d'un bâti ancien par l'intérieur | `/realisations/isolation-d-un-bati-ancien-par-l-interieur/` | [À VALIDER AVEC JEAN : commune] · — | Isolation des murs · isolation biosourcée | insufflation de ouate de cellulose | Poutres en I, ouate de cellulose insufflée, panneaux OSB3, étanchéité à l'air, nouvelles menuiseries et bardage en pin. |
| 12 | Isolation et habillage d'une voûte à L'Argentière-la-Bessée | `/realisations/isolation-et-habillage-d-une-voute-a-l-argentiere-la-bessee/` | L'Argentière-la-Bessée · 20 | Isolation biosourcée | [À VALIDER AVEC JEAN : aucune photo publiée] | [À VALIDER AVEC JEAN : description du chantier et matériaux] |

- *Note sur la fiche 12 :* aucune photo n'existe sur la page actuelle. Tant que Jean n'en fournit pas, la carte est masquée sur `/realisations/` et la fiche passe en `noindex` (son adresse reste active pour la redirection 301). Les compteurs affichent alors 23 chantiers.

### Section 7 : bandeau « Réemploi » (3B Récup')

- **Rôle :** mettre en avant le réemploi au milieu de la page, là où l'attention est encore forte.
- **Composant Framer :** bandeau vert forêt pleine largeur, formes organiques vert clair, pastille « 3B Récup' » ; à gauche une grande carte de réalisation (fiche 19), à droite le texte.
- **Copywriting :**
  - **Pastille :** 3B Récup'
  - **H2 :** Du bois qui a **déjà servi**, et qui **sert encore**
  - **Texte :** Sur cette maison de L'Argentière-la-Bessée, le bardage est en vieux bois et le garde-corps en bois de réemploi. Ailleurs, c'est une ferme de charpente en vieux bois, ou un support maçonné en pierres récupérées. Avec 3B Récup', nous déposons, trions, nettoyons et usinons le bois de déconstruction pour lui donner une seconde vie.
  - **Liens texte :** Voir la ferme en vieux bois → fiche 15 · Voir le support en pierres récupérées → fiche 13
  - **Bouton plein clair :** Découvrir 3B Récup' → `/3b-recup/`
  - **Lien texte :** Le bois de réemploi → `/3b-recup/bois-de-reemploi/`

| # | Titre affiché (H3) | Nouvelle adresse | Commune · page secteur | Prestation principale · autres | Photo de carte (légende) | Texte de carte |
|---|---|---|---|---|---|---|
| 19 | Rénovation d'une maison avec du bois de réemploi à L'Argentière-la-Bessée | `/realisations/renovation-d-une-maison-d-habitation-a-l-argentiere-la-bessee/` | L'Argentière-la-Bessée · 20 | Réemploi (bois de réemploi) · rénovation de charpente, escaliers, balcons | Bardage vieux bois | Pignon vitré, escalier balancé, bardage en vieux bois, garde-corps en bois de réemploi et balcon. |

### Section 8 : famille « Ossature bois, extensions et surélévations » (3 chantiers)

- **Copywriting :**
  - **Kicker :** Ossature bois
  - **H2 :** **Construire** et **surélever** en ossature bois
  - **Intro :** Une maison neuve en ossature bois, des étages ajoutés sur des maisons existantes : le bois permet de construire léger et de préparer une grande partie du travail à l'atelier.
  - **Liens :** Maison ossature bois → `/maison-ossature-bois/` · Extension et surélévation bois → `/extension-surelevation-bois/`

| # | Titre affiché (H3) | Nouvelle adresse | Commune · page secteur | Prestation principale · autres | Photo de carte (légende) | Texte de carte |
|---|---|---|---|---|---|---|
| 24 | Surélévation en ossature bois à Briançon | `/realisations/surelevation-en-ossature-bois-d-une-maison-a-briancon/` | Briançon · 18 | Extension et surélévation · maison ossature bois | 1façade sud finie | Murs pignons en ossature bois, pannes porteuses de 14 × 30 entaillées, panneaux trois plis en épicéa et remplissage en laine de bois. |
| 23 | Surélévation d'une maison à Pelvoux | `/realisations/surelevation-a-pelvoux/` | Pelvoux (Vallouise-Pelvoux) · 20 | Extension et surélévation | chantier terminé | Une maison surélevée, de l'existant au chantier terminé, et le détail d'une console de dépassée de toit. |
| 13 | Maison à ossature bois dans les monts du Lyonnais | `/realisations/maison-a-ossature-bois-dans-les-monts-du-lyonnais/` | monts du Lyonnais · hors secteur | Maison ossature bois · charpente bois, réemploi | chantier terminé! | Murs à ossature bois et fibre de bois, charpente et solivage apparents, bardage en douglas, support maçonné en pierres récupérées. |

### Section 9 : famille « Escaliers » (3 chantiers)

- **Copywriting :**
  - **Kicker :** Escaliers
  - **H2 :** Des **escaliers** dessinés pour **votre maison**
  - **Intro :** Quart tournant en mélèze lamellé-collé, bois debout, frêne et aluminium : nos escaliers sont dessinés sur mesure. Celui en mélèze a été tracé, taillé et assemblé dans notre atelier, puis monté en deux jours, finitions comprises.
  - **Lien :** Escaliers bois sur mesure → `/escalier-bois-sur-mesure/`

| # | Titre affiché (H3) | Nouvelle adresse | Commune · page secteur | Prestation principale · autres | Photo de carte (légende) | Texte de carte |
|---|---|---|---|---|---|---|
| 8 | Escalier quart tournant en mélèze lamellé-collé | `/realisations/escalier-1-4-tournant-en-meleze-lamelle-colle/` | [À VALIDER AVEC JEAN : commune] · — | Escaliers · rénovation de combles | montage terminé | Marches et contremarches sur crémaillères, dessinées puis taillées à l'atelier ; il mène aux combles et sert de cloison à la salle de bains. |
| 6 | Escalier en bois debout dans un bâti ancien | `/realisations/creation-d-un-escalier-en-bois-debout-dans-un-bati-ancien/` | [À VALIDER AVEC JEAN : commune] · — | Escaliers | escalier terminé | L'ancien escalier démoli, un nouveau en bois debout (posé fibres à la verticale) sur caissons en panneaux trois plis. |
| 9 | Escalier en frêne et aluminium | `/realisations/fabrication-d-un-escalier/` | [À VALIDER AVEC JEAN : commune] · — | Escaliers | frêne et aluminium | Un escalier en frêne et aluminium, de la fabrication à son arrivée sur place. |

### Section 10 : famille « Balcons, terrasses et abris » (5 chantiers)

- **Copywriting :**
  - **Kicker :** Extérieurs
  - **H2 :** **Balcons**, **terrasses** et abris en bois
  - **Intro :** Balcons sur portiques, terrasses couvertes, abris de voiture et de jardin : des ouvrages extérieurs sur mesure, en mélèze, avec des assemblages traditionnels comme le tenon passant ou le tenon et mortaise chevillé.
  - **Lien :** Balcons, terrasses et abris bois → `/balcon-terrasse-abri-bois/`

| # | Titre affiché (H3) | Nouvelle adresse | Commune · page secteur | Prestation principale · autres | Photo de carte (légende) | Texte de carte |
|---|---|---|---|---|---|---|
| 2 | Terrasse couverte à Champcella | `/realisations/construction-d-une-terrasse-couverte-a-champcella/` | Champcella · 20 | Balcons, terrasses et abris · charpente bois | terrasse couverte et local technique | Terrasse couverte et local technique, abri de voiture en prolongement de toiture et plancher en mélèze du pays. |
| 4 | Balcon en mélèze à La Roche-de-Rame | `/realisations/creation-d-un-balcon-a-la-roche-de-rame/` | La Roche-de-Rame · 20 | Balcons, terrasses et abris | vue d'ensemble | Un balcon porté par des portiques, avec sa balustrade en mélèze. |
| 5 | Balcon terrasse à Gresse-en-Vercors | `/realisations/creation-d-un-balcon-terrasse-a-gresse-en-vercors/` | Gresse-en-Vercors (Isère) · hors secteur | Balcons, terrasses et abris | de face | Un balcon terrasse, du dessin à la réalisation, vu de face, d'en haut et d'en bas. |
| 1 | Abri de voiture à L'Argentière-la-Bessée | `/realisations/abris-voiture-a-l-argentiere-la-bessee/` | L'Argentière-la-Bessée · 20 | Balcons, terrasses et abris · charpente bois | poinçon et entrait cintré | Charpente traditionnelle avec poinçon et entrait cintré, assemblée à tenons et mortaises chevillés. |
| 3 | Abri de jardin à Pelvoux | `/realisations/creation-d-un-abris-de-jardin-a-pelvoux/` | Pelvoux (Vallouise-Pelvoux) · 20 | Balcons, terrasses et abris | réalisation terminé | Un abri de jardin en bois, du levage à la réalisation terminée. |

- *Notes :*
  - « en mélèze » dans l'intro s'appuie sur les fiches 2 (plancher en mélèze pays), 4 (balustrade en mélèze), 20 et 22 (terrasses en mélèze) ;
  - définitions courtes ajoutées dans les cartes pour le jargon (bardeau, bois debout) ; « poinçon » et « entrait » sont expliqués sur la fiche 1 elle-même.

### Section 11 : nos chantiers par secteur

- **Rôle :** relier la page aux trois pages secteur.
- **Composant Framer :** trois cartes blanches côte à côte, avec le nombre de chantiers en grand chiffre vert (Nohemi Bold).
- **Copywriting :**
  - **Kicker :** Près de chez vous
  - **H2 :** Nos chantiers **par secteur**
  - **Carte 1 :** 2 chantiers · Briançon : une copropriété rénovée, une maison surélevée en ossature bois. → Charpentier à Briançon (`/charpentier-briancon/`)
  - **Carte 2 :** 2 chantiers · Serre Chevalier : une ancienne forge réhabilitée à La Salle-les-Alpes, un toit en bardeaux de mélèze au Casset. → Charpentier à Serre Chevalier (`/charpentier-serre-chevalier/`)
  - **Carte 3 :** 12 chantiers · Vallouise et Pays des Écrins : L'Argentière-la-Bessée, Vallouise, Pelvoux, Saint-Martin-de-Queyrières, Prelles, Champcella, La Roche-de-Rame. → Charpentier en Vallouise et Pays des Écrins (`/charpentier-vallouise-pays-des-ecrins/`)
  - **Ligne sous les cartes :** Nous intervenons aussi plus loin : un balcon terrasse à Gresse-en-Vercors, une maison à ossature bois dans les monts du Lyonnais.
- *Note :* chiffres comptés à partir des tableaux ci-dessus (12 en Vallouise et Pays des Écrins en comptant la fiche 12 ; 11 si elle est masquée). Les six chantiers sans commune ne sont comptés nulle part. Rattachement des communes aux pages secteur à harmoniser avec les fiches 18 à 20 : Prelles et Saint-Martin-de-Queyrières sont ici rattachés au Pays des Écrins.

### Section 12 : FAQ

- **Composant Framer :** FAQ en accordéon dans des cartes blanches.
- **Copywriting :**
  - **Kicker :** Questions fréquentes
  - **H2 :** À propos de nos **chantiers**
  - Questions et réponses : voir partie 4.

### Section 13 : appel à l'action final

- **Composant Framer :** bandeau d'appel à l'action vert forêt, formes organiques et grille ronde translucide.
- **Copywriting :**
  - **Kicker :** Votre projet
  - **H2 :** Et si le prochain chantier était **le vôtre** ?
  - **Texte :** Chaque projet chez 3B Charpente débute par une étude sur mesure. Racontez-nous le vôtre : nous en parlerons lors d'une rencontre, puis nous vous proposerons un devis détaillé.
  - **Bouton plein clair :** Demander mon devis → `/contact/`
  - **Bouton contour clair :** Appeler le 06 34 67 31 49 → `tel:+33634673149`

### Données structurées complètes

Ordre = ordre d'affichage par défaut. Si la fiche 12 est masquée, la retirer et renuméroter.

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": "https://3bcharpente.fr/realisations/#page",
      "url": "https://3bcharpente.fr/realisations/",
      "name": "Nos réalisations de charpente dans les Hautes-Alpes",
      "inLanguage": "fr-FR",
      "about": { "@id": "https://3bcharpente.fr/#entreprise" },
      "mainEntity": { "@id": "https://3bcharpente.fr/realisations/#liste" }
    },
    {
      "@type": "ItemList",
      "@id": "https://3bcharpente.fr/realisations/#liste",
      "numberOfItems": 24,
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Réfection d'une charpente à L'Argentière-la-Bessée", "url": "https://3bcharpente.fr/realisations/refection-d-une-charpente-a-l-argentiere-la-bessee/" },
        { "@type": "ListItem", "position": 2, "name": "Rénovation d'une copropriété à Briançon", "url": "https://3bcharpente.fr/realisations/renovation-d-une-copropriete-a-briancon/" },
        { "@type": "ListItem", "position": 3, "name": "Réhabilitation d'une ancienne forge à La Salle-les-Alpes", "url": "https://3bcharpente.fr/realisations/rehabilitation-d-une-ancienne-forge-a-la-salle-les-alpes/" },
        { "@type": "ListItem", "position": 4, "name": "Rénovation d'une maison en mélèze à Prelles", "url": "https://3bcharpente.fr/realisations/renovation-d-une-maison-d-habitation-sur-la-commune-de-prelles/" },
        { "@type": "ListItem", "position": 5, "name": "Rénovation d'un toit en bardeaux de mélèze au Casset", "url": "https://3bcharpente.fr/realisations/renovation-d-un-toit-en-bardeau-meleze-au-casset/" },
        { "@type": "ListItem", "position": 6, "name": "Réfection d'une toiture avec une ferme en vieux bois", "url": "https://3bcharpente.fr/realisations/refection-d-une-toiture-a-ronatlon/" },
        { "@type": "ListItem", "position": 7, "name": "Plancher en douglas et épicéa dans un bâti ancien", "url": "https://3bcharpente.fr/realisations/creation-d-un-plancher-dans-un-bati-ancien/" },
        { "@type": "ListItem", "position": 8, "name": "Rénovation et isolation d'un chalet à Vallouise", "url": "https://3bcharpente.fr/realisations/renovation-et-isolation-d-un-chalet-a-vallouise/" },
        { "@type": "ListItem", "position": 9, "name": "Rénovation énergétique et lucarne à Saint-Martin-de-Queyrières", "url": "https://3bcharpente.fr/realisations/renovation-energetique-et-ouverture-d-une-lucarne-a-saint-martin-de-queyriere/" },
        { "@type": "ListItem", "position": 10, "name": "Isolation d'une toiture ancienne à L'Argentière-la-Bessée", "url": "https://3bcharpente.fr/realisations/isolation-d-une-toiture-ancienne-a-l-argentiere-la-bessee/" },
        { "@type": "ListItem", "position": 11, "name": "Isolation d'un bâti ancien par l'intérieur", "url": "https://3bcharpente.fr/realisations/isolation-d-un-bati-ancien-par-l-interieur/" },
        { "@type": "ListItem", "position": 12, "name": "Isolation et habillage d'une voûte à L'Argentière-la-Bessée", "url": "https://3bcharpente.fr/realisations/isolation-et-habillage-d-une-voute-a-l-argentiere-la-bessee/" },
        { "@type": "ListItem", "position": 13, "name": "Rénovation d'une maison avec du bois de réemploi à L'Argentière-la-Bessée", "url": "https://3bcharpente.fr/realisations/renovation-d-une-maison-d-habitation-a-l-argentiere-la-bessee/" },
        { "@type": "ListItem", "position": 14, "name": "Surélévation en ossature bois à Briançon", "url": "https://3bcharpente.fr/realisations/surelevation-en-ossature-bois-d-une-maison-a-briancon/" },
        { "@type": "ListItem", "position": 15, "name": "Surélévation d'une maison à Pelvoux", "url": "https://3bcharpente.fr/realisations/surelevation-a-pelvoux/" },
        { "@type": "ListItem", "position": 16, "name": "Maison à ossature bois dans les monts du Lyonnais", "url": "https://3bcharpente.fr/realisations/maison-a-ossature-bois-dans-les-monts-du-lyonnais/" },
        { "@type": "ListItem", "position": 17, "name": "Escalier quart tournant en mélèze lamellé-collé", "url": "https://3bcharpente.fr/realisations/escalier-1-4-tournant-en-meleze-lamelle-colle/" },
        { "@type": "ListItem", "position": 18, "name": "Escalier en bois debout dans un bâti ancien", "url": "https://3bcharpente.fr/realisations/creation-d-un-escalier-en-bois-debout-dans-un-bati-ancien/" },
        { "@type": "ListItem", "position": 19, "name": "Escalier en frêne et aluminium", "url": "https://3bcharpente.fr/realisations/fabrication-d-un-escalier/" },
        { "@type": "ListItem", "position": 20, "name": "Terrasse couverte à Champcella", "url": "https://3bcharpente.fr/realisations/construction-d-une-terrasse-couverte-a-champcella/" },
        { "@type": "ListItem", "position": 21, "name": "Balcon en mélèze à La Roche-de-Rame", "url": "https://3bcharpente.fr/realisations/creation-d-un-balcon-a-la-roche-de-rame/" },
        { "@type": "ListItem", "position": 22, "name": "Balcon terrasse à Gresse-en-Vercors", "url": "https://3bcharpente.fr/realisations/creation-d-un-balcon-terrasse-a-gresse-en-vercors/" },
        { "@type": "ListItem", "position": 23, "name": "Abri de voiture à L'Argentière-la-Bessée", "url": "https://3bcharpente.fr/realisations/abris-voiture-a-l-argentiere-la-bessee/" },
        { "@type": "ListItem", "position": 24, "name": "Abri de jardin à Pelvoux", "url": "https://3bcharpente.fr/realisations/creation-d-un-abris-de-jardin-a-pelvoux/" }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://3bcharpente.fr/" },
        { "@type": "ListItem", "position": 2, "name": "Réalisations", "item": "https://3bcharpente.fr/realisations/" }
      ]
    }
  ]
}
```

- *Note :* le nom de la position 6 évite le lieu « Ronatlon » tant qu'il n'est pas vérifié ; une fois le lieu confirmé, écrire « Réfection d'une toiture à {lieu} ».

---

## 4. FAQ

Données structurées : `FAQPage`, textes identiques à ceux affichés.

**1. Où se trouvent les chantiers de 3B Charpente ?**
La plupart de nos chantiers sont dans le nord des Hautes-Alpes, autour de notre base de L'Argentière-la-Bessée : à L'Argentière même, à Vallouise, Pelvoux, Champcella, La Roche-de-Rame et Saint-Martin-de-Queyrières, mais aussi à Briançon, à La Salle-les-Alpes et au Casset, à Serre Chevalier. Nous avons aussi travaillé à Gresse-en-Vercors, en Isère, et dans les monts du Lyonnais. *(55 mots)*

**2. Utilisez-vous du bois local sur vos chantiers ?**
Oui. Nous utilisons principalement du mélèze et du sapin provenant des Hautes-Alpes, sciés par notre partenaire local, la Scierie Savoldelli. On le voit par exemple sur la maison rénovée à Prelles, en mélèze du pays, ou sur le plancher de la terrasse couverte de Champcella. Plusieurs chantiers intègrent aussi du bois de réemploi : bardage en vieux bois, garde-corps, ferme de charpente. *(61 mots)*

**3. Pouvez-vous réaliser un projet comme ceux-ci chez moi ?**
Chaque projet est unique, et nous travaillons en étroite collaboration avec vous pour adapter nos constructions à vos besoins, en respectant vos préférences esthétiques et fonctionnelles. Ces réalisations montrent ce que nous savons faire ; votre chantier sera pensé pour votre maison. Contactez-nous : nous discuterons de vos besoins lors d'une rencontre, puis nous vous proposerons un devis détaillé. *(57 mots)*

**4. Quels types de chantiers réalisez-vous ?**
Nos réalisations couvrent la charpente neuve et la rénovation de charpente, l'ouverture de lucarnes, l'isolation biosourcée des toitures et des murs, la maison à ossature bois, la surélévation, les escaliers sur mesure, les balcons, terrasses et abris en bois. Avec 3B Récup', nous déconstruisons aussi des structures bois pour en réemployer les matériaux, du bâtiment industriel à la maison particulière. *(60 mots)*

---

## 5. Liens internes

| Texte du lien | Page visée |
|---|---|
| Voir les travaux (24 cartes) | les 24 fiches `/realisations/…/` (tableaux de la partie 3) |
| Charpente bois traditionnelle | `/charpente-bois/` |
| Rénovation de charpente et combles | `/renovation-charpente-combles/` |
| Isolation biosourcée | `/isolation-biosourcee/` |
| Isolation de toiture (sarking) | `/isolation-toiture-sarking/` |
| Isolation des murs (ITE et bâti ancien) | `/isolation-murs-ite/` |
| Maison ossature bois | `/maison-ossature-bois/` |
| Extension et surélévation bois | `/extension-surelevation-bois/` |
| Escaliers bois sur mesure | `/escalier-bois-sur-mesure/` |
| Balcons, terrasses et abris bois | `/balcon-terrasse-abri-bois/` |
| Découvrir 3B Récup' | `/3b-recup/` |
| Le bois de réemploi | `/3b-recup/bois-de-reemploi/` |
| Charpentier à Briançon | `/charpentier-briancon/` |
| Charpentier à Serre Chevalier | `/charpentier-serre-chevalier/` |
| Charpentier en Vallouise et Pays des Écrins | `/charpentier-vallouise-pays-des-ecrins/` |
| Demander mon devis | `/contact/` |

**Règle pour les fiches (page 16) :** chaque fiche renvoie vers sa prestation principale, sa page secteur (colonne « page secteur » des tableaux), `/realisations/` et `/contact/`.

---

## 6. Photos à utiliser

**Modèle de texte alternatif :** « {Ouvrage} {en essence, si connue} {à commune, si connue}, réalisé par 3B Charpente ». Ne jamais inventer d'essence ni de commune.

**Noms de fichiers :** `{adresse-de-la-fiche}-carte.webp` (par exemple `renovation-d-une-copropriete-a-briancon-carte.webp`).

| # | Dossier de galerie | Légende d'origine | Texte alternatif |
|---|---|---|---|
| 1 | `/galeries/abris-voiture-a-l-argentiere-la-bessee` | poinçon et entrait cintré | Poinçon et entrait cintré de la charpente d'un abri de voiture à L'Argentière-la-Bessée, réalisé par 3B Charpente |
| 2 | `/galeries/construction-d-une-terrasse-couverte-a-champcella` | terrasse couverte et local technique | Terrasse couverte et local technique en bois à Champcella, réalisés par 3B Charpente |
| 3 | `/galeries/creation-d-un-abris-de-jardin-a-pelvoux` | réalisation terminé | Abri de jardin en bois terminé à Pelvoux, réalisé par 3B Charpente |
| 4 | `/galeries/creation-d-un-balcon-a-la-roche-de-rame` | vue d'ensemble | Balcon sur portiques avec balustrade en mélèze à La Roche-de-Rame, réalisé par 3B Charpente |
| 5 | `/galeries/creation-d-un-balcon-terrasse-a-gresse-en-vercors` | de face | Balcon terrasse en bois vu de face à Gresse-en-Vercors, réalisé par 3B Charpente |
| 6 | `/galeries/creation-d-un-escalier-en-bois-debout-dans-un-bati-ancien` | escalier terminé | Escalier en bois debout terminé dans un bâti ancien, réalisé par 3B Charpente |
| 7 | `/galeries/creation-d-un-plancher-dans-un-bati-ancien` | en cours de levage | Levage d'un plancher en douglas et épicéa dans un bâti ancien par 3B Charpente |
| 8 | `/galeries/escalier-1-4-tournant-en-meleze-lamelle-colle` | montage terminé | Escalier quart tournant en mélèze lamellé-collé menant aux combles, réalisé par 3B Charpente |
| 9 | `/galeries/fabrication-d-un-escalier` | frêne et aluminium | Escalier en frêne et aluminium fabriqué par 3B Charpente |
| 10 | `/galeries/isolation-d-un-bati-ancien-par-l-interieur` | insufflation de ouate de cellulose | Insufflation de ouate de cellulose pour isoler un bâti ancien par l'intérieur, par 3B Charpente |
| 11 | `/galeries/isolation-d-une-toiture-ancienne-a-l-argentiere-la-bessee` | panneaux en fibre de bois | Panneaux en fibre de bois posés sur une toiture ancienne à L'Argentière-la-Bessée par 3B Charpente |
| 12 | — | aucune photo | [À VALIDER AVEC JEAN : photos à fournir] |
| 13 | `/galeries/maison-a-ossature-bois-dans-les-monts-du-lyonnais` | chantier terminé! | Maison à ossature bois avec bardage en douglas dans les monts du Lyonnais, construite par 3B Charpente |
| 14 | `/galeries/refection-d-une-charpente-a-l-argentiere-la-bessee` | levage des fermes | Levage des fermes d'une charpente refaite à L'Argentière-la-Bessée par 3B Charpente |
| 15 | `/galeries/refection-d-une-toiture-a-ronatlon` | ferme en vieux bois | Ferme de charpente en vieux bois de réemploi, posée par 3B Charpente |
| 16 | `/galeries/rehabilitation-d-une-ancienne-forge-a-la-salle-les-alpes` | Chantier fini | Ancienne forge réhabilitée à La Salle-les-Alpes, charpente et couverture par 3B Charpente |
| 17 | `/galeries/renovation-d-un-toit-en-bardeau-meleze-au-casset` | après | Toit en bardeaux de mélèze rénové au Casset, par 3B Charpente |
| 18 | `/galeries/renovation-d-une-copropriete-a-briancon` | Reprise des fermes | Reprise des fermes de charpente d'une copropriété à Briançon par 3B Charpente |
| 19 | `/galeries/renovation-d-une-maison-d-habitation-a-l-argentiere-la-bessee` | Bardage vieux bois | Bardage en vieux bois de réemploi sur une maison rénovée à L'Argentière-la-Bessée par 3B Charpente |
| 20 | `/galeries/renovation-d-une-maison-d-habitation-sur-la-commune-de-prelles` | Batiment fini | Maison rénovée en mélèze du pays avec terrasse et garde-corps bois-métal à Prelles, par 3B Charpente |
| 21 | `/galeries/renovation-energetique-et-ouverture-d-une-lucarne-a-saint-martin-de-queyriere` | toiture terminée | Toiture rénovée avec lucarne à Saint-Martin-de-Queyrières, par 3B Charpente |
| 22 | `/galeries/renovation-et-isolation-d-un-chalet-a-vallouise` | Façade Sud et sa terrasse | Chalet rénové et isolé avec terrasse en mélèze à Vallouise, par 3B Charpente |
| 23 | `/galeries/surelevation-a-pelvoux` | chantier terminé | Maison surélevée à Pelvoux par 3B Charpente |
| 24 | `/galeries/surelevation-en-ossature-bois-d-une-maison-a-briancon` | 1façade sud finie | Façade sud d'une maison surélevée en ossature bois à Briançon, par 3B Charpente |

**Mosaïque du héros :** photos des fiches 22, 14 et 24 (voir ci-dessus).

**Photos d'ambiance :** aucune sur cette page : uniquement des photos de chantier.

**Photos manquantes à demander à Jean :**
- fiche 12 (voûte à L'Argentière-la-Bessée) : aucune photo ;
- fiches 3, 4, 9 et 17 : deux photos seulement chacune ; une vue d'ensemble supplémentaire serait utile ;
- tous les chantiers : une photo « avant » quand elle existe (elle manque pour la plupart) ;
- chantiers récents non publiés, surtout en 3B Récup' (déconstruction en cours, bois trié à l'atelier).

---

## 7. Points à valider avec Jean

1. **Communes manquantes :** dans quelle commune ont été réalisés les chantiers 6 (escalier en bois debout), 7 (plancher douglas et épicéa), 8 (escalier quart tournant), 9 (escalier frêne et aluminium) et 10 (isolation d'un bâti ancien par l'intérieur) ?
2. **« Ronatlon » (fiche 15) :** où se trouve ce chantier ? Le nom ne correspond à aucune commune connue.
3. **Fiche 12 (voûte) :** des photos et quelques lignes de description ? Sinon, la fiche reste masquée.
4. **Fiche 11 :** l'isolation de la toiture ancienne a-t-elle été faite par l'extérieur (sarking) ? Sinon, la ranger seulement sous « isolation biosourcée ».
5. **Classement par prestation :** le classement proposé (prestation principale + autres prestations) vous convient-il ? En particulier : la maison de L'Argentière-la-Bessée (fiche 19) mise en avant pour le réemploi, et la maison de Prelles (fiche 20) rangée en charpente bois.
6. **Rattachement aux secteurs :** Prelles et Saint-Martin-de-Queyrières rattachés au Pays des Écrins plutôt qu'au Briançonnais : d'accord ?
7. **Accord des clients :** les propriétaires ont-ils donné leur accord pour la publication des photos de leur maison avec le nom de la commune ?
8. **Escalier en bois debout :** la définition « bois posé fibres à la verticale » est-elle juste pour ce chantier ?
9. **Nouveaux chantiers :** y a-t-il des chantiers récents (depuis la dernière mise à jour de la galerie) à ajouter, surtout à Briançon et à Serre Chevalier, où il n'y a que deux réalisations chacun ?
10. **Chiffre « +100 projets »** (maquette) : à confirmer avant de l'ajouter au bandeau de chiffres.
