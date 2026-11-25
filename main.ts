// One Line, No Deadline Met — entry for make.fun
// Writes one funny, one-line excuse for a missed deadline to
// /output/entry.txt (gate: UTF-8 text, 1-200 characters, not only
// whitespace). That is all it has to do.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The grader runs the program with /output as its output directory, but
// letting the directory come from the environment keeps local runs honest:
// the same code path writes the same file wherever it is pointed.
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// The line: the deadline as a software update you keep snoozing —
// "remind me later" until it stops asking, and the silence becomes
// permission. Fresh angle (not trains, context windows or second
// agents): the excuse is the interface itself, setup and punch in one
// breath, and it sounds like something a person would actually say to
// their boss on a Monday.
const LINE =
  "I kept clicking 'remind me later' on the deadline until it stopped asking, so I took the silence as a yes.";

if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`Line must be 1-200 non-blank characters, got ${LINE.length}`);
}
if (LINE.includes("\n")) {
  throw new Error("Line must be a single line");
}

// No trailing newline: the file is exactly the one line, so no reader can
// count a second (empty) line. The gate allows 1-200 characters either way,
// but exact is safer.
mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, "entry.txt"), LINE, "utf8");
console.log(`Wrote ${LINE.length} characters to ${join(OUTPUT_DIR, "entry.txt")}`);
