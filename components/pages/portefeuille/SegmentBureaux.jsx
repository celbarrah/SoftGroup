"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import SegmentSlider from "./SegmentSlider"

const SLIDES = [
  "https://res.cloudinary.com/dofyrwzop/image/upload/q_auto/f_auto/v1781087493/1_1_rylmxs.png",
  "https://res.cloudinary.com/dofyrwzop/image/upload/q_auto/f_auto/v1781087491/2_3_rqpyqh.png",
  "https://res.cloudinary.com/dofyrwzop/image/upload/q_auto/f_auto/v1781087489/3_1_o93x6l.png",
  "https://res.cloudinary.com/dofyrwzop/image/upload/q_auto/f_auto/v1781087485/4_2_xmdrrb.png",
  "https://res.cloudinary.com/dofyrwzop/image/upload/q_auto/f_auto/v1781087481/5_2_tvzoqj.png",
  "https://res.cloudinary.com/dofyrwzop/image/upload/q_auto/f_auto/v1781087468/6_2_xqpgx8.png",
  "https://res.cloudinary.com/dofyrwzop/image/upload/q_auto/f_auto/v1781087461/7_1_ls5tnn.png",
  "https://res.cloudinary.com/dofyrwzop/image/upload/q_auto/f_auto/v1781087458/8_2_ixopd9.png",
]

const TYPES = [
  { label: "Villas professionnelles",                    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="16" height="16"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg> },
  { label: "Immeubles de bureaux indépendants",          icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="16" height="16"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg> },
  { label: "Immeubles de bureaux multi-occupants", active: true, icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="16" height="16"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg> },
  { label: "Centre d'affaires",                         icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="16" height="16"><rect x="2" y="3" width="20" height="14" rx="2"/></svg> },
  { label: "Plateaux de bureaux aménageables",          icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="16" height="16"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg> },
  { label: "Espaces de bureaux open space",             icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="16" height="16"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/></svg> },
]

const FEATURES = [
  { name: "Modularité",          desc: "Plateaux modulables de 100 à 1 200 m²",                                          icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="16" height="16"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg> },
  { name: "Finitions & Confort", desc: "Premium · Isolation thermique & acoustique · Double vitrage",                    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="16" height="16"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg> },
  { name: "Énergie intelligente", desc: "GTC · LED basse consommation · Climatisation PAC réversible",                  icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="16" height="16"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg> },
  { name: "Connectivité",        desc: "Fibre optique · Pré-câblage IT complet · Infrastructure réseau",                icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="16" height="16"><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/></svg> },
  { name: "Sécurité",            desc: "24h/24 · Vidéosurveillance · Contrôle d'accès · Réception dédiée",             icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="16" height="16"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg> },
  { name: "Mobilité",            desc: "Ascenseur haute capacité · Parkings privatifs sécurisés",                       icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="16" height="16"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/></svg> },
]

function A3Label({ children }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <span className="font-sans text-[9px] tracking-[0.35em] uppercase font-bold text-gold whitespace-nowrap">{children}</span>
      <div className="flex-1 h-px bg-gradient-to-r from-[rgba(196,165,90,0.25)] to-transparent" />
    </div>
  )
}

