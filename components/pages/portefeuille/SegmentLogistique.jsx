"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { ArrowUpRight, CheckCircle } from "lucide-react"

const SPECS = [
  { cat: "Structure",    items: ["Hauteurs sous plafond jusqu'à 12m", "Dalle haute résistance 5T/m²", "Ossature mixte béton / métallique", "Toiture bac acier isolant (M0)"] },
  { cat: "Quais",        items: ["Niveleurs hydrauliques", "Portes sectionnelles isolées 3×3m", "Sas rétractables étanches", "Voirie lourde & béquillage poids lourds"] },
  { cat: "Sécurité",     items: ["Sprinklers APSAD / ESFR / NFPA", "RIA & détection fumée centralisée", "Pyrodomes en toiture"] },
  { cat: "Confort",      items: ["200 lux + 2% éclairage zénithal", "Bureaux, mezzanines, locaux de charge", "Infrastructure IT Ready"] },
]

const LOCATIONS = [
  { city: "Casablanca", zones: "Sidi Bernoussi · Aïn Sebaâ · Lissasfa" },
  { city: "Kénitra",    zones: "Atlantic Free Zone (AFZ)"                },
  { city: "Tanger",     zones: "Tanger Free Zone (TFZ)"                  },
  { city: "Agadir",     zones: "Inezgane · Préfecture d'Inezgane"        },
]

export default function SegmentLogistique() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-8%" })

  return (
    <section ref={ref} id="logistique-industriel" className="bg-white py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-20">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-14"
        >
          <p className="font-sans text-[9px] tracking-[0.5em] uppercase text-gold mb-4 font-bold">Segment 01</p>
          <h2 className="font-serif text-4xl md:text-5xl text-neutral-800 font-light leading-[1.1] mb-5">
            Logistique &amp; Industriel
            <br />
            <span className="italic text-gold text-3xl">L&apos;Expertise Logistique au Service de vos Opérations</span>
          </h2>
          <div className="w-10 h-px bg-gold/40 mb-6" />
          <p className="font-sans text-[15px] text-neutral-500 leading-[1.9] max-w-2xl">
            Des plateformes logistiques et industrielles de dernière génération, de 1 000 m² à plus de
            50 000 m² couverts, implantées au cœur des principaux pôles économiques du Royaume
            et connectées aux grands axes routiers, portuaires et aéroportuaires.
          </p>
        </motion.div>

        {/* Image + specs */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-14">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative h-[360px] lg:h-[480px] overflow-hidden rounded-sm"
          >
            <Image
              src="https://res.cloudinary.com/dofyrwzop/image/upload/q_auto/f_auto/v1778504256/terrain_et_developpement_buqi7d.png"
              alt="Logistique & Industriel — Softgroup"
              fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <div className="absolute bottom-6 left-6 flex gap-2">
              {["Prêt à l'emploi", "Build-to-Suit"].map((tag) => (
                <span key={tag} className="font-sans text-[8px] tracking-[0.15em] uppercase bg-gold text-noir px-3 py-1.5">{tag}</span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-2 gap-4"
          >
            {SPECS.map((spec, i) => (
              <div key={spec.cat} className="bg-gray-50 p-5 border border-gray-100">
                <p className="font-sans text-[8px] tracking-[0.3em] uppercase text-gold mb-3 font-bold">{spec.cat}</p>
                <ul className="space-y-1.5">
                  {spec.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle size={10} className="text-gold flex-none mt-0.5" strokeWidth={1.5} />
                      <span className="font-sans text-[15px] text-neutral-600 leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Locations + Profils + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 border-t border-gray-100 pt-10"
        >
          <div>
            <p className="font-sans text-[8px] tracking-[0.3em] uppercase text-neutral-400 mb-4">Localisations</p>
            {LOCATIONS.map((loc) => (
              <div key={loc.city} className="mb-3">
                <p className="font-sans text-[15px] font-semibold text-neutral-700">{loc.city}</p>
                <p className="font-sans text-[15px] text-neutral-400">{loc.zones}</p>
              </div>
            ))}
          </div>
          <div>
            <p className="font-sans text-[8px] tracking-[0.3em] uppercase text-neutral-400 mb-4">Profils locataires</p>
            <p className="font-sans text-[16px] text-neutral-500 leading-[1.8] italic">
              Opérateurs logistiques (3PL) · Industriels · Distributeurs · E-commerce · Groupes multinationaux
            </p>
          </div>
          <div className="flex flex-col gap-3 justify-end">
            <a href="#contact" className="inline-flex items-center justify-center gap-2 bg-gold text-noir font-sans text-[10px] tracking-[0.25em] uppercase px-7 py-3.5 hover:bg-gold/90 transition-colors duration-300 group">
              Consulter les disponibilités
              <ArrowUpRight size={13} strokeWidth={1.5} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </a>
            <a href="#contact" className="inline-flex items-center justify-center gap-2 border border-gold/30 text-gold font-sans text-[10px] tracking-[0.25em] uppercase px-7 py-3.5 hover:bg-gold hover:text-noir transition-all duration-300">
              Planifier une visite
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
