"use client"

import { useRef, useState, useCallback, useEffect } from "react"
import { motion, useInView } from "framer-motion"
import { ArrowRight } from "lucide-react"

const SERVICES = [
  {
    tag:   "Maintenance",
    title: "Technique & Infrastructure",
    desc:  "Maintenance préventive et corrective, gestion des équipements critiques, contrôles réguliers pour garantir continuité et fiabilité.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=700&q=80",
  },
  {
    tag:   "Sécurité",
    title: "Protection des Actifs",
    desc:  "Gardiennage, vidéosurveillance intelligente, contrôle d'accès. Des protocoles adaptés à la sensibilité de chaque site.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=80",
  },
  {
    tag:   "Aménagement",
    title: "Solutions Sur-Mesure",
    desc:  "Reconfiguration, conseil en architecture intérieure et accompagnement clé en main — vos espaces évoluent avec votre activité.",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=700&q=80",
  },
  {
    tag:   "Facilitation",
    title: "Gestion & Conformité",
    desc:  "Coordination administrative, suivi des réclamations, accompagnement réglementaire. Toute la complexité gérée à votre place.",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=700&q=80",
  },
  {
    tag:   "Extérieur",
    title: "Espaces Verts & Façades",
    desc:  "Jardins, piscines, parties communes, façades — entretenus selon les plus hauts standards pour préserver image et valeur.",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=700&q=80",
  },
]

/* ── Individual hover card ──────────────────────────────────── */
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
        flex:         "0 0 320px",
        scrollSnapAlign: "start",
        borderRadius: 2,
        overflow:     "hidden",
        position:     "relative",
        aspectRatio:  "3 / 4",
        cursor:       "pointer",
      }}
    >
      {/* Background image */}
      <div
        style={{
          position:           "absolute",
          inset:              0,
          backgroundImage:    `url(${service.image})`,
          backgroundSize:     "cover",
          backgroundPosition: "center",
          transform:          hovered ? "scale(1.07)" : "scale(1.0)",
          transition:         "transform 0.65s cubic-bezier(0.25,0.1,0.25,1)",
        }}
      />

      {/* Base gradient — always on */}
      <div
        style={{
          position:   "absolute",
          inset:      0,
          background: "linear-gradient(to top, rgba(10,8,5,0.92) 0%, rgba(10,8,5,0.12) 55%, transparent 100%)",
        }}
      />

      {/* Hover gradient — deeper overlay */}
      <div
        style={{
          position:   "absolute",
          inset:      0,
          background: "linear-gradient(to top, rgba(10,8,5,0.97) 0%, rgba(10,8,5,0.40) 60%, rgba(196,165,90,0.04) 100%)",
          opacity:    hovered ? 1 : 0,
          transition: "opacity 0.45s ease",
        }}
      />

      {/* Gold bottom accent line — expands on hover */}
      <div
        style={{
          position:        "absolute",
          bottom:          0,
          left:            0,
          height:          2,
          background:      "#C4A55A",
          width:           hovered ? "100%" : "28px",
          transition:      "width 0.55s cubic-bezier(0.22,1,0.36,1)",
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "absolute",
          bottom:   0,
          left:     0,
          right:    0,
          padding:  "0 26px 28px",
        }}
      >
        {/* Tag pill */}
        <span
          style={{
            display:       "inline-block",
            fontFamily:    "var(--font-dm-sans, sans-serif)",
            fontSize:      10,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color:         "rgba(196,165,90,0.90)",
            background:    "rgba(196,165,90,0.10)",
            border:        "1px solid rgba(196,165,90,0.18)",
            borderRadius:  100,
            padding:       "3px 11px",
            marginBottom:  10,
          }}
        >
          {service.tag}
        </span>

        {/* Title */}
        <h3
          style={{
            fontFamily:  "var(--font-cormorant, serif)",
            fontSize:    "clamp(1.25rem, 1.6vw, 1.5rem)",
            fontWeight:  300,
            color:       "#fff",
            lineHeight:  1.2,
            marginBottom: 0,
          }}
        >
          {service.title}
        </h3>

        {/* Description — reveals on hover */}
        <div
          style={{
            overflow:   "hidden",
            maxHeight:  hovered ? 120 : 0,
            opacity:    hovered ? 1 : 0,
            marginTop:  hovered ? 10 : 0,
            transition: "max-height 0.45s ease, opacity 0.45s ease, margin-top 0.3s ease",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-dm-sans, sans-serif)",
              fontSize:   13,
              color:      "rgba(255,255,255,0.58)",
              lineHeight: 1.7,
            }}
          >
            {service.desc}
          </p>
        </div>

        {/* "En savoir plus" arrow — reveals on hover */}
        <div
          style={{
            overflow:   "hidden",
            maxHeight:  hovered ? 40 : 0,
            opacity:    hovered ? 1 : 0,
            marginTop:  hovered ? 14 : 0,
            transition: "max-height 0.3s ease 0.1s, opacity 0.3s ease 0.1s, margin-top 0.3s ease",
            display:    "flex",
            alignItems: "center",
            gap:        6,
          }}
        >
          <span
            style={{
              fontFamily:    "var(--font-dm-sans, sans-serif)",
              fontSize:      12,
              color:         "rgba(196,165,90,0.80)",
              letterSpacing: "0.06em",
            }}
          >
            En savoir plus
          </span>
          <ArrowRight size={12} style={{ color: "rgba(196,165,90,0.80)" }} strokeWidth={1.5} />
        </div>
      </div>
    </motion.div>
  )
}

