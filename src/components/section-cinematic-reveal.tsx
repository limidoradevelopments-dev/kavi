"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

export function SectionCinematicReveal({
  children,
}: {
  children: React.ReactNode;
}) {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  // Track the scroll progress of this specific section
  // "end end" -> When the bottom of the section hits the bottom of the viewport
  // "end start" -> When the bottom of the section hits the top of the viewport
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["end end", "end start"],
  });

  // Animate from 0 to 1 as the section scrolls off screen
  const opacity = useTransform(scrollYProgress, [0, 0.7], [0, 1]);
  const blur = useTransform(scrollYProgress, [0, 0.7], [0, 8]); // Blur the content behind

  return (
    <div ref={sectionRef} className="relative w-full">
      {/* SECTION CONTENT - It will have the blur applied to it from the overlay */}
      {children}

      {/* CINEMATIC OVERLAY INSIDE THIS SECTION */}
      <motion.div
        className="absolute inset-0 w-full h-full pointer-events-none z-40"
        style={{
          opacity,
          willChange: "opacity, backdrop-filter",
          backdropFilter: useTransform(blur, (v) => `blur(${v}px)`),
          WebkitBackdropFilter: useTransform(blur, (v) => `blur(${v}px)`),
        }}
      >
        {/* DARK CINEMATIC SHADE */}
        <div
          className="
            absolute inset-0
            bg-gradient-to-t from-black/20 via-black/50 to-black/80
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
      </motion.div>
    </div>
  );
}
