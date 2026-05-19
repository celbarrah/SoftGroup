"use client"

import { useRef, useState, useCallback } from "react"
import { motion, useInView } from "framer-motion"

/* ── Book data with cover images ───────────────────────────── */
const OUVRAGES = [
  {
    num:    "01",
    title:  "Un Bouquet de Proverbes Marocains",
    desc:   "Une immersion dans la sagesse populaire marocaine, entre mémoire vivante, héritage oral et profondeur intemporelle.",
    author: "Par Mohamed Kabbaj",
    image:  "https://res.cloudinary.com/dofyrwzop/image/upload/q_auto/f_auto/v1779115241/IMG_0986_s6ehpb.jpg",
  },
  {
    num:    "02",
    title:  "1 001 Manières de Porter Châle et Foulard",
    desc:   "Une ode au raffinement féminin, où l'élégance rencontre les traditions et l'art du style à travers les cultures.",
    author: null,
    image:  "https://res.cloudinary.com/dofyrwzop/image/upload/q_auto/f_auto/v1779115344/ChatGPT_Image_15_mai_2026_%C3%A0_09_51_09_pyezoa.png",
  },
  {
    num:    "03",
    title:  "Le Maghreb des Origines à Nos Jours : Vision 2050",
    desc:   "Une réflexion visionnaire sur l'avenir du Maghreb, portée par l'héritage, l'innovation et l'ambition civilisationnelle.",
    author: "Par Mohamed Kabbaj et Malek Chebel",
    image:  "https://res.cloudinary.com/dofyrwzop/image/upload/q_auto/f_auto/v1779115403/23001655-04FF-4936-A13C-6AADC4705D03_1_sph8h6.png",
  },
  {
    num:    "04",
    title:  "Contes et Proverbes Marocains",
    desc:   "Un voyage illustré au cœur de l'imaginaire marocain, célébrant contes, symboles et traditions populaires.",
    author: "Par Mohamed Kabbaj et Hicham Lamghari — Illustré par Saïd Ben Mchich",
    image:  "https://res.cloudinary.com/dofyrwzop/image/upload/q_auto/f_auto/v1779115560/ChatGPT_Image_14_mai_2026_%C3%A0_10_26_51_1_l22e5v.png",
  },
  {
    num:    "05",
    title:  "Cœur de Mécènes, Mécènes de Cœur",
    desc:   "Une célébration inspirante du mécénat, de la générosité éclairée et de l'engagement culturel à travers les civilisations.",
    author: "Par Zhor Kabbaj",
    image:  "https://res.cloudinary.com/dofyrwzop/image/upload/q_auto/f_auto/v1779181461/ChatGPT_Image_15_mai_2026_%C3%A0_09_53_05_bxcurr.png",
  },
]

