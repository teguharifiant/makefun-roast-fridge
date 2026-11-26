import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "My ice dispenser is a slot machine: pull the lever, watch the lights, and collect your payout in crushed dreams.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, ENTRY, "utf8");
console.log(ENTRY);
