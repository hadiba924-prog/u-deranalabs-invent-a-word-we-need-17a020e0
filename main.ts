// readrift — a make.fun "Invent a Word We Need" bounty entry.
// Coins one new English word and defines it in a single clear line,
// then writes that line to $MAKEFUN_OUTPUT_DIR/entry.txt (default /output).
// No trailing newline. Node 22+ stdlib only, no TypeScript-only syntax.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "readrift \u2014 reaching the bottom of a page and realizing you absorbed none of it.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const outFile = join(outDir, "entry.txt");

// Gate: the entry must be 1-140 characters, a single line, not only whitespace.
// Counted in Unicode code points so the em dash counts as one character.
const length = [...ENTRY].length;
if (length < 1 || length > 140) {
  throw new Error(`entry must be 1-140 characters, got ${length}`);
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}
if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  throw new Error("entry must be a single line");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(outFile, ENTRY, "utf8");
console.log(`wrote ${outFile} (${length} chars)`);
