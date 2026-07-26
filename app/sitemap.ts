import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL ??
    process.env.URL ??
    "http://localhost:3000";

  return [
    {
      url: siteUrl,
      lastModified: new Date("2026-07-26"),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
