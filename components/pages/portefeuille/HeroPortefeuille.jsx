"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"

const STATS = [
  { value: "50+",      label: "Projets réalisés"      },
  { value: "500 000+", label: "m² d'actifs gérés"     },
  { value: "4",        label: "Villes stratégiques"    },
  { value: "250+",     label: "Clients grands comptes" },
]

export default function HeroPortefeuille() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] })
  const y   = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])
  const opa = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  return (
    <section ref={ref} className="relative min-h-screen overflow-hidden bg-[#080808]">
      {/* Parallax image */}
      <motion.div style={{ y }} className="absolute inset-0 w-full h-[115%] -top-[8%]">
        <Image
          src="https://res.cloudinary.com/dofyrwzop/image/upload/q_auto/f_auto/v1778504256/terrain_et_developpement_buqi7d.png"
          alt="Portefeuille Immobilier — Softgroup"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/45 to-[#080808]" />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity: opa }}
        className="relative z-10 min-h-screen flex flex-col justify-end pb-24 px-8 md:px-12 lg:px-20 max-w-7xl mx-auto"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="font-sans text-[9px] tracking-[0.55em] uppercase text-gold/70 mb-6"
        >
          Nos Actifs
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-5xl md:text-7xl text-white font-light leading-[1.0] mb-8 max-w-3xl"
        >
          Un Portefeuille d&apos;Exception,
          <br />
          <span className="italic text-gold">Cinq Segments de Référence</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65 }}
          className="font-sans text-[15px] text-white/40 leading-[1.9] max-w-lg mb-16"
        >
          Une offre complète de solutions locatives haut de gamme, développées pour répondre
          aux standards les plus exigeants du marché immobilier marocain.
        </motion.p>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 border border-white/8"
        >
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className={`px-7 py-5 ${i < STATS.length - 1 ? "border-r border-white/8" : ""}`}
            >
              <p className="font-serif text-2xl md:text-3xl text-white font-light mb-1">{stat.value}</p>
              <p className="font-sans text-[9px] tracking-[0.2em] uppercase text-white/30">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
