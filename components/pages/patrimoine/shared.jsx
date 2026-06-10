/* ─── Shared SVG / helpers used by all panels ─────────────── */

export function HFCorner({ className }) {
  return (
    <svg className={`ad-hf-corner ${className}`} viewBox="0 0 120 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 120 L0 0 L120 0" stroke="currentColor" strokeWidth="2" fill="none"/>
      <path d="M14 120 L14 14 L120 14" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.7"/>
      <path d="M0 50 L50 50 L50 0" stroke="currentColor" strokeWidth="1.2" fill="none"/>
      <path d="M0 65 L35 65 L35 35 L65 35 L65 0" stroke="currentColor" strokeWidth="0.6" fill="none" opacity="0.5"/>
      <rect x="6" y="6" width="3" height="3" fill="currentColor"/>
    </svg>
  )
}

export function PatrimoineSeal({ size = "sm" }) {
  return (
    <div className={`ad-seal-wrap ad-seal-${size}`}>
      <svg className="ad-seal" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" aria-label="Patrimoine Classé">
        <g className="ad-seal-rays">
          {Array.from({ length: 24 }, (_, i) => (
            <line key={i} x1="100" y1="3" x2="100" y2={i % 2 === 0 ? "15" : "12"} transform={`rotate(${i * 15} 100 100)`} />
          ))}
        </g>
        <circle className="ad-seal-outer" cx="100" cy="100" r="78"/>
        <circle className="ad-seal-inner" cx="100" cy="100" r="71"/>
        <text x="100" y="76" textAnchor="middle" className="ad-seal-top">PATRIMOINE</text>
        <g className="ad-seal-dots">
          <circle cx="86" cy="89" r="1.4"/><circle cx="100" cy="89" r="1.4"/><circle cx="114" cy="89" r="1.4"/>
        </g>
        <text x="100" y="124" textAnchor="middle" className="ad-seal-main">CLASSÉ</text>
        <line className="ad-seal-rule" x1="56" y1="136" x2="144" y2="136"/>
        <text x="100" y="150" textAnchor="middle" className="ad-seal-bottom">VILLE DE CASABLANCA</text>
      </svg>
    </div>
  )
}

export function BrandMark() {
  return (
    <svg viewBox="0 0 40 40" fill="none" className="ad-mark">
      <circle cx="20" cy="20" r="19" stroke="#7d5215" strokeWidth="1"/>
      <path d="M20 4 L36 20 L20 36 L4 20 Z" stroke="#7d5215" strokeWidth="1" fill="none"/>
      <path d="M20 12 L28 20 L20 28 L12 20 Z" fill="#7d5215"/>
    </svg>
  )
}

export function Arrow() {
  return (
    <svg width="20" height="10" viewBox="0 0 20 10" fill="none">
      <path d="M0 5 L18 5 M14 1 L18 5 L14 9" stroke="currentColor" strokeWidth="1.4"/>
    </svg>
  )
}

export function ScrollCue({ label = "Continuer" }) {
  return (
    <div className="ad-cue relative top-2">
      <span style={{ textTransform: "uppercase", letterSpacing: ".42em" }}>{label}</span>
      <div className="ad-cue-line" />
    </div>
  )
}

export function Panel({ id, children, className = "" }) {
  return (
    <section className={`ad-panel ${className}`} id={id}>
      {children}
    </section>
  )
}

export const DecoOrn = {
  d1: (<svg viewBox="0 0 40 40" fill="none"><path d="M20 2 L38 20 L20 38 L2 20 Z" stroke="currentColor" strokeWidth="1"/><path d="M20 11 L29 20 L20 29 L11 20 Z" stroke="currentColor" strokeWidth="0.8"/><circle cx="20" cy="20" r="1.5" fill="currentColor"/></svg>),
  d2: (<svg viewBox="0 0 60 36" fill="none"><path d="M2 32 L30 4 L58 32" stroke="currentColor" strokeWidth="1.2"/><path d="M10 32 L30 12 L50 32" stroke="currentColor" strokeWidth="0.9"/><path d="M18 32 L30 20 L42 32" stroke="currentColor" strokeWidth="0.6"/></svg>),
  d3: (<svg viewBox="0 0 70 70" fill="none"><circle cx="35" cy="35" r="15" stroke="currentColor" strokeWidth="0.9"/><circle cx="35" cy="35" r="9" stroke="currentColor" strokeWidth="0.6"/><g stroke="currentColor" strokeWidth="0.9"><line x1="35" y1="2" x2="35" y2="14"/><line x1="35" y1="56" x2="35" y2="68"/><line x1="2" y1="35" x2="14" y2="35"/><line x1="56" y1="35" x2="68" y2="35"/><line x1="12" y1="12" x2="20" y2="20"/><line x1="58" y1="12" x2="50" y2="20"/><line x1="12" y1="58" x2="20" y2="50"/><line x1="58" y1="58" x2="50" y2="50"/></g></svg>),
  d4: (<svg viewBox="0 0 40 40" fill="none"><polygon points="12,2 28,2 38,12 38,28 28,38 12,38 2,28 2,12" stroke="currentColor" strokeWidth="1"/><polygon points="16,8 24,8 32,16 32,24 24,32 16,32 8,24 8,16" stroke="currentColor" strokeWidth="0.6"/><circle cx="20" cy="20" r="2" fill="currentColor"/></svg>),
  d5: (<svg viewBox="0 0 40 40" fill="none"><path d="M20 2 L38 20 L20 38 L2 20 Z" stroke="currentColor" strokeWidth="1"/><path d="M20 11 L29 20 L20 29 L11 20 Z" stroke="currentColor" strokeWidth="0.8"/><circle cx="20" cy="20" r="1.5" fill="currentColor"/></svg>),
}
