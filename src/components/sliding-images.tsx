'use client';

import { InfiniteMovingCards } from '@/components/infinite-moving-cards';
import Image from 'next/image';

import SlideInAnimation from './slide-in-animation';

export function SlidingImages() {
  return (
    <SlideInAnimation
      as='div'
      className='relative mt-16 flex flex-col items-center justify-center overflow-x-hidden antialiased max-sm:hidden'
      delay={0.6}
    >
      <InfiniteMovingCards direction='right' speed='slow'>
        {testimonials.map(({ alt, size, src }) => (
          <li key={alt} className='relative max-w-full'>
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
    src: 'hero-1.png',
    alt: 'Mock1',
    size: 750,
  },
  {
    src: 'hero-2.png',
    alt: 'Mock2',
    size: 730,
  },
  {
    src: 'hero-3.png',
    alt: 'Mock3',
    size: 650,
  },
  {
    src: 'hero-4.png',
    alt: 'Mock4',
    size: 750,
  },
  {
    src: 'hero-5.png',
    alt: 'Mock5',
    size: 650,
  },
  {
    src: 'hero-6.png',
    alt: 'Mock',
    size: 650,
  },
];
