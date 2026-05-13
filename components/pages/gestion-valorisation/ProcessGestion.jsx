"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const STEPS = [
  {
    num: "01",
    title: "Prise en charge immédiate",
    desc: "Vos demandes sont réceptionnées et orientées vers les équipes concernées dans les meilleurs délais.",
    icon: "⚡",
  },
  {
    num: "02",
    title: "Évaluation & coordination",
    desc: "Nos équipes techniques analysent la situation et coordonnent les interventions nécessaires.",
    icon: "🔍",
  },
  {
    num: "03",
    title: "Intervention & suivi opérationnel",
    desc: "Les actions correctives sont déployées avec un suivi continu jusqu'à résolution complète.",
    icon: "🔧",
  },
  {
    num: "04",
    title: "Contrôle qualité & clôture",
    desc: "Chaque intervention fait l'objet d'une validation afin de garantir la qualité et la conformité des actions réalisées.",
    icon: "✓",
  },
]

export default function ProcessGestion() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-8%" })

  return (
    <section ref={ref} className="bg-[#080808] py-24 md:py-36 overflow-hidden" id="processus-gestion">
      <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-20">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <p className="font-sans text-[9px] tracking-[0.55em] uppercase text-gold/60 mb-5">
            Notre Protocole
          </p>
          <h2 className="font-serif text-3xl md:text-5xl text-white font-light leading-[1.1]">
            Un Protocole d&apos;Intervention
            <br />
            <span className="italic text-gold">Rigoureux</span>
          </h2>
          <p className="font-sans text-[15px] text-white/35 mt-6 max-w-xl mx-auto leading-[1.9]">
            Chaque demande d&apos;intervention ou réclamation fait l&apos;objet d&apos;un suivi centralisé
            et rigoureux pour garantir un haut niveau de qualité de service.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 + i * 0.12 }}
              className="relative border border-white/8 p-8 group hover:border-gold/30 transition-colors duration-400"
            >
              {/* Connector line */}
              {i < STEPS.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-px w-px h-[40%] -translate-y-1/2 bg-gradient-to-b from-transparent via-gold/20 to-transparent z-10" />
              )}

              <div className="mb-6">
                <span className="font-sans text-[9px] tracking-[0.35em] uppercase text-gold/40">{step.num}</span>
              </div>

              <div className="w-10 h-px bg-gold/25 mb-6" />

              <h3 className="font-serif text-xl text-white font-light leading-[1.3] mb-4 group-hover:text-gold transition-colors duration-300">
                {step.title}
              </h3>
              <p className="font-sans text-[16px] text-white/35 leading-[1.8]">
                {step.desc}
              </p>

              {/* Bottom gold accent on hover */}
              <motion.div
                className="absolute bottom-0 left-0 h-px bg-gold origin-left"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.4 }}
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="font-sans text-[15px] text-white/20 text-center mt-10 leading-[1.8] max-w-2xl mx-auto italic"
        >
          Grâce à cette organisation centralisée et proactive, SOFTGROUP Immobilier garantit
          à ses locataires un accompagnement fiable, transparent et parfaitement maîtrisé.
        </motion.p>
      </div>
    </section>
  )
}
