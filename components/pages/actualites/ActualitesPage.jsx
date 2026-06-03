"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import Link from "next/link"

/* ─────────────────────────────────────────────────
   ARTICLES DATA
   ───────────────────────────────────────────────── */
const ARTICLES = [
  {
    id: "parc-logistique-casablanca-2027",
    tag: "Développement",
    tagColor: "bg-[rgba(196,165,90,0.1)] text-gold border-gold/30",
    date: "29 mai 2026",
    source: "Magazine Challenge",
    readTime: "3 min",
    featured: true,
    title: "Soft Group renforce son développement avec un nouveau parc logistique de 100 000 m² à Casablanca",
    excerpt: "Soft Group poursuit sa stratégie de développement dans l'immobilier logistique avec le lancement d'un nouveau parc industriel situé au sud de Casablanca, représentant un investissement de 500 millions de dirhams.",
    body: [
      "Soft Group poursuit sa stratégie de développement dans l'immobilier logistique avec le lancement d'un nouveau parc industriel et logistique situé au sud de Casablanca, à proximité de Lissasfa.",
      "Ce projet, représentant un investissement de 500 millions de dirhams, viendra enrichir l'offre nationale en infrastructures logistiques modernes et répondra aux besoins croissants des opérateurs industriels, distributeurs et acteurs du e-commerce.",
      "Prévu pour une mise en exploitation début 2027, le futur parc développera plus de 100 000 m² de surfaces dédiées aux activités logistiques et industrielles. Son emplacement stratégique permettra un accès rapide aux principaux axes autoroutiers, aux zones industrielles de Casablanca ainsi qu'aux infrastructures portuaires et aéroportuaires de la région.",
      "Ce projet s'inscrit dans la continuité des réalisations de Soft Group dans le secteur de l'immobilier logistique, notamment à Casablanca, Kénitra et Tanger. Avec cette nouvelle plateforme, le groupe consolide sa position parmi les acteurs de référence du développement de parcs industriels et logistiques au Maroc.",
      "Au-delà de l'investissement immobilier, cette initiative contribuera au renforcement de l'écosystème logistique national, à la création d'emplois et à l'amélioration de la compétitivité des entreprises opérant au Maroc.",
      "À travers ce nouveau projet, Soft Group confirme sa volonté d'accompagner la croissance économique du Royaume en développant des infrastructures performantes, durables et adaptées aux exigences des chaînes logistiques modernes.",
    ],
    sourceLabel: "Magazine Challenge — « Soft Group investit 500 MDH dans un nouveau parc logistique à Casablanca »",
    sourceHref: "#",
    stats: [
      { value: "100 000 m²", label: "Surfaces logistiques" },
      { value: "500 MDH", label: "Investissement total" },
      { value: "2027", label: "Mise en exploitation" },
      { value: "Lissasfa", label: "Localisation" },
    ],
  },
]

/* ─────────────────────────────────────────────────
   FEATURED ARTICLE CARD
   ───────────────────────────────────────────────── */
