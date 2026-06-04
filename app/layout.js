import { Cormorant_Garamond, DM_Sans, Cinzel, Limelight } from "next/font/google"
import "./globals.css"
import ConditionalLayout from "@/components/providers/ConditionalLayout"

/* ─────────────────────────────────────────────────────────
   FONTS
   Cormorant Garamond → serif luxueux pour les titres
   DM Sans            → géométrique propre pour le corps
   Cinzel             → display Art Déco — patrimoine page
   ───────────────────────────────────────────────────────── */
const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets:  ["latin"],
  weight:   ["300", "400", "500", "600"],
  style:    ["normal", "italic"],
  display:  "swap",
})

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets:  ["latin"],
  weight:   ["300", "400", "500", "600", "700"],
  display:  "swap",
})

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets:  ["latin"],
  weight:   ["400", "500", "600", "700"],
  display:  "swap",
})

const limelight = Limelight({
  variable: "--font-limelight",
  subsets:  ["latin"],
  weight:   ["400"],
  display:  "swap",
})

export const metadata = {
  title:       "SOFTGROUP Immobilier | L'Immobilier d'Excellence au Maroc",
  description: "Foncière d'exception | logistique, bureaux, résidentiel, retail et terrains. Implantés dans les 4 pôles économiques stratégiques du Maroc.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${cormorant.variable} ${dmSans.variable} ${cinzel.variable} ${limelight.variable}`}>
      <body>
        <ConditionalLayout>
          {children}
        </ConditionalLayout>
      </body>
    </html>
  )
}
