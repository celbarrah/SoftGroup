"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const STATS = [
  { value: "35+",    label: "Ans d'expertise",   sub: "Property Management & accompagnement locataire" },
  { value: "5",      label: "Segments maîtrisés", sub: "Bureaux · Industriel · Logistique · Retail · Résidentiel" },
  { value: "7j/7",   label: "24h/24",             sub: "Présence humaine et technique permanente sur tous nos sites" },
  { value: "< 24h",  label: "Prise en charge",    sub: "Notre engagement de traitement de vos demandes critiques" },
]

export default function StatsGestion() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-8%" })

  return (
    <section ref={ref} className="bg-[#080808] py-0 overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-white/8">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className={[
                "py-10 px-8 border-b border-white/8",
                i < STATS.length - 1 ? "lg:border-r lg:border-white/8" : "",
              ].join(" ")}
            >
              <p className="font-serif text-3xl md:text-4xl text-white font-light mb-2">{stat.value}</p>
              <p className="font-sans text-[9px] tracking-[0.25em] uppercase text-gold/70 mb-2">{stat.label}</p>
              <p className="font-sans text-[15px] text-white/25 leading-[1.6]">{stat.sub}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
