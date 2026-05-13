"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const EVENTS = [
  { year: "1918", title: "Fondation",              desc: "Création par Haj M'hamed de la maison spécialisée dans l'exportation de tissus et produits d'artisanat vers le Sénégal et le Mali." },
  { year: "1948", title: "Import Lyon",            desc: "Développement des activités d'importation de tissus depuis Lyon par son fils Abdellatif Kabbaj, structurant ainsi l'activité textile du groupe." },
  { year: "1968", title: "Diversification",        desc: "Prise de relais par Mohamed Kabbaj avec le lancement de l'impression de foulards et la diversification vers plusieurs métiers du textile." },
  { year: "1987", title: "Premier projet immo.",   desc: "Construction du premier projet immobilier du groupe, marquant l'entrée dans le secteur de la promotion immobilière." },
  { year: "1995", title: "Fondation Amine Kabbaj", desc: "Création de la Fondation Amine Kabbaj, dédiée à la construction d'unités de soins médicaux sur l'ensemble du territoire national." },
  { year: "1999", title: "ISO 9002",               desc: "SOFTGROUP devient la première entreprise textile à obtenir la certification ISO 9002 au Maroc." },
  { year: "2002", title: "Diamantine",             desc: "Création et lancement de la marque Diamantine, spécialisée dans le prêt-à-porter féminin haut de gamme." },
  { year: "2007", title: "1er producteur pulls",   desc: "SOFTGROUP devient le premier producteur national de pulls 100% export." },
  { year: "2008", title: "Clair Ô Foncé",          desc: "Création de la marque Clair Ô Foncé, spécialisée dans les châles, carrés et tissus en pure soie." },
  { year: "2012", title: "Marque N°1",             desc: "Diamantine est élue première marque marocaine de commerce et de distribution." },
  { year: "2015", title: "Wissam Al Arch",         desc: "Mohamed Kabbaj est décoré du Wissam Al Arch par Sa Majesté le Roi Mohammed VI." },
  { year: "2016", title: "SOFT TECH",              desc: "Création de la filiale SOFT TECH, spécialisée dans le textile technique et le non-tissé." },
]

function TimelineItem({ event, index }) {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-15%" })
  const isLeft = index % 2 === 0

  return (
    <div ref={ref} className="relative grid grid-cols-[1fr_40px_1fr] items-start gap-0">

      {/* Left column */}
      <div className={isLeft ? "pr-8 text-right" : ""}>
        {isLeft && (
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <p className="font-serif text-3xl md:text-4xl text-gold font-light mb-2">{event.year}</p>
            <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-neutral-700 mb-2">{event.title}</p>
            <p className="font-sans text-[16px] text-neutral-500 leading-[1.8]">{event.desc}</p>
          </motion.div>
        )}
      </div>

      {/* Center timeline */}
      <div className="flex flex-col items-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.05 }}
          className="w-3 h-3 rounded-full border border-gold/50 bg-white mt-1 flex-none z-10 relative"
        >
          <div className="absolute inset-[3px] rounded-full bg-gold/40" />
        </motion.div>
        <div className="flex-1 w-px bg-gradient-to-b from-gold/25 to-transparent mt-2 min-h-[80px]" />
      </div>

      {/* Right column */}
      <div className={!isLeft ? "pl-8" : ""}>
        {!isLeft && (
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <p className="font-serif text-3xl md:text-4xl text-gold font-light mb-2">{event.year}</p>
            <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-neutral-700 mb-2">{event.title}</p>
            <p className="font-sans text-[16px] text-neutral-500 leading-[1.8]">{event.desc}</p>
          </motion.div>
        )}
      </div>

    </div>
  )
}

export default function Timeline() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-8%" })

  return (
    <section ref={ref} className="bg-white py-24 md:py-36 overflow-hidden" id="histoire">
      <div className="max-w-5xl mx-auto px-8 md:px-12 lg:px-20">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="font-sans text-[9px] tracking-[0.55em] uppercase text-gold/70 mb-5">
            Notre Histoire
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-neutral-800 font-light leading-[1.1]">
            Plus d&apos;un siècle
            <br />
            <span className="italic">d&apos;engagement et de réalisations</span>
          </h2>
          <div className="w-12 h-px bg-gold/40 mx-auto mt-8" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {EVENTS.map((event, i) => (
            <TimelineItem key={event.year} event={event} index={i} />
          ))}
        </div>

        {/* Aujourd'hui badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-12 text-center"
        >
          <div className="inline-block border border-gold/30 px-8 py-4 bg-gold/4">
            <p className="font-sans text-[8px] tracking-[0.45em] uppercase text-gold mb-2">Aujourd'hui</p>
            <p className="font-serif text-xl text-neutral-800 font-light">
              9 filiales · +4 500 collaborateurs · 4 générations
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
