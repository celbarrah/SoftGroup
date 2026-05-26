"use client"
import { useRef } from "react"
import { motion, useInView } from "framer-motion"

/* ─── Data ─────────────────────────────────────────────────────── */

const ENGAGEMENTS = [
  {
    num:   "01",
    title: "Prix fixé à la signature",
    desc:  "Une transparence financière absolue dès le premier jour pour sécuriser vos investissements.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
  },
  {
    num:   "02",
    title: "Délais contractuels",
    desc:  "Un engagement ferme sur le calendrier pour garantir le lancement de vos opérations sans friction.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    num:   "03",
    title: "Foncier déjà sécurisé",
    desc:  "Des localisations stratégiques immédiatement mobilisables pour accélérer votre déploiement.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    num:   "04",
    title: "Garantie décennale",
    desc:  "La certitude d'un actif durable, construit selon les plus hauts standards de qualité du marché.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    num:   "05",
    title: "Livraison en 12 mois",
    desc:  "Un processus d'exécution optimisé pour répondre rapidement à vos besoins de croissance.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
]

/* ─── Component ─────────────────────────────────────────────────── */

export default function EngagementBTS() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-8%" })

  return (
    <section ref={ref} className="relative bg-[#f8f9fa] overflow-hidden py-[100px] px-[clamp(20px,5vw,80px)] pb-50" style={{
        WebkitClipPath: "polygon(0 0, 100% 0, 100% 85%, 0 100%)",
        clipPath:       "polygon(0 0, 100% 0, 100% 85%, 0 100%)",
      }}>

      {/* Ambient glow */}
      <div className="absolute -top-[250px] -right-[200px] w-[700px] h-[700px] rounded-full
                      bg-[radial-gradient(circle,rgba(196,165,90,.08)_0%,transparent_70%)]
                      pointer-events-none" />

      <div className="relative z-10 max-w-[1400px] mx-auto">

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-[80px] items-end mb-[72px]">
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="block font-sans text-[15px] tracking-[0.24em] uppercase
                             text-gold font-bold mb-[14px]">
              Votre infrastructure de croissance
            </span>
            <h2 className="font-serif text-[clamp(40px,5vw,64px)] font-light text-noir
                           leading-[1.04] tracking-[-0.02em]">
              Un catalyseur <br /> <em className="italic text-gold"> de croissance </em> <br /> pour votre
              <br /><strong className="font-semibold">Supply Chain</strong>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, x: 28 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-sans text-[15.5px] font-light text-dark/60 leading-[1.82] self-end"
          >
            Nous ne livrons pas seulement des mètres carrés. Nous créons des
            partenariats à long terme conçus pour optimiser vos flux, réduire
            vos risques et pérenniser vos opérations.
          </motion.p>
        </div>

        {/* 5-column engagement grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 rounded-[18px] overflow-hidden
                        border border-dark/[0.08] bg-white">
          {ENGAGEMENTS.map((eng, i) => (
            <motion.div
              key={eng.num}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group flex flex-col p-[36px_28px]
                         border-r border-dark/[0.08] last:border-r-0
                         transition-colors duration-300 hover:bg-gold/[0.05]"
            >
              {/* Top row: icon + ghost number */}
              <div className="flex items-start justify-between mb-5">
                <div className="w-10 h-10 rounded-[10px] flex items-center justify-center
                                bg-gold/10 text-gold shrink-0
                                transition-colors duration-300 group-hover:bg-gold/[0.18]">
                  {eng.icon}
                </div>
                <span className="font-serif text-[44px] font-light leading-[0.9] tracking-[-0.03em]
                                 text-dark/15 transition-colors duration-300
                                 group-hover:text-gold/[0.25]">
                  {eng.num}
                </span>
              </div>

              {/* Accent rule — expands on hover */}
              <div className="w-7 h-[1.5px] bg-gold rounded-sm mb-[18px]
                              transition-all duration-[350ms] group-hover:w-11" />

              {/* Title */}
              <h4 className="font-sans text-[13.5px] font-semibold text-noir mb-2 leading-[1.3]">
                {eng.title}
              </h4>

              {/* Description */}
              <p className="font-sans text-[14px] font-light text-dark/50 leading-[1.7]">
                {eng.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
