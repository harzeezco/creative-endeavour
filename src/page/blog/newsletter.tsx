'use client';

import { NewsletterForm } from '@/components/newsletter-form';
import { cn } from '@/utils/cn';
import Image from 'next/image';

export const NewsletterSection = () => (
  <section className='container mt-20'>
    <div className='flex min-h-[350px] bg-primary-300 p-10 shadow-sm'>
      <div
        className={cn(
          'flex w-full items-end max-sm:flex-col justify-between',
        )}
      >
        <div className='flex h-full max-w-[606px] flex-1 flex-col justify-between'>
          <div className=''>
            <Image
              alt='image'
              className='object-cover'
              height={30}
              src='/icons/news.svg'
              width={30}
            />
          </div>
          <div>
            <h1 className='max-w-sm text-3xl font-medium text-primary-350 sm:text-4xl lg:text-5xl'>
              Sign up for our newsletter
            </h1>
            <p className='mt-3 max-w-sm text-base text-primary-200'>
              Stay up to date and learn about design, innovation,
              accessibility, and more.
            </p>
          </div>
        </div>

        <div className='md:flex-1'>
          <NewsletterForm />
        </div>
      </div>
    </div>
  </section>
);
