'use client';

import React, { useMemo, useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/* ---------------- helpers ---------------- */
const splitLine = (text: string) =>
  [...text].map((ch) => (ch === ' ' ? '\u00A0' : ch));

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
  const bgTitleRef = useRef<HTMLHeadingElement | null>(null);

  const bgLines = useMemo(() => ['PERFECTION'], []);

  useLayoutEffect(() => {
    const el = bgTitleRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      const chars = el.querySelectorAll('.at__char');
      if (!chars.length) return;

      // 1. Set Initial "Brutal" State
      gsap.set(chars, {
        x: '-150%',        // Start much further left for high momentum
        opacity: 0, 
             // Extremely heavy tilt (editorial style)
        filter: 'blur(20px)', // Strong motion blur
       
      });

      const tl = gsap.timeline({ paused: true }).to(chars, {
        // 2. Animate to Final State
        x: '0%',
        y: '0%',
        opacity: 1,
               // Snap to straight
        filter: 'blur(0px)',
     
        
        // 3. Timing Configuration for "Brutal" feel
        ease: 'power4.out', // Very fast impact, sudden stop (heavy feel)
        stagger: 0.1,       // distinct delay between letters (The "Editorial" beat)
        duration: 1.5,      // Each letter takes time to settle
        overwrite: 'auto',
      });

      ScrollTrigger.create({
        trigger: el,
        start: 'top 85%',
        once: true,
        invalidateOnRefresh: true,
        onEnter: () => tl.play(0),
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about-story"
      className="relative w-full py-24 md:py-32 lg:py-40 flex items-center justify-center bg-background min-h-screen overflow-hidden"
    >
      {/* ---------- Background GSAP Animated Text ---------- */}
      <div className="absolute inset-0 flex items-start justify-center pointer-events-none top-[1.5rem] tracking-[1.2rem] line-through">
        <h2
          ref={bgTitleRef}
          className="at font-headline text-[13vw] text-foreground/30 whitespace-nowrap mix-blend-soft-light "
          style={{ willChange: 'transform, opacity, filter' }}
        >
          {bgLines.map((line, i) => (
            <div key={i} className="at__line">
              {splitLine(line).map((char, j) => (
                <span key={j} className="at__wrap inline-block overflow-hidden">
                  <span className="at__char inline-block origin-center transform-gpu">
                    {char}
                  </span>
                </span>
              ))}
            </div>
          ))}
        </h2>
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