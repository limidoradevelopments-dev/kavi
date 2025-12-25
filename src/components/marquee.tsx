"use client";

import React from "react";
import { cn } from "@/lib/utils";

/* ---------------------------------
   Symbol Component
---------------------------------- */
type SymbolProps = {
  variant: "hero-left" | "hero-right" | "small";
  className?: string;
};

const symbolMap = {
  "hero-left": "/marquee-symbol-2.svg",
  "hero-right": "/marquee-symbol-1.svg",
  small: "/marquee-symbol-small.svg",
};

const Symbol = ({ variant, className }: SymbolProps) => (
  <span
    aria-hidden
    className={cn(
      "inline-block bg-center bg-no-repeat bg-contain",
      className
    )}
    style={{
      backgroundImage: `url(${symbolMap[variant]})`,
    }}
  />
);

/* ---------------------------------
   Marquee Content
---------------------------------- */
const MarqueeContent = () => {
  return (
    <div className="flex shrink-0 items-center gap-[4rem] px-8">
      {/* Left */}
      <span className="font-headline-italic text-mobile-h4 md:text-h5 text-white whitespace-nowrap">
        Deep nested Web
      </span>

      {/* Center */}
      <div className="flex items-center gap-6">
        <Symbol variant="hero-left" className="w-[5rem] h-[4rem]" />
        <span className="font-headline-italic text-mobile-h4 md:text-h5 text-white whitespace-nowrap">
          Trust the fucking process
        </span>
        <Symbol variant="hero-right" className="w-[5rem] h-[4rem]" />
      </div>

      {/* Right */}
      <div className="flex items-center gap-6">
        <span className="font-headline-italic text-mobile-h4 md:text-h5 text-white whitespace-nowrap">
          To find perfection
        </span>
        <Symbol variant="small" className="w-10 h-10" />
      </div>
    </div>
  );
};

/* ---------------------------------
   Marquee Wrapper (GAP-FREE)
---------------------------------- */
export function Marquee() {
  return (
    <section className="relative w-full overflow-hidden bg-black/90 mt-8">
      <div className="marquee-track flex">
        <MarqueeContent />
        <MarqueeContent />
      </div>
    </section>
  );
}
