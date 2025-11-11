'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './ui/button';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 z-50 w-full grid grid-cols-2 md:grid-cols-3 items-center justify-between border-b border-black/10 py-1 px-4 sm:px-6 lg:px-8 bg-background">
      {/* --- CTA BUTTON (Left) --- */}
      <div className="hidden md:flex justify-start">
        <Button
          asChild
          className="h-auto bg-[#29261f] text-white text-[0.650rem] hover:bg-[#29261f]/90 px-4 py-1.5 rounded-none font-button uppercase"
        >
          <Link href="#contact" className="tracking-wide">
            CONTACT
          </Link>
        </Button>
      </div>

      {/* --- MOBILE LOGO (Left) --- */}
      <div className="flex justify-start md:hidden">
        <Link href="/" aria-label="Home">
          <Image
            width={40}
            height={40}
            className="w-16 h-16"
            alt="Logo"
            src="/logo.png"
          />
        </Link>
      </div>

      {/* --- ANIMATION & LOGO (Center) --- */}
      <div className="hidden lg:flex justify-center w-full items-center relative">
        <div className="flex items-center justify-center gap-3.5 self-stretch overflow-hidden">
          <AnimatePresence>
            {!isScrolled && (
              <motion.div
                initial={{ x: '100%', opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: '100%', opacity: 0 }}
                transition={{ duration: 1.9, ease: 'easeInOut' }}
                className="flex items-center gap-3.5"
              >
                <p className="w-44 text-[12px] text-right text-black/50 font-body line leading-tight">
                  The way to make every pixel perfect with your ideas
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {!isScrolled && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.9, ease: 'easeInOut' }}
              >
                <div className="w-px h-16 bg-foreground/10"></div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <motion.div
          layout
          transition={{ duration: 1.4, ease: [0.6, 0.05, 0.01, 0.9] }}
          className=""
        >
          <Link href="/" aria-label="Home">
            <Image
              width={40}
              height={40}
              className="w-16 h-16"
              alt="Logo"
              src="/logo.png"
            />
          </Link>
        </motion.div>
      </div>

      {/* --- HAMBURGER MENU (Right) --- */}
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
