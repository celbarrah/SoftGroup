"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"

export default function HeroPortefeuille() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] })
  const y   = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])
  const opa = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  return (
    <section ref={ref} className="relative overflow-hidden bg-[#0F1923] flex items-center" style={{ height: "100vh", minHeight: 700 }}>

      {/* Parallax background */}
      <motion.div style={{ y }} className="absolute inset-0 w-full h-[115%] -top-[8%]">
        <Image
          src="https://res.cloudinary.com/dofyrwzop/image/upload/q_auto/f_auto/v1781015873/hero_banner_segment_mbopqb.png"
          alt="Portefeuille Immobilier — Softgroup"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Flat dark overlay — matching reference rgba(15,25,35,.44) */}
        <div className="absolute inset-0 bg-[rgba(15,25,35,0.44)]" />
      </motion.div>

      {/* White bottom fade — matches reference height:260px */}
      <div
        className="absolute bottom-0 left-0 right-0 z-[2] pointer-events-none"
        style={{ height: 260, background: "linear-gradient(to bottom, transparent, #fff)" }}
      />

      {/* Glass card — content */}
      <motion.div
        style={{ opacity: opa }}
        className="relative -left-4 md:left-0 z-[3] ml-[clamp(25px,6vw,120px)] max-w-[470px]"
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="bg-[rgba(0,0,0,0.50)] backdrop-blur-[22px] border border-white/[0.12] rounded-[20px] px-[48px] py-[30px]"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="block font-sans text-[10.5px] tracking-[0.24em] uppercase text-gold mb-5"
          >
            Nos Actifs
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-white font-light leading-[1.0] tracking-[-0.015em] mb-5"
            style={{ fontSize: "clamp(50px,5.3vw,63px)" }}
          >
            Un Portefeuille d'Exception,
            <br />
            <em className="italic text-gold">Cinq Segments<br />de Référence</em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.65 }}
            className="font-sans text-[14.5px] font-light text-white/72 leading-[1.82] max-w-[40ch]"
          >
            Une offre complète de solutions locatives haut de gamme, développées
            pour répondre aux standards les plus exigeants du marché immobilier marocain.
          </motion.p>
        </motion.div>
      </motion.div>

      {/* DÉFILER indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute z-[3] cursor-pointer"
        style={{ bottom: 200, right: 52 }}
        onClick={() => window.scrollBy({ top: window.innerHeight, behavior: "smooth" })}
      >
        <div className="hero-deflier flex flex-col items-center gap-2">
          <div className="w-px h-[38px] bg-gradient-to-b from-white/50 to-transparent" />
          <span className="font-sans text-[9.5px] tracking-[0.15em] uppercase text-white/32">Défiler</span>
        </div>
      </motion.div>

    </section>
  )
}
