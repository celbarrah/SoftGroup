"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

/**
 * ClientsBand — Logos partenaires défilants
 * Logos locaux dans /public/logos/
 * Grayscale par défaut → couleur réelle au survol
 */

const CLIENTS = [
  { name: "McDonald's",    file: "macdonald.webp"    },
  { name: "Samsung",       file: "samsung.webp"      },
  { name: "Bolloré",       file: "bolore.webp"       },
  { name: "Colgate",       file: "Colgate.png"       },
  { name: "IKEA",          file: "IKEA.png"          },
  { name: "Shell",         file: "shell.jpg"         },
  { name: "Huawei",        file: "Huawei.png"        },
  { name: "KPMG",          file: "KPMG.png"          },
  { name: "Nestlé",        file: "Nestle.webp"       },
  { name: "P&G",           file: "P&G.webp"          },
  { name: "Décathlon",     file: "Decathlon.jpg"     },
  { name: "Dicastal",      file: "Dicastal.webp"     },
  { name: "Pfizer",        file: "Pfizer.png"        },
  { name: "Bayer",         file: "Bayer.png"         },
  { name: "Nike",          file: "Nike.png"          },
  { name: "OCP",           file: "OCP.jpg"           },
  { name: "Allianz",       file: "Allianz.png"       },
  { name: "Orange",        file: "Orange.png"        },
  { name: "Stellantis",    file: "Stellantis.png"    },
  { name: "Philip Morris", file: "philip-morris.png" },
  { name: "Siemens",       file: "Siemens.jpg"       },
  { name: "Pneurama",      file: "PNEURAMA.png"      },
  { name: "Fiat",          file: "fiat.png"          },
  { name: "Engie",         file: "Engie.png"         },
  { name: "Aramex",        file: "aramex.jpg"        },
  { name: "Unilever",      file: "unilever.png"      },
  { name: "Veolia",        file: "veolia.png"        },
  { name: "Colas",         file: "colas.png"         },
]

function LogoItem({ client }) {
  return (
    <div className="flex-none flex items-center justify-center px-8 group cursor-default">
      {/* Fixed-size container ensures every logo takes the same visual space */}
      <div className="w-[130px] h-[52px] flex items-center justify-center">
        <img
          src={`/logos/${client.file}`}
          alt={client.name}
          className="max-w-full max-h-full w-auto h-auto object-contain grayscale-0 opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
          loading="lazy"
          draggable="false"
        />
      </div>
    </div>
  )
}

export default function ClientsBand() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-5% 0px" })

  /*
   * Duplicate the list exactly once.
   * The keyframe uses translateX(-50%), so 2 copies = one seamless loop.
   * width:max-content is critical — without it the % is relative to the
   * parent viewport, not the scroll content, and only ~10 logos appear.
   */
  const doubled = [...CLIENTS, ...CLIENTS]

  return (
    <section ref={ref} className="bg-white py-16 md:py-24 overflow-hidden border-y border-gray-100">

      {/* Label */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
        className="text-center mb-10"
      >
        <p className="font-sans text-[15px] font-bold tracking-[0.6em] uppercase text-gold">
          Nos Partenaires de Confiance
        </p>
      </motion.div>

      {/* Row 1 — scroll gauche → droite */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative overflow-hidden mb-5"
      >
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
        {/* width:max-content makes translateX(-50%) reference the scroll content, not the parent */}
        <div className="flex animate-marquee" style={{ width: "max-content" }}>
          {doubled.map((client, i) => (
            <LogoItem key={`r1-${i}`} client={client} />
          ))}
        </div>
      </motion.div>

      {/* Row 2 — scroll droite → gauche */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="relative overflow-hidden"
      >
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
        <div
          className="flex"
          style={{ width: "max-content", animation: "marquee 45s linear infinite reverse" }}
        >
          {doubled.map((client, i) => (
            <LogoItem key={`r2-${i}`} client={client} />
          ))}
        </div>
      </motion.div>

    </section>
  )
}
