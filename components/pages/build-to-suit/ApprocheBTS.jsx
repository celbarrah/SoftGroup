"use client"
import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"

export default function ApprocheBTS() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-8%" })

  return (
    <section ref={ref} className="bg-white py-[100px] px-[clamp(20px,5vw,80px)]">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[80px] items-center">

          {/* Image — left */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="group relative rounded-[20px] overflow-hidden aspect-[4/3]
                       shadow-[0_20px_60px_rgba(8,9,10,.10)]"
          >
            <Image
              src="https://res.cloudinary.com/dofyrwzop/image/upload/q_auto/f_auto/v1780324930/Ma%C3%AEtrise_int%C3%A9grale_onjswy.png"
              alt="Construction Softgroup"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />

            {/* Badge overlay */}
            <div className="absolute bottom-6 left-6 bg-white/50 backdrop-blur-[12px]
                            rounded-[14px] px-[22px] py-4
                            shadow-[0_8px_32px_rgba(8,9,10,.14)]
                            border border-dark/[0.06]">
              <div className="font-serif text-[28px] font-light text-black leading-none">
                A → Z
              </div>
              <div className="font-sans text-[13px] text-neutral-900 mt-1 tracking-[0.04em]">
                Maîtrise intégrale
              </div>
            </div>
          </motion.div>

          {/* Text — right */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.85, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="block font-sans text-[17px] tracking-[0.24em] uppercase
                             text-gold font-bold mb-[14px]">
              Capacités de développement
            </span>
            <h2 className="font-serif text-[clamp(36px,3.8vw,56px)] font-light text-dark
                           leading-[1.06] tracking-[-0.01em] mb-5">
              Une expertise globale en<br />
              <strong className="font-semibold">développement immobilier logistique</strong>
            </h2>
            <p className="font-sans text-[18px] font-light text-muted leading-[1.85]">
              Nous vous accompagnons à chaque étape du projet : sélection du site,
              acquisition foncière, définition technique des installations, obtention
              des autorisations, construction, livraison et gestion des actifs.
              <br /><br />
              Grâce à l'expertise de nos équipes internes, nous assurons une prise en
              charge complète du processus de développement clé en main, avec une
              approche structurée garantissant maîtrise des délais, qualité d'exécution
              et transparence à chaque phase du projet.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
