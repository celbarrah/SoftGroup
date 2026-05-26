"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import SegmentImageBlock from "./SegmentImageBlock"

const IMAGES = [
  { src: "https://res.cloudinary.com/dofyrwzop/image/upload/q_auto,f_auto/v1778504256/terrain_et_developpement_buqi7d.png", alt: "Plateforme logistique Softgroup" },
]

const SPECS = [
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
    name: "Structure",
    txt: "Hauteurs jusqu'à 12m · Dalle 5T/m² · Ossature mixte béton / métallique · Toiture bac acier isolant (M0)",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>
      </svg>
    ),
    name: "Quais & Accès",
    txt: "Niveleurs hydrauliques · Portes sectionnelles 3×3m · Sas rétractables étanches · Voirie lourde & béquillage poids lourds",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    name: "Sécurité",
    txt: "Sprinklers APSAD / ESFR / NFPA · RIA & détection fumée centralisée · Pyrodomes en toiture",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/>
      </svg>
    ),
    name: "Confort",
    txt: "200 lux + 2% éclairage zénithal · Bureaux, mezzanines, locaux de charge · Infrastructure IT Ready",
  },
]

const TYPES = ["Plateforme logistique", "Site industriel", "Unité de production", "Entrepôt de stockage", "Centre de distribution"]
const LOCATIONS = [
  { city: "Casablanca", zones: "Sidi Bernoussi · Aïn Sebaâ · Lissasfa" },
  { city: "Kénitra",    zones: "Atlantic Free Zone (AFZ)" },
  { city: "Tanger",     zones: "Tanger Free Zone (TFZ)" },
  { city: "Agadir",     zones: "Inezgane · Préfecture d'Inezgane" },
]

