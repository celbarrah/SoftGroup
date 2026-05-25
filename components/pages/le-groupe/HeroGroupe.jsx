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
    <section ref={ref} className="relative h-screen flex justify-start items-center min-h-[680px] overflow-hidden bg-[#080808]">
      {/* Background image with parallax */}
      <motion.div style={{ y }} className="absolute inset-0 w-full h-[115%] -top-[8%]">
        <Image
          src="https://res.cloudinary.com/dofyrwzop/image/upload/q_auto/f_auto/v1779373161/IMG_1044_zxriiy.jpg"
          alt="SOFTGROUP — Un Siècle d'Excellence"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-white/30 to-[#fff]/20" />
      </motion.div>

      {/* ── Dark overlay — bottom-heavy gradient for text legibility ── */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: [
            "linear-gradient(to top, rgba(0,0,0,0.20) 0%, rgba(0,0,0,0.20) 30%, rgba(0,0,0,0.20) 60%, rgba(0,0,0,0.0) 100%)",
            "linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, transparent 28%)",
          ].join(", "),
          zIndex: 2,
        }}
      />
      {/* Content */}
      <motion.div
        style={{ opacity: opa }}
        className="relative z-10 bg-black/5 rounded-2xl backdrop-blur-2xl h-auto flex flex-col justify-end pb-10 px-8 md:px-12 lg:pl-10 lg:pr-20 pt-10 max-w-7xl ml-0 md:ml-20"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="font-sans text-[12px] font-bold tracking-[0.55em] uppercase text-gold mb-6"
        >
          Softgroup Holding — Depuis 1918
        </motion.p>
     
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-5xl md:text-7xl lg:text-7xl text-white font-light leading-[1.0] mb-8 max-w-5xl"
        >
          Un Groupe
          <br />
          Une Vision <br/>
          <span className="italic text-gold"> Un Héritage</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65 }}
          className="font-sans text-[20px] text-white/70 leading-[1.9] max-w-2xl mb-10"
        >
          Depuis 1918, SOFTGROUP s'est développé de génération en génération pour
          devenir un groupe marocain majeur dans les secteurs du textile, de
          l'immobilier et de la distribution.
        </motion.p>

        {/* Scroll indicator */}
        {/* <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex items-center gap-3"
        >
          <div className="w-px h-10 bg-gradient-to-b from-gold/60 to-transparent" />
          <span className="font-sans text-[14px] tracking-[0.4em] uppercase text-white/40">Découvrir</span>
        </motion.div> */}
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/25 to-transparent" />
      <div className=" absolute bottom-0 left-0 right-0 h-[320px] pointer-events-none z-10 bg-gradient-to-b from-white/0 via-white/40 to-white"/>
    </section>
  )
}
