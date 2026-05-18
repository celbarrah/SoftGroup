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
  { name: "McDonald's",    file: "/logos/macdonald.webp",    scale: 1    },
  { name: "Samsung",       file: "/logos/samsung.webp",       scale: 1    },
  { name: "Bolloré",       file: "/logos/bolore.webp",        scale: 2    },
  { name: "GEODIS",        file: "/logos/GEODIS.jpg",         scale: 1.5    },
  { name: "Roche",         file: "/logos/Roche.jpg",          scale: 1    },
  { name: "KIA",           file: "/logos/Kia.png",            scale: 1    },
  { name: "Colgate",       file: "/logos/Colgate.png",        scale: 1    },
  { name: "IKEA",          file: "/logos/IKEA.png",           scale: 1    },
  { name: "Shell",         file: "/logos/shell.jpg",          scale: 1    },
  { name: "Huawei",        file: "/logos/Huawei.png",         scale: 1    },
  { name: "KPMG",          file: "/logos/KPMG.png",           scale: 1    },
  { name: "Nestlé",        file: "/logos/Nestle.webp",        scale: 1    },
  { name: "P&G",           file: "https://res.cloudinary.com/dofyrwzop/image/upload/q_auto/f_auto/v1779093123/P_G-removebg-preview_lv6mon.png",           scale: 0.8    },
  { name: "Décathlon",     file: "/logos/Decathlon.jpg",      scale: 1.3   },
  { name: "Dicastal",      file: "/logos/Dicastal.webp",      scale: 2.2  },
  { name: "Pfizer",        file: "/logos/Pfizer.png",         scale: 1    },
  { name: "Bayer",         file: "/logos/Bayer.png",          scale: 1.06    },
  { name: "Nike",          file: "/logos/Nike.png",           scale: 1.15    },
  { name: "OCP",           file: "/logos/OCP.jpg",            scale: 1    },
  { name: "Allianz",       file: "/logos/Allianz.png",        scale: 1.1    },
  { name: "Orange",        file: "/logos/Orange.png",         scale: 1.75  },
  { name: "Stellantis",    file: "/logos/Stellantis.png",     scale: 1.8  },
  { name: "Philip Morris", file: "/logos/philip-morris.png",  scale: 1.9  },
  { name: "Siemens",       file: "/logos/Siemens.jpg",        scale: 1.3    },
  { name: "Pneurama",      file: "/logos/PNEURAMA.png",       scale: 1.8  },
  { name: "Fiat",          file: "/logos/fiat.png",           scale: 1    },
  { name: "Engie",         file: "/logos/Engie.png",          scale: 1    },
  { name: "Aramex",        file: "/logos/aramex.jpg",         scale: 1    },
  { name: "Unilever",      file: "/logos/unilever.png",       scale: 1    },
  { name: "Veolia",        file: "/logos/veolia.png",         scale: 1    },
  { name: "Colas",         file: "/logos/colas.png",          scale: 1    },
]

function LogoItem({ client }) {
  const scale = client.scale ?? 1
  return (
    <div className="flex-none flex items-center justify-center px-8 group cursor-default">
      {/* Fixed-size container — scale is applied to the img itself so the
          slot size stays constant while the logo image gets larger */}
      <div className="w-[130px] h-[52px] flex items-center justify-center overflow-hidden">
        <img
          src={`${client.file}`}
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
