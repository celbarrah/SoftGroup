import HeroBTS       from "@/components/pages/build-to-suit/HeroBTS"
import PromesseBTS   from "@/components/pages/build-to-suit/PromesseBTS"
import ApprocheBTS   from "@/components/pages/build-to-suit/ApprocheBTS"
import ProcessBTS    from "@/components/pages/build-to-suit/ProcessBTS"
import SolutionsBTS  from "@/components/pages/build-to-suit/SolutionsBTS"
import AvantagesBTS  from "@/components/pages/build-to-suit/AvantagesBTS"
import EngagementBTS from "@/components/pages/build-to-suit/EngagementBTS"
import FooterCTABTS  from "@/components/sections/FooterCTA-BTS"
import JsonLd        from "@/components/seo/JsonLd"
import { buildMetadata, orgSchema, breadcrumbSchema, webPageSchema, serviceSchema, faqSchema, SITE } from "@/lib/seo"

export const metadata = buildMetadata({
  title:       "Build-to-Suit Maroc — Bâtiment Industriel & Logistique Clé en Main",
  description: "Softgroup conçoit, finance et livre votre bâtiment industriel, logistique ou tertiaire sur mesure — exactement selon vos exigences, en moins de 12 mois, au prix fixé à la signature.",
  path:        "/build-to-suit",
  keywords: [
    "build to suit maroc",
    "bâtiment clé en main maroc",
    "entrepôt sur mesure maroc",
    "construction industrielle maroc",
    "plateforme logistique clé en main",
    "bâtiment industriel maroc",
    "build to suit casablanca tanger kénitra",
    "promotion immobilière maroc",
  ],
})

const FAQS = [
  {
    question: "Qu'est-ce que le Build-to-Suit chez Softgroup Immobilier ?",
    answer:   "Le Build-to-Suit de Softgroup est une solution immobilière clé en main : Softgroup conçoit, finance et livre un bâtiment industriel, logistique ou tertiaire entièrement adapté aux besoins spécifiques de l'entreprise cliente, avec un prix et un délai garantis à la signature.",
  },
  {
    question: "Quel est le délai de livraison pour un projet Build-to-Suit ?",
    answer:   "Softgroup s'engage à livrer les projets Build-to-Suit en moins de 12 mois, selon la complexité du programme.",
  },
  {
    question: "Quels types de bâtiments Softgroup réalise-t-il en Build-to-Suit ?",
    answer:   "Softgroup réalise des entrepôts logistiques, des plateformes industrielles, des centres de distribution, des immeubles de bureaux et des bâtiments tertiaires sur mesure dans les principales zones économiques du Maroc.",
  },
]

export default function BuildToSuitPage() {
  return (
    <main>
      <JsonLd data={[
        orgSchema(),
        webPageSchema({
          title:       "Build-to-Suit Maroc — Bâtiment Industriel & Logistique Clé en Main",
          description: "Softgroup conçoit, finance et livre votre bâtiment sur mesure en moins de 12 mois.",
          path:        "/build-to-suit",
        }),
        breadcrumbSchema([
          { name: "Accueil",      path: "/" },
          { name: "Build-to-Suit", path: "/build-to-suit" },
        ]),
        serviceSchema({
          name:        "Build-to-Suit",
          description: "Construction et livraison clé en main de bâtiments industriels, logistiques et tertiaires sur mesure au Maroc — prix fixé à la signature, livraison en moins de 12 mois.",
          path:        "/build-to-suit",
          serviceType: "Construction",
        }),
        faqSchema(FAQS),
      ]} />

      <HeroBTS />
      <PromesseBTS />
      <ApprocheBTS />
      <ProcessBTS />
      <SolutionsBTS />
      <AvantagesBTS />
      <EngagementBTS />
      <FooterCTABTS />
    </main>
  )
}
