"use client"

import { useRef } from "react"
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

        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src="https://res.cloudinary.com/dofyrwzop/video/upload/q_auto/f_auto/v1778495364/amplifiles-video-20260511T094655_s4xuic.mp4" type="video/mp4" />
        </video>
     
      {/* ── Dark overlay — opacity controlled by scroll ── */}
      <motion.div
        className="absolute inset-0 bg-black pointer-events-none"
        style={{ opacity: overlayOp }}
      />

      {/* ── Decorative thin gold divider line ────────────
          Animates in from the left after the page loads.
      ── */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 1.6, delay: 1.4, ease: [0.22, 1, 0.36, 1] }}
        className="absolute left-12 right-12 h-px bg-gold/25 origin-left pointer-events-none"
        style={{ top: "calc(50% + 90px)" }}
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
          className="font-serif text-4xl md:text-8xl lg:text-[5.5rem] text-white font-light leading-[1.05] tracking-[-0.01em] max-w-4xl"
        >
          Louer ? C'est penser
          <br />
          <span className="italic text-gold">SOFTGROUP.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.95 }}
          className="font-sans text-[16px] md:text-[22px] md:text-base text-white mt-7 max-w-2xl leading-7 tracking-wide"
        >
          Foncière d'exception, Softgroup est une référence de l'immobilier
          locatif au Maroc. Nous concevons, gérons et valorisons un portefeuille
          d'actifs premium logistique, bureaux, résidentiel, commercial et terrains.
        </motion.p>

        {/* Dual CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.15 }}
          className="mt-10 flex flex-wrap gap-4 justify-start md:justify-center"
        >
          <a
            href="#portefeuille"
            className="inline-block font-sans text-[10px] tracking-[0.3em] uppercase text-white bg-gold/90 px-9 py-3.5 hover:bg-gold transition-all duration-300"
          >
            Découvrir nos actifs
          </a>
          <a
            href="#contact"
            className="inline-block font-sans text-[10px] tracking-[0.3em] uppercase text-white border border-white/35 px-9 py-3.5 hover:bg-white hover:text-dark transition-all duration-300"
          >
            Nous contacter
          </a>
        </motion.div>
      </motion.div>

      {/* ── Stats bar ─────────────────────────────────── */}
      {/*
        Three key stats displayed at the very bottom of the hero,
        separated by thin vertical dividers.
      */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.4 }}
        className="relative z-10 border-t border-white/12 grid grid-cols-3 w-full md:w-[70%] xl:w-[50%] m-auto bottom-5 bg-white/2 backdrop-blur-3xl rounded-2xl divide-x divide-white/12"
      >
        {STATS.map(({ value, label }) => (
          <div
            key={label}
            className="flex flex-col items-center py-5 px-4 gap-1.5 hover:bg-white/5 transition-colors duration-300 cursor-default"
          >
            <span className="font-serif text-xl md:text-2xl text-white font-light tracking-wide">
              {value}
            </span>
            <span className="font-sans text-[9px] md:text-[10px] tracking-[0.25em] uppercase text-white/45">
              {label}
            </span>
          </div>
        ))}
      </motion.div>

      {/* ── Scroll indicator ─────────────────────────── */}
      {/* ── Scroll indicator ──────────────────────────── */}
      <motion.div
        animate={{ y: [0, 7, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-28 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 pointer-events-none"
      >
        <span className="font-sans text-[8px] tracking-[0.35em] uppercase text-white/30">Défiler</span>
        <ChevronDown size={14} strokeWidth={1} className="text-white/30" />
      </motion.div>
    </section>
  )
}
