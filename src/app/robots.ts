import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // No disallow rules - allow everything
      },
    ],
    sitemap: "https://www.webcraft.tr/sitemap.xml",
    host: "https://www.webcraft.tr",
  };
}
