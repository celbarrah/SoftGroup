import ActualitesPage from "@/components/pages/actualites/ActualitesPage"
import FooterCTA      from "@/components/sections/FooterCTA"
import JsonLd         from "@/components/seo/JsonLd"
import { buildMetadata, orgSchema, breadcrumbSchema, webPageSchema, SITE } from "@/lib/seo"
import { ARTICLES } from "@/lib/articles"

export const metadata = buildMetadata({
  title:       "Actualités Immobilier Maroc — Projets, Marchés & Insights",
  description: "Suivez les dernières actualités, projets et annonces de Softgroup Immobilier — acteur de référence de l'immobilier logistique, tertiaire et résidentiel au Maroc.",
  path:        "/actualites",
  type:        "website",
  keywords: [
    "actualités immobilier maroc",
    "news parc logistique maroc",
    "marché immobilier maroc",
    "immobilier logistique actualité",
    "investissement immobilier maroc",
    "softgroup actualités",
  ],
})

export default function Actualites() {
  return (
    <>
      <JsonLd data={[
        orgSchema(),
        webPageSchema({
          title:       "Actualités Immobilier Maroc — Projets, Marchés & Insights",
          description: "Les dernières actualités de Softgroup Immobilier.",
          path:        "/actualites",
        }),
        breadcrumbSchema([
          { name: "Accueil",    path: "/" },
          { name: "Actualités", path: "/actualites" },
        ]),
        {
          "@context":   "https://schema.org",
          "@type":      "Blog",
          "@id":        `${SITE.url}/actualites#blog`,
          url:          `${SITE.url}/actualites`,
          name:         "Actualités — Softgroup Immobilier",
          description:  "Actualités, projets et insights sur l'immobilier au Maroc.",
          inLanguage:   "fr",
          publisher:    { "@id": `${SITE.url}/#organization` },
          blogPost:     ARTICLES.map(a => ({
            "@type":          "BlogPosting",
            headline:         a.title,
            url:              `${SITE.url}/actualites/${a.slug}`,
            description:      a.excerpt,
            image:            a.image,
            datePublished:    a.date,
            author:           { "@id": `${SITE.url}/#organization` },
          })),
        },
      ]} />
      <ActualitesPage />
      <FooterCTA />
    </>
  )
}
