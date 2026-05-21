"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Phone, Clock, Wrench, ClipboardCheck } from "lucide-react"

const METRICS = [
  { val: "< 4h",  lbl: "Délai moyen d'intervention"      },
  { val: "98%",   lbl: "Satisfaction locataire"           },
  { val: "1",     lbl: "Interlocuteur par site"           },
  { val: "100%",  lbl: "Demandes tracées & clôturées"     },
]

const STEPS = [
  {
    Icon:   Phone,
    title:  "Signalement reçu",
    badge:  "Immédiat",
    desc:   "Votre gestionnaire dédié réceptionne et qualifie la demande, quelle que soit l'heure.",
  },
  {
    Icon:   Clock,
    title:  "Diagnostic & coordination",
    badge:  "≤ 30 min",
    desc:   "Analyse de la situation, identification des ressources, planification de l'intervention.",
  },
  {
    Icon:   Wrench,
    title:  "Intervention sur site",
    badge:  "≤ 4h en moyenne",
    desc:   "Déploiement des équipes techniques avec suivi en temps réel de l'avancement.",
  },
  {
    Icon:   ClipboardCheck,
    title:  "Rapport & clôture",
    badge:  "Systématique",
    desc:   "Validation qualité, rapport d'intervention transmis sous 24h.",
  },
]

export default function ProcessGestion() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-8%" })

  return (
    <section ref={ref} className="overflow-hidden bg-white" id="processus-gestion">

      {/* Full-width image band */}
      {/* <div style={{ position: "relative", height: 340, overflow: "hidden" }}>
        <img
          src="https://res.cloudinary.com/dofyrwzop/image/upload/q_auto/f_auto/v1779373964/image_grand_format_sdun50.png"
          alt="Softgroup — Gestion & Valorisation"
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", display: "block" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(15,14,12,0.15) 0%, rgba(15,14,12,0.65) 100%)" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(15,14,12,0.40) 0%, transparent 50%)" }} />
      </div> */}

      <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-20 py-24 md:py-32">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="font-sans text-[14px] font-bold tracking-[0.55em] uppercase text-gold/60 mb-4">
            Notre Engagement
          </p>
          <h2 className="font-serif text-3xl md:text-5xl text-black font-light leading-[1.1]">
            Un protocole
            <br />
            <span className="italic text-gold">d'intervention rigoureux</span>
          </h2>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">

          {/* Left — intro + metrics grid */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-sans text-[17px] font-light leading-[1.85] mb-12 max-w-[44ch] text-black">
              Un gestionnaire dédié, des délais mesurés, un rapport à chaque clôture.
              Pas de promesse floue des résultats traçables.
            </p>

            {/* 2x2 metrics */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1, background: "rgba(255,255,255,0.06)", overflow: "hidden" }}>
              {METRICS.map((m, i) => (
                <motion.div
                  key={m.lbl}
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + i * 0.09 }}
                  style={{ padding: "28px 24px", background: "rgba(255,255,255,0.02)" }}
                >
                  <p style={{ fontFamily: "var(--font-cormorant, serif)", fontSize: 40, fontWeight: 300, color: "rgba(196,165,90,0.85)", lineHeight: 1, marginBottom: 8 }}>
                    {m.val}
                  </p>
                  <p style={{ fontFamily: "var(--font-dm-sans, sans-serif)", fontSize: 11, letterSpacing: "0.08em", textTransform: "uppercase" }}>
                    {m.lbl}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — 4 steps */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.0, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-0"
          >
            {STEPS.map((step, i) => {
              const Icon = step.Icon
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
                  style={{
                    display:      "flex",
                    gap:          20,
                    padding:      "20px 0",
                    borderBottom: i < STEPS.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none",
                  }}
                >
                  {/* Icon */}
                  <div style={{
                    flexShrink:     0,
                    width:          44,
                    height:         44,
                    background:     "rgba(196,165,90,0.10)",
                    border:         "1px solid rgba(196,165,90,0.18)",
                    display:        "flex",
                    alignItems:     "center",
                    justifyContent: "center",
                    marginTop:      2,
                  }}>
                    <Icon size={18} strokeWidth={1.4} style={{ color: "rgba(196,165,90,0.75)" }} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
                      <p style={{ fontFamily: "var(--font-dm-sans, sans-serif)", fontSize: 14, fontWeight: 600 }}>
                        {step.title}
                      </p>
                      <span style={{
                        fontFamily:    "var(--font-dm-sans, sans-serif)",
                        fontSize:      9,
                        letterSpacing: "0.18em",
                        textTransform: "uppercase",
                        color:         "rgba(196,165,90,0.70)",
                        background:    "rgba(196,165,90,0.08)",
                        border:        "1px solid rgba(196,165,90,0.15)",
                        padding:       "2px 8px",
                      }}
                      className="font-bold"
                      >
                        {step.badge}
                      </span>
                    </div>
                    <p style={{ fontFamily: "var(--font-dm-sans, sans-serif)", fontSize: 14, lineHeight: 1.7 }}>
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>

        </div>
      </div>
    </section>
  )
}
