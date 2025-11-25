"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

export function SectionCinematicReveal({
  children,
}: {
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "end start"],
  });

  // ONLY opacity animates — zero performance cost
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.7], [0, 1]);

  return (
    <div ref={ref} className="relative w-full overflow-hidden">
      {children}

      {/* The entire cinematic effect is ONE pre-rendered image */}
      <motion.div
        className="absolute inset-0 pointer-events-none z-40 bg-cover top-0 left-0 bottom-0 right-0"
        style={{
          opacity: overlayOpacity,
          backgroundImage: "url('../cinematic-overlay.svg')",
        }}
      />
    </div>
  );
}
