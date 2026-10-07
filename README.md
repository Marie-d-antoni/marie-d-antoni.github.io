# Site de Marie d’Antoni, céramiste

Site vitrine de Marie d’Antoni, céramiste. C’est un site **statique** (HTML, CSS et un peu de JavaScript), sans framework, sans base de données et sans outil de construction : chaque page est un fichier que l’on peut ouvrir et modifier directement.

- Publication : **GitHub Pages**, depuis la branche `main`, à la racine du dépôt.
- Adresse : **https://marie-d-antoni.github.io/** (organisation GitHub `Marie-d-antoni`, dépôt `marie-d-antoni.github.io`).
- Langue : français.

## Les pages

| Fichier | Page |
|---|---|
| `index.html` | Accueil : nom, accroche, trois blocs vers les autres pages |
| `presentation.html` | Présentation : qui est Marie, son travail, l’atelier |
| `rendez-vous.html` | Rendez-vous : types de rendez-vous, déroulé, coordonnées |
| `boutique.html` | Boutique : grille des pièces (prix à venir, pas de paiement en ligne) |
| `mentions-legales.html` | Mentions légales (liées dans le pied de page) |
| `404.html` | Page affichée quand une adresse n’existe pas |

## Où modifier quoi

- **Textes** : directement dans chaque fichier `.html`.
- **Informations manquantes** : elles sont marquées `[à compléter]` (visible sur le site, sur fond légèrement teinté) ou par un commentaire `<!-- À COMPLÉTER -->` dans le code. Pour toutes les retrouver :
  ```
  grep -n "à compléter\|À COMPLÉTER\|PHOTO À VENIR" *.html
  ```
- **Menu et pied de page** : ils sont répétés dans chaque page. Une modification du menu ou du pied de page se fait dans les 6 fichiers `.html`.
- **Couleurs, polices, espacements** : en haut de `css/style.css`, dans le bloc `:root`.
- **Menu mobile et animations** : `js/main.js`.
- **Bouton « Prendre rendez-vous »** (page `rendez-vous.html`) : il descend pour l’instant vers les coordonnées (`href="#coordonnees"`). On remplacera ce lien par l’outil de réservation de Marie ou par un `mailto:` quand on le connaîtra.

## Photos

Les photos vont dans `img/`. Pour l’instant, chaque photo est remplacée par un emplacement provisoire « Photo à venir » :

```html
<div class="cadre cadre--4x5 ton-terre">
  <span class="a-venir"><img src="img/formes/vase.svg" alt="">Photo à venir</span>
</div>
```

Pour mettre une vraie photo, on garde le cadre et on remplace la ligne `<span class="a-venir">…</span>` par :

```html
<img src="img/accueil-1.jpg" alt="Description courte de la photo">
```

Règles :
- la photo doit avoir **le même format que son cadre** (`cadre--4x5` = portrait 4:5, `cadre--4x3` = paysage 4:3, `cadre--3x2` = paysage 3:2), sinon elle paraît coupée ;
- 1 600 px maximum de côté, JPEG qualité 80 à 85, moins de 350 Ko ;
- une photo remplacée prend un nouveau nom (`-2`, `-3`…), sinon les navigateurs gardent l’ancienne en mémoire.

Les dessins de `img/formes/` (bol, tasse, vase…) servent seulement aux emplacements provisoires.

## Cache

Après une modification de `css/style.css` ou de `js/main.js`, augmenter le numéro `?v=N` dans **toutes** les pages (`style.css?v=1` devient `style.css?v=2`). Si un changement ne se voit pas, recharger en forçant : Cmd+Maj+R (Mac) ou Ctrl+F5 (PC).

## Voir le site sur son ordinateur

Dans le dossier du site :

```
python3 -m http.server 8001
```

puis ouvrir http://localhost:8001/ dans le navigateur. (N’importe quel port libre convient.)

## Mettre en ligne

Un commit par modification, puis `git push` sur la branche `main`. GitHub Pages met le site à jour en une à deux minutes.

## Liens et adresse du site

- Tous les liens sont **relatifs** (`presentation.html`, `css/style.css`…), jamais `/presentation.html` : le site marche à la racine comme dans un sous-dossier, et le nom du dossier local n’a pas d’importance.
- L’adresse complète du site n’apparaît que dans les balises de partage `og:url` en haut de chaque page (et dans ce fichier). Si l’adresse change (nom de domaine, par exemple), il suffit de modifier ces lignes et d’ajouter un fichier `CNAME`.
- Polices : EB Garamond (titres) et Karla (texte), chargées depuis Google Fonts.
