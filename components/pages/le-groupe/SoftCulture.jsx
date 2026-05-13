"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { BookOpen } from "lucide-react"

const OUVRAGES = [
  {
    title: "Un Bouquet de Proverbes Marocains",
    desc: "Un hommage au patrimoine oral marocain destiné à transmettre la richesse des proverbes et de la sagesse populaire aux nouvelles générations.",
    num: "01",
  },
  {
    title: "1 001 Manières de Porter Châle et Foulard",
    desc: "Une célébration de l'élégance féminine à travers les cultures, illustrée par une riche collection de photographies, toiles et œuvres artistiques.",
    num: "02",
  },
  {
    title: "Le Maghreb des Origines à Nos Jours : Vision 2050",
    desc: "Un ouvrage prospectif proposant une vision ambitieuse et optimiste du devenir du Maghreb à l'horizon 2050.",
    num: "03",
  },
  {
    title: "Contes et Proverbes Marocains",
    desc: "Un livre de 300 pages inspiré du patrimoine populaire marocain et illustré par l'artiste Said Ben Mchich.",
    num: "04",
  },
  {
    title: "Cœur de Mécènes, Mécènes de Cœur",
    desc: "Rédigé par Zhor Kabbaj, cet ouvrage explore les multiples expressions de la philanthropie et du mécénat à travers le monde.",
    num: "05",
  },
]

export default function SoftCulture() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-8%" })

  return (
    <section ref={ref} className="bg-white py-24 md:py-36 overflow-hidden" id="softculture">
      <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-20">

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <BookOpen size={14} className="text-gold" strokeWidth={1.5} />
              <p className="font-sans text-[9px] tracking-[0.55em] uppercase text-gold/70">
                Mécénat Culturel
              </p>
            </div>
            <h2 className="font-serif text-3xl md:text-5xl text-neutral-800 font-light leading-[1.1]">
              SoftCulture
              <br />
              <span className="italic text-gold">La Culture comme Vecteur de Sens</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="flex items-end"
          >
            <p className="font-sans text-[15px] text-neutral-500 leading-[1.9] max-w-md">
              Parce qu&apos;un groupe d&apos;exception se mesure aussi à son empreinte intellectuelle,
              SOFTGROUP a créé le label éditorial SoftCulture — une initiative portée par les
              membres fondateurs et dirigeants du groupe pour valoriser le patrimoine marocain
              et la réflexion prospective.
            </p>
          </motion.div>
        </div>

        {/* Ouvrages grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {OUVRAGES.map((ouvrage, i) => (
            <motion.div
              key={ouvrage.num}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 + i * 0.09 }}
              className="group border border-gray-100 p-8 hover:border-gold/30 hover:shadow-lg transition-all duration-400"
            >
              <p className="font-sans text-[9px] tracking-[0.35em] uppercase text-gold/50 mb-5">
                {ouvrage.num}
              </p>
              <div className="w-6 h-px bg-gold/30 mb-5" />
              <h3 className="font-serif text-lg text-neutral-800 font-light leading-[1.35] mb-4 group-hover:text-gold transition-colors duration-300">
                {ouvrage.title}
              </h3>
              <p className="font-sans text-[15px] text-neutral-500 leading-[1.8]">
                {ouvrage.desc}
              </p>
            </motion.div>
          ))}

          {/* 6th cell — call to action */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.65 }}
            className="border border-gold/20 p-8 bg-gold/3 flex flex-col justify-between"
          >
            <div>
              <p className="font-sans text-[9px] tracking-[0.35em] uppercase text-gold mb-5">
                Notre Vision
              </p>
              <div className="w-6 h-px bg-gold/30 mb-5" />
              <p className="font-serif text-lg text-neutral-700 font-light leading-[1.55] italic">
                &ldquo;La culture constitue un levier essentiel de transmission, de développement
                économique et de rayonnement identitaire.&rdquo;
              </p>
            </div>
            <p className="font-sans text-[10px] text-neutral-400 mt-6 tracking-[0.1em]">
              — Mohamed Kabbaj, Fondateur
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
