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
        <svg viewBox="0 0 64 64" aria-hidden="true" className="h-full w-full">
          <path
            d="M32 4 54 12v17c0 15-9 25-22 31C19 54 10 44 10 29V12L32 4Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            d="m21 31 7 7 15-16"
            fill="none"
            stroke="#E5B85C"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
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
          VEHICLE INSURANCE
        </small>
      </span>
    </Link>
  );
}