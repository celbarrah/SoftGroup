"use client"

import { useRef, useState, useCallback } from "react"
import { motion, useInView } from "framer-motion"

/* ─────────────────────────────────────────────────────────────────
   BOOK_SCALE — Valeur par défaut si non spécifiée dans le tableau
   ───────────────────────────────────────────────────────────────── */
const BOOK_SCALE = 1

const OUVRAGES = [
  {
    num: "01",
    title: "Un Bouquet de Proverbes Marocains",
    author: "Par Mohamed Kabbaj",
    image: "https://res.cloudinary.com/dofyrwzop/image/upload/q_auto/f_auto/v1781001214/livre_vw7kos.png",
    scale: 2, // Ajout du scale individuel
  },
  {
    num: "02",
    title: "1 001 Manières de Porter Châle et Foulard",
    author: "Par Mohamed Kabbaj",
    image: "https://res.cloudinary.com/dofyrwzop/image/upload/q_auto/f_auto/v1779115344/ChatGPT_Image_15_mai_2026_%C3%A0_09_51_09_pyezoa.png",
    scale: 2, // Ajout du scale individuel
  },
  {
    num: "03",
    title: "Le Maghreb des Origines à Nos Jours : Vision 2050",
    author: "Par Mohamed Kabbaj & Malek Chebel",
    image: "https://res.cloudinary.com/dofyrwzop/image/upload/q_auto/f_auto/v1779115403/23001655-04FF-4936-A13C-6AADC4705D03_1_sph8h6.png",
    scale: 1, // Taille normale pour ce livre
  },
  {
    num: "04",
    title: "Contes et Proverbes Marocains",
    author: "Par Mohamed Kabbaj & Hicham Lamghari",
    image: "https://res.cloudinary.com/dofyrwzop/image/upload/q_auto/f_auto/v1779115560/ChatGPT_Image_14_mai_2026_%C3%A0_10_26_51_1_l22e5v.png",
    scale: 2, // Ajout du scale individuel
  },
  {
    num: "05",
    title: "Cœur de Mécènes, Mécènes de Cœur",
    author: "Par Zhor Kabbaj",
    image: "https://res.cloudinary.com/dofyrwzop/image/upload/q_auto/f_auto/v1779181461/ChatGPT_Image_15_mai_2026_%C3%A0_09_53_05_bxcurr.png",
    scale: 2, // Ajout du scale individuel
  },
]

function BookCard({ book, inView, index }) {
  const cardRef = useRef(null)
  const [hovered, setHovered] = useState(false)

  const handleMouseMove = useCallback((e) => {
    const el = cardRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const rx = ((e.clientX - rect.left) / rect.width  - 0.5) * 2
    const ry = ((e.clientY - rect.top)  / rect.height - 0.5) * 2
    el.style.transform = `perspective(700px) rotateY(${rx * 8}deg) rotateX(${-ry * 8}deg) scale(1.02)`
  }, [])

  const handleMouseEnter = useCallback(() => {
    const el = cardRef.current
    if(el) el.style.transition = "none"
    setHovered(true)
  }, [])

  const handleMouseLeave = useCallback(() => {
    const el = cardRef.current
    if (el) {
      el.style.transition = "transform 0.5s cubic-bezier(0.22,1,0.36,1)"
      el.style.transform = "perspective(700px) rotateY(0deg) rotateX(0deg) scale(1)"
    }
    setHovered(false)
  }, [])

  // Calcul du scale de base et du scale au survol
  const baseScale = book.scale || BOOK_SCALE
  const hoverScale = baseScale * 1.08 // Zoom de 8% par rapport à la taille de base

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, delay: 0.2 + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col gap-4"
    >
      {/* 3D Interactive Card */}
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="bg-white rounded-2xl overflow-hidden aspect-[3/4.2] relative p-1 md:p-2 flex items-center justify-center cursor-pointer shadow-lg"
        style={{ transformStyle: "preserve-3d" }}
      >
        <img
          src={book.image}
          alt={book.title}
          loading="lazy"
          className="w-full h-full object-contain drop-shadow-2xl transition-transform duration-500 ease-out"
          style={{ transform: hovered ? `scale(${hoverScale})` : `scale(${baseScale})` }}
        />
        <div
          className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/20 to-white/0 pointer-events-none transition-opacity duration-500"
          style={{ opacity: hovered ? 1 : 0 }}
        />
      </div>

      {/* Text Below Card */}
      <div className="flex flex-col gap-1.5 px-1">
        <span className="font-sans text-[12px] tracking-[0.15em] text-gold font-medium">
          {book.num}
        </span>
        <h3 className="font-serif text-[18px] md:text-[18px] text-noir font-semibold leading-[1.4]">
          {book.title}
        </h3>
        {book.author && (
          <p className="font-sans text-[13px] text-gold mt-1">
            {book.author}
          </p>
        )}
      </div>
    </motion.div>
  )
}

export default function SoftCulture() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-8%" })

  return (
    <section ref={ref} className="bg-[#f8f9fa] py-20 md:py-32 relative overflow-hidden" id="softculture"  
    style={{
        WebkitClipPath: "polygon(0 0, 100% 0, 100% 85%, 0 100%)",
        clipPath:       "polygon(0 0, 100% 0, 100% 85%, 0 100%)",
      }} >

      <div className="max-w-[1550px] mx-auto px-6 md:px-12 relative z-10 mb-20">

        {/* ── Header ──────────────────────────────────────────── */}
        <div className="mb-20">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }}>

            <div className="flex flex-col md:flex-row items-start gap-6">
              {/* Logo — real colors */}
              <div className="mt-2 shrink-0">
                <img
                  src="https://res.cloudinary.com/dofyrwzop/image/upload/q_auto/f_auto/v1779210148/CULTURE_qffzuo-removebg-preview_pkud3g.png"
                  alt="SoftCulture Logo"
                  className="h-12 md:h-14 w-auto"
                />
              </div>

              {/* Titles & Text */}
              <div className="flex flex-col">
                <p className="font-sans text-[15px] md:text-[15px] font-semibold tracking-[0.2em] uppercase text-gold mb-4">
                  Mécénat Culturel
                </p>

                <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-normal leading-[1.2]">
                  <span className="text-noir">SoftCulture</span>
                  <br />
                  <span className="text-gold">La Culture comme Vecteur de Sens</span>
                </h2>

                <p className="font-sans text-[16px] text-dark/65 leading-[1.8] max-w-3xl mt-6">
                  Parce qu'un groupe d'exception se mesure aussi à son empreinte intellectuelle,
                  SOFTGROUP a créé le label éditorial SoftCulture une initiative portée par les
                  membres fondateurs et dirigeants du groupe pour valoriser le patrimoine marocain et
                  la réflexion prospective.
                </p>
              </div>
            </div>

          </motion.div>
        </div>

        {/* ── Grid ────────────────────────────────────────────── */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-sans text-[15px] tracking-[0.2em] font-bold uppercase text-gold mb-8"
        >
          Ouvrages publiés
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 lg:gap-6">
          {OUVRAGES.map((book, i) => (
            <BookCard key={book.num} book={book} inView={inView} index={i} />
          ))}
        </div>

      </div>
    </section>
  )
}