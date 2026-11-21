import { cn } from "@/lib/utils";

const variants = {
 gold: "bg-gradient-to-br from-gold-light to-gold-dark text-navy shadow-sm hover:shadow-md",
  navy: "bg-navy text-white hover:bg-navy-deep",
  outline: "border border-[#62708a] text-white hover:border-gold hover:text-gold",
  ghost: "text-ink hover:text-gold-dark",
};

const sizes = {
  sm: "px-4 py-2 text-xs",
  md: "px-5 py-3 text-sm",
  lg: "px-6 py-4 text-sm",
};

export default function Button({
  as: Tag = "button",
  variant = "gold",
  size = "md",
  className,
  children,
  ...rest
}) {
  return (
    <Tag
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-[10px] font-bold",
        "transition-all duration-200 hover:-translate-y-0.5",
        "disabled:pointer-events-none disabled:opacity-60",
        variants[variant],
        sizes[size],
        className,
      )}
      {...rest}
    >
      {children}
    </Tag>
  );
}