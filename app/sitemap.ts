import type { MetadataRoute } from "next";
import { siteUrl } from "../site-config";

export const dynamic = "force-static";

const pages = ["", "/about", "/catalog", "/knowledge"];

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map((path) => ({
    changeFrequency: path === "" ? "weekly" : "monthly",
    lastModified: new Date(),
    priority: path === "" ? 1 : 0.8,
    url: `${siteUrl}${path}`,
  }));
}
