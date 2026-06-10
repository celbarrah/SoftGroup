/**
 * MapSection — Embedded Google Maps showing Softgroup's Casablanca office.
 * Used inside FooterCTA and FooterCTA-BTS.
 */
export default function MapSection() {
  return (
    <div className="mt-16 w-full max-w-3xl mx-auto overflow-hidden rounded-sm shadow-lg border border-gold/20">
      {/* <div className="bg-[#0A1018] px-5 py-3 flex items-center gap-3 border-b border-gold/15">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
          strokeLinecap="round" strokeLinejoin="round" width="14" height="14"
          className="text-gold/70 shrink-0">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
          <circle cx="12" cy="10" r="3"/>
        </svg>
        <p className="font-sans text-[11px] tracking-[0.22em] uppercase text-white/50">
          101 Boulevard de la Corniche, Casablanca
        </p>
      </div> */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3325.1234!2d-7.6516!3d33.5979!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cd79a97a0b59%3A0x28a0d28028208fd4!2s101%20Bd%20de%20la%20Corniche%2C%20Casablanca!5e0!3m2!1sfr!2sma!4v1700000000000"
        width="100%"
        height="400"
        style={{ border: 0, display: "block" }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Softgroup Immobilier — 101 Boulevard de la Corniche, Casablanca"
        aria-label="Carte de localisation du siège de Softgroup Immobilier"
      />
    </div>
  )
}
