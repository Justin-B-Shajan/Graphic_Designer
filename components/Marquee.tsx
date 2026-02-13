'use client';

interface MarqueeProps {
  text: string;
  speed?: number;
  direction?: 'left' | 'right';
  className?: string;
  repeat?: number;
}

export default function Marquee({
  text,
  speed = 50,
  direction = 'left',
  className = '',
  repeat = 3,
}: MarqueeProps) {
  const animationDirection = direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right';

  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`}>
      <div
        className={`inline-flex ${animationDirection}`}
        style={{
          animationDuration: `${speed}s`,
        }}
      >
        {Array.from({ length: repeat }).map((_, i) => (
          <span key={i} className="px-8">
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}
