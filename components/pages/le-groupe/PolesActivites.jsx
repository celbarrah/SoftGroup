"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"

const POLES = [
  {
    num:     "01",
    title:   "Immobilier Locatif",
    desc:    "Foncière locative de référence au Maroc depuis plus de 35 ans, SoftGroup Immobilier est un constructeur-développeur intégré maîtrisant l'intégralité du cycle de vie des projets : de la conception à la gestion locative.",
    anchor:  "#softgroup-immobilier",
    image:   "https://res.cloudinary.com/dofyrwzop/image/upload/q_auto/f_auto/v1781013109/locatif_t9hj0c.png",
  },
  {
    num:     "02",
    title:   "Industrie Textile",
    desc:    "Pionnier certifié ISO 9001 et premier producteur national de maille, SoftGroup exporte le savoir-faire marocain à l'international grâce à un outil industriel totalement intégré et une expertise technique de pointe.",
    anchor:  "#notre-histoire",
    image:   "https://res.cloudinary.com/dofyrwzop/image/upload/q_auto/f_auto/v1779719154/textile_ruj3as.png",
  },
  {
    num:     "03",
    title:   "Distribution & Retail",
    desc:    "N°1 de la distribution de mode au Maroc, le groupe pilote un réseau retail puissant porté par ses deux marques phares : Diamantine, l'icône du prêt-à-porter traditionnel modernisé, et Bigdil, la référence des accessoires de mode féminins.",
    anchor:  "#notre-histoire",
    image:   "https://res.cloudinary.com/dofyrwzop/image/upload/q_auto/f_auto/v1779719140/distribution.jpg_xpcme3.webp",
  },
]

export default function PolesActivites() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-8%" })
  const [hoveredIndex, setHoveredIndex] = useState(null)

  return (
    <section ref={ref} id="poles-activites" className="bg-[#fcfcfc] py-24 md:py-20 overflow-hidden">
      <div className="max-w-[1500px] mx-auto px-8 md:px-12 lg:px-16">

        {/* ── Header ──────────────────────────────────── */}
        <div className="mb-16 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="font-sans text-[13px] md:text-[14px] font-semibold tracking-[0.2em] uppercase text-[#C4A55A] mb-6">
              Pôles d'activités
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-[#1a202c] font-bold leading-[1.15] mb-6">
              Trois métiers,<br />
              une exigence commune
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <p className="font-sans text-[15px] text-neutral-700 leading-relaxed max-w-[550px]">
              Depuis plus d'un siècle, Softgroup construit son développement autour
              de pôles complémentaires, chacun leader ou référence dans son secteur au Maroc.
            </p>
          </motion.div>
        </div>

        {/* ── Three poles ─────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {POLES.map((pole, i) => (
            <motion.div
              key={pole.num}
              initial={{ opacity: 0, y: 36 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.75, delay: 0.1 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative overflow-hidden block rounded-2xl h-[450px] md:h-[500px]"
            >
              {/* Image */}
              <img
                src={pole.image}
                alt={pole.title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[800ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
              />
              
              {/* Dark Gradient Overlay (Darkens slightly more on hover to improve text legibility) */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent transition-all duration-500 group-hover:from-black group-hover:via-black/60" />

              {/* Text Content */}
              <div className="absolute bottom-0 left-0 p-8 md:p-10 flex flex-col z-10 w-full">
                <span className="font-sans text-[13px] tracking-[0.15em] text-[#C4A55A] font-medium mb-2">
                  {pole.num}
                </span>
                <h3 className="font-serif text-xl md:text-2xl text-white font-light">
                  {pole.title}
                </h3>
                
                {/* Expandable Description */}
                <motion.div
                  initial={false}
                  animate={{
                    height: hoveredIndex === i ? "auto" : 0,
                    opacity: hoveredIndex === i ? 1 : 0,
                    marginTop: hoveredIndex === i ? "12px" : "0px",
                  }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="font-sans text-sm md:text-[13px] text-white/80 leading-relaxed">
                    {pole.desc}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}