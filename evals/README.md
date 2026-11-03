# Évaluation / Evaluation

Cinq briefs fixes, un par mode et un de plus en Persuader, pour mesurer chaque version du skill et éviter qu'une correction en casse une autre sans qu'on le voie.

| Brief | Mode |
| --- | --- |
| `briefs/1-lavanila-persuader.md` | Persuader (le brief du premier test) |
| `briefs/2-les-rayons-persuader.md` | Persuader (brief neuf) |
| `briefs/3-tresorerie-operer.md` | Opérer |
| `briefs/4-guide-lire.md` | Lire |
| `briefs/5-portfolio-experience.md` | Expérience |

## Lancer

1. Pour chaque brief, une session neuve de l'agent, un dossier vide, le skill seul installé, et la consigne : « Utilise le skill julio-antislop-design en entier pour ce brief ; personne ne répondra aux questions » suivie du brief.
2. Captures pleine page à 1440 et 390 px (`benchmark-kit` : `npm run shoot`).
3. Un juge indépendant, dans une session neuve, note chaque page avec `judge-prompt.md`, sans savoir comment elle a été faite.
4. Reporter les notes ci-dessous. Pour une comparaison avec d'autres skills, utiliser le kit de test à l'aveugle.

## Scores

| Version | Date | 1 Lavanila | 2 Les Rayons | 3 Fanilo | 4 Compost | 5 Portfolio | Moyenne | Conditions |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0.24 | 3 nov. 2026 | 7,1 | 6,7 | 7,4 | 6,5 | 6,5 | **6,8** | Skill seul, agent neuf par brief, sans personne pour répondre, bac à sable sans réseau (pas de planche de références), pas de sous-agent de critique ; un juge indépendant par page, sur captures |
| 0.25 | 3 nov. 2026 | 7,0 | 7,6 | 7,1 | 7,3 | 6,1 | **7,0** | Mêmes conditions que la 0.24, avec `check-render.mjs`, `visuals.md` et `finish.md` |

### Par critère (moyenne des 5 pages)

| Critère | 0.24 | 0.25 | Lecture |
| --- | --- | --- | --- |
| Honnêteté | 8,8 | 9,0 | Point fort constant : rien d'inventé |
| Clarté du premier écran | 7,2 | 7,8 | L'ancre visuelle du sujet aide |
| Absence de tics d'IA | 7,2 | 7,8 | Eyebrows bloqués par `check-tokens` |
| Typographie et hiérarchie | 7,4 | 7,2 | Stable ; listes en très grand corps mal coupées (brief 4) |
| Mobile | 7,0 | 7,0 | |
| Singularité | 6,8 | 6,6 | |
| Finition | 6,0 | 6,4 | `check-render` attrape les mots coupés et les vides, pas encore les doublons ni les éléments orphelins |
| Visuels | 5,4 | 6,2 | Nette hausse là où la règle a été suivie (compost 4 → 8, vélo 5 → 7) |
| Espacement et rythme | 6,2 | 6,2 | Pas de progrès : prochain chantier |
| Originalité | 6,4 | 6,0 | Le portfolio tout gris (4) tire la moyenne ; règle corrigée après le test |

Lecture honnête : +0,2 en moyenne, avec un seul essai par brief, donc une part de hasard. Les gains viennent des visuels et du premier écran ; l'espacement ne bouge pas et l'originalité reste le point faible.

À améliorer en priorité : espacement et rythme (vides sur desktop, colonnes à moitié vides), originalité en mode Expérience, finition non mesurable automatiquement (doublons, éléments orphelins).
