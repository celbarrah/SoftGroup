import Image from "next/image"
import { ScrollCue, Panel } from "./shared"

export default function P3Anfa() {
  return (
    <Panel id="adp3">
      <div className="ad-scene-num">III</div>
      <div className="ad-panel-inner">
        <div className="ad-p3-grid">
          <div className="ad-p3-photo ad-rs">
            <Image src="/img/anfa-1943.jpg" alt="S.M. Mohammed V, Moulay Hassan et Charles de Gaulle, Anfa 1943" fill className="object-cover" style={{ filter: "sepia(.35) contrast(1.06) brightness(.96)" }} />
            <div className="ad-corner tl" /><div className="ad-corner br" />
            <div className="ad-stamp">Anfa · Janvier 1943</div>
          </div>
          <div className="ad-p3-text">
            <div className="ad-pretitle ad-r">— Janvier 1943 · Hôtel d'Anfa —</div>
            <h2 className="ad-r ad-d1 ">La Conférence d'<em>Anfa</em></h2>
            <p className="ad-r ad-d2">
              Pendant quatorze jours, <strong>Franklin D. Roosevelt</strong> et <strong>Winston Churchill</strong>,
              accompagnés du général <strong>Charles de Gaulle</strong>, se réunissent à l'Hôtel d'Anfa, en
              présence de Sa Majesté <strong>Mohammed V</strong> et du jeune prince héritier <strong>Moulay Hassan</strong>.
            </p>
            <p className="ad-r ad-d3">
              À l'ordre du jour : l'avenir des Alliés, la stratégie contre les puissances de l'Axe, et les
              modalités d'un débarquement qui changera le cours de l'Histoire — celui de Normandie, en juin 1944.
            </p>
            <p className="ad-r ad-d4 ad-p3-italic">
              Cette conférence ne fut pas un sommet de plus.<br />Elle fut un tournant.
            </p>
          </div>
        </div>
      </div>
      <ScrollCue />
    </Panel>
  )
}
