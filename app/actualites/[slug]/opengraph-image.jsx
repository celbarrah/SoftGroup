import { ImageResponse } from "next/og"
import { getArticleBySlug, ARTICLES } from "@/lib/articles"

export const size        = { width: 1200, height: 630 }
export const contentType = "image/png"

export default async function OgImage({ params }) {
  const { slug } = await params
  const article  = getArticleBySlug(slug)

  const title   = article?.title   || "Article"
  const tag     = article?.tag     || "Actualité"
  const excerpt = article?.excerpt
    ? article.excerpt.slice(0, 100) + (article.excerpt.length > 100 ? "…" : "")
    : ""

  return new ImageResponse(
    <div style={{ background: "#0A1018", width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "56px 70px", position: "relative" }}>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, background: "linear-gradient(90deg, #C4A55A 0%, #e8c97a 50%, #C4A55A 100%)" }} />

      {/* Logo */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <span style={{ color: "#fff", fontSize: 20, fontWeight: 700, letterSpacing: "0.06em" }}>SOFT</span>
          <span style={{ color: "#fff", fontSize: 20, fontWeight: 300, letterSpacing: "0.06em" }}>GROUP</span>
          <div style={{ width: 1, height: 18, background: "rgba(196,165,90,0.5)", margin: "0 12px" }} />
          <span style={{ color: "rgba(255,255,255,0.4)", fontSize: 10, letterSpacing: "0.3em", textTransform: "uppercase" }}>Immobilier</span>
        </div>
        <span style={{ color: "rgba(196,165,90,0.85)", fontSize: 10, letterSpacing: "0.28em", textTransform: "uppercase", fontWeight: 700, background: "rgba(196,165,90,0.1)", border: "1px solid rgba(196,165,90,0.3)", padding: "5px 10px" }}>
          {tag}
        </span>
      </div>

      {/* Title */}
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <div style={{ width: 40, height: 2, background: "#C4A55A" }} />
        <div style={{ color: "#fff", fontSize: 44, fontWeight: 300, lineHeight: 1.1, letterSpacing: "-0.02em", maxWidth: 900 }}>
          {title}
        </div>
        {excerpt && (
          <div style={{ color: "rgba(255,255,255,0.5)", fontSize: 16, lineHeight: 1.5, maxWidth: 750 }}>
            {excerpt}
          </div>
        )}
      </div>

      {/* Footer */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ color: "rgba(196,165,90,0.6)", fontSize: 12, letterSpacing: "0.22em", textTransform: "uppercase" }}>
          Actualités Softgroup Immobilier
        </span>
        <span style={{ color: "rgba(255,255,255,0.25)", fontSize: 13, letterSpacing: "0.18em" }}>softgroup.ma</span>
      </div>
    </div>,
    { width: 1200, height: 630 }
  )
}
