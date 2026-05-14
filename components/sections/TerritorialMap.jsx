"use client"

import { useRef, useState, useEffect } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"

/**
 * TerritorialMap — Carte interactive du Maroc
 * SVG réel du Maroc avec marqueurs animés.
 * Les villes défilent automatiquement toutes les 2 secondes.
 * Cliquer sur un onglet ou un marqueur pause l'auto-cycle 6s puis reprend.
 */

const CITIES = [
  {
    id:       "casablanca",
    name:     "Casablanca",
    subtitle: "Le Hub Multi-Actifs du Royaume",
    segments: ["Bureaux", "Résidentiel", "Logistique", "Retail"],
    access:   ["Port < 20 min", "Aéroport CMN 25 min"],
    zones:    ["Bd d'Anfa", "Aïn Diab", "CFC", "Rachidi", "Aïn Sebaâ"],
    x: 300, y: 98, delay: 0,
  },
  {
    id:       "tanger",
    name:     "Tanger",
    subtitle: "Gateway Logistique & Industriel",
    segments: ["Zones Franches", "ZAI", "Régimes fiscaux optimisés"],
    access:   ["Tanger Med < 45 min", "180 ports mondiaux connectés"],
    zones:    ["TFZ", "Tanger Automotive City", "A1 / A5"],
    x: 350, y: 25, delay: 0.5,
  },
  {
    id:       "kenitra",
    name:     "Kénitra",
    subtitle: "Écosystème Industriel d'Excellence",
    segments: ["Atlantic Free Zone", "Automotive Rang 1 & 2"],
    access:   ["Stellantis < 5 min", "Gare TGV 15 min"],
    zones:    ["A1", "Casa 45 min", "Tanger 1h30"],
    x: 331, y: 75, delay: 1.0,
  },
  {
    id:       "agadir",
    name:     "Agadir",
    subtitle: "Porte Logistique du Grand Sud",
    segments: ["Agro-industrie", "Halieutique", "Distribution régionale"],
    access:   ["Port d'Agadir accès direct", "Axe Souss-Massa"],
    zones:    ["Axe Agadir-Marrakech", "Tiznit", "Taroudant"],
    x: 241, y: 208, delay: 1.5,
  },
]

const MOROCCO_PATH = `
  M 463,46
  C 450,44 435,42 411,41
  C 395,40 378,32 368,22
  L 351,22
  L 348,33
  L 344,43
  C 338,57 333,66 331,75
  L 323,83
  C 314,90 305,95 300,98
  L 272,110
  C 260,127 251,138 250,143
  C 238,163 232,168 234,170
  C 230,188 233,200 239,208
  L 222,235
  L 195,258
  L 177,275
  C 163,285 152,291 148,294
  C 120,315 100,335 96,355
  C 74,384 58,402 52,416
  C 32,458 18,498 15,520
  L 15,530
  L 140,530
  L 170,462
  L 188,408
  C 208,385 220,378 228,375
  L 255,342
  L 288,300
  C 310,292 322,290 330,290
  C 388,274 424,260 443,255
  C 462,180 466,165 468,162
  L 465,78
  L 462,55
  Z
`

const ATLANTIC_COAST = `
  M 351,22 L 348,33 L 344,43
  C 338,57 333,66 331,75
  L 323,83 C 314,90 305,95 300,98
  L 272,110 L 250,143 L 234,170
  C 230,188 233,200 239,208
  L 222,235 L 195,258 L 177,275
  L 148,294 L 96,355 L 52,416 L 15,520
`

const HIGHWAYS = [
  { from: "tanger",     to: "kenitra",    label: "A1" },
  { from: "kenitra",    to: "casablanca", label: "A1" },
  { from: "casablanca", to: "agadir",     label: "A7" },
]

const CITY_IDS = CITIES.map(c => c.id)
const GOLD = "#C4A55A"

