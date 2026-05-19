"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"

export default function HeroGroupe() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] })
  const y   = useTransform(scrollYProgress, [0, 1], ["0%", "25%"])
  const opa = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  return (
    <section ref={ref} className="relative h-screen min-h-[680px] overflow-hidden bg-[#080808]">
      {/* Background image with parallax */}
      <motion.div style={{ y }} className="absolute inset-0 w-full h-[115%] -top-[8%]">
        <Image
          src="https://res.cloudinary.com/dofyrwzop/image/upload/q_auto/f_auto/v1778667663/Gemini_Generated_Image_tmluwxtmluwxtmlu_gwtymr.png"
          alt="SOFTGROUP — Un Siècle d'Excellence"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#080808]" />
      </motion.div>

      {/* ── Dark overlay — bottom-heavy gradient for text legibility ── */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: [
            "linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.80) 30%, rgba(0,0,0,0.45) 60%, rgba(0,0,0,0.0) 100%)",
            "linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, transparent 28%)",
          ].join(", "),
          zIndex: 2,
        }}
      />
      {/* Content */}
      <motion.div
        style={{ opacity: opa }}
        className="relative z-10 h-full flex flex-col justify-end pb-24 px-8 md:px-12 lg:px-20 max-w-7xl mx-auto"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="font-sans text-[20px] font-bold tracking-[0.55em] uppercase text-gold/70 mb-6"
        >
          Le Groupe
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-5xl md:text-7xl lg:text-7xl text-white font-light leading-[1.0] mb-8 max-w-5xl"
        >
          Un Groupe
          <br />
          Une Vision,
          <span className="italic text-gold"> Un Héritage</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65 }}
          className="font-sans text-[20px] text-white/70 leading-[1.9] max-w-2xl mb-10"
        >
          Depuis 1918, SOFTGROUP s&apos;est développé de génération en génération pour
          devenir un groupe marocain majeur dans les secteurs du textile, de
          l&apos;immobilier et de la distribution.
        </motion.p>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex items-center gap-3"
        >
          <div className="w-px h-10 bg-gradient-to-b from-gold/60 to-transparent" />
          <span className="font-sans text-[14px] tracking-[0.4em] uppercase text-white/40">Découvrir</span>
        </motion.div>
      </motion.div>

      {/* Bottom gold rule */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/25 to-transparent" />
    </section>
  )
}
