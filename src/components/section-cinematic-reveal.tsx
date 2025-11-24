"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

export function SectionCinematicReveal({
  children,
}: {
  children: React.ReactNode;
}) {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  // Track scroll of THIS section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end end"],
  });

  // Smooth cinematic transitions
  const opacity = useTransform(scrollYProgress, [0.7, 1], [0, 1]);
  const blur = useTransform(scrollYProgress, [0.7, 1], [10, 0]);
  const y = useTransform(scrollYProgress, [0.7, 1], [10, 0]);

  return (
    <div ref={sectionRef} className="relative w-full">
      {/* SECTION CONTENT */}
      {children}

      {/* CINEMATIC OVERLAY INSIDE THIS SECTION */}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-[45vh] pointer-events-none z-40"
        style={{
          opacity,
          y,
          willChange: "opacity, transform",
        }}
      >
        {/* SOFT BLUR */}
        <motion.div
          className="absolute inset-0"
          style={{
            backdropFilter: useTransform(blur, v => `blur(${v}px)`),
            WebkitBackdropFilter: useTransform(blur, v => `blur(${v}px)`),
            background: "rgba(0,0,0,0.05)",
            maskImage:
              "linear-gradient(to top, black 15%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to top, black 15%, transparent 100%)",
          }}
        />

        {/* DARK CINEMATIC SHADE */}
        <div
          className="
            absolute inset-0
            bg-gradient-to-t from-black/80 via-black/40 to-transparent
            mix-blend-multiply
          "
        />

        {/* FILM GRAIN */}
        <div
          className="absolute inset-0 opacity-[0.04] mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 250 250' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />

        {/* SUBTLE HIGHLIGHT */}
        <div
          className="
            absolute top-0 w-full h-20
            bg-gradient-to-b from-white/10 to-transparent
            opacity-10
          "
        />
      </motion.div>
    </div>
  );
}
