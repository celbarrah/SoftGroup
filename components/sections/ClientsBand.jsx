"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

/**
 * ClientsBand — Infinite scrolling partner logos strip
 * ─────────────────────────────────────────────────────────
 * Double-copy marquee technique for seamless loop.
 * Dark Premium — fond noir, logos blanc pâle → or au survol.
 *
 * TO REPLACE PLACEHOLDERS:
 *  <Image src={`/logos/${logo.key}.svg`} alt={logo.name}
 *         width={120} height={36} className="object-contain
 *         brightness-0 invert opacity-20 hover:opacity-60
 *         transition-all duration-300" />
 */

const LOGOS = [
  { key: "geodis",     name: "GEODIS"        },
  { key: "roche",      name: "Roche"         },
  { key: "bollore",    name: "Bolloré"       },
  { key: "kia",        name: "KIA"           },
  { key: "stellantis", name: "Stellantis"    },
  { key: "maersk",     name: "Maersk"        },
  { key: "total",      name: "TotalEnergies" },
  { key: "bmi",        name: "BMI Group"     },
  { key: "areva",      name: "Orano"         },
  { key: "decathlon",  name: "Decathlon"     },
]

export default function ClientsBand() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-5% 0px" })

  return (
    <section ref={ref} className="bg-white py-30 md:py-60 overflow-hidden border-y border-white/5" style={{ clipPath: 'polygon(0 15%, 100% 0, 100% 85%, 0 100%)' }}>

      {/* ── Section header ──────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="px-8 md:px-12 lg:px-20 max-w-7xl mx-auto mb-12 flex flex-col items-center"
      >
        <p className="font-sans text-[18px] font-extrabold text-center tracking-[0.4em] uppercase text-gold mb-3">
          Nos Partenaires de Confiance
        </p>
        <p className="font-sans text-[16px] text-center text-neutral-700 max-w-2xl leading-[1.85]">
          SOFTGROUP Immobilier accompagne les leaders nationaux et internationaux
          dans leur stratégie d'implantation au Maroc. Un écosystème de partenaires
          exigeants qui ont trouvé en SoftGroup une solution immobilière à la hauteur
          de leurs ambitions.
        </p>
      </motion.div>

      {/* ── Marquee track ───────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="relative"
      >

        {/* Scrolling container */}
        <div className="flex animate-marquee">
          {[...LOGOS, ...LOGOS].map((logo, i) => (
            <div
              key={`${logo.key}-${i}`}
              className="flex-none px-10 flex items-center justify-center group cursor-default"
            >
              {/* Placeholder — replace with <Image> once logos are available */}
              <span className="font-serif text-xl text-neutral-800 italic tracking-wide group-hover:text-gold/60 transition-colors duration-400 whitespace-nowrap select-none">
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </motion.div>

    </section>
  )
}
