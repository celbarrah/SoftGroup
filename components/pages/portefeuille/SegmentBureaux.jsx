"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { ArrowUpRight, CheckCircle } from "lucide-react"

const FORMATS = [
  { title: "Villas à usage professionnel", desc: "Espaces exclusifs alliant prestige, confidentialité et confort." },
  { title: "Immeubles monoclients",        desc: "Bâtiments entièrement indépendants pour une maîtrise totale de l'identité de marque." },
  { title: "Plateaux multiclients",        desc: "Espaces contemporains et flexibles au sein d'environnements d'affaires dynamiques." },
]

const SPECS = [
  "Plateaux modulables de 100 à 1 200 m²",
  "Finitions premium · Isolation thermique et acoustique",
  "Menuiseries aluminium · Double vitrage",
  "Climatisation & chauffage PAC réversible",
  "GTC · Éclairage LED basse consommation",
  "Fibre optique · Pré-câblage IT complet",
  "Sécurité 24h/24 · Vidéosurveillance",
  "Contrôle d'accès · Réception dédiée",
  "Ascenseur haute capacité · Parkings privatifs",
]

export default function SegmentBureaux() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-8%" })

  return (
    <section ref={ref} id="bureaux-centres-d-affaires" className="bg-gray-50 py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-20">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left: content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-sans text-[9px] tracking-[0.5em] uppercase text-gold mb-4 font-bold">Segment 02</p>
            <h2 className="font-serif text-4xl md:text-5xl text-neutral-800 font-light leading-[1.1] mb-5">
              Bureaux &amp;
              <br />
              <span className="italic text-gold">Centres d&apos;Affaires</span>
            </h2>
            <div className="w-10 h-px bg-gold/40 mb-7" />
            <p className="font-sans text-[15px] text-neutral-500 leading-[1.9] mb-10">
              Une offre tertiaire flexible et évolutive avec des surfaces modulables allant de
              150 m² à 3 000 m². Trois formats principaux pour s&apos;adapter à chaque mode
              d&apos;exploitation.
            </p>

            {/* Format cards */}
            <div className="space-y-4 mb-10">
              {FORMATS.map((fmt, i) => (
                <motion.div
                  key={fmt.title}
                  initial={{ opacity: 0, x: -16 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                  className="flex gap-4 p-5 bg-white border border-gray-100 hover:border-gold/30 transition-colors duration-300"
                >
                  <div className="w-1 bg-gold/30 flex-none rounded-full" />
                  <div>
                    <p className="font-sans text-[13px] tracking-[0.15em] uppercase text-gold mb-1">{fmt.title}</p>
                    <p className="font-sans text-[16px] text-neutral-500 leading-[1.7]">{fmt.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <p className="font-sans text-[8px] tracking-[0.3em] uppercase text-neutral-400 mb-3">Localisations premium</p>
            <p className="font-sans text-[16px] text-neutral-600 mb-8">
              Casablanca : Anfa · Bd d&apos;Anfa · Bd Rachidi
            </p>

            <div className="flex flex-wrap gap-3">
              <a href="#contact" className="inline-flex items-center gap-2 bg-gold text-noir font-sans text-[10px] tracking-[0.25em] uppercase px-7 py-3.5 hover:bg-gold/90 transition-colors duration-300 group">
                Disponibilités <ArrowUpRight size={13} strokeWidth={1.5} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 border border-gold/30 text-gold font-sans text-[10px] tracking-[0.25em] uppercase px-7 py-3.5 hover:bg-gold hover:text-noir transition-all duration-300">
                Planifier une visite
              </a>
            </div>
          </motion.div>

          {/* Right: image + specs */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative h-[320px] overflow-hidden rounded-sm mb-6">
              <Image
                src="https://res.cloudinary.com/dofyrwzop/image/upload/q_auto/f_auto/v1778504245/bureaux_et_centre_d_affaires_yoldrb.png"
                alt="Bureaux & Centres d'Affaires — Softgroup"
                fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="bg-white border border-gray-100 p-6">
              <p className="font-sans text-[8px] tracking-[0.35em] uppercase text-gold mb-5 font-bold">Caractéristiques techniques</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {SPECS.map((spec) => (
                  <div key={spec} className="flex items-start gap-2">
                    <CheckCircle size={10} className="text-gold flex-none mt-0.5" strokeWidth={1.5} />
                    <span className="font-sans text-[15px] text-neutral-600 leading-snug">{spec}</span>
                  </div>
                ))}
              </div>
              <div className="mt-5 pt-4 border-t border-gray-100">
                <p className="font-sans text-[8px] tracking-[0.2em] uppercase text-neutral-400 mb-1">Profils locataires</p>
                <p className="font-sans text-[15px] text-neutral-500 italic">
                  Cabinets conseil · Banques & Assurances · Multinationales · Sièges régionaux · Professions libérales
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
