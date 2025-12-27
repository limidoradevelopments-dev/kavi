'use client';

import React, { useMemo, useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Helper to split text into characters, handling spaces
const splitLine = (text: string) =>
  [...text].map((ch) => (ch === ' ' ? '\u00A0' : ch));

type AnimatedTitleProps = {
  children: string;
  className?: string;
};

export function AnimatedTitle({ children, className }: AnimatedTitleProps) {
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const lines = useMemo(() => [children], [children]);

  useLayoutEffect(() => {
    const el = titleRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      const chars = el.querySelectorAll('.anim-title_char');
      if (!chars.length) return;

      gsap.set(chars, {
        x: '-150%',
        opacity: 0,
        filter: 'blur(20px)',
      });

      const tl = gsap.timeline({ paused: true }).to(chars, {
        x: '0%',
        y: '0%',
        opacity: 1,
        filter: 'blur(0px)',
        ease: 'power4.out',
        stagger: 0.1,
        duration: 1.5,
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
    <h2
      ref={titleRef}
      className={className}
      style={{ willChange: 'transform, opacity, filter' }}
    >
      {lines.map((line, i) => (
        <div key={i} className="anim-title_line">
          {splitLine(line).map((char, j) => (
            <span key={j} className="anim-title_wrap inline-block overflow-hidden">
              <span className="anim-title_char inline-block origin-center transform-gpu">
                {char}
              </span>
            </span>
          ))}
        </div>
      ))}
    </h2>
  );
}
