import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { Marquee } from '@/components/marquee';
import { AboutStory } from '@/components/about-story';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Marquee />
        <AboutStory />
      </main>
    </div>
  );
}
