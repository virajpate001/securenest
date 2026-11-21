import Link from "next/link";
import Container from "@/components/ui/Container";

export default function Topbar() {
  return (
    <div className="bg-[#0b172d] text-[12px] text-[#cbd3df]">
      <Container className="flex h-[34px] items-center justify-between">
        <span>Vehicle insurance assistance for every journey</span>
        <span className="hidden sm:inline">
          Need help?{" "}
          <Link href="/contact" className="font-bold text-gold">
            Contact SecureNest
          </Link>
        </span>
      </Container>
    </div>
  );
}