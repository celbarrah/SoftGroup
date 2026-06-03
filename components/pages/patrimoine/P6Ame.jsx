import Image from "next/image"
import { ScrollCue, Panel } from "./shared"

const PILLARS = [
  { roman: "— I —",   src: "/img/anfa-pillar-1.jpg", alt: "Terrasse aux colonnes courbes — Hôtel d'Anfa",           title: <>La <em>Courbe</em></>,     body: "Les rotondes en demi-cercle dessinent le dialogue entre rigueur et grâce — signature inimitable de Casablanca.", delay: "ad-d2" },
  { roman: "— II —",  src: "/img/anfa-pillar-2.jpg", alt: "Sol circulaire en terrazzo — motif géométrique Art Déco", title: <>La <em>Géométrie</em></>,  body: "Symétries précises, losanges, motifs répétés : la beauté naît d'un ordre invisible, hérité de Paris 1925.",      delay: "ad-d3" },
  { roman: "— III —", src: "/img/anfa-pillar-3.jpg", alt: "Porte d'entrée Art Déco — vitraux géométriques",          title: <>La <em>Lumière</em></>,    body: "Lignes horizontales, vastes ouvertures, blanc immaculé : un édifice taillé pour capter le soleil atlantique.",   delay: "ad-d4" },
  { roman: "— IV —",  src: "/img/anfa-pillar-4.jpg", alt: "Ferronnerie Art Déco — détail de balustrade",             title: <>Le <em>Détail</em></>,     body: "Sols en terrazzo, ferronneries précises, motifs en losanges : l'ornement n'est jamais gratuit, toujours pensé.",  delay: "ad-d5" },
]

export default function P6Ame() {
  return (
    <Panel id="adp6">
      <div className="ad-scene-num">VI</div>
      <div className="ad-panel-inner">
        <div className="ad-p6-head">
          <div className="ad-pretitle ad-r">— Une langue, une géométrie, une âme —</div>
          <h2 className="ad-p6-h2 ad-r ad-d1">L'<em>âme</em> Art Déco</h2>
          <div className="ad-p6-tag ad-r ad-d2">— Restauré dans l'esprit, conservé dans l'âme. —</div>
        </div>
        <div className="ad-pillars">
          {PILLARS.map((p, i) => (
            <div key={i} className={`ad-pillar ad-r ${p.delay}`}>
              <div className="ad-photo">
                <Image src={p.src} alt={p.alt} fill className="object-cover" style={{ filter: "sepia(.2) contrast(1.04)" }} />
                <div className="ad-roman">{p.roman}</div>
              </div>
              <div className="ad-text-area">
                <h4>{p.title}</h4>
                <p>{p.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ScrollCue />
    </Panel>
  )
}
