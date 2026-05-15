"use client"

import { useRef, useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

/* ─── City data ─────────────────────────────────────────────── */
const CITIES = [
  {
    id: "casablanca",
    label: "Casablanca",
    lon: -7.59, lat: 33.57,
    tag: "Hub Principal",
    desc: "Capitale économique du Maroc. Siège social SOFTGROUP et principal pôle d'actifs logistiques, bureaux et résidentiels de prestige.",
    assets: ["Zone Industrielle Ain Sebaâ", "Bd de la Corniche", "CFC — Casablanca Finance City"],
    stat: "40+",
  },
  {
    id: "rabat",
    label: "Rabat",
    lon: -6.85, lat: 34.02,
    tag: "Capital Administratif",
    desc: "Capitale politique & administrative. Nos bureaux premium et résidences diplomatiques répondent aux standards les plus exigeants.",
    assets: ["Hay Riad", "Agdal Business", "Souissi Résidentiel"],
    stat: "12+",
  },
  {
    id: "tanger",
    label: "Tanger",
    lon: -5.80, lat: 35.77,
    tag: "Pôle Logistique Nord",
    desc: "Carrefour stratégique entre l'Europe et l'Afrique. Tanger Med en fait le hub logistique incontournable du Maghreb.",
    assets: ["Zone Franche Tanger", "Tanger Med Port", "Malabata Business"],
    stat: "8+",
  },
  {
    id: "marrakech",
    label: "Marrakech",
    lon: -8.01, lat: 31.63,
    tag: "Prestige & Tourisme",
    desc: "Destination d'excellence mondiale. Villas de prestige et hôtels d'affaires incarnent le raffinement marocain.",
    assets: ["Palmeraie Resort", "Route de Fès", "Guéliz Business"],
    stat: "15+",
  },
  {
    id: "agadir",
    label: "Agadir",
    lon: -9.60, lat: 30.42,
    tag: "Côte Atlantique",
    desc: "Ville en plein essor sur la côte atlantique. Développements résidentiels balnéaires et pôle touristique de premier rang.",
    assets: ["Bay Resort", "Zone Industrielle", "Marina Agadir"],
    stat: "6+",
  },
]

/* ─── Morocco outline (simplified lon/lat pairs) ────────────── */
const MOROCCO_POLY = [
  [-5.95, 35.75], [-4.30, 35.75], [-3.60, 35.68], [-2.90, 35.30],
  [-2.20, 35.10], [-2.00, 34.75], [-1.80, 34.50], [-1.65, 33.50],
  [-1.20, 32.90], [-1.15, 32.20], [-1.80, 31.50], [-2.50, 30.00],
  [-3.30, 29.30], [-3.70, 29.00], [-4.80, 28.50], [-8.00, 27.70],
  [-8.67, 27.65], [-9.20, 26.60], [-13.10, 27.65], [-13.70, 23.55],
  [-14.40, 21.87], [-17.02, 21.05],
  [-17.05, 20.88], [-16.50, 21.30], [-15.50, 22.00], [-14.50, 23.00],
  [-13.20, 24.00], [-12.00, 25.50], [-10.50, 27.00],
  [-9.50, 28.50], [-9.00, 30.00], [-9.60, 30.50],
  [-10.00, 31.50], [-9.70, 33.00], [-9.50, 34.00],
  [-9.00, 34.50], [-7.50, 35.20], [-6.50, 35.50], [-5.95, 35.75],
]

/* ─── Globe math ────────────────────────────────────────────── */
function toCartesian(lon, lat) {
  const λ = (lon * Math.PI) / 180
  const φ = (lat * Math.PI) / 180
  return {
    x: Math.cos(φ) * Math.cos(λ),
    y: Math.sin(φ),
    z: Math.cos(φ) * Math.sin(λ),
  }
}

function applyRotation({ x, y, z }, rotLon, rotLat) {
  // Y-axis rotation (longitude)
  const ry = (-rotLon * Math.PI) / 180
  const cy = Math.cos(ry), sy = Math.sin(ry)
  const x1 = x * cy + z * sy
  const z1 = -x * sy + z * cy

  // X-axis rotation (latitude tilt)
  const rx = (rotLat * Math.PI) / 180
  const cx = Math.cos(rx), sx = Math.sin(rx)
  const y2 = y * cx - z1 * sx
  const z2 = y * sx + z1 * cx

  return { x: x1, y: y2, z: z2 }
}

/* ─── Canvas draw helpers ───────────────────────────────────── */
function drawGlobe(ctx, rotLon, rotLat, radius, cx, cy, activeCityId) {
  /* ── Sphere base ── */
  const grad = ctx.createRadialGradient(
    cx - radius * 0.28, cy - radius * 0.28, radius * 0.04,
    cx, cy, radius,
  )
  grad.addColorStop(0,   "#FFFFFF")
  grad.addColorStop(0.6, "#F8F5F0")
  grad.addColorStop(1,   "#EDE6DA")
  ctx.beginPath()
  ctx.arc(cx, cy, radius, 0, Math.PI * 2)
  ctx.fillStyle = grad
  ctx.fill()

  /* ── Clip everything to sphere ── */
  ctx.save()
  ctx.beginPath()
  ctx.arc(cx, cy, radius - 0.5, 0, Math.PI * 2)
  ctx.clip()

  /* ── Grid lines ── */
  ctx.lineWidth = 0.6
  // Lat lines
  for (let lat = -80; lat <= 80; lat += 20) {
    ctx.beginPath()
    let first = true
    for (let lon = -180; lon <= 180; lon += 2) {
      const p = applyRotation(toCartesian(lon, lat), rotLon, rotLat)
      if (p.z < 0) { first = true; continue }
      const sx = cx + p.x * radius
      const sy = cy - p.y * radius
      if (first) { ctx.moveTo(sx, sy); first = false }
      else ctx.lineTo(sx, sy)
    }
    ctx.strokeStyle = lat === 0
      ? "rgba(196,165,90,0.18)"
      : "rgba(196,165,90,0.08)"
    ctx.stroke()
  }
  // Lon lines
  for (let lon = -180; lon < 180; lon += 20) {
    ctx.beginPath()
    let first = true
    for (let lat = -90; lat <= 90; lat += 2) {
      const p = applyRotation(toCartesian(lon, lat), rotLon, rotLat)
      if (p.z < 0) { first = true; continue }
      const sx = cx + p.x * radius
      const sy = cy - p.y * radius
      if (first) { ctx.moveTo(sx, sy); first = false }
      else ctx.lineTo(sx, sy)
    }
    ctx.strokeStyle = "rgba(196,165,90,0.07)"
    ctx.stroke()
  }

  /* ── Morocco fill ── */
  ctx.beginPath()
  let first = true
  for (const [lon, lat] of MOROCCO_POLY) {
    const p = applyRotation(toCartesian(lon, lat), rotLon, rotLat)
    if (p.z < 0) { first = true; continue }
    const sx = cx + p.x * radius
    const sy = cy - p.y * radius
    if (first) { ctx.moveTo(sx, sy); first = false }
    else ctx.lineTo(sx, sy)
  }
  ctx.closePath()
  ctx.fillStyle = "rgba(196,165,90,0.18)"
  ctx.fill()
  ctx.strokeStyle = "rgba(196,165,90,0.75)"
  ctx.lineWidth = 1.5
  ctx.stroke()

  ctx.restore()

  /* ── Sphere border + atmosphere ── */
  ctx.beginPath()
  ctx.arc(cx, cy, radius, 0, Math.PI * 2)
  ctx.strokeStyle = "rgba(196,165,90,0.22)"
  ctx.lineWidth = 1.5
  ctx.stroke()

  const atm = ctx.createRadialGradient(cx, cy, radius * 0.9, cx, cy, radius * 1.06)
  atm.addColorStop(0, "rgba(196,165,90,0.14)")
  atm.addColorStop(1, "rgba(196,165,90,0)")
  ctx.beginPath()
  ctx.arc(cx, cy, radius * 1.06, 0, Math.PI * 2)
  ctx.fillStyle = atm
  ctx.fill()

  /* ── City markers ── */
  const positions = []
  for (const city of CITIES) {
    const p = applyRotation(toCartesian(city.lon, city.lat), rotLon, rotLat)
    if (p.z < 0.02) continue
    const sx = cx + p.x * radius
    const sy = cy - p.y * radius
    const isActive = city.id === activeCityId
    const r = isActive ? 7 : 5

    // Glow ring for active
    if (isActive) {
      const glowR = r * 3.5
      const glow = ctx.createRadialGradient(sx, sy, r, sx, sy, glowR)
      glow.addColorStop(0, "rgba(196,165,90,0.35)")
      glow.addColorStop(1, "rgba(196,165,90,0)")
      ctx.beginPath()
      ctx.arc(sx, sy, glowR, 0, Math.PI * 2)
      ctx.fillStyle = glow
      ctx.fill()

      ctx.beginPath()
      ctx.arc(sx, sy, r * 2.2, 0, Math.PI * 2)
      ctx.strokeStyle = "rgba(196,165,90,0.5)"
      ctx.lineWidth = 1
      ctx.stroke()
    }

    // Gold dot
    ctx.beginPath()
    ctx.arc(sx, sy, r, 0, Math.PI * 2)
    ctx.fillStyle = "#C4A55A"
    ctx.fill()

    // White center
    ctx.beginPath()
    ctx.arc(sx, sy, r * 0.38, 0, Math.PI * 2)
    ctx.fillStyle = "#FFFFFF"
    ctx.fill()

    // City label
    ctx.font = isActive
      ? `600 13px 'Cormorant Garamond', serif`
      : `400 11px 'Cormorant Garamond', serif`
    ctx.fillStyle = isActive ? "#C4A55A" : "rgba(100,80,20,0.6)"
    ctx.fillText(city.label, sx + r + 5, sy + 4)

    positions.push({ city, sx, sy, r: r + 8 })
  }

  return positions
}

/* ─── Main component ─────────────────────────────────────────── */
export default function TerritorialMapPremium() {
  const sectionRef = useRef(null)
  const canvasRef  = useRef(null)
  const inView     = useInView(sectionRef, { once: true, margin: "-10%" })

  const [activeCity, setActiveCity] = useState(CITIES[0])

  // All mutable state in refs so the draw loop doesn't restart
  const rotRef          = useRef({ lon: 7.5, lat: -20 })
  const isDragging      = useRef(false)
  const lastMouse       = useRef({ x: 0, y: 0 })
  const pauseAutoRef    = useRef(false)
  const activeCityIdRef = useRef(CITIES[0].id)
  const cityScreenPos   = useRef([])
  const dprRef          = useRef(1)

  // Keep activeCityIdRef in sync with state
  useEffect(() => {
    activeCityIdRef.current = activeCity.id
  }, [activeCity])

  /* ─── Canvas draw loop ─── */
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    dprRef.current = window.devicePixelRatio || 1

    function resize() {
      const dpr  = dprRef.current
      const rect = canvas.getBoundingClientRect()
      canvas.width  = rect.width  * dpr
      canvas.height = rect.height * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    resize()
    window.addEventListener("resize", resize)

    let animId
    function draw() {
      const W = canvas.getBoundingClientRect().width
      const H = canvas.getBoundingClientRect().height
      ctx.clearRect(0, 0, W, H)

      const radius = Math.min(W, H) * 0.44
      const cx = W * 0.5
      const cy = H * 0.5

      // Drop shadow behind sphere
      ctx.save()
      ctx.shadowColor  = "rgba(196,165,90,0.15)"
      ctx.shadowBlur   = 40
      ctx.shadowOffsetX = 6
      ctx.shadowOffsetY = 10
      ctx.beginPath()
      ctx.arc(cx, cy, radius, 0, Math.PI * 2)
      ctx.fillStyle = "#EDE6DA"
      ctx.fill()
      ctx.restore()

      cityScreenPos.current = drawGlobe(
        ctx,
        rotRef.current.lon,
        rotRef.current.lat,
        radius, cx, cy,
        activeCityIdRef.current,
      )

      animId = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener("resize", resize)
    }
  }, [])

  /* ─── Auto rotation ─── */
  useEffect(() => {
    let last = performance.now()
    let rafId
    function tick(now) {
      if (!pauseAutoRef.current) {
        const dt = now - last
        rotRef.current.lon += dt * 0.012
      }
      last = now
      rafId = requestAnimationFrame(tick)
    }
    rafId = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafId)
  }, [])

  /* ─── Auto city cycle ─── */
  useEffect(() => {
    const interval = setInterval(() => {
      if (pauseAutoRef.current) return
      setActiveCity(prev => {
        const idx  = CITIES.findIndex(c => c.id === prev.id)
        const next = CITIES[(idx + 1) % CITIES.length]
        // Smoothly pan globe to that city
        rotRef.current.lon = -next.lon + 10
        rotRef.current.lat = -next.lat * 0.45
        return next
      })
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  /* ─── Mouse / touch helpers ─── */
  const onDown = useCallback((x, y) => {
    isDragging.current  = true
    lastMouse.current   = { x, y }
    pauseAutoRef.current = true
  }, [])

  const onMove = useCallback((x, y) => {
    if (!isDragging.current) return
    const dx = x - lastMouse.current.x
    const dy = y - lastMouse.current.y
    rotRef.current.lon -= dx * 0.45
    rotRef.current.lat  = Math.max(-75, Math.min(75, rotRef.current.lat + dy * 0.35))
    lastMouse.current   = { x, y }
  }, [])

  const onUp = useCallback((clientX, clientY) => {
    isDragging.current = false
    // Hit-test cities
    const canvas = canvasRef.current
    if (canvas) {
      const rect = canvas.getBoundingClientRect()
      const mx = clientX - rect.left
      const my = clientY - rect.top
      for (const { city, sx, sy, r } of cityScreenPos.current) {
        if (Math.hypot(mx - sx, my - sy) < r) {
          setActiveCity(city)
          activeCityIdRef.current = city.id
          rotRef.current.lon = -city.lon + 10
          rotRef.current.lat = -city.lat * 0.45
          break
        }
      }
    }
    setTimeout(() => { pauseAutoRef.current = false }, 5000)
  }, [])

  const selectCity = useCallback((city) => {
    setActiveCity(city)
    activeCityIdRef.current = city.id
    rotRef.current.lon = -city.lon + 10
    rotRef.current.lat = -city.lat * 0.45
    pauseAutoRef.current = true
    setTimeout(() => { pauseAutoRef.current = false }, 6000)
  }, [])

  return (
    <section
      ref={sectionRef}
      id="territoire"
      className="relative bg-[#F5F3EF] py-24 md:py-32 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-20">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-14"
        >
          <p className="font-sans text-[11px] font-bold tracking-[0.55em] uppercase text-gold/60 mb-4">
            Présence Territoriale
          </p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="font-serif text-4xl md:text-5xl text-neutral-800 font-light leading-[1.05]">
              Implantation<br />
              <span className="italic text-gold">Nationale</span>
            </h2>
            <p className="font-sans text-[13px] text-neutral-400 md:text-right max-w-xs">
              Glissez le globe pour explorer.<br />Cliquez sur une ville pour en savoir plus.
            </p>
          </div>
        </motion.div>

        {/* ── Globe + Info ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-12 items-center">

          {/* Globe canvas */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <canvas
              ref={canvasRef}
              className="w-full select-none"
              style={{
                height: "min(70vh, 580px)",
                cursor: isDragging.current ? "grabbing" : "grab",
                touchAction: "none",
              }}
              onMouseDown={e => onDown(e.clientX, e.clientY)}
              onMouseMove={e => onMove(e.clientX, e.clientY)}
              onMouseUp={e => onUp(e.clientX, e.clientY)}
              onMouseLeave={e => onUp(e.clientX, e.clientY)}
              onTouchStart={e => {
                const t = e.touches[0]
                onDown(t.clientX, t.clientY)
              }}
              onTouchMove={e => {
                e.preventDefault()
                const t = e.touches[0]
                onMove(t.clientX, t.clientY)
              }}
              onTouchEnd={e => {
                const t = e.changedTouches[0]
                onUp(t.clientX, t.clientY)
              }}
            />

            {/* Drag hint */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 1.5, duration: 0.8 }}
              className="absolute bottom-2 left-1/2 -translate-x-1/2 font-sans text-[9px] tracking-[0.35em] uppercase text-neutral-400 whitespace-nowrap pointer-events-none"
            >
              ← Faites glisser →
            </motion.p>
          </motion.div>

          {/* Info panel */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* City dots */}
            <div className="flex items-center gap-2.5 mb-8">
              {CITIES.map(c => (
                <button
                  key={c.id}
                  onClick={() => selectCity(c)}
                  aria-label={c.label}
                  className={[
                    "transition-all duration-300 rounded-full",
                    c.id === activeCity.id
                      ? "bg-gold w-6 h-2"
                      : "bg-neutral-300 hover:bg-gold/50 w-2 h-2",
                  ].join(" ")}
                />
              ))}
            </div>

            {/* City info */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCity.id}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
              >
                <p className="font-sans text-[12px] tracking-[0.4em] uppercase text-white mb-3">
                  {activeCity.tag}
                </p>
                <h3 className="font-serif text-3xl md:text-4xl text-neutral-800 font-light leading-none mb-3">
                  {activeCity.label}
                </h3>
                <div className="w-10 h-px bg-gold mb-5" />
                <p className="font-sans text-[14px] text-neutral-500 leading-[1.85] mb-6">
                  {activeCity.desc}
                </p>
                <div className="mb-7">
                  <p className="font-sans text-[11px] tracking-[0.3em] uppercase text-neutral-400 mb-3">
                    Actifs clés
                  </p>
                  <ul className="flex flex-col gap-2">
                    {activeCity.assets.map(a => (
                      <li key={a} className="flex items-center gap-2.5">
                        <span className="w-1 h-1 rounded-full bg-gold/60 flex-none" />
                        <span className="font-sans text-[13px] text-neutral-600">{a}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="inline-flex items-center gap-3 border border-gold/25 px-4 py-2.5 mb-8">
                  <span className="font-serif text-2xl text-gold font-light">{activeCity.stat}</span>
                  <span className="font-sans text-[9px] tracking-[0.25em] uppercase text-neutral-400">actifs gérés</span>
                </div>
              </motion.div>
            </AnimatePresence>

            <a
              href="#contact"
              className="inline-flex items-center gap-3 font-sans text-[10px] tracking-[0.3em] uppercase text-gold border border-gold/30 px-7 py-4 hover:bg-gold hover:text-white transition-all duration-300 group"
            >
              Explorer nos implantations
              <ArrowUpRight size={12} strokeWidth={1.5} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
    </section>
  )
}
