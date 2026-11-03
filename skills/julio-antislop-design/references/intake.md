# Cadrage : tout demander avant de créer

Un modèle qui manque d'information comble les trous avec la moyenne : c'est la première source de slop. Et un goût deviné se corrige ensuite par allers-retours : c'est la première source de perte de temps. Le cadrage récolte **en une fois, avant la première ligne de code**, ce qui rend la page vraie (le projet, la matière) et ce qui la rend juste aux yeux de la personne (son goût, c'est-à-dire tout ce qu'il faut pour remplir `DESIGN.md`). Il se fait en quatre temps : projet, goût, matière, fiche brief validée.

## Quand cadrer

| Situation | Cadrage |
| --- | --- |
| Nouvelle page, nouveau site, nouvel écran d'app, nouveau système | Complet : les trois tours et la fiche brief |
| Refonte d'un existant | Complet, plus l'accès à l'existant et ce qui ne doit pas changer ; le tour Goût demande ce qui plaît et déplaît dans l'existant ; la direction en 5 lignes se valide en plus (`redesign.md`) |
| Composant isolé, petite modification | 1 ou 2 questions seulement si un point bloque ; sinon aucune |
| `DESIGN.md` existe déjà et est complet | Pas de tour Goût : le lire et le respecter ; ne demander que ce qui y manque |
| **Délégation totale** : la personne dit qu'elle laisse toute la responsabilité (« carte blanche », « fais comme tu veux », « je te fais confiance sur le design ») | Aucune question de goût ; questions de projet et de matière seulement si un fait manque (prix, action, contact) ; décider le reste et l'écrire en hypothèses dans la fiche brief |
| Exécution sans personne pour répondre (tâche planifiée, lot) | Aucune question : décider, puis écrire les hypothèses en tête du rapport |

« Vas-y » **avant** les questions ne vaut pas délégation totale : poser quand même le tour Goût, en une seule fois. « Vas-y » **en réponse** aux questions vaut délégation pour ce qui reste sans réponse.

Ne jamais demander ce que les fichiers du projet, `PRODUCT.md`, `DESIGN.md` ou la conversation disent déjà : lire d'abord, demander ensuite seulement ce qui manque.

## Comment demander

- Avec l'outil de questions à choix (AskUserQuestion) quand il est disponible : au plus 4 questions par appel, 2 à 4 options chacune, l'option recommandée en premier avec « (recommandé) », l'utilisateur pouvant toujours écrire sa propre réponse. Les appels s'enchaînent **sans rien construire entre eux**. Sinon, un seul message numéroté par tour.
- **Trois tours au plus, 12 questions au plus en tout** : projet, goût, matière. Ensuite plus aucune question jusqu'à la livraison, sauf un blocage réel (un fait sans lequel on ne peut pas construire).
- Des options concrètes et contrastées, jamais « clean et moderne » : des tons extrêmes, des scènes d'usage précises, des actions nommées, des sites réels.
- **Montrer plutôt que décrire** : quand l'outil accepte un aperçu par option (`preview`), y mettre un petit échantillon (une paire de polices avec un vrai titre du projet, trois pastilles de couleur, une densité de mise en page en blocs de texte).
- Chaque question dit pourquoi elle compte quand ce n'est pas évident, en une demi-phrase.
- Plusieurs réponses possibles (`multiSelect`) pour ce que la personne déteste et pour les références qu'elle aime.

## Tour 1 : le projet (4 questions)

Toujours, adaptées à ce que le contexte dit déjà :

1. **Surface et mode** : landing, site, app, docs, portfolio… et ce que le visiteur doit réussir.
2. **Audience et scène d'usage** : qui, sur quel appareil, où, sous quelle lumière, sur quel réseau.
3. **L'action unique visée** : réserver, acheter, s'inscrire, contacter, recruter…
4. **Ce qui doit exister** : l'offre et son prix réels (Persuader), les 3 tâches fréquentes (Opérer), la source du contenu (Lire), la liste des œuvres (Expérience), l'accès à l'existant et l'intouchable (refonte).

## Tour 2 : le goût (jusqu'à 8 questions, en deux appels)

C'est le tour qui évite les allers-retours. Chaque réponse remplit une section de `DESIGN.md` ; ne poser que les questions dont la section est vide.

