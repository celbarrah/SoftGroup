"use client"

import { useRef, useState } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { X, ArrowUpRight, Check } from "lucide-react"
import MapSection from "./MapSection"

const TYPES = [
  "Entrepôt / Plateforme logistique",
  "Bureau / Centre d'affaires",
  "Résidentiel de prestige",
  "Retail / Commerce",
  "Terrain / Développement",
]

function VisitModal({ onClose }) {
  const [form, setForm] = useState({ nom: "", prenom: "", societe: "", email: "", tel: "", type: "", message: "" })
  const [sent, setSent] = useState(false)

  function handleChange(e) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      <motion.div
        initial={{ opacity: 0, y: 32, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 24, scale: 0.97 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="relative bg-white w-full max-w-2xl max-h-[90vh] overflow-y-auto"
        onClick={e => e.stopPropagation()}
      >
        <div className="h-[3px] bg-gold w-full" />
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 flex items-center justify-center text-neutral-400 hover:text-neutral-800 hover:bg-gray-100 transition-colors duration-200 rounded-full"
        >
          <X size={18} strokeWidth={1.5} />
        </button>

        <div className="px-8 md:px-12 pt-10 pb-12">
          {sent ? (
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="text-center py-8">
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check size={28} strokeWidth={1.5} className="text-gold" />
              </div>
              <h3 className="font-serif text-3xl text-neutral-800 font-light mb-3">Demande envoyée</h3>
              <p className="font-sans text-[16px] text-neutral-500 leading-[1.8] max-w-sm mx-auto">
                Nos équipes vous contacteront dans les 24 heures pour confirmer votre rendez-vous.
              </p>
            </motion.div>
          ) : (
            <>
              <p className="font-sans text-[12px] tracking-[0.45em] uppercase text-gold/70 font-bold mb-4">
                Planifier une visite
              </p>
              <h3 className="font-serif text-3xl md:text-4xl text-neutral-800 font-light leading-[1.1] mb-2">
                Votre projet mérite
                <br />
                <span className="italic text-gold">une attention particulière</span>
              </h3>
              <div className="w-8 h-px bg-gold/30 mb-8" />

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="font-sans text-[11px] tracking-[0.2em] uppercase text-neutral-400 block mb-2">Nom *</label>
                    <input name="nom" value={form.nom} onChange={handleChange} required placeholder="Kabbaj"
                      className="w-full border border-gray-200 bg-gray-50 px-4 py-3 font-sans text-[15px] text-neutral-700 placeholder:text-neutral-300 focus:outline-none focus:border-gold/50 focus:bg-white transition-all duration-200" />
                  </div>
                  <div>
                    <label className="font-sans text-[11px] tracking-[0.2em] uppercase text-neutral-400 block mb-2">Prénom *</label>
                    <input name="prenom" value={form.prenom} onChange={handleChange} required placeholder="Mohamed"
                      className="w-full border border-gray-200 bg-gray-50 px-4 py-3 font-sans text-[15px] text-neutral-700 placeholder:text-neutral-300 focus:outline-none focus:border-gold/50 focus:bg-white transition-all duration-200" />
                  </div>
                </div>
                <div>
                  <label className="font-sans text-[11px] tracking-[0.2em] uppercase text-neutral-400 block mb-2">Société</label>
                  <input name="societe" value={form.societe} onChange={handleChange} placeholder="Votre entreprise"
                    className="w-full border border-gray-200 bg-gray-50 px-4 py-3 font-sans text-[15px] text-neutral-700 placeholder:text-neutral-300 focus:outline-none focus:border-gold/50 focus:bg-white transition-all duration-200" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="font-sans text-[11px] tracking-[0.2em] uppercase text-neutral-400 block mb-2">Email *</label>
                    <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="votre@email.com"
                      className="w-full border border-gray-200 bg-gray-50 px-4 py-3 font-sans text-[15px] text-neutral-700 placeholder:text-neutral-300 focus:outline-none focus:border-gold/50 focus:bg-white transition-all duration-200" />
                  </div>
                  <div>
                    <label className="font-sans text-[11px] tracking-[0.2em] uppercase text-neutral-400 block mb-2">Téléphone</label>
                    <input name="tel" type="tel" value={form.tel} onChange={handleChange} placeholder="+212 6 XX XX XX XX"
                      className="w-full border border-gray-200 bg-gray-50 px-4 py-3 font-sans text-[15px] text-neutral-700 placeholder:text-neutral-300 focus:outline-none focus:border-gold/50 focus:bg-white transition-all duration-200" />
                  </div>
                </div>
                <div>
                  <label className="font-sans text-[11px] tracking-[0.2em] uppercase text-neutral-400 block mb-2">Type d&apos;espace *</label>
                  <select name="type" value={form.type} onChange={handleChange} required
                    className="w-full border border-gray-200 bg-gray-50 px-4 py-3 font-sans text-[15px] text-neutral-700 focus:outline-none focus:border-gold/50 focus:bg-white transition-all duration-200 appearance-none">
                    <option value="" disabled>Sélectionnez un segment</option>
                    {TYPES.map(t => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>
                <div>
                  <label className="font-sans text-[11px] tracking-[0.2em] uppercase text-neutral-400 block mb-2">Votre projet</label>
                  <textarea name="message" value={form.message} onChange={handleChange} rows={3} placeholder="Décrivez brièvement vos besoins…"
                    className="w-full border border-gray-200 bg-gray-50 px-4 py-3 font-sans text-[15px] text-neutral-700 placeholder:text-neutral-300 focus:outline-none focus:border-gold/50 focus:bg-white transition-all duration-200 resize-none" />
                </div>
                <button type="submit"
                  className="inline-flex items-center gap-3 bg-neutral-900 text-white font-sans text-[11px] tracking-[0.28em] uppercase px-10 py-4 hover:bg-gold transition-colors duration-300 w-full justify-center group">
                  Envoyer ma demande
                  <ArrowUpRight size={14} strokeWidth={1.5} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
                <p className="font-sans text-[11px] text-neutral-400 text-center leading-relaxed">
                  Nos équipes vous répondront dans les 24 heures ouvrées.
                </p>
              </form>
            </>
          )}
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function FooterCTA() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-8% 0px" })
  const [open, setOpen] = useState(false)

  return (
    <>
      <section
        ref={ref}
        className="bg-white py-50 md:py-40 px-8 md:px-12 lg:px-20 overflow-hidden relative"
        style={{ WebkitClipPath: "polygon(0 15%, 100% 0, 100% 85%, 0 100%)", clipPath: "polygon(0 15%, 100% 0, 100% 85%, 0 100%)" }}
        id="contact"
      >
        <div aria-hidden className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="w-[700px] h-[700px] rounded-full bg-gold/6 blur-3xl" />
        </div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-px bg-gold/30" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.p initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
            className="font-sans text-[13px] tracking-[0.5em] uppercase text-gold font-bold mb-7">
            Parlons de votre projet
          </motion.p>
          <motion.h2 initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.85, delay: 0.1 }}
            className="font-serif text-4xl md:text-6xl lg:text-7xl text-neutral-800 font-light leading-[1.05] mb-7">
            Vous avez un besoin
            <br />
            <span className="italic text-gold">en location&nbsp;?</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.2 }}
            className="font-sans text-[19px] text-muted leading-[1.9] max-w-xl mx-auto mb-14">
            Nos équipes vous accompagnent dans la recherche d&apos;espaces adaptés
            à vos exigences et aux enjeux de votre activité.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.32 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button onClick={() => setOpen(true)}
              className="inline-flex items-center gap-3 bg-gold text-noir font-sans text-[10px] tracking-[0.28em] uppercase px-11 py-4 hover:bg-gold-light transition-colors duration-300 font-medium cursor-pointer">
              Planifier une visite
            </button>
          </motion.div>
          <MapSection />
        </div>
      </section>

      <AnimatePresence>
        {open && <VisitModal onClose={() => setOpen(false)} />}
      </AnimatePresence>
    </>
  )
}
