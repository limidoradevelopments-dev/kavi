"use client";

import React from "react";
import { cn } from "@/lib/utils";

const marqueeItems = [
  "UI/UX DESIGN",
  "WEB DESIGN",
  "GRAPHIC DESIGN",
];

// Reusable symbol component
const Symbol = ({ className }: { className?: string }) => (
  <span
    className={cn(
      "inline-block bg-[url('/symbol-decoration.svg')] bg-contain bg-center bg-no-repeat",
      className
    )}
  />
);

const MarqueeItem = () => (
  <div className="flex-shrink-0 flex items-center gap-4 px-6">
    <Symbol className="w-14 h-14" />

    {marqueeItems.map((item, index) => (
      <React.Fragment key={item}>
        <span className="font-headline-italic text-mobile-h4 md:text-h5 text-white whitespace-nowrap">
          {item}
        </span>

        {index !== marqueeItems.length - 1 && (
        <Symbol className="w-14 h-14" />
        )}
      </React.Fragment>
    ))}
  </div>
);

export function Marquee() {
  return (
    <section className="relative w-full overflow-hidden bg-black/90 py-1 mt-4">
      <div className="flex animate-marquee whitespace-nowrap">
        <MarqueeItem />
        <MarqueeItem />
      </div>
    </section>
  );
}
