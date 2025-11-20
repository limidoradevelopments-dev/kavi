'use client';

import React, { useRef, useState, useEffect } from 'react';
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

    // Phase 1: Whip-out
    tl.to(imageRef.current, {
      duration: 0.3,
      scale: 1.2,
      filter: 'blur(20px) brightness(2.5)',
      ease: 'power2.in',
    })
      // Phase 2: Instant Cut
      .add(() => {
        setCurrentSrc(nextSrc);
      })
      // Phase 3: Settle-in
      .set(imageRef.current, {
        scale: 0.8,
        filter: 'blur(20px) brightness(2.5)',
      })
      .to(imageRef.current, {
        duration: 0.5,
        scale: 1,
        filter: 'blur(0px) brightness(1)',
        ease: 'power2.out',
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