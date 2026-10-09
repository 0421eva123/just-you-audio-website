import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const indexPath = join(process.cwd(), "out", "index.html");
const canonicalWithoutSlash = "https://www.justyouaudio.com";
const canonicalWithSlash = "https://www.justyouaudio.com/";

let html = readFileSync(indexPath, "utf8");

html = html.replace(
  '<link rel="canonical" href="https://www.justyouaudio.com"/>',
  '<link rel="canonical" href="https://www.justyouaudio.com/"/>',
);

html = html.replace(
  /\\"rel\\":\\"canonical\\",\\"href\\":\\"https:\/\/www\.justyouaudio\.com\\"/g,
  '\\"rel\\":\\"canonical\\",\\"href\\":\\"https://www.justyouaudio.com/\\"',
);

if (!html.includes(`<link rel="canonical" href="${canonicalWithSlash}"/>`)) {
  throw new Error(
    `Homepage canonical was not updated from ${canonicalWithoutSlash} to ${canonicalWithSlash}`,
  );
}

writeFileSync(indexPath, html);
