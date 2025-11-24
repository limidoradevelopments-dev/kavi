"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

export function SectionCinematicReveal({ children }: { children: React.ReactNode }) {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  // Scroll tracking optimized: shorter range = fewer calculations
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["end 85%", "end start"], 
  });

  // Smooth easing + GPU friendly values
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const blurValue = useTransform(scrollYProgress, [0, 1], [0, 15]);

  const backdrop = useTransform(blurValue, (v) => `blur(${v}px)`);

  return (
    <div ref={sectionRef} className="relative w-full">
      {children}

      {/* GPU-accelerated overlay */}
      <motion.div
  className="absolute inset-0 pointer-events-none z-40 transform-gpu"
  style={{
    opacity,
    backdropFilter: backdrop,
    WebkitBackdropFilter: backdrop,
    willChange: "opacity, backdrop-filter, background",
    background:
      "rgba(0, 0, 0, 0.88)", // warm dark cinematic overlay
  }}
>
 


</motion.div>
    </div>
  );
}
