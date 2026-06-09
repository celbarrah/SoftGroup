"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useInView } from "framer-motion"
import Link from "next/link"

const SLIDES = [
  // "https://res.cloudinary.com/dofyrwzop/image/upload/q_auto/f_auto/v1779115059/SOFTIMMO_zo6pgq.jpg",
  "https://res.cloudinary.com/dofyrwzop/image/upload/q_auto/f_auto/v1781004942/ChatGPT_Image_9_juin_2026_13_35_26_obxpxu.png",
]
const INTERVAL = 4800
const DURATION = 1100

const POINTS_FORTS = [
  { 
    title: "Constructeur-développeur intégré",    
    desc: "De la conception architecturale à la livraison clé en main, Softgroup Immobilier pilote chaque étape du développement immobilier avec un haut niveau d'exigence et de maîtrise technique." 
  },
  { 
    title: "Expertise locative multi-segments",   
    desc: "Une offre couvrant cinq univers complémentaires logistique, bureaux, résidentiel, retail, terrains pensée pour répondre aux besoins spécifiques de chaque profil de locataire." 
  },
  { 
    title: "Présence nationale stratégique",      
    desc: "Des actifs situés dans les zones économiques les plus dynamiques : Casablanca, Tanger, Kénitra et Agadir." 
  },
  { 
    title: "+400 clients grands comptes",
    desc: "Des multinationales, groupes industriels et leaders sectoriels font confiance à Softgroup Immobilier pour leurs besoins immobiliers stratégiques au Maroc."
  },
]

function ImageSlider() {
  const [current, setCurrent] = useState(0)
  const [prev,    setPrev]    = useState(null)

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((c) => {
        setPrev(c)
        return (c + 1) % SLIDES.length
      })
    }, INTERVAL)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden w-full h-full rounded-t-3xl lg:rounded-l-3xl lg:rounded-tr-none z-0">
      <style>{`
        @keyframes sgWipe { from { clip-path: inset(0 100% 0 0); } to { clip-path: inset(0 0% 0 0); } }
        @keyframes sgKbIn { from { transform: scale(1.08); } to { transform: scale(1.0); } }
        @keyframes sgKbOut { from { transform: scale(1.0); } to { transform: scale(1.05); } }
      `}</style>

      {prev !== null && (
        <div key={"out-" + prev} style={{ position: "absolute", inset: 0, animation: "sgKbOut " + (DURATION + 400) + "ms ease forwards" }}>
          <div style={{ position: "absolute", inset: 0, backgroundImage: "url(" + SLIDES[prev] + ")", backgroundSize: "cover", backgroundPosition: "center" }} />
        </div>
      )}

      <div key={"in-" + current} style={{ position: "absolute", inset: 0, animation: "sgWipe " + DURATION + "ms cubic-bezier(0.76,0,0.24,1) forwards" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "url(" + SLIDES[current] + ")", backgroundSize: "cover", backgroundPosition: "center", animation: "sgKbIn " + (INTERVAL + DURATION) + "ms ease-out forwards" }} />
      </div>
      
      {/* Subtle overlay for better blending */}
      <div className="absolute inset-0 bg-black/10 pointer-events-none" />
    </div>
  )
}

export default function SoftgroupImmobilier() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-8%" })

  return (
    <section ref={ref} className="bg-[#f8f9fa] py-20 md:py-20 overflow-hidden" id="softgroup-immobilier">
      <div className="max-w-[1600px] mx-auto px-6 md:px-4 2xl:px-12">
        
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col lg:flex-row rounded-[2rem] shadow-[0_20px_80px_rgba(196,165,90,.18)] bg-gold/20 overflow-hidden border border-gold/20"
        >
          
          {/* ── Left Column (Image & Badge) ─────────────────────────────── */}
          <div className="relative w-full lg:w-1/2 min-h-[400px] lg:min-h-[600px] 2xl:min-h-[700px]">
            <ImageSlider />
          </div>

          {/* ── Right Column (Content) ─────────────────────────────── */}
          <div className="w-full lg:w-1/2 p-10 md:p-14 lg:p-16 flex flex-col justify-center">

            <p className="font-sans text-[15px] md:text-[14px] font-semibold tracking-[0.2em] uppercase text-gold mb-3">
              La Filiale Phare
            </p>

            <h2 className="font-serif text-3xl md:text-5xl text-noir font-normal leading-[1.2] mb-1">
              Softgroup Immobilier
            </h2>
            <h2 className="font-serif text-3xl md:text-5xl text-gold font-normal leading-[1.2] mb-6">
              La Référence Locative Premium
            </h2>

            <p className="font-sans text-[18px] md:text-[15px] text-dark/60 leading-[1.8] mb-10 max-w-xl">
              Constructeur, développeur et gestionnaire d'actifs depuis plus de 35 ans, Softgroup Immobilier est la foncière locative de référence au Maroc. Maîtrisant l'intégralité du cycle de vie immobilier, de la conception architecturale à la valorisation patrimoniale, elle couvre cinq segments stratégiques avec une exigence absolue de qualité et de performance.
            </p>

            <div className="flex flex-col gap-6 mb-12">
              {POINTS_FORTS.map((pt, i) => (
                <motion.div
                  key={pt.title}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
                  className="flex flex-col gap-1.5"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                    <h4 className="font-sans text-[15px] text-noir font-medium">
                      {pt.title}
                    </h4>
                  </div>
                  <p className="font-sans text-[13px] text-dark/65 leading-[1.7] pl-4.5 max-w-xl">
                    {pt.desc}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-4 mt-auto">
              <Link
                href="/portefeuille"
                className="inline-flex items-center gap-2 font-sans text-[15px] font-medium text-noir bg-gold px-6 py-3 rounded-full hover:bg-gold-light transition-colors duration-300"
              >
                Découvrir nos projets <span className="text-[18px] leading-none">➔</span>
              </Link>
              <Link
                href="/build-to-suit"
                className="inline-flex items-center justify-center font-sans text-[15px] font-medium text-noir border border-gold px-6 py-3 rounded-full hover:bg-gold hover:text-noir transition-colors duration-300"
              >
                Build-to-Suit
              </Link>
            </div>

          </div>
        </motion.div>
        
      </div>
    </section>
  )
}