"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { ArrowUpRight, CheckCircle } from "lucide-react"

const SPECS = [
  "Terrains industriels, commerciaux et résidentiels",
  "Zones d'accélération industrielle & zones franches",
  "Études de faisabilité et conseil en développement",
  "Montage juridique et administratif accompagné",
  "Développement sur mesure (BTS, clé en main)",
]

const PROFILS = [
  "Investisseurs institutionnels",
  "Industriels",
  "Promoteurs immobiliers",
  "Fonds d'investissement",
]

export default function SegmentTerrains() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-8%" })

  return (
    <section ref={ref} id="terrains-developpements" className="bg-gray-50 py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-20">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-14 text-center"
        >
          <p className="font-sans text-[9px] tracking-[0.5em] uppercase text-gold mb-4 font-bold">Segment 05</p>
          <h2 className="font-serif text-4xl md:text-5xl text-neutral-800 font-light leading-[1.1] mb-5">
            Terrains &amp; Développements
            <br />
            <span className="italic text-gold">Des Opportunités Foncières à Fort Potentiel</span>
          </h2>
          <div className="w-10 h-px bg-gold/40 mx-auto mb-6" />
          <p className="font-sans text-[15px] text-neutral-500 leading-[1.9] max-w-2xl mx-auto">
            SOFTGROUP met à disposition, à la vente comme à la location, une sélection de terrains
            industriels et d&apos;opportunités foncières dans les zones les plus dynamiques et à
            fort potentiel de développement au Maroc.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-2 relative h-[360px] lg:h-[440px] overflow-hidden rounded-sm"
          >
            <Image
              src="https://res.cloudinary.com/dofyrwzop/image/upload/q_auto/f_auto/v1778599319/Gemini_Generated_Image_kk7w0vkk7w0vkk7w_xnlkdg.png"
              alt="Terrains & Développements — Softgroup"
              fill className="object-cover" sizes="(max-width: 1024px) 100vw, 66vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-8 left-8">
              <p className="font-sans text-[9px] tracking-[0.3em] uppercase text-gold/80 mb-1">Disponible partout</p>
              <p className="font-serif text-2xl text-white font-light">Au Maroc</p>
            </div>
          </motion.div>

          {/* Specs + Profils */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-6"
          >
            <div className="bg-white border border-gray-100 p-6 flex-1">
              <p className="font-sans text-[8px] tracking-[0.35em] uppercase text-gold mb-4 font-bold">Services inclus</p>
              <ul className="space-y-2.5">
                {SPECS.map((spec) => (
                  <li key={spec} className="flex items-start gap-2.5">
                    <CheckCircle size={10} className="text-gold flex-none mt-0.5" strokeWidth={1.5} />
                    <span className="font-sans text-[15px] text-neutral-600 leading-snug">{spec}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white border border-gray-100 p-6">
              <p className="font-sans text-[8px] tracking-[0.35em] uppercase text-neutral-400 mb-4">Profils investisseurs</p>
              <div className="flex flex-wrap gap-2">
                {PROFILS.map((p) => (
                  <span key={p} className="font-sans text-[9px] tracking-[0.1em] text-neutral-600 bg-gray-50 border border-gray-200 px-3 py-1.5">
                    {p}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <a href="#contact" className="inline-flex items-center justify-center gap-2 bg-gold text-noir font-sans text-[10px] tracking-[0.25em] uppercase px-7 py-3.5 hover:bg-gold/90 transition-colors group">
                Consulter les disponibilités <ArrowUpRight size={13} strokeWidth={1.5} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <a href="#contact" className="inline-flex items-center justify-center gap-2 border border-gold/30 text-gold font-sans text-[10px] tracking-[0.25em] uppercase px-7 py-3.5 hover:bg-gold hover:text-noir transition-all">
                Nous contacter via WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
