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
    <section ref={ref} className="bg-neutral-900 py-24 md:py-36 overflow-hidden" id="processus-gestion">
      <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-20">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="font-sans text-[12px] tracking-[0.55em] uppercase text-gold/60 mb-4">
            Notre Engagement
          </p>
          <h2 className="font-serif text-3xl md:text-5xl text-white font-light leading-[1.1]">
            Un protocole
            <br />
            <span className="italic text-gold">d&apos;intervention rigoureux</span>
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
            <p className="font-sans text-[17px] font-light text-white/55 leading-[1.85] mb-12 max-w-[44ch]">
              Un gestionnaire dédié, des délais mesurés, un rapport à chaque clôture.
              Pas de promesse floue — des résultats traçables.
            </p>

            {/* 2×2 metrics grid */}
            <div
              style={{
                display:             "grid",
                gridTemplateColumns: "1fr 1fr",
                gap:                 1,
                background:          "rgba(255,255,255,0.06)",
                borderRadius:        2,
                overflow:            "hidden",
              }}
            >
              {METRICS.map((m, i) => (
                <motion.div
                  key={m.lbl}
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + i * 0.09 }}
                  style={{
                    padding:    "28px 24px",
                    background: "rgba(255,255,255,0.02)",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "var(--font-cormorant, serif)",
                      fontSize:   40,
                      fontWeight: 300,
                      color:      "rgba(196,165,90,0.85)",
                      lineHeight: 1,
                      marginBottom: 8,
                    }}
                  >
                    {m.val}
                  </p>
                  <p
                    style={{
                      fontFamily:    "var(--font-dm-sans, sans-serif)",
                      fontSize:      11,
                      color:         "rgba(255,255,255,0.35)",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                    }}
                  >
                    {m.lbl}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — vertical timeline */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.0, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <div style={{ position: "relative" }}>
              {/* Vertical connector line */}
              <div
                style={{
                  position:   "absolute",
                  left:       17,
                  top:        36,
                  bottom:     36,
                  width:      1,
                  background: "linear-gradient(to bottom, rgba(196,165,90,0.15), rgba(196,165,90,0.05))",
                }}
              />

              {STEPS.map((step, i) => {
                const Icon = step.Icon
                return (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
                    className="group"
                    style={{
                      display:    "flex",
                      gap:        24,
                      padding:    "24px 0",
                      position:   "relative",
                    }}
                  >
                    {/* Icon dot */}
                    <div
                      style={{
                        width:        36,
                        height:       36,
                        borderRadius: "50%",
                        border:       "1px solid rgba(196,165,90,0.25)",
                        background:   "rgba(15,25,35,1)",
                        display:      "flex",
                        alignItems:   "center",
                        justifyContent: "center",
                        flexShrink:   0,
                        position:     "relative",
                        zIndex:       1,
                        transition:   "background 0.3s, border-color 0.3s",
                      }}
                      className="group-hover:!border-gold group-hover:!bg-gold/10"
                    >
                      <Icon
                        size={13}
                        strokeWidth={1.6}
                        style={{ color: "rgba(196,165,90,0.7)" }}
                      />
                    </div>

                    {/* Content */}
                    <div style={{ paddingTop: 4 }}>
                      {/* Title + badge */}
                      <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap", marginBottom: 6 }}>
                        <h4
                          style={{
                            fontFamily: "var(--font-dm-sans, sans-serif)",
                            fontSize:   15,
                            fontWeight: 500,
                            color:      "#fff",
                          }}
                        >
                          {step.title}
                        </h4>
                        <span
                          style={{
                            fontFamily:    "var(--font-dm-sans, sans-serif)",
                            fontSize:      10,
                            color:         "rgba(196,165,90,0.85)",
                            background:    "rgba(196,165,90,0.08)",
                            border:        "1px solid rgba(196,165,90,0.15)",
                            borderRadius:  100,
                            padding:       "2px 10px",
                            letterSpacing: "0.05em",
                          }}
                        >
                          {step.badge}
                        </span>
                      </div>
                      <p
                        style={{
                          fontFamily: "var(--font-dm-sans, sans-serif)",
                          fontSize:   14,
                          color:      "rgba(255,255,255,0.45)",
                          lineHeight: 1.7,
                        }}
                      >
                        {step.desc}
                      </p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
