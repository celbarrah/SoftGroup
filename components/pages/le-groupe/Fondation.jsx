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
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-8%" })

  return (
    <section ref={ref} className="bg-[#F5F3EF] py-24 md:py-36 overflow-hidden" id="fondation">
      <div className="max-w-400 mx-auto px-4 md:px-12 lg:px-20">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Eyebrow */}
            <p className="font-sans text-[14px] font-bold tracking-[0.55em] uppercase text-gold/70 mb-7">
              Engagement Social
            </p>

            {/* Fondation logo + title block */}
            <div className="flex items-center gap-6 mb-6">
              <img
                src="https://res.cloudinary.com/dofyrwzop/image/upload/q_auto/f_auto/v1779210148/FONDATION_xcohse-removebg-preview_if9lyx.png"
                className="grayscale-0"
                alt="Fondation Amine Kabbaj"
                style={{
                  height:      72,
                  width:       "auto",
                  objectFit:   "contain",
                  flexShrink:  0,
                }}
              />
              <div>
                <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-neutral-800 font-light leading-[1.1]">
                  Fondation
                  <br />
                  <span className="italic text-gold">Amine Kabbaj</span>
                </h2>
              </div>
            </div>
            <h2 className="font-serif text-xl md:text-2xl lg:text-3xl leading-[1.1] italic text-gold font-bold">
              L'Excellence au Service du Bien Commun
            </h2>

            <div className="w-10 h-px bg-gold/40 mb-8 relative -bottom-2" />

            <p className="font-sans text-[18px] text-neutral-600 leading-[1.9] mb-10">
              Crée en 1995 et reconnue d&apos;utilité publique en 2007, la Fondation est
              spécialisée dans la construction et l&apos;aménagement d&apos;unités de soins médicaux
              et chirurgicaux sur l&apos;ensemble du territoire national. Entièrement financée
              par la famille Kabbaj, toutes les infrastructures sont remises au Ministère
              de la Santé.
            </p>

            {/* Mini stats row */}
            <div className="grid grid-cols-3 gap-0 border border-gray-200 bg-white mb-4">
              {[
                { val: "1995",    lbl: "Création"          },
                { val: "2007",    lbl: "Utilité publique"  },
                { val: "+30 ans", lbl: "D'engagement"      },
              ].map((s, i) => (
                <div key={s.lbl} className={"p-6 text-center " + (i < 2 ? "border-r border-gray-200" : "")}>
                  <p className="font-serif text-2xl text-gold font-light mb-1">{s.val}</p>
                  <p className="font-sans text-[12px] tracking-[0.2em] uppercase text-neutral-500">{s.lbl}</p>
                </div>
              ))}
            </div>

            {/* Distinction Royale */}
            <div className="border border-gold/30 bg-white p-6 flex items-start gap-5">
              <div className="flex-none w-12 h-12 border border-gold/20 flex items-center justify-center" style={{ background: "rgba(196,165,90,0.05)" }}>
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <circle cx="11" cy="13" r="7" stroke="#C4A55A" strokeWidth="1.2"/>
                  <path d="M8 6L11 2L14 6" stroke="#C4A55A" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M7 6H15" stroke="#C4A55A" strokeWidth="1.2" strokeLinecap="round"/>
                  <circle cx="11" cy="13" r="3.5" stroke="#C4A55A" strokeWidth="1"/>
                </svg>
              </div>
              <div>
                <p className="font-sans text-[11px] tracking-[0.3em] uppercase text-gold/70 font-bold mb-1">
                  Distinction Royale
                </p>
                <p className="font-serif text-lg text-neutral-800 font-light italic mb-2">
                  Wissam Al Arch
                </p>
                <p className="font-sans text-[14px] text-neutral-500 leading-[1.75]">
                  Mohamed Kabbaj a été décoré par Sa Majesté le Roi Mohammed VI
                  du Wissam Al Arch en 2015, en reconnaissance de son engagement
                  exceptionnel au service du bien commun.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right — réalisations */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.0, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-sans text-[12px] tracking-[0.45em] font-bold uppercase text-neutral-400 mb-6">
              Réalisations
            </p>

            <ul className="space-y-0">
              {REALISATIONS.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.55, delay: 0.25 + i * 0.07 }}
                  className="flex items-start gap-4 py-4 border-b border-gray-200 group"
                >
                  <span className="flex-none mt-[6px] w-1.5 h-1.5 rounded-full bg-gold/50 group-hover:bg-gold transition-colors duration-300" />
                  <span className="font-sans text-[16px] text-neutral-600 leading-[1.7] group-hover:text-neutral-800 transition-colors duration-300">
                    {item}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
