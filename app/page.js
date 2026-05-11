
import Hero           from "@/components/sections/Hero"
import IntroImpact    from "@/components/sections/IntroImpact"
import ClientsBand    from "@/components/sections/ClientsBand"
import Portfolio      from "@/components/sections/Portfolio"
import Services       from "@/components/sections/Services"
import ProcessSection from "@/components/sections/ProcessSection"
import FeaturedProperty from "@/components/sections/FeaturedProperty"
import TerritorialMap from "@/components/sections/TerritorialMap"
import Testimonials   from "@/components/sections/Testimonials"
import News           from "@/components/sections/News"
import FooterCTA      from "@/components/sections/FooterCTA"
import Footer         from "@/components/layout/Footer"

export default function Page() {
  return (
    <main>
      {/* 1. Hero plein écran avec vidéo + parallaxe */}
      <Hero />

      {/* 2. Chiffres clés / Impact */}
      <IntroImpact />

      {/* 3. Bande de logos partenaires (marquee) */}
      <ClientsBand />

      {/* 4. Portefeuille — 5 segments immobiliers */}
      <Portfolio />
      
      {/* 6. Notre Processus — 4 étapes */}
      <ProcessSection />

      {/* 5. Services & Gestion — HVA cards + accordéon infra */}
      <Services />

      {/* 7. Propriété en vedette */}
      <FeaturedProperty />

      {/* 8. Carte interactive du Maroc */}
      <TerritorialMap />

      {/* 9. Témoignages clients */}
      <Testimonials />

      {/* 10. Actualités — 3 articles */}
      <News />

      {/* 11. Bannière CTA avant footer */}
      <FooterCTA />

      {/* 12. Pied de page */}
      <Footer />
    </main>
  )
}
