// The Robot Vacuum's Best Excuse — make.fun entry
// u-golden-heron-44-the-robot-vacuum-s-best-excuse-53412214
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";

const line = readFileSync(new URL("./entry.txt", import.meta.url), "utf8");

// Print the line to stdout.
process.stdout.write(line + "\n");

// Also write it to /output/entry.txt for the grader.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
