"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useInView } from "framer-motion"

const STATS = [
  { value: "1918",   label: "Année de fondation",   sub: "Depuis Haj M'hamed Kabbaj"          },
  { value: "+100",   label: "Ans d'expertise",       sub: "4 générations de la famille Kabbaj"  },
  { value: "3",      label: "Cœurs de métier",       sub: "Textile · Immobilier · Distribution" },
  { value: "9",      label: "Filiales",              sub: "Présence multi-sectorielle"           },
  { value: "+4 500", label: "Collaborateurs",        sub: "Un groupe humain et engagé"           },
]

/* ─────────────────────────────────────────────────────────────
   Animated counter hook
   Parses "+4 500", "1918", "+100", "3", "9"
   Counts from 0 → target with ease-out cubic over `duration` ms
   Re-applies the original formatting (prefix "+", space separator)
───────────────────────────────────────────────────────────── */
function useCountUp(targetStr, isActive, duration = 1800) {
  const [display, setDisplay] = useState("0")
  const rafRef   = useRef(null)
  const startRef = useRef(null)

  useEffect(() => {
    if (!isActive) return

    // Parse
    const hasPlus     = targetStr.startsWith("+")
    const stripped    = targetStr.replace(/[+\s]/g, "")
    const target      = parseInt(stripped, 10)
    const hasSpace    = targetStr.replace("+", "").includes(" ")  // thousands separator

    if (isNaN(target)) { setDisplay(targetStr); return }

    function format(val) {
      let str
      if (hasSpace && val >= 1000) {
        // "4 500" style — space as thousands separator
        const thousands  = Math.floor(val / 1000)
        const remainder  = String(val % 1000).padStart(3, "0")
        str = `${thousands} ${remainder}`
      } else {
        str = String(val)
      }
      return hasPlus ? `+${str}` : str
    }

    function tick(now) {
      if (!startRef.current) startRef.current = now
      const elapsed  = now - startRef.current
      const progress = Math.min(elapsed / duration, 1)
      // Ease-out cubic
      const eased    = 1 - Math.pow(1 - progress, 3)
      const val      = Math.round(eased * target)

      setDisplay(format(val))

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick)
      } else {
        setDisplay(targetStr)   // snap to exact original string at the end
      }
    }

    startRef.current = null
    rafRef.current   = requestAnimationFrame(tick)

    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current) }
  }, [isActive, targetStr, duration])

  return display
}

/* ── Individual stat cell ───────────────────────────────────── */
function StatCell({ stat, inView, index }) {
  const count = useCountUp(stat.value, inView, 1800)

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.12 }}
      className="text-center lg:px-8 group"
    >
      {/* Animated number */}
      <p className="font-serif text-5xl md:text-6xl text-neutral-800 font-light leading-none mb-3 group-hover:text-gold transition-colors duration-500 tabular-nums">
        {count}
      </p>

      {/* Gold rule */}
      <div className="w-6 h-px bg-gold/40 mx-auto my-4" />

      {/* Label */}
      <p className="font-sans text-[13px] tracking-[0.2em] uppercase text-neutral-600 mb-2">
        {stat.label}
      </p>

      {/* Sub */}
      <p className="font-sans text-[15px] text-neutral-400 leading-relaxed">
        {stat.sub}
      </p>
    </motion.div>
  )
}

/* ── Section ────────────────────────────────────────────────── */
export default function StatsGroupe() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-8%" })

  return (
    <section ref={ref} className="bg-white py-10 overflow-hidden border-b border-gray-100">
      <div className="max-w-400 mx-auto px-8 md:px-12 lg:px-25">

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-sans text-[14px] font-bold tracking-[0.55em] uppercase text-gold/70 mb-14 text-center"
        >
          Softgroup en chiffres
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 lg:gap-0 lg:divide-x divide-gray-200">
          {STATS.map((stat, i) => (
            <StatCell key={stat.label} stat={stat} inView={inView} index={i} />
          ))}
        </div>

      </div>
    </section>
  )
}
