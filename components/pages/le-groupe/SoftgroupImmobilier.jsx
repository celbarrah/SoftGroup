"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useInView } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

/* ── Slides ─────────────────────────────────────────────────── */
const SLIDES = [
  "https://res.cloudinary.com/dofyrwzop/image/upload/q_auto/f_auto/v1779115059/SOFTIMMO_zo6pgq.jpg",
  // "https://res.cloudinary.com/dofyrwzop/image/upload/q_auto/f_auto/v1779115059/SOFTGROUP_HOLDING_ogdfsm.jpg",
  "https://res.cloudinary.com/dofyrwzop/image/upload/q_auto/f_auto/v1779115064/SOFTIMMO2_h9afgi.jpg",
]

const INTERVAL = 4800   // ms between transitions
const DURATION = 1100   // ms for the wipe animation

const POINTS_FORTS = [
  { title: "Constructeur-développeur intégré",    desc: "De la conception architecturale à la livraison clé en main, Softgroup Immobilier pilote chaque étape du développement immobilier avec un haut niveau d'exigence et de maîtrise technique." },
  { title: "Expertise locative multi-segments",   desc: "Une offre couvrant cinq univers complémentaires, pensée pour répondre aux besoins spécifiques des industriels, logisticiens, enseignes retail, entreprises et expatriés." },
  { title: "Présence nationale stratégique",      desc: "Des actifs situés dans les zones économiques les plus dynamiques du Royaume, offrant accessibilité, connectivité et fort potentiel de valorisation." },
  { title: "+300 clients grands comptes",         desc: "Des multinationales, groupes industriels et leaders sectoriels font confiance à Softgroup Immobilier pour leurs besoins immobiliers stratégiques au Maroc." },
]

/* ─────────────────────────────────────────────────────────────
   Premium Slider
   • Outgoing slide: Ken-Burns zoom-out + fades
   • Incoming slide: hard-curtain wipe from right (clip-path)
     with inner Ken-Burns zoom-in for depth
   • Gold progress bar sweeps bottom edge over the full interval
   • Editorial counter top-right "01 / 03"
───────────────────────────────────────────────────────────── */
function ImageSlider() {
  const [current, setCurrent]   = useState(0)
  const [prev,    setPrev]      = useState(null)
  const [tick,    setTick]      = useState(0)   // increments each transition → re-keys progress bar

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((c) => {
        setPrev(c)
        setTick((t) => t + 1)
        return (c + 1) % SLIDES.length
      })
    }, INTERVAL)
    return () => clearInterval(id)
  }, [])

  return (
    <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>

      {/* ── CSS keyframes ── */}
      <style>{`
        @keyframes sgWipe {
          from { clip-path: inset(0 100% 0 0); }
          to   { clip-path: inset(0 0%   0 0); }
        }
        @keyframes sgKbIn {
          from { transform: scale(1.08); }
          to   { transform: scale(1.0);  }
        }
        @keyframes sgKbOut {
          from { transform: scale(1.0);  }
          to   { transform: scale(1.05); }
        }
        @keyframes sgProgress {
          from { transform: scaleX(0); }
          to   { transform: scaleX(1); }
        }
      `}</style>

      {/* ── Outgoing slide — zooms slightly, fades ── */}
      {prev !== null && (
        <div
          key={`out-${prev}`}
          style={{
            position:   "absolute",
            inset:      0,
            animation:  `sgKbOut ${DURATION + 400}ms ease forwards`,
            opacity:    1,
            transition: `opacity ${DURATION}ms ease`,
          }}
        >
          <div
            style={{
              position:           "absolute",
              inset:              0,
              backgroundImage:    `url(${SLIDES[prev]})`,
              backgroundSize:     "cover",
              backgroundPosition: "center",
            }}
          />
        </div>
      )}

      {/* ── Incoming slide — curtain wipe from right ── */}
      <div
        key={`in-${current}`}
        style={{
          position:  "absolute",
          inset:     0,
          animation: `sgWipe ${DURATION}ms cubic-bezier(0.76, 0, 0.24, 1) forwards`,
        }}
      >
        {/* Inner Ken-Burns zoom */}
        <div
          style={{
            position:           "absolute",
            inset:              0,
            backgroundImage:    `url(${SLIDES[current]})`,
            backgroundSize:     "cover",
            backgroundPosition: "center",
            animation:          `sgKbIn ${INTERVAL + DURATION}ms ease-out forwards`,
          }}
        />
      </div>

      {/* ── Cinematic gradient — top-left vignette + bottom for counter ── */}
      <div
        style={{
          position:   "absolute",
          inset:      0,
          background: [
            "linear-gradient(to bottom right, rgba(0,0,0,0.40) 0%, transparent 45%)",
            "linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 35%)",
          ].join(", "),
          pointerEvents: "none",
        }}
      />

      {/* ── Slide counter — top right ── */}
      {/* <div
        style={{
          position:    "absolute",
          top:         22,
          right:       22,
          display:     "flex",
          alignItems:  "center",
          gap:         8,
          pointerEvents: "none",
        }}
      >
        <span style={{ fontFamily: "var(--font-cormorant, serif)", fontSize: 22, fontWeight: 300, color: "rgba(255,255,255,0.9)", lineHeight: 1 }}>
          {String(current + 1).padStart(2, "0")}
        </span>
        <span style={{ width: 20, height: 1, background: "rgba(255,255,255,0.30)", display: "block" }} />
        <span style={{ fontFamily: "var(--font-dm-sans, sans-serif)", fontSize: 11, color: "rgba(255,255,255,0.30)", letterSpacing: "0.15em" }}>
          {String(SLIDES.length).padStart(2, "0")}
        </span>
      </div> */}

      {/* ── Gold progress bar — sweeps bottom edge ── */}
      {/* Track */}
      <div
        style={{
          position: "absolute",
          bottom:   0,
          left:     0,
          right:    0,
          height:   2,
          background: "rgba(255,255,255,0.10)",
          pointerEvents: "none",
        }}
      />
      {/* Fill — re-keyed on every transition */}
      <div
        key={`prog-${tick}`}
        style={{
          position:        "absolute",
          bottom:          0,
          left:            0,
          width:           "100%",
          height:          2,
          background:      "#C4A55A",
          transformOrigin: "left center",
          animation:       `sgProgress ${INTERVAL}ms linear forwards`,
          pointerEvents:   "none",
        }}
      />

      {/* ── Thin gold left-edge accent ── */}
      <div
        style={{
          position:   "absolute",
          top:        0,
          left:       0,
          width:      2,
          height:     "40%",
          background: "linear-gradient(to bottom, rgba(196,165,90,0.85), transparent)",
          pointerEvents: "none",
        }}
      />
    </div>
  )
}

