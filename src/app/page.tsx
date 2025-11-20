import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { Marquee } from '@/components/marquee';
import { MatchCutImage } from '@/components/match-cut-image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Home() {
  const image1 = PlaceHolderImages.find((img) => img.id === 'project-1');
  const image2 = PlaceHolderImages.find((img) => img.id === 'project-2');

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Marquee />
        {image1 && image2 && (
          <div className="py-20 px-4 md:px-8 bg-background">
            <h2 className="text-center font-headline text-mobile-h2 md:text-h2 mb-8">
              Cinematic Match Cut
            </h2>
            <MatchCutImage src1={image1.imageUrl} src2={image2.imageUrl} />
          </div>
        )}
      </main>
    </div>
  );
}