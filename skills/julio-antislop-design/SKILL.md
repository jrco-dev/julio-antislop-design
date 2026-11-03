---
name: julio-antislop-design
license: MIT
description: "Conçoit, construit, refond ou relit des landing pages, sites, interfaces d'app, dashboards, docs et portfolios qui ont l'air conçus et non générés : une idée tirée du sujet, des références réelles, un plancher d'accessibilité, d'honnêteté et de performance, et aucun tic visuel d'IA. Utiliser ce skill dès qu'une tâche change l'apparence, la mise en page, la typographie, la couleur, le mouvement ou le ressenti d'une interface web, même si l'utilisateur ne dit pas « design » : créer ou refaire une page, rendre un écran moins générique, « plus pro », « premium », « moins IA », relire un design, choisir une police ou une palette, ajouter des animations, faire une vidéo produit en code. Also use for English requests such as build a landing page, redesign this screen, make it look less AI-generated, or review this UI."
---

# julio-antislop-design

Une page générée par un modèle ressemble à la moyenne de toutes les pages qu'il a vues : titre centré, petit label au-dessus, trois cartes à icône, un dégradé, Inter. Rien n'y est faux, et rien n'y a été décidé. Les études le confirment : les modèles remplissent le brief, mais deux briefs différents donnent deux pages presque identiques, et un meilleur prompt ne suffit pas à corriger ça.

Ce skill remplace les défauts par des décisions, de quatre façons :

1. **L'idée vient du sujet**, pas de la catégorie : un inventaire de ce qui n'appartient qu'à ce client.
2. **La direction vient de références réelles et d'un choix forcé hors de la moyenne**, pas de la mémoire du modèle.
3. **Un plancher non négociable** (accessibilité, honnêteté, traçabilité, performance) et des **défauts anti-slop qui dépendent du mode**.
4. **On regarde ce qu'on a fait** : contrôle automatique, captures, critique par un regard neuf.

Retirer les ornements ne suffit pas : une page vidée de ses tics sans rien à la place est vide, et c'est un tic aussi. Le vide se comble avec l'idée, l'échelle, le contenu complet et de vraies images.

## 1. Choisir le mode

Toute règle dépend du mode. Il se choisit selon ce que le visiteur doit réussir sur cette surface, pas selon le produit : la landing page d'un outil reste en mode Persuader, la documentation d'une marque de mode reste en mode Lire.

| Mode | Le visiteur réussit quand… | Surfaces | Ambition |
| --- | --- | --- | --- |
| Persuader | il décide et agit | Landing, marketing, campagne, tarifs | Une idée, un point de vue, de vraies images |
| Opérer | il termine une tâche | App, dashboard, éditeur, admin, réglages | Précision et retenue ; les conventions connues ont leur place |
| Lire | il comprend | Docs, articles, guides, aide, changelog | La structure sert la compréhension, puis le confort |
| Expérience | il est dans l'œuvre | Portfolio, galerie, vitrine | L'œuvre mène, l'interface s'efface |

La **refonte** n'est pas un mode mais une action, valable dans tous les modes : on garde ce que fait le produit, ses contenus et l'ordre de ses sections. Elle suit sa propre variante du processus (`references/redesign.md`).

Quand une demande mélange deux surfaces (une landing et le dashboard derrière), traiter chacune dans son mode, avec une palette et une typographie partagées.

## 2. Le processus

Les étapes 1 à 8 se font avant d'écrire du code et décident de la qualité. Ne pas les sauter, même sur une petite demande : c'est précisément quand on va vite que la moyenne revient.

