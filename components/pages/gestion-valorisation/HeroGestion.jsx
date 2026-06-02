"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"

export default function HeroGestion() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] })
  const y   = useTransform(scrollYProgress, [0, 1], ["0%", "25%"])
  const opa = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  return (
    <section ref={ref} className="relative h-screen flex justify-start items-center min-h-[700px] overflow-hidden bg-[#080808]">

      {/* Background image with parallax */}
      <motion.div style={{ y }} className="absolute inset-0 w-[full] h-[100%] ">
        <Image
          src="https://res.cloudinary.com/dofyrwzop/image/upload/q_auto/f_auto/v1779811786/ChatGPT_Image_23_mai_2026_a%CC%80_03_26_34_fj0xf3.png"
          alt="Property & Facility Management — Softgroup"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-noir/35" />
        <div className="absolute inset-0 bg-gradient-to-r from-noir/65 via-noir/20 to-transparent" />
      </motion.div>

      {/* Transparent glass card — content */}
      <motion.div
        // style={{ opacity: opa }}
        className="relative z-10 -left-5 md:left-24 ml-[clamp(32px,8vw,130px)] max-w-[520px]"
      >
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="bg-black/30 backdrop-blur-[22px] border border-white/[0.15]
                     rounded-[24px] px-[40px] py-[36px]"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="font-sans text-[13px] tracking-[0.20em] uppercase text-gold font-bold mb-5"
          >
            Property & Facility Management
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl text-white font-light leading-[1.05] mb-6"
          >
            Votre espace.
            <br />
            <span className="italic text-gold">Notre engagement.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.65 }}
            className="font-sans text-[15px] text-white/80 leading-[1.9] max-w-lg"
          >
            La signature du bail n'est que le début. Softgroup gère, protège
            et optimise vos espaces au quotidien avec une présence humaine
            et technique permanente sur chaque site.
          </motion.p>
        </motion.div>
      </motion.div>

      {/* DÉFILER scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-[180px] right-14 z-10 cursor-pointer"
        onClick={() => window.scrollBy({ top: window.innerHeight, behavior: "smooth" })}
      >
        <div className="hero-deflier flex flex-col items-center gap-2">
          <div className="w-px h-10 bg-gradient-to-b from-white/50 to-transparent" />
          <span className="font-sans text-[12px] tracking-[0.14em] uppercase text-white/35">
            Défiler
          </span>
        </div>
      </motion.div>

    </section>
  )
}
