import React from 'react';
import { Button } from './ui/button';
import Link from 'next/link';

export function ContactSection() {
  return (
    <section id="contact" className="w-full py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 text-center">
        <p className="text-[12px] font-body tracking-[0.2em] mb-4 text-foreground/80">
          * HAVE A PROJECT IN MIND? *
        </p>
        <h2 className="font-headline text-mobile-h2 md:text-tablet-h2 lg:text-h2 leading-tight text-foreground/90 mb-8">
          Let's create something
          <br />
          amazing together.
        </h2>
        <Button asChild className="bg-black/80 hover:bg-black text-white">
          <Link href="mailto:hello@kavi.design">GET IN TOUCH</Link>
        </Button>
      </div>
    </section>
  );
}
