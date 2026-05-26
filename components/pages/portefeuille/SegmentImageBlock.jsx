"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

/**
 * SegmentImageBlock — Full-screen image (95vh) with slider & always-visible arrows
 * Props:
 *  images : [{ src, alt }]
 *  badge  : string  — small badge label top-left
 */
export default function SegmentImageBlock({ images = [], badge }) {
  const [idx, setIdx]   = useState(0)
  const total           = images.length
  const timerRef        = useRef(null)

  const go = useCallback((dir) => {
    setIdx((prev) => (prev + dir + total) % total)
  }, [total])

  /* Auto-advance when multiple images */
  useEffect(() => {
    if (total <= 1) return
    timerRef.current = setInterval(() => go(1), 5500)
    return () => clearInterval(timerRef.current)
  }, [total, go])

  return (
    <div className="relative w-full overflow-hidden" style={{ height: "95vh", minHeight: 560 }}>

      {/* ── Slides ──────────────────────────────────────── */}
      {images.map((img, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-700"
          style={{ opacity: i === idx ? 1 : 0, zIndex: i === idx ? 1 : 0 }}
        >
          <Image
            src={img.src}
            alt={img.alt}
            fill
            priority={i === 0}
            className="object-cover object-center"
            sizes="100vw"
          />
          {/* Bottom fade */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[rgba(8,8,8,0.38)]" />
        </div>
      ))}

      {/* ── Badge top-left ───────────────────────────────── */}
      {badge && (
        <div className="absolute top-6 left-6 z-10">
          <span className="inline-flex font-sans text-[8.5px] tracking-[0.18em] uppercase bg-gold text-[#0F1923] px-3 py-1.5 font-bold">
            {badge}
          </span>
        </div>
      )}

      {/* ── Progress bar (bottom edge) ───────────────────── */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/10 z-10">
        <div
          className="h-full bg-gold transition-all duration-700"
          style={{ width: total > 0 ? `${((idx + 1) / total) * 100}%` : "100%" }}
        />
      </div>

      {/* ── Dots (bottom-left, only if multiple images) ──── */}
      {total > 1 && (
        <div className="absolute bottom-5 left-6 z-10 flex gap-1.5 items-center">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              aria-label={`Slide ${i + 1}`}
              className={`rounded-full border-0 cursor-pointer transition-all duration-300 ${
                i === idx
                  ? "w-2 h-2 bg-gold scale-[1.2]"
                  : "w-1.5 h-1.5 bg-white/30"
              }`}
            />
          ))}
        </div>
      )}

      {/* ── Arrows (bottom-right — always visible) ───────── */}
      <div className="absolute bottom-4 right-5 z-10 flex gap-2">
        <button
          onClick={() => go(-1)}
          aria-label="Précédent"
          className="w-10 h-10 rounded-full bg-white/10 border border-white/25 text-white
                     flex items-center justify-center backdrop-blur-sm
                     hover:bg-gold hover:border-gold hover:text-[#0F1923]
                     transition-all duration-300 cursor-pointer"
        >
          <ChevronLeft size={15} strokeWidth={2} />
        </button>
        <button
          onClick={() => go(1)}
          aria-label="Suivant"
          className="w-10 h-10 rounded-full bg-white/10 border border-white/25 text-white
                     flex items-center justify-center backdrop-blur-sm
                     hover:bg-gold hover:border-gold hover:text-[#0F1923]
                     transition-all duration-300 cursor-pointer"
        >
          <ChevronRight size={15} strokeWidth={2} />
        </button>
      </div>
    </div>
  )
}
