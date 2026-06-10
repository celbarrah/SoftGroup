import { SITE } from "@/lib/seo"

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow:    "/",
        disallow: ["/api/"],
      },
      /* Allow AI crawlers full access for GEO/AEO */
      {
        userAgent: "GPTBot",
        allow:    "/",
      },
      {
        userAgent: "Google-Extended",
        allow:    "/",
      },
      {
        userAgent: "anthropic-ai",
        allow:    "/",
      },
      {
        userAgent: "Claude-Web",
        allow:    "/",
      },
      {
        userAgent: "PerplexityBot",
        allow:    "/",
      },
    ],
    sitemap: `${SITE.url}/sitemap.xml`,
    host:    SITE.url,
  }
}
