'use client';

import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { Button } from './ui/button';

interface MatchCutImageProps {
  src1: string;
  src2: string;
}

export function MatchCutImage({ src1, src2 }: MatchCutImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const [currentSrc, setCurrentSrc] = useState(src1);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleTransition = () => {
    if (isAnimating || !imageRef.current) return;

    setIsAnimating(true);
    const nextSrc = currentSrc === src1 ? src2 : src1;

    const tl = gsap.timeline({
      onComplete: () => {
        setIsAnimating(false);
      },
    });

    // Phase 1: Whip-out with a "digital" feel
    tl.to(imageRef.current, {
      duration: 0.2,
      scale: 1.1,
      filter: 'brightness(2.5) contrast(3)',
      ease: 'steps(8)',
    })
      .to(imageRef.current, {
        duration: 0.1,
        scale: 0.9,
        filter: 'brightness(1.5) contrast(2)',
        ease: 'power2.in',
      })
      // Phase 2: Instant Cut
      .add(() => {
        setCurrentSrc(nextSrc);
      })
      // Phase 3: Settle-in
      .set(imageRef.current, {
        scale: 1.2,
        filter: 'brightness(3) contrast(3)',
      })
      .to(imageRef.current, {
        duration: 0.4,
        scale: 1,
        filter: 'brightness(1) contrast(1)',
        ease: 'power3.out',
      });
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-4xl mx-auto aspect-video overflow-hidden rounded-lg shadow-2xl flex flex-col items-center justify-center gap-4"
    >
      <div className="relative w-full h-full">
        <Image
          ref={imageRef}
          key={currentSrc}
          src={currentSrc}
          alt="Match cut transition image"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 80vw"
        />
      </div>
      <div className="absolute bottom-4 z-10">
        <Button onClick={handleTransition} disabled={isAnimating}>
          {isAnimating ? 'Animating...' : 'Trigger Cut'}
        </Button>
      </div>
    </div>
  );
}