export default function SegmentBureaux() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-8%" })

  return (
    <section id="bureaux" className="overflow-hidden bg-[#F7F9FB]">

      {/* ACT 1 */}
      <div className="relative py-[100px] px-[clamp(20px,5vw,80px)] bg-[#F7F9FB] text-center overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/22 to-transparent" />
        <div ref={ref} className="relative z-10">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="flex items-center justify-center gap-3 mb-3">
            <span className="block w-[22px] h-px bg-gold/55 shrink-0" />
            <span className="font-sans text-[9.5px] tracking-[0.32em] uppercase text-gold font-bold">Bureaux &amp; Centres d&apos;Affaires</span>
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.85, delay: 0.1, ease: [0.22, 1, 0.36, 1] }} className="font-serif font-light text-[#0F1923] leading-[0.92] tracking-[-0.025em] mb-7" style={{ fontSize: "clamp(52px,7vw,100px)" }}>
            Espaces Tertiaires<br /><em className="italic text-gold">Flexibles et Évolutifs</em>
          </motion.h2>
          <div className="w-[40px] h-px bg-gold/35 mx-auto mb-7" />
          <motion.p initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.2 }} className="font-sans text-[16px] font-light text-[rgba(15,25,35,0.55)] leading-[1.9] max-w-[54ch] mx-auto">
            Au cœur des grands centres d&apos;affaires du Royaume, s&apos;élèvent des espaces conçus pour les ambitions les plus élevées. Architecture contemporaine, emplacements stratégiques et prestations haut de gamme s&apos;unissent pour donner vie à la performance.
          </motion.p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/22 to-transparent" />
      </div>

      {/* ACT 2 */}
      <SegmentSlider slides={SLIDES} badge="Espaces Certifiés" />

      {/* ACT 3 */}
      <div className="bg-white">
        <div className="px-[clamp(20px,5vw,80px)] py-[60px]">
          <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[72px] items-start">

            {/* Left */}
            <div>
              <A3Label>Types d&apos;espaces</A3Label>
              <div className="flex flex-col gap-[10px] mb-10">
                {TYPES.map((t) => (
                  <div key={t.label} className={["flex items-center gap-3 font-sans text-[13px] px-[18px] py-3 rounded-lg border transition-all duration-300 cursor-default", t.active ? "bg-[rgba(196,165,90,0.08)] border-gold text-[#0F1923] font-semibold" : "border-[rgba(196,165,90,0.18)] text-[rgba(15,25,35,0.65)] hover:border-gold/40 hover:bg-[rgba(196,165,90,0.03)]"].join(" ")}>
                    <span className={t.active ? "text-gold" : "text-gold/60"}>{t.icon}</span>
                    {t.label}
                  </div>
                ))}
              </div>
              <A3Label>Localisations premium</A3Label>
              <div className="inline-flex flex-col gap-[3px] bg-white border border-[rgba(196,165,90,0.15)] rounded-lg px-[18px] py-3 transition-all duration-300 cursor-default hover:border-gold hover:bg-[rgba(196,165,90,0.03)]">
                <strong className="font-sans text-[12.5px] font-semibold text-[#0F1923]">Casablanca</strong>
                <span className="font-sans text-[11px] font-light text-[rgba(15,25,35,0.55)]">Anfa · Bd d&apos;Anfa · Bd Rachidi</span>
              </div>
            </div>

            {/* Right */}
            <div>
              <A3Label>Équipements &amp; Services</A3Label>
              <div className="flex flex-col">
                {FEATURES.map((f, i) => (
                  <div key={i} className="group/fl flex items-start gap-4 py-4 border-b border-[rgba(196,165,90,0.08)] last:border-0 transition-all duration-300 hover:pl-[6px]">
                    <div className="w-9 h-9 shrink-0 rounded-lg bg-[rgba(196,165,90,0.07)] border border-[rgba(196,165,90,0.14)] flex items-center justify-center text-gold transition-all duration-300 group-hover/fl:bg-gold group-hover/fl:text-white group-hover/fl:border-gold">
                      {f.icon}
                    </div>
                    <div>
                      <p className="font-sans text-[12px] font-semibold tracking-[0.04em] text-[#0F1923] mb-[3px]">{f.name}</p>
                      <p className="font-sans text-[12.5px] font-light text-[rgba(15,25,35,0.55)] leading-[1.5]">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        <div className="bg-[rgba(196,165,90,0.04)] border-t border-[rgba(196,165,90,0.1)] px-[clamp(20px,5vw,80px)] py-5 flex flex-wrap items-center gap-8">
          <div className="flex flex-col gap-1"><span className="font-sans text-[8px] tracking-[0.32em] uppercase text-[rgba(15,25,35,0.32)]">Surfaces</span><span className="font-sans text-[13px] text-[#0F1923]">150 m² à 3 000 m²</span></div>
          <div className="w-px h-8 bg-[rgba(196,165,90,0.15)]" />
          <div className="flex flex-col gap-1"><span className="font-sans text-[8px] tracking-[0.32em] uppercase text-[rgba(15,25,35,0.32)]">Profil occupant</span><span className="font-sans text-[13px] text-[#0F1923]">Cabinets conseil · Banques &amp; Assurances · Multinationales · Sièges régionaux</span></div>
        </div>
      </div>

    </section>
  )
}
