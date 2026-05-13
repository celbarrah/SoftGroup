import Image from "next/image"
import Link from "next/link"

/**
 * Footer — Pied de page SOFTGROUP Immobilier
 * ─────────────────────────────────────────────────────────
 * Trois colonnes :
 *  Col 1 — Logo + Newsletter
 *  Col 2 — Contact & Coordonnées
 *  Col 3 — Navigation
 *
 * Dark Premium — fond noir absolu, accents or.
 * Server Component — pas de "use client" requis.
 */

const FOOTER_LINKS = [
  { label: "Accueil",                href: "#"           },
  { label: "Le Groupe",              href: "#groupe"     },
  { label: "Portefeuille",           href: "#portefeuille"},
  { label: "Gestion & Valorisation", href: "#gestion"    },
  { label: "Actualités",             href: "#actualites" },
  { label: "Nous Contacter",         href: "#contact"    },
]

const SOCIALS = [
  {
    label: "Facebook",
    href: "#",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
        <rect x="2" y="9" width="4" height="12"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#C4A55A] text-cream">

      <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-20 pt-20 pb-16">

        {/* ── Main grid ─────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14">

          {/* Col 1 — Marque + Newsletter ─────────────────── */}
          <div>
              <Image src={"/img/softgroupe.png"} height={200} width={200} alt="softgroupe" className="brightness-0 invert screen"/>
            <div className="w-8 h-px bg-gold/50 mt-4 mb-9" />

            {/* Tagline */}
            <p className="font-sans text-[14px] font-bold text-cream leading-[1.8] mb-8 max-w-[240px]">
              L'immobilier d'excellence au Maroc logistique, bureaux,
              résidentiel et retail depuis plus de 35 ans.
            </p>

            {/* Newsletter */}
            <p className="font-sans text-[11px] tracking-[0.28em] uppercase text-neutral-700 font-bold mb-2">
              Newsletter
            </p>
            <p className="font-sans text-[13px] text-cream leading-[1.8] mb-5 max-w-[240px]">
              Recevez nos dernières actualités et opportunités en avant-première.
            </p>

            <form className="flex max-w-[260px]">
              <input
                type="email"
                placeholder="Votre e-mail"
                aria-label="Adresse e-mail pour la newsletter"
                className="flex-1 min-w-0 bg-transparent border border-white text-cream text-xs px-4 py-3 placeholder:text-cream/80 focus:outline-none focus:border-gold transition-colors duration-200"
              />
              <button
                type="submit"
                aria-label="S'abonner"
                className="bg-neutral-600/20 text-noir font-sans text-sm font-medium px-4 py-3 hover:bg-gold-light transition-colors duration-300 flex-none"
              >
                →
              </button>
            </form>
          </div>

          {/* Col 2 — Contact ──────────────────────────────── */}
          <div>
            <p className="font-sans text-[11px] tracking-[0.28em] uppercase text-cream mb-7">
              Contact
            </p>
            <div className="flex flex-col gap-6">

              <div>
                <p className="font-serif text-base text-neutral-700 mb-1">Casablanca</p>
                <p className="font-sans text-[16px] text-cream leading-[1.8]">101 Boulevard de la Corniche, Casablanca</p>
              </div>

              <div>
                <p className="font-sans text-[11px] tracking-[0.2em] uppercase text-neutral-700 mb-1">E-mail</p>
                <a href="mailto:immo.contact@softgroup.ma" className="font-sans text-[16px] text-cream hover:text-neutral-700 transition-colors duration-200">
                  immo.contact@softgroup.ma
                </a>
              </div>

              <div>
                <p className="font-sans text-[11px] tracking-[0.2em] uppercase text-neutral-700 mb-1">Téléphone</p>
                <a href="tel:+212661978104" className="font-sans text-[16px] text-cream hover:text-neutral-700 transition-colors duration-200">
                  +212 661 978 104
                </a>
              </div>

              <div>
                <p className="font-sans text-[11px] tracking-[0.2em] uppercase text-neutral-700 mb-3">Réseaux sociaux</p>
                <div className="flex items-center gap-4">
                  {SOCIALS.map(({ label, href, icon }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="text-neutral-600 hover:text-cream transition-colors duration-200"
                    >
                      {icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Col 3 — Navigation ───────────────────────────── */}
          <div>
            <p className="font-sans text-[11px] tracking-[0.28em] uppercase text-cream mb-7">
              Navigation
            </p>
            <nav className="flex flex-col gap-3.5">
              {FOOTER_LINKS.map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  className="font-serif text-base text-neutral-600 hover:text-cream transition-colors duration-200 w-fit"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* ── Barre inférieure ──────────────────────────────── */}
      <div className="border-t border-white/6 px-8 md:px-12 lg:px-20 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
        <p className="font-sans text-[11px] text-neutral-700 tracking-wide">
          © {year} Softgroup Immobilier. Tous droits réservés.
        </p>
        <div className="flex gap-6">
          {[
            { label: "Mentions légales",              href: "#" },
            { label: "Politique de confidentialité",  href: "#" },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="font-sans text-[11px] text-cream hover:text-cream/50 transition-colors duration-200 tracking-wide"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
