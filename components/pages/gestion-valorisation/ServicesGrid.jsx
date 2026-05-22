"use client"

import { useRef, useState, useCallback } from "react"
import { motion, useInView } from "framer-motion"
import { ArrowRight } from "lucide-react"

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
    image: "https://res.cloudinary.com/dofyrwzop/image/upload/q_auto/f_auto/v1779447660/2_apsykt.png",
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
      style={{
        position:    "relative",
        overflow:    "hidden",
        cursor:      "pointer",
        aspectRatio: "3/4",
        minHeight:   360,
        flexShrink:  0,
      }}
    >
      {/* Background image */}
      <div
        style={{
          position:         "absolute",
          inset:            0,
          backgroundImage:  "url(" + service.image + ")",
          backgroundSize:   "cover",
          backgroundPosition: "center",
          transform:        hovered ? "scale(1.06)" : "scale(1.0)",
          transition:       "transform 0.75s cubic-bezier(0.22,1,0.36,1)",
        }}
      />

      {/* Gradient overlay */}
      <div style={{
        position:   "absolute",
        inset:      0,
        background: "linear-gradient(to top, rgba(8,6,4,0.90) 0%, rgba(8,6,4,0.35) 50%, rgba(8,6,4,0.05) 100%)",
        transition: "opacity 0.4s ease",
      }} />

      {/* Hover shimmer */}
      <div style={{
        position:   "absolute",
        inset:      0,
        background: "linear-gradient(135deg, transparent 0%, rgba(196,165,90,0.04) 50%, transparent 100%)",
        opacity:    hovered ? 1 : 0,
        transition: "opacity 0.5s ease",
      }} />

      {/* Bottom accent line */}
      <div style={{
        position:   "absolute",
        bottom:     0,
        left:       0,
        height:     2,
        width:      hovered ? "100%" : "28px",
        background: "#C4A55A",
        transition: "width 0.55s cubic-bezier(0.22,1,0.36,1)",
      }} />

      {/* Content */}
      <div style={{
        position: "absolute",
        bottom:   0,
        left:     0,
        right:    0,
        padding:  "0 24px 28px",
      }}>
        {/* Tag pill */}
        <span style={{
          display:       "inline-block",
          fontFamily:    "var(--font-dm-sans, sans-serif)",
          fontSize:      9,
          letterSpacing: "0.25em",
          textTransform: "uppercase",
          color:         "rgba(196,165,90,0.80)",
          background:    "rgba(196,165,90,0.10)",
          border:        "1px solid rgba(196,165,90,0.18)",
          padding:       "3px 10px",
          marginBottom:  10,
        }}>
          {service.tag}
        </span>

        {/* Title */}
        <h3 style={{
          fontFamily:  "var(--font-cormorant, serif)",
          fontSize:    "clamp(1.25rem, 1.6vw, 1.5rem)",
          fontWeight:  300,
          color:       "#fff",
          lineHeight:  1.2,
          marginBottom: 0,
        }}>
          {service.title}
        </h3>

        {/* Description — reveals on hover */}
        <div style={{
          overflow:   "hidden",
          maxHeight:  hovered ? 120 : 0,
          opacity:    hovered ? 1 : 0,
          marginTop:  hovered ? 10 : 0,
          transition: "max-height 0.45s ease, opacity 0.45s ease, margin-top 0.3s ease",
        }}>
          <p style={{
            fontFamily: "var(--font-dm-sans, sans-serif)",
            fontSize:   13,
            color:      "rgba(255,255,255,0.58)",
            lineHeight: 1.7,
          }}>
            {service.desc}
          </p>
        </div>

        {/* Arrow reveal */}
        <div style={{
          overflow:   "hidden",
          maxHeight:  hovered ? 40 : 0,
          opacity:    hovered ? 1 : 0,
          marginTop:  hovered ? 14 : 0,
          transition: "max-height 0.3s ease 0.1s, opacity 0.3s ease 0.1s, margin-top 0.3s ease",
          display:    "flex",
          alignItems: "center",
          gap:        6,
        }}>
          <span style={{ fontFamily: "var(--font-dm-sans, sans-serif)", fontSize: 12, color: "rgba(196,165,90,0.80)", letterSpacing: "0.06em" }}>
            En savoir plus
          </span>
          <ArrowRight size={12} style={{ color: "rgba(196,165,90,0.80)" }} strokeWidth={1.5} />
        </div>
      </div>
    </motion.div>
  )
}

export default function ServicesGrid() {
  const ref      = useRef(null)
  const scrollRef = useRef(null)
  const inView   = useInView(ref, { once: true, margin: "-8%" })

  const isDragging = useRef(false)
  const startX     = useRef(0)
  const scrollLeft = useRef(0)

  const onMouseDown = useCallback((e) => {
    isDragging.current = true
    startX.current     = e.pageX - scrollRef.current.offsetLeft
    scrollLeft.current = scrollRef.current.scrollLeft
  }, [])
  const onMouseLeave = useCallback(() => { isDragging.current = false }, [])
  const onMouseUp    = useCallback(() => { isDragging.current = false }, [])
  const onMouseMove  = useCallback((e) => {
    if (!isDragging.current) return
    e.preventDefault()
    const x    = e.pageX - scrollRef.current.offsetLeft
    const walk = (x - startX.current) * 1.3
    scrollRef.current.scrollLeft = scrollLeft.current - walk
  }, [])

  return (
    <section ref={ref} className="bg-[#080808] py-24 md:py-32 overflow-hidden" id="services-gestion"
     style={{
        WebkitClipPath: "polygon(0 0, 100% 0, 100% 85%, 0 100%)",
        clipPath:       "polygon(0 0, 100% 0, 100% 85%, 0 100%)",
      }}>
      <div className="max-w-400 mx-auto px-8 md:px-12 lg:px-20 pb-30">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-14"
        >
          <p className="font-sans text-[12px] tracking-[0.55em] uppercase text-gold/60 mb-4">
            Nos Services
          </p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 className="font-serif text-3xl md:text-5xl text-white font-light leading-[1.1]">
              Un écosystème
              <br />
              <span className="italic text-gold">de services intégrés</span>
            </h2>
            <p className="font-sans text-[15px] leading-[1.8] max-w-sm md:text-right" style={{ color: "rgba(255,255,255,0.35)" }}>
              Glissez pour explorer
            </p>
          </div>
        </motion.div>

        {/* Scrollable cards */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-20 justify-center items-center place-items-center lg:grid-cols-5 pb-70 md:pb-0"
        >
          {SERVICES.map((service, i) => (
            <div key={service.tag} className="w-full" >
              <ServiceCard service={service} index={i} inView={inView} />
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
