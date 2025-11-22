'use client';

import { useState, useEffect, useRef, useCallback, CSSProperties } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface PixelatedImageProps {
  images: string[];
  interval?: number;
  className?: string;
  alt?: string;
  style?: CSSProperties;
}

export const PixelatedImage: React.FC<PixelatedImageProps> = ({
  images,
  interval = 4000,
  className = '',
  alt = '',
  style = {},
}) => {
  const [index, setIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imgObj = useRef<HTMLImageElement | null>(null);
  const animationFrame = useRef<number | null>(null);

  const preloadImages = useCallback(() => {
    images.forEach((src) => {
      const img = new window.Image();
      img.src = src;
    });
  }, [images]);

  // -----------------------------
  // Pixelation Animation
  // -----------------------------
  const animatePixelation = useCallback(() => {
    if (!canvasRef.current || !imgObj.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const img = imgObj.current;

    if (!ctx) return;

    const width = canvas.clientWidth;
    const height = canvas.clientHeight;

    canvas.width = width;
    canvas.height = height;

    let frame = 0;
    const totalFrames = 35;

    const easeInOutCubic = (t: number) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    const step = () => {
      if (!canvasRef.current) return; // Ensure canvas is still there
      const progress = easeInOutCubic(frame / totalFrames);
      const pixelSize = 1 + progress * 40;

      ctx.imageSmoothingEnabled = false;

      const scaledW = Math.max(1, Math.floor(width / pixelSize));
      const scaledH = Math.max(1, Math.floor(height / pixelSize));

      ctx.clearRect(0, 0, width, height);

      // Draw tiny scaled version (pixel source)
      ctx.drawImage(img, 0, 0, scaledW, scaledH);

      // Stretch scaled version to full size (pixelation)
      ctx.drawImage(canvas, 0, 0, scaledW, scaledH, 0, 0, width, height);

      frame++;
      if (frame <= totalFrames) {
        animationFrame.current = requestAnimationFrame(step);
      }
    };

    step();
  }, []);

  // -----------------------------
  // Auto-loop through images
  // -----------------------------
  useEffect(() => {
    preloadImages();
    if (images.length <= 1) return;

    const id = setInterval(() => {
      setTransitioning(true);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % images.length);
        setTimeout(() => setTransitioning(false), 300);
      }, 300);
    }, interval);

    return () => clearInterval(id);
  }, [images, interval, preloadImages]);

  // -----------------------------
  // Trigger Pixelation on change
  // -----------------------------
  useEffect(() => {
    if (!transitioning) return;

    const img = new window.Image();
    img.crossOrigin = "anonymous";
    img.src = images[index];
    img.onload = () => {
      imgObj.current = img;
      animatePixelation();
    };

    return () => {
      if (animationFrame.current) cancelAnimationFrame(animationFrame.current);
    };
  }, [transitioning, index, images, animatePixelation]);

  const currentSrc = images[index];

  return (
    <div className="absolute inset-0">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: transitioning ? 0 : 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          className="absolute inset-0"
        >
          <Image
            src={currentSrc}
            alt={alt}
            fill
            className={className}
            style={{
              ...style,
              filter: transitioning ? 'blur(20px)' : 'blur(0px)',
              transition: 'filter 0.35s ease',
              width: '100%',
              height: '100%',
            }}
            onLoad={() => setIsLoaded(true)}
            priority={index === 0}
          />
        </motion.div>
      </AnimatePresence>

      {(transitioning || !isLoaded) && (
        <canvas
          ref={canvasRef}
          className={className}
          style={{ ...style, position: 'absolute', inset: 0, zIndex: 20, width: '100%', height: '100%' }}
        />
      )}
    </div>
  );
};
