"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const STATS = [
  { value: "35+",    label: "Ans d'expertise",   sub: "Property Management & accompagnement locataire"         },
  { value: "5",      label: "Segments maîtrisés", sub: "Bureaux · Industriel · Logistique · Retail · Résidentiel" },
  { value: "7j/7",   label: "24h/24",             sub: "Présence humaine et technique permanente sur tous nos sites" },
  { value: "< 24h",  label: "Prise en charge",    sub: "Notre engagement de traitement de vos demandes critiques"  },
]

export default function StatsGestion() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-8%" })

  return (
    <section ref={ref} className="bg-[#F5F3EF] py-0 overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-gray-200">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className={[
                "py-10 px-8 border-b border-gray-200 group hover:bg-white/60 transition-colors duration-300",
                i < STATS.length - 1 ? "lg:border-r lg:border-gray-200" : "",
              ].join(" ")}
            >
              <p className="font-serif text-3xl md:text-4xl text-neutral-800 font-light mb-2 group-hover:text-gold transition-colors duration-400">
                {stat.value}
              </p>
              <p className="font-sans text-[9px] tracking-[0.25em] uppercase text-gold/70 mb-2">
                {stat.label}
              </p>
              <p className="font-sans text-[14px] text-neutral-500 leading-[1.6]">
                {stat.sub}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
