# Benchmark à l'aveugle : julio-antislop-design, Hallmark, Impeccable

Ce kit compare les trois skills dans les mêmes conditions et avec tout leur processus actif, sur ta machine (le réseau complet est nécessaire : la recherche de concept d'Impeccable appelle impeccable.style, et les références de julio-antislop-design viennent des sites de galerie).

## Ce qui est égal pour les trois

- Le même brief, mot pour mot, et aucun autre fait (pas de photo, pas d'avis).
- Une session Claude Code neuve et un dossier vide par run, un seul skill installé à la fois.
- Réseau complet et sous-agents autorisés : la recherche de concept d'Impeccable (tirage, challengers, quality bar), ses relecteurs finish-reviewer et documenter ; les relectures hero et finale de Hallmark en contexte neuf ; les références réelles et la critique en contexte neuf de julio-antislop-design.
- Run sans personne pour répondre : chaque skill décide là où il demanderait et écrit ses hypothèses. (Variante possible : run accompagné, où tu réponds aux questions des trois skills de la même façon. Ne pas mélanger les deux variantes.)
- Le même modèle pour les trois runs.

## Prérequis

- Claude Code, Node 18 ou plus, Chrome.
- Dans ce dossier : `npm install` puis `npx playwright install chromium`.

## 1. Choisir le brief

- `briefs/B-les-rayons.md` (recommandé) : brief neuf, aucun skill n'a été réglé dessus.
- `briefs/A-lavanila.md` : le brief du premier test, pour comparer avec le résultat d'avant. Attention : julio-antislop-design a été corrigé après ce test, donc il est avantagé sur ce brief.

## 2. Lancer les trois runs

Pour chaque skill, dans un terminal séparé :

```bash
mkdir -p runs/hallmark && cd runs/hallmark
npx skills add nutlope/hallmark          # installe le skill dans ce dossier seulement
claude                                    # session neuve
```

Puis coller `prompts/hallmark.md`, avec le brief choisi à la place de `<coller ici le brief choisi>`.

| Run | Dossier | Installation (dans le dossier du run) | Consigne |
| --- | --- | --- | --- |
| Hallmark | `runs/hallmark` | `npx skills add nutlope/hallmark` (+ `npm i -g puppeteer-core` pour `sloplint --render`) | `prompts/hallmark.md` |
| Impeccable | `runs/impeccable` | `npx impeccable install` (accepter le hook de design quand il le propose) | `prompts/impeccable.md` |
| julio-antislop-design | `runs/julio` | `npx skills add jrco-dev/julio-antislop-design --skill julio-antislop-design`, ou décompresser `dist/julio-antislop-design.skill` dans `runs/julio/.claude/skills/` | `prompts/julio.md` |

Vérifier avant de coller la consigne que seul ce skill est visible dans la session (pas d'installation globale `-g` d'un autre skill de design).

Si un skill demande une permission réseau (le tirage d'Impeccable vers impeccable.style/api/roll, par exemple), l'accepter. Si un run tourne malgré tout en mode dégradé, il doit le dire dans ses notes ; le relancer.

## 3. Capturer et anonymiser

Depuis la racine du kit :

```bash
npm run shoot     # captures 1440 px et 390 px de chaque runs/*/index.html
npm run blind     # lettres tirées au hasard, page de vote blind/index.html
```

Ne pas ouvrir `blind/mapping-SECRET.json`.

## 4. Voter, puis faire juger

1. Ouvre `blind/index.html` : chaque page en desktop et en mobile, côte à côte, puis ton classement.
2. Lance un juge indépendant dans une session Claude neuve avec `judge-prompt.md` et les six captures de `blind/`.

## 5. Révéler et mesurer

```bash
npm run reveal    # qui est A, B, C
npm run metrics   # check-tokens et impeccable detect sur les trois, dans metrics.md
```

Les mesures sont des indices, pas un verdict : chaque outil vient d'un des skills et vérifie d'abord ses propres règles.

## 6. Me renvoyer

Le dossier `runs/` (index.html, notes.md, captures) et `metrics.md`, plus ton classement et celui du juge. Je mets à jour le skill à partir des écarts, comme après le premier test.
