"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import SegmentImageBlock from "./SegmentImageBlock"

const IMAGES = [
  { src: "https://res.cloudinary.com/dofyrwzop/image/upload/q_auto,f_auto/v1778599233/WhatsApp_Image_2026-05-12_at_09.04.58_3_moneep.jpg", alt: "Résidentiel de Prestige — Softgroup" },
]

const FEATURES = [
  { num: "01", name: "Luxe & Confort absolu",  desc: "Finitions premium, matériaux nobles, climatisation & chauffage central dans chaque espace." },
  { num: "02", name: "Sérénité & Sécurité",   desc: "Gardiennage 24h/24 · Vidéosurveillance · Contrôle d'accès · Parkings privés sécurisés." },
  { num: "03", name: "Évasion Privée",          desc: "Jardins paysagers, piscines individuelles et rooftops exclusifs avec vue panoramique." },
  { num: "04", name: "Sanctuaire Wellness",     desc: "Spa · Hammam · Sauna · Jacuzzi · Fitness club haut de gamme." },
  { num: "05", name: "Business & Services",     desc: "Centres d'affaires intégrés et services de maintenance dédiés à la résidence." },
]

const TYPES = ["Villas de prestige", "Appartements de standing", "Penthouses & Duplex", "Résidences sécurisées"]

export default function SegmentResidentiel() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-6%" })

  return (
    <section id="residentiel-de-prestige" className="overflow-hidden bg-[#F5F2EC]">

      {/* ── ACT 1 — Title ── */}
      <div className="relative text-center py-[100px] px-[clamp(24px,8vw,80px)] bg-[#F5F2EC]">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/22 to-transparent" />
        <motion.div ref={ref} initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.85 }}>
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="w-[22px] h-px bg-gold/55 flex-shrink-0" />
            <span className="font-sans text-[10px] tracking-[0.32em] uppercase text-gold font-bold">Résidentiel de Prestige</span>
          </div>
          <h2 className="font-serif font-light text-[#0F1923] leading-[0.92] tracking-[-0.025em] mb-7" style={{ fontSize: "clamp(48px,7vw,96px)" }}>
            L&apos;Exclusivité
            <br />
            <em className="italic text-gold">pour Seul Standard</em>
          </h2>
          <div className="w-10 h-px bg-gold/35 mx-auto mb-7" />
          <p className="font-sans text-[17px] font-light text-neutral-500 leading-[1.9] max-w-[54ch] mx-auto">
            Au cœur des quartiers les plus exclusifs, se déploient des résidences dédiées à un art de vivre
            d&apos;exception. Architecture contemporaine, finitions haut de gamme et perfection du détail créent
            des lieux où élégance et confort s&apos;équilibrent à la perfection.
          </p>
        </motion.div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/22 to-transparent" />
      </div>

      {/* ── ACT 2 — Full-screen image ── */}
      <motion.div initial={{ opacity: 0, y: 32 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.9, delay: 0.15 }}>
        <SegmentImageBlock images={IMAGES} badge="Résidences d'Exception" />
      </motion.div>

      {/* ── ACT 3 — Staggered feature list ── */}
      <div className="bg-white">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="px-[clamp(24px,8vw,80px)] py-16 max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[72px] items-start"
        >
          {/* Left — staggered features */}
          <div>
            <p className="flex items-center gap-3 font-sans text-[9px] tracking-[0.35em] uppercase text-gold font-bold mb-6 after:flex-1 after:h-px after:bg-gradient-to-r after:from-gold/25 after:to-transparent">
              Prestations &amp; Services
            </p>
            <div className="flex flex-col">
              {FEATURES.map((feat) => (
                <div key={feat.num} className="group flex items-start gap-6 py-5 border-b border-gold/10 last:border-b-0 hover:pl-2 transition-all duration-300 cursor-default">
                  <span className="font-serif text-[28px] font-light text-gold/30 flex-shrink-0 leading-[1] mt-0.5 group-hover:text-gold/60 transition-colors duration-300 min-w-[32px]">
                    {feat.num}
                  </span>
                  <div>
                    <p className="font-sans text-[10px] tracking-[0.2em] uppercase font-bold text-[#0F1923] mb-1.5">{feat.name}</p>
                    <p className="font-sans text-[13px] text-neutral-500 font-light leading-[1.65]">{feat.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — types + info */}
          <div>
            <p className="flex items-center gap-3 font-sans text-[9px] tracking-[0.35em] uppercase text-gold font-bold mb-6 after:flex-1 after:h-px after:bg-gradient-to-r after:from-gold/25 after:to-transparent">
              Types de biens
            </p>
            <div className="grid grid-cols-2 gap-3 mb-10">
              {TYPES.map((t) => (
                <div key={t} className="flex flex-col gap-1 p-5 rounded-lg bg-[#F5F2EC] border border-gold/15 hover:border-gold/40 transition-all duration-300 cursor-default">
                  <span className="font-sans text-[13px] font-semibold text-[#0F1923]">{t}</span>
                </div>
              ))}
            </div>
            <p className="flex items-center gap-3 font-sans text-[9px] tracking-[0.35em] uppercase text-gold font-bold mb-5 after:flex-1 after:h-px after:bg-gradient-to-r after:from-gold/25 after:to-transparent">
              Localisations
            </p>
            <div className="flex flex-col gap-2">
              {[
                { city: "Casablanca", zones: "Anfa · CIL · Racine" },
                { city: "Marrakech",  zones: "Guéliz · Hivernage" },
              ].map((loc) => (
                <div key={loc.city} className="flex flex-col gap-0.5 px-[18px] py-3 rounded-lg bg-[#F5F2EC] border border-gold/15">
                  <strong className="font-sans text-[13px] font-semibold text-[#0F1923]">{loc.city}</strong>
                  <span className="font-sans text-[11px] text-neutral-500 font-light">{loc.zones}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Meta strip */}
        <div className="flex items-center flex-wrap gap-8 px-[clamp(24px,8vw,80px)] py-5 bg-gold/4 border-t border-gold/10">
          <div className="flex flex-col gap-1">
            <span className="font-sans text-[8px] tracking-[0.32em] uppercase text-neutral-400">Surfaces</span>
            <span className="font-sans text-[13px] text-[#0F1923]">80 m² à 600 m²+</span>
          </div>
          <div className="w-px h-8 bg-gold/15" />
          <div className="flex flex-col gap-1">
            <span className="font-sans text-[8px] tracking-[0.32em] uppercase text-neutral-400">Profil occupant</span>
            <span className="font-sans text-[13px] text-[#0F1923]">Particuliers · Familles · Expatriés · Investisseurs</span>
          </div>
          <div className="w-px h-8 bg-gold/15" />
          <div className="flex flex-col gap-1">
            <span className="font-sans text-[8px] tracking-[0.32em] uppercase text-neutral-400">Standing</span>
            <span className="font-sans text-[13px] text-[#0F1923]">Prestige · Luxe</span>
          </div>
        </div>
      </div>
    </section>
  )
}
