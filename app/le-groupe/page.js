import HeroGroupe         from "@/components/pages/le-groupe/HeroGroupe"
import StatsGroupe        from "@/components/pages/le-groupe/StatsGroupe"
import Timeline           from "@/components/pages/le-groupe/Timeline"
import SoftgroupImmobilier from "@/components/pages/le-groupe/SoftgroupImmobilier"
import Fondation          from "@/components/pages/le-groupe/Fondation"
import SoftCulture        from "@/components/pages/le-groupe/SoftCulture"
import FooterCTA          from "@/components/sections/FooterCTA"
import Footer             from "@/components/layout/Footer"

export const metadata = {
  title: "Softgroup Holding — Un Siècle d'Excellence au Maroc | Softgroup Immobilier",
  description: "Découvrez Softgroup Holding, l'un des plus importants holdings familiaux marocains depuis 1918. Textile, immobilier, fondation sociale, culture : un groupe multi-métiers au service du Maroc.",
}

export default function LeGroupePage() {
  return (
    <main>
      {/* 1. Hero plein écran — photo + titre */}
      <HeroGroupe />

      {/* 2. Chiffres clés du groupe */}
      <StatsGroupe />

      {/* 3. Frise chronologique interactive */}
      <Timeline />

      {/* 4. Softgroup Immobilier — filiale phare */}
      <SoftgroupImmobilier />

      {/* 5. Fondation Amine Kabbaj */}
      <Fondation />

      {/* 6. SoftCulture — mécénat culturel */}
      <SoftCulture />

      {/* 7. CTA + Footer */}
      <FooterCTA />
      <Footer />
    </main>
  )
}
