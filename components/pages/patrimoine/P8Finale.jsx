import Image from "next/image"
import { Panel } from "./shared"

/* ─── Patrimoine Classé seal SVG ───────────────────────────── */
function ArchiveSeal() {
  const angles = [0,15,30,45,60,75,90,105,120,135,150,165,180,195,210,225,240,255,270,285,300,315,330,345]
  return (
    <svg className="ad-seal" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" aria-label="Patrimoine Classé">
      <g className="ad-seal-rays">
        {angles.map((deg, i) => (
          <line key={deg} x1="100" y1="3" x2="100" y2={i % 2 === 0 ? "15" : "12"} transform={`rotate(${deg} 100 100)`} />
        ))}
      </g>
      <circle className="ad-seal-outer" cx="100" cy="100" r="78" />
      <circle className="ad-seal-inner" cx="100" cy="100" r="71" />
      <text x="100" y="76"  textAnchor="middle" className="ad-seal-top">PATRIMOINE</text>
      <g className="ad-seal-dots">
        <circle cx="86"  cy="89" r="1.4" />
        <circle cx="100" cy="89" r="1.4" />
        <circle cx="114" cy="89" r="1.4" />
      </g>
      <text x="100" y="124" textAnchor="middle" className="ad-seal-main">CLASSÉ</text>
      <line className="ad-seal-rule" x1="56" y1="136" x2="144" y2="136" />
      <text x="100" y="150" textAnchor="middle" className="ad-seal-bottom">VILLE DE CASABLANCA</text>
    </svg>
  )
}

/* ─── Polaroid corner ornaments ────────────────────────────── */
function Corners({ inset = "inset-[14px_14px_38px]" }) {
  return (
    <div className={`absolute ${inset} pointer-events-none`}>
      <div className="absolute top-0 left-0 w-[22px] h-[22px] border-t-[1.5px] border-l-[1.5px] border-[#d4a955]" />
      <div className="absolute bottom-0 right-0 w-[22px] h-[22px] border-b-[1.5px] border-r-[1.5px] border-[#d4a955]" />
    </div>
  )
}

