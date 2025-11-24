import React from 'react';
import Image from 'next/image';

export function AboutStory() {
  return (
    <section
      id="about-story"
      className="w-full py-16 md:py-20 lg:py-24 flex items-center justify-center bg-background"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <p className="text-[12px] font-body tracking-[0.2em] mb-6 text-foreground/80">
            * ALWAYS INSIDE MY MIND *
          </p>
          <h2 className="font-headline text-mobile-h2 md:text-tablet-h2 lg:text-h2 leading-tight text-foreground/90">
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
