import { WHATSAPP_NUMBER } from "./constants";

/**
 * Build a wa.me deep link with a pre-filled message.
 */
export function buildWhatsAppUrl(message) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
}

/**
 * Turn a validated enquiry object into a clean, readable WhatsApp message.
 */
export function formatEnquiryMessage(data) {
  const {
    vehicle, usage, requirement, vehicleClass,
    name, mobile, registration,
  } = data;

  const lines = [
    `🚗 *New Vehicle Insurance Enquiry*`,
    ``,
    `*Name:* ${name}`,
    `*Mobile:* ${mobile}`,
    `*Vehicle Category:* ${vehicle}`,
    `*Vehicle Use:* ${usage}`,
    `*Requirement:* ${requirement}`,
    vehicleClass ? `*Vehicle Class:* ${vehicleClass}` : null,
    registration ? `*Registration:* ${registration}` : null,
    ``,
    `_Sent via SecureNest website_`,
  ].filter(Boolean);

  return lines.join("\n");
}