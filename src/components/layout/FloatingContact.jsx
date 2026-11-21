import Link from "next/link";
import { Mail } from "lucide-react";

export default function FloatingContact() {
  return (
    <Link
      href="/get-a-quote"
      aria-label="Make an enquiry"
      className="fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-pill bg-gold px-4 py-3 text-[12px] font-bold text-navy shadow-lg transition hover:-translate-y-0.5"
    >
      <Mail className="h-4 w-4" />
      Enquire
    </Link>
  );
}