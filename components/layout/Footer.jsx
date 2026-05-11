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
  { label: "Instagram", href: "#" },
  { label: "LinkedIn",  href: "#" },
  { label: "YouTube",   href: "#" },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#050506] text-cream">

      <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-20 pt-20 pb-16">

        {/* ── Main grid ─────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14">

          {/* Col 1 — Marque + Newsletter ─────────────────── */}
          <div>
            {/* Logo */}
            {/* <p className="font-serif text-xl tracking-[0.35em] uppercase text-gold mb-1">
              SOFTGROUP
              <span className="font-light block text-sm tracking-[0.2em] mt-0.5 text-cream/40">
                Immobilier
              </span>
            </p> */}
              <Image src={"/img/softgroupe.png"} height={200} width={200} alt="softgroupe" className="brightness-0 invert screen"/>
            <div className="w-8 h-px bg-gold/50 mt-4 mb-9" />

            {/* Tagline */}
            <p className="font-sans text-[14px] font-bold text-cream/30 leading-[1.8] mb-8 max-w-[240px]">
              L'immobilier d'excellence au Maroc logistique, bureaux,
              résidentiel et retail depuis plus de 35 ans.
            </p>

            {/* Newsletter */}
            <p className="font-sans text-[9px] tracking-[0.28em] uppercase text-cream/30 mb-2">
              Newsletter
            </p>
            <p className="font-sans text-xs text-cream/25 leading-[1.8] mb-5 max-w-[240px]">
              Recevez nos dernières actualités et opportunités en avant-première.
            </p>

            <form className="flex max-w-[260px]">
              <input
                type="email"
                placeholder="Votre e-mail"
                aria-label="Adresse e-mail pour la newsletter"
                className="flex-1 min-w-0 bg-transparent border border-white/12 text-cream text-xs px-4 py-3 placeholder:text-cream/20 focus:outline-none focus:border-gold transition-colors duration-200"
              />
              <button
                type="submit"
                aria-label="S'abonner"
                className="bg-gold text-noir font-sans text-sm font-medium px-4 py-3 hover:bg-gold-light transition-colors duration-300 flex-none"
              >
                →
              </button>
            </form>
          </div>

          {/* Col 2 — Contact ──────────────────────────────── */}
          <div>
            <p className="font-sans text-[11px] tracking-[0.28em] uppercase text-cream/30 mb-7">
              Contact
            </p>
            <div className="flex flex-col gap-6">

              <div>
                <p className="font-serif text-base text-cream/80 mb-1">Casablanca</p>
                <p className="font-sans text-xs text-cream/25 leading-[1.8]">Casablanca, Maroc</p>
              </div>

              <div>
                <p className="font-sans text-[11px] tracking-[0.2em] uppercase text-cream/20 mb-1">E-mail</p>
                <a href="mailto:contact@softgroup.ma" className="font-sans text-xs text-cream/40 hover:text-gold transition-colors duration-200">
                  contact@softgroup.ma
                </a>
              </div>

              <div>
                <p className="font-sans text-[11px] tracking-[0.2em] uppercase text-cream/20 mb-1">Téléphone</p>
                <a href="tel:+212661978104" className="font-sans text-xs text-cream/40 hover:text-gold transition-colors duration-200">
                  +212 661 978 104
                </a>
              </div>

              <div>
                <p className="font-sans text-[11px] tracking-[0.2em] uppercase text-cream/20 mb-3">Réseaux sociaux</p>
                <div className="flex items-center gap-5">
                  {SOCIALS.map(({ label, href }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans text-[10px] tracking-[0.12em] text-cream/30 hover:text-gold transition-colors duration-200"
                    >
                      {label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Col 3 — Navigation ───────────────────────────── */}
          <div>
            <p className="font-sans text-[11px] tracking-[0.28em] uppercase text-cream/30 mb-7">
              Navigation
            </p>
            <nav className="flex flex-col gap-3.5">
              {FOOTER_LINKS.map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  className="font-serif text-base text-cream/40 hover:text-gold transition-colors duration-200 w-fit"
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
        <p className="font-sans text-[10px] text-cream/20 tracking-wide">
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
              className="font-sans text-[10px] text-cream/20 hover:text-cream/50 transition-colors duration-200 tracking-wide"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
