import React from 'react';
import { Button } from './ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Hero() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-background');
  
  return (
    <section
      id="hero"
      className="relative flex h-screen min-h-[600px] w-full items-center justify-center"
    >
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          priority
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-background/70 dark:bg-background/80" />
      <div className="relative z-10 text-center text-primary-foreground">
        <div className="mx-auto max-w-3xl rounded-lg bg-black/20 p-8 backdrop-blur-sm">
          <h1 className="font-headline text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
            Alex Doe
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-200 sm:text-xl">
            Full-Stack Developer & UI/UX Enthusiast
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button asChild size="lg">
              <Link href="#projects">View My Work</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="#contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
