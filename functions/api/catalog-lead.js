const requiredFields = ["name", "companyName", "country", "email"];
const resendEndpoint = "https://api.resend.com/emails";
const defaultLeadEmailTo = "sales@justyouaudio.com";

const headers = {
  "Cache-Control": "no-store",
  "Content-Type": "application/json",
};

function json(data, status = 200) {
  return new Response(JSON.stringify(data), { headers, status });
}

function clean(value, maxLength = 220) {
  return String(value || "")
    .trim()
    .slice(0, maxLength);
}

function cleanSubject(value) {
  return clean(value).replace(/[\r\n]+/g, " ");
}

function valueOrFallback(value) {
  return value || "Not provided";
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function renderLeadRow(label, value) {
  return `
    <tr>
      <td style="padding:8px 14px;border:1px solid #e7dfd0;background:#fbfaf6;font-weight:700;color:#1e1f22;">${escapeHtml(label)}</td>
      <td style="padding:8px 14px;border:1px solid #e7dfd0;color:#3f4147;">${escapeHtml(value)}</td>
    </tr>
  `;
}

function buildLeadEmailHtml(lead) {
  const rows = [
    ["Name:", lead.name],
    ["Company:", lead.companyName],
    ["Country:", lead.country],
    ["Email:", lead.email],
    ["WhatsApp:", valueOrFallback(lead.whatsapp)],
    ["Business Type:", valueOrFallback(lead.businessType)],
    ["Product Interest:", valueOrFallback(lead.productInterest)],
    ["Submitted Time:", lead.createdAt],
    ["Source Page:", lead.source],
  ];

  return `
    <div style="font-family:Arial,Helvetica,sans-serif;line-height:1.5;color:#1e1f22;">
      <h2 style="margin:0 0 16px;font-size:22px;">New Catalog Request</h2>
      <table style="border-collapse:collapse;width:100%;max-width:680px;font-size:14px;">
        ${rows.map(([label, value]) => renderLeadRow(label, value)).join("")}
      </table>
    </div>
  `;
}

async function sendLeadEmail(lead, env) {
  const apiKey = clean(env.RESEND_API_KEY, 500);
  const from = clean(env.LEAD_EMAIL_FROM, 320);
  const to = clean(env.LEAD_EMAIL_TO || defaultLeadEmailTo, 320);

  if (!apiKey) {
    throw new Error("RESEND_API_KEY is not configured.");
  }

  if (!from) {
    throw new Error("LEAD_EMAIL_FROM is not configured.");
  }

  if (!to) {
    throw new Error("LEAD_EMAIL_TO is not configured.");
  }

  const subject = `New Catalog Lead - ${cleanSubject(lead.companyName)} - ${cleanSubject(lead.country)}`;
  const response = await fetch(resendEndpoint, {
    body: JSON.stringify({
      from,
      html: buildLeadEmailHtml(lead),
      subject,
      to: [to],
    }),
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    method: "POST",
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Resend email failed: ${response.status} ${errorText}`);
  }
}

export async function onRequestPost({ request, env }) {
  let body;

  try {
    body = await request.json();
  } catch {
    return json({ ok: false, error: "Invalid JSON payload." }, 400);
  }

  const lead = {
    name: clean(body.name),
    companyName: clean(body.companyName),
    country: clean(body.country),
    email: clean(body.email),
    whatsapp: clean(body.whatsapp),
    businessType: clean(body.businessType),
    productInterest: clean(body.productInterest),
    source: "/download-catalog",
    createdAt: new Date().toISOString(),
    userAgent: clean(request.headers.get("user-agent"), 500),
  };

  const missingField = requiredFields.find((field) => !lead[field]);
  if (missingField) {
    return json({ ok: false, error: `${missingField} is required.` }, 400);
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(lead.email)) {
    return json({ ok: false, error: "A valid email is required." }, 400);
  }

  const leadKey = `catalog-lead:${Date.now()}:${crypto.randomUUID()}`;

  if (!env.CATALOG_LEADS || typeof env.CATALOG_LEADS.put !== "function") {
    console.error("CATALOG_LEADS binding is not configured.");
    return json({ ok: false, error: "Lead storage is not configured." }, 500);
  }

  await env.CATALOG_LEADS.put(leadKey, JSON.stringify(lead));
  try {
    await sendLeadEmail(lead, env);
  } catch (error) {
    console.error(
      "Catalog lead email notification failed.",
      error instanceof Error ? error.message : error,
    );
  }

  return json({ ok: true, stored: true });
}

export function onRequestOptions() {
  return new Response(null, {
    headers: {
      Allow: "POST, OPTIONS",
    },
    status: 204,
  });
}