1. **Lire le projet et choisir le mode.** Stack, `DESIGN.md` et `PRODUCT.md` s'ils existent (ils priment sur les défauts du skill, jamais sur le plancher absolu), marque existante, et surtout les images réellement disponibles. Ne pas planifier autour d'images qu'on n'a pas.
2. **Cadrer avec l'utilisateur avant de créer.** Un modèle qui manque d'information comble les trous avec la moyenne. Pour toute nouvelle page, tout nouvel écran ou toute refonte, suivre `references/intake.md` : un premier tour de questions sur le projet (surface et mode, audience et scène d'usage, action visée, ton extrême), un second sur la matière (marque, images, preuves avec leur source, textes, références aimées et détestées, contraintes et confidentialité), avec l'outil de questions à choix quand il existe et l'option recommandée en premier. Sans police fournie, proposer 3 paires tirées du sujet et de `references/font-catalog.md` au lieu de choisir en silence. Ne jamais demander ce que le projet dit déjà. Puis écrire la fiche brief, qui commence par « Je lis ce projet comme : … », et attendre une validation avant de construire. Deux tours de questions au plus ; ce qui manque devient une hypothèse écrite dans la fiche. Sans personne pour répondre, ou si l'utilisateur dit « vas-y », décider et annoncer les hypothèses. Le cadrage oriente les défauts, jamais le plancher absolu. (En refonte, s'y ajoute la validation de la direction, voir `references/redesign.md`.)
3. **Inventorier le sujet.** 8 à 12 éléments qui n'appartiennent qu'à ce client : son nom et ce qu'il veut dire, son lieu, ses matières, ses rituels et horaires, la contrainte avec laquelle il vit, les objets imprimés de son monde. Puis trois listes : ce qui est réel, ce qui est montrable en image et d'où, ce qui manque. Ce qui manque reste absent. Consigner le tout dans `PRODUCT.md` à la racine du projet, créé depuis `templates/PRODUCT.md` s'il n'existe pas. Détail : `references/idea-and-direction.md`.
4. **Écrire l'argument.** Une affirmation et sa preuve par section. Une section sans affirmation est supprimée. C'est ce qui casse l'ordre type hero, logos, trois features, témoignage, tarifs, CTA.
5. **Consulter des références réelles.** Au moins 3, venant d'au moins 2 sites de `references/resources.md`, chacune notée avec son URL et la qualité empruntée (un rythme, une proportion, un contraste), jamais une page entière. Sans accès web, le dire et s'appuyer sur ce skill.
6. **Choisir la direction hors de la moyenne.** Raisonner, puis écrire 5 directions possibles avec la probabilité de les produire par défaut. Écarter les 2 plus probables. Garder celle qui porte un élément de l'inventaire et diffère des 3 dernières du journal sur au moins 3 axes (journal : `direction-log.md` à la racine du projet ou dans un dossier partagé par l'équipe, créé depuis `templates/direction-log.md` s'il n'existe pas) : structure, thème, police, palette, hero, signature. Rejeter toute direction qui se contente de cocher les interdits sans rien affirmer.
7. **Formuler l'idée.** « Sur cette page, **[une chose propre au sujet]** devient **[le procédé de composition]**. » Test du concurrent : si la phrase marche encore avec le concurrent le plus proche, elle appartient à la catégorie, on recommence. Définir la **chose vivante** : une seule interaction tirée de l'idée, avec le vrai contenu, utilisable au pouce, avec repli sans script. Créer `DESIGN.md` depuis `templates/DESIGN.md` s'il n'existe pas ; s'il existe, le compléter sans écraser ce qui y est déjà décidé.
8. **Écrire tous les textes avant le code.** Titres de 2 lignes maximum à toute largeur, vérifié à 320 px (environ 5 mots, 32 caractères visés ; sinon couper des mots avant de réduire la taille), une phrase d'appui juste dessous, une action principale nommée par ce qu'elle fait, contenu complet de chaque section attendue, preuve réelle uniquement.
9. **Construire sans mouvement.** Tokens d'abord (couleurs, polices, échelle typographique, échelle d'espacement, tokens de rôle), puis le hero sur desktop et mobile, puis chaque section avec une composition différente de sa voisine, puis les images (ordre de préférence dans `references/idea-and-direction.md`), puis la chose vivante. Règles du mode : `references/defaults-by-mode.md`, plus `references/persuade.md` ou `references/operate.md`.
10. **Contrôler automatiquement.** `node scripts/check-tokens.mjs <fichier ou dossier>` (tailles, espacements et polices hors tokens, polices réflexes, échelle trop chargée), détecteur Impeccable sur le code et sur l'URL rendue (`npx impeccable detect <fichier>` puis `npx impeccable detect http://localhost:<port>`), inspection et captures à 390, 768, 1440 et 1920 px (inspecteur de Taste Skill, ou Playwright à défaut), mesures de performance selon `references/performance.md`. Zéro échec non justifié : un défaut levé avec sa raison est marqué comme ignoré dans le détecteur, pas laissé en échec. Si un outil manque, le dire dans le rapport.
11. **Faire juger par un regard neuf.** Un sous-agent en contexte vierge regarde les captures et note la page avec la grille de `references/critique.md`. Corriger les 3 pires problèmes, réinspecter. Trois tours au plus. Sans sous-agent, relire les captures comme un designer exigeant qui découvre la page.
12. **Ajouter le mouvement, puis livrer.** Partir d'un composant vérifié de `references/resources.md`, dans le budget du mode (`references/motion-and-video.md`), réinspecter, puis livrer avec le rapport (section 6).

