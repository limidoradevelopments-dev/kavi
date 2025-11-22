'use client';

import React from 'react';
import { Button } from './ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { PixelatedImage } from './pixelated-image';

export function Hero() {
  return (
    <section
      id="hero"
      className="overflow-hidden relative w-full py-8 pt-[7rem] h-full min-h-screen flex items-center justify-between"
    >
      <div className="flex flex-col items-center justify-between gap-8 px-4 lg:flex-row lg:px-8">
        {/* Left: Image Section */}
        <div className="relative flex w-full items-center justify-center lg:w-1/2">
          <div className="relative w-full lg:max-w-[95vw] lg:min-h-[75vh] md:aspect-[4/3] lg:w-full aspect-[4/4]">
            <PixelatedImage
              images={['/hero-image.png', '/hero-image-2.png']}
              className="relative z-10 object-contain"
              alt="Designer portrait"
            />
            <Image
              fill
              className="absolute inset-0 z-[1] object-contain scale-y-[1.1]"
              alt="Hero section decoration"
              src="/hero-section-decoration.svg"
            />
          </div>
        </div>

        {/* Right: Text Section */}
        <div className="flex w-full flex-col gap-8 md:gap-16 lg:w-1/2">
          <h1 className="font-headline text-mobile-h1 leading-tight text-[#f7f7f7] md:text-h1">
            UI/UX DESIGNER
          </h1>

          <div className="flex flex-col items-start gap-6 md:max-w-[80%]">
            <h2 className="font-headline text-mobile-h3 leading-tight text-foreground md:text-h3">
              Doing right by those who trust us isn't a strategy — it's the only
              way we know how to work.
            </h2>

            <div className="inline-flex flex-wrap items-center gap-4">
              <Button
                asChild
                className="h-auto rounded-none bg-[#29261f] px-5 py-2 text-[0.75rem] text-[#f7f7f7] hover:bg-[#29261f]/90"
              >
                <Link href="#contact" className="tracking-wide">
                  VIEW WORKS
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                className="h-auto rounded-none border-[#29261f] bg-transparent px-5 py-2 text-[0.75rem] text-[#29261f] hover:bg-[#29261f]/10"
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
