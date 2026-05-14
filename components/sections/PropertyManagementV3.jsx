"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { Wrench, Shield, FileText, BarChart3, ArrowLeftRight } from "lucide-react"

/**
 * PropertyManagementV3
 * ─────────────────────────────────────────────────────────────
 * Pure CSS sticky stacking — no JS scroll listeners.
 * Left panel: position:sticky — stays visible throughout.
 * Right column: each card is position:sticky with top offset
 *   = BASE + (index × HEADER_H) so headers tile perfectly as
 *   the user scrolls and cards layer over each other.
 */

const HEADER_H  = 80   // px — card header bar height (keep in sync with actual height)
const BASE_TOP  = 80   // px — distance from viewport top (≥ header height)

const SERVICES = [
  {
    id:    "maintenance",
    title: "Maintenance & assistance 24h/24 et 7j/7",
    icon:  Wrench,
    desc:  "Une réactivité sans faille et une assistance permanente pour garantir la continuité absolue de vos opérations, de jour comme de nuit.",
    image: "https://res.cloudinary.com/dofyrwzop/image/upload/q_auto/f_auto/v1778504245/bureaux_et_centre_d_affaires_yoldrb.png",
  },
  {
    id:    "securite",
    title: "Gestion technique complète",
    icon:  Shield,
    desc:  "Prise en charge de vos infrastructures et équipements pour garantir leur fiabilité et leur performance continue. ",
    image: "https://res.cloudinary.com/dofyrwzop/image/upload/q_auto/f_auto/v1778599233/WhatsApp_Image_2026-05-12_at_09.04.58_3_moneep.jpg",
  },
  {
    id:    "administratif",
    title: "Sécurité renforcée des biens et des occupants",
    icon:  FileText,
    desc:  "Une protection proactive pour sécuriser les personnes, les biens et les opérations en permanence.",
    image: "https://res.cloudinary.com/dofyrwzop/image/upload/q_auto/f_auto/v1778504245/bureaux_et_centre_d_affaires_yoldrb.png",
  },
  {
    id:    "reporting",
    title: "Optimisation & valorisation des espaces",
    icon:  BarChart3,
    desc:  "Une mise en valeur paysagère et architecturale pour une expérience usager d’exception",
    image: "https://res.cloudinary.com/dofyrwzop/image/upload/q_auto/f_auto/v1778599233/WhatsApp_Image_2026-05-12_at_09.04.58_3_moneep.jpg",
  },
  {
    id:    "Flexibilisation ",
    title: "Flexibilisation des baux & solutions sur mesure ",
    icon:  ArrowLeftRight,
    desc:  "Une agilité contractuelle pour s’adapter à vos besoins évolutifs et soutenir votre croissance.",
    image: "https://res.cloudinary.com/dofyrwzop/image/upload/q_auto/f_auto/v1778599233/WhatsApp_Image_2026-05-12_at_09.04.58_3_moneep.jpg",
  }
]


export default function PropertyManagementV3() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-8%" })

  return (
    <section ref={ref} id="gestion" className="bg-[#F5F3EF] py-24 md:py-32">
      <div className="max-w-[1500px] mx-auto px-8 md:px-10 lg:px-13">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">

          {/* ── Left: sticky label + title ─────────────── */}
          <div className="flex-none lg:w-[36%] sticky top-20">
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="font-sans text-[13px] font-bold tracking-[0.55em] uppercase text-gold/70 mb-5"
            >
              SERVICE APRÈS-LOCATION
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif text-4xl md:text-6xl text-neutral-800 font-light leading-[1.1] mb-5"
            >
              Property & Facility
              <br />
              <span className="italic text-gold">Management<br />Intégré</span>
            </motion.h2>

            <div className="w-10 h-px bg-gold/40 mb-6" />

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="font-sans text-[20px] md:text-[25px] text-neutral-500 leading-[1.9] max-w-[500px]"
            >
              Nous réinventons la gestion après-location avec une offre de services intégrés, disponibles 24/7, garantissant la qualité, la fiabilité et la performance continue de vos infrastructures.
            </motion.p>
          </div>

          {/* ── Right: CSS sticky stacking cards ───────── */}
          <div className="flex-1 flex flex-col min-w-0">
            {SERVICES.map((svc, i) => {
              const Icon = svc.icon
              /*
               * Each card sticks at:  BASE_TOP + i × HEADER_H
               * Card 1 → 80px, Card 2 → 140px, Card 3 → 200px, Card 4 → 260px
               *
               * z-index ascends with DOM order so later cards paint
               * on top of earlier ones as they slide up.
               */
              return (
                <div
                  key={svc.id}
                  className="sticky"
                  style={{
                    top:    `${BASE_TOP + i * HEADER_H}px`,
                    zIndex: i + 1,
                  }}
                >
                  {/* ── Header tab ── */}
                  <div
                    className="flex items-center gap-3.5 px-6 bg-[#F5F3EF] border border-b-0 border-neutral-200"
                    style={{ height: `${HEADER_H}px` }}
                  >
                    <span className="w-2 h-2 rounded-full bg-gold flex-none" />
                    <span className="font-sans text-[20px] font-bold text-neutral-700 tracking-[0.005em]">
                      {svc.title}
                    </span>
                  </div>

                  {/* ── Card body ── */}
                  <div className="grid grid-cols-1 h-[450px] sm:grid-cols-2 bg-[#FDFCFA] border border-neutral-200">

                    {/* Icon + description */}
                    <div className="p-8 md:p-10 flex flex-col justify-center">
                      <div className="w-14 h-14 bg-[#EAE5DC] flex items-center justify-center mb-6">
                        <Icon
                          size={22}
                          strokeWidth={1.4}
                          className="text-neutral-600"
                        />
                      </div>
                      <p className="font-sans text-[20px] text-neutral-500 leading-[1.88]">
                        {svc.desc}
                      </p>
                    </div>

                    {/* Photo */}
                    <div className="relative">
                      <Image
                        src={svc.image}
                        alt={svc.title}
                        fill
                        className="object-center bg-center"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 30vw"
                      />
                    </div>
                  </div>
                </div>
              )
            })}

            {/* Spacer so the last card can fully scroll into view */}
            <div style={{ height: `${(SERVICES.length - 1) * HEADER_H}px` }} />
          </div>

        </div>
      </div>
    </section>
  )
}
