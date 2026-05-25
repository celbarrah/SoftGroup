"use client"
import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"

/* ─── Data ─────────────────────────────────────────────────────── */

const CARDS = [
  {
    tag:   "Logistique",
    title: "Entrepôt A+",
    img:   "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=700&q=80",
    specs: ["5 000–50 000 m²", "H. 12m", "ESFR", "Dalle 5T/m²"],
  },
  {
    tag:   "Industriel",
    title: "Unité de production",
    img:   "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=700&q=80",
    specs: ["2 000–30 000 m²", "Pont roulant", "Fosse maintenance"],
  },
  {
    tag:   "Distribution",
    title: "Hub multi-température",
    img:   "https://images.unsplash.com/photo-1553413077-190dd305871c?w=700&q=80",
    specs: ["Froid & surgelé", "Pharma Grade", "Alimentaire"],
  },
  {
    tag:   "Urban Logistics",
    title: "Dernier Kilomètre",
    img:   "https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=700&q=80",
    specs: ["500–5 000 m²", "E-commerce", "Zone urbaine"],
  },
]

/* ─── Component ─────────────────────────────────────────────────── */

export default function SolutionsBTS() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-8%" })
  const railRef = useRef(null)

  /* Drag-to-scroll */
  const drag = useRef({ active: false, startX: 0, scrollLeft: 0 })
  
  return (
    <section ref={ref} className="bg-off-white pt-[100px] pb-[100px] overflow-hidden">

      {/* Header + intro — padded */}
      <div className="px-[clamp(20px,5vw,80px)] max-w-[1500px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="block font-sans text-[13px] tracking-[0.24em] uppercase text-gold font-bold mb-[14px]">
            Solutions clés en main
          </span>
          <h2 className="font-serif text-[clamp(36px,3.8vw,56px)] font-light text-dark leading-[1.06] tracking-[-0.01em]">
            Une ingénierie de pointe<br />
            <strong className="font-semibold">centrée sur vos usages</strong>
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.12 }}
          className="font-sans text-[15px] font-light text-neutral-800 leading-[1.82] max-w-5xl mt-[18px] mb-[48px]"
        >
          Co-concevoir des infrastructures sur mesure qui répondent précisément
          aux réalités de votre activité.
          <br /><br />
          Chaque projet fait l'objet d'une modélisation rigoureuse où chaque
          détail compte : ratios de quais, stationnement, flux, sécurité et
          fonctionnalités spécifiques. Notre valeur ajoutée réside dans notre
          capacité à piloter des chantiers à forte contrainte technique.
        </motion.p>
      </div>

      {/* Card grid */}
      <div
        ref={railRef}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center gap-4 pb-1
                   px-[clamp(20px,5vw,80px)] max-w-[1500px] mx-auto">
        {CARDS.map((card, i) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 + i * 0.08 }}
            className="group w-full max-w-[320px] rounded-[18px] overflow-hidden
                       bg-noir border border-dark/[0.08]
                       transition-transform duration-[400ms] hover:-translate-y-1"
          >
            {/* Card image */}
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src={card.img}
                alt={card.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-[1.07]"
                sizes="320px"
                draggable={false}
              />
            </div>

            {/* Card body */}
            <div className="px-6 pt-[22px] pb-[26px]">
              <span className="inline-block font-sans text-[9.5px] tracking-[0.18em] uppercase
                               text-gold bg-gold/10 rounded-full px-3 py-0.5 mb-2.5">
                {card.tag}
              </span>
              <h3 className="font-serif text-[21px] font-light text-white leading-[1.2] mb-2.5">
                {card.title}
              </h3>
              <div className="flex flex-wrap gap-[5px]">
                {card.specs.map((s) => (
                  <span
                    key={s}
                    className="font-sans text-[10.5px] text-white/40
                               bg-white/[0.05] border border-white/[0.07]
                               rounded-full px-2.5 py-0.5"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Scroll hint
      <div className="flex items-center gap-2 mt-[18px] px-[clamp(20px,5vw,80px)]
                      font-sans text-[11.5px] font-light text-muted">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
        Faites défiler pour explorer toutes les typologies
      </div> */}

    </section>
  )
}
