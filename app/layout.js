import { Cormorant_Garamond, DM_Sans, Cinzel, Limelight } from "next/font/google"
import Script from "next/script"
import "./globals.css"
import ConditionalLayout from "@/components/providers/ConditionalLayout"

/* ─────────────────────────────────────────────────────────
   FONTS
   Cormorant Garamond → serif luxueux pour les titres
   DM Sans            → géométrique propre pour le corps
   Cinzel             → display Art Déco — patrimoine page
   Limelight          → Art Déco display optionnel
   ───────────────────────────────────────────────────────── */
const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets:  ["latin"],
  weight:   ["300", "400", "500", "600"],
  style:    ["normal", "italic"],
  display:  "swap",
})

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets:  ["latin"],
  weight:   ["300", "400", "500", "600", "700"],
  display:  "swap",
})

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets:  ["latin"],
  weight:   ["400", "500", "600", "700"],
  display:  "swap",
})

const limelight = Limelight({
  variable: "--font-limelight",
  subsets:  ["latin"],
  weight:   ["400"],
  display:  "swap",
})

/* ─────────────────────────────────────────────────────────
   TRACKING IDs
   ───────────────────────────────────────────────────────── */
const GTM_ID  = "GTM-PSJ4JBHS"
const GA4_ID  = "G-GTM2WQVX6J"
const FB_PX   = "2375036423025939"

export const metadata = {
  metadataBase: new URL("https://www.softgroup.ma"),

  title: {
    default:  "Softgroup Immobilier | L'Immobilier d'Excellence au Maroc",
    template: "%s | Softgroup Immobilier",
  },
  description:
    "Foncière d'exception au Maroc — entrepôts logistiques, bureaux haut de gamme, résidentiel de prestige, retail et terrains à Casablanca, Tanger, Kénitra et Agadir.",
  keywords:
    "immobilier maroc, entrepôt logistique casablanca, bureau prestige maroc, résidentiel luxe maroc, build-to-suit maroc, softgroup immobilier",

  authors: [{ name: "Softgroup Immobilier", url: "https://www.softgroup.ma" }],
  creator: "Softgroup Immobilier",
  publisher: "Softgroup Immobilier",

  openGraph: {
    type:     "website",
    locale:   "fr_MA",
    url:      "https://www.softgroup.ma",
    siteName: "Softgroup Immobilier",
    title:    "Softgroup Immobilier | L'Immobilier d'Excellence au Maroc",
    description:
      "Foncière d'exception au Maroc — entrepôts logistiques, bureaux haut de gamme, résidentiel de prestige, retail et terrains à Casablanca, Tanger, Kénitra et Agadir.",
  },

  twitter: {
    card:        "summary_large_image",
    site:        "@softgroup_immo",
    creator:     "@softgroup_immo",
    title:       "Softgroup Immobilier | L'Immobilier d'Excellence au Maroc",
    description: "Foncière d'exception au Maroc — entrepôts logistiques, bureaux haut de gamme, résidentiel de prestige, retail et terrains.",
  },

  robots: {
    index:               true,
    follow:              true,
    "max-image-preview": "large",
    "max-snippet":       -1,
    "max-video-preview": -1,
    googleBot: {
      index:               true,
      follow:              true,
      "max-image-preview": "large",
      "max-snippet":       -1,
    },
  },

  icons: {
    icon:        "/favicon.ico",
    shortcut:    "/favicon.ico",
    apple:       "/apple-touch-icon.png",
  },

  alternates: {
    canonical: "https://www.softgroup.ma",
    types: { "application/rss+xml": "https://www.softgroup.ma/feed.xml" },
  },

  other: {
    "geo.region":    "MA-01",
    "geo.placename": "Casablanca, Maroc",
    "geo.position":  "33.5731;-7.5898",
    ICBM:            "33.5731, -7.5898",
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${cormorant.variable} ${dmSans.variable} ${cinzel.variable} ${limelight.variable}`}>
      <head>
        {/* ── Google Tag Manager — <head> snippet ── */}
        <Script id="gtm-head" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${GTM_ID}');`}
        </Script>

        {/* ── Google Analytics 4 ── */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA4_ID}');`}
        </Script>

        {/* ── Facebook Pixel ── */}
        <Script id="fb-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window,document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '${FB_PX}');
          fbq('track', 'PageView');`}
        </Script>
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height="1" width="1" style={{ display: "none" }}
            src={`https://www.facebook.com/tr?id=${FB_PX}&ev=PageView&noscript=1`}
            alt=""
          />
        </noscript>
      </head>

      <body>
        {/* ── Google Tag Manager — <body> noscript ── */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0" width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <ConditionalLayout>
          {children}
        </ConditionalLayout>
      </body>
    </html>
  )
}
