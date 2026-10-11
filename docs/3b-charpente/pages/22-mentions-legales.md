# Fiche de page 22 : Mentions légales et confidentialité (`/mentions-legales/`)

> **Sources :** `00-brief.md` (identité légale vérifiée : mentions légales de new.3bcharpente.fr, annuaire RGE de l'ADEME). Fiche rédigée le 11 octobre 2026.
>
> **Conventions de lecture :**
> - dans le H1, les mots entre `**` passent en **vert accent** (#336233) ; dans les textes, `**` veut dire gras ;
> - les espaces insécables avant : ; ? ! et dans les guillemets sont déjà en place ;
> - `[À COMPLÉTER : …]` = information manquante à fournir ; `[À VALIDER AVEC JEAN : …]` = à confirmer. Aucun crochet ne doit rester en ligne.
> - Ce texte est un modèle rédigé avec soin, pas un avis juridique : le faire relire par Jean (et, s'il le souhaite, par son expert-comptable ou un juriste) avant publication.

---

## 1. Carte d'identité

- **Adresse :** `/mentions-legales/`, avec quatre ancres : `#editeur`, `#hebergement`, `#confidentialite`, `#cookies`.
- **Objectif de la page :**
  - remplir les obligations légales d'un site professionnel : identification de l'éditeur et de l'hébergeur (loi n° 2004-575 du 21 juin 2004, dite LCEN), mention « EI » de l'entrepreneur individuel, médiation de la consommation ;
  - informer les visiteurs sur leurs données (RGPD, article 13), puisque le nouveau site a un **formulaire de contact** et une **mesure d'audience** ;
  - expliquer les cookies et permettre de les refuser ;
  - recevoir les redirections de `new.3bcharpente.fr/mentions-legales` et de `new.3bcharpente.fr/politique-de-confidentialite` (vers `#confidentialite`).
- **Visiteurs visés :** visiteurs prudents avant d'envoyer le formulaire, partenaires ou administrations qui vérifient l'entreprise.
- **Mots-clés :** aucun ciblage. La page reste **indexable** (`index, follow`) : elle confirme l'identité légale (nom, SIREN, adresse) de façon cohérente avec les annuaires, ce qui aide moteurs et IA à reconnaître l'entreprise.
- **Intention de recherche :** informationnelle (« qui édite ce site ? », « que deviennent mes données ? »).
- **Pages liées :** lien depuis le pied de page de toutes les pages et depuis la mention sous le formulaire de `/contact/`.

---

## 2. SEO

- **Balise title (50 caractères) :** Mentions légales et confidentialité | 3B Charpente
- **Meta description (141 caractères) :** Mentions légales de 3B Charpente (EI Jean-Michel Tardy, SIREN 494 482 714) et politique de confidentialité : formulaire, cookies, vos droits.
- **H1 :** Mentions légales et **confidentialité**
- **Données structurées :** `WebPage` (avec `publisher` qui renvoie à l'`@id` de l'entreprise) et `BreadcrumbList`. Pas de FAQ.

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://3bcharpente.fr/mentions-legales/#page",
      "url": "https://3bcharpente.fr/mentions-legales/",
      "name": "Mentions légales et confidentialité",
      "inLanguage": "fr-FR",
      "publisher": { "@id": "https://3bcharpente.fr/#entreprise" },
      "dateModified": "[À COMPLÉTER : date de mise en ligne, format AAAA-MM-JJ]"
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://3bcharpente.fr/" },
        { "@type": "ListItem", "position": 2, "name": "Mentions légales et confidentialité", "item": "https://3bcharpente.fr/mentions-legales/" }
      ]
    }
  ]
}
```

- **Images :** aucune, à part le logo de l'en-tête. Si le logo FEADER est affiché (section 8), texte alternatif : « Logos de l'Union européenne (FEADER), de la Région Sud et du programme LEADER ».

---

## 3. Sections dans l'ordre

- **Composant Framer pour toute la page :** gabarit texte simple sur fond crème, colonne de lecture de 720 px maximum, titres H2 en Nohemi SemiBold, sommaire cliquable en haut. Pas de photo, pas d'animation au défilement (lecture rapide).

### Section 1 : en-tête de page

- **Copywriting :**
  - **H1 :** Mentions légales et **confidentialité**
  - **Chapô :** Cette page présente les informations légales du site 3bcharpente.fr, la façon dont nous traitons vos données personnelles et notre usage des cookies.
  - **Date :** Dernière mise à jour : [À COMPLÉTER : date de mise en ligne].
  - **Sommaire (liens d'ancre) :** Éditeur du site · Hébergement · Activité, qualification et assurance · Médiation de la consommation · Propriété intellectuelle · Responsabilité · Financement européen · Politique de confidentialité · Cookies

### Section 2 : éditeur du site (`#editeur`)

