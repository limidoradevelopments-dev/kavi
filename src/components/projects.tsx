import React from 'react';
import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from './ui/button';
import { Github, ExternalLink } from 'lucide-react';
import Link from 'next/link';

const projectsData = [
  {
    id: 'project-1',
    title: 'Modern Web Dashboard',
    description:
      'A responsive and feature-rich dashboard built with Next.js and Tailwind CSS, featuring data visualizations and real-time updates.',
  },
  {
    id: 'project-2',
    title: 'E-commerce Storefront',
    description:
      'A mobile-first e-commerce platform with a focus on user experience, performance, and a seamless checkout process.',
  },
  {
    id: 'project-3',
    title: 'Data Visualization App',
    description:
      'An application for visualizing complex datasets, allowing users to interact with charts and graphs to gain insights.',
  },
];

export function Projects() {
  return (
    <section id="projects" className="w-full py-20 lg:py-32">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Featured Projects
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Here are a few projects I've worked on recently.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projectsData.map((project) => {
            const image = PlaceHolderImages.find((img) => img.id === project.id);
            return (
              <Card key={project.id} className="overflow-hidden transition-shadow duration-300 hover:shadow-2xl">
                {image && (
                  <div className="aspect-video w-full overflow-hidden">
                    <Image
                      src={image.imageUrl}
                      alt={image.description}
                      width={600}
                      height={400}
                      className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                      data-ai-hint={image.imageHint}
                    />
                  </div>
                )}
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardFooter className="flex justify-start gap-4">
                  <Button asChild variant="outline">
                    <Link href="#" target="_blank" rel="noopener noreferrer">
                      <Github /> GitHub
                    </Link>
                  </Button>
                  <Button asChild>
                    <Link href="#" target="_blank" rel="noopener noreferrer">
                      <ExternalLink /> Live Demo
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
