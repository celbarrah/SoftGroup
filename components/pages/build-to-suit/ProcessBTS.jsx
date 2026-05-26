"use client"
import { useRef } from "react"
import { motion, useInView } from "framer-motion"

/* ─── Data ─────────────────────────────────────────────────────── */

const STEPS = [
  {
    num:   "01",
    week:  "Sem. 1–2",
    title: "Brief & Analyse",
    desc:  "Vos exigences opérationnelles, capturées avec précision.",
    badge: "Cahier des charges",
  },
  {
    num:   "02",
    week:  "Sem. 2–5",
    title: "Faisabilité & Site",
    desc:  "Sélection du terrain, étude réglementaire, esquisse validée.",
    badge: "Proposition foncière",
  },
  {
    num:   "03",
    week:  "Mois 2–3",
    title: "Conception",
    desc:  "Plans détaillés, ingénierie de valeur, maquette 3D.",
    badge: "Dossier technique",
  },
  {
    num:   "04",
    week:  "Mois 4–11",
    title: "Construction",
    desc:  "Chantier piloté, reporting mensuel, accès transparent.",
    badge: "Suivi en temps réel",
  },
  {
    num:   "05",
    week:  "Mois 12",
    title: "Livraison",
    desc:  "Réception, levée des réserves, exploitation immédiate.",
    badge: "Clé en main",
  },
]

/* ─── Component ─────────────────────────────────────────────────── */

export default function ProcessBTS() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-8%" })

  return (
    <section ref={ref} className="relative bg-[#f8f9fa] overflow-hidden py-[100px] px-[clamp(20px,5vw,80px)]"
      id="process">

      {/* Ambient glow */}
      <div className="absolute -top-[200px] -right-[200px] w-[700px] h-[700px] rounded-full
                      bg-[radial-gradient(circle,rgba(196,165,90,.08)_0%,transparent_70%)]
                      pointer-events-none" />

      <div className="max-w-[1400px] mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <span className="block font-sans text-[15px] tracking-[0.24em] uppercase
                           text-gold font-bold mb-[14px]">
            Notre méthodologie
          </span>
          <h2 className="font-serif text-[clamp(36px,3.8vw,56px)] font-light text-noir
                         leading-[1.06] tracking-[-0.01em]">
            Un pilotage à 360°.
            <br />
            <strong className="font-semibold text-gold">
              Un partenariat de bout en bout sans couture.
            </strong>
          </h2>
        </motion.div>

        {/* 5-step timeline */}
        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-0">

          {/* Horizontal connector line — desktop only */}
          <div className="hidden lg:block absolute top-[22px] left-[10%] right-[10%] h-px
                          bg-dark/[0.12]" />

          {STEPS.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group flex flex-col items-center text-center px-4"
            >
              {/* Dot */}
              <div className="relative z-10 w-11 h-11 rounded-full mb-7 flex items-center justify-center
                              border border-dark/[0.14] bg-dark/5
                              font-sans text-[14px] font-medium text-gold
                              transition-all duration-400
                              group-hover:bg-gold group-hover:border-gold group-hover:text-noir
                              group-hover:scale-[1.12] group-hover:shadow-[0_0_0_6px_rgba(196,165,90,.14)]">
                {step.num}
              </div>

              {/* Week */}
              <span className="font-sans text-[15px] font-bold tracking-[0.14em] uppercase
                               text-gold/70 mb-2.5">
                {step.week}
              </span>

              {/* Title */}
              <h3 className="font-sans text-[13.5px] font-semibold text-noir mb-2 leading-[1.3]">
                {step.title}
              </h3>

              {/* Description */}
              <p className="font-sans text-[15px] font-light text-dark/50 leading-[1.7] mb-3">
                {step.desc}
              </p>

              {/* Badge */}
              <span className="font-sans text-[14px] tracking-[0.06em] text-gold
                               bg-gold/10 rounded-full px-3 py-0.5">
                {step.badge}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
