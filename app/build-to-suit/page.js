import HeroBTS       from "@/components/pages/build-to-suit/HeroBTS"
import PromesseBTS   from "@/components/pages/build-to-suit/PromesseBTS"
import ApprocheBTS   from "@/components/pages/build-to-suit/ApprocheBTS"
import ProcessBTS    from "@/components/pages/build-to-suit/ProcessBTS"
import SolutionsBTS  from "@/components/pages/build-to-suit/SolutionsBTS"
import AvantagesBTS  from "@/components/pages/build-to-suit/AvantagesBTS"
import EngagementBTS from "@/components/pages/build-to-suit/EngagementBTS"
import FooterCTA     from "@/components/sections/FooterCTA"
import Footer        from "@/components/layout/Footer"

export const metadata = {
  title: "Build-to-Suit — Clé en main | Softgroup Immobilier",
  description: "Softgroup conçoit, finance et livre votre bâtiment industriel, logistique ou tertiaire sur mesure — exactement selon vos exigences, en moins de 12 mois, au prix fixé à la signature.",
}

export default function BuildToSuitPage() {
  return (
    <main>
      {/* 1. Hero plein écran */}
      <HeroBTS />

      {/* 2. La Promesse Softgroup — 3 piliers */}
      <PromesseBTS />

      {/* 3. Approche & Capacités — image + texte */}
      <ApprocheBTS />

      {/* 4. Méthodologie — frise 5 étapes */}
      <ProcessBTS />

      {/* 5. Solutions clés en main — rail horizontal */}
      <SolutionsBTS />

      {/* 6. Notre Plus-Value — KPI sidebar + 2×2 grid */}
      <AvantagesBTS />

      {/* 7. Catalyseur de croissance — 5 engagements */}
      <EngagementBTS />

      {/* 8. CTA + Footer */}
      <FooterCTA />
      <Footer />
    </main>
  )
}
