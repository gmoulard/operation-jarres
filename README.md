# Opération Jarres

Site statique de présentation et de vente des jarres offertes par le Printemps au
profit de la **Croix-Rouge française — Délégation territoriale des Yvelines**.

Le projet est conçu pour être publié directement sur **GitHub Pages**. Il ne
nécessite ni serveur applicatif, ni base de données, ni étape de build.

## Présentation

Cette opération propose une sélection de jarres en grès et porcelaine, avec un
catalogue mis à jour facilement depuis un simple fichier JSON.

Le site affiche :

- le catalogue des jarres disponibles ou vendues ;
- les informations pratiques de retrait ;
- un filtre par statut (`Disponible` / `Vendu`) ;
- une actualisation automatique du catalogue toutes les 3 minutes.

## Structure du dépôt

- `index.html` : structure HTML de la page et contenu de la vente ;
- `styles.css` : styles du site ;
- `catalogue.js` : chargement du catalogue, affichage des fiches et filtres ;
- `jarres.json` : données du catalogue ;
- `photo/` : images des jarres ;
- `README.md` : documentation du projet.

## Publication sur GitHub Pages

1. Pousser le dépôt GitHub avec `index.html` à la racine du dépôt.
2. Ouvrir les paramètres du dépôt : **Settings > Pages**.
3. Dans **Build and deployment**, choisir **Deploy from a branch**.
4. Sélectionner la branche `main` puis le dossier `/ (root)`.
5. Cliquer sur **Save** et attendre la publication.

Le site sera alors accessible à l’adresse de type :
`https://<utilisateur>.github.io/<nom-du-depot>/`

Chaque modification poussée sur la branche publiée est déployée automatiquement.

## Mettre à jour le catalogue

Modifier uniquement le fichier `jarres.json` pour ajouter, retirer ou actualiser
une jarre. Chaque entrée doit suivre ce format :

```json
{
  "image": "photo/DT01.jpeg",
  "ref": "Référence CFOC · dt01",
  "nom": "Jarre CFOC Celadon",
  "dimensions": "H65 × L50 cm",
  "prix": "190 €",
  "statut": "Disponible"
}
```

Règles importantes :

- `image` doit être un chemin valide relatif au dépôt ;
- `statut` doit être exactement `Disponible` ou `Vendu` ;
- `ref`, `nom`, `dimensions` et `prix` peuvent être personnalisés selon le
  produit ;
- les photos doivent être présentes dans le dossier `photo/` ou dans un autre
  dossier référencé correctement.

Après modification du JSON, valider puis pousser sur `main` : le site GitHub
Pages se mettra automatiquement à jour.

## Tester localement

Comme le catalogue est chargé avec `fetch`, il faut ouvrir le site via un petit
serveur HTTP local plutôt que directement dans le navigateur.

Exemple :

```bash
python3 -m http.server 8000
```

Puis ouvrir : http://localhost:8000/

## Informations pratiques

- Vente et retrait : **samedi 26 septembre 2026 de 10h à 15h**
- Lieu : **Croix-Rouge française — DT Yvelines**, 2 rue Galilée, 78280 Guyancourt
- Réservation : envoyer un email avec la référence et le prix de la jarre
  souhaitée à **guillaume.moulard@croix-rouge.fr**
- Retrait : sur place, avec l’email de confirmation

## Notes

Le site est entièrement statique et reste facile à maintenir. La mise à jour du
catalogue se fait sans intervention technique, uniquement via le fichier JSON.
