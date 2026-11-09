# Photographies

Une vraie photographie prouve que la chose existe ; un objet dessiné dit seulement qu'elle pourrait exister. Ce fichier dit quand la photo mène, d'où elle vient, quelles licences on accepte, comment créditer, combien en mettre, comment cadrer et ce qu'elle coûte. L'ordre de préférence des images est dans `references/idea-and-direction.md` §7 ; les registres sans photo, dans `references/visuals.md`. Plusieurs règles viennent de Taste Skill 2.5.1 (Leonxlnx, MIT) et sont créditées là où elles apparaissent.

## 1. Quand la photo mène

| Sujet | Ce qui mène le premier écran | Photos ailleurs |
| --- | --- | --- |
| Un lieu (café, boutique, maison d'hôtes, atelier, studio avec une porte) | La photo du lieu par le client | Sur plusieurs écrans, chacun avec une photo dominante ou une rangée de 3 ou 4 (§6) |
| Un produit physique | La photo, le détourage ou le rendu du produit par le client | Son usage, ses pièces, là où il vit |
| Logiciel, IA, fintech | La vraie interface (`references/visuals.md` rang 1) | Seulement de vraies personnes ou du vrai matériel, jamais d'ambiance |
| Un jeu | Ses propres visuels : key art, captures en jeu, image de la bande-annonce | Jamais d'images de banque à la place de son monde |
| Un cabinet, une agence | Ses gens et son travail, vraiment photographiés | Chacune liée à une affirmation |
| Mode Opérer | Aucune : les données et l'interface | Seulement le contenu que le produit manipule (produits, avatars) |
| Mode Lire | Le texte | Une figure par idée qu'une photo explique, légendée |
| Mode Expérience | L'œuvre elle-même | L'œuvre, rien autour qui la concurrence |

Une photo ne prend jamais la place d'un effet, d'un dessin décoratif ou d'une boîte vide, et l'inverse : un emplacement sans photo honnête prend un registre de `references/visuals.md`.

## 2. D'où viennent les photos

1. **Celles du client.** Les demander au cadrage (`references/intake.md`). S'il n'y en a pas, le rapport demande une courte séance, adaptée de Taste Skill : ce que voit un visiteur qui arrive (la façade de face, puis la salle depuis l'entrée), l'endroit où le travail se fait (le comptoir ou l'établi, des mains occupées) et ce qui se vend (trois produits ensemble sur une même surface, plus un gros plan). Lumière naturelle seulement, rien d'ajouté à la prise de vue, chaque plan pris à l'horizontale et à la verticale.
2. **Sinon**, dans l'ordre de `references/idea-and-direction.md` §7 : des images générées, signalées comme telles, jamais le produit du client présenté comme réel ; ou des photos de substitution sous licence, photos d'autres personnes qui montrent le monde du sujet (§3, §4).

Outil facultatif : `photos.mjs` de Taste Skill cherche sur Wikimedia Commons et écrit les crédits ; sa bibliothèque mêle aussi des images Unsplash, hors des licences du §3 (`--commons-only`). Chaque résultat reste un candidat à vérifier selon le §3.

## 3. Licences acceptées

Ces quatre seulement, vérifiées sur la page source de l'image elle-même, jamais sur le résultat de recherche ou l'agrégateur.

| Licence | Usage commercial | Ce qu'elle exige |
| --- | --- | --- |
| CC0 | Oui | Rien ; créditer quand même, par courtoisie et pour la traçabilité |
| Domaine public (Public Domain Mark, ou mention « domaine public » d'un musée) | Oui | Rien une fois le statut établi. La Public Domain Mark est une étiquette, pas une licence, et ne garantit pas le domaine public partout : vérifier la juridiction où le site est publié. Nommer l'auteur quand la source le nomme |
| CC BY (4.0 ou antérieure) | Oui | Créditer l'auteur, lier la licence, signaler toute modification |
| CC BY-SA | Oui | Comme CC BY ; une version modifiée se diffuse sous la même licence |

Refusées : NC (non commercial), ND (pas de modification), « tous droits réservés », licence absente, et les licences de plateforme (Unsplash, Pexels).

| Source | Faits vérifiés (9 novembre 2026) |
| --- | --- |
| [Openverse](https://openverse.org) | Moteur qui agrège des métadonnées d'autres sites ; ses [conditions](https://docs.openverse.org/terms_of_service.html) disent qu'il ne vérifie pas le statut des licences et qu'il revient à l'utilisateur de vérifier ses droits. Toujours ouvrir la page d'origine |
| [Wikimedia Commons](https://commons.wikimedia.org/wiki/Commons:Reusing_content_outside_Wikimedia) | Aucune garantie sur le statut ou la licence ; créditer le créateur (champ « Auteur »), pas la personne qui a téléversé ; marques, droit à l'image et vie privée peuvent restreindre l'usage, et l'usage commercial d'une photo de personne peut demander son consentement |
| [Art Institute of Chicago](https://www.artic.edu/open-access/open-access-images) | Seules les œuvres marquées « CC0 Public Domain Designation » avec un bouton de téléchargement ; sans bouton, l'œuvre n'est pas dans le domaine public. Les autorisations de tiers restent à la charge de l'utilisateur. Le musée demande le crédit « Artiste. Titre, date. The Art Institute of Chicago. » |
| [The Met](https://www.metmuseum.org/en/policies/image-resources) | Les images Open Access (icône OA) sont en CC0, usage commercial permis ; les œuvres sous droits n'en font pas partie |

**CC BY-SA en pratique.** Une photo non modifiée placée parmi d'autres contenus forme un recueil, pas une adaptation : la page ne devient pas BY-SA ([Creative Commons](https://creativecommons.org/course/cc-cert-edu/unit-4-using-cc-licenses-and-cc-licensed-works/4-4-remixing-cc-licensed-work/)). Tout recadrage, retouche ou montage compte comme une adaptation au sens de la licence : la photo modifiée est marquée « adaptée » dans les crédits, et le fichier modifié reste sous BY-SA. Préférer CC0 quand le même sujet existe.

Les collections de musées montrent des objets et le passé : cartes anciennes, cartes postales de la rue, un instrument du métier. Elles nourrissent l'inventaire du sujet ; elles ne remplacent jamais le produit.

## 4. Des substituts sans mentir

Une photo de substitution montre le monde autour du client, jamais le client (plancher A2).

- **Jamais présentée comme** le produit, les gens, les locaux ou le lieu du client. Écrire le texte alternatif soi-même, d'après ce que l'image montre (« un vélo cargo chargé de caisses »), pas « notre vélo » ; le titre du fichier nomme le sujet de quelqu'un d'autre.
- **Aucun nom, logo ou badge d'un autre fabricant lisible**, aucune enseigne ni salle reconnaissable d'une autre entreprise : recadrer ou écarter.
- **Aucun visage reconnaissable** à une place qui laisse croire à un employé, un client ou un hôte ; mains, dos et visages hors cadre seulement (Taste Skill).
- **Aucun monument** qui situerait le client là où il n'est pas.
- **Regardée en taille réelle** avant usage : sujet net, sans filigrane, même lumière que le reste de la série.
- **Signalée une fois sur la page**, dans la ligne de crédits (§8), et listée dans le rapport avec la photo du client à prendre à sa place. Taste Skill crédite un substitut dans sa ligne de crédits en pied de page comme toute autre photo, sans légende dessous et sans dire que c'est un substitut ; notre plancher A2 demande que cette ligne le dise, et le plancher ne se lève pas.

## 5. Un produit physique sans photo

Taste Skill montre ce produit par des photos de substitution du même genre d'objet, jamais par un dessin ; dans ses tests, une page de vélo cargo qui ne montrait aucun vélo a obtenu 3 sur 10. `references/visuals.md` classe les registres sans photo d'après nos notes mesurées. L'honnêteté passe avant les données mesurées dans la hiérarchie (`CONTRIBUTING.md`), d'où la règle :

1. **Aux emplacements qui disent « voici le produit »** (hero, section produit, caractéristiques, prix, commande) : jamais la photo de l'objet d'un autre fabricant, qui se lit comme le vélo du client. Dans l'ordre : photo, détourage, vue CAO ou rendu du client ; sinon un registre de `references/visuals.md` (dessin technique, rang 3, ou typographie, rang 4), qui passe le test du sujet sans texte.
2. **Aux emplacements d'usage et de monde** (le trajet de l'école, la rue, la charge transportée) : une photo de substitution du même genre d'objet est permise quand aucun modèle n'est identifiable, recadrée, sans marque, souvent en partie hors champ ; créditée et signalée selon le §4.
3. **Sur une maquette montrée au client**, avant que les photos existent : une substitution peut occuper un emplacement produit si elle porte une étiquette visible sur l'image (« photo de substitution, à remplacer »), rang 6 de `references/visuals.md`. Une maquette ainsi étiquetée ne part jamais en ligne.

Le produit reste visible : une ancre du sujet dans les deux premiers écrans (`references/visuals.md`).

## 6. Combien de photos

| Page | Nombre |
| --- | --- |
| Par écran, tous modes | Une photo dominante, ou une rangée de 3 ou 4 de même taille (Taste Skill) |
| Page de lieu | 8 bonnes photos ou plus pour une page complète ; en dessous, une page courte plutôt qu'une page longue remplie de bouche-trous (Taste Skill la plafonne à 2 700 px de haut à 1 440 px de large) |
| Page produit | Le produit entier dans 3 sections au plus ; ailleurs son usage, ses pièces, les gens avec lui (Taste Skill) |
| Substituts sur une page qui a des photos du client | 1 photo sur 3 au plus (le plafond de Taste Skill pour les images de bibliothèque) |
| Opérer | 0 photo décorative |
| Lire | Seulement là où la photo explique |

Chaque image paraît une fois par page : la redimensionner, la recadrer ou la retourner n'en fait pas une nouvelle, et une suite de trois prises presque pareilles se lit comme une seule répétée. Un fichier ne s'affiche qu'à sa résolution ou en dessous, car l'étirer le rend flou : la largeur rendue à 1x ne dépasse pas `naturalWidth`, et le fichier du hero vise le double de sa largeur rendue.

## 7. Cadrage et direction artistique

- **La série semble prise le même jour par la même personne** : même lumière, même traitement des couleurs, même distance, même ton. Le monochrome n'apparaît que sur une image au plus, et par choix (Taste Skill).
- **Peu de formats** : 3 ou 4 parmi 4:5, 4:3, 1:1 et 3:2 ; un format par rangée, tailles égales dans une rangée.
- **Recadrer sur le sujet** : `object-position` sur le sujet ; un `<picture>` avec un recadrage mobile dès qu'une photo pleine largeur perd son sujet à 390 px.
- **Aucun effet sur une photo** : ni duotone, ni trame, ni grain, ni glitch, ni mode de fusion, ni filtre (Taste Skill), sauf le moment tiré (`references/moments.md`), où La photo se révèle peut filtrer sa photo le temps de son entrée. Des lumières mêlées se corrigent par le recadrage, jamais par un effet.
- **Texte sur une photo** seulement sur une zone calme où le contraste mesure 4,5:1 au moins (3:1 en grand texte), au recadrage bureau comme au recadrage mobile ; sinon à côté ou dessous.
- **Visible dès le premier affichage**, sauf le moment tiré (`references/moments.md` : Chapitres en photos, La photo se révèle), dont l'état fini s'affiche quand même sans script et en mouvement réduit. En dehors, une photo n'attend jamais une apparition au défilement.
- **Coins et cadres** : une seule règle pour toute la série, écrite dans `DESIGN.md`.

## 8. Crédits

- **Une ligne dans le pied de page** qui mène à la liste des crédits, jamais un lien par photo (Taste Skill a relevé que 18 à 20 liens de crédit se lisent comme un « mur de crédits »). Environ 110 caractères au plus. Exemple : « Certaines photos sont illustratives, elles ne montrent pas [client] · Crédits photo ».
- **La liste** (page ou section reliée à cette ligne) : par photo, l'auteur, le lien vers la page source, la licence avec son lien, et « adaptée » si elle a été modifiée.
- **Pas de légende** sous les photos en Persuader ; en Lire, une légende fait partie du contenu et peut porter le crédit ; en Expérience, chaque œuvre garde sa légende (titre, année, rôle), comme dans `references/defaults-by-mode.md` et `references/copy.md` §10.

## 9. Dans le rapport

Lister chaque photo : fichier, emplacement, URL source, auteur, licence et version, adaptée ou non, client ou substitut. Pour chaque substitut, la photo du client à prendre à sa place. Sans photo du client, le dire clairement et joindre la liste de prises du §2.

## 10. Vraies icônes des vrais outils

Quand la page nomme un outil avec lequel le produit fonctionne vraiment, montrer la vraie icône de cet outil dans ses couleurs ; jamais un logo redessiné, jamais un sosie, jamais une lettre dans un rond là où une vraie icône existe (Taste Skill). Sources :

- [gilbarbara/logos](https://github.com/gilbarbara/logos) : logos de marques en couleur, CC0 ; épingler le commit utilisé.
- [Simple Icons](https://github.com/simple-icons/simple-icons) : logos monochromes, CC0 ; lire son avertissement juridique avant usage.

Une marque reste à son propriétaire : on l'utilise seulement pour nommer l'outil, jamais pour suggérer un partenariat ; en pied de page, « Les noms et logos de produits appartiennent à leurs propriétaires ». Logos de clients seulement avec autorisation (plancher A2, `references/intake.md`). Les pictogrammes d'interface viennent du jeu d'icônes unique de `DESIGN.md`.

## 11. Poids et performance

Suivre `references/performance.md`. En plus :

- AVIF ou WebP, `srcset` et `sizes` à la largeur affichée, `width` et `height` déclarés.
- Le hero chargé tout de suite avec `fetchpriority="high"` ; toutes les autres en `loading="lazy"` et `decoding="async"`.
- Plafonds indicatifs par fichier : 400 Ko pour le hero, 250 Ko pour toute autre photo (Taste Skill) ; au-delà, compresser ou retirer la plus grande taille.

## Jamais

- Un substitut présenté comme le produit, les gens, les locaux ou le lieu du client.
- Une licence non vérifiée sur la page source, ou hors du §3.
- Le nom ou le logo lisible d'un autre fabricant ; un logo de marque redessiné.
- Une photo agrandie au-delà de sa taille, la même image deux fois.
- Une image d'ambiance à la place du sujet : un ciel, du brouillard, des ombres de plantes, une forêt pour dire « liberté ».
- Un effet, un dégradé ou un motif présenté comme une photo.
