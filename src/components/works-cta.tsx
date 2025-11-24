import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from './ui/button';

export function WorksCTA() {
  return (
    <section
      id="works-cta"
      className="relative w-full bg-background py-16 md:py-20 lg:py-24 overflow-hidden"
    >
      <div className="container mx-auto px-4">
        {/* Decorative Lines and Text */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute top-1/2 left-8 -translate-y-1/2 -translate-x-1/2 origin-center h-px w-[40%] bg-foreground/30 -rotate-90" />
          <p className="absolute top-1/2 left-8 -translate-y-[200%] -translate-x-1/2 text-[10px] text-foreground/80 tracking-[0.2em] uppercase whitespace-nowrap [writing-mode:vertical-rl]">
            THE WAY HOW WE BUILD TRUST
          </p>

          <div className="absolute top-12 left-24 h-px w-[20%] bg-foreground/30" />
          <p className="absolute top-12 left-24 -translate-y-[150%] text-[10px] text-foreground/80 tracking-[0.2em] uppercase">
            THE WAY HOW WE BUILD TRUST
          </p>
        </div>

        {/* Main Content */}
        <div className="relative z-10 flex flex-col items-center text-center max-w-2xl mx-auto">
          <h2 className="font-headline text-mobile-h3 md:text-tablet-h3 lg:text-h3 leading-tight text-foreground/90 mb-6">
            Doing right by those who trust us isn't a strategy — it's the only
            way we know how to work.
          </h2>
          <Button asChild variant="default" size="lg" className="bg-black/80 hover:bg-black text-white">
            <Link href="/works">VIEW WORKS</Link>
          </Button>
        </div>
      </div>

      {/* Bottom Image Collage */}
      <div className="relative mt-16 md:mt-24 w-full flex justify-center">
        <Image
          src="/works-cta-section-image.svg"
          alt="A collage of various design projects"
          width={1200}
          height={600}
          className="w-full max-w-6xl h-auto [filter:drop-shadow(0_-10px_25px_rgba(0,0,0,0.05))]"
        />
      </div>
    </section>
  );
}
