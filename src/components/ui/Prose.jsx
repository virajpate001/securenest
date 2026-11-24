import { cn } from "@/lib/utils";

export default function Prose({ className, children }) {
  return (
    <div
      className={cn(
        "prose prose-sm md:prose-base prose-slate max-w-none",
        "prose-headings:font-display prose-headings:font-extrabold prose-headings:text-ink",
        "prose-a:text-gold-dark hover:prose-a:text-gold",
        "prose-li:marker:text-gold",
        className
      )}
    >
      {children}
    </div>
  );
}