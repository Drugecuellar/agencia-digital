// Configuración centralizada - WhatsApp
// Formato: código de país (57 Colombia) + número sin espacios ni ceros iniciales
export const WHATSAPP_NUMBER = "573138541255";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

export function getWhatsAppLink(message?: string) {
  const base = WHATSAPP_URL;
  if (message) {
    const encoded = encodeURIComponent(message);
    return `${base}?text=${encoded}`;
  }
  return base;
}
