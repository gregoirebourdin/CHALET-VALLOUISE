Tu es directeur artistique et designer UX/UI senior : 20 ans de sites primés (Awwwards Site of the Day, FWA, CSS Design Awards), spécialiste du motion design web et de l'artisanat haut de gamme. Tu es aussi un développeur front-end exigeant. Ta mission : concevoir et coder la plus belle page d'accueil du monde pour Boulot, une entreprise familiale de charpente, couverture et construction bois dans les Hautes-Alpes. Je veux un effet « wow » dès la première seconde, un niveau de détail obsessionnel et une expérience à part, sans rien sacrifier à la lisibilité, aux performances ni au responsive.

Contexte : c'est une maquette de démonstration que je présenterai à Boulot pour leur vendre une refonte. Elle n'est pas publique : ajoute meta robots « noindex, nofollow » et une mention discrète en pied de page « Maquette de démonstration non officielle, proposée à Boulot ».

# 0. Avant de coder

1. Liste les skills disponibles dans ta session et charge ceux qui touchent au design front-end, à la mise en page ou aux artefacts (par exemple frontend-design ou artifact-design s'ils existent). N'invente pas de nom de skill : utilise ceux qui sont réellement listés.
2. Si l'outil Artifact est disponible, lance-le en mode « quickstart » avec l'intention « design » (Claude Design) pour explorer la direction artistique : planche de tendances, palette, typographies, 2 ou 3 pistes de hero. Choisis la meilleure piste, puis code-la.
3. Rédige avant tout code un court document de conception (docs/design.md) :
   - le concept ;
   - la palette et les rôles des couleurs ;
   - l'échelle typographique ;
   - la grille ;
   - le plan des sections ;
   - la spécification des animations (déclencheur, durée, courbe pour chacune).

# 1. Récupérer les images et le logo

Site source : https://www.boulot-sarl.fr/ (CMS Refinery, Rails).

Pages à parcourir (sitemap) :
- /
- /construction-bois
- /construction-bois/chalet-maison-ossature-bois
- /construction-bois/poteau-poutre
- /contact
- /galerie-photos
- /lentreprise
- /lentreprise/centre-dusinage-automatique-robot-drive-hundegger
- /lentreprise/les-avantages-du-bois
- /lentreprise/qui-sommes-nous
- /lentreprise/revue-de-presse
- /menuiserie
- /renovation
- /structures-en-kit
- /toiture
- /toiture/charpente
- /toiture/couverture

**Comment obtenir les images en taille originale :**
- Les images sont servies sous la forme /system/images/<TÂCHE>/<nom-de-fichier>. <TÂCHE> est un JSON encodé en base64 url-safe, sans « = » final.
  - Exemple : [["f","2016/02/19/…/construction-charpente-1.jpg"],["p","thumb","400x"]].
- Pour l'original, décode la tâche, garde uniquement l'étape ["f", …], ré-encode (base64 url-safe, JSON compact, sans « = ») et télécharge. Testé : une vignette de 225 px redevient ainsi un fichier de plus de 2 000 px.
- Le site compte environ 343 images uniques ; la page galerie et les pages métier sont les plus riches.

**Organisation des fichiers :**
- Range tout dans assets/raw/ avec un manifest.json : URL source, page d'origine, texte alternatif d'origine, dimensions et crédit photo.
- Certaines photos sont signées « Photographe Julien RAMBAUD » dans leur nom de fichier ou leur légende : conserve ce crédit et affiche-le discrètement sur ces images.
- Sélectionne les meilleures photos, d'au moins 1 200 px. Note chaque photo, et écarte les floues, les sombres et les doublons.
- Génère avec sharp des versions AVIF et WebP en 640, 1 280, 1 920 et 2 560 px. Ajoute un placeholder flouté de type LQIP et un srcset ou sizes correct.
- Applique un étalonnage cohérent à toutes les photos : chaud, légèrement désaturé, noirs profonds. Garde une version duotone pour les sections sombres.

**Logo :**
- Le logo n'existe qu'en PNG de 150 × 76 px : /assets/logo-boulot-small-5-….png, la version complète « boulot constructions bois » ; il existe aussi une variante small-3.
- Redessine-le en SVG vectoriel fidèle : mêmes lettres, mêmes proportions, même couleur. Ne le modifie pas, ne le « modernise » pas. Garde le PNG comme référence pour comparer.
- Les logos des labels (Bois des Alpes, Qualibat) sont récupérables en grand avec la même méthode.

**Images interdites :** aucune photo de banque d'images, aucune image générée par IA présentée comme une réalisation de Boulot. S'il manque une image, utilise une composition typographique ou SVG.

# 2. Faits vérifiés : n'utilise que ceux-là

Sources : boulot-sarl.fr, octobre 2026. Revérifie-les en scrapant.

- **L'entreprise :**
  - Boulot (SAS « Établissements Boulot » selon la page Qui sommes-nous ; le site dit aussi « Boulot SARL » : forme juridique [À VALIDER]).
  - Entreprise familiale créée en 1962, plusieurs générations de charpentiers issus de la tradition compagnonnique.
- **Adresse et contact :**
  - 32 rue du Vernet, 05120 L'Argentière-la-Bessée (Hautes-Alpes), près de Briançon, Serre Chevalier, Puy-Saint-Vincent, Montgenèvre, du Queyras et du Pays des Écrins.
  - +33 (0)4 92 23 13 59 · secretariat@boulot-sarl.fr
- **Équipes :** charpentiers, couvreurs et menuisiers, avec un bureau d'études interne. Clients particuliers et professionnels.
- **Charpente :**
  - L'entreprise fait l'étude, la taille puis le levage.
  - Bois massif, contre-collé ou lamellé-collé.
  - Essences : épicéa, sapin, pin, douglas, mélèze.
- **Couverture :** tous travaux de couverture : tuile, ardoise, bardeaux.
- **Construction bois :**
  - Chalets et maisons en ossature bois.
  - Poteau-poutre, qui offre une grande liberté architecturale.
  - Sur mesure.
- **Menuiserie :** escaliers, balcons, terrasses (vérifie la page /menuiserie).
- **Rénovation et rénovation énergétique :**
  - Isolation thermique des murs et de la toiture.
  - Qualibat RGE, mention « Efficacité énergétique » : TVA réduite et aides possibles. Aucun montant.
- **Structures en kit :**
  - D'après les plans du client, Boulot fournit les murs en ossature bois (déjà montés si souhaité), le solivage et la charpente.
  - Le tout est taillé, prêt à être levé et livré avec un plan de montage détaillé.
  - Maisons, chalets, garages, abris et autres structures en bois.
  - Fabrication dans les ateliers des Hautes-Alpes, livraison partout en France.
- **Centre de taille Hundegger :**
  - Centre d'usinage automatique Robot-Drive Hundegger depuis début 2023 : autonomie et maîtrise de toute la chaîne, de l'étude au levage, en passant par la taille et l'assemblage.
  - Objectifs : mieux valoriser les bois, construction durable en bois certifié Bois des Alpes, bois local en circuit court.
  - Projet soutenu par l'Union européenne (FEDER) avec une subvention de 117 011 €.
- **Labels :** Bois des Alpes et Qualibat RGE.
- **Zone :** Hautes-Alpes et région Provence-Alpes-Côte d'Azur. Vérifie les départements cités sur le site.
- **Presse :** une page Revue de presse existe. N'utilise que les titres d'articles réellement présents.

**Interdits absolus :**
- Aucun chiffre inventé : pas de nombre de chalets construits, de clients, de note sur 5, d'années d'expérience cumulées ni de surface.
- Aucun prix et aucun délai chiffré.
- Aucun faux témoignage et aucun faux prix ou récompense.
- Aucun « n°1 » ni « meilleur ».

Si une section a besoin d'une donnée absente, mets un emplacement visible et stylé [À VALIDER AVEC BOULOT] et liste-le dans le README.

# 3. Direction artistique

**Concept : « Du tronc au faîtage ».** La page raconte le chemin du bois : la forêt des Alpes, l'étude, la taille, l'assemblage, le levage, puis le toit. Le fil rouge visuel est le dessin technique de charpentier : épures, cotes, traits de construction. Il se superpose aux photos réelles, comme un plan qui devient bâtiment.

**Palette (tokens CSS, à affiner) :**

| Rôle | Valeur |
|---|---|
| bois brûlé (fond sombre) | #14110F |
| sapin profond | #1E2A24 |
| mélèze miel (accent) | #C8873A |
| ardoise | #3A4048 |
| pierre calcaire | #E8E2D6 |
| neige | #F7F4EE |

Accent rare : une seule couleur chaude pour les actions et les tracés animés.

**Typographies (Google Fonts, auto-hébergées, sous-ensemble latin) :**
- **Titres : Fraunces** (variable : opsz, wght, SOFT). Grands titres éditoriaux, avec une variation d'axe animée au scroll sur 1 ou 2 titres clés.
- **Texte : Instrument Sans** (variable).
- **Annotations techniques : JetBrains Mono.** Cotes, numéros de section « 01 / 14 », légendes, données. Graisse légère, capitales espacées.

Justifie ce choix dans design.md. Si tu trouves mieux, propose une alternative argumentée, mais garde un trio serif éditoriale, sans-serif sobre et mono technique.

**Matières :**
- Grain très léger sur toute la page (filtre SVG feTurbulence ou texture, opacité 3 à 5 %).
- Motif de cernes de croissance et de veinage dessiné en SVG.
- Grille de plan en filigrane dans les sections techniques.

**Mise en page :**
- Grille de 12 colonnes, marges généreuses.
- Contrastes d'échelle forts : titres énormes face à des micro-légendes en mono.
- Asymétrie maîtrisée, beaucoup d'air.
- Alternance de sections claires (pierre, neige) et sombres (bois brûlé, sapin).

# 4. Navigation (liens NON cliquables)

- **En-tête fixe :**
  - Transparent sur le hero, puis fond flouté (backdrop-filter) avec bordure fine au scroll.
  - Se cache au scroll vers le bas, réapparaît au scroll vers le haut.
- **Contenu :**
  - Logo SVG à gauche.
  - Liens : Charpente · Couverture · Ossature bois · Poteau-poutre · Menuiserie · Rénovation · Kits · L'entreprise.
  - À droite : le téléphone en mono et un bouton « Demander une étude ».
- **Liens inertes :**
  - Ce sont des éléments span sans href, avec aria-disabled="true", sans aucun effet au clic et curseur par défaut.
  - Ils gardent de belles animations au survol : soulignement qui se dessine de gauche à droite, léger décalage des lettres.
  - Tous les boutons de la page sont aussi inertes (button type="button" sans action), mais entièrement animés.
- **Mobile :**
  - Bouton hamburger qui se transforme en croix (morphing SVG).
  - Il ouvre un menu plein écran avec révélation en rideau, liens en grand en Fraunces qui apparaissent en cascade, et les coordonnées en bas.
  - Les liens restent inertes. Le menu se ferme au bouton et à la touche Échap.

# 5. Sections (dans cet ordre, toutes adaptées au métier)

Numérote chaque section en mono (« 01 / 14 ») et donne-lui un kicker, un titre et un texte.

1. **Préchargement (moins de 1,8 s, ignoré si déjà vu dans la session) :**
   - Des cernes de croissance se dessinent depuis le centre pendant qu'un compteur défile de 1962 à 2026.
   - Le logo apparaît, puis le rideau s'ouvre sur le hero.
2. **Hero plein écran (100svh) :**
   - Parallaxe en couches : grande photo réelle (chalet ou poteau-poutre), silhouettes SVG des sommets des Écrins devant et derrière, brume légère.
   - Le titre H1 apparaît ligne par ligne (SplitText, masques), suivi du sous-titre et de 2 boutons magnétiques.
   - En bas : « Faire défiler » animé, et une ligne en mono « L'Argentière-la-Bessée · Hautes-Alpes · depuis 1962 ».
   - Au premier scroll, une épure de charpente en traits fins se superpose à la photo puis disparaît.
3. **Manifeste :**
   - Une grande phrase dont les mots s'éclairent un à un au fil du scroll, du gris au noir.
   - Exemple de ton : « Ici, le bois ne voyage pas : il pousse dans nos montagnes, se taille dans notre atelier et se lève sur vos murs. »
4. **Repères :**
   - Uniquement des chiffres vrais, animés en compteur : 1962, 3 générations, 5 essences de bois, 1 centre de taille Hundegger, livraison des kits partout en France.
   - Un trait de cote SVG relie chaque chiffre à sa légende.
5. **Les métiers (défilement horizontal épinglé sur ordinateur) :**
   - Une carte par métier : Charpente, Couverture, Ossature bois, Poteau-poutre, Menuiserie, Rénovation énergétique, Structures en kit.
   - Chaque carte comprend une photo révélée par un masque, une icône SVG au trait fin qui se dessine, un texte court et 2 ou 3 caractéristiques techniques en mono.
   - Barre de progression horizontale.
   - Sur mobile : liste verticale ou carrousel tactile, sans épinglage.
6. **« Du tronc au faîtage », section signature épinglée :**
   - Une grande épure SVG d'une ferme de charpente se construit en 5 étapes au scroll, chaque étape avec son texte : Étude au bureau d'études → Choix de l'essence → Taille numérique → Assemblage → Levage et couverture.
   - Les traits se dessinent (stroke-dashoffset), les cotes apparaissent, les pièces s'assemblent, puis une photo réelle de charpente levée se fond derrière le dessin à la fin.
7. **Le centre de taille Hundegger :**
   - Section sombre, grille de plan en filigrane, typographie mono.
   - Un tracé d'outil SVG découpe un assemblage tenon-mortaise en direct au scroll.
   - Les vrais faits : début 2023, Bois des Alpes, circuit court, soutien FEDER de 117 011 €.
8. **Les essences :**
   - Sélecteur interactif des 5 essences (épicéa, sapin, pin, douglas, mélèze).
   - Chaque essence a un échantillon de veinage généré en SVG ou CSS et une courte description générale.
   - Mention « à valider » sur les usages recommandés.
   - Les puces de sélection sont interactives : seule la navigation est inerte.
9. **Couverture :**
   - Bascule tuile / ardoise / bardeaux, avec un motif SVG de toiture qui se recompose en morphing.
   - Une photo réelle de couverture accompagne la bascule.
10. **Structures en kit :**
    - Vue éclatée SVG : murs en ossature, solivage et charpente arrivent et s'emboîtent au scroll.
    - Les 5 étapes viennent de la page /structures-en-kit (plans → murs, montés si souhaité → solivage → charpente → plan de montage).
    - Message clé : « Taillé dans les Hautes-Alpes, livré partout en France ».
11. **Rénovation énergétique :**
    - Curseur avant/après si de vraies paires de photos existent ; sinon, coupe de mur SVG dont l'isolant se remplit au scroll.
    - Badges RGE et Bois des Alpes.
    - Aucun montant d'aide.
12. **Réalisations :**
    - Galerie en mosaïque (bento) avec filtres animés (Chalets, Charpentes, Poteau-poutre, Couverture, Menuiserie).
    - Zoom au survol, visionneuse plein écran au clavier et au tactile, crédits photo.
13. **Zone d'intervention :**
    - Carte stylisée en SVG (pas une carte exacte) : L'Argentière-la-Bessée au centre, rayons animés vers les vallées et les départements cités.
    - Une ligne pointillée « kits livrés partout en France » s'échappe vers une petite carte de France.
14. **Presse et labels :** vrais titres de la revue de presse, logos des labels en grand, en monochrome qui se colore au survol.
15. **Appel final :**
    - Très grand titre (par exemple « Parlons de votre projet bois. ») et bouton magnétique géant.
    - Coordonnées complètes en mono, horaires [À VALIDER].
16. **Pied de page :**
    - Logo en très grand, coupé par le bas de l'écran.
    - Plan du site en liens inertes, mentions, crédits photo et mention « maquette ».

# 6. Animation et interactions

**Outils :**
- GSAP 3 avec ScrollTrigger, SplitText et éventuellement Flip (GSAP est entièrement gratuit, plugins compris).
- Lenis pour le défilement doux, synchronisé avec ScrollTrigger.
- Rien d'autre de lourd.

**Règles :**
- N'anime que transform, opacity, clip-path et stroke-dashoffset.
- 60 images par seconde visées.
- Courbes expo.out et power4.out pour les entrées. Durées de 0,6 à 1,2 s, décalages de 0,04 à 0,08 s entre lettres ou lignes.
- Chaque animation a une raison narrative.
- Aucun défilement bloqué : l'utilisateur garde toujours le contrôle.
- Au maximum 3 sections épinglées sur ordinateur.

**Détails à soigner :**
- Boutons magnétiques avec remplissage en balayage et icône flèche qui sort et rentre.
- Soulignements qui se dessinent, et images révélées par des masques (clip-path) avec un léger zoom arrière.
- Parallaxe sur les photos (5 à 15 %), titres en lettres masquées.
- Bandeau défilant des métiers en Fraunces géant, avec une vitesse qui réagit au scroll.
- Indicateur de progression du scroll en forme de mètre pliant de charpentier : graduations en mono, segments qui se déplient.
- Curseur personnalisé discret sur ordinateur uniquement : un anneau qui grossit et affiche « Voir » sur les photos. Désactivé au tactile.
- Numéros de section qui défilent.

**Responsive et accessibilité :**
- ScrollTrigger.matchMedia : versions simplifiées sous 1 024 px et sous 768 px (pas d'épinglage horizontal, parallaxe réduite).
- prefers-reduced-motion : tout reste lisible, sans mouvement (fondus courts ou rien), Lenis désactivé, préchargement ignoré.

# 7. Éléments SVG à dessiner toi-même (pas de banque d'icônes)

Style au trait de 1,25 à 1,5 px, extrémités arrondies, cohérent partout.
- Épure de ferme de charpente avec cotes et repères.
- Cernes de croissance.
- Courbes de niveau et silhouettes des sommets des Écrins.
- Assemblage tenon-mortaise et tracé d'outil.
- 7 icônes métiers.
- Motifs de toiture : tuile, ardoise, bardeau.
- Coupe de mur isolé.
- Vue éclatée d'un kit.
- Carte stylisée de la zone.
- Mètre pliant.
- Flèches et pictos de boutons.
- Grain.

Optimise tous les SVG avec SVGO et réutilise-les via des symboles quand c'est possible.

# 8. Rédaction

**Ton :**
- Artisan fier, précis, sobre, chaleureux. Phrases courtes, verbes concrets (tailler, lever, assembler, couvrir).
- Vouvoiement. Zéro jargon marketing creux, zéro superlatif invérifiable.

**Structure de chaque section :** un kicker en mono, un titre en Fraunces de 2 à 8 mots, un texte de 2 à 4 lignes et, si utile, des caractéristiques techniques en mono.

**Pistes de H1 :** propose-en 3 dans design.md, choisis-en 1. Par exemple :
- « Le bois des Alpes, taillé juste depuis 1962. »
- « De l'arbre au faîtage, tout se fait ici. »
- « Trois générations de charpentiers. Une seule exigence : la justesse. »

**Typographie française impeccable :**
- Guillemets « » et apostrophe typographique ’.
- Espaces insécables avant : ; ! ? et à l'intérieur des guillemets.
- Espace fine dans les nombres (117 011 €).
- Pas de veuves sur les titres (text-wrap: balance).

# 9. Responsive irréprochable

**Largeurs à tester :** 360, 390, 430, 768, 1 024, 1 280, 1 440, 1 920 et 2 560 px, plus un téléphone en paysage.

**Exigences :**
- Aucun débordement horizontal.
- Cibles tactiles d'au moins 44 px.
- 100svh ou 100dvh pour le hero, prise en compte des zones sûres (safe-area-inset).
- Tailles de texte fluides avec clamp(). Images adaptées par srcset et art direction (recadrages différents sur mobile).

**Adaptation mobile :**
- Les sections épinglées deviennent des sections empilées ou des carrousels tactiles.
- L'épure de charpente devient une séquence verticale.

# 10. Performance, accessibilité, bases SEO

**Cibles Lighthouse sur mobile :** performance d'au moins 90, accessibilité d'au moins 95, bonnes pratiques à 100.

**Chargement :**
- LCP sous 2,5 s, CLS à 0.
- Polices préchargées en WOFF2 avec font-display: swap.
- Images en lazy loading, sauf le hero (fetchpriority="high").
- JS découpé, animations initialisées après le premier affichage.

**Accessibilité :**
- HTML sémantique, un seul H1, landmarks.
- Textes alternatifs descriptifs en français.
- Focus visible et soigné.
- Contraste AA et navigation complète au clavier.
- Visionneuse et menu mobile accessibles : focus piégé, Échap pour fermer.

**Méta :** title et description propres, Open Graph avec une belle image de partage, robots noindex (maquette).

# 11. Stack et livrables

- **Stack :** site statique, avec Astro ou Vite (TypeScript, sans framework UI), dans un dossier boulot-demo/ à la racine du dépôt. Pas de template ni de kit UI tout fait : tout est dessiné sur mesure.
- **Commandes :**
  - npm run dev
  - npm run build (sortie statique dans dist/)
- **README :** comment lancer le site, la liste des sources et crédits photo, et la liste de tous les [À VALIDER AVEC BOULOT].
- **Captures et vidéos :**
  - Captures Playwright pleine page aux largeurs de la section 9, dans docs/screens/.
  - Une courte vidéo de défilement sur ordinateur et une sur mobile (enregistrement vidéo de Playwright), pour juger les animations.
- **Aperçu :** si l'outil Artifact est disponible, publie aussi un aperçu partageable.
- **Git :** commit et push sur la branche de travail.

# 12. Contrôle qualité : au moins 2 passes de critique

Après la première version :
1. Regarde tes captures et vidéos comme un jury Awwwards : liste 15 améliorations précises (rythme, alignements, hiérarchie, finesse des animations, cohérence des tracés, rédaction, responsive), puis applique-les.
2. Recommence une seconde passe.
3. Vérifie aussi :
   - la console sans erreur ;
   - le mode prefers-reduced-motion ;
   - la navigation au clavier ;
   - l'absence de débordement à 360 px ;
   - que chaque fait affiché figure dans la section 2 ;
   - que la navigation et les boutons sont bien inertes.

Le résultat doit donner l'impression d'un site d'agence à 40 000 €. Prends le temps qu'il faut et ne livre que ce dont tu es fier.
