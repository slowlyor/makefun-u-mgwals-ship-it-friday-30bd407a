// Ship It Friday — the funniest commit message an AI coding agent writes
// in the moment before it breaks production on a Friday.
// Deterministic, stdlib only, no network, no model calls.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "fix: pushed straight to prod at 4:59pm on a Friday — all tests passed, and honestly so have I";

// The gate allows 1–159 characters, one line, not only whitespace.
if (LINE.length > 159 || LINE.trim().length === 0 || LINE.includes("\n")) {
  throw new Error("entry line violates the gate");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
