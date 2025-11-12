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
      <div className="hidden lg:flex justify-center w-full items-center relative h-16">
        <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-3.5">
          <AnimatePresence>
            {!isScrolled && (
              <motion.div
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: 'auto' }}
                exit={{ opacity: 0, width: 0 }}
                transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
                className="flex items-center gap-3.5 overflow-hidden"
              >
                <p className="pr-[1rem] w-[100%] text-[12px] text-end text-black/50 font-body line leading-tight whitespace-nowrap">
                  The way to make every pixel  
                  <br />
                  perfect with your ideas
                </p>
                <div className="w-px h-16 bg-foreground/10"></div>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.div
            layout
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 2] }}
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
