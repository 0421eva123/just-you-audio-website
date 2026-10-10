import type { MetadataRoute } from "next";
import { siteUrl } from "../site-config";
import { allSeoPages } from "./seo-pages";

export const dynamic = "force-static";

const pages = ["", "/about", "/catalog", "/download-catalog", "/knowledge"];

export default function sitemap(): MetadataRoute.Sitemap {
  return [...pages, ...allSeoPages.map((page) => page.route)].map((path) => ({
    changeFrequency: path === "" ? "weekly" : "monthly",
    lastModified: new Date(),
    priority:
      path === "" ? 1 : path.startsWith("/knowledge/") || path.startsWith("/es/") ? 0.7 : 0.8,
    url: `${siteUrl}${path}`,
  }));
}
