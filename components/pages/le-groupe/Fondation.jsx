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
                src="https://res.cloudinary.com/dofyrwzop/image/upload/q_auto/f_auto/v1779115160/FONDATION_xcohse.jpg"
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

            <div className="w-10 h-px bg-gold/40 mb-8" />

            <p className="font-sans text-[18px] text-neutral-600 leading-[1.9] mb-6">
              Créée en 1995 et reconnue d&apos;utilité publique en 2007, la Fondation Amine Kabbaj
              est une fondation marocaine spécialisée dans la construction et l&apos;aménagement
              d&apos;unités de soins médicaux et chirurgicaux sur l&apos;ensemble du territoire national.
            </p>
            <p className="font-sans text-[18px] text-neutral-600 leading-[1.9] mb-10">
              Entièrement financée par la famille Kabbaj, la Fondation incarne une vision
              durable du mécénat au Maroc, fondée sur la transmission, la solidarité et
              l&apos;impact durable. L&apos;ensemble des infrastructures financées est intégralement
              remis au Ministère de la Santé et de la Protection sociale.
            </p>

            {/* Mini stats row */}
            <div className="grid grid-cols-3 gap-0 border border-gray-200 bg-white">
              {[
                { val: "1995",    lbl: "Création"          },
                { val: "2007",    lbl: "Utilité publique"  },
                { val: "+30 ans", lbl: "D'engagement"      },
              ].map((s, i) => (
                <div key={s.lbl} className={`p-6 text-center ${i < 2 ? "border-r border-gray-200" : ""}`}>
                  <p className="font-serif text-2xl text-gold font-light mb-1">{s.val}</p>
                  <p className="font-sans text-[12px] tracking-[0.2em] uppercase text-neutral-500">{s.lbl}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: réalisations */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.0, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-sans text-[12px] tracking-[0.3em] uppercase text-neutral-400 mb-8">
              Réalisations emblématiques
            </p>
            <ul className="space-y-0">
              {REALISATIONS.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.35 + i * 0.07 }}
                  className="flex items-start gap-4 py-4 border-b border-gray-200 group hover:bg-white/60 transition-colors duration-200 px-2 -mx-2"
                >
                  <span className="font-sans text-[12px] text-gold/60 mt-0.5 flex-none tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="font-sans text-[18px] text-neutral-600 leading-[1.7] group-hover:text-neutral-800 transition-colors duration-300">
                    {item}
                  </p>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
