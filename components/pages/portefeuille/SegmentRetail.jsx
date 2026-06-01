"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import SegmentSlider from "./SegmentSlider"

const SLIDES = [
  "https://res.cloudinary.com/dofyrwzop/image/upload/q_auto,f_auto/v1778504226/retail_et_commerce_fuezst.png",
  "https://res.cloudinary.com/dofyrwzop/image/upload/q_auto,f_auto/v1778504226/retail_et_commerce_fuezst.png",
  "https://res.cloudinary.com/dofyrwzop/image/upload/q_auto,f_auto/v1778504226/retail_et_commerce_fuezst.png",
]

const TYPES = [
  { label: "Boutiques & Espaces Retail" },
  { label: "Magasins Commerciaux" },
  { label: "Showrooms Professionnels" },
  { label: "Centres Commerciaux", active: true },
  { label: "Flagship Stores" },
]

const FEATURES = [
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" width="18" height="18"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>,
    name: "Surfaces",
    desc: "De 50 m² à plusieurs milliers de m²",
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" width="18" height="18"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>,
    name: "Visibilité maximale",
    desc: "Vitrines et façades à haute visibilité sur axes stratégiques",
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" width="18" height="18"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>,
    name: "Accès facilité",
    desc: "Parkings clients intégrés, accessibilité maximale",
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" width="18" height="18"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>,
    name: "Modularité",
    desc: "Espaces modulables selon votre concept commercial",
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" width="18" height="18"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>,
    name: "Infrastructure complète",
    desc: "Électricité, plomberie, climatisation — tout est prêt",
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" width="18" height="18"><circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/></svg>,
    name: "Trafic qualifié",
    desc: "Environnement commercial attractif et trafic qualifié",
  },
]

export default function SegmentRetail() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-8%" })

  return (
    <section id="retail" className="overflow-hidden bg-white">

      {/* ACT 1 — Title panel */}
      <div className="relative py-[100px] px-[clamp(20px,5vw,80px)] bg-white text-center overflow-hidden">
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
              Retail &amp; Commerce
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.85, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif font-light text-[#0F1923] leading-[0.92] tracking-[-0.025em] mb-7"
            style={{ fontSize: "clamp(52px,7vw,100px)" }}
          >
            L&apos;Emplacement
            <br />
            <em className="italic text-gold">qui fait la Différence</em>
          </motion.h2>

          <div className="w-[40px] h-px bg-gold/35 mx-auto mb-7" />

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-sans text-[16px] font-light text-[rgba(15,25,35,0.55)] leading-[1.9] max-w-[54ch] mx-auto"
          >
            Au cœur des zones de premier plan, s&apos;implantent des espaces retail configurés pour maximiser
            votre attractivité. Des adresses premium offrant un flux clients continu et une visibilité absolue.
          </motion.p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      </div>

      {/* ACT 2 — Slider */}
      <SegmentSlider slides={SLIDES} badge="L'Emplacement qui fait la Différence" />

      {/* ACT 3 — 2-col layout */}
      <div className="bg-[#F7F9FB]">
        <div className="px-[clamp(20px,5vw,80px)] py-[72px]">
          <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[72px] items-start">

            {/* Left: type pills + localisation */}
            <div>
              <p className="font-sans text-[9px] tracking-[0.35em] uppercase font-bold text-gold mb-5">
                Types d&apos;espaces
              </p>
              <div className="flex flex-col gap-[9px] mb-9">
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
                Localisations
              </p>
              <div className="inline-flex flex-col gap-1 border border-[rgba(196,165,90,0.2)] rounded-xl px-4 py-3">
                <strong className="font-sans text-[13px] font-semibold text-[#0F1923]">Casablanca</strong>
                <span className="font-sans text-[12px] font-light text-[rgba(15,25,35,0.5)]">Bd d&apos;Anfa · Tit Melil · Bd Rachidi</span>
              </div>
            </div>

            {/* Right: feature lines */}
            <div>
              <p className="font-sans text-[9px] tracking-[0.35em] uppercase font-bold text-gold mb-5">
                Caractéristiques
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
            <span className="font-sans text-[9.5px] tracking-[0.2em] uppercase text-[rgba(15,25,35,0.4)] font-medium">Profil occupant</span>
            <span className="font-sans text-[13.5px] font-light italic text-[#0F1923]">Enseignes nationales &amp; internationales · Franchises · Retailers spécialisés · Grandes surfaces</span>
          </div>
        </div>
      </div>

    </section>
  )
}
