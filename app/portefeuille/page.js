import HeroPortefeuille   from "@/components/pages/portefeuille/HeroPortefeuille"
import SecNav             from "@/components/pages/portefeuille/SecNav"
import SegmentLogistique  from "@/components/pages/portefeuille/SegmentLogistique"
import SegmentBureaux     from "@/components/pages/portefeuille/SegmentBureaux"
import SegmentResidentiel from "@/components/pages/portefeuille/SegmentResidentiel"
import SegmentRetail      from "@/components/pages/portefeuille/SegmentRetail"
import SegmentTerrains    from "@/components/pages/portefeuille/SegmentTerrains"
import FooterCTA          from "@/components/sections/FooterCTA"
import JsonLd             from "@/components/seo/JsonLd"
import { buildMetadata, orgSchema, breadcrumbSchema, webPageSchema, serviceSchema, SITE } from "@/lib/seo"

export const metadata = buildMetadata({
  title:       "Portefeuille Immobilier Maroc — Location Entrepôts, Bureaux, Résidentiel",
  description: "Découvrez le portefeuille premium de Softgroup Immobilier : entrepôts logistiques & industriels, bureaux haut de gamme, résidences de prestige, espaces commerciaux et terrains à Casablanca, Tanger, Kénitra, Agadir.",
  path:        "/portefeuille",
  keywords: [
    "entrepôt location casablanca",
    "location bureau casablanca",
    "bureau haut de gamme maroc",
    "résidence prestige casablanca",
    "terrain industriel maroc",
    "parc logistique maroc",
    "location entrepôt tanger kénitra agadir",
    "immobilier tertiaire maroc",
    "retail commercial maroc",
  ],
})

export default function PortefeuillePage() {
  return (
    <main>
      <JsonLd data={[
        orgSchema(),
        webPageSchema({
          title:       "Portefeuille Immobilier Maroc — Location Entrepôts, Bureaux, Résidentiel",
          description: "Portefeuille premium Softgroup : 5 segments immobiliers dans les 4 pôles économiques du Maroc.",
          path:        "/portefeuille",
        }),
        breadcrumbSchema([
          { name: "Accueil",              path: "/" },
          { name: "Portefeuille d'actifs", path: "/portefeuille" },
        ]),
        {
          "@context":   "https://schema.org",
          "@type":      "CollectionPage",
          "@id":        `${SITE.url}/portefeuille#collectionpage`,
          url:          `${SITE.url}/portefeuille`,
          name:         "Portefeuille d'actifs immobiliers — Softgroup Immobilier",
          description:  "5 segments immobiliers — logistique, bureaux, résidentiel, retail, terrains — dans 4 villes du Maroc.",
          provider:     { "@id": `${SITE.url}/#organization` },
        },
      ]} />

      <HeroPortefeuille />
      <SecNav />
      <SegmentLogistique />
      <SegmentResidentiel />
      <SegmentBureaux />
      <SegmentRetail />
      <SegmentTerrains />
      <FooterCTA />
    </main>
  )
}
