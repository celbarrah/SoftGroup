import { Resend } from "resend"

/* ─────────────────────────────────────────────────────────────
   POST /api/contact
   Sends lead emails to immo.contact@softgroup.ma via Resend.

   .env.local:
     RESEND_API_KEY=re_xxxxxxxxxxxx   ← your key from resend.com

   Requires: softgroup.ma domain verified in Resend dashboard
   (Settings → Domains → Add Domain → add DNS TXT/MX records)
   ───────────────────────────────────────────────────────────── */

const resend   = new Resend(process.env.RESEND_API_KEY)
const EMAIL_TO = "immo.contact@softgroup.ma"
const EMAIL_FROM = "noreply@softgroup.ma"

/* ── Validators ─────────────────────────────────────────────── */
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim())
}

function isValidPhone(phone) {
  if (!phone) return false
  const cleaned = phone.replace(/[\s\-().+]/g, "")
  return /^(0[67]\d{8}|212[67]\d{8}|\+212[67]\d{8})$/.test(cleaned)
}

/* ── Email template ──────────────────────────────────────────── */
function buildEmailHtml({ fullName, societe, email, tel, type, message }) {
  const field = (label, value) =>
    value ? `
    <tr>
      <td style="padding:10px 0;border-bottom:1px solid rgba(196,165,90,0.15);vertical-align:top;width:38%">
        <span style="font-family:sans-serif;font-size:9px;letter-spacing:0.22em;text-transform:uppercase;color:#9c7e3a;font-weight:700">${label}</span>
      </td>
      <td style="padding:10px 0 10px 16px;border-bottom:1px solid rgba(196,165,90,0.15);vertical-align:top">
        <span style="font-family:Georgia,serif;font-size:14px;color:#1a140a">${value}</span>
      </td>
    </tr>` : ""

  return `<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>Nouvelle demande — Soft Group</title>
</head>
<body style="margin:0;padding:0;background:#f0ebe0;font-family:Georgia,serif">

  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f0ebe0;padding:40px 20px">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:2px;overflow:hidden;box-shadow:0 4px 32px rgba(0,0,0,0.10)">

        <!-- GOLD TOP BORDER -->
        <tr><td style="height:4px;background:linear-gradient(to right,#C4A55A,#e8c97a,#C4A55A)"></td></tr>

        <!-- HEADER -->
        <tr>
          <td style="background:#0A1018;padding:36px 40px">
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td>
                  <!-- Logo text -->
                  <div style="margin-bottom:20px">
                    <span style="font-family:Georgia,serif;font-size:20px;font-weight:700;color:#ffffff;letter-spacing:0.04em">SOFT</span>
                    <span style="font-family:Georgia,serif;font-size:20px;font-weight:300;color:#ffffff;letter-spacing:0.04em">GROUP</span>
                    <div style="font-family:sans-serif;font-size:8px;letter-spacing:0.35em;text-transform:uppercase;color:rgba(255,255,255,0.35);margin-top:3px">Immobilier</div>
                  </div>
                  <!-- Divider -->
                  <div style="width:40px;height:1px;background:#C4A55A;margin-bottom:20px"></div>
                  <!-- Title -->
                  <h1 style="margin:0;font-family:Georgia,serif;font-size:22px;font-weight:300;color:#ffffff;letter-spacing:-0.01em;line-height:1.2">Nouvelle demande<br>de visite</h1>
                  <p style="margin:10px 0 0;font-family:sans-serif;font-size:10px;letter-spacing:0.22em;text-transform:uppercase;color:rgba(255,255,255,0.35)">Formulaire de contact — softgroup.ma</p>
                </td>
                <!-- Gold accent square -->
                <td align="right" valign="top">
                  <div style="width:56px;height:56px;border:1px solid rgba(196,165,90,0.3);display:flex;align-items:center;justify-content:center">
                    <div style="width:32px;height:32px;background:rgba(196,165,90,0.15);border:1px solid rgba(196,165,90,0.5)"></div>
                  </div>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- BADGE -->
        <tr>
          <td style="background:#C4A55A;padding:10px 40px">
            <span style="font-family:sans-serif;font-size:9px;letter-spacing:0.3em;text-transform:uppercase;font-weight:700;color:#0A1018">
              Lead entrant · ${new Date().toLocaleDateString("fr-FR", { day:"2-digit", month:"long", year:"numeric" })}
            </span>
          </td>
        </tr>

        <!-- BODY -->
        <tr>
          <td style="padding:36px 40px 28px;background:#ffffff">
            <table width="100%" cellpadding="0" cellspacing="0">
              ${field("Nom complet", fullName)}
              ${field("Société", societe)}
              ${field("Email", `<a href="mailto:${email}" style="color:#C4A55A;text-decoration:none">${email}</a>`)}
              ${field("Téléphone", tel ? `<a href="tel:${tel}" style="color:#C4A55A;text-decoration:none">${tel}</a>` : null)}
              ${field("Type d'espace", type)}
            </table>

            ${message ? `
            <!-- Message block -->
            <div style="margin-top:28px;background:#faf5e8;border-left:3px solid #C4A55A;border-radius:0 2px 2px 0;padding:20px 24px">
              <div style="font-family:sans-serif;font-size:9px;letter-spacing:0.22em;text-transform:uppercase;color:#9c7e3a;font-weight:700;margin-bottom:10px">Message / Projet</div>
              <p style="margin:0;font-family:Georgia,serif;font-size:14px;color:#2a1f0f;line-height:1.8;font-style:italic">${message.replace(/\n/g, "<br>")}</p>
            </div>` : ""}
          </td>
        </tr>

        <!-- REPLY CTA -->
        <tr>
          <td style="padding:0 40px 36px;background:#ffffff">
            <table cellpadding="0" cellspacing="0">
              <tr>
                <td style="background:#C4A55A;padding:12px 28px;border-radius:1px">
                  <a href="mailto:${email}" style="font-family:sans-serif;font-size:10px;letter-spacing:0.22em;text-transform:uppercase;font-weight:700;color:#0A1018;text-decoration:none">
                    Répondre au lead →
                  </a>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- FOOTER -->
        <tr>
          <td style="background:#f5f0e8;padding:20px 40px;border-top:1px solid rgba(196,165,90,0.2)">
            <p style="margin:0;font-family:sans-serif;font-size:10px;letter-spacing:0.14em;text-transform:uppercase;color:#9c7e3a">
              Soft Group Immobilier &nbsp;·&nbsp; immo.contact@softgroup.ma &nbsp;·&nbsp; softgroup.ma
            </p>
          </td>
        </tr>

        <!-- GOLD BOTTOM BORDER -->
        <tr><td style="height:2px;background:linear-gradient(to right,transparent,#C4A55A,transparent)"></td></tr>

      </table>
    </td></tr>
  </table>

</body>
</html>`
}

