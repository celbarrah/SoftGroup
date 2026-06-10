"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import SegmentSlider from "./SegmentSlider"

const SLIDES = [
  "https://res.cloudinary.com/dofyrwzop/image/upload/q_auto/f_auto/v1781087177/1_i1pvif.jpg",
  "https://res.cloudinary.com/dofyrwzop/image/upload/q_auto/f_auto/v1781087180/2_2_t5w7k3.png",
  "https://res.cloudinary.com/dofyrwzop/image/upload/q_auto/f_auto/v1781087170/3_ko58kr.jpg",
  "https://res.cloudinary.com/dofyrwzop/image/upload/q_auto/f_auto/v1781087177/4_1_tovi1o.png",
  "https://res.cloudinary.com/dofyrwzop/image/upload/q_auto/f_auto/v1781087175/5_1_gnybct.png",
  "https://res.cloudinary.com/dofyrwzop/image/upload/q_auto/f_auto/v1781087166/6_1_rq1lv7.png",
  "https://res.cloudinary.com/dofyrwzop/image/upload/q_auto/f_auto/v1781087149/7_yhirpc.jpg",
  "https://res.cloudinary.com/dofyrwzop/image/upload/q_auto/f_auto/v1781087153/8_1_cesy4t.png"
]

const TYPES = [
  { label: "Résidence fermée de villas",        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="14" height="14"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg> },
  { label: "Villas individuelles de prestige", active: true, icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="14" height="14"><path d="M5 12H3l9-9 9 9h-2v8a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V12z"/></svg> },
  { label: "Résidences d'appartements de luxe", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="14" height="14"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg> },
]

const PRESTATIONS = [
  {
    gold: false,
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="20" height="20"><path d="M5 12H3l9-9 9 9h-2v8a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V12z"/><path d="M9 22V12h6v10"/></svg>,
    name: "Luxe & Confort absolu",
    text: "Finitions premium, climatisation & chauffage central dans chaque espace.",
  },
  {
    gold: false,
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="20" height="20"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
    name: "Sérénité Totale",
    text: "Sécurité 24h/24 avec gardiennage et parkings privés sécurisés.",
  },
  {
    gold: true,
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="20" height="20"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>,
    name: "Évasion Privée",
    text: "Jardins paysagers, piscines individuelles et rooftops exclusifs.",
  },
  {
    gold: false,
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="20" height="20"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>,
    name: "Sanctuaire Wellness",
    text: "Spa · Hammam · Sauna · Jacuzzi · Fitness club.",
  },
  {
    gold: false,
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="20" height="20"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>,
    name: "Business & Services",
    text: "Centres d'affaires intégrés et services de maintenance dédiés.",
  },
]

function A3Label({ children }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <span className="font-sans text-[9px] tracking-[0.35em] uppercase font-bold text-gold whitespace-nowrap">{children}</span>
      <div className="flex-1 h-px bg-gradient-to-r from-[rgba(196,165,90,0.25)] to-transparent" />
    </div>
  )
}

