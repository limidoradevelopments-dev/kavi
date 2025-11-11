import React from 'react';
import { Button } from './ui/button';
import { Github, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';

const contactMethods = [
  {
    icon: <Mail className="h-6 w-6" />,
    label: 'Email',
    value: 'hello@example.com',
    href: 'mailto:hello@example.com',
  },
  {
    icon: <Linkedin className="h-6 w-6" />,
    label: 'LinkedIn',
    value: 'linkedin.com/in/alex-doe',
    href: 'https://linkedin.com',
  },
  {
    icon: <Github className="h-6 w-6" />,
    label: 'GitHub',
    value: 'github.com/alex-doe',
    href: 'https://github.com',
  },
];

export function Contact() {
  return (
    <section id="contact" className="w-full bg-secondary/50 py-20 lg:py-32">
      <div className="container mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
          Get in Touch
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          I'm currently open to new opportunities and collaborations. Feel free to
          reach out!
        </p>
        <div className="mt-12 flex flex-col justify-center gap-8 sm:flex-row sm:flex-wrap">
          {contactMethods.map((method) => (
            <Button
              key={method.label}
              asChild
              variant="ghost"
              className="h-auto transform p-4 transition-transform duration-300 hover:scale-105 hover:bg-accent/20"
            >
              <Link
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4"
              >
                <div className="rounded-full bg-primary/10 p-3 text-primary">
                  {method.icon}
                </div>
                <div className="text-left">
                  <h3 className="font-semibold">{method.label}</h3>
                  <p className="text-sm text-muted-foreground">{method.value}</p>
                </div>
              </Link>
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
}