export default function P8Finale() {
  return (
    <Panel id="adp8">
      {/* ── Background layers ── */}
      <div className="ad-finale-bg" />
      <div className="ad-finale-veil" />
      <div className="ad-finale-rays" />

      <div className="ad-scene-num">VIII</div>

      {/* ── Two-column grid ── */}
      <div
        className="relative z-[5] w-full max-w-[1400px] mx-auto overflow-visible
                   grid grid-cols-1 md:grid-cols-2 items-center
                   gap-[clamp(40px,5vw,90px)]"
      >

        {/* ══ LEFT — Text (all Tailwind, left-aligned) ══ */}
        <div className="flex flex-col items-start text-left">

          {/* Small cap — "Notre signature" with gold line */}
          <div className="ad-r flex items-center gap-[14px] font-sans text-[12px] tracking-[.5em] font-bold text-[#7d5215] mb-5 uppercase">
            <span className="block w-[50px] h-px bg-[#7d5215] shrink-0" />
            Notre signature
          </div>

          {/* Main title */}
          <h2
            className="ad-r ad-d1 font-serif uppercase tracking-[.04em] font-bold leading-[.94] text-[#1f1810] max-w-[18ch] mb-4"
            style={{ fontSize: "clamp(46px,7vh,92px)" }}
          >
            Entre{" "}
            <em className="not-italic italic font-medium tracking-normal normal-case text-[#7d5215]">
              Mémoire
            </em>
            <br />
            & Avenir
          </h2>

          {/* Gold separator line */}
          <div className="ad-r ad-d2 w-[72px] h-px bg-[#7d5215] mb-4" />

          {/* SOFTGROUP IMMOBILIER */}
          <div
            className="ad-r ad-d2 font-serif uppercase tracking-[.35em] font-extrabold text-[#7d5215] mb-[26px]"
            style={{ fontSize: "clamp(16px,2vh,22px)" }}
          >
            SOFTGROUP IMMOBILIER
          </div>

          {/* Gardien d'un — Héritage Vivant */}
          <div className="ad-r ad-d3 mb-[26px]">
            <div
              className="font-sans font-bold uppercase tracking-[.42em] text-[#3d3220] mb-[6px]"
              style={{ fontSize: "clamp(13px,1.4vw,18px)" }}
            >
              Gardien d'un
            </div>
            <div
              className="font-serif uppercase tracking-[.04em] leading-[.96] text-[#7d5215]"
              style={{
                fontSize: "clamp(38px,5.5vw,94px)",
                textShadow: "0 2px 6px rgba(125,82,21,.14), 0 10px 28px rgba(125,82,21,.10)",
              }}
            >
              Héritage Vivant
            </div>
          </div>

          {/* Body paragraphs */}
          <p
            className="ad-r ad-d4 font-serif italic font-medium leading-[1.55] text-[#3d3220] mb-[14px]"
            style={{ fontSize: "clamp(17px,2.1vh,22px)" }}
          >
            <strong className="text-[#7d5215] font-bold not-italic">Perpétuer des récits</strong>, c'est prendre soin de la mémoire collective de Casablanca.
          </p>
          <p
            className="ad-r ad-d5 font-serif italic font-medium leading-[1.55] text-[#3d3220] mb-[14px]"
            style={{ fontSize: "clamp(17px,2.1vh,22px)" }}
          >
            Nous mesurons la profondeur d'un lieu — son histoire, son caractère, sa résonance dans le temps long.
          </p>

          {/* Invite block */}
          <div
            className="ad-r ad-d6 font-serif italic font-medium text-[#1f1810] mt-[22px] mb-[26px] leading-[1.35]"
            style={{ fontSize: "clamp(18px,2.3vh,24px)" }}
          >
            SOFTGROUP vous invite à habiter
            <span
              className="block font-serif not-italic font-normal uppercase tracking-[.04em] leading-[.98] text-[#7d5215] my-2"
              style={{
                fontSize: "clamp(30px,4.6vw,76px)",
                textShadow: "0 2px 6px rgba(125,82,21,.14), 0 10px 28px rgba(125,82,21,.10)",
              }}
            >
              un Morceau de l'Histoire
            </span>
            de Casablanca.
          </div>

          {/* CTA button */}
          <a
            href="/le-groupe"
            className="ad-r ad-d6 relative inline-flex items-center gap-[14px]
                       px-9 py-[17px] overflow-hidden
                       bg-[#1f1810] text-[#fffaee]
                       font-sans text-[11px] tracking-[.4em] font-bold uppercase
                       no-underline transition-all duration-400
                       hover:bg-[#7d5215]
                       before:content-[''] before:absolute before:inset-1
                       before:border before:border-[#d4a955]
                       before:opacity-0 before:transition-opacity before:duration-400
                       hover:before:opacity-100"
          >
            Découvrir SOFTGROUP
            <svg width="20" height="10" viewBox="0 0 20 10" fill="none" className="transition-transform duration-400 group-hover:translate-x-2">
              <path d="M0 5 L18 5 M14 1 L18 5 L14 9" stroke="currentColor" strokeWidth="1.4" />
            </svg>
          </a>

          {/* Footer address */}
          {/* <div className="ad-r ad-d7 mt-[30px] font-sans text-[10px] tracking-[.4em] font-semibold text-[#6e5e48]">
            101, Boulevard de la Corniche
            <span className="mx-3 text-[#7d5215]">◆</span>
            Casablanca
            <span className="mx-3 text-[#7d5215]">◆</span>
            +212 522 399 400
          </div> */}
        </div>

        {/* ══ RIGHT — Archive composition ══ */}
        <div
          className="relative w-full overflow-visible max-[960px]:aspect-square max-[960px]:max-h-[480px]"
          style={{ aspectRatio: "1/1.05", maxHeight: "78vh" }}
        >
          {/* Aerial photo — top-right, +2° */}
          <figure
            className="absolute top-0 right-0 w-[78%] z-[2]
                       rotate-[2deg] p-[14px] pb-[38px]
                       bg-[#fffaee]
                       shadow-[0_30px_60px_-20px_rgba(31,24,16,.35),0_4px_12px_rgba(31,24,16,.10)]
                       transition-[transform] duration-700 ease-[cubic-bezier(.2,.8,.2,1)]
                       hover:rotate-0 hover:scale-[1.02] hover:z-[4]"
            style={{ aspectRatio: "16/10" }}
          >
            <Image
              src="https://res.cloudinary.com/dofyrwzop/image/upload/q_auto/f_auto/v1780675594/PATRIMOINE_2_oxr2wz.jpg"
              alt="Vue aérienne historique d'Anfa, Casablanca"
              fill className="object-cover"
              style={{ filter: "sepia(0.25) contrast(1.05)" }}
            />
            <Corners inset="inset-[14px_14px_38px]" />
            <figcaption className="absolute bottom-[10px] left-[14px] font-serif italic text-[13px] font-semibold text-[#3d3220]">
              Anfa, vue aérienne
              <span className="inline-block ml-[7px] px-2 py-[2px] bg-[#7d5215] text-[#fffaee] font-sans text-[8.5px] tracking-[.25em] font-bold not-italic align-middle">
                CIRCA 1940
              </span>
            </figcaption>
          </figure>

          {/* Cadastral map — bottom-left, −5° */}
          <figure
            className="absolute bottom-0 left-0 w-[60%] z-[3]
                       rotate-[-5deg] p-[12px] pb-[36px]
                       bg-[#f6efde]
                       shadow-[0_30px_60px_-20px_rgba(31,24,16,.40),0_4px_12px_rgba(31,24,16,.12)]
                       transition-[transform] duration-700 ease-[cubic-bezier(.2,.8,.2,1)]
                       hover:rotate-0 hover:scale-[1.04] hover:z-[5]"
            style={{ aspectRatio: "0.85/1" }}
          >
            <Image
              src="https://res.cloudinary.com/dofyrwzop/image/upload/q_auto/f_auto/v1780675603/PATRIMOINE_1_1_cmcxkc.png"
              alt="Plan cadastral vintage du quartier d'Anfa"
              fill className="object-cover"
              style={{ filter: "sepia(0.15) contrast(1.08)", objectPosition: "center 30%" }}
            />
            <Corners inset="inset-[12px_12px_36px]" />
            <figcaption className="absolute bottom-[10px] left-[12px] font-serif italic text-[12px] font-semibold text-[#3d3220]">
              Plan cadastral
              <span className="inline-block ml-[6px] px-[7px] py-[2px] bg-[#7d5215] text-[#fffaee] font-sans text-[8px] tracking-[.25em] font-bold not-italic align-middle">
                ANFA
              </span>
            </figcaption>
          </figure>

          {/* Seal */}
          <div className="absolute top-[6%] left-[5%] w-[88px] h-[88px] z-[6] ad-seal-wrap">
            <ArchiveSeal />
          </div>
        </div>
      </div>
    </Panel>
  )
}
