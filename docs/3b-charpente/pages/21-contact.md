# Fiche de page 21 : Contact et devis (`/contact/`)

> **Sources :** `00-brief.md` et `realisations-source.md` uniquement. Fiche rédigée le 11 octobre 2026.
>
> **Conventions de lecture :**
> - dans les titres (H1, H2), les mots entre `**` passent en **vert accent** (#336233) ; dans les textes courants, `**` veut dire gras ;
> - les espaces insécables avant : ; ? ! et dans les guillemets sont déjà en place : copier-coller tel quel ;
> - tout ce qui est entre `[À VALIDER AVEC JEAN : …]` ou `[À COMPLÉTER : …]` doit être confirmé ou retiré avant la mise en ligne.

---

## 1. Carte d'identité

- **Adresse :** `/contact/`
- **Objectif de la page :**
  - transformer la visite en demande de devis qualifiée (type de projet, commune, bâtiment, plans, échéance) ;
  - donner les coordonnées exactes, identiques à la fiche Google, à PagesJaunes, à Facebook et à PRECI ;
  - expliquer ce qui se passe après l'envoi, pour rassurer ;
  - recevoir la redirection de `new.3bcharpente.fr/contact`.
- **Visiteurs visés :** particuliers prêts à lancer un projet ; architectes, entreprises et collectivités pour 3B Récup' ; visiteurs qui cherchent seulement le téléphone ou l'adresse.
- **Mots-clés :**
  - principal : « devis charpente hautes alpes » (non mesuré) ;
  - secondaires : « 3b charpente contact », « charpentier l'argentière-la-bessée », « devis isolation biosourcée hautes alpes ».
- **Intention de recherche :** transactionnelle (contacter, demander un devis) et navigationnelle (téléphone, adresse).
- **Pages liées :** toutes les pages pointent ici ; cette page renvoie vers 01, 11, 15, 18 à 20, 22 (`#confidentialite`).

---

## 2. SEO

- **Balise title (53 caractères) :** Devis charpente Hautes-Alpes : contact | 3B Charpente
- **Meta description (144 caractères) :** Charpente, isolation biosourcée ou réemploi : contactez 3B Charpente à L'Argentière-la-Bessée au 06 34 67 31 49. Rencontre, puis devis détaillé.
- **H1 :** Demandez votre **devis** de charpente dans les **Hautes-Alpes**
- **Données structurées :** `ContactPage`, rappel de l'entreprise par son `@id` avec un `ContactPoint`, `BreadcrumbList`, `FAQPage`.

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ContactPage",
      "@id": "https://3bcharpente.fr/contact/#page",
      "url": "https://3bcharpente.fr/contact/",
      "name": "Contact et devis : 3B Charpente",
      "inLanguage": "fr-FR",
      "about": { "@id": "https://3bcharpente.fr/#entreprise" }
    },
    {
      "@type": "RoofingContractor",
      "@id": "https://3bcharpente.fr/#entreprise",
      "name": "3B Charpente",
      "telephone": "+33634673149",
      "email": "tardy@3bcharpente.fr",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "5 rue Saint-Michel",
        "postalCode": "05120",
        "addressLocality": "L'Argentière-la-Bessée",
        "addressRegion": "Hautes-Alpes",
        "addressCountry": "FR"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "devis et renseignements",
        "telephone": "+33634673149",
        "email": "tardy@3bcharpente.fr",
        "availableLanguage": "fr",
        "areaServed": ["Hautes-Alpes", "Provence-Alpes-Côte d'Azur", "Auvergne-Rhône-Alpes"],
        "hoursAvailable": "[À VALIDER AVEC JEAN : horaires définitifs]"
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://3bcharpente.fr/" },
        { "@type": "ListItem", "position": 2, "name": "Contact", "item": "https://3bcharpente.fr/contact/" }
      ]
    }
  ]
}
```

- **Texte alternatif des images clés :**
  - photo du bandeau : « Charpente en cours de levage par 3B Charpente, charpentier à L'Argentière-la-Bessée » ;
  - carte : « Plan d'accès à 3B Charpente, 5 rue Saint-Michel, 05120 L'Argentière-la-Bessée ».

---

## 3. Sections dans l'ordre

### Section 1 : héros compact

- **Rôle :** confirmer qu'on est au bon endroit et donner le téléphone tout de suite.
- **Composant Framer :** héros réduit (titre en deux couleurs, texte, bouton contour), sans collage photo ; bandeau photo fin en dessous sur ordinateur.
- **Copywriting :**
  - **Kicker :** Contact et devis
  - **H1 :** Demandez votre **devis** de charpente dans les **Hautes-Alpes**
  - **Texte :** Nous sommes là pour répondre à toutes vos questions et discuter de vos projets de construction et de rénovation. Chaque projet commence par une **étude sur mesure** : décrivez-nous le vôtre.
  - **Bouton contour :** Appeler le 06 34 67 31 49 → `tel:+33634673149`
- *Note :* première phrase validée (maquette, page contact) ; « étude sur mesure » vient de l'appel à l'action validé de l'accueil.

### Section 2 : en bref

- **Rôle :** réponse directe pour les moteurs et les IA (« comment contacter 3B Charpente ? »).
- **Composant Framer :** carte blanche, pastille sauge « En bref ».
- **Copywriting :**
  - **Étiquette :** En bref
  - **Texte (46 mots) :** Pour un devis, appelez 3B Charpente au 06 34 67 31 49, écrivez à tardy@3bcharpente.fr ou remplissez le formulaire ci-dessous. Nous discutons de votre projet lors d'une rencontre, puis nous vous proposons un devis détaillé. L'entreprise est située 5 rue Saint-Michel, 05120 L'Argentière-la-Bessée, dans les Hautes-Alpes.

### Section 3 : formulaire de demande

- **Rôle :** recueillir une demande complète, sans décourager.
- **Composant Framer :** carte blanche à coins arrondis (colonne de gauche, 2/3 de la largeur sur ordinateur) ; champs à fond crème clair, bordure pierre, coins arrondis ; bouton plein vert forêt. Les coordonnées (section 4) occupent la colonne de droite.
- **Copywriting de l'en-tête du formulaire :**
  - **H2 :** Parlez-nous de votre **projet**
  - **Intro :** Quelques informations suffisent. Plus votre description est précise, plus notre premier échange sera utile. Les champs marqués d'un astérisque sont obligatoires.

**Champs, dans l'ordre :**

| # | Libellé affiché | Type | Obligatoire | Options ou texte d'aide |
|---|---|---|---|---|
| 1 | Vous êtes * | boutons radio | oui | Particulier · Architecte ou maître d'œuvre · Entreprise du bâtiment ou de la démolition · Collectivité · Autre |
| 2 | Nom et prénom * | texte | oui | — |
| 3 | Téléphone * | téléphone | oui | Aide : « Pour vous rappeler et fixer une rencontre. » |
| 4 | E-mail * | e-mail | oui | — |
| 5 | Commune du chantier * | texte avec suggestions | oui | Exemple affiché : « Briançon, Vallouise-Pelvoux, La Salle-les-Alpes… ». Suggestions automatiques tirées de la liste officielle des communes (API Découpage administratif, geo.api.gouv.fr), avec en tête les communes de nos chantiers : L'Argentière-la-Bessée, Briançon, Vallouise-Pelvoux, La Salle-les-Alpes, Le Monêtier-les-Bains, Saint-Martin-de-Queyrières, Champcella, La Roche-de-Rame. La saisie libre reste possible (hors département, lieu-dit). |
| 6 | Votre projet * (plusieurs choix possibles) | cases à cocher | au moins une | voir liste ci-dessous |
| 7 | Type de bâtiment * | liste déroulante | oui | Maison individuelle · Chalet · Maison ancienne ou maison de pays · Copropriété · Bâtiment agricole, artisanal ou industriel · Bâtiment public · Terrain nu (construction neuve) · Autre |
| 8 | Avez-vous des plans ? | boutons radio | non | Oui, je peux les joindre · Oui, un architecte ou un maître d'œuvre suit le projet · Non, pas encore · Je ne sais pas |
| 9 | Plans ou photos (facultatif) | dépôt de fichiers | non | Aide : « Plans, photos de l'existant, croquis : tout nous aide à comprendre votre projet. PDF, JPG, PNG ou HEIC, 10 Mo maximum par fichier, 5 fichiers au plus. » |
| 10 | Quand souhaitez-vous démarrer ? | liste déroulante | non | Dès que possible · Dans les 6 prochains mois · Dans 6 à 12 mois · Dans plus d'un an · Je ne sais pas encore |
| 11 | Votre message * | zone de texte (6 lignes) | oui | Texte indicatif : « Décrivez votre projet : ce que vous souhaitez faire, l'état actuel, les dimensions si vous les connaissez, vos envies de matériaux… » |
| 12 | Comment nous avez-vous connus ? | liste déroulante | non | Recherche sur internet · Recommandation d'un proche · Un architecte ou un artisan · Facebook · Un chantier vu près de chez moi · Autre |
| — | Champ piège anti-robots | champ caché | — | Invisible pour les visiteurs ; la demande est rejetée s'il est rempli. Pas de reCAPTCHA Google (cookies et transfert de données). |

**Liste du champ 6 « Votre projet » (cases à cocher) :**
- Charpente bois neuve
- Rénovation de charpente ou aménagement de combles
- Isolation biosourcée, rénovation énergétique
- Isolation de toiture par l'extérieur (sarking)
- Isolation des murs (par l'extérieur ou par l'intérieur)
- Maison ossature bois
- Extension ou surélévation bois
- Escalier bois sur mesure
- Balcon, terrasse, garde-corps ou abri bois
- 3B Récup' : diagnostic des matériaux réemployables
- 3B Récup' : déconstruction sélective
- 3B Récup' : intégrer du bois de réemploi à mon projet
- Autre projet

**Pré-remplissage :** chaque bouton « Demander mon devis » d'une page de prestation envoie vers `/contact/?projet={adresse-de-la-page}` (par exemple `?projet=isolation-biosourcee`) et coche la case correspondante. La page d'origine est aussi transmise dans un champ caché, pour savoir d'où viennent les demandes.

**Bouton d'envoi (plein vert forêt, pleine largeur sur mobile) :** Envoyer ma demande

**Mention d'information sous le bouton (petit texte, obligatoire au titre du RGPD) :**
Les informations de ce formulaire sont utilisées par 3B Charpente (Jean-Michel Tardy, EI) uniquement pour répondre à votre demande et préparer votre devis. Elles ne sont ni vendues ni cédées. Si aucun devis n'est signé, elles sont supprimées 3 ans après notre dernier échange. Vous pouvez y accéder, les corriger ou les faire effacer en écrivant à tardy@3bcharpente.fr. En savoir plus : politique de confidentialité → `/mentions-legales/#confidentialite`

