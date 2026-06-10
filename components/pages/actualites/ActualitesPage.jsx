"use client"

import { useRef, useState, useCallback } from "react"
import { motion, useInView } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { ARTICLES } from "@/lib/articles"
import ActualiteHero from "./HeroActualite"

/* ── Injected CSS — 3D tilt wrapper (same as CityCard) ─────── */
const TILT_CSS = `
.blg-inner {
  width: 100%; height: 100%;
  position: relative; border-radius: inherit; overflow: hidden;
  transform-style: preserve-3d;
  transition: transform 0.18s linear;
}
`

/* ─────────────────────────────────────────────────
   BLOG CARD — CityCard style, square format
   ───────────────────────────────────────────────── */
function BlogCard({ article, isActive, hasActive, onEnter, onLeave }) {
  const innerRef = useRef(null)

  const handlePointerMove = useCallback((e) => {
    const el = innerRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const rx = (e.clientX - (rect.left + rect.width  / 2)) / (rect.width  / 2)
    const ry = (e.clientY - (rect.top  + rect.height / 2)) / (rect.height / 2)
    el.style.transform = `rotateY(${-12 * rx}deg) rotateX(${9 * ry}deg)`
  }, [])

  const handlePointerLeave = useCallback(() => {
    const el = innerRef.current
    if (el) el.style.transform = ""
    onLeave()
  }, [onLeave])

  /* Excerpt — up to 120 chars */
  const excerpt = (article.excerpt || article.body?.[0] || "").slice(0, 120).trimEnd() + "…"

  return (
   <Link href={`/actualites/${article.slug}`}>
     <div
      onPointerEnter={onEnter}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      style={{
        position:   "relative",
        zIndex:     isActive ? 10 : 1,
        cursor:     "pointer",
        borderRadius: 6,
        aspectRatio: "1 / 1",
        transform:  isActive ? "scale(1.04)" : hasActive ? "scale(0.95)" : "scale(1)",
        opacity:    hasActive && !isActive ? 0.6 : 1,
        filter:     hasActive && !isActive ? "brightness(0.60) saturate(0.65)" : "none",
        transition: "transform 0.45s cubic-bezier(0.22,1,0.36,1), opacity 0.38s ease, filter 0.38s ease",
      }}
    >
      {/* Gold border on active */}
      <div style={{
        position: "absolute", inset: -1, borderRadius: "inherit",
        border: `1px solid rgba(196,165,90,${isActive ? 0.6 : 0})`,
        transition: "border-color 0.4s ease 0.1s",
        zIndex: 20, pointerEvents: "none",
      }} />

      {/* Perspective wrapper */}
      <div style={{ width: "100%", height: "100%", perspective: "900px", borderRadius: "inherit" }}>
        <div ref={innerRef} className="blg-inner">

          {/* Background image */}
          <Image
            src={article.image || "/img/anfa-hero-1.jpg"}
            alt={article.title}
            fill
            className="object-cover"
            sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
            style={{
              transform:  isActive ? "scale(1.06)" : "scale(1.12)",
              transition: "transform 0.7s cubic-bezier(0.22,1,0.36,1)",
            }}
          />

          {/* Cinematic gradient */}
          <div style={{
            position: "absolute", inset: 0,
            background: isActive
              ? "linear-gradient(to top, rgba(0,0,0,0.93) 0%, rgba(0,0,0,0.55) 45%, rgba(0,0,0,0.08) 80%, transparent 100%)"
              : "linear-gradient(to top, rgba(0,0,0,0.80) 0%, rgba(0,0,0,0.35) 50%, rgba(0,0,0,0.12) 100%)",
            transition: "background 0.5s ease",
          }} />

          {/* Gold bottom line */}
          <div style={{
            position: "absolute", bottom: 0, left: 0, right: 0, height: 2,
            background: "linear-gradient(to right, #C4A55A, transparent 70%)",
            opacity: isActive ? 1 : 0,
            transform: isActive ? "scaleX(1)" : "scaleX(0)",
            transformOrigin: "left",
            transition: "opacity 0.35s ease 0.1s, transform 0.55s cubic-bezier(0.22,1,0.36,1) 0.05s",
          }} />

          {/* Content */}
          <div style={{
            position: "absolute", inset: 0,
            display: "flex", flexDirection: "column",
            justifyContent: "space-between",
            padding: "22px 22px",
            zIndex: 2,
          }}>

            {/* Top row: category + read time */}
            <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
              <span style={{
                fontFamily: "var(--font-dm-sans, sans-serif)",
                fontSize: 9, letterSpacing: "0.28em",
                textTransform: "uppercase", fontWeight: 700,
                color: "rgba(196,165,90,0.85)",
                background: "rgba(0,0,0,0.35)",
                padding: "4px 8px", borderRadius: 2,
                border: "1px solid rgba(196,165,90,0.25)",
                backdropFilter: "blur(4px)",
              }}>
                {article.tag}
              </span>

              {/* Read time pill — visible on active */}
              {/* <div style={{
                opacity: isActive ? 1 : 0,
                transform: isActive ? "translateY(0)" : "translateY(-6px)",
                transition: `opacity 0.35s ease ${isActive ? "0.12s" : "0s"}, transform 0.4s ease ${isActive ? "0.08s" : "0s"}`,
                background: "rgba(196,165,90,0.45)",
                border: "1px solid rgba(196,165,90,0.35)",
                padding: "4px 10px", borderRadius: 2,
              }}>
                <span style={{
                  fontFamily: "var(--font-dm-sans, sans-serif)",
                  fontSize: 10, letterSpacing: "0.22em",
                  textTransform: "uppercase", color: "#fff",
                  lineHeight: 1, fontWeight: 500,
                }}>
                  {article.readTime}
                </span>
              </div> */}
            </div>

            {/* Bottom: title + revealed excerpt + link */}
            <div>
              {/* Title */}
              <h2 style={{
                fontFamily: "var(--font-cormorant, serif)",
                fontWeight: 300, color: "#ffffff",
                margin: 0,
                lineHeight: 1.15,
                marginBottom: isActive ? 12 : 6,
                fontSize: isActive ? "clamp(1.2rem, 2vw, 1.55rem)" : "clamp(1rem, 1.6vw, 1.3rem)",
                letterSpacing: "-0.01em",
                transition: "font-size 0.5s cubic-bezier(0.22,1,0.36,1), margin-bottom 0.5s cubic-bezier(0.22,1,0.36,1)",
                display: "-webkit-box", WebkitLineClamp: isActive ? 4 : 3,
                WebkitBoxOrient: "vertical", overflow: "hidden",
              }}>
                {article.title}
              </h2>

              {/* Gold underline */}
              <div style={{
                width: isActive ? 44 : 20,
                height: 1,
                background: "rgba(196,165,90,0.55)",
                marginBottom: isActive ? 14 : 0,
                transition: "width 0.5s cubic-bezier(0.22,1,0.36,1), margin-bottom 0.5s cubic-bezier(0.22,1,0.36,1)",
              }} />

              {/* Revealed excerpt + link */}
              <div style={{
                maxHeight: isActive ? 200 : 0,
                overflow: "hidden",
                opacity: isActive ? 1 : 0,
                transition: `max-height 0.55s cubic-bezier(0.22,1,0.36,1), opacity 0.4s ease ${isActive ? "0.16s" : "0s"}`,
              }}>
                <p style={{
                  fontFamily: "var(--font-dm-sans, sans-serif)",
                  fontSize: 12, color: "rgba(255,255,255,0.45)",
                  margin: "0 0 14px 0", lineHeight: 1.65,
                }}>
                  {excerpt}
                </p>

                <Link
                  href={`/actualites/${article.slug}`}
                  style={{
                    display: "inline-flex", alignItems: "center", gap: 6,
                    fontFamily: "var(--font-dm-sans, sans-serif)",
                    fontSize: 10, letterSpacing: "0.28em",
                    textTransform: "uppercase", fontWeight: 700,
                    color: "#C4A55A",
                    textDecoration: "none",
                    borderBottom: "1px solid rgba(196,165,90,0.35)",
                    paddingBottom: 2,
                  }}
                  onClick={e => e.stopPropagation()}
                >
                  Lire l&apos;article
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                    strokeLinecap="round" strokeLinejoin="round" width="11" height="11">
                    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                  </svg>
                </Link>
              </div>
            </div>
          </div>

        </div>{/* /blg-inner */}
      </div>
    </div>
   </Link>
  )
}

