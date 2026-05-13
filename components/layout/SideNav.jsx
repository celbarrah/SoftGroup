"use client"

import { useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"

/**
 * SideNav — Tiroir de navigation pleine hauteur — Light Premium
 * ─────────────────────────────────────────────────────────
 * Fond blanc, liens en serif, accents or.
 * Fermeture : bouton X, clic backdrop, touche Escape.
 */

const NAV_ITEMS = [
  { label: "Accueil", href: "/" },
  {
    label: "NOTRE PORTEFEUILLE D'ACTIFS",
    href: "#portefeuille",
    children: [
      { label: "Logistique & Industriel",      href: "/portefeuille#logistique-industriel"      },
      { label: "Bureaux & Centres d'Affaires", href: "/portefeuille#bureaux-centres-d-affaires" },
      { label: "Résidentiel de Prestige",      href: "/portefeuille#residentiel-de-prestige"    },
      { label: "Retail & Commerce",            href: "/portefeuille#retail-commerce"            },
      { label: "Terrains & Développements",    href: "/portefeuille#terrains-developpements"    },
    ],
  },
  { label: "Le Groupe",              href: "/le-groupe"              },
  { label: "Gestion & Valorisation", href: "/gestion-valorisation"  },
  { label: "Actualités",             href: "#actualites"             },
  { label: "Nous Contacter",         href: "#contact"                },
]

/* ── Variants d'animation ─────────────────────────────── */
const backdropVariants = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.35 } },
  exit:    { opacity: 0, transition: { duration: 0.3  } },
}

const panelVariants = {
  hidden:  { x: "100%" },
  visible: { x: "0%",  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  exit:    { x: "100%", transition: { duration: 0.45, ease: [0.55, 0, 0.68, 0] } },
}

const listVariants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.28 } },
}

const itemVariants = {
  hidden:  { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
}

export default function SideNav({ isOpen, onClose }) {
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [isOpen])

  useEffect(() => {
    const handleKey = (e) => { if (e.key === "Escape") onClose() }
    window.addEventListener("keydown", handleKey)
    return () => window.removeEventListener("keydown", handleKey)
  }, [onClose])

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="sidenav-backdrop"
            variants={backdropVariants}
            initial="hidden" animate="visible" exit="exit"
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/30 backdrop-blur-[2px]"
            aria-hidden="true"
          />

          {/* Panneau */}
          <motion.nav
            key="sidenav-panel"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation principale"
            variants={panelVariants}
            initial="hidden" animate="visible" exit="exit"
            className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-[360px] md:max-w-[420px] bg-white border-l border-gray-100 flex flex-col shadow-2xl"
          >
            {/* En-tête panneau */}
            <div className="flex items-center justify-between px-10 pt-9 pb-7 border-b border-gray-100">
              <span className="font-serif text-base tracking-[0.35em] uppercase text-gold">
                SOFTGROUP<span className="font-light text-neutral-500"> IMMOBILIER</span>
              </span>
              <button
                onClick={onClose}
                aria-label="Fermer la navigation"
                className="text-neutral-400 hover:text-gold transition-colors duration-200 p-1 -mr-1"
              >
                <X size={18} strokeWidth={1.5} />
              </button>
            </div>

            {/* Liens de navigation */}
            <motion.div
              variants={listVariants}
              initial="hidden" animate="visible"
              className="flex-1 overflow-y-auto px-10 py-10 flex flex-col gap-2"
            >
              {NAV_ITEMS.map((item) => (
                <motion.div key={item.label} variants={itemVariants}>
                  {item.children ? (
                    <div className="mb-5">
                      {/* Catégorie — non cliquable */}
                      <span className="block font-sans text-[9px] tracking-[0.38em] uppercase text-neutral-400 mb-3">
                        {item.label}
                      </span>
                      {/* Sous-liens */}
                      {item.children.map((child) => (
                        <a
                          key={child.label}
                          href={child.href}
                          onClick={onClose}
                          className="block font-serif text-[1.4rem] leading-snug text-neutral-600 hover:text-gold transition-colors duration-200 py-0.5"
                        >
                          {child.label}
                        </a>
                      ))}
                    </div>
                  ) : (
                    <a
                      href={item.href}
                      onClick={onClose}
                      className="block font-serif text-[1.75rem] leading-snug text-neutral-800 hover:text-gold transition-colors duration-200 py-0.5 mb-1"
                    >
                      {item.label}
                    </a>
                  )}
                </motion.div>
              ))}
            </motion.div>

            {/* Pied du panneau — CTA */}
            <div className="px-10 py-7 border-t border-gray-100 space-y-4">
              <a
                href="#contact"
                onClick={onClose}
                className="block text-center font-sans text-[10px] tracking-[0.25em] uppercase text-white bg-gold px-6 py-3 hover:bg-gold/90 transition-colors duration-300"
              >
                Planifier une visite
              </a>
              <a
                href="tel:+212661978104"
                className="block font-sans text-xs tracking-[0.2em] text-neutral-400 hover:text-gold transition-colors duration-200 text-center"
              >
                +212 661 978 104
              </a>
            </div>
          </motion.nav>
        </>
      )}
    </AnimatePresence>
  )
}
