import Image from 'next/image';
import { cn } from '@/lib/utils';

const marqueeItems = [
  'UI/UX DESIGN',
  'WEB DESIGN',
  'GRAPHIC DESIGN',
  'UI/UX DESIGN',
  'WEB DESIGN',
  'GRAPHIC DESIGN',
  'GRAPHIC DESIGN',
  'GRAPHIC DESIGN',
  'GRAPHIC DESIGN',
  'GRAPHIC DESIGN',
  'GRAPHIC DESIGN',
  'GRAPHIC DESIGN',
];

const MarqueeItem = ({ text }: { text: string }) => (
  <div className="inline-flex items-center gap-2.5 flex-shrink-0">
    <Image width={31} height={29} alt="Decorative icon" src="/symbol-decoration.svg" />
    <span className="font-headline text-mobile-h4 md:text-h5 text-muted-foreground whitespace-nowrap">
      {text}
    </span>
    <Image width={31} height={29} alt="Decorative icon" src="/symbol-decoration.svg" />
  </div>
);

export function Marquee() {
  return (
    <section className="flex flex-col items-center justify-center gap-2.5 self-stretch w-full bg-[#f7f7f7] overflow-hidden py-6 mt-[5rem]">
      <div className="inline-flex items-center justify-center gap-[53px] animate-marquee">
        {marqueeItems.map((text, index) => (
          <MarqueeItem key={index} text={text} />
        ))}
      </div>
    </section>
  );
}
