import HeroGestion    from "@/components/pages/gestion-valorisation/HeroGestion"
import StatsGestion   from "@/components/pages/gestion-valorisation/StatsGestion"
import VisionGestion  from "@/components/pages/gestion-valorisation/VisionGestion"
import ProcessGestion from "@/components/pages/gestion-valorisation/ProcessGestion"
import ServicesGrid   from "@/components/pages/gestion-valorisation/ServicesGrid"
import FooterCTA      from "@/components/sections/FooterCTA"
import Footer         from "@/components/layout/Footer"

export const metadata = {
  title: "Gestion & Valorisation — Property & Facility Management | Softgroup Immobilier",
  description: "Découvrez le service après-location de Softgroup Immobilier : property management, facility management, maintenance technique, sécurité et accompagnement personnalisé 24h/24.",
}

export default function GestionValorisationPage() {
  return (
    <main>
      {/* 1. Hero plein écran */}
      <HeroGestion />

      {/* 2. 4 chiffres clés en bandeau */}
      <StatsGestion />

      {/* 3. Vision + interlocuteur dédié */}
      <VisionGestion />

      {/* 4. Protocole 4 étapes */}
      <ProcessGestion />

      {/* 5. Écosystème 5 services */}
      <ServicesGrid />

      {/* 6. CTA + Footer */}
      <FooterCTA />
      <Footer />
    </main>
  )
}
