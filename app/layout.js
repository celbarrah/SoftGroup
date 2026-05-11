import { Geist, Playfair_Display } from "next/font/google"
import { Cormorant_Garamond, DM_Sans } from "next/font/google"
import "./globals.css"
import LenisProvider    from "@/components/providers/LenisProvider"
import Header           from "@/components/layout/Header"
import WhatsAppButton   from "@/components/ui/WhatsAppButton"

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
  weight:   ["300", "400", "500", "600"],
  display:  "swap",
})
export const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
})

export const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

export const metadata = {
  title:       "SOFTGROUP Immobilier | L'Immobilier d'Excellence au Maroc",
  description: "Foncière d'exception | logistique, bureaux, résidentiel, retail et terrains. Implantés dans les 4 pôles économiques stratégiques du Maroc.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${geist.variable} ${playfair.variable}`}>
      <body>
        <LenisProvider>
          <Header />
          {children}
          {/* Bouton WhatsApp sticky — visible sur toutes les pages */}
          <WhatsAppButton />
        </LenisProvider>
      </body>
    </html>
  )
}
