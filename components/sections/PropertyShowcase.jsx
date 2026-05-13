"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import Image from "next/image"

/**
 * PropertyShowcase — Bannière résidentielle pleine largeur
 * ─────────────────────────────────────────────────────────
 * Section héro secondaire inspirée de softgroupimmobilier.com.
 * Photo propriété plein écran + texte overlay gauche + CTA.
 */

export default function PropertyShowcase() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-5%" })

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"])

  return (
    <section
      ref={ref}
      className="relative w-full h-[90vh] min-h-[540px] overflow-hidden flex items-end"
    >
      {/* Background image with parallax */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 w-full h-[110%] -top-[5%]"
      >
        <Image
          src="https://res.cloudinary.com/dofyrwzop/image/upload/q_auto/f_auto/v1778599233/WhatsApp_Image_2026-05-12_at_09.04.58_3_moneep.jpg"
          alt="Résidence de prestige Softgroup"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </motion.div>

      {/* Dark gradient — heavier on left where text lives */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 w-full px-8 md:px-16 lg:px-24 pb-16 pt-6 md:pb-24 max-w-7xl">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-sans text-[12px] font-bold tracking-[0.5em] uppercase text-gold mb-5"
        >
          Groupe National Immobilier au Maroc
        </motion.p>

        {/* Main headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-4xl md:text-6xl lg:text-7xl text-white font-light leading-[1.05] max-w-2xl mb-6"
        >
          L'excellence
          <br />
          <span className="italic text-gold">résidentielle,</span>
          <br />
          réinventée.
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.38 }}
          className="font-sans text-[14px] text-white/65 max-w-md leading-[1.85] mb-10"
        >
          Sérieux, confiance, respect et excellence — la philosophie
          d&apos;un grand groupe national au service de votre bien-être
          résidentiel et professionnel.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.52 }}
          className="flex flex-wrap gap-4"
        >
          <a
            href="#portefeuille"
            className="inline-block font-sans text-[10px] tracking-[0.3em] uppercase text-[#0A0A0A] bg-gold px-9 py-3.5 hover:bg-gold-light transition-all duration-300"
          >
            Voir nos biens
          </a>
          <a
            href="#contact"
            className="inline-block font-sans text-[10px] tracking-[0.3em] uppercase text-white border border-white/35 px-9 py-3.5 hover:bg-white/10 transition-all duration-300"
          >
            Contact
          </a>
        </motion.div>
      </div>

      {/* Thin gold bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-gold/40 via-gold/20 to-transparent" />
    </section>
  )
}
