"use client"
import { ArrowUpRight, Check, X } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"

const TYPES = [
  "Entrepôt / Plateforme logistique",
  "Bureau / Centre d'affaires",
  "Résidentiel de prestige",
  "Retail / Commerce",
  "Terrain / Développement",
]
export default function VisitModal({ onClose }) {
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
      /* Changement ici : utilisation de flex pour centrer la modale parfaitement */
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-6"
      onClick={onClose}
    >
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" />
      
      <motion.div
        initial={{ opacity: 0, y: 32, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 24, scale: 0.97 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        /* Changement ici : max-h-[90vh] et flex-col pour garantir qu'elle ne dépasse jamais l'écran */
        className="relative bg-white w-full max-w-2xl max-h-[90vh] flex flex-col rounded-sm shadow-2xl overflow-hidden"
        onClick={e => e.stopPropagation()}
      >
        <div className="h-[3px] bg-gold w-full shrink-0" />
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center text-neutral-400 hover:text-neutral-800 hover:bg-gray-100 transition-colors duration-200 rounded-full"
        >
          <X size={18} strokeWidth={1.5} />
        </button>

        {/* Scrollable inner — always shows scrollbar so user knows content continues */}
        <div className="px-6 md:px-10 py-6 md:py-8 overflow-y-scroll w-full" style={{ scrollbarWidth: "thin", scrollbarColor: "#C4A55A #f1f1f1" }}>
          {sent ? (
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="text-center py-8">
              <div className="w-14 h-14 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-5">
                <Check size={24} strokeWidth={1.5} className="text-gold" />
              </div>
              <h3 className="font-serif text-2xl text-neutral-800 font-light mb-2">Demande envoyée</h3>
              <p className="font-sans text-[15px] text-neutral-500 leading-[1.6] max-w-sm mx-auto">
                Nos équipes vous contacteront dans les 24 heures pour confirmer votre rendez-vous.
              </p>
            </motion.div>
          ) : (
            <>
              {/* Textes légèrement réduits pour sauver de l'espace vertical */}
              <p className="font-sans text-[12px] md:text-[13px] tracking-[0.3em] uppercase text-gold/70 font-bold mb-3">
                Planifier une visite
              </p>
              <h3 className="font-serif text-2xl md:text-3xl text-neutral-800 font-light leading-[1.1] mb-2">
                Votre projet mérite
                <br />
                <span className="italic text-gold">une attention particulière</span>
              </h3>
              <div className="w-8 h-px bg-gold/30 mb-6" />

              {/* Formulaire resserré : space-y-4 au lieu de space-y-5 */}
              <form onSubmit={handleSubmit} className="space-y-3.5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-sans text-[12px] tracking-[0.15em] uppercase text-neutral-400 block mb-1.5">Nom *</label>
                    <input name="nom" value={form.nom} onChange={handleChange} required placeholder="Kabbaj"
                      className="w-full border border-gray-200 bg-gray-50 px-3.5 py-2.5 font-sans text-[15px] text-neutral-700 placeholder:text-neutral-300 focus:outline-none focus:border-gold/50 focus:bg-white transition-all duration-200" />
                  </div>
                  <div>
                    <label className="font-sans text-[12px] tracking-[0.15em] uppercase text-neutral-400 block mb-1.5">Prénom *</label>
                    <input name="prenom" value={form.prenom} onChange={handleChange} required placeholder="Mohamed"
                      className="w-full border border-gray-200 bg-gray-50 px-3.5 py-2.5 font-sans text-[15px] text-neutral-700 placeholder:text-neutral-300 focus:outline-none focus:border-gold/50 focus:bg-white transition-all duration-200" />
                  </div>
                </div>
                <div>
                  <label className="font-sans text-[12px] tracking-[0.15em] uppercase text-neutral-400 block mb-1.5">Société</label>
                  <input name="societe" value={form.societe} onChange={handleChange} placeholder="Votre entreprise"
                    className="w-full border border-gray-200 bg-gray-50 px-3.5 py-2.5 font-sans text-[15px] text-neutral-700 placeholder:text-neutral-300 focus:outline-none focus:border-gold/50 focus:bg-white transition-all duration-200" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-sans text-[12px] tracking-[0.15em] uppercase text-neutral-400 block mb-1.5">Email *</label>
                    <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="votre@email.com"
                      className="w-full border border-gray-200 bg-gray-50 px-3.5 py-2.5 font-sans text-[15px] text-neutral-700 placeholder:text-neutral-300 focus:outline-none focus:border-gold/50 focus:bg-white transition-all duration-200" />
                  </div>
                  <div>
                    <label className="font-sans text-[12px] tracking-[0.15em] uppercase text-neutral-400 block mb-1.5">Téléphone</label>
                    <input name="tel" type="tel" value={form.tel} onChange={handleChange} placeholder="+212 6 XX XX XX XX"
                      className="w-full border border-gray-200 bg-gray-50 px-3.5 py-2.5 font-sans text-[15px] text-neutral-700 placeholder:text-neutral-300 focus:outline-none focus:border-gold/50 focus:bg-white transition-all duration-200" />
                  </div>
                </div>
                <div>
                  <label className="font-sans text-[12px] tracking-[0.15em] uppercase text-neutral-400 block mb-1.5">Type d'espace *</label>
                  <select name="type" value={form.type} onChange={handleChange} required
                    className="w-full border border-gray-200 bg-gray-50 px-3.5 py-2.5 font-sans text-[15px] text-neutral-700 focus:outline-none focus:border-gold/50 focus:bg-white transition-all duration-200 appearance-none">
                    <option value="" disabled>Sélectionnez un segment</option>
                    {TYPES.map(t => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>
                <div>
                  <label className="font-sans text-[12px] tracking-[0.15em] uppercase text-neutral-400 block mb-1.5">Votre projet</label>
                  {/* TextArea réduit à 2 lignes */}
                  <textarea name="message" value={form.message} onChange={handleChange} rows={2} placeholder="Décrivez brièvement vos besoins…"
                    className="w-full border border-gray-200 bg-gray-50 px-3.5 py-2.5 font-sans text-[15px] text-neutral-700 placeholder:text-neutral-300 focus:outline-none focus:border-gold/50 focus:bg-white transition-all duration-200 resize-none" />
                </div>
                
                {/* Bouton avec un py-3 au lieu de py-4 pour gagner en hauteur */}
                <button type="submit"
                  className="inline-flex items-center gap-3 bg-neutral-900 text-white font-sans text-[12px] tracking-[0.2em] uppercase px-8 py-3.5 mt-2 hover:bg-gold transition-colors duration-300 w-full justify-center group">
                  Envoyer ma demande
                  <ArrowUpRight size={14} strokeWidth={1.5} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
                <p className="font-sans text-[12px] text-neutral-400 text-center mt-2 leading-relaxed">
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
