"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import Image from "next/image"

export default function SegmentSlider({ slides, badge }) {
  const [current, setCurrent] = useState(0)
  const timerRef = useRef(null)
  const n = slides.length

  const goTo = useCallback((i) => {
    setCurrent(((i % n) + n) % n)
  }, [n])

  const resetTimer = useCallback(() => {
    clearInterval(timerRef.current)
    timerRef.current = setInterval(() => setCurrent(c => (c + 1) % n), 5000)
  }, [n])

  useEffect(() => {
    resetTimer()
    return () => clearInterval(timerRef.current)
  }, [resetTimer])

  const prev = () => { goTo(current - 1); resetTimer() }
  const next = () => { goTo(current + 1); resetTimer() }

  return (
    <div
      className="relative overflow-hidden w-full h-[50vh] md:h-[95vh] min-h-100 md:min-h-150 "
      // style={{ height: "95vh", minHeight: 600 }}
    >
      {/* Track */}
      <div
        className="flex h-full"
        style={{
          transform: `translateX(-${current * 100}%)`,
          transition: "transform 0.75s cubic-bezier(0.76,0,0.24,1)",
        }}
      >
        {slides.map((src, i) => (
          <div key={i} className="relative flex-shrink-0 w-full h-full">
            <Image
              src={src}
              alt=""
              fill
              className="object-cover object-center"
              sizes="100vw"
              priority={i === 0}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[rgba(8,8,8,0.4)]" />
          </div>
        ))}
      </div>

      {/* Badge top-left */}
      {badge && (
        <div className="absolute top-[26px] left-[26px] z-10">
          <span className="inline-flex font-sans text-[8px] tracking-[0.18em] uppercase bg-gold text-noir px-3 py-[5px] font-bold">
            {badge}
          </span>
        </div>
      )}

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/10 z-10">
        <div
          className="h-full bg-gold"
          style={{
            width: `${((current + 1) / n) * 100}%`,
            transition: "width 0.75s cubic-bezier(0.76,0,0.24,1)",
          }}
        />
      </div>

      {/* Dots */}
      <div className="absolute bottom-[22px] left-[24px] flex gap-[6px] z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => { goTo(i); resetTimer() }}
            className={[
              "w-[5px] h-[5px] rounded-full border-none cursor-pointer transition-all duration-300",
              i === current ? "bg-gold scale-[1.4]" : "bg-white/30",
            ].join(" ")}
          />
        ))}
      </div>

      {/* Arrows */}
      <div className="absolute bottom-[18px] right-[20px] flex gap-[6px] z-10">
        <button
          onClick={prev}
          className="w-[38px] h-[38px] rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-gold hover:border-gold hover:text-noir backdrop-blur-[8px]"
        >
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
        <button
          onClick={next}
          className="w-[38px] h-[38px] rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-gold hover:border-gold hover:text-noir backdrop-blur-[8px]"
        >
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>
    </div>
  )
}
