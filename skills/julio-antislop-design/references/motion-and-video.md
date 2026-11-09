# Mouvement, effets et vidéo en code

## 1. Mouvement de page

Construire la page sans mouvement d'abord : une page qui a besoin d'animation pour paraître finie n'est pas finie. Puis, selon le mode (`defaults-by-mode.md`) :

- **Mouvement signature** : un, bien fait, ou deux sur une page longue, comptés comme dans `references/moments.md` §1. En mode Persuader, une démo produit ou un effet tiré de la matière peut être l'un d'eux.
- **Entrées** : le hero entre une fois au chargement ; sa séquence et son minutage ne figurent que dans `references/moments.md` §2. Sous le hero, rien n'entre au défilement sauf le moment tiré. Le contenu est visible par défaut : si le script échoue, rien ne reste caché.
- **Feedback sur chaque contrôle** : survol, pression, focus. Une pression = légère réduction d'échelle (0,95 à 0,98). Retour visuel en moins de 100 ms.
- **Durées et courbes** : une courbe d'easing partagée (décélération à l'arrivée, accélération au départ), peu de durées en tokens. Une sortie dure environ 60 à 70 % de l'entrée.
- **Interruptible** : une nouvelle action annule l'animation en cours et fixe l'état final ; jamais d'interaction bloquée pendant une animation.
- **Propriétés** : `transform` et `opacity`. `clip-path` et masque seulement pour le moment signature, s'il tient 60 images par seconde sur un mobile moyen. Jamais `transition: all`, jamais `width`, `height`, `top`, `left`, jamais de flou animé sur une grande surface.
- **Mouvement réduit** : avec `prefers-reduced-motion: reduce`, garder le contenu, retirer le déplacement.

À supprimer : le même fondu montant sur chaque bloc, une douzaine d'entrées décalées dans le hero, le survol qui soulève chaque carte, l'easing à rebond, les boucles sans sens, la parallaxe gratuite, `animate-pulse` sur ce qui n'est pas en direct.

## 2. Partir d'un composant éprouvé

Avant d'écrire une animation, chercher un composant dans les bibliothèques de `resources.md`, en commençant par celles sous licence MIT. Puis :

1. Le confronter à `tells.md` et au plancher : beaucoup de composants spectaculaires contiennent eux-mêmes des tics (lueurs, particules, étincelles, texte qui scintille).
2. Le restyler entièrement avec les tokens du projet : aucune trace du style d'origine.
3. Le retenir parce qu'il porte l'idée ou la chose vivante, jamais parce qu'il impressionne.
4. Ne jamais copier son code dans ce skill : il s'installe dans le projet, par la CLI ou le registre de la bibliothèque.

## 3. Effets GPU et shaders

1. **Budget par mode** : aucun en Opérer et Lire ; un seul, comme moment signature, en Persuader ; plusieurs possibles en Expérience.
2. **L'effet sort du sujet** : un fond fluide pour une marque d'eau ou de textile, oui ; un dégradé maillé « parce que ça fait premium », non.
3. **Repli fixe obligatoire** si WebGL ou l'API manque, en mouvement réduit, ou sur appareil lent.
4. **Performance mesurée** : 60 images par seconde sur mobile moyen, pause hors écran, poids compté dans le budget.
5. **Lisibilité** : aucun texte sur un effet en mouvement sans voile neutre et contraste vérifié.

## 4. Vidéo en code

Le modèle ne produit pas de vidéo : il écrit le code qui dessine chaque image (Canvas, p5.js, Three.js, Remotion, HyperFrames, Manim), puis un navigateur sans interface capture les images une à une. Il est bon en motion design, animation dessinée ou au trait, vulgarisation, films de lancement produit, clips à paroles synchronisées ; il est mauvais en images réalistes de personnes.

Workflow :

1. **Rassembler les entrées** : captures et textes réels du produit, musique, direction plan par plan.
2. **Écrire une bible de style et un traitement plan par plan** avant le code.
3. **Storyboarder**, puis construire plan par plan.
4. **Faire de chaque image une fonction du temps** : l'aperçu et le rendu final sont identiques, et on peut sauter à n'importe quel instant.
5. **Caler sur la musique par analyse** : grille des temps forts mesurée sur le fichier audio, démarrage sur un temps fort, chaque son placé sur son pic mesuré.
6. **Se relire par planches contact** (grilles d'images clés) avant le rendu final.
7. **Rendre en dernier**, au format final.

Règles :

- Le plancher et les défauts s'appliquent à chaque image : tokens, typo, interdits ; un tic en mouvement reste un tic.
- Du vrai matériau : captures, textes et données du produit ; jamais de fonctionnalité ni de chiffre inventés à l'écran.
- La musique n'est jamais libre par défaut : musique du client, musique sous licence vérifiée, ou son synthétisé en code.
- Les exemples publics s'étudient, ils ne se recopient pas : copier le prompt d'une vidéo virale reproduit son look.
- Une vidéo intégrée à une page compte comme son mouvement signature, a une image d'affiche, se met en pause et respecte le mouvement réduit.
- Vérifier la licence de l'outil de rendu avant un usage commercial (Remotion demande une licence entreprise au-delà de 3 salariés).
