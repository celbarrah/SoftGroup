"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import SegmentSlider from "./SegmentSlider"

const SLIDES = [
  "https://res.cloudinary.com/dofyrwzop/image/upload/q_auto/f_auto/v1781087946/1_1_qls0tq.jpg",
  "https://res.cloudinary.com/dofyrwzop/image/upload/q_auto/f_auto/v1781087930/2_lgrerr.jpg",
  "https://res.cloudinary.com/dofyrwzop/image/upload/q_auto/f_auto/v1781087942/3_1_mymwzx.jpg",
  "https://res.cloudinary.com/dofyrwzop/image/upload/q_auto/f_auto/v1781087912/4_3_qcgu5x.png",
]

const TYPES = [
  {
    label: "Boutiques & Espaces Retail",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" width="16" height="16"><path d="M3 9l1-6h16l1 6"/><path d="M3 9a2 2 0 0 0 4 0 2 2 0 0 0 4 0 2 2 0 0 0 4 0 2 2 0 0 0 4 0"/><path d="M5 9v11a1 1 0 0 0 1 1h4v-5h4v5h4a1 1 0 0 0 1-1V9"/></svg>,
  },
  {
    label: "Magasins Commerciaux",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" width="16" height="16"><path d="M1 6v16l7-4 8 4 7-4V2l-7 4-8-4-7 4z"/></svg>,
  },
  {
    label: "Showrooms Professionnels",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" width="16" height="16"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>,
  },
  {
    label: "Centres Commerciaux",
    active: true,
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" width="16" height="16"><path d="M3 9l1-6h16l1 6"/><path d="M5 9v11a1 1 0 0 0 1 1h4v-5h4v5h4a1 1 0 0 0 1-1V9"/></svg>,
  },
  {
    label: "Flagship Stores",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" width="16" height="16"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>,
  },
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

function A3Label({ children }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <span className="font-sans text-[9px] tracking-[0.35em] uppercase font-bold text-gold whitespace-nowrap">{children}</span>
      <span className="flex-1 h-px bg-gradient-to-r from-[rgba(196,165,90,0.25)] to-transparent" />
    </div>
  )
}

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
            <span className="font-sans text-[9.5px] tracking-[0.32em] uppercase text-gold font-bold">Commercial</span>
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

      {/* ACT 3 */}
      <div className="bg-[#F7F9FB]">
        <div className="px-[clamp(20px,5vw,80px)] py-[72px]">
          <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[72px] items-start">

            {/* Left: type list + localisation */}
            <div>
              <A3Label>Types d&apos;espaces</A3Label>
              <div className="flex flex-col gap-[9px] mb-10">
                {TYPES.map((t) => (
                  <div
                    key={t.label}
                    className={[
                      "flex items-center gap-3 font-sans text-[13px] px-[18px] py-3 rounded-lg border transition-all duration-300 cursor-default",
                      t.active
                        ? "bg-[rgba(196,165,90,0.08)] border-gold text-[#0F1923] font-semibold"
                        : "border-[rgba(196,165,90,0.18)] text-[rgba(15,25,35,0.65)] hover:border-gold/40 hover:bg-[rgba(196,165,90,0.03)]",
                    ].join(" ")}
                  >
                    <span className={t.active ? "text-gold" : "text-gold/60 transition-colors duration-300 group-hover:text-gold"}>{t.icon}</span>
                    {t.label}
                  </div>
                ))}
              </div>

              <A3Label>Localisations</A3Label>
              <div className="inline-flex flex-col gap-1 border border-[rgba(196,165,90,0.2)] rounded-xl px-5 py-3 transition-all duration-300 hover:border-gold hover:bg-[rgba(196,165,90,0.03)] cursor-default">
                <strong className="font-sans text-[13px] font-semibold text-[#0F1923]">Casablanca</strong>
                <span className="font-sans text-[12px] font-light text-[rgba(15,25,35,0.5)]">Bd d&apos;Anfa · Tit Melil · Bd Rachidi</span>
              </div>
            </div>

            {/* Right: feature lines */}
            <div>
              <A3Label>Caractéristiques</A3Label>
              <div className="flex flex-col">
                {FEATURES.map((f, i) => (
                  <div key={i} className="group/fl flex items-start gap-4 py-4 border-b border-[rgba(196,165,90,0.08)] last:border-0 transition-all duration-300 hover:pl-[6px]">
                    <div className="w-9 h-9 shrink-0 rounded-lg bg-[rgba(196,165,90,0.07)] border border-[rgba(196,165,90,0.14)] flex items-center justify-center text-gold transition-all duration-300 group-hover/fl:bg-gold group-hover/fl:text-white group-hover/fl:border-gold">
                      {f.icon}
                    </div>
                    <div>
                      <p className="font-sans text-[13px] font-semibold text-[#0F1923] mb-[2px]">{f.name}</p>
                      <p className="font-sans text-[12.5px] font-light text-[rgba(15,25,35,0.55)] leading-[1.6]">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Meta strip */}
        <div className="bg-[rgba(196,165,90,0.04)] border-t border-[rgba(196,165,90,0.1)] px-[clamp(20px,5vw,80px)] py-5 flex flex-wrap items-center gap-8">
          <div className="flex flex-col gap-1">
            <span className="font-sans text-[8px] tracking-[0.32em] uppercase text-[rgba(15,25,35,0.32)]">Profil occupant</span>
            <span className="font-sans text-[13px] font-light italic text-[#0F1923]">Enseignes nationales &amp; internationales · Franchises · Retailers spécialisés · Grandes surfaces</span>
          </div>
        </div>
      </div>

    </section>
  )
}
