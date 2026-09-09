# Opération Jarres

Site statique de présentation et de vente des jarres données par le Printemps au
profit de la **Croix-Rouge française — Délégation territoriale des Yvelines**.

Le site est conçu pour être publié directement avec **GitHub Pages**. Il ne
nécessite ni serveur, ni base de données, ni étape de compilation.

## Version actuelle

- `index.html` contient l'interface complète : HTML, CSS et structure de la page.
- `catalogue.js` charge le catalogue au démarrage et crée les fiches produits.
- `jarres.json` contient les données du catalogue : image, référence, nom,
	dimensions, prix et statut (`Disponible` ou `Vendu`).
- `photo/` contient les photographies référencées dans `jarres.json`.
- Un filtre permet d'afficher ou de masquer les produits selon leur statut.
- Le catalogue est rechargé automatiquement toutes les trois minutes afin de
	prendre en compte les modifications publiées dans le dépôt.

## Publier avec GitHub Pages

1. Pousser le dépôt sur GitHub, avec `index.html` à la racine du dépôt.
2. Ouvrir **Settings > Pages** dans le dépôt GitHub.
3. Dans **Build and deployment**, choisir **Deploy from a branch**.
4. Sélectionner la branche `main` et le dossier `/ (root)`, puis cliquer sur
	 **Save**.
5. Attendre la fin du déploiement. GitHub Pages fournira l'adresse publique du
	 site, généralement sous la forme `https://<utilisateur>.github.io/<depot>/`.

GitHub Pages publie directement les fichiers statiques du dépôt. Chaque
modification envoyée sur la branche publiée déclenche automatiquement une
nouvelle mise en ligne.

## Mettre à jour le catalogue

Modifier uniquement `jarres.json` pour ajouter, retirer ou actualiser une
jarre. Chaque entrée suit cette structure :

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

Les chemins d'image sont relatifs à la racine du dépôt. Après avoir modifié le
JSON et les images nécessaires, valider puis pousser les changements sur
`main` : GitHub Pages republiera le site automatiquement.

## Tester localement

Comme le catalogue est chargé avec `fetch`, il faut utiliser un petit serveur
HTTP plutôt que d'ouvrir `index.html` directement dans le navigateur. Par
exemple :

```bash
python3 -m http.server 8000
```

Puis ouvrir <http://localhost:8000/>.
