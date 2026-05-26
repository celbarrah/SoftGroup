"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Phone, Clock, Wrench, ClipboardCheck } from "lucide-react"

const METRICS = [
  { val: "< 4h",  lbl: "Délai moyen d'intervention"      },
  { val: "98%",   lbl: "Satisfaction locataire"          },
  { val: "1",     lbl: "Interlocuteur par site"          },
  { val: "100%",  lbl: "Demandes tracées & clôturées"    },
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
      <div className="max-w-[1600px] mx-auto px-8 md:px-12 lg:px-20 py-24 md:py-32">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="font-sans text-[17px] font-bold tracking-[0.55em] uppercase text-[#c4a55a]/80 mb-4">
            Notre Engagement
          </p>
          <h2 className="font-serif text-3xl md:text-5xl text-black font-light leading-[1.1]">
            Un protocole
            <br />
            <span className="italic text-[#c4a55a] font-medium">d'intervention rigoureux</span>
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
            <p className="font-sans text-[17px] font-light leading-[1.85] mb-12 max-w-[46ch] text-black/70">
              Un gestionnaire dédié, des délais mesurés, un rapport à chaque clôture. 
              Pas de promesse floue des résultats traçables.
            </p>

            {/* 2x2 metrics grid - Styled for light theme */}
            <div className="grid grid-cols-2 gap-[1px] bg-[#c4a55a]/15 rounded-2xl overflow-hidden">
              {METRICS.map((m, i) => (
                <motion.div
                  key={m.lbl}
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + i * 0.09 }}
                  className="bg-[#faf9f6] p-7 flex flex-col justify-center"
                >
                  <p className="font-serif text-[40px] font-light text-[#c4a55a] leading-none mb-2.5">
                    {m.val}
                  </p>
                  <p className="font-sans text-[12px] text-black/50 tracking-[0.06em] uppercase font-medium">
                    {m.lbl}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — Timeline v2 */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.0, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex flex-col"
          >
            {/* Vertical Line */}
            <div className="absolute left-[18px] top-[28px] bottom-[28px] w-[1px] bg-[#c4a55a]/20 pointer-events-none" />

            {STEPS.map((step, i) => {
              const Icon = step.Icon
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
                  className="relative flex gap-6 py-6 group cursor-default"
                >
                  {/* Timeline Dot */}
                  <div className="relative z-10 flex items-center justify-center w-[36px] h-[36px] rounded-full border border-[#c4a55a]/30 bg-white shrink-0 transition-colors duration-300 group-hover:bg-[#c4a55a] group-hover:border-[#c4a55a]">
                    <Icon 
                      size={20} 
                      strokeWidth={1.8} 
                      className="text-[#c4a55a] transition-colors duration-300 group-hover:text-white" 
                    />
                  </div>

                  {/* Body */}
                  <div className="pt-1.5 flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h4 className="font-sans text-[15px] font-medium text-black">
                        {step.title}
                      </h4>
                      <span className="font-sans text-[11px] text-[#c4a55a] bg-[#c4a55a]/10 rounded-full px-2.5 py-0.5 tracking-[0.04em] font-semibold uppercase">
                        {step.badge}
                      </span>
                    </div>
                    <p className="font-sans text-[14px] text-black/60 leading-[1.7]">
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