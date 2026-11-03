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

### Par critère (v0.24, moyenne des 5 pages)

| Critère | Moyenne | Lecture |
| --- | --- | --- |
| Honnêteté | 8,8 | Point fort : rien d'inventé, contenu d'exemple signalé |
| Typographie et hiérarchie | 7,4 | Solide depuis la 0.17 |
| Clarté du premier écran | 7,2 | |
| Absence de tics d'IA | 7,2 | Un eyebrow est encore passé (brief 1) |
| Mobile | 7,0 | |
| Singularité | 6,8 | |
| Espacement et rythme | 6,2 | Vides irréguliers, marges qui changent |
| Finition | 6,0 | Textes provisoires visibles, formats de date |
| Originalité | 6,4 | Les juges reconnaissent encore un « éditorial suisse » |
| Visuels | 5,4 | Point faible : sans photo fournie, le skill ne compense pas assez |

À améliorer en priorité : visuels sans photo, régularité de l'espacement, finition, détection automatique des eyebrows.
