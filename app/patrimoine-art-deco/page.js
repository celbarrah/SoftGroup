import PatrimoineClient from "@/components/pages/patrimoine/PatrimoineClient"
import JsonLd           from "@/components/seo/JsonLd"
import { buildMetadata, orgSchema, breadcrumbSchema, webPageSchema, SITE } from "@/lib/seo"

export const metadata = buildMetadata({
  title:       "Patrimoine Art Déco — L'Hôtel d'Anfa, Casablanca",
  description: "L'annexe de l'Hôtel d'Anfa — classée patrimoine historique de Casablanca, témoin de la Conférence de 1943, restaurée dans l'esprit Art Déco par Softgroup Immobilier.",
  path:        "/patrimoine-art-deco",
  keywords: [
    "hôtel anfa casablanca",
    "patrimoine art déco casablanca",
    "conférence casablanca 1943",
    "patrimoine historique maroc",
    "art déco maroc",
    "softgroup patrimoine",
    "restauration patrimoine casablanca",
  ],
})

export default function PatrimoinePage() {
  return (
    <>
      <JsonLd data={[
        orgSchema(),
        webPageSchema({
          title:       "Patrimoine Art Déco — L'Hôtel d'Anfa, Casablanca",
          description: "L'annexe de l'Hôtel d'Anfa — classée patrimoine historique de Casablanca, témoin de la Conférence de 1943.",
          path:        "/patrimoine-art-deco",
        }),
        breadcrumbSchema([
          { name: "Accueil",           path: "/" },
          { name: "Patrimoine Art Déco", path: "/patrimoine-art-deco" },
        ]),
        {
          "@context":   "https://schema.org",
          "@type":      "LandmarksOrHistoricalBuildings",
          "@id":        `${SITE.url}/patrimoine-art-deco#landmark`,
          name:         "Hôtel d'Anfa — Annexe historique",
          description:  "Bâtiment Art Déco classé patrimoine historique de Casablanca. Témoin de la Conférence de Casablanca de janvier 1943. Restauré par Softgroup Immobilier.",
          url:          `${SITE.url}/patrimoine-art-deco`,
          address: {
            "@type":         "PostalAddress",
            addressLocality: "Casablanca",
            addressCountry:  "MA",
          },
          historicEvent: {
            "@type":       "Event",
            name:          "Conférence de Casablanca",
            startDate:     "1943-01-14",
            endDate:       "1943-01-24",
            description:   "Conférence entre Franklin D. Roosevelt et Winston Churchill, tenue à l'Hôtel d'Anfa en janvier 1943.",
          },
          owner: { "@id": `${SITE.url}/#organization` },
        },
      ]} />
      <PatrimoineClient />
    </>
  )
}
