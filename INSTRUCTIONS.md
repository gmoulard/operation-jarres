# Mise en service du site de pré-vente des jarres CFOC

Le site (`index.html`) fonctionne seul, mais deux réglages sont à faire côté
Google Sheets pour qu'il soit **100% dynamique** :

## 1. Rendre le catalogue visible par le site

Le site lit en direct l'onglet **catalogue** du Google Sheet
(`https://docs.google.com/spreadsheets/d/1jp0kOLJOHfWfqg5cLhSsunFyHw63XtlI/`),
qui contient déjà les onglets `Jean`, `catalogue` et `Prevente`.

- Dans le Sheet : **Partager** > **Accès général** > choisir
  *"Tous les utilisateurs disposant du lien"* avec le rôle *Lecteur*
  (vous avez indiqué que les droits sont déjà corrects — vérifiez simplement
  que ce partage couvre bien tout le classeur, pas seulement un onglet).
  Il n'est pas nécessaire de rendre l'onglet "Prevente" public — voir
  point 2 pour un enregistrement sécurisé des commandes.
- Le nom d'onglet est déjà réglé sur `catalogue` dans `index.html`
  (`CONFIG.CATALOGUE_SHEET_NAME`) pour correspondre à votre classeur.
- Colonnes attendues dans l'onglet catalogue (l'ordre n'a pas d'importance,
  seuls les intitulés de colonnes comptent, insensibles à la casse) :

  | ID | Nom | Taille | Poids | Couleur | Prix | Stock | Image |
  |----|-----|--------|-------|---------|------|-------|-------|

  - `Prix` : nombre (ex. 59)
  - `Stock` : nombre restant, laisser vide si pas de suivi de stock
  - `Image` : URL d'image publique (optionnel — un visuel générique
    s'affiche sinon)

  Toute ligne ajoutée, modifiée ou supprimée dans cet onglet se reflète sur
  le site au rechargement de la page — aucune republication n'est requise.

- Si le site n'arrive pas à lire le Sheet (droits non modifiés, gid
  différent…), il bascule automatiquement sur un catalogue de démonstration
  et l'affiche clairement, le temps que les réglages soient faits.
- ⚠️ En consultant votre classeur, l'onglet ouvert par défaut ("Jean") a des
  colonnes différentes de celles attendues (Hauteur / Largeur / Poids /
  Quantité / Prix estimé / destination, sans colonne Couleur ni Image).
  Si l'onglet **catalogue** a la même structure que "Jean", il faudra soit
  l'adapter aux colonnes listées ci-dessus (ID / Nom / Taille / Poids /
  Couleur / Prix / Stock / Image), soit me dire ses vrais intitulés de
  colonnes pour que j'adapte le code de lecture en conséquence.

## 2. Enregistrer automatiquement les précommandes dans l'onglet "Prevente"

Sans réglage supplémentaire, chaque précommande ouvre un email pré-rempli
vers `gmoulard+precommandeJarre@gmail.com` (il suffit à l'internaute de
cliquer sur "Envoyer"). Pour que la commande soit **aussi** enregistrée
automatiquement dans l'onglet "Prevente" :

1. Vérifier que le Sheet a bien un onglet nommé **Prevente** avec en ligne 1 :
   `Horodatage | Nom | Email | Téléphone | Détail commande | Total (€) | Créneau souhaité | Note | Statut`
2. Ouvrir **Extensions > Apps Script** depuis le Sheet.
3. Coller le contenu du fichier `apps-script.gs` fourni.
4. **Déployer > Nouveau déploiement > Application Web** :
   - Exécuter en tant que : *Moi*
   - Qui a accès : *Tous les utilisateurs*
5. Copier l'URL du déploiement (se termine par `/exec`) et la coller dans
   `index.html`, ligne `APPS_SCRIPT_URL: ""`.
6. Publier le site avec cette valeur mise à jour.

Une fois ce réglage fait, chaque précommande valide :
- ajoute une ligne dans l'onglet **Prevente** ;
- envoie un email de notification à `gmoulard+precommandeJarre@gmail.com` ;
- ouvre en complément un email pré-rempli côté client (garde-fou en cas de
  souci réseau).

## 3. Images d'exemple des jarres

Un dossier `images/` est fourni avec une illustration JPEG par coloris
(générées pour un rendu cohérent avec le design du site — ce sont des
illustrations de secours, pas des photos réelles) :

- `images/jarre-cfoc-celadon.jpg` — bleu céladon / porcelaine (générique CFOC)
- `images/jarre-bordeaux.jpg`
- `images/jarre-marron.jpg`
- `images/jarre-vert.jpg`
- `images/jarre-vert-ecru.jpg`
- `images/jarre-noir.jpg`
- `images/jarre-bleu.jpg`

Pour les utiliser : déposez le dossier `images/` à côté de `index.html` dans
votre dépôt GitHub Pages, puis dans la colonne **Image** de l'onglet
catalogue, indiquez le chemin correspondant, par exemple :
`https://gmoulard.github.io/operation-jarres/images/jarre-bordeaux.jpg`

Remplacez-les par de vraies photos dès que possible.

## 4. Publier le site

`index.html` est autonome (HTML/CSS/JS en un seul fichier, sans dépendance
serveur). Il peut être hébergé tel quel sur :
- un hébergement statique existant de la Croix-Rouge,
- GitHub Pages / Netlify / Vercel (gratuit),
- ou simplement partagé/ouvert en local pour test.

Aucune étape de build n'est nécessaire.
