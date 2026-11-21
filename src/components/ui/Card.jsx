import { cn } from "@/lib/utils";

export default function Card({ className, children, ...rest }) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-card border border-line bg-white transition-all duration-300",
        "hover:-translate-y-1 hover:shadow-brand",
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
}