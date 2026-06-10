/* ═══════════════════════════════════════════════════════════════
   SEO / GEO / AEO — Softgroup Immobilier
   Single source of truth for all metadata, schema builders,
   and AI-crawler configuration.
   ═══════════════════════════════════════════════════════════════ */

/* ── Site constants ─────────────────────────────────────────── */
export const SITE = {
  name:       "Softgroup Immobilier",
  holding:    "Softgroup Holding",
  tagline:    "L'Immobilier d'Excellence au Maroc",
  url:        "https://www.softgroup.ma",
  logo:       "https://www.softgroup.ma/img/softgroupe.png",
  locale:     "fr_MA",
  language:   "fr",
  phone:      "+212661978104",
  phoneDisplay: "+212 661 978 104",
  email:      "immo.contact@softgroup.ma",
  foundingDate: "1918",
  address: {
    street:      "101 Boulevard de la Corniche",
    city:        "Casablanca",
    region:      "Grand Casablanca-Settat",
    postalCode:  "20100",
    countryCode: "MA",
    country:     "Maroc",
  },
  geo: {
    latitude:  "33.5731",
    longitude: "-7.5898",
  },
  social: {
    facebook:  "https://www.facebook.com/profile.php?id=61590664766833",
    instagram: "https://www.instagram.com/softgroup_immobilier/",
    linkedin:  "https://www.linkedin.com/company/softgroup.ma",
  },
  sectors: ["Logistique", "Bureaux", "Résidentiel de prestige", "Retail", "Terrains"],
  cities:  ["Casablanca", "Tanger", "Kénitra", "Agadir"],
}

/* ── Core metadata builder ──────────────────────────────────── */
/**
 * buildMetadata({ title, description, path, type?, keywords?, noIndex?, article? })
 *
 * Returns a Next.js-compatible metadata object. Pair with an
 * opengraph-image.jsx at the same route for automatic OG images.
 */
export function buildMetadata({
  title,
  description,
  path,
  type      = "website",
  keywords  = [],
  noIndex   = false,
  article,
}) {
  const canonical = `${SITE.url}${path}`

  return {
    title,
    description,
    keywords: keywords.join(", "),

    alternates: {
      canonical,
      types: { "application/rss+xml": `${SITE.url}/feed.xml` },
    },

    openGraph: {
      title,
      description,
      url:      canonical,
      siteName: SITE.name,
      locale:   SITE.locale,
      type,
      ...(article && {
        publishedTime: article.publishedTime,
        modifiedTime:  article.modifiedTime,
        authors:       [article.author || SITE.name],
        tags:          article.tags || [],
      }),
    },

    twitter: {
      card:        "summary_large_image",
      title,
      description,
    },

    robots: noIndex
      ? { index: false, follow: false }
      : {
          index:             true,
          follow:            true,
          "max-image-preview": "large",
          "max-snippet":       -1,
          "max-video-preview": -1,
        },

    other: {
      "geo.region":    "MA-01",
      "geo.placename": "Casablanca, Maroc",
      "geo.position":  `${SITE.geo.latitude};${SITE.geo.longitude}`,
      ICBM:            `${SITE.geo.latitude}, ${SITE.geo.longitude}`,
    },
  }
}

/* ── JSON-LD schema builders ─────────────────────────────────── */

/** Organization + RealEstateAgent — used site-wide */
export function orgSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type":     ["Organization", "RealEstateAgent"],
        "@id":       `${SITE.url}/#organization`,
        name:        SITE.name,
        legalName:   SITE.holding,
        url:         SITE.url,
        logo: {
          "@type": "ImageObject",
          url:     SITE.logo,
        },
        description: "Softgroup Immobilier est la filiale immobilière de Softgroup Holding, acteur de référence dans l'immobilier logistique, tertiaire, résidentiel de prestige, retail et foncier au Maroc depuis plus de 35 ans.",
        foundingDate: SITE.foundingDate,
        address: {
          "@type":          "PostalAddress",
          streetAddress:    SITE.address.street,
          addressLocality:  SITE.address.city,
          addressRegion:    SITE.address.region,
          postalCode:       SITE.address.postalCode,
          addressCountry:   SITE.address.countryCode,
        },
        geo: {
          "@type":    "GeoCoordinates",
          latitude:   SITE.geo.latitude,
          longitude:  SITE.geo.longitude,
        },
        contactPoint: {
          "@type":            "ContactPoint",
          telephone:          SITE.phone,
          email:              SITE.email,
          contactType:        "customer service",
          availableLanguage:  ["French", "Arabic"],
        },
        areaServed: SITE.cities.map(city => ({
          "@type": "City",
          name:    city,
          containedInPlace: { "@type": "Country", name: "Maroc" },
        })),
        sameAs: Object.values(SITE.social),
        knowsAbout: [
          "Immobilier logistique au Maroc",
          "Entrepôts industriels Casablanca",
          "Bureaux haut de gamme Maroc",
          "Résidentiel de prestige Casablanca",
          "Build-to-Suit Maroc",
          "Property management Maroc",
        ],
      },
    ],
  }
}

