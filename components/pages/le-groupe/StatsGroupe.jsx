"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useInView } from "framer-motion"

const STATS = [
  { value: "1918",   label: "Année de fondation",   sub: "Depuis Haj M'hamed Harouchi"         },
  { value: "+100",   label: "Ans d'expertise",       sub: "4 générations"                        },
  { value: "3",      label: "Coeurs de métier",      sub: "Textile - Immobilier - Distribution" },
  { value: "9",      label: "Filiales",              sub: "Présence multi-sectorielle"           },
  { value: "+4 500", label: "Collaborateurs",        sub: "Un groupe humain et engagé"           },
]

function useCountUp(targetStr, isActive, duration = 1800) {
  const [display, setDisplay] = useState("0")
  const rafRef   = useRef(null)
  const startRef = useRef(null)

  useEffect(() => {
    if (!isActive) return
    const hasPlus  = targetStr.startsWith("+")
    const stripped = targetStr.replace(/[+\s]/g, "")
    const target   = parseInt(stripped, 10)
    const hasSpace = targetStr.replace("+", "").includes(" ")

    if (isNaN(target)) { setDisplay(targetStr); return }

    function format(val) {
      let str
      if (hasSpace && val >= 1000) {
        const thousands = Math.floor(val / 1000)
        const remainder = String(val % 1000).padStart(3, "0")
        str = thousands + " " + remainder
      } else {
        str = String(val)
      }
      return hasPlus ? "+" + str : str
    }

    function tick(now) {
      if (!startRef.current) startRef.current = now
      const elapsed  = now - startRef.current
      const progress = Math.min(elapsed / duration, 1)
      const eased    = 1 - Math.pow(1 - progress, 3)
      const val      = Math.round(eased * target)
      setDisplay(format(val))
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick)
      } else {
        setDisplay(targetStr)
      }
    }

    startRef.current = null
    rafRef.current   = requestAnimationFrame(tick)
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current) }
  }, [isActive, targetStr, duration])

  return display
}

function StatCell({ stat, inView, index }) {
  const count = useCountUp(stat.value, inView, 1800)

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.12 }}
      className="text-center lg:px-8 group"
    >
      <p className="font-serif text-3xl md:text-4xl text-neutral-800 font-light leading-none mb-3 group-hover:text-gold transition-colors duration-500 tabular-nums whitespace-nowrap">
        {count}
      </p>
      <div className="w-6 h-px bg-gold/40 mx-auto my-1" />
      <p className="font-sans text-[13px] tracking-[0.2em] uppercase text-neutral-600">
        {stat.label}
      </p>
      <p className="font-sans text-[15px] text-neutral-900 leading-relaxed">
        {stat.sub}
      </p>
    </motion.div>
  )
}

export default function StatsGroupe() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-8%" })

  return (
      <section ref={ref} className="bg-white backdrop-blur-2xl  py-5 overflow-hidden border-b border-gray-100">
        <div className="max-w-400 mx-auto px-8 md:px-12 lg:px-25">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="font-sans text-[13px] font-bold tracking-[0.55em] uppercase text-neutral-900/70 mb-5 text-center"
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
