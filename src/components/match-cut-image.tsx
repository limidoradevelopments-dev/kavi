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
  const imageRef = useRef<HTMLImageElement | null>(null);
  const [currentSrc, setCurrentSrc] = useState(src1);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleTransition = () => {
    if (isAnimating || !imageRef.current) return;

    setIsAnimating(true);
    const nextSrc = currentSrc === src1 ? src2 : src1;

    const img = imageRef.current;
    const tl = gsap.timeline({
      onComplete: () => setIsAnimating(false),
    });

    const shake = {
      x: '+=5',
      y: '+=3',
      duration: 0.02,
      repeat: 3,
      yoyo: true,
      ease: 'power1.inOut',
    };

    // 🎬 1) WHIP-PAN + MOTION BLUR + LENS DISTORT
    tl.to(img, {
      duration: 0.22,
      x: -140,
      scale: 1.18,
      rotateZ: -1.8,
      filter:
        'blur(12px) brightness(2.3) contrast(3) saturate(1.3) hue-rotate(-5deg)',
      ease: 'power3.in',
    })

      // 🔥 MINI CAMERA SHAKE DURING THE WHIP
      .to(img, shake, '<')

      // 🎞 2) EXPOSURE FLASH + CHROMATIC ABERRATION
      .to(img, {
        duration: 0.12,
        filter:
          'blur(18px) brightness(3.2) contrast(4) saturate(1.7) drop-shadow(4px 0px 4px rgba(255,0,80,0.6))',
        ease: 'power1.inOut',
      })

      // 🎬 HARD CUT SWITCH (NO FADE)
      .add(() => {
        img.src = nextSrc;
      })

      // 🎥 3) REVERSE WHIP + RGB SPLIT SETTLE
      .fromTo(
        img,
        {
          x: 160,
          scale: 1.12,
          rotateZ: 1.4,
          filter:
            'blur(10px) brightness(2) contrast(3) saturate(1.2) drop-shadow(-4px 0px 4px rgba(0,150,255,0.5))',
        },
        {
          duration: 0.34,
          x: 0,
          scale: 1,
          rotateZ: 0,
          filter:
            'blur(0px) brightness(1) contrast(1) saturate(1) drop-shadow(0px 0px 0px rgba(0,0,0,0))',
          ease: 'power4.out',
        }
      )

      // 🎥 subtle "settle bounce" like real camera stabilization
      .to(
        img,
        {
          duration: 0.15,
          x: '-=6',
          y: '+=4',
          rotateZ: -0.4,
          ease: 'power2.out',
        },
        '-=0.1'
      )
      .to(img, {
        duration: 0.2,
        x: 0,
        y: 0,
        rotateZ: 0,
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
          src={currentSrc}
          alt="Cinematic Match Cut Image"
          fill
          className="object-cover will-change-transform will-change-filter"
          sizes="(max-width: 768px) 100vw, 80vw"
          onLoadingComplete={(img) => {
            imageRef.current = img;
          }}
        />
      </div>

      <div className="absolute bottom-4 z-10">
        <Button onClick={handleTransition} disabled={isAnimating}>
          {isAnimating ? 'Cutting...' : 'Cinematic Cut'}
        </Button>
      </div>
    </div>
  );
}
