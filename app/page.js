import Hero               from "@/components/sections/Hero"
import IntroImpact        from "@/components/sections/IntroImpact"
import ClientsBand        from "@/components/sections/ClientsBand"
import Portfolio          from "@/components/sections/Portfolio"
import PropertyManagementV3 from "@/components/sections/PropertyManagementV3"
import BuildToSuitTeaser  from "@/components/sections/BuildToSuitTeaser"
import TerritorialMapCards from "@/components/sections/TerritorialMapCards"
import Testimonials       from "@/components/sections/Testimonials"
import FooterCTA          from "@/components/sections/FooterCTA"
import JsonLd             from "@/components/seo/JsonLd"
import { buildMetadata, orgSchema, websiteSchema, localBusinessSchema, webPageSchema, faqSchema, SITE } from "@/lib/seo"

export const metadata = buildMetadata({
  title:       "Softgroup Immobilier | L'Immobilier d'Excellence au Maroc",
  description: "Foncière d'exception au Maroc — entrepôts logistiques 100 000 m², bureaux haut de gamme, résidentiel de prestige, retail et terrains à Casablanca, Tanger, Kénitra et Agadir.",
  path:        "/",
  keywords: [
    "immobilier maroc",
    "entrepôt logistique maroc",
    "location bureau casablanca",
    "immobilier logistique casablanca",
    "résidentiel prestige maroc",
    "foncier maroc",
    "parc industriel maroc",
    "softgroup immobilier",
    "immobilier tanger kénitra agadir",
  ],
})

const FAQS = [
  {
    question: "Qu'est-ce que Softgroup Immobilier ?",
    answer:   "Softgroup Immobilier est la filiale immobilière de Softgroup Holding, l'un des plus importants holdings familiaux du Maroc depuis 1918. La foncière gère un portefeuille diversifié : entrepôts logistiques, plateformes industrielles, bureaux haut de gamme, résidentiel de prestige, retail et terrains à Casablanca, Tanger, Kénitra et Agadir.",
  },
  {
    question: "Quels types de biens Softgroup propose-t-il à la location ?",
    answer:   "Softgroup propose 5 segments : entrepôts & plateformes logistiques, bureaux & centres d'affaires, résidentiel de prestige, espaces retail & commerciaux, et terrains & développements fonciers — disponibles dans les 4 pôles économiques du Maroc.",
  },
  {
    question: "Qu'est-ce que le service Build-to-Suit de Softgroup ?",
    answer:   "Le Build-to-Suit de Softgroup permet aux entreprises de faire concevoir, financer et livrer un bâtiment industriel, logistique ou tertiaire entièrement sur mesure, clé en main, avec un prix fixé à la signature et un délai de livraison en moins de 12 mois.",
  },
  {
    question: "Dans quelles villes Softgroup Immobilier est-il présent ?",
    answer:   "Softgroup Immobilier est implanté dans les 4 pôles économiques stratégiques du Maroc : Casablanca, Tanger, Kénitra et Agadir.",
  },
]

export default function Page() {
  return (
    <main>
      <JsonLd data={[orgSchema(), websiteSchema(), localBusinessSchema(), webPageSchema({
        title:       "Softgroup Immobilier | L'Immobilier d'Excellence au Maroc",
        description: "Foncière d'exception au Maroc — entrepôts logistiques, bureaux haut de gamme, résidentiel de prestige, retail et terrains.",
        path:        "/",
      }), faqSchema(FAQS)]} />

      <Hero />
      <IntroImpact />
      <ClientsBand />
      <Portfolio />
      <PropertyManagementV3 />
      <BuildToSuitTeaser />
      <TerritorialMapCards />
      <Testimonials />
      <FooterCTA />
    </main>
  )
}
