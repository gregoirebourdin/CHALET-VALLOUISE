Tu es directeur artistique et designer UX/UI senior : 20 ans de sites primés (Awwwards Site of the Day, FWA, CSS Design Awards), spécialiste du motion design web, de l'architecture et de l'industrie haut de gamme. Tu es aussi un développeur front-end exigeant. Ta mission : concevoir et coder la plus belle page d'accueil possible pour Alpes Alu, un atelier familial de menuiserie aluminium, acier et inox installé à L'Argentière-la-Bessée (Hautes-Alpes) depuis 1988. Je veux un effet « wow » dès la première seconde, un niveau de détail obsessionnel et une expérience à part, sans rien sacrifier à la lisibilité, aux performances ni au responsive.

Contexte : c'est une maquette de démonstration que je présenterai à Alpes Alu pour leur vendre une refonte. Elle n'est pas publique : ajoute meta robots « noindex, nofollow » et une mention discrète en pied de page « Maquette de démonstration non officielle, proposée à Alpes Alu ».

L'enjeu commercial à garder en tête : à Briançon, des magasins de réseau (Caséo, Tryba, Isofrance) passent devant Alpes Alu sur Google. Alpes Alu, lui, conçoit, fabrique et pose depuis son propre atelier. La page doit le faire sentir en trois secondes : **un vrai atelier, une vraie famille, des menuiseries faites ici.**

**Les 5 moments qui doivent rester en mémoire.** Tout le reste est au service de ces 5 moments. Réussis-les avant de peaufiner le reste :
1. **La fenêtre qui s'ouvre sur les Écrins (hero).** Une vraie fenêtre aluminium en 3D temps réel (WebGL) : profilés en alu anodisé brossé, vitrage qui reflète et réfracte la montagne. Elle suit légèrement la souris, puis coulisse et s'efface au scroll pour dévoiler la vraie photo en plein écran.
2. **La fenêtre qui se monte toute seule.** Une vue éclatée où dormant, ouvrant, joints, vitrage, poignée et crémone glissent à leur place au scroll, avec les cotes qui se tracent.
3. **Le volet roulant comme transition.** Entre les grandes sections, un volet roulant descend lame par lame sur l'écran, puis remonte sur la section suivante. C'est la signature de la page : on ne l'a jamais vue ailleurs.
4. **Le mur de l'atelier.** Les vraies photos de l'équipe et de l'atelier, présentées comme des vitrages encadrés, avec un reflet qui glisse dessus au passage de la souris.
5. **La cornière jaune.** La bande en L du logo traverse l'écran à l'appel final et se transforme en bouton « Demander un devis ».

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

Site source : https://alpesalu.fr/ (WordPress, thème Promina, Elementor). Le serveur coupe parfois les connexions : prévois des relances.

**Pages à parcourir :**
- L'accueil, /societe/, /fenetres/, /volets-roulants/, /vitrerie/, /catalogue/, /realisations/, /contact/
- Les 17 fiches produits : /service/porte-fenetre/, /service/fenetre/, /service/volets/, /service/baies-vitrees/, /service/chassis-compose/, /service/chassis-fixe/, /service/clotures/, /service/vitrerie/, /service/escaliers/, /service/gardes-corps/, /service/moustiquaires/, /service/porte-dentree/, /service/portes-de-garage/, /service/portails/, /service/stores-dexterieur/, /service/stores-dinterieur/, /service/verandas/
- Les 4 articles : /2022/02/22/alpes-alu-votre-projet-suivi-personalise/, /2022/02/22/alpes-alu-qualification-qualibat-rge/, /2022/03/28/reparation-vitrerie-chez-alpes-alu/, /2022/07/05/alpes-alu-sponsors-officiel-de-gerard-bouchie/
- Ignore les pages de démonstration du thème (/blog-standard/, /projects-standard/, /project/guggenheim-museum/, /project/chantier-1/) et les 72 fiches PDF /wpfd_file/.

**Comment obtenir les images en taille originale :**
- La médiathèque WordPress est ouverte : https://alpesalu.fr/wp-json/wp/v2/media?per_page=100&page=1 (puis page=2 et page=3, environ 216 fichiers). Chaque entrée donne source_url (l'original), media_details.width et height, et alt_text.
- Télécharge les originaux, pas les miniatures.

