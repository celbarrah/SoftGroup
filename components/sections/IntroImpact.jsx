"use client"

import { useRef, useEffect } from "react"
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion"
import Image from "next/image"

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

        {/* Left: architectural photo */}
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
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-white/20 hidden lg:block" />
        </motion.div>

        {/* Right: stats + text */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1.0, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col justify-center px-10 md:px-14 lg:px-16 xl:px-20 py-16 lg:py-6"
        >
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="font-sans text-[16px] font-extrabold tracking-[0.55em] uppercase text-gold/70 mb-8"
          >
            Notre Savoir-Faire
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-sans text-[17px] md:text-[18px] text-neutral-600 leading-[1.85] mb-12 max-w-xl"
          >
            Foncière d&apos;exception, Softgroup s&apos;impose comme une référence
            de l&apos;immobilier locatif au Maroc. Forts d&apos;une expertise intégrée,
            nous concevons, gérons et valorisons un portefeuille d&apos;actifs
            premium, où l&apos;innovation et l&apos;exigence de qualité signent
            chaque réalisation.
          </motion.p>

          {/* Stats grid 2x2 */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-10">
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.2 + i * 0.1 }}
                className="group"
              >
                <AnimatedCounter
                  value={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  delay={0.3 + i * 0.1}
                />
                <div className="w-7 h-px bg-gold/50 my-3" />
                <p className="font-sans text-[13px] md:text-[14px] tracking-[0.15em] uppercase text-neutral-600 mb-1">
                  {stat.label}
                </p>
                <p className="font-sans text-[12px] text-neutral-400 leading-relaxed">
                  {stat.sub}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Gold rule + CTA */}
          <div className="w-10 h-px bg-gold/40 mt-12 mb-8" />

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.55 }}
          >
            <a
              href="/le-groupe"
              className="inline-flex items-center gap-3 font-sans text-[11px] tracking-[0.28em] uppercase text-gold border border-gold/30 px-8 py-3.5 hover:bg-gold hover:text-white transition-all duration-300 group"
            >
              Découvrir le Groupe
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none" className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <path d="M1 12L12 1M12 1H4M12 1V9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </motion.div>

        </motion.div>
      </div>
    </section>
  )
}
