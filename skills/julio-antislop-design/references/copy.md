# Textes : les mots de la page

Le texte trahit une page générée avant la couleur : on lit le titre d'abord, et un modèle écrit tous les clients d'une même voix, avec les mêmes procédés. La cause, selon Taste Skill, est le manque de faits ; le remède, ce sont des faits et des décisions, jamais des synonymes. Un mot creux remplacé par son synonyme est le tic suivant.

Portée : chaque règle vaut dans tous les modes sauf mention **(Persuader)** ; le §10 dit ce qui change ailleurs. Tics de texte datés : `tells.md` (Texte). Appliqué à l'étape 8 de `process.md`.

## 1. La fiche des faits, avant la première phrase

Depuis le brief, `PRODUCT.md`, le site existant et les messages du client, mot pour mot.

| Champ | Contenu | Va dans |
| --- | --- | --- |
| Ce que c'est | Une phrase, sans adjectif | h1, phrase d'appui |
| Pour qui, et pour qui pas | L'acheteur idéal ; qui devrait aller ailleurs | h1 ou phrase, une ligne de FAQ |
| Ce qu'ils font aujourd'hui à la place | Un tableur, le concurrent, rien | La ligne du problème |
| La vraie différence | Ce qui est vrai ici et pas ailleurs, avec sa preuve | Titres qui affirment |
| Faits durs | Prix, lieu, date, nombre, chacun avec sa source | Premier écran, phrases |
| Mots des clients | Tournures d'avis, d'e-mails, de tickets | Ligne du problème, titres |
| Une limite | Ce que ça ne fait pas, pour qui ce n'est pas fait | Un aveu par page |
| L'action | La transaction unique et ses conditions | Boutons, la clôture |

- **Un champ vide reste vide** : sa section rétrécit ou disparaît, et le rapport liste ce que le client doit fournir (A2). Les détails inventés (un numéro de lot, une minute précise, un pourcentage jamais mesuré) sont le tic actuel.
- **Un fait manquant dont la page a besoin** (un prix, les horaires) : proposer une valeur à la personne (`intake.md`, « Rythme »). Gardée sans confirmation, c'est du contenu d'exemple sous A2 : marqué dans le balisage, listé dans le rapport, signalé une seule fois sur la page. Les horaires et prix « supposés » que Taste admet pour un commerce local reçoivent ce traitement, rien de plus.
- **Une limite ou un ennemi** (une habitude, jamais le lecteur) vient du brief ou d'un fait simple du métier.
- Contrôle : chaque nombre, nom et citation de la page renvoie à une ligne de la fiche.

## 2. La carte de voix

Quatre à six lignes dans la fiche brief, jamais sur la page : registre et raison, personne (« vous », « nous », tutoiement ou non), longueur habituelle des phrases, où l'humour est permis, les noms maison du client (le même mot à chaque fois), ce qui ne se dit jamais.

- **La voix du client d'abord** : un texte de sa main, l'ancien site ou les mots du brief l'emportent sur tout menu.
- **Sinon choisir un registre, avec une raison** (l'acheteur, le prix, le vrai caractère du client). Le menu de Taste, jamais un défaut :

| Registre | Convient à | Échoue quand |
| --- | --- | --- |
| Les faits seuls | Services professionnels, B2B, conseil | Les faits sont minces |
| Technique, sec, avec preuve | Outils de développeurs, API | Liste de specs, aucun problème nommé |
| Lettre du fondateur | Produits portés par un fondateur qui a un parti pris | Le parti pris est joué |
| Joueur, pince-sans-rire | Snacks, boissons, petits studios | L'humour vise l'acheteur, l'argent ou la santé |
| Soutenu, exact | Soin, objets, commerce haut de gamme | Orné sans être exact |
| Lieux et retenue | Hôtels, patrimoine, architecture | Aucun vrai lieu ni histoire à nommer |
| Sensoriel, au présent | Cafés, restauration, sport, spas | Chaque section devient sensorielle |
| Scène datée | Maisons avec une vraie filiation | L'histoire est générique ou inventée |
| Étroit, par refus | Artisans, spécialistes | Le refus est inventé pour paraître ciblé |
| Le produit pour sujet | Matériel, apps à une fonction forte | Une formule sans spec dessous |
| Pressé, parlé | Indépendants, portfolios | Copinage, l'information disparaît |

- **La voix par défaut du modèle est exclue** sauf demande : chaleureuse, ironique, modeste, un peu littéraire, une chute pince-sans-rire, la page qui se dit honnête ou sereine.
- **Test des neuf métiers** : si la carte convient à neuf commerces d'autres métiers, la pousser vers ce client. Noter le registre dans `direction-log.md` ; pas le même que la page précédente sans raison.
- **La voix tient, le ton baisse** : tarifs, FAQ, formulaires et erreurs restent sobres. Le registre ne plie jamais les §3 à §7.

## 3. Le premier écran (Persuader)

- **Le h1 nomme la catégorie**, plus l'acheteur ou le lieu quand la marque est inconnue de son public ; environ 5 mots, 32 caractères visés, 8 mots et 2 lignes à 320 px au plus (`persuade.md` §1). Jamais une énigme, une ambiance, un slogan, un ordre ou une question. Une marque que son public connaît peut mettre son nom si la phrase suivante nomme la catégorie.
- **La phrase d'appui** dit ce que ça fait, 12 mots au plus (`persuade.md` ; Taste admet 15 à 30, la nôtre l'emporte).
- **Un fait dur** de la fiche sur le premier écran : un prix, un lieu, une date ou un nombre.
- Contrôle : le test du concurrent. Mettre le nom du concurrent le plus proche dans le h1 et la phrase ; si les deux restent vrais, réécrire depuis « La vraie différence ».

