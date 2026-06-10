"use client"

import { useRef, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"

/* ── Stats shown at the bottom of the hero ─────────────── */
const STATS = [
  { value: "+35 ans",   label: "d'Expertise"             },
  { value: "5",         label: "Segments d'Activités"    },
  { value: "98%",       label: "Taux d'Occupation"       },
]

export default function ActualiteHero() {
  const ref = useRef(null)
  const [videoReady, setVideoReady] = useState(false)

  /* ── Parallax scroll transforms ─────────────────────── */
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })
  // Text block drifts up slightly as user scrolls
  const textY     = useTransform(scrollYProgress, [0, 1], ["0%", "22%"])
  // Overlay darkens subtly on scroll
  const overlayOp = useTransform(scrollYProgress, [0, 0.7], [0.52, 0.72])

  return (
    <section
      ref={ref}
      className="relative w-full h-[60vh] md:h-screen min-h-[400px] md:min-h-[620px] overflow-hidden flex flex-col"
    >
      {/* ── Background media ──────────────────────────── */}
      
        {/* PLACEHOLDER — swap this entire div with a <video> or <Image>: */}

        {/* Poster shown until video is ready — eliminates the initial black/glitch frame */}
        <div
          className="absolute inset-0  transition-opacity duration-700"
          style={{ opacity: videoReady ? 0 : 1, zIndex: 1 }}
        />
        <Image src={"https://res.cloudinary.com/dofyrwzop/image/upload/q_auto/f_auto/v1781086575/ACTUALITES_HERO_BANNER_1_g6qe58.png"} fill className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700" alt="Actualite" />
     
      {/* ── Dark overlay — bottom-heavy gradient for text legibility ── */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: [
            "linear-gradient(to top, rgba(0,0,0,0.80) 0%, rgba(0,0,0,0.60) 40%, rgba(0,0,0,0.30) 60%, rgba(0,0,0,0.0) 100%)",
            "linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, transparent 28%)",
          ].join(", "),
          zIndex: 2,
        }}
      />

      {/* ── Parallax text block ───────────────────────── */}
      <motion.div
        style={{ y: textY }}
        className="relative z-10 flex-1 flex flex-col items-start justify-end pb-24 px-6 md:px-12"
      >
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-5xl md:text-8xl lg:text-[5.5rem] text-white font-light leading-[1.05] tracking-[-0.01em] max-w-6xl relative bottom-0 md:bottom-20"
        >
          <span className="text-gold">Actualités </span> <br /> <span className="font-extrabold">Ce qui se construit </span>
          
          <span className="italic text-gold"><span className="font-bold">se raconte aussi.</span></span>
        </motion.h1>

        <div className="flex flex-col md:flex-row justify-start md:justify-between max-w-5xl w-full">
        </div>
      </motion.div>
    </section>
  )
}