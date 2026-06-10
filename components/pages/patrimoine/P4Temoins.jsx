import Image from "next/image"
import { ScrollCue, Panel } from "./shared"

const WITNESSES = [
  { cls: "ad-w1", src: "/img/anfa-gaulle.jpg",    alt: "Mohammed V, Moulay Hassan, De Gaulle", role: "Souverain · Prince Héritier · Général", name: <>S.M. Mohammed V · <em>Moulay Hassan</em><br />Charles de Gaulle</> },
  { cls: "ad-w2", src: "/img/anfa-roosevelt.jpg", alt: "Franklin D. Roosevelt",                 role: "Président des États-Unis",             name: <>Franklin D. <em>Roosevelt</em></> },
  { cls: "ad-w3", src: "/img/anfa-churchill.jpg", alt: "Winston Churchill",                     role: "Premier Ministre Britannique",         name: <>Winston <em>Churchill</em></> },
  { cls: "ad-w4", src: "/img/anfa-generaux.jpg",  alt: "État-major allié",                      role: "L'État-Major Allié",                   name: <>Les <em>Chefs</em> de Guerre</> },
  { cls: "ad-w5", src: "/img/anfa-ambiance.jpg",  alt: "L'Hôtel d'Anfa, archives",              role: "Le seul témoin debout",                name: <>L'<em>édifice</em></> },
]

const DELAYS = ["ad-d2","ad-d3","ad-d3","ad-d4","ad-d5"]

export default function P4Temoins() {
  return (
    <Panel id="adp4">
      <div className="ad-scene-num">IV</div>
      <div className="ad-panel-inner">
        <div className="ad-p4-head">
          <div className="ad-pretitle ad-r">— Les témoins silencieux —</div>
          <span className="ad-qmark ad-r ad-d1 pb-4 pt-4">"</span>
          <div className="ad-big-quote ad-r ad-d2">
            Ces murs n'ont pas seulement abrité l'Histoire <em>— ils en furent les témoins silencieux.</em>
          </div>
        </div>
        <div className="ad-witnesses">
          {WITNESSES.map((w, i) => (
            <div key={i} className={`ad-w ${w.cls} ad-r ${DELAYS[i]}`}>
              <div style={{ position: "relative", width: "100%", height: "100%" }}>
                <Image src={w.src} alt={w.alt} fill className="object-cover" style={{ filter: "sepia(.25) contrast(1.05)" }} />
              </div>
              <div className="ad-w-meta">
                <div className="ad-role">{w.role}</div>
                <div className="ad-name">{w.name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ScrollCue />
    </Panel>
  )
}
