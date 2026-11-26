import { cn } from "@/lib/utils";

export default function Eyebrow({ children, dark = false, className }) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider font-manrope",
        dark ? "bg-primary/5 text-primary" : "bg-brand-yellow-soft text-primary",
        className
      )}
    >
      {children}
    </div>
  );
}