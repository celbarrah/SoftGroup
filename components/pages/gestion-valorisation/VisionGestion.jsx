"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { CheckCircle } from "lucide-react"

const PILLARS = [
  "Une disponibilité 24h/24 et 7j/7",
  "Des équipes internes multidisciplinaires",
  "Une gestion centralisée et réactive",
  "Une expertise technique et opérationnelle intégrée",
  "Une approche préventive orientée continuité d'exploitation",
  "Une capacité d'adaptation aux exigences spécifiques de chaque activité",
]

export default function VisionGestion() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-8%" })

  return (
    <section ref={ref} className="bg-white py-24 md:py-36 overflow-hidden" id="vision-gestion">
      <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-sans text-[9px] tracking-[0.55em] uppercase text-gold/70 mb-6">
              Notre Vision du Service
            </p>
            <h2 className="font-serif text-3xl md:text-5xl text-neutral-800 font-light leading-[1.1] mb-6">
              Un partenaire
              <br />
              <span className="italic text-gold">de long terme</span>
            </h2>
            <div className="w-10 h-px bg-gold/40 mb-8" />
            <p className="font-sans text-[15px] text-neutral-500 leading-[1.9] mb-6">
              Chez SOFTGROUP Immobilier, nous allons au-delà de la mise à disposition d&apos;espaces
              immobiliers. Nous développons un modèle de gestion intégré conçu pour offrir à
              nos locataires une expérience fluide, réactive et durable au quotidien.
            </p>
            <p className="font-sans text-[15px] text-neutral-500 leading-[1.9] mb-10">
              Notre ambition est de faire du service après-location un véritable levier de
              performance, de confort et de sérénité pour nos occupants.
            </p>

            {/* Pillars */}
            <ul className="space-y-3">
              {PILLARS.map((pillar, i) => (
                <motion.li
                  key={pillar}
                  initial={{ opacity: 0, x: -16 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.07 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle size={13} className="text-gold flex-none mt-0.5" strokeWidth={1.5} />
                  <span className="font-sans text-[16px] text-neutral-600 leading-snug">{pillar}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right: interlocuteur dédié block */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.0, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="bg-gray-50 border border-gray-100 p-10 lg:p-14"
          >
            <p className="font-sans text-[9px] tracking-[0.45em] uppercase text-gold/70 mb-6">
              Un Interlocuteur Dédié
            </p>
            <h3 className="font-serif text-2xl md:text-3xl text-neutral-800 font-light leading-[1.2] mb-6">
              Une réactivité immédiate pour chaque locataire
            </h3>
            <div className="w-8 h-px bg-gold/40 mb-7" />
            <p className="font-sans text-[17px] text-neutral-500 leading-[1.9] mb-8">
              Chaque locataire bénéficie d&apos;un accompagnement personnalisé assuré par des équipes
              mobilisables en permanence pour garantir une prise en charge rapide et efficace.
            </p>
            <div className="space-y-4">
              {[
                "Un point de contact dédié pour centraliser et coordonner vos demandes",
                "Des interventions techniques organisées dans les meilleurs délais",
                "Un suivi structuré des réclamations et opérations",
                "Une organisation réactive pour limiter toute interruption d'activité",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 py-3 border-b border-gray-100 last:border-0">
                  <span className="font-sans text-[9px] text-gold/60 mt-0.5 flex-none tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                  <p className="font-sans text-[16px] text-neutral-600 leading-snug">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
