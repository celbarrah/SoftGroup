"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const STATS = [
  { value: "35+",   label: "Ans d'expertise",         sub: "Property Management & accompagnement locataire"            },
  { value: "5",     label: "Segments immobiliers",     sub: "Bureaux · Industriel · Logistique · Retail · Résidentiel"  },
  { value: "< 4h",  label: "Délai d'intervention",    sub: "Notre engagement de réactivité sur chaque site"            },
  { value: "24/7",  label: "Présence permanente",      sub: "Équipes humaines et techniques disponibles en permanence"  },
]

export default function StatsGestion() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-8%" })

  return (
    <section ref={ref} className="bg-white overflow-hidden" id="stats-gestion">
      <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className={[
                "py-12 px-8 group hover:bg-[#F7F6F2] transition-colors duration-300 border-b border-gray-100",
                i < STATS.length - 1 ? "lg:border-r lg:border-gray-100" : "",
              ].join(" ")}
            >
              <p className="font-serif text-4xl md:text-5xl text-neutral-800 font-light mb-3 group-hover:text-gold transition-colors duration-400">
                {stat.value}
              </p>
              <p className="font-sans text-[12px] tracking-[0.25em] uppercase text-gold/70 mb-2">
                {stat.label}
              </p>
              <p className="font-sans text-[15px] text-neutral-400 leading-[1.65]">
                {stat.sub}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
