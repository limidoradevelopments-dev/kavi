import Image from 'next/image';

const marqueeItems = [
  'UI/UX DESIGN',
  'WEB DESIGN',
  'GRAPHIC DESIGN',
  'UI/UX DESIGN',
  'WEB DESIGN',
  'GRAPHIC DESIGN',
];

const MarqueeItem = ({ text }: { text: string }) => (
  <div className="inline-flex items-center gap-2.5 flex-shrink-0">
    <Image width={31} height={29} alt="" src="/symbol-decoration.svg" />
    <span className="font-headline text-mobile-h4 md:text-h5 text-white whitespace-nowrap">
      {text}
    </span>
    <Image width={31} height={29} alt="" src="/symbol-decoration.svg" />
  </div>
);

export function Marquee() {
  return (
    <section className="relative w-full overflow-hidden bg-black/90 py-3 lg:py-5 mt-4">
      <div className="marquee-track">
        {[...marqueeItems, ...marqueeItems].map((text, index) => (
          <MarqueeItem key={index} text={text} />
        ))}
      </div>
    </section>
  );
}
