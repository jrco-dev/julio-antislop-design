"""Construit dist/<skill>.skill pour chaque édition (archive zip avec le dossier du skill à la racine)."""
import zipfile
from pathlib import Path

root = Path(__file__).resolve().parent.parent
skip = {".DS_Store", "__pycache__", "node_modules", ".julio"}
(root / "dist").mkdir(exist_ok=True)
for skill in sorted((root / "skills").iterdir()):
    if not (skill / "SKILL.md").exists():
        continue
    out = root / "dist" / f"{skill.name}.skill"
    with zipfile.ZipFile(out, "w", zipfile.ZIP_DEFLATED) as z:
        for f in sorted(skill.rglob("*")):
            if f.is_file() and not any(p in skip for p in f.parts):
                z.write(f, f.relative_to(skill.parent))
    print(f"{out.relative_to(root)} ({out.stat().st_size // 1024} Ko)")
