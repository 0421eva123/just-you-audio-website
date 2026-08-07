export const brandName = "JUST YOU AUDIO";
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

export function getWhatsAppLink(message?: string) {
  const query = message ? `?text=${encodeURIComponent(message)}` : "";

  return `https://wa.me/${whatsappNumber}${query}`;
}

export function getEmailLink(email: string, subject?: string) {
  const query = subject ? `?subject=${encodeURIComponent(subject)}` : "";

  return `mailto:${email}${query}`;
}
