"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { Wrench, Shield, FileText, BarChart3, ArrowLeftRight, ServerCog, ShieldCheck, Shovel, ChartNoAxesCombined } from "lucide-react"

const HEADER_H  = 80
const BASE_TOP  = 10

const SERVICES = [
  {
    id:    "maintenance",
    title: "Maintenance & assistance 24h/24 et 7j/7",
    icon:  Wrench,
    desc:  "Une réactivité sans faille et une assistance permanente pour garantir la continuité absolue de vos opérations, de jour comme de nuit.",
    image: "https://res.cloudinary.com/dofyrwzop/image/upload/q_auto/f_auto/v1778857935/MAINTENANCE_1_io0qxp.jpg",
  },
  {
    id:    "securite",
    title: "Gestion technique complète",
    icon:  ServerCog,
    desc:  "Prise en charge de vos infrastructures et équipements pour garantir leur fiabilité et leur performance continue.",
    image: "https://res.cloudinary.com/dofyrwzop/image/upload/q_auto/f_auto/v1778855533/TECHNIQUE_dijci6.jpg",
  },
  {
    id:    "administratif",
    title: "Sécurité renforcée des biens et des occupants",
    icon:  ShieldCheck,
    desc:  "Une protection proactive pour sécuriser les personnes, les biens et les opérations en permanence.",
    image: "https://res.cloudinary.com/dofyrwzop/image/upload/q_auto/f_auto/v1778855382/SECURITE_c8i7ks.jpg",
  },
  {
    id:    "reporting",
    title: "Optimisation & valorisation des espaces",
    icon:  Shovel,
    desc:  "Une mise en valeur paysagère et architecturale pour une expérience usager d'exception.",
    image: "https://res.cloudinary.com/dofyrwzop/image/upload/q_auto/f_auto/v1778855398/OPTIMI_PAYSG_me7aag.jpg",
  },
  {
    id:    "flexibilisation",
    title: "Flexibilisation des baux & solutions sur mesure",
    icon:  ChartNoAxesCombined,
    desc:  "Une agilité contractuelle pour s'adapter à vos besoins évolutifs et soutenir votre croissance.",
    image: "https://res.cloudinary.com/dofyrwzop/image/upload/t_OPT/FLEX_BAUX_ilqw8f.jpg",
  },
]

export default function PropertyManagementV3() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-8%" })

  return (
    <section ref={ref} id="gestion" className="bg-[#F5F3EF] py-24 md:py-32">
      <div className="max-w-[1500px] mx-auto px-8 md:px-10 lg:px-13">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">

          {/* Left: sticky label + title */}
          <div className="flex-none lg:w-[36%] sticky top-20">
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="font-sans text-[17px] font-bold tracking-[0.55em] uppercase text-gold/70 mb-5"
            >
              SERVICE APRÈS-LOCATION
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif text-4xl md:text-5xl text-neutral-800 font-light leading-[1.1] mb-5"
            >
              Property & Facility
              <br />
              <span className="italic text-gold">Management Intégré</span>
            </motion.h2>

            <div className="w-10 h-px bg-gold/40 mb-6" />

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="font-sans text-[20px] md:text-[25px] text-neutral-500 leading-[1.9] max-w-[500px] mb-10"
            >
              Nous réinventons la gestion après-location avec une offre de services intégrés, disponibles 24/7, garantissant la qualité, la fiabilité et la performance continue de vos infrastructures.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.35 }}
            >
              <a
                href="/gestion-valorisation"
                className="inline-flex items-center gap-3 font-sans text-[15px] tracking-[0.28em] uppercase font-bold text-gold border border-gold/30 px-8 py-3.5 hover:bg-gold hover:text-white transition-all duration-300 group"
              >
                Découvrir nos services
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <path d="M1 12L12 1M12 1H4M12 1V9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </motion.div>
          </div>

          {/* Right: CSS sticky stacking cards */}
          <div className="flex-1 flex flex-col min-w-0">
            {SERVICES.map((svc, i) => {
              const Icon = svc.icon
              return (
                <div
                  key={svc.id}
                  className="sticky"
                  style={{
                    top:    BASE_TOP + i * HEADER_H + "px",
                    zIndex: i + 1,
                  }}
                >
                  {/* Header tab */}
                  <div
                    className="flex items-center gap-3.5 px-6 bg-[#F5F3EF] border border-b-0 border-neutral-200"
                    style={{ height: HEADER_H + "px" }}
                  >
                    <span className="w-2 h-2 rounded-full bg-gold flex-none" />
                    <span className="font-sans text-[13px] md:text-[20px] font-bold text-neutral-700 tracking-[0.005em]">
                      {svc.title}
                    </span>
                  </div>

                  {/* Card body */}
                  <div className="grid grid-cols-1 sm:min-h-[450px] sm:grid-cols-2 bg-[#FDFCFA] border border-neutral-200">
                    <div className="p-6 md:p-10 flex flex-col justify-center">
                      <div className="w-10 h-10 sm:w-14 sm:h-14 bg-[#EAE5DC] flex items-center justify-center mb-4 sm:mb-6">
                        <Icon size={20} strokeWidth={1.4} className="text-neutral-600" />
                      </div>
                      <p className="font-sans text-[14px] md:text-[20px] text-neutral-500 leading-[1.88]">
                        {svc.desc}
                      </p>
                    </div>
                    <div className="relative h-[200px] sm:h-[300px] md:h-auto">
                      <Image
                        src={svc.image}
                        alt={svc.title}
                        fill
                        className="object-cover object-center"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 30vw"
                      />
                    </div>
                  </div>
                </div>
              )
            })}

            {/* Spacer so the last card can fully scroll into view */}
            <div style={{ height: (SERVICES.length - 1) * HEADER_H + "px" }} />
          </div>

        </div>
      </div>
    </section>
  )
}
