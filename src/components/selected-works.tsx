import React from 'react';
import Image from 'next/image';

export function SelectedWorks() {
  const projectImageSrc = '/works/work-1.png';

  return (
    <section
      id="selected-works"
      className="w-full bg-background "
    >
      <div>
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start py-7 px-4 bg-black/90">
          {/* Left Column */}
          <div className="flex flex-col mb-8 md:mb-0">
            <p className="text-[12px] font-body tracking-[0.2em] mb-4 text-white">
              * FEATURED SELECTED WORKS *
            </p>
            <h2 className="font-headline text-mobile-h2 md:text-tablet-h2 lg:text-h2 leading-none text-white">
              N Group Products
            </h2>
            <p className="font-headline text-mobile-h5 md:text-tablet-h5 lg:text-h5 text-white/70 mt-2">
              D&amp;D by Kavi
            </p>
          </div>

          {/* Right Column */}
          <div className="max-w-xs text-white text-left md:text-right mt-4 md:mt-0 ">
            <p className="text-sm">
              2024 Longread with typography emphasis dedicated to the talented
              singer
            </p>
          </div>
        </div>

        {/* Image Section */}
        <div className="relative flex justify-center items-center">
          {/* Background Blurred Image */}
          <div className="absolute inset-0 w-full h-full overflow-hidden flex justify-center items-center">
            <Image
              src={projectImageSrc}
              alt="Blurred background of the project"
              width={1080}
              height={720}
              className="w-full h-full object-cover scale-110 filter blur-md"
            />
            <div className="absolute inset-0 bg-background/60"></div>
          </div>

          {/* Foreground Image with Border */}
          <div className="relative w-full max-w-4xl p-6 ">
            <Image
              src={projectImageSrc}
              alt="A screenshot of a modern web application dashboard called 'Molisem'."
              width={1080}
              height={720}
              className="w-full h-auto "
            />
          </div>
        </div>
      </div>
    </section>
  );
}
