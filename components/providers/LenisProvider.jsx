"use client"

import { useEffect } from "react"
import Lenis from "lenis"

/**
 * LenisProvider
 * ─────────────────────────────────────────────────────────
 * Initialises Lenis smooth scroll globally for the entire app.
 * Must be a Client Component since it uses useEffect + browser APIs.
 *
 * Place at the root layout level so every page benefits.
 *
 * Lenis intercepts the native scroll and replaces it with a
 * momentum-based, exponential ease-out curve — giving the site
 * the buttery scroll feel expected from luxury brands.
 */
export default function LenisProvider({ children }) {
  useEffect(() => {
    /* ── Create Lenis instance ──────────────────────── */
    const lenis = new Lenis({
      duration: 1.2,                                          // scroll duration in seconds
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // expo ease-out
      orientation: "vertical",
      smoothWheel: true,
    })

    /* ── rAF loop — feeds time into Lenis each frame ── */
    let animId
    function raf(time) {
      lenis.raf(time)
      animId = requestAnimationFrame(raf)
    }
    animId = requestAnimationFrame(raf)

    /* ── Cleanup on unmount ─────────────────────────── */
    return () => {
      cancelAnimationFrame(animId)
      lenis.destroy()
    }
  }, [])

  // LenisProvider is transparent — just renders children
  return children
}
