"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import SegmentSlider from "./SegmentSlider"

const SLIDES = [
  "https://res.cloudinary.com/dofyrwzop/image/upload/q_auto,f_auto/v1778504256/terrain_et_developpement_buqi7d.png",
  "https://res.cloudinary.com/dofyrwzop/image/upload/q_auto,f_auto/v1778504256/terrain_et_developpement_buqi7d.png",
  "https://res.cloudinary.com/dofyrwzop/image/upload/q_auto,f_auto/v1778504256/terrain_et_developpement_buqi7d.png",
]

const SPECS = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
    name: "Structure",
    text: "Hauteurs jusqu'à 12m · Dalle 5T/m² · Ossature mixte béton / métallique · Toiture bac acier isolant (M0)",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
        <rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>
      </svg>
    ),
    name: "Quais & Accès",
    text: "Niveleurs hydrauliques · Portes sectionnelles 3×3m · Sas rétractables étanches · Voirie lourde & béquillage poids lourds",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    name: "Sécurité",
    text: "Sprinklers APSAD / ESFR / NFPA · RIA & détection fumée centralisée · Pyrodomes en toiture",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
        <circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/>
      </svg>
    ),
    name: "Confort",
    text: "200 lux + 2% éclairage zénithal · Bureaux, mezzanines, locaux de charge · Infrastructure IT Ready",
  },
]

const TYPE_PILLS = [
  {
    label: "Plateforme logistique",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" width="14" height="14"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>,
  },
  {
    label: "Site industriel",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" width="14" height="14"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>,
  },
  {
    label: "Unité de production",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" width="14" height="14"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>,
  },
  {
    label: "Entrepôt de stockage",
    active: true,
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" width="14" height="14"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>,
  },
  {
    label: "Centre de distribution",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" width="14" height="14"><circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/></svg>,
  },
]

const LOCS = [
  { city: "Casablanca", zones: "Sidi Bernoussi · Aïn Sebaâ · Lissasfa" },
  { city: "Kénitra",    zones: "Atlantic Free Zone (AFZ)" },
  { city: "Tanger",     zones: "Tanger Free Zone (TFZ)" },
  { city: "Agadir",     zones: "Inezgane · Préfecture d'Inezgane" },
]

