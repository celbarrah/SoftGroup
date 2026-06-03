"use client"

import { useRef, useState, useCallback } from "react"
import { motion, useInView } from "framer-motion"

const SERVICES = [
  {
    tag:   "Maintenance",
    title: "Technique & Infrastructure",
    desc:  "Maintenance préventive et corrective, gestion des équipements critiques, contrôles réguliers pour garantir continuité et fiabilité.",
    image: "https://res.cloudinary.com/dofyrwzop/image/upload/q_auto/f_auto/v1779374436/TECHNIQUE_limhsu.png",
  },
  {
    tag:   "Sécurité",
    title: "Protection des Actifs",
    desc:  "Gardiennage, vidéosurveillance intelligente, contrôle d'accès. Des protocoles adaptés à la sensibilité de chaque site.",
    image: "https://res.cloudinary.com/dofyrwzop/image/upload/q_auto/f_auto/v1779374418/PROTECTION_hosyyc.png",
  },
  {
    tag:   "Aménagement",
    title: "Solutions Sur-Mesure",
    desc:  "Reconfiguration, conseil en architecture intérieure et accompagnement clé en main vos espaces évoluent avec votre activité.",
    image: "https://res.cloudinary.com/dofyrwzop/image/upload/q_auto/f_auto/v1779811649/SUR_MESURE_g2xpur.png",
  },
  {
    tag:   "Facilitation",
    title: "Gestion & Conformité",
    desc:  "Coordination administrative, suivi des réclamations, accompagnement réglementaire. Toute la complexité gérée à votre place.",
    image: "https://res.cloudinary.com/dofyrwzop/image/upload/q_auto/f_auto/v1779374414/CONFORMITE_a2vx52.png",
  },
  {
    tag:   "Extérieur",
    title: "Espaces verts & façades",
    desc:  "Jardins, piscines, parties communes, façades entretenus selon les plus hauts standards pour préserver image et valeur.",
    image: "https://res.cloudinary.com/dofyrwzop/image/upload/q_auto/f_auto/v1779447601/ESPACE_VERT_h5cpno.png",
  },
]

function ServiceCard({ service, index, inView }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: 0.1 + index * 0.08 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative overflow-hidden cursor-pointer rounded-2xl snap-start flex-none
                 w-[70vw] sm:w-[38vw] md:w-[26vw] lg:w-[20vw] xl:w-[18vw]"
      style={{ aspectRatio: "3/4", minHeight: 200 }}
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-[750ms]"
        style={{
          backgroundImage: `url(${service.image})`,
          transform: hovered ? "scale(1.06)" : "scale(1.0)",
        }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[rgba(8,6,4,0.90)] via-[rgba(8,6,4,0.35)] to-[rgba(8,6,4,0.05)]" />

      {/* Hover shimmer */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-transparent via-gold/[0.04] to-transparent transition-opacity duration-500"
        style={{ opacity: hovered ? 1 : 0 }}
      />

      {/* Bottom accent line */}
      <div
        className="absolute bottom-0 left-0 h-[2px] bg-gold transition-all duration-[550ms]"
        style={{ width: hovered ? "100%" : "28px" }}
      />

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 px-2 2xl:px-6 pb-7">
        {/* Tag */}
        <span className="inline-block font-sans text-[11px] tracking-[0.25em] uppercase
                         text-gold/80 bg-gold/10 border border-gold/[0.18] rounded-md
                         px-[10px] py-[3px] mb-[10px]">
          {service.tag}
        </span>

        {/* Title */}
        <h3 className="font-serif text-[clamp(1rem,1.3vw,1rem)] font-light text-white leading-[1.2]">
          {service.title}
        </h3>

        {/* Description — reveals on hover */}
        <div
          className="overflow-hidden transition-all duration-[450ms]"
          style={{
            maxHeight: hovered ? 120 : 0,
            opacity:   hovered ? 1 : 0,
            marginTop: hovered ? 10 : 0,
          }}
        >
          <p className="font-sans text-[15px] lg:text-[13px] xl:text-[14px] text-white/55 leading-[1.7]">
            {service.desc}
          </p>
        </div>

      </div>
    </motion.div>
  )
}

export default function ServicesGrid() {
  const ref      = useRef(null)
  const scrollRef = useRef(null)
  const inView   = useInView(ref, { once: true, margin: "-8%" })

  /* Drag-to-scroll */
  const isDragging = useRef(false)
  const startX     = useRef(0)
  const scrollLeft = useRef(0)

  const onMouseDown = useCallback((e) => {
    isDragging.current = true
    if (scrollRef.current) scrollRef.current.style.cursor = "grabbing"
    startX.current     = e.pageX - scrollRef.current.offsetLeft
    scrollLeft.current = scrollRef.current.scrollLeft
  }, [])
  const onMouseLeave = useCallback(() => {
    isDragging.current = false
    if (scrollRef.current) scrollRef.current.style.cursor = "grab"
  }, [])
  const onMouseUp = useCallback(() => {
    isDragging.current = false
    if (scrollRef.current) scrollRef.current.style.cursor = "grab"
  }, [])
  const onMouseMove = useCallback((e) => {
    if (!isDragging.current) return
    e.preventDefault()
    const x    = e.pageX - scrollRef.current.offsetLeft
    const walk = (x - startX.current) * 1.4
    scrollRef.current.scrollLeft = scrollLeft.current - walk
  }, [])

  return (
    <section ref={ref} className="bg-off-white py-24 md:py-32 overflow-hidden" id="services-gestion" style={{
      WebkitClipPath: "polygon(0 0, 100% 0, 100% 85%, 0 100%)",
      clipPath:       "polygon(0 0, 100% 0, 100% 85%, 0 100%)",
    }}>
      <div className="pb-30">

        {/* Header — with side padding */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-14 px-8 md:px-12 lg:px-20"
        >
          <p className="font-sans text-[15px] tracking-[0.55em] uppercase font-bold text-gold mb-4">
            Nos Services
          </p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
               <h2 className="font-serif text-3xl md:text-5xl text-noir font-light leading-[1.1]">
              L'écosystème intégré :
              <br />
              <span className="italic text-gold">Acteur de votre performance</span>
            </h2>
            <p className="font-sans text-[17px] max-w-xl pt-8 text-neutral-900/55 leading-[1.7]">Des services intégrés qui améliorent l'expérience des occupants, optimisent les opérations et assurent la continuité de vos activités au quotidien.</p>
            </div>
            <p className="font-sans text-[15px] text-dark/40 leading-[1.8] max-w-sm md:text-right">
              Glissez pour explorer
            </p>
          </div>
        </motion.div>

        {/* Scroll rail — full width, left-padded only so cards overflow right */}
        <div className="px-2 md:px-0">
           <div
          ref={scrollRef}
          className="flex lg:grid lg:grid-cols-5 gap-3 overflow-x-auto scrollbar-hide snap-x snap-mandatory
                     pl-8 md:pl-12 lg:pl-20 pr-8"
          style={{ cursor: "grab" }}
          onMouseDown={onMouseDown}
          onMouseLeave={onMouseLeave}
          onMouseUp={onMouseUp}
          onMouseMove={onMouseMove}
        >
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.tag} service={service} index={i} inView={inView} />
          ))}
          {/* Right spacer so last card isn't flush with edge */}
          <div className="flex-none w-4 md:w-8 lg:w-16 shrink-0" />
        </div>
        </div>

      </div>
    </section>
  )
}
