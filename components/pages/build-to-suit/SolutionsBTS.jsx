"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"

/* ─── Data ─────────────────────────────────────────────────────── */

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
    img: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=1200&q=80",
    specs: ["2 000–30 000 m²", "Pont roulant", "Fosse maintenance"],
  },
  {
    tag: "Distribution",
    title: "Hub multi-température",
    img: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=1200&q=80",
    specs: ["Froid & surgelé", "Pharma Grade", "Alimentaire"],
  },
  {
    tag: "Urban Logistics",
    title: "Dernier Kilomètre",
    img: "https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=1200&q=80",
    specs: ["500–5 000 m²", "E-commerce", "Zone urbaine"],
  },
]

/* ─── Component ─────────────────────────────────────────────────── */

export default function SolutionsBTS() {
  const ref = useRef(null)

  const inView = useInView(ref, {
    once: true,
    margin: "-8%",
  })

  return (
    <section
      ref={ref}
      className="bg-off-white py-[100px] overflow-hidden"
    >
      {/* Header */}
      <div className="px-[clamp(20px,5vw,80px)] max-w-[1500px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span
            className="block font-sans text-[12px]
                       tracking-[0.24em] uppercase
                       text-gold font-bold mb-[14px]"
          >
            Solutions clés en main
          </span>

          <h2
            className="font-serif text-[clamp(36px,3.8vw,56px)]
                       font-light text-dark leading-[1.06]
                       tracking-[-0.02em]"
          >
            Une ingénierie de pointe
            <br />
            <strong className="font-semibold">
              centrée sur vos usages
            </strong>
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.12 }}
          className="font-sans text-[15px]
                     font-light text-neutral-700
                     leading-[1.85]
                     max-w-5xl mt-[22px] mb-[52px]"
        >
          Co-concevoir des infrastructures sur mesure qui répondent
          précisément aux réalités de votre activité.
          <br />
          <br />
          Chaque projet fait l'objet d'une modélisation rigoureuse où chaque
          détail compte : ratios de quais, stationnement, flux, sécurité et
          fonctionnalités spécifiques.
        </motion.p>
      </div>

      {/* Slider */}
      <div className="relative">
        <div
          className="
            flex gap-5
            overflow-x-auto overflow-y-hidden
            snap-x snap-mandatory
            scroll-smooth
            px-[20px] md:px-[40px] lg:px-[80px]
            pb-4
            no-scrollbar
            touch-pan-x
          "
          style={{
            WebkitOverflowScrolling: "touch",
          }}
        >
          {CARDS.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.65,
                delay: i * 0.08,
              }}
              className="
                group
                min-w-[86vw]
                sm:min-w-[420px]
                lg:min-w-[360px]
                lg:max-w-[360px]
                flex-shrink-0
                snap-center
              "
            >
              <div
                className="
                  h-full
                  rounded-[22px]
                  overflow-hidden
                  bg-white
                  border border-neutral-200/70
                  shadow-[0_10px_30px_rgba(0,0,0,0.04)]
                  transition-all duration-500
                  hover:-translate-y-1.5
                  hover:shadow-[0_18px_45px_rgba(0,0,0,0.08)]
                "
              >
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={card.img}
                    alt={card.title}
                    fill
                    draggable={false}
                    sizes="(max-width:768px) 86vw, 360px"
                    className="
                      object-cover
                      transition-transform duration-700
                      group-hover:scale-[1.06]
                    "
                  />
                </div>

                {/* Content */}
                <div className="px-6 pt-6 pb-7">
                  <span
                    className="
                      inline-flex items-center
                      rounded-full
                      bg-gold/10
                      text-gold
                      px-3 py-1
                      text-[10px]
                      tracking-[0.16em]
                      uppercase
                      font-medium
                      mb-3
                    "
                  >
                    {card.tag}
                  </span>

                  <h3
                    className="
                      font-serif
                      text-[25px]
                      leading-[1.15]
                      text-neutral-900
                      font-light
                      mb-4
                    "
                  >
                    {card.title}
                  </h3>

                  <div className="flex flex-wrap gap-2">
                    {card.specs.map((s) => (
                      <span
                        key={s}
                        className="
                          text-[11px]
                          text-neutral-600
                          bg-neutral-100
                          border border-neutral-200
                          rounded-full
                          px-3 py-1
                          whitespace-nowrap
                        "
                      >
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

      {/* Hint */}
      <div className="mt-7 px-[20px] md:px-[40px] lg:px-[80px]">
        <div
          className="
            inline-flex items-center gap-3
            rounded-full
            border border-neutral-200
            bg-white
            px-5 py-3
            text-[12px]
            text-neutral-500
          "
        >
          <span className="text-gold text-[14px]">→</span>
          <span>Faites défiler horizontalement</span>
        </div>
      </div>

      {/* Hide scrollbar */}
      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }

        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  )
}