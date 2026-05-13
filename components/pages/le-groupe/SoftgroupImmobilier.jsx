"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import Image from "next/image"

const POINTS_FORTS = [
  { title: "Constructeur-développeur intégré",    desc: "De la conception architecturale à la livraison clé en main, Softgroup Immobilier pilote chaque étape du développement immobilier avec un haut niveau d'exigence et de maîtrise technique." },
  { title: "Expertise locative multi-segments",   desc: "Une offre couvrant cinq univers complémentaires, pensée pour répondre aux besoins spécifiques des industriels, logisticiens, enseignes retail, entreprises et expatriés." },
  { title: "Présence nationale stratégique",      desc: "Des actifs situés dans les zones économiques les plus dynamiques du Royaume, offrant accessibilité, connectivité et fort potentiel de valorisation." },
  { title: "+300 clients grands comptes",         desc: "Des multinationales, groupes industriels et leaders sectoriels font confiance à Softgroup Immobilier pour leurs besoins immobiliers stratégiques au Maroc." },
]

export default function SoftgroupImmobilier() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-8%" })

  return (
    <section ref={ref} className="bg-gray-50 py-24 md:py-36 overflow-hidden" id="softgroup-immobilier">
      <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-20">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left: image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
            className="relative h-[400px] lg:h-[560px] overflow-hidden"
          >
            <Image
              src="https://res.cloudinary.com/dofyrwzop/image/upload/q_auto/f_auto/v1778504245/bureaux_et_centre_d_affaires_yoldrb.png"
              alt="Softgroup Immobilier — La référence locative premium"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

            {/* Floating stat */}
            <div className="absolute bottom-8 left-8 bg-white/95 backdrop-blur-sm border border-gray-100 shadow-lg px-6 py-4">
              <p className="font-sans text-[8px] tracking-[0.4em] uppercase text-gold mb-1">Depuis</p>
              <p className="font-serif text-2xl text-neutral-800 font-light">+35 ans</p>
            </div>
          </motion.div>

          {/* Right: content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.0, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-sans text-[9px] tracking-[0.55em] uppercase text-gold/70 mb-6">
              La Filiale Phare
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-neutral-800 font-light leading-[1.1] mb-5">
              Softgroup Immobilier
              <br />
              <span className="italic text-gold">La Référence Locative Premium</span>
            </h2>
            <div className="w-10 h-px bg-gold/40 mb-8" />
            <p className="font-sans text-[15px] text-neutral-500 leading-[1.9] mb-12 max-w-lg">
              Foncière marocaine spécialisée dans l&apos;immobilier locatif depuis plus de 35 ans.
              À la fois constructeur, développeur et gestionnaire d&apos;actifs, elle maîtrise
              l&apos;ensemble du cycle de vie immobilier — de la conception à la valorisation
              patrimoniale — sur cinq segments stratégiques.
            </p>

            {/* Points forts */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
              {POINTS_FORTS.map((pt, i) => (
                <motion.div
                  key={pt.title}
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + i * 0.08 }}
                  className="border-t border-gray-200 pt-4"
                >
                  <p className="font-sans text-[10px] tracking-[0.15em] uppercase text-gold mb-2">{pt.title}</p>
                  <p className="font-sans text-[15px] text-neutral-500 leading-[1.7]">{pt.desc}</p>
                </motion.div>
              ))}
            </div>

            <a
              href="/portefeuille"
              className="inline-flex items-center gap-3 font-sans text-[10px] tracking-[0.25em] uppercase text-gold border border-gold/30 px-7 py-3.5 hover:bg-gold hover:text-white transition-all duration-400 group"
            >
              Voir le portefeuille
              <ArrowUpRight size={14} strokeWidth={1.5} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
