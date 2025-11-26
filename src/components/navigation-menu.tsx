'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const navItems = [
  { name: 'HOME', href: '#hero' },
  { name: 'ABOUT', href: '#about-story' },
  { name: 'WORKS', href: '#selected-works' },
  { name: 'PROCESS', href: '#' },
  { name: 'CONTACT', href: '#contact' },
];

export function NavigationMenu({ onClose }: { onClose: () => void }) {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    }
    onClose();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className="fixed inset-0 z-[60] bg-background text-foreground/80 flex flex-col justify-between p-4 sm:p-6 lg:p-8"
    >
      {/* Top section is handled by the fixed header */}
      <div></div>

      {/* Center Navigation Links */}
      <div className="flex-grow flex items-center justify-start">
        <nav>
          <ul>
            {navItems.map((item, index) => (
              <li key={item.name} className="relative">
                <Link
                  href={item.href}
                  onClick={(e) => handleLinkClick(e, item.href)}
                  className="font-headline text-[3.5rem] md:text-[4.5rem] lg:text-[5.5rem] leading-none tracking-tighter hover:text-foreground transition-colors duration-300"
                >
                  {item.name}
                </Link>
                {index === 0 && (
                  <div className="absolute left-full top-1/2 flex items-center ml-4 md:ml-8">
                    <div className="w-16 h-px bg-foreground/50"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-foreground/50 ml-2"></div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Bottom Information */}
      <div className="w-full flex flex-col sm:flex-row justify-between items-end text-[10px] uppercase tracking-widest font-body">
        <div className="mb-4 sm:mb-0">
          <p>ALRIGHT RESERVED</p>
          <p>2025</p>
        </div>
        <div className="mb-4 sm:mb-0 text-center">
            <p>D&D by Kavi</p>
        </div>
        <div className="text-right">
          <p>PERFECTION ISN'T ABOUT BEING FLAWLESS—IT'S</p>
          <p>ABOUT PUSHING IDEAS BEYOND LIMITS.</p>
          <p>YOUR NEXT IDEA CAN BE THE ONE.</p>
          <p>WHY WAIT?</p>
          <p className="mt-2">CREATIVITY + NEXT-LEVEL VISION = PERFECTION</p>
        </div>
      </div>
    </motion.div>
  );
}
