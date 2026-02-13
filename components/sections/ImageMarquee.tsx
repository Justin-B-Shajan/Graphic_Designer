'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

interface ImageMarqueeProps {
  images: string[];
  speed?: number;
  direction?: 'left' | 'right';
  className?: string;
}

export default function ImageMarquee({
  images,
  speed = 30,
  direction = 'left',
  className = '',
}: ImageMarqueeProps) {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!marqueeRef.current) return;

    const marquee = marqueeRef.current;
    const animationDuration = speed;
    const isLeft = direction === 'left';

    marquee.style.setProperty('--duration', `${animationDuration}s`);
    marquee.style.setProperty('--direction', isLeft ? 'normal' : 'reverse');
  }, [speed, direction]);

  // Duplicate images for seamless loop
  const duplicatedImages = [...images, ...images];

  return (
    <div className={`overflow-hidden ${className}`}>
      <div
        ref={marqueeRef}
        className="flex gap-6 animate-marquee-left"
        style={{
          animationDuration: `${speed}s`,
          animationDirection: direction === 'left' ? 'normal' : 'reverse',
        }}
      >
        {duplicatedImages.map((image, index) => (
          <div
            key={`${image}-${index}`}
            className="flex-shrink-0 w-64 md:w-80 h-48 md:h-64 rounded-lg overflow-hidden shadow-lg"
          >
            <Image
              src={image}
              alt={`Marquee image ${index}`}
              width={320}
              height={256}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
