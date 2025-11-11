import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Code, Database, Wrench } from 'lucide-react';

const skillsData = [
  {
    category: 'Frontend',
    icon: <Code className="h-6 w-6 text-primary" />,
    skills: [
      'React',
      'Next.js',
      'TypeScript',
      'JavaScript (ES6+)',
      'HTML5 & CSS3',
      'Tailwind CSS',
      'Framer Motion',
    ],
  },
  {
    category: 'Backend',
    icon: <Database className="h-6 w-6 text-primary" />,
    skills: [
      'Node.js',
      'Express',
      'Python',
      'REST APIs',
      'GraphQL',
      'Firebase',
      'PostgreSQL',
    ],
  },
  {
    category: 'Tools & DevOps',
    icon: <Wrench className="h-6 w-6 text-primary" />,
    skills: ['Git & GitHub', 'Docker', 'Vercel', 'Figma', 'Jest', 'Webpack'],
  },
];

export function Skills() {
  return (
    <section id="skills" className="w-full bg-secondary/50 py-20 lg:py-32">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Skills & Technologies
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A look at the tools and technologies I use to bring ideas to life.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skillsData.map((group) => (
            <Card key={group.category} className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <CardHeader className="flex flex-row items-center gap-4">
                {group.icon}
                <CardTitle>{group.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
