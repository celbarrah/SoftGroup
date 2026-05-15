"use client"

import { useRef, useState, useCallback } from "react"
import { motion, useInView } from "framer-motion"

/**
 * TerritorialMapCards
 * ─────────────────────────────────────────────────────────────
 * 4 city cards with a 3D holographic tilt effect on hover,
 * inspired by the reference CSS/JS holo card code.
 *
 * Behaviour:
 *  • All cards start equal width, background image visible,
 *    city name at the bottom.
 *  • On hover: card scales up (1.07), tilts 3D following
 *    mouse position (rotateX / rotateY), gold holo shimmer
 *    + dot pattern overlay appear.
 *  • Other cards: scale down (0.92), dim slightly.
 *  • On mouse-leave: smooth reset to resting state.
 */

/* ─── City data ─────────────────────────────────────────────── */
const CITIES = [
  {
    id:       "casablanca",
    num:      "01",
    name:     "Casablanca",
    tagline:  "Le Hub Multi-Actifs du Royaume",
    segments: "Bureaux · Résidentiel · Logistique · Retail",
    access:   "Port < 20 min · Aéroport 25 min",
    zones:    "Bd d'Anfa · Ain Diab · CFC · Rachidi · Aïn Sebaâ",
    image:    "https://res.cloudinary.com/dofyrwzop/image/upload/q_auto/f_auto/v1778862098/casablanca_nlw98u.jpg",
  },
  {
    id:       "tanger",
    num:      "02",
    name:     "Tanger",
    tagline:  "Gateway Logistique & Industriel",
    segments: "Zones Franches · ZAI · Régimes fiscaux optimisés",
    access:   "Tanger Med < 45 min · 180 ports mondiaux connectés",
    zones:    "TFZ · Tanger Automotive City · A1 / A5",
    image:    "https://res.cloudinary.com/dofyrwzop/image/upload/q_auto/f_auto/v1778862217/tanger_wkkzhh.jpg",
  },
  {
    id:       "kenitra",
    num:      "03",
    name:     "Kénitra",
    tagline:  "Écosystème Industriel d'Excellence",
    segments: "Atlantic Free Zone · Automotive Rang 1 & 2",
    access:   "Stellantis < 5 min · Gare TGV 15 min",
    zones:    "A1 · Casa 45 min · Tanger 1h30",
    image:    "https://res.cloudinary.com/dofyrwzop/image/upload/q_auto/f_auto/v1778862256/kenitra_sticp8.jpg",
  },
  {
    id:       "agadir",
    num:      "04",
    name:     "Agadir",
    tagline:  "Porte Logistique du Grand Sud",
    segments: "Agro-industrie · Halieutique · Distribution régionale",
    access:   "Port d'Agadir accès direct · Souss-Massa",
    zones:    "Axe Agadir-Marrakech < 10 min",
    image:    "https://res.cloudinary.com/dofyrwzop/image/upload/q_auto/f_auto/v1778862302/agadir_ohtokf.jpg",
  },
]

/* ─── Injected CSS — 3D tilt only, no color overlays ───────── */
const HOLO_CSS = `
/* ── 3D tilt wrapper ── */
.sgc-inner {
  width: 100%;
  height: 100%;
  position: relative;
  border-radius: inherit;
  overflow: hidden;
  transform-style: preserve-3d;
  transition: transform 0.18s linear;
}
`

