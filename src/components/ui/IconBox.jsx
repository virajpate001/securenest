import { cn } from "@/lib/utils";

export default function IconBox({ children, className }) {
  return (
    <div
      className={cn(
        "grid place-items-center rounded-xl bg-[#f7f0e1] text-brand-yellow",
        className
      )}
    >
      {children}
    </div>
  );
}