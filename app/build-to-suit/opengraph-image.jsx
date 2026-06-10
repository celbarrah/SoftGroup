import { ImageResponse } from "next/og"

export const runtime     = "edge"
export const alt         = "Build-to-Suit Maroc — Clé en main | Softgroup Immobilier"
export const size        = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OgImage() {
  return new ImageResponse(
    <div style={{ background: "#0A1018", width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "56px 70px", position: "relative" }}>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, background: "linear-gradient(90deg, #C4A55A 0%, #e8c97a 50%, #C4A55A 100%)" }} />
      <div style={{ display: "flex", alignItems: "center" }}>
        <span style={{ color: "#fff", fontSize: 22, fontWeight: 700, letterSpacing: "0.06em" }}>SOFT</span>
        <span style={{ color: "#fff", fontSize: 22, fontWeight: 300, letterSpacing: "0.06em" }}>GROUP</span>
        <div style={{ width: 1, height: 20, background: "rgba(196,165,90,0.5)", margin: "0 14px" }} />
        <span style={{ color: "rgba(255,255,255,0.4)", fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase" }}>Immobilier</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        <span style={{ color: "#C4A55A", fontSize: 12, letterSpacing: "0.32em", textTransform: "uppercase", fontWeight: 700 }}>Build-to-Suit</span>
        <div style={{ width: 40, height: 2, background: "#C4A55A" }} />
        <div style={{ color: "#fff", fontSize: 52, fontWeight: 300, lineHeight: 1.1, letterSpacing: "-0.02em" }}>Votre bâtiment sur mesure,</div>
        <div style={{ color: "#C4A55A", fontSize: 32, fontWeight: 300, fontStyle: "italic" }}>livré clé en main en moins de 12 mois</div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ display: "flex", gap: 10 }}>
          {["Logistique", "Industriel", "Tertiaire", "Clé en main"].map(s => (
            <span key={s} style={{ color: "rgba(196,165,90,0.7)", fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", border: "1px solid rgba(196,165,90,0.3)", padding: "5px 10px" }}>{s}</span>
          ))}
        </div>
        <span style={{ color: "rgba(255,255,255,0.25)", fontSize: 13, letterSpacing: "0.18em" }}>softgroup.ma</span>
      </div>
    </div>,
    { width: 1200, height: 630 }
  )
}
