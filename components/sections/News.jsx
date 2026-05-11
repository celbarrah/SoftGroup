"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import Image from "next/image"

/**
 * News — Dernières Actualités
 */

const ARTICLES = [
  {
    id: 1,
    image:
      "https://res.cloudinary.com/dofyrwzop/image/upload/q_auto/f_auto/v1778504244/actualite_1_a0ekuw.png",
    category: "Développement",
    date: "Mai 2026",
    title:
      "SOFTGROUP lance une nouvelle zone logistique à Kénitra",
    excerpt:
      "Dans le cadre de son expansion stratégique, SOFTGROUP Immobilier annonce le lancement d'un complexe logistique de 45 000 m² à Kénitra, répondant à la demande croissante des multinationales du secteur automobile et industriel implantées dans la région.",
    featured: true,
  },
  {
    id: 2,
    image:
      "https://res.cloudinary.com/dofyrwzop/image/upload/q_auto/f_auto/v1778504217/actualite_2_al4wev.png",
    category: "Marché",
    date: "Avril 2026",
    title:
      "Immobilier d'entreprise au Maroc : les tendances clés de 2026",
    excerpt: null,
    featured: false,
  },
  {
    id: 3,
    image:
      "https://res.cloudinary.com/dofyrwzop/image/upload/q_auto/f_auto/v1778504254/actualite_3_pgjfxe.png",
    category: "Résidentiel",
    date: "Mars 2026",
    title:
      "Nouvelle résidence de prestige à Casablanca : ouverture prévue T4 2026",
    excerpt: null,
    featured: false,
  },
]

function ArticleImage({ article, featured }) {
  return (
    <div
      className={[
        "relative overflow-hidden rounded-2xl",
        featured
          ? "h-[340px] md:h-[420px]"
          : "h-[160px] md:h-[190px]",
      ].join(" ")}
    >
      {/* IMAGE */}
      <Image
        src={article.image}
        alt={article.title}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className={[
          "transition-transform duration-700 group-hover:scale-105",
          featured ? "object-cover object-top" : "object-cover"
        ].join(" ")}
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/25 group-hover:bg-black/40 transition-colors duration-500" />

      {/* GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
    </div>
  )
}

export default function News() {
  const ref = useRef(null)

  const inView = useInView(ref, {
    once: true,
    margin: "-8% 0px",
  })

  const featured = ARTICLES.find((a) => a.featured)

  const secondaries = ARTICLES.filter((a) => !a.featured)

  return (
    <section
      ref={ref}
      id="actualites"
      className="bg-black py-24 md:py-32 px-8 md:px-12 lg:px-20"
    >
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <div>
            <p className="text-[9px] tracking-[0.4em] uppercase text-yellow-500 mb-4">
              Actualités
            </p>

            <h2 className="text-4xl md:text-5xl text-white font-light leading-[1.1]">
              Dernières
              <br />
              <span className="italic">Actualités</span>
            </h2>
          </div>

          {/* DESKTOP CTA */}
          <motion.a
            href="#"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="hidden md:inline-flex items-center gap-3 text-[10px] tracking-[0.25em] uppercase text-white/40 hover:text-yellow-500 transition-colors duration-300 group"
          >
            Voir toutes les actualités

            <span className="block h-px w-8 bg-current transition-all duration-300 group-hover:w-14" />
          </motion.a>
        </motion.div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* FEATURED */}
          {featured && (
            <motion.article
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.75 }}
              className="md:col-span-7 group cursor-pointer"
            >
              <div className="overflow-hidden mb-5 rounded-2xl">
                <ArticleImage
                  article={featured}
                  featured={featured.featured}
                />
              </div>

              <div className="flex items-center gap-3 mb-3">
                <span className="text-[8px] tracking-[0.25em] uppercase text-yellow-500 bg-yellow-500/10 px-2.5 py-1">
                  {featured.category}
                </span>

                <span className="text-[10px] text-white/40">
                  {featured.date}
                </span>
              </div>

              <h3 className="text-2xl md:text-3xl text-white font-light leading-[1.2] mb-4 transition-colors duration-300 group-hover:text-yellow-500">
                {featured.title}
              </h3>

              <p className="text-sm text-white/55 leading-[1.85] mb-6 max-w-[520px]">
                {featured.excerpt}
              </p>

              <a
                href="#"
                className="inline-flex items-center gap-2 text-[10px] tracking-[0.2em] uppercase text-white/40 transition-colors duration-300 group-hover:text-yellow-500"
              >
                Lire l&apos;article

                <ArrowUpRight
                  size={13}
                  strokeWidth={1.5}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </motion.article>
          )}

          {/* SECONDARY ARTICLES */}
          <div className="md:col-span-5 flex flex-col gap-6">
            {secondaries.map((article, i) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 28 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.7,
                  delay: 0.15 + i * 0.15,
                }}
                className="group cursor-pointer flex flex-col border-b border-white/10 pb-6 last:border-0 last:pb-0"
              >
                <div className="overflow-hidden mb-4 rounded-2xl">
                  <ArticleImage
                    article={article}
                    featured={false}
                  />
                </div>

                <div className="flex items-center gap-3 mb-2.5">
                  <span className="text-[8px] tracking-[0.25em] uppercase text-yellow-500 bg-yellow-500/10 px-2.5 py-1">
                    {article.category}
                  </span>

                  <span className="text-[10px] text-white/40">
                    {article.date}
                  </span>
                </div>

                <h3 className="text-xl text-white font-light leading-snug mb-4 transition-colors duration-300 group-hover:text-yellow-500 flex-1">
                  {article.title}
                </h3>

                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-[10px] tracking-[0.2em] uppercase text-white/40 transition-colors duration-300 group-hover:text-yellow-500 w-fit"
                >
                  Lire l&apos;article

                  <ArrowUpRight
                    size={13}
                    strokeWidth={1.5}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              </motion.article>
            ))}
          </div>
        </div>

        {/* MOBILE CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-10 md:hidden"
        >
          <a
            href="#"
            className="inline-flex items-center gap-3 text-[10px] tracking-[0.25em] uppercase text-white/40 hover:text-yellow-500 transition-colors duration-300 group"
          >
            Voir toutes les actualités

            <span className="block h-px w-8 bg-current transition-all duration-300 group-hover:w-14" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}