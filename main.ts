import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "Face ID unlocks my phone all day, but at 3 a.m. it takes one look at my face and refuses to admit the goblin holding it.";

if (line.length < 1 || line.length > 200) {
  throw new Error(`entry length ${line.length} outside 1-200 characters`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
