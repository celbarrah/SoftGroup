"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

/**
 * ProcessSection — Parcours client en 4 étapes
 * ─────────────────────────────────────────────────────────
 * Quatre étapes numérotées sur un fond sombre (Dark Premium).
 * Ligne connectrice animée entre les étapes (desktop).
 */

const STEPS = [
  {
    num:         "001",
    title:       "Définition du besoin",
    description: "Nous étudions vos enjeux techniques, opérationnels et stratégiques afin d'identifier, au sein de notre portefeuille, l'actif le plus adapté à votre activité.",
  },
  {
    num:         "002",
    title:       "Étude & Validation",
    description: "Nous organisons les visites et mettons à votre disposition l'ensemble des éléments techniques nécessaires — plans, conformité, données techniques pour valider l'adéquation du site.",
  },
  {
    num:         "003",
    title:       "Contractualisation & Accueil",
    description: "Nous accompagnons la finalisation du bail ainsi que l'aménagement des espaces afin d'assurer une prise de possession fluide et une intégration opérationnelle immédiate.",
  },
  {
    num:         "004",
    title:       "Suivi & Réactivité",
    description: "Notre engagement s'inscrit dans la durée : nous assurons un suivi réactif et une gestion proactive de vos réclamations afin de garantir la pérennité de vos locaux.",
  },
]

export default function ProcessSection() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-10% 0px" })

  return (
    <section ref={ref} className="bg-white py-24 md:py-36 px-8 md:px-12 lg:px-14 overflow-hidden" style={{ WebkitClipPath: 'polygon(0 15%, 100% 0, 100% 100%, 0 100%)', clipPath: 'polygon(0 15%, 100% 0, 100% 100%, 0 100%)' }}>
      <div className="max-w-7xl mx-auto">

        {/* ── Section header ──────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20 pt-30 md:pt-0"
        >
          <p className="font-sans text-[11px] font-extrabold tracking-[0.4em] uppercase text-gold mb-4">
            Notre Approche
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-neutral-800 font-light leading-[1.1]">
            Un Accompagnement
            <br />
            <span className="italic">Rigoureux & Structuré</span>
          </h2>
        </motion.div>

        {/* ── Steps grid ──────────────────────────────── */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">

          {/* ── Connector line (desktop only) ─────────── */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 1.4, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:block absolute top-[22px] left-[6%] right-[6%] h-px bg-gold/20 origin-left z-0"
          />

          {STEPS.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 + i * 0.15 }}
              className="relative z-10"
            >
              {/* Step number bubble */}
              <div className="flex items-center gap-4 mb-7">
                <div className="w-11 h-11 border border-gold/30 flex items-center justify-center flex-none bg-gris/90 backdrop-blur">
                  <span className="font-sans text-[9px] tracking-[0.15em] text-white font-bold">
                    {step.num}
                  </span>
                </div>
                {/* Short connector (mobile) */}
                <div className="flex-1 h-px bg-white/8 lg:hidden" />
              </div>

              {/* Step content */}
              <h4 className="font-serif text-xl text-neutral-900 font-extrabold font-light leading-snug mb-4">
                {step.title}
              </h4>
              <p className="font-sans text-[14px] text-neutral-900 leading-[1.85]">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
