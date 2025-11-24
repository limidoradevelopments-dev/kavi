'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './ui/button';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // === Left-to-center and left-out variants ===

  const parentVariants = {
    hidden: {
      opacity: 0,
      x: -40,
      filter: 'blur(8px)',
    },
    visible: {
      opacity: 1,
      x: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.8,
        ease: [0.65, 0, 0.35, 1],
        staggerChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      x: -40,
      filter: 'blur(6px)',
      transition: {
        duration: 0.55,
        ease: [0.65, 0, 0.35, 1],
        staggerChildren: 0.07,
        staggerDirection: -1,
      },
    },
  };

  const separatorVariants = {
    hidden: { opacity: 0, scaleY: 0 },
    visible: {
      opacity: 1,
      scaleY: 1,
      transition: {
        duration: 0.7,
        ease: [0.77, 0, 0.175, 1],
      },
    },
    exit: {
      opacity: 0,
      scaleY: 0,
      transition: {
        duration: 0.45,
        ease: [0.65, 0, 0.35, 1],
      },
    },
  };

  const textVariants = {
    hidden: {
      opacity: 0,
      x: -40,
      filter: 'brightness(0.7)',
    },
    visible: {
      opacity: 1,
      x: 0,
      filter: 'brightness(1)',
      transition: {
        duration: 0.75,
        ease: [0.6, 0, 0.2, 1],
      },
    },
    exit: {
      opacity: 0,
      x: -40,
      filter: 'brightness(0.6)',
      transition: {
        duration: 0.5,
        ease: [0.6, 0, 0.2, 1],
      },
    },
  };

  return (
    <header className="fixed top-0 left-0 z-50 w-full grid grid-cols-2 items-center justify-between border-b border-black/10  px-4 sm:px-6 lg:px-8">

      {/* LEFT — Logo and animated text */}
      <div className="flex justify-start w-full items-center relative h-[3.5rem]">
        <div className="absolute left-0 flex items-center gap-4">

          {/* Logo */}
          <motion.div
            layout
            transition={{ duration: 0.7, ease: [0.6, 0.01, 0.05, 0.95] }}
          >
            <Link href="/" aria-label="Home">
              <Image
                width={40}
                height={40}
                className="w-[2.6rem] h-[2.6rem]"
                alt="Logo"
                src="/logo.png"
              />
            </Link>
          </motion.div>

          {/* Cinematic sliding text & divider */}
          <AnimatePresence mode="wait">
            {!isScrolled && (
              <motion.div
                key="textblock"
                className="hidden lg:flex items-center gap-4 overflow-hidden"
                variants={parentVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                {/* Vertical separator (middle) */}
                <motion.div
                  variants={separatorVariants}
                  className="w-px h-16 bg-foreground/10 origin-center"
                />

                {/* Sliding text */}
                <motion.p
                  variants={textVariants}
                  className="text-[12px] text-black/50 font-body leading-tight whitespace-nowrap"
                >
                  The way to make every pixel
                  <br />
                  perfect with your ideas
                </motion.p>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </div>

      {/* RIGHT — Hamburger */}
      <div className="flex justify-end">
        <Button
          variant="ghost"
          size="icon"
          className="w-9 h-auto p-0 rounded-none"
        >
          <Image
            src="/hamburger.svg"
            alt="Menu"
            width={32}
            height={32}
            className="scale-[2]"
          />
        </Button>
      </div>
    </header>
  );
}
