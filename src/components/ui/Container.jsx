import { cn } from "@/lib/utils";

export default function Container({ as: Tag = "div", className, children, ...rest }) {
  return (
    <Tag className={cn("mx-auto w-[min(1160px,calc(100%-32px))] md:w-[min(1160px,calc(100%-44px))]", className)} {...rest}>
      {children}
    </Tag>
  );
}