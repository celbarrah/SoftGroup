"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import SegmentImageBlock from "./SegmentImageBlock"

const IMAGES = [
  { src: "https://res.cloudinary.com/dofyrwzop/image/upload/q_auto,f_auto/v1778504245/bureaux_et_centre_d_affaires_yoldrb.png", alt: "Bureaux & Centres d'Affaires — Softgroup" },
]

const TYPES = [
  "Villas professionnelles",
  "Immeubles de bureaux indépendants",
  "Immeubles de bureaux multi-occupants",
  "Centre d'affaires",
  "Plateaux de bureaux aménageables",
  "Espaces open space",
]

const FEATURES = [
  { name: "Modularité",         desc: "Plateaux modulables de 100 à 1 200 m²" },
  { name: "Finitions & Confort", desc: "Premium · Isolation thermique & acoustique · Double vitrage" },
  { name: "Énergie intelligente", desc: "GTC · LED basse consommation · Climatisation PAC réversible" },
  { name: "Connectivité",       desc: "Fibre optique · Pré-câblage IT complet · Infrastructure réseau" },
  { name: "Sécurité",           desc: "24h/24 · Vidéosurveillance · Contrôle d'accès · Réception dédiée" },
  { name: "Mobilité",           desc: "Ascenseur haute capacité · Parkings privatifs sécurisés" },
]

export default function SegmentBureaux() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-6%" })

  return (
    <section id="bureaux-centres-d-affaires" className="overflow-hidden bg-[#F7F9FB]">

      {/* ── ACT 1 — Title ── */}
      <div className="relative text-center py-[100px] px-[clamp(24px,8vw,80px)] bg-[#F7F9FB]">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/22 to-transparent" />
        <motion.div ref={ref} initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.85 }}>
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="w-[22px] h-px bg-gold/55 flex-shrink-0" />
            <span className="font-sans text-[10px] tracking-[0.32em] uppercase text-gold font-bold">Bureaux &amp; Centres d&apos;Affaires</span>
          </div>
          <h2 className="font-serif font-light text-[#0F1923] leading-[0.92] tracking-[-0.025em] mb-7" style={{ fontSize: "clamp(48px,7vw,96px)" }}>
            Espaces Tertiaires
            <br />
            <em className="italic text-gold">Flexibles et Évolutifs</em>
          </h2>
          <div className="w-10 h-px bg-gold/35 mx-auto mb-7" />
          <p className="font-sans text-[17px] font-light text-neutral-500 leading-[1.9] max-w-[54ch] mx-auto">
            Au cœur des grands centres d&apos;affaires du Royaume, s&apos;élèvent des espaces conçus pour les
            ambitions les plus élevées. Architecture contemporaine, emplacements stratégiques et prestations
            haut de gamme s&apos;unissent pour donner vie à la performance.
          </p>
        </motion.div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/22 to-transparent" />
      </div>

      {/* ── ACT 2 — Full-screen image ── */}
      <motion.div initial={{ opacity: 0, y: 32 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.9, delay: 0.15 }}>
        <SegmentImageBlock images={IMAGES} badge="Espaces Certifiés" />
      </motion.div>

      {/* ── ACT 3 — 2-col layout ── */}
      <div className="bg-white">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="px-[clamp(24px,8vw,80px)] py-16 max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[72px] items-start"
        >
          {/* Left — types */}
          <div>
            <p className="flex items-center gap-3 font-sans text-[9px] tracking-[0.35em] uppercase text-gold font-bold mb-6 after:flex-1 after:h-px after:bg-gradient-to-r after:from-gold/25 after:to-transparent">
              Types d&apos;espaces
            </p>
            <div className="flex flex-col gap-2.5 mb-10">
              {TYPES.map((t) => (
                <div key={t} className="flex items-center gap-3 font-sans text-[14px] text-[#0F1923] px-[18px] py-3 rounded-lg bg-[#F7F9FB] border border-gold/15 hover:border-gold hover:bg-gold/5 transition-all duration-300 cursor-default">
                  {t}
                </div>
              ))}
            </div>
            <p className="flex items-center gap-3 font-sans text-[9px] tracking-[0.35em] uppercase text-gold font-bold mb-5 after:flex-1 after:h-px after:bg-gradient-to-r after:from-gold/25 after:to-transparent">
              Localisation premium
            </p>
            <div className="inline-flex flex-col gap-1 px-[18px] py-3 rounded-lg bg-[#F7F9FB] border border-gold/15">
              <strong className="font-sans text-[13px] font-semibold text-[#0F1923]">Casablanca</strong>
              <span className="font-sans text-[11px] text-neutral-500 font-light">Anfa · Bd d&apos;Anfa · Bd Rachidi</span>
            </div>
          </div>

          {/* Right — feature lines */}
          <div>
            <p className="flex items-center gap-3 font-sans text-[9px] tracking-[0.35em] uppercase text-gold font-bold mb-6 after:flex-1 after:h-px after:bg-gradient-to-r after:from-gold/25 after:to-transparent">
              Équipements &amp; Services
            </p>
            <div className="flex flex-col">
              {FEATURES.map((feat) => (
                <div key={feat.name} className="group flex items-start gap-4 py-4 border-b border-gold/8 last:border-b-0 hover:pl-1.5 transition-all duration-300">
                  <div className="w-9 h-9 rounded-lg bg-gold/7 border border-gold/14 flex items-center justify-center flex-shrink-0 text-gold group-hover:bg-gold group-hover:text-white group-hover:border-gold transition-all duration-300">
                    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-sans text-[12px] font-semibold text-[#0F1923] mb-0.5 tracking-[0.04em]">{feat.name}</p>
                    <p className="font-sans text-[13px] text-neutral-500 font-light leading-[1.5]">{feat.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Meta strip */}
        <div className="flex items-center flex-wrap gap-8 px-[clamp(24px,8vw,80px)] py-5 bg-gold/4 border-t border-gold/10">
          <div className="flex flex-col gap-1">
            <span className="font-sans text-[8px] tracking-[0.32em] uppercase text-neutral-400">Surfaces</span>
            <span className="font-sans text-[13px] text-[#0F1923]">150 m² à 3 000 m²</span>
          </div>
          <div className="w-px h-8 bg-gold/15" />
          <div className="flex flex-col gap-1">
            <span className="font-sans text-[8px] tracking-[0.32em] uppercase text-neutral-400">Profil occupant</span>
            <span className="font-sans text-[13px] text-[#0F1923]">Cabinets conseil · Banques &amp; Assurances · Multinationales · Sièges régionaux</span>
          </div>
        </div>
      </div>
    </section>
  )
}
