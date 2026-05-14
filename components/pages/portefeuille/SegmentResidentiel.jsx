"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

const FEATURES = [
  { title: "Luxe & Confort absolu",  desc: "Finitions premium, climatisation & chauffage central dans chaque espace." },
  { title: "Sérénité Totale",        desc: "Sécurité 24h/24 avec gardiennage et parkings privés sécurisés." },
  { title: "Évasion Privée",         desc: "Jardins paysagers, piscines individuelles et rooftops exclusifs." },
  { title: "Sanctuaire Wellness",    desc: "Spa · Hammam · Sauna · Jacuzzi · Fitness club." },
  { title: "Business & Services",    desc: "Centres d'affaires et services de maintenance dédiés." },
]

export default function SegmentResidentiel() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-8%" })

  return (
    <section ref={ref} id="residentiel-de-prestige" className="bg-[#F5F3EF] py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-20">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left: image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="relative h-[500px] lg:h-[620px] overflow-hidden order-2 lg:order-1"
          >
            <Image
              src="https://res.cloudinary.com/dofyrwzop/image/upload/q_auto/f_auto/v1778599233/WhatsApp_Image_2026-05-12_at_09.04.58_3_moneep.jpg"
              alt="Résidentiel de Prestige — Softgroup"
              fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8">
              <p className="font-sans text-[8px] tracking-[0.4em] uppercase text-gold/80 mb-1">L&apos;Exclusivité pour Seul Standard</p>
              <p className="font-serif text-xl text-white font-light">Résidentiel de Prestige</p>
            </div>
          </motion.div>

          {/* Right: content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="order-1 lg:order-2"
          >
            <p className="font-sans text-[9px] tracking-[0.5em] uppercase text-gold font-bold mb-4">Segment 03</p>
            <h2 className="font-serif text-4xl md:text-5xl text-neutral-800 font-light leading-[1.1] mb-5">
              Résidentiel
              <br />
              <span className="italic text-gold">de Prestige</span>
            </h2>
            <div className="w-10 h-px bg-gold/40 mb-7" />
            <p className="font-sans text-[16px] text-neutral-600 leading-[1.9] mb-10">
              SOFTGROUP cultive l&apos;excellence et l&apos;innovation pour façonner des espaces de vie
              d&apos;exception. Villas individuelles, résidences privées et appartements de luxe
              méticuleusement conçus pour une clientèle privilégiée.
            </p>

            {/* Features */}
            <div className="space-y-5 mb-10">
              {FEATURES.map((feat, i) => (
                <motion.div
                  key={feat.title}
                  initial={{ opacity: 0, x: 16 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
                  className="flex gap-4 group"
                >
                  <span className="text-gold/50 text-[10px] mt-0.5 flex-none">✦</span>
                  <div>
                    <p className="font-sans text-[11px] tracking-[0.15em] uppercase text-neutral-700 mb-1">{feat.title}</p>
                    <p className="font-sans text-[15px] text-neutral-500 leading-[1.7]">{feat.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="border-t border-gray-200 pt-7 mb-8">
              <p className="font-sans text-[9px] tracking-[0.3em] uppercase text-neutral-400 mb-2">Localisations</p>
              <p className="font-sans text-[16px] text-neutral-600">
                Casablanca : Bd d&apos;Anfa · Corniche · Aïn Diab · CFC
              </p>
              <p className="font-sans text-[9px] tracking-[0.3em] uppercase text-neutral-400 mt-3 mb-2">Profils</p>
              <p className="font-sans text-[16px] text-neutral-500 italic">
                Multinationales · Expatriés · Diplomates et Grands Corps d&apos;État
              </p>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-gold text-white font-sans text-[10px] tracking-[0.25em] uppercase px-7 py-3.5 hover:bg-gold/90 transition-colors duration-300 group"
            >
              Consulter les disponibilités
              <ArrowUpRight size={13} strokeWidth={1.5} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
