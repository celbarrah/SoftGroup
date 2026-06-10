import HeroGestion    from "@/components/pages/gestion-valorisation/HeroGestion"
import VisionGestion  from "@/components/pages/gestion-valorisation/VisionGestion"
import ProcessGestion from "@/components/pages/gestion-valorisation/ProcessGestion"
import ServicesGrid   from "@/components/pages/gestion-valorisation/ServicesGrid"
import FooterCTA      from "@/components/sections/FooterCTA"
import JsonLd         from "@/components/seo/JsonLd"
import { buildMetadata, orgSchema, breadcrumbSchema, webPageSchema, serviceSchema, faqSchema, SITE } from "@/lib/seo"

export const metadata = buildMetadata({
  title:       "Gestion & Valorisation — Property & Facility Management au Maroc",
  description: "Service après-location de Softgroup Immobilier : property management, facility management, maintenance technique, sécurité et accompagnement personnalisé 24h/24 pour vos actifs au Maroc.",
  path:        "/gestion-valorisation",
  keywords: [
    "property management maroc",
    "facility management maroc",
    "gestion immobilière casablanca",
    "service après location maroc",
    "maintenance bâtiment maroc",
    "gestionnaire actifs immobiliers maroc",
    "valorisation immobilière maroc",
  ],
})

const FAQS = [
  {
    question: "Qu'est-ce que le Property Management proposé par Softgroup ?",
    answer:   "Le Property Management de Softgroup couvre la gestion administrative, juridique et financière de vos actifs immobiliers au Maroc : suivi des loyers, gestion des locataires, reporting financier et optimisation de la rentabilité.",
  },
  {
    question: "Quelle est la différence entre Property Management et Facility Management ?",
    answer:   "Le Property Management concerne la gestion stratégique et financière de l'actif, tandis que le Facility Management gère les services techniques et opérationnels du bâtiment : maintenance, sécurité, nettoyage, énergie.",
  },
]

export default function GestionValorisationPage() {
  return (
    <main>
      <JsonLd data={[
        orgSchema(),
        webPageSchema({
          title:       "Gestion & Valorisation — Property & Facility Management au Maroc",
          description: "Service après-location complet pour vos actifs immobiliers au Maroc.",
          path:        "/gestion-valorisation",
        }),
        breadcrumbSchema([
          { name: "Accueil",            path: "/" },
          { name: "Gestion & Valorisation", path: "/gestion-valorisation" },
        ]),
        serviceSchema({
          name:        "Property & Facility Management",
          description: "Gestion administrative, technique et opérationnelle d'actifs immobiliers au Maroc — property management, facility management, maintenance et sécurité 24h/24.",
          path:        "/gestion-valorisation",
          serviceType: "Property Management",
        }),
        faqSchema(FAQS),
      ]} />

      <HeroGestion />
      <VisionGestion />
      <ProcessGestion />
      <ServicesGrid />
      <FooterCTA />
    </main>
  )
}
