import { cn } from "@/lib/utils";

const variants = {
  primary: "bg-brand-yellow text-primary hover:bg-brand-yellow-hover shadow-sm hover:shadow-md",
  dark: "bg-primary text-white hover:bg-opacity-90",
  outline: "border-2 border-border-soft text-primary hover:border-primary",
  ghost: "text-text-sec hover:text-primary",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export default function Button({ as: Tag = "button", variant = "primary", size = "md", className, children, ...rest }) {
  return (
    <Tag
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-btn font-bold font-manrope",
        "transition-all duration-300 disabled:pointer-events-none disabled:opacity-60",
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