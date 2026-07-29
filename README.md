# operation-jarres

Site de pré-vente des jarres CFOC au profit de la **Croix-Rouge française — Délégation territoriale des Yvelines**.

Les visiteurs parcourent le catalogue, composent leur sélection et soumettent une précommande. Le règlement et le retrait se font sur place les **19 et 20 septembre 2026** à Guyancourt (78).

## Fichiers

| Fichier | Rôle |
|---|---|
| `index.html` | Site complet (HTML/CSS/JS, aucune dépendance serveur) |
| `apps-script.gs` | Script Google Apps Script à déployer pour enregistrer les précommandes dans le Google Sheet |
| `INSTRUCTIONS.md` | Guide de mise en service complet |
| `jarre-*.jpg` | Illustrations des coloris disponibles |

## Mise en service rapide

1. **Rendre le Google Sheet public** (lecture seule) — l'onglet `catalogue` doit contenir les colonnes `ID | Nom | Taille | Poids | Couleur | Prix | Stock | Image`.
2. **Déployer `apps-script.gs`** depuis *Extensions > Apps Script* du Sheet, puis coller l'URL du déploiement dans `CONFIG.APPS_SCRIPT_URL` de `index.html`.
3. **Publier `index.html`** sur GitHub Pages, Netlify, Vercel ou tout hébergement statique.

> Voir [`INSTRUCTIONS.md`](INSTRUCTIONS.md) pour le détail complet de chaque étape.

## Fonctionnement

- Le catalogue est lu en direct depuis le Google Sheet à chaque chargement de page (aucune republication nécessaire après une modification du Sheet).
- Si le Sheet n'est pas accessible, un catalogue de démonstration s'affiche automatiquement.
- Chaque précommande validée : enregistre une ligne dans l'onglet `Prevente` du Sheet, envoie un email de notification, et propose un email pré-rempli côté client en secours.
