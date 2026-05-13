"use client"

import { useRef, useEffect } from "react"
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion"
import Image from "next/image"

/**
 * IntroImpact — Notre Savoir-Faire
 * ─────────────────────────────────────────────────────────
 * Photo architectural gauche + chiffres clés droite.
 * Fond blanc, chiffres grands et élégants (modèle transparent).
 * Inspiré design premium white real estate.
 */

const STATS = [
  { prefix: "+", value: 35, suffix: "",  label: "Années d'expertise",    sub: "Depuis 1989"            },
  { prefix: "",  value: 5,  suffix: "",  label: "Segments d'activités",  sub: "Logistique · Bureaux · Résidentiel · Retail · Terrains" },
  { prefix: "",  value: 4,  suffix: "",  label: "Villes stratégiques",   sub: "Casa · Kénitra · Tanger · Agadir" },
  { prefix: "",  value: 98, suffix: "%", label: "Taux d'occupation",     sub: "Gestion proactive & intégrée"     },
]

function AnimatedCounter({ value, prefix, suffix, delay }) {
  const ref     = useRef(null)
  const inView  = useInView(ref, { once: true, margin: "-80px" })
  const count   = useMotionValue(0)
  const rounded = useTransform(count, (v) => Math.round(v))

  useEffect(() => {
    if (inView) {
      const c = animate(count, value, { duration: 2.2, delay, ease: [0.22, 1, 0.36, 1] })
      return c.stop
    }
  }, [inView, value, delay, count])

  return (
    <span ref={ref} className="font-serif text-5xl md:text-6xl text-neutral-800 font-light leading-none tracking-[-0.02em]">
      {prefix}
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  )
}

export default function IntroImpact() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-8%" })

  return (
    <section ref={ref} className="bg-white overflow-hidden" id="savoir-faire">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">

        {/* ── Left: architectural photo ──────────────────── */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="relative h-[360px] lg:h-auto overflow-hidden"
        >
          <Image
            src="https://res.cloudinary.com/dofyrwzop/image/upload/q_auto/f_auto/v1778667663/Gemini_Generated_Image_tmluwxtmluwxtmlu_gwtymr.png"
            alt="SOFTGROUP — Excellence immobilière au Maroc"
            fill
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          {/* Subtle right gradient to blend into white right column */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-white/20 hidden lg:block" />

          {/* Floating badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-sm border border-gray-100 shadow-lg px-6 py-4"
          >
            <p className="font-sans text-[8px] tracking-[0.4em] uppercase text-gold mb-1">Notre Engagement</p>
            <p className="font-serif text-base text-neutral-800 font-light">+35 ans d&apos;expertise</p>
          </motion.div>
        </motion.div>

        {/* ── Right: stats + text ────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1.0, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col justify-center px-10 md:px-14 lg:px-16 xl:px-20 py-16 lg:py-6"
        >
          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="font-sans text-[16px] font-extrabold tracking-[0.55em] uppercase text-gold/70 mb-8"
          >
            Notre Savoir-Faire
          </motion.p>

          {/* Intro text */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-xl md:text-2xl text-neutral-700 font-light leading-[1.6] italic mb-12 max-w-xl"
          >
            &ldquo;Fort d&apos;une expertise multi-métiers, SOFTGROUP conçoit
            des projets de référence où l&apos;innovation et la qualité
            signent chaque réalisation.&rdquo;
          </motion.p>

          {/* Stats grid — 2×2 */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-10">
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.2 + i * 0.1 }}
                className="group"
              >
                {/* Large number — "transparent model" style */}
                <AnimatedCounter
                  value={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  delay={0.3 + i * 0.1}
                />
                {/* Gold underline */}
                <div className="w-7 h-px bg-gold/50 my-3" />
                {/* Label */}
                <p className="font-sans text-[11px] md:text-[14px] tracking-[0.2em] uppercase text-neutral-700 mb-1">
                  {stat.label}
                </p>
                <p className="font-sans text-[11px] md:text-[14px] text-neutral-400 leading-relaxed">
                  {stat.sub}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Bottom gold rule */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 1.4, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mt-12 h-px bg-gradient-to-r from-gold/30 via-gold/10 to-transparent origin-left"
          />
        </motion.div>

      </div>
    </section>
  )
}
