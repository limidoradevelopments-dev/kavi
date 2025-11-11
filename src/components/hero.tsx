import React from 'react';
import { Button } from './ui/button';
import Link from 'next/link';
import Image from 'next/image';

export function Hero() {
  return (
    <section
      id="hero"
      className="relative h-full w-full overflow-hidden py-8 lg:h-screen"
    >
      <div className="flex h-full w-full flex-1 flex-col gap-8 px-8 lg:flex-row">
        {/**left side div . this hold the image slider */}
        <div className="relative flex h-full w-full items-center justify-center py-2">
          <Image
            width={688}
            height={500}
            className="relative z-10 w-[56%]"
            alt="Designer portrait"
            src="/hero-image.png"
            data-ai-hint="designer portrait"
          />

          <Image
            width={688}
            height={746}
            className="absolute inset-0 z-[1] h-full w-full"
            alt="Hero section decoration"
            src="/hero-section-decoration.svg"
          />
        </div>

        {/** right side div . this hold the content for hero section */}
        <div className="relative h-full w-full">
          <div className="flex flex-col gap-8 md:gap-32">
            <h1 className="font-headline text-mobile-h1 leading-tight text-[#f7f7f7] md:text-h1">
              UI/UX DESIGNER
            </h1>
            <div className="flex max-w-full flex-col items-start gap-7 md:max-w-[80%]">
              <h2 className="self-stretch font-headline text-mobile-h3 leading-tight text-foreground md:text-h3">
                Doing right by those who trust us isn't a strategy — it's the only
                way we know how to work.
              </h2>
              <div className="inline-flex items-center gap-4">
                <Button asChild className="h-auto bg-[#29261f] px-4 py-1.5 hover:bg-[#29261f]/90 rounded-none">
                  <a href="#" className="text-white">
                    VIEW WORKS
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="h-auto border-[#29261f] bg-transparent px-4 py-1.5 hover:bg-[#29261f]/10 rounded-none"
                >
                  <a href="#" className="text-[#29261f]">
                    CONTACT
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