/** WebSite — homepage only */
export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type":    "WebSite",
    "@id":      `${SITE.url}/#website`,
    name:       SITE.name,
    url:        SITE.url,
    inLanguage: SITE.language,
    publisher:  { "@id": `${SITE.url}/#organization` },
    potentialAction: {
      "@type":  "SearchAction",
      target: {
        "@type":       "EntryPoint",
        urlTemplate:   `${SITE.url}/actualites?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  }
}

/** BreadcrumbList — all non-home pages */
export function breadcrumbSchema(items) {
  return {
    "@context":       "https://schema.org",
    "@type":          "BreadcrumbList",
    itemListElement:  items.map((item, i) => ({
      "@type":    "ListItem",
      position:   i + 1,
      name:       item.name,
      item:       `${SITE.url}${item.path}`,
    })),
  }
}

/** Generic WebPage — used on all pages */
export function webPageSchema({ title, description, path, datePublished, dateModified }) {
  return {
    "@context":   "https://schema.org",
    "@type":      "WebPage",
    "@id":        `${SITE.url}${path}#webpage`,
    url:          `${SITE.url}${path}`,
    name:         title,
    description,
    inLanguage:   SITE.language,
    isPartOf:     { "@id": `${SITE.url}/#website` },
    about:        { "@id": `${SITE.url}/#organization` },
    ...(datePublished && { datePublished }),
    ...(dateModified  && { dateModified }),
  }
}

/** Service schema — for service pages */
export function serviceSchema({ name, description, path, serviceType }) {
  return {
    "@context":      "https://schema.org",
    "@type":         "Service",
    "@id":           `${SITE.url}${path}#service`,
    name,
    description,
    url:             `${SITE.url}${path}`,
    serviceType,
    provider:        { "@id": `${SITE.url}/#organization` },
    areaServed:      SITE.cities.map(c => ({ "@type": "City", name: c })),
    availableLanguage: ["French", "Arabic"],
  }
}

/** NewsArticle schema — blog article pages */
export function articleSchema({ article, path }) {
  // Try to parse date — article.date is like "29 mai 2026"
  const frMonths = {
    janvier: "01", février: "02", mars: "03", avril: "04",
    mai: "05", juin: "06", juillet: "07", août: "08",
    septembre: "09", octobre: "10", novembre: "11", décembre: "12",
  }
  let isoDate = new Date().toISOString()
  if (article.date) {
    const parts = article.date.toLowerCase().split(" ")
    if (parts.length === 3) {
      const month = frMonths[parts[1]] || "01"
      isoDate = `${parts[2]}-${month}-${parts[0].padStart(2, "0")}T00:00:00+01:00`
    }
  }

  return {
    "@context":    "https://schema.org",
    "@type":       "NewsArticle",
    "@id":         `${SITE.url}${path}#article`,
    headline:      article.title,
    description:   article.excerpt,
    url:           `${SITE.url}${path}`,
    image:         article.image,
    datePublished: isoDate,
    dateModified:  isoDate,
    inLanguage:    SITE.language,
    articleSection: article.tag,
    keywords:      article.tag,
    author: {
      "@type": "Organization",
      "@id":   `${SITE.url}/#organization`,
      name:    SITE.name,
    },
    publisher: {
      "@type": "Organization",
      "@id":   `${SITE.url}/#organization`,
      name:    SITE.name,
      logo: {
        "@type": "ImageObject",
        url:     SITE.logo,
      },
    },
    mainEntityOfPage: { "@id": `${SITE.url}${path}#webpage` },
  }
}

/** LocalBusiness — homepage */
export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type":    ["LocalBusiness", "RealEstateAgent"],
    "@id":      `${SITE.url}/#localbusiness`,
    name:       SITE.name,
    image:      SITE.logo,
    url:        SITE.url,
    telephone:  SITE.phone,
    email:      SITE.email,
    address: {
      "@type":          "PostalAddress",
      streetAddress:    SITE.address.street,
      addressLocality:  SITE.address.city,
      postalCode:       SITE.address.postalCode,
      addressCountry:   SITE.address.countryCode,
    },
    geo: {
      "@type":    "GeoCoordinates",
      latitude:   SITE.geo.latitude,
      longitude:  SITE.geo.longitude,
    },
    openingHoursSpecification: {
      "@type":        "OpeningHoursSpecification",
      dayOfWeek:      ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens:          "09:00",
      closes:         "18:00",
    },
    priceRange: "€€€",
  }
}

/** FAQ schema */
export function faqSchema(faqs) {
  return {
    "@context": "https://schema.org",
    "@type":    "FAQPage",
    mainEntity: faqs.map(({ question, answer }) => ({
      "@type":          "Question",
      name:             question,
      acceptedAnswer: {
        "@type": "Answer",
        text:    answer,
      },
    })),
  }
}