Pour un composant isolé (un bouton, une carte, un formulaire), garder les étapes 1, 2 (une ou deux questions seulement si un point bloque), 9, 10 et 12, et appliquer le plancher et les défauts du mode. En refonte ou pour un composant isolé, les points de livraison liés aux étapes sautées (références, directions écartées, journal) ne s'appliquent pas ; le rapport dit lesquels.

## 3. Plancher absolu

Ces règles valent dans tous les modes et ne se lèvent jamais : ni par goût, ni par le brief, ni par une ressource externe.

- **A1 Accessibilité.** Contraste du texte 4,5:1 (3:1 pour le grand texte, les icônes porteuses de sens et les bordures de contrôles), selon WCAG 2.2 AA. Focus visible sur chaque contrôle. Tout utilisable au clavier dans l'ordre de lecture. Cibles de 24 px minimum, 44 px visés sur mobile. Un `h1` clair, des titres sans saut de niveau. Texte alternatif sur les images utiles. Repli `prefers-reduced-motion`. Contenu visible sans JavaScript en Persuader, Lire et Expérience ; en Opérer, un état de chargement et un message clair si le script échoue.
- **A2 Honnêteté.** Ne rien inventer : ni chiffre, ni citation, ni avis, ni logo, ni client, ni fonctionnalité. Les détails d'exemple (noms de plats, de pièces, de projets) sont permis pour voir la page à pleine densité, mais signalés et listés pour validation, et leurs totaux tombent juste. Chaque contrôle demandé par le brief est présent et utilisable.
- **A3 Traçabilité.** Chaque police, composant, image et référence de mise en page a une source réelle notée. La police existe à ce nom exact. Le composant s'installe réellement. La licence couvre l'usage. Un modèle invente volontiers des noms de polices plausibles et des composants imaginaires : vérifier avant d'utiliser.
- **A4 Confidentialité.** Aucune donnée, maquette ou capture d'un client n'est envoyée à un service tiers (générateur hébergé, serveur MCP distant) sans son accord écrit.
- **A5 Performance.** Seuils Core Web Vitals : LCP ≤ 2,5 s, INP ≤ 200 ms, CLS ≤ 0,1. En laboratoire, sur mobile en réseau lent simulé, on mesure LCP et CLS, et le TBT à la place de l'INP ; sur données réelles, les seuils s'entendent au 75e centile. Si le budget saute, l'effet, la vidéo ou la 3D sont remplacés par une image fixe. Détail : `references/performance.md`.
- **A6 Technique.** Couleurs, polices, tailles de texte et espacements uniquement via des tokens déclarés : une échelle typographique et une échelle d'espacement, aucune valeur brute dans `font-size`, `margin`, `padding`, `gap` ou `inset` (vérifié par `scripts/check-tokens.mjs`). Jamais `transition: all`. Jamais d'animation de `width`, `height`, `top` ou `left`. Aucun défilement horizontal de 320 à 1920 px (`overflow-x: clip` sur `html` et `body`, jamais `100vw`). Hero en `dvh` ou `svh`, jamais en `vh`. Conteneur plafonné et centré.
- **A7 Brief.** Une consigne explicite du client l'emporte sur tous les défauts levables ; la noter dans le rapport. Elle ne l'emporte jamais sur A1 à A6.

## 4. Défauts levables

Ce sont les règles anti-slop. Elles s'appliquent par défaut, dépendent du mode, et chacune peut se lever avec une raison écrite liée à l'idée ou au brief. Le tableau complet est dans `references/defaults-by-mode.md`, les tics datés dans `references/tells.md`. L'essentiel :

