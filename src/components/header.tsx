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
    <header className="fixed top-0 left-0 z-50 w-full flex items-center justify-between border-b border-black/10 py-1 px-4 sm:px-6 lg:px-8 bg-background/80 backdrop-blur-sm">
      <div className="md:hidden">
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

      <Button
        asChild
        className="h-auto bg-[#29261f] text-[0.650rem] hover:bg-[#29261f]/90 px-4 py-1.5 hidden md:block rounded-none"
      >
        <Link href="#contact" className="tracking-wide text-white">
          CONTACT
        </Link>
      </Button>

      <div className="hidden md:inline-flex items-center justify-center gap-3.5 self-stretch overflow-hidden">
        <AnimatePresence>
          {!isScrolled && (
            <motion.div
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="flex items-center gap-3.5"
            >
              <p className="w-44 text-[12px] text-right text-black/50 font-body line leading-tight">
                The way to make every pixel perfect with your ideas
              </p>
              <div className="w-px h-16 bg-foreground/10"></div>
            </motion.div>
          )}
        </AnimatePresence>
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

      <Button
        variant="ghost"
        size="icon"
        className="w-9 h-auto p-0 rounded-none md:hidden"
      >
        <Image
          src="/hamburger.svg"
          alt="Menu"
          width={32}
          height={32}
          className="scale-[2]"
        />
      </Button>
      <div className='hidden md:block'>
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
