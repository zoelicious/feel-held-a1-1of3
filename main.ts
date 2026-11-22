import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const text =
  "Rain falls on the leaves, one drop at a time, and the river below carries each one away, unhurried. " +
  "The light stays low and grey, the water holds its slow rhythm, and nothing asks the afternoon to be anywhere else.";

const outDir =
  process.env.MAKEFUN_OUTPUT_DIR ||
  join(dirname(fileURLToPath(import.meta.url)), "output");

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), text, "utf8");
