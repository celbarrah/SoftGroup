import { Cormorant_Garamond, DM_Sans } from "next/font/google"
import "./globals.css"
import ConditionalLayout from "@/components/providers/ConditionalLayout"

/* ─────────────────────────────────────────────────────────
   FONTS
   Cormorant Garamond → serif luxueux pour les titres
   DM Sans            → géométrique propre pour le corps
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

export const metadata = {
  title:       "SOFTGROUP Immobilier | L'Immobilier d'Excellence au Maroc",
  description: "Foncière d'exception | logistique, bureaux, résidentiel, retail et terrains. Implantés dans les 4 pôles économiques stratégiques du Maroc.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body>
        <ConditionalLayout>
          {children}
        </ConditionalLayout>
      </body>
    </html>
  )
}
