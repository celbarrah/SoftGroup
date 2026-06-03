"use client"

import { useEffect, useRef, useState } from "react"
import SideNav from "@/components/layout/SideNav"

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
   BRAND MARK SVG
   ───────────────────────────────────────────── */
function BrandMark() {
  return (
    <svg viewBox="0 0 40 40" fill="none" className="ad-mark">
      <circle cx="20" cy="20" r="19" stroke="#7d5215" strokeWidth="1"/>
      <path d="M20 4 L36 20 L20 36 L4 20 Z" stroke="#7d5215" strokeWidth="1" fill="none"/>
      <path d="M20 12 L28 20 L20 28 L12 20 Z" fill="#7d5215"/>
    </svg>
  )
}

/* ─────────────────────────────────────────────
   MAIN ORCHESTRATOR
   ───────────────────────────────────────────── */
export default function PatrimoineClient() {
  const [activeIdx, setActiveIdx] = useState(0)
  const [navOpen,   setNavOpen]   = useState(false)

  /* ── IntersectionObserver: add ad-active class to DOM panels
        AND update counter state                                ── */
  useEffect(() => {
    const panels = PANEL_IDS.map(id => document.getElementById(id)).filter(Boolean)
    if (!panels.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Add active class directly → triggers CSS reveal of .ad-r elements
            entry.target.classList.add("ad-active")
            const idx = PANEL_IDS.indexOf(entry.target.id)
            if (idx !== -1) {
              setActiveIdx(idx)
              // Update rail dots
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
          TOP NAV — Brand LEFT · [Counter + Hamburger] RIGHT
          ══════════════════════════════════════════ */}
      <nav className="ad-nav">
        {/* Brand — left */}
        <div className="ad-brand">
          <BrandMark />
          <div className="ad-b-text">
            <span className="ad-b1">SoftGroup</span>
            <span className="ad-b2">Gardien d&apos;un héritage</span>
          </div>
        </div>

        {/* Counter + Hamburger — right, combined */}
        <div className="ad-nav-right">
          <div className="ad-counter">
            <span className="ad-cur">{ROMAN[activeIdx]}</span>
            <span className="ad-sep" />
            <span className="ad-tot">VIII</span>
          </div>
          <button
            className="ad-hamburger"
            onClick={() => setNavOpen(true)}
            aria-label="Ouvrir le menu"
          >
            <svg width="22" height="16" viewBox="0 0 22 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
              <line x1="0" y1="2"  x2="22" y2="2"/>
              <line x1="0" y1="8"  x2="22" y2="8"/>
              <line x1="0" y1="14" x2="22" y2="14"/>
            </svg>
          </button>
        </div>
      </nav>

      {/* SideNav — same component used on all other pages */}
      <SideNav isOpen={navOpen} onClose={() => setNavOpen(false)} />

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
          ══════════════════════════════════════════ */}
      <div className="ad-scroll-wrap">
        <P1Hero />
        <P2Souffle />
        <P3Anfa />
        <P4Temoins />
        <P5Adresse />
        <P6Ame />
        <P7Approfondit />
        <P8Finale />
      </div>

    </div>
  )
}
