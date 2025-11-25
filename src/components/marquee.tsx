"use client"; // Needed only if you animate with JS

import React from "react";

const marqueeItems = [
  "UI/UX DESIGN",
  "WEB DESIGN",
  "GRAPHIC DESIGN",
];

export function Marquee() {
  return (
    <section className="relative w-full overflow-hidden bg-black/90 py-3 lg:py-5 mt-4">
      {/* Marquee track */}
      <div className="flex animate-marquee whitespace-nowrap">
        {[...marqueeItems, ...marqueeItems].map((text, index) => (
          <div
            key={index}
            className="inline-flex items-center gap-2.5 flex-shrink-0 px-4"
          >
            {/* Decoration as background instead of multiple <Image> */}
            <span className="w-8 h-8 bg-[url('/symbol-decoration.svg')] bg-contain bg-center bg-no-repeat" />
            <span className="font-headline text-mobile-h4 md:text-h5 text-white whitespace-nowrap">
              {text}
            </span>
            <span className="w-8 h-8 bg-[url('/symbol-decoration.svg')] bg-contain bg-center bg-no-repeat" />
          </div>
        ))}
      </div>

   
    </section>
  );
}