/* ── Handler ─────────────────────────────────────────────────── */
export async function POST(request) {
  try {
    const body = await request.json()
    const { nom, prenom, societe, email, tel, type, message } = body

    // Validation
    const errors = {}
    if (!nom?.trim())     errors.nom     = "Le nom est requis"
    if (!prenom?.trim())  errors.prenom  = "Le prénom est requis"
    if (!societe?.trim()) errors.societe = "La société est requise"
    if (!email?.trim())   errors.email   = "L'email est requis"
    else if (!isValidEmail(email)) errors.email = "Format d'email invalide"
    if (!tel?.trim())     errors.tel     = "Le téléphone est requis"
    else if (!isValidPhone(tel))   errors.tel   = "Format invalide (ex: 06 XX XX XX XX)"
    if (!type?.trim())    errors.type    = "Le type d'espace est requis"
    if (!message?.trim()) errors.message = "Le message est requis"

    if (Object.keys(errors).length > 0) {
      return Response.json({ success: false, errors }, { status: 422 })
    }

    const fullName = `${prenom.trim()} ${nom.trim()}`

    await resend.emails.send({
      from:    EMAIL_FROM,
      to:      EMAIL_TO,
      replyTo: email.trim(),
      subject: `[Lead] ${fullName} — ${type}`,
      html:    buildEmailHtml({
        fullName,
        societe: societe?.trim() || null,
        email:   email.trim(),
        tel:     tel?.trim()     || null,
        type,
        message: message?.trim() || null,
      }),
    })

    return Response.json({ success: true })

  } catch (err) {
    console.error("[/api/contact]", err)
    return Response.json({ success: false, error: "Erreur serveur. Veuillez réessayer." }, { status: 500 })
  }
}
