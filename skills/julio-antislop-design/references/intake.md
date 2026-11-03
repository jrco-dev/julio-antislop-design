# Cadrage : tout demander avant de créer

Un modèle qui manque d'information comble les trous avec la moyenne : c'est la première source de slop. Le cadrage récolte ce qui rend une page singulière et vraie avant d'écrire une ligne de code. Il se fait en trois temps : questions, demande de matière, fiche brief validée.

## Quand cadrer

| Situation | Cadrage |
| --- | --- |
| Nouvelle page, nouveau site, nouvel écran d'app, nouveau système | Complet : les deux tours de questions, la matière, la fiche brief |
| Refonte d'un existant | Complet, plus l'accès à l'existant et ce qui ne doit pas changer ; la direction en 5 lignes se valide en plus (`redesign.md`) |
| Composant isolé, petite modification | 1 ou 2 questions seulement si un point bloque ; sinon aucune |
| Exécution sans personne pour répondre (tâche planifiée, lot) | Aucune question : décider, puis écrire les hypothèses en tête du rapport |
| L'utilisateur répond « vas-y » sans détailler | Décider, annoncer les hypothèses dans la fiche brief, et commencer |

Ne jamais demander ce que les fichiers du projet, `PRODUCT.md`, `DESIGN.md` ou la conversation disent déjà : lire d'abord, demander ensuite seulement ce qui manque.

## Comment demander

- Avec l'outil de questions à choix (AskUserQuestion) quand il est disponible : au plus 4 questions par appel, 2 à 4 options chacune, l'option recommandée en premier avec « (recommandé) », l'utilisateur pouvant toujours écrire sa propre réponse. Sinon, un seul message numéroté.
- Deux tours au plus avant de montrer quelque chose : le projet, puis la matière. Pas de troisième tour : ce qui manque encore devient une hypothèse écrite dans la fiche brief.
- Des options concrètes, jamais « clean et moderne » : des tons extrêmes, des scènes d'usage précises, des actions nommées.
- Chaque question dit pourquoi elle compte quand ce n'est pas évident, en une demi-phrase.

## Tour 1 : le projet

Toujours ces quatre questions, adaptées à ce que le contexte dit déjà :

1. **Surface et mode** : landing, site, app, docs, portfolio… et ce que le visiteur doit réussir (décider, terminer une tâche, comprendre, découvrir une œuvre).
2. **Audience et scène d'usage** : qui, sur quel appareil, où, sous quelle lumière, sur quel réseau.
3. **L'action unique visée** : réserver, acheter, s'inscrire, contacter, recruter…
4. **Le ton, en un extrême** : éditorial, brutaliste, doux, utilitaire, luxe, ludique, technique, austère, chaleureux… plus 4 à 8 mots d'ambiance et une couleur d'ancrage s'il y en a une.

Ajouts selon le mode, à placer dans le même tour s'il reste de la place, sinon au tour 2 :

| Mode | Question à ajouter |
| --- | --- |
| Persuader | L'offre et son prix réels ; où mène l'action principale |
| Opérer | Les 3 tâches les plus fréquentes ; les rôles ; un échantillon de vraies données |
| Lire | La source du contenu ; sa structure ; sa fréquence de mise à jour |
| Expérience | La liste des œuvres : titre, rôle, année, crédits |
| Refonte | L'accès à l'existant (URL, dépôt, captures) ; ce qui ne doit surtout pas changer |

## Tour 2 : la matière

C'est le tour qui décide le plus de la qualité. Demander explicitement, avec formats :

- **Marque** : logo (SVG de préférence), couleurs, polices sous licence, `DESIGN.md` ou charte existante. **Sans police fournie**, proposer 3 paires affichage + texte tirées du sujet et de `font-catalog.md`, chacune avec le trait qu'elle porte (`typography.md` §2 bis) ; la recommandée en premier.
- **Images** : photos du lieu, des personnes, du produit (2000 px de large au moins), captures ou enregistrements d'écran du vrai produit (16:10), vidéos. Sinon, l'accord pour des images d'archives libres de droits créditées, des images générées signalées, ou la typographie seule.
- **Preuves** : chiffres avec leur source, citations avec le nom et l'accord de leur auteur, logos de clients autorisés. Rappeler que sans preuve fournie, la section n'aura pas de preuve : rien ne sera inventé.
- **Textes** : fournis ou à rédiger ; langue(s) ; mots à éviter.
- **Références** : 2 ou 3 sites aimés et 1 détesté, avec ce qui plaît ou déplaît.
- **Contraintes** : confidentialité (NDA, services tiers autorisés ou non), stack et accès au dépôt, échéance, accessibilité ou réglementation particulière.

Dire ce qui se passe si une pièce manque : un emplacement signalé, à la bonne taille, que l'utilisateur remplira.

## La fiche brief

Après les réponses, écrire la fiche et demander une seule validation (« Je lance ? »). Elle tient en un écran :

```
Je lis ce projet comme : …

Mode : …            Action visée : …
Audience et scène : …
Ton : …             Couleur d'ancrage : …
Polices : fournies (…) ou proposées (1 … / 2 … / 3 …, recommandée : …)
Matière reçue : …
Matière manquante → emplacements : …
Preuves utilisables : …   (rien d'autre ne sera affiché)
Contraintes : …
Hypothèses prises faute de réponse : …
```

Une fois validée, elle va dans `PRODUCT.md`. Si l'utilisateur corrige, mettre à jour la fiche une fois et commencer, sans nouveau tour de questions.

## Ce que le cadrage ne négocie pas

Les réponses orientent les défauts levables, jamais le plancher absolu. Si une réponse le contredit (« invente quelques témoignages », « mets le logo de ce client sans son accord », « envoie les maquettes du client sur tel service »), le dire en une phrase, expliquer la règle et proposer l'alternative honnête : un emplacement pour de vrais témoignages, une demande d'accord, un outil local.
