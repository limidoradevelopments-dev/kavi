'use client';

import React from 'react';
import { Button } from './ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { PixelatedImage } from './pixelated-image';
import { motion } from 'framer-motion';

const DIGITS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function AnimatedDigit({ finalDigit }: { finalDigit: number }) {
  const containerHeight = 15; // Corresponds to text-[12px] line-height roughly
  const y = -finalDigit * containerHeight;

  return (
    <div
      style={{ height: containerHeight }}
      className="inline-block overflow-hidden align-bottom"
    >
      <motion.div
        initial={{ y: 0 }}
        animate={{ y }}
        transition={{ duration: 1.2, ease: [0.65, 0, 0.35, 1] }}
        className="flex flex-col"
      >
        {DIGITS.map((digit) => (
          <span
            key={digit}
            style={{ height: containerHeight }}
            className="flex items-center justify-center"
          >
            {digit}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export function Hero() {
  return (
    <section
      id="hero"
      className="overflow-hidden relative w-full py-8 pt-[7rem] h-full min-h-screen flex items-center justify-between"
    >
      <div className="flex flex-col items-start justify-between gap-8 px-4 lg:flex-row lg:px-8">
        {/* Left: Image Section */}
        <div className="relative flex w-full items-center justify-center lg:w-1/2">
          <div className="relative w-full lg:max-w-[95vw] lg:min-h-[75vh] md:aspect-[4/3] lg:w-full aspect-[4/4]">
            <PixelatedImage
              images={['/hero-image.png', '/hero-image-2.png']}
              className="object-contain"
            />

            <Image
              fill
              className="inset-0 z-[-1] object-contain scale-y-[1.1]"
              alt="Hero section decoration"
              src="/hero-section-decoration.svg"
            />
          </div>
        </div>

        {/* Right: Text Section */}
        <div className="flex w-full flex-col gap-[5rem] md:gap-2 lg:w-1/2">
          <div className="flex w-full flex-col lg:max-w-[70%] ">
            {/**year text tansition  */}
            <span className="text-[12px]">
              [ 202
              <AnimatedDigit finalDigit={5} /> ]
            </span>

            <h1 className="font-headline text-mobile-h1 leading-none text-[#29261f] md:text-h1 lg:max-w-[30%]">
              UI/UX DESIGNER
            </h1>

            <span className="text-[12px] text-end w-full">
              [ BASED IN SRI LANKA ]
            </span>
          </div>

          <div className="flex flex-col items-start gap-4 md:max-w-[95%]">
            <h2 className="font-headline text-mobile-h3 leading-tight text-foreground md:text-h5">
              Doing right by those who trust us isn't a strategy — it's the only
              way we know how to work.
            </h2>

            <div className="inline-flex flex-wrap items-center gap-4">
              <Button
                asChild
                className="h-auto rounded-none bg-[#29261f] px-5 py-1 text-[0.75rem] text-[#f7f7f7] hover:bg-[#29261f]/90"
              >
                <Link href="#contact" className="tracking-wide">
                  VIEW WORKS
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                className="h-auto rounded-none border-[#29261f] bg-transparent px-5 py-1 text-[0.75rem] text-[#29261f] hover:bg-[#29261f]/10"
              >
                <Link href="#contact">CONTACT</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
