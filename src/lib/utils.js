import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge Tailwind classes safely. Later classes override earlier ones
 * for the same property. Used by <Button>, <Container>, etc.
 *
 * @example cn("px-4", condition && "px-6") // "px-6"
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
} 