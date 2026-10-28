export const brandName = "JUST YOU AUDIO";
export const brandTagline = "Commercial Audio & PA Supply Partner";
export const coreValueLine =
  "Ready Stock · Flexible MOQ · Competitive Pricing · OEM & Project Support";
export const siteUrl = "https://www.justyouaudio.com";

export const contactInfo = {
  mainContact: "Eva Chan",
  mainEmail: "eva@justyouaudio.com",
  salesEmail: "sales@justyouaudio.com",
  infoEmail: "info@justyouaudio.com",
  whatsappDisplay: "+86 173 2596 0159",
  whatsappNumber: "8617325960159",
  officialDomain: siteUrl,
};

export const whatsappNumber = contactInfo.whatsappNumber;

export const whatsappMessages = {
  englishQuotation:
    "Hi Eva, I would like a quotation for commercial audio and PA products. My country: __. Product or project: __. Quantity: __.",
  projectConsultation:
    "Hi Eva, I need help selecting a commercial PA system. Project type: __. Area: __. Number of zones: __.",
  spanishQuotation:
    "Hola Eva, quisiera una cotización de productos de audio comercial y megafonía. Mi país: __. Producto o proyecto: __. Cantidad: __.",
};

export function getWhatsAppLink(message?: string) {
  const query = message ? `?text=${encodeURIComponent(message)}` : "";

  return `https://wa.me/${whatsappNumber}${query}`;
}

export function getEmailLink(email: string, subject?: string) {
  const query = subject ? `?subject=${encodeURIComponent(subject)}` : "";

  return `mailto:${email}${query}`;
}
