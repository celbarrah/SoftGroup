import ActualitesPage from "@/components/pages/actualites/ActualitesPage"
import FooterCTA from "@/components/sections/FooterCTA"

export const metadata = {
  title: "Actualités — Soft Group Immobilier",
  description: "Suivez les dernières actualités, projets et annonces de Soft Group Immobilier — acteur de référence de l'immobilier logistique, tertiaire et résidentiel au Maroc.",
}

export default function Actualites() {
  return (
    <>
    <ActualitesPage />
    <FooterCTA />
    </>
  )
}