- *Note :* pas de case « J'accepte » obligatoire. Répondre à une demande de devis repose sur les « mesures précontractuelles » du RGPD (article 6.1.b), pas sur le consentement ; une mention d'information claire suffit. Durée de 3 ans : référence CNIL pour les prospects, à valider.

**Messages du formulaire :**
- **Envoi réussi (remplace le formulaire) :**
  - Titre : Merci, votre demande est bien partie.
  - Texte : Nous la lisons et nous revenons vers vous pour en parler [À VALIDER AVEC JEAN : délai de réponse habituel, par exemple « sous X jours ouvrés »]. Un projet urgent ? Appelez le 06 34 67 31 49.
  - Bouton contour : Voir nos réalisations en attendant → `/realisations/`
- **Erreur d'envoi :** Votre message n'est pas parti. Vérifiez les champs en rouge, ou appelez-nous au 06 34 67 31 49.
- **Erreurs par champ :**
  - Vous êtes : « Indiquez qui vous êtes. »
  - Nom et prénom : « Indiquez votre nom. »
  - Téléphone : « Indiquez un numéro de téléphone valide. »
  - E-mail : « Indiquez une adresse e-mail valide. »
  - Commune : « Indiquez la commune du chantier. »
  - Votre projet : « Choisissez au moins un type de projet. »
  - Type de bâtiment : « Choisissez un type de bâtiment. »
  - Message : « Décrivez votre projet en quelques mots. »
  - Fichier : « Ce fichier est trop lourd (10 Mo maximum) » ou « Ce format n'est pas accepté (PDF, JPG, PNG ou HEIC). »

