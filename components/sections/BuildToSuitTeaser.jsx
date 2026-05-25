"use client"
import { useRef, useEffect } from "react"
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion"
import Link from "next/link"

/* ─── Data ─────────────────────────────────────────────────────── */

const PILLS = [
  {
    label: "Prix fixé à la signature",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12" />
      </svg>
    ),
  },
  {
    label: "Livraison en moins de 12 mois",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    label: "Délais contractuels garantis",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
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
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    label: "Foncier déjà sécurisé",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
  },
]

const KPI_ITEMS = [
  { to: 12,  prefix: "≤ ", suffix: " mois", label: "de livraison" },
  { to: 100, prefix: "",   suffix: " %",    label: "clé en main"  },
  { to: 10,  prefix: "",   suffix: " ans",  label: "de garantie"  },
]

/* ─── CountUp ───────────────────────────────────────────────────── */

function CountUp({ to, prefix = "", suffix = "", inView }) {
  const count   = useMotionValue(0)
  const display = useTransform(count, (v) => `${prefix}${Math.round(v)}${suffix}`)

  useEffect(() => {
    if (!inView) return
    const controls = animate(count, to, { duration: 1.8, ease: "easeOut" })
    return controls.stop
  }, [inView, to, count])

  return <motion.span>{display}</motion.span>
}

const TICKER_ITEMS = [...PILLS, ...PILLS]

const IMAGE_URL =
  "https://res.cloudinary.com/dofyrwzop/image/upload/q_auto/f_auto/v1778667663/Gemini_Generated_Image_tmluwxtmluwxtmlu_gwtymr.png"

/* ─── Component ─────────────────────────────────────────────────── */

export default function BuildToSuitTeaser() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-10%" })

  return (
    <section
      ref={ref}
      className="bg-off-white py-10 px-[clamp(20px,5vw,80px)]"
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

          {/* Background image — zoom on hover via group */}
          <div
            className="absolute -inset-[6px] bg-cover bg-center
                       transition-transform duration-[10000ms] ease-linear
                       group-hover:scale-[1.04]"
            style={{ backgroundImage: `url('${IMAGE_URL}')` }}
          />

          {/* Dark gradient overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(8,9,10,.93)_0%,rgba(8,9,10,.62)_44%,rgba(8,9,10,.14)_100%)]" />

          {/* Gold top accent line */}
          <div className="absolute top-0 left-0 w-[42%] h-0.5 bg-gradient-to-r from-gold to-transparent" />

          {/* Gold corner dot */}
          <div className="absolute top-0 left-0 w-1.5 h-1.5 rounded-br bg-gold" />

          {/* Text content — anchored to bottom */}
          <div className="absolute inset-0 flex flex-col justify-end p-[clamp(28px,4vw,52px)]">

            {/* Eyebrow */}
            <div className="flex items-center gap-2.5 mb-3.5">
              <span className="block w-7 h-px bg-gold shrink-0" />
              <span className="font-sans text-[11px] font-semibold tracking-[0.18em] uppercase text-gold">
                Build-to-Suit
              </span>
            </div>

            {/* Headline */}
            <h2 className="font-serif text-[clamp(32px,4.5vw,58px)] font-semibold leading-[1.08]
                           tracking-[-0.01em] text-cream max-w-[620px] mb-[18px]">
              Votre bâtiment,{" "}
              <em className="italic text-gold">conçu pour vous.</em>
            </h2>

            {/* Description */}
            <p className="font-sans text-[clamp(14px,1.1vw,16px)] leading-[1.75]
                          text-cream/70 max-w-[520px] mb-8">
              Soft Groupe conçoit et livre des actifs industriels, logistiques
              et tertiaires sur mesure — clé en main, dans les délais, au prix convenu.
            </p>

            {/* KPI row */}
            <div className="flex flex-wrap gap-[clamp(20px,3vw,40px)]">
              {KPI_ITEMS.map((kpi) => (
                <div key={kpi.label}>
                  <div className="font-serif text-[clamp(22px,2.8vw,36px)] font-bold text-gold leading-none mb-1">
                    <CountUp to={kpi.to} prefix={kpi.prefix} suffix={kpi.suffix} inView={inView} />
                  </div>
                  <div className="font-sans text-[11px] tracking-[0.1em] uppercase text-cream/45">
                    {kpi.label}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* ── Bottom Strip ────────────────────────────────────────── */}
        <div className="relative bg-noir border-t border-gold/[0.14] overflow-hidden">

          {/* Ambient gold glow */}
          <div className="absolute inset-0 pointer-events-none
                          bg-[linear-gradient(90deg,rgba(196,165,90,.08)_0%,transparent_42%,rgba(196,165,90,.04)_100%)]" />

          <div className="relative z-10 flex items-center h-16">

            {/* CTA button */}
            <div className="shrink-0 h-full flex items-center
                            px-[clamp(16px,2.5vw,32px)] border-r border-gold/[0.14]">
              <Link href="/build-to-suit">
                <button className="bg-gold hover:bg-gold-light text-noir
                                   font-sans text-[12px] font-semibold tracking-[0.08em] uppercase
                                   px-5 py-2 rounded-md whitespace-nowrap
                                   transition-all duration-200
                                   hover:shadow-[0_4px_24px_rgba(196,165,90,.35)]">
                  Déposer un projet →
                </button>
              </Link>
            </div>

            {/* Scrolling ticker */}
            <div className="relative flex-1 h-full flex items-center overflow-hidden">

              {/* Fade masks */}
              <div className="absolute left-0 inset-y-0 w-12 z-10 pointer-events-none
                              bg-gradient-to-r from-noir to-transparent" />
              <div className="absolute right-0 inset-y-0 w-12 z-10 pointer-events-none
                              bg-gradient-to-l from-noir to-transparent" />

              {/* Ticker — animation class defined in globals.css */}
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
                    <span className="font-sans text-[12px] font-medium tracking-[0.04em] text-cream/70">
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
