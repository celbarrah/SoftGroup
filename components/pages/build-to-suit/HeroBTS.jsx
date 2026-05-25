"use client"
import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

export default function HeroBTS() {
  const bgRef = useRef(null)

  /* Subtle parallax on scroll */
  useEffect(() => {
    const onScroll = () => {
      if (bgRef.current) {
        bgRef.current.style.transform = `translateY(${window.scrollY * 0.18}px)`
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <section className="relative min-h-screen overflow-hidden flex items-center bg-noir">

      {/* Background image */}
      <div ref={bgRef} className="absolute inset-0 w-full h-[115%] -top-[8%] will-change-transform">
        <Image
          src="https://res.cloudinary.com/dofyrwzop/image/upload/q_auto/f_auto/v1779726385/IMG_1067_vkn3cu.jpg"
          alt="Build-to-Suit — Softgroup Immobilier"
          fill priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Layered overlays */}
        {/* <div className="absolute inset-0 bg-noir/30" /> */}
        <div className="absolute inset-0 bg-gradient-to-b from-noir/20 via-transparent to-white" />
      </div>

      {/* Glass card — content */}
      <div className="relative z-10 ml-[clamp(32px,8vw,130px)] max-w-[700px]">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="bg-noir/20 backdrop-blur-[22px] border border-white/[0.13]
                     rounded-[24px] px-[52px] py-[48px]"
        >
          {/* Eyebrow */}
          <span className="block font-sans text-[11px] tracking-[0.22em] uppercase text-gold mb-[22px]">
            Build-to-Suit — Clé en main
          </span>

          {/* Headline */}
          <h1 className="font-serif text-[clamp(44px,5.5vw,72px)] font-light text-white
                         leading-[1.0] tracking-[-0.015em] mb-[22px]">
            <em className="italic text-gold">Conçu</em> pour
            <br />votre activité.
            <br /><strong className="font-semibold">Livré clé en main.</strong>
          </h1>

          {/* Subtitle */}
          <p className="font-sans text-[15px] font-light text-white/75 leading-[1.8] max-w-xl">
            Vous avez un besoin spécifique, une surface précise, des exigences
            techniques particulières. Softgroup conçoit, finance et livre votre
            bâtiment sur mesure exactement comme vous le souhaitez.
          </p>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-[180px] right-14 z-10 cursor-pointer"
        onClick={() => window.scrollBy({ top: window.innerHeight, behavior: "smooth" })}
      >
        <div className="hero-deflier flex flex-col items-center gap-2">
          <div className="w-px h-10 bg-gradient-to-b from-white/50 to-transparent" />
          <span className="font-sans text-[10px] tracking-[0.14em] uppercase text-white/35">
            Défiler
          </span>
        </div>
      </motion.div>

    </section>
  )
}
