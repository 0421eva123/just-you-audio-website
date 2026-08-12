const requiredFields = ["name", "companyName", "country", "email"];

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
