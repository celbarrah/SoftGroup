"use client"
import { ArrowUpRight, Check, X, AlertCircle } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"

const TYPES = [
  "Entrepôt / Plateforme logistique",
  "Bureau / Centre d'affaires",
  "Résidentiel de prestige",
  "Retail / Commerce",
  "Terrain / Développement",
]

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim())
}

function isValidPhone(phone) {
  if (!phone?.trim()) return false // required
  const cleaned = phone.replace(/[\s\-().+]/g, "")
  return /^(0[67]\d{8}|212[67]\d{8}|\+212[67]\d{8})$/.test(cleaned)
}

export default function VisitModal({ onClose }) {
  const [form, setForm]     = useState({ nom: "", prenom: "", societe: "", email: "", tel: "", type: "", message: "" })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState("idle") // idle | sending | success | error
  const [serverError, setServerError] = useState("")

  function handleChange(e) {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
    // Clear error on change
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: "" }))
  }

  function validate() {
    const errs = {}
    if (!form.nom.trim())     errs.nom     = "Requis"
    if (!form.prenom.trim())  errs.prenom  = "Requis"
    if (!form.societe.trim()) errs.societe = "Requis"
    if (!form.email.trim())   errs.email   = "Requis"
    else if (!isValidEmail(form.email)) errs.email = "Email invalide"
    if (!form.tel.trim())     errs.tel     = "Requis"
    else if (!isValidPhone(form.tel)) errs.tel = "Format invalide (ex: 06 XX XX XX XX)"
    if (!form.type)           errs.type    = "Requis"
    if (!form.message.trim()) errs.message = "Requis"
    return errs
  }

  async function handleSubmit(e) {
    if (e?.preventDefault) e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }

    setStatus("sending")
    setServerError("")

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
      const data = await res.json()

      if (data.success) {
        setStatus("success")
        // Facebook Pixel — Lead event on successful form submission
        if (typeof window !== "undefined" && window.fbq) {
          window.fbq("track", "Lead")
        }
      } else if (data.errors) {
        setErrors(data.errors)
        setStatus("idle")
      } else {
        setServerError(data.error || "Une erreur est survenue. Veuillez réessayer.")
        setStatus("error")
      }
    } catch {
      setServerError("Connexion impossible. Vérifiez votre connexion et réessayez.")
      setStatus("error")
    }
  }

  const inputCls = (name) =>
    `w-full border bg-gray-50 px-3 py-2 font-sans text-[14px] text-neutral-700 placeholder:text-neutral-300 focus:outline-none focus:bg-white transition-all duration-200 ${
      errors[name]
        ? "border-red-400 focus:border-red-500"
        : "border-gray-200 focus:border-gold/50"
    }`

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" />

      <motion.div
        initial={{ opacity: 0, y: 32, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 24, scale: 0.97 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="relative bg-white w-full max-w-2xl flex flex-col rounded-sm shadow-2xl overflow-hidden"
        style={{ maxHeight: "min(88vh, 860px)" }}
        onClick={e => e.stopPropagation()}
        onWheel={e => e.stopPropagation()}
        onTouchMove={e => e.stopPropagation()}
      >
        {/* Gold top bar */}
        <div className="h-[3px] bg-gold w-full shrink-0" />

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center text-neutral-400 hover:text-neutral-800 hover:bg-gray-100 transition-colors duration-200 rounded-full"
        >
          <X size={18} strokeWidth={1.5} />
        </button>

        {status === "success" ? (
          /* ── Success state ── */
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="text-center py-14 px-10">
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
            {/* ── Scrollable form area ── */}
            <div
              className="flex-1 min-h-0 overflow-y-auto px-6 md:px-10 pt-6 md:pt-7 pb-4"
              style={{ scrollbarWidth: "thin", scrollbarColor: "#C4A55A #f1f1f1", overscrollBehavior: "contain" }}
              onWheel={e => e.stopPropagation()}
              onTouchMove={e => e.stopPropagation()}
            >
              <p className="font-sans text-[12px] tracking-[0.3em] uppercase text-gold/70 font-bold mb-2">
                Planifier une visite
              </p>
              <h3 className="font-serif text-[1.6rem] md:text-[2rem] text-neutral-800 font-light leading-[1.1] mb-2">
                Votre projet mérite
                <br />
                <span className="italic text-gold">une attention particulière</span>
              </h3>
              <div className="w-8 h-px bg-gold/30 mb-5" />

              <div className="space-y-3">
                {/* Nom / Prénom */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="font-sans text-[11px] tracking-[0.15em] uppercase text-neutral-400 block mb-1">
                      Nom <span className="text-red-400">*</span>
                    </label>
                    <input name="nom" value={form.nom} onChange={handleChange} placeholder="Kabbaj"
                      className={inputCls("nom")} />
                    {errors.nom && <p className="text-red-400 text-[11px] mt-1">{errors.nom}</p>}
                  </div>
                  <div>
                    <label className="font-sans text-[11px] tracking-[0.15em] uppercase text-neutral-400 block mb-1">
                      Prénom <span className="text-red-400">*</span>
                    </label>
                    <input name="prenom" value={form.prenom} onChange={handleChange} placeholder="Mohamed"
                      className={inputCls("prenom")} />
                    {errors.prenom && <p className="text-red-400 text-[11px] mt-1">{errors.prenom}</p>}
                  </div>
                </div>

                {/* Société */}
                <div>
                  <label className="font-sans text-[11px] tracking-[0.15em] uppercase text-neutral-400 block mb-1">Société <span className="text-red-400">*</span></label>
                  <input name="societe" value={form.societe} onChange={handleChange} placeholder="Votre entreprise"
                    className={inputCls("societe")} />
                </div>

                {/* Email / Téléphone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="font-sans text-[11px] tracking-[0.15em] uppercase text-neutral-400 block mb-1">
                      Email <span className="text-red-400">*</span>
                    </label>
                    <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="votre@email.com"
                      className={inputCls("email")} />
                    {errors.email && <p className="text-red-400 text-[11px] mt-1">{errors.email}</p>}
                  </div>
                  <div>
                    <label className="font-sans text-[11px] tracking-[0.15em] uppercase text-neutral-400 block mb-1">
                      Téléphone <span className="text-red-400">*</span>
                    </label>
                    <input name="tel" type="tel" value={form.tel} onChange={handleChange} placeholder="+212 6 XX XX XX XX"
                      className={inputCls("tel")} />
                    {errors.tel && <p className="text-red-400 text-[11px] mt-1">{errors.tel}</p>}
                  </div>
                </div>

                {/* Type d'espace */}
                <div>
                  <label className="font-sans text-[11px] tracking-[0.15em] uppercase text-neutral-400 block mb-1">
                    Type d&apos;espace <span className="text-red-400">*</span>
                  </label>
                  <select name="type" value={form.type} onChange={handleChange}
                    className={`${inputCls("type")} appearance-none`}>
                    <option value="" disabled>Sélectionnez un segment</option>
                    {TYPES.map(t => <option key={t} value={t}>{t}</option>)}
                  </select>
                  {errors.type && <p className="text-red-400 text-[11px] mt-1">{errors.type}</p>}
                </div>

                {/* Message */}
                <div>
                  <label className="font-sans text-[11px] tracking-[0.15em] uppercase text-neutral-400 block mb-1">Votre projet <span className="text-red-400">*</span></label>
                  <textarea name="message" value={form.message} onChange={handleChange} rows={2}
                    placeholder="Décrivez brièvement vos besoins…"
                    className={`${inputCls("message")} resize-none`} />
                </div>
              </div>

              {/* Server error */}
              {status === "error" && serverError && (
                <div className="flex items-start gap-2 mt-4 bg-red-50 border border-red-200 px-4 py-3 rounded">
                  <AlertCircle size={15} className="text-red-400 shrink-0 mt-0.5" />
                  <p className="font-sans text-[12px] text-red-600">{serverError}</p>
                </div>
              )}
            </div>

            {/* ── Sticky footer ── */}
            <div className="shrink-0 px-6 md:px-10 py-4 border-t border-gray-100 bg-white">
              <button
                type="button"
                onClick={handleSubmit}
                disabled={status === "sending"}
                className="inline-flex items-center gap-3 bg-neutral-900 text-white font-sans text-[12px] tracking-[0.2em] uppercase px-8 py-3.5 hover:bg-gold transition-colors duration-300 w-full justify-center group disabled:opacity-60 disabled:cursor-wait"
              >
                {status === "sending" ? "Envoi en cours…" : "Envoyer ma demande"}
                {status !== "sending" && (
                  <ArrowUpRight size={14} strokeWidth={1.5} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                )}
              </button>
              <p className="font-sans text-[11px] text-neutral-400 text-center mt-2.5">
                Nos équipes vous répondront dans les 24 heures ouvrées.
              </p>
            </div>
          </>
        )}
      </motion.div>
    </motion.div>
  )
}
