import Image from "next/image"
import { PatrimoineSeal, ScrollCue, Panel } from "./shared"

export default function P5Adresse() {
  return (
    <Panel id="adp5">
      <div className="ad-scene-num">V</div>
      <div className="ad-panel-inner">
        <div className="ad-p5-split">
          <div className="ad-p5-image ad-rs">
            <Image src="/img/anfa-villa.jpg" alt="L'annexe Art Déco de l'Hôtel d'Anfa" fill className="object-cover" style={{ filter: "sepia(.2) contrast(1.04)" }} />
            <div className="ad-corner tl" /><div className="ad-corner br" />
            <div className="ad-seal-overlay"><PatrimoineSeal size="md" /></div>
          </div>
          <div className="ad-p5-text">
            <div className="ad-pretitle ad-r">— Une adresse, un destin —</div>
            <h2 className="ad-r ad-d1">Ses murs<br />se <em>souviennent</em>.</h2>
            <div className="ad-lede ad-r ad-d2">
              Sur la colline d'Anfa, dominant la ville et l'océan, s'élève un édifice que le temps n'a pas su
              effacer. Ses lignes parlent encore. Ses murs se souviennent.
            </div>
            <div className="ad-h3 ad-r ad-d3">La même pierre. Un autre monde.</div>
            <p className="ad-r ad-d4">
              Classée patrimoine historique de la Ville de Casablanca, l&apos;annexe de l&apos;Hôtel d&apos;Anfa est{" "}
              <strong className="ad-gold-text">la gardienne d&apos;une mémoire collective</strong>.
              Elle porte les empreintes invisibles de ceux qui ont changé le cours du monde.
            </p>
            <p className="ad-r ad-d5">
              Restaurée dans la fidélité absolue à son esprit Art Déco, elle conjugue aujourd&apos;hui la rigueur
              originelle avec la sensibilité d&apos;une époque nouvelle.
            </p>
            <p className="ad-p5-italic ad-r ad-d6">
              La colline d&apos;Anfa continue de dominer — et de témoigner.
            </p>
          </div>
        </div>
      </div>
      <ScrollCue />
    </Panel>
  )
}
