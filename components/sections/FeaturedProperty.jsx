"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import Image from "next/image"

/**
 * FeaturedProperty — Full-bleed property showcase
 * ─────────────────────────────────────────────────────────
 * Features:
 *  - Full-width tall section (75vh)
 *  - Parallax background image: moves at a slower speed than the page
 *  - Gradient overlay fades to dark at the bottom
 *  - Property info card slides in from below on scroll enter
 *  - "SOLD" or "Available" badge (update as needed)
 *
 * TO REPLACE PLACEHOLDER:
 *  Swap the inner placeholder div with:
 *  import Image from "next/image"
 *  <Image src="/images/la-vue.jpg" alt="La Vue, Bel Air" fill
 *         className="object-cover" priority />
 */
export default function FeaturedProperty() {
  const sectionRef = useRef(null)
  const inView = useInView(sectionRef, { once: true, margin: "-15% 0px" })

  /* ── Parallax: image moves at 16% of scroll speed ─── */
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })
  const imgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"])

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-[85vh] min-h-[520px] overflow-hidden"
      id="properties"
    >
      {/* ── Parallax background image ─────────────────── */}
      {/*
        The wrapper is slightly oversized (-10% on all sides) to avoid
        seeing the edges as the image shifts during parallax.
      */}
      <motion.div
        style={{ y: imgY }}
        className="absolute inset-[-10%] w-[120%] h-[120%]"
      >
        
        <Image src="/img/pic1.avif" alt="La Vue, Bel Air" fill className="object-cover" />
      
      </motion.div>

      {/* ── Gradient overlay ──────────────────────────── */}
      {/* Darkens the bottom so text is always legible */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent pointer-events-none" />

      {/* ── Property info — bottom-left card ──────────── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="absolute bottom-10 left-8 md:left-14 z-10"
      >
        {/* Badge */}
        <p className="font-sans text-[9px] tracking-[0.3em] uppercase text-gold mb-3">
          Featured Listing
        </p>

        {/* Property name */}
        <h3 className="font-serif text-3xl md:text-[2.6rem] text-white font-light leading-tight">
          La Vue, Bel Air
        </h3>

        {/* View property CTA */}
        <a
          href="#properties"
          className="inline-block font-sans text-[10px] tracking-[0.25em] uppercase text-white border border-white/35 px-7 py-3 hover:bg-white hover:text-dark transition-all duration-300"
        >
          View Property
        </a>
      </motion.div>

    </section>
  )
}
