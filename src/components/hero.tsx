'use client';

import React, { useEffect, useId, useState } from 'react';
import { Button } from './ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { PixelatedImage } from './pixelated-image';
import {
  motion,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
} from 'framer-motion';

const DIGITS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function AnimatedDigit({ finalDigit }: { finalDigit: number }) {
  const containerHeight = 14; // Corresponds to text-[12px] line-height roughly
  const targetY = -finalDigit * containerHeight;
  const filterId = useId(); // Unique ID for the SVG filter

  // 1. Motion Value for the Y position
  const y = useMotionValue(0);

  // 2. Apply Spring Physics
  // Stiffness: Tension of the spring (higher = faster/snappier)
  // Damping: Friction (lower = more bounce, higher = less bounce)
  const springY = useSpring(y, {
    stiffness: 5,
    damping: 5,
    mass: 0.8,
  });

  // 3. Track Velocity to generate Motion Blur
  const velocity = useVelocity(springY);

  // 4. Transform Velocity into a vertical blur value
  // Input: Velocity ranges from -2000 to 2000 (pixels per second)
  // Output: Blur radius from 0 to 5px
  const blurStrength = useTransform(velocity, [-1500, 0, 1500], [5, 0, 5]);

  // 5. Format the blur for SVG stdDeviation (x, y) -> We only want Y blur
  const blurStdDeviation = useTransform(
    blurStrength,
    (v) => `0 ${v.toFixed(2)}`
  );

  // Trigger the animation on mount
  useEffect(() => {
    y.set(targetY);
  }, [targetY, y]);

  return (
    <div
      style={{ height: containerHeight }}
      className="inline-block overflow-hidden align-bottom relative"
    >
      {/* Hidden SVG Filter Definition */}
      <svg className="absolute w-0 h-0 pointer-events-none">
        <defs>
          <filter id={filterId}>
            {/* We animate the stdDeviation to create dynamic blur */}
            <motion.feGaussianBlur
              in="SourceGraphic"
              stdDeviation={blurStdDeviation}
            />
          </filter>
        </defs>
      </svg>

      <motion.div
        style={{
          y: springY,
          filter: `url(#${filterId})`, // Apply the dynamic filter
          willChange: 'transform', // Optimization for smooth animation
        }}
        className="flex flex-col"
      >
        {DIGITS.map((digit) => (
          <span
            key={digit}
            style={{ height: containerHeight }}
            className="flex items-center justify-center"
          >
            {digit}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export function Hero() {
  return (
    <section
      id="hero"
      className="overflow-hidden relative w-full py-8 pt-[6rem] h-full min-h-screen flex items-center justify-between"
    >
      <div className="flex flex-col items-start justify-between gap-8 px-4 lg:flex-row lg:px-8">
        {/* Left: Image Section */}
        <div className="relative flex w-full items-center justify-center lg:w-1/2">
          <div className="relative w-full lg:max-w-[95vw] lg:min-h-[75vh] md:aspect-[4/3] lg:w-full aspect-[4/4]">
            <PixelatedImage
              images={['/hero-image.png', '/hero-image-2.png']}
              className="object-contain"
            />

            <Image
              fill
              className="inset-0 z-[-1] object-contain scale-y-[1.1]"
              alt="Hero section decoration"
              src="/hero-section-decoration.svg"
            />
          </div>
        </div>

        {/* Right: Text Section */}
        <div className="flex w-full flex-col gap-[5rem] md:gap-2 lg:w-1/2">
          <div className="flex w-full flex-col lg:max-w-[70%] ">
            {/**year text tansition  */}
            <div className="flex flex-row gap-2 items-baseline text-[0.8rem] ">
              <span className="">*</span>

              <span className="flex items-baseline text-[12px] leading-none font-bold ">
                202 <AnimatedDigit finalDigit={5} />
              </span>

              <span className="">*</span>
            </div>

            <h1 className="font-headline text-mobile-h1 leading-none text-[#29261f] md:text-tablet-h1 lg:text-h1 lg:max-w-[30%]">
              UI/UX DESIGNER
            </h1>

            <span className="text-[12px] text-end w-full">
              * BASED IN SRI LANKA *
            </span>
          </div>

          <div className="flex flex-col items-start gap-4 md:max-w-[95%]">
            <h2 className="font-body text-mobile-body leading-tight text-foreground md:text-body">
              Doing right by those who trust us isn't a strategy — it's the only
              way we know how to work.
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
