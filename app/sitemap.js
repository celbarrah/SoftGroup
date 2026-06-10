import { SITE } from "@/lib/seo"
import { ARTICLES } from "@/lib/articles"

/* ── Static pages ───────────────────────────────────────────── */
const STATIC_PAGES = [
  {
    path:            "/",
    changeFrequency: "monthly",
    priority:        1.0,
  },
  {
    path:            "/le-groupe",
    changeFrequency: "yearly",
    priority:        0.8,
  },
  {
    path:            "/portefeuille",
    changeFrequency: "monthly",
    priority:        0.9,
  },
  {
    path:            "/gestion-valorisation",
    changeFrequency: "yearly",
    priority:        0.8,
  },
  {
    path:            "/build-to-suit",
    changeFrequency: "yearly",
    priority:        0.8,
  },
  {
    path:            "/patrimoine-art-deco",
    changeFrequency: "yearly",
    priority:        0.6,
  },
  {
    path:            "/actualites",
    changeFrequency: "weekly",
    priority:        0.9,
  },
]

/* ── Sitemap generator ──────────────────────────────────────── */
export default function sitemap() {
  const now = new Date()

  const staticUrls = STATIC_PAGES.map(({ path, changeFrequency, priority }) => ({
    url:             `${SITE.url}${path}`,
    lastModified:    now,
    changeFrequency,
    priority,
  }))

  const articleUrls = ARTICLES.map((a) => ({
    url:             `${SITE.url}/actualites/${a.slug}`,
    lastModified:    now,
    changeFrequency: "monthly",
    priority:        0.75,
  }))

  return [...staticUrls, ...articleUrls]
}