/* ── Book card with cinematic 3D tilt + text reveal ────────── */
function BookCard({ book, inView, index }) {
  const cardRef  = useRef(null)
  const [hovered, setHovered] = useState(false)

  const handleMouseMove = useCallback((e) => {
    const el = cardRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const rx   = ((e.clientX - rect.left)  / rect.width  - 0.5) * 2   // -1 → +1
    const ry   = ((e.clientY - rect.top)   / rect.height - 0.5) * 2   // -1 → +1
    el.style.transform = `perspective(700px) rotateY(${rx * 10}deg) rotateX(${-ry * 7}deg) scale(1.03)`
  }, [])

  const handleMouseLeave = useCallback(() => {
    const el = cardRef.current
    if (!el) return
    el.style.transform = ""
    setHovered(false)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: 48 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, delay: 0.15 + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Tilt wrapper — handles 3D perspective */}
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={handleMouseLeave}
        style={{
          position:       "relative",
          cursor:         "pointer",
          borderRadius:   2,
          overflow:       "hidden",
          transformStyle: "preserve-3d",
          transition:     "transform 0.35s cubic-bezier(0.22,1,0.36,1)",
          willChange:     "transform",
          aspectRatio:    "3 / 4.2",
        }}
      >
        {/* Book cover image */}
        <img
          src={book.image}
          alt={book.title}
          loading="lazy"
          style={{
            position:    "absolute",
            inset:       0,
            width:       "100%",
            height:      "100%",
            objectFit:   "cover",
            objectPosition: "center top",
            transition:  "transform 0.7s cubic-bezier(0.22,1,0.36,1)",
            transform:   hovered ? "scale(1.08)" : "scale(1.0)",
          }}
        />

        {/* Base gradient — always present for number readability */}
        <div
          style={{
            position:   "absolute",
            inset:      0,
            background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.25) 40%, rgba(0,0,0,0.0) 70%)",
          }}
        />

        {/* Hover overlay — deep cinematic gradient reveals text */}
        <div
          style={{
            position:   "absolute",
            inset:      0,
            background: "linear-gradient(to top, rgba(10,8,6,0.97) 0%, rgba(10,8,6,0.72) 55%, rgba(10,8,6,0.15) 85%, transparent 100%)",
            opacity:    hovered ? 1 : 0,
            transition: "opacity 0.55s ease",
          }}
        />

        {/* Gold shimmer line — slides across on hover */}
        <div
          style={{
            position:   "absolute",
            top:        0,
            left:       "-100%",
            width:      "60%",
            height:     "100%",
            background: "linear-gradient(to right, transparent, rgba(196,165,90,0.07), transparent)",
            transform:  hovered ? "translateX(300%)" : "translateX(0%)",
            transition: "transform 0.8s ease",
            pointerEvents: "none",
          }}
        />

        {/* Number badge — always visible */}
        <div
          style={{
            position:    "absolute",
            top:         16,
            left:        16,
            fontFamily:  "var(--font-dm-sans, sans-serif)",
            fontSize:    9,
            letterSpacing: "0.4em",
            textTransform: "uppercase",
            color:       "rgba(196,165,90,0.65)",
            fontWeight:  500,
          }}
        >
          {book.num}
        </div>

        {/* Gold accent line — expands on hover */}
        <div
          style={{
            position:        "absolute",
            bottom:          0,
            left:            0,
            height:          2,
            background:      "#C4A55A",
            width:           hovered ? "100%" : "24px",
            transition:      "width 0.55s cubic-bezier(0.22,1,0.36,1)",
          }}
        />

        {/* Content panel — reveals on hover */}
        <div
          style={{
            position:   "absolute",
            bottom:     0,
            left:       0,
            right:      0,
            padding:    "0 20px 24px",
            transform:  hovered ? "translateY(0)" : "translateY(18px)",
            opacity:    hovered ? 1 : 0,
            transition: "transform 0.5s cubic-bezier(0.22,1,0.36,1), opacity 0.45s ease",
          }}
        >
          <h3
            style={{
              fontFamily:  "var(--font-cormorant, serif)",
              fontSize:    "clamp(1rem, 1.2vw, 1.2rem)",
              fontWeight:  300,
              color:       "#ffffff",
              lineHeight:  1.3,
              margin:      "0 0 10px",
            }}
          >
            {book.title}
          </h3>
          <p
            style={{
              fontFamily:  "var(--font-dm-sans, sans-serif)",
              fontSize:    11,
              color:       "rgba(255,255,255,0.55)",
              lineHeight:  1.65,
              margin:      "0 0 8px",
            }}
          >
            {book.desc}
          </p>
          {book.author && (
            <p
              style={{
                fontFamily:    "var(--font-dm-sans, sans-serif)",
                fontSize:      9,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color:         "rgba(196,165,90,0.75)",
                margin:        0,
              }}
            >
              {book.author}
            </p>
          )}
        </div>

        {/* Minimal title — visible when NOT hovered */}
        <div
          style={{
            position:   "absolute",
            bottom:     14,
            left:       20,
            right:      20,
            opacity:    hovered ? 0 : 1,
            transform:  hovered ? "translateY(6px)" : "translateY(0)",
            transition: "opacity 0.35s ease, transform 0.4s ease",
          }}
        >
          <h3
            style={{
              fontFamily: "var(--font-cormorant, serif)",
              fontSize:   "clamp(0.9rem, 1.05vw, 1.05rem)",
              fontWeight: 300,
              color:      "#fff",
              lineHeight: 1.3,
              margin:     0,
            }}
          >
            {book.title}
          </h3>
        </div>
      </div>
    </motion.div>
  )
}

/* ── Main section ───────────────────────────────────────────── */
export default function SoftCulture() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-8%" })

  return (
    <section ref={ref} className="bg-white py-24  md:py-36 overflow-hidden" id="softculture" style={{
        WebkitClipPath: "polygon(0 0, 100% 0, 100% 85%, 0 100%)",
        clipPath:       "polygon(0 0, 100% 0, 100% 85%, 0 100%)",
      }}>
      <div className="max-w-400 mx-auto px-10 md:px-12 lg:px-20 pb-16">

        {/* ── Header ─────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="font-sans text-[14px] font-bold tracking-[0.55em] uppercase text-gold/70 mb-6">
              Mécénat Culturel
            </p>

            {/* SoftCulture logo + heading */}
            <div className="flex items-center gap-5 mb-2">
              <img
                src="https://res.cloudinary.com/dofyrwzop/image/upload/q_auto/f_auto/v1779210148/CULTURE_qffzuo-removebg-preview_pkud3g.png"
                alt="SoftCulture"
                style={{
                  height:     56,
                  width:      "auto",
                  objectFit:  "contain",
                  flexShrink: 0,
                }}
              />
              <h2 className="font-serif text-3xl md:text-5xl text-neutral-800 font-light leading-[1.1]">
                SoftCulture
              </h2>
            </div>
            <h2 className="font-serif text-xl md:text-2xl lg:text-3xl font-bold relative top-10 leading-[1.1] italic text-gold">
              La Culture comme Vecteur de Sens
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="flex items-end"
          >
            <p className="font-sans text-[17px] text-neutral-500 leading-[1.9] max-w-md">
              Parce qu&apos;un groupe d&apos;exception se mesure aussi à son empreinte intellectuelle,
              SOFTGROUP a créé le label éditorial SoftCulture une initiative portée par les
              membres fondateurs et dirigeants du groupe pour valoriser le patrimoine marocain
              et la réflexion prospective.
            </p>
          </motion.div>
        </div>

    
        {/* ── Books: 5-column bookshelf ───────────────── */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {OUVRAGES.map((book, i) => (
            <BookCard
              key={book.num}
              book={book}
              inView={inView}
              index={i}
            />
          ))}
        </div>
          {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-sans text-[12px] tracking-[0.45em] relative top-6 font-bold uppercase text-neutral-400 mb-10"
        >
          Ouvrages publiés Survolez pour découvrir
        </motion.p>

      </div>
    </section>
  )
}
