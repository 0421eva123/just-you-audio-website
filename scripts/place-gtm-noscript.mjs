import { readdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";

const outDir = "out";
const gtmNoscript =
  '<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-M9H8M459" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>';

async function findHtmlFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = await Promise.all(
    entries.map((entry) => {
      const path = join(directory, entry.name);
      return entry.isDirectory()
        ? findHtmlFiles(path)
        : entry.name.endsWith(".html")
          ? [path]
          : [];
    }),
  );

  return files.flat();
}

const files = await findHtmlFiles(outDir);

await Promise.all(
  files.map(async (file) => {
    const html = await readFile(file, "utf8");
    const withoutExistingNoscript = html.replaceAll(gtmNoscript, "");
    const updated = withoutExistingNoscript.replace(
      /<body([^>]*)>/,
      `<body$1>${gtmNoscript}`,
    );

    await writeFile(file, updated);
  }),
);
