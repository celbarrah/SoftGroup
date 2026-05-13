"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { ArrowUpRight, CheckCircle } from "lucide-react"

const SPECS = [
  "Surfaces de 50 m² à plusieurs milliers de m²",
  "Vitrines et façades à haute visibilité",
  "Accès facilité · Parkings clients intégrés",
  "Espaces modulables selon votre concept",
  "Infrastructure technique complète (électricité, plomberie, clim.)",
  "Environnement commercial attractif et trafic qualifié",
]

export default function SegmentRetail() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-8%" })

  return (
    <section ref={ref} id="retail-commerce" className="bg-white py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-20">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-sans text-[9px] tracking-[0.5em] uppercase text-gold mb-4 font-bold">Segment 04</p>
            <h2 className="font-serif text-4xl md:text-5xl text-neutral-800 font-light leading-[1.1] mb-3">
              Retail &amp; Commerce
            </h2>
            <p className="font-serif text-xl italic text-gold mb-5">L&apos;emplacement qui fait la différence</p>
            <div className="w-10 h-px bg-gold/40 mb-7" />
            <p className="font-sans text-[15px] text-neutral-500 leading-[1.9] mb-8">
              SOFTGROUP sélectionne des implantations premium au cœur des zones à fort potentiel
              pour offrir aux enseignes une visibilité optimale, un flux client important et
              une accessibilité exceptionnelle.
            </p>
            <p className="font-sans text-[15px] text-neutral-500 leading-[1.9] mb-10">
              Magasins, showrooms professionnels ou centres commerciaux — tous bénéficient
              de larges façades et de parkings privatifs garantissant confort et accessibilité.
            </p>

            {/* Specs */}
            <div className="space-y-2.5 mb-10">
              {SPECS.map((spec) => (
                <div key={spec} className="flex items-start gap-3">
                  <CheckCircle size={12} className="text-gold flex-none mt-0.5" strokeWidth={1.5} />
                  <p className="font-sans text-[16px] text-neutral-600 leading-snug">{spec}</p>
                </div>
              ))}
            </div>

            <div className="border-t border-gray-100 pt-7 mb-8">
              <p className="font-sans text-[8px] tracking-[0.3em] uppercase text-neutral-400 mb-2">Localisations</p>
              <p className="font-sans text-[16px] text-neutral-600 mb-5">Casablanca : Bd d&apos;Anfa · Tit Melil · Bd Rachidi</p>
              <p className="font-sans text-[8px] tracking-[0.3em] uppercase text-neutral-400 mb-2">Profils locataires</p>
              <p className="font-sans text-[16px] text-neutral-500 italic">
                Enseignes nationales & internationales · Franchises · Retailers spécialisés · Grandes surfaces
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a href="#contact" className="inline-flex items-center gap-2 bg-gold text-noir font-sans text-[10px] tracking-[0.25em] uppercase px-7 py-3.5 hover:bg-gold/90 transition-colors group">
                Consulter les disponibilités <ArrowUpRight size={13} strokeWidth={1.5} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 border border-gold/30 text-gold font-sans text-[10px] tracking-[0.25em] uppercase px-7 py-3.5 hover:bg-gold hover:text-noir transition-all">
                Planifier une visite
              </a>
            </div>
          </motion.div>

          {/* Right: image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="relative h-[420px] lg:h-[560px] overflow-hidden rounded-sm"
          >
            <Image
              src="https://res.cloudinary.com/dofyrwzop/image/upload/q_auto/f_auto/v1778504226/retail_et_commerce_fuezst.png"
              alt="Retail & Commerce — Softgroup"
              fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
