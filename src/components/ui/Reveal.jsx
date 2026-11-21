"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * Wrap any block in <Reveal> to get a smooth fade-up on scroll.
 *
 * Props:
 *   as         element to render (default "div")
 *   delay      seconds before animation starts (default 0)
 *   y          initial vertical offset in px (default 24)
 *   duration   seconds (default 0.7)
 *   once       animate only the first time (default true)
 *   amount     fraction of element visible to trigger (default 0.2)
 */
export default function Reveal({
  as = "div",
  delay = 0,
  y = 24,
  duration = 0.7,
  once = true,
  amount = 0.2,
  className,
  children,
  ...rest
}) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as] ?? motion.div;

  if (reduce) {
    const Tag = as;
    return (
      <Tag className={className} {...rest}>
        {children}
      </Tag>
    );
  }

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}