"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import SegmentSlider from "./SegmentSlider"

const SLIDES = [
  "https://res.cloudinary.com/dofyrwzop/image/upload/q_auto/f_auto/v1781088090/TERRAIN_ru21sh.png",
  // "https://res.cloudinary.com/dofyrwzop/image/upload/q_auto,f_auto/v1778599319/Gemini_Generated_Image_kk7w0vkk7w0vkk7w_xnlkdg.png",
  // "https://res.cloudinary.com/dofyrwzop/image/upload/q_auto,f_auto/v1778599319/Gemini_Generated_Image_kk7w0vkk7w0vkk7w_xnlkdg.png",
]

const SERVICES = [
  {
    gold: false,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    name: "Terrains multi-usages",
    text: "Industriels, commerciaux et résidentiels · vente & location",
  },
  {
    gold: false,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
        <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"/><line x1="12" y1="22" x2="12" y2="15.5"/><polyline points="22 8.5 12 15.5 2 8.5"/>
      </svg>
    ),
    name: "Zones stratégiques",
    text: "Accélération industrielle & zones franches",
  },
  {
    gold: false,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>
      </svg>
    ),
    name: "Conseil & Faisabilité",
    text: "Études complètes et conseil en développement immobilier",
  },
  {
    gold: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
        <circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/>
      </svg>
    ),
    name: "Accompagnement juridique",
    text: "Montage juridique & administratif de A à Z",
  },
  {
    gold: false,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
        <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
    name: "Développement sur mesure",
    text: "Build-to-Suit et solutions clé en main adaptées à vos projets",
  },
]

const INVESTORS = [
  {
    gold: false,
    border: false,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
        <rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
      </svg>
    ),
    name: "Investisseurs institutionnels",
    desc: "Fonds souverains, assureurs, caisses de retraite",
  },
  {
    gold: true,
    border: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
      </svg>
    ),
    name: "Industriels",
    desc: "Groupes industriels en expansion au Maroc",
  },
  {
    gold: false,
    border: false,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
    name: "Promoteurs immobiliers",
    desc: "Développeurs à la recherche d'opportunités foncières",
  },
  {
    gold: false,
    border: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
        <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>
      </svg>
    ),
    name: "Fonds d'investissement",
    desc: "PE, REIT et fonds immobiliers locaux & internationaux",
  },
]

function A3Label({ children }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <span className="font-sans text-[9px] tracking-[0.35em] uppercase font-bold text-gold whitespace-nowrap">{children}</span>
      <span className="flex-1 h-px bg-gradient-to-r from-[rgba(196,165,90,0.25)] to-transparent" />
    </div>
  )
}