| Question | Options à proposer (exemples) | Section de `DESIGN.md` |
| --- | --- | --- |
| **Caractère**, en un extrême | Précis et calme ; chaleureux et artisanal ; affirmé et graphique ; luxueux et silencieux ; ludique ; technique et dense… (2 ou 3 mots de caractère tirés de la réponse) | 1. Thème et atmosphère |
| **Lumière et couleur** | Clair ou sombre (selon la scène d'usage) ; stratégie : retenue (neutres et un accent), une couleur qui porte la page, aplats francs par section, palette complète ; couleur d'ancrage s'il y en a une | 2. Couleurs |
| **Typographie** | Police de marque fournie ; sinon 3 paires tirées du sujet et de `font-catalog.md`, avec aperçu | 3. Typographie |
| **Densité et rythme** | Très aéré, éditorial ; équilibré ; dense, beaucoup d'information visible | 5. Mise en page |
| **Formes** | Angles droits ; arrondis légers ; très arrondis, pastilles | 4. Composants, 6. Profondeur |
| **Images** | Vraies photos (fournies) ; illustration ; typographie seule ; interface réelle du produit ; rendu 3D (fourni) | 1 et 7 |
| **Mouvement** | Aucun ; discret (retours d'interaction) ; un mouvement signature ; immersif (budget de performance plus large) | 9. Guide pour les agents |
| **Références et rejets** | 3 sites de `site-models.md` du même mode, aux partis pris différents, en choix multiple, plus « un site à moi » ; et en choix multiple ce que la personne ne veut surtout pas (dégradés, verre, sombre, serif, tout centré, animations partout, cartes à icônes…) | 7. À faire et à ne pas faire |

Selon le projet, la navigation et le pied de page peuvent remplacer une question peu utile : proposer 2 ou 3 modèles de `nav-footer.md` adaptés au contenu.

## Tour 3 : la matière (une demande, pas un questionnaire)

Demander explicitement, avec formats, en un seul message ou un seul appel :

- **Marque** : logo (SVG de préférence), couleurs, polices sous licence, `DESIGN.md` ou charte existante.
- **Images** : photos du lieu, des personnes, du produit (2000 px de large au moins) ; pour un produit physique, photos ou rendus 3D (sans eux, la page prendra un registre que le code sait faire, voir `idea-and-direction.md` §7) ; captures ou enregistrements d'écran du vrai produit (16:10) ; vidéos. Sinon, l'accord pour des images d'archives libres de droits créditées, des images générées signalées, ou la typographie seule.
- **Preuves** : chiffres avec leur source, citations avec le nom et l'accord de leur auteur, logos de clients autorisés. Sans preuve fournie, la section n'aura pas de preuve : rien ne sera inventé.
- **Textes** : fournis ou à rédiger ; langue(s) ; mots à éviter.
- **Contraintes** : confidentialité (NDA, services tiers autorisés ou non), stack et accès au dépôt, échéance, accessibilité ou réglementation particulière.

Dire ce qui se passe si une pièce manque : un emplacement signalé, à la bonne taille, que l'utilisateur remplira.

## La fiche brief

Après les réponses, écrire la fiche et demander **une seule** validation (« Je lance ? »). Elle tient en un écran :

```
Je lis ce projet comme : …

Mode : …            Action visée : …
Audience et scène : …
Caractère : …       Lumière : …        Couleur : stratégie …, ancrage …
Polices : fournies (…) ou choisie : … (parmi 1 … / 2 … / 3 …)
Densité : …         Formes : …         Images : …        Mouvement : …
Navigation / pied de page : N… / F…
Références aimées : … (qualité retenue de chacune)
À éviter absolument : …
Matière reçue : …
Matière manquante → emplacements : …
Preuves utilisables : …   (rien d'autre ne sera affiché)
Contraintes : …
Hypothèses prises faute de réponse : …
```

Une fois validée : le projet va dans `PRODUCT.md`, le goût dans `DESIGN.md` (sections 1 à 9 pré-remplies avec les réponses, le reste complété aux étapes 6 et 7). Si l'utilisateur corrige, mettre à jour la fiche une fois et commencer, sans nouveau tour de questions.

## Ce que le cadrage ne négocie pas

Les réponses orientent les défauts levables, jamais le plancher absolu. Si une réponse le contredit (« invente quelques témoignages », « mets le logo de ce client sans son accord », « envoie les maquettes du client sur tel service »), le dire en une phrase, expliquer la règle et proposer l'alternative honnête : un emplacement pour de vrais témoignages, une demande d'accord, un outil local. Un goût exprimé (« je veux du verre », « je veux une serif ») lève le défaut correspondant (A7) : l'appliquer avec ses règles, sans le discuter.
