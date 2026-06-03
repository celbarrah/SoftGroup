"use client"

import { usePathname } from "next/navigation"
import LenisProvider from "@/components/providers/LenisProvider"
import Header        from "@/components/layout/Header"
import Footer        from "@/components/layout/Footer"
import WhatsAppButton from "@/components/ui/WhatsAppButton"

/**
 * ConditionalLayout
 * ─────────────────────────────────────────────────────────
 * Wraps the global chrome (Header, Footer, Lenis, WhatsApp)
 * but suppresses all of it on routes that declare themselves
 * as standalone immersive experiences (like Patrimoine Art Déco).
 *
 * Standalone routes: /patrimoine-art-deco
 */
const STANDALONE_ROUTES = ["/patrimoine-art-deco"]

export default function ConditionalLayout({ children }) {
  const pathname = usePathname()
  const isStandalone = STANDALONE_ROUTES.some((r) => pathname.startsWith(r))

  if (isStandalone) {
    /* No Lenis (conflicts with scroll-snap), no Header, no Footer */
    return <>{children}</>
  }

  return (
    <LenisProvider>
      <Header />
      {children}
      <Footer />
      <WhatsAppButton />
    </LenisProvider>
  )
}
