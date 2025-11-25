import React from 'react';
import Image from 'next/image';

export function AboutStory() {
  return (
    <section
      id="about-story"
      className="w-full py-10 md:py-12 lg:py-16 flex items-center justify-center bg-background min-h-screen h-full"
    >
      <div className="container mx-auto px-4">
        <div className="relative flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Top Decoration */}
          <div className="absolute -top-32 flex flex-col items-center">
            <div className="w-px h-24 bg-foreground/30"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-foreground/40 mt-1"></div>
          </div>
          
          <p className="text-[12px] font-body tracking-[0.2em] mb-6 text-foreground/80">
            * ALWAYS INSIDE MY MIND *
          </p>
          <h2 className="font-headline text-mobile-h2 md:text-tablet-h2 lg:text-h2 tracking-tighter text-foreground/90">
            Hi I'm Kavi.. Doing right by those who trust us isn't a{' '}
            <span className="inline-flex items-center">
              <span className="font-bold text-black/80">strategy</span>
              <Image
                src="/symbol-decoration-2.svg"
                alt="decoration"
                width={30}
                height={10}
                className="ml-2 -mt-1"
              />
            </span>{' '}
            — it's the only way we know how to work.
          </h2>
        </div>
      </div>
    </section>
  );
}