export default function SegmentLogistique() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-8%" })

  return (
    <section id="logistique" className="overflow-hidden bg-white">

      {/* ACT 1 — Title panel */}
      <div className="relative py-[100px] px-[clamp(20px,5vw,80px)] bg-white text-center overflow-hidden">
        <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[340px] rounded-full bg-[radial-gradient(ellipse,rgba(196,165,90,0.06)_0%,transparent_70%)]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

        <div ref={ref} className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-3 mb-3"
          >
            <span className="block w-[22px] h-px bg-gold/55 shrink-0" />
            <span className="font-sans text-[9.5px] tracking-[0.32em] uppercase text-gold font-bold">Logistique &amp; Industriel</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.85, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif font-light text-[#0F1923] leading-[0.92] tracking-[-0.025em] mb-7"
            style={{ fontSize: "clamp(45px,6vw,90px)" }}
          >
            L&apos;Expertise Logistique
            <br />
            <em className="italic text-gold">au Service de vos Opérations</em>
          </motion.h2>

          <div className="w-[40px] h-px bg-gold/35 mx-auto mb-7" />

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-sans text-[16px] font-light text-[rgba(15,25,35,0.55)] leading-[1.9] max-w-[54ch] mx-auto mb-7"
          >
            Au cœur des principaux pôles économiques du Royaume, s&apos;imposent des plateformes logistiques
            et industrielles axées sur la fluidité opérationnelle. Des infrastructures de dernière génération,
            stratégiquement connectées aux réseaux routiers, maritimes et aériens.
          </motion.p>

          {/* Badges — bigger, proper button look */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center justify-center gap-3"
          >
            <span className="inline-flex items-center font-sans text-[11px] tracking-[0.18em] uppercase bg-gold text-noir px-5 py-[9px] font-bold cursor-default">
              Prêt à l&apos;emploi
            </span>
            <span className="inline-flex items-center font-sans text-[11px] tracking-[0.15em] uppercase border border-gold/50 text-gold px-5 py-[9px] cursor-default hover:bg-gold/8 transition-colors">
              Build-to-Suit
            </span>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      </div>

      {/* ACT 2 — Slider */}
      <SegmentSlider slides={SLIDES} badge="Plateformes de Dernière Génération" />

      {/* ACT 3 — Specs */}
      <div className="bg-[#F7F9FB]">
        <div className="px-[clamp(20px,5vw,80px)] py-[72px]">
          <div className="max-w-[1400px] mx-auto">

            <p className="font-sans text-[9px] tracking-[0.35em] uppercase font-bold text-gold mb-6">Spécifications techniques</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
              {SPECS.map((s, i) => (
                <div key={i} className="bg-white border border-[rgba(196,165,90,0.15)] rounded-[14px] p-6">
                  <div className="w-11 h-11 rounded-xl border border-[rgba(196,165,90,0.2)] flex items-center justify-center text-gold mb-4">
                    {s.icon}
                  </div>
                  <p className="font-sans text-[14px] font-semibold text-[#0F1923] mb-2">{s.name}</p>
                  <p className="font-sans text-[13px] font-light text-[rgba(15,25,35,0.55)] leading-[1.7]">{s.text}</p>
                </div>
              ))}
            </div>

            <p className="font-sans text-[9px] tracking-[0.35em] uppercase font-bold text-gold mb-6">Types d&apos;actifs</p>
            <div className="flex flex-wrap gap-[10px] mb-12">
              {TYPE_PILLS.map((p) => (
                <span
                  key={p.label}
                  className={[
                    "inline-flex items-center gap-2 font-sans text-[11px] tracking-[0.12em] uppercase px-4 py-[9px] rounded-full transition-colors cursor-default",
                    p.active
                      ? "bg-gold text-noir font-semibold"
                      : "border border-[rgba(196,165,90,0.28)] text-[rgba(15,25,35,0.6)] hover:border-gold/50",
                  ].join(" ")}
                >
                  {p.icon}
                  {p.label}
                </span>
              ))}
            </div>

            <p className="font-sans text-[9px] tracking-[0.35em] uppercase font-bold text-gold mb-6">Implantations</p>
            <div className="flex flex-wrap gap-[10px]">
              {LOCS.map((l) => (
                <div key={l.city} className="inline-flex flex-col gap-1 border border-[rgba(196,165,90,0.2)] rounded-xl px-5 py-3">
                  <strong className="font-sans text-[13px] font-semibold text-[#0F1923]">{l.city}</strong>
                  <span className="font-sans text-[12px] font-light text-[rgba(15,25,35,0.5)]">{l.zones}</span>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* Meta strip */}
        <div className="bg-[rgba(196,165,90,0.04)] border-t border-[rgba(196,165,90,0.1)] px-[clamp(20px,5vw,80px)] py-8 flex flex-wrap items-center gap-10">
          <div className="flex flex-col gap-1">
            <span className="font-sans text-[9.5px] tracking-[0.2em] uppercase text-[rgba(15,25,35,0.4)] font-medium">Surfaces</span>
            <span className="font-sans text-[13.5px] font-light text-[#0F1923]">1 000 m² à 50 000 m²+</span>
          </div>
          <div className="w-px h-8 bg-[rgba(196,165,90,0.2)]" />
          <div className="flex flex-col gap-1">
            <span className="font-sans text-[9.5px] tracking-[0.2em] uppercase text-[rgba(15,25,35,0.4)] font-medium">Profil occupant</span>
            <span className="font-sans text-[13.5px] font-light text-[#0F1923]">3PL · Industriels · Distributeurs · E-commerce · Multinationales</span>
          </div>
          <div className="w-px h-8 bg-[rgba(196,165,90,0.2)]" />
          <div className="flex flex-col gap-1">
            <span className="font-sans text-[9.5px] tracking-[0.2em] uppercase text-[rgba(15,25,35,0.4)] font-medium">Formats</span>
            <span className="font-sans text-[13.5px] font-light text-[#0F1923]">Prêt à l&apos;emploi · Build-to-Suit</span>
          </div>
        </div>
      </div>

    </section>
  )
}