**E-mail envoyé à 3B Charpente :**
- Destinataire : tardy@3bcharpente.fr
- Objet : Nouvelle demande de devis : {types de projet} à {commune}
- Contenu : tous les champs, la page d'origine, les pièces jointes ; l'adresse e-mail du visiteur en « répondre à ».

**Accusé de réception envoyé au visiteur :**
- Objet : Votre demande à 3B Charpente
- Texte :
  > Bonjour {prénom},
  >
  > Merci pour votre message. Nous avons bien reçu votre demande concernant : {types de projet}, à {commune}.
  >
  > Nous revenons vers vous pour en parler et fixer une rencontre [À VALIDER AVEC JEAN : délai de réponse habituel]. Lors de cette rencontre, nous discuterons de vos besoins et vous donnerons un calendrier estimatif ; nous vous proposerons ensuite un devis détaillé, adapté à votre projet.
  >
  > Un projet urgent ? Appelez-nous au 06 34 67 31 49.
  >
  > À bientôt,
  > Jean-Michel Tardy et l'équipe de 3B Charpente
  > 5 rue Saint-Michel, 05120 L'Argentière-la-Bessée
  > https://3bcharpente.fr

**Notes techniques :**
- outil d'envoi du formulaire : [À COMPLÉTER : solution retenue, de préférence hébergée dans l'Union européenne] ; à déclarer dans la politique de confidentialité ;
- mesure : un événement « demande de devis envoyée » dans l'outil de mesure d'audience, sans données personnelles ;
- accessibilité : chaque champ a un libellé visible (pas seulement un texte indicatif), les erreurs sont annoncées aux lecteurs d'écran, ordre de tabulation logique.

