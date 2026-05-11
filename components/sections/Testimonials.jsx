"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

/**
 * Testimonials — Preuves sociales
 * ─────────────────────────────────────────────────────────
 * Deux parties :
 *  1. 4 témoignages clients en grille 2×2
 *  2. Bande de logos partenaires (statique sur desktop)
 *
 * Dark Premium — fond charcoal, cartes verre sombre, accents or.
 */

const TESTIMONIALS = [
  {
    company: "GEODIS",
    quote:   "Nous considérons SOFTGROUP comme un partenaire, nous travaillons ensemble depuis de nombreuses années. Nous bénéficions de bâtiments aux normes internationales en plus d'entretenir des relations privilégiées qui ont su nous accompagner sur nos différents développements.",
  },
  {
    company: "Roche",
    quote:   "J'ai choisi cette résidence pour tous les services qu'elle incluait, les espaces sont confortables et agréables à vivre. De manière générale, on s'y sent très bien.",
  },
  {
    company: "Bolloré",
    quote:   "C'est un partenariat qui dure depuis plus de 10 ans. On cherchait des industriels qui arrivaient à comprendre nos besoins. Nous sommes très satisfaits de cette excellente prestation de service qui répond aux normes.",
  },
  {
    company: "KIA",
    quote:   "Nous avons choisi les locaux de SOFTPARK pour leur fonctionnalité. La qualité de notre relation avec SOFTGROUP est excellente, la qualité du service est au rendez-vous. Nous sommes ravis du partenariat.",
  },
]

const PARTNER_LOGOS = [
  "GEODIS", "Roche", "Bolloré", "KIA", "Stellantis",
  "Maersk", "TotalEnergies", "Decathlon", "Orano", "DHL",
]

export default function Testimonials() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-8% 0px" })

  return (
    <section ref={ref} className="bg-white py-24 md:py-20 px-8 md:px-12 lg:px-20" id="confiance" style={{WebkitClipPath: 'polygon(0 15%, 100% 0, 100% 100%, 0 100%)', clipPath: 'polygon(0 15%, 100% 0, 100% 100%, 0 100%)'}}>
      <div className="max-w-7xl mx-auto">

        {/* ── Section header ──────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-14 pt-60"
        >
          <p className="font-sans text-[9px] tracking-[0.4em] uppercase text-neutral-900 mb-4">
            Ils Nous Font Confiance
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-neutral-700 font-light leading-[1.1]">
            La Confiance,
            <br />
            <span className="italic">Notre Meilleure Référence</span>
          </h2>
        </motion.div>

        {/* ── Testimonial cards ───────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-20">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.company}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="bg-white/4 border border-neutral-700/20 rounded-2xl backdrop-blur-sm p-8 md:p-10 flex flex-col gap-5 hover:border-gold/20 transition-colors duration-500"
            >
              {/* Opening quote mark */}
              <span className="font-serif text-6xl text-gold/80 leading-none -mb-3 select-none">
                &ldquo;
              </span>

              {/* Quote */}
              <p className="font-serif text-lg text-neutral-900/80 font-light leading-[1.7] italic flex-1">
                {t.quote}
              </p>

              {/* Divider + company */}
              <div className="flex items-center gap-4 pt-3 border-t border-white/8">
                <div className="w-8 h-px bg-gold/50" />
                <span className="font-sans text-[10px] tracking-[0.25em] uppercase text-gold">
                  {t.company}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Partner logo strip ───────────────────────── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
        >
          <p className="font-sans text-[9px] tracking-[0.3em] uppercase text-muted/50 mb-8 text-center">
            Multinationales & Grands Comptes qui nous font confiance
          </p>

          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {PARTNER_LOGOS.map((name, i) => (
              <motion.span
                key={name}
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.7 + i * 0.05 }}
                className="font-serif text-base text-neutral-800/50 italic tracking-wide hover:text-gold/60 transition-colors duration-300 cursor-default select-none"
              >
                {name}
              </motion.span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}
