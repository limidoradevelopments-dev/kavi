'use client';

import React, { useState, useEffect, useRef, useCallback } from "react";

interface PixelatedImageProps {
  images: string[];
  interval?: number;
  transitionDuration?: number;
  className?: string;
  style?: React.CSSProperties;
  pixelationFactor?: number;
  glitchIntensity?: number;
}

export function PixelatedImage({
  images,
  interval = 4000,
  transitionDuration = 1500,
  className = "",
  style = {},
  pixelationFactor = 40,
  glitchIntensity = 8,
}: PixelatedImageProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const loadedCount = useRef(0);
  const animationRef = useRef<number>();
  const startTimeRef = useRef<number>(0);
  const phaseRef = useRef<'IDLE' | 'TRANSITION'>('IDLE');
  const lastSwitchTimeRef = useRef<number>(0);

  // Preload images
  useEffect(() => {
    if (!images || images.length === 0) return;
    loadedCount.current = 0;
    imagesRef.current = images.map((src) => {
      const img = new Image();
      img.src = src;
      img.crossOrigin = "anonymous";
      img.onload = () => loadedCount.current++;
      return img;
    });
    setCurrentIndex(0);
    setNextIndex(1);
    lastSwitchTimeRef.current = performance.now();
  }, [images]);

  // Handle container resize for responsive fit
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const resizeObserver = new ResizeObserver(() => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const rect = container.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      if (canvas.width !== rect.width * dpr || canvas.height !== rect.height * dpr) {
        canvas.width = rect.width * dpr;
        canvas.height = rect.height * dpr;
        const ctx = canvas.getContext('2d');
        if (ctx) ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx?.scale(dpr, dpr);
      }
    });

    resizeObserver.observe(container);
    return () => resizeObserver.disconnect();
  }, []);

  // Render function
  const render = useCallback((timestamp: number) => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container || loadedCount.current !== images.length) {
      animationRef.current = requestAnimationFrame(render);
      return;
    }

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const rect = container.getBoundingClientRect();
    const w = rect.width;
    const h = rect.height;

    // Transition logic
    if (phaseRef.current === 'IDLE' && timestamp - lastSwitchTimeRef.current > interval) {
      phaseRef.current = 'TRANSITION';
      startTimeRef.current = timestamp;
    }

    let progress = 0;
    if (phaseRef.current === 'TRANSITION') {
      progress = (timestamp - startTimeRef.current) / transitionDuration;
      if (progress >= 1) {
        progress = 0;
        phaseRef.current = 'IDLE';
        lastSwitchTimeRef.current = timestamp;
        setCurrentIndex((prev) => (prev + 1) % images.length);
        setNextIndex((prev) => (prev + 1) % images.length);
      }
    }

    // Easing for pixelation (Peaks at 0.5)
    const spike = Math.sin(progress * Math.PI);
    const ease = Math.pow(spike, 2);

    const currentImg = imagesRef.current[currentIndex];
    const nextImg = imagesRef.current[nextIndex];
    const activeImg = progress < 0.5 ? currentImg : nextImg;
    if (!activeImg) return;

    // Object-fit: contain logic
    const imgRatio = activeImg.naturalWidth / activeImg.naturalHeight;
    const canvasRatio = w / h;
    let drawW, drawH, offsetX, offsetY;

    if (canvasRatio > imgRatio) {
      drawH = h;
      drawW = h * imgRatio;
      offsetX = (w - drawW) / 2;
      offsetY = 0;
    } else {
      drawW = w;
      drawH = w / imgRatio;
      offsetX = 0;
      offsetY = (h - drawH) / 2;
    }

    // Calculate pixelation
    const pixelSize = 1 + Math.floor(ease * pixelationFactor);
    const tempWidth = Math.max(1, Math.floor(drawW / pixelSize));
    const tempHeight = Math.max(1, Math.floor(drawH / pixelSize));

    // Clear canvas
    ctx.clearRect(0, 0, w, h);

    // Create offscreen canvas for pixelation
    const offscreen = document.createElement('canvas');
    offscreen.width = tempWidth;
    offscreen.height = tempHeight;
    const offCtx = offscreen.getContext('2d');
    if (!offCtx) return;
    
    offCtx.imageSmoothingEnabled = false;
    offCtx.drawImage(activeImg, 0, 0, activeImg.naturalWidth, activeImg.naturalHeight, 0, 0, tempWidth, tempHeight);

    // --- GLITCH LOGIC START ---
    ctx.imageSmoothingEnabled = false;

    // Calculate Glitch Amount based on progress
    // We use 'ease' (bell curve) so it glitches most at the swap (middle)
    const glitchPower = ease * glitchIntensity; 
    
    // 1. Base Shake (Random x/y offset)
    let shakeX = 0;
    let shakeY = 0;
    if (glitchPower > 0) {
        shakeX = (Math.random() - 0.5) * glitchPower;
        shakeY = (Math.random() - 0.5) * glitchPower;
    }

    // 2. Draw Main Image (with shake)
    ctx.drawImage(offscreen, 0, 0, tempWidth, tempHeight, offsetX + shakeX, offsetY + shakeY, drawW, drawH);

    // 3. Random Horizontal Slices (The "Glitch" Effect)
    if (phaseRef.current === 'TRANSITION' && glitchPower > 0) {
        const slices = Math.floor(Math.random() * 3) + 1; // 1 to 3 slices per frame
        
        for (let i = 0; i < slices; i++) {
            // Only trigger random slices occasionally
            if (Math.random() > 0.3) continue;

            // Random slice position and height
            const sliceY = Math.floor(Math.random() * tempHeight);
            const sliceH = Math.floor(Math.random() * (tempHeight / 4)) + 1;
            
            // Random horizontal offset for the slice
            const sliceOffsetX = (Math.random() - 0.5) * glitchPower * 10; // Stronger offset for slices

            // Source Y, H -> Dest Y, H calculations
            const destY = offsetY + (sliceY / tempHeight) * drawH;
            const destH = (sliceH / tempHeight) * drawH;

            // Draw the slice shifted
            ctx.drawImage(
                offscreen,
                0, sliceY, tempWidth, sliceH, // Source: full width, random Y strip
                offsetX + sliceOffsetX, destY, drawW, destH // Dest: shifted X
            );
        }

        // 4. Chromatic Aberration simulation (Draw red/blue ghosting)
        // Only at peak intensity
        if (ease > 0.6) {
           ctx.globalAlpha = 0.1; // Faint
           // Red shift
           ctx.drawImage(offscreen, 0, 0, tempWidth, tempHeight, offsetX + shakeX + (glitchPower * 2), offsetY + shakeY, drawW, drawH);
           // Blue shift
           ctx.drawImage(offscreen, 0, 0, tempWidth, tempHeight, offsetX + shakeX - (glitchPower * 2), offsetY + shakeY, drawW, drawH);
           ctx.globalAlpha = 1.0; // Reset
        }
    }
    // --- GLITCH LOGIC END ---

    animationRef.current = requestAnimationFrame(render);
  }, [interval, transitionDuration, pixelationFactor, images.length, currentIndex, nextIndex, glitchIntensity]);

  useEffect(() => {
    animationRef.current = requestAnimationFrame(render);
    return () => cancelAnimationFrame(animationRef.current);
  }, [render]);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{
        ...style,
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        imageRendering: "pixelated",
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          width: "100%",
          height: "100%",
          display: "block"
        }}
      />
    </div>
  );
}