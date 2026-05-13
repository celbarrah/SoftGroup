import HeroPortefeuille   from "@/components/pages/portefeuille/HeroPortefeuille"
import SegmentLogistique  from "@/components/pages/portefeuille/SegmentLogistique"
import SegmentBureaux     from "@/components/pages/portefeuille/SegmentBureaux"
import SegmentResidentiel from "@/components/pages/portefeuille/SegmentResidentiel"
import SegmentRetail      from "@/components/pages/portefeuille/SegmentRetail"
import SegmentTerrains    from "@/components/pages/portefeuille/SegmentTerrains"
import FooterCTA          from "@/components/sections/FooterCTA"
import Footer             from "@/components/layout/Footer"

export const metadata = {
  title: "Portefeuille Immobilier Maroc — Location Entrepôts, Bureaux, Résidentiel | Softgroup Immobilier",
  description: "Découvrez le portefeuille premium de Softgroup Immobilier : entrepôts logistiques, bureaux haut de gamme, résidences de prestige, espaces commerciaux et terrains à Casablanca, Tanger, Kénitra, Agadir.",
}

export default function PortefeuillePage() {
  return (
    <main>
      {/* 1. Hero — chiffres clés */}
      <HeroPortefeuille />

      {/* 2. Segment 01 — Logistique & Industriel */}
      <SegmentLogistique />

      {/* 3. Segment 02 — Bureaux & Centres d'Affaires */}
      <SegmentBureaux />

      {/* 4. Segment 03 — Résidentiel de Prestige */}
      <SegmentResidentiel />

      {/* 5. Segment 04 — Retail & Commerce */}
      <SegmentRetail />

      {/* 6. Segment 05 — Terrains & Développements */}
      <SegmentTerrains />

      {/* 7. CTA + Footer */}
      <FooterCTA />
      <Footer />
    </main>
  )
}