/* ─── Individual card ───────────────────────────────────────── */
function CityCard({ city, isActive, hasActive, onEnter, onLeave }) {
  const innerRef = useRef(null)

  /* Update 3D tilt + holo vars on pointer move */
  const handlePointerMove = useCallback((e) => {
    const el = innerRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const hw = rect.width  / 2
    const hh = rect.height / 2
    const rx = (e.clientX - (rect.left + hw)) / hw   // -1 → +1
    const ry = (e.clientY - (rect.top  + hh)) / hh   // -1 → +1
    el.style.setProperty("--sgc-rx", rx)
    el.style.setProperty("--sgc-ry", ry)
    el.style.transform = `rotateY(${-15 * rx}deg) rotateX(${12 * ry}deg)`
  }, [])

  /* Reset on pointer leave */
  const handlePointerLeave = useCallback(() => {
    const el = innerRef.current
    if (!el) return
    el.style.setProperty("--sgc-rx", 0)
    el.style.setProperty("--sgc-ry", 0)
    el.style.transform = ""
    onLeave()
  }, [onLeave])

  return (
    <div
      onPointerEnter={onEnter}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      style={{
        flex:         1,
        minWidth:     0,
        position:     "relative",
        zIndex:       isActive ? 10 : 1,
        cursor:       "pointer",
        borderRadius: 4,
        /* Active card rises; others step back */
        transform:    isActive ? "scale(1.055)" : hasActive ? "scale(0.94)" : "scale(1)",
        opacity:      hasActive && !isActive ? 0.6 : 1,
        filter:       hasActive && !isActive ? "brightness(0.65) saturate(0.7)" : "brightness(1) saturate(1)",
        transition:   "transform 0.45s cubic-bezier(0.22,1,0.36,1), opacity 0.38s ease, filter 0.38s ease",
      }}
    >
      {/* Thin gold border — appears on active */}
      <div
        style={{
          position:     "absolute",
          inset:        -1,
          borderRadius: "inherit",
          border:       `1px solid rgba(196,165,90,${isActive ? 0.55 : 0})`,
          transition:   "border-color 0.4s ease 0.1s",
          zIndex:       20,
          pointerEvents: "none",
        }}
      />

      {/* Perspective wrapper */}
      <div style={{ width: "100%", height: "100%", perspective: "800px", borderRadius: "inherit" }}>

        {/* 3D tilt element */}
        <div ref={innerRef} className="sgc-inner">

          {/* Background image */}
          <div
            style={{
              position:           "absolute",
              inset:              0,
              backgroundImage:    `url(${city.image})`,
              backgroundSize:     "cover",
              backgroundPosition: "center",
              transform:          isActive ? "scale(1.06)" : "scale(1.12)",
              transition:         "transform 0.7s cubic-bezier(0.22,1,0.36,1)",
            }}
          />

          {/* Cinematic gradient — bottom-heavy for text legibility */}
          <div
            style={{
              position:   "absolute",
              inset:      0,
              background: isActive
                ? `linear-gradient(
                    to top,
                    rgba(0,0,0,0.92) 0%,
                    rgba(0,0,0,0.55) 45%,
                    rgba(0,0,0,0.10) 80%,
                    rgba(0,0,0,0.0)  100%
                  )`
                : `linear-gradient(
                    to top,
                    rgba(0,0,0,0.78) 0%,
                    rgba(0,0,0,0.38) 50%,
                    rgba(0,0,0,0.15) 100%
                  )`,
              transition: "background 0.5s ease",
            }}
          />

          {/* Gold bottom-left accent line */}
          <div
            style={{
              position:        "absolute",
              bottom:          0,
              left:            0,
              right:           0,
              height:          2,
              background:      "linear-gradient(to right, #C4A55A, transparent 70%)",
              opacity:         isActive ? 1 : 0,
              transform:       isActive ? "scaleX(1)" : "scaleX(0)",
              transformOrigin: "left",
              transition:      "opacity 0.35s ease 0.1s, transform 0.55s cubic-bezier(0.22,1,0.36,1) 0.05s",
            }}
          />

          {/* ── Content ── */}
          <div
            style={{
              position:       "absolute",
              inset:          0,
              display:        "flex",
              flexDirection:  "column",
              justifyContent: "space-between",
              padding:        "28px 26px",
              zIndex:         2,
            }}
          >
            {/* Top row: number + tagline */}
            <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
              <span
                style={{
                  fontFamily:    "var(--font-dm-sans, sans-serif)",
                  fontSize:      9,
                  letterSpacing: "0.35em",
                  textTransform: "uppercase",
                  color:         "rgba(255,255,255,0.28)",
                  fontWeight:    500,
                }}
              >
                {city.num}
              </span>
              {/* Tagline pill — appears on active */}
              <div
                style={{
                  opacity:    isActive ? 1 : 0,
                  transform:  isActive ? "translateY(0)" : "translateY(-6px)",
                  transition: `opacity 0.35s ease ${isActive ? "0.12s" : "0s"}, transform 0.4s ease ${isActive ? "0.08s" : "0s"}`,
                  background: "rgba(196,165,90,0.50)",
                  border:     "1px solid rgba(196,165,90,0.35)",
                  padding:    "4px 10px",
                  borderRadius: 2,
                }}
              >
                <span
                  style={{
                    fontFamily:    "var(--font-dm-sans, sans-serif)",
                    fontSize:      8,
                    letterSpacing: "0.25em",
                    textTransform: "uppercase",
                    color:         "#fff",
                    lineHeight:    1,
                    fontWeight:    500,
                  }}
                >
                  {city.tagline}
                </span>
              </div>
            </div>

            {/* Bottom: city name + revealed info */}
            <div>
              {/* City name — always visible, grows on hover */}
              <h3
                style={{
                  fontFamily:   "var(--font-cormorant, serif)",
                  fontWeight:   300,
                  color:        "#ffffff",
                  margin:       0,
                  lineHeight:   1.0,
                  marginBottom: isActive ? 16 : 6,
                  fontSize:     isActive
                    ? "clamp(2.2rem, 3vw, 3.2rem)"
                    : "clamp(1.6rem, 1.9vw, 2.2rem)",
                  letterSpacing: "-0.01em",
                  transition:   "font-size 0.5s cubic-bezier(0.22,1,0.36,1), margin-bottom 0.5s cubic-bezier(0.22,1,0.36,1)",
                }}
              >
                {city.name}
              </h3>

              {/* Always-visible short underline */}
              <div
                style={{
                  width:      isActive ? 48 : 24,
                  height:     1,
                  background: "rgba(196,165,90,0.5)",
                  marginBottom: isActive ? 16 : 0,
                  transition: "width 0.5s cubic-bezier(0.22,1,0.36,1), margin-bottom 0.5s cubic-bezier(0.22,1,0.36,1)",
                }}
              />

              {/* Revealed info */}
              <div
                style={{
                  maxHeight:  isActive ? 140 : 0,
                  overflow:   "hidden",
                  opacity:    isActive ? 1 : 0,
                  transition: `max-height 0.55s cubic-bezier(0.22,1,0.36,1), opacity 0.4s ease ${isActive ? "0.16s" : "0s"}`,
                }}
              >
                <p
                  style={{
                    fontFamily:    "var(--font-dm-sans, sans-serif)",
                    fontSize:      11,
                    color:         "rgba(255,255,255,0.55)",
                    margin:        0,
                    marginBottom:  10,
                    lineHeight:    1.75,
                    letterSpacing: "0.03em",
                    fontWeight:    400,
                  }}
                >
                  {city.segments}
                </p>
                 <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <div style={{ width: 3, height: 3, borderRadius: "50%", background: "rgba(196,165,90,0.6)", flexShrink: 0 }} />
                  <p
                    style={{
                      fontFamily:    "var(--font-dm-sans, sans-serif)",
                      fontSize:      10,
                      color:         "rgba(255,255,255,0.32)",
                      margin:        0,
                      letterSpacing: "0.04em",
                    }}
                  >
                    {city.zones}
                  </p>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <div style={{ width: 3, height: 3, borderRadius: "50%", background: "rgba(196,165,90,0.6)", flexShrink: 0 }} />
                  <p
                    style={{
                      fontFamily:    "var(--font-dm-sans, sans-serif)",
                      fontSize:      10,
                      color:         "rgba(255,255,255,0.32)",
                      margin:        0,
                      letterSpacing: "0.04em",
                    }}
                  >
                    {city.access}
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>{/* /sgc-inner */}
      </div>{/* /perspective */}
    </div>
  )
}

