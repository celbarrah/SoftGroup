"use client"
import { useRef } from "react"
import { motion, useInView } from "framer-motion"

/* ─── Data ─────────────────────────────────────────────────────── */

const PILIERS = [
  {
    kw:    "Disponibilité",
    title: <>Toujours présents,<br />sans interruption</>,
    desc:  "Une équipe mobilisée 24h/24 et 7j/7 pour assurer continuité, assistance et prise en charge immédiate de chaque demande.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.62 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
  {
    kw:    "Rapidité",
    title: <>Décider vite.<br />Agir immédiatement.</>,
    desc:  "Chaque demande est analysée, priorisée et prise en charge en moins de 30 minutes pour garantir une réactivité sans friction.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    kw:    "Ponctualité",
    title: <>Planifié avec précision.<br />Exécuté sans retard.</>,
    desc:  "Un planning clair, transmis au locataire, avec un suivi transparent de chaque intervention jusqu'à sa clôture.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
  },
  {
    kw:    "Précision & Expertise",
    title: <>Des interventions maîtrisées<br />de bout en bout</>,
    desc:  "Des équipes qualifiées, des actions tracées et des rapports systématiques pour garantir qualité, conformité et fiabilité.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
  },
]

/* ─── Card ──────────────────────────────────────────────────────── */

function PilierCard({ pilier, inView, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.7,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="pilier-card group relative bg-white border border-dark/[0.12] rounded-[22px]
                 p-9 overflow-hidden cursor-default
                 transition-all duration-[350ms]
                 hover:border-gold/30 hover:shadow-[0_20px_56px_rgba(196,165,90,.15)]
                 hover:-translate-y-1.5"
    >

      {/* Glow blob — top-right, fades in on hover */}
      <div className="absolute -top-[60px] -right-[60px] w-[200px] h-[200px] rounded-full
                      pointer-events-none opacity-0 scale-[0.6]
                      transition-all duration-500
                      group-hover:opacity-100 group-hover:scale-[1.2]
                      bg-[radial-gradient(circle,rgba(196,165,90,.22)_0%,transparent_70%)]" />

      {/* Header: icon + keyword */}
      <div className="flex items-center gap-3 mb-5">
        <div className="w-[42px] h-[42px] rounded-[11px] bg-gold flex items-center justify-center
                        shrink-0 transition-all duration-[350ms]
                        group-hover:-rotate-[8deg] group-hover:scale-[1.08]">
          <div className="w-[19px] h-[19px]">
            {pilier.icon}
          </div>
        </div>
        <span className="font-sans text-[15px] tracking-[0.16em] uppercase font-bold text-gold font-medium">
          {pilier.kw}
        </span>
      </div>

      {/* Title */}
      <h3 className="font-serif text-[24px] font-light text-dark leading-[1.2] mb-5">
        {pilier.title}
      </h3>

      {/* Description */}
      <p className="font-sans text-[13.5px] text-muted leading-[1.75]">
        {pilier.desc}
      </p>

    </motion.div>
  )
}

/* ─── Section ───────────────────────────────────────────────────── */

export default function VisionGestion() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-8%" })

  return (
    <section
      ref={ref}
      id="vision-gestion"
      className="bg-off-white py-[100px] px-[clamp(20px,5vw,80px)]"
    >
      <div className="max-w-[1500px] mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-14"
        >
          <p className="font-sans text-[15px] tracking-[0.25em] uppercase text-gold font-semibold mb-4">
            Notre vision
          </p>
          <h2 className="font-serif text-[clamp(32px,4vw,52px)] font-light text-dark leading-[1.15] mb-4">
            Un accompagnement<br />
            <strong className="font-semibold">sur mesure</strong>
          </h2>
          <p className="font-sans text-[19px] font-light text-muted leading-[1.8] max-w-[58ch] mt-4">
            Chez Softgroup, nous allons au-delà de la mise à disposition d'espaces.
            Notre modèle de gestion intégré est conçu pour offrir une expérience
            fluide, réactive et durable.
          </p>
        </motion.div>

        {/* 4-card grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {PILIERS.map((pilier, i) => (
            <PilierCard key={pilier.kw} pilier={pilier} inView={inView} index={i} />
          ))}
        </div>

      </div>
    </section>
  )
}
