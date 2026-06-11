import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { getArticleBySlug, ARTICLES } from "@/lib/articles"
import FooterCTA from "@/components/sections/FooterCTA"
import JsonLd from "@/components/seo/JsonLd"
import { buildMetadata, orgSchema, breadcrumbSchema, webPageSchema, articleSchema, SITE } from "@/lib/seo"

/* ── Static params ──────────────────────────────── */
export function generateStaticParams() {
  return ARTICLES.map(a => ({ slug: a.slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const article  = getArticleBySlug(slug)
  if (!article) return {}

  return buildMetadata({
    title:       article.title,
    description: article.excerpt,
    path:        `/actualites/${slug}`,
    type:        "article",
    keywords:    [article.tag, "immobilier maroc", "softgroup immobilier", "actualités immobilier"],
    article: {
      publishedTime: article.date,
      tags:          [article.tag],
    },
  })
}

/* ── Page ───────────────────────────────────────── */
export default async function ArticlePage({ params }) {
  const { slug } = await params
  const article = getArticleBySlug(slug)
  if (!article) notFound()

  const path = `/actualites/${article.slug}`

  return (
    <main className="bg-gold min-h-screen">
      <JsonLd data={[
        orgSchema(),
        webPageSchema({ title: article.title, description: article.excerpt, path }),
        breadcrumbSchema([
          { name: "Accueil",    path: "/" },
          { name: "Actualités", path: "/actualites" },
          { name: article.title, path },
        ]),
        articleSchema({ article, path }),
      ]} />

      {/* ── Cinematic hero image ──────────────────── */}
      <section className="relative w-full overflow-hidden" style={{ height: "clamp(500px,70vh,800px)" }}>

        {article.image && (
          <Image
            src={article.image}
            alt={article.title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        )}

        {/* Overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: [
              "linear-gradient(to top, rgba(8,13,18,1) 0%, rgba(8,13,18,0.72) 36%, rgba(8,13,18,0.22) 68%, rgba(8,13,18,0.12) 100%)",
              "linear-gradient(to bottom, rgba(8,13,18,0.60) 0%, transparent 20%)",
            ].join(", "),
          }}
        />

        {/* Back nav */}
        <div className="absolute top-20 md:top-15 2xl:top-20 left-0 right-0 z-10 px-[clamp(20px,5vw,80px)] pt-8">
          <Link
            href="/actualites"
            className="inline-flex items-center gap-2 font-sans text-[10px] tracking-[0.28em] uppercase text-white/50 hover:text-gold transition-colors duration-200"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
              strokeLinecap="round" strokeLinejoin="round" width="12" height="12">
              <polyline points="15 18 9 12 15 6"/>
            </svg>
            Actualités
          </Link>
        </div>

        {/* Title — anchored bottom */}
        <div className="absolute bottom-0 left-0 right-0 z-10 px-[clamp(20px,5vw,80px)] pb-[clamp(32px,5vw,60px)]">
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className="font-sans text-[9px] tracking-[0.28em] uppercase font-bold px-3 py-[5px] bg-[rgba(196,165,90,0.22)] border border-gold/35 text-gold">
              {article.tag}
            </span>
            <span className="font-sans text-[10px] text-white/45 tracking-[0.12em]">{article.date}</span>
            {article.source && (
              <>
                <span className="w-[3px] h-[3px] rounded-full bg-gold/35" />
                <span className="font-sans text-[10px] text-white/45 tracking-[0.12em]">{article.source}</span>
              </>
            )}
            {/* {article.readTime && (
              <>
                <span className="w-[3px] h-[3px] rounded-full bg-gold/35" />
                <span className="font-sans text-[10px] text-white/45 tracking-[0.12em]">{article.readTime} de lecture</span>
              </>
            )} */}
          </div>

          <h1
            className="font-serif font-light text-white leading-[1.08] tracking-[-0.02em] max-w-[40ch] md:max-w-[22ch]"
            style={{ fontSize: "clamp(26px,4vw,52px)" }}
          >
            {article.title}
          </h1>
          <div className="mt-5 w-10 h-px bg-gold/55" />
        </div>
      </section>

      {/* ── Stats strip ───────────────────────────── */}
      {article.stats && article.stats.length > 0 && (
        <div className="bg-[#C4A55A] px-[clamp(20px,5vw,80px)]" >
          <div
            className="max-w-[1400px] grid-cols-2 md:grid-cols-4 mx-auto grid divide-x divide-[rgba(0,0,0,0.12)]"
          >
            {article.stats.map((stat) => (
              <div key={stat.label} className="px-2 md:px-6 py-7 flex flex-col gap-1.5">
                <span
                  className="font-serif font-extrabold text-white leading-none"
                  style={{ fontSize: "clamp(18px,2.2vw,28px)" }}
                >
                  {stat.value}
                </span>
                <span className="font-sans text-[9px] tracking-[0.22em] uppercase text-[rgba(8,13,18,0.55)] font-medium">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ── Article body — cream background ──────── */}
      <div className="bg-[#F5F0E8] px-[clamp(20px,5vw,80px)] pb-30 py-[clamp(48px,7vw,88px)]"
        style={{
  WebkitClipPath: "polygon(0 0, 100% 0, 100% 95%, 0 100%)",
  clipPath: "polygon(0 0, 100% 0, 100% 95%, 0 100%)"
}}
        >
        <div className="max-w-[1200px] mx-auto">

          {/* Lead — italic serif */}
          <p
            className="font-serif italic text-[#080D12]/70 leading-[1.75] mb-10 pl-5 border-l-2 border-[#C4A55A]"
            style={{ fontSize: "clamp(16px,1.8vw,20px)" }}
          >
            {article.excerpt}
          </p>

          {/* Separator */}
          <div className="flex items-center gap-3 mb-10">
            <div className="flex-1 h-px bg-[rgba(196,165,90,0.35)]" />
            <div className="w-1 h-1 rounded-full bg-[#C4A55A]/50" />
            <div className="w-1 h-1 rounded-full bg-[#C4A55A]/25" />
          </div>

          {/* Body paragraphs */}
          <div className="flex flex-col gap-6 mb-14">
            {article.body.map((para, i) => (
              <p
                key={i}
                className="font-sans font-light text-[#1A1A1A] leading-[1.95]"
                style={{ fontSize: "clamp(14px,1.1vw,15.5px)" }}
              >
                {para}
              </p>
            ))}
          </div>

          {/* Source */}
          {article.sourceLabel && (
            <div className="flex items-start gap-4 border-t border-[rgba(196,165,90,0.25)] pt-8">
              <div className="shrink-0 w-8 h-8 rounded-full bg-[rgba(196,165,90,0.12)] border border-[#C4A55A]/25 flex items-center justify-center mt-0.5">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
                  strokeLinecap="round" strokeLinejoin="round" width="13" height="13" className="text-[#C4A55A]">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>
              <div>
                <p className="font-sans text-[9px] tracking-[0.25em] uppercase text-[#C4A55A] mb-1.5">Source</p>
                {article.sourceHref && article.sourceHref !== "#" ? (
                  <a
                    href={article.sourceHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-[12px] text-[#1A1A1A]/50 italic hover:text-[#C4A55A] transition-colors duration-200"
                  >
                    {article.sourceLabel}
                  </a>
                ) : (
                  <p className="font-sans text-[12px] text-[#1A1A1A]/50 italic">{article.sourceLabel}</p>
                )}
              </div>
            </div>
          )}

        </div>
      </div>

      {/* ── Footer CTA ────────────────────────────── */}
      <FooterCTA />

    </main>
  )
}
