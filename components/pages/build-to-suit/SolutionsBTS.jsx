"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"

const CARDS = [
  {
    tag: "Logistique",
    title: "Entrepôt A+",
    img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&q=80",
    specs: ["5 000–50 000 m²", "H. 12m", "ESFR", "Dalle 5T/m²"],
  },
  {
    tag: "Industriel",
    title: "Unité de production",
    img: "https://res.cloudinary.com/dofyrwzop/image/upload/q_auto/f_auto/v1780325130/UNITE_DE_PRODUCTION_ggklto.jpg",
    specs: ["2 000–30 000 m²", "Pont roulant", "Fosse maintenance"],
  },
  {
    tag: "Distribution",
    title: "Hub multi-température",
    img: "https://res.cloudinary.com/dofyrwzop/image/upload/q_auto/f_auto/v1780324937/HUB_MULTI_TEMP_lbmavc.png",
    specs: ["Froid & surgelé", "Pharma Grade", "Alimentaire"],
  },
  {
    tag: "Urban Logistics",
    title: "Dernier Kilomètre",
    img: "https://res.cloudinary.com/dofyrwzop/image/upload/q_auto/f_auto/v1780324892/DERNIER_KM_tsjrhu.png",
    specs: ["500–5 000 m²", "E-commerce", "Zone urbaine"],
  },
]

export default function SolutionsBTS() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-8%" })

  return (
    <section ref={ref} className="bg-off-white py-14 overflow-hidden">

      {/* ── Header ── */}
      <div className="px-[clamp(24px,5vw,80px)] max-w-[1500px] mx-auto mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="block font-sans text-[14px] tracking-[0.24em] uppercase text-gold font-bold mb-[14px]">
            Solutions clés en main
          </span>
          <h2 className="font-serif text-[clamp(36px,3.8vw,56px)] font-light text-dark leading-[1.06] tracking-[-0.02em] mb-[22px]">
            Une ingénierie de pointe
            <br />
            <strong className="font-semibold">centrée sur vos usages</strong>
          </h2>
          <p className="font-sans text-[18px] font-light text-neutral-600 leading-[1.85] max-w-3xl">
            Co-concevoir des infrastructures sur mesure qui répondent précisément aux réalités de votre activité.
            Chaque projet fait l&apos;objet d&apos;une modélisation rigoureuse où chaque détail compte : ratios de quais,
            stationnement, flux, sécurité et fonctionnalités spécifiques.
          </p>
        </motion.div>
      </div>

      {/* ── Cards
            Mobile  → horizontal scroll (snap)
            Desktop → 4-column grid
      ── */}
      <div className="px-[clamp(24px,5vw,80px)] max-w-[1500px] mx-auto">

        {/* Scroll wrapper — flex on mobile, grid on lg+ */}
        <div
          className="
            flex gap-5
            overflow-x-auto overflow-y-hidden
            snap-x snap-mandatory scroll-smooth
            pb-4
            lg:grid lg:grid-cols-4
            lg:overflow-visible lg:pb-0
            lg:snap-none
          "
          style={{ WebkitOverflowScrolling: "touch", scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {CARDS.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: i * 0.08 }}
              /* Mobile: fixed-width card that snaps; Desktop: grid auto-sizes */
              className="
                flex-none w-[80vw] sm:w-[360px]
                snap-start
                lg:w-auto lg:flex-auto lg:snap-none
                group
              "
            >
              <div className="h-full rounded-[22px] overflow-hidden bg-white border border-neutral-200/70 shadow-[0_10px_30px_rgba(0,0,0,0.04)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_18px_45px_rgba(0,0,0,0.08)]">
                {/* Image */}
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={card.img}
                    alt={card.title}
                    fill
                    draggable={false}
                    sizes="(max-width:1024px) 80vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                  />
                </div>

                {/* Content */}
                <div className="px-6 pt-6 pb-7">
                  <span className="inline-flex items-center rounded-full bg-gold/10 text-gold px-3 py-1 text-[12px] tracking-[0.16em] uppercase font-medium mb-3">
                    {card.tag}
                  </span>
                  <h3 className="font-serif text-[22px] leading-[1.15] text-neutral-900 font-light mb-4">
                    {card.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {card.specs.map((s) => (
                      <span key={s} className="text-[12px] text-neutral-600 bg-neutral-100 border border-neutral-200 rounded-full px-3 py-1 whitespace-nowrap">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Hide scrollbar globally for this element */}
      <style>{`.solutions-scroll::-webkit-scrollbar { display: none; }`}</style>
    </section>
  )
}
