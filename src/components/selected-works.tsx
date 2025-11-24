import React from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function SelectedWorks() {
  const projectImage = PlaceHolderImages.find((p) => p.id === 'project-1');

  return (
    <section
      id="selected-works"
      className="w-full py-16 md:py-20 lg:py-24 bg-background"
    >
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-16">
          {/* Left Column */}
          <div className="flex flex-col mb-8 md:mb-0">
            <p className="text-[12px] font-body tracking-[0.2em] mb-4 text-foreground/80">
              FEATURED SELECTED WORKS
            </p>
            <h2 className="font-headline text-mobile-h1 md:text-tablet-h1 lg:text-h1 leading-none text-foreground/90">
              Project Title
            </h2>
            <p className="font-headline text-mobile-h5 md:text-tablet-h5 lg:text-h5 text-foreground/70 mt-2">
              D&amp;D by Kavi
            </p>
          </div>

          {/* Right Column */}
          <div className="max-w-xs text-foreground/80 text-left md:text-right mt-4 md:mt-0 pt-2">
            <p className="text-sm">
              2024 Longread with typography emphasis dedicated to the talented
              singer
            </p>
          </div>
        </div>

        {/* Image Section */}
        <div className="relative flex justify-center items-center">
          {/* Background Blurred Image */}
          {projectImage && (
            <div className="absolute inset-0 w-full h-full overflow-hidden flex justify-center items-center">
              <Image
                src={projectImage.imageUrl}
                alt="Blurred background of the project"
                width={1080}
                height={720}
                className="w-full h-full object-cover scale-110 filter blur-md"
                data-ai-hint={projectImage.imageHint}
              />
              <div className="absolute inset-0 bg-background/60"></div>
            </div>
          )}

          {/* Foreground Image with Border */}
          <div className="relative w-full max-w-4xl p-4 bg-black shadow-2xl">
            {projectImage && (
              <Image
                src={projectImage.imageUrl}
                alt={projectImage.description}
                width={1080}
                height={720}
                className="w-full h-auto"
                data-ai-hint={projectImage.imageHint}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
