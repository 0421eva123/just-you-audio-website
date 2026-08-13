import { copyFile, mkdir } from "node:fs/promises";
import path from "node:path";

const routes = [
  "/knowledge/100v-pa-system-guide",
  "/knowledge/how-to-choose-pa-amplifier",
  "/knowledge/hotel-background-music-system",
  "/knowledge/factory-pa-system-design",
  "/knowledge/outdoor-waterproof-speaker-guide",
  "/es/sistema-de-megafonia",
  "/es/amplificador-pa",
  "/es/altavoces-para-audio-comercial",
];

const outDir = path.join(process.cwd(), "out");

await Promise.all(
  routes.map(async (route) => {
    const routePath = route.replace(/^\//, "");
    const sourceHtml = path.join(outDir, `${routePath}.html`);
    const targetDir = path.join(outDir, routePath);
    const targetHtml = path.join(targetDir, "index.html");

    await mkdir(targetDir, { recursive: true });
    await copyFile(sourceHtml, targetHtml);

    const sourceText = path.join(outDir, `${routePath}.txt`);
    const targetText = path.join(targetDir, "index.txt");

    await copyFile(sourceText, targetText).catch((error) => {
      if (error?.code !== "ENOENT") {
        throw error;
      }
    });
  }),
);