/* ── Marqueur pulsant ─────────────────────────────────── */
function PulseMarker({ city, isActive, onClick, drawn }) {
  return (
    <g onClick={() => onClick(city.id)} style={{ cursor: "pointer" }}>
      {drawn && (
        <>
          <motion.circle
            cx={city.x} cy={city.y} r={14}
            fill="none"
            stroke={isActive ? GOLD : "rgba(196,165,90,0.45)"}
            strokeWidth={isActive ? "1.5" : "1"}
            animate={{ r: [10, 26, 10], opacity: [0.7, 0, 0.7] }}
            transition={{ duration: 2.8, repeat: Infinity, delay: city.delay, ease: "easeOut" }}
          />
          <motion.circle
            cx={city.x} cy={city.y} r={8}
            fill="none"
            stroke={isActive ? GOLD : "rgba(196,165,90,0.28)"}
            strokeWidth="0.8"
            animate={{ r: [5, 18, 5], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 2.8, repeat: Infinity, delay: city.delay + 0.4, ease: "easeOut" }}
          />
        </>
      )}
      <circle
        cx={city.x} cy={city.y}
        r={isActive ? 5.5 : 3.5}
        fill={isActive ? GOLD : "rgba(196,165,90,0.75)"}
        style={{ transition: "r 0.3s, fill 0.3s" }}
      />
      <text
        x={city.x + 11} y={city.y + 4}
        fill={isActive ? "rgba(30,30,30,0.9)" : "rgba(80,80,80,0.55)"}
        fontSize="8.5"
        fontFamily="sans-serif"
        letterSpacing="1.8"
        style={{ userSelect: "none", transition: "fill 0.3s" }}
      >
        {city.name.toUpperCase()}
      </text>
    </g>
  )
}

