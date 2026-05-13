"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import MapSection from "./MapSection"

/**
 * FooterCTA — Bannière CTA pleine largeur avant le footer
 * ─────────────────────────────────────────────────────────
 * Fond très sombre (noir absolu), headline centré, CTA gold.
 * Glow or subtil en arrière-plan pour une profondeur cinématique.
 *
 * Dark Premium — Noir / Or / Blanc
 */

export default function FooterCTA() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-8% 0px" })

  return (
    <section
      ref={ref}
      className="bg-white py-50 md:py-40 px-8 md:px-12 lg:px-20 overflow-hidden relative"
      style={{WebkitClipPath: 'polygon(0 15%, 100% 0, 100% 85%, 0 100%)',
  clipPath: 'polygon(0 15%, 100% 0, 100% 85%, 0 100%)'}}
      id="contact"
    >
      {/* Gold radial glow — arrière-plan cinématique */}
      <div aria-hidden className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="w-[700px] h-[700px] rounded-full bg-gold/6 blur-3xl" />
      </div>

      {/* Thin gold top border */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-px bg-gold/30" />

      <div className="max-w-4xl mx-auto text-center relative z-10">

        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-sans text-[13px] tracking-[0.5em] uppercase text-gold font-bold mb-7"
        >
          Parlons de votre projet
        </motion.p>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.85, delay: 0.1 }}
          className="font-serif text-4xl md:text-6xl lg:text-7xl text-neutral-800 font-light leading-[1.05] mb-7"
        >
          Vous avez un besoin
          <br />
          <span className="italic text-gold">en location&nbsp;?</span>
        </motion.h2>

        {/* Subline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-sans text-[19px] text-muted leading-[1.9] max-w-xl mx-auto mb-14"
        >
          Nos équipes vous accompagnent dans la recherche d'espaces adaptés
          à vos exigences et aux enjeux de votre activité.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.32 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#"
            className="inline-flex items-center gap-3 bg-gold text-noir font-sans text-[10px] tracking-[0.28em] uppercase px-11 py-4 hover:bg-gold-light transition-colors duration-300 font-medium"
          >
            Planifier une visite
          </a>
        </motion.div>

        <MapSection />

      </div>
    </section>
  )
}
