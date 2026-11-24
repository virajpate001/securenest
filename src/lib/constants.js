export const SITE_NAME = "SecureNest";
export const SITE_TAGLINE = "Secure your tomorrow.";
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://securenest.in";

// ─────────────────────────────────────────────────────────────
// Replace with your real WhatsApp Business number.
// Format: country code + number, digits only, NO +, NO spaces.
// India example: 919876543210
// ─────────────────────────────────────────────────────────────
export const WHATSAPP_NUMBER = "919209543850";

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/two-wheeler-insurance", label: "Two Wheeler" },
  { href: "/four-wheeler-insurance", label: "Four Wheeler" },
  { href: "/commercial-vehicle-insurance", label: "Commercial" },
  { href: "/vehicle-insurance-renewal", label: "Renewal" },
  { href: "/blog", label: "Guides" }, // Added Blog here
];

export const FOOTER_COLUMNS = [
  {
    title: "Private vehicles",
    links: [
      { href: "/two-wheeler-insurance",   label: "Two wheeler" },
      { href: "/three-wheeler-insurance", label: "Three wheeler" },
      { href: "/four-wheeler-insurance",  label: "Four wheeler" },
      { href: "/new-vehicle-insurance",   label: "New vehicle" },
    ],
  },
  {
    title: "Commercial",
    links: [
      { href: "/lpv-insurance", label: "LPV" },
      { href: "/lmv-insurance", label: "LMV" },
      { href: "/lgv-insurance", label: "LGV" },
      { href: "/hgv-insurance", label: "HGV" },
    ],
  },
  {
    title: "Information",
    links: [
      { href: "/about",           label: "About" },
      { href: "/blog",            label: "Insurance guides" },
      { href: "/contact",         label: "Contact" },
      { href: "/privacy-policy",  label: "Privacy policy" },
      { href: "/terms",           label: "Terms" },
      { href: "/disclaimer",      label: "Disclaimer" },
    ],
  },
];

