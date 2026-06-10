"use client"
import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Link from "next/link"

/* ─── Ticker pills ──────────────────────────────────────────────── */

const PILLS = [
  {
    label: "Prix fixé à la signature",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12" />
      </svg>
    ),
  },
  {
    label: "Livraison en moins de 12 mois",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    label: "Délais contractuels garantis",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="9" y1="13" x2="15" y2="13" />
        <line x1="9" y1="17" x2="15" y2="17" />
      </svg>
    ),
  },
  {
    label: "Garantie décennale",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    label: "Foncier déjà sécurisé",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
  },
]

const TICKER_ITEMS = [...PILLS, ...PILLS]

const IMAGE_URL = "https://res.cloudinary.com/dofyrwzop/image/upload/q_auto/f_auto/v1781089918/BTS_IA_ACCEUIL_f57php.png"

/* ─── Component ─────────────────────────────────────────────────── */

export default function BuildToSuitTeaser() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-10%" })

  return (
    <section
      ref={ref}
      className="bg-off-white py-10 px-[clamp(20px,1vw,80px)]"
    >
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="mx-auto max-w-[1400px] rounded-[20px] overflow-hidden
                   shadow-[0_32px_96px_rgba(8,9,10,.14),0_0_0_1px_rgba(196,165,90,.18)]"
      >

        {/* ── Photo Panel ─────────────────────────────────────────── */}
        <div className="group relative h-[clamp(300px,36vw,460px)] overflow-hidden">

          {/* Background Image Setup */}
          {/* Outer div handles the "reveal" zoom (1.15 to 1.0) using framer-motion */}
          <motion.div
            initial={{ scale: 1.15 }}
            animate={inView ? { scale: 1 } : {}}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 w-full h-full"
          >
            {/* Inner div handles the "hover" zoom using pure Tailwind */}
            {/* The scale on hover is relative to the *already scaled down* parent */}
            <div
              className="w-full h-full bg-cover bg-center
                         transition-transform duration-[8000ms] ease-out
                         group-hover:scale-110"
              style={{ backgroundImage: `url('${IMAGE_URL}')` }}
            />
          </motion.div>

          {/* Gradient overlay — heavy left for readability */}
          <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(8,9,10,.88)_0%,rgba(8,9,10,.58)_44%,rgba(8,9,10,.12)_100%)] pointer-events-none" />

          {/* Gold top accent */}
          <div className="absolute top-0 left-0 w-[42%] h-0.5 bg-gradient-to-r from-gold to-transparent pointer-events-none" />
          <div className="absolute top-0 left-0 w-1.5 h-1.5 rounded-br bg-gold pointer-events-none" />

          {/* Text — anchored to bottom */}
          <div className="absolute inset-0 flex flex-col justify-end p-[clamp(28px,4vw,52px)] pointer-events-none">

            {/* Eyebrow */}
            <div className="flex items-center gap-2.5 mb-4">
              <span className="font-sans text-[15px] relative top-2 md:top-0 font-semibold tracking-[0.18em] uppercase text-gold">
                Build-to-Suit
              </span>
            </div>

            {/* Headline — three lines */}
            <h2 className="font-serif text-[clamp(30px,4vw,56px)] leading-[1.1] tracking-[-0.01em] max-w-[620px] mb-5">
              <span className="text-white font-light">Votre bâtiment.</span>
              <br />
              <em className="italic text-gold font-light">Conçu sur mesure.</em>
              <br />
              <span className="text-white font-semibold">Livré clé en main.</span>
            </h2>

            {/* Description */}
            <p className="font-sans text-[clamp(13px,1vw,15px)] leading-[1.78]
                          text-white/65 max-w-[480px]">
              Ne cherchez plus un espace qui s'adapte à votre activité : SOFTGROUP conçoit et réalise pour vous une infrastructure pensée pour elle, alignée sur vos flux et vos objectifs de performance durable.
            </p>

          </div>
        </div>

        {/* ── Bottom Strip ────────────────────────────────────────── */}
        <div className="relative bg-cream border-t border-gold/[0.14] overflow-hidden">

          {/* Ambient glow */}
          <div className="absolute inset-0 pointer-events-none
                          bg-[linear-gradient(90deg,rgba(196,165,90,.07)_0%,transparent_42%,rgba(196,165,90,.03)_100%)]" />

          <div className="relative z-10 flex items-center h-16">

            {/* CTA button */}
            <div className="shrink-0 h-full flex items-center
                            px-[clamp(16px,2.5vw,32px)] border-r border-gold/[0.14]">
              <Link href="/build-to-suit">
                <button className="bg-gold hover:bg-gold-light text-noir
                                   font-sans text-[14px] font-semibold tracking-[0.06em]
                                   px-6 py-2 rounded-full whitespace-nowrap
                                   transition-all duration-200
                                   hover:shadow-[0_4px_24px_rgba(196,165,90,.35)]">
                  En savoir plus →
                </button>
              </Link>
            </div>

            {/* Scrolling ticker */}
            <div className="relative flex-1 h-full flex items-center overflow-hidden">

              {/* Fade masks */}
              <div className="absolute left-0 inset-y-0 w-12 z-10 pointer-events-none
                              bg-gradient-to-r from-cream to-transparent" />
              <div className="absolute right-0 inset-y-0 w-12 z-10 pointer-events-none
                              bg-gradient-to-l from-cream to-transparent" />

              {/* Ticker */}
              <div className="bts-ticker flex items-center">
                {TICKER_ITEMS.map((pill, i) => (
                  <div
                    key={i}
                    className="inline-flex items-center gap-2 px-6 whitespace-nowrap
                               shrink-0 border-r border-gold/10"
                  >
                    <span className="flex items-center shrink-0 text-gold">
                      {pill.icon}
                    </span>
                    <span className="font-sans text-[14px] font-medium tracking-[0.04em] text-neutral-900/70">
                      {pill.label}
                    </span>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>

      </motion.div>
    </section>
  )
}