/* ── Main section ───────────────────────────────────────────── */
export default function ServicesGrid() {
  const ref      = useRef(null)
  const scrollRef = useRef(null)
  const inView   = useInView(ref, { once: true, margin: "-8%" })

  /* Mouse-drag to scroll */
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
    const x      = e.pageX - scrollRef.current.offsetLeft
    const walk   = (x - startX.current) * 1.3
    scrollRef.current.scrollLeft = scrollLeft.current - walk
  }, [])

  return (
    <section ref={ref} className="bg-white py-24 md:py-36 overflow-hidden" id="services-gestion">

      {/* Header — left-padded, not full max-width */}
      <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-20 mb-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="font-sans text-[12px] tracking-[0.55em] uppercase text-gold/70 mb-5">
            Nos Services
          </p>
          <h2 className="font-serif text-3xl md:text-5xl text-neutral-800 font-light leading-[1.1]">
            L&apos;écosystème intégré :
            <br />
            <span className="italic text-gold">Acteur de votre performance</span>
          </h2>
        </motion.div>
      </div>

      {/* Horizontal scroll strip — bleeds to right edge */}
      <div
        ref={scrollRef}
        onMouseDown={onMouseDown}
        onMouseLeave={onMouseLeave}
        onMouseUp={onMouseUp}
        onMouseMove={onMouseMove}
        style={{
          display:            "flex",
          gap:                20,
          overflowX:          "auto",
          paddingLeft:        "clamp(32px, 5vw, 80px)",
          paddingRight:       "clamp(32px, 5vw, 80px)",
          paddingBottom:      8,
          scrollbarWidth:     "none",
          scrollSnapType:     "x mandatory",
          WebkitOverflowScrolling: "touch",
          cursor:             "grab",
          userSelect:         "none",
        }}
      >
        <style>{`.svc-scroll::-webkit-scrollbar{display:none}`}</style>

        {SERVICES.map((service, i) => (
          <ServiceCard
            key={service.title}
            service={service}
            index={i}
            inView={inView}
          />
        ))}

        {/* CTA card at the end */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.55 }}
          style={{
            flex:         "0 0 260px",
            scrollSnapAlign: "start",
            borderRadius: 2,
            background:   "linear-gradient(135deg, #1a1410 0%, #0f0c07 100%)",
            border:       "1px solid rgba(196,165,90,0.18)",
            display:      "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            padding:      "32px 28px",
            aspectRatio:  "3 / 4",
            cursor:       "default",
          }}
        >
          <p
            style={{
              fontFamily:    "var(--font-dm-sans, sans-serif)",
              fontSize:      10,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color:         "rgba(196,165,90,0.55)",
              marginBottom:  10,
            }}
          >
            Votre projet
          </p>
          <h3
            style={{
              fontFamily:  "var(--font-cormorant, serif)",
              fontSize:    "clamp(1.4rem, 2vw, 1.7rem)",
              fontWeight:  300,
              color:       "#fff",
              lineHeight:  1.25,
              marginBottom: 20,
            }}
          >
            Confier la gestion de vos espaces
          </h3>
          <a
            href="tel:+212661978104"
            style={{
              display:       "inline-flex",
              alignItems:    "center",
              gap:           8,
              background:    "#C4A55A",
              color:         "#0f0c07",
              borderRadius:  2,
              padding:       "11px 20px",
              fontSize:      13,
              fontWeight:    500,
              fontFamily:    "var(--font-dm-sans, sans-serif)",
              textDecoration: "none",
              width:         "fit-content",
              letterSpacing: "0.04em",
              transition:    "opacity 0.2s",
            }}
          >
            Nous contacter
            <ArrowRight size={13} strokeWidth={1.5} />
          </a>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="flex items-center gap-2 mt-6 px-8 md:px-12 lg:px-20"
      >
        <ArrowRight size={14} className="text-neutral-400" strokeWidth={1.5} />
        <span className="font-sans text-[12px] text-neutral-400 tracking-[0.06em]">
          Faites défiler pour découvrir tous nos services
        </span>
      </motion.div>

    </section>
  )
}
