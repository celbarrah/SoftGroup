import { SITE } from "@/lib/seo"
import { ARTICLES } from "@/lib/articles"

/* ── French month → number ──────────────────────── */
const FR_MONTHS = {
  janvier: "01", février: "02", mars: "03", avril: "04",
  mai: "05", juin: "06", juillet: "07", août: "08",
  septembre: "09", octobre: "10", novembre: "11", décembre: "12",
}

function parseArticleDate(dateStr) {
  if (!dateStr) return new Date()
  const parts = dateStr.toLowerCase().split(" ")
  if (parts.length === 3) {
    const month = FR_MONTHS[parts[1]] || "01"
    const iso   = `${parts[2]}-${month}-${parts[0].padStart(2, "0")}T12:00:00+01:00`
    const d     = new Date(iso)
    if (!isNaN(d.getTime())) return d
  }
  return new Date()
}

function escapeXml(str = "") {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;")
}

/* ── RSS feed ───────────────────────────────────── */
export async function GET() {
  const items = ARTICLES.map((a) => {
    const pubDate = parseArticleDate(a.date).toUTCString()
    const link    = `${SITE.url}/actualites/${a.slug}`

    return `
  <item>
    <title><![CDATA[${a.title}]]></title>
    <link>${escapeXml(link)}</link>
    <guid isPermaLink="true">${escapeXml(link)}</guid>
    <description><![CDATA[${a.excerpt}]]></description>
    <pubDate>${pubDate}</pubDate>
    <category><![CDATA[${a.tag}]]></category>
    ${a.image ? `<enclosure url="${escapeXml(a.image)}" type="image/jpeg" length="0"/>` : ""}
    <source url="${escapeXml(SITE.url)}/feed.xml">${escapeXml(SITE.name)}</source>
  </item>`
  }).join("\n")

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"
  xmlns:atom="http://www.w3.org/2005/Atom"
  xmlns:content="http://purl.org/rss/1.0/modules/content/"
  xmlns:dc="http://purl.org/dc/elements/1.1/">

  <channel>
    <title>${escapeXml(SITE.name)} — Actualités</title>
    <link>${escapeXml(SITE.url)}</link>
    <atom:link href="${escapeXml(SITE.url)}/feed.xml" rel="self" type="application/rss+xml"/>
    <description>Les dernières actualités, projets et insights de Softgroup Immobilier — acteur de référence de l'immobilier logistique, tertiaire et résidentiel au Maroc.</description>
    <language>fr</language>
    <copyright>© ${new Date().getFullYear()} ${escapeXml(SITE.name)}. Tous droits réservés.</copyright>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <managingEditor>${escapeXml(SITE.email)} (${escapeXml(SITE.name)})</managingEditor>
    <webMaster>${escapeXml(SITE.email)} (${escapeXml(SITE.name)})</webMaster>
    <ttl>1440</ttl>
    <image>
      <url>${escapeXml(SITE.logo)}</url>
      <title>${escapeXml(SITE.name)}</title>
      <link>${escapeXml(SITE.url)}</link>
    </image>
${items}
  </channel>
</rss>`

  return new Response(xml, {
    headers: {
      "Content-Type":  "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
    },
  })
}
