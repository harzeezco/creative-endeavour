'use client';

import { TestimonialCarousel } from '@/components/carousel';
import useLocalize from '@/hooks/use-locale';
import { cn } from '@/utils/cn';
import { slideUp } from '@/utils/motion';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

export const Testimonials = () => {
  const { locale, t } = useLocalize('Home');
  const ref = useRef(null);
  const title = t('testimonial-title');
  const desc = t('testimonial-desc');
  const label = t('testimonial-label');
  const isInView = useInView(ref, { amount: 0.3, once: true });

  return (
    <section className='container py-14'>
      <div
        ref={ref}
        className={cn(
          'mb-8 flex justify-between max-sm:flex-col',
          locale === 'en' ? '' : 'flex-row-reverse',
        )}
      >
        <div>
          <div
            className={cn(
              locale === 'en' ? '' : 'flex-row-reverse',
              'flex items-center gap-2 mb-2',
            )}
          >
            <p className='text-lg text-[#111111]'>
              {label.split(' ').map((word, index) => (
                <span
                  key={index}
                  className='relative inline-flex overflow-hidden '
                >
                  <motion.span
                    key={index}
                    animate={isInView ? 'open' : 'closed'}
                    custom={index}
                    variants={slideUp}
                  >
                    {word}
                  </motion.span>
                  <span className='inline-block'>&nbsp;</span>
                </span>
              ))}
            </p>
            <Image
              alt='line'
              height={30}
              src='/icons/line.svg'
              width={50}
            />
          </div>
        </div>

        <div>
          <h1
            className={cn(
              locale === 'en'
                ? 'font-nebulica'
                : 'text-end font-cairo',
              'text-black text-2xl max-w-xl sm:text-3xl lg:text-4xl  md:!leading-[1.1]',
            )}
          >
            {title.split(' ').map((word, index) => (
              <span
                key={index}
                className='relative inline-flex overflow-hidden '
              >
                <motion.span
                  key={index}
                  animate={isInView ? 'open' : 'closed'}
                  custom={index}
                  variants={slideUp}
                >
                  {word}
                </motion.span>
                <span className='inline-block'>&nbsp;</span>
              </span>
            ))}
          </h1>

          <p className='mt-5 max-w-[650px] text-lg'>
            {desc.split(' ').map((word, index) => (
              <span
                key={index}
                className='relative inline-flex overflow-hidden '
              >
                <motion.span
                  key={index}
                  animate={isInView ? 'open' : 'closed'}
                  custom={index}
                  variants={slideUp}
                >
                  {word}
                </motion.span>
                <span className='inline-block'>&nbsp;</span>
              </span>
            ))}
          </p>
        </div>
      </div>

      <TestimonialCarousel isInView={isInView} />
    </section>
  );
};
