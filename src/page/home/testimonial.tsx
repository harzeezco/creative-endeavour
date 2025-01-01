'use client';

import { TestimonialCarousel } from '@/components/carousel';
import useLocalize from '@/hooks/use-locale';
import { cn } from '@/utils/cn';
import Image from 'next/image';

export const Testimonials = () => {
  const { locale, t } = useLocalize('Home');

  return (
    <section className='container py-14'>
      <div className='mb-8 flex justify-between max-sm:flex-col'>
        <div>
          <p
            className={cn(
              locale === 'en' ? '' : 'flex-row-reverse',
              'flex items-center gap-2 mb-2',
            )}
          >
            <span className='text-lg text-[#111111]'>
              {t('testimonial-label')}
            </span>
            <Image
              alt='line'
              height={30}
              src='/icons/line.svg'
              width={50}
            />
          </p>
        </div>

        <div>
          <h1
            className={cn(
              'font-nebulica text-black text-2xl max-w-xl sm:text-3xl lg:text-4xl  md:!leading-[1.1]',
            )}
          >
            {t('testimonial-title')}
          </h1>

          <p className='mt-5 max-w-[650px] text-lg'>
            {t('testimonial-desc')}
          </p>
        </div>
      </div>

      <TestimonialCarousel />
    </section>
  );
};
