'use client';

import React from 'react';
import { AnimatedTitle } from './animated-title';

/* ---------------- Story Item ---------------- */
const StoryItem = ({
  number,
  children,
}: {
  number: string;
  children: React.ReactNode;
}) => (
  <div className="relative flex flex-col items-start gap-2">
    <div className="flex flex-col items-center gap-2">
      <span className="font-headline text-3xl text-foreground/20 leading-none mt-1 line-through">
        {number}
      </span>
      <div className="w-px flex-1 bg-foreground/20" />
    </div>

    <p className="text-mobile-body md:text-body text-foreground/80 max-w-sm">
      {children}
    </p>
  </div>
);

/* ---------------- Page ---------------- */
export function AboutStory() {
  return (
    <section
      id="about-story"
      className="relative w-full py-24 md:py-32 lg:py-40 flex items-center justify-center bg-background min-h-screen overflow-hidden"
    >
      {/* ---------- Background GSAP Animated Text ---------- */}
      <div className="absolute inset-0 flex items-start justify-center pointer-events-none top-[1.5rem] tracking-[1.2rem] line-through">
        <AnimatedTitle className="font-headline text-[13vw] text-foreground/30 whitespace-nowrap mix-blend-soft-light">
          PERFECTION
        </AnimatedTitle>
      </div>

      {/* ---------- Main Content ---------- */}
      <div className="relative z-10 mx-auto px-4 w-full">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-20 gap-x-12 items-start">
          {/* Left Side */}
          <div className="md:col-span-12 flex flex-col items-center text-center w-full">
            <p className="text-[12px] font-body tracking-[0.2em] mb-6 text-foreground/80">
              * ALWAYS INSIDE MY MIND *
            </p>

            <div className="grid grid-cols-12 w-full">
              <h2 className="col-start-3 col-span-8 font-headline text-mobile-h2 md:text-tablet-h2 lg:text-[2.8rem] leading-tight tracking-tighter text-foreground/90 text-center">
                A good design is not just a piece of art.
              </h2>

              <h2 className="col-start-2 col-span-9 font-headline text-mobile-h2 md:text-tablet-h2 lg:text-[2.8rem] leading-tight tracking-tighter text-foreground/90 text-start">
                It communicates with people in a{' '}
                <span className="italic">creative</span> way.
              </h2>

              <h2 className="col-start-2 col-span-10 font-headline text-mobile-h2 md:text-tablet-h2 lg:text-[2.8rem] leading-tight tracking-tighter text-foreground/90 text-end">
                It&apos;s the way to scream your brand name to the world.
              </h2>
            </div>
          </div>

          {/* Right Side */}
          <div className="md:col-span-5 md:col-start-8 flex flex-col gap-12 mt-8 md:mt-0">
            <StoryItem number="001">
              Perfection isn’t about being flawless — it’s about pushing ideas
              beyond limits. Your next idea can be the one. Why wait?
            </StoryItem>
          </div>

          <div className="md:col-span-4 md:col-start-5 flex flex-col gap-12 mt-8 md:mt-0">
            <StoryItem number="002">
              Doing right by those who trust us isn&apos;t a strategy — it&apos;s
              the only way we know how to work.
            </StoryItem>
          </div>
        </div>
      </div>
    </section>
  );
}
