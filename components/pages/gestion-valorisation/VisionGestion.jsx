"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"

const COMMITMENTS = [
  {
    label:    "DISPONIBILITÉ",
    value:    "24h / 7j",
    detail1:  "CRC lun–sam 8h–20h.",
    detail2:  "Astreinte terrain sans interruption.",
    bold2:    true,
    accent:   "#C4A55A",
    index:    "01",
  },
  {
    label:    "RÉACTIVITÉ",
    value:    "< 30 min",
    detail1:  "Examen & décision garantis dès réception.",
    detail2:  null,
    bold2:    false,
    accent:   "#C4A55A",
    index:    "02",
  },
  {
    label:    "PONCTUALITÉ",
    value:    "≤ 4h",
    detail1:  "Interventions traitées le jour même.",
    detail2:  "Respect des délais contractuels.",
    bold2:    true,
    accent:   "#C4A55A",
    index:    "03",
  },
  {
    label:    "EXPERTISE",
    value:    "100% interne",
    detail1:  "Personnel qualifié.",
    detail2:  "Champ d'intervention défini au contrat.",
    bold2:    false,
    accent:   "#C4A55A",
    index:    "04",
  },
]

const PILLARS = [
  { title: "Équipes multidisciplinaires", sub: "Pilotage centralisé par site" },
  { title: "Approche préventive",         sub: "Pas uniquement corrective"    },
  { title: "Rapport systématique",        sub: "Après chaque intervention"    },
]

function CommitmentCard({ card, inView, index }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: 0.15 + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position:         "relative",
        background:       hovered ? "#ffffff" : "rgba(255,255,255,0.60)",
        border:           "1px solid " + (hovered ? "rgba(196,165,90,0.30)" : "rgba(196,165,90,0.10)"),
        padding:          "36px 32px 32px",
        cursor:           "default",
        transition:       "background 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease",
        boxShadow:        hovered ? "0 12px 48px rgba(196,165,90,0.08)" : "none",
        backdropFilter:   "blur(8px)",
      }}
    >
      {/* Top accent line — animates on hover */}
      <div style={{
        position:   "absolute",
        top:        0,
        left:       0,
        height:     2,
        width:      hovered ? "100%" : "32px",
        background: "#C4A55A",
        transition: "width 0.55s cubic-bezier(0.22,1,0.36,1)",
      }} />

      {/* Index */}
      <p style={{
        fontFamily:    "var(--font-dm-sans, sans-serif)",
        fontSize:      9,
        letterSpacing: "0.4em",
        textTransform: "uppercase",
        color:         "rgba(196,165,90,0.45)",
        marginBottom:  20,
      }}>
        {card.index}
      </p>

      {/* Label */}
      <p style={{
        fontFamily:    "var(--font-dm-sans, sans-serif)",
        fontSize:      10,
        letterSpacing: "0.35em",
        textTransform: "uppercase",
        color:         "rgba(100,90,75,0.65)",
        marginBottom:  10,
        fontWeight:    600,
      }}>
        {card.label}
      </p>

      {/* Value — large serif */}
      <p style={{
        fontFamily:   "var(--font-cormorant, serif)",
        fontSize:     "clamp(2rem, 3.5vw, 3rem)",
        fontWeight:   300,
        color:        "#C4A55A",
        lineHeight:   1.0,
        marginBottom: 20,
        letterSpacing: "-0.01em",
        whiteSpace:   "nowrap",
      }}>
        {card.value}
      </p>

      {/* Thin gold rule */}
      <div style={{ width: 24, height: 1, background: "rgba(196,165,90,0.35)", marginBottom: 16 }} />

      {/* Details */}
      <p style={{
        fontFamily: "var(--font-dm-sans, sans-serif)",
        fontSize:   13,
        color:      "rgba(75,70,65,0.65)",
        lineHeight: 1.7,
        marginBottom: card.detail2 ? 4 : 0,
      }}>
        {card.detail1}
      </p>
      {card.detail2 && (
        <p style={{
          fontFamily: "var(--font-dm-sans, sans-serif)",
          fontSize:   13,
          color:      "rgba(75,70,65,0.65)",
          lineHeight: 1.7,
          fontWeight: card.bold2 ? 600 : 400,
        }}>
          {card.detail2}
        </p>
      )}
    </motion.div>
  )
}

export default function VisionGestion() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-8%" })

  return (
    <section ref={ref} className="overflow-hidden" id="vision-gestion"
      style={{ background: "linear-gradient(160deg, #F7F6F2 0%, #FAFAF8 60%, #F2F0EA 100%)" }}>
      <div className="max-w-[1400px] mx-auto px-8 md:px-12 lg:px-10 py-24 md:py-36">

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="font-sans text-[12px] tracking-[0.55em] uppercase text-gold/70 font-bold mb-5">
              LE CADRE DE SERVICE
            </p>
            <h2 className="font-serif text-3xl md:text-5xl text-neutral-800 font-light leading-[1.1]">
              Des engagements
              <br />
              <span className="italic text-gold">mesurables & contractuels</span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="flex items-end"
          >
            <p className="font-sans text-[16px] text-neutral-500 leading-[1.85] max-w-md">
              Chez SOFTGROUP, chaque engagement de service est formalisé,
              mesuré et traçable pour une tranquillité d'esprit absolue.
            </p>
          </motion.div>
        </div>

        {/* 4 commitment cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          {COMMITMENTS.map((card, i) => (
            <CommitmentCard key={card.label} card={card} inView={inView} index={i} />
          ))}
        </div>

        {/* 3 pillars bottom band */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.55 }}
          style={{
            display:    "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            background: "rgba(255,255,255,0.70)",
            border:     "1px solid rgba(196,165,90,0.12)",
            backdropFilter: "blur(8px)",
          }}
        >
          {PILLARS.map((p, i) => (
            <div
              key={p.title}
              style={{
                padding:     "22px 28px",
                borderRight: i < 2 ? "1px solid rgba(196,165,90,0.12)" : "none",
                display:     "flex",
                alignItems:  "center",
                gap:         14,
              }}
            >
              <div style={{
                flexShrink:  0,
                width:       6,
                height:      6,
                borderRadius: "50%",
                background:  "rgba(196,165,90,0.55)",
              }} />
              <div>
                <p style={{
                  fontFamily:  "var(--font-dm-sans, sans-serif)",
                  fontSize:    12,
                  fontWeight:  600,
                  color:       "#3a3530",
                  marginBottom: 2,
                }}>
                  {p.title}
                </p>
                <p style={{
                  fontFamily: "var(--font-dm-sans, sans-serif)",
                  fontSize:   11,
                  color:      "rgba(100,90,80,0.60)",
                  letterSpacing: "0.02em",
                }}>
                  {p.sub}
                </p>
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
