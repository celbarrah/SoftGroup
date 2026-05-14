"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

/**
 * Testimonials — Carousel premium avec logos entreprises — Light Theme
 */

const TESTIMONIALS = [
  {
    company: "GEODIS",
    domain:  "geodis.com",
    role:    "Partenaire Logistique International",
    quote:   "Nous considérons SOFTGROUP comme un partenaire. Nous bénéficions de bâtiments aux normes internationales en plus d'entretenir des relations privilégiées qui ont su nous accompagner sur nos différents développements.",
  },
  {
    company: "Roche",
    domain:  "roche.com",
    role:    "Implantation Résidentielle & Bureaux",
    quote:   "J'ai choisi cette résidence pour tous les services qu'elle incluait, les espaces sont confortables et agréables à vivre. De manière générale, on s'y sent très bien.",
  },
  {
    company: "Bolloré",
    domain:  "bollore.com",
    role:    "Partenaire Industriel — +10 ans",
    quote:   "C'est un partenariat qui dure depuis plus de 10 ans. On cherchait des industriels qui arrivaient à comprendre nos besoins. Nous sommes très satisfaits de cette excellente prestation de service.",
  },
  {
    company: "KIA",
    domain:  "kia.com",
    role:    "Locataire SOFTPARK",
    quote:   "Nous avons choisi les locaux de SOFTPARK pour leur fonctionnalité. La qualité de notre relation avec SOFTGROUP est excellente, la qualité du service est au rendez-vous. Nous sommes ravis du partenariat.",
  },
]

function CompanyLogo({ domain, company }) {
  const [failed, setFailed] = useState(false)
  if (failed) {
    return (
      <span className="font-serif text-xl italic text-neutral-700">
        {company}
      </span>
    )
  }
  return (
    <img
      src={"https://logo.clearbit.com/" + domain}
      alt={company}
      onError={() => setFailed(true)}
      className="h-10 w-auto object-contain grayscale opacity-60"
      loading="lazy"
    />
  )
}

export default function Testimonials() {
  const ref     = useRef(null)
  const inView  = useInView(ref, { once: true, margin: "-8% 0px" })
  const [current,   setCurrent]   = useState(0)
  const [direction, setDirection] = useState(1)
  const pauseRef = useRef(false)

  /* Auto-advance every 2.5 s, pause on manual interaction */
  useEffect(() => {
    const interval = setInterval(() => {
      if (pauseRef.current) return
      setDirection(1)
      setCurrent((p) => (p + 1) % TESTIMONIALS.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  const pauseAutoPlay = () => {
    pauseRef.current = true
    setTimeout(() => { pauseRef.current = false }, 6000)
  }

  const go = (dir) => {
    pauseAutoPlay()
    setDirection(dir)
    setCurrent((p) => (p + dir + TESTIMONIALS.length) % TESTIMONIALS.length)
  }

  const t = TESTIMONIALS[current]

  return (
    <section ref={ref} className="bg-[#F5F3EF] py-30 md:py-36 overflow-hidden" id="confiance"
    style={{WebkitClipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)', clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)' }} >
      <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-20">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16"
        >
          <div>
            <p className="font-sans text-[14px] font-extrabold tracking-[0.55em] uppercase text-gold/70 mb-4">
              Ils Nous Font Confiance
            </p>
            <h2 className="font-serif text-3xl md:text-5xl text-neutral-800 font-light leading-[1.1]">
              La Confiance,
              <br />
              <span className="italic text-gold">Notre Meilleure Référence</span>
            </h2>
          </div>

          {/* Navigation arrows */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => go(-1)}
              aria-label="Précédent"
              className="w-12 h-12 border border-gray-200 flex items-center justify-center text-neutral-400 hover:border-gold hover:text-gold transition-all duration-300"
            >
              <ChevronLeft size={18} strokeWidth={1.5} />
            </button>
            <span className="font-sans text-[10px] text-neutral-400 tracking-widest tabular-nums">
              {String(current + 1).padStart(2, "0")} / {String(TESTIMONIALS.length).padStart(2, "0")}
            </span>
            <button
              onClick={() => go(1)}
              aria-label="Suivant"
              className="w-12 h-12 border border-gray-200 flex items-center justify-center text-neutral-400 hover:border-gold hover:text-gold transition-all duration-300"
            >
              <ChevronRight size={18} strokeWidth={1.5} />
            </button>
          </div>
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              initial={{ opacity: 0, x: direction * 80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -80 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-10 lg:gap-16 items-start bg-white/20 shadow rounded-2xl p-10 md:p-14"
            >
              {/* Left: logo + info */}
              <div className="flex flex-col gap-5">
                <CompanyLogo domain={t.domain} company={t.company} />
                <div className="mt-2">
                  <p className="font-sans text-[10px] font-bold tracking-[0.3em] uppercase text-gold mb-1">
                    {t.company}
                  </p>
                  <p className="font-sans text-[10px] text-neutral-500 tracking-[0.1em] leading-relaxed">
                    {t.role}
                  </p>
                </div>
                <div className="hidden lg:block w-px h-14 bg-gold/25 mt-2" />
              </div>

              {/* Right: quote */}
              <div>
                <span className="font-serif text-7xl text-gold/20 leading-none select-none block -mb-4">
                  &ldquo;
                </span>
                <p className="font-serif text-xl md:text-2xl lg:text-[1.7rem] text-neutral-700 font-light leading-[1.7] italic mb-8">
                  {t.quote}
                </p>
                <div className="w-12 h-px bg-gold/40" />
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Progress dots */}
          <div className="flex items-center justify-center gap-2.5 mt-8">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => { pauseAutoPlay(); setDirection(i > current ? 1 : -1); setCurrent(i) }}
                aria-label={"Témoignage " + (i + 1)}
                className={"transition-all duration-300 rounded-full " + (
                  i === current
                    ? "w-8 h-1 bg-gold"
                    : "w-1.5 h-1.5 bg-neutral-300 hover:bg-gold/40"
                )}
              />
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}
