"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const REALISATIONS = [
  "L'Hôpital de Sidi Bernoussi « Al Mansour »",
  "Le bâtiment de cardiologie du CHU Ibn Rochd",
  "Le centre de neurologie et de rééducation fonctionnelle du CHU Ibn Rochd",
  "Le centre de pédopsychiatrie du CHU Ibn Rochd",
  "Le centre de maternité du CHU Ibn Rochd",
  "Le centre de psychiatrie du CHU Ibn Rochd",
  "Le centre de désintoxication de l'hôpital Errazi de Salé",
  "L'aire de jeu de l'ophtalmologie pédiatrique du CHU Ibn Rochd",
  "Le soutien à l'association JOOD",
]

export default function Fondation() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-8%" })

  return (
    <section ref={ref} className="bg-[#fcfbf9] py-20 md:py-20 overflow-hidden" id="fondation">
      <div className="max-w-[1500px] mx-auto px-6 md:px-12 lg:px-16">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* ── Left Column ────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col"
          >
            {/* Eyebrow */}
            <p className="font-sans text-[15px] md:text-[15px] font-semibold tracking-[0.2em] uppercase text-gold mb-5">
              Engagement Social
            </p>

            {/* Title */}
            <h2 className="font-serif text-4xl md:text-5xl text-[#1a202c] font-normal leading-[1.15] mb-2">
              Fondation<br />
              <span className="font-medium">Amine Kabbaj</span>
            </h2>

            {/* Subtitle */}
            <h3 className="font-serif text-xl md:text-2xl text-gold font-normal leading-snug mb-6">
              L'Excellence au Service du Bien Commun
            </h3>

            {/* Paragraph */}
            <p className="font-sans text-[15px] text-neutral-900 leading-[1.8] mb-12 max-w-[500px]">
              Crée en 1995 et reconnue d'utilité publique en 2007, la Fondation est
              spécialisée dans la construction et l'aménagement d'unités de soins médicaux
              et chirurgicaux sur l'ensemble du territoire national. Entièrement financée
              par la famille Kabbaj, toutes les infrastructures sont remises au Ministère
              de la Santé.
            </p>

            {/* Large Image */}
            <img
              src="https://res.cloudinary.com/dofyrwzop/image/upload/q_auto/f_auto/v1779210148/FONDATION_xcohse-removebg-preview_if9lyx.png"
              alt="Fondation Amine Kabbaj"
              className="w-full max-w-[420px] object-contain mb-10"
            />

            {/* Stats Cards */}
            <div className="grid grid-cols-3 gap-4 max-w-[480px]">
              {[
                { val: "1995",  lbl: "Création" },
                { val: "2007",  lbl: "Utilité publique" },
                { val: "30+",   lbl: "Ans d'engagement" },
              ].map((s, i) => (
                <motion.div
                  key={s.lbl}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                  className="bg-white border border-gray-100 rounded-xl py-5 px-2 flex flex-col items-center justify-center shadow-sm"
                >
                  <p className="font-serif text-[21px] text-gold mb-1">{s.val}</p>
                  <p className="font-sans text-[10px] md:text-[12px] tracking-[0.15em] uppercase text-neutral-800 text-center">
                    {s.lbl}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>


          {/* ── Right Column ───────────────────────────────── */}
          <div className="flex flex-col">
            
            {/* Distinction Royale Box */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="bg-gold/20 border border-gold/20 rounded-2xl p-8 md:p-5 mb-12 shadow-xl"
            >
              <p className="font-sans text-[12px] tracking-[0.2em] uppercase text-neutral-800 font-semibold mb-3">
                RÉALISATIONS EMBLÉMATIQUES
              </p>
              <h4 className="font-serif text-xl md:text-2xl text-black font-normal mb-3">
                Wissam Alaoui
              </h4>
              <p className="font-sans text-[15px] text-neutral-900/70 leading-[1.8]">
                Mohamed Kabbaj a été décoré par Sa Majesté le Roi Mohammed VI du Wissam Alaoui en 2016, 
                en reconnaissance de son engagement exceptionnel au service du bien commun.
              </p>
            </motion.div>

            {/* Réalisations Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="font-sans text-[13px] tracking-[0.2em] font-semibold uppercase text-neutral-800/60 mb-6">
                Réalisations
              </p>

              <ul className="space-y-3 md:space-y-4">
                {REALISATIONS.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 15 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 + i * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <span className="flex-none mt-[8px] w-1 h-1 rounded-full bg-neutral-800/60" />
                    <span className="font-sans text-[15px] text-neutral-800/60 leading-relaxed">
                      {item}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  )
}