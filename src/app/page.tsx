import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { Marquee } from '@/components/marquee';
import { AboutStory } from '@/components/about-story';
import { SectionCinematicReveal } from '@/components/section-cinematic-reveal';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <SectionCinematicReveal nextSectionId="about-story">
          <Hero />
          <Marquee />
        </SectionCinematicReveal>
        <AboutStory />
      </main>
    </div>
  );
}
