"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion"


/**
 * IntroImpact — Stats counters + brand intro paragraph
 * ─────────────────────────────────────────────────────────
 * Quatre compteurs animés qui s'incrémentent à l'entrée viewport.
 * Fond sombre — Dark Premium.
 */

/* ── Animated counter hook ────────────────────────────── */
function useCountUp(target, duration = 2000, inView) {
  const [value, setValue] = useState(0)
  useEffect(() => {
    if (!inView) return
    let start = null
    const step = (ts) => {
      if (!start) start = ts
      const progress = Math.min((ts - start) / duration, 1)
      const ease = 1 - Math.pow(1 - progress, 3)
      setValue(Math.floor(ease * target))
      if (progress < 1) requestAnimationFrame(step)
      else setValue(target)
    }
    requestAnimationFrame(step)
  }, [target, duration, inView])
  return value
}

/* ── Stat data ────────────────────────────────────────── */
const STATS = [
  { prefix: "+", value: 35, suffix: "",  label: "Années d'expertise"      },
  { prefix: "",  value: 5,  suffix: "",  label: "Segments d'activités"    },
  { prefix: "",  value: 4,  suffix: "",  label: "Villes stratégiques"     },
  { prefix: "",  value: 98, suffix: "%", label: "Taux d'occupation"       },
]

/* ── Individual animated counter ─────────────────────── */
function StatCounter({ stat, delay = 0 }) {
  const ref = useRef(null);
  // Check if element is in view (once: true prevents it from re-counting if you scroll back up)
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  // Motion value starts at 0
  const count = useMotionValue(0);
  
  // Round the decimal values to integers for display
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, stat.value, {
        duration: 1.8,
        delay: delay,
        ease: [0.22, 1, 0.36, 1],
      });
      return controls.stop;
    }
  }, [isInView, stat.value, delay, count]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className="text-center md:text-left"
    >
      {/* Number */}
      <p className="font-serif text-5xl md:text-6xl text-gold font-light leading-none mb-3">
        {stat.prefix}
        <motion.span>{rounded}</motion.span>
        {stat.suffix}
      </p>

      {/* Divider */}
      <div className="w-8 h-px bg-gold/40 mb-3 mx-auto md:mx-0" />

      {/* Label */}
      <p className="font-sans text-xs text-muted tracking-[0.15em] uppercase">
        {stat.label}
      </p>
    </motion.div>
  );
}

export default function IntroImpact() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-8% 0px" })

  return (
    <section ref={ref} className="bg-dark py-24 md:py-32 px-8 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">

        {/* ── Intro paragraph ─────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mb-20 md:mb-24"
        >
          <p className="font-sans text-[9px] tracking-[0.4em] uppercase text-gold mb-5">
            Notre Savoir-Faire
          </p>
          <p className="font-serif text-2xl md:text-3xl text-cream font-light leading-[1.5] italic mb-6">
            &ldquo;Fort d'une expertise multi-métiers, SOFTGROUP conçoit des
            projets de référence où l'innovation et la qualité signent
            chaque réalisation.&rdquo;
          </p>
          <p className="font-sans text-sm text-muted leading-[1.85] max-w-2xl">
            Aujourd'hui, notre savoir-faire reconnu nous permet de piloter
            l'ensemble de la chaîne de valeur immobilière  de la conception
            et la construction à la gestion, l'exploitation et la valorisation
            de nos actifs.
          </p>
        </motion.div>

        {/* ── Stats counters grid ──────────────────────── */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 border-t border-white/8 pt-14">
          {STATS.map((stat, i) => (
            <StatCounter
              key={stat.label}
              stat={stat}
              inView={inView}
              delay={0.1 + i * 0.12}
            />
          ))}
        </div>

      </div>
    </section>
  )
}
