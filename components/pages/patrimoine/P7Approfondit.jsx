"use client"
import Image from "next/image"
import { HFCorner, PatrimoineSeal, ScrollCue, Panel } from "./shared"

export default function P7Approfondit() {
  return (
    <Panel id="adp7">
      <div className="ad-scene-num">VII</div>
      <div className="ad-panel-inner">
        <div className="ad-p7-grid">

          {/* ── Image column ── */}
          <div className="ad-p7-image ad-rs">
            <Image
              src="/img/anfa-interieur.jpg"
              alt="Intérieur Art Déco restauré — escalier en fer forgé de l'Hôtel d'Anfa"
              fill
              sizes="50vw"
              className="object-cover object-center"
            />
            <div className="ad-corner tl" />
            <div className="ad-corner br" />
            <div className="ad-seal-overlay">
              <PatrimoineSeal size="md" />
            </div>
          </div>

          {/* ── Text column ── */}
          <div className="ad-p7-text">
            <div className="ad-pretitle ad-r">— Une mémoire qui respire —</div>
            <h2 className="ad-r ad-d1">
              Un bâtiment classé<br />
              <em>ne vieillit pas.</em><br />
              Il s'approfondit.
            </h2>
            <p className="ad-r ad-d2">
              L&apos;annexe de l&apos;Hôtel d&apos;Anfa a traversé les décennies sans perdre son âme. Façade blanche aux lignes
              courbes, terrasses ouvertes sur l&apos;horizon atlantique, escaliers en colimaçon en fer forgé — tout
              témoigne d&apos;un soin architectural qui{" "}
              <strong className="ad-gold-text">défie le temps</strong>.
            </p>
            <p className="ad-r ad-d3">
              Restaurée dans le plus strict respect de son esprit Art Déco originel, elle accueille
              aujourd&apos;hui, sous la signature{" "}
              <strong className="ad-gold-text">SOFTGROUP</strong>, une nouvelle vie.
            </p>
            <div className="ad-pull ad-r ad-d4">
              Non pas pour effacer ce qui fut, mais pour laisser{" "}
              <em>la mémoire continuer de respirer</em>.
            </div>
          </div>

        </div>
      </div>
      <ScrollCue />
    </Panel>
  )
}
