"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

export function SectionCinematicReveal({
  children,
}: {
  children: React.ReactNode;
}) {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["end end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.7], [0, 1]);
  const blur = useTransform(scrollYProgress, [0, 0.7], [0, 8]);

  // FIX FOR .to() → useTransform again
  const blurFilter = useTransform(blur, (v: number) => `blur(${v}px)`);

  return (
    <div ref={sectionRef} className="relative w-full">
      {children}

      <motion.div
        className="absolute inset-0 w-full h-full pointer-events-none z-40"
        style={{
          opacity,
          willChange: "opacity, backdrop-filter",
          backdropFilter: blurFilter,
          WebkitBackdropFilter: blurFilter,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/50 to-black/80 mix-blend-multiply" />

        <div
          className="absolute inset-0 opacity-[0.04] mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 250 250' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />
      </motion.div>
    </div>
  );
}