- **H2 :** Éditeur du site
- **Texte :**
  - Le site 3bcharpente.fr est édité par **Jean-Michel Tardy EI** (entrepreneur individuel), qui exerce sous le nom commercial **3B Charpente**.
  - Adresse : 5 rue Saint-Michel, 05120 L'Argentière-la-Bessée, France
  - Téléphone : 06 34 67 31 49
  - E-mail : tardy@3bcharpente.fr
  - SIREN : 494 482 714
  - SIRET : 494 482 714 00016 [À VALIDER AVEC JEAN : voir point 1, l'annuaire RGE indique 494 482 714 00024]
  - Code APE : 4391A (travaux de charpente)
  - Immatriculation : [À COMPLÉTER : Registre national des entreprises (RNE), activité artisanale, et chambre de métiers de rattachement]
  - Numéro de TVA intracommunautaire : [À COMPLÉTER]
  - Directeur de la publication : Jean-Michel Tardy

### Section 3 : hébergement (`#hebergement`)

- **H2 :** Hébergement
- **Texte :**
  - Le site est hébergé par : [À COMPLÉTER : hébergeur du nouveau site, raison sociale, adresse postale et numéro de téléphone].
- **H3 :** Conception et réalisation
- **Texte :** [À COMPLÉTER : nom de la personne ou de l'agence qui conçoit le site, et lien éventuel].

### Section 4 : activité, qualification et assurance

- **H2 :** Activité, qualification et assurance
- **Texte :**
  - Activité principale : travaux de charpente (code APE 4391A). 3B Charpente réalise aussi des travaux d'isolation, de construction en ossature bois, d'escaliers, de balcons et de terrasses, ainsi que la déconstruction sélective et le réemploi du bois sous le nom 3B Récup'.
  - Qualification : 3B Charpente est qualifiée **QUALIBAT-RGE** (reconnu garant de l'environnement), au nom de « TARDY JEAN-MICHEL », pour les domaines suivants : isolation des murs par l'extérieur ; isolation des toitures par l'extérieur ; isolation par l'intérieur des murs ou rampants de toitures ou plafonds ; fenêtres de toit ; fenêtres, volets, portes donnant sur l'extérieur. Cette qualification peut être vérifiée dans l'annuaire officiel des professionnels RGE.
  - Assurance responsabilité civile décennale : [À COMPLÉTER : nom de l'assureur, numéro de contrat, couverture géographique].

### Section 5 : médiation de la consommation

- **H2 :** Médiation de la consommation
- **Texte :**
  - Conformément aux articles L. 611-1 et suivants du Code de la consommation, si vous êtes un particulier et qu'un litige vous oppose à 3B Charpente, vous pouvez recourir gratuitement à un médiateur de la consommation.
  - Avant de le saisir, vous devez nous avoir adressé une réclamation écrite (par courrier ou par e-mail à tardy@3bcharpente.fr) pour tenter de régler le litige directement avec nous.
  - Médiateur de la consommation : [À COMPLÉTER : nom du médiateur, adresse postale et site internet].

### Section 6 : propriété intellectuelle

- **H2 :** Propriété intellectuelle
- **Texte :**
  - Les textes, photographies de chantiers, logos, plans et illustrations de ce site appartiennent à 3B Charpente ou à leurs auteurs, sauf mention contraire. Toute reproduction ou réutilisation, totale ou partielle, sans autorisation écrite est interdite.
  - Vous souhaitez reprendre une photo pour un article, une présentation ou un projet d'architecture ? Écrivez-nous à tardy@3bcharpente.fr.
- **H3 :** Crédits
- **Texte :**
  - Photographies de chantiers : 3B Charpente.
  - Photographies d'ambiance : [À COMPLÉTER : auteur ou banque d'images, et licence].
  - Plan d'accès : © les contributeurs d'OpenStreetMap (si le plan statique proposé sur la page contact est retenu).
  - Polices de caractères : Nohemi et Inter, hébergées sur notre propre serveur [À COMPLÉTER : vérifier la licence d'usage web de Nohemi].

### Section 7 : responsabilité et liens

- **H2 :** Responsabilité et liens
- **Texte :**
  - Nous veillons à l'exactitude des informations publiées sur ce site, mais elles peuvent contenir des erreurs ou devenir inexactes avec le temps. Signalez-nous toute erreur à tardy@3bcharpente.fr.
  - Les réalisations présentées sont des exemples : chaque projet fait l'objet d'une étude et d'un devis personnalisés.
  - Les liens vers d'autres sites (Facebook, annuaire RGE, PRECI…) sont donnés pour votre information. Nous ne sommes pas responsables de leur contenu.

### Section 8 : financement européen (à garder seulement si Jean le confirme)

- **H2 :** Financement européen
- **Texte :** [À VALIDER AVEC JEAN : « Le projet [objet exact du financement] a bénéficié du soutien du Fonds européen agricole pour le développement rural (FEADER), dans le cadre du programme LEADER. »]
- **Visuel :** logos fournis par l'organisme financeur, sans les modifier [À VALIDER AVEC JEAN : obligation d'affichage sur le site et durée].

### Section 9 : politique de confidentialité (`#confidentialite`)

- **H2 :** Politique de confidentialité
- **Chapô :** Nous collectons le moins de données possible, uniquement pour répondre à vos demandes et réaliser vos travaux. Voici, en clair, ce que nous en faisons.

**H3 : Qui est responsable de vos données ?**
Le responsable du traitement est Jean-Michel Tardy EI (3B Charpente), 5 rue Saint-Michel, 05120 L'Argentière-la-Bessée, tardy@3bcharpente.fr, 06 34 67 31 49. Nous n'avons pas désigné de délégué à la protection des données, cette désignation n'étant pas obligatoire pour notre activité.

**H3 : Quelles données collectons-nous ?**
- **Quand vous remplissez le formulaire de contact :** votre qualité (particulier, architecte, entreprise, collectivité…), vos nom et prénom, téléphone, e-mail, la commune du chantier, le type de projet et de bâtiment, l'existence de plans, l'échéance souhaitée, votre message, les fichiers que vous joignez (plans, photos), la façon dont vous nous avez connus et la page depuis laquelle vous écrivez.
- **Quand vous nous appelez ou nous écrivez :** les informations que vous choisissez de nous donner.
- **Si vous devenez client :** vos coordonnées, l'adresse du chantier et les informations nécessaires au devis, à la facturation et au suivi des travaux.
- **Quand vous naviguez sur le site :** des données de fréquentation (pages vues, site de provenance, type d'appareil), dans les conditions décrites dans la partie « Cookies », et les journaux techniques de l'hébergeur (adresse IP, date et heure de connexion), utilisés pour la sécurité.

Nous ne vous demandons aucune donnée sensible (santé, opinions, etc.). Merci de ne pas en indiquer dans votre message.

**H3 : Pourquoi utilisons-nous vos données, et sur quelle base ?**

| Ce que nous faisons | Base légale (article 6 du RGPD) |
|---|---|
| Répondre à votre demande, organiser une rencontre, établir un devis | Mesures précontractuelles prises à votre demande |
| Réaliser les travaux, facturer, assurer le suivi et les garanties | Exécution du contrat et respect de nos obligations légales (comptabilité, garanties) |
| Mesurer la fréquentation du site pour l'améliorer | Intérêt légitime (mesure d'audience exemptée de consentement) **ou** votre consentement, selon l'option retenue (voir « Cookies ») |
| Protéger le site et le formulaire (anti-spam, journaux de sécurité) | Intérêt légitime |
| Publier des photos de votre chantier dans nos réalisations | Votre accord préalable ; nous ne publions jamais votre nom ni votre adresse précise |

Nous n'envoyons pas de lettre d'information et nous ne faisons pas de démarchage téléphonique [À VALIDER AVEC JEAN] : votre numéro sert uniquement à vous rappeler au sujet de votre demande. Nous ne vendons et ne louons jamais vos données.

**H3 : Qui reçoit vos données ?**
- Jean-Michel Tardy et les personnes de 3B Charpente qui traitent votre demande ou votre chantier.
- Nos prestataires techniques, qui agissent uniquement sur nos instructions : hébergeur du site [À COMPLÉTER], outil d'envoi du formulaire [À COMPLÉTER], messagerie électronique [À COMPLÉTER], outil de mesure d'audience [À COMPLÉTER].
- Avec votre accord, et seulement pour votre projet, les autres intervenants du chantier (architecte, bureau d'études, autres artisans) [À VALIDER AVEC JEAN].
- Les autorités, si la loi nous y oblige.

**H3 : Vos données quittent-elles l'Union européenne ?**
Nous privilégions des prestataires qui hébergent les données dans l'Union européenne. Si l'un d'eux transfère des données hors de l'Union, ce transfert est encadré par une décision d'adéquation de la Commission européenne ou par des clauses contractuelles types. [À COMPLÉTER : préciser selon les outils retenus.]

**H3 : Combien de temps gardons-nous vos données ?**

| Données | Durée de conservation |
|---|---|
| Demande de contact ou de devis restée sans suite (y compris les fichiers joints) | 3 ans après notre dernier échange |
| Dossier client (devis signé, échanges, plans, photos du chantier) | Pendant les travaux, puis 10 ans après la réception des travaux (durée de la garantie décennale) |
| Factures et pièces comptables | 10 ans (obligation légale) |
| Cookies et traceurs de mesure d'audience | 13 mois au plus ; données de fréquentation conservées 25 mois au plus |
| Votre choix concernant les cookies (si un bandeau est utilisé) | 6 mois |
| Journaux techniques de l'hébergeur | [À COMPLÉTER : selon l'hébergeur, 1 an au plus] |

**H3 : Comment protégeons-nous vos données ?**
Le site est servi en connexion sécurisée (HTTPS). Les demandes reçues ne sont accessibles qu'aux personnes qui en ont besoin, avec des comptes protégés par mot de passe. Nos prestataires sont choisis pour leurs garanties de sécurité.

**H3 : Quels sont vos droits ?**
Vous pouvez à tout moment :
- accéder à vos données et en obtenir une copie ;
- les faire corriger ou compléter ;
- les faire effacer ;
- demander la limitation de leur utilisation ;
- vous opposer à leur utilisation fondée sur notre intérêt légitime ;
- récupérer les données que vous nous avez fournies, dans un format lisible (portabilité) ;
- retirer votre consentement, quand l'utilisation repose sur celui-ci ;
- définir des directives sur le sort de vos données après votre décès.

Pour exercer ces droits, écrivez à tardy@3bcharpente.fr ou à 3B Charpente, 5 rue Saint-Michel, 05120 L'Argentière-la-Bessée. Nous vous répondons dans un délai d'un mois (prolongeable de deux mois si la demande est complexe ; nous vous en informerons). Nous ne vous demanderons un justificatif d'identité qu'en cas de doute raisonnable.

**H3 : Une réclamation ?**
Si vous estimez, après nous avoir contactés, que vos droits ne sont pas respectés, vous pouvez adresser une réclamation à la CNIL : Commission nationale de l'informatique et des libertés, 3 place de Fontenoy, TSA 80715, 75334 Paris Cedex 07, www.cnil.fr.

### Section 10 : cookies (`#cookies`)

- **H2 :** Cookies et traceurs
- **Texte d'introduction :** Un cookie est un petit fichier déposé sur votre appareil quand vous visitez un site. Sur 3bcharpente.fr, nous en utilisons le moins possible : **aucun cookie publicitaire**, aucun bouton de partage qui vous suit, aucun pixel Facebook. Le lien vers notre page Facebook est un simple lien. Nos polices de caractères sont hébergées sur notre propre serveur.

**H3 : Les traceurs utilisés**

| Traceur | À quoi il sert | Durée | Votre accord |
|---|---|---|---|
| Mesure d'audience [À COMPLÉTER : nom de l'outil et des cookies] | Compter les visites et les pages vues, de façon anonyme | 13 mois au plus | Option A : non requis (exempté) ; option B : requis |
| Préférences de consentement (option B seulement) | Mémoriser vos choix | 6 mois | Non requis (indispensable) |
| Sécurité du formulaire (si l'outil retenu en dépose) | Bloquer les envois automatiques | Durée de la visite | Non requis (indispensable) |
| Carte interactive (si elle est activée au clic sur la page contact) | Afficher le plan d'accès | Selon le fournisseur de la carte | Requis : la carte ne se charge qu'après votre clic |

**Deux options pour la mesure d'audience. Garder une seule des deux versions ci-dessous à la mise en ligne.**

**Option A (recommandée) : mesure d'audience sans consentement**
- **H3 :** Mesure d'audience
- **Texte :** Nous utilisons [À COMPLÉTER : nom de l'outil, par exemple Matomo] configuré selon les recommandations de la CNIL pour être dispensé de consentement. Les données servent uniquement à produire des statistiques anonymes de fréquentation de notre site ; elles ne sont ni croisées avec d'autres données ni transmises à des tiers. Les traceurs ont une durée de vie de 13 mois au plus et les données sont conservées 25 mois au plus. Vous pouvez tout de même vous opposer à cette mesure :
- **Module :** case à décocher « Mes visites sont comptabilisées de façon anonyme » (fourni par l'outil).
- *Note :* avec cette option, pas de bandeau cookies, ce qui allège le site sur mobile. C'est l'option conseillée.

**Option B : Google Analytics avec consentement**
- **H3 :** Mesure d'audience
- **Texte :** Avec votre accord, nous utilisons Google Analytics, un service de Google Ireland Limited, pour connaître la fréquentation du site. Ces cookies ne sont déposés qu'après votre accord. Des données peuvent être transférées aux États-Unis ; ce transfert est encadré par le cadre de protection des données UE-États-Unis. Vous pouvez accepter ou refuser, et changer d'avis à tout moment grâce au lien « Gestion des cookies » en bas de chaque page.
- **Bandeau de consentement (à afficher à la première visite) :**
  - Titre : Vos choix sur ce site
  - Texte : Nous aimerions mesurer la fréquentation du site pour l'améliorer. Ces cookies ne sont déposés qu'avec votre accord. Vous pouvez changer d'avis à tout moment.
  - Boutons, de même taille et de même couleur : Tout refuser · Personnaliser · Tout accepter
  - Lien : En savoir plus → `/mentions-legales/#cookies`

**H3 : Gérer les cookies dans votre navigateur**
**Texte :** Vous pouvez aussi bloquer ou supprimer les cookies depuis les réglages de votre navigateur (Chrome, Firefox, Safari, Edge). Le site restera utilisable ; seule la mesure d'audience sera désactivée.

### Section 11 : contact

- **H2 :** Une question sur cette page ?
- **Texte :** Écrivez-nous à tardy@3bcharpente.fr ou appelez le 06 34 67 31 49.
- **Bouton contour :** Nous contacter → `/contact/`

---

## 4. FAQ

Pas de FAQ sur cette page (les réponses sont dans le texte). Pas de données structurées `FAQPage`.

---

## 5. Liens internes

| Texte du lien | Page visée |
|---|---|
| Sommaire (9 liens) | ancres de la page (`#editeur`, `#hebergement`, `#confidentialite`, `#cookies`…) |
| Nous contacter | `/contact/` |
| En savoir plus (bandeau cookies, option B) | `/mentions-legales/#cookies` |
| Gestion des cookies (pied de page, option B) | ouvre le module de consentement |
| www.cnil.fr | lien externe, `rel="noopener"` |
| annuaire officiel des professionnels RGE | lien externe [À COMPLÉTER], `rel="noopener"` |

**Pages qui pointent ici :** pied de page de toutes les pages (« Mentions légales et confidentialité ») ; mention RGPD sous le formulaire de `/contact/` (vers `#confidentialite`).

**Redirections (rappel du brief) :** `new.3bcharpente.fr/mentions-legales` → `/mentions-legales/` ; `new.3bcharpente.fr/politique-de-confidentialite` → `/mentions-legales/#confidentialite`.

---

## 6. Photos à utiliser

Aucune photo. Seul visuel possible : les logos FEADER, Région Sud et LEADER (section 8), si Jean confirme l'obligation d'affichage, fournis par l'organisme financeur.

---

## 7. Points à valider avec Jean

1. **SIRET à afficher :** les mentions légales actuelles indiquent 494 482 714 00016 ; l'annuaire RGE de l'ADEME indique 494 482 714 00024. Vérifier sur l'annuaire des entreprises (annuaire-entreprises.data.gouv.fr) quel établissement est actif au 5 rue Saint-Michel, et n'afficher que celui-là, partout (site, devis, fiche Google).
2. **Immatriculation :** mention exacte au Registre national des entreprises et chambre de métiers.
3. **Numéro de TVA intracommunautaire.**
4. **Hébergeur du nouveau site :** raison sociale, adresse, téléphone.
5. **Conception du site :** qui est cité ?
6. **Assurance décennale :** assureur, numéro de contrat, zone couverte.
7. **Médiateur de la consommation :** lequel ? (Obligatoire dès qu'on travaille pour des particuliers.)
8. **Mesure d'audience :** option A (sans bandeau, conseillée) ou option B (Google Analytics avec bandeau) ?
9. **Outils :** formulaire, messagerie (où sont hébergés les e-mails ?), et qui, dans l'équipe, a accès aux demandes.
10. **Photos des clients :** l'accord des clients est-il demandé avant de publier les photos de leur maison ? Sinon, le prévoir pour les nouveaux chantiers, et vérifier les 24 réalisations déjà en ligne.
11. **Partage avec les autres intervenants** (architecte, bureau d'études) : à confirmer.
12. **Durées de conservation :** 3 ans pour les demandes sans suite, 10 ans pour les dossiers clients. D'accord ?
13. **FEADER / LEADER :** objet du financement et obligation d'affichage (sinon, supprimer la section 8).
14. **Démarchage téléphonique :** le régime du démarchage téléphonique a été réformé en 2025 ; vérifier à la mise en ligne si une mention (liste Bloctel ou consentement préalable) reste obligatoire quand on recueille le numéro d'un particulier.
15. **Photos d'ambiance et police Nohemi :** auteurs et licences.
