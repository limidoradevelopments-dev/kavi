'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from './ui/button';

export function Header() {
  return (
    <header className="absolute left-1/2 top-0 z-50 w-full max-w-7xl -translate-x-1/2 flex items-center justify-between border-b border-black/10 py-4 px-4 sm:px-6 lg:px-8">
      <Button asChild className="h-auto bg-[#29261f] hover:bg-[#29261f]/90 px-4 py-1.5 rounded-none">
        <Link href="#contact" className="tracking-wide text-white">
          CONTACT
        </Link>
      </Button>
      <div className="hidden md:inline-flex items-center justify-center gap-3.5 self-stretch">
        <p className="w-44 text-sm text-right text-black/50 font-body">
          The way to make every pixel perfect with your ideas
        </p>
        <div className="w-px h-16 bg-foreground/10"></div>
        <Link href="/" aria-label="Home">
          <Image
            width={60}
            height={60}
            className="w-16 h-16"
            alt="Logo"
            src="/logo.png"
          />
        </Link>
      </div>
      <Button variant="ghost" size="icon" className="w-9 h-auto p-0 md:hidden rounded-none">
        <Image src="/hamburger.svg" alt="Menu" width={32} height={32} />
      </Button>
       <div className="hidden md:flex">
         <Button variant="ghost" size="icon" className="w-9 h-auto p-0 rounded-none">
            <Image src="/hamburger.svg" alt="Menu" width={32} height={32} />
          </Button>
       </div>
    </header>
  );
}
