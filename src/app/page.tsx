import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { Marquee } from '@/components/marquee';
import { AboutStory } from '@/components/about-story';
import { SectionCinematicReveal } from '@/components/section-cinematic-reveal';
import { SelectedWorks } from '@/components/selected-works';
import { ContactSection } from '@/components/contact-section';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <SectionCinematicReveal>
          <Hero />
          <Marquee />
        </SectionCinematicReveal>
        <SectionCinematicReveal>
          <AboutStory />
        </SectionCinematicReveal>
        <SelectedWorks />
        <ContactSection />
      </main>
    </div>
  );
}
