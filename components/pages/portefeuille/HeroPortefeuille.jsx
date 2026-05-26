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
    <section ref={ref} className="relative min-h-screen overflow-hidden bg-[#080808] flex items-center">
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
        {/* Dark overlays */}
        <div className="absolute inset-0 bg-noir/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-noir/70 via-noir/30 to-transparent" />
      </motion.div>

      {/* Glass card — content */}
      <motion.div
        style={{ opacity: opa }}
        className="relative z-10 ml-[clamp(32px,8vw,130px)] max-w-[550px]"
      >
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="bg-black/30 backdrop-blur-[22px] border border-white/[0.15] rounded-[24px] px-[40px] py-[30px]"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="font-sans text-[15px] tracking-[0.55em] uppercase font-bold text-gold mb-6"
          >
            Nos Actifs
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-5xl md:text-6xl text-white font-light leading-[1.0] mb-8"
          >
            Un Portefeuille d'Exception,
            <br />
            <span className="italic text-gold">Cinq Segments <br/> de Référence</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.65 }}
            className="font-sans text-[15px] text-white/70 leading-[1.9] max-w-lg"
          >
            Une offre complète de solutions locatives haut de gamme, développées pour répondre
            aux standards les plus exigeants du marché immobilier marocain.
          </motion.p>
        </motion.div>
      </motion.div>

      {/* DÉFILER indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-[clamp(160px,18vw,220px)] right-14 z-10 cursor-pointer"
        onClick={() => window.scrollBy({ top: window.innerHeight, behavior: "smooth" })}
      >
        <div className="hero-deflier flex flex-col items-center gap-2">
          <div className="w-px h-10 bg-gradient-to-b from-white/50 to-transparent" />
          <span className="font-sans text-[12px] tracking-[0.14em] uppercase text-white/35">Défiler</span>
        </div>
      </motion.div>
    </section>
  )
}
