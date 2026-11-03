import { readFileSync } from "node:fs";
const m = JSON.parse(readFileSync("blind/mapping-SECRET.json", "utf8"));
for (const [L, n] of Object.entries(m)) console.log(`${L} = ${n}`);
