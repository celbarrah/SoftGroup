"use client"

import { useRef, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ChevronDown } from "lucide-react"

/**
 * Hero — Full-screen opening section
 * ─────────────────────────────────────────────────────────
 * Features:
 *  - Full-screen video/image placeholder (swap in real media)
 *  - Parallax: headline shifts up at 25% scroll speed (Framer Motion)
 *  - Dark overlay opacity increases slightly on scroll
 *  - Animated entrance: eyebrow → headline → subtitle → CTA
 *  - Stats bar at the bottom with 3 key metrics
 *  - Pulsing scroll-down arrow
 *
 * TO REPLACE PLACEHOLDER:
 *  Swap the inner <div className="bg-gradient..."> with:
 *  <video autoPlay muted loop playsInline className="w-full h-full object-cover">
 *    <source src="/videos/hero.mp4" type="video/mp4" />
 *  </video>
 *  OR use Next.js <Image> with fill + priority props.
 */

/* ── Stats shown at the bottom of the hero ─────────────── */
const STATS = [
  { value: "+35 ans",   label: "d'Expertise"             },
  { value: "5",         label: "Segments d'Activités"    },
  { value: "98%",       label: "Taux d'Occupation"       },
]

export default function Hero() {
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
      className="relative w-full h-screen min-h-[620px] overflow-hidden flex flex-col"
    >
      {/* ── Background media ──────────────────────────── */}
      
        {/* PLACEHOLDER — swap this entire div with a <video> or <Image>: */}

        {/* Poster shown until video is ready — eliminates the initial black/glitch frame */}
        <div
          className="absolute inset-0 bg-neutral-900 transition-opacity duration-700"
          style={{ opacity: videoReady ? 0 : 1, zIndex: 1 }}
        />
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="https://res.cloudinary.com/dofyrwzop/video/upload/so_3,f_jpg,q_auto/v1778754925/amplifiles-video-20260514T103205_mf7gew.jpg"
          onCanPlay={() => setVideoReady(true)}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
          style={{ opacity: videoReady ? 1 : 0 }}
        >
          <source src="https://res.cloudinary.com/dofyrwzop/video/upload/q_auto/f_auto/v1778754925/amplifiles-video-20260514T103205_mf7gew.mp4" type="video/mp4" />
        </video>
     
      {/* ── Dark overlay — bottom-heavy gradient for text legibility ── */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: [
            "linear-gradient(to top, rgba(0,0,0,0.80) 0%, rgba(0,0,0,0.60) 30%, rgba(0,0,0,0.30) 60%, rgba(0,0,0,0.0) 100%)",
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
        {/* Eyebrow — small caps label */}
        {/* <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="font-sans text-[11px] md:text-[13px]  font-extrabold tracking-[0.4em] uppercase text-gold mb-6"
        >
          L'Immobilier d'Excellence au Maroc
        </motion.p> */}

        {/* Main headline — large serif */}
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-5xl md:text-8xl lg:text-[5.5rem] text-white font-light leading-[1.05] tracking-[-0.01em] max-w-6xl relative bottom-10"
        >
          <span className="">Louer ? </span> <br /> <span className="font-extrabold">C'est penser </span>
          
          <span className="italic text-gold"><span className="font-bold">SOFT</span>GROUP.</span>
        </motion.h1>

        <div className="flex flex-col md:flex-row justify-start md:justify-between max-w-5xl w-full">
          {/* Subtitle */}
        {/* <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.95 }}
          className="font-sans text-[15px] md:text-base text-white mt-7 max-w-xl leading-7 tracking-wide"
        >
          Foncière d'exception, Softgroup est une référence de l'immobilier
          locatif au Maroc. Nous concevons, gérons et valorisons un portefeuille
          d'actifs premium logistique, bureaux, résidentiel, commercial et terrains.
        </motion.p> */}

        </div>
      </motion.div>

      {/* ── Stats bar ─────────────────────────────────── */}
      {/*
        Three key stats displayed at the very bottom of the hero,
        separated by thin vertical dividers.
      */}
      {/* <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.4 }}
        className="relative z-10 border-t border-white/12 grid grid-cols-3 w-full md:w-[70%] xl:w-[50%] m-auto bottom-5 bg-white/2 backdrop-blur-3xl rounded-2xl divide-x divide-white/12"
      >
        {STATS.map(({ value, label }) => (
          <div
            key={label}
            className="flex flex-col items-center py-5 px-2 md:px-4 gap-1.5 hover:bg-white/5 transition-colors duration-300 cursor-default"
          >
            <span className="font-serif text-xl md:text-2xl text-white font-light tracking-wide">
              {value}
            </span>
            <span className="font-sans text-[8px] md:text-[10px] tracking-[0.25em] uppercase text-white/45">
              {label}
            </span>
          </div>
        ))}
      </motion.div> */}

      {/* ── Scroll indicator ─────────────────────────── */}
      {/* ── Scroll indicator ──────────────────────────── */}
      {/* <motion.div
        animate={{ y: [0, 7, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-28 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 pointer-events-none"
      >
        <span className="font-sans text-[8px] tracking-[0.35em] uppercase text-white/30">Défiler</span>
        <ChevronDown size={14} strokeWidth={1} className="text-white/30" />
      </motion.div> */}
    </section>
  )
}
