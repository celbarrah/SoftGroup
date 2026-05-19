"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

export default function VisionGestion() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-8%" })

  return (
    <section ref={ref} className="bg-[#F7F6F2] py-24 md:py-36 overflow-hidden" id="vision-gestion">
      <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left — text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-sans text-[12px] tracking-[0.55em] uppercase text-gold/70 mb-6">
              Notre Vision
            </p>
            <h2 className="font-serif text-3xl md:text-5xl text-neutral-800 font-light leading-[1.1] mb-6">
              Un accompagnement
              <br />
              <span className="italic text-gold">sur mesure</span>
            </h2>
            <div className="w-10 h-px bg-gold/40 mb-8" />

            <p className="font-sans text-[17px] text-neutral-500 leading-[1.9] mb-6">
              Chez SOFTGROUP, nous allons au-delà de la mise à disposition d&apos;espaces.
              Notre modèle de gestion intégré est conçu pour offrir une expérience
              fluide, réactive et durable — de la remise des clés à la fin du bail.
            </p>
            <p className="font-sans text-[17px] text-neutral-500 leading-[1.9] mb-12">
              Des équipes internes multidisciplinaires, un pilotage centralisé,
              et une approche préventive orientée continuité d&apos;exploitation
              pour chaque locataire.
            </p>

            {/* 3 key pillars */}
            <div className="space-y-0">
              {[
                { num: "01", txt: "Une disponibilité 24h/24 et 7j/7 pour chaque site" },
                { num: "02", txt: "Un pilotage centralisé par des équipes multidisciplinaires" },
                { num: "03", txt: "Une approche préventive orientée continuité d'exploitation" },
              ].map((item) => (
                <div key={item.num} className="flex items-start gap-5 py-5 border-b border-gray-200 first:border-t">
                  <span className="font-sans text-[10px] text-gold/50 tracking-[0.2em] flex-none mt-0.5 tabular-nums">
                    {item.num}
                  </span>
                  <p className="font-sans text-[17px] text-neutral-600 leading-snug">{item.txt}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — image + floating badge */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.0, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
            style={{ aspectRatio: "4/3" }}
          >
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=80"
              alt="Espace de bureau géré par Softgroup"
              style={{
                width:      "100%",
                height:     "100%",
                objectFit:  "cover",
                display:    "block",
              }}
            />
            {/* Subtle vignette */}
            <div
              style={{
                position:   "absolute",
                inset:      0,
                background: "linear-gradient(to top, rgba(0,0,0,0.28) 0%, transparent 50%)",
              }}
            />

            {/* Floating 98% satisfaction badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.55 }}
              style={{
                position:   "absolute",
                bottom:     24,
                left:       24,
                background: "rgba(255,255,255,0.97)",
                backdropFilter: "blur(8px)",
                border:     "1px solid rgba(196,165,90,0.20)",
                padding:    "18px 24px",
                boxShadow:  "0 8px 32px rgba(0,0,0,0.10)",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-cormorant, serif)",
                  fontSize:   36,
                  fontWeight: 300,
                  color:      "#C4A55A",
                  lineHeight: 1,
                  marginBottom: 4,
                }}
              >
                98%
              </p>
              <p
                style={{
                  fontFamily:    "var(--font-dm-sans, sans-serif)",
                  fontSize:      11,
                  letterSpacing: "0.08em",
                  color:         "rgba(15,25,35,0.55)",
                  textTransform: "uppercase",
                }}
              >
                Taux de satisfaction locataire
              </p>
            </motion.div>

            {/* Gold top-left corner accent */}
            <div
              style={{
                position:   "absolute",
                top:        0,
                left:       0,
                width:      2,
                height:     "35%",
                background: "linear-gradient(to bottom, #C4A55A, transparent)",
              }}
            />
          </motion.div>

        </div>
      </div>
    </section>
  )
}