export default function SegmentTerrains() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-8%" })

  return (
    <section id="terrains" className="overflow-hidden bg-[#F7F9FB] pb-35"  style={{
        WebkitClipPath: "polygon(0 0, 100% 0, 100% 97%, 0 100%)",
        clipPath:       "polygon(0 0, 100% 0, 100% 97%, 0 100%)",
      }} >

      {/* ACT 1 — Title panel */}
      <div className="relative py-[100px] px-[clamp(20px,5vw,80px)] bg-[#F7F9FB] text-center overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

        <div ref={ref} className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-3 mb-3"
          >
            <span className="block w-[22px] h-px bg-gold/55 shrink-0" />
            <span className="font-sans text-[9.5px] tracking-[0.32em] uppercase text-gold font-bold">
              Terrains &amp; Développements
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.85, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif font-light text-[#0F1923] leading-[0.92] tracking-[-0.025em] mb-7"
            style={{ fontSize: "clamp(52px,7vw,100px)" }}
          >
            Des Opportunités Foncières
            <br />
            <em className="italic text-gold">à Fort Potentiel</em>
          </motion.h2>

          <div className="w-[40px] h-px bg-gold/35 mx-auto mb-7" />

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-sans text-[16px] font-light text-[rgba(15,25,35,0.55)] leading-[1.9] max-w-[54ch] mx-auto"
          >
            Au cœur des zones les plus dynamiques du Maroc, SOFTGROUP valorise des réserves
            foncières et des terrains industriels à forte valeur ajoutée. Des emplacements
            stratégiques, clés en main ou sur mesure, prêts à accueillir vos projets d&apos;envergure.
          </motion.p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      </div>

      {/* ACT 2 — Slider */}
      <SegmentSlider slides={SLIDES} badge="Disponible partout au Maroc" />

      {/* ACT 3 */}
      <div className="bg-white">
        <div className="px-[clamp(20px,5vw,80px)] py-[72px]">
          <div className="max-w-[1400px] mx-auto">

            {/* Services 5-col grid */}
            <A3Label>Services inclus</A3Label>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-14">
              {SERVICES.map((s, i) => (
                <div
                  key={i}
                  className={[
                    "group relative overflow-hidden rounded-[10px] p-[28px_24px] border cursor-default transition-all duration-[350ms] hover:-translate-y-[2px] hover:shadow-[0_12px_40px_rgba(196,165,90,0.10)]",
                    s.gold
                      ? "bg-[rgba(196,165,90,0.08)] border-gold/40 hover:border-gold"
                      : "bg-white border-[rgba(196,165,90,0.12)] hover:border-[rgba(196,165,90,0.3)]",
                  ].join(" ")}
                >
                  <div className="absolute bottom-0 left-0 h-[2px] bg-gold w-0 group-hover:w-full transition-all duration-[400ms]" />
                  <div
                    className={[
                      "w-11 h-11 rounded-[10px] flex items-center justify-center mb-[18px] transition-all duration-[350ms]",
                      s.gold
                        ? "bg-gold border border-gold text-white"
                        : "bg-[rgba(196,165,90,0.07)] border border-[rgba(196,165,90,0.14)] text-gold group-hover:bg-gold group-hover:border-gold group-hover:text-white",
                    ].join(" ")}
                  >
                    {s.icon}
                  </div>
                  <p className="font-sans text-[10px] tracking-[0.2em] uppercase font-bold text-[#0F1923] mb-2">{s.name}</p>
                  <p className="font-sans text-[13px] font-light text-[rgba(15,25,35,0.55)] leading-[1.65]">{s.text}</p>
                </div>
              ))}
            </div>

            {/* Investor profiles — 2-col feature lines */}
            <A3Label>Profils investisseurs</A3Label>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {INVESTORS.map((inv, i) => (
                <div
                  key={i}
                  className={[
                    "group/inv flex items-start gap-4 py-5 border-b border-[rgba(196,165,90,0.08)] transition-all duration-300 hover:pl-[6px]",
                    inv.border ? "lg:pl-8 lg:border-l lg:border-[rgba(196,165,90,0.08)]" : "",
                  ].join(" ")}
                >
                  <div
                    className={[
                      "w-9 h-9 shrink-0 rounded-lg flex items-center justify-center transition-all duration-300",
                      inv.gold
                        ? "bg-gold border border-gold text-white"
                        : "bg-[rgba(196,165,90,0.07)] border border-[rgba(196,165,90,0.14)] text-gold group-hover/inv:bg-gold group-hover/inv:text-white group-hover/inv:border-gold",
                    ].join(" ")}
                  >
                    {inv.icon}
                  </div>
                  <div>
                    <p className="font-sans text-[13px] font-semibold text-[#0F1923] mb-[2px]">{inv.name}</p>
                    <p className="font-sans text-[12.5px] font-light text-[rgba(15,25,35,0.55)] leading-[1.6]">{inv.desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* Meta strip */}
        <div className="bg-[rgba(196,165,90,0.04)] border-t border-[rgba(196,165,90,0.1)] px-[clamp(20px,5vw,80px)] py-5 flex flex-wrap items-center gap-8">
          <div className="flex flex-col gap-1">
            <span className="font-sans text-[8px] tracking-[0.32em] uppercase text-[rgba(15,25,35,0.32)]">Disponibilité</span>
            <span className="font-sans text-[13px] font-light text-[#0F1923]">Vente &amp; Location · Partout au Maroc</span>
          </div>
          <div className="w-px h-8 bg-[rgba(196,165,90,0.2)]" />
          <div className="flex flex-col gap-1">
            <span className="font-sans text-[8px] tracking-[0.32em] uppercase text-[rgba(15,25,35,0.32)]">Zones</span>
            <span className="font-sans text-[13px] font-light text-[#0F1923]">Industrielles · Commerciales · Résidentielles · Zones franches</span>
          </div>
        </div>
      </div>

    </section>
  )
}
