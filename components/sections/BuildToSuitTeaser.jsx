"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Link from "next/link"

const GUARANTEES = [
  "Prix fixé à la signature",
  "Délais contractuels",
  "Garantie décennale",
  "Foncier déjà sécurisé",
]

export default function BuildToSuitTeaser() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-10%" })

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-[#08090A]"
      style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
    >
      {/* Subtle grid texture */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `
            repeating-linear-gradient(rgba(196,165,90,0.03) 0px, rgba(196,165,90,0.03) 1px, transparent 1px, transparent 64px),
            repeating-linear-gradient(90deg, rgba(196,165,90,0.03) 0px, rgba(196,165,90,0.03) 1px, transparent 1px, transparent 64px)
          `,
        }}
      />

      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute -right-32 top-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(196,165,90,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-[1440px] px-8 py-28 md:px-20 lg:py-36">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24 items-center">

          {/* ── LEFT: Content ── */}
          <div>
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              className="mb-8 flex items-center gap-3"
            >
              <div className="h-px w-8 bg-[#C4A55A]" />
              <span
                className="text-[10px] font-medium uppercase tracking-[0.24em] text-[#C4A55A]"
              >
                Build-to-Suit
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.75, ease: [0.25, 0.1, 0.25, 1], delay: 0.08 }}
              className="mb-8 font-['Cormorant_Garamond'] font-light leading-[1.04] tracking-[-0.015em] text-[#F0EDE6]"
              style={{ fontSize: "clamp(40px, 4.5vw, 66px)" }}
            >
              Votre bâtiment.<br />
              <em className="text-[#C4A55A]">Conçu sur mesure.</em><br />
              Livré clé en main.
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay: 0.16 }}
              className="mb-10 max-w-[46ch] text-[15px] font-light leading-[1.85] text-[#888888]"
            >
              Ne cherchez plus un espace qui s'adapte à votre besoin.
              Softgroup le conçoit, le finance et vous le livre en moins
              de 12 mois, au budget convenu, sans compromis.
            </motion.p>

            {/* Guarantee pills */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, ease: [0.25, 0.1, 0.25, 1], delay: 0.24 }}
              className="mb-12 flex flex-wrap gap-2"
            >
              {GUARANTEES.map((g) => (
                <span
                  key={g}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-[11px] tracking-[0.04em] text-[#888888] transition-colors duration-200 hover:border-[#C4A55A]/40 hover:text-[#C4A55A]"
                >
                  <span className="h-1 w-1 rounded-full bg-[#C4A55A] opacity-70 flex-shrink-0" />
                  {g}
                </span>
              ))}
            </motion.div>

            {/* CTA row */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay: 0.32 }}
              className="flex flex-wrap items-center gap-6"
            >
              <Link
                href="/build-to-suit"
                className="group inline-flex items-center gap-3 rounded-full bg-[#C4A55A] px-8 py-4 text-[13px] font-medium tracking-[0.04em] text-[#08090A] transition-all duration-300 hover:bg-[#D4B970] hover:-translate-y-0.5 hover:shadow-[0_12px_36px_rgba(196,165,90,0.28)]"
              >
                Décrire mon projet
                <svg
                  className="transition-transform duration-200 group-hover:translate-x-1"
                  width="15" height="15" viewBox="0 0 20 20"
                  fill="none" stroke="currentColor" strokeWidth="2"
                >
                  <path d="M4 10h12M10 4l6 6-6 6" />
                </svg>
              </Link>
              <Link
                href="/build-to-suit"
                className="text-[13px] font-light tracking-[0.04em] text-[#888888] underline underline-offset-4 decoration-white/20 transition-colors duration-200 hover:text-[#F0EDE6] hover:decoration-white/40"
              >
                En voir plus
              </Link>
            </motion.div>
          </div>

          {/* ── RIGHT: KPI cards + visual accent ── */}
          <div className="relative">

            {/* Vertical accent line */}
            <div
              className="pointer-events-none absolute left-0 top-1/2 h-[70%] w-px -translate-y-1/2 hidden lg:block"
              style={{ background: "linear-gradient(to bottom, transparent, rgba(196,165,90,0.2), transparent)" }}
            />

            <div className="flex flex-col gap-5 lg:pl-16">

              {/* KPI card — Livraison */}
              <motion.div
                initial={{ opacity: 0, x: 24 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
                className="rounded-2xl border border-white/8 bg-white/[0.03] p-7 backdrop-blur-sm transition-colors duration-300 hover:border-[#C4A55A]/20"
                style={{ borderColor: "rgba(255,255,255,0.08)" }}
              >
                <div
                  className="mb-1 font-['Cormorant_Garamond'] font-light text-[#C4A55A]"
                  style={{ fontSize: "clamp(40px, 4vw, 56px)", lineHeight: 1 }}
                >
                  ≤ 12
                </div>
                <div className="text-[11px] uppercase tracking-[0.1em] text-[#888888]">
                  Mois de livraison garantis
                </div>
                <p className="mt-3 max-w-[36ch] text-[13px] font-light leading-relaxed text-[#555]">
                  De la signature à la remise des clés, un calendrier contractuel ferme sans surprise.
                </p>
              </motion.div>

              {/* KPI card — Clé en main */}
              <motion.div
                initial={{ opacity: 0, x: 24 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay: 0.3 }}
                className="rounded-2xl border border-white/8 bg-white/[0.03] p-7 backdrop-blur-sm transition-colors duration-300 hover:border-[#C4A55A]/20"
                style={{ borderColor: "rgba(255,255,255,0.08)" }}
              >
                <div
                  className="mb-1 font-['Cormorant_Garamond'] font-light text-[#C4A55A]"
                  style={{ fontSize: "clamp(40px, 4vw, 56px)", lineHeight: 1 }}
                >
                  100%
                </div>
                <div className="text-[11px] uppercase tracking-[0.1em] text-[#888888]">
                  Clé en main — conception à gestion
                </div>
                <p className="mt-3 max-w-[36ch] text-[13px] font-light leading-relaxed text-[#555]">
                  Softgroup pilote l'intégralité du projet : foncier, financement, construction, livraison.
                </p>
              </motion.div>

              {/* KPI card — Garantie */}
              <motion.div
                initial={{ opacity: 0, x: 24 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay: 0.4 }}
                className="rounded-2xl border border-white/8 bg-white/[0.03] p-7 backdrop-blur-sm transition-colors duration-300 hover:border-[#C4A55A]/20"
                style={{ borderColor: "rgba(255,255,255,0.08)" }}
              >
                <div
                  className="mb-1 font-['Cormorant_Garamond'] font-light text-[#C4A55A]"
                  style={{ fontSize: "clamp(40px, 4vw, 56px)", lineHeight: 1 }}
                >
                  10 ans
                </div>
                <div className="text-[11px] uppercase tracking-[0.1em] text-[#888888]">
                  Garantie décennale incluse
                </div>
                <p className="mt-3 max-w-[36ch] text-[13px] font-light leading-relaxed text-[#555]">
                  Une protection complète sur la durée, reflétant l'exigence constructive de Softgroup.
                </p>
              </motion.div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
