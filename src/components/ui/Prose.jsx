import { cn } from "@/lib/utils";

export default function Prose({ className, children }) {
  return (
    <div
      className={cn(
        "prose prose-base md:prose-lg max-w-none",
        
        // Typography Colors
        "prose-p:text-text-sec prose-li:text-text-sec",
        "prose-headings:text-primary prose-headings:font-display prose-headings:font-bold prose-headings:tracking-tight",
        
        // Links & Interactivity
        "prose-a:text-primary prose-a:font-medium prose-a:underline hover:prose-a:text-brand-yellow",
        "prose-li:marker:text-brand-yellow",
        
        // Images & Code Blocks
        "prose-img:rounded-2xl prose-img:shadow-md",
        "prose-pre:bg-bg-sec prose-pre:text-primary",
        "prose-hr:border-border-soft",
        
        className
      )}
    >
      {children}
    </div>
  );
}