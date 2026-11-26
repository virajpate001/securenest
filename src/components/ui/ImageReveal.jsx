"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * Wraps an image or visual block to create a smooth "mask reveal" (wipe-up) effect on scroll.
 * 
 * Props:
 *   className  string  - Tailwind classes (e.g., "rounded-[2rem] overflow-hidden h-[400px]")
 *   duration   number  - Time in seconds for the reveal (default 0.8)
 *   delay      number  - Seconds to wait before starting (default 0)
 *   once       boolean - Only animate the first time it comes into view (default true)
 */
export default function ImageReveal({ 
  children, 
  className = "", 
  duration = 1,
  delay = 0,
  once = true
}) {
  const reduce = useReducedMotion();

  // Accessibility fallback: If reduced motion is enabled, render statically
  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ clipPath: "inset(0 0 0% 0)" }}
      whileInView={{ clipPath: "inset(0 0 0% 0)" }}
      viewport={{ once, amount: 0.2 }}
      transition={{ 
        duration, 
        delay, 
        ease: [0.21, 0.47, 0.32, 0.98] // Premium smooth easing
      }}
    >
      {children}
    </motion.div>
  );
}