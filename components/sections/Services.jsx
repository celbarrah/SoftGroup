"use client"

import { useRef, useState } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { Wrench, Shield, Lightbulb, FileText, Leaf, Plus, Minus } from "lucide-react"

const SERVICES = [
  { icon: Wrench, title: "Gestion Technique", description: "Maintenance proactive de vos infrastructures industrielles." },
  { icon: Shield, title: "Sécurité & Protection", description: "Surveillance hybride 24/7 aux standards internationaux." },
  { icon: Lightbulb, title: "Solutions Sur-Mesure", description: "Optimisation d'espaces et agencement par nos experts." },
  { icon: FileText, title: "Soutien Administratif", description: "Simplification de vos démarches réglementaires locales." },
  { icon: Leaf, title: "Prestations Extérieures", description: "Entretien rigoureux des façades et espaces paysagers." },
]

const INFRA_TABS = [
  {
    id: "logistique",
    label: "Performance Industrielle",
    subtitle: "Standards Logistiques Internationaux",
    items: [
      { title: "Protection Incendie", desc: "Systèmes de sprinklage et RIA certifiés." },
      { title: "Logistique Fluide", desc: "Zones de charge, quais niveleurs et parkings." },
      { title: "Environnement", desc: "Espaces verts paysagers de haute qualité." },
    ],
  },
  {
    id: "bureaux",
    label: "Efficacité Tertiaire",
    subtitle: "Technologie & Productivité",
    items: [
      { title: "Mobilité Verticale", desc: "Ascenseurs haute capacité intelligents." },
      { title: "Sécurité Digitale", desc: "Contrôle d'accès biométrique et magnétique." },
      { title: "Gestion des Flux", desc: "Accueil centralisé et parkings optimisés." },
    ],
  },
  {
    id: "residentiel",
    label: "Art de Vivre",
    subtitle: "Le Bien-être Sans Compromis",
    items: [
      { title: "Sport & Santé", desc: "Fitness outdoor et parcours de santé." },
      { title: "Loisirs & Famille", desc: "Aires de jeux sécurisées premium." },
      { title: "Sérénité", desc: "Jardins arborés entretenus quotidiennement." },
    ],
  },
]

function InfraAccordion({ tab, isOpen, onToggle, index }) {
  return (
    <div className={`border-t border-white/5 ${isOpen ? "bg-white/[0.02]" : ""} transition-colors duration-500`}>
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-8 text-left group px-4"
      >
        <div className="flex items-baseline gap-8">
          <span className="font-sans text-[10px] text-gold/50 tabular-nums">0{index + 1}</span>
          <div>
            <h3 className={`font-serif text-2xl md:text-3xl transition-all duration-500 ${isOpen ? "text-gold italic" : "text-cream"}`}>
              {tab.label}
            </h3>
            <p className="font-sans text-[10px] tracking-widest uppercase text-muted mt-2">{tab.subtitle}</p>
          </div>
        </div>
        <div className="relative w-6 h-6 flex items-center justify-center">
            <Plus size={20} className={`absolute text-gold transition-transform duration-500 ${isOpen ? "rotate-90 opacity-0" : ""}`} strokeWidth={1} />
            <Minus size={20} className={`absolute text-gold transition-transform duration-500 ${isOpen ? "rotate-0 opacity-100" : "rotate-90 opacity-0"}`} strokeWidth={1} />
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-12 px-4 md:pl-24 grid grid-cols-1 md:grid-cols-3 gap-8">
              {tab.items.map((item) => (
                <div key={item.title} className="group">
                  <p className="font-sans text-[9px] tracking-[0.2em] uppercase text-gold mb-3 opacity-70 group-hover:opacity-100 transition-opacity">
                    {item.title}
                  </p>
                  <p className="font-sans text-xs text-muted leading-relaxed max-w-[240px]">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function Services() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-10%" })
  const [openTab, setOpenTab] = useState("logistique")

  return (
    <section ref={ref} className="bg-[#0A0A0A] py-24 md:py-40 px-6 overflow-hidden" id="gestion">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section: Split Layout */}
        <div className="flex flex-col justify-between items-start gap-12 mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1 }}
            className="lg:max-w-8xl"
          >
            <span className="inline-block px-3 py-1 border border-gold/30 rounded-full font-sans text-[8px] tracking-[0.4em] uppercase text-gold mb-8">
              Expertise Immobilière
            </span>
            <h2 className="font-serif text-5xl md:text-7xl text-cream font-light leading-[1.1]">
              Gestion <span className="italic text-gold">&</span>
              Valorisation
            </h2>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:max-w-4xl pt-4"
          >
            <p className="font-sans text-sm text-muted leading-loose border-l border-gold/20 pl-8">
              Le bail n'est que le début. En tant que propriétaire-gestionnaire, 
              nous garantissons une sérénité totale via une gestion intégrée 
              et proactive de vos actifs stratégiques.
            </p>
          </motion.div>
        </div>

        {/* Services: Minimalist Hover Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 border-y border-white/5 mb-40">
          {SERVICES.map((svc, i) => (
            <motion.div
              key={svc.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="group relative p-8 border-r border-white/5 last:border-r-0 hover:bg-white/[0.02] transition-all duration-500"
            >
              <div className="mb-12 relative">
                <svc.icon size={24} strokeWidth={1} className="text-gold group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gold/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <h4 className="font-serif text-xl text-cream mb-4 group-hover:text-gold transition-colors">
                {svc.title}
              </h4>
              <p className="font-sans text-[11px] text-muted leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                {svc.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Infrastructure: Architectural Accordion */}
        <div className="relative">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <p className="font-sans text-[10px] tracking-[0.5em] uppercase text-gold/60 mb-4">Architecture & Équipements</p>
              <h3 className="font-serif text-3xl md:text-4xl text-cream font-light">Infrastructures de Pointe</h3>
            </div>
            <p className="font-sans text-xs text-muted max-w-sm italic">
              "L'excellence technique au service de la performance opérationnelle."
            </p>
          </div>

          <div className="border-b border-white/5">
            {INFRA_TABS.map((tab, i) => (
              <InfraAccordion
                key={tab.id}
                tab={tab}
                index={i}
                isOpen={openTab === tab.id}
                onToggle={() => setOpenTab(openTab === tab.id ? null : tab.id)}
              />
            ))}
          </div>
        </div>

        {/* Premium CTA */}
        <motion.div className="mt-24 flex justify-center">
            <a href="#contact" className="group relative px-12 py-5 overflow-hidden border border-gold/20">
                <div className="absolute inset-0 bg-gold translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500" />
                <span className="relative font-sans text-[10px] tracking-[0.3em] uppercase text-gold group-hover:text-charcoal transition-colors duration-500">
                    Demander une expertise
                </span>
            </a>
        </motion.div>

      </div>
    </section>
  )
}