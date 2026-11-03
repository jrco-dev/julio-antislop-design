# DESIGN.md — [Nom du projet]

<!-- Structure en 9 sections inspirée de la spécification DESIGN.md publiée par Google Labs (Stitch, avril 2026, Apache 2.0), complétée par les champs propres à ce skill. À placer à la racine du projet ; il prime sur les défauts du skill. -->

Mode : [Persuader | Opérer | Lire | Expérience]
Idée : Sur cette page, [une chose propre au sujet] devient [le procédé de composition].
Signature : [un seul détail propre au produit]

## 1. Thème visuel et atmosphère

[2 ou 3 mots de caractère concrets. Le monde du sujet : lieu, matières, lumière. Ce que la page doit faire ressentir.]

## 2. Couleurs et rôles

| Token | Valeur (OKLCH) | Rôle | Contraste vérifié |
| --- | --- | --- | --- |
| `--bg` | | Fond de page | |
| `--surface-1` | | Surface surélevée | |
| `--ink` | | Texte principal | sur `--bg` : |
| `--ink-2` | | Texte secondaire | sur `--bg` : |
| `--ink-3` | | Texte atténué | sur `--bg` : |
| `--accent` | | Action principale, sélection | texte dessus : |
| `--focus` | | Anneau de focus | |

Origine de la couleur d'ancrage : [marque, matière du sujet, …]
Variante sombre : [oui / non, et pourquoi selon la scène d'usage]

## 3. Typographie

| Rôle | Police (nom exact) | Source et licence | Taille | Graisse | Interligne | Tracking |
| --- | --- | --- | --- | --- | --- | --- |
| Affichage | | | | | | |
| Titre | | | | | | |
| Texte | | | | | | |
| Libellé | | | | | | |

## 4. Composants

[Boutons : forme (carrée ou pastille), états. Champs : label, aide, erreur. Cartes ou panneaux selon le mode. Icônes : jeu, taille, trait.]

## 5. Mise en page

[Grille, largeur maximale du conteneur, marges, échelle d'espacement, écart entre sections, alignement par défaut.]

## 6. Profondeur et élévation

[Écarts de ton entre surfaces ; ombres réservées à ce qui flotte ; bordure ou ombre, pas les deux.]

## 7. À faire et à ne pas faire

- Défauts levés pour ce projet, avec leur raison : …
- Interdits propres à la marque : …

## 8. Comportement responsive

[Points de rupture, recomposition mobile, ce qui disparaît ou se simplifie, taille minimale du texte.]

## 9. Guide pour les agents

- Utiliser uniquement les tokens ci-dessus ; aucune valeur en dur.
- Mouvement : [mouvement signature, durées, courbe].
- Budget : [effets autorisés selon le mode].
- Sources : références consultées (URL et qualité empruntée), composants et images avec leur licence.
