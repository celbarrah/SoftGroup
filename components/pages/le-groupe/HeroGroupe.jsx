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
        <div className="absolute inset-0 bg-noir/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-noir/50 via-noir/30 to-transparent" />
      </motion.div>

        {/* White bottom fade — matches reference height:260px */}
      <div
        className="absolute bottom-0 left-0 right-0 z-[2] pointer-events-none"
        style={{ height: 150, background: "linear-gradient(to bottom, transparent, #fff)" }}
      />

      {/* Glass card — content */}
      <motion.div
        // style={{ opacity: opa }}
        className="relative -left-4 md:left-0 z-10 ml-[clamp(32px,8vw,130px)] max-w-[600px]"
      >
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="bg-black/10 backdrop-blur-[50px] rounded-[24px] px-[52px] py-[48px]"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-[12px] tracking-[0.20em] uppercase text-gold mb-6"
          >
            Softgroup Holding — Depuis 1918
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-5xl md:text-6xl lg:text-7xl text-white font-light leading-[1.0] mb-8"
          >
            Un Groupe.
            <br />
            Une Vision. <br />
            <span className="italic text-gold">Un Héritage.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.65 }}
            className="font-sans pr-3.5 text-[15px] text-white/70 leading-[1.9] max-w-lg"
          >
            Depuis 1918, SOFTGROUP s'est développé de génération en génération pour
            devenir un groupe marocain majeur dans les secteurs du textile, de
            l'immobilier et de la distribution.
          </motion.p>
        </motion.div>
      </motion.div>

      {/* DÉFILER indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-[180px] right-14 z-20 cursor-pointer"
        onClick={() => window.scrollBy({ top: window.innerHeight, behavior: "smooth" })}
      >
        <div className="hero-deflier flex flex-col items-center gap-2">
          <div className="w-px h-10 bg-gradient-to-b from-white/50 to-transparent" />
          <span className="font-sans text-[12px] tracking-[0.14em] uppercase text-white/35">Défiler</span>
        </div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/25 to-transparent" />
    </section>
  )
}