/* ─────────────────────────────────────────────────
   PAGE
   ───────────────────────────────────────────────── */
export default function ActualitesPage() {
  const [active, setActive] = useState(null)

  return (
    <main className="min-h-screen bg-cream pb-40"
      style={{
  WebkitClipPath: "polygon(0 0, 100% 0, 100% 85%, 0 100%)",
  clipPath: "polygon(0 0, 100% 0, 100% 85%, 0 100%)"
}}
    >
      <style dangerouslySetInnerHTML={{ __html: TILT_CSS }} />

      {/* ── Hero ───────────────────────────────────── */}
      <ActualiteHero />

      {/* ── Blog grid ─────────────────────────────── */}
      <section className="px-[clamp(20px,5vw,80px)] py-[clamp(48px,7vw,80px)]">
        <div className="max-w-[1300px] mx-auto">

          {/* Count label */}
          <div className="flex items-center gap-4 mb-10">
            <span className="font-sans text-[9px] tracking-[0.38em] uppercase font-bold text-gold">
              {ARTICLES.length} article{ARTICLES.length > 1 ? "s" : ""}
            </span>
            <span className="flex-1 h-px bg-gradient-to-r from-[rgba(196,165,90,0.25)] to-transparent" />
          </div>

          {/* Cards — 3-col grid, each square */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
            onPointerLeave={() => setActive(null)}
          >
            {ARTICLES.map((article) => (
              <BlogCard
                key={article.id}
                article={article}
                isActive={active === article.id}
                hasActive={active !== null}
                onEnter={() => setActive(article.id)}
                onLeave={() => setActive(null)}
              />
            ))}
          </div>

        </div>
      </section>

    </main>
  )
}
