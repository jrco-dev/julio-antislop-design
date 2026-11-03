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
