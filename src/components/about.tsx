import React from 'react';
import { AiAboutGenerator } from './ai-about-generator';

export function About() {
  return (
    <section id="about" className="w-full py-20 lg:py-32">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
              About Me
            </h2>
            <p className="text-muted-foreground">
              I am a passionate and creative developer with a knack for building
              beautiful, functional, and user-centric web applications. With a
              background in both design and engineering, I bridge the gap
              between aesthetics and performance.
            </p>
            <p className="text-muted-foreground">
              My journey in tech started with a fascination for how things work,
              which quickly evolved into a career dedicated to crafting seamless
              digital experiences. I thrive in collaborative environments and am
              always eager to learn new technologies and take on challenging
              projects.
            </p>
          </div>
          <AiAboutGenerator />
        </div>
      </div>
    </section>
  );
}
