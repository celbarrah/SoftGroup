"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

/**
 * ClientsBand — Logos partenaires défilants
 * Logos locaux dans /public/logos/
 * Grayscale par défaut → couleur réelle au survol
 */

/*
 * scale — optional multiplier applied to the logo image.
 * Default is 1 (no scaling). Increase for logos that render
 * too small inside the 130×52 container (e.g. Dicastal, Orange…).
 */
const CLIENTS = [
  { name: "McDonald's",    file: "macdonald.webp",    scale: 1    },
  { name: "Samsung",       file: "samsung.webp",       scale: 1    },
  { name: "Bolloré",       file: "bolore.webp",        scale: 2    },
  { name: "GEODIS",        file: "GEODIS.jpg",         scale: 1.5    },
  { name: "Roche",         file: "Roche.jpg",          scale: 1    },
  { name: "KIA",           file: "kia.png",            scale: 1    },
  { name: "Colgate",       file: "Colgate.png",        scale: 1    },
  { name: "IKEA",          file: "IKEA.png",           scale: 1    },
  { name: "Shell",         file: "shell.jpg",          scale: 1    },
  { name: "Huawei",        file: "Huawei.png",         scale: 1    },
  { name: "KPMG",          file: "KPMG.png",           scale: 1    },
  { name: "Nestlé",        file: "Nestle.webp",        scale: 1    },
  { name: "P&G",           file: "P&G.webp",           scale: 0.8    },
  { name: "Décathlon",     file: "Decathlon.jpg",      scale: 1.3   },
  { name: "Dicastal",      file: "Dicastal.webp",      scale: 2.2  },
  { name: "Pfizer",        file: "Pfizer.png",         scale: 1    },
  { name: "Bayer",         file: "Bayer.png",          scale: 1.06    },
  { name: "Nike",          file: "Nike.png",           scale: 1.15    },
  { name: "OCP",           file: "OCP.jpg",            scale: 1    },
  { name: "Allianz",       file: "Allianz.png",        scale: 1.1    },
  { name: "Orange",        file: "Orange.png",         scale: 1.75  },
  { name: "Stellantis",    file: "Stellantis.png",     scale: 1.8  },
  { name: "Philip Morris", file: "philip-morris.png",  scale: 1.9  },
  { name: "Siemens",       file: "Siemens.jpg",        scale: 1.3    },
  { name: "Pneurama",      file: "PNEURAMA.png",       scale: 1.8  },
  { name: "Fiat",          file: "fiat.png",           scale: 1    },
  { name: "Engie",         file: "Engie.png",          scale: 1    },
  { name: "Aramex",        file: "aramex.jpg",         scale: 1    },
  { name: "Unilever",      file: "unilever.png",       scale: 1    },
  { name: "Veolia",        file: "veolia.png",         scale: 1    },
  { name: "Colas",         file: "colas.png",          scale: 1    },
]

function LogoItem({ client }) {
  const scale = client.scale ?? 1
  return (
    <div className="flex-none flex items-center justify-center px-8 group cursor-default">
      {/* Fixed-size container — scale is applied to the img itself so the
          slot size stays constant while the logo image gets larger */}
      <div className="w-[130px] h-[52px] flex items-center justify-center overflow-hidden">
        <img
          src={`/logos/${client.file}`}
          alt={client.name}
          className="max-w-full max-h-full w-auto h-auto object-contain grayscale-0 opacity-100 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
          style={{ transform: `scale(${scale})`, transformOrigin: "center" }}
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
    <section ref={ref} className="bg-white py-5 md:pt-24 md:pb-5 overflow-hidden border-y border-gray-100">

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
        transition={{ duration: 3, delay: 2 }}
        className="relative overflow-hidden mb-5"
      >
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
        {/* width:max-content makes translateX(-50%) reference the scroll content, not the parent */}
        <div className="flex animate-marquee" style={{ width: "max-content" }}>
          {CLIENTS.map((client, i) => (
            <LogoItem key={`r1-${i}`} client={client} />
          ))}
        </div>
      </motion.div>

      {/* Row 2 — scroll droite → gauche */}
      {/* <motion.div
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
      </motion.div> */}

    </section>
  )
}