/* ─── Section ───────────────────────────────────────────────── */
export default function TerritorialMapCards() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-8%" })
  const [active, setActive] = useState(null)

  return (
    <section ref={ref} className="bg-[#F5F3EF] py-5 md:py-5" id="implantations">

      {/* Inject @property + holo CSS */}
      <style dangerouslySetInnerHTML={{ __html: HOLO_CSS }} />

      <div className="max-w-[1500px] mx-auto px-8 md:px-10 lg:px-13">

        {/* ── Header ─────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14"
        >
          <div>
            <p className="font-sans text-[14px] font-extrabold tracking-[0.55em] uppercase text-gold/70 mb-4">
              Présence Nationale
            </p>
            <h2 className="font-serif text-4xl md:text-6xl text-neutral-800 font-light leading-[1.1]">
              Notre Empreinte<br />
              <span className="italic text-gold">Territoriale</span>
            </h2>
          </div>
          <p className="font-sans text-[16px] text-neutral-400 max-w-3xl leading-relaxed md:text-right">
            Implantés dans les 4 pôles économiques stratégiques du Maroc, au plus près de vos besoins
          </p>
        </motion.div>

        {/* ── Desktop: 3D holo cards ──────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.25 }}
          className="hidden md:flex gap-4 h-[580px]"
          /* Reset all cards on leaving the row */
          onMouseLeave={() => setActive(null)}
        >
          {CITIES.map((city) => (
            <CityCard
              key={city.id}
              city={city}
              isActive={active === city.id}
              hasActive={active !== null}
              onEnter={() => setActive(city.id)}
              onLeave={() => setActive(null)}
            />
          ))}
        </motion.div>

        {/* ── Mobile: stacked accordion ───────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex md:hidden flex-col gap-2"
        >
          {CITIES.map((city) => {
            const isOpen = active === city.id
            return (
              <div
                key={city.id}
                onClick={() => setActive(isOpen ? null : city.id)}
                style={{
                  position:     "relative",
                  overflow:     "hidden",
                  borderRadius: 10,
                  height:       isOpen ? 260 : 90,
                  cursor:       "pointer",
                  transition:   "height 0.52s cubic-bezier(0.22,1,0.36,1)",
                }}
              >
                <div
                  style={{
                    position:           "absolute",
                    inset:              0,
                    backgroundImage:    `url(${city.image})`,
                    backgroundSize:     "cover",
                    backgroundPosition: "center",
                    transform:          isOpen ? "scale(1.04)" : "scale(1.1)",
                    transition:         "transform 0.52s cubic-bezier(0.22,1,0.36,1)",
                  }}
                />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(0,0,0,0.84) 50%, rgba(0,0,0,0.2) 100%)" }} />
                <div style={{ position: "absolute", top: 0, left: 0, bottom: 0, width: 3, background: "var(--color-gold, #C4A55A)", opacity: isOpen ? 1 : 0, transition: "opacity 0.3s ease" }} />
                <div style={{ position: "relative", zIndex: 1, height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: "16px 22px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                    <span style={{ fontFamily: "var(--font-dm-sans, sans-serif)", fontSize: 11, letterSpacing: "0.3em", color: "var(--color-gold, #C4A55A)", textTransform: "uppercase" }}>{city.num}</span>
                    {isOpen && <span style={{ fontFamily: "var(--font-dm-sans, sans-serif)", fontSize: 11, letterSpacing: "0.22em", color: "rgba(196,165,90,0.6)", textTransform: "uppercase" }}>· {city.tagline}</span>}
                  </div>
                  <h3 style={{ fontFamily: "var(--font-cormorant, serif)", fontSize: 28, fontWeight: 300, color: "#fff", margin: 0, marginBottom: isOpen ? 12 : 0 }}>{city.name}</h3>
                  {isOpen && (
                    <>
                      <div style={{ width: 30, height: 1, background: "rgba(196,165,90,0.4)", marginBottom: 10 }} />
                      <p style={{ fontFamily: "var(--font-dm-sans, sans-serif)", fontSize: 11, color: "rgba(255,255,255,0.5)", margin: 0, marginBottom: 4, lineHeight: 1.6 }}>{city.segments}</p>
                      <p style={{ fontFamily: "var(--font-dm-sans, sans-serif)", fontSize: 11, color: "rgba(255,255,255,0.3)", margin: 0 }}>{city.access}</p>
                    </>
                  )}
                </div>
              </div>
            )
          })}
        </motion.div>

        {/* ── Bottom city legend ──────────────────────── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="hidden md:flex items-center gap-8 mt-8"
        >
          {CITIES.map((city) => (
            <div
              key={city.id}
              style={{
                display:    "flex",
                alignItems: "center",
                gap:        10,
                opacity:    active === city.id || active === null ? 1 : 0.3,
                transition: "opacity 0.3s ease",
              }}
            >
              <div
                style={{
                  background: "var(--color-gold, #C4A55A)",
                  height:     1,
                  width:      active === city.id ? 24 : 10,
                  transition: "width 0.42s cubic-bezier(0.22,1,0.36,1)",
                }}
              />
              <span
                style={{
                  fontFamily:    "var(--font-dm-sans, sans-serif)",
                  fontSize:      10,
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color:         "#737373",
                }}
              >
                {city.name}
              </span>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