**Vraies photos à privilégier** (toutes sous https://alpesalu.fr/wp-content/uploads/) :
- L'équipe et la famille :
  - 2022/02/alpes-alu-qualibat-rge-copie.jpg (l'équipe en tenue de travail devant l'atelier, logos Alpes Alu et Qualibat RGE)
  - 2021/10/equipe-alpes-alu-france.jpeg (l'équipe devant les camions)
  - 2021/10/pierre-melquiond-dirigeant-alpes-alu.jpeg et 2021/10/victorien-melquiond-dirigeant-alpes-alu.jpg (portraits)
- L'atelier et les locaux :
  - 2022/02/conception-fabrication-installation-alpes-alu.jpg (deux techniciens à l'atelier)
  - 2021/10/Alpes-alu-conception-fabrication-fenetre-sur-mesure-aluminium.jpeg et 2021/10/Alpes-alu-conception-fabrication-fenetre-sur-mesure-struture-aluminium.jpeg (fabrication de cadres de fenêtres)
  - 2021/10/alpes-alu-siege-social-devanture.jpeg, 2021/10/alpes-alu-flotte-vehicule.jpeg, 2021/10/alpes-alu-enseigne.jpeg
- Les chantiers :
  - 2021/10/alpes-alu-chantier-pose-vitre-toiture.jpeg (vitre posée à la grue), 2021/10/alpes-alu-chantier-pose-vitre.jpeg, 2021/10/alpes-alu-chantier-pose-vitres-chantier.jpeg
- Les réalisations : tous les fichiers alpes-alu-conception-fabrication-*, alpes-alu-conception-installation-*, alpes-alu-escalier-*, alpes-alu-rampe-*, alpes-alu-porte-de-garage-premium-*, alpes-alu-baie-vitree-chassis-*, alpes-alu-fenetre-coulissante-*, alpes-alu-fenetre-renovation-*, alpes-alu-volet-roulant-exterieur, alpes-alu-rideau-roulant-*, alpes-alu-structure-*-local-velo, alpes-alu-fabrication-garde-corps-balcon-exterieur, alpes-alu-fabrication-sur-mesure-vitrage-separatif-cuisine-interieur-maison, 2022/02/Volet-roulant-solaire-alpes-alu-scaled.jpg.
- Sponsoring (facultatif) : les photos du rallye de Manosque 2022 (2022/05/*Manosque*), liées à l'article sur Gérard Bouchie.

**Images à écarter (banque d'images probable, à vérifier à l'œil) :**
- alpes-alu-materiaux-acier-alu-1 à 15 (textures de métal) ;
- les photos de soudure et de découpe pleines d'étincelles (alpes-alu-atelier-conception-*, alpes-alu-atelier-travail-*, alpes-alu-atelier-soudure-*) : elles ont l'air de photos de banque d'images, ne les présente jamais comme l'atelier d'Alpes Alu ;
- alpes-alu-service-serrurerie-sav, alpes-alu-sav-secours-serrurerie-a-domicile, alpes-alu-profile-metal-alu-fenetre-premium, alpes-alu-porte-entree-principale-maison-particuliere, alpes-alu-conception-sur-plan-projet-construction-neuf, alpes-alu-atelier-outil, alpes-alu-illustration-3D-conception-realisation, fenetre-alpes-alu-france, et tous les fichiers promina-* (démo du thème).
- Dans le doute, considère qu'une photo trop parfaite, sans lieu reconnaissable ni marque Alpes Alu, vient d'une banque d'images.

**Organisation des fichiers :**
- Range tout dans assets/raw/ avec un manifest.json : URL source, page d'origine, texte alternatif d'origine, dimensions, et ton verdict « vraie photo » ou « banque d'images probable ».
- Sélectionne les meilleures vraies photos, d'au moins 1 200 px. Note chaque photo, et écarte les floues, les sombres et les doublons. Plusieurs photos de chantier sont prises au téléphone : redresse-les, recadre-les et corrige l'exposition sans les dénaturer.
- Génère avec sharp des versions AVIF et WebP en 640, 1 280, 1 920 et 2 560 px. Ajoute un placeholder flouté de type LQIP et un srcset ou sizes correct.
- Applique un étalonnage cohérent : lumière froide et nette de montagne, noirs profonds, reflets métalliques. Garde une version duotone graphite et jaune pour les sections sombres.

**Logo :**
- Trois PNG de 291 × 98 px : 2021/10/logo-alpes-alu-copie.png (noir sur bande jaune), 2021/10/logo-alpes-alu-jaune.png et 2021/10/logo-alpes-alu-blanc.png (version claire).
- Description : « Alpes Alu » en grotesque très grasse et italique, posé sur une bande jaune inclinée en forme de L (comme une cornière en aluminium vue en coupe), qui porte « MENUISERIE ALUMINIUM » en capitales grasses italiques.
- Redessine-le en SVG vectoriel fidèle : mêmes lettres, même inclinaison, mêmes proportions, même jaune (relève la couleur exacte dans le PNG, autour de #F8D838). Ne le modifie pas, ne le « modernise » pas. Garde les PNG comme référence pour comparer.
- Cette bande en L est ton motif graphique : réutilise sa forme de cornière pour les cadres, les séparateurs, les puces et l'indicateur de progression.

**Logos de partenaires présents sur le site** (2022/02/ et 2021/11/) : Thermolaqualp, Zinq, Mariton, Storipro, Prolians, Atlantem, Abram, Sofradef, Point Fort Fichet, Picard, Vachette, Bricard, Tordjman Métal. Leur usage actuel est [À VALIDER AVEC ALPES ALU].

**Images interdites :** aucune photo de banque d'images présentée comme une réalisation d'Alpes Alu, aucune image générée par IA. S'il manque une image, utilise une composition typographique ou SVG.

# 2. Faits vérifiés : n'utilise que ceux-là

Sources : alpesalu.fr, registre des entreprises et fiche Google, octobre 2026. Revérifie-les en scrapant.

- **L'entreprise :**
  - ALPES ALU SARL, activité « travaux de menuiserie métallique et serrurerie ».
  - « Votre spécialiste portes & fenêtres depuis 1988. » Société familiale et artisanale.
  - Pierre et Victorien Melquiond (dirigeants, avec portraits sur le site). Les articles du blog sont signés Juliette Melquiond.
- **Adresse et contact :**
  - 37 rue de la Série E, Parc d'activité Les Sablonnières, 05120 L'Argentière-la-Bessée (Hautes-Alpes).
  - 04 92 23 07 39. Du lundi au vendredi, 8 h 30 – 12 h et 13 h 30 – 17 h.
  - E-mail de contact principal : [À VALIDER AVEC ALPES ALU].
  - Page Facebook : Alpes Alu - Sarl.
- **Zone d'intervention :** le grand Briançonnais, le Pays des Écrins et le Guillestrois. Particuliers et professionnels, neuf et rénovation.
- **Fabrication :**
  - « Notre équipe conçoit vos menuiseries sur mesure dans son atelier situé dans la zone artisanale Les Sablonnières. »
  - Menuiseries, garde-corps, escaliers, persiennes, vérandas, portails et autres demandes en aluminium, acier ou inox.
  - Le site parle de « fabrication artisanale dans nos ateliers en France », de « 100 % français » et de « Made in France ».
  - Process maîtrisé « de A à Z » : écoute, conseil, conception, fabrication, installation, réglages et suivi.
- **Produits et services** (fiches du site) :
  - Fenêtres, portes-fenêtres, baies vitrées, châssis fixes et composés.
  - Volets roulants électriques ou solaires, volets battants, rideaux métalliques, stores d'extérieur et d'intérieur, moustiquaires.
  - Portes d'entrée ; portes de garage sectionnelles, basculantes ou enroulables ; portails coulissants ou battants ; clôtures.
  - Vérandas, verrières, escaliers, garde-corps, structures et ossatures métalliques.
  - Vitrerie : du simple au double vitrage, vitrages thermiques et de sécurité, intervention en cas de fissure ou de casse.
  - Serrurerie et SAV : ouverture de portes, changement de serrures, portes et blindage. Le site dit « Certifié et agréé “Serrurier” » : la nature exacte de l'agrément est [À VALIDER].
- **Engagements affichés :** devis gratuits ; réponse sous 24 heures aux demandes écrites.
- **Qualification :** Qualibat RGE (article de 2022 et photo de l'équipe). La validité en 2026 est [À VALIDER sur qualibat.com].
- **Aides :** la qualification RGE est nécessaire pour que les clients bénéficient des aides publiques à la rénovation énergétique. Ne cite aucun dispositif ni aucun montant.
- **Sponsoring :** sponsor officiel du pilote Gérard Bouchie (rallye, 2022). Actualité de ce partenariat [À VALIDER].
- **Avis :** la fiche Google compte 7 avis ; deux avis PagesJaunes de 2019 sont cités sur le site. N'affiche aucun avis sans accord : emplacement [À VALIDER AVEC ALPES ALU].

**Interdits absolus :**
- Aucun chiffre inventé : pas de nombre de chantiers, de clients, de fenêtres posées, de note sur 5, d'années d'expérience cumulées ni de surface.
- Aucune performance technique chiffrée (Uw, Sw, épaisseur de profilé, triple vitrage…) qui ne figure pas sur le site.
- Aucun prix et aucun délai chiffré, sauf « réponse sous 24 heures » qui figure sur le site.
- Aucun label non vérifié : n'affiche ni « Maître artisan » ni « ISO 9001 », même si des logos traînent dans la médiathèque.
- Aucun faux témoignage, aucune récompense inventée, aucun « n°1 » ni « meilleur ».

Si une section a besoin d'une donnée absente, mets un emplacement visible et stylé [À VALIDER AVEC ALPES ALU] et liste-le dans le README.

# 3. Direction artistique

**Concept : « Cadrer la montagne ».** Une fenêtre, c'est un cadre posé sur un paysage. La page raconte comment un profilé brut, coupé et assemblé à L'Argentière, devient le cadre à travers lequel une famille regarde les Écrins. Le fil rouge visuel est la coupe technique de menuiserie : profilés en coupe, cotes, vitrages, joints, et la cornière jaune du logo qui revient partout comme un repère de chantier.

**Palette (tokens CSS, à affiner) :**

| Rôle | Valeur |
|---|---|
| graphite anodisé (fond sombre) | #121417 |
| alu brossé (surfaces, filets) | #C9CDD1 |
| gris profilé (texte secondaire) | #7E858C |
| neige (fond clair) | #F4F5F2 |
| reflet glacier (verre, très léger) | #B9CED6 |
| jaune Alpes Alu (accent unique) | celui du logo, autour de #F8D838 |

Le jaune est rare : actions, tracés animés, cornières. Jamais en aplat de grande surface, sauf pour l'appel final.

**Typographies (Google Fonts, auto-hébergées, sous-ensemble latin) :**
- **Titres : Archivo** (variable, axes de graisse et de largeur). Grands titres très affirmés, en écho au lettrage du logo. Anime l'axe de largeur sur 1 ou 2 titres clés, comme un profilé qu'on étire à l'extrusion.
- **Texte : Instrument Sans** (variable).
- **Annotations techniques : IBM Plex Mono.** Cotes, numéros de section « 01 / 16 », légendes, données. Graisse légère, capitales espacées.

Justifie ce choix dans design.md. Si tu trouves mieux, propose une alternative argumentée, mais garde un trio grotesque affirmée, sans-serif sobre et mono technique.

**Matières :**
- Texture d'aluminium brossé très discrète en CSS (dégradés répétés) sur certaines surfaces, et reflets de verre animés lentement.
- Grain très léger sur toute la page (filtre SVG feTurbulence, opacité 3 à 5 %).
- Grille de plan en filigrane dans les sections techniques.

**Mise en page :**
- Grille de 12 colonnes, marges généreuses.
- Contrastes d'échelle forts : titres énormes face à des micro-légendes en mono.
- Les photos sont souvent présentées dans des cadres fins (filets alu de 1 px avec cornières jaunes aux angles), comme des fenêtres.
- Alternance de sections claires (neige) et sombres (graphite).

# 4. Navigation (liens NON cliquables)

- **En-tête fixe :**
  - Transparent sur le hero, puis fond flouté (backdrop-filter) avec un filet alu au scroll.
  - Se cache au scroll vers le bas, réapparaît au scroll vers le haut.
  - Au-dessus, un fin bandeau sombre repris du site actuel : « Un problème de fermeture, de volet roulant ou de vitrerie ? Service dépannage & SAV » avec le numéro.
- **Contenu :**
  - Logo SVG à gauche.
  - Liens : Fenêtres · Volets & stores · Portes & portails · Vérandas & verrières · Métallerie · Dépannage · L'atelier · Réalisations.
  - À droite : le téléphone en mono et un bouton « Demander un devis ».
- **Liens inertes :**
  - Ce sont des éléments span sans href, avec aria-disabled="true", sans aucun effet au clic et curseur par défaut.
  - Ils gardent de belles animations au survol : filet qui se dessine de gauche à droite et petite cornière jaune qui apparaît en coin.
  - Tous les boutons de la page sont aussi inertes (button type="button" sans action), mais entièrement animés.
- **Mobile :**
  - Bouton hamburger qui se transforme en croix (morphing SVG).
  - Il ouvre un menu plein écran qui coulisse comme une baie vitrée, avec les liens en grand en Archivo qui apparaissent en cascade, et les coordonnées en bas.
  - Les liens restent inertes. Le menu se ferme au bouton et à la touche Échap.

# 5. Sections (dans cet ordre, toutes adaptées au métier)

Numérote chaque section en mono (« 01 / 16 ») et donne-lui un kicker, un titre et un texte.

1. **Préchargement (moins de 1,5 s, ignoré si déjà vu dans la session) :**
   - La coupe d'un profilé aluminium se dessine en traits fins pendant qu'un compteur défile de 1988 à 2026.
   - Le logo apparaît, puis l'écran s'ouvre comme un vantail qui pivote sur le hero.
2. **Hero plein écran (100svh) :**
   - Une fenêtre aluminium en 3D temps réel occupe l'écran : profilés en alu anodisé brossé (matériau métallique, rugosité faible, reflets doux), vitrage avec transmission et légère réfraction. Derrière, une vraie photo (une baie Alpes Alu ouverte sur la montagne, ou la vitre posée à la grue) en parallaxe, avec les silhouettes SVG des sommets des Écrins.
   - La fenêtre suit légèrement la souris (quelques degrés). Au premier scroll, l'ouvrant coulisse, la fenêtre recule et s'efface pour dévoiler toute la photo ; des cotes en mono apparaissent sur le cadre puis s'effacent.
   - Repli obligatoire : si WebGL n'est pas disponible, sur les appareils modestes ou en prefers-reduced-motion, le même cadre est dessiné en SVG, avec la même ouverture en coulissant.
   - Le titre H1 apparaît ligne par ligne (SplitText, masques), suivi du sous-titre et de 2 boutons magnétiques (« Demander un devis », « Voir nos réalisations »).
   - En bas : « Faire défiler » animé, et une ligne en mono « L'Argentière-la-Bessée · Hautes-Alpes · depuis 1988 ».
3. **Manifeste :**
   - Une grande phrase dont les mots s'éclairent un à un au fil du scroll, du gris au noir.
   - Exemple de ton : « Ici, on ne revend pas des fenêtres sur catalogue : on les conçoit, on les fabrique à l'atelier, et on vient les poser chez vous. »
4. **Repères :**
   - Uniquement des faits vrais, animés : 1988, 1 atelier aux Sablonnières, 3 matériaux (aluminium, acier, inox), Qualibat RGE, 3 territoires (Briançonnais, Pays des Écrins, Guillestrois), réponse sous 24 heures.
   - Une cote SVG relie chaque repère à sa légende, avec une cornière jaune au départ.
5. **Les métiers (défilement horizontal épinglé sur ordinateur) :**
   - Une carte par famille : Fenêtres et portes-fenêtres, Baies vitrées et châssis, Volets roulants et stores, Portes d'entrée et portes de garage, Portails et clôtures, Vérandas et verrières, Escaliers, garde-corps et structures, Vitrerie, Serrurerie et dépannage.
   - Chaque carte comprend une vraie photo révélée par un masque en forme de cadre, une icône SVG au trait fin qui se dessine, un texte court et 2 ou 3 caractéristiques en mono tirées du site (par exemple « Électrique ou solaire », « Sectionnelle · basculante · enroulable », « Aluminium · acier · inox »).
   - Barre de progression horizontale en forme de cornière qui s'allonge.
   - Sur mobile : liste verticale ou carrousel tactile, sans épinglage.
6. **« De l'atelier à votre façade », section signature épinglée :**
   - Une vue éclatée SVG d'une fenêtre aluminium s'assemble en 5 étapes au scroll, chaque étape avec son texte : Écoute et prise de cotes chez vous → Conception sur plan → Découpe et assemblage des profilés à l'atelier → Vitrage, quincaillerie et réglages → Pose et suivi par la même équipe.
   - Les traits se dessinent (stroke-dashoffset), les cotes apparaissent, les pièces (dormant, ouvrant, joints, vitrage, poignée, crémone) glissent à leur place, puis une vraie photo de pose se fond derrière le dessin à la fin.
7. **L'atelier des Sablonnières et la famille :**
   - Section sombre, grille de plan en filigrane, typographie mono.
   - Vraies photos uniquement : l'équipe devant l'atelier, les deux techniciens au travail, la fabrication des cadres, la devanture, les camions.
   - Portraits de Pierre et Victorien Melquiond dans des cadres fins, avec une phrase sobre sur l'entreprise familiale. Toute citation personnelle est [À VALIDER].
   - Message : « Fabriqué à L'Argentière-la-Bessée. » C'est l'argument que les magasins de réseau ne peuvent pas reprendre.
8. **Anatomie d'une fenêtre :**
   - Grande coupe SVG interactive d'une fenêtre, avec des points de repère au survol ou au toucher : dormant, ouvrant, poignée, crémone (les termes figurent déjà sur un schéma du site), plus vitrage et joints.
   - Textes pédagogiques courts, sans aucune performance chiffrée.
   - Les points sont interactifs : seule la navigation est inerte.
9. **Volets roulants et stores :**
   - Bascule « électrique / solaire » : un volet SVG descend lame par lame, un petit panneau solaire capte un rayon de soleil animé sur la version solaire.
   - Une vraie photo de volet roulant posé accompagne la bascule.
10. **Dépannage et SAV :**
    - Bande sombre et urgente, en jaune et graphite : « Un problème avec votre fermeture, votre volet roulant ou votre vitrerie ? »
    - Un cylindre de serrure SVG tourne au scroll ; une vitre fissurée se recompose.
    - Le numéro en très grand, en mono, les horaires du site, et la zone d'intervention. Aucun délai d'intervention chiffré.
11. **Réalisations :**
    - Galerie en mosaïque (bento) avec filtres animés (Fenêtres et baies, Portes et garages, Portails et clôtures, Escaliers et garde-corps, Vérandas et verrières, Chantiers).
    - Zoom au survol, visionneuse plein écran au clavier et au tactile.
    - Lieux et légendes : [À VALIDER AVEC ALPES ALU], n'invente aucun nom de village.
12. **Qualibat RGE et rénovation énergétique :**
    - Badge RGE en grand, texte court : la qualification permet aux clients de bénéficier des aides à la rénovation énergétique.
    - Une coupe de fenêtre SVG montre le froid bloqué dehors et la chaleur gardée dedans, sans chiffres.
13. **Zone d'intervention :**
    - Carte stylisée en SVG (pas une carte exacte) : L'Argentière-la-Bessée au centre, rayons animés vers le Briançonnais, le Pays des Écrins et le Guillestrois, avec les courbes de niveau des vallées.
14. **Partenaires et fournisseurs :**
    - Logos en monochrome qui se colorent au survol, seulement ceux présents sur le site, avec la mention [À VALIDER] tant qu'ils ne sont pas confirmés.
    - En option, un petit encart « Sur les routes du rallye » avec les photos de Manosque 2022, si Alpes Alu le souhaite.
15. **Appel final :**
    - Grand aplat jaune Alpes Alu, très grand titre (par exemple « Parlons de votre projet. ») et bouton magnétique géant.
    - « Devis gratuit · réponse sous 24 heures », coordonnées complètes en mono, horaires.
16. **Pied de page :**
    - Logo en très grand, coupé par le bas de l'écran.
    - Plan du site en liens inertes, mentions, crédits et mention « maquette ».

# 6. Animation et interactions

**Outils :**
- GSAP 3 avec ScrollTrigger, SplitText et éventuellement Flip (GSAP est entièrement gratuit, plugins compris).
- Lenis pour le défilement doux, synchronisé avec ScrollTrigger.
- Three.js (ou OGL, plus léger) uniquement pour la fenêtre 3D du hero : chargé après le premier affichage, moins de 150 Ko compressés pour la scène, géométrie modélisée en code (extrusions de profilés), environnement généré à partir d'une vraie photo de montagne d'Alpes Alu, pas de fichier HDR lourd.
- Rien d'autre de lourd.

**Transition « volet roulant » :**
- Entre 3 ou 4 grandes sections (par exemple avant l'atelier, avant le dépannage et avant l'appel final), un volet SVG ou CSS à lames horizontales descend sur l'écran, lame par lame, au rythme du scroll, puis remonte sur la section suivante.
- Les lames ont un léger relief alu brossé et une fine lumière qui passe entre elles.
- Elle reste réversible au scroll vers le haut, ne bloque jamais le défilement et disparaît en prefers-reduced-motion.

**Règles :**
- N'anime que transform, opacity, clip-path et stroke-dashoffset.
- 60 images par seconde visées.
- Courbes expo.out et power4.out pour les entrées. Durées de 0,6 à 1,2 s, décalages de 0,04 à 0,08 s entre lettres ou lignes.
- Chaque animation a une raison narrative : ouvrir, cadrer, assembler, poser.
- Aucun défilement bloqué : l'utilisateur garde toujours le contrôle.
- Au maximum 3 sections épinglées sur ordinateur.

**Détails à soigner :**
- Boutons magnétiques avec remplissage jaune en balayage et icône flèche qui sort et rentre.
- Images révélées par des masques en forme de cadre de fenêtre (clip-path) avec un léger zoom arrière.
- Reflet de verre qui glisse lentement sur les photos encadrées.
- Parallaxe sur les photos (5 à 15 %), titres en lettres masquées.
- Bandeau défilant des métiers en Archivo géant, avec une vitesse qui réagit au scroll.
- Indicateur de progression du scroll en forme de mètre ruban de poseur : graduations en mono et curseur en cornière jaune.
- Curseur personnalisé discret sur ordinateur uniquement : un viseur de cadre qui affiche « Voir » sur les photos. Désactivé au tactile.
- Numéros de section qui défilent.

**Responsive et accessibilité :**
- ScrollTrigger.matchMedia : versions simplifiées sous 1 024 px et sous 768 px (pas d'épinglage horizontal, parallaxe réduite).
- prefers-reduced-motion : tout reste lisible, sans mouvement (fondus courts ou rien), Lenis désactivé, préchargement ignoré.

# 7. Éléments SVG à dessiner toi-même (pas de banque d'icônes)

Style au trait de 1,25 à 1,5 px, extrémités arrondies, cohérent partout.
- Coupe de profilé aluminium avec cotes et repères.
- Cadre de fenêtre et de baie coulissante (dormant, ouvrant, petits bois).
- Vue éclatée d'une fenêtre : dormant, ouvrant, joints, vitrage, poignée, crémone.
- Silhouettes et courbes de niveau des sommets des Écrins.
- Volet roulant à lames, panneau solaire, moteur.
- Cylindre de serrure et clé, vitre fissurée qui se recompose.
- 9 icônes métiers.
- Cornière jaune (motif du logo), mètre ruban.
- Carte stylisée de la zone.
- Flèches et pictos de boutons.
- Grain.

Optimise tous les SVG avec SVGO et réutilise-les via des symboles quand c'est possible.

# 8. Rédaction

**Ton :**
- Artisan fier, précis, sobre, chaleureux. Phrases courtes, verbes concrets (mesurer, découper, assembler, vitrer, poser, régler).
- Vouvoiement. Zéro jargon marketing creux, zéro superlatif invérifiable.
- Le site actuel contient des fautes (« Pour vous installez », « N'hésite-pas », « posés par no experts ») : ne reprends aucune phrase telle quelle sans la corriger.

**Structure de chaque section :** un kicker en mono, un titre en Archivo de 2 à 8 mots, un texte de 2 à 4 lignes et, si utile, des caractéristiques en mono.

**Pistes de H1 :** propose-en 3 dans design.md, choisis-en 1. Par exemple :
- « Vos fenêtres, fabriquées ici depuis 1988. »
- « La montagne mérite un beau cadre. »
- « Conçu, fabriqué et posé par la même famille. »

**Typographie française impeccable :**
- Guillemets « » et apostrophe typographique ’.
- Espaces insécables avant : ; ! ? et à l'intérieur des guillemets.
- Espace fine dans les nombres (04 92 23 07 39 en groupes de deux).
- Pas de veuves sur les titres (text-wrap: balance).

# 9. Responsive irréprochable

**Largeurs à tester :** 360, 390, 430, 768, 1 024, 1 280, 1 440, 1 920 et 2 560 px, plus un téléphone en paysage.

**Exigences :**
- Aucun débordement horizontal.
- Cibles tactiles d'au moins 44 px.
- 100svh ou 100dvh pour le hero, prise en compte des zones sûres (safe-area-inset).
- Tailles de texte fluides avec clamp(). Images adaptées par srcset et art direction (recadrages différents sur mobile).
- Aucun écran de chargement qui cache le contenu plus de 1,5 s : c'est l'un des défauts du site actuel.

**Adaptation mobile :**
- Les sections épinglées deviennent des sections empilées ou des carrousels tactiles.
- La vue éclatée de la fenêtre devient une séquence verticale, pièce par pièce.

# 10. Performance, accessibilité, bases SEO

**Cibles Lighthouse sur mobile :** performance d'au moins 90, accessibilité d'au moins 95, bonnes pratiques à 100.

**Chargement :**
- LCP sous 2,5 s, CLS à 0. Le site actuel charge 136 fichiers et plus de 2 Mo pour son accueil : fais beaucoup mieux.
- Polices préchargées en WOFF2 avec font-display: swap.
- Images en lazy loading, sauf le hero (fetchpriority="high").
- JS découpé, animations initialisées après le premier affichage.

**Accessibilité :**
- HTML sémantique, un seul H1, landmarks.
- Textes alternatifs descriptifs en français.
- Focus visible et soigné.
- Contraste AA (attention au texte sur le jaune : texte graphite uniquement) et navigation complète au clavier.
- Visionneuse et menu mobile accessibles : focus piégé, Échap pour fermer.

**Méta :**
- Title court avec la ville, par exemple « Alpes Alu · Menuiserie aluminium sur mesure à L'Argentière-la-Bessée », et une vraie description (le site actuel n'en a pas, et Google affiche à la place son texte RGPD).
- Open Graph avec une belle image de partage, données structurées LocalBusiness (adresse, téléphone, horaires), robots noindex (maquette).

# 11. Stack et livrables

- **Stack :** site statique, avec Astro ou Vite (TypeScript, sans framework UI), dans un dossier alpes-alu-demo/ à la racine du dépôt. Pas de template ni de kit UI tout fait : tout est dessiné sur mesure.
- **Commandes :**
  - npm run dev
  - npm run build (sortie statique dans dist/)
- **README :** comment lancer le site, la liste des sources et des photos utilisées, et la liste de tous les [À VALIDER AVEC ALPES ALU].
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
   - qu'aucune photo de banque d'images n'est présentée comme une réalisation ;
   - que la navigation et les boutons sont bien inertes.

4. Rejoue les 5 moments du début un par un, sur ordinateur et sur téléphone. Si l'un d'eux ne provoque pas un « waouh », reprends-le avant de livrer.

Le résultat doit donner l'impression d'un site d'agence à 40 000 €, et faire dire à la famille Melquiond : « C'est exactement nous. » Prends le temps qu'il faut et ne livre que ce dont tu es fier.