- **Jamais d'eyebrow** (petit label au-dessus d'un titre), de label en capitales espacées, de numérotation 01/02/03 sans vraie séquence. C'est le défaut le plus fort : il ne se lève que si le brief l'exige.
- **Jamais de dégradé violet ou indigo, de texte en dégradé, de lueur, de verre décoratif, de carte dans une carte, d'emoji comme icône, de rangée de cartes identiques icône-titre-texte.**
- **Aucune police réflexe** (Inter, Roboto, Poppins, Space Grotesk, DM Sans, Manrope, Archivo, Satoshi, Instrument Serif, Fraunces… liste datée dans `references/typography.md`) sans raison de marque. La police se trouve dans le monde du sujet (ses enseignes, étiquettes, imprimés), puis dans un catalogue filtré par catégorie, jamais par popularité ; sa raison est écrite et passe le test du concurrent. Une ou deux familles.
- **Une échelle typographique modulaire** (ratio choisi selon le mode), cinq crans utilisés au plus, qui sautent des crans ; **une échelle d'espacement** à trois niveaux (intérieur, groupe, section), chacun au moins le double du précédent. Rien en dehors : `references/typography.md`, `references/spacing.md`.
- **Un fond, une encre, un accent** ; l'accent environ 4 fois au plus par écran, sinon il ne désigne plus rien.
- **Pas le « correctif » devenu cliché** : fond crème + serif contrastée + accent terracotta n'est pas une direction, c'est la troisième vague de slop.
- Filets, rayons, monospace, ombres, quantité de texte et mouvement : **la règle change avec le mode**. Un filet discret est normal dans un dashboard et un tic sur une landing.

**Lever un défaut** : une ligne dans le rapport, avec le défaut et la raison. Au-delà de 3 défauts levés sur un même projet, c'est un style maison : l'écrire dans `DESIGN.md`.

## 5. Quand lire quoi

| Situation | Fichier |
| --- | --- |
| Avant toute création ou refonte : questions, matière, fiche brief | `references/intake.md` |
| Toute construction ou relecture | `references/defaults-by-mode.md` |
| Inventaire, idée, direction, images, références | `references/idea-and-direction.md` |
| Landing page, hero, sections, illustration produit, bento | `references/persuade.md` |
| App, dashboard, graphiques, formulaires, cartes de stats | `references/operate.md` |
| Docs, articles, portfolio, galerie | `references/read-and-experience.md` |
| Refonte d'un existant | `references/redesign.md` |
| Construire une palette | `references/color.md` |
| Choisir une police, construire l'échelle typographique | `references/typography.md` |
| Proposer des polices quand l'utilisateur n'en fournit pas | `references/font-catalog.md` |
| Construire l'échelle d'espacement et le rythme | `references/spacing.md` |
| Animation, effets GPU, vidéo en code | `references/motion-and-video.md` |
| Budget de performance par mode | `references/performance.md` |
| Vérifier qu'un procédé est un tic d'IA | `references/tells.md` |
| Principes d'UX et leur application | `references/ux-principles.md` |
| Sites de référence, bibliothèques, outils, licences | `references/resources.md` |
| Notation et critique par un regard neuf | `references/critique.md` |

Ne charger que ce dont la tâche a besoin.

## 6. Livraison

Ne pas livrer tant qu'une case reste vide :

- [ ] Plancher A1 à A7 respecté.
- [ ] `check-tokens.mjs` à zéro erreur : aucune taille, aucun espacement, aucune police hors tokens ; police d'affichage hors de la liste réflexe, ou levée avec sa raison de marque.
- [ ] Détecteur à zéro échec sur le code et l'URL rendue ; inspection à 390, 768, 1440 et 1920 px ; chaque capture ouverte après la dernière modification.
- [ ] Performance sous les seuils A5, avec les dépenses permises par le mode.
- [ ] Un inconnu qui lit le premier écran 5 secondes dit ce que c'est et quoi faire.
- [ ] Test de l'étranger : la page n'aurait pas pu sortir du même agent sans ce skill. Test du concurrent passé.
- [ ] Chaque section a un titre ; marges extérieures égales ; aucune zone vide de plus d'une demi-hauteur d'écran.
- [ ] Une seule action principale, la même partout où elle se répète, sans action concurrente au même niveau ; l'accent environ 4 fois au plus par écran.
- [ ] Surfaces du navigateur thématisées (sélection, barres de défilement, focus, soulignement) ; clair ou sombre choisi selon la scène d'usage, pas la catégorie.
- [ ] Chaque défaut levé a sa raison écrite.
- [ ] Direction ajoutée au journal.

Le rapport, court, dans cet ordre :

1. Lecture du brief et mode.
2. Direction retenue, directions écartées avec leur probabilité, idée, chose vivante.
3. Références consultées : URL et qualité empruntée.
4. Défauts levés et leur raison ; consignes du brief qui ont primé.
5. Résultats : notes de la critique, détecteur, inspection, Core Web Vitals.
6. Crédits et licences : polices (avec la raison du choix tirée du sujet), composants, images, vidéos, sons.
7. Contenu d'exemple à faire valider et emplacements à remplir (taille et contenu attendu).
8. Contrôles non exécutés, nommés comme tels. Ne jamais déclarer un contrôle qui n'a pas tourné.
