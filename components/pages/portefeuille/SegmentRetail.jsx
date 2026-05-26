"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import SegmentImageBlock from "./SegmentImageBlock"

const IMAGES = [
  { src: "https://res.cloudinary.com/dofyrwzop/image/upload/q_auto,f_auto/v1778504226/retail_et_commerce_fuezst.png", alt: "Retail & Commerce — Softgroup" },
]

const TYPES = [
  "Boutiques & Espaces Retail",
  "Magasins Commerciaux",
  "Espaces de Grande Distribution",
  "Showrooms & Espaces d'Exposition",
  "Food Court & Restauration",
]

const SPECS = [
  { name: "Visibilité",      desc: "Vitrines et façades à haute visibilité, positionnement stratégique en zone de flux" },
  { name: "Accessibilité",   desc: "Accès facilité · Parkings clients intégrés · Desserte transport en commun" },
  { name: "Modularité",      desc: "Espaces modulables selon votre concept commercial et vos besoins évolutifs" },
  { name: "Infrastructure",  desc: "Électricité renforcée · Plomberie · Climatisation · Liaisons réseau complètes" },
  { name: "Environnement",   desc: "Cadre commercial attractif, trafic qualifié et clientèle à fort pouvoir d'achat" },
  { name: "Accompagnement",  desc: "Équipe Softgroup dédiée pour l'aménagement et l'exploitation de votre espace" },
]

const LOCATIONS = [
  { city: "Casablanca", zones: "Maarif · Gauthier · Bd Zerktouni" },
  { city: "Marrakech",  zones: "Guéliz · Majorelle" },
  { city: "Agadir",     zones: "Centre-ville · Talborjt" },
]

export default function SegmentRetail() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-6%" })

  return (
    <section id="retail-commerce" className="overflow-hidden bg-white">

      {/* ── ACT 1 — Title ── */}
      <div className="relative text-center py-[100px] px-[clamp(24px,8vw,80px)] bg-white">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/22 to-transparent" />
        <motion.div ref={ref} initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.85 }}>
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="w-[22px] h-px bg-gold/55 flex-shrink-0" />
            <span className="font-sans text-[10px] tracking-[0.32em] uppercase text-gold font-bold">Retail &amp; Commerce</span>
          </div>
          <h2 className="font-serif font-light text-[#0F1923] leading-[0.92] tracking-[-0.025em] mb-7" style={{ fontSize: "clamp(48px,7vw,96px)" }}>
            L&apos;Emplacement
            <br />
            <em className="italic text-gold">qui fait la Différence</em>
          </h2>
          <div className="w-10 h-px bg-gold/35 mx-auto mb-7" />
          <p className="font-sans text-[17px] font-light text-neutral-500 leading-[1.9] max-w-[54ch] mx-auto">
            Au cœur des zones de premier plan, s&apos;implantent des espaces retail configurés pour maximiser
            votre attractivité. Des adresses premium offrant un flux clients continu et une visibilité absolue.
          </p>
        </motion.div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/22 to-transparent" />
      </div>

      {/* ── ACT 2 — Full-screen image ── */}
      <motion.div initial={{ opacity: 0, y: 32 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.9, delay: 0.15 }}>
        <SegmentImageBlock images={IMAGES} badge="L'Emplacement qui fait la Différence" />
      </motion.div>

      {/* ── ACT 3 — 2-col layout ── */}
      <div className="bg-[#F7F9FB]">
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
                <div key={t} className="flex items-center font-sans text-[14px] text-[#0F1923] px-[18px] py-3 rounded-lg bg-white border border-gold/15 hover:border-gold hover:bg-gold/5 transition-all duration-300 cursor-default">
                  {t}
                </div>
              ))}
            </div>
            <p className="flex items-center gap-3 font-sans text-[9px] tracking-[0.35em] uppercase text-gold font-bold mb-5 after:flex-1 after:h-px after:bg-gradient-to-r after:from-gold/25 after:to-transparent">
              Implantations
            </p>
            <div className="flex flex-wrap gap-2.5">
              {LOCATIONS.map((loc) => (
                <div key={loc.city} className="flex flex-col gap-0.5 px-[18px] py-3 rounded-lg bg-white border border-gold/15 hover:border-gold transition-all duration-300 cursor-default min-w-[130px]">
                  <strong className="font-sans text-[13px] font-semibold text-[#0F1923]">{loc.city}</strong>
                  <span className="font-sans text-[11px] text-neutral-500 font-light">{loc.zones}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — spec cards grid */}
          <div>
            <p className="flex items-center gap-3 font-sans text-[9px] tracking-[0.35em] uppercase text-gold font-bold mb-6 after:flex-1 after:h-px after:bg-gradient-to-r after:from-gold/25 after:to-transparent">
              Atouts clés
            </p>
            <div className="grid grid-cols-2 gap-0 border border-gold/12 rounded-lg overflow-hidden">
              {SPECS.map((spec, i) => (
                <div
                  key={spec.name}
                  className={`p-7 bg-white hover:bg-gold/3 transition-colors duration-300 cursor-default
                    ${i % 2 === 0 ? "border-r border-gold/12" : ""}
                    ${i < SPECS.length - 2 ? "border-b border-gold/12" : ""}
                  `}
                >
                  <p className="font-sans text-[10px] tracking-[0.2em] uppercase font-bold text-[#0F1923] mb-2">{spec.name}</p>
                  <p className="font-sans text-[12px] text-neutral-500 font-light leading-[1.6]">{spec.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Meta strip */}
        <div className="flex items-center flex-wrap gap-8 px-[clamp(24px,8vw,80px)] py-5 bg-gold/4 border-t border-gold/10">
          <div className="flex flex-col gap-1">
            <span className="font-sans text-[8px] tracking-[0.32em] uppercase text-neutral-400">Surfaces</span>
            <span className="font-sans text-[13px] text-[#0F1923]">50 m² à plusieurs milliers de m²</span>
          </div>
          <div className="w-px h-8 bg-gold/15" />
          <div className="flex flex-col gap-1">
            <span className="font-sans text-[8px] tracking-[0.32em] uppercase text-neutral-400">Profil occupant</span>
            <span className="font-sans text-[13px] text-[#0F1923]">Enseignes nationales · Marques internationales · Restaurateurs · Franchises</span>
          </div>
        </div>
      </div>
    </section>
  )
}
