"use client"
import { useEffect, useRef, useState, useCallback } from "react"
import { HFCorner, PatrimoineSeal, DecoOrn, ScrollCue, Panel } from "./shared"

const SLIDES = [
  { src: "/img/anfa-hero-1.jpg", filter: "sepia(0.3) contrast(1.04)" },
  { src: "/img/anfa-hero-2.jpg", filter: "sepia(0.12) contrast(1.04)" },
  { src: "/img/anfa-hero-3.jpg", filter: "sepia(0.45) contrast(1.04)" },
]

export default function P1Hero() {
  const [current, setCurrent] = useState(0)
  const timerRef = useRef(null)
  const n = SLIDES.length

  const goTo = useCallback((i) => {
    setCurrent(((i % n) + n) % n)
  }, [n])

  const resetTimer = useCallback(() => {
    clearInterval(timerRef.current)
    timerRef.current = setInterval(() => setCurrent(c => (c + 1) % n), 7000)
  }, [n])

  useEffect(() => {
    resetTimer()
    return () => clearInterval(timerRef.current)
  }, [resetTimer])

  /* Mouse parallax on ornaments */
  useEffect(() => {
    const decor = document.querySelector(".ad-hero-decor")
    if (!decor) return
    const onMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 14
      const y = (e.clientY / window.innerHeight - 0.5) * 14
      decor.style.transform = `translate(${x}px, ${y}px)`
    }
    document.addEventListener("mousemove", onMove)
    return () => document.removeEventListener("mousemove", onMove)
  }, [])

  return (
    <Panel id="adp1">
      {/* ── Slide track ── */}
      <div className="ad-hero-stage" aria-hidden="true">
        <div
          className="ad-hero-track"
          style={{ transform: `translateX(-${current * 100}%)`, transition: "transform 1.1s cubic-bezier(0.76,0,0.24,1)" }}
        >
          {SLIDES.map((sl, i) => (
            <div
              key={i}
              className="ad-hero-slide"
              style={{ backgroundImage: `url('${sl.src}')`, filter: sl.filter }}
            />
          ))}
        </div>
      </div>

      {/* Veil */}
      <div className="ad-hero-veil" />
      {/* Spotlight */}
      <div className="ad-hero-spotlight" />

      {/* Ornaments */}
      <div className="ad-hero-decor" aria-hidden="true">
        <div className="ad-deco d1">{DecoOrn.d1}</div>
        <div className="ad-deco d2">{DecoOrn.d2}</div>
        <div className="ad-deco d3">{DecoOrn.d3}</div>
        <div className="ad-deco d4">{DecoOrn.d4}</div>
        <div className="ad-deco d5">{DecoOrn.d5}</div>
      </div>

      {/* Corner frame */}
      <div className="ad-hero-frame">
        <HFCorner className="ad-hf-tl" />
        <HFCorner className="ad-hf-tr" />
        <HFCorner className="ad-hf-bl" />
        <HFCorner className="ad-hf-br" />
      </div>

      {/* Content */}
      <div className="ad-hero-content">
        <div className="ad-eyebrow ad-r">
          <span className="ad-dot" />
          Patrimoine · Art Déco · Casablanca
        </div>

        <h1 className="ad-h1">
          <span className="ad-phrase ad-r ad-d2">
            <span className="ad-setup pb-3">Là où l'Histoire vit encore</span>
          </span>
          <div className="ad-phrase-rule">
            <span className="l" /><span className="d" /><span className="l" />
          </div>
          <span className="ad-phrase ad-r ad-d3">
            <span className="ad-setup pt-3">Quand le Patrimoine devient éternel.</span>
          </span>
        </h1>

        <p className="ad-hero-sub ad-r ad-d4">
          Mémoire <em>vivante</em> d'un lieu qui a changé le monde.
        </p>
      </div>

      {/* Seal */}
      <div className="ad-hero-seal">
        <PatrimoineSeal size="sm" />
      </div>

      {/* Slider controls */}
      <button className="ad-hero-arrow ad-hero-arrow-prev" onClick={() => { goTo(current - 1); resetTimer() }} aria-label="Précédent">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="18" height="18"><polyline points="15 18 9 12 15 6"/></svg>
      </button>
      <button className="ad-hero-arrow ad-hero-arrow-next" onClick={() => { goTo(current + 1); resetTimer() }} aria-label="Suivant">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="18" height="18"><polyline points="9 18 15 12 9 6"/></svg>
      </button>
      <div className="ad-hero-dots">
        {SLIDES.map((_, i) => (
          <button key={i} className={`ad-hero-dot${current === i ? " active" : ""}`} onClick={() => { goTo(i); resetTimer() }} aria-label={`Slide ${i + 1}`} />
        ))}
      </div>
      <div className="ad-hero-progress">
        <div className="ad-hero-progress-bar" style={{ width: `${((current + 1) / n) * 100}%`, transition: "width 1.1s cubic-bezier(0.76,0,0.24,1)" }} />
      </div>

      <ScrollCue label="Faites défiler" />

    </Panel>
  )
}
