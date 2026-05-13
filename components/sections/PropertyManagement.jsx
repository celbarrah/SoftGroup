"use client"

import { useRef } from "react"
import { motion, useInView, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { ArrowUpRight, CheckCircle } from "lucide-react"

/**
 * PropertyManagement — Property & Facility Management Intégré
 * ─────────────────────────────────────────────────────────
 * Section full-width inspirée du style image 4 :
 * photo bâtiment plein écran + texte premium overlay gauche.
 */

const SERVICES_LIST = [
  "Maintenance technique 24h/24 & 7j/7",
  "Sécurité & surveillance hybride",
  "Gestion administrative & réglementaire",
  "Entretien des espaces communs & façades",
  "Gestion des flux & logistique interne",
  "Reporting & suivi de performance",
]

export default function PropertyManagement() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-8%" })

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })
  const bgY = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"])

  return (
    <section ref={ref} className="relative overflow-hidden bg-[#080808]" id="gestion">

      {/* ── Two-column layout ───────────────────────── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[680px] lg:min-h-[760px]">

        {/* ── Left: photo ─────────────────────────────── */}
        <div className="relative overflow-hidden h-[420px] lg:h-auto order-2 lg:order-1">
          <motion.div
            style={{ y: bgY }}
            className="absolute inset-0 w-full h-[110%] -top-[5%]"
          >
            <Image
              src="https://res.cloudinary.com/dofyrwzop/image/upload/q_auto/f_auto/v1778504245/bureaux_et_centre_d_affaires_yoldrb.png"
              alt="Property & Facility Management — SOFTGROUP"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>

          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#080808] opacity-60 hidden lg:block" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/70 to-transparent lg:hidden" />

          {/* Floating tag on photo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="absolute bottom-8 left-8 bg-black/60 backdrop-blur-md border border-white/10 px-5 py-4"
          >
            <p className="font-sans text-[14px] tracking-[0.3em] uppercase text-gold mb-1">Disponibilité</p>
            <p className="font-serif text-lg text-white font-light">24h / 7j</p>
          </motion.div>
        </div>

        {/* ── Right: content ──────────────────────────── */}
        <div className="order-1 lg:order-2 flex flex-col justify-center px-10 md:px-14 lg:px-16 xl:px-20 py-20 lg:py-24 relative z-10">

          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="font-sans text-[14px] tracking-[0.55em] uppercase text-gold/60 mb-7"
          >
            Gestion Après-Location
          </motion.p>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-3xl md:text-4xl lg:text-5xl text-white font-light leading-[1.1] mb-8"
          >
            Property &amp; Facility
            <br />
            <span className="italic text-gold">Management Intégré</span>
          </motion.h2>

          {/* Gold divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 1.1, delay: 0.25 }}
            className="w-14 h-px bg-gold/50 mb-8 origin-left"
          />

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-sans text-[16px] text-white/55 leading-[1.9] mb-10 max-w-xl"
          >
            Nous réinventons la gestion après-location à travers une approche
            personnalisée, alliant expertise technique, sécuritaire et
            administrative. Disponibles 24h/24 et 7j/7, nos équipes veillent
            au bon fonctionnement de vos actifs et infrastructures afin de
            garantir performance, continuité opérationnelle et sérénité
            au quotidien.
          </motion.p>

          {/* Services checklist */}
          <motion.ul
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.42 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-12"
          >
            {SERVICES_LIST.map((item, i) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, x: -16 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.45 + i * 0.07 }}
                className="flex items-start gap-3"
              >
                <CheckCircle
                  size={14}
                  className="text-gold flex-none mt-0.5"
                  strokeWidth={1.5}
                />
                <span className="font-sans text-[15px] text-white/50 leading-snug">
                  {item}
                </span>
              </motion.li>
            ))}
          </motion.ul>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-3 font-sans text-[13px] tracking-[0.3em] uppercase text-gold border border-gold/30 px-8 py-4 hover:bg-gold hover:text-[#080808] transition-all duration-400 group"
            >
              Demander une expertise
              <ArrowUpRight
                size={14}
                strokeWidth={1.5}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Bottom thin gold border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
    </section>
  )
}
