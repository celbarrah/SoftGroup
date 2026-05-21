"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const POLES = [
  {
    num:     "01",
    title:   "Immobilier Locatif",
    desc:    "Foncière locative de référence au Maroc depuis plus de 35 ans, SoftGroup Immobilier est un constructeur-développeur intégré maîtrisant l'intégralité du cycle de vie des projets : de la conception à la gestion locative.",
    anchor:  "#softgroup-immobilier",
    image:   "https://res.cloudinary.com/dofyrwzop/image/upload/q_auto/f_auto/v1778504245/bureaux_et_centre_d_affaires_yoldrb.png",
  },
  {
    num:     "02",
    title:   "Industrie Textile",
    desc:    "Pionnier certifié ISO 9001 et premier producteur national de maille, SoftGroup exporte le savoir-faire marocain à l'international grâce à un outil industriel totalement intégré et une expertise technique de pointe.",
    anchor:  "#notre-histoire",
    image:   "https://res.cloudinary.com/dofyrwzop/image/upload/q_auto/f_auto/v1778855307/SEGMENT_RESIDEN_bniuqo.webp",
  },
  {
    num:     "03",
    title:   "Distribution & Retail",
    desc:    "N°1 de la distribution de mode au Maroc, le groupe pilote un réseau retail puissant porté par ses deux marques phares : Diamantine, l'icône du prêt-à-porter traditionnel modernisé, et Bigdil, la référence des accessoires de mode féminins.",
    anchor:  "#notre-histoire",
    image:   "https://res.cloudinary.com/dofyrwzop/image/upload/q_auto/f_auto/v1778504226/retail_et_commerce_fuezst.png",
  },
]

export default function PolesActivites() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-8%" })

  return (
    <section ref={ref} id="poles-activites" className="bg-[#F5F3EF] py-24 md:py-36 overflow-hidden">
      <div className="max-w-400 mx-auto px-8 md:px-12 lg:px-20">

        {/* ── Header ──────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 items-end">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="font-sans text-[14px] font-bold tracking-[0.55em] uppercase text-gold/70 mb-6">
              Pôles d&apos;Activités
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-neutral-800 font-light leading-[1.05]">
              Trois métiers,
              <br />
              <span className="italic text-gold">une exigence commune</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <p className="font-sans text-[17px] text-neutral-500 leading-[1.9]">
              Depuis plus d&apos;un siècle, Softgroup construit son développement autour
              de pôles complémentaires, chacun leader ou référence dans son secteur au Maroc.
            </p>
          </motion.div>
        </div>

        {/* ── Three poles ─────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {POLES.map((pole, i) => (
            <motion.a
              key={pole.num}
              href={pole.anchor}
              initial={{ opacity: 0, y: 36 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.75, delay: 0.1 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="group relative overflow-hidden block"
              style={{ textDecoration: "none" }}
            >
              {/* Image */}
              <div className="relative h-[260px] overflow-hidden">
                <img
                  src={pole.image}
                  alt={pole.title}
                  loading="lazy"
                  style={{
                    position:   "absolute",
                    inset:      0,
                    width:      "100%",
                    height:     "100%",
                    objectFit:  "cover",
                    transition: "transform 0.7s cubic-bezier(0.22,1,0.36,1)",
                  }}
                  className="group-hover:scale-105"
                />
                {/* Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                {/* Number badge */}
                <div
                  style={{
                    position:     "absolute",
                    top:          16,
                    left:         16,
                    fontFamily:   "var(--font-dm-sans, sans-serif)",
                    fontSize:     9,
                    letterSpacing:"0.4em",
                    textTransform:"uppercase",
                    color:        "rgba(196,165,90,0.75)",
                    fontWeight:   500,
                  }}
                >
                  {pole.num}
                </div>

                {/* Gold bottom line */}
                <div
                  style={{
                    position:   "absolute",
                    bottom:     0,
                    left:       0,
                    height:     2,
                    background: "#C4A55A",
                    width:      "28px",
                    transition: "width 0.5s cubic-bezier(0.22,1,0.36,1)",
                  }}
                  className="group-hover:!w-full"
                />
              </div>

              {/* Content */}
              <div className="bg-white px-6 py-7 border border-gray-100 border-t-0">
                <h3 className="font-serif text-xl text-neutral-800 font-light leading-snug mb-3 group-hover:text-gold transition-colors duration-300">
                  {pole.title}
                </h3>
                <p className="font-sans text-[15px] text-neutral-500 leading-[1.75]">
                  {pole.desc}
                </p>
              </div>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  )
}