### Section 4 : coordonnées

- **Rôle :** coordonnées exactes, au caractère près (règle NAP du brief).
- **Composant Framer :** carte vert forêt (colonne de droite), texte blanc, icônes en pastille sauge ; liens cliquables.
- **Copywriting :**
  - **H2 :** Nos **coordonnées**
  - **Bloc adresse :**
    - 3B Charpente
    - 5 rue Saint-Michel
    - 05120 L'Argentière-la-Bessée
    - Hautes-Alpes
  - **Téléphone :** 06 34 67 31 49 → `tel:+33634673149`
  - **E-mail :** tardy@3bcharpente.fr → `mailto:tardy@3bcharpente.fr`
  - **Horaires :** [À VALIDER AVEC JEAN : horaires. Si la maquette est juste, afficher « Du lundi au vendredi, de 7 h 30 à 17 h »]
  - **Petite phrase sous les horaires :** [À VALIDER AVEC JEAN : « Nous sommes souvent sur les chantiers : si nous ne décrochons pas, laissez-nous un message. »]
  - **Accueil :** [À VALIDER AVEC JEAN : peut-on venir sans rendez-vous au 5 rue Saint-Michel, ou uniquement sur rendez-vous ?]
  - **Réseaux :** Suivez nos chantiers sur Facebook → `https://www.facebook.com/3bcharpente`

### Section 5 : plan d'accès

- **Rôle :** situer l'entreprise et confirmer l'adresse aux moteurs.
- **Composant Framer :** bloc pleine largeur à coins arrondis, hauteur 360 px sur ordinateur, 260 px sur mobile.
- **Recommandation technique :** carte statique (image générée à partir d'OpenStreetMap, avec la mention « © les contributeurs d'OpenStreetMap ») et lien « Itinéraire ». Pas de carte Google intégrée qui dépose des cookies avant tout consentement. Si une carte interactive est voulue : chargement au clic seulement, avec le texte « Afficher la carte interactive (des données de navigation seront transmises au fournisseur de la carte) ».
- **Copywriting :**
  - **Légende de la carte :** 3B Charpente, 5 rue Saint-Michel, 05120 L'Argentière-la-Bessée
  - **Texte court :** À L'Argentière-la-Bessée, dans la vallée de la Durance, entre Briançon et Embrun.
  - **Lien :** Itinéraire → lien vers l'adresse dans Google Maps (s'ouvre dans un nouvel onglet)

### Section 6 : après votre message

- **Rôle :** rassurer en décrivant les étapes (tirées des réponses FAQ validées).
- **Composant Framer :** onglets numérotés 01 à 04, en frise horizontale sur ordinateur, liste verticale sur mobile.
- **Copywriting :**
  - **Kicker :** Et ensuite ?
  - **H2 :** Après votre message, **comment ça se passe** ?
  - **01, Nous lisons votre demande :** Nous prenons connaissance de votre projet, de vos plans et de vos photos, puis nous vous recontactons. [À VALIDER AVEC JEAN : délai habituel]
  - **02, Nous nous rencontrons :** Nous discutons de vos besoins lors d'une rencontre [À VALIDER AVEC JEAN : sur le chantier ?]. Nous vous donnons dès cette première rencontre un calendrier estimatif.
  - **03, Vous recevez un devis détaillé :** Nous vous proposons un devis détaillé, adapté à votre projet. Prenez le temps de le lire et de nous poser vos questions.
  - **04, Le chantier se prépare :** Une fois le devis accepté, nous préparons les pièces à l'atelier, puis nous intervenons chez vous.
