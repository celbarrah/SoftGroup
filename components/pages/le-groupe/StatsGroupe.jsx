"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const STATS = [
  { value: "1918",   label: "Année de fondation",   sub: "Depuis Haj M'hamed Kabbaj"    },
  { value: "+100",   label: "Ans d'expertise",       sub: "4 générations de la famille Kabbaj" },
  { value: "3",      label: "Cœurs de métier",       sub: "Textile · Immobilier · Distribution" },
  { value: "9",      label: "Filiales",              sub: "Présence multi-sectorielle"    },
  { value: "+4 500", label: "Collaborateurs",        sub: "Un groupe humain et engagé"   },
]

export default function StatsGroupe() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-8%" })

  return (
    <section ref={ref} className="bg-[#080808] py-20 md:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-20">

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-sans text-[9px] tracking-[0.55em] uppercase text-gold/60 mb-14 text-center"
        >
          Softgroup en chiffres
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-0 lg:divide-x divide-white/8">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="text-center lg:px-8"
            >
              <p className="font-serif text-4xl md:text-5xl text-white font-light leading-none mb-3">
                {stat.value}
              </p>
              <div className="w-6 h-px bg-gold/40 mx-auto my-3" />
              <p className="font-sans text-[9px] tracking-[0.2em] uppercase text-white/50 mb-1.5">
                {stat.label}
              </p>
              <p className="font-sans text-[9px] text-white/25 leading-relaxed">
                {stat.sub}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
