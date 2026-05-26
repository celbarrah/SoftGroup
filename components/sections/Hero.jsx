"use client"

import { useRef, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export default function Hero() {
  const ref = useRef(null)
  const [videoReady, setVideoReady] = useState(false)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"])

  return (
    <section
      ref={ref}
      className="relative w-full h-screen min-h-[620px] overflow-hidden flex flex-col"
    >
      {/* ── Background video ─────────────────────────── */}
      <div
        className="absolute inset-0 bg-neutral-900 transition-opacity duration-700"
        style={{ opacity: videoReady ? 0 : 1, zIndex: 1 }}
      />
      <video
        autoPlay muted loop playsInline preload="auto"
        poster="https://res.cloudinary.com/dofyrwzop/video/upload/so_3,f_jpg,q_auto/v1778754925/amplifiles-video-20260514T103205_mf7gew.jpg"
        onCanPlay={() => setVideoReady(true)}
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
        style={{ opacity: videoReady ? 1 : 0 }}
      >
        <source src="https://res.cloudinary.com/dofyrwzop/video/upload/q_auto/f_auto/v1778754925/amplifiles-video-20260514T103205_mf7gew.mp4" type="video/mp4" />
      </video>

      {/* ── Dark overlays ────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none bg-noir/40 z-[2]" />
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-noir/70 via-noir/30 to-transparent z-[2]" />

      {/* ── Glass card ───────────────────────────────── */}
      <motion.div
        style={{ y: textY }}
        className="relative z-10 flex-1 flex flex-col items-start justify-center px-[clamp(32px,8vw,130px)]"
      >
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="bg-black/20  border border-white/[0.15] rounded-[24px] px-[52px] py-[20px] max-w-[660px]"
        >
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-[13px] tracking-[0.20em] uppercase text-gold mb-6"
          >
            L'Immobilier d'Excellence au Maroc
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-5xl md:text-7xl text-white font-light leading-[1.05] tracking-[-0.01em] mb-8"
          >
            <span>Louer ?</span>
            <br />
            <span className="font-extrabold">C&apos;est penser </span>
            <span className="italic text-gold"><span className="font-bold">SOFT</span>GROUP.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.65 }}
            className="font-sans text-[15px] text-white/70 leading-[1.9] max-w-lg"
          >
            Foncière d&apos;exception, Softgroup est une référence de l&apos;immobilier
            locatif au Maroc. Nous concevons, gérons et valorisons un portefeuille
            d&apos;actifs premium — logistique, bureaux, résidentiel, commercial et terrains.
          </motion.p>
        </motion.div>
      </motion.div>

      {/* ── Scroll indicator ─────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-[180px] right-14 z-10 cursor-pointer"
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
