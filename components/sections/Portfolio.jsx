"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import Image from "next/image"

/**
 * Portfolio — Premium Dark Grid
 */

const SEGMENTS = [
  {
    id: "logistique",
    image:
      "https://res.cloudinary.com/dofyrwzop/image/upload/q_auto/f_auto/v1778504240/logistique_et_industriel_qo22sf.png",
    anchorId: "logistique-industriel",
    label: "01",
    title: "Logistique & Industriel",
    description:
      "Entrepôts modernes, plateformes logistiques et parcs industriels conformes aux normes internationales.",
    locations: ["Casablanca", "Kénitra", "Tanger"],
    span: "lg:col-span-7",
  },
  {
    id: "bureaux",
    image:
      "https://res.cloudinary.com/dofyrwzop/image/upload/q_auto/f_auto/v1778504245/bureaux_et_centre_d_affaires_yoldrb.png",
    anchorId: "bureaux-centres-d-affaires",
    label: "02",
    title: "Bureaux & Centres d'Affaires",
    description:
      "Espaces de bureaux aménagés, sièges sociaux et villas à usage professionnel au cœur des quartiers d'affaires.",
    locations: ["Casablanca"],
    span: "lg:col-span-5",
  },
  {
    id: "residentiel",
    image:
      "https://res.cloudinary.com/dofyrwzop/image/upload/q_auto/f_auto/v1778504251/residentiel_de_prestige_wr3clq.png",
    anchorId: "residentiel-de-prestige",
    label: "03",
    title: "Résidentiel de Prestige",
    description:
      "Résidences de villas et condominiums haut de gamme dans les quartiers les plus exclusifs.",
    locations: ["Casablanca", "Marrakech"],
    span: "lg:col-span-4",
  },
  {
    id: "retail",
    image:
      "https://res.cloudinary.com/dofyrwzop/image/upload/q_auto/f_auto/v1778504226/retail_et_commerce_fuezst.png",
    anchorId: "retail-commerce",
    label: "04",
    title: "Retail & Commerce",
    description:
      "Espaces commerciaux, showrooms et centres commerciaux stratégiquement implantés.",
    locations: ["Casablanca"],
    span: "lg:col-span-4",
  },
  {
    id: "terrains",
    image:
      "https://res.cloudinary.com/dofyrwzop/image/upload/q_auto/f_auto/v1778504256/terrain_et_developpement_buqi7d.png",
    anchorId: "terrains-developpements",
    label: "05",
    title: "Terrains & Développements",
    description:
      "Lots de terrains viabilisés et réserves foncières à fort potentiel de développement.",
    locations: ["Maroc"],
    span: "lg:col-span-4",
  },
]

export default function Portfolio() {
  const ref = useRef(null)

  const inView = useInView(ref, {
    once: true,
    margin: "-8% 0px",
  })

  return (
    <section
      ref={ref}
      id="portefeuille"
      className="bg-black py-24 md:py-36 px-8 md:px-12 lg:px-20"
    >
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-14"
        >
          <p className="text-[9px] tracking-[0.4em] uppercase text-yellow-500 mb-4">
            Nos Segments
          </p>

          <h2 className="text-3xl md:text-5xl text-white font-light max-w-2xl leading-[1.1]">
            Un Portefeuille Diversifié,
            <br />
            <span className="italic">
              Des Actifs d&apos;Exception
            </span>
          </h2>

          <p className="text-sm text-white/50 mt-5 max-w-xl leading-[1.85]">
            Cinq segments d&apos;activité pour répondre aux exigences les plus
            pointues du marché marocain.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          {SEGMENTS.map((seg, i) => (
            <motion.div
              key={seg.id}
              id={seg.anchorId}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.7,
                delay: i * 0.1,
              }}
              className={`group relative overflow-hidden rounded-2xl cursor-pointer h-[340px] lg:h-[400px] ${seg.span}`}
            >
              {/* IMAGE */}
              <Image
                src={seg.image}
                alt={seg.title}
                fill
                priority={i < 2}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* DARK OVERLAY */}
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/45 transition-colors duration-500" />

              {/* GRADIENT */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

              {/* CONTENT */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                {/* NUMBER */}
                <span className="text-[9px] tracking-[0.3em] uppercase text-yellow-500/70 mb-2">
                  {seg.label}
                </span>

                {/* TITLE */}
                <h3 className="text-2xl md:text-3xl text-white font-light leading-tight mb-3 transition-colors duration-300 group-hover:text-yellow-500">
                  {seg.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-xs text-white/60 leading-relaxed mb-4 max-w-xs opacity-0 translate-y-2 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                  {seg.description}
                </p>

                {/* FOOTER */}
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {seg.locations.map((loc) => (
                      <span
                        key={loc}
                        className="text-[8px] tracking-[0.2em] uppercase text-white/50 border border-white/10 px-2.5 py-1"
                      >
                        {loc}
                      </span>
                    ))}
                  </div>

                  <ArrowUpRight
                    size={18}
                    strokeWidth={1.5}
                    className="text-yellow-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex-none"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7 }}
          className="mt-10 text-right"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-3 text-[10px] tracking-[0.25em] uppercase text-white/50 hover:text-yellow-500 transition-colors duration-300 group"
          >
            Voir tous nos actifs

            <span className="block h-px w-8 bg-current transition-all duration-300 group-hover:w-14" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}