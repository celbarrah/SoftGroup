"use client"

import { useRef, useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { ArrowUpRight, Shield, Wrench, BarChart3, Layers } from "lucide-react"

/* ─── Service data ─────────────────────────────────────────── */
const SERVICES = [
  {
    num: "01",
    icon: Wrench,
    category: "Technique",
    title: "Maintenance Technique\n24h/24",
    desc: "Une équipe d'ingénieurs et techniciens spécialisés disponibles à toute heure. Interventions préventives et curatives sur tous vos équipements, systèmes CVC, plomberie, électricité et infrastructure.",
    features: [
      "Interventions préventives planifiées",
      "Astreinte 24h/24 & 7j/7",
      "GMAO & suivi des tickets en temps réel",
      "Rapport mensuel de performance",
    ],
    image: "https://res.cloudinary.com/dofyrwzop/image/upload/q_auto/f_auto/v1778504245/bureaux_et_centre_d_affaires_yoldrb.png",
    accent: "#C4A55A",
  },
  {
    num: "02",
    icon: Shield,
    category: "Sécurité",
    title: "Sécurité &\nSurveillance Hybride",
    desc: "Dispositif sécuritaire multicouche combinant agents de gardiennage certifiés, vidéosurveillance HD et systèmes d'accès biométriques. Une protection 360° pour vos actifs et occupants.",
    features: [
      "Gardiennage certifié & formé",
      "Vidéosurveillance HD centralisée",
      "Contrôle d'accès biométrique",
      "Centrale de télésurveillance dédiée",
    ],
    image: "https://res.cloudinary.com/dofyrwzop/image/upload/q_auto/f_auto/v1778599233/WhatsApp_Image_2026-05-12_at_09.04.58_3_moneep.jpg",
    accent: "#C4A55A",
  },
  {
    num: "03",
    icon: Layers,
    category: "Administratif",
    title: "Gestion Administrative\n& Réglementaire",
    desc: "Pilotage complet des obligations légales, assurances, copropriétés et contrats fournisseurs. Nous gérons la complexité administrative pour que vous puissiez vous concentrer sur votre cœur de métier.",
    features: [
      "Gestion des baux & charges locatives",
      "Conformité réglementaire & audits",
      "Coordination syndic & copropriété",
      "Suivi des contrats fournisseurs",
    ],
    image: "https://res.cloudinary.com/dofyrwzop/image/upload/q_auto/f_auto/v1778504245/bureaux_et_centre_d_affaires_yoldrb.png",
    accent: "#C4A55A",
  },
  {
    num: "04",
    icon: BarChart3,
    category: "Performance",
    title: "Reporting &\nSuivi de Performance",
    desc: "Tableaux de bord personnalisés, rapports périodiques et analyses prédictives. Une vision complète de la performance de vos actifs pour une prise de décision éclairée et une optimisation continue.",
    features: [
      "Dashboards KPIs en temps réel",
      "Rapports mensuels & annuels",
      "Analyse prédictive des coûts",
      "Recommandations d'optimisation",
    ],
    image: "https://res.cloudinary.com/dofyrwzop/image/upload/q_auto/f_auto/v1778599233/WhatsApp_Image_2026-05-12_at_09.04.58_3_moneep.jpg",
    accent: "#C4A55A",
  },
]

/* ─── Card component ───────────────────────────────────────── */
function ServiceCard({ service, direction }) {
  const Icon = service.icon

  const variants = {
    enter: (d) => ({
      opacity: 0,
      y: d > 0 ? 60 : -60,
      scale: 0.96,
    }),
    center: {
      opacity: 1,
      y: 0,
      scale: 1,
    },
    exit: (d) => ({
      opacity: 0,
      y: d > 0 ? -60 : 60,
      scale: 0.96,
    }),
  }

  return (
    <motion.div
      custom={direction}
      variants={variants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="absolute inset-0 flex flex-col"
    >
      {/* Image top */}
      <div className="relative flex-1 overflow-hidden" style={{ minHeight: 0 }}>
        <Image
          src={service.image}
          alt={service.category}
          fill
          className="object-cover object-center"
          sizes="(max-width: 1024px) 100vw, 60vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

        {/* Top badges row */}
        <div className="absolute top-6 left-6 right-6 flex items-start justify-between">
          {/* Number badge */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2">
            <span className="font-sans text-[10px] tracking-[0.35em] uppercase text-white/60">Service</span>
            <p className="font-serif text-2xl text-white font-light leading-none mt-0.5">{service.num}</p>
          </div>

          {/* Category pill */}
          <div className="bg-gold/90 backdrop-blur-sm px-4 py-2">
            <span className="font-sans text-[9px] tracking-[0.3em] uppercase text-white">{service.category}</span>
          </div>
        </div>

        {/* Icon floating badge */}
        <div className="absolute bottom-6 right-6 w-12 h-12 bg-white flex items-center justify-center shadow-lg">
          <Icon size={20} className="text-gold" strokeWidth={1.5} />
        </div>
      </div>

      {/* Content bottom */}
      <div className="bg-white px-8 py-8 flex-none">
        <h3 className="font-serif text-2xl md:text-3xl text-neutral-800 font-light leading-[1.15] mb-4 whitespace-pre-line">
          {service.title}
        </h3>
        <p className="font-sans text-[14px] text-neutral-500 leading-[1.8] mb-6 line-clamp-3">
          {service.desc}
        </p>
        <ul className="grid grid-cols-1 gap-2 mb-6">
          {service.features.map((f) => (
            <li key={f} className="flex items-center gap-2.5">
              <span className="w-1 h-1 rounded-full bg-gold flex-none" />
              <span className="font-sans text-[13px] text-neutral-600">{f}</span>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 font-sans text-[9px] tracking-[0.3em] uppercase text-gold border border-gold/30 px-5 py-2.5 hover:bg-gold hover:text-white transition-all duration-300 group"
        >
          En savoir plus
          <ArrowUpRight size={12} strokeWidth={1.5} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>
      </div>
    </motion.div>
  )
}

/* ─── Main component ───────────────────────────────────────── */
export default function PropertyManagementV2() {
  const sectionRef  = useRef(null)
  const stickyRef   = useRef(null)
  const [activeIdx, setActiveIdx]   = useState(0)
  const [direction, setDirection]   = useState(1)
  const prevIdxRef  = useRef(0)

  /* Scroll-driven card switching */
  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current
      if (!section) return
      const rect   = section.getBoundingClientRect()
      const total  = section.offsetHeight - window.innerHeight
      const scrolled = Math.max(0, -rect.top)
      const progress = Math.min(1, scrolled / total)
      const raw = progress * SERVICES.length
      const idx  = Math.min(SERVICES.length - 1, Math.floor(raw))

      if (idx !== prevIdxRef.current) {
        setDirection(idx > prevIdxRef.current ? 1 : -1)
        prevIdxRef.current = idx
        setActiveIdx(idx)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const service = SERVICES[activeIdx]

  return (
    <section
      ref={sectionRef}
      id="gestion"
      className="relative"
      style={{ height: `${SERVICES.length * 100 + 100}vh` }}
    >
      {/* Sticky viewport */}
      <div
        ref={stickyRef}
        className="sticky top-0 h-screen grid grid-cols-1 lg:grid-cols-[42%_58%] grid-rows-[55vh_45vh] lg:grid-rows-[100vh]"
      >

        {/* ── Left panel ────────────────────────────────── */}
        <div className="relative bg-[#F5F3EF] flex flex-col justify-center px-10 md:px-14 lg:px-16 xl:px-20 py-8 lg:py-0 order-2 lg:order-1 overflow-y-auto">

          {/* Eyebrow */}
          <p className="font-sans text-[11px] font-bold tracking-[0.55em] uppercase text-gold/70 mb-7">
            Gestion Après-Location
          </p>

          {/* Title */}
          <h2 className="font-serif text-3xl md:text-4xl lg:text-[2.6rem] xl:text-5xl text-neutral-800 font-light leading-[1.1] mb-6">
            Property &amp; Facility
            <br />
            <span className="italic text-gold">Management Intégré</span>
          </h2>

          {/* Divider */}
          <div className="w-14 h-px bg-gold/50 mb-7" />

          {/* Description */}
          <p className="font-sans text-[15px] text-neutral-600 leading-[1.9] mb-10 max-w-sm">
            Nous réinventons la gestion de vos actifs à travers une approche
            personnalisée, alliant expertise technique, sécuritaire et
            administrative — disponibles 24h/24 et 7j/7.
          </p>

          {/* Vertical progress */}
          <div className="flex flex-col gap-3 mb-10">
            {SERVICES.map((s, i) => {
              const SIcon = s.icon
              const isActive = i === activeIdx
              return (
                <button
                  key={s.num}
                  onClick={() => {
                    const dir = i > activeIdx ? 1 : -1
                    setDirection(dir)
                    prevIdxRef.current = i
                    setActiveIdx(i)
                    // Scroll section to position matching this card
                    if (sectionRef.current) {
                      const section = sectionRef.current
                      const totalScroll = section.offsetHeight - window.innerHeight
                      const targetScroll = section.offsetTop + (i / SERVICES.length) * totalScroll + 10
                      window.scrollTo({ top: targetScroll, behavior: "smooth" })
                    }
                  }}
                  className={[
                    "flex items-center gap-4 text-left transition-all duration-400 group",
                    isActive ? "opacity-100" : "opacity-40 hover:opacity-70",
                  ].join(" ")}
                >
                  <div className={[
                    "flex-none w-8 h-8 flex items-center justify-center border transition-colors duration-300",
                    isActive ? "border-gold bg-gold" : "border-neutral-300 group-hover:border-gold/50",
                  ].join(" ")}>
                    <SIcon size={13} className={isActive ? "text-white" : "text-neutral-500"} strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className={[
                      "font-sans text-[11px] tracking-[0.2em] uppercase transition-colors duration-300",
                      isActive ? "text-gold" : "text-neutral-400",
                    ].join(" ")}>
                      {s.num} · {s.category}
                    </p>
                  </div>
                  {isActive && (
                    <motion.div
                      layoutId="active-bar"
                      className="ml-auto h-px w-8 bg-gold"
                    />
                  )}
                </button>
              )
            })}
          </div>

          {/* Counter */}
          <div className="flex items-baseline gap-2">
            <AnimatePresence mode="wait">
              <motion.span
                key={activeIdx}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
                className="font-serif text-4xl text-neutral-800 font-light"
              >
                0{activeIdx + 1}
              </motion.span>
            </AnimatePresence>
            <span className="font-sans text-[13px] text-neutral-400">/ 0{SERVICES.length}</span>
          </div>

          {/* Bottom gold line */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
        </div>

        {/* ── Right: card switcher ───────────────────────── */}
        <div className="relative order-1 lg:order-2 bg-[#0E0E0D] overflow-hidden">
          <AnimatePresence custom={direction} mode="wait">
            <ServiceCard key={activeIdx} service={service} direction={direction} />
          </AnimatePresence>

          {/* Scroll hint — only on first card */}
          <AnimatePresence>
            {activeIdx === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.3 } }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
              >
                <span className="font-sans text-[9px] tracking-[0.3em] uppercase text-white/40">Défiler</span>
                <motion.div
                  animate={{ y: [0, 6, 0] }}
                  transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut" }}
                  className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
