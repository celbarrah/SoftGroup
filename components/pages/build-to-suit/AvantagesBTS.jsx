"use client"
import { useRef } from "react"
import { motion, useInView } from "framer-motion"

/* ─── Data ─────────────────────────────────────────────────────── */

const CARDS = [
  {
    dark:  true,
    idx:   "01",
    tag:   "Interlocuteur unique",
    title: "Fast-Track Delivery & Équipes intégrées",
    desc:  "Un processus de conception optimisé et des équipes entièrement internalisées architectes, ingénieurs et chefs de projet pour réduire les délais, fluidifier les décisions et garantir un interlocuteur unique du permis à la livraison.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
  {
    dark:  false,
    idx:   "02",
    tag:   "4 villes clés",
    title: "Hubs stratégiques & Agilité foncière",
    desc:  "Accompagnement complet de la sélection du site à l'acquisition foncière, avec des réserves stratégiques et une maîtrise technique totale pour sécuriser chaque étape du projet.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    dark:  false,
    idx:   "03",
    tag:   "Engagements fermes",
    title: "Smart Buildings & Engagements contractuels fermes",
    desc:  "Technologie, données et ingénierie embarquées pour optimiser chaque décision, avec des engagements fermes : délais garantis, prix fixés à la signature, garantie décennale et assurance dommages-ouvrage.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    dark:  true,
    idx:   "04",
    tag:   "Classe mondiale",
    title: "Asset & Facility Management de classe mondiale",
    desc:  "Une prise en charge immédiate après livraison : gestion technique, maintenance, sécurité et exploitation assurées par nos équipes pour garantir une continuité sans rupture dès la remise des clés.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
  },
]

/* ─── Card ──────────────────────────────────────────────────────── */

function AvCard({ card, inView, i }) {
  const isDark = card.dark

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: 0.15 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className={[
        "group relative rounded-[18px] p-[32px_28px] border overflow-hidden flex flex-col transition-all duration-300",
        isDark
          ? "bg-noir border-transparent hover:border-gold/20 hover:shadow-[0_16px_48px_rgba(8,9,10,.28)]"
          : "bg-white border-dark/[0.08] hover:border-gold/30 hover:shadow-[0_16px_48px_rgba(8,9,10,.08)]",
      ].join(" ")}
    >
      {/* Top row: icon + ghost index */}
      <div className="flex items-start justify-between mb-[16px]">
        <div className={[
          "w-11 h-11 rounded-[12px] flex items-center justify-center shrink-0",
          "transition-all duration-300 group-hover:-rotate-[6deg] group-hover:scale-[1.08]",
          isDark ? "bg-white/10 text-white" : "bg-gold/10 text-gold",
        ].join(" ")}>
          {card.icon}
        </div>
        <span className={[
          "font-serif text-[40px] font-light leading-none tracking-[-0.03em] transition-colors duration-300",
          isDark ? "text-white/30 group-hover:text-gold/40" : "text-dark/20 group-hover:text-gold/30",
        ].join(" ")}>
          {card.idx}
        </span>
      </div>

      {/* Title */}
      <h4 className={[
        "font-sans text-[17px] font-semibold leading-[1.3] mb-[10px]",
        isDark ? "text-white" : "text-dark",
      ].join(" ")}>
        {card.title}
      </h4>

      {/* Description */}
      <p className={[
        "font-sans text-[15px] font-light leading-[1.72] flex-1",
        isDark ? "text-white/50" : "text-muted",
      ].join(" ")}>
        {card.desc}
      </p>

      {/* Tag */}
      <span className={[
        "inline-block mt-4 font-sans text-[10px] tracking-[0.14em] uppercase font-medium rounded-full px-3 py-0.5 w-fit text-gold",
        isDark ? "bg-gold/12" : "bg-gold/10",
      ].join(" ")}>
        {card.tag}
      </span>
    </motion.div>
  )
}

/* ─── Section ───────────────────────────────────────────────────── */

export default function AvantagesBTS() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-8%" })

  return (
    <section ref={ref} className="bg-white py-[100px] px-[clamp(20px,5vw,80px)]">
      <div className="max-w-[1500px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2.4fr] gap-16 items-start">

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="block font-sans text-[15px] tracking-[0.24em] uppercase
                             text-gold font-bold mb-[14px]">
              Notre Plus-Value
            </span>
            <h2 className="font-serif text-[clamp(40px,4.5vw,50px)] font-light text-dark
                           leading-[1.06] tracking-[-0.01em]">
              Bien plus qu'un fournisseur :<br />
              <strong className="font-semibold">un partenaire intégré</strong>
            </h2>

            {/* KPI */}
            <div className="mt-10 pt-8 border-t border-dark/[0.08]">
              <div className="font-serif text-[clamp(52px,6vw,80px)] font-light text-dark
                              leading-[0.9] tracking-[-0.04em] mb-2">
                &lt;&nbsp;12
                <span className="text-[0.55em] text-gold align-middle ml-1">mois</span>
              </div>
              <p className="font-sans text-[18px] font-light text-muted leading-[1.55] max-w-xl">
                De la signature au lancement opérationnel
              </p>
            </div>
          </motion.div>

          {/* 2×2 grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {CARDS.map((card, i) => (
              <AvCard key={card.idx} card={card} inView={inView} i={i} />
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
