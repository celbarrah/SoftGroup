import { ScrollCue, Panel } from "./shared"

export default function P2Souffle() {
  return (
    <Panel id="adp2">
      {/* Background photo with cream veil — reference: .deco-bg + .deco-veil */}
      <div className="ad-deco-bg" />
      <div className="ad-deco-veil" />

      <div className="ad-scene-num">II</div>
      <div className="ad-panel-inner">
        <div className="ad-pretitle ad-r text-center">— Le souffle des lieux —</div>
        <h2 className="ad-p2-h2 ad-r ad-d1">
          Il est des lieux<br />
          qui <em>respirent</em> encore.
        </h2>
        <p className="ad-souffle-text italic ad-r ad-d2">
          Il est des lieux qui portent en eux le souffle de l&apos;Histoire — non comme un musée figé dans le temps,
          mais comme <strong>une présence vivante</strong>, une mémoire qui respire dans chaque courbe de pierre blanche.
        </p>
        <div className="ad-divider ad-r ad-d3" />
        <p className="ad-souffle-text ad-r ad-d3">
          Il est des lieux qui ne se réduisent pas à <strong>leurs murs</strong>. Ils portent le passage des hommes
          qui les ont traversés, les décisions qui ont changé le monde,{" "}
          <strong>les silences chargés d&apos;Histoire</strong>.
        </p>
      </div>
      <ScrollCue label="Continuer" />
    </Panel>
  )
}
