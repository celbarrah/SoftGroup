"use client"
import { Arrow, Panel } from "./shared"

export default function P8Finale() {
  return (
    <Panel id="adp8">
      {/* Background layers */}
      <div className="ad-finale-bg" style={{ backgroundImage: "url('/img/anfa-facade.jpg')" }} />
      <div className="ad-finale-veil" />
      <div className="ad-finale-rays" />

      <div className="ad-scene-num">VIII</div>

      <div className="ad-panel-inner">
        <div className="ad-small-cap ad-r">— Notre signature —</div>

        <h2 className="ad-p8-h2 ad-r ad-d1">
          Entre <em>Mémoire</em><br />
          &amp; Avenir
        </h2>

        <div className="ad-finale-line ad-r ad-d2" />
        <div className="ad-softgroup-name ad-r ad-d2">SOFTGROUP IMMOBILIER</div>

        {/* Gardien statement */}
        <div className="ad-gardien-block ad-r ad-d3">
          <div className="ad-gs-setup">Gardien d'un</div>
          <div className="ad-gs-hero ad-shimmer">Héritage Vivant</div>
        </div>

        <p className="ad-finale-body ad-r ad-d4">
          <strong>Perpétuer des récits</strong>, c'est prendre soin de la mémoire collective de Casablanca.
        </p>
        <p className="ad-finale-body ad-r ad-d5">
          Nous mesurons la profondeur d'un lieu — son histoire, son caractère, sa résonance dans le temps long.
        </p>

        {/* Climactic invite */}
        <div className="ad-finale-invite ad-r ad-d6">
          SOFTGROUP vous invite à habiter
          <span className="ad-invite-hero ad-shimmer">un Morceau de l'Histoire</span>
          de Casablanca.
        </div>

        <a href="https://soft-group.vercel.app" className="ad-finale-cta ad-r ad-d6">
          Découvrir SOFTGROUP
          <Arrow />
        </a>

        <div className="ad-finale-footer ad-r ad-d7">
          101, Boulevard de la Corniche
          <span className="ad-sep">◆</span>
          Casablanca
          <span className="ad-sep">◆</span>
          +212 522 399 400
        </div>
      </div>
    </Panel>
  )
}
