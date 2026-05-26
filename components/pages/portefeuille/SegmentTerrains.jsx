"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import SegmentImageBlock from "./SegmentImageBlock"

const IMAGES = [
  { src: "https://res.cloudinary.com/dofyrwzop/image/upload/q_auto,f_auto/v1778504256/terrain_et_developpement_buqi7d.png", alt: "Terrains & Développements — Softgroup" },
]

const FEATURES = [
  { num: "01", name: "Foncier stratégique",     desc: "Réserves foncières positionnées dans les zones économiques les plus dynamiques du Maroc." },
  { num: "02", name: "Zones d'accélération",     desc: "Zones industrielles, zones franches, zones d'accélération industrielle et zones logistiques." },
  { num: "03", name: "Études de faisabilité",    desc: "Analyse complète de la viabilité technique, juridique et financière de votre projet foncier." },
  { num: "04", name: "Accompagnement juridique", desc: "Montage administratif et juridique complet, de la promesse de vente jusqu'au titre foncier." },
  { num: "05", name: "Développement sur mesure", desc: "Build-to-Suit, clé en main, ou développement en partenariat selon votre calendrier." },
]

const PROFILS = ["Investisseurs institutionnels", "Industriels", "Promoteurs immobiliers", "Fonds d'investissement"]

const LOCATIONS = [
  { city: "Casablanca", zones: "Zone industrielle · Lissasfa" },
  { city: "Kénitra",    zones: "Atlantic Free Zone (AFZ)" },
  { city: "Tanger",     zones: "Tanger Med Zone" },
  { city: "Agadir",     zones: "Agadir Haliopôle" },
]

export default function SegmentTerrains() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-6%" })

  return (
    <section id="terrains-developpements" className="overflow-hidden bg-[#F5F2EC]">

      {/* ── ACT 1 — Title ── */}
      <div className="relative text-center py-[100px] px-[clamp(24px,8vw,80px)] bg-[#F5F2EC]">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/22 to-transparent" />
        <motion.div ref={ref} initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.85 }}>
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="w-[22px] h-px bg-gold/55 flex-shrink-0" />
            <span className="font-sans text-[10px] tracking-[0.32em] uppercase text-gold font-bold">Terrains &amp; Développements</span>
          </div>
          <h2 className="font-serif font-light text-[#0F1923] leading-[0.92] tracking-[-0.025em] mb-7" style={{ fontSize: "clamp(48px,7vw,96px)" }}>
            Le Foncier
            <br />
            <em className="italic text-gold">comme Levier de Croissance</em>
          </h2>
          <div className="w-10 h-px bg-gold/35 mx-auto mb-7" />
          <p className="font-sans text-[17px] font-light text-neutral-500 leading-[1.9] max-w-[54ch] mx-auto">
            Grâce à nos réserves foncières stratégiquement positionnées à Casablanca, Tanger, Kénitra et Agadir,
            Softgroup offre un accès privilégié à des terrains industriels, commerciaux et résidentiels,
            accompagné d&apos;un conseil expert de bout en bout.
          </p>
        </motion.div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/22 to-transparent" />
      </div>

      {/* ── ACT 2 — Full-screen image ── */}
      <motion.div initial={{ opacity: 0, y: 32 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.9, delay: 0.15 }}>
        <SegmentImageBlock images={IMAGES} badge="Foncier Stratégique" />
      </motion.div>

      {/* ── ACT 3 — Staggered features + info ── */}
      <div className="bg-white">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="px-[clamp(24px,8vw,80px)] py-16 max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[72px] items-start"
        >
          {/* Left — features */}
          <div>
            <p className="flex items-center gap-3 font-sans text-[9px] tracking-[0.35em] uppercase text-gold font-bold mb-6 after:flex-1 after:h-px after:bg-gradient-to-r after:from-gold/25 after:to-transparent">
              Notre Approche
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

          {/* Right — profils + locations */}
          <div>
            <p className="flex items-center gap-3 font-sans text-[9px] tracking-[0.35em] uppercase text-gold font-bold mb-6 after:flex-1 after:h-px after:bg-gradient-to-r after:from-gold/25 after:to-transparent">
              Profils investisseurs
            </p>
            <div className="flex flex-col gap-2.5 mb-10">
              {PROFILS.map((p) => (
                <div key={p} className="flex items-center font-sans text-[14px] text-[#0F1923] px-[18px] py-3 rounded-lg bg-[#F5F2EC] border border-gold/15 hover:border-gold/40 transition-all duration-300 cursor-default">
                  {p}
                </div>
              ))}
            </div>
            <p className="flex items-center gap-3 font-sans text-[9px] tracking-[0.35em] uppercase text-gold font-bold mb-5 after:flex-1 after:h-px after:bg-gradient-to-r after:from-gold/25 after:to-transparent">
              Implantations
            </p>
            <div className="flex flex-wrap gap-2.5">
              {LOCATIONS.map((loc) => (
                <div key={loc.city} className="flex flex-col gap-0.5 px-[18px] py-3 rounded-lg bg-[#F5F2EC] border border-gold/15 hover:border-gold transition-all duration-300 cursor-default min-w-[130px]">
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
            <span className="font-sans text-[8px] tracking-[0.32em] uppercase text-neutral-400">Superficies</span>
            <span className="font-sans text-[13px] text-[#0F1923]">5 000 m² à 500 000 m²+</span>
          </div>
          <div className="w-px h-8 bg-gold/15" />
          <div className="flex flex-col gap-1">
            <span className="font-sans text-[8px] tracking-[0.32em] uppercase text-neutral-400">Vocation</span>
            <span className="font-sans text-[13px] text-[#0F1923]">Industriel · Commercial · Logistique · Résidentiel</span>
          </div>
          <div className="w-px h-8 bg-gold/15" />
          <div className="flex flex-col gap-1">
            <span className="font-sans text-[8px] tracking-[0.32em] uppercase text-neutral-400">Formats</span>
            <span className="font-sans text-[13px] text-[#0F1923]">Vente · Développement · Build-to-Suit</span>
          </div>
        </div>
      </div>
    </section>
  )
}
