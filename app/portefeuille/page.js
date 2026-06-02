import HeroPortefeuille   from "@/components/pages/portefeuille/HeroPortefeuille"
import SecNav             from "@/components/pages/portefeuille/SecNav"
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
      {/* 1. Hero */}
      <HeroPortefeuille />

      {/* 2. Sticky segment navigation */}
      <SecNav />

      {/* 3. Segment 01 — Logistique & Industriel */}
      <SegmentLogistique />

      {/* 4. Segment 02 — Bureaux & Centres d'Affaires */}
      <SegmentBureaux />

      {/* 5. Segment 03 — Résidentiel de Prestige */}
      <SegmentResidentiel />

      {/* 6. Segment 04 — Retail & Commerce */}
      <SegmentRetail />

      {/* 7. Segment 05 — Terrains & Développements */}
      <SegmentTerrains />

      {/* 8. CTA + Footer */}
      <FooterCTA />
    </main>
  )
}
