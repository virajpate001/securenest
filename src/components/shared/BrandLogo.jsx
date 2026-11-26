import Link from "next/link";
import { cn } from "@/lib/utils";

export default function BrandLogo({ light = false, className }) {
  return (
    <Link
      href="/"
      aria-label="SecureNest home"
      className={cn("flex min-w-max items-center gap-2.5", className)}
    >
      <span className={cn("h-12 w-11", light ? "text-white" : "text-navy")}>
        <img src="/logo.png" alt="" />
      </span>
      <span className="flex flex-col leading-none">
        <strong
          className={cn(
            "font-display text-[25px] font-extrabold tracking-[-1.4px]",
            light ? "text-white" : "text-navy",
          )}
        >
          Secure<span className="text-brand-yellow">Nest</span>
        </strong>
        <small
          className={cn(
            "mt-1.5 text-[8px] font-extrabold tracking-[2px]",
            light ? "text-white/70" : "text-ink",
          )}
        >
         Secure Your Tomorrow.
        </small>
      </span>
    </Link>
  );
}