## 4. Titres

- **Chaque titre contient un nom qui désigne une chose** : le produit, une de ses parties, le lieu, un nom de section (tarifs, chambres, horaires, questions) ou un chiffre sourcé. 1 à 6 mots, 2 lignes au plus.
- Formes : le nom avec une affirmation dessous ; un verbe et son objet ; une affirmation simple avec son nom ; un chiffre sourcé.
- Pas : un ordre nu, une question (hors FAQ), une révélation après deux-points, un concept inventé à majuscule, une ligne claire seulement après la section.
- Budgets par page : un titre en deux fragments « X. Y. » une fois ; un titre en paire de nombres (« Quatre X, un Y ») une fois au plus ; une figure de style par page, jamais le h1, avec un fait dessous.
- Contrôle : les titres seuls, dans l'ordre, se lisent comme la table des matières de ce client.

## 5. Boutons et liens

- **Un verbe et son objet**, 1 à 5 mots, qui disent ce qui se passe ou ce que le visiteur obtient. Un nom seul uniquement quand le lien ouvre exactement cette chose (« Tarifs »).
- **Jamais** « En savoir plus », « Lire la suite », « Découvrir », « Explorer », « Cliquez ici », « Envoyer » seul, ni « Commencer » sans objet. WCAG 2.4.4 (AA) admet un but donné par le contexte ; nous visons 2.4.9 (AAA, le texte du lien seul) : les listes de liens des lecteurs d'écran lisent les libellés hors contexte.
- **(Persuader)** Deux actions au plus dans le hero, une principale (`persuade.md`). L'action principale garde un seul libellé dans la navigation, le hero, après la preuve et en clôture ; deux fois par écran au plus. Dix libellés d'action différents par page au plus.
- Un bouton de formulaire dit ce qui se passe et, pour une commande, combien (`persuade.md` §3 bis). Une levée de risque (« annulation gratuite jusqu'à 48 h ») se place à côté du bouton seulement si la fiche la donne.
- Un libellé, une destination, dans les deux sens.

## 6. Texte courant

- Sous un titre, 1 ou 2 phrases (10 à 40 mots) ; un corps de carte de 25 mots au plus ; aucun paragraphe de plus de 5 lignes à 1440 px **(Persuader)**.
- **Mots par écran (Persuader)**, comptés à 1440 × 900 hors maquettes d'interface, code et ligne légale : environ 35 à 50 pour un lieu, un service ou un produit grand public ; 60 à 80 pour un produit technique. (Taste a jugé bavarde une page fintech à 117.) Total de la page environ 900 mots hors footer ; le reste va dans des sous-pages.
- **Un fait là où l'adjectif voudrait aller** : un adjectif qui reste est physique ou mesurable. Montrer le mécanisme en étapes qui commencent par un verbe.
- Un seul nom pour le produit, jamais l'alternance « la plateforme, l'outil, la solution ». La longueur suit le sens, pas un martèlement de fragments.
- Budgets de procédés par page, d'après Taste : cadres de contraste (« X, pas Y », « plutôt que », « au lieu de », « sans le », comptés ensemble) 2 ; série de négations (« Pas de X. Pas de Y. ») 1 ; chute sèche 2, jamais à la suite ; mots de vertu sur soi 0 ; une liste de trois seulement quand il y a trois choses.

## 7. Faits et nombres

- **Un fait, une valeur, une formulation**, répétée mot pour mot là où elle revient ; jamais deux prix ou deux horaires pour une même chose.
- **Aucun nombre sans source** dans la fiche ; avec son unité, dans la phrase qu'il prouve, irrégulier quand il est réel. Les chiffres de preuve ronds et sans source (« 10 000+ équipes », « 3× plus rapide ») sont exclus (A2) ; une affirmation qui a besoin de sa source la montre à côté.
- Ni citation, ni avis, ni note, ni logo, ni client, ni prix, ni personne inventés (A2). Zéro témoignage est une page normale.
- **Noms** : les personnes uniquement depuis le brief. Un nom de marque forgé se cherche avec son métier et s'abandonne s'il est pris. Éviter les noms que les modèles forgent sans cesse (Taste cite Kestrel, Halcyon, Lumen, Nimbus, Fieldnote, Acme, Northwind ; Priya, Okafor, Elara).
- **Coordonnées** uniquement telles que le brief les donne.

## 8. Tics de texte et mots creux

La liste des tics de texte est dans `tells.md`. `scripts/copy-lint.mjs` porte les listes de mots en anglais et en français, par famille : mots gonflés (*révolutionnaire*, *booster*, *sublimer* ; seamless, elevate, unlock), phrases toutes faites (« Dans un monde en constante évolution » ; « In today's fast-paced world »), mots de vertu sur soi (*authentique*, *serein*, *tout simplement*), résidus (crochets, lorem ipsum, markdown, phrases de chatbot) et la page qui parle d'elle-même (« Vous trouverez ci-dessous »).

- Un mot littéral pour le métier reste (un harnais d'escalade, une maille sans couture), et le nom du client aussi.
- **Surcorrection** : chaque interdit engendre son substitut (« pas X mais Y » devient « plutôt que » ; les mots gonflés deviennent des mots de vertu calmes). Compter les familles ensemble ; remplacer le procédé par le fait positif.
- Pas des tics : « est » tout simple, une grammaire correcte, une vraie liste de trois, vendre sur une page de vente.

## 9. Contrôle

1. `node scripts/copy-lint.mjs <fichier> --mode <mode>` (`--allow` pour le nom du client et les mots littéraux du métier) : zéro erreur ; chaque avertissement corrigé ou justifié en une ligne dans le rapport.
2. Test du concurrent sur le h1, la phrase d'appui et chaque titre (§3).
3. **Lire à voix haute**, comme le client à un acheteur ; couper ce qu'il ne dirait pas.
4. Passe de surcorrection (§8). Puis, si plusieurs pages ont été faites dans la session, leurs h1 et titres côte à côte : une cadence partagée est un tic.
5. Un regard neuf qui reçoit le texte seul (`critique.md`) : qu'est-ce que c'est, pour qui, combien ça coûte, quelles trois lignes sonnent comme n'importe quel site.

Le rapport donne la carte de voix en une ligne, chaque valeur d'exemple et ce que le client doit fournir.

## 10. Ce qui change selon le mode

| Mode | Ce qui change |
| --- | --- |
| Persuader | Tout ce qui précède |
| Opérer | Le h1 est le nom de l'écran ou de l'objet (« Factures ») ; les boutons sont strictement verbe et objet (« Supprimer la facture ») ; les erreurs nomment le champ et la correction (`operate.md`) ; pas de budget de mots ; la voix seulement dans les états vides et les confirmations, jamais sur un parcours destructif ou de paiement |
| Lire | Le h1 est le sujet ou la tâche dans les mots du lecteur ; les titres peuvent être des questions en aide et en FAQ ; paragraphes longs permis dans la mesure (`typography.md`) ; « Lire la suite » reste exclu |
| Expérience | Le h1 est la personne ou le studio et ce qu'il fait ; chaque œuvre a titre, année, rôle, une ou deux phrases ; la voix de l'auteur l'emporte sur le menu |
