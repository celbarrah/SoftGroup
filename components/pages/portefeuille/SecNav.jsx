"use client"

import { useState, useEffect } from "react"

const SEGMENTS = [
  { id: "logistique",  label: "Logistique & Industriel" },
  { id: "residentiel", label: "Résidentiel de Prestige" },
  { id: "bureaux",     label: "Bureaux & Centres d'Affaires" },
  { id: "retail",      label: "Commercial" },
  { id: "terrains",    label: "Terrains & Développements" },
]

export default function SecNav() {
  const [active, setActive] = useState("logistique")

  useEffect(() => {
    const observers = []

    SEGMENTS.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id) },
        { threshold: 0.25 }
      )
      obs.observe(el)
      observers.push(obs)
    })

    return () => observers.forEach(o => o.disconnect())
  }, [])

  return (
    <nav className="sticky top-[90px] z-[90] bg-white border-b border-[rgba(196,165,90,0.12)] overflow-x-auto scrollbar-hide">
      <div className="max-w-[1400px] mx-auto px-[clamp(20px,5vw,80px)] flex">
        {SEGMENTS.map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            className={[
              "relative flex-1 py-[18px] px-4 font-sans text-[10px] tracking-[0.2em] uppercase text-center whitespace-nowrap no-underline transition-colors duration-200",
              active === id
                ? "text-gold font-semibold"
                : "text-[rgba(60,60,60,0.5)] font-normal hover:text-[rgba(60,60,60,0.8)]",
            ].join(" ")}
            onClick={() => setActive(id)}
          >
            {label}
            <span
              className={[
                "absolute bottom-0 left-0 right-0 h-[2px] bg-gold transition-transform duration-300 origin-center",
                active === id ? "scale-x-100" : "scale-x-0",
              ].join(" ")}
            />
          </a>
        ))}
      </div>
    </nav>
  )
}
