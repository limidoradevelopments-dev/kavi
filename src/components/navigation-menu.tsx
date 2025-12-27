'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';

const navItems = [
  { name: 'HOME', href: '#hero' },
  { name: 'ABOUT', href: '#about-story' },
  { name: 'WORKS', href: '#selected-works' },
  { name: 'PROCESS', href: '#' },
  { name: 'CONTACT', href: '#contact' },
];

// Stagger animation variants for a smoother feel
const containerVars: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const itemVars: Variants = {
  initial: { y: 20, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: [0.33, 1, 0.68, 1] },
  },
  exit: { y: 20, opacity: 0 },
};

export function NavigationMenu({ onClose }: { onClose: () => void }) {
  const [time, setTime] = useState('');

  useEffect(() => {
    setTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
  }, []);


  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    onClose();
  };

  return (
    <motion.div
      variants={containerVars}
      initial="initial"
      animate="animate"
      exit="exit"
      className="fixed inset-0 z-[60] flex flex-col justify-between bg-background text-foreground/80 p-6 lg:p-12 h-screen w-screen overflow-hidden"
    >
      {/* Spacer for where the Fixed Header usually sits */}
      <div className="h-16 lg:h-0 shrink-0" />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col justify-center overflow-y-auto no-scrollbar">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0 items-start lg:items-center w-full h-full">
          
          {/* Navigation Links (Desktop: Left Side, Mobile: Top) */}
          <nav className="lg:col-span-8 w-full">
            <ul className="flex flex-col gap-2 lg:gap-4">
              {navItems.map((item, index) => (
                <motion.li key={item.name} variants={itemVars} className="relative w-fit">
                  <Link
                    href={item.href}
                    onClick={(e) => handleLinkClick(e, item.href)}
                    className="font-headline text-mobile-h2 md:text-tablet-h2 lg:text-h2  leading-[0.9] tracking-tighter hover:text-foreground transition-colors duration-300 block"
                  >
                    {item.name}
                  </Link>
                  
                  {/* Decorative Line for First Item */}
                  {index === 0 && (
                    <div className="hidden lg:flex absolute left-full top-1/2 -translate-y-1/2 items-center ml-8">
                      <div className="w-16 h-px bg-foreground/50"></div>
                      <div className="w-1.5 h-1.5 rounded-full bg-foreground/50 ml-2"></div>
                    </div>
                  )}
                </motion.li>
              ))}
            </ul>
          </nav>

          {/* Text Content Side (Desktop: Right Side, Mobile: Bottom) */}
          <motion.div 
            variants={itemVars}
            className="lg:col-span-4 flex flex-col gap-8 lg:gap-12 w-full text-mobile-tagline md:text-tagline  tracking-widest font-light h-full justify-end"
          >
            {/* Split Top Text */}
            <div className="flex flex-col lg:flex-row justify-between w-full border-t border-foreground/10 pt-4 lg:border-none lg:pt-0">
              <div className="lg:max-w-[50%]">
                <p>PERFECTION ISN'T ABOUT BEING FLAWLESS—IT'S</p>
              </div>
              <div className="mt-2 lg:mt-0">
                <p>{time}</p>
              </div>
            </div>

            {/* Main Paragraph Block */}
            <div className="space-y-1 ">
              <p>PERFECTION ISN'T ABOUT BEING FLAWLESS—IT'S ABOUT PUSHING IDEAS BEYOND LIMITS.</p>
              <p>YOUR NEXT IDEA CAN BE THE ONE.</p>
              <p className="mt-4">WHY WAIT?</p>
              <p className="font-bold text-foreground">CREATIVITY + NEXT-LEVEL VISION = PERFECTION</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer Information */}
      <motion.div 
        variants={itemVars}
        className="shrink-0 flex flex-col sm:flex-row justify-between items-end text-[11px] uppercase tracking-widest pt-6 border-t border-foreground/10 lg:border-none"
      >
        <div className="w-full sm:w-auto text-left">
          <p>© {new Date().getFullYear()} ALL RIGHTS RESERVED</p>
        </div>
        <div className="w-full sm:w-auto text-left sm:text-right mt-2 sm:mt-0">
          <p>D&D by Kavi</p>
        </div>
      </motion.div>
    </motion.div>
  );
}