export default function SegmentLogistique() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-6%" })

  return (
    <section id="logistique-industriel" className="overflow-hidden bg-white">

      {/* ── ACT 1 — Title ── */}
      <div className="relative text-center py-[100px] px-[clamp(24px,8vw,80px)] bg-white">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/22 to-transparent" />
        <motion.div ref={ref} initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.85 }}>
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="w-[22px] h-px bg-gold/55 flex-shrink-0" />
            <span className="font-sans text-[10px] tracking-[0.32em] uppercase text-gold font-bold">Logistique &amp; Industriel</span>
          </div>
          <h2 className="font-serif font-light text-[#0F1923] leading-[0.92] tracking-[-0.025em] mb-7" style={{ fontSize: "clamp(48px,7vw,96px)" }}>
            L&apos;Expertise Logistique
            <br />
            <em className="italic text-gold">au Service de vos Opérations</em>
          </h2>
          <div className="w-10 h-px bg-gold/35 mx-auto mb-7" />
          <p className="font-sans text-[17px] font-light text-neutral-500 leading-[1.9] max-w-[54ch] mx-auto">
            Au cœur des principaux pôles économiques du Royaume, s&apos;imposent des plateformes logistiques
            et industrielles axées sur la fluidité opérationnelle. Des infrastructures de dernière génération,
            stratégiquement connectées aux réseaux routiers, maritimes et aériens.
          </p>
          <div className="flex gap-2 justify-center mt-6">
            <span className="inline-flex font-sans text-[9px] tracking-[0.18em] uppercase bg-gold text-[#0F1923] px-3 py-1.5 font-bold">Prêt à l&apos;emploi</span>
            <span className="inline-flex font-sans text-[9px] tracking-[0.15em] uppercase border border-gold/40 text-gold px-3 py-1.5">Build-to-Suit</span>
          </div>
        </motion.div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/22 to-transparent" />
      </div>

      {/* ── ACT 2 — Full-screen image ── */}
      <motion.div initial={{ opacity: 0, y: 32 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.9, delay: 0.15 }}>
        <SegmentImageBlock images={IMAGES} badge="Plateformes de Dernière Génération" />
      </motion.div>

      {/* ── ACT 3 — Specs ── */}
      <div className="bg-[#F7F9FB]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="px-[clamp(24px,8vw,80px)] py-16 max-w-[1400px] mx-auto"
        >
          {/* Spec label */}
          <p className="flex items-center gap-3 font-sans text-[9px] tracking-[0.35em] uppercase text-gold font-bold mb-7 after:flex-1 after:h-px after:bg-gradient-to-r after:from-gold/25 after:to-transparent">
            Spécifications techniques
          </p>

          {/* 4 spec cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {SPECS.map((spec) => (
              <div key={spec.name} className="group flex flex-col gap-0 p-7 rounded-[10px] bg-white border border-gold/12 hover:border-gold/30 hover:shadow-[0_12px_40px_rgba(196,165,90,0.10)] hover:-translate-y-0.5 transition-all duration-300 relative overflow-hidden cursor-default">
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold group-hover:w-full transition-all duration-400" />
                <div className="w-11 h-11 rounded-[10px] bg-gold/7 border border-gold/14 flex items-center justify-center mb-5 text-gold group-hover:bg-gold group-hover:text-white group-hover:border-gold transition-all duration-300">
                  {spec.icon}
                </div>
                <p className="font-sans text-[10px] tracking-[0.2em] uppercase font-bold text-[#0F1923] mb-2">{spec.name}</p>
                <p className="font-sans text-[13px] text-neutral-500 font-light leading-[1.65]">{spec.txt}</p>
              </div>
            ))}
          </div>

          {/* Types */}
          <p className="flex items-center gap-3 font-sans text-[9px] tracking-[0.35em] uppercase text-gold font-bold mb-5 after:flex-1 after:h-px after:bg-gradient-to-r after:from-gold/25 after:to-transparent">
            Types d&apos;actifs
          </p>
          <div className="flex flex-wrap gap-2.5 mb-10">
            {TYPES.map((t) => (
              <span key={t} className="inline-flex items-center font-sans text-[13px] text-[#0F1923] px-[18px] py-2.5 rounded-3xl bg-white border border-gold/18 hover:bg-gold hover:border-gold hover:text-[#0F1923] transition-all duration-300 cursor-default">
                {t}
              </span>
            ))}
          </div>

          {/* Locations */}
          <p className="flex items-center gap-3 font-sans text-[9px] tracking-[0.35em] uppercase text-gold font-bold mb-5 after:flex-1 after:h-px after:bg-gradient-to-r after:from-gold/25 after:to-transparent">
            Implantations
          </p>
          <div className="flex flex-wrap gap-2.5">
            {LOCATIONS.map((loc) => (
              <div key={loc.city} className="flex flex-col gap-1 px-[18px] py-3 rounded-lg bg-white border border-gold/15 hover:border-gold hover:bg-gold/3 transition-all duration-300 cursor-default min-w-[130px]">
                <strong className="font-sans text-[13px] font-semibold text-[#0F1923]">{loc.city}</strong>
                <span className="font-sans text-[11px] text-neutral-500 font-light">{loc.zones}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Meta strip */}
        <div className="flex items-center flex-wrap gap-8 px-[clamp(24px,8vw,80px)] py-5 bg-gold/4 border-t border-gold/10">
          <div className="flex flex-col gap-1">
            <span className="font-sans text-[8px] tracking-[0.32em] uppercase text-neutral-400">Surfaces</span>
            <span className="font-sans text-[13px] text-[#0F1923]">1 000 m² à 50 000 m²+</span>
          </div>
          <div className="w-px h-8 bg-gold/15" />
          <div className="flex flex-col gap-1">
            <span className="font-sans text-[8px] tracking-[0.32em] uppercase text-neutral-400">Profil occupant</span>
            <span className="font-sans text-[13px] text-[#0F1923]">3PL · Industriels · Distributeurs · E-commerce · Multinationales</span>
          </div>
          <div className="w-px h-8 bg-gold/15" />
          <div className="flex flex-col gap-1">
            <span className="font-sans text-[8px] tracking-[0.32em] uppercase text-neutral-400">Formats</span>
            <span className="font-sans text-[13px] text-[#0F1923]">Prêt à l&apos;emploi · Build-to-Suit</span>
          </div>
        </div>
      </div>
    </section>
  )
}
