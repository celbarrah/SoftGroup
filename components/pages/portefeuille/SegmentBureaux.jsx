"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import SegmentSlider from "./SegmentSlider"

const SLIDES = [
  "https://res.cloudinary.com/dofyrwzop/image/upload/q_auto,f_auto/v1778504245/bureaux_et_centre_d_affaires_yoldrb.png",
  "https://res.cloudinary.com/dofyrwzop/image/upload/q_auto,f_auto/v1778504245/bureaux_et_centre_d_affaires_yoldrb.png",
  "https://res.cloudinary.com/dofyrwzop/image/upload/q_auto,f_auto/v1778504245/bureaux_et_centre_d_affaires_yoldrb.png",
]

const TYPES = [
  { label: "Villas professionnelles" },
  { label: "Immeubles de bureaux indépendants" },
  { label: "Immeubles de bureaux multi-occupants", active: true },
  { label: "Centre d'affaires" },
  { label: "Plateaux de bureaux aménageables" },
  { label: "Espaces de bureaux open space" },
]

const FEATURES = [
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" width="18" height="18"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>,
    name: "Modularité",
    desc: "Plateaux modulables de 100 à 1 200 m²",
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" width="18" height="18"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>,
    name: "Finitions & Confort",
    desc: "Premium · Isolation thermique & acoustique · Double vitrage",
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" width="18" height="18"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>,
    name: "Énergie intelligente",
    desc: "GTC · LED basse consommation · Climatisation PAC réversible",
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" width="18" height="18"><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/></svg>,
    name: "Connectivité",
    desc: "Fibre optique · Pré-câblage IT complet · Infrastructure réseau",
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" width="18" height="18"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
    name: "Sécurité",
    desc: "24h/24 · Vidéosurveillance · Contrôle d'accès · Réception dédiée",
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" width="18" height="18"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/></svg>,
    name: "Mobilité",
    desc: "Ascenseur haute capacité · Parkings privatifs sécurisés",
  },
]

export default function SegmentBureaux() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-8%" })

  return (
    <section id="bureaux" className="overflow-hidden bg-[#F7F9FB]">

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
              Bureaux &amp; Centres d&apos;Affaires
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.85, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif font-light text-[#0F1923] leading-[0.92] tracking-[-0.025em] mb-7"
            style={{ fontSize: "clamp(52px,7vw,100px)" }}
          >
            Espaces Tertiaires
            <br />
            <em className="italic text-gold">Flexibles et Évolutifs</em>
          </motion.h2>

          <div className="w-[40px] h-px bg-gold/35 mx-auto mb-7" />

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-sans text-[16px] font-light text-[rgba(15,25,35,0.55)] leading-[1.9] max-w-[54ch] mx-auto"
          >
            Au cœur des grands centres d&apos;affaires du Royaume, s&apos;élèvent des espaces conçus pour
            les ambitions les plus élevées. Architecture contemporaine, emplacements stratégiques
            et prestations haut de gamme s&apos;unissent pour donner vie à la performance.
          </motion.p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      </div>

      {/* ACT 2 — Slider */}
      <SegmentSlider slides={SLIDES} badge="Espaces Certifiés" />

      {/* ACT 3 — 2-col layout */}
      <div className="bg-white">
        <div className="px-[clamp(20px,5vw,80px)] py-[72px]">
          <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[72px] items-start">

            {/* Left: type pills + localisations */}
            <div>
              <p className="font-sans text-[9px] tracking-[0.35em] uppercase font-bold text-gold mb-5">
                Types d&apos;espaces
              </p>
              <div className="flex flex-col gap-[10px] mb-9">
                {TYPES.map((t) => (
                  <div
                    key={t.label}
                    className={[
                      "flex items-center gap-3 font-sans text-[13px] tracking-[0.04em] px-[18px] py-3 rounded-lg border transition-colors",
                      t.active
                        ? "bg-gold/10 border-gold/40 text-[#0F1923] font-medium"
                        : "border-[rgba(196,165,90,0.18)] text-[rgba(15,25,35,0.6)]",
                    ].join(" ")}
                  >
                    {t.label}
                  </div>
                ))}
              </div>
              <p className="font-sans text-[9px] tracking-[0.35em] uppercase font-bold text-gold mb-5">
                Localisations premium
              </p>
              <div className="inline-flex flex-col gap-1 border border-[rgba(196,165,90,0.2)] rounded-xl px-4 py-3">
                <strong className="font-sans text-[13px] font-semibold text-[#0F1923]">Casablanca</strong>
                <span className="font-sans text-[12px] font-light text-[rgba(15,25,35,0.5)]">Anfa · Bd d&apos;Anfa · Bd Rachidi</span>
              </div>
            </div>

            {/* Right: feature lines */}
            <div>
              <p className="font-sans text-[9px] tracking-[0.35em] uppercase font-bold text-gold mb-5">
                Équipements &amp; Services
              </p>
              <div className="flex flex-col">
                {FEATURES.map((f, i) => (
                  <div key={i} className="flex items-start gap-4 py-5 border-b border-[rgba(196,165,90,0.1)] last:border-0">
                    <div className="w-10 h-10 shrink-0 rounded-xl border border-[rgba(196,165,90,0.2)] flex items-center justify-center text-gold">
                      {f.icon}
                    </div>
                    <div>
                      <p className="font-sans text-[14px] font-semibold text-[#0F1923] mb-1">{f.name}</p>
                      <p className="font-sans text-[13px] font-light text-[rgba(15,25,35,0.55)] leading-[1.6]">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Meta strip */}
        <div className="bg-[rgba(196,165,90,0.04)] border-t border-[rgba(196,165,90,0.1)] px-[clamp(20px,5vw,80px)] py-8 flex flex-wrap items-center gap-8">
          <div className="flex flex-col gap-1">
            <span className="font-sans text-[9.5px] tracking-[0.2em] uppercase text-[rgba(15,25,35,0.4)] font-medium">Surfaces</span>
            <span className="font-sans text-[13.5px] font-light text-[#0F1923]">150 m² à 3 000 m²</span>
          </div>
          <div className="w-px h-8 bg-[rgba(196,165,90,0.2)]" />
          <div className="flex flex-col gap-1">
            <span className="font-sans text-[9.5px] tracking-[0.2em] uppercase text-[rgba(15,25,35,0.4)] font-medium">Profil occupant</span>
            <span className="font-sans text-[13.5px] font-light text-[#0F1923]">Cabinets conseil · Banques &amp; Assurances · Multinationales · Sièges régionaux</span>
          </div>
        </div>
      </div>

    </section>
  )
}
