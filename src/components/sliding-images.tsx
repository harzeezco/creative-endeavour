'use client';

import { InfiniteMovingCards } from '@/components/infinite-moving-cards';
import Image from 'next/image';

export function SlidingImages() {
  return (
    <div className='relative mt-14 flex flex-col items-center justify-center overflow-hidden rounded-md antialiased'>
      <InfiniteMovingCards direction='right' speed='slow'>
        {testimonials.map(({ alt, size, src }) => (
          <li
            key={alt}
            className='relative max-w-full shrink-0 rounded-2xl border border-b-0'
          >
            <Image
              alt={alt}
              className='h-full max-h-[450px] rounded-[12px]'
              height={450}
              src={`/images/${src}`}
              width={size}
            />
          </li>
        ))}
      </InfiniteMovingCards>
    </div>
  );
}

const testimonials = [
  {
    src: 'mock7.webp',
    alt: 'Charles Dickens',
    size: 600,
  },
  {
    src: 'mock2.webp',
    alt: 'William Shakespeare',
    size: 600,
  },
  {
    src: 'mock8.webp',
    alt: 'Edgar Allan Poe',
    size: 300,
  },
  {
    src: 'mock6.webp',
    alt: 'Jane Austen',
    size: 600,
  },
  {
    src: 'mock4.webp',
    alt: 'Herman Melville',
    size: 300,
  },
  {
    src: 'mock2.webp',
    alt: 'Herman Melville',
    size: 400,
  },
    {
    src: 'mock5.webp',
    alt: 'Herman Melville',
    size: 600,
  },
  {
    src: 'mock3.webp',
    alt: 'Herman Melville',
    size: 600,
  },
];
