import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // No disallow rules - allow everything
      },
      // AI Crawlers - Explicitly allow AI models to crawl and index
      {
        userAgent: "GPTBot",
        allow: "/",
      },
      {
        userAgent: "ChatGPT-User",
        allow: "/",
      },
      {
        userAgent: "Claude-Web",
        allow: "/",
      },
      {
        userAgent: "ClaudeBot",
        allow: "/",
      },
      {
        userAgent: "anthropic-ai",
        allow: "/",
      },
      {
        userAgent: "PerplexityBot",
        allow: "/",
      },
      {
        userAgent: "Omgilibot",
        allow: "/",
      },
      {
        userAgent: "Google-Extended",
        allow: "/",
      },
    ],
    sitemap: "https://www.webcraft.tr/sitemap.xml",
    host: "https://www.webcraft.tr",
  };
}
