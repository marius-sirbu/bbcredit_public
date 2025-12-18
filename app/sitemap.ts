import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://bbcredit.md",
      lastModified: new Date(),
      alternates: {
        languages: {
          ro: "https://bbcredit.md/ro-RO",
          ru: "https://bbcredit.md/ru-RU",
        },
      },
    },
    {
      url: "https://bbcredit.md/aboutUs",
      lastModified: new Date(),
      alternates: {
        languages: {
          ro: "https://bbcredit.md/ro-RO/aboutUs",
          ru: "https://bbcredit.md/ru-RU/aboutUs",
        },
      },
    },
    {
      url: "https://bbcredit.md/contacts",
      lastModified: new Date(),
      alternates: {
        languages: {
          ro: "https://bbcredit.md/ro-Ro/contacts",
          ru: "https://bbcredit.md/ru-RU/contacts",
        },
      },
    },
  ];
}
