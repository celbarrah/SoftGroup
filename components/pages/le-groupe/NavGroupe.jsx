"use client"

import { useRef, useState, useEffect } from "react"

const NAV_ITEMS = [
  { label: "Pôles d'Activités",      href: "#poles-activites"       },
  { label: "Notre Histoire",          href: "#notre-histoire"        },
  { label: "Immobilier Locatif",      href: "#softgroup-immobilier"  },
  { label: "Fondation Amine Kabbaj",  href: "#fondation"             },
  { label: "SoftCulture",            href: "#softculture"           },
]

export default function NavGroupe() {
  const [active, setActive] = useState(0)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  function handleClick(e, href, i) {
    e.preventDefault()
    setActive(i)
    const el = document.querySelector(href)
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 100
      window.scrollTo({ top: y, behavior: "smooth" })
    }
  }

  return (
    <div
      className="sticky top-[90px] z-50 bg-white border-b border-gray-100 overflow-x-auto"
      style={{
        boxShadow: scrolled ? "0 1px 24px rgba(0,0,0,0.06)" : "none",
        transition: "box-shadow 0.3s ease",
      }}
    >
      <div className="max-w-400 mx-auto px-8 md:px-12 lg:px-20">
        <nav className="flex items-center gap-0 min-w-max md:min-w-0">
          {NAV_ITEMS.map((item, i) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleClick(e, item.href, i)}
              className="relative flex-none md:flex-1 px-5 py-5 font-sans text-[13px] tracking-[0.2em] uppercase whitespace-nowrap transition-colors duration-200 text-center"
              style={{
                color:  active === i ? "#C4A55A" : "rgba(64,64,64,0.6)",
                fontWeight: active === i ? 600 : 400,
              }}
            >
              {item.label}
              {/* Active underline */}
              <span
                className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold transition-transform duration-300 origin-center"
                style={{ transform: active === i ? "scaleX(1)" : "scaleX(0)" }}
              />
            </a>
          ))}
        </nav>
      </div>
    </div>
  )
}