function FeaturedArticle({ article, index }) {
  const [expanded, setExpanded] = useState(false)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-6%" })

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      className="bg-white border border-[rgba(196,165,90,0.15)] rounded-[14px] overflow-hidden"
    >
      {/* Article header */}
      <div className="px-[clamp(28px,4vw,56px)] pt-[48px] pb-[36px] border-b border-[rgba(196,165,90,0.08)]">
        {/* Meta row */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <span className={`inline-flex items-center gap-1.5 font-sans text-[9px] tracking-[0.22em] uppercase font-bold px-3 py-[5px] border rounded-full ${article.tagColor}`}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="10" height="10">
              <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"/>
            </svg>
            {article.tag}
          </span>
          <span className="font-sans text-[11px] text-[rgba(15,25,35,0.38)] tracking-[0.12em]">{article.date}</span>
          <span className="w-1 h-1 rounded-full bg-[rgba(196,165,90,0.4)]" />
          <span className="font-sans text-[11px] text-[rgba(15,25,35,0.38)] tracking-[0.12em]">{article.source}</span>
          <span className="w-1 h-1 rounded-full bg-[rgba(196,165,90,0.4)]" />
          <span className="font-sans text-[11px] text-[rgba(15,25,35,0.38)] tracking-[0.12em]">{article.readTime} de lecture</span>
        </div>

        {/* Title */}
        <h2 className="font-serif font-light text-[#0F1923] leading-[1.15] tracking-[-0.015em] mb-5" style={{ fontSize: "clamp(24px,3.2vw,40px)" }}>
          {article.title}
        </h2>

        {/* Excerpt */}
        <p className="font-sans text-[15px] font-light text-[rgba(15,25,35,0.6)] leading-[1.85] max-w-[72ch]">
          {article.excerpt}
        </p>
      </div>

      {/* Stats strip */}
      <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-y sm:divide-y-0 divide-[rgba(196,165,90,0.1)] border-b border-[rgba(196,165,90,0.08)]">
        {article.stats.map((stat) => (
          <div key={stat.label} className="px-6 py-5 flex flex-col gap-1">
            <span className="font-serif text-[clamp(18px,2.5vw,26px)] font-light text-gold leading-none">{stat.value}</span>
            <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-[rgba(15,25,35,0.4)] font-medium">{stat.label}</span>
          </div>
        ))}
      </div>

      {/* Body */}
      <div className="px-[clamp(28px,4vw,56px)] py-[36px]">
        <div className={`overflow-hidden transition-all duration-700 ease-in-out ${expanded ? "max-h-[2000px]" : "max-h-[120px]"}`}>
          <div className="flex flex-col gap-5">
            {article.body.map((para, i) => (
              <p key={i} className="font-sans text-[15px] font-light text-[rgba(15,25,35,0.65)] leading-[1.85]">
                {para}
              </p>
            ))}
          </div>
        </div>

        {/* Gradient fade when collapsed */}
        {!expanded && (
          <div className="h-12 -mt-12 bg-gradient-to-t from-white to-transparent pointer-events-none" />
        )}

        {/* Source + Read more */}
        <div className="flex flex-wrap items-center justify-between gap-4 mt-6 pt-6 border-t border-[rgba(196,165,90,0.08)]">
          <div className="flex items-center gap-2">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" width="14" height="14" className="text-gold shrink-0">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
            </svg>
            <span className="font-sans text-[11px] text-[rgba(15,25,35,0.45)] italic leading-snug max-w-[50ch]">
              Source : {article.sourceLabel}
            </span>
          </div>
          <button
            onClick={() => setExpanded(!expanded)}
            className="inline-flex items-center gap-2 font-sans text-[11px] tracking-[0.18em] uppercase font-bold text-gold border border-gold/40 px-5 py-[9px] hover:bg-gold hover:text-white hover:border-gold transition-all duration-300 rounded-sm"
          >
            {expanded ? "Réduire" : "Lire l'article complet"}
            <svg
              viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
              strokeLinecap="round" strokeLinejoin="round" width="12" height="12"
              className={`transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
            >
              <polyline points="6 9 12 15 18 9"/>
            </svg>
          </button>
        </div>
      </div>
    </motion.article>
  )
}

/* ─────────────────────────────────────────────────
   PAGE
   ───────────────────────────────────────────────── */
export default function ActualitesPage() {
  const heroRef = useRef(null)
  const heroInView = useInView(heroRef, { once: true })

  return (
    <main className="bg-[#F7F9FB] min-h-screen">

      {/* ── Hero band ─────────────────────────────── */}
      <section className="relative bg-[#0F1923] overflow-hidden">
        {/* subtle gold gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[rgba(196,165,90,0.08)] via-transparent to-transparent pointer-events-none" />
        {/* horizontal rule lines */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(196,165,90,0.3)] to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(196,165,90,0.15)] to-transparent" />

        <div ref={heroRef} className="relative z-10 px-[clamp(20px,5vw,80px)] py-[clamp(80px,10vw,120px)]">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-5"
          >
            <span className="block w-[28px] h-px bg-gold/70 shrink-0" />
            <span className="font-sans text-[9.5px] tracking-[0.38em] uppercase text-gold font-bold">
              Soft Group — Actualités
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.85, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif font-light text-white leading-[0.92] tracking-[-0.025em] mb-7"
            style={{ fontSize: "clamp(48px,7vw,96px)" }}
          >
            Dernières
            <br />
            <em className="italic text-gold">Actualités</em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.22 }}
            className="font-sans text-[15px] font-light text-white/50 leading-[1.85] max-w-[52ch]"
          >
            Projets, investissements et développements. Suivez l&apos;actualité de Soft Group
            et son engagement dans la transformation de l&apos;immobilier au Maroc.
          </motion.p>
        </div>
      </section>

      {/* ── Articles list ─────────────────────────── */}
      <section className="px-[clamp(20px,5vw,80px)] py-[clamp(48px,7vw,96px)]">
        <div className="max-w-[1000px] mx-auto flex flex-col gap-8">

          {/* Section label */}
          <div className="flex items-center gap-4">
            <span className="font-sans text-[9px] tracking-[0.38em] uppercase font-bold text-gold">
              {ARTICLES.length} article{ARTICLES.length > 1 ? "s" : ""}
            </span>
            <span className="flex-1 h-px bg-gradient-to-r from-[rgba(196,165,90,0.25)] to-transparent" />
          </div>

          {/* Articles */}
          {ARTICLES.map((article, i) => (
            <FeaturedArticle key={article.id} article={article} index={i} />
          ))}

        </div>
      </section>

      {/* ── CTA band ─────────────────────────────── */}
      <section className="border-t border-[rgba(196,165,90,0.12)] bg-white px-[clamp(20px,5vw,80px)] py-[clamp(48px,6vw,80px)]">
        <div className="max-w-[1000px] mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <p className="font-sans text-[9.5px] tracking-[0.32em] uppercase font-bold text-gold mb-3">
              Projets &amp; Opportunités
            </p>
            <h3 className="font-serif font-light text-[#0F1923] text-[clamp(22px,3vw,34px)] leading-tight">
              Découvrez notre portefeuille
            </h3>
          </div>
          <div className="flex flex-wrap gap-4 shrink-0">
            <Link
              href="/portefeuille"
              className="inline-flex items-center gap-2 font-sans text-[11px] tracking-[0.18em] uppercase font-bold bg-gold text-white px-7 py-[12px] hover:bg-[#b8933a] transition-all duration-300"
            >
              Notre portefeuille
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="13" height="13">
                <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
              </svg>
            </Link>
            <Link
              href="/build-to-suit"
              className="inline-flex items-center gap-2 font-sans text-[11px] tracking-[0.18em] uppercase font-bold border border-[rgba(196,165,90,0.4)] text-gold px-7 py-[12px] hover:bg-gold hover:text-white hover:border-gold transition-all duration-300"
            >
              Build-to-Suit
            </Link>
          </div>
        </div>
      </section>

    </main>
  )
}
