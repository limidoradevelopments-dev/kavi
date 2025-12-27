'use client';

import React from 'react';
import { AnimatedTitle } from './animated-title';

const StarIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g style={{ mixBlendMode: 'soft-light' }}>
      <path
        d="M24 11.7886C19.27 12.2186 16.6667 12.597 14.9983 13.9042C13.0375 15.435 12.5731 18.1071 12.0571 23.7143C11.5239 17.9007 11.0423 15.2458 8.89236 13.7494C7.22397 12.5798 4.52358 12.2014 0 11.7886C4.71278 11.3586 7.44757 10.963 9.09876 9.67304C11.0767 8.12505 11.5411 5.62437 12.0571 0C12.5387 5.17718 12.9687 7.66065 14.5683 9.26024C16.1679 10.8598 18.84 11.3242 24 11.7886Z"
        fill="hsl(var(--foreground))"
        fillOpacity="0.3"
      />
    </g>
  </svg>
);


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
      <div className="absolute inset-0 flex items-start justify-center pointer-events-none top-[5.3rem] tracking-[1.2rem] line-through">
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

     
        </div>
      </div>
    </section>
  );
}
