"use client"
import { useRef } from "react"
import { motion, useInView } from "framer-motion"

/* ─── Data ─────────────────────────────────────────────────────── */

const CARDS = [
  {
    num: "01",
    title: "Ingénierie sur mesure & Hubs de classe A",
    desc: "Surface, hauteur libre, nombre de quais, bureaux intégrés, énergie solaire, chambres froides ou contraintes techniques spécifiques : chaque détail est défini avec vous dès la phase de conception afin de créer une solution totalement sur mesure.",
  },
  {
    num: "02",
    title: "Maîtrise foncière & Connectivité stratégique",
    desc: "Grâce à nos réserves foncières situées à Casablanca, Tanger, Kénitra et Agadir, les projets peuvent être lancés rapidement, sans dépendre des délais et incertitudes liés à la recherche de terrain.",
  },
  {
    num: "03",
    title: "Partenariat long terme & Sécurisation du capital",
    desc: "Nous structurons des baux longue durée adaptés à votre stratégie de développement, avec des engagements contractuels clairs, des conditions stables et une visibilité financière complète sur toute la durée du partenariat.",
  },
]

/* ─── Component ─────────────────────────────────────────────────── */

export default function PromesseBTS() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-8%" })

  return (
    <section ref={ref} className="bg-off-white py-[100px] px-[clamp(20px,5vw,80px)]">
      <div className="max-w-[1400px] mx-auto">

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end mb-[60px]">
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="block font-sans text-[15px]  tracking-[0.24em] uppercase text-gold font-bold mb-[14px]">
              La Promesse Softgroup
            </span>
            <h2 className="font-serif text-[clamp(36px,3.8vw,56px)] font-light text-dark
                           leading-[1.06] tracking-[-0.01em]">
              Des infrastructures stratégiques,<br />
              <strong className="font-semibold">conçues pour l'avenir</strong>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, x: 28 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-sans text-[18px] font-light text-muted leading-[1.85] max-w-[58ch]"
          >
            De la première étude de faisabilité jusqu'à la remise des clés,
            vous avez un seul interlocuteur et un seul objectif : que votre
            outil de travail soit parfaitement adapté à vos opérations.
          </motion.p>
        </div>

        {/* 3-card grid */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 rounded-[20px] overflow-hidden
                     border border-dark/[0.08]"
        >
          {CARDS.map((card, i) => (
            <div
              key={card.num}
              className="promise-item relative bg-white px-[38px] py-[44px] overflow-hidden
                         border-r border-dark/[0.08] last:border-r-0
                         transition-colors duration-[350ms] hover:bg-off-white"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              {/* Ghost number */}
              <div className="font-serif text-[72px] font-light leading-[0.85]
                              tracking-[-0.04em] mb-5 text-dark/30
                              transition-colors duration-[350ms] group-hover:text-gold/[0.14]">
                {card.num}
              </div>
              <h3 className="font-sans text-[18px] font-semibold text-dark leading-[1.3] mb-3">
                {card.title}
              </h3>
              <p className="font-sans text-[13.5px] font-light text-muted leading-[1.75]">
                {card.desc}
              </p>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
