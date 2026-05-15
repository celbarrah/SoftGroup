
import Hero                    from "@/components/sections/Hero"
import PropertyShowcase        from "@/components/sections/PropertyShowcase"
import IntroImpact             from "@/components/sections/IntroImpact"
import ClientsBand             from "@/components/sections/ClientsBand"
import Portfolio               from "@/components/sections/Portfolio"
import ProcessSection          from "@/components/sections/ProcessSection"
import PropertyManagement      from "@/components/sections/PropertyManagement"
import PropertyManagementV2    from "@/components/sections/PropertyManagementV2"
import PropertyManagementV3    from "@/components/sections/PropertyManagementV3"
import TerritorialMap          from "@/components/sections/TerritorialMap"
import TerritorialMapPremium   from "@/components/sections/TerritorialMapPremium"
import TerritorialMapCards     from "@/components/sections/TerritorialMapCards"
import Testimonials            from "@/components/sections/Testimonials"
import FooterCTA               from "@/components/sections/FooterCTA"
import Footer                  from "@/components/layout/Footer"

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

      {/* 7. Property & Facility Management V3 — pure CSS sticky stacking */}
      <PropertyManagementV3 />
      {false && <PropertyManagementV2 />}
      {false && <PropertyManagement />}

      {/* 8. Cartes villes — hover expand animation */}
      <TerritorialMapCards />
      {false && <TerritorialMap />}
      {false && <TerritorialMapPremium />}

      {/* 9. Témoignages clients — carousel auto-advance */}
      <Testimonials />

      {/* 10. Bannière CTA avant footer */}
      <FooterCTA />

      {/* 11. Pied de page */}
      <Footer />
    </main>
  )
}
