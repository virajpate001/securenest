import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { MessageCircle } from "lucide-react";

export default function FloatingContact() {
  // A blank chat message
  const url = buildWhatsAppUrl("Hi SecureNest, I have a vehicle insurance question.");

  return (
    <a
      href={url}
      target="_blank" 
      rel="noopener noreferrer"
      aria-label="Chat with SecureNest on WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex items-center gap-2
                 rounded-pill bg-[#25D366] px-5 py-3 text-sm font-bold
                 text-white shadow-lg transition-all hover:-translate-y-0.5
                 hover:shadow-xl"
    >
      <MessageCircle className="h-5 w-5" />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}