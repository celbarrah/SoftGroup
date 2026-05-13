
import Hero               from "@/components/sections/Hero"
import PropertyShowcase   from "@/components/sections/PropertyShowcase"
import IntroImpact        from "@/components/sections/IntroImpact"
import ClientsBand        from "@/components/sections/ClientsBand"
import Portfolio          from "@/components/sections/Portfolio"
import ProcessSection     from "@/components/sections/ProcessSection"
import PropertyManagement from "@/components/sections/PropertyManagement"
import TerritorialMap     from "@/components/sections/TerritorialMap"
import Testimonials       from "@/components/sections/Testimonials"
import FooterCTA          from "@/components/sections/FooterCTA"
import Footer             from "@/components/layout/Footer"

export default function Page() {
  return (
    <main>
      {/* 1. Hero plein écran — vidéo + parallaxe */}
      <Hero />

      {/* 2. Bannière propriété résidentielle (héro secondaire) — masqué temporairement */}
      {false && <PropertyShowcase />}

      {/* 3. Chiffres clés — fond noir premium */}
      <IntroImpact />

      {/* 4. Logos partenaires défilants */}
      <ClientsBand />

      {/* 5. Portefeuille — 5 segments immobiliers */}
      <Portfolio />

      {/* 6. Notre Processus — 4 étapes — masqué temporairement */}
      {false && <ProcessSection />}

      {/* 7. Property & Facility Management */}
      <PropertyManagement />

      {/* 8. Carte interactive du Maroc */}
      <TerritorialMap />

      {/* 9. Témoignages clients — carousel avec logos */}
      <Testimonials />

      {/* 10. Bannière CTA avant footer */}
      <FooterCTA />

      {/* 11. Pied de page */}
      <Footer />
    </main>
  )
}
