"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
import SideNav from "./SideNav"
import Image from "next/image"

/**
 * Header — Barre de navigation fixe — Light Premium
 * ─────────────────────────────────────────────────────────
 * Comportement :
 *  - Transparent + blanc sur le hero (scrollY < 60px)
 *  - Fond blanc/95 + accents or après scroll
 *  - "Portefeuille" → dropdown avec les 5 segments
 *  - "Planifier une visite" CTA apparaît après scroll
 *  - Hamburger asymétrique → ouvre SideNav
 */

const PORTFOLIO_LINKS = [
  { label: "Logistique & Industriel",      href: "/portefeuille#logistique-industriel"      },
  { label: "Bureaux & Centres d'Affaires", href: "/portefeuille#bureaux-centres-d-affaires" },
  { label: "Résidentiel de Prestige",      href: "/portefeuille#residentiel-de-prestige"    },
  { label: "Retail & Commerce",            href: "/portefeuille#retail-commerce"            },
  { label: "Terrains & Développements",    href: "/portefeuille#terrains-developpements"    },
]

export default function Header() {
  const [scrolled,       setScrolled]       = useState(false)
  const [navOpen,        setNavOpen]         = useState(false)
  const [portfolioOpen,  setPortfolioOpen]   = useState(false)
  const dropdownRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  /* Fermer le dropdown en cliquant en dehors */
  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setPortfolioOpen(false)
      }
    }
    document.addEventListener("mousedown", handler)
    return () => document.removeEventListener("mousedown", handler)
  }, [])

  /* Link classes adapt to scroll state */
  const linkClass = scrolled
    ? "font-sans text-[13px] tracking-[0.15em] uppercase text-neutral-600 hover:text-gold transition-colors duration-300"
    : "font-sans text-[13px] tracking-[0.15em] uppercase text-white/70 hover:text-white transition-colors duration-300"

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className={[
          "fixed top-0 left-0 right-0 z-40",
          "flex items-center justify-between",
          "px-8 md:px-12 lg:px-16",
          "transition-all duration-500",
          scrolled
            ? "bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm py-4"
            : "bg-transparent py-7",
        ].join(" ")}
      >
        {/* ── Logo ────────────────────────────────── */}
        <a
          href="/"
          aria-label="Softgroup Immobilier — Accueil"
        >
          <Image
            src={"/img/softgroupe.png"}
            height={200}
            width={200}
            alt="softgroupe"
            className={scrolled ? "" : "brightness-0 invert"}
          />
        </a>

        {/* ── Desktop nav  _ hide for now───────────────────────────── */}
        {/* <nav className="hidden lg:flex items-center gap-8">

          Accueil
          <a href="/" className={linkClass}>Accueil</a>

          Le Groupe
          <a href="/le-groupe" className={linkClass}>Le Groupe</a>

          Portefeuille — avec dropdown
          <div
            ref={dropdownRef}
            className="relative"
            onMouseEnter={() => setPortfolioOpen(true)}
            onMouseLeave={() => setPortfolioOpen(false)}
          >
            <button
              onClick={() => setPortfolioOpen((v) => !v)}
              className={[
                "flex items-center gap-1 group",
                linkClass,
              ].join(" ")}
            >
              Portefeuille
              <motion.span
                animate={{ rotate: portfolioOpen ? 180 : 0 }}
                transition={{ duration: 0.25 }}
              >
                <ChevronDown size={11} strokeWidth={1.5} className="mt-0.5" />
              </motion.span>
            </button>

            <AnimatePresence>
              {portfolioOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 6, scale: 0.97 }}
                  transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute top-full left-1/2 -translate-x-1/2 pt-4 z-50"
                >
                  <div className="bg-white shadow-xl border border-gray-100 min-w-[240px] py-2">
                    {PORTFOLIO_LINKS.map(({ label, href }) => (
                      <a
                        key={label}
                        href={href}
                        onClick={() => setPortfolioOpen(false)}
                        className="block px-5 py-2.5 font-sans text-[11px] tracking-[0.12em] uppercase text-neutral-600 hover:text-gold hover:bg-gray-50 transition-all duration-200"
                      >
                        {label}
                      </a>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          Gestion
          <a href="/gestion-valorisation" className={linkClass}>Gestion</a>

          Actualités
          <a href="#actualites" className={linkClass}>Actualités</a>
        </nav> */}

        {/* ── CTA + Hamburger ─────────────────────── */}
        <div className="flex items-center gap-5">
          <motion.a
            href="#contact"
            animate={{ opacity: scrolled ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            style={{ pointerEvents: scrolled ? "auto" : "none" }}
            className="hidden md:block font-sans text-[10px] tracking-[0.2em] uppercase text-white bg-gold border border-gold/40 px-5 py-2 hover:scale-102 transition-all duration-300 whitespace-nowrap"
          >
            Planifier une visite
          </motion.a>

          <button
            onClick={() => setNavOpen(true)}
            aria-label="Ouvrir le menu de navigation"
            className="flex flex-col justify-center gap-[7px] p-2 -mr-2 group"
          >
            <span className={[
              "block h-px transition-all duration-300 w-8 group-hover:w-5",
              scrolled ? "bg-neutral-700" : "bg-white/80",
            ].join(" ")} />
            <span className={[
              "block h-px transition-all duration-300 w-5 group-hover:w-8",
              scrolled ? "bg-neutral-700" : "bg-white/80",
            ].join(" ")} />
          </button>
        </div>
      </motion.header>

      <SideNav isOpen={navOpen} onClose={() => setNavOpen(false)} />
    </>
  )
}
