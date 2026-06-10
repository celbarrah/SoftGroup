import HeroGroupe          from "@/components/pages/le-groupe/HeroGroupe"
import StatsGroupe         from "@/components/pages/le-groupe/StatsGroupe"
import NavGroupe           from "@/components/pages/le-groupe/NavGroupe"
import PolesActivites      from "@/components/pages/le-groupe/PolesActivites"
import Timeline            from "@/components/pages/le-groupe/Timeline"
import SoftgroupImmobilier from "@/components/pages/le-groupe/SoftgroupImmobilier"
import Fondation           from "@/components/pages/le-groupe/Fondation"
import SoftCulture         from "@/components/pages/le-groupe/SoftCulture"
import FooterCTA           from "@/components/sections/FooterCTA"
import JsonLd              from "@/components/seo/JsonLd"
import { buildMetadata, orgSchema, breadcrumbSchema, webPageSchema } from "@/lib/seo"

export const metadata = buildMetadata({
  title:       "Le Groupe — Softgroup Holding, un siècle d'excellence au Maroc",
  description: "Découvrez Softgroup Holding, l'un des plus importants holdings familiaux marocains depuis 1918. Textile, immobilier, fondation sociale, culture : un groupe multi-métiers ancré dans l'histoire économique du Maroc.",
  path:        "/le-groupe",
  keywords: [
    "softgroup holding maroc",
    "groupe familial marocain",
    "holding marocain 1918",
    "textile immobilier maroc",
    "fondation amine kabbaj",
    "softculture maroc",
    "histoire softgroup",
  ],
})

export default function LeGroupePage() {
  return (
    <main>
      <JsonLd data={[
        orgSchema(),
        webPageSchema({
          title:       "Le Groupe — Softgroup Holding, un siècle d'excellence au Maroc",
          description: "Découvrez Softgroup Holding, l'un des plus importants holdings familiaux marocains depuis 1918.",
          path:        "/le-groupe",
        }),
        breadcrumbSchema([
          { name: "Accueil",   path: "/" },
          { name: "Le Groupe", path: "/le-groupe" },
        ]),
        {
          "@context":   "https://schema.org",
          "@type":      "AboutPage",
          "@id":        "https://www.softgroup.ma/le-groupe#aboutpage",
          url:          "https://www.softgroup.ma/le-groupe",
          name:         "Le Groupe — Softgroup Holding",
          description:  "Un siècle d'excellence industrielle et immobilière au Maroc.",
          about:        { "@id": "https://www.softgroup.ma/#organization" },
        },
      ]} />

      <HeroGroupe />
      <StatsGroupe />
      <NavGroupe />
      <PolesActivites />
      <Timeline />
      <SoftgroupImmobilier />
      <Fondation />
      <SoftCulture />
      <FooterCTA />
    </main>
  )
}
