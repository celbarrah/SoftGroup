/* ─────────────────────────────────────────────────────────────
   Articles data — Soft Group Actualités
   Add new articles here. slug must be URL-safe and unique.
   ───────────────────────────────────────────────────────────── */

export const ARTICLES = [
  {
    id:       "parc-logistique-casablanca-2027",
    slug:     "parc-logistique-casablanca-2027",
    tag:      "Développement",
    tagColor: "bg-[rgba(196,165,90,0.15)] text-gold border-gold/30",
    date:     "29 mai 2026",
    source:   "Magazine Challenge",
    readTime: "3 min",
    featured: true,
    image:    "https://res.cloudinary.com/dofyrwzop/image/upload/q_auto/f_auto/v1780674959/PHOTO_ARTICLE_fyotoy.webp", // replace with actual article image
    title:    "Soft Group renforce son développement avec un nouveau parc logistique de 100 000 m² à Casablanca",
    excerpt:  "Soft Group poursuit sa stratégie de développement dans l'immobilier logistique avec le lancement d'un nouveau parc industriel situé au sud de Casablanca, représentant un investissement de 500 millions de dirhams.",
    body: [
      "Soft Group poursuit sa stratégie de développement dans l'immobilier logistique avec le lancement d'un nouveau parc industriel et logistique situé au sud de Casablanca, à proximité de Lissasfa.",
      "Ce projet, représentant un investissement de 500 millions de dirhams, viendra enrichir l'offre nationale en infrastructures logistiques modernes et répondra aux besoins croissants des opérateurs industriels, distributeurs et acteurs du e-commerce.",
      "Prévu pour une mise en exploitation début 2027, le futur parc développera plus de 100 000 m² de surfaces dédiées aux activités logistiques et industrielles. Son emplacement stratégique permettra un accès rapide aux principaux axes autoroutiers, aux zones industrielles de Casablanca ainsi qu'aux infrastructures portuaires et aéroportuaires de la région.",
      "Ce projet s'inscrit dans la continuité des réalisations de Soft Group dans le secteur de l'immobilier logistique, notamment à Casablanca, Kénitra et Tanger. Avec cette nouvelle plateforme, le groupe consolide sa position parmi les acteurs de référence du développement de parcs industriels et logistiques au Maroc.",
      "Au-delà de l'investissement immobilier, cette initiative contribuera au renforcement de l'écosystème logistique national, à la création d'emplois et à l'amélioration de la compétitivité des entreprises opérant au Maroc.",
      "À travers ce nouveau projet, Soft Group confirme sa volonté d'accompagner la croissance économique du Royaume en développant des infrastructures performantes, durables et adaptées aux exigences des chaînes logistiques modernes.",
    ],
    sourceLabel: "Magazine Challenge — « Soft Group investit 500 MDH dans un nouveau parc logistique à Casablanca »",
    sourceHref:  "#",
    stats: [
      { value: "100 000 m²", label: "Surfaces logistiques" },
      { value: "500 MDH",    label: "Investissement total" },
      { value: "2027",       label: "Mise en exploitation" },
      { value: "Lissasfa",   label: "Localisation" },
    ],
  },
]

export function getArticleBySlug(slug) {
  return ARTICLES.find(a => a.slug === slug) ?? null
}
