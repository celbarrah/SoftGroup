/**
 * Shared OG image builder — used by every opengraph-image.jsx
 * Returns JSX-compatible element tree for next/og ImageResponse.
 *
 * @param {Object} opts
 * @param {string} opts.title       — Main headline (large)
 * @param {string} [opts.subtitle]  — Secondary line (gold italic)
 * @param {string} [opts.eyebrow]   — Small uppercase label above title
 * @param {string[]} [opts.tags]    — Pill tags at bottom left
 */
export function buildOgElement({ title, subtitle, eyebrow, tags = [] }) {
  return {
    type: "div",
    props: {
      style: {
        background: "#0A1018",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "56px 70px",
        position: "relative",
        fontFamily: "Georgia, serif",
      },
      children: [
        /* ── Top: Logo ── */
        {
          type: "div",
          props: {
            style: { display: "flex", alignItems: "center", gap: 0 },
            children: [
              {
                type: "span",
                props: {
                  style: { color: "#ffffff", fontSize: 22, fontWeight: 700, letterSpacing: "0.06em" },
                  children: "SOFT",
                },
              },
              {
                type: "span",
                props: {
                  style: { color: "#ffffff", fontSize: 22, fontWeight: 300, letterSpacing: "0.06em" },
                  children: "GROUP",
                },
              },
              {
                type: "div",
                props: {
                  style: { width: 1, height: 20, background: "rgba(196,165,90,0.5)", marginLeft: 14, marginRight: 14 },
                },
              },
              {
                type: "span",
                props: {
                  style: { color: "rgba(255,255,255,0.4)", fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase" },
                  children: "Immobilier",
                },
              },
            ],
          },
        },

        /* ── Middle: Content ── */
        {
          type: "div",
          props: {
            style: { display: "flex", flexDirection: "column", gap: 16, flex: 1, justifyContent: "center" },
            children: [
              eyebrow && {
                type: "span",
                props: {
                  style: { color: "#C4A55A", fontSize: 12, letterSpacing: "0.32em", textTransform: "uppercase", fontWeight: 700 },
                  children: eyebrow,
                },
              },
              {
                type: "div",
                props: {
                  style: { width: 40, height: 2, background: "#C4A55A" },
                },
              },
              {
                type: "div",
                props: {
                  style: { color: "#ffffff", fontSize: 52, fontWeight: 300, lineHeight: 1.1, letterSpacing: "-0.02em", maxWidth: 800 },
                  children: title,
                },
              },
              subtitle && {
                type: "div",
                props: {
                  style: { color: "#C4A55A", fontSize: 28, fontWeight: 300, fontStyle: "italic", lineHeight: 1.2 },
                  children: subtitle,
                },
              },
            ].filter(Boolean),
          },
        },

        /* ── Bottom: Tags + URL ── */
        {
          type: "div",
          props: {
            style: { display: "flex", alignItems: "center", justifyContent: "space-between" },
            children: [
              {
                type: "div",
                props: {
                  style: { display: "flex", gap: 10 },
                  children: tags.map((tag, i) => ({
                    type: "span",
                    key: String(i),
                    props: {
                      style: {
                        color: "rgba(196,165,90,0.7)",
                        fontSize: 10,
                        letterSpacing: "0.26em",
                        textTransform: "uppercase",
                        border: "1px solid rgba(196,165,90,0.3)",
                        padding: "5px 10px",
                      },
                      children: tag,
                    },
                  })),
                },
              },
              {
                type: "span",
                props: {
                  style: { color: "rgba(255,255,255,0.25)", fontSize: 13, letterSpacing: "0.18em" },
                  children: "softgroup.ma",
                },
              },
            ],
          },
        },

        /* ── Decorative: gold bar top ── */
        {
          type: "div",
          props: {
            style: {
              position: "absolute",
              top: 0, left: 0, right: 0,
              height: 4,
              background: "linear-gradient(to right, #C4A55A, #e8c97a, #C4A55A)",
            },
          },
        },
      ],
    },
  }
}