/* ── Panneau d'info ville ─────────────────────────────── */
function CityInfoPanel({ city }) {
  return (
    <motion.div
      key={city.id}
      initial={{ opacity: 0, x: -16 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 16 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="h-full flex flex-col justify-between"
    >
      <div>
        <p className="font-sans text-[9px] tracking-[0.4em] uppercase text-gold mb-3">
          {city.subtitle}
        </p>
        <h3 className="font-serif text-3xl md:text-4xl text-neutral-800 font-light mb-4 leading-tight">
          {city.name}
        </h3>
        <div className="w-8 h-px bg-gold mb-6" />

        <div className="mb-5">
          <p className="font-sans text-[9px] tracking-[0.25em] uppercase text-neutral-400 mb-3">
            Segments
          </p>
          <div className="flex flex-wrap gap-2">
            {city.segments.map((s) => (
              <span key={s} className="font-sans text-[10px] tracking-[0.08em] text-neutral-600 bg-gray-100 border border-gray-200 px-3 py-1.5">
                {s}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-5">
          <p className="font-sans text-[9px] tracking-[0.25em] uppercase text-neutral-400 mb-2">
            Connexions
          </p>
          {city.access.map((a) => (
            <p key={a} className="font-sans text-[14px] text-neutral-500 leading-relaxed">
              ← {a}
            </p>
          ))}
        </div>

        <div>
          <p className="font-sans text-[9px] tracking-[0.25em] uppercase text-neutral-400 mb-2">
            Zones
          </p>
          <p className="font-sans text-[13px] text-neutral-500 leading-relaxed">
            {city.zones.join(" · ")}
          </p>
        </div>
      </div>

      <a
        href="#contact"
        className="inline-block mt-8 font-sans text-[9px] tracking-[0.25em] uppercase text-gold border border-gold/30 px-5 py-2.5 hover:bg-gold hover:text-white transition-all duration-300 w-fit"
      >
        Découvrir les actifs →
      </a>
    </motion.div>
  )
}

/* ── Composant principal ──────────────────────────────── */
export default function TerritorialMap() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-5% 0px" })
  const [active, setActive] = useState("casablanca")
  const [drawn,  setDrawn]  = useState(false)
  const pauseRef = useRef(false)

  /* Animate map paths after section enters view */
  useEffect(() => {
    if (inView) {
      const t = setTimeout(() => setDrawn(true), 600)
      return () => clearTimeout(t)
    }
  }, [inView])

  /* Auto-cycle cities every 2 seconds */
  useEffect(() => {
    const interval = setInterval(() => {
      if (pauseRef.current) return
      setActive(prev => {
        const idx = CITY_IDS.indexOf(prev)
        return CITY_IDS[(idx + 1) % CITY_IDS.length]
      })
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  /* Manual select — pause auto-cycle for 6 s */
  const handleSelect = (id) => {
    setActive(id)
    pauseRef.current = true
    setTimeout(() => { pauseRef.current = false }, 6000)
  }

  const activeCity = CITIES.find(c => c.id === active)
  const coords     = (id) => CITIES.find(c => c.id === id)

  return (
    <section ref={ref} className="bg-white py-24 md:py-32 overflow-hidden" id="empreinte">

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="px-8 md:px-12 lg:px-20 max-w-7xl mx-auto mb-14"
      >
        <p className="font-sans text-[11px] font-extrabold tracking-[0.4em] uppercase text-gold mb-4">
          Présence Nationale
        </p>
        <h2 className="font-serif text-4xl md:text-5xl text-neutral-800 font-light leading-[1.1]">
          Notre Empreinte
          <br />
          <span className="italic">Territoriale</span>
        </h2>
        <p className="font-sans text-[16px] text-neutral-500 mt-5 max-w-lg leading-[1.85]">
          Implantés dans les 4 pôles économiques stratégiques du Maroc,
          au plus près de vos besoins.
        </p>
      </motion.div>

      {/* Layout */}
      <div className="px-8 md:px-12 lg:px-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-8 lg:gap-14 items-center">

          {/* Left: tabs + info panel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="lg:min-h-[500px] flex flex-col"
          >
            {/* City tabs */}
            <div className="flex flex-wrap gap-2 mb-8">
              {CITIES.map((city) => (
                <button
                  key={city.id}
                  onClick={() => handleSelect(city.id)}
                  className={[
                    "font-sans text-[10px] tracking-[0.2em] uppercase px-4 py-2.5 border transition-all duration-300",
                    active === city.id
                      ? "bg-gold text-white border-gold"
                      : "bg-transparent text-neutral-400 border-neutral-200 hover:border-gold/50 hover:text-neutral-700",
                  ].join(" ")}
                >
                  {city.name}
                </button>
              ))}
            </div>

            {/* Info card */}
            <div className="flex-1 bg-gray-50 border border-gray-100 p-8 lg:p-10">
              <AnimatePresence mode="wait">
                {activeCity && <CityInfoPanel key={active} city={activeCity} />}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Right: interactive SVG Morocco map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1.1, delay: 0.2 }}
            className="relative flex items-center justify-center"
          >
            <svg
              viewBox="0 0 500 560"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full max-w-[480px]"
              aria-label="Carte du Maroc — présence territoriale Softgroup"
            >
              <defs>
                <radialGradient id="mapGlow" cx="45%" cy="40%" r="55%">
                  <stop offset="0%"   stopColor={GOLD} stopOpacity="0.10" />
                  <stop offset="100%" stopColor="transparent" stopOpacity="0" />
                </radialGradient>
              </defs>

              {/* Background ambient glow */}
              <circle cx="250" cy="280" r="260" fill="url(#mapGlow)" />

              {/* Morocco territory */}
              <path
                d={MOROCCO_PATH}
                fill="rgba(196,165,90,0.07)"
                stroke="rgba(196,165,90,0.55)"
                strokeWidth="1.5"
                strokeLinejoin="round"
                strokeLinecap="round"
              />

              {/* Atlantic coast accent */}
              <path
                d={ATLANTIC_COAST}
                fill="none"
                stroke="rgba(196,165,90,0.25)"
                strokeWidth="2.5"
                strokeLinecap="round"
              />

              {/* Highway routes */}
              {HIGHWAYS.map((route, i) => {
                const from = coords(route.from)
                const to   = coords(route.to)
                if (!from || !to) return null
                return (
                  <line
                    key={i}
                    x1={from.x} y1={from.y}
                    x2={to.x}   y2={to.y}
                    stroke="rgba(196,165,90,0.50)"
                    strokeWidth="1.5"
                    strokeDasharray="4 3"
                  />
                )
              })}

              {/* City markers with pulse animation */}
              {CITIES.map((city) => (
                <PulseMarker
                  key={city.id}
                  city={city}
                  isActive={active === city.id}
                  onClick={handleSelect}
                  drawn={drawn}
                />
              ))}
            </svg>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
