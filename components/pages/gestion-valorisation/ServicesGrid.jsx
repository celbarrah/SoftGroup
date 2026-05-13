"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Wrench, Shield, Layout, FileText, Leaf, ArrowUpRight } from "lucide-react"

const SERVICES = [
  {
    icon: Wrench,
    title: "Gestion Technique & Maintenance",
    desc: "Une maintenance proactive de vos infrastructures et équipements afin de garantir performance, fiabilité et continuité d'exploitation au quotidien.",
    items: [
      "Maintenance préventive et corrective",
      "Contrôles techniques réguliers",
      "Interventions rapides et coordonnées",
      "Gestion des équipements critiques",
    ],
  },
  {
    icon: Shield,
    title: "Sécurité & Protection des Actifs",
    desc: "Des dispositifs de sécurité de niveau professionnel pour assurer la protection des occupants, des sites et des actifs sensibles.",
    items: [
      "Surveillance et gardiennage 24h/24 - 7j/7",
      "Vidéosurveillance intelligente",
      "Contrôle d'accès et gestion des flux",
      "Protocoles adaptés à chaque site",
    ],
  },
  {
    icon: Layout,
    title: "Solutions Sur-Mesure & Aménagement",
    desc: "Des espaces pensés pour évoluer avec vos besoins opérationnels, organisationnels et stratégiques.",
    items: [
      "Aménagement et optimisation des espaces",
      "Conseil en architecture intérieure",
      "Reconfiguration des bureaux et surfaces",
      "Accompagnement clé en main",
    ],
  },
  {
    icon: FileText,
    title: "Facilitation Opérationnelle & Conformité",
    desc: "Un support dédié pour simplifier la gestion quotidienne et faciliter vos démarches administratives et réglementaires.",
    items: [
      "Coordination des demandes administratives",
      "Assistance opérationnelle",
      "Suivi des interventions et réclamations",
      "Accompagnement personnalisé des occupants",
    ],
  },
  {
    icon: Leaf,
    title: "Prestations Extérieures & Environnements",
    desc: "Des espaces extérieurs entretenus selon les plus hauts standards afin de préserver confort, image et qualité d'occupation.",
    items: [
      "Entretien des jardins et espaces verts",
      "Maintenance des piscines et installations",
      "Gestion des parties communes",
      "Entretien des façades et site global",
    ],
  },
]

export default function ServicesGrid() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-8%" })

  return (
    <section ref={ref} className="bg-white py-24 md:py-36 overflow-hidden" id="services-gestion">
      <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-20">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <p className="font-sans text-[9px] tracking-[0.55em] uppercase text-gold/70 mb-5">
            Notre Écosystème
          </p>
          <h2 className="font-serif text-3xl md:text-5xl text-neutral-800 font-light leading-[1.1] max-w-xl">
            Un Écosystème de Services
            <br />
            <span className="italic text-gold">Intégré</span>
          </h2>
        </motion.div>

        {/* Grid: 2 + 2 + 1 centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {SERVICES.slice(0, 4).map((service, i) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 28 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.1 + i * 0.1 }}
                className="group border border-gray-100 p-8 hover:border-gold/30 hover:shadow-lg transition-all duration-400"
              >
                <div className="flex items-start gap-5 mb-6">
                  <div className="w-10 h-10 border border-gold/25 flex items-center justify-center flex-none group-hover:border-gold transition-colors duration-300">
                    <Icon size={16} className="text-gold/60 group-hover:text-gold transition-colors duration-300" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-sans text-[13px] tracking-[0.15em] uppercase text-gold mb-1">{service.title}</h3>
                    <div className="w-6 h-px bg-gold/30 mt-2" />
                  </div>
                </div>
                <p className="font-sans text-[16px] text-neutral-500 leading-[1.8] mb-6">{service.desc}</p>
                <ul className="space-y-2">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-gold/40 text-[8px] mt-1 flex-none">—</span>
                      <span className="font-sans text-[15px] text-neutral-500 leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>

        {/* Last service — full width centered */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="group border border-gray-100 p-8 hover:border-gold/30 hover:shadow-lg transition-all duration-400"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="flex items-start gap-5">
              <div className="w-10 h-10 border border-gold/25 flex items-center justify-center flex-none">
                <Leaf size={16} className="text-gold/60" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-sans text-[13px] tracking-[0.15em] uppercase text-gold mb-1">{SERVICES[4].title}</h3>
                <div className="w-6 h-px bg-gold/30 mt-2 mb-4" />
                <p className="font-sans text-[16px] text-neutral-500 leading-[1.8]">{SERVICES[4].desc}</p>
              </div>
            </div>
            <ul className="space-y-2">
              {SERVICES[4].items.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-gold/40 text-[8px] mt-1 flex-none">—</span>
                  <span className="font-sans text-[15px] text-neutral-500 leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-3 bg-gold text-noir font-sans text-[10px] tracking-[0.28em] uppercase px-10 py-4 hover:bg-gold/90 transition-colors duration-300 group"
          >
            Demander une expertise
            <ArrowUpRight size={13} strokeWidth={1.5} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-3 border border-gold/30 text-gold font-sans text-[10px] tracking-[0.28em] uppercase px-10 py-4 hover:bg-gold hover:text-noir transition-all duration-300"
          >
            Planifier une visite
          </a>
        </motion.div>
      </div>
    </section>
  )
}
