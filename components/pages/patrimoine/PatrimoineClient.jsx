"use client"

import { useEffect, useState } from "react"
import Header    from "@/components/layout/Header"
import Footer    from "@/components/layout/Footer"
import FooterCTA from "@/components/sections/FooterCTA"

import P1Hero        from "./P1Hero"
import P2Souffle     from "./P2Souffle"
import P3Anfa        from "./P3Anfa"
import P4Temoins     from "./P4Temoins"
import P5Adresse     from "./P5Adresse"
import P6Ame         from "./P6Ame"
import P7Approfondit from "./P7Approfondit"
import P8Finale      from "./P8Finale"

/* ─────────────────────────────────────────────
   CONSTANTS
   ───────────────────────────────────────────── */
const PANEL_IDS = ["adp1","adp2","adp3","adp4","adp5","adp6","adp7","adp8"]
const ROMAN     = ["I","II","III","IV","V","VI","VII","VIII"]

const DOT_LABELS = [
  "Ouverture","Le souffle","1943","Les témoins",
  "Une adresse","L'Âme Art Déco","Il s'approfondit","Entre Mémoire & Avenir"
]

/* ─────────────────────────────────────────────
   MAIN ORCHESTRATOR
   ───────────────────────────────────────────── */
export default function PatrimoineClient() {
  const [activeIdx, setActiveIdx] = useState(0)

  /* ── Activate scroll-snap on the html element so:
        1. Panels snap correctly (window scroll, not a container)
        2. window.scrollY changes → Header auto-transitions
        3. Footer is reachable by scrolling past P8
        Cleaned up on unmount so other pages aren't affected.    ── */
  useEffect(() => {
    const html = document.documentElement
    html.style.scrollSnapType  = "y mandatory"
    html.style.scrollBehavior  = "smooth"
    html.style.overflowY       = "scroll"
    return () => {
      html.style.scrollSnapType  = ""
      html.style.scrollBehavior  = ""
      html.style.overflowY       = ""
    }
  }, [])

  /* ── IntersectionObserver: add ad-active class to DOM panels
        AND update rail state                                ── */
  useEffect(() => {
    const panels = PANEL_IDS.map(id => document.getElementById(id)).filter(Boolean)
    if (!panels.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("ad-active")
            const idx = PANEL_IDS.indexOf(entry.target.id)
            if (idx !== -1) {
              setActiveIdx(idx)
              document.querySelectorAll(".ad-dot").forEach((d, i) =>
                d.classList.toggle("active", i === idx)
              )
            }
          }
        })
      },
      { threshold: 0.5 }
    )
    panels.forEach(p => observer.observe(p))
    return () => observer.disconnect()
  }, [])

  /* ── Keyboard navigation ── */
  useEffect(() => {
    let scrolling = false
    const onKey = (e) => {
      if (scrolling) return
      const panels = PANEL_IDS.map(id => document.getElementById(id)).filter(Boolean)
      const cur = panels.findIndex(p => p.classList.contains("ad-active"))
      const idx = cur === -1 ? 0 : cur
      let next = idx
      if (e.key === "ArrowDown" || e.key === "PageDown" || e.key === " ") next = Math.min(panels.length - 1, idx + 1)
      else if (e.key === "ArrowUp" || e.key === "PageUp") next = Math.max(0, idx - 1)
      else return
      e.preventDefault()
      scrolling = true
      panels[next].scrollIntoView({ behavior: "smooth", block: "start" })
      setTimeout(() => { scrolling = false }, 900)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [])

  /* ── Mouse parallax on hero ornaments ── */
  useEffect(() => {
    const decor = document.querySelector(".ad-hero-decor")
    if (!decor) return
    const onMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 16
      const y = (e.clientY / window.innerHeight - 0.5) * 16
      decor.style.transform = `translate(${x}px, ${y}px)`
    }
    document.addEventListener("mousemove", onMove)
    return () => document.removeEventListener("mousemove", onMove)
  }, [])

  return (
    <div className="patrimoine-root">

      {/* ══════════════════════════════════════════
          STANDARD HEADER
          window.scrollY now changes naturally as
          the user scrolls → Header auto-transitions
          transparent → white after 60px.
          ══════════════════════════════════════════ */}
      <Header />

      {/* ══════════════════════════════════════════
          SIDE RAIL
          ══════════════════════════════════════════ */}
      <aside className="ad-rail" id="rail" aria-hidden="true">
        {PANEL_IDS.map((id, i) => (
          <a
            key={id}
            href={`#${id}`}
            className="ad-dot"
            data-i={i + 1}
            onClick={(e) => {
              e.preventDefault()
              document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" })
            }}
          >
            <span className="ad-label">{DOT_LABELS[i]}</span>
          </a>
        ))}
      </aside>

      {/* ══════════════════════════════════════════
          SCROLL WRAP — 8 snap panels
          Scroll-snap is applied to html (see useEffect above),
          not this container. This div is just a structural wrapper.
          ══════════════════════════════════════════ */}
      <div className="ad-scroll-wrap pb-20" 
       style={{
        WebkitClipPath: "polygon(0 0, 100% 0, 100% 97%, 0 100%)",
        clipPath:       "polygon(0 0, 100% 0, 100% 97%, 0 100%)",
      }}
      >
        <P1Hero />
        <P2Souffle />
        <P3Anfa />
        <P4Temoins />
        <P5Adresse />
        <P6Ame />
        <P7Approfondit />
        <P8Finale />
      </div>

      {/* ══════════════════════════════════════════
          FOOTER ZONE — outside the snap panels
          Reachable by scrolling past P8. Has
          scroll-snap-align: start so it snaps cleanly
          into view when approached from P8.
          ══════════════════════════════════════════ */}
      <div className="ad-footer-zone">
        <FooterCTA />
        <Footer />
      </div>

    </div>
  )
}
