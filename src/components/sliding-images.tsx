'use client';

import { InfiniteMovingCards } from '@/components/infinite-moving-cards';
import Image from 'next/image';
import SlideInAnimation from './slide-in-animation';

export function SlidingImages() {
  return (
    <SlideInAnimation as='div' className='relative mt-14 flex flex-col items-center justify-center overflow-x-hidden antialiased' delay={0.6}>
      <InfiniteMovingCards direction='right' speed='slow'>
        {testimonials.map(({ alt, size, src }) => (
          <li
            key={alt}
            className='relative max-w-full'
          >
            <Image
              alt={alt}
              className='h-full max-h-[470px]'
              height={470}
              src={`/images/${src}`}
              width={size}
            />
          </li>
        ))}
      </InfiniteMovingCards>
    </SlideInAnimation>
  );
}

const testimonials = [
  {
    src: 'mock7.png',
    alt: 'Mock1',
    size: 750,
  },
  {
    src: 'mock2.webp',
    alt: 'Mock2',
    size: 730,
  },
  {
    src: 'mock8.png',
    alt: 'Mock3',
    size: 350,
  },
  {
    src: 'mock6.webp',
    alt: 'Mock4',
    size: 750,
  },
  {
    src: 'mock4.webp',
    alt: 'Mock5',
    size: 350,
  },
  {
    src: 'mock2.webp',
    alt: 'Mock1=5',
    size: 450,
  },
  {
    src: 'mock5.webp',
    alt: 'Mock6',
    size: 750,
  },
  {
    src: 'mock3.webp',
    alt: 'Mock7',
    size: 750,
  },
];
