"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * Wrap any block in <Reveal> to get a smooth fade-up on scroll.
 *
 * Props:
 *   as         element to render (default "div")
 *   delay      seconds before animation starts (default 0)
 *   y          initial vertical offset in px (default 24)
 *   duration   seconds (default 0.8)
 *   once       animate only the first time (default true)
 *   amount     fraction of element visible to trigger (default 0.2)
 */
export default function Reveal({
  as = "div",
  delay = 0,
  y = 30,
  duration = 0.8,
  once = true,
  amount = 0.2,
  className,
  children,
  ...rest
}) {
  const reduce = useReducedMotion();
  
  // If the user prefers reduced motion, render the element statically
  if (reduce) {
    const Tag = as;
    return (
      <Tag className={className} {...rest}>
        {children}
      </Tag>
    );
  }

  const MotionTag = motion[as] ?? motion.div;

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once, amount }}
      transition={{ 
        duration, 
        delay, 
        ease: [0.21, 0.47, 0.32, 0.98] // Premium, smooth deceleration
      }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}