/* ── Main section ───────────────────────────────────────────── */
export default function SoftgroupImmobilier() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-8%" })

  return (
    <section ref={ref} className="bg-gray-50 py-24 md:py-36 overflow-hidden" id="softgroup-immobilier">
      <div className="max-w-400 mx-auto px-8 md:px-12 lg:px-20">

          
          <div>
             <p className="font-sans text-[14px] font-bold tracking-[0.55em] uppercase text-gold/70 mb-6">
              La Filiale Phare
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-neutral-800 font-light leading-[1.1] mb-5">
              Softgroup Immobilier
              <br />
              <span className="italic text-gold">La Référence Locative Premium</span>
            </h2>
            <div className="w-10 h-px bg-gold/40 mb-8" />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
          {/* Left: premium slider */} 
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="relative h-[500px] lg:h-[600px]"
          >
            <ImageSlider />
          </motion.div>

          {/* Right: content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.0, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* <p className="font-sans text-[14px] font-bold tracking-[0.55em] uppercase text-gold/70 mb-6">
              La Filiale Phare
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-neutral-800 font-light leading-[1.1] mb-5">
              Softgroup Immobilier
              <br />
              <span className="italic text-gold">La Référence Locative Premium</span>
            </h2>
            <div className="w-10 h-px bg-gold/40 mb-8" /> */}

            <p className="font-sans text-[17px] text-neutral-500 leading-[1.9] mb-3 max-w-lg">
              Constructeur, développeur et gestionnaire d&apos;actifs depuis plus de 35 ans
              Softgroup Immobilier est la foncière locative de référence au Maroc.
            </p>
            <p className="font-sans text-[17px] text-neutral-500 leading-[1.9] mb-12 max-w-lg">
              Maîtrisant l&apos;intégralité du cycle de vie immobilier, de la conception
              architecturale à la valorisation patrimoniale, elle couvre cinq segments
              stratégiques avec une exigence absolue de qualité et de performance.
            </p>

            {/* Points forts */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
              {POINTS_FORTS.map((pt, i) => (
                <motion.div
                  key={pt.title}
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.32 + i * 0.08 }}
                  className="border-t border-gray-200 pt-4"
                >
                  <p className="font-sans text-[13px] tracking-[0.15em] uppercase text-gold mb-2">{pt.title}</p>
                  <p className="font-sans text-[16px] text-neutral-500 leading-[1.7]">{pt.desc}</p>
                </motion.div>
              ))}
            </div>

            <a
              href="/portefeuille"
              className="inline-flex items-center gap-3 font-sans text-[12px] tracking-[0.25em] uppercase text-gold border border-gold/30 px-7 py-3.5 hover:bg-gold hover:text-white transition-all duration-400 group"
            >
              Voir le portefeuille
              <ArrowUpRight size={14} strokeWidth={1.5} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