- *Note :* étapes 02 et 03 tirées mot pour mot des réponses FAQ validées (« Nous discuterons de vos besoins lors d'une rencontre et vous proposerons un devis détaillé adapté à votre projet », « Nous vous fournirons un calendrier estimatif lors de notre première rencontre »).

### Section 7 : encart professionnels et 3B Récup'

- **Rôle :** capter les architectes, entreprises et collectivités qui préparent une déconstruction.
- **Composant Framer :** carte blanche avec bordure vert sauge et pastille « 3B Récup' ».
- **Copywriting :**
  - **Pastille :** 3B Récup'
  - **H2 :** Vous préparez une **déconstruction** ?
  - **Texte :** Que vous soyez architecte, entreprise du bâtiment, collectivité ou particulier, 3B Récup' saura vous apporter des solutions personnalisées. Du bâtiment industriel à la maison particulière, nous déposons les structures bois, la couverture, l'isolation et les parements, puis nous transformons le bois dans nos ateliers. Associez-nous dès l'étude de faisabilité : c'est à ce stade que le réemploi se prévoit le plus simplement.
  - **Lien :** Découvrir 3B Récup' → `/3b-recup/`
- *Note :* première phrase et liste des matériaux validées ; « dès l'étude de faisabilité » reprend l'ambition déclarée sur PRECI.

### Section 8 : zone d'intervention

- **Rôle :** rappeler la zone et mailler vers les pages secteur.
- **Composant Framer :** bande de fond clair, trois liens en pastilles.
- **Copywriting :**
  - **Texte :** Basés dans le nord des Hautes-Alpes, nous intervenons dans tout le département, mais aussi en Provence-Alpes-Côte d'Azur et en Auvergne-Rhône-Alpes.
  - **Pastilles :** Charpentier à Briançon → `/charpentier-briancon/` · Charpentier à Serre Chevalier → `/charpentier-serre-chevalier/` · Charpentier en Vallouise et Pays des Écrins → `/charpentier-vallouise-pays-des-ecrins/`

### Section 9 : FAQ

- **Composant Framer :** FAQ en accordéon dans des cartes blanches.
- **Copywriting :**
  - **Kicker :** Questions fréquentes
  - **H2 :** Avant de nous **écrire**
  - Questions et réponses : voir partie 4.

---

## 4. FAQ

Données structurées : `FAQPage`, textes identiques à ceux affichés.

**1. Comment obtenir un devis pour ma charpente ?**
Il vous suffit de nous contacter, par téléphone au 06 34 67 31 49 ou avec le formulaire de cette page. Nous discutons de vos besoins lors d'une rencontre, puis nous vous proposons un devis détaillé, adapté à votre projet. Chaque projet est unique : nous adaptons nos constructions à vos besoins et à vos préférences esthétiques et fonctionnelles. *(58 mots)*

**2. Que faut-il préparer avant de vous contacter ?**
Une description de votre projet suffit pour commencer : ce que vous voulez faire, la commune, le type de bâtiment et, si possible, quand vous aimeriez démarrer. Des photos de l'existant et des plans, si vous en avez, nous aident à mieux comprendre le chantier. Vous pouvez les joindre au formulaire. Nous ferons le point ensemble lors de notre rencontre. *(59 mots)*

**3. Combien de temps faut-il pour réaliser mes travaux ?**
Le délai peut varier selon la complexité et la taille du projet. Une réfection de charpente, une isolation complète ou une surélévation ne demandent pas la même préparation à l'atelier ni le même temps sur le chantier. Nous vous fournissons un calendrier estimatif lors de notre première rencontre, en tenant compte de votre échéance. *(54 mots)*

**4. Intervenez-vous dans ma commune ?**
Basés à L'Argentière-la-Bessée, dans le nord des Hautes-Alpes, nous intervenons dans les Hautes-Alpes, mais aussi en Provence-Alpes-Côte d'Azur et en Auvergne-Rhône-Alpes. Nos chantiers se situent surtout à Briançon, à Serre Chevalier, en Vallouise et dans le Pays des Écrins ; nous avons aussi travaillé à Gresse-en-Vercors et dans les monts du Lyonnais. Indiquez votre commune dans le formulaire. *(57 mots)*

**5. Pouvez-vous m'aider à obtenir des aides à la rénovation ?**
3B Charpente est qualifiée RGE (reconnu garant de l'environnement) par Qualibat pour l'isolation des murs et des toitures par l'extérieur, l'isolation par l'intérieur, les fenêtres de toit et les menuiseries donnant sur l'extérieur. Faire appel à un artisan RGE ouvre l'accès aux aides publiques à la rénovation énergétique, sous conditions. Signalez-le dans votre message : nous en parlerons lors de la rencontre. *(61 mots)*

---

## 5. Liens internes

| Texte du lien | Page visée |
|---|---|
| politique de confidentialité (mention sous le bouton) | `/mentions-legales/#confidentialite` |
| Voir nos réalisations en attendant (message de succès) | `/realisations/` |
| Découvrir 3B Récup' | `/3b-recup/` |
| Charpentier à Briançon | `/charpentier-briancon/` |
| Charpentier à Serre Chevalier | `/charpentier-serre-chevalier/` |
| Charpentier en Vallouise et Pays des Écrins | `/charpentier-vallouise-pays-des-ecrins/` |
| Fil d'Ariane « Accueil » | `/` |

**Pages qui pointent ici :** toutes (en-tête, bouton « Demander mon devis », appels à l'action finaux), avec le paramètre `?projet=` depuis les pages de prestation.

---

## 6. Photos à utiliser

| Emplacement | Dossier de galerie | Légende d'origine | Nom de fichier proposé | Texte alternatif |
|---|---|---|---|---|
| Bandeau sous le héros (ordinateur) | `/galeries/refection-d-une-charpente-a-l-argentiere-la-bessee` | lucarne en cours de levage | `lucarne-levage-argentiere-la-bessee.webp` | Charpente en cours de levage par 3B Charpente, charpentier à L'Argentière-la-Bessée |
| Encart 3B Récup' (vignette) | `/galeries/renovation-d-une-maison-d-habitation-a-l-argentiere-la-bessee` | Bardage vieux bois | `bardage-vieux-bois-reemploi-argentiere-la-bessee.webp` | Bardage en vieux bois de réemploi sur une maison rénovée à L'Argentière-la-Bessée |
| Plan d'accès | — | — | `plan-acces-3b-charpente-argentiere-la-bessee.webp` (à générer) | Plan d'accès à 3B Charpente, 5 rue Saint-Michel, 05120 L'Argentière-la-Bessée |

**Photos manquantes à demander à Jean :**
- façade ou entrée du 5 rue Saint-Michel (si le lieu reçoit du public), utile aussi pour la fiche Google ;
- portrait de Jean au téléphone ou devant un plan, pour humaniser la page (facultatif).

---

## 7. Points à valider avec Jean

1. **Horaires :** maquette (lundi au vendredi, 7 h 30 – 17 h) ou PagesJaunes (vendredi, 7 h 30 – 12 h) ? Les mêmes horaires devront figurer sur le site, la fiche Google et PagesJaunes.
2. **Délai de réponse :** quel délai pouvez-vous tenir pour rappeler après une demande ? On l'écrira seulement s'il est tenable.
3. **Devis gratuit :** oui ou non ? Si oui, on l'ajoute dans le H2 du formulaire et la FAQ 1.
4. **Rencontre :** se fait-elle toujours sur le chantier ? Y a-t-il des frais de déplacement au-delà d'une certaine distance ?
5. **Accueil au 5 rue Saint-Michel :** bureau, atelier ou domicile ? Accueil sans rendez-vous possible ?
6. **Message « souvent sur les chantiers » :** d'accord pour l'afficher ?
7. **Téléphone et e-mail obligatoires :** les deux sont obligatoires dans le formulaire. Préférez-vous rendre le téléphone facultatif ?
8. **Taille des fichiers :** 10 Mo par fichier et 5 fichiers, ça vous convient ? (Plans PDF lourds possibles.)
9. **Liste des communes suggérées :** à compléter avec les communes où vous travaillez souvent.
10. **Outil du formulaire et boîte de réception :** les demandes arrivent-elles bien sur tardy@3bcharpente.fr ? Faut-il une copie à Claire Patin (organisation), si son rôle est confirmé ?
11. **Durée de conservation de 3 ans** pour les demandes sans suite : d'accord ?
