import React from 'react';
import Image from 'next/image';

const StoryItem = ({ number, children }: { number: string; children: React.ReactNode }) => (
  <div className="relative flex items-start gap-6">
    <div className="flex flex-col items-center gap-4">
      <span className="font-headline text-3xl text-foreground/20 leading-none mt-1 line-through">
        {number}
      </span>
      <div className="w-px flex-1 bg-foreground/20" />
    </div>
    <div className="flex flex-col pt-4">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-4 h-px bg-foreground/20" />
        <span className="text-foreground/80 transform -rotate-90 text-2xl">+</span>
      </div>
      <p className="text-mobile-body md:text-body text-foreground/80 max-w-sm">
        {children}
      </p>
    </div>
  </div>
);


export function AboutStory() {
  return (
    <section
      id="about-story"
      className="relative w-full py-24 md:py-32 lg:py-40 flex items-center justify-center bg-background min-h-screen h-full overflow-hidden"
    >
      {/* Background Text */}
      <div className="absolute inset-0 flex items-start justify-center pointer-events-none  top-[-3rem]">
          <h2 className="font-headline text-[13vw] text-foreground/5 whitespace-nowrap">
            PERFECTION
          </h2>
      </div>

      <div className="mx-auto px-4 z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          
          {/* Left Side: Main Heading */}
          <div className="md:col-span-12 flex flex-col items-center text-center md:text-left w-full">
            <p className="text-[12px] font-body tracking-[0.2em] mb-6 text-foreground/80">
              * ALWAYS INSIDE MY MIND *
            </p>

            <div className='grid grid-cols-12 w-full text-center justify-center'>
            <h2 className="col-start-3 col-span-8 font-headline text-mobile-h2 md:text-tablet-h2 lg:text-[2.8rem] leading-tight tracking-tighter text-foreground/90 text-center ">
              A good design is not just a piece of art.
            </h2>

            <h2 className=" col-start-2 col-span-9 font-headline text-mobile-h2 md:text-tablet-h2 lg:text-[2.8rem] leading-tight tracking-tighter text-foreground/90 text-start">
              It communicates with people in a creative way. 
            </h2>

            <h2 className=" col-start-2 col-span-10 font-headline text-mobile-h2 md:text-tablet-h2 lg:text-[2.8rem] leading-tight tracking-tighter text-foreground/90 text-end">
            It's the way to scream your brand name to world.
            </h2>
            </div>
          </div>

          {/* Right Side: Story Items */}
          <div className="md:col-span-5 md:col-start-8 flex flex-col gap-12 mt-8 md:mt-0">
            <StoryItem number="001">
              Perfection isn’t about being flawless — it’s about pushing ideas beyond limits. Your next idea can be the one. Why wait?
            </StoryItem>
          </div>
          <div className="md:col-span-4 md:col-start-5 flex flex-col gap-12 mt-8 md:mt-0">
          <StoryItem number="002">
              Hi, Doing right by those who trust us isn't a strategy — it's the only way we know how to work.
            </StoryItem>
            </div>
        </div>
      </div>
    </section>
  );
}
