"use client";

import React from "react";
import { cn } from "@/lib/utils";

const marqueeItems = [
  "UI/UX DESIGN",
  "WEB DESIGN",
  "GRAPHIC DESIGN",
];

const MarqueeItem = () => (
  <div className="flex-shrink-0 flex items-center gap-2.5 px-4">
    <span className="w-8 h-8 bg-[url('/symbol-decoration.svg')] bg-contain bg-center bg-no-repeat" />
    <span className="font-headline text-mobile-h4 md:text-h5 text-white whitespace-nowrap">
      {marqueeItems[0]}
    </span>
    <span className="w-8 h-8 bg-[url('/symbol-decoration.svg')] bg-contain bg-center bg-no-repeat" />
    <span className="font-headline text-mobile-h4 md:text-h5 text-white whitespace-nowrap ml-4">
      {marqueeItems[1]}
    </span>
    <span className="w-8 h-8 bg-[url('/symbol-decoration.svg')] bg-contain bg-center bg-no-repeat ml-4" />
    <span className="font-headline text-mobile-h4 md:text-h5 text-white whitespace-nowrap">
      {marqueeItems[2]}
    </span>
    <span className="w-8 h-8 bg-[url('/symbol-decoration.svg')] bg-contain bg-center bg-no-repeat ml-4" />
  </div>
);


export function Marquee() {
  return (
    <section className="relative w-full overflow-hidden bg-black/90 py-3 lg:py-5 mt-4">
      <div className="flex animate-marquee whitespace-nowrap">
        <MarqueeItem />
        <MarqueeItem />
      </div>
    </section>
  );
}
