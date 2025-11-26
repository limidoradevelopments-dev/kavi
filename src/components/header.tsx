'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from './ui/button';

export function Header() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const timeString = now.toLocaleTimeString('en-US', {
        timeZone: 'Asia/Colombo',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      });
      setTime(timeString);
    };

    updateClock();
    const intervalId = setInterval(updateClock, 1000); // Update every second

    return () => clearInterval(intervalId);
  }, []);

  return (
    <header className="fixed top-0 left-0 z-50 w-full grid grid-cols-2 items-center justify-between px-4 sm:px-6 lg:px-8">
      {/* LEFT — Logo and time */}
      <div className="flex justify-start w-full items-center relative h-[3.5rem]">
        <div className="absolute left-0 flex items-center gap-4">
          {/* Logo */}
          <Link href="/" aria-label="Home">
            <Image
              width={40}
              height={40}
              className="w-[2.6rem] h-[2.6rem]"
              alt="Logo"
              src="/logo.png"
            />
          </Link>

          {/* Time */}
          <div className="hidden lg:flex items-center gap-2">
            <div className="w-px h-16 bg-foreground/10 origin-center" />
            <p className="text-[12px] text-black/50 font-body leading-tight whitespace-nowrap">
              {time ? `${time} (GMT+5:30)` : 'Loading...'}
            </p>
          </div>
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
