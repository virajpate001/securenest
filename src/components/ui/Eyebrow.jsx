import { cn } from "@/lib/utils";

export default function Eyebrow({ children, dark = false, className }) {
  return (
    <div
      className={cn(
        "flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[2px]",
        dark ? "text-gold-dark" : "text-gold",
        className,
      )}
    >
      <span className={cn("inline-block h-0.5 w-6", dark ? "bg-gold-dark" : "bg-gold")} />
      {children}
    </div>
  );
}