export default function SegmentResidentiel() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-8%" })

  return (
    <section id="residentiel" className="overflow-hidden bg-[#F5F2EC]">

      {/* ACT 1 */}
      <div className="relative py-[100px] px-[clamp(20px,5vw,80px)] bg-[#F5F2EC] text-center overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/22 to-transparent" />
        <div ref={ref} className="relative z-10">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="flex items-center justify-center gap-3 mb-3">
            <span className="block w-[22px] h-px bg-gold/55 shrink-0" />
            <span className="font-sans text-[9.5px] tracking-[0.32em] uppercase text-gold font-bold">Résidentiel de Prestige</span>
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.85, delay: 0.1, ease: [0.22, 1, 0.36, 1] }} className="font-serif font-light text-[#0F1923] leading-[0.92] tracking-[-0.025em] mb-7" style={{ fontSize: "clamp(52px,7vw,100px)" }}>
            L&apos;Exclusivité<br /><em className="italic text-gold">pour Seul Standard</em>
          </motion.h2>
          <div className="w-[40px] h-px bg-gold/35 mx-auto mb-7" />
          <motion.p initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.2 }} className="font-sans text-[16px] font-light text-[rgba(15,25,35,0.55)] leading-[1.9] max-w-[54ch] mx-auto">
            Au cœur des quartiers les plus exclusifs, se déploient des résidences dédiées à un art de vivre d&apos;exception. Architecture contemporaine, finitions haut de gamme et perfection du détail créent des lieux où élégance et confort s&apos;équilibrent à la perfection.
          </motion.p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/22 to-transparent" />
      </div>

      {/* ACT 2 */}
      <SegmentSlider slides={SLIDES} badge="L'Exclusivité pour Seul Standard" />

      {/* ACT 3 */}
      <div className="bg-[#F5F2EC]">
        <div className="px-[clamp(20px,5vw,80px)] py-[60px]">
          <div className="max-w-[1400px] mx-auto">

            <A3Label>Types de biens</A3Label>
            <div className="flex flex-wrap gap-[10px] mb-12">
              {TYPES.map((t) => (
                <span key={t.label} className={["inline-flex items-center gap-[7px] font-sans text-[12.5px] px-[18px] py-[10px] rounded-[24px] border transition-all duration-300 cursor-default", t.active ? "bg-[rgba(196,165,90,0.08)] border-gold text-[#0F1923] font-semibold" : "bg-white border-[rgba(196,165,90,0.18)] text-[#0F1923] hover:bg-gold hover:text-noir hover:border-gold"].join(" ")}>
                  <span className="opacity-60">{t.icon}</span>
                  {t.label}
                </span>
              ))}
            </div>

            <A3Label>Prestations exclusives</A3Label>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {PRESTATIONS.map((p, i) => (
                <div key={i} className={["group relative overflow-hidden rounded-[10px] p-[28px_24px] border cursor-default transition-all duration-[350ms] hover:-translate-y-[2px] hover:shadow-[0_12px_40px_rgba(196,165,90,0.10)]", p.gold ? "bg-[rgba(196,165,90,0.08)] border-gold/40 hover:border-gold" : "bg-white/70 border-[rgba(196,165,90,0.12)] hover:border-[rgba(196,165,90,0.3)]"].join(" ")}>
                  <div className="absolute bottom-0 left-0 h-[2px] bg-gold w-0 group-hover:w-full transition-all duration-[400ms]" />
                  <div className={["w-11 h-11 rounded-[10px] flex items-center justify-center mb-[18px] transition-all duration-[350ms]", p.gold ? "bg-gold border border-gold text-white" : "bg-[rgba(196,165,90,0.07)] border border-[rgba(196,165,90,0.14)] text-gold group-hover:bg-gold group-hover:border-gold group-hover:text-white"].join(" ")}>
                    {p.icon}
                  </div>
                  <p className="font-sans text-[10px] tracking-[0.2em] uppercase font-bold text-[#0F1923] mb-2">{p.name}</p>
                  <p className="font-sans text-[13px] font-light text-[rgba(15,25,35,0.55)] leading-[1.65]">{p.text}</p>
                </div>
              ))}
            </div>

          </div>
        </div>

        <div className="bg-[rgba(196,165,90,0.04)] border-t border-[rgba(196,165,90,0.1)] px-[clamp(20px,5vw,80px)] py-5 flex flex-wrap items-center gap-8">
          <div className="flex flex-col gap-1"><span className="font-sans text-[8px] tracking-[0.32em] uppercase text-[rgba(15,25,35,0.32)]">Localisations</span><span className="font-sans text-[13px] text-[#0F1923]">Casablanca : Anfa Supérieur · Aïn Diab · CFC · Bd d&apos;Anfa</span></div>
          <div className="w-px h-8 bg-[rgba(196,165,90,0.15)]" />
          <div className="flex flex-col gap-1"><span className="font-sans text-[8px] tracking-[0.32em] uppercase text-[rgba(15,25,35,0.32)]">Profil occupant</span><span className="font-sans text-[13px] italic text-[#0F1923]">Multinationales · Expatriés · Diplomates et Grands Corps d&apos;État</span></div>
        </div>
      </div>

    </section>
  